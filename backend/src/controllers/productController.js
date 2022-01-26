import asyncHandler from 'express-async-handler';
import Product from '../models/productModel';

//@desc Fetch all products
//@route GET /api/products
//@access Public
export const getProducts = asyncHandler(async(req, res) => {
    const pageSize = 10; // test 2
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword ?
        {
            name: {
                $regex: req.query.keyword,
                $options: 'i',
            },
        } :
        {};
    const count = await Product.countDocuments({...keyword });
    const products = await Product.find({...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1));
    return res.json({ products, page, pages: Math.ceil(count / pageSize) });

});

//@desc Fetch single product
//@route GET /api/products/:id
//@access Public
export const getProductById = asyncHandler(async(req, res) => {
    //UsarfindById
    //Retornar el producto encontrado
    //Sino retornar status 404
    //Y arrojar el error: 'Product Not Found'
});

//desc Delete product
//route DELETE /api/products/:id
//acces Private/admin
export const deleteProduct = asyncHandler(async(req, res) => {
    //Usar findById
    //Si encontro el producto usar .remove()
    //Y retornar res.json({}) message: 'Product removed'
    //Sino retornar status 404
    //y arrojar el error:'Product Not Found'
});

//@desc Create a product
//@route POST /api/products
//@access Private/Admin
export const createProduct = asyncHandler(async(req, res) => {
    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',

    })
})