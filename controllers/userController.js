const db = require('../database/models');
const Op = db.Sequelize.Op;

let controller = {
    login: (req, res) => {
        const filtro = {
            where: {
                username: req.body.username
            }
        }
        db.User.findOne(filtro)
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


        dbUsers.findOne ({
            where: { email: submitedEmail },
        }).then((user) => {

            if (user && req.body.password == req.body.passwordConfirm) {
                if (req.body.password.length > 4) {
                    let encryptedPss = bcrypt.hashSync (req.body.password);
                    let info = req.body;

           db.Users.create({
               first_name: req.body.first_name,
               surname: info.surname,
               email: info.email,
               username: info.username,
               pass: info.pass,
               registration_date: new Date().getTime(),
               userUpdate_date: new Date().getTime(),

            }).then(()=> {
                return res.redirect
            })

                    
            
                    

                }
            }





        }
        )
    }

    // registerPost: async (req, res) => {
    //     try{
    //         const createdUser = await User.create({
    //             first_name: "Pepe",
    //             surname: "Pepito",
    //             email: "pepe@pepe.com",
    //             username: "pepe",
    //             pass: "pepe123"
    //         })
    
    //         console.log(`User ${createdUser.first_name} added succesfuly`)
    //     }catch(e) {
    //         console.log(e)
    //     }

        // const users =  await User.findAll({
        //    where: {
        //        products: 0
        //    }
        // })
        
        // const user = await User.findByPk(1)

//         res.render('register', {})
//     },
}

module.exports = controller;