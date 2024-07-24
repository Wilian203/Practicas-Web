import dataCategorias from "../datos/categorias";
const { categorias } = dataCategorias;

const contenenedorProductos = document.querySelector(".productos");

categorias.forEach((categoria) => {
  const contenido = document.createElement("div");
  const plantilla = `
     <div class="thumb">
         <img src="${categoria.imagen}" alt="apple" />
    </div>
    <div class="informacion">
        <h2 class="titulo">${categoria.nombre}</h2>
        <p class="precio">${categoria.precio}</p>
         <button class="btn btn-primary">Añadir al Carrito</button>
    </div>
     
    `;

  contenido.innerHTML = plantilla;
  contenido.classList.add("item");
  contenenedorProductos.append(contenido);
});
