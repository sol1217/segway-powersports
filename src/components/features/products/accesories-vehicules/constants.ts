import { Product } from '@types'
import at6S from '@assets/jpeg/ate-s-skip.jpeg'
import bumperBlack from '@assets/jpeg/front-Bumper-Black.jpeg'
import aluminumFive from '@assets/jpeg/gallery-aluminum-3.jpeg'
import aluminumThree from '@assets/jpeg/gallery-aluminum-5.jpeg'
import at6lOne from '@assets/jpeg/gallery-at6l-1.jpeg'
import at6lThree from '@assets/jpeg/gallery-at6l-3.jpeg'
import at6lFive from '@assets/jpeg/gallery-at6l-5.jpeg'
import bumperOne from '@assets/jpeg/gallery-bumper-1.jpeg'
import bumperFive from '@assets/jpeg/gallery-bumper-2.jpeg'
import bumperThree from '@assets/jpeg/gallery-bumper-3.jpeg'
import bumperFour from '@assets/jpeg/gallery-bumper-5.jpeg'
import frontFive from '@assets/jpeg/gallery-front-1.jpeg'
import frontThree from '@assets/jpeg/gallery-front-4.jpeg'
import frontDos from '@assets/jpeg/gallery-front-6.jpeg'
import generatorOne from '@assets/jpeg/gallery-generator-1.jpeg'
import generatorTwo from '@assets/jpeg/gallery-generator-2.jpeg'
import generatorThree from '@assets/jpeg/gallery-generator-4.jpeg'
import generatorFive from '@assets/jpeg/gallery-generator-5.jpeg'
import rearDos from '@assets/jpeg/gallery-rear-2.jpeg'
import rearThree from '@assets/jpeg/gallery-rear-3.jpeg'
import rearFour from '@assets/jpeg/gallery-rear-4.jpeg'
import rearFive from '@assets/jpeg/gallery-rear-5.jpeg'
import rearSix from '@assets/jpeg/gallery-rear-6.jpeg'
import aluminium from '@assets/jpg/ALUMINUM-two.jpg'
import at6SImage from '@assets/jpg/at6s-Image.jpg'
import at6STwo from '@assets/jpg/ates.jpg'
import bumperBlue from '@assets/jpg/front-bumper-blue.jpeg'
import bumperGreen from '@assets/jpg/front-bumper-green.jpeg'
import bumperRed from '@assets/jpg/front-bumper-red.jpeg'
import front from '@assets/jpg/front-cargo-2.jpeg'
import aluminumFour from '@assets/jpg/gallery-aluminum-4.jpg'
import at6lTwo from '@assets/jpg/gallery-at6l-2.jpg'
import bumperTwo from '@assets/jpg/gallery-bumper-4.jpg'
import generatorSix from '@assets/jpg/gallery-generator-6.jpg'
import rearOne from '@assets/jpg/gallery-rear-1.jpg'
import generator from '@assets/jpg/generador.jpeg'
import rear from '@assets/jpg/rear-cargo-2.jpg'
import rearTwo from '@assets/jpg/rear-cargo.jpg'
import aluminiumTwo from '@assets/jpg/s-kip-plates.jpg'
import ateL from '@assets/jpg/ship-plates-2.jpg'
import aluminumImage from '@assets/png/aluminum-image.png'
import aluminumLogo from '@assets/png/alumium-arm-logo.png'
import at6lImage from '@assets/png/at6-l-image.png'
import at6SkipLogo from '@assets/png/at6-l-logo.png'
import at6SLogo from '@assets/png/at6-s-logo.png'
import bumperImage from '@assets/png/bumper-image.png'
import bumperLogo from '@assets/png/bumper-logo.png'
import frontImage from '@assets/png/front-cargo-box.png'
import frontLogo from '@assets/png/front-cargo-logo.png'
import frontTwo from '@assets/png/front-cargo.png'
import aluminumOne from '@assets/png/gallery-aluminum-1.png'
import aluminumTwo from '@assets/png/gallery-aluminum-2.png'
import aluminumSix from '@assets/png/gallery-aluminum-6.png'
import at6lFour from '@assets/png/gallery-at6l-4.png'
import at6lSix from '@assets/png/gallery-at6l-6.png'
import atesOne from '@assets/png/gallery-at6s-1.png'
import atesTwo from '@assets/png/gallery-at6s-2.png'
import atesThree from '@assets/png/gallery-at6s-3.png'
import atesFour from '@assets/png/gallery-at6s-4.png'
import atesFive from '@assets/png/gallery-at6s-5.png'
import atesSix from '@assets/png/gallery-at6s-6.png'
import bumperSix from '@assets/png/gallery-bumper-6.png'
import frontSix from '@assets/png/gallery-front-2.png'
import frontOne from '@assets/png/gallery-front-3.png'
import frontFour from '@assets/png/gallery-front-5.png'
import generatorFour from '@assets/png/gallery-generator-4.png'
import generatortwo from '@assets/png/generator-image.png'
import generatorImage from '@assets/png/generator-image.png'
import generatorLogo from '@assets/png/generator-logo.png'
import rearLogo from '@assets/png/rear-cargo-logo.png'
import rearImage from '@assets/png/rear-image.png'
import at6LTwo from '@assets/png/skip-plates.png'

