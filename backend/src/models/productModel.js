import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
    {
        name: { String, required: true},
        rating: {
            //Numero, requerido
        },
        Comment: {
            //Texto, requerido
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const productSchema= mongoose.Schema(
    {
    user:{
        //deberás hacer una referencia con User
        //Tomar como referencia el campo user que se
        //utilizó en reviewSchema
    },
    name:{
        //Texto, requerido
    },
    image:{
        //Texto, requerido
    },
    brand:{
        //Texto, requerido
    },
    category:{
        //Texto, requerido
    },
    description:{
        //Texto, requerido
    },
    reviews: [reviewSchema],
    rating:{
        //Numero, requerido, default 0
    },
    numReviews:{
        //Numero, requerido, default 0
    },
    price:{
        //Numero, requerido, default 0
    },
    countInStock:{
        //Numero, requerido, default 0
    },

},
    {
        timestamps:true,
    }
);
const Product= mongoose.model('Product', productSchema);

export default Product;