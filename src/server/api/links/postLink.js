import pool from '../PgPool'

export function postLink(link) {
  const token = (Math.random()
                     .toString(36) + '00000000000000000').slice(2, 8)
  const query = `insert into links values('${link}', '${token}', 0)`
  return new Promise(function(resolve, reject) {
    pool.connect(function(err, client, done) {
      if (err) {
        console.error('error fetching client from pool', err);
        reject(false)
      }
      client.query(query, function(queryErr, result) {
        done();
        if (queryErr) {
          console.error('error running query', queryErr);
          reject(false)
        }
        resolve(result)
      });
    });

    pool.on('error', function(err) {
      console.error('idle client error', err.message, err.stack)
      reject(false)
    })
  })
}