export const products: Product[] = [
  {
    name: 'FRONT CARGO BOX',
    alias: 'front-cargo-box',
    images: [
      {
        src: front.src,
        width: 310,
        price: '37.5 Litros',
      },
      {
        src: frontTwo.src,
        width: 306,
        price: '37.5 Litros',
      },
    ],
    logo: frontLogo.src,
    video: '/videos/accesoriesvehicules.mp4',
    picture: frontImage.src,
    completeDesciprtion:
      'Tiene alta densidad resistente a impactos y de alta calidad, esta caja ofrece todo lo que necesita para viajar, trabajar, pescar o cazar.',
    features: [
      '37.5 Litros.',
      'Extra grande sellada al agua.',
      'Fuerte y duradero.',
      'Color: negro.',
      'Material: plástico.',
    ],
    galleryImages: [
      {
        src: frontOne.src,
        width: 300,
        height: 200,
      },
      {
        src: frontDos.src,
        width: 300,
        height: 200,
      },
      {
        src: frontFour.src,
        width: 300,
        height: 200,
      },
      {
        src: frontThree.src,
        width: 300,
        height: 200,
      },
      {
        src: frontSix.src,
        width: 300,
        height: 200,
      },
      {
        src: frontFive.src,
        width: 300,
        height: 200,
      },
    ],
  },
  {
    name: 'AT6 L SKID PLATES',
    alias: 'at6-l-skid-plates',
    images: [
      {
        src: ateL.src,
        width: 155,
        price: 'Peso 4.38Kg',
      },
      {
        src: at6LTwo.src,
        width: 270,
        price: 'Peso 4.38Kg',
      },
    ],
    logo: at6SkipLogo.src,
    video: '/videos/accesoriesvehicules.mp4',
    picture: at6lImage.src,
    completeDesciprtion:
      'Juego de placas protectoras de chasis completo, protege el tren de rodaje y los brazos en A de rocas y piedras.',
    features: [
      'Protección inferior y delantera.',
      'Aberturas para drenaje de lodo.',
      'Aluminum material.',
      'Superficie anodizada.',
      'Peso 4,38Kg.',
    ],
    galleryImages: [
      {
        src: at6lOne.src,
        width: 300,
        height: 200,
      },
      {
        src: at6LTwo.src,
        width: 300,
        height: 200,
      },
      {
        src: at6lThree.src,
        width: 300,
        height: 200,
      },
      {
        src: at6lFour.src,
        width: 300,
        height: 200,
      },
      {
        src: at6lFive.src,
        width: 300,
        height: 200,
      },
      {
        src: at6lSix.src,
        width: 300,
        height: 200,
      },
    ],
  },
  {
    name: 'AT6 S SKID PLATES',
    alias: 'at6-s-skip',
    images: [
      {
        src: at6STwo.src,
        width: 270,
        price: 'Peso 4.08Kg',
      },
      {
        src: atesOne.src,
        width: 270,
        price: 'Peso 4.08Kg',
      },
    ],
    logo: at6SLogo.src,
    video: '/videos/accesoriesvehicules.mp4',
    picture: at6SImage.src,
    completeDesciprtion:
      'Juego de placas protectoras de chasis completo, protege el tren de rodaje y los brazos en A de rocas y piedras.',
    features: [
      'Protección inferior y delantera.',
      'Aberturas para drenaje de lodo.',
      'Aluminum material.',
      'Superficie anodizada.',
      'Peso 4,08Kg.',
    ],
    galleryImages: [
      {
        src: atesOne.src,
        width: 300,
        height: 200,
      },
      {
        src: atesFour.src,
        width: 300,
        height: 200,
      },
      {
        src: atesThree.src,
        width: 300,
        height: 200,
      },
      {
        src: atesTwo.src,
        width: 300,
        height: 200,
      },
      {
        src: atesFive.src,
        width: 300,
        height: 200,
      },
      {
        src: atesSix.src,
        width: 300,
        height: 200,
      },
    ],
  },
  {
    name: 'ALUMINUM ARM GUARD ASSY',
    alias: 'aluminum-arm-guard',
    images: [
      {
        src: aluminiumTwo.src,
        width: 260,
        price: 'Peso 1.33Kg',
      },
      {
        src: aluminium.src,
        width: 300,
        price: 'Peso 1.33Kg',
      },
    ],
    logo: aluminumLogo.src,
    video: '/videos/accesoriesvehicules.mp4',
    picture: aluminumImage.src,
    completeDesciprtion:
      'Adecuado para la versión del modelo de ancho normal de 64 (163 cm), instrucciones de instalación detalladas .',
    features: [
      'Accesorios de montaje.',
      'Espesor 2mm.',
      'Aluminum material.',
      'Superficie anodizada.',
      'Peso 1,33Kg.',
    ],
    galleryImages: [
      {
        src: aluminumOne.src,
        width: 300,
        height: 200,
      },
      {
        src: aluminumThree.src,
        width: 300,
        height: 200,
      },
      {
        src: aluminumTwo.src,
        width: 300,
        height: 200,
      },
      {
        src: aluminumFour.src,
        width: 300,
        height: 200,
      },
      {
        src: aluminumSix.src,
        width: 300,
        height: 200,
      },
      {
        src: aluminumFive.src,
        width: 300,
        height: 200,
      },
    ],
  },
  {
    name: 'REAR CARGO BOX',
    alias: 'rear-cargo-box',
    images: [
      {
        src: rear.src,
        width: 236,
        price: '104 Litros',
      },
      {
        src: rearTwo.src,
        width: 210,
        price: '104 Litros',
      },
    ],
    logo: rearLogo.src,
    video: '/videos/accesoriesvehicules.mp4',
    picture: rearImage.src,
    completeDesciprtion: 'Una caja de carga trasera para ATV que se adapta a tu quad.',
    features: [
      'Portaequipajes trasero.',
      'Las nervaduras aumentan la durabilidad.',
      'Aluminum material.',
      'Superficie anodizada.',
      '104 Litros.',
    ],
    galleryImages: [
      {
        src: rearOne.src,
        width: 300,
        height: 200,
      },
      {
        src: rearDos.src,
        width: 300,
        height: 200,
      },
      {
        src: rearThree.src,
        width: 300,
        height: 200,
      },
      {
        src: rearFour.src,
        width: 300,
        height: 200,
      },
      {
        src: rearFive.src,
        width: 300,
        height: 200,
      },
      {
        src: rearSix.src,
        width: 300,
        height: 200,
      },
    ],
  },
  {
    name: 'SNARLER FRONT BUMPER KIT',
    alias: 'front-bumper-kit',
    images: [
      {
        src: bumperRed.src,
        width: 290,
        price: 'Peso 6.13Kg',
      },
      {
        src: bumperBlue.src,
        width: 290,
        price: 'Electroforesis',
      },
      {
        src: bumperGreen.src,
        width: 290,
        price: 'Peso 6.13Kg',
      },
    ],
    logo: bumperLogo.src,
    video: '/videos/accesoriesvehicules.mp4',
    picture: bumperImage.src,
    completeDesciprtion:
      'Parachoques delantero de acero, construcción de acero de alta resistencia, con recubrimiento en polvo resistente a la corrosión.',
    features: [
      'Fortalecer los tubos de soldadura.',
      'Las nervaduras aumentan la durabilidad.',
      'Superficie recubierta de pintura.',
      'Peso 6,13Kg.',
      'Colores: Azul, Rojo, Negro, Verde.',
    ],
    galleryImages: [
      {
        src: bumperOne.src,
        width: 300,
        height: 200,
      },
      {
        src: bumperTwo.src,
        width: 300,
        height: 200,
      },
      {
        src: bumperThree.src,
        width: 300,
        height: 200,
      },
      {
        src: frontSix.src,
        width: 300,
        height: 200,
      },
      {
        src: bumperFour.src,
        width: 300,
        height: 200,
      },
      {
        src: bumperFive.src,
        width: 300,
        height: 200,
      },
    ],
  },
  {
    name: 'INVERTER GENERATOR SGW2700i',
    alias: 'generatot-sgw2700i',
    images: [
      {
        src: generator.src,
        width: 200,
        price: 'Peso 19.5kg',
      },
      {
        src: generatortwo.src,
        width: 200,
        price: 'Peso 19.5kg',
      },
    ],
    logo: generatorLogo.src,
    video: '/videos/accesoriesvehicules.mp4',
    picture: generatorImage.src,
    completeDesciprtion:
      'El generador inversor compacto portátil está diseñado para alimentar aparatos eléctricos de baja potencia.',
    features: [
      'Controles integrados en el panel de control ',
      'Canal de aire dual',
      'Función de reinicio',
      'Menores emisiones',
      'Capó para una mejor refrigeración',
    ],
    galleryImages: [
      {
        src: generatorOne.src,
        width: 300,
        height: 200,
      },
      {
        src: generatortwo.src,
        width: 300,
        height: 200,
      },
      {
        src: generatorThree.src,
        width: 300,
        height: 200,
      },
      {
        src: generatorFour.src,
        width: 300,
        height: 200,
      },
      {
        src: generatorFive.src,
        width: 300,
        height: 200,
      },
      {
        src: generatorSix.src,
        width: 300,
        height: 200,
      },
    ],
  },
]
