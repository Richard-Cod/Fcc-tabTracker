const bcrypt = require('bcrypt');


const {User} = require('../models');


const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user){
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user,config.authentication.jwtSecret,{
        expiresIn : ONE_WEEK
    })
}






module.exports = {
     register(req, res) {
        let {email,password} = req.body;
        bcrypt.hash(password, 10, async function(err, hash) {
            if(err){
                console.log("Erreur de hash",err);
                return;
            }else{
                password = hash
                try {
                    const user = await User.create({email,password});
                    const userJson = user.toJSON();

                    res.status(201).send({user:userJson,token:jwtSignUser(userJson) })

                } catch (err) {
                    res.status(400).send({
                        error : "Ce compte mail est déja prit"
                    })
                }


            }
          });

       
    },
    async login(req, res) {
        const {email,password} = req.body;
        try {
            const user = await User.findOne({
                where: {
                    email:email
                }
            });
            if(!user){
                res.status(403).send({
                    error : "Les informations de connexion sont invalides (email)",
                })
            }
            console.log("Mail existe ");
            bcrypt.compare(password,user.password, function(err, passwordIsValid) {
                if(err){
                    console.log("erreur hash ",err);
                    return;
                }

                if(passwordIsValid){
                    const userToJson = user.toJSON();
                    res.status(201).send({
                        user: userToJson,
                        token: jwtSignUser(userToJson)
                    })

                }else{
                    res.status(403).send({
                        error : "Les informations de connexion sont invalides (pwd)",
                    })
                }

              })

              //  ---------------------------------------------------------------------------
            
        } catch (err) {
            res.status(500).send({
                error : "Pour une quelconque raison la connexion est impossible"
            })
        }
    }

}