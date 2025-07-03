const express =require ('express');
const app = express();
const {products} = require('./data')
// here we are importing the products data from the data.js file
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})
// here we are sending the products data as a JSON response
// but we are only sending id, name and image properties of each product
app.get('/api/products',(req,res)=>{
    //res.json(products)
    const newProducts=products.map((product)=>{
        const {id,name,image}=product;
        return {id,name,image}
    })
    res.json(newProducts)
})
app.get('/api/products/:productID',(req,res)=>{
    //console.log(req);
    //console.log(req.params);
    const {productID} = req.params;
    const singleProduct=products.find((product)=>product.id === Number(productID));
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist!')
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send('hello world')
})

app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query);
    const {search,limit}=req.query;
    // here we are destructuring the search and limit properties from the query string
    let sortedProducts = [...products];
    if (search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if (sortedProducts.length < 1){
        //res.status(200).send('no products matched your search');
        // here we are sending a response with success:true and data:[] if no products matched the search
        return res.status(200).json({success:true,data:[]})
    }
    return res.status(200).json(sortedProducts);
    //res.send('hello Tanim')
})


app.listen(5000,()=>{
    console.log(`Server is listening on port 5000`);
})