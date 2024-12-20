const form = document.getElementById('product-form');
const productosContainer = document.getElementById('productos');

// Función para crear una tarjeta de producto
function crearProducto(nombre, precio, imagenURL) {
  const card = document.createElement('div');
  card.classList.add('producto-card');
  card.innerHTML = `
    <img src="${imagenURL}" alt="${nombre}">
    <h3>${nombre}</h3>
    <p>$ ${precio}</p>
    <button class="delete-btn">Eliminar</button>
  `;

  // Evento para eliminar el producto
  const deleteBtn = card.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    card.remove();
  });

  return card;
}

// Evento de envío del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const precio = document.getElementById('precio').value.trim();
  const imagen = document.getElementById('imagen').value.trim();

  if (nombre && precio && imagen) {
    const productoCard = crearProducto(nombre, precio, imagen);
    productosContainer.appendChild(productoCard);

    form.reset(); // Limpiar el formulario
  } else {
    alert('Por favor, complete todos los campos.');
  }
});