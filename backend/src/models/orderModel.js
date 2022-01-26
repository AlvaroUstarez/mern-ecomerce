import mongoose from 'mongoose';

const orderSchema= mongoose.Schema(
    {
        user: {
            //Ref a user
        },
        orderItems:[
            {
                // name: Texto, requerido
                // qty: Numero, requerido
                // image: Texto, requerido
                // price: Numero, requerido
                // product: Ref a product
            },
        ],
        shippingAdress:{
            // address: Texto, requerido
            // city: Texto, requerido
            // postalCode: Texto, requerido
            // country: Texto, requerido
        },
        paymentMethod:{
            // Texto, requerido
        },
        paymentResult:{
            // id:Texto
            // status: Texto
            // update_time: Texto
            // email_address: Texto
        },
        taxPrice:{
            // Numero, requerido
            // Default 0.0
        },
        totalPrice:{
            // Numero, requerido
            // Default 0.0
        },
        isPaid:{
            // Boolean, requerido
            // Default false
        },
        paidAt:{
            // Fecha
        },
        isDelivered:{
            // Boolean, requerido
            // Default false
        },
        DeliveredAt:{
            // Fecha
        },
    },
    {
        timestamp:true,
    }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;