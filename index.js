const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000
app.get('/' , (req , res) =>{
    res.send('Hello ');
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));