// Catálogo de productos y categorías
// Aquí puedes agregar, editar o quitar productos y categorías fácilmente.

const categories = [
    { id: 'todos', name: 'Todos los Productos' },
    { id: 'electronica', name: 'Electrónica y Tecnología' },
    { id: 'hogar', name: 'Hogar y Bazar' },
    { id: 'Herramientas', name: 'Herramientas' },
    { id: 'indumentaria', name: 'Indumentaria y Accesorios' },
    { id: 'Camping', name: 'Camping y aire libre' }
];

const products = [
    {
        id: 1,
        name: 'Atornillador Inalámbrico Kanji Tools 21V',
        category: 'Herramientas',
        price: 67500,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2F428396fe-a59f-4fe5-8c92-2dd4b04e06a5.jpg?alt=media',
        description: 'Características destacadas:* Voltaje de 21V: Excelente potencia. * Torque de 28 Nm: Ideal para atornillar y perforar en distintos materiales.* Velocidad sin carga: 0-350 rpm para trabajos de precisión.* Velocidad con carga: 0-1350 rpm para tareas más rápidas y exigentes.* Empuñadura ergonómica: Garantizacomodidad y control.* Batería de 1300 mAh.* Tiempo de carga de 2.5 horas.'
    },
    {
        id: 2,
        name: 'Bateria de Cocina Oryx Cook Pro de 5 Piezas!',
        category: 'hogar',
        price: 68000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2Fd7fa79e7-9030-4b24-b528-e24b378cd20d.jpg?alt=media',
        description: '* Set completo de 5 piezas esenciales, ideal para renovar tu cocina.* Tapas de vidrio templado de alta resistencia con salidas de vapor integradas.* Incluye una cacerola con tapa de 24 x 8,3cm, una cacerola con tapa de 18 x 8,3cm y una Bifera de 24 x 5,3cm.'
    },
    {
        id: 3,
        name: 'Bífera Antiadherente Oryx 18x18,5 cm!',
        category: 'hogar',
        price: 30000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2F208A03E0-C805-47A0-9777-309CD557CF70.jpg?alt=media',
        description: '* Cuerpo de hierro fundido esmaltado que permite una distribución uniforme del calor en toda la superficie de cocción. * Base apta para cocinas de inducción, gas y vitrocerámica.'
    },
    {
        id: 4,
        name: 'Cafetera espresso Cuk by Gadnic de 20 Bares',
        category: 'hogar',
        price: 125000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2Fdb411f86-2106-407f-af06-1ba745aeda20.jpg?alt=media',
        description: '* Bomba de presion de 20 bares diseñada para lograr espresso mas intenso y crema mas uniforme diariamente. * Deposito removible de 1.5 litros ideal para preparar multiples bebidas.'
    },
    {
        id: 5,
        name: 'Camara de seguridad Foco Inteligente Exxtra Tech',
        category: 'electronica',
        price: 35000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2F3ed29b8d-258b-4968-a218-ba8e9623a16e.jpg?alt=media',
        description: 'La Camara de Seguridad Exxtra Tech EXCC2 está pensada para quienes desean vigilar sus espacios con mayor control y claridad * Su conectividad WiFi permite acceder a la imagen desde la app, mientras su visión panorámica de 360 grados y el motor integrado ayudan a cubrir amplias áreas con una sola unidad..'
    },
    {
        id: 6,
        name: 'Camara de Seguridad Inteligente para Exterior ExxtraTech Nuevas!',
        category: 'electronica',
        price: 40000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2F1550B931-8364-425F-AA83-DFE613D8B9E6.jpg?alt=media',
        description: 'CÁMARA DE SEGURIDAD WIFI EXXTRA TECH 360° CON CONTROL DESDE EL CELULAR *Mantén tu espacio de trabajo ordenado con compartimentos versátiles *Protegé y supervisá tu hogar, comercio, entrada o cualquier otro espacio directamente desde tu teléfono. Con la aplicación YCC365Plus podés ver en vivo, controlar el movimiento de la cámara, escuchar lo que sucede y hablar con quien se encuentre frente a ella..'
    },
    {
        id: 7,
        name: 'Espejo triple de Maquillaje Aitech',
        category: 'hogar',
        price: 30000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2F58b21816-e8fc-46d8-814b-c73d9f43357f.jpg?alt=media',
        description: 'Espejo Triple para Maquillaje con Luz LED Aitech. ** Medidas de 24cm de alto x 32cm de ancho. * Funciona con 4 pilas AAA (no incluidas) o se conecta mediante un cable USB.'
    },
    {
        id: 8,
        name: 'Mate Autocebante diferentes colores Acero inox',
        category: 'hogar',
        price: 27000,
        image: 'https://plain-enam-prod-public.komododecks.com/202610/28/5YsQsTkmhnh56vKy04CF/image.jpg',
        description: 'Capacidad: 500ml.'
    },
    {
        id: 9,
        name: 'SET DE CAÑA DE PESCAR',
        category: 'Camping',
        price: 35000,
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_819631-MLA116551338018_092026-F.webp',
        description: 'Todo lo que necesitás para disfrutar de una jornada de pesca en un solo set. Ideal tanto para quienes están comenzando como para tener un equipo práctico y completo listo para usar.INCLUYE:• Caña de pesca telescópica• Reel de pesca• Caja organizadora• Señuelos y accesorios de pesca surtidos• Anzuelos, plomadas y complementos• Kit práctico y fácil de transportar.'
    },
    {
        id: 10,
        name: 'CARPA PARA 6 PERSONAS',
        category: 'Camping',
        price: 60000,
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_647361-MLA117487411973_092026-F.webp',
        description: '2x2.2x1,45m.'
    },
    {
        id: 11,
        name: 'Sabanas Lisas Cotton Touch Blanco Paris de 2 1/2 plazas!',
        category: 'hogar',
        price: 30000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2F1B1B67CA-995F-4763-BE7E-63A35C6C1E2D.jpg?alt=media',
        description: 'Juego de sábanas Blanco Paris de 2 ½ plazas, hecho en 100% microfibra de poliéster. Colores lisos vibrantes, que no destiñen ni encogen con los lavados. El juego se compone de una sábana ajustable con elástico, una sábana superior plana y dos fundas de almohada.'
    },
    {
        id: 12,
        name: 'Pendrive Kingston de 64gb!',
        category: 'electronica',
        price: 25000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2Fa0fbd30c-822b-4e52-9413-96322515837d.jpg?alt=media',
        description: '* El disco Flash USB DataTraveler G4 de Kingston cumple las especificaciones USB 3.0 con el fin de aprovechar de esta tecnología en los nuevos notebooks, ordenadores de sobremesa y dispositivos digitales. *Capacidad 64GB.'
    },
    {
        id: 13,
        name: 'Ventilador 3 en 1 de 18" Tower',
        category: 'electronica',
        price: 65000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2F7da9456e-ac44-49d4-9c8f-c72a44ed2023.jpg?alt=media',
        description: '* 3 en1(Piso, mesa, Pared). * Potencia: 90w. * 5 Aspas Metalicas.'
    },
    {
        id: 14,
        name: 'SECA PLATO SOBRE BACHA C/PUERTA 65cm',
        category: 'hogar',
        price: 70000,
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_776640-MLA118598193284_102026-F.webp',
        description: 'Medidas: 65cm x 29cm x 77cm.'
    },
     {
        id: 15,
        name: 'Parlante Inalambrico Bluetooth de 8" Oryx Earth',
        category: 'electronica',
        price: 60000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2Fe5541799-6854-48b0-81c1-12b52d5cea36.jpg?alt=media',
        description: '* Modelo : New Earth - 1146A.Duración batería: 2/6hs - Dependiendo tipo de uso y sonido * Batería interna recargable.* Juego de Luces Led. * Entradas: Soporte USB / Tarjeta Micro SD / Radio FM / Aux-in * Incluye Microfono con Cable.'
    },
    {
        id: 16,
        name: 'Vaso Térmico Inteligente para café Aitech!',
        category: 'hogar',
        price: 22000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2FEDF71B24-1179-4FED-B2AD-E461BB5DAFBE.jpg?alt=media',
        description: 'Capacidad de 500 ml. *Fabricado en acero inoxidable 304. *Display indicador de temperatura en la tapa. *Sensor de temperatura integrado. *Tapa a rosca hermética'
    },
    {
        id: 17,
        name: 'Sabanas lisas de 1 1/2 plazas Blanco Paris!',
        category: 'hogar',
        price: 25000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2F8bd7b87c-5930-4c1d-a0a9-84da771f1d67.jpg?alt=media',
        description: 'Juego de sábanas Blanco Paris de 1 ½ plaza, hecho en 100% microfibra de poliéster. Colores lisos vibrantes, que no destiñen ni encogen con los lavados. El juego se compone de una sábana ajustable con elástico, una sábana superior plana y una funda de almohada.'
    },
    {
        id: 18,
        name: 'Caja 108 Piezas Set Juego De Tubos Bocallaves 1/2-1/4',
        category: 'Herramientas',
        price: 67800,
        image: 'https://http2.mlstatic.com/D_NQ_NP_2X_891729-MLA99435054734_112025-F.webp',
        description: 'juego de tubos de 108 piezas construido en cromo vanadio, incluye las piezas más usadas en mecánica, excelente calidad, maletín plástico con doble traba.'
    },
    {
        id: 19,
        name: 'Silla Gamer Novohome con Apoya pies!',
        category: 'electronica y tecnologia',
        price: 170000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2F1B8C343C-39F4-4F1D-9113-710558E7275D.jpg?alt=media',
        description: '- Peso máximo soportado: 120 Kg. Respaldo ergonómico de gran altura. Regulación de altura pistón hidráulico clase III con ajuste de 10 cm - Reclinación de 90° a 120°. Traba el respaldo al ángulo que más desees..'
    },
    {
        id: 20,
        name: 'Molinillo de café Manual Hudson!',
        category: 'hogar',
        price: 33000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2FBCA2A422-C738-4557-860C-0B5948869657.jpg?alt=media',
        description: '- Molinillo cerámico - Molienda regulable - Recipiente de vidrio con medidor - Manivela metálica'
    },
    {
        id: 21,
        name: 'Pava Electrica con Corte para Mate Gacyf',
        category: 'hogar',
        price: 25000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2F03a0bfcd-f1ef-4ad7-9fad-57ce5b57ac98.jpg?alt=media',
        description: 'JARRA ELECTRICA GACYF 1800W NEGRA 1.7L CON CORTE PARA MATE/CAFE.'
    }
];

// Número de WhatsApp donde recibirás los pedidos (reemplaza con tu número con código de país y área, sin + ni espacios, ej: 5491112345678)
const WHATSAPP_NUMBER = '5491144382786';
