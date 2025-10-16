const productos = [
    {
        id: 1,
        nombre: "Aparador Uspallata",
        categoria: "Aparadores",
        descripcion: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
        precio: 150000,
        imagen: "assets/aparadorUspallata.png",
        especificaciones: [
            { titulo: "Medidas", valor: "180 × 45 × 75 cm" },
            { titulo: "Materiales", valor: "Nogal macizo FSC®, herrajes de latón" },
            { titulo: "Acabado", valor: "Aceite natural ecológico" },
            { titulo: "Peso", valor: "68 kg" },
            { titulo: "Capacidad", valor: "6 compartimentos interiores" }
        ],
        destacado: false
    },
    {
        id: 2,
        nombre: "Biblioteca Recoleta",
        categoria: "Bibliotecas",
        descripcion: "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
        precio: 110000,
        imagen: "assets/bibliotecaRecoleta.png",
        especificaciones: [
            { titulo: "Medidas", valor: "100 × 35 × 200 cm" },
            { titulo: "Materiales", valor: "Estructura de acero, estantes de roble" },
            { titulo: "Acabado", valor: "Laca mate ecológica" },
            { titulo: "Capacidad", valor: "45 kg por estante" },
            { titulo: "Modulares", valor: "5 estantes ajustables" }
        ],
        destacado: true
    },
    {
        id: 3,
        nombre: "Butaca Mendoza",
        categoria: "Butacas",
        descripcion: "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
        precio: 95000,
        imagen: "assets/butacaMendoza.png",
        especificaciones: [
            { titulo: "Medidas", valor: "80 × 75 × 85 cm" },
            { titulo: "Materiales", valor: "Guatambú macizo, tela bouclé" },
            { titulo: "Acabado", valor: "Cera vegetal, tapizado premium" },
            { titulo: "Tapizado", valor: "Repelente al agua y manchas" },
            { titulo: "Confort", valor: "Espuma alta densidad" }
        ],
        destacado: false
    },
    {
        id: 4,
        nombre: "Sillón Copacabana",
        categoria: "Sillones",
        descripcion: "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
        precio: 185000,
        imagen: "assets/sillonCopacabana.png",
        especificaciones: [
            { titulo: "Medidas", valor: "90 × 85 × 95 cm" },
            { titulo: "Materiales", valor: "Cuero curtido vegetal, acero pintado" },
            { titulo: "Acabado", valor: "Cuero anilina premium" },
            { titulo: "Rotación", valor: "360° silenciosa y suave" },
            { titulo: "Garantía", valor: "10 años en estructura" }
        ],
        destacado: true
    },
    {
        id: 5,
        nombre: "Mesa de Centro Araucaria",
        categoria: "Mesas",
        descripcion: "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
        precio: 120000,
        imagen: "assets/mesaDeCentroAraucaria.png",
        especificaciones: [
            { titulo: "Medidas", valor: "90 × 90 × 45 cm" },
            { titulo: "Materiales", valor: "Sobre de mármol Patagonia, patas de nogal" },
            { titulo: "Acabado", valor: "Mármol pulido, aceite natural en madera" },
            { titulo: "Peso", valor: "42 kg" },
            { titulo: "Carga máxima", valor: "25 kg distribuidos" }
        ],
        destacado: false
    },
    {
        id: 6,
        nombre: "Mesa de Noche Aconcagua",
        categoria: "Mesas",
        descripcion: "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
        precio: 75000,
        imagen: "assets/mesaDeNocheAconcagua.png",
        especificaciones: [
            { titulo: "Medidas", valor: "45 × 35 × 60 cm" },
            { titulo: "Materiales", valor: "Roble macizo FSC®, herrajes soft-close" },
            { titulo: "Acabado", valor: "Barniz mate de poliuretano" },
            { titulo: "Almacenamiento", valor: "1 cajón + repisa inferior" },
            { titulo: "Características", valor: "Cajón con cierre suave" }
        ],
        destacado: true
    },
    {
        id: 7,
        nombre: "Cama Neuquén",
        categoria: "Camas",
        descripcion: "Cama plataforma con cabecero flotante tapizado en lino natural y estructura de madera maciza. Su diseño minimalista y sofisticado crea un ambiente de serenidad y elegancia, perfecto para dormitorios contemporáneos que buscan paz y simplicidad.",
        precio: 200000,
        imagen: "assets/camaNeuquen.png",
        especificaciones: [
            { titulo: "Medidas", valor: "160 × 200 × 90 cm" },
            { titulo: "Materiales", valor: "Roble macizo FSC®, tapizado lino" },
            { titulo: "Acabado", valor: "Aceite natural, tapizado premium" },
            { titulo: "Colchón", valor: "Compatible con colchón 160×200" },
            { titulo: "Características", valor: "Cabecero flotante acolchado" }
        ],
        destacado: false
    },
    {
        id: 8,
        nombre: "Sofá Patagonia",
        categoria: "Sofás",
        descripcion: "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
        precio: 210000,
        imagen: "assets/sofaPatagonia.png",
        especificaciones: [
            { titulo: "Medidas", valor: "220 × 90 × 80 cm" },
            { titulo: "Estructura", valor: "Madera de eucalipto certificada FSC®" },
            { titulo: "Tapizado", valor: "Lino 100% natural premium" },
            { titulo: "Relleno", valor: "Espuma HR + plumón reciclado" },
            { titulo: "Sostenibilidad", valor: "Materiales 100% reciclables" }
        ],
        destacado: true
    },
    {
        id: 9,
        nombre: "Mesa Comedor Pampa",
        categoria: "Mesas",
        descripcion: "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
        precio: 160000,
        imagen: "assets/mesaComedorPampa.png",
        especificaciones: [
            { titulo: "Medidas", valor: "160-240 × 90 × 75 cm" },
            { titulo: "Materiales", valor: "Roble macizo FSC®, mecanismo alemán" },
            { titulo: "Acabado", valor: "Aceite-cera natural" },
            { titulo: "Capacidad", valor: "6-10 comensales" },
            { titulo: "Extensión", valor: "Sistema de mariposa central" }
        ],
        destacado: false
    },
    {
        id: 10,
        nombre: "Sillas Córdoba",
        categoria: "Sillas",
        descripcion: "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
        precio: 95000,
        imagen: "assets/sillasCordoba.png",
        especificaciones: [
            { titulo: "Medidas", valor: "45 × 52 × 80 cm (cada una)" },
            { titulo: "Materiales", valor: "Contrachapado nogal, tubo de acero" },
            { titulo: "Acabado", valor: "Laca mate, pintura epoxi" },
            { titulo: "Apilables", valor: "Hasta 6 sillas" },
            { titulo: "Incluye", valor: "Set de 4 sillas" }
        ],
        destacado: true
    },
    {
        id: 11,
        nombre: "Escritorio Costa",
        categoria: "Escritorios",
        descripcion: "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
        precio: 130000,
        imagen: "assets/escritorioCosta.png",
        especificaciones: [
            { titulo: "Medidas", valor: "120 × 60 × 75 cm" },
            { titulo: "Materiales", valor: "Bambú laminado, herrajes ocultos" },
            { titulo: "Acabado", valor: "Laca mate resistente" },
            { titulo: "Almacenamiento", valor: "1 cajón con organizador" },
            { titulo: "Cables", valor: "Pasacables integrado" }
        ],
        destacado: false
    },
    {
        id: 12,
        nombre: "Silla de Trabajo Belgrano",
        categoria: "Sillas",
        descripcion: "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
        precio: 80000,
        imagen: "assets/sillaDeTrabajoBelgrano.png",
        especificaciones: [
            { titulo: "Medidas", valor: "60 × 60 × 90-100 cm" },
            { titulo: "Materiales", valor: "Malla técnica, tejido reciclado" },
            { titulo: "Acabado", valor: "Base cromada, tapizado premium" },
            { titulo: "Regulación", valor: "Altura + inclinación respaldo" },
            { titulo: "Certificación", valor: "Ergonomía europea EN 1335" }
        ],
        destacado: false
    }
]

module.exports = productos;