# Bitácora Viajera

Blog de viajes estático, proyecto académico de 2026 de Valentina Gonzalez y Guillermina Valiante. Reúne guías de Francia, Italia y Brasil para lectores de habla hispana. Los textos ofrecen información editorial y no afirman experiencias personales de las autoras.

## Abrir el proyecto

Abrí `index.html` con Live Server o directamente desde el navegador. No requiere instalación, dependencias, backend ni compilación. HTML, CSS y JavaScript puro. Todas las fotografías se sirven desde `img/`; Google Fonts requiere conexión y cuenta con alternativas de sistema.

## Actualización de Italia y Brasil — 16 de noviembre de 2026

Se conserva la identidad visual crema, arena, oliva y terracota, con Lora y Source Sans 3. Se reutilizan cabeceras, navegación, tarjetas, botones, pies de página y controles «Ver más». Las imágenes alternan con los textos en atractivos; el hospedaje utiliza tarjetas y la gastronomía, filas editoriales. En pantallas pequeñas los bloques se apilan.

| Guía | Lugares para visitar | Hospedaje | Gastronomía |
| --- | --- | --- | --- |
| Italia | Coliseo, Uffizi, Basílica de San Marcos, Duomo di Milano | THE CAMP by Maggiore Suites, Hotel Royal Plaza, Viareggio Family Collection | ADEVA, Nannarella, Da Michele |
| Brasil | Cristo Redentor y Pan de Azúcar, Cataratas del Iguazú, Pelourinho | Arena Copacabana, Sanma, Monte Pascoal | Casa da Feijoada, Santo Cupim, Casa de Tereza |

Brasil incorpora «¡Bem-vindos ao Brasil!» y mantiene accesos visibles a las tres categorías. Cada una de las 19 fichas nuevas tiene fotografía, ubicación, descripción, datos destacados, contenido ampliable y enlace a su fuente. Las direcciones se encuentran en el contenido ampliado de alojamientos y restaurantes.

El recorrido de ambas guías es **Lugares → Hospedaje → Gastronomía → Prepará tu próximo viaje**, con botones al final de cada categoría. Se conservan enlaces hacia Francia, el otro país y la portada. La referencia a Twine del encargo se conserva como recorrido narrativo entre categorías en las páginas HTML existentes; el proyecto disponible no incluye archivos de Twine ni un motor de pasajes.

No se modificaron la portada, Francia, Nosotras, Contacto ni `js/funciones.js`. Las reglas CSS nuevas están limitadas a las guías ampliadas. Se ampliaron los créditos y las comprobaciones para acompañar el contenido nuevo.

## Estructura

- `index.html`: portada y acceso a destinos.
- `italia.html`, `brasil.html`: guías ampliadas con tres categorías y cierre de planificación.
- `francia.html`: guía existente conservada.
- `acerca.html`, `contacto.html`: presentación y formulario de demostración conservados.
- `creditos.html`: atribuciones y licencias accesibles desde el pie de todas las páginas.
- `css/estilos.css`: estilos compartidos y ampliación editorial responsive.
- `js/funciones.js`: menú, desplegables, formulario local y comportamiento de desplazamiento.
- `img/`: fotografías locales y `fuentes.json`, con metadatos y fichas originales.

## Revisión de datos y fuentes

Se consultaron las fuentes siguientes para esta actualización. La fecha de consulta no garantiza la vigencia futura de sus contenidos; antes de viajar hay que confirmar tarifas, horarios, cartas y servicios. No se publican precios de alojamientos ni calificaciones o rankings de restaurantes.

Correcciones relevantes:

