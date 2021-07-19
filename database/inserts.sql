
insert into paises (nombre,continente,nacionalidad) values ('Venezuela','A','Venezolana');
insert into paises (nombre,continente,nacionalidad) values ('Colombia','A','Colombiana');
insert into paises (nombre,continente,nacionalidad) values ('España','EU','Española');
insert into paises (nombre,continente,nacionalidad) values ('Francia','EU','Francesa');
insert into paises (nombre,continente,nacionalidad) values ('Austria','EU','Austriaca');
insert into paises (nombre,continente,nacionalidad) values ('Peru','A','Peruana');
insert into paises (nombre,continente,nacionalidad) values ('Chile','A','Chilena');
insert into paises (nombre,continente,nacionalidad) values ('Ecuador','A','Ecuatoriana');
insert into paises (nombre,continente,nacionalidad) values ('Alemania','EU','Alemana');


insert into ciudades (id_pais,nombre) values (1,'Caracas');
insert into ciudades (id_pais,nombre) values (2,'Medellin');
insert into ciudades (id_pais,nombre) values (3,'Madrid');
insert into ciudades (id_pais,nombre) values (4,'Paris');
insert into ciudades (id_pais,nombre) values (5,'Viena');
insert into ciudades (id_pais,nombre) values (6,'Lima');
insert into ciudades (id_pais,nombre) values (7,'Santiago de chile');
insert into ciudades (id_pais,nombre) values (8,'Quito');
insert into ciudades (id_pais,nombre) values (9,'Berlin');

insert into clubes (nombre,fecha_fund,id_ciudad,id_pais,pagina_web,proposito) values ('Apple Park','2019-01-01',1,1,'www.apple.ve','ventas');
insert into clubes (nombre,fecha_fund,id_ciudad,id_pais,pagina_web,proposito) values ('Magis UCAB.','2019-02-02',1,1,'www.ucab.ve','informativo');
insert into clubes (nombre,fecha_fund,id_ciudad,id_pais,pagina_web,proposito) values ('Delos Incorporated','2020-03-03',2,2,'www.delos.co','marketing y publicidad');
insert into clubes (nombre,fecha_fund,id_ciudad,id_pais,pagina_web,proposito) values ('The parity of Zero','2020-04-04',2,2,'www.parity.ve','informativo');
insert into clubes (nombre,fecha_fund,id_ciudad,id_pais,pagina_web,proposito) values ('Inception','2021-05-05',3,3,'www.inception.es','entretenimiento');
insert into clubes (nombre,fecha_fund,id_ciudad,id_pais,pagina_web,proposito) values ('Westworld','2021-06-06',3,3,'www.westworld.es','informativo');


