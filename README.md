#  Proyecto Bases I 

## Contenido de cada carpeta:

 - server: Un servidor en express que se conecta al MBD, aquí hará las peticiones angular. 
 - proyecto: El Front y el Back completo de la aplicación
 - database: Los scrips de creación de las tablas, inserts, Modelo Entidad-Relación y Modelo relacional de la Base de Datos. 

## Instalaciones requeridas: 

 1. Node (**6.14.13 o >**)
 2. Angular CLI (**12.0.5 o >**)
 3. Typescript (**4.3.5 o >**)
 4. MySQL (**8.0.26 o >**)

## Luego de instalar lo arriba mencionado ejecutar los siguientes paquetes: 

En la carpeta "server"

    npm i express morgan promise-mysql cors

    npm i nodemon -D


En la carpeta "proyecto"

    npm install 

## Configuración de la base de datos:

En el MBD crear una base de datos llamada "proyecto" y estar en ella para ejectuar los scripts de creacion de las tablas e inserción.

    CREATE DATABASE proyecto;
    
    USE proyecto;

**ASEGURARSE DE TENER UN USUARIO CON LAS SIGUIENTES CREDENCIALES:** 

> User: root
> 
> Password: password

Ejecutar el siguiente script en el MBD para la creación de las tablas  

    proyecto.sql 

**OPCIONAL:**  En este script está la inserción de alguna data para probar que todo este funcionando correctamente. 

    inserts.sql

 

## Para iniciar la aplicación:

En la carpeta "server" ejecutar: 

    npm run dev
    
    npm run build


En la carpeta "proyecto" 

    ng serve -o

> Los comandos de esta sección deberían hacerse cada una en una shell por separado, ya que los procesos siempre deben estar corriendo para el funcionamiento de la aplicación. 
