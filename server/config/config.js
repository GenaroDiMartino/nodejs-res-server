//Puerto
process.env.PORT = process.env.PORT || 3000;


// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// BDD
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://genaro:rPqrca6hjmnQcOhE@cluster0-ucbb3.mongodb.net/cafe';
}

process.env.URLDB = urlDB;


//mongoose.connect('mongodb+srv://genaro:rPqrca6hjmnQcOhE@cluster0-ucbb3.mongodb.net/cafe', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, resp) => {
//mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, resp) => {