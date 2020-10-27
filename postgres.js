const Client = require('pg').Client
const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/c2c',
})
module.exports = client;
