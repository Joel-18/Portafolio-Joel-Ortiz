const productos = [
  {
    id: 1,
    nombre: "La Bandera Dominicana",
    precio: 350,
    descripcion:
      "Arroz blanco, habichuelas guisadas y carne guisada, acompañado de ensalada.",
    imagen:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 2,
    nombre: "Mangú Tres Golpes",
    precio: 280,
    descripcion:
      "Mangú de plátano verde acompañado de salami, queso frito y huevos.",
    imagen:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 3,
    nombre: "Sancocho Dominicano",
    precio: 450,
    descripcion:
      "Tradicional guiso de carnes y víveres cocinados lentamente con un rico sazón criollo.",
    imagen:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 4,
    nombre: "Pollo Guisado",
    precio: 320,
    descripcion:
      "Tiernos trozos de pollo guisados en una salsa criolla llena de sabor.",
    imagen:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 5,
    nombre: "Pescado Frito",
    precio: 550,
    descripcion:
      "Pescado fresco frito hasta quedar crujiente, servido con acompañamientos tradicionales.",
    imagen:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 6,
    nombre: "Chivo Guisado",
    precio: 600,
    descripcion:
      "Carne de chivo tierna y jugosa, preparada lentamente con especias y vegetales.",
    imagen:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 7,
    nombre: "Mofongo",
    precio: 400,
    descripcion:
      "Plátano verde majado con ajo y chicharrón, servido con una deliciosa salsa.",
    imagen:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 8,
    nombre: "Arroz con Pollo",
    precio: 330,
    descripcion:
      "Arroz sazonado cocinado con tiernos trozos de pollo y vegetales.",
    imagen:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 9,
    nombre: "Pollo al Horno",
    precio: 350,
    descripcion:
      "Pollo horneado y sazonado con una mezcla especial de especias y hierbas.",
    imagen:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 10,
    nombre: "Pernil Asado",
    precio: 480,
    descripcion:
      "Jugoso pernil de cerdo asado lentamente hasta obtener una carne tierna y sabrosa.",
    imagen:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 11,
    nombre: "Yuca con Cebolla",
    precio: 220,
    descripcion:
      "Yuca hervida acompañada de cebolla salteada y un toque de sazón criollo.",
    imagen:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 12,
    nombre: "Tostones",
    precio: 180,
    descripcion:
      "Rodajas de plátano verde fritas y crujientes, perfectas para acompañar cualquier plato.",
    imagen:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 13,
    nombre: "Pastelón de Plátano Maduro",
    precio: 350,
    descripcion:
      "Capas de plátano maduro, carne sazonada y queso gratinado al horno.",
    imagen:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 14,
    nombre: "Locrio de Pollo",
    precio: 330,
    descripcion:
      "Arroz cocinado con pollo y especias dominicanas para un plato lleno de sabor.",
    imagen:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 15,
    nombre: "Habichuelas Guisadas",
    precio: 180,
    descripcion:
      "Habichuelas cocinadas lentamente con vegetales y especias al estilo tradicional.",
    imagen:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 16,
    nombre: "Ensalada Verde",
    precio: 160,
    descripcion:
      "Fresca combinación de lechuga, tomate, pepino y otros vegetales.",
    imagen:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 17,
    nombre: "Yaroa Dominicana",
    precio: 380,
    descripcion:
      "Capas de papas fritas, carne sazonada, queso y salsas en una combinación irresistible.",
    imagen:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 18,
    nombre: "Chimi Dominicano",
    precio: 300,
    descripcion:
      "Hamburguesa dominicana con carne sazonada, repollo, tomate y salsa especial.",
    imagen:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 19,
    nombre: "Queso Frito",
    precio: 200,
    descripcion:
      "Crujientes trozos de queso dorados por fuera y suaves por dentro.",
    imagen:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 20,
    nombre: "Dulce de Leche",
    precio: 180,
    descripcion:
      "Delicioso postre tradicional elaborado con leche y azúcar, perfecto para terminar la comida.",
    imagen:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
  },
];

// Recuperar carrito guardado
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar carrito en localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Mostrar productos
function mostrarProductos() {
  const contenedor = document.getElementById("productos");

  contenedor.innerHTML = "";

  productos.forEach((producto) => {
    const tarjeta = document.createElement("div");

    tarjeta.classList.add("producto");

    tarjeta.innerHTML = `
      <img 
        src="${producto.imagen}" 
        alt="${producto.nombre}"
      >

      <h3>${producto.nombre}</h3>

      <p>${producto.descripcion}</p>

      <p class="precio">
        RD$${producto.precio}
      </p>

      <button onclick="agregarProducto(${producto.id})">
        Agregar
      </button>
    `;

    contenedor.appendChild(tarjeta);
  });
}

// Agregar producto
function agregarProducto(id) {
  const productoExistente = carrito.find((producto) => producto.id === id);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    const producto = productos.find((producto) => producto.id === id);

    carrito.push({
      ...producto,
      cantidad: 1,
    });
  }

  guardarCarrito();
  mostrarCarrito();
}

// Eliminar producto
function eliminarProducto(id) {
  const producto = carrito.find((producto) => producto.id === id);

  if (!producto) {
    return;
  }

  producto.cantidad--;

  if (producto.cantidad === 0) {
    carrito = carrito.filter((producto) => producto.id !== id);
  }

  guardarCarrito();
  mostrarCarrito();
}

// Mostrar carrito
function mostrarCarrito() {
  const pedido = document.getElementById("pedido");

  pedido.innerHTML = "";

  if (carrito.length === 0) {
    pedido.innerHTML = `
      <p class="vacio">
        No has agregado ningún producto.
      </p>
    `;

    document.getElementById("total").textContent = "RD$0";

    return;
  }

  carrito.forEach((producto) => {
    const elemento = document.createElement("div");

    elemento.classList.add("producto-pedido");

    elemento.innerHTML = `
      <span>${producto.nombre}</span>

      <span class="cantidad">
        x${producto.cantidad}
      </span>

      <span>
        RD$${producto.precio * producto.cantidad}
      </span>

      <button onclick="eliminarProducto(${producto.id})">
        Eliminar
      </button>
    `;

    pedido.appendChild(elemento);
  });

  calcularTotal();
}

// Calcular total
function calcularTotal() {
  const total = carrito.reduce((acumulador, producto) => {
    return acumulador + producto.precio * producto.cantidad;
  }, 0);

  document.getElementById("total").textContent = `RD$${total}`;
}

// Vaciar carrito
function vaciarCarrito() {
  carrito = [];

  localStorage.removeItem("carrito");

  mostrarCarrito();
}

// Menú móvil
function toggleMenu() {
  const menu = document.getElementById("menu");

  menu.classList.toggle("activa");
}

// Mostrar sección
function mostrarSeccion(nombreSeccion) {
  const secciones = document.querySelectorAll(".seccion");

  secciones.forEach((seccion) => {
    seccion.classList.remove("activa");
  });

  document.getElementById(nombreSeccion).classList.add("activa");
}

// Ejecutar al cargar
mostrarProductos();
mostrarCarrito();
