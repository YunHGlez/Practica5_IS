#Práctica 5 - Login completamente funcional 

###Ingeniería de Software 2024-1

###Equipo 12: Empresaurios

###Integrantes: 
- Reyes Cedillo Joel Haidd
- Gallegos Diego Cristian Ricardo
- González Servín Luis Israel
- Hernández González Yun
- Montaño Gómez Eduardo

## INSTRUCCIONES DE EJECUCIÓN

Antes de ejecutar el programa es necesario tener instalado _python3_ en el equipo, _MySQL Workbench_ para inicializar la base de datos, e instalar _react_ mediante el comando siguiente a través de la terminal:

```
npm install react
```

Una vez instalado todo lo anterior es necesario inicializar la base de datos ejecutando el 
archivo ```BaseDeDatos.sql``` a través de MySQL Workbench.

Posteriormente se debe ir al directorio ```venv``` y una vez ahí activar el entorno virtual con el comando:

```
source ./bin/activate
```

Después se debe ir al directorio ```src/Flaskapp``` y una vez ahí iniciar la conexión back-end el comando:

```
python3 app.py -m flask run
```

Una vez hecho lo anterior se debe abrir otra terminal, ir al directorio ```src``` y correr el front-end mediante el comando:

```
npm start
```

__Nota__: Si el comando anterior no funciona intentar con el comando:

```
sudo npm start
```

Posteriormente ir a un navegador web y escribir en el buscador la dirección ```http://localhost:3000```

Así se accederá a la página de inicio, y una vez ahí se puede dar click en el botón _Acceder_ para iniciar sesión o crear una nueva cuenta
__Nota__: la base de datos estará inicialmente vacía por lo que es necesario crear al menos una cuenta primero y posteriormente iniciar sesión con el correo registrado anteriormente.

Ya que se desee salir de la app recuerde presionar Ctrl+C en las dos terminales abiertas para terminar los procesos y desactivar el entorno virtual con el comando ```deactivate``` en la terminal donde se tenga el entorno activado.

