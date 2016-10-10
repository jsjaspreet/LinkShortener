import pool from '../PgPool'

export const getLinkFromToken = (token) => {
  return new Promise(function(resolve, reject) {
    pool.connect(function(err, client, done) {
      if (err) {
        console.error('error fetching client from pool', err);
        reject({})
      }
      client.query(`select * from links where token='${token}'`, function(queryErr, result) {
        done()
        if (queryErr) {
          console.error('error running query', queryErr);
          reject({})
        }
        resolve(result.rows[0])
      });
    });

    pool.on('error', function(err) {
      console.error('idle client error', err.message, err.stack)
      reject({})
    })
  })
}


