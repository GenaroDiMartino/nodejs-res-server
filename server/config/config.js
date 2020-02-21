//Puerto
process.env.PORT = process.env.PORT || 3000;


// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento Token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// Seed autenticacion
process.env.SEED = process.env.SEED || 'seed-desarrollo';


// BDD
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://genaro:rPqrca6hjmnQcOhE@cluster0-ucbb3.mongodb.net/cafe';
}

process.env.URLDB = urlDB;