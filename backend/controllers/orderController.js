import asyncHandler from 'express-async-handler'
import Order from "../models/orderModel.js";

import fs from 'fs/promises'


// @desc: create new order
// @route: POST /api/orders
// @access: Private


const addOrderItems = asyncHandler(async (req,res) => {
    const {
        user,
        orderItems,
        shippingAddress,
        paymentMethod, 
        itemsPrice, 
        taxPrice, 
        shippingPrice,
        totalPrice } = req.body

    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('No order item')
    }else{
        var date = new Date();
        const order = new Order({
            user,
            date,
            orderItems,
            shippingAddress,
            paymentMethod, 
            itemsPrice, 
            taxPrice, 
            shippingPrice,
            totalPrice
        })

        const orderLog = {
            "user": user,
            "date": date,
            "orderItems": orderItems,
            "city": shippingAddress.city,
            "country": shippingAddress.country,
            "amount": Number(totalPrice),
            "paymentMethod": paymentMethod,
            "itemsCount": orderItems.length
        }

        const jsonString = JSON.stringify(orderLog);

        const createdOrder = order.save()
        fs.appendFile('orders.log', jsonString+"\r\n", function(error) {
            if (error) {
                throw error;
            }
            process.exit();
        });
        res.status(201).json(createdOrder)
        
    }
})

export { addOrderItems }