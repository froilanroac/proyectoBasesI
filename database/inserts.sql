insert into organizaciones_caridad (nombre,descripcion) VALUES ('***','***');
insert into paises (nombre,continente,nacionalidad) values ('VENEZUELA','A','VENEZOLANO');
INSERT INTO CIUDADES (id_pais,nombre) VALUES (1,'CARACAS');
INSERT INTO INTERESES (DESCRIPCION) VALUES ('CARROS');

delete from membresias where fecha_inicio='2021-07-11' and cedula_coleccionista=26675205 and id_club=7;

UPDATE MEMBRESIAS SET FECHA_FIN='2021/01/01' WHERE FECHA_INICIO="2021-07/11" AND CEDULA_COLECCIONISTA=26675205 AND ID_CLUB=5;