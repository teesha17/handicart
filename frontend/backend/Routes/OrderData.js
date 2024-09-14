const express = require('express');
const router = express.Router();
const Order = require('../models/Orders')

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data
    await data.splice(0,0,{Order_date:req.body.order_date})
    console.log("1231242343242354",req.body.email)

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email })    
    console.log(eId)
    if (eId===null) {
        try {
            console.log(data)
            console.log("1231242343242354",req.body.email)
            await Order.create({
                email: req.body.email,
                order_data:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
})

router.get('/adminOrders', async (req, res) => {
    try {
        const orders = await Order.find(); 
        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch orders' });
    }
});

router.put('/updateOrderStatus', async (req, res) => {
    const { email, orderIndex, status } = req.body;
    try {
        const order = await Order.findOne({ email: email });
        if (order) {
            order.order_data[orderIndex].status = status;  // Update status for the specific order
            await order.save();
            res.status(200).send('Order status updated');
        } else {
            res.status(404).send('Order not found');
        }
    } catch (error) {
        res.status(500).send('Failed to update order status');
    }
});


router.post('/myOrderData', async (req, res) => {
    try {
        console.log(req.body.email)
        let eId = await Order.findOne({ 'email': req.body.email })
        res.json({orderData:eId})
    } catch (error) {
        res.status(500).send({ error: 'An error occurred' });

    }
})

module.exports=router;