const http = require('http');                                  // creating server to run api
const app = require('./app');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);                         // run entire api at server
require('./utils/db.tables'); 

    server.listen(PORT,()=>{
        console.log(`Server Running at PORT: ${PORT}`);
    })

