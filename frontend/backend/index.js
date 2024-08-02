const express=require('express');
const app=express();
const cors=require('cors');
const port =3000;
const mongodb=require('./db');

// app.use((req,res,next)=>{
//     res.setHeader("Acess-Control-Allow-Origin","http://localhost:5173/createuser");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin-, X-Requested-With, Content-Type, Accept"
//     )
//     next();
// })

app.use(cors());



mongodb();
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))
app.use('/api',require("./Routes/CreateCart"))


app.listen(port,()=>
{
    console.log(`listening on port ${port}`);
})