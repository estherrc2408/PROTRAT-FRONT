# PROTRAT-FRONT
## Inicializar el proyecto
Dentro de la terminal del repositorio inicializar el proyecto siguiento los pasos:
Instalación de dependencias
1. yarn install
2. yarn dev

Dependencias utilizadas:
1. react-router-dom
2. react-redux
3. @reduxjs/toolkit
4. vite
5. tailwind
6. daisyui

## Acceso a la web.
La web cuenta con la posibilidad de que usuarios no registrados se puedan registrar fácilmente mediante un formulario reducido de usuario que más tarde podrán editar para introducir más información sobre sí mismos.

También cuenta con la posibilidad de subir sus últimos proyectos con descripciones de los mismos e información relevante.

## Roles:
Dentro de la web tenemos tres roles distintos:
#### rol: admin
Los usuarios con rol de administrador tan solo pueden borrar usuarios que estén utilizando la página web. Su home page es una tabla en la que aparece la información básica de cada usuario y enlaces a sus respectivos perfiles.
#### rol: standard
Los usuarios standard pueden acceder tan solo a su propio perfil usuario y sus proyectos subidos.
Toda su información es tan solo editable por ellos mismos mientras que para el resto de usuarios es tan solo de lectura.
#### sin rol
Los usuarios no registrados podrán acceder a los perfiles de los usuarios standard y ver sus distintos proyectos.

## Usuarios:
Usuario con rol de administrador:
1. **admin@account.com** -rol:admin password: *adminpass*
2. **cansada@nppuc.mes** -rol:standard password: *pass*
3. **testing@user.com** -rol:standard password:*testpass*
4. **new@version.com** -rol:standard password:*newpass**

### Repositorio del BACK
https://github.com/estherrc2408/PROTRAT-BACK.git
