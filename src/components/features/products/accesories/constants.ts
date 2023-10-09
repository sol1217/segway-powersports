import { Product } from '@types'
import designChildren from '@assets/jpeg/design-children.jpeg'
import designProtective from '@assets/jpeg/design-protective.jpeg'
import detailProtective from '@assets/jpeg/detail-protective.jpeg'
import bagUno from '@assets/jpeg/gallery-bag-1.jpeg'
import bagTres from '@assets/jpeg/gallery-bag-3.jpeg'
import bagCuatro from '@assets/jpeg/gallery-bag-4.jpg'
import bagCinco from '@assets/jpeg/gallery-bag-5.jpeg'
import bagSeis from '@assets/jpeg/gallery-bag-6.jpg'
import childrenUno from '@assets/jpeg/gallery-children-1.jpeg'
import childrenDos from '@assets/jpeg/gallery-children-2.jpeg'
import childrenTres from '@assets/jpeg/gallery-children-3.jpeg'
import childrenCuatro from '@assets/jpeg/gallery-children-4.jpeg'
import childrenCinco from '@assets/jpeg/gallery-children-5.jpeg'
import helmetCinco from '@assets/jpeg/gallery-helme-5.jpeg'
import helmetDos from '@assets/jpeg/gallery-helmet-2.jpeg'
import helmetCuatro from '@assets/jpeg/gallery-helmet-4.jpeg'
import helmetSeis from '@assets/jpeg/gallery-helmet-6.jpeg'
import phoneHolderSeis from '@assets/jpeg/gallery-phone-6.jpeg'
import protectiveUno from '@assets/jpeg/gallery-protective-1.jpeg'
import protectiveDos from '@assets/jpeg/gallery-protective-2.jpeg'
import protectiveTres from '@assets/jpeg/gallery-protective-3.jpeg'
import protectiveCuatro from '@assets/jpeg/gallery-protective-4.jpeg'
import protectiveCinco from '@assets/jpeg/gallery-protective-5.jpeg'
import storageUno from '@assets/jpeg/gallery-storage-1.jpeg'
import storageDos from '@assets/jpeg/gallery-storage-2.jpeg'
import storageTres from '@assets/jpeg/gallery-storage-3.jpeg'
import storageCuatro from '@assets/jpeg/gallery-storage-4.jpeg'
import storageCinco from '@assets/jpeg/gallery-storage-5.jpeg'
import storageSeis from '@assets/jpeg/gallery-storage-6.jpeg'
import resistantProtective from '@assets/jpeg/resistant-protective.jpeg'
import resistantStorage from '@assets/jpeg/resistant-storage.jpeg'
import bagImageDos from '@assets/jpg/bag-image-two.jpg'
import deportStorage from '@assets/jpg/deport-storage.jpg'
import designPhoneHolder from '@assets/jpg/desing-phone-holder.jpg'
import ergonomicsProtective from '@assets/jpg/ergonomics-protective.jpg'
import bagDos from '@assets/jpg/gallery-bag-2.jpg'
import childrenSeis from '@assets/jpg/gallery-children-6.jpg'
import helmetUno from '@assets/jpg/gallery-helmet-1.jpg'
import helmetTres from '@assets/jpg/gallery-helmet-3.jpg'
import phoneHolderUno from '@assets/jpg/gallery-phone-1.jpg'
import phoneHolderDos from '@assets/jpg/gallery-phone-2.jpg'
import phoneHolderTres from '@assets/jpg/gallery-phone-3.jpg'
import phoneHolderCinco from '@assets/jpg/gallery-phone-5.jpg'
import layerBag from '@assets/jpg/layer-bag.jpg'
import layoutBag from '@assets/jpg/layout-bag.jpg'
import sizePhoneHolder from '@assets/jpg/size-phone-holder.jpg'
import useProtective from '@assets/jpg/use-children.jpg'
import vehiculePhoneHolder from '@assets/jpg/vehicules-phone-holder.jpg'
import adaptableStorage from '@assets/png/adaptable-storage.png'
import childrenProtectiveImage from '@assets/png/children-protective-image.png'
import comfortHelmet from '@assets/png/comfort-helmet.png'
import coverHelmet from '@assets/png/cover-helmet.png'
import fabricHelmet from '@assets/png/fabric-helmet.png'
import phoneHolderCuatro from '@assets/png/gallery-phone-4.png'
import helmetImage from '@assets/png/helmet-image.png'
import bagLogo from '@assets/png/logo-bag.png'
import childrenLogo from '@assets/png/logo-CHILDREN-PROTECTIVE-GEAR-SET.png'
import helmetLogo from '@assets/png/logo-helmet.png'
import phoneLogo from '@assets/png/logo-phone-holder.png'
import protectiveLogo from '@assets/png/logo-PROTECTIVE-GEAR-SET.png'
import storageLogo from '@assets/png/logo-storage-bag.png'
import phoneHolderImage from '@assets/png/phone-holder.png'
import protectiveImage from '@assets/png/protective-image.png'
import spaceBag from '@assets/png/space-bag.png'
import storageImage from '@assets/png/storage-image.png'
import bagImage from '@assets/images/SEGWAY-VEHICULOS/accesorios/bag-image.jpeg'
import bag from '@assets/images/SEGWAY-VEHICULOS/accesorios/bag-logo.png'
import helmettwo from '@assets/images/SEGWAY-VEHICULOS/accesorios/helmet.jpg'
import storagetwo from '@assets/images/SEGWAY-VEHICULOS/accesorios/Ninebot_Kickscooter-Bag.jpg'
import helmet from '@assets/images/SEGWAY-VEHICULOS/accesorios/ninebot-helmet.png'
import phoneholdertwo from '@assets/images/SEGWAY-VEHICULOS/accesorios/ninebot-phone-holder.jpg'
import phoneholder from '@assets/images/SEGWAY-VEHICULOS/accesorios/phone-holder.jpeg'
import childrenGear from '@assets/images/SEGWAY-VEHICULOS/accesorios/pink-protective.jpg'
import storage from '@assets/images/SEGWAY-VEHICULOS/accesorios/scooter-storage-bag.jpg'
import setTwo from '@assets/images/SEGWAY-VEHICULOS/accesorios/segway-ninebot-protective-kit.jpg'
import set from '@assets/images/SEGWAY-VEHICULOS/accesorios/set.jpg'
import childrenyellow from '@assets/images/SEGWAY-VEHICULOS/accesorios/yellow-protective.jpg'

