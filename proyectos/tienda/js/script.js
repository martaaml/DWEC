let productosTienda = 0;

window.onload = () => {
    cargarProductos();
};

function cargarProductos() {
    
    let ul = document.createElement("ul");
    ul.id = "product-list";

    peticionAJAX("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
        .then((datosRecibidos) => {
            for (let producto of datosRecibidos) {
                let li = document.createElement("li");
                li.className = "product-item";

                // Crear imagen
                let img = document.createElement("img");
                let imageUrl = producto.images && producto.images.length > 0 
                               ? producto.images[0] 
                               : "https://via.placeholder.com/150"; // Placeholder

                img.src = imageUrl;
                img.alt = producto.title;

                // Crear descripción
                let descripcion = document.createElement("span");
                descripcion.textContent = producto.title;

                li.appendChild(img);
                li.appendChild(descripcion);

                li.addEventListener("click", detalle);
                ul.appendChild(li);
            }

            document.body.appendChild(ul);
        })
        .catch((error) => console.error("Error al cargar productos:", error));
}


function detalle(event) {
    alert("Producto seleccionado: " + event.target.parentElement.textContent);
}


function peticionAJAX(url) {
    return fetch(url).then((data) => data.json());
}

function mostrarCategorias() {
    fetch("https://api.escuelajs.co/api/v1/categories")
        .then((res) => res.json())
        .then((categorias) => {
            categorias.forEach((categoria) => {
                console.log(categoria.name);
            });
        })
        .catch((error) => console.error("Error al cargar categorías:", error));
}

function añadirCarrito() {
    productosTienda++;
    console.log(productosTienda);
    document.getElementById("num_articulos").innerHTML = productosTienda;
}

function detalle(event) {
    alert("Producto seleccionado: " + event.target.parentElement.textContent);
}
