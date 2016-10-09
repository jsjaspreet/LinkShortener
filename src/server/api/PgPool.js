const pg = require('pg');

var config = {
  user: 'postgres',
  database: 'postgres',
  password: 'mysecretpassword',
  host: '0.0.0.0',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config)

export default pool