- Uffizi: cierre habitual los **lunes**, no los martes. La página oficial consultada indica martes a domingo, 8:15–18:30; entradas de €25 el mismo día, €29 anticipadas y €2 reducidas con requisitos y acreditación. Hay audioguías. Las aperturas extraordinarias y avisos pueden modificar la visita.
- Coliseo: reserva de franja horaria; venta desde 30 días antes según el parque; billetes nominativos y documento de identidad. Los precios históricos de €18/€24 se identifican como referencias que no deben asumirse vigentes; se remite al comparador oficial de recorridos.
- San Marcos: se distingue la visita turística del culto, con billetes diferentes para basílica, Pala de Oro y museo. La consulta de la boletería no permitió confirmar un horario o importe único: se enlaza su calendario oficial.
- Duomo: no se presentan €14/€19/€22 como tarifas vigentes. Hay distintas combinaciones y modalidades de ascenso; se enlaza el sitio oficial para la fecha elegida.
- ADEVA: el sitio oficial informa una mudanza en agosto de 2025 a **Via dei Maroniti 29**, cerca de Trevi. Via del Metastasio 21 corresponde a CiPasso. La ficha explica por qué el salón pequeño, el entorno de Piazza Navona/Tíber y el jazz del material inicial no describen la sede actual.
- Da Michele: dirección Piazza Monte Grappa 1/A confirmada por la marca, que sitúa la sede en **Flaminio**, no en Prati, tras el traslado de julio de 2025.
- Monte Pascoal: Avenida Oceânica 591 confirmada en la página de contacto. Sanma indica Rodovia das Cataratas km 21; su motor de reservas también identifica Avenida das Cataratas 12280.
- Santo Cupim: dirección confirmada en sus canales oficiales. No se confirmó una programación vigente de música en vivo; el texto recomienda consultar la agenda.

Las descripciones de servicios parten del material aportado y se contrastaron con las páginas de los alojamientos accesibles. Se indica confirmar fechas, categorías, suplementos y condiciones; la sauna y las conexiones específicas de agua de THE CAMP se mantienen como consultas a realizar, sin garantizar su disponibilidad. La inclusión de cada plato en la carta del día también debe consultarse con el restaurante.

### Fuentes por ficha

