require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Configuracion global de rutas
app.use(require('./routes/index'));


mongoose.connect('mongodb+srv://genaro:rPqrca6hjmnQcOhE@cluster0-ucbb3.mongodb.net/cafe', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, resp) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, function() {
    console.log('Escuchando puerto: ', process.env.PORT);
});