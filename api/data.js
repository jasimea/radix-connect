const db = require("sqlectron-db-core");
const sql = require("mssql");
const { data } = require("autoprefixer");

const sqlConfig = {
  user: "sa",
  password: "R@d1x2oi8",
  database: "RadixHR",
  server: "api.radixapps.com",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const serverInfo = {
  name: "radixhr",
  client: "sqlserver",
  host: "api.radixapps.com",
  port: 1433,
  user: "sa",
  password: "R@d1x2oi8",
};

module.exports = async (req, res) => {
  const pageNumber = req.query.pageNumber;
  const recordsPerPage = 10;
  const tableName = req.query.tableName;
  const serverSession = db.createServer(serverInfo);
  const dbConn = serverSession.createConnection("RadixHR");
  await dbConn.connect();
  const keys = await getKeys(tableName);
  // const query = await dbConn.getQuerySelectTop(tableName || "tbl_employee");
  // const data = await dbConn.executeQuery(query);
  // const keys = await dbConn.getTableKeys(tableName, "dbo");
  const fields = await queryData(
    "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='" +
      tableName +
      "'"
  );

  const columns = fields.map((e) => {
    return {
      name: e.COLUMN_NAME,
      type: e.DATA_TYPE,
    };
  });

  let query = `SELECT * FROM ${tableName}`;
  const totalRecords = await getCount(query);
  if (pageNumber) {
    const k = keys[0];
    const start =  (pageNumber - 1) * recordsPerPage + 1;
    query += ` ORDER BY ${k} OFFSET ${start} ROWS FETCH NEXT ${recordsPerPage} ROWS ONLY`;
  }
  console.log(query);
  const data = await queryData(query);

  await dbConn.disconnect();
  res.json({ data, columns, keys, totalRecords });
};

async function queryData(query, multiple) {
  let data = [];
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query(query);
    data = result.recordset;
  } catch (err) {
    console.log(err);
    data = [];
  } finally {
    await sql.close();
  }
  return data;
}

async function getCount(query) {
  const q = `SELECT COUNT(*) as count from (
    ${query}
  ) count `;
  const x = await queryData(q);
  return x[0].count;
}

async function getKeys(tableName) {
  const keys = await queryData(`
  SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_NAME LIKE '${tableName}' AND CONSTRAINT_NAME LIKE 'PK%'
  `);
  return keys.map((e) => e.COLUMN_NAME);
}
