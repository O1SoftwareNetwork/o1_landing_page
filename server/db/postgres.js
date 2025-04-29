let pg = require('pg');

const pool = new pg.Pool({
    user: 'tunc',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'O1LandingPage',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });

let dbWorks = {
    runQuery : async function (query, prms) {
        
        let result = [];
        try {
            const res = await pool.query(query, prms);
            console.log(res.rows);
            result = res.rows;
            
        } catch (err) {
            console.error(err);
            result = [];
        }

        return result;
    }

}

module.exports = dbWorks;