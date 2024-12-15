# ezzForm

Link funcional: https://proyecto-programacion-web-kappa.vercel.app

ezzForm es una aplicación web diseñada para facilitar la creación de formularios personalizados de manera intuitiva. Los usuarios pueden registrarse, iniciar sesión y gestionar sus formularios de forma rápida y eficiente.

## Características

-   **Página Principal**: Navega por la información principal de la plataforma y sus beneficios.
-   **Crear Cuenta**: Regístrate para acceder a la plataforma y comenzar a crear formularios.
-   **Iniciar Sesión**: Accede con tu cuenta para gestionar y crear formularios personalizados.
-   **Gestión de Formularios**:
    -   Crear un nuevo formulario.
    -   Visualizar formularios creados previamente.
    -   Crear enlaces con fechas inicio y fin para que puedan responder otros usuarios
    -   Compartir los mismos
    -   eliminar enlaces
    -   Eliminar formularios
    -   Ver respuestas que hicieron otros usuarios

## Imagenes de ezzForm

-   Lado de un usurio normal

    ![inicio1](./imagenes/inicio1.PNG)

    ![opcionesformularios](./imagenes/opcionesformularios.png)

    ![crearformulario](./imagenes/crearformulario.png)

    ![crearformulario2](./imagenes/crearformulario2.png)

    ![verformularios](./imagenes/verformularios.png)

    ![verformulario](./imagenes/verformulario.png)

    ![crearenlace](./imagenes/crearenlace.png)

    ![crearenlace2](./imagenes/crearenlace2.png)

    ![responderform](./imagenes/responderform.png)

    ![verrespuestas](./imagenes/verrespuestas.png)

    ![verrespuestas2](./imagenes/verrespuestas2.png)

-   Lado de un admin
    ![admin](./imagenes/admin.png)

## Diseño de la base de datos

![disenioBD](./imagenes/disenioBD.PNG)

## Instalación

Sigue estos pasos para instalar y ejecutar ezzForm en tu entorno local.

1. Clona el repositorio:
    ```bash
    git clone https://github.com/polycyllo/PROYECTO-PROGRAMACION-WEB.git
    ```
2. Navega a la carpeta del proyecto:
    ```bash
    cd PROYECTO-PROGRAMACION-WEB
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Crea una archivo .env (en caso de que no exista)
   y coloca

    - VITE_APIT_URL=http://localhost:4000
      (esto tambien dependerá del puerto que se designo al backend)

5. Ve a la rama Backend y realiza lo mismo, clona la rama y ejecuta npm i

6. crea un archivo .env en el backend (esto en caso de que no exista)

-   **Si quieres usar el backup de la base de datos deberas tener instalado PostgreSQL y recuperar los datos con el uso del backup que esta en la carpeta "baseDeDatosBackup", luego deberas ir a la carpeta src/config/db.ts y ahí leer la instruccion comentada y luego añadir a lo siguiente al archivo .env**

    -   DB_NAME=ezzForm #(depende del nombre que le des a la bd)
    -   DB_USER=postgres #(esto depende de tu usuario)
    -   DB_PASSWORD=qwerasdf #(esto depende de que contraseña tiene postgreSQL)
    -   DB_HOST=localhost
    -   DB_DIALECT=postgres
    -   DB_PORT=5432 #(normalmente viene en este puerto)

-   **En caso de que quieras usar la bd deployada pega solo esto**

    -   DATABASE_URL=postgresql://ezzform_ewv6_user:Tie1T1YkNi9gQRPhszX63AwvNgrOj9n1@dpg-ctdm90ilqhvc73d77ff0-a.oregon-postgres.render.com/ezzform_ewv6?ssl=true

    Luego pega esto

    -   JSW_PWD=123456789
    -   HOST_RESPONSE=http://localhost:5173

        Seguimos en el .env del backend, aqui necesitaras las siguientes credenciales proporcionada por alguna app que tenga servicio smpt

    -   SMTP_HOST=xxxxxxx # Dirección del servidor SMTP
    -   SMTP_PORT=xxxxxx # Puerto del servidor SMTP
    -   SMTP_USER=xxxxxxxxx # Usuario o correo asociado al servicio SMTP
    -   SMTP_PASS=xxxxxxxxxxx # Contraseña o token de acceso del servicio SMTP

7. Inicia la aplicación:
   Ejecuta lo siguiente por el lado del frontend y aparte por lado del backend (el mismo codigo)
    ```bash
    npm run dev -- --host 0.0.0.0
    ```
    y desde el lado del frontend abre el enlace http://localhost:5173

## Eso seria todo :)
