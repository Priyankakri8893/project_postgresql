const {pool} = require('../db/postgresql')

// Create a function to execute queries
const createUserTable = async () => {
    try {
        // Create the "user" table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS "user" (
                id SERIAL PRIMARY KEY,
                first_name VARCHAR(255),
                last_name VARCHAR(255),
                email VARCHAR(255)
            )
        `);
        console.log('User table created successfully');
    } catch (error) {
        console.error('Error creating user table:', error);
    }
};

// Call the function to create the table
createUserTable();

