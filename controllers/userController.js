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
        res.render('profile-edit', {
        })
    },
    
    registerGet: (req, res) => {
        res.render('register', {})
    },


    registered: (req, res) => {
        let passEncriptada = bcrypt.hashSync(req.body.pass);

        db.User.create ({
            first_name: req.body.first_name,
            surname: req.body.surname,
            email: req.body.email,
            username: req.body.username,
            pass: passEncriptada,
            registration_date: new Date().getTime(),
            userUpdate_date: new Date().getTime(),
        }).then (() => {
            return res.redirect("/user/id/" + userid);
        });
    },
}

module.exports = controller;