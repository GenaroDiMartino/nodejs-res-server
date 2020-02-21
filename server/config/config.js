//Puerto
process.env.PORT = process.env.PORT || 3000;


// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// BDD
let urlDB;

// if (process.env.NODE_ENV === 'dev') {
//     urlDB = 'mongodb://localhost:27017/cafe'
// } else {
//     urlDB = 'mongodb://gdimartino:sHTkmRBzAs1aELbp@cluster0-jh8tc.mongodb.net/cafe';
// }

urlDB = 'mongodb+srv://gdimartino:sHTkmRBzAs1aELbp@cluster0-jh8tc.mongodb.net/cafe';

process.env.URLDB = urlDB;