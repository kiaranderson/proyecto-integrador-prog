const db = require('../database/models');
const Op = db.Sequelize.Op;

let controller = {
    login: (req, res) => {
        const filtro = {
            where: {
                username: req.body.username
            }
        }
        db.Users.findOne(filtro)
        .then(resultado => {
            if(bcrypt.compareSync(req.body.pass, resultado.pass)){
                req.session.name = resultado.name;
            }
        });
    },

    profile: (req, res) => {
        let user = require('../data/userData')
        let productos = require('../data/productData');

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
        let submitedEmail = req.body.email;

        db.Users.create({
            first_name: req.body.first_name,
            surname: req.body.surname,
            email: req.body.email,
            username: req.body.username,
            pass: req.body.pass,
            registration_date: new Date().getTime(),
            userUpdate_date: new Date().getTime(),
        }).then ( user => {
            res.redirect("/")
        }
           
        )



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

                }
            
    
    }


module.exports = controller;