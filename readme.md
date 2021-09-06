# Deconcesionarias - API - Challenge

## Instalación: 

Primeramente clonamos este repositorio: 

```bash
git clone https://github.com/rln-tomas/api_deconcesionarias && cd api_deconcesionarias
```
Luego tenemos que instalar las dependencias: 
```bash
npm install 
```

### Imagen en Docker: 
```bash
docker pull 410323401/decon-api:latest
```

## Base de datos: 
Diagrama: 
![alt text](https://i.ibb.co/f8LzXHT/database.jpg)

Para poder utilizar la base de datos implementada en este proyecto se necesita hacer uso de docker.

Ejecutamos el siguiente comando para levantar los contenedores: 

```bash
docker-compose up -d
```

Esto nos habilita dos contenedores, uno para la base de datos en sí y otra para tener acceso a una GUI que nos ayude: 

![alt-text](https://i.ibb.co/JngrgF3/pgAdmin.jpg)

Las credenciales las pueden encontrar en el archivo .env.example.

## Ejecución: 

```bash
npm start
```
### A tener en cuenta: 

* Las migraciones se ejecutan automáticamente al iniciar el servidor. 
* En caso de que las migraciones no se ejecuten o no se vean reflejadas ejecutamos: 

```bash
npx sequelize db:migrate
```
* Si queremos tener datos de prueba podemos ejecutar los seeders disponibles con el siguiente comando: 

```bash
npx sequelize db:seed:all
```

* En caso de utilizar en local se debe sacar la validación por SSL de las configuraciones en el archivo ./config/config.js.

## Aclaración: 
El archivo Dockerfile de aquí está solo para realizar integración y entrega continua al igual que el archivo "secondDocker".

## Deploy: 
https://deconcesionarias-api-rln.herokuapp.com/

