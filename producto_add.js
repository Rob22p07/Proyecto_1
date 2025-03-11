const productos = [
    {
      nombre: "Eco-Cepillo Dental",
      descripcion: "Cepillo de bambú biodegradable con cerdas de carbón activado.",
      precio: 5.99,
      cantidad: 100,
      imagen: "https://assets.tuzonamarket.com/images/producto/iVs72pC_xd.jpg",
    },
    {
      nombre: "Botella de Agua Auto-Limpiable",
      descripcion: "Botella con luz UV integrada para purificar el agua.",
      precio: 29.99,
      cantidad: 50,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzp46zwzms4leMCR4dLQvMSKx16TKuVj19g&s",
    },
    {
      nombre: "Pluma de Borrado Instantáneo",
      descripcion: "Pluma que borra tinta con un solo clic, sin dejar rastro.",
      precio: 9.99,
      cantidad: 200,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQfAhmoTG433BNvhK-W1LV_v7blVwpvPPrpg&s",
    },
    {
      nombre: "Mochila Solar Cargadora",
      descripcion: "Mochila con panel solar integrado para cargar dispositivos móviles.",
      precio: 79.99,
      cantidad: 25,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-lE89OOWfXNBhukgMWBXXVYiQrlq2Gtxqw&s",
    },
    {
      nombre: "Audífonos de Traducción Simultánea",
      descripcion: "Audífonos que traducen idiomas en tiempo real.",
      precio: 149.99,
      cantidad: 10,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPUgZxiVvTZttF_3MqPRoh-Rij0Onpz5mbw&s",
    },
    {
      nombre: "Almohada de Masaje Inteligente",
      descripcion: "Almohada que se adapta a tu cuerpo y proporciona masajes personalizados.",
      precio: 69.99,
      cantidad: 30,
      imagen: "https://m.media-amazon.com/images/I/81aLORUmFsL.AC_UF1000,1000_QL80.jpg",
    },
    {
      nombre: "Lámpara de Escritorio con Carga Inalámbrica",
      descripcion: "Lámpara que carga tu teléfono mientras ilumina tu espacio.",
      precio: 49.99,
      cantidad: 40,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ba_Mt8fw-NoRT0IS31hiLuJpKtFQNgqGwQ&s",
    },
    {
      nombre: "Guantes de Realidad Virtual Táctiles",
      descripcion: "Guantes que te permiten sentir objetos en la realidad virtual.",
      precio: 199.99,
      cantidad: 5,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7dicyTmqr82402AED2gGd5J7YLrCGjN-mQ&s",
    },
    {
      nombre: "Cámara de Seguridad con Reconocimiento Facial",
      descripcion: "Cámara que identifica a las personas y envía alertas.",
      precio: 89.99,
      cantidad: 15,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lqfG2Gf0sq8oW6B2DSQBhkMpeHcMr9ilQQ&s",
    },
    {
      nombre: "Robot Aspirador con Mapeo Inteligente",
      descripcion: "Aspirador que limpia tu casa de forma autónoma, creando mapas.",
      precio: 249.99,
      cantidad: 8,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeF6qtOrVSQrSzAn1Zj1lHGfBZS927BHCMw&s",
    },
    {
      nombre: "Bicicleta Eléctrica Plegable",
      descripcion: "Bicicleta que se pliega para facilitar su transporte.",
      precio: 599.99,
      cantidad: 3,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuJFvtsJlFldMtv9pTzeGrT-01jUDzkm24g&s",
    },
    {
      nombre: "Reloj Inteligente con Monitor de Sueño",
      descripcion: "Reloj que analiza tu sueño y te ayuda a mejorarlo.",
      precio: 129.99,
      cantidad: 20,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5a7PvDZB78frHABy2J_yCAW0I8y6Zj05xg&s",
    },
    {
      nombre: "Impresora 3D de Bolsillo",
      descripcion: "Impresora que cabe en tu bolsillo y te permite imprimir objetos pequeños.",
      precio: 349.99,
      cantidad: 2,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIISTb_aKbu4it8auz-HgUn9VcyZPVhPPMyA&s",
    },
    {
      nombre: "Kit de Cultivo Hidropónico Casero",
      descripcion: "Kit para cultivar tus propias hierbas y verduras en casa.",
      precio: 59.99,
      cantidad: 25,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkx6MK0vk5bUO-zkVrbwzv0n-o3I6V1Bbzg&s",
    },
    {
      nombre: "Drone con Cámara 4K y Estabilización",
      descripcion: "Drone que graba videos y toma fotos de alta calidad.",
      precio: 499.99,
      cantidad: 6,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0rxXuLZ92lXdCU2QI_YqRhS1DUjn5sU-XA&s",
    },
    {
      nombre: "Proyector Holográfico Portátil",
      descripcion: "Proyector que crea hologramas en cualquier superficie.",
      precio: 299.99,
      cantidad: 12,
      imagen: "https://img.kentfaith.de/cache/catalog/products/de/GW01.0359UK/GW01.0359UK-1-1200x1200.jpg",
    },
    {
      nombre: "Mesa de Escritorio Ajustable con Memoria",
      descripcion: "Mesa que se ajusta a tu altura y guarda tus posiciones favoritas.",
      precio: 399.99,
      cantidad: 4,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LBwCcy0a6EqNS4KoNunZiI3cd2oM38zDFg&s",
    },
    {
      nombre: "Silla Ergonómica con Calefacción",
      descripcion: "Silla que se adapta a tu cuerpo y te mantiene caliente.",
      precio: 279.99,
      cantidad: 9,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_B6olRBp7VmK_NNPqKtICW_dOtKPxkW3Xw&s",
    },
    {
      nombre: "Purificador de Aire con Aromaterapia",
      descripcion: "Purificador que elimina las impurezas del aire y libera aromas.",
      precio: 119.99,
      cantidad: 18,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ijQxQE3i0W_s4xAMJ3ttKRaw95kc9k-ZAg&s",
    },
    {
      nombre: "Altavoz Inteligente con Pantalla Táctil",
      descripcion: "Altavoz que te permite controlar tu hogar y ver videos.",
      precio: 169.99,
      cantidad: 11,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtDtDyBekN7DRzug5PFoT4KKPiC6y2VZI8w&s",
    },
    {
      nombre: "Gafas de Realidad Aumentada con GPS",
      descripcion: "Gafas que te muestran información sobre el mundo real.",
      precio: 229.99,
      cantidad: 7,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVhfcAq8DEhIIL3DOpxptGbnUiwXzC9pN8Q&s",
    },
    {
      nombre: "Maleta Inteligente con Seguimiento GPS",
      descripcion: "Maleta que te permite saber dónde está en todo momento.",
      precio: 189.99,
      cantidad: 13,
      imagen: "https://m.media-amazon.com/images/I/713UX3uydiL.jpg",
    },
    {
      nombre: "Cargador Solar Portátil para Laptop",
      descripcion: "Cargador que te permite cargar tu laptop en cualquier lugar.",
      precio: 139.99,
      cantidad: 17,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKClPN0qcLm41fcnczni-pFNkTlY30HybCw&s",
    },
    {
      nombre: "Teclado Virtual Proyectado",
      descripcion: "Teclado que se proyecta en cualquier superficie.",
      precio: 99.99,
      cantidad: 22,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-b_Kw6p3yZsqTzgju70HWvm99PXWZmasEA&s",
    },
    {
      nombre: "Ratón Ergonómico con Escáner",
      descripcion: "Ratón que escanea documentos y los convierte en texto.",
      precio: 79.99,
      cantidad: 28,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA73QVPf5qAAIAhjPZaY1c7bGSFVOFsujLYw&s",
    },
    {
      nombre: "Libreta Inteligente con Digitalización",
      descripcion: "Libreta que digitaliza tus notas y dibujos.",
      precio: 69.99,
      cantidad: 32,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQraS_Ah9Z4U08reUHJ5HiypnMEi0NDsMG62Q&s",
    },
    {
      nombre: "Traductor de Idiomas de Bolsillo",
      descripcion: "Dispositivo que traduce idiomas en tiempo real.",
      precio: 149.99,
      cantidad: 10,
      imagen: "https://s.alicdn.com/@sc04/kf/S506c08a13fb741418dd8ceb0173d38eci.jpg_300x300.jpg",
    },
    {
      nombre: "Medidor de Calidad del Aire Portátil",
      descripcion: "Dispositivo que mide la calidad del aire y te alerta.",
      precio: 89.99,
      cantidad: 15,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhq68Dcl0p4pvPbYMh2zdc9-xUemCbj71NA&s",
    },
    {
      nombre: "Báscula Inteligente con Análisis Corporal",
      descripcion: "Báscula que analiza tu composición corporal y te da consejos.",
      precio: 129.99,
      cantidad: 20,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UVKx7GpoXMEiSu2pKWIeZZaRmQ-UkXQTZQ&s",
    },
    {
      nombre: "Dispensador de Comida Inteligente para Mascotas",
      descripcion: "Dispositivo que alimenta a tu mascota automáticamente.",
      precio: 169.99,
      cantidad: 11,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwKTybW13iQ-y-OcrJbdfvaPT9_yUj2r75w&s",
    },
    {
      nombre: "Termómetro Inteligente sin Contacto",
      descripcion: "Termómetro que mide la temperatura sin tocar la piel.",
      precio: 59.99,
      cantidad: 25,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjqWKejf7_ZzGXEUC5hOZQwKY3MamOhtpIg&s",
    },
    {
      nombre: "Kit de Primeros Auxilios Inteligente",
      descripcion: "Kit que te guía en caso de emergencia.",
      precio: 79.99,
      cantidad: 28,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhYPnjQr4U07zS-F9a9Nu_0J2yw2GW3dApw&s",
    },
    {
      nombre: "Candado Inteligente con Huella Dactilar",
      descripcion: "Candado que se abre con tu huella dactilar.",
      precio: 49.99,
      cantidad: 30,
      imagen: "https://m.media-amazon.com/images/I/61ZQ5nMVfMS.AC_UF1000,1000_QL80.jpg",
    },
  ];
  function mostrarProductos() {
    const tabla = document.querySelector("tbody");
    productos.forEach((producto) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>${producto.cantidad}</td>
            <td>
                ${
                    producto.imagen
                        ? `<img src="${producto.imagen}" alt="${producto.nombre}" style="width:50px;height:50px;">`
                        : "Sin imagen"
                }
            </td>
            <td><button onclick="addToCart('${producto.nombre}', ${producto.precio.toFixed(2)})">Agregar</button></td>
        `;

        tabla.appendChild(fila);
    });
}

document.addEventListener("DOMContentLoaded", mostrarProductos);