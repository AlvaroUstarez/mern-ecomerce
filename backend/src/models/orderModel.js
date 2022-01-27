import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    user: {
        //Ref a user
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    orderItems: [{
        // name: Texto, requerido
        // qty: Numero, requerido
        // image: Texto, requerido
        // price: Numero, requerido
        // product: Ref a product
        name: {
            type: String,
            required: true,
        },
        qty: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
        }
    }, ],
    shippingAdress: {
        // address: Texto, requerido
        // city: Texto, requerido
        // postalCode: Texto, requerido
        // country: Texto, requerido
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    paymentMethod: {
        // Texto, requerido
        type: String,
        required: true
    },
    paymentResult: {
        // id:Texto
        // status: Texto
        // update_time: Texto
        // email_address: Texto
        id: {
            type: String,
        },
        status: {
            type: String,
        },
        update_time: {
            type: String,
        },
        email_address: {
            type: String,
        }
    },
    taxPrice: {
        type: Number,
        default: 0.0,
    },
    shippingPrice:{
        type: Number,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    DeliveredAt: {
        type: Date
    },
}, {
    timestamp: true,
});
const Order = mongoose.model('Order', orderSchema);
export default Order;