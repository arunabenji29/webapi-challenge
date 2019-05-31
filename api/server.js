const express = require('express')
const cors = require('cors')

const projectRouter = require('../myrouters/projectRouter.js')
const actionRouter = require('../myrouters/actionRouter.js')
const server = express();
server.use(express.json());
server.use(cors());
server.use('/api/projects',projectRouter)

server.use('/api/actions',actionRouter)

server.get('/', (req,res) => {
    res.send(`<h2>Try to make things work</h2>`)
})

function logger(req,res,next){
    console.log(`${req.method} request to '${req.url}' made at ${new Date().toISOString()}`);
    next();
}

module.exports = server;