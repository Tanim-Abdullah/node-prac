const express = require('express');
const app = express();

// app.get
app.get('/',(req,res)=>{
    console.log('User is on the home page');
    res.status(200).send('Home Page');
})

app.get('/about',(req,res)=>{
    console.log('User is on the about page')
    res.status(200).send('About Page');
})
// app.all
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>');
})

// app.listen
app.listen(5000,()=>{
    console.log('Server is listening on port 5000');
})
