CREATE TABLE organizaciones_caridad (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    descripcion VARCHAR(50),
    CONSTRAINT pk_organizacion_caridad PRIMARY KEY (id)
);

CREATE TABLE paises (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    continente CHAR(10) NOT NULL,
    nacionalidad VARCHAR(50) NOT NULL,
    CONSTRAINT pk_paises PRIMARY KEY (id),
    CONSTRAINT continentes CHECK (continente in ('A','EU','AS','AFR','OC'))
);

CREATE TABLE ciudades ( 
    id INT AUTO_INCREMENT,
    id_pais INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    CONSTRAINT pk_ciudad PRIMARY KEY (id, id_pais),
    CONSTRAINT fk_pais FOREIGN KEY (id_pais) REFERENCES paises (id)
);

CREATE TABLE intereses (
    id INT AUTO_INCREMENT,
    descripcion VARCHAR(50) NOT NULL UNIQUE,
    CONSTRAINT pk_intereses PRIMARY KEY (id)
); 

CREATE TABLE lugares_subasta (
    id INT AUTO_INCREMENT,
    calle VARCHAR(50) NOT NULL,
    avenida VARCHAR(50) NOT NULL,
    id_ciudad INT NOT NULL,
    id_pais INT NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    nombre_lugar VARCHAR(50),
    CONSTRAINT pk_lugares_subasta PRIMARY KEY (id),
    CONSTRAINT fk_lugares_subasta FOREIGN KEY (id_ciudad,id_pais) REFERENCES ciudades (id,id_pais)
);

CREATE TABLE representantes (
    id INT AUTO_INCREMENT,
    nombre1_repre VARCHAR(50) NOT NULL,
    apellido1_repre VARCHAR(50) NOT NULL,
    cedula INT NOT NULL,
    nombre2_repre VARCHAR(50),
    apellido2_repre VARCHAR(50),
    CONSTRAINT pk_representantes PRIMARY KEY (id)
);

CREATE TABLE coleccionistas (
    cedula INT,
    nombre_1 VARCHAR(50) NOT NULL,
    apellido1 VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    id_ciudad INT NOT NULL,
    id_pais INT NOT NULL,
    apellido2 VARCHAR(50) NOT NULL,
    id_pais_nac INT NOT NULL,
    nombre2 VARCHAR(50),
    cedula_representante INT,
    id_representante INT,
    CONSTRAINT pk_coleccionista PRIMARY KEY (cedula),
    CONSTRAINT fk_coleccionista_ciudad FOREIGN KEY (id_ciudad,id_pais) REFERENCES ciudades (id,id_pais),
    CONSTRAINT fk_coleccionista_pais_nac FOREIGN KEY (id_pais_nac) REFERENCES paises (id),
    CONSTRAINT fk_coleccionista_repre_coleccionista FOREIGN KEY (cedula_representante) REFERENCES coleccionistas (cedula),
    CONSTRAINT fk_coleccionista_repre FOREIGN KEY (id_representante) REFERENCES representantes (id)
);

CREATE TABLE objetos_de_valor (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    fecha_fabricacion DATE,
    CONSTRAINT pk_objeto PRIMARY KEY (id)
);

CREATE TABLE comics (
    id INT AUTO_INCREMENT,
    fecha_publicacion DATE NOT NULL,
    sinopsis VARCHAR(50) NOT NULL,
    editor VARCHAR(50) NOT NULL,
    paginas INT NOT NULL,
    color BOOLEAN NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    numero INT NOT NULL,
    precio_org$ INT,
    vol_numero INT,
    CONSTRAINT pk_comic PRIMARY KEY (id)
);

CREATE TABLE clubes (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    fecha_fund DATE NOT NULL,
    id_ciudad INT NOT NULL,
    id_pais INT NOT NULL,
    pagina_web VARCHAR(50),
    proposito VARCHAR(50),
    CONSTRAINT pk_club PRIMARY KEY (id),
    CONSTRAINT fk_clubes_ciudad FOREIGN KEY (id_ciudad,id_pais) REFERENCES ciudades (id,id_pais)
);

CREATE TABLE membresias (
    fecha_inicio DATE,
    cedula_coleccionista INT,
    id_club INT,
    email VARCHAR(50) NOT NULL,
    id_club_responsable INT, 
    fecha_fin DATE,
    CONSTRAINT pk_membresias PRIMARY KEY (fecha_inicio,cedula_coleccionista,id_club),
    CONSTRAINT fk_membresias_coleccionista FOREIGN KEY (cedula_coleccionista) REFERENCES coleccionistas (cedula),
    CONSTRAINT fk_membresias_club FOREIGN KEY (id_club) REFERENCES clubes (id),
    CONSTRAINT fk_membresia_responsable_club FOREIGN KEY (id_club_responsable) REFERENCES clubes (id)
);



CREATE TABLE historicos_duenos (
    id INT AUTO_INCREMENT,
    cedula_coleccionista INT,
    fecha_registro DATE,
    precion_compra$ INT,
    significado VARCHAR(50),
    id_comic INT,
    id_objeto_valor INT,
    CONSTRAINT pk_historico_duenos PRIMARY KEY (id,cedula_coleccionista,fecha_registro),
    CONSTRAINT fk_historico_duenos_colecionista FOREIGN KEY (cedula_coleccionista) REFERENCES coleccionistas (cedula),
    CONSTRAINT fk_historico_duenos_comic FOREIGN KEY (id_comic) REFERENCES comics (id),
    CONSTRAINT fk_historico_duenos_objeto FOREIGN KEY (id_objeto_valor) REFERENCES objetos_de_valor (id)
); 

