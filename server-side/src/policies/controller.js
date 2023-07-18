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
    const { nume, chosen_action, antivirus_module, firewall_module, update_module } = req.body;
    const chosen_action_list = ["delete", "move to quarantine", "ignore"]

    if(!chosen_action_list.includes(chosen_action)) {
        res.status(400).json("Chosen action doesn't exist " + chosen_action);
        return;
    } 

    pool.query(queries.addNewPolicy, [nume, chosen_action, antivirus_module, firewall_module, update_module], (error, results) => {
        if(error) throw error;

        pool.query(queries.getPolicies, (error, results) => {
            if(error) throw error;
    
            res.status(200).json(results.rows);
        })
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

    const { nume, chosen_action, antivirus_module, firewall_module, update_module } = req.body;
    
    const chosen_action_list = ["delete", "move to quarantine", "ignore"]

    if(!chosen_action_list.includes(chosen_action)) {
        res.status(400).json("Chosen action doesn't exist " + chosen_action);
        return;
    } 

    pool.query(queries.getPolicyById, [id], (error, results) => {
        if(error) throw error;

        if(results.rows.length < 1) {
            res.status(404).json("Policy not found. Could not update it");
        } else {

            pool.query(queries.patchPolicy, [id, chosen_action, nume, antivirus_module, firewall_module, update_module], (error, results) => {
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