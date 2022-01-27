import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@desc Fetch all products
//@route GET /api/products
//@access Public
export const getProducts = asyncHandler(async(req, res) => {
    const pageSize = 10; // test 2
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i',
        },
    } : {};
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
    const product = await Product.findById(req.params.id);
    console.log(product);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }
    res.status(200).json(product);

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
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }
    else{
        product.remove();
        res.status(200).json('Product removed');
    }
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
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample desciption',


    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

//@desc Update a product
//@route PUT /api/products/:id
//@access Private/Admin
export const updateProduct = asyncHandler(async(req, res) => {
    //Obtener name, price, description, image, brand, category y countInStock
    //del req.body
    //Usar findById
    //Si existe el producto asignar los datos de la sigiente forma:
    //product.name =name ?? product.name;
    //Usar .save()
    //Retornar res.json() con el producto actualizado
    //Si no existe el producto retornar status 404
    //Y arrojar el error: 'Product Not Found'
    const product = await Product.findById(req.params.id);
    const {name, price, description, image, brand, category, countInStock} = req.body;
    if (product){
        product.name = name ?? product.name;
        product.reviews.price =price ?? product.reviews.price;
        product.description =description ?? product.description;
        product.image = image ?? product.image;
        product.brand = brand ?? product.brand;
        product.category = category ?? product.category;
        product.reviews.countInStock = countInStock ?? product.reviews.countInStock;
//bloquear hasta que se modifique ver 
        product.save();
        res.status(200).json(product);
    }else{
        res.status(404);
        throw new console.error('Product Not Found');
    }
});

//@desc Create new review
//@route POST /api/products/:id/reviews
//@access Private
export const createProductReview = asyncHandler(async(req, res) => {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
        const alreadyReviewed = product.reviews.find(
            (r) => r.user.toString() === req.user._id.toString()
        );
        if (alreadyReviewed) {
            res.status(400);
            throw new Error('Product already reviewed');
        }
        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating =
            product.reviews.reduce((acc, item) => item.rating + acc, 0) /
            product.reviews.length;
        await product.save();
        res.status(201).json({ message: 'Review added' });
    } else {
        res.status(404);
        throw new Error('Product Not Foutd');
    }
});

//@desc Get top rated products
//@route GET /api/products/top
//@access Public
export const getTopProducts = asyncHandler(async(req, res) => {
    //Usar find ({}) y sort para ordenar por los más rankeados
    //y un limit de 3 resultados solamente
    //Retornar un json con los productos encontrados
    const products = await Product.find({});
    const product = products.sort(((a, b) => b.rating - a.rating)).slice(0, 3);
    if (product) {
        res.status200.json(product)
    } else {
        res.status(404);
        throw new Error('Product Not Foutd');
    }

});