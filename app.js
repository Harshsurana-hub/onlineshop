const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const { products } = require("./data");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/api', (req, res) => {
    res.send({message: "API called"});
})

app.get('/api/products', (req,res)=>{
    res.json(products)
})



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})  