const PendingDb = require('../utils/mongoUtils');


exports.stat = async (ctx) => {
  const db = await PendingDb;
  const body = {};

  body.totalUsers =  await db.collection('users').count();
  body.totalInvestigations = await db.collection('investigations').count();
  ctx.body = body;
};
