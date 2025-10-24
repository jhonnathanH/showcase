import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // En modo de desarrollo, usamos una variable global
  // para que el HMR no cree múltiples conexiones
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En producción, es una conexión simple
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Exporta una promesa para tu cliente de base de datos
export default clientPromise;