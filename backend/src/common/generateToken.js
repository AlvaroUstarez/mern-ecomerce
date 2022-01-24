import jwt from 'jsonwebtoken';
import config from '../config/index.js';

const gererateToken = (id) => {
    return jwt.sign({ id }, config.jwtSecret, {
        expiresIn: '30d',
    })
}

export default generateToken;