insert into coleccionistas (cedula,nombre_1,apellido1,apellido2,telefono,fecha_nacimiento,id_ciudad,id_pais,id_pais_nac,cedula_representante,id_representante) values (1,'Robert','Ford','Darwin','04241234567','1900-01-01',1,1,1,NULL,NULL);
insert into coleccionistas (cedula,nombre_1,apellido1,apellido2,telefono,fecha_nacimiento,id_ciudad,id_pais,id_pais_nac,cedula_representante,id_representante) values (2,'Christopher','Nolan','Perez','04127654321','1980-02-02',2,2,1,NULL,NULL);
insert into coleccionistas (cedula,nombre_1,apellido1,apellido2,telefono,fecha_nacimiento,id_ciudad,id_pais,id_pais_nac,cedula_representante,id_representante) values (3,'Jonathan','Nolan','Perez','04264523671','1985-03-03',2,2,1,NULL,NULL);
insert into coleccionistas (cedula,nombre_1,apellido1,apellido2,telefono,fecha_nacimiento,id_ciudad,id_pais,id_pais_nac,cedula_representante,id_representante) values (4,'Marty','Mcfly','Ordonez','04149444444','1975-04-04',1,1,1,NULL,NULL);
insert into coleccionistas (cedula,nombre_1,apellido1,apellido2,telefono,fecha_nacimiento,id_ciudad,id_pais,id_pais_nac,cedula_representante,id_representante) values (5,'Jimmy','Simpson','Castro','04243214567','1965-05-05',1,1,1,NULL,NULL);
insert into coleccionistas (cedula,nombre_1,apellido1,apellido2,telefono,fecha_nacimiento,id_ciudad,id_pais,id_pais_nac,cedula_representante,id_representante) values (6,'Antohny','Hopkins','Delgado','04231234576','1965-05-05',3,3,3,NULL,NULL);
insert into coleccionistas (cedula,nombre_1,apellido1,apellido2,telefono,fecha_nacimiento,id_ciudad,id_pais,id_pais_nac,cedula_representante,id_representante) values (7,'Steve','Wozniak','Trejo','04353214567','1965-05-05',3,3,3,NULL,NULL);
insert into coleccionistas (cedula,nombre_1,apellido1,apellido2,telefono,fecha_nacimiento,id_ciudad,id_pais,id_pais_nac,cedula_representante,id_representante) values (8,'Steve','Jobs','Castillo','02953214567','1965-05-05',1,1,1,NULL,NULL);
insert into coleccionistas (cedula,nombre_1,apellido1,apellido2,telefono,fecha_nacimiento,id_ciudad,id_pais,id_pais_nac,cedula_representante,id_representante) values (9,'Satoshi','Nakamoto','Gonzalez','04212345671','1965-05-05',2,2,2,NULL,NULL);
insert into coleccionistas (cedula,nombre_1,apellido1,apellido2,telefono,fecha_nacimiento,id_ciudad,id_pais,id_pais_nac,cedula_representante,id_representante) values (10,'Angela','Merkel','Corredor','04353214567','1965-05-05',2,2,2,NULL,NULL);
insert into coleccionistas (cedula,nombre_1,apellido1,apellido2,telefono,fecha_nacimiento,id_ciudad,id_pais,id_pais_nac,cedula_representante,id_representante) values (11,'Leonardo','Di Caprio','Sanchez','04353214567','1965-05-05',3,3,3,NULL,NULL);
insert into coleccionistas (cedula,nombre_1,apellido1,apellido2,telefono,fecha_nacimiento,id_ciudad,id_pais,id_pais_nac,cedula_representante,id_representante) values (12,'Elizabeth','Winstor','Garcia','04353214567','1965-05-05',3,3,3,NULL,NULL);


insert into objetos_de_valor (nombre,descripcion,fecha_fabricacion) values ('DeLorean Time Machine','Carro usado en la trología de Back to the future','1985-01-01');
insert into objetos_de_valor (nombre,descripcion,fecha_fabricacion) values ('Varita de Saúco','Varita usada en las películas de harry potter','2006-12-11');
insert into objetos_de_valor (nombre,descripcion,fecha_fabricacion) values ('Partituras de Beethoven','Partitura autografiada por Beethoven','1893-05-15');
insert into objetos_de_valor (nombre,descripcion,fecha_fabricacion) values ('Violin de Niccoló Paganini','Violín firmado por Niccoló','1643-02-20');
insert into objetos_de_valor (nombre,descripcion,fecha_fabricacion) values ('Cuadro Der Kuss','Cuadro hecho por Gustav Klimt','1566-11-11');
insert into objetos_de_valor (nombre,descripcion,fecha_fabricacion) values ('Bocetos de Mickey Mouse','Bocetos hechos por Walt Disney','1000-01-01');


insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_objeto_valor) Values (2,'2015-05-08',1);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_objeto_valor) Values (1,'2015-01-02',2);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_objeto_valor,precio_compra$) Values (5,'2016-05-08',3,232.4);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_objeto_valor,precio_compra$) Values (4,'2016-01-02',4,6565.3);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_objeto_valor,precio_compra$) Values (3,'2017-05-08',6,22.4);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_objeto_valor,precio_compra$) Values (6,'2020-05-08',2,232.4);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_objeto_valor,precio_compra$) Values (2,'2020-01-02',5,6155.3);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_objeto_valor,precio_compra$) Values (3,'2021-01-02',2,65.3);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_objeto_valor,precio_compra$) Values (5,'2020-01-01',4,1);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_objeto_valor,precio_compra$) Values (2,'2021-01-02',4,342);

