const productos = [
    { nombre: "Tofu organico", precio: 1300, id: "1", img: "../img/tofu.jpg", idCat: "2"},
    { nombre: "Yogur de coco", precio: 620, id: "2", img: "../img/yogur.jpg", idCat: "2"},
    //{ nombre: "Queso cremoso de almendras", precio: 1400, id: "3", img: "../img/arroz.jpg" },
    { nombre: "Cacao Amargo", precio: 250, id: "4", img: "../img/cacao.jpg", idCat: "1" },
    { nombre: "Coco rallado", precio: 300, id: "5", img: "../img/coco.jpg", idCat: "1" },
    //{ nombre: "Frambuesa bañada en chocolate", precio: 1500, id: "6", img: "../img/aceite.jpg" },
    //{ nombre: "Not burguer", precio: 1000, id: "8", img: "../img/aceite.jpg" },
    { nombre: "Vegan nuguets", precio: 1500, id: "9", img: "../img/nuguets.jpg", idCat: "3"},
    { nombre: "Wafles", precio: 900, id: "10", img: "../img/waffles.jpg", idCat: "3" },
    { nombre: "Arvejas", precio: 260, id: "11", img: "../img/arvejas.jpg", idCat: "1" },
    { nombre: "Garbanzos", precio: 350, id: "12", img: "../img/garbanzos.jpg", idCat: "1" },
    //{ nombre: "Pepas", precio: 400, id: "13", img: "../img/aceite.jpg"},
    //{ nombre: "Frutigram", precio: 400, id: "14", img: "../img/aceite.jpg" },
    { nombre: "Almendras", precio: 3550, id: "15", img: "../img/almendras.jpg", idCat: "4" },
    { nombre: "Nueces", precio: 2000, id: "16", img: "../img/nueces.jpg",idCat: "4" },
]

export const getAll = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}


export const getOne = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getCategory = (idCategory) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategory);
            resolve(productosCategoria);
        }, 100)
    })
}