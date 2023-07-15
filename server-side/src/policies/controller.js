const pool = require('../../db');
const queries = require("./queries")

const getPolicies = (req, res) => {
    pool.query(queries.getPolicies, (error, results) => {
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

const deletePolicyById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getPolicyById, [id], (error, results) => {
        if(error) throw error;

        if(results.rows.length < 1) {
            res.status(404).json("Policy not found. Could not delete it");
        } else {

            pool.query(queries.deletePolicy, [id], (error, results) => {
                if(error) throw error;

                res.status(202).json("Policy deleted");
            })
        }
    })
}

const patchPolicy = (req, res) => {
    const id = parseInt(req.params.id);

    const { module_active } = req.body;

    pool.query(queries.getPolicyById, [id], (error, results) => {
        if(error) throw error;

        if(results.rows.length < 1) {
            res.status(404).json("Policy not found. Could not update it");
        } else {

            pool.query(queries.patchPolicy, [id, module_active], (error, results) => {
                if(error) throw error;

                res.status(202).json("Policy patched");
            })
        }
    })
}


module.exports = {
    getPolicies,
    getPolicyById,
    addPolicy,
    deletePolicyById,
    patchPolicy
};