insert into comics (fecha_publicacion,sinopsis,editor,paginas,color,titulo,numero,precio_org$,vol_numero) values ('2019-02-02','SINOPSIS','A. J. Lieberman',20,0,'Cowboy Ninja Viking Volume 1',10,3331,1);
insert into comics (fecha_publicacion,sinopsis,editor,paginas,color,titulo,numero,precio_org$,vol_numero) values ('2021-07-17','SINOPSIS24','Kev Walker',42,0,'Dr. Strange, Surgeon Supreme Under the Knife',134,99999,1);
insert into comics (fecha_publicacion,sinopsis,editor,paginas,color,titulo,numero,precio_org$,vol_numero) VALUES ('2012-01-01','SINOPSIS8','Alan Moore',20,0,'Miracleman Book 3: Olympus Premier HC Adams Cove',122,23233,3);
insert into comics (fecha_publicacion,sinopsis,editor,paginas,color,titulo,numero,precio_org$,vol_numero) VALUES ('2011-02-02','SINOPSIS9','Paul Jenkin',13,1,'Hellblazer:The Books of Magic',13,12000,1);
insert into comics (fecha_publicacion,sinopsis,editor,paginas,color,titulo,numero,precio_org$,vol_numero) VALUES ('2016-11-12','SINOPSIS10','Marjane Satrapi',39,0,'Persepolis: The Story of a Childhood',43,12300,2);
insert into comics (fecha_publicacion,sinopsis,editor,paginas,color,titulo,numero,precio_org$,vol_numero) VALUES ('2015-09-09','SINOPSIS11','Warren Ellis',23,0,'Transmetropolitan Vol. 4: "The New Scum"',13,11300,2);
insert into comics (fecha_publicacion,sinopsis,editor,paginas,color,titulo,numero,precio_org$,vol_numero) VALUES ('2011-11-12','SINOPSIS12','Garth Ennis',13,0,'The Boys Omnibus Vol. 1',31,1313,1);
insert into comics (fecha_publicacion,sinopsis,editor,paginas,color,titulo,numero,precio_org$,vol_numero) VALUES ('2012-11-12','SINOPSIS13','Garth Ennis',13,0,'The Boys Omnibus Vol. 2',31,1313,2);


insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_comic) Values (5,'2015-05-08',1);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_comic) Values (3,'2016-01-02',2);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_comic) Values (3,'2017-01-02',3);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_comic) Values (3,'2017-01-02',8);


insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_comic,precio_compra$) Values (3,'2017-01-08',2,23.4);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_comic,precio_compra$) Values (5,'2017-02-02',6,34);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_comic,precio_compra$) Values (3,'2018-04-04',4,23);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_comic,precio_compra$) Values (7,'2019-02-04',5,54);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_comic,precio_compra$) Values (3,'2020-07-09',7,63);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_comic,precio_compra$) Values (8,'2020-02-04',6,43);
insert into historicos_duenos (cedula_coleccionista,fecha_registro,id_comic,precio_compra$) Values (1,'2021-08-08',7,64);


insert into membresias (fecha_inicio, cedula_coleccionista,id_club,email,id_club_responsable,fecha_fin) values ('2015-01-01',1,1,'robert@gmail.com',1,NULL);
insert into membresias (fecha_inicio, cedula_coleccionista,id_club,email,id_club_responsable,fecha_fin) values ('2015-01-01',1,2,'robert@gmail.com',NULL,NULL);
insert into membresias (fecha_inicio, cedula_coleccionista,id_club,email,id_club_responsable,fecha_fin) values ('2016-02-02',2,2,'chrisnolan@gmail.com',2,NULL);
insert into membresias (fecha_inicio, cedula_coleccionista,id_club,email,id_club_responsable,fecha_fin) values ('2016-04-03',3,3,'jonnolan@gmail.com',3,NULL);
insert into membresias (fecha_inicio, cedula_coleccionista,id_club,email,id_club_responsable,fecha_fin) values ('2017-03-03',4,4,'mcfly@gmail.com',4,NULL);
insert into membresias (fecha_inicio, cedula_coleccionista,id_club,email,id_club_responsable,fecha_fin) values ('2018-03-03',5,5,'jimmysimp@gmail.com',5,NULL);
insert into membresias (fecha_inicio, cedula_coleccionista,id_club,email,id_club_responsable,fecha_fin) values ('2019-03-03',6,6,'antho@gmail.com',6,NULL);
insert into membresias (fecha_inicio, cedula_coleccionista,id_club,email,id_club_responsable,fecha_fin) values ('2018-03-03',7,1,'steve@gmail.com',NULL,NULL);
insert into membresias (fecha_inicio, cedula_coleccionista,id_club,email,id_club_responsable,fecha_fin) values ('2017-12-20',8,2,'steve@gmail.com',NULL,NULL);
insert into membresias (fecha_inicio, cedula_coleccionista,id_club,email,id_club_responsable,fecha_fin) values ('2020-12-31',9,2,'jobs@gmail.com',NULL,NULL);

