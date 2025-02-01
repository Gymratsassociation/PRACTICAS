PROYECTO: FEMME FORCE GYM

DESCRIPCIÓN:
Este proyecto consiste en una Aplicación de Gimnasio, que incluye tanto un Frontend (para interactuar con los usuarios) como un Backend (para manejar las solicitudes, las bases de datos y la lógica).

Frontend: La interfaz de usuario que se ejecuta en el navegador.
Backend: El servidor que maneja las solicitudes API, la base de datos SQLite y la lógica de negocio.


CONTENIDO:
El proyecto consta de un backend, un frontend y una base de datos creada en Sqlite.

Este proyecto utiliza Knex.js para interactuar con una base de datos SQLite. El proyecto está configurado para gestionar una base de datos de un gimnasio, con operaciones como consultas y migraciones.


REQUISITOS:
Node.js (Recomendado: LTS)
npm (Node Package Manager)


CONFIGURACIÓN:
Backend.
navega a la carpeta backend -> cd practicas-Backend
instala las dependencias -> npm install
iniciar el servidor -> npm start

Frontend.
navega a la carpeta del frontend -> cd practicas-frontend
instala las dependencias -> npm install
iniciar el servidor de desarrollo con Parcel -> npm start
El servidor de desarrollo estará disponible en http://localhost:1234 (por defecto). 

Clonar repositorio: git clone <url_del_repositorio>
cd <nombre_del_directorio>
Instalar las dependencias: npm install
    Esto instalará todas las dependencias necesarias, incluyendo Knex.js y SQLite3.


ESTRUCTURA:
Backend 
    -Node-modules
    -scr: configuration, controller, route, service
    -base de datos: BD_Gimnasio
    -package.json

Frontend
    -Node-modules
    -src: css, js, resources, html
README

CONEXION CON BASE DE DATOS:
La conexión a la base de datos SQLite se configura en src/database.js
    const knex = require('knex');

const db = knex({
    client: 'sqlite3',  // Usamos SQLite3 como cliente
    connection: {
        filename: './DB_Gimnasio.db'  // Archivo SQLite en el directorio raíz
    },
    useNullAsDefault: true  // Necesario para el manejo de valores nulos en SQLite
});


DEPENDENCIAS:
Backend.
    express: Framework web para Node.js, utilizado para manejar las rutas y solicitudes HTTP.
    sqlite3: Base de datos ligera utilizada para almacenar los datos del gimnasio.
    knex: ORM para interactuar con la base de datos SQLite de manera más sencilla.
    cors: Middleware que permite solicitudes desde otros dominios (por ejemplo, entre el frontend y el backend).

Frontend.
    axios: Cliente HTTP para hacer solicitudes al backend desde el frontend.
    parcel: Empaquetador de aplicaciones web para el desarrollo y la construcción del frontend.


SCRIPTS:
Backend.
    npm start: Inicia el servidor de backend (Express).
    npm test: Ejecuta las pruebas (por ahora, no están especificadas).
Frontend.
    npm start: Inicia el servidor de desarrollo de Parcel (accesible en http://localhost:1234).
    npm build: Construye la versión de producción de la aplicación frontend.

REPOSITORIO:
    https://github.com/Gymratsassociation/PRACTICAS


AUTORES:
    Paura Ricarte
    Raciel Uzcanga
    Patricia Caamaño
