const db = require('../database/models');
const Op = db.Sequelize.Op;
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
                //aca va el mensaje de error
            }
        });
    },

    logout: (req, res) => {
            req.session.destroy();
            res.clearCookie('userId');
            return res.redirect("/");
    },

    profile: (req, res) => {
        db.User.findByPk (req.params.id)
        
        .then (result => {
            res.render('profile', {
                result: result,
            })
        })
    },

    profileEdit: (req, res) => {
        db.User.findByPk (req.params.id)
        .then(user => {
            res.render('profile-edit', {
                user: user
            })
            console.log(user.id)
        })
    },

    borrarPerfil: (req, res) => {
        db.User.destroy({
            where: [
                {id: req.body.id,},
                {username: req.session.recordarme}
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