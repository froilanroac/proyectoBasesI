#  Proyecto Bases I 

## Contenido de cada carpeta:

 - server: Un servidor en express que se conecta al MBD, aquí hará las peticiones angular. 
 - proyecto: El Front y el Back completo de la aplicación
 - database: Los scrips de creación de las tablas, inserts, Modelo Entidad-Relación y Modelo relacional de la Base de Datos. 

## Instalaciones requeridas: 

 1. Node 
 2. Angular CLI 
 3. Typescript 
 4. MySQL 

## Luego de instalar lo arriba mencionado ejecutar los siguientes paquetes: 

En la carpeta "server"

    npm install 

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


En la carpeta "proyecto" 

    ng serve -o

> Los comandos de esta sección deberían hacerse cada una en una shell por separado, ya que los procesos siempre deben estar corriendo para el funcionamiento de la aplicación. 
