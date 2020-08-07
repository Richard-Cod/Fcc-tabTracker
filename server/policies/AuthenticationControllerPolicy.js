const Joi = require('joi');

module.exports = {
    register(req,res,next){

        const schema = Joi.object({
            email:Joi.string().email(),

            password:Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })

        const {error,value} = schema.validate(req.body);
        if(error){
            console.log("************************");
            console.log(error);
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error : "Cette adresse mail est invalide"
                    })
                    break;
                case 'password':
                    res.status(400).send({
                        error: `1. Le mot de passe doit contenir entre 8 et 32 caractères <br> 
                                2. Le mot de passe ne peut contenir de caractères spéciaux",`
                                

                    })
                    break;
                default:
                    res.status(400).send({
                        error:"Informations sont invalides"
                    })

            }
        }else{
            next();

        }
    }
}