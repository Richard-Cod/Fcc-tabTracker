const {Song} = require('../models');

module.exports = {
    async list(req, res) {
        try {
            const songs = await Song.findAll();
            res.send(songs);

        } catch (error) {
            console.log("Erreuuuurrr ");
            console.log(error);

            res.status(500).send({
                error : "Impossible de lister les chansons ",
                content:error
            })
        }
      
   },
   async getOne(req, res) {
       console.log("L'identifiant qui est passé est : ",req.params.id);
    try {
        const song = await Song.findOne({
            where:{
                id:req.params.id
            }
        });
        res.send(song);

    } catch (error) {
        console.log("Erreuuuurrr ");
        console.log(error);

        res.status(500).send({
            error : "Impossible d'obtenir cette chansons ",
            content:error
        })
    }
  
},


     async create(req, res) {
         try {
             const song = await Song.create(req.body);
             res.status(201).send({song});

         } catch (error) {
             res.status(500).send({
                 error : "Impossible de créer cette chanson là ",
             })
         }
       
    },
    

}