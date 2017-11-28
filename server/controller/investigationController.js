const DbUtil = require('../utils/mongoUtils');

exports.getInvestigations = async (ctx) => {
  const db = DbUtil.getDb();
  const investigations = await db.collection('investigations').find({}, { _id: 1, createdBy: 1, serialNumber: 1, labTitle: 1, createdAt: 1, lastUpdatedAt: 1 }).toArray();
  ctx.body = investigations;
};
