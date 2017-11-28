const DbUtil = require('../utils/mongoUtils');


exports.stat = async (ctx) => {
  const body = {};
  const db = DbUtil.getDb();
  body.totalUsers = await db.collection('users').count();
  body.totalInvestigations = await db.collection('investigations').count();
  body.timestampe = new Date();
  ctx.body = body;
};
