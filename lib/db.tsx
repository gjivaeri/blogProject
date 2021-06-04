import mysql from 'serverless-mysql';

export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD
  }
});

export async function sqlQuery(queryString, values=[]) {
  try {
    const results = await db.query(queryString, values);
    await db.end();
    return results;
  } catch(e) {
    throw Error(e.message);
  }
}