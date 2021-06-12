const db = require("sqlectron-db-core");

const serverInfo = {
  name: "radixhr",
  client: "sqlserver",
  host: "api.radixapps.com",
  port: 1433,
  user: "sa",
  password: "R@d1x2oi8",
};

module.exports = async (req, res) => {
  const serverSession = db.createServer(serverInfo);
  const dbConn = serverSession.createConnection("RadixHR");
  await dbConn.connect();
  const tables = await dbConn.listTables();
  const views = await dbConn.listViews();
  const routines = await dbConn.listRoutines();
  await dbConn.disconnect();
  res.json({ tables, views, routines });
};
