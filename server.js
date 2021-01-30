const express = require("express"); // express is a function 
const app = express(); // app is an object 

// PATHS
app.get('/hello', (req, res)=> {
    res.send('why hello');
});

// PORT
app.listen(3000, ()=>{
    console.log("I am listening on port 3000")
});

