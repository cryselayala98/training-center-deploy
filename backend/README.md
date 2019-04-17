# training-center-backend

## Ejecutar el proyecto en Local

### Requisitos

* MariaDB
* node
* npm
* sequelize-cli

Cambiar a la ubicación del proyecto

```
$ cd /training-center-deploy/backend
```

En el archivo de configuraciones *config.js* cambiar los datos de conexión a la base de datos de desarrollo y de test.

### Variables de entorno

Se debe crear un archivo .env en el directorio raiz, en el se definiran las siguientes variables:

```
NODE_ENV
SMTP_USER
SMTP_PASSWORD
FROM_ACCOUNT
SECRET_TOKEN
MYSQL_DATABASE
MYSQL_PASSWORD
```

### Configuración inicial

En el archivo de configuraciones *config.js* cambiar los datos de conexión a la base de datos de desarrollo y de test. El formato a utilizar será: <motor>://<user>:<password>@<host>/<database>

### Instalación

Instalar las dependencias
```
$ npm install
```
Ejecutar las migraciones de la BD (Sequelize).

Ejecutar el proyecto
```
$ npm start
```

En el navegador:`localhost:3000`

## SEQUELIZE

Training Center UFPS utiliza Sequelize como ORM. Para más información consulte [Sequelize CLI](https://github.com/sequelize/cli)

### Migraciones

Para ejecutar las Migraciones dentro de la raiz del proyecto: 

```
$ sequelize db:migrate
```

### Seeds

Para ejecutar los seeds:

```
$ sequelize db:seed:undo:all
$ sequelize db:seed:all
```

## TEST

Ejecutar en local. 

Instalar mocha de manera global
```
$ npm install -g mocha
```

Añadir en el Package.json el siguiente script:
```
"scripts": {
    "start": "nodemon ./bin/www",
    "test": "mocha"
  },
```

Luego de esto, ejecutar: 

```
$ sequelize db:seed:undo:all
$ sequelize db:seed:all
$ npm test
```

## RESTful API

Para consultar la definición del API, consultar la wiki.

## To Do
- [] Get contest scoreboard
- [] Get profile
- [] Update profile
- [] Get syllabus scoreboard
- [] Get my submissions
- [] Get general ranking
- [] List users for admin
- [] Delete account (admin)
- [] Verificar el estado de los dockers, en caso de que esten abajo y suban enviar a calificar automaticamente todos aquellos envios que se encuentren en estado "in queue"
- [] Docker compose
- [] Deploy
- [] SEEDS
- [] MAIL

## Improvements
- [] Redis para socket.io
- [] Redis para blacklist tockens

 Build with :heart: by [Meyito](https://github.com/Meyito)
