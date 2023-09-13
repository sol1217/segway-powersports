import logoVillain from '@assets/png/villain-logo.png'
import { EColors, IProduct } from '@features/products/vehicule/types'
import scooterblack from '@assets/images/SEGWAY VEHICULOS/escooter e110s/E110S-GRIS-1_1100x.webp'
import scooterred from '@assets/images/SEGWAY VEHICULOS/escooter e110s/segway-e110s-2.jpg'
import fuglemanred from '@assets/images/SEGWAY VEHICULOS/FUGLEMAN UT10 X/blanca.png'
import fuglemanblack from '@assets/images/SEGWAY VEHICULOS/FUGLEMAN UT10 X/negro.png'
import fuglemangreen from '@assets/images/SEGWAY VEHICULOS/FUGLEMAN UT10 X/verde.png'
import bikeblack from '@assets/images/SEGWAY VEHICULOS/Segway Dirt eBike X160/negra.jpeg'
import bikered from '@assets/images/SEGWAY VEHICULOS/Segway Dirt eBike X160/segway-ebike-x160-1-min.jpg'
import glblue from '@assets/images/SEGWAY VEHICULOS/SNARLER 600GL/600blue.png'
import glcamo from '@assets/images/SEGWAY VEHICULOS/SNARLER 600GL/600camo.png'
import glgreen from '@assets/images/SEGWAY VEHICULOS/SNARLER 600GL/600glgreen.png'
import glgred from '@assets/images/SEGWAY VEHICULOS/SNARLER 600GL/600red.png'
import at6 from '@assets/images/SEGWAY VEHICULOS/SNARLER AT6 LE/BLANCO.png'
import at6gray from '@assets/images/SEGWAY VEHICULOS/SNARLER AT6 LE/gris.png'
import villainred from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/blanca.png'
import villainblack from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/negro.jpeg'
import villaingreen from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'
import purposeFugleman from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'
import logofugleman from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'
import modelVillain from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'
import modelfugleman from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'
import modelSnarler from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'
import logo from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'
import logosnarler from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'
import logoaccesories from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'

