// Assurez-vous d'avoir la bibliothèque mongoose installée
// npm install mongoose

// Importez la bibliothèque mongoose dans votre application
import mongoose from 'mongoose';

// Connexion à MongoDB
mongoose.connect('mongodb://mongo:27017/auth', {
  auth: {
    username: process.env.MONGO_INITDB_ROOT_USERNAME,
    password: process.env.MONGO_INITDB_ROOT_PASSWORD
  }
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB', err));
