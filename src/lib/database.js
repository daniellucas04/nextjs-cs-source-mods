import mysql from "mysql2/promise"

export default async function query({ query, values = [] }) {
  // local database
  const dbConnection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'source_mods',
  });
  try {
    const [results] = await dbConnection.execute(query, values);
    dbConnection.end();
    return results
  }
  catch (error) {
    throw Error(error.message);
  }
}