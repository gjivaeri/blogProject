import { sqlQuery } from '../../lib/db';

const handler = async (any, res) => {
    try {
        const results = await sqlQuery(`
            SELECT * FROM pages
            ORDER BY PostTime`
        );

        return res.json(results);
    } catch (e) {
        res.status(500).json({ message: e.message});
    }
}

export default handler;