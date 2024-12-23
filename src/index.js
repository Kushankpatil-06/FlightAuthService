const express = require('express');
const bodyParser= require('body-parser')
const {PORT} = require('./config/serverConfig')
const db = require('./models/index');
const{User,Role} = require('./models/index')
const app = express();
const apiRoutes = require('./routes/index')

const prepareAndStartServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', apiRoutes);


    app.listen(3000,async()=>{
         console.log(`Server Started on Port: ${PORT}`);
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter: true});
        }

        // const u1 = await User.findByPk(3);
        // const r1 = await Role.findByPk(1);
        // u1.addRole(r1);
        console.log(`Server is running on port ${PORT}`);
    })
}

prepareAndStartServer();