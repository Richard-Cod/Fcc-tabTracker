
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

const SongsController = require('./controllers/SongsController');

module.exports = (app) => {

    
app.get('/', (req, res) => {
    res.send({message:"Page d'accueil"})
})

app.get('/songs', SongsController.list );

app.post('/register', AuthenticationControllerPolicy.register,AuthenticationController.register);
app.post('/login',AuthenticationController.login);
app.post('/songs/create',SongsController.create);
app.get('/songs/:id',SongsController.getOne);
  
  
}