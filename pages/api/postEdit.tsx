import { sqlQuery, db } from '../../lib/db';

const handler = async (req, res) => {
  let results = await db.transaction()
  .query(`INSERT INTO pages VALUES(${req.query.postId}, '${req.query.title}', '${req.query.content}', '${req.query.date}', '${req.query.author}', '${req.query.category}')`)
  .rollback(e => { /* do something with the error */ }) // optional
  .commit() // execute the queries
}

export default handler;