insert into organizaciones_caridad (nombre,descripcion) values ('Org. de la Salud','Cuidamos la salud de nuestra gente');
insert into organizaciones_caridad (nombre,descripcion) values ('Org. Animal','Velamos por los derechos animales');
insert into organizaciones_caridad (nombre,descripcion) values ('Org. contra el cáncer','Luchamos contra el cáncer para una mejor vida');
insert into organizaciones_caridad (nombre,descripcion) values ('Org. Ambiental','Cuidamos a nuestro planeta tierra');
insert into organizaciones_caridad (nombre,descripcion) values ('Org. contra las drogas','Dile no a las drogas');
insert into organizaciones_caridad (nombre,descripcion) values ('Org. Niños en África','Por los derehos humanos de los niños en áfrica');
insert into organizaciones_caridad (nombre,descripcion) values ('Centro por la igualdad','Por un mundo donde igualitario entre generos');
insert into organizaciones_caridad (nombre,descripcion) values ('Brigadas Internacionales de la Paz','Por un mundo pacífico sin guerras');
insert into organizaciones_caridad (nombre,descripcion) values ('Amnistía Internacional','Dando a conocer los derechos humanos');

insert into lugares_subasta (calle,avenida,id_ciudad,id_pais,tipo,nombre_lugar)  values ('Calle del Hambre','Panteón',1,1,'Atractivo para comer','El Hambrón');
insert into lugares_subasta (calle,avenida,id_ciudad,id_pais,tipo,nombre_lugar)  values ('Boulevard Sabana Grande','Boyacá',2,2,'Lugar concurrido','CityMarket');
insert into lugares_subasta (calle,avenida,id_ciudad,id_pais,tipo,nombre_lugar)  values ('Santa Teresa','Morán',3,3,'Lugar concurrido','SantaTeresaRugby');
insert into lugares_subasta (calle,avenida,id_ciudad,id_pais,tipo,nombre_lugar)  values ('El Pedregal','Guzmán Blanco',4,4,'Lugar solitario','905 Place');
insert into lugares_subasta (calle,avenida,id_ciudad,id_pais,tipo,nombre_lugar)  values ('El Mural','Casanova',5,5,'Variedad de locales','CochePlace');
insert into lugares_subasta (calle,avenida,id_ciudad,id_pais,tipo,nombre_lugar)  values ('Pasaje de Artesanos','Abraham Lincoln',6,6,'Variedad en medios de transporte','SG Market');
insert into lugares_subasta (calle,avenida,id_ciudad,id_pais,tipo,nombre_lugar)  values ('Bendayan','Bolívar',7,7,'Lugar Céntrico','SimonB Place');
insert into lugares_subasta (calle,avenida,id_ciudad,id_pais,tipo,nombre_lugar)  values ('Amador','Universidad',8,8,'Lugar concurrido','Universal Channel');
insert into lugares_subasta (calle,avenida,id_ciudad,id_pais,tipo,nombre_lugar)  values ('Guadalajara','Castellana',9,9,'Lugar exótico','School de Nada');

