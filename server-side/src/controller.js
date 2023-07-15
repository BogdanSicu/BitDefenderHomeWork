const pool = require('../db');

const getPolicies = (req, res) => {
    pool.query("SELECT * FROM politici", (error, results) => {
        if(error) throw error;

        res.status(200).json(results.rows);
    })
}

module.exports = {
    getPolicies,
};