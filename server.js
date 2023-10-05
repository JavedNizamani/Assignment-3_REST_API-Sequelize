const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const sequelize = require('./utils/db');


sequelize.sync().then((result)=>{
    server.listen(PORT,()=>{
        console.log(`Server Running at PORT: ${PORT}`);
    })
}).catch((error)=>{
    console.error(error.stack);
});
