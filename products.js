// Catálogo de productos y categorías
// Aquí puedes agregar, editar o quitar productos y categorías fácilmente.

const categories = [
    { id: 'todos', name: 'Todos los Productos' },
    { id: 'electronica', name: 'Electrónica y Tecnología' },
    { id: 'hogar', name: 'Hogar y Bazar' },
    { id: 'Herramientas', name: 'Herramientas' },
    { id: 'indumentaria', name: 'Indumentaria y Accesorios' },
    { id: 'Camping', name: 'Camping y aire libre' },
    { id: 'Herramientas', name: 'Herramientas' },
    { id: 'varios', name: 'Varios / Oportunidades' }
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
        category: 'hogar',
        price: 35000,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2F3ed29b8d-258b-4968-a218-ba8e9623a16e.jpg?alt=media',
        description: 'La Camara de Seguridad Exxtra Tech EXCC2 está pensada para quienes desean vigilar sus espacios con mayor control y claridad * Su conectividad WiFi permite acceder a la imagen desde la app, mientras su visión panorámica de 360 grados y el motor integrado ayudan a cubrir amplias áreas con una sola unidad..'
    },
    {
        id: 6,
        name: 'Camara de Seguridad Inteligente para Exterior ExxtraTech Nuevas!',
        category: 'hogar',
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
        name: 'Mate Autocebante',
        category: 'hogar',
        price: 30000,
        image: 'https://deportodosur.com.ar/wp-content/uploads/2025/05/Dani-2025-05-24T094538.340.png',
        description: 'Capacidad: 500ml.'
    },
    {
        id: 9,
        name: 'Pava Electrica con Corte para Mate Gacyf',
        category: 'hogar',
        price: 23500,
        image: 'https://images-cdn.kyte.site/v0/b/kyte-7c484.appspot.com/o/Iobk17pi7meoHjxdVEM79ySdVj93%2F03a0bfcd-f1ef-4ad7-9fad-57ce5b57ac98.jpg?alt=media',
        description: 'JARRA ELECTRICA GACYF 1800W NEGRA 1.7L CON CORTE PARA MATE/CAFE.'
    }
];

// Número de WhatsApp donde recibirás los pedidos (reemplaza con tu número con código de país y área, sin + ni espacios, ej: 5491112345678)
const WHATSAPP_NUMBER = '5491144382786';
