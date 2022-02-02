import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import config from './config/index.js';
import routes from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import connectDB from './config/db.js';
import path from 'path';

//import cors from 'cors'//consultar

//Create server
const server = express();

//Parse JSON
server.use(express.json());
//server.use(cors({origin: 'http://localhost:3000'})) //linea para dar permisos de CORS

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
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD');
    //next event 
    return next();
});

//Use routes
server.use(config.api.prefix, routes);

//Uplead folder
/*
const __dirname = path.resolve();
server.use('/uploads', express.static(path.join(__dirname, '/uploads')));*/
const __dirname = path.resolve();
server.use('/uploads', express.static(path.join(__dirname, '/uploads')));
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