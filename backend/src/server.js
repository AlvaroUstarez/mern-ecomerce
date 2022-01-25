import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import config from './config/index.js';
import routes from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import connectDB from './config/db.js';



//Create server
const server = express();

//Parse JSON
server.use(express.json());

//Logger
if (config.nodeEnv === 'development') {
    server.use(morgan('dev'));
}

//DB Connection
connectDB();

//Config Headers
server.use((req, res, next) => {
    //from where can I acces
    res.header('Access-Control-Allow-Origin', '*');
    //type of geaders
    res.header('Access-Control-Allow-Headers', 'content-type, authorization');
    //type of methods
    res.header('Access-Control-Allow-Headers', 'GET, PUT, POST, DELETE, HEAD');
    //next event 
    return next();
});

//Use routes
server.use(config.api.prefix, routes);

//Uplead folder

//Frontend production

//Api stauts

server.get(config.api.prefix, (req, res) => {
    res.send('API is running...')
});

//Middlewares

server.use(notFound)
server.use(errorHandler)

//Export server
export default server;