import express from 'express'
import { MongoClient } from 'mongodb'
import { cartItems as cartItemsRaw, products as productItemsRaw } from './temp-data';

let cartItems = cartItemsRaw;
let products=productItemsRaw;
const url = `mongodb+srv://fsv-server:<riodboss>@cluster0.gwijy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const client = new MongoClient(url)

const app = express();
app.use(express.json())

app.get('/hello',async (req,res)=>{
    await client.connect()
    const db = client.db('fsv-db')
    const products = await db.collection('products').find({})
    res.send(products)

})

app.get('/products',(req,res)=>{
    res.json(products);
})

function populateCartIds(ids){
   return ids.map(id => products.find(product=>product.id === id));//map ids to te product and show the product instead of the ids

}

app.get('/cart',(req,res)=>{
    const populatedCart = populateCartIds(cartItems);
    res.json(populatedCart)
    
})

app.get('/products/:productId',(req,res)=>{
    const productId = req.params.productId
    const product = products.find(product=>product.id===productId);
    res.json(product);
})

app.post('/cart',(req,res)=>{
    const productId = req.body.id;
    cartItems.push(productId);
    const populatedCart = populateCartIds(cartItems)
    res.json(populatedCart);
})

app.delete('/cart/:productId',(req,res)=>{
    const productId = req.params.productId;
    cartItems = cartItems.filter(id => id !== productId)
    const populatedCart = populateCartIds(cartItems)
    res.json(populatedCart)
})

app.listen(8000, ()=>{
    console.log('Server is listening on port 8000')
})