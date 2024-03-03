# Extendeal Frontend Developer Challenge

## Introducción

Mi nombre es Paola Hinostroza y este es mi proyecto para el challenge de dev frontend en Extendeal. En este README.md, describiré los detalles de la aplicación y cómo abordé el desafío.

## Descripción del Proyecto

El proyecto consta de dos partes: una API y un frontend. Ambas partes están organizadas en carpetas separadas dentro del repositorio: api y web . Además, incluí un archivo docker-compose.yml que permite levantar ambos servicios utilizando Docker Compose.

La API se desarrolló utilizando json-server con un archivo db.json para simular una base de datos, que contiene un listado de productos. El objetivo de la API es proporcionar los datos necesarios para el frontend.

El frontend se desarrolló utilizando Next.js 14.1.1 con App Router y consiste en las siguientes funcionalidades:

- _Página Principal_: Se muestra el listado de productos. Los usuarios pueden buscar productos específicos utilizando un buscador y aplicar algunos filtros simples para refinar los resultados.
- _Vista Detallada del Producto_: Los usuarios pueden hacer clic en un producto para ver más detalles, como descripción, precio, etc.
- _Editar, Eliminar y Crear Productos_: Se proporcionan funcionalidades para que los usuarios puedan editar, eliminar y crear nuevos productos según sea necesario.

## Tecnologías Utilizadas

- _Next.js 14.1.1_: Se utilizó para el desarrollo del frontend debido a su capacidad para crear aplicaciones web rápidas y escalables con React.
- _JSON Server_: Se empleó para simular una API RESTful a partir de un archivo JSON estático. Esto permitió un desarrollo más ágil y sin necesidad de configuraciones complejas de backend.

- _Docker_: Se utiliza Docker para la gestión de contenedores y asegurar que el entorno de desarrollo sea reproducible y portable.

## Instalación y Uso

1. Clona este repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Asegúrate de tener Docker instalado en tu sistema.
4. Abre una terminal y ejecuta el siguiente comando para levantar ambos servicios:

   ```bash

   docker-compose build
   docker-compose up

   ```

## Pendientes de mejora

- Mejor manejo de errores al hacer solicitudes a la api
- Las peticiones GET quedaron implementadas de una forma y los otros metodos de otra. 
- Dar feedback al usuario cuando se hacen las solicitudes, por ejemplo mensajes, sppiner o algo que indique que la pagina esta cargando.
- El componente de los filtros se puede mejorar bastante mas
- Paginacion
- Revisar la estructura y funcionamiento de los contenedores y docker ya que hubo problemas
