const express = require('express')
const mongoose = require('mongoose')
const app = express()

//Middleware
app.use( express.json());
app.use( express.urlencoded({ extended:true }));


//Base de datos
mongoose.connect('mongodb://localhost/notes', { useNewUrlParser: true, useUnifiedTopology: true });


//Prueba
app.get('/', (req,res) => {
    res.send('Prueba');
});


//Servidor
app.listen(5000, () => {
    console.log("App is listening on port 5000!");
});