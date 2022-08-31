const fs = require('fs');

const router = {

    checkRoute : (url, req, res) => {
       
        switch(url){
            case "/":
                fs.readFile('index.html', (err, data) => {  
                if(err){
                    console.log(err); 
                }
                res.end(data); 
                }); 
                break;

            case "/about": 
                fs.readFile('about.html', (err, data) => {  
                if(err){
                    console.log(err); 
                }
                res.end(data); 
                }); 
                break;

            case "/contact-me": 
                fs.readFile('contact-me.html', (err, data) => {  
                if(err){
                    console.log(err); 
                }
                res.end(data); 
                }); 
                break;
            default: 
            fs.readFile('404.html', (err, data) => {  
                if(err){
                    console.log(err); 
                }
                res.end(data); 
                }); 
          }
    }
}

module.exports = router;