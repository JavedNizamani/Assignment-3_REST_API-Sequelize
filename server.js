const http = require('http');                                  // creating server to run api
const app = require('./app');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);                         // run entire api at server
const sequelize = require('./utils/db');                    


sequelize.sync().then(()=>{                                 // run Sequelize at Server
    server.listen(PORT,()=>{
        console.log(`Server Running at PORT: ${PORT}`);
    })
}).catch((error)=>{
    console.error(error.stack);
});
