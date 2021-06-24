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
                return res.redirect("/");
            } else {
                res.redirect('/product/add')
            }
        });
    },

    profile: (req, res) => {

        res.render('profile', {
            user: user, productos: 
            productos.novedades
        });
        res.render('headerLogueado', {
            user: user.name
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
            return res.redirect("/user/profile");
        });


        // let submitedEmail = req.body.email;
        // db.Users.findOne ({
        //     where: { email: submitedEmail },
        // }).then((user) => {
            // if (user && req.body.password == req.body.passwordConfirm) {
            //     if (req.body.password.length > 4) {
            //         let encryptedPss = bcrypt.hashSync (req.body.password);
            //         let info = req.body;
            // }).then(()=> {
            //     return res.redirect("/login");
            // });
        // } else {
        //     res.cookie("error",length, { })
        // }        

                },
    }


module.exports = controller;