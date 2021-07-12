CREATE DATABASE prueba;

USE prueba;

CREATE TABLE registros(
    id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180)
);

INSERT INTO CLUBES (nombre,fecha_fund,id_ciudad,id_pais,pagina_web,proposito) VALUES ('EL KOKI', STR_TO_DATE('1-01-2012', '%d-%m-%Y'),7,37,'ELKOKI.COM','MALANDREO')
