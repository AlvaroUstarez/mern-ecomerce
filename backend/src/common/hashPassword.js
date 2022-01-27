import bcrypt from 'bcryptjs';

const hashPassword=(password)=> {
    const salt = bcrypt.genSaltSync(10);
    const passwordenccriptada = bcrypt.hashSync(password, salt);
    return passwordenccriptada
}
export default hashPassword