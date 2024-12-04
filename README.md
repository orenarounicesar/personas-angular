# Proyecto Angular Distribuido con Docker

Este proyecto utiliza un contenedor Docker para construir y servir una aplicación Angular. La configuración permite personalizar las variables de entorno relacionadas con las URLs de las APIs durante la construcción.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Docker](https://www.docker.com/get-started) (versión 20.10 o superior)
- [Node.js](https://nodejs.org/) (opcional, solo si deseas realizar pruebas locales antes de crear el contenedor)

## Estructura del Dockerfile

El `Dockerfile` consta de dos etapas:

1. **Compilación de la aplicación Angular**: Se utiliza Node.js para instalar dependencias, reemplazar variables de entorno y compilar la aplicación para producción.
2. **Servir la aplicación**: Se usa `serve` para servir los archivos estáticos generados.

## Configuración de variables de entorno

Durante el proceso de construcción, puedes proporcionar valores personalizados para las siguientes variables:

- `API_URL_CREAR`: URL de la API para la creación.
- `API_URL_ELIMINAR`: URL de la API para la eliminación.

Estas variables reemplazarán los valores predeterminados en el archivo `environments.ts` del proyecto Angular.

## Pasos para construir y ejecutar el contenedor

> [!IMPORTANT]
> Reemplazar en el siguiente comando las variables `API_URL_CREAR` y `API_URL_ELIMINAR` por los backend.

```bash
# Clona el repositorio en tu máquina local
git clone https://github.com/orenarounicesar/personas-angular.git
cd personas-angular

# Construye la imagen Docker, proporcionando los valores para las variables de entorno
docker build \
  --build-arg API_URL_CREAR=https://api.example.com/crear \
  --build-arg API_URL_ELIMINAR=https://api.example.com/eliminar \
  -t personas-angular .

# Ejecuta el contenedor creado
docker run -p 4200:3000 personas-angular

# Accede a la aplicación en tu navegador web
# http://localhost:4200
```
## Acceder a registrar y eliminar

- `http://localhost:4200/crear`: URL para la creación.
- `http://localhost:4200/eliminar`: URL para la eliminación.

