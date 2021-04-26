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
            comentario: 'Feliz de haber ido!!'
        },
        {
            username: 'juanacunia',
            comentario: 'Super recomendable.'
        },
        {
            username: 'mariaperez',
            comentario: 'Birra buenisima.'
        },
        {
            username: 'camilabrosens',
            comentario: 'Comida 10/10.'
        },
        {
            username: 'jorgeaguero',
            comentario: 'Siempre buenisimo.'
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