insert into representantes (nombre1_repre,apellido1_repre,cedula,nombre2_repre,apellido2_repre) values ('Raul','Salinas',100,NULL,NULL);
insert into representantes (nombre1_repre,apellido1_repre,cedula,nombre2_repre,apellido2_repre) values ('Jesús','Medina',101,NULL,NULL);
insert into representantes (nombre1_repre,apellido1_repre,cedula,nombre2_repre,apellido2_repre) values ('María','Díaz',102,NULL,NULL);
insert into representantes (nombre1_repre,apellido1_repre,cedula,nombre2_repre,apellido2_repre) values ('Javier','Pinedo',103,NULL,NULL);
insert into representantes (nombre1_repre,apellido1_repre,cedula,nombre2_repre,apellido2_repre) values ('Vanessa','Rodriguez',104,NULL,NULL);
insert into representantes (nombre1_repre,apellido1_repre,cedula,nombre2_repre,apellido2_repre) values ('Ricardo','Medina',105,NULL,NULL);
insert into representantes (nombre1_repre,apellido1_repre,cedula,nombre2_repre,apellido2_repre) values ('Alfonso','Suárez',106,NULL,NULL);
insert into representantes (nombre1_repre,apellido1_repre,cedula,nombre2_repre,apellido2_repre) values ('Karina','Roa',107,NULL,NULL);
insert into representantes (nombre1_repre,apellido1_repre,cedula,nombre2_repre,apellido2_repre) values ('Isabela','Morales',108,NULL,NULL);

insert into contactos_club (id_club,telefono) values (1,41234567);
insert into contactos_club (id_club,telefono) values (1,21211114);
insert into contactos_club (id_club,telefono) values (2,21215745);
insert into contactos_club (id_club,telefono) values (2,42477778);
insert into contactos_club (id_club,telefono) values (3,41277774);
insert into contactos_club (id_club,telefono) values (3,42465465);
insert into contactos_club (id_club,telefono) values (4,41456724);
insert into contactos_club (id_club,telefono) values (5,21257645);
insert into contactos_club (id_club,telefono) values (6,21298712);

insert into intereses(descripcion) values ('Computadoras');
insert into intereses(descripcion) values ('Revistas');
insert into intereses(descripcion) values ('Peliculas y Series');
insert into intereses(descripcion) values ('Vehículos');
insert into intereses(descripcion) values ('Monedas');
insert into intereses(descripcion) values ('Comics');
insert into intereses(descripcion) values ('Estatuas');
insert into intereses(descripcion) values ('Zapatos');
insert into intereses(descripcion) values ('Juguetes');

insert into c_i (id_club,id_interes) values (1,1);
insert into c_i (id_club,id_interes) values (2,2);
insert into c_i (id_club,id_interes) values (3,3);
insert into c_i (id_club,id_interes) values (4,4);
insert into c_i (id_club,id_interes) values (5,5);
insert into c_i (id_club,id_interes) values (6,6);
insert into c_i (id_club,id_interes) values (1,2);
insert into c_i (id_club,id_interes) values (2,3);
insert into c_i (id_club,id_interes) values (3,4);

-- todo funcionaba hasta aqui 

insert into subastas (id,hora_inicio,hora_fin,fecha,modo,tipo,caridad,cancelada,id_lugar) values (1,'10:00','12:00','2021-08-08','VIR','S','SI','NO',NULL);
insert into subastas (id,hora_inicio,hora_fin,fecha,modo,tipo,caridad,cancelada,id_lugar) values (2,'13:00','19:00','2021-09-09','VIR','S','SI','NO',NULL);
insert into subastas (id,hora_inicio,hora_fin,fecha,modo,tipo,caridad,cancelada,id_lugar) values (3,'15:00','19:00','2021-10-10','VIR','S','SI','NO',NULL);
insert into subastas (id,hora_inicio,hora_fin,fecha,modo,tipo,caridad,cancelada,id_lugar) values (4,'16:00','20:00','2021-11-11','VIR','S','SI','NO',NULL);
insert into subastas (id,hora_inicio,hora_fin,fecha,modo,tipo,caridad,cancelada,id_lugar) values (5,'18:00','23:00','2021-12-11','VIR','S','SI','NO',NULL);
insert into subastas (id,hora_inicio,hora_fin,fecha,modo,tipo,caridad,cancelada,id_lugar) values (6,'14:00','17:00','2021-11-11','PRE','S','SI','NO',1);
insert into subastas (id,hora_inicio,hora_fin,fecha,modo,tipo,caridad,cancelada,id_lugar) values (7,'11:00','14:00','2021-11-11','PRE','S','SI','NO',2);
insert into subastas (id,hora_inicio,hora_fin,fecha,modo,tipo,caridad,cancelada,id_lugar) values (8,'5:00','8:00','2021-05-06','PRE','S','SI','NO',3);
insert into subastas (id,hora_inicio,hora_fin,fecha,modo,tipo,caridad,cancelada,id_lugar) values (9,'12:00','16:00','2021-11-11','PRE','S','SI','NO',4);


