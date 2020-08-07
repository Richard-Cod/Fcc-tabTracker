

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config/config');



const {sequelize} = require('./models')

const app = express();
app.use(express.json());
app.use(morgan('combined'));
app.use(cors())


require('./routes')(app);

sequelize.sync()
         .then(() => {
app.listen(config.port, () => {
  console.log(`Serveur écoute à l'adresse http://localhost:${config.port}`)
})

})


