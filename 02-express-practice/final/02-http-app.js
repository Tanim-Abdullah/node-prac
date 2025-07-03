const http = require('http')
const {readFileSync} = require('fs')
//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    //console.log(req.method, req.url);
    const url = req.url;
    // Home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        return res.end()
    }
    // About page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1><p>Welcome to the about page!</p>')
        return res.end()
    }
    // Styles
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        return res.end()
    }
    // Image Logo
    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        return res.end()
    }
    // Logic
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        return res.end()
    }
    // 404
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>404 Not Found</h1><p>Sorry, the page you are looking for does not exist.</p>')
        return res.end()
    }

})
server.listen(5000)