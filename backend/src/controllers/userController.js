import asyncHandler from 'express-async-handler';
import model from 'mongoose';
import generateToken from '../common/generateToken.js';
import User from '../models/userModels.js';


//@desc Auth user  get token
//@route POST /api/users/login
//@access Public

export const authUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user)
    if (user && (await user.matchPassword(password))) {
        console.log('entro');
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

//@desc Register a new user
//@route POST /api/users
//@access Public
export const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User.create({
        name,
        email,
        password,
    });
    if (user) {
        res.status(201).json({//el codigo de estatus 201 especifica que un nuevo usuario se a creado
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
export const getUserProfile = asyncHandler(async (req, res)=>{
    //Usar findById
    //Evitar un res.json({}) que contenga: _id, name, email, isAdmin
    //En caso de error devolver status 404 y arrojar el error: 'User not found'
    //const id_user = req.user._id
    const user = await User.findById({_id:req.user._id})
    console.log(user);
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }
    res.status(200).json({
        _id:user._id,
        name :user.name,
        email :user.email
     } );

});

// @decs Update user profile
// @route PUT /api/users/profile
// @access Private

export const updateUserProfile = asyncHandler(async(req, res) => {
    // Usar findById
    // Asignar los valores que vienen de la req o del usuario encontrado
    // ej: user.name =req.body.name || user.name
    // si vienen el pasword en el req entonces asignarlo al user.password
    // Guardar el usuario actualizado con .save()
    // Enviar un res.json({}) que contenga: _id, name, email, is Admin, token
    // En caso de error devolver status 404 y arrojar el error: 'User not found'
});

// @desc Get all users
// @route GET /api/users
// @access Private/Admin
export const getUsers = asyncHandler(async(req, res) => {
    // Usar find
    // Enviar un res.json() con el resultado

    const users = await User.find({});
    if (!users) {
        res.status(401);
        throw new Error('Bad Request');
    } else {
        console.log(users);
        res.status(200).json(users);
    }
});

// @desc Delete user
// @route DELETE /api/users/:id
// @accsess Private/Admin
export const deleteUser = asyncHandler(async(req, res) => {
    // Usar findById
    // Si se encontro el usuario usar .remove()
    // Retornar un res.json({}) con el message: 'User removed'
    // Si no se encontró el usuario retornar status 404
    // Y arrojar el error: 'User not found'
});

//------------------------Alvaro------------------------//
// @desc Get user by ID
// @route GET /API/users/:id
// @access Private/Admin
export const getUserById = asyncHandler(async(req, res) => {
    // Usar findById agregandole .select() para evita el password
    // Si existe el usuario regresar res.json() con el resultado
    // Si o exixste el usuario retornar status 404
    // Y rrojar el error: 'User not found'

    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }
    res.status(200).json(user);

});

// @decs Update user
// @route PUT /api/users/:id
// @access Private/Admin
export const updateUser = asyncHandler(async(req, res) => {
    // Usar findById
    //Si se encontró el usuario entonces´:
    //user.name = req.body.name || user.name;
    //user.email = req.body.email || user.email;
    //user.isAdmin = req.body.isAdmin || user.isAdmin;
    //guardar con .save()
    //Retornar un res.json({}) con contega: _id, name, email, isAdmin
    //Si no se encontró el usuario entonces retornar status 404
    //Y arrojar el error: 'User not found'
    
})

