import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc Add new order
// @route POST /api/orders
// @access Private
export const addOrderItems = asyncHandler(async(req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items');
    } else {
        const order = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
});

// @desc Get order by ID
// @route GET /api/orders/:id
// @access Private
export const getOrderById = asyncHandler(async(req, res) => {
    //Usar findById populate para obtener del user el name y email
    // Si existe la orden y el user que realiza l request es admin
    // o es usuario que realizo la orden, retornar
    // res.json() con la orden encontrada
    // Sino retornar status 404
    // Y arrojar el error:'Order not found'
    //const orden = await Order.findById(req.params.id);
    //console.log(orden);
    //if (!orden) {
    //    res.status(404);
    //    throw new Error('Order not found');
    //}
    //res.status(200).json(orden);

});

// @desc Update order to  paid
// @route PUT /api/orders/:id/pay
// @access Private
export const updateOrderToPaid = asyncHandler(async(req, res) => {
    //Usar findById
    //Si existe la orden y el user que realiza la request es admin
    //o es el usuario que realizo la orden, 
    //Asignar a isPaid true y a paidAt la fecha actual
    //Luego a la orden encontrada asignar el objeto paymentResult:
    //order.paymentResult={
    //    id :req.body.id,
    //    status: req.body.status,
    //    update_time:req.body.update_time,
    //    email_address:req.body.payer.email_address,
    //};
    //Realizar un .save() y retornar la orden actualizada
    //Sino retornar status 404 y arrojar el error: 'Order nor found'
});

// @desc Update order to delivered
// @route PUT /api/orders/:id/deliver
// @access Private/Admin
export const updateOrderToDelivered = asyncHandler(async(req, res) => {
    //Usar findById
    //Si existe la orden y el user que realiza la request es admin
    //o es el usuario que realizo la orden, 
    //Asignar a isDelivered true y a deliceredAt la fecha actual
    //Realizar un .save() y retornar la oren actualizada
    //Sino retornar status 404 y arrojar el error: 'Order not found'
});

// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access Private
export const getMyOrders = asyncHandler(async(req, res) => {
    //Usar find y en el parametro enviar la propiedad user con
    //el id que viene del req.user
    //Retornar un json() con las ordenes
});

// @desc Get all orders
// @route GET /api/orders
// @access Private/Admin
export const getOrders = asyncHandler(async(req, res) => {
    // Usar find y populate con los datos el user: id y name
    // Retornar un json() con las ordenes   

})