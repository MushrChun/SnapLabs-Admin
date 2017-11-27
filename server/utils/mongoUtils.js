
const MongoDB = require('mongodb');

const MongoClient = MongoDB.MongoClient;
const mongoUri = process.env.MONGODB_URI;


const db = MongoClient.connect(mongoUri);
module.exports = db;
