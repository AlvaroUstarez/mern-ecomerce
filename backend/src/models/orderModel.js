import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    user: {
        //Ref a user
    },
    orderItems: [{
        // name: Texto, requerido
        // qty: Numero, requerido
        // image: Texto, requerido
        // price: Numero, requerido
        // product: Ref a product
    }, ],
    shippingAdress: {
        // address: Texto, requerido
        // city: Texto, requerido
        // postalCode: Texto, requerido
        // country: Texto, requerido
    },
    paymentMethod: {
        // Texto, requerido
    },
    paymentResult: {
        // id:Texto
        // status: Texto
        // update_time: Texto
        // email_address: Texto
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