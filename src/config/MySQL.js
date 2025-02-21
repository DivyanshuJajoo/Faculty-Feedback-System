import mysql from 'mysql2/promise';

// Create a connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: 'root',    // Your MySQL username
  password: 'Jajoo@2001', // Your MySQL password
  database: 'feedback_sql', // Your database name
  port: process.env.DB_PORT, // Default MySQL port
});

// Function to check DB connection
export const connectToDB = async () => {
  try {
    const connection = await db.getConnection(); // Ensure the connection works
    console.log('Connected to MySQL database');
    connection.release(); // Release connection back to the pool
  } catch (err) {
    console.error('Error connecting to MySQL database:', err.stack);
  }
};

// Function to get the DB pool for queries
export const getDB = () => {
  return db; // Return the pool, which can be used for queries
};
