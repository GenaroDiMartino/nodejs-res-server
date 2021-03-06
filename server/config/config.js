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
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// google client id

process.env.CLIENT_ID = process.env.CLIENT_ID || '281876290898-s3ebr86mqoe63kgu0urapt4trb4ferth.apps.googleusercontent.com';