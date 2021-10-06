const express = require('express')
const mongoose = require('mongoose')
const noteRouter = require('./routes/notes')
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


app.use("/api", noteRouter)

//Servidor
app.listen(5000, () => {
    console.log("App is listening on port 5000!");
});
