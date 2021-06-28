const db = require('../database/models');
// const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

let controller = {
    loginGet: (req, res) => {
        res.render('login', {})
    },

    login: (req, res) => {
        const filtro = {
            where: {
                username: req.body.username
            }
        }
        db.User.findOne(filtro)
        .then(resultado => {
            if(bcrypt.compareSync(req.body.contra, resultado.pass)){
                req.session.username = resultado.username;
                req.session.name = resultado.first_name;
                req.session.userid = resultado.id;
                if (req.body.recordarme){
                    res.cookie('userId', resultado.id);
                }

                return res.redirect("/");
            } else {
                return res.redirect("/user/register");

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

        // let passEncriptada = bcrypt.hashSync(req.body.password);
        db.User.update ({
            first_name: req.body.name,
            email: req.body.mail,
            pp: `/images/users/${req.file.filename}`,
            nacimiento: req.body.birthday,
            username: req.body.username,
            // pass: passEncriptada,
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
        res.render('pruebaregister', {})
    },


    registered: (req, res) => {
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