let novedades =    [
    {
        name: "Esmeralda",
        descripcion: "Bar ubicado en recoleta, variedad de comida.",
        comentarios: 764,
        img: "/images/esmeralda.jpg",
    },
    {
        name: "Negroni",
        descripcion: "Divino para ir en pareja, mas de 12 sucursales.",
        comentarios: 1004,     
        img: "/images/negroni.jpg",
    },
    {
        name: "Barbas",
        descripcion: "Bar ubicado en la ciudad de Pilar.",
        comentarios: 729,
        img: "/images/barbas.jpg",
    },
    {
        name: "Pope",
        descripcion: "Muy chill con amigos, en Pilar.",
        comentarios: 962,
        img: "/images/pope.jpg",
    }
] 

let comentados = [
        {
            name: "Antares",
            descripcion: "Cereveza artesanal, sucursales por todo el pais.",
            comentarios: 1346,
            img: "/images/antares.jpg",
        },
        {
            name: "Lowells",
            descripcion: "Hamburgueseria y bar, 10 sucursales por Buenos Aires.",
            comentarios: 2178,
            img: "/images/lowells.jpg",
        },
        {
            name: "El Purgatorio",
            descripcion: "Bar speakeasy en Palermo, divino para un finde.",
            comentarios: 1280,
            img: "/images/purgatorio.jpg",
        },
        {
            name: "La Calle Bar",
            descripcion: "Ubicado en el barrio de Palermo.",
            comentarios: 1927,
            img: "/images/lacallebar.jpg",
        }
]
let producto = {
    name: 'El Purgatorio',
    descripcion: 'Bar speakeasy en Palermo, divino para un finde.',
    img: "/images/purgatorio.jpg",
    comentarios: [
        {
            username: 'jacintafernandez',
            comentario: 'Muy divertido, la propuesta que sea un speakeasy le da un toque unico!!'
        },
        {
            username: 'juanacunia',
            comentario: 'Me gusto el bar, tuve que esperar para entrar.'
        },
        {
            username: 'mariaperez',
            comentario: 'Excelente bar! Gran ubicacion, genial servicio y buen ambiente. Lo recomiendo.'
        },
        {
            username: 'camilabrosens',
            comentario: 'Recomendado'
        },
        {
            username: 'jorgeaguero',
            comentario: 'muy bueno, tardaron un poco pero esta bueno'
        },
        {
            username: 'tomashiguain',
            comentario: 'excelente servicio, voy a volver'
        }
    ]
}

module.exports = {
    novedades: novedades,
    comentados: comentados,
    producto: producto
}