- Italia · El Coliseo: [Información oficial y reservas](https://colosseo.it/en/opening-times-and-tickets/).
- Italia · Galería Uffizi: [Información oficial y reservas](https://www.uffizi.it/en/the-uffizi).
- Italia · Basílica de San Marcos: [Información oficial y reservas](https://www.basilicasanmarco.it/).
- Italia · Duomo di Milano: [Información oficial y reservas](https://www.duomomilano.it/).
- Italia · THE CAMP by Maggiore Suites: [Información oficial y reservas](https://maggiore-suites.com/en/camp/faq).
- Italia · Hotel Royal Plaza: [Información oficial y reservas](https://www.royalplaza.it/servizi/).
- Italia · Club del Sole — Viareggio Family Collection: [Información oficial y reservas](https://www.clubdelsole.com/it/destinazioni/toscana-maremma-e-versilia/italia-family-camping-village-viareggio).
- Italia · Adeva Cucina Moderna: [Información oficial y reservas](https://www.adevaitalia.it/).
- Italia · Nannarella Trattoria Romana: [Información oficial y reservas](https://nannarellaroma.it/).
- Italia · L’Antica Pizzeria Da Michele: [Información oficial y reservas](https://www.micheleintheworld.com/lantica-pizzeria-da-michele-roma-si-sposta-in-piazza-monte-grappa/).
- Brasil · Cristo Redentor y Pan de Azúcar: [Información oficial y reservas](https://www.tremdocorcovado.rio/).
- Brasil · Cataratas del Iguazú: [Información oficial y reservas](https://cataratasdoiguacu.com.br/).
- Brasil · Pelourinho: [Patrimonio e historia · UNESCO](https://whc.unesco.org/en/list/309/).
- Brasil · Arena Copacabana Hotel: [Información oficial y reservas](https://www.arenahotel.com.br/arena-hoteis/arena-copacabana).
- Brasil · Sanma Hotel: [Información oficial y reservas](https://www.sanmahotel.com.br/).
- Brasil · Monte Pascoal Praia Hotel: [Información oficial y reservas](https://montepascoalpraiahotel.com.br/).
- Brasil · Casa da Feijoada: [Información oficial y reservas](https://casadafeijoada.com.br/).
- Brasil · Santo Cupim: [Canales oficiales y consultas](https://linktr.ee/santocupimoficial).
- Brasil · Restaurante Casa de Tereza: [Información oficial y reservas](https://casadetereza.com.br/sobre/).

Fuentes complementarias consultadas:

- [THE CAMP: instalaciones y baños privados](https://maggiore-suites.com/en/camp/facilities) y [tipos de alojamiento](https://maggiore-suites.com/en/camp/accommodations).
- [Royal Plaza: ubicación y categoría](https://www.royalplaza.it/hotel/).
- [Arena: direcciones de contacto](https://www.arenahotel.com.br/contatos).
- [Sanma: dirección en su motor de reservas](https://book.omnibees.com/hotel/13019/contacts?lang=pt-BR).
- [Monte Pascoal: dirección de contacto](https://montepascoalpraiahotel.com.br/contato/).
- [Casa da Feijoada: ficha de Riotur](https://riotur.rio/onde_comer/casa-da-feijoada/).
- [Pan de Azúcar: teleférico oficial](https://www.bondinho.com.br/).

Los enlaces de los portales oficiales dentro de las fichas sirven también para comprobar reservas y avisos; no se garantiza que todos los servicios o fechas estén disponibles. Las fuentes fotográficas se registran por separado a continuación.

## Fotografías y licencias

Se incorporaron **13 fotografías reales** desde Wikimedia Commons. Después de la limpieza final se distribuyen **23 fotografías utilizadas** en las páginas. Se retiraron tres fotografías anteriores que ya no se mostraban; sus atribuciones y licencias se conservan como registro histórico, tanto aquí como en los créditos. Las fichas de las nuevas imágenes se consultaron el 16 de noviembre de 2026; las anteriores conservan la documentación de la edición del 8 de noviembre. `img/fuentes.json` registra autor, licencia, enlace de licencia, ficha original y, para los archivos nuevos, fecha y adaptación. Las tres fichas históricas de archivos retirados se identifican con `included: false`.

Se descargaron miniaturas verificadas de hasta 1100 px de ancho y se recomprimieron a JPEG con calidad 82 usando System.Drawing. Los recortes de presentación usan CSS `object-fit: cover`. Se conservan las licencias de origen: las adaptaciones CC BY-SA se ofrecen bajo la misma licencia, las CC BY conservan sus condiciones y las CC0 se mantienen como CC0. No se generaron fotografías con IA ni se atribuye una licencia global nueva al código previo.

Los pies aclaran las imágenes representativas: lago para THE CAMP, costa de Rímini y Viareggio para los alojamientos italianos; Roma para ADEVA; carbonara y pizza para restaurantes; playas, cataratas y costa de Barra para hoteles de Brasil; feijoada, churrasco y moqueca para gastronomía. El churrasco no se identifica como un corte de cupim. La pizza se fotografió en Nápoles y la feijoada en São Luís; ninguna se presenta como plato servido por el negocio reseñado. Las atribuciones también están disponibles en `creditos.html` y desde los pies de foto.

| Archivo | Autoría | Licencia | Fuente |
| --- | --- | --- | --- |
| `paris-torre-eiffel.jpg` | Jorge Royan | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Paris_-_The_Eiffel_Tower_in_spring_-_2307.jpg) |
| `paris-montmartre.jpg` | Stavros Argyropoulos | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Montmartre,_Paris_-_2023.jpg) |
| `paris-hospedaje.jpg` | PPR 19 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Premier_room,_The_Peninsula_Paris,_4_June_2014.jpg) |
| `croissants.jpg` | בר | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Croissant_In_Austria.jpg) |
| `roma-coliseo.jpg` | Nicholas Hartmann | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Rome_Colosseum_exterior_panorama.jpg) |
| `venecia-canales.jpg` | Wolfgang Moroder | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg) |
| `italia-hospedaje.jpg` (histórico, no incluido) | Thomas Duesing | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Siena_-_hotel_room_-_2012-5.jpg) |
| `pizza-napolitana.jpg` | Valerio Capello at English Wikipedia | [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/) | [Ficha original](https://commons.wikimedia.org/wiki/File:Eq_it-na_pizza-margherita_sep2005_sml.jpg) |
| `rio-de-janeiro.jpg` | Wilfredor | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) | [Ficha original](https://commons.wikimedia.org/wiki/File:Ipanema_and_Leblon_as_seen_from_Morro_Dois_Irm%C3%A3os,_with_Lagoa_and_Cantagalo_in_the_background,_Rio_de_Janeiro,_Brazil.jpg) |
| `copacabana.jpg` | Adam Jones, Ph.D. | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Panorama_of_Copacabana_Beach_-_Rio_de_Janeiro_-_Brazil.jpg) |
| `brasil-hospedaje.jpg` (histórico, no incluido) | Paul R. Burley | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Hotel_da_Bahia-12808_02.jpg) |
| `pao-de-queijo.jpg` (histórico, no incluido) | Acfariac | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Pao_de_queijo_brasil.jpg) |
| `florencia.jpg` | Jan Drewes | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Panorama_of_the_Ponte_Vecchio_in_Florence,_Italy.jpg) |
| `uffizi.jpg` | Txllxt TxllxT | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Firenze_-_Florence_-_Portico_degli_Uffizi_-_Uffizi_Courtyard_-_View_West_towards_Ponte_Vecchio.jpg) |
| `sanmarcos.jpg` | Petar Milosevic | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:San_Marco_cathedral_in_Venice.JPG) |
| `duomo.jpg` | Terragio67 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Duomo_(Milano)_2022.jpg) |
| `iguazu.jpg` | Mariordo (Mario Roberto Durán Ortiz) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Iguazu_Falls_Panorama_2009.jpg) |
| `pelourinho.jpg` | Matti Blume | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Largo_do_Pelourinho,_Salvador_20150719-DSC05452.JPG) |
| `maggiore.jpg` | Schmock | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Pino_sulla_Sponda_del_Lago_Maggiore.JPG) |
| `rimini.jpg` | Acediscovery | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Rimini-Beach.jpg) |
| `viareggio.jpg` | DimiTalen | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) | [Ficha original](https://commons.wikimedia.org/wiki/File:Path_through_the_dunes_to_Lecciona_beach,_Viareggio,_2010.jpg) |
| `feijoada.jpg` | Ridiculopathy | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) | [Ficha original](https://commons.wikimedia.org/wiki/File:Feijoada_(Brazilian_dish),_S%C3%A3o_Lu%C3%ADs,_Maranh%C3%A3o.jpg) |
| `carbonara.jpg` | Javier Somoza | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Espaguetis_carbonara.jpg) |
| `moqueca.jpg` | BR | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Moqueca.jpg) |
| `barra.jpg` | acediscovery | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Salvador-Brazil-Farol-da-Barra-sunset.jpg) |
| `churrasco.jpg` | Eduardo Gerhardt Martins | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) | [Ficha original](https://commons.wikimedia.org/wiki/File:Churrasco_Campeiro.jpg) |

[Lora](https://fonts.google.com/specimen/Lora/license) y [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3/license) utilizan SIL Open Font License. Los datos de atribución adicional de los originales se mantienen en `img/fuentes.json` y los créditos existentes.

## Interacciones y accesibilidad

Los **22 controles** «Ver más / Ver menos» del sitio (10 de Italia, 9 de Brasil y 3 de Francia) identifican su contenido con `aria-controls` y actualizan `aria-expanded`. Sin JavaScript, el contenido ampliado permanece visible mediante `noscript`. Se conserva el salto al contenido, los focos visibles y la preferencia de movimiento reducido.

El menú móvil se cierra al seleccionar un enlace, pulsar Escape, hacer clic fuera o pasar a escritorio. Escape restaura el foco. Los enlaces con ancla conservan la sección solicitada; sin ancla, el controlador `pageshow` inicia arriba. No se alteró esa lógica.

El formulario continúa siendo una demostración: valida localmente, cancela el envío y no almacena ni transmite datos. Sin JavaScript permanece deshabilitado. No se agregaron frameworks ni dependencias.

## Herramientas y uso de inteligencia artificial

Se utilizó IA para asistir en organización editorial, redacción, contraste de fuentes, programación y comprobaciones. Las fotografías son de autores reales documentados. Esto no acredita viajes ni experiencias de las alumnas. Las autoras deben revisar el contenido según las condiciones de su cursada.

Se usaron Python y Node.js para comprobaciones, curl para descargar recursos públicos y System.Drawing para optimizar y decodificar imágenes. Estas herramientas de preparación no son necesarias para visitar el sitio. No se instalaron paquetes ni se creó una herramienta de compilación.

## Verificación

Antes de la limpieza se ejecutaron correctamente los dos verificadores de desarrollo. Después se retiraron porque no intervienen en la ejecución del sitio. Se conservaron las comprobaciones en memoria durante la revisión final y se volvió a verificar la lógica de las interacciones después de eliminarlos, sin agregar archivos al proyecto.

La sintaxis del JavaScript se puede seguir comprobando, opcionalmente, con Node.js:

```text
node --check js/funciones.js
```

Comprobaciones realizadas: siete páginas, rutas locales y anclas válidas; imágenes JPEG presentes con texto alternativo y dimensiones; IDs únicos; relaciones de los 22 desplegables; conteos de Italia 4/3/3 y Brasil 3/3/3; recorrido entre categorías y planificación; sintaxis JavaScript; lógica del menú, controles, desplazamiento y formulario mediante un DOM simulado. Las fotografías nuevas se decodificaron con System.Drawing y se inspeccionaron en una hoja de contacto local.

Límite de verificación: el host de navegador y el acceso nativo no están disponibles en esta sesión. No se afirma una prueba visual real del responsive ni de interacciones en navegador. Se revisaron las reglas CSS de columnas y apilamiento a 900/700 px. Queda comprobar en navegador 360/390/768/1440 px, encuadres, ausencia de desbordamiento, desplazamiento real hacia las anclas, teclado y validación HTML5 nativa. Las pruebas simuladas no reemplazan esa revisión.

## Limpieza final y publicación

La entrega contiene las siete páginas HTML en la raíz, `README.md`, `css/`, `js/` e `img/`. Se retiraron dos scripts auxiliares de verificación y tres fotografías sin uso en las páginas, después de comprobar sus referencias. Los temporales de investigación y generación de contenido ya no estaban presentes. Se mantienen los créditos y las licencias, incluida la documentación histórica de las fotografías retiradas. No se modificaron las páginas HTML, el CSS, el JavaScript ni las fotografías conservadas.

Las siete páginas son accesibles entre sí mediante la navegación. Las 147 referencias locales y anclas se comprobaron respetando exactamente mayúsculas y minúsculas; las rutas de la web son relativas y no dependen de una ruta local de Windows ni de un servidor de desarrollo. Se comprobaron las 23 fotografías conservadas, sin duplicados exactos ni imágenes sin uso. La revisión de los archivos de texto no detectó contraseñas, claves privadas ni patrones habituales de tokens o credenciales.

La carpeta está preparada para publicarse como sitio estático en GitHub Pages: `index.html` está en la raíz y no hay que instalar dependencias ni generar una compilación. Esta limpieza no realiza la publicación. Google Fonts continúa requiriendo conexión y el formulario sigue siendo una demostración sin envío de datos. Se recomienda completar la revisión visual pendiente en un navegador antes de la entrega.
