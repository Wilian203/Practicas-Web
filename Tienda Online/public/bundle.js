'use strict';

var dataCategorias = {
    categorias:[
    {
        id:'reloj',
        nombre:"Reloj Apple",
        precio:"$100.00",
        imagen:"assets/img/apple watch.jpg"
    },
    {
        id:'audifonos',
        nombre:"Audifonos",
        precio:"100.00",
        imagen:"/assets/img/Audifonos.jpg"
    },
    {
        id:'perfume',
        nombre:"Perfume",
        precio:"100.00",
        imagen:"/assets/img/perfume.jpg"
    },
    {
        id:'reloj_Sansum',
        nombre:"Reloj Sansumg",
        precio:"100.00",
        imagen:"/assets/img/reloj.jpg"
    },
   
    {
        id:'tenis',
        nombre:"Tenis",
        precio:"100.00",
        imagen:"/assets/img/Tennis.jpg"
    }
]
};

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