insert into registros_beneficio (id_organizacion,id_subasta,porcentaje,dinero_donado$) values (1,1,100,1000);
insert into registros_beneficio (id_organizacion,id_subasta,porcentaje,dinero_donado$) values (2,2,100,2000);
insert into registros_beneficio (id_organizacion,id_subasta,porcentaje,dinero_donado$) values (3,3,100,3000);
insert into registros_beneficio (id_organizacion,id_subasta,porcentaje,dinero_donado$) values (4,4,100,4000);
insert into registros_beneficio (id_organizacion,id_subasta,porcentaje,dinero_donado$) values (5,5,100,5000);
insert into registros_beneficio (id_organizacion,id_subasta,porcentaje,dinero_donado$) values (6,6,100,6000);
insert into registros_beneficio (id_organizacion,id_subasta,porcentaje,dinero_donado$) values (7,7,100,7000);
insert into registros_beneficio (id_organizacion,id_subasta,porcentaje,dinero_donado$) values (8,8,100,5000);
insert into registros_beneficio (id_organizacion,id_subasta,porcentaje,dinero_donado$) values (9,9,100,5000);

insert into s_c (id_subasta,id_club,club_invitado) values (1,1,NULL);
insert into s_c (id_subasta,id_club,club_invitado) values (1,NULL,2);
insert into s_c (id_subasta,id_club,club_invitado) values (1,NULL,3);
insert into s_c (id_subasta,id_club,club_invitado) values (1,NULL,4);
insert into s_c (id_subasta,id_club,club_invitado) values (1,NULL,5);
insert into s_c (id_subasta,id_club,club_invitado) values (1,NULL,6);
insert into s_c (id_subasta,id_club,club_invitado) values (2,2,NULL);
insert into s_c (id_subasta,id_club,club_invitado) values (2,NULL,1);
insert into s_c (id_subasta,id_club,club_invitado) values (2,NULL,3);

insert into inscripciones (id_subasta,membresia_fechainicio,cedula_coleccionista,id_club,autorizado) values (1,'2016-02-02',2,2,1);
insert into inscripciones (id_subasta,membresia_fechainicio,cedula_coleccionista,id_club,autorizado) values (1,'2017-12-20',8,2,1);
insert into inscripciones (id_subasta,membresia_fechainicio,cedula_coleccionista,id_club,autorizado) values (1,'2020-12-31',9,2,1);
insert into inscripciones (id_subasta,membresia_fechainicio,cedula_coleccionista,id_club,autorizado) values (1,'2016-04-03',3,3,1);
insert into inscripciones (id_subasta,membresia_fechainicio,cedula_coleccionista,id_club,autorizado) values (1,'2017-03-03',4,4,1);
insert into inscripciones (id_subasta,membresia_fechainicio,cedula_coleccionista,id_club,autorizado) values (2,'2015-01-01',1,1,1);
insert into inscripciones (id_subasta,membresia_fechainicio,cedula_coleccionista,id_club,autorizado) values (2,'2018-03-03',7,1,1);
insert into inscripciones (id_subasta,membresia_fechainicio,cedula_coleccionista,id_club,autorizado) values (2,'2016-04-03',3,3,1);
insert into inscripciones (id_subasta,membresia_fechainicio,cedula_coleccionista,id_club,autorizado) values (2,'2017-03-03',4,4,1);
