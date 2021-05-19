const { User } = require("../models/user")

let controller = {
    registerGet: (req, res) => {
        res.render('register', {})
    },

    registerPost: async (req, res) => {
        try{
            const createdUser = await User.create({
                first_name: "Pepe",
                surname: "Pepito",
                email: "pepe@pepe.com",
                username: "pepe",
                pass: "pepe123"
            })
    
            console.log(`User ${createdUser.first_name} added succesfuly`)
        }catch(e) {
            console.log(e)
        }

        // const users =  await User.findAll({
        //    where: {
        //        products: 0
        //    }
        // })
        
        // const user = await User.findByPk(1)

        res.render('register', {})
    },
}

module.exports = controller;