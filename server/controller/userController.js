const DbUtil = require('../utils/mongoUtils');

exports.getUsers = async(ctx) => {
  const db = DbUtil.getDb();
  const users = await db.collection('users').find({},{ _id:1, name:1, email:1 }).toArray();
  ctx.body = users;
}
