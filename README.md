## Setup
- Instalar Docker y Docker-Compose: 
Linux: https://docs.docker.com/engine/install/
Mac: https://docs.docker.com/docker-for-mac/install/ 
Windows: https://docs.docker.com/docker-for-windows/install/

-  Instalar Git:
https://git-scm.com/

- Luego clonar el repositorio con el siguiente comando:

`git clone "url-del-repo"`

- Solicitar el archivo ".env" a tu jefe de grupo y pegarlo en la carpeta server, quedando ".../server/.env"

### Run

- En la ruta donde tengas el repo clonado ejecutar el siguiente comando:

Linux y Mac: ``sudo docker-compose up --build``
Windows: ``docker-compose up --build``

- Con estos pasos ya puedes acceder al proyecto REACT en tu navegador accediendo a:
``localhost:3000``

- Tambien puedes realizar consultas a la api en la siguiente ruta: 
``localhost:8080``

- Para finalizar la ejecución de los contenedores presionar **Ctrl + C** en la "terminal/conosla" donde se esten ejecutando.


### Herramientas de Utilidad

- Puedes descargar Postman para realizar pruebas con la API (Back-End): https://www.postman.com/
