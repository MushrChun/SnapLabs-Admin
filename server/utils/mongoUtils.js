
const MongoClient = require('mongodb').MongoClient;

let _db;

exports.connect2mongo = async () => {
  const mongoUri = process.env.MONGODB_URI;
  _db = await MongoClient.connect(mongoUri);
};

exports.getDb = () => {
  return _db;
};
