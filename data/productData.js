let novedades =    [
    {
        name: "Esmeralda",
        descripcion: "Ubicado en el barrio de Palermo bla bla bla bla ",
        comentarios: 764,
        img: "/images/default-image.png",
    },
    {
        name: "Negroni",
        descripcion: "Ubicado en Pilar bla bla bla bla ",
        comentarios: 1004,     
        img: "/images/default-image.png",
    },
    {
        name: "Barbas",
        descripcion: "Ubicado en la localidad Pilar bla bla bla bla ",
        comentarios: 729,
        img: "/images/default-image.png",
    },
    {
        name: "Pope",
        descripcion: "Ubicado en la localidad de pilar bla bla bla bla ",
        comentarios: 962,
        img: "/images/default-image.png",
    }
] 

let comentados = [
        {
            name: "Antares",
            descripcion: "Ubicado en la localidad de pilar bla bla bla bla ",
            comentarios: 1346,
            img: "/images/default-image.png",
        },
        {
            name: "Lowells",
            descripcion: "Ubicado en la localidad de San Isidro bla bla bla bla ",
            comentarios: 2178,
            img: "/images/default-image.png",
        },
        {
            name: "El Purgatorio",
            descripcion: "Ubicado en el barrio de palermo bla bla bla bla ",
            comentarios: 1280,
            img: "/images/default-image.png",
        },
        {
            name: "La Calle Bar",
            descripcion: "Ubicado en el barrio de Palermo bla bla bla bla ",
            comentarios: 1927,
            img: "/images/default-image.png",
        }
]
let producto = {
    name: 'El Purgatorio',
    descripcion: 'Ubicado en el barrio de palermo bla bla bla bla ',
    img: "/images/default-image.png",
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