import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
    {
        name: { type:String, required: true},
        rating: {
            //Numero, requerido
            type:Number,
            required:true,
            
        },
        comment: {
            //Texto, requerido
            type:String,
            required:true,
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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name:{
        //Texto, requerido
        type:String,
        required:true,
    },
    image:{
        //Texto, requerido
        type:String,
        required:true,
    },
    brand:{
        //Texto, requerido
        type:String,
        required:true,
    },
    category:{
        //Texto, requerido
        type:String,
        required:true,
    },
    description:{
        //Texto, requerido
        type:String,
        required:true,
    },
    reviews: [reviewSchema],
    rating:{
        //Numero, requerido, default 0
        type:Number,
        required:true,
        default:0,
    },
    numReviews:{
        //Numero, requerido, default 0
        type:Number,
        required:true,
        default:0,
    },
    price:{
        //Numero, requerido, default 0
        type:Number,
        required:true,
        default:0,
    },
    countInStock:{
        //Numero, requerido, default 0
        type:Number,
        required:true,
        default:0,
    },

},
    {
        timestamps:true,
    }
);
const Product= mongoose.model('Product', productSchema);

export default Product;