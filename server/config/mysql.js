// MySQL connection adapter (optional for production MySQL instance)
// To enable: set DB_TYPE=mysql in server/.env and provide MySQL credentials.

export const mysqlConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'augustine_school_db',
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};