export const products: IProduct[] = [
  {
    images: [
      { color: EColors.Greeen, url: fuglemangreen.src },
      { color: EColors.Gray, url: fuglemanblack.src },
      { color: EColors.Red, url: fuglemanred.src },
    ],
    name: 'FUGLEMAN UT10 X',
    description:
      'Se distingue del modelo base gracias a un equipamiento de serie que te garantiza más confort y diversión.',
    alias: 'fugleman-ut10',
    completeDesciprtion:
      'El UTV Fugleman es un vehículo todoterreno robusto y fácil de utilizar. Haciendo justicia a su nombre, el Fugleman será siempre lider en el desempeño de cualquier tarea, la cual te resultará fácil y muy divertida de hacer. La versión «Full Extras » se distingue del modelo base gracias a un equipamiento de serie que te garantiza más confod y diversión. ',
    video: '/videos/villain.mp4',
    features: [
      'DIRECCIÓN ASISTIDA (EPS)',
      'CABESTRANTE Y BOLA DE REMOLOUE',
      'DEPÓSITO DE COMBUSTIBLE DE 45 LITROS',
      'TOUCH SCREEN 10.4',
      'LLANTAS DE ALUMINIO 14 CON BEADLOK',
      'MEDIAS PUERTAS',
    ],
    panorama: 'https://powersports.segway.com/720/UTV/VR/index.html',
    logo: '',
    model: '',
    featuresImage: [
      {
        src: purposeFugleman.src,
        titleFeatures: 'UTV PARA CUALQUIER PROPOSITO',
        featuresDescription:
          'Con su diseño futurista pasando por su comportamiento altamente capacitado, el Fugleman no es únicamente un gran compañero en cualquier tarea profesional, sino también un gran socio cuando se trata de explorar nuevos caminos.',
      },
      {
        src: at6.src,
        titleFeatures: 'MAYOR COMODIDAD',
        featuresDescription:
          'El volante y el asiento ajustables contribuyen directamente a la máxima comodidad del conductor. El respaldo central plegable también ofrece opciones más funcionales.',
      },
      {
        src: at6.src,
        titleFeatures: 'VERSATILIDAD',
        featuresDescription:
          'La capacidad de almacenamiento y transporte del Fugleman se ve facilitada gracias a la caja de carga trasera y su sistema basculante. La dimensión interior es de 93,5 x 135 x 30 cm con un peso máximo de 350kgs.',
      },
    ],
    galleryImages: [
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
    ],
  },
  {
    images: [
      { color: EColors.Red, url: villainred.src },
      { color: EColors.Gray, url: villainblack.src },
      { color: EColors.Greeen, url: villaingreen.src },
    ],
    name: 'VILLAIN SX10 W',
    description:
      'Una postura de conducción y diseño deportivos, le convierten en un SSV de primer nivel.',
    alias: 'villain-sx10',
    completeDesciprtion:
      'El Villain se presenta como la referencia del concepto Powersports de Segway. Su potente motor junto con las características premium y una postura de conducción y diseño deportivos, le convierten en un SSV de primer nivel. ',
    video: '/videos/villain.mp4',
    features: [
      'DIRECCIÓN ASISTIDA (EPS)',
      'CABESTRANTE Y BOLA DE REMOLOUE',
      'DEPÓSITO DE COMBUSTIBLE DE 44 LITROS',
      'TOUCH SCREEN 10.4',
      'LLANTAS DE ALUMINIO 14 CON BEADLOK',
      'SUSPENSIÓN A GAS DE MÁXIMO RENDIMIENTO',
    ],
    panorama: 'https://powersports.segway.com/720/SSV/VR/index.html',
    logo: '',
    model: '',
    featuresImage: [
      {
        src: at6.src,
        titleFeatures: 'INGENIERIA A TODA PRUEBA',
        featuresDescription:
          'Toda la carne en el asador! Su ingeniaría demuestra no solo una gran fiabilidad sino una perfecta adaptación a cualquier tarea o condición del terreno.',
      },
      {
        src: at6.src,
        titleFeatures: 'MAYOR COMODIDAD',
        featuresDescription:
          'El volante y el asiento ajustables contribuyen directamente a la máxima comodidad del conductor. El respaldo central plegable también ofrece opciones más funcionales.',
      },
      {
        src: at6.src,
        titleFeatures: 'EPS INTELIGENTE',
        featuresDescription:
          'La Dirección Electrónica Asistida puede ser configurada instantáneamente a cualquiera de las tres opciones disponibles (standard, confort y sport). Esto permite que tengas una experiencia totalmente personalizada',
      },
    ],
    galleryImages: [
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
    ],
  },
  {
    images: [
      { color: EColors.Blue, url: glblue.src },
      { color: EColors.Greeen, url: glgreen.src },
      { color: EColors.Red, url: glgred.src },
      { color: EColors.Camouflaged, url: glcamo.src },
    ],
    name: 'SNARLER 600GL',
    description:
      'Con una apariencia atrayente, su chasis largo es muy confortable tanto para ocio o trabajo. ',
    alias: 'snarler-gl',
    logo: '',
    model: '',
    completeDesciprtion:
      'Una parte importante de la experiencia de conducción que ofrece el Snarler 600 GL es el sistema Smart Moving & Smart Fun a través de una aplicación móvil, que permite a los conductores acceder a los datos del vehículo en tiempo real. De esta manera, tiene una interacción inteligente y muchas opciones como configuraciones de seguridad, configuraciones exteriores, mapas de ubicación, conexión inalámbrica al vehículo … todo en tiempo real.',
    video: '/videos/villain.mp4',
    features: [
      'DIRECCIÓN ASISTIDA ',
      'CABESTRANTE Y BOLA DE REMOLOUE',
      'DEPÓSITO DE COMBUSTIBLE DE 23 LITROS',
      'VERSIÓN LARGA',
      'PARRILLA DELANTERA Y TRASERA',
      'APLICACIÓN PARA SMARTPHONE «SMART MOVING»',
    ],
    panorama: '',
    featuresImage: [
      {
        src: at6.src,
        titleFeatures: 'ILUMINACIÓN LED',
        featuresDescription:
          'Con un diseño osado y radicalmente diferente, el Snarler 600GL es una verdadera fiera preparada para dominar la oscuridad de los bosques.',
      },
      {
        src: at6.src,
        titleFeatures: 'DISEÑO AGRESIVO',
        featuresDescription:
          'El Snarler AT6 se caracteriza por sus líneas suaves y fluidas que le confieren una belleza extraordinaria, y al mismo tiempo nos recuerda una posición de ataque, típica de los felinos.',
      },
      {
        src: at6.src,
        titleFeatures: 'ROBUSTEZ',
        featuresDescription:
          'Carrocería robusta y de líneas modernas que permiten una excelente conducción.',
      },
    ],
    galleryImages: [
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
    ],
  },
  {
    images: [
      { color: EColors.Red, url: at6.src },
      { color: EColors.Gray, url: at6gray.src },
    ],
    name: 'SNARLER AT6 LE',
    description:
      'Capacidades extraordinarias para el desempeño de las tareas más exigentes en las condiciones más extremas.',
    alias: 'snarler-at6',
    completeDesciprtion:
      'Con una apariencia atrayente, su chasis largo es muy confortable tanto para ocio o trabajo, el Snarler AT6 LE está equipado con un potente motor de 567 CC que dota a este ATV de unas capacidades extraordinarias para el desempeño de las tareas más exigentes en las condiciones más extremas.',
    video: '/videos/villain.mp4',
    logo: '',
    model: '',
    features: [
      'TRASMISION CVT CON BLOQUE DIFENCIAL ',
      'CABESTRANTE Y BOLA DE REMOLOUE',
      'POTENCIA DE HASTA 46 HP',
      'VERSIÓN LARGA',
      'PARRILLA DELANTERA Y TRASERA',
      'APLICACIÓN PARA SMARTPHONE «SMART MOVING»',
    ],
    panorama: '',
    featuresImage: [
      {
        src: at6.src,
        titleFeatures: 'ILUMINACIÓN LED',
        featuresDescription:
          'Con un diseño osado y radicalmente diferente, el Snarler 600GL es una verdadera fiera preparada para dominar la oscuridad de los bosques.',
      },
      {
        src: at6.src,
        titleFeatures: 'ROBUSTEZ',
        featuresDescription:
          'Carrocería robusta y de líneas modernas que permiten una excelente conducción.',
      },
      {
        src: at6.src,
        titleFeatures: 'DISEÑO AGRESIVO',
        featuresDescription:
          'El Snarler AT6 se caracteriza por sus líneas suaves y fluidas que le confieren una belleza extraordinaria, y al mismo tiempo nos recuerda una posición de ataque, típica de los felinos.',
      },
    ],
    galleryImages: [
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
    ],
  },
  {
    images: [
      { color: EColors.Red, url: scooterred.src },
      { color: EColors.Gray, url: scooterblack.src },
    ],
    name: 'NINEBOT SCOOTER E110S',
    description:
      'una de las mejores alternativas para la movilidad urbana recorriendo la ciudad de una manera fácil y segura.',
    alias: 'scooter-e110s',
    completeDesciprtion:
      'SEGWAY E110S es una de las mejores alternativas para la movilidad urbana recorriendo la ciudad de una manera fácil y segura, con una autonomía promedio de 75 km y una velocidad máxima de 57km/h, además de una potencia máxima de 1500W.',
    video: '/videos/villain.mp4',
    logo: '',
    model: '',
    features: [
      'DIRECCIÓN ASISTIDA (EPS)',
      'CABESTRANTE Y BOLA DE REMOLOUE',
      'DEPÓSITO DE COMBUSTIBLE DE 44 LITROS',
      'TOUCH SCREEN 10.4',
      'LLANTAS DE ALUMINIO 14 CON BEADLOK',
      'SUSPENSIÓN A GAS DE MÁXIMO RENDIMIENTO',
    ],
    panorama: '',
    featuresImage: [
      {
        src: at6.src,
        titleFeatures: 'POTENCIA',
        featuresDescription:
          'Cuenta con una potencia de 1500w para recorrer la cuidad de una manera fácil y segura.',
      },
      {
        src: at6.src,
        titleFeatures: 'SUSPENSION DELANTERA',
        featuresDescription: 'Telescópica para tener el mayor confort posible en el día a día',
      },
      {
        src: at6.src,
        titleFeatures: 'PANEL DE CONTROL INTELIGENTE',
        featuresDescription:
          'Gracias a los colores que brinda el panel podrás saber el nivel de batería, códigos de error, recuperación de energía y mucho más.',
      },
    ],
    galleryImages: [
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
    ],
  },
  {
    images: [
      { color: EColors.Red, url: bikered.src },
      { color: EColors.Gray, url: bikeblack.src },
    ],
    name: 'DIRT EBIKE X160',
    description:
      'Ofrece un rendimiento todoterreno superior para todo tipo de usuarios. Es compacto, liviano, fácil de mantener y económico.',
    alias: 'ebike-x160',
    completeDesciprtion:
      'SEGWAY E110S es una de las mejores alternativas para la movilidad urbana recorriendo la ciudad de una manera fácil y segura, con una autonomía promedio de 75 km y una velocidad máxima de 57km/h, además de una potencia máxima de 1500W.',
    video: '/videos/dirty bike.mp4',
    features: [
      'DIRECCIÓN ASISTIDA (EPS)',
      'CABESTRANTE Y BOLA DE REMOLOUE',
      'DEPÓSITO DE COMBUSTIBLE DE 44 LITROS',
      'TOUCH SCREEN 10.4',
      'LLANTAS DE ALUMINIO 14 CON BEADLOK',
      'SUSPENSIÓN A GAS DE MÁXIMO RENDIMIENTO',
    ],
    panorama: '',
    logo: '',
    model: '',
    featuresImage: [
      {
        src: at6.src,
        titleFeatures: 'BICICLETA DE TIERRA ELÉCTRICA QUE CAMBIA EL JUEGO',
        featuresDescription:
          'La bicicleta eléctrica Segway Dirt presenta un rendimiento todoterreno superior en una carrocería compacta y ecológica. La Dirt eBike se sienta cómodamente entre las bicicletas de montaña y las tradicionales bicicletas de cross.',
      },
      {
        src: at6.src,
        titleFeatures: 'CAPACIDAD DE BATERÍA DE CARGA RÁPIDA Y DURADERA',
        featuresDescription:
          'La batería de carga rápida tarda solo 4 horas en cargarse por completo y ofrece un alcance de 74,6 millas con una sola carga (modelo X260). Las baterías intercambiables llevarán tu aventura aún más lejos.',
      },
      {
        src: at6.src,
        titleFeatures: 'BICICLETA DE TIERRA ELÉCTRICA DE ALTO RENDIMIENTO PARA TODOS',
        featuresDescription:
          'The Segway Dirt eBike’s superior performance in a compact body makes it possible for new riders to dive into the exciting off-road adventures.',
      },
    ],
    galleryImages: [
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
      {
        src: at6.src,
        width: 120,
      },
    ],
  },
]