CREATE TABLE subastas (
    id INT AUTO_INCREMENT,
    hora_inicio DATE NOT NULL,
    hora_fin DATE NOT NULL,
    fecha DATE NOT NULL,
    modo CHAR(5) NOT NULL,
    tipo CHAR(5) NOT NULL,
    caridad CHAR(5) NOT NULL,
    cancelada CHAR(5) NOT NULL,
    id_lugar INT,
    CONSTRAINT pk_subasta PRIMARY KEY (id),
    CONSTRAINT fk_lugar_subasta FOREIGN KEY (id_lugar) REFERENCES lugares_subasta (id),
    CONSTRAINT modo_subasta CHECK (modo in ('PRE','VIR')),
    CONSTRAINT tipo_subasta CHECK (modo in ('A','S')),
    CONSTRAINT caridad_subasta CHECK (modo in ('SI','NO')),
    CONSTRAINT subasta_cancelada CHECK (modo in ('SI','NO'))
);

CREATE TABLE inscripciones (
    id INT AUTO_INCREMENT,
    id_subasta INT,
    membresia_fechainicio DATE NOT NULL,
    cedula_coleccionista INT NOT NULL,
    id_club INT NOT NULL,
    autorizado BOOLEAN NOT NULL,
    CONSTRAINT pk_inscripciones PRIMARY KEY (id,id_subasta),
    CONSTRAINT fk_inscripciones_subasta FOREIGN KEY (id_subasta) REFERENCES subastas (id),
    CONSTRAINT fk_inscripciones_membresias FOREIGN KEY (membresia_fechainicio,cedula_coleccionista,id_club) REFERENCES membresias (fecha_inicio,cedula_coleccionista,id_club)
);


CREATE TABLE s_c (
    id INT AUTO_INCREMENT,
    id_subasta INT NOT NULL,
    id_club INT,
    club_invitado INT,
    CONSTRAINT pk_s_c PRIMARY KEY (id,id_subasta),
    CONSTRAINT fk_s_c_subasta FOREIGN KEY (id_subasta) REFERENCES subastas (id),
    CONSTRAINT fk_s_c_club FOREIGN KEY (id_club) REFERENCES clubes (id),
    CONSTRAINT fk_s_c_club_invitado FOREIGN KEY (club_invitado) REFERENCES clubes (id)

);

CREATE TABLE c_i (
    id_club INT,
    id_interes INT,
    CONSTRAINT pk_c_i PRIMARY KEY (id_club,id_interes),
    CONSTRAINT fk_c_i_club FOREIGN KEY (id_club) REFERENCES clubes (id),
    CONSTRAINT fk_c_i_interes FOREIGN KEY (id_interes) REFERENCES intereses (id)

);

CREATE TABLE registros_beneficio (
    id INT AUTO_INCREMENT,
    id_organizacion INT,
    id_subasta INT,
    porcentaje INT NOT NULL,
    dinero_donado$ INT,
    CONSTRAINT pk_registros_beneficio PRIMARY KEY (id,id_organizacion,id_subasta,porcentaje),
    CONSTRAINT fk_registros_beneficio_organizacion FOREIGN KEY (id_organizacion) REFERENCES organizaciones_caridad (id),
    CONSTRAINT fk_registros_beneficio_subasta FOREIGN KEY (id_subasta) REFERENCES subastas (id)
);

CREATE TABLE ordenes_venta_subasta (
    id INT AUTO_INCREMENT,
    id_subasta INT NOT NULL,
    precio_base$ INT NOT NULL,
    id_historico INT NOT NULL,
    cedula_coleccionista INT NOT NULL,
    fecha_registro DATE NOT NULL,
    numero_en_subasta INT,
    duracion_puja_min INT,
    precio_venta INT,
    id_insc_ganador INT,
    id_subasta_ganador INT,
    CONSTRAINT pk_ordenes_venta_subasta PRIMARY KEY (id,id_subasta),
    CONSTRAINT fk_ordenes_venta_subasta_subasta FOREIGN KEY (id_subasta) REFERENCES subastas (id),
    CONSTRAINT fk_ordenes_venta_subasta_ganador FOREIGN KEY (id_insc_ganador,id_subasta_ganador) REFERENCES inscripciones (id,id_subasta),
    CONSTRAINT fk_ordenes_venta_subasta_historico_dueno FOREIGN KEY (id_historico,cedula_coleccionista,fecha_registro) REFERENCES historicos_duenos (id,cedula_coleccionista,fecha_registro)

);

CREATE TABLE contactos_club (
    id INT AUTO_INCREMENT,
    id_club INT NOT NULL,
    telefono INT NOT NULL,
    CONSTRAINT pk_contacto PRIMARY KEY (id,id_club),
    CONSTRAINT fk_contacto_club FOREIGN KEY (id_club) REFERENCES clubes (id)
);


