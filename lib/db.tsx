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
//db에 개체 만들고 쿼리를 사용하여 쿼리 메서드 호출. 스트링과 values값을 결과에 넣음
//ex)sql_query(`Select * from ~ ORDER BY id DESC LIMIT 10`)처럼 사용