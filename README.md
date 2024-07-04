
# USO DE APIS RANDOM USER GENERATOR Y QUOTES REST
## PRUEBA TECNICA – INTECHMON JAVASCRIPT VAINILLA  - CSS -


#### Se debe armar una lista de 10 usuarios. Al cargar la pagina se debe mostrar tarjetas conteniendo una miniatura de la foto y al menos 5 datos de cada uno. 
#### Buscador de Usuarios: : La página debe contar con un buscador de usuarios ubicado en la parte superior central.  Este buscador debe permitir filtrar los usuarios por nombre.
#### Opcional: Modal de Información detallada. Al hacer clic en uno de los usuarios del listado, se debe abrir un modal, este debe cargar toda la información no sensible del usuario junto a su  foto. Cita famosa Aleatoria:  En el modal de usuario, se debe agregar una cita famosa aleatoria (en la parte inferior central del modal incluyendo su autor.
#### Para cumplir la tarea se debe trabajar con las APIs RANDOM USER GENERATOR Y QUOTES REST


![image](https://github.com/VeronicaBravoDevs/prueba-tecnica_APIS/assets/105925406/36c2d427-44bf-45da-9f9f-4df4cfcac4f4)



Para esta tarea entonces necesitamos usar 2 APIs, pero que son las APIs? Son protocolos que intermedian entre aplicaciones para acceder a sus funcionalidades, en este caso serán los perfiles y las citas.

Creamos las variables para tomar los bloques del html donde agregaremos dinámicamente la informacion.

Para eso usamos la función ***randomUser*** que es asíncrona y de esta manera poder hacer la solicitud de los datos de 10 perfiles a la API con fetch.
Agregamos **await**  la cual aplicamos para esperar que se completa la operación asíncrona con fetch por lo tanto espera que la solicitud se complete y se obtenga los datos antes de seguir la ejecución, **fetch** devuelve una promesa que se resuelve con la respuesta de la solicitud ***(response)*** que llevamos a formato JSON en  ***randomData***, luego tomamos esos datos en ***randomUsers***, recorreremos cada usuario con el método **forEach**


Creamos por cada usuario un div con la constante ***card*** armando asi la tarjeta, esta incluirá sus datos junto a una imagen miniatura a través de ***innerHTML***. Definimos la estructura del html ayudándonos de template strings combinando la estructura de html con la información de la api random user. Agregamos a este div una clase 

El evento que se escucha con ***card.addEventListener*** al hacer click sobre la tarjeta dispara un modal, teniendo como referencia ese usuario mostrara información adicional y sumara un párrafo que tome la información de la segunda API para mostrar una cita con su autor.

Con ***appendChild*** sumo un nodo al dom para poder agregar las tarjetas.

Para la búsqueda tomamos el elemento ***busqueda*** y le agregamos un evento que se activa cada vez que se escribe algo en el campo de búsqueda, al usar **toLowerCase** hara que no importe si ingresa mayúscula o minúscula ya que lleva todo a minúscula

En la constante ***cards*** gurado todos los elementos que tengan la clase **card**, la recorremos buscando donde se encuentre la etiqueta <strong> para tomar el nombre, entonces verificamos si tiene similitud con lo guardado en la constante ***consulta***, si es asi el display pasa a block para mostrarla, caso contrario pasa a none para ocultarla

No hay que olvidar llamar a la función ***randomUser ()*** 
