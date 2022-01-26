import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    user: {
        //Ref a user
<<<<<<< HEAD
=======
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
>>>>>>> e1b78dc7662fadcefac86448c376ad9c1276df16
    },
    orderItems: [{
        // name: Texto, requerido
        // qty: Numero, requerido
        // image: Texto, requerido
        // price: Numero, requerido
        // product: Ref a product
<<<<<<< HEAD
=======
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


>>>>>>> e1b78dc7662fadcefac86448c376ad9c1276df16
    }, ],
    shippingAdress: {
        // address: Texto, requerido
        // city: Texto, requerido
        // postalCode: Texto, requerido
        // country: Texto, requerido
<<<<<<< HEAD
    },
    paymentMethod: {
        // Texto, requerido
=======
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
>>>>>>> e1b78dc7662fadcefac86448c376ad9c1276df16
    },
    paymentResult: {
        // id:Texto
        // status: Texto
        // update_time: Texto
        // email_address: Texto
<<<<<<< HEAD
=======
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

>>>>>>> e1b78dc7662fadcefac86448c376ad9c1276df16
    },
    taxPrice: {
        type: Number,
        default: 0.0,
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