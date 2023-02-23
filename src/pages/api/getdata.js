import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const dbConnection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'source_mods',
  });
  res.status(200).json({ name: 'Hello' })
}