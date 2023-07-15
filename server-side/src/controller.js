const pool = require('../db');
const queries = require("./queries")

const getPolicies = (req, res) => {
    pool.query(queries.getPoliciesWithoutId, (error, results) => {
        if(error) throw error;

        res.status(200).json(results.rows);
    })
}

const getPolicyById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPolicyById, [id], (error, results) => {
        if(error) throw error;

        if(results.rows.length < 1) {
            res.status(404).json("Policy not found");
        } else {
            res.status(200).json(results.rows);
        }
    })
}

const addPolicy = (req, res) => {
    const { nume, module_active, editable } = req.body;

    pool.query(queries.addNewPolicy, [nume, module_active, editable], (error, results) => {
        if(error) throw error;

        res.status(201).json("New policy created");
    })
}

module.exports = {
    getPolicies,
    getPolicyById,
    addPolicy,
};