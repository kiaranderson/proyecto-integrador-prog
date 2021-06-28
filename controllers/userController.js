const db = require('../database/models');
// const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

let controller = {
    loginGet: (req, res) => {
        if (req.session.user){
            res.redirect('/')
        } else {
            res.render('login', {error: null})
        }
    },

    login: (req, res) => {
        if (!req.body.username || !req.body.contra) {
            res.render('login', {error: "No puede haber campos vacios"})
        }
        const filtro = {
            //columna de la tabla y valor a buscar
            where: {
                username: req.body.username
            }
        }

        db.User.findOne(filtro)
        .then(resultado => {
            if(resultado && bcrypt.compareSync(req.body.contra, resultado.pass)){
                req.session.user = resultado;
                
                if (req.body.recordarme){
                    res.cookie('userId', resultado.id);
                }

                return res.redirect("/");
            } else {
                return res.render("login",{error: "El usuario o la contraseña son incorrectas"});

            }
            
        });
    },

    logout: (req, res) => {
            req.session.destroy();
            res.clearCookie('userId');
            return res.redirect("/");
    },

    profile: (req, res) => {
        const filtro = {
            include: [{
                association: 'usuario', include: 'Comentarios'
            },{
                association: 'owner'
            }]
        }
        db.User.findByPk (req.params.id, filtro)
        .then (result => {
            res.render('profile', {
                result: result,
            })
        })
    },

    editar: (req, res) => {  
        res.render('profile-edit')
    },

    profileEdit: (req, res) => {

        db.User.update ({
            first_name: req.body.name,
            email: req.body.mail,
            pp: `/images/users/${req.file.filename}`,
            nacimiento: req.body.birthday,
            username: req.body.username,
        }, {
            where: {
                id: req.body.numero
            }
        })
        .then((user) => {
            res.redirect('/user/id/' + req.body.numero);
        }).catch(error => {
            console.log(error);
        });
        
    },

    borrarPerfil: (req, res) => {
        db.User.destroy({
            where: [
                {id: req.body.id,},
            ]
        }) .then(() => {
                res.redirect('/');
        });
    },
    
    registerGet: (req, res) => {
        res.render('pruebaregister', {error: null})
    },


    registered: (req, res) => {
        if (!req.body.name || !req.body.mail || !req.file || !req.body.birthday|| !req.body.username || !req.body.password) {
            res.render('pruebaregister', {error: "No puede haber campos vacios"})
        }
        if (req.body.password.length < 3) {
            res.render('pruebaregister', {error: "La contraseña debe tener al menos tres caracteres"})
        }
        db.User.findOne ({
            where: { //agarrar nombre de usuario y buscar este usuario en particular
                username:req.body.username
            }
        }) .then (user => {
            if (user) {
                res.render('pruebaregister', {error: "Este usuario ya existe"})
            }
            
        })
      let passEncriptada = bcrypt.hashSync(req.body.password);
        db.User.create ({
            first_name: req.body.name,
            email: req.body.mail,
            pp: `/images/users/${req.file.filename}`,
            nacimiento: req.body.birthday,
            username: req.body.username,
            pass: passEncriptada,
            createdAt: new Date(),
            updatedAt: new Date(),

        }).then ((result) => {
                req.session.username = result.username;
                req.session.name = result.first_name;
                req.session.userid = result.id;
            return res.redirect("/");
    
        });
    },
        

}


    
        
module.exports = controller;