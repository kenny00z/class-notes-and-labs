HTML & Bassics Lessons & Labs



[HTML]



-Basic Layout[01-basic-layout.html]: Composición y estructura básica de como empezar un html.

-Meta Tags[02-meta-tags.html]: Distintos Meta Tags y sus funciones tales como "viewport" de cara a ajustarse a cualquier screen de distintos dispositivos.

-Typography[03-typography.html]: Los distintos (h1,h2,h3...,h6)
como titulos o texto relevante que da entrada o encabeza ya sea párrafos, secciones y demás, y los distintos tipos de"tags" aplicables a tipografia  de los textos; (bold,del,italics,strong.. etc).

-Links (Anchor Tags)[04-links.html]: Links o hipervínculos; como generar links y tipos de estos, ya sean locales, a otra web, abriendose en una nueva ventana o sustituyendo la misma.

-Images[05-images.html]: Como insertar imagenes en nuestros códigos html a traves del tag "img" aplicando la referencia(url) al "src" y aplicando una breve explicación en el apartado "alt" por si la foto no cargase.
*Se pueden crear fotos que sean links.

-List[06-list.html]:  Tipos de listas y comportamientos; <ul></ul> unordered lists o <ol></ol> ordered lists , y su contenido estructurado con <li></il>.

-Layout[07-layout.html]:  Tags de los tipos de "Semantic elements y no semantic elements" y su aplicación; entendiendo los primeros como los que su propio tag determina su propia aplicación o proposito, mientras que en el segundo caso son los que no tienen relación entre su tag y su funcionamiento(semánticamente hablando).

-[08-layout-example.html]: Ejemplo de estructura de layout 2.0.

-Tables[09-tables.html]: tag  <table></table> y los tags internos para estrucurar esta; <th> "table head", <tr> para crear una row y <td> dentro de <tr> para el número de rows que son iguales al número de <th> (si tenemos 5 <th> harán falta 5 <td> por cada <tr> para abordar toda la tabla).

-Inline and Blocks[10-inline-vs-blocks.html]: Diferencias de comportamiento y funcionalidad entre Inline elements y Block elements; Inline son aquellos que ocupan una instancia del tamaño del tag en la parte html sin romper el flujo de lo que tenga antes o después, mientras que los Block elementes ocupan todo el ancho y alto que ocupe el elemento introducido en este, "empujando" los elementos de su alrededor.

-Id's[11-ids-html]:  un Id define un identificador único que no debe repetirse en todo el documento, este id se utiliza para vincularlo tanto a CSS como a scripts en otros lenguajes.

-Classes[12-classes.html]:  Otro tipo de identificador, en este caso creamos el identificador con la intención de poder reutilizarlo o de aplicarlo a mas de un elemento con el proposito de estilar.

-Ejemplo semántico consolidado[13-semantic-example-consolidated.html]:Ejemplo semántico tanto de HTML como de CSS con todo lo mencionado hasta ahora.

-Forms [14-forms.html]:!!!!!!----------REPASAR MEJOR PARA SINTETIZAR--------!!!!!!!


[CSS]




Básicos[01-Basics.html]: Tipos de manera de estilar nuestros html, tanto abriendo un tag <style></style>  en este mismo en el <head> , estilando en los propios tags ej:(<h style="color:red">Simplified Version</h3>) y por último y el de aplicación actual crear un link entre tu html y tu documento de CSS ej:(<link rel="stylesheet" href="./css/style.css" />)  rel es el atributo que hace referencia a (preguntar mejor) y href es el atributo que hace referencia a la ruta de nuestro archivo .css.

Selectores[02-selectors.html]:  !!!!!!!!------ Tipos de selectores y aplicaciones de estos, entender mejor los de los hijos para aplicarlo. ------!!!!

Fonts[03-fonts.html]:  como aplicar una font fuera de las incluidas de serie y como importarla a nuestro documento, sea a través de html o de css, siendo esta última a través de css la mejor behavior aplicando en la primera línea de tu archivo css --> @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap");    //  * acordarse de una vez declarada en los estilos , en esa misma línea aplicar más tipos de backup por si fallase, VSC ayuda con autorellenar este caso.*

Propiedades de texto[04-text-properties.html]: Propiedades aplicables a los estilos en las formas de tipo texto, tales como (font-weight,text-align,font-family,text-transform...,).

Colores[05-Colors.html]: Maneras de aplicar propiedades de colores a nuestros elementos ya sea texto, bordes, backgrounds y demás clasificados en tres tipos, "a pelo" ej; color:red; color:blue; etc, la manera hexadecimal ej; color: #4b3b3b;, y el sistema RGB (Red,Green,Blue) ej; color: rgba(48, 56, 175, ); (insertar explicación).

Bordes y backgrounds[06-borders-background.html]: Tags y propiedades para aplicar borders & backgrounds; los bordes tienen 3 propiedades, una que indica el ancho de este en píxeles, tipo de borde indicada por ejemplo como solid u otras más y el color que se puede determinar de las maneras ya vistas con anterioridad rgb etc. Para backgrounds tenemos las propiedades por ejemplo de color tamaño que ocupa y demás haciendo así que nuestros bordes ocupen por ejemplo la totalidad del bloque al que ha sido asginado como por ejemplo , (background-size:cover;) tenemos mñas propiedades para que nuestro borde se ajuste al estilo que buscamos ya sea simple color o sean imagenes.

Box Model[07-box-model.html]: Muy interesante siendo esta una propiedad con la que podemos modificar distintos tipos de inline-elements creando un espacio de box, determinando sus propiedades de tamaño.

Alinear con Float[08-float-align.html]: Maneras de situar mover y alinear con las propiedades de float.

Links y botones[09-links-buttons.hmtl]: Tag para crear botones y como estilarlos en css con las propiedades pertinentes.

Estilo de menus[10-menu-styling]:


ACABAR ESTA TARDE ( PERO DE VERDAD )





((([[[---MID TERM PROJECT WEEK---]]])))




[VUE]

My First Component -- Crear COMPONENTES; tipos de variable dentro del script segun el metodo de la libreria de Vue , {ref , reactive} ref(); se utilizaz para datos primivitos (que van solos o que no forman parte de nada más) mientras que el método reactive(); se aplica a aquellos datos no primitivos como por ejemplo; objetos, arrays , arrays de objetos etc.., estos métodos permiten trabajar con estas variables dentro del html de una manera reactiva .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         









