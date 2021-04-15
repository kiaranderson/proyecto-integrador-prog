let novedades =    [
    {
        name: "Esmeralda",
        descripcion: "Ubicado en el barrio de Palermo bla bla bla bla ",
        comentarios: 764,
    },
    {
        name: "Negroni",
        descripcion: "Ubicado en Pilar bla bla bla bla ",
        comentarios: 1004,
    },
    {
        name: "Barbas",
        descripcion: "Ubicado en la localidad Pilar bla bla bla bla ",
        comentarios: 729,
    },
    {
        name: "Pope",
        descripcion: "Ubicado en la localidad de pilar bla bla bla bla ",
        comentarios: 962,
    }
] 

let comentados = [
        {
            name: "Antares",
            descripcion: "Ubicado en la localidad de pilar bla bla bla bla ",
            comentarios: 1346,
        },
        {
            name: "Lowells",
            descripcion: "Ubicado en la localidad de San Isidro bla bla bla bla ",
            comentarios: 2178,
        },
        {
            name: "El Purgatorio",
            descripcion: "Ubicado en el barrio de palermo bla bla bla bla ",
            comentarios: 1280,
        },
        {
            name: "La Calle Bar",
            descripcion: "Ubicado en el barrio de Palermo bla bla bla bla ",
            comentarios: 1927,
        }
]
let producto = {
    name: 'El Purgatorio',
    descripcion: 'Ubicado en el barrio de palermo bla bla bla bla ',
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