export const products: Product[] = [
  {
    name: 'SCOOTER BAG',
    alias: 'scooter-bag',
    picture: bag.src,
    price: 55,
    images: [
      {
        src: bagImageDos.src,
        width: 200,
      },
      {
        src: bagImage.src,
        width: 195,
      },
    ],
    video: '/videos/accesories.mp4',
    logo: bagLogo.src,
    completeDesciprtion:
      'Su bolsa para scooter multiusos y de alta capacidad está confeccionada con tela de alta calidad y un diseño simple, pero elegante para una movilidad total y portabilidad extrema.',
    features: [
      '2,25 libras Capacidad de peso',
      '3 litros Almacenamiento portátil',
      'Diseño minimalista de carcasa dura',
      'Fácil de abrir',
      'Precio: $55',
    ],
    featuresImage: [
      {
        src: spaceBag.src,
        titleFeatures: 'Capacidad almacenacimiento',
        featuresDescription:
          'La capacidad de 3 litros le brinda mucho espacio para llevar su teléfono, cargador, agua embotellada y otros artículos personales mientras viaja',
      },
      {
        src: layerBag.src,
        titleFeatures: 'Capa impermeable y Resistencias',
        featuresDescription:
          'La capa impermeable y resistente al sol está fabricada con material EVA y la capa exterior está cubierta con tejido de poliéster para mayor protección.',
      },
      {
        src: layoutBag.src,
        titleFeatures: 'Diseño interior amplio',
        featuresDescription:
          'El diseño del bolsillo interior de red permite guardar de forma fácil y cómoda su teléfono u otros objetos personales pequeños, Un bolso para cualquier ocasión.',
      },
    ],
    galleryImages: [
      {
        src: bagDos.src,
        height: 200,
        width: 300,
      },
      {
        src: bagCuatro.src,
        height: 200,
        width: 300,
      },
      {
        src: bagTres.src,
        height: 200,
        width: 300,
      },
      {
        src: bagUno.src,
        height: 200,
        width: 300,
      },
      {
        src: bagSeis.src,
        height: 200,
        width: 300,
      },
      {
        src: bagCinco.src,
        height: 200,
        width: 300,
      },
    ],
  },
  {
    name: 'NINEBOT HELMET',
    alias: 'ninebot-casco',
    picture: helmetImage.src,
    price: 60,
    images: [
      {
        src: helmet.src,
        width: 240,
      },
      {
        src: helmettwo.src,
        width: 195,
      },
    ],
    completeDesciprtion:
      'La unión manual del casco y un proceso de moldeado integrado crean un casco cómodo y liviano que absorberá cualquier impacto que la carretera pueda presentarle mientras conduce su scooter eléctrico',
    video: '/videos/accesories.mp4',
    features: [
      'Se adapta a una cabeza de 58 a 63 cm',
      'Desmontable y lavable',
      'Peso ligero para mayor comodidad',
      'Colores: Negro, Amarillo, Naranja',
      'Precio: $60',
    ],
    featuresImage: [
      {
        src: comfortHelmet.src,
        titleFeatures: 'Comodidad durante largos períodos',
        featuresDescription:
          'Cuenta con un forro de tela suave y transpirable que te mantiene cómodo sin importar cuánto tiempo lo uses.',
      },
      {
        src: fabricHelmet.src,
        titleFeatures: 'Diseño versátil y ajustable',
        featuresDescription:
          'Diseñado teniendo en cuenta la versatilidad y se puede ajustar para satisfacer las necesidades de cualquier ciclista adulto',
      },
      {
        src: coverHelmet.src,
        titleFeatures: 'Tela suave y transpirable',
        featuresDescription:
          'Estructura transpirable: orificios de aire para ventilación y disipación de calor, esfera giratoria de ajuste.',
      },
    ],
    logo: helmetLogo.src,
    galleryImages: [
      {
        src: helmetUno.src,
        width: 300,
        height: 200,
      },
      {
        src: helmetTres.src,
        width: 300,
        height: 200,
      },
      {
        src: helmetDos.src,
        width: 300,
        height: 200,
      },
      {
        src: helmetCuatro.src,
        width: 300,
        height: 200,
      },
      {
        src: helmetCinco.src,
        width: 300,
        height: 200,
      },
      {
        src: helmetSeis.src,
        width: 300,
        height: 200,
      },
    ],
  },
  {
    name: 'NINEBOT PHONE HOLDER',
    alias: 'phone-holder',
    price: 30,
    completeDesciprtion:
      'Mantenga el mundo a su alcance, incluso cuando esté en movimiento, con nuestro elegante soporte para teléfono.',
    images: [
      {
        src: phoneholder.src,
        width: 155,
      },
      {
        src: phoneholdertwo.src,
        width: 200,
      },
    ],
    picture: phoneHolderImage.src,
    logo: phoneLogo.src,
    video: '/videos/accesories.mp4',
    features: [
      'Se adapta a la mayoría de dispositivos ',
      'Dimensiones: 134 x 54 x 102 mm',
      'Resistencia a los arañazos',
      'Fácil instalación',
      'Precio: $30',
    ],
    featuresImage: [
      {
        src: vehiculePhoneHolder.src,
        titleFeatures: 'Aplicable en diferentes vehiculos',
        featuresDescription:
          'El soporte para teléfono es aplicable a patinetes y motocicletas eléctricas con un diámetro de 18 a 36 mm.',
      },
      {
        src: designPhoneHolder.src,
        titleFeatures: 'Diseño antideslizante',
        featuresDescription:
          'Un diseño antideslizante de doble tornillo le ofrece total seguridad, versatilidad y adaptabilidad a múltiples vehículos',
      },
      {
        src: sizePhoneHolder.src,
        titleFeatures: 'Adecuada para TODOS los tamaños',
        featuresDescription:
          'Ofrece un ancho de 5890 mm, se adapta a la mayoría de teléfonos móviles con pantallas de 46,5 pulgadas.',
      },
    ],
    galleryImages: [
      {
        src: phoneHolderUno.src,
        height: 200,
        width: 300,
      },
      {
        src: phoneHolderDos.src,
        height: 200,
        width: 300,
      },
      {
        src: phoneHolderTres.src,
        height: 200,
        width: 300,
      },
      {
        src: phoneHolderCuatro.src,
        height: 200,
        width: 300,
      },
      {
        src: phoneHolderCinco.src,
        height: 200,
        width: 300,
      },
      {
        src: phoneHolderSeis.src,
        height: 200,
        width: 300,
      },
    ],
  },
  {
    name: 'SCOOTER STORAGE BAG',
    alias: 'storage-bag',
    price: 45,
    images: [
      {
        src: storage.src,
        width: 300,
      },
      {
        src: storagetwo.src,
        width: 300,
      },
    ],
    completeDesciprtion:
      'La bolsa de almacenamiento oficial para patinetes Segway-Ninebot es una bolsa de transporte adecuada para transportar todas las series de patinetes eléctricos ',
    logo: storageLogo.src,
    picture: storageImage.src,
    video: '/videos/accesories.mp4',
    features: [
      'Ergonómica, fácil de cerrar.',
      'Resistente al agua',
      'Fácil de almacenar',
      'Dimensiones: 108 x 16 x 44 cm',
      'Precio: $45',
    ],
    featuresImage: [
      {
        src: resistantStorage.src,
        titleFeatures: 'Resistente al agua',
        featuresDescription:
          'Este bolso presenta un elegante diseño de doble cremallera, es resistente al desgaste y repelente al agua de nivel 4. ',
      },
      {
        src: adaptableStorage.src,
        titleFeatures: 'Cremallera Deportiva',
        featuresDescription:
          'Es ergonómica de sostener, conveniente para arrastre, reduce mucho la presión para llevar el scooter.',
      },
      {
        src: deportStorage.src,
        titleFeatures: 'Varias adaptabilidades',
        featuresDescription:
          'Compatible con casi todas las series Ninebot de Segway Electric Kickscooter. El tamaño es de 42.5 x 6.3 pulgadas.',
      },
    ],
    galleryImages: [
      {
        src: storageUno.src,
        width: 300,
        height: 200,
      },
      {
        src: storageDos.src,
        width: 300,
        height: 200,
      },
      {
        src: storageTres.src,
        width: 300,
        height: 200,
      },
      {
        src: storageCuatro.src,
        width: 300,
        height: 200,
      },
      {
        src: storageCinco.src,
        width: 300,
        height: 200,
      },
      {
        src: storageSeis.src,
        width: 300,
        height: 200,
      },
    ],
  },
  {
    name: 'PROTECTIVE GEAR SET',
    alias: 'gear-set',
    price: 45,
    images: [
      {
        src: setTwo.src,
        width: 260,
      },
      {
        src: set.src,
        width: 220,
      },
    ],
    completeDesciprtion:
      'Material grueso de alta calidad, fácil de llevar, resistente al sudor, resistente al agua, moderno y cómodo.',
    logo: protectiveLogo.src,
    picture: protectiveImage.src,
    video: '/videos/accesories.mp4',
    features: [
      'Resistente al agua,',
      'Material grueso de alta calidad',
      'Diseño de tapa plana',
      'Protector y cómodo de llevar',
      'Seguridad integral.',
      'Precio: $45',
    ],
    featuresImage: [
      {
        src: detailProtective.src,
        titleFeatures: 'Perfecto en cada detalle',
        featuresDescription:
          'Un casco, dos muñequeras, dos rodilleras y coderas, Botón de acero inoxidable simple y suave.',
      },
      {
        src: designProtective.src,
        titleFeatures: 'Resistente a los golpes',
        featuresDescription:
          'El material PE resistente al frío, como un cuenco, resistente a los golpes, reduce el daño a las rodillas.',
      },
      {
        src: resistantProtective.src,
        titleFeatures: 'Diseño estable',
        featuresDescription:
          'Diseño de tapa plana para mayor estabilidad, las mangas elásticas aseguran que las almohadillas se ajusten.',
      },
    ],
    galleryImages: [
      {
        src: protectiveUno.src,
        height: 200,
        width: 300,
      },
      {
        src: protectiveDos.src,
        height: 200,
        width: 300,
      },
      {
        src: protectiveTres.src,
        height: 200,
        width: 300,
      },
      {
        src: protectiveCuatro.src,
        height: 200,
        width: 300,
      },
      {
        src: protectiveCinco.src,
        height: 200,
        width: 300,
      },
      {
        src: resistantProtective.src,
        height: 200,
        width: 300,
      },
    ],
  },
  {
    name: 'CHILDREN PROTECTIVE SET',
    alias: 'generatot-sgw2700i',
    price: 45,
    images: [
      {
        src: childrenGear.src,
        width: 230,
      },
      {
        src: childrenyellow.src,
        width: 220,
      },
    ],
    completeDesciprtion:
      'Protección personal para niños, Set de equipo de protección Segway-Ninebot (S)',
    picture: childrenProtectiveImage.src,
    logo: childrenLogo.src,
    video: '/videos/accesories.mp4',
    features: [
      'Incluyen: rodilleras * 2 coderas * 2 palmas',
      'Color del producto: Amarillo y Rosa',
      'Circunferencia de la rodilla: 25-34 CM',
      'Circunferencia del codo: 17-22 CM',
      'Precio: $45',
    ],
    featuresImage: [
      {
        src: designChildren.src,
        titleFeatures: 'Diseño lacónico',
        featuresDescription:
          'El diseño minimalista del kit de protección se complementan con características como alta resistencia y facilidad de uso.',
      },
      {
        src: ergonomicsProtective.src,
        titleFeatures: 'Ergonomía',
        featuresDescription:
          'Gracias a su elasticidad, los elementos del equipo se ajustan bien, no resbalan y no restringen el movimiento.',
      },
      {
        src: useProtective.src,
        titleFeatures: 'Facilidad de uso',
        featuresDescription:
          'Las coderas, las palmas y las rodilleras están hechas de material elástico y sujetas con suaves cierres.',
      },
    ],
    galleryImages: [
      {
        src: childrenUno.src,
        height: 230,
        width: 300,
      },
      {
        src: childrenDos.src,
        height: 230,
        width: 300,
      },
      {
        src: childrenTres.src,
        height: 230,
        width: 300,
      },
      {
        src: childrenCuatro.src,
        height: 230,
        width: 300,
      },
      {
        src: childrenCinco.src,
        height: 230,
        width: 300,
      },
      {
        src: childrenSeis.src,
        height: 230,
        width: 300,
      },
    ],
  },
]
