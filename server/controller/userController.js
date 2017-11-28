const DbUtil = require('../utils/mongoUtils');

exports.getUsers = async(ctx) => {
  const db = DbUtil.getDb();
  const users = await db.collection('users').find({}).toArray();
  ctx.body = users;
}
