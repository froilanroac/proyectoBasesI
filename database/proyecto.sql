CREATE TABLE organizaciones_caridad (
    id NUMBER CONSTRAINT clave_primaria PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    descripcion VARCHAR(50)
);

CREATE TABLE paises (
    id NUMBER CONSTRAINT clave_primaria PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    continente CHAR(10) NOT NULL,
    nacionalidad VARCHAR(50) NOT NULL,
    CONSTRAINT continentes CHECK (continente in ('A','EU','AS','AFR','OC'))
);

CREATE TABLE ciudades ( 
    id NUMBER NOT NULL,
    id_pais NUMBER NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    CONSTRAINT pk_ciudad PRIMARY KEY (id, id_pais),
    CONSTRAINT fk_pais FOREIGN KEY (id_pais) REFERENCES paises (id)
);

CREATE TABLE intereses (
    id NUMBER CONSTRAINT clave_primaria PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL UNIQUE
); 

CREATE TABLE lugares_subasta (
    id NUMBER NOT NULL,
    calle VARCHAR(50) NOT NULL,
    avenida VARCHAR(50) NOT NULL,
    id_ciudad NUMBER NOT NULL,
    id_pais NUMBER NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    nombre_lugar VARCHAR(50),
    CONSTRAINT pk_lugar_subasta PRIMARY KEY (id),
    CONSTRAINT fk_lugar_subasta FOREIGN KEY (id_ciudad,id_pais) REFERENCES ciudades (id,id_pais)
);

CREATE TABLE representantes (
    id NUMBER NOT NULL,
    nombre1_repre VARCHAR(50) NOT NULL,
    apellido1_repre VARCHAR(50) NOT NULL,
    cedula NUMBER NOT NULL,
    nombre2_repre VARCHAR(50),
    apellido2_repre VARCHAR(50),
    CONSTRAINT pk_representantes PRIMARY KEY (id)
);

CREATE TABLE coleccionistas (
    cedula NUMBER NOT NULL,
    nombre_1 VARCHAR(50) NOT NULL,
    apellido1 VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    id_ciudad NUMBER NOT NULL,
    id_pais NUMBER NOT NULL,
    apellido2 VARCHAR(50) NOT NULL,
    id_pais_nac NUMBER NOT NULL,
    nombre2 VARCHAR(50),
    cedula_representante NUMBER,
    id_representante NUMBER,
    CONSTRAINT pk_coleccionista PRIMARY KEY (cedula),
    CONSTRAINT fk_coleccionista_ciudad FOREIGN KEY (id_ciudad,id_pais) REFERENCES ciudades (id,id_pais),
    CONSTRAINT fk_coleccionista_pais_nac FOREIGN KEY (id_pais_nac) REFERENCES paises (id),
    CONSTRAINT fk_coleccionista_repre_col FOREIGN KEY (cedula_representante) REFERENCES coleccionistas (cedula),
    CONSTRAINT fk_coleccionista_repre FOREIGN KEY (id_representante) REFERENCES representantes (id),
);

CREATE TABLE objetos_de_valor (
    id NUMBER NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    fecha_fabricacion DATE,
    CONSTRAINT pk_objeto PRIMARY KEY (id)
);

CREATE TABLE comics (
    id NUMBER NOT NULL,
    fecha_publicacion DATE NOT NULL,
    sinopsis VARCHAR(50) NOT NULL,
    editor VARCHAR(50) NOT NULL,
    paginas NUMBER NOT NULL,
    color BOOLEAN NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    numero NUMBER NOT NULL,
    precio_org VARCHAR(50),
    -- REVISAR ESTE TIPO DE DATO (PRECIO_ORG)
    vol_numero NUMBER,
    CONSTRAINT pk_comic PRIMARY KEY (id)
);

CREATE TABLE clubes (
    id NUMBER NOT NULL,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    fecha_fund DATE, NOT NULL
    id_ciudad NUMBER NOT NULL,
    id_pais NUMBER NOT NULL,
    fechainicio_memb_resp DATE,
    id_club NUMBER,
    cedula_responsable NUMBER,
    pagina_web VARCHAR(50),
    CONSTRAINT pk_club PRIMARY KEY (id),
    CONSTRAINT fk_clubes_ciudad FOREIGN KEY (id_ciudad,id_pais) REFERENCES ciudades (id,id_pais),
    CONSTRAINT fk_clubes_membre_resp FOREIGN KEY (fechainicio_memb_resp,id_club,cedula_responsable) REFERENCES membresias (fecha_inicio,id_club,cedula_coleccionista)
    CONSTRAINT u_responsable UNIQUE (fechainicio_memb_resp,id_club,cedula_responsable)
);

CREATE TABLE membresias (
    fecha_inicio DATE NOT NULL,
    cedula_coleccionista NUMBER NOT NULL,
    id_club NUMBER NOT NULL,
    email VARCHAR(50) NOT NULL,
    fecha_fin DATE,
    CONSTRAINT pk_membresias PRIMARY KEY (fecha_inicio,cedula_coleccionista,id_club),
    CONSTRAINT fk_membresias_coleccionista FOREIGN KEY (cedula_coleccionista) REFERENCES coleccionistas (cedula),
    CONSTRAINT fk_membresias_club FOREIGN KEY (id_club) REFERENCES clubes (id)
);



CREATE TABLE historicos_obj_per (
    id NUMBER NOT NULL,
    cedula_coleccionista NUMBER NOT NULL,
    fecha_registro DATE NOT NULL,
    precion_compra$ NUMBER,
    significado VARCHAR(50),
    id_comic NUMBER,
    id_objeto_valor NUMBER,
    CONSTRAINT pk_historico_objeto PRIMARY KEY (id),
    CONSTRAINT fk_historicos_colecionista FOREIGN KEY (cedula_coleccionista) REFERENCES coleccionistas (cedula),
    CONSTRAINT fk_historicos_comic FOREIGN KEY (id_comic) REFERENCES comics (id),
    CONSTRAINT fk_historicos_objeto FOREIGN KEY (id_objeto_valor) REFERENCES objetos_de_valor (id)

); 

CREATE TABLE subastas (
    id NUMBER NOT NULL,
    hora_inicio DATE NOT NULL,
    hora_fin DATE NOT NULL,
    fecha DATE NOT NULL,
    modo CHAR(5) NOT NULL,
    tipo CHAR(5) NOT NULL,
    caridad CHAR(5) NOT NULL,
    id_lugar NUMBER NOT NULL,
    CONSTRAINT pk_subasta PRIMARY KEY (id),
    CONSTRAINT fk_lugar_subasta FOREIGN KEY (id_lugar) REFERENCES lugares_subasta (id),
    CONSTRAINT modo_subasta CHECK (modo in ('PRE','VIR')),
    CONSTRAINT tipo_subasta CHECK (modo in ('A','S')),
    CONSTRAINT caridad_subasta CHECK (modo in ('S','N')),
);

CREATE TABLE inscripciones (
    id NUMBER NOT NULL,
    id_subasta NUMBER NOT NULL,
    membresia_fechainicio DATE NOT NULL,
    id_club NUMBER NOT NULL,
    cedula_coleccionista NUMBER NOT NULL,
    autorizado BOOLEAN,
    CONSTRAINT pk_inscripciones PRIMARY KEY (id),
    CONSTRAINT fk_inscripciones_subasta FOREIGN KEY (id_subasta) REFERENCES subastas (id),
    CONSTRAINT fk_inscripciones_membresias FOREIGN KEY (membresia_fechainicio,id_club,cedula_coleccionista) REFERENCES membresias (fecha_inicio,id_club,cedula_coleccionista)
);

CREATE TABLE s_c (
    id NUMBER NOT NULL,
    id_subasta NUMBER NOT NULL,
    id_club NUMBER,
    club_invitado NUMBER,
    CONSTRAINT pk_s_c PRIMARY KEY (id),
    CONSTRAINT fk_s_c_subasta FOREIGN KEY (id_subasta) REFERENCES subastas (id),
    CONSTRAINT fk_s_c_club FOREIGN KEY (id_club) REFERENCES clubes (id),
    CONSTRAINT fk_s_c_club_invitado FOREIGN KEY (club_invitado) REFERENCES clubes (id),

);

CREATE TABLE c_i (
    id_club NUMBER NOT NULL,
    id_interes NUMBER NOT NULL,
    CONSTRAINT pk_c_i PRIMARY KEY (id_club,id_interes),
    CONSTRAINT fk_c_i_club FOREIGN KEY (id_club) REFERENCES clubes (id),
    CONSTRAINT fk_c_i_interes FOREIGN KEY (id_interes) REFERENCES intereses (id),

);

CREATE TABLE registros_beneficio (
    id NUMBER NOT NULL,
    id_organizacion NUMBER NOT NULL,
    id_subasta NUMBER NOT NULL,
    porcentaje NUMBER NOT NULL,
    dinero_donado$ NUMBER,
    CONSTRAINT pk_registros_beneficio PRIMARY KEY (id),
    CONSTRAINT fk_registros_beneficio_organizacion FOREIGN KEY (id_organizacion) REFERENCES organizaciones_caridad (id),
    CONSTRAINT fk_registros_beneficio_subasta FOREIGN KEY (id_subasta) REFERENCES subastas (id)
    
);

CREATE TABLE ordenes_venta_subasta (
    id NUMBER NOT NULL,
    id_subasta NUMBER NOT NULL,
    precio_base$ NUMBER NOT NULL,
    id_historico NUMBER NOT NULL,
    cedula_coleccionista NUMBER NOT NULL,
    fecha_registro DATE NOT NULL,
    numero_en_subasta NUMBER,
    duracion_puja_min NUMBER,
    precio_venta NUMBER,
    id_insc_ganador NUMBER,
    id_subasta NUMBER,
    CONSTRAINT pk_ordenes_venta_subasta PRIMARY KEY (id),
    CONSTRAINT fk_ordenes_venta_subasta_subasta FOREIGN KEY (id_subasta) REFERENCES subastas (id),
    CONSTRAINT fk_ordenes_venta_subasta_historico FOREIGN KEY (id_historico,cedula_coleccionista,fecha_registro) REFERENCES historicos_obj_per (id,cedula_coleccionista,fecha_registro)

);


