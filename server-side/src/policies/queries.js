const getPolicies = "SELECT * FROM politici ORDER BY id";
const getPolicyById = "SELECT nume, chosen_action, antivirus_module, firewall_module, update_module FROM politici WHERE id = $1 "
const addNewPolicy = "INSERT INTO politici (nume, chosen_action, antivirus_module, firewall_module, update_module) VALUES ($1, $2, $3, $4, $5);"
const deletePolicy = "DELETE FROM politici WHERE id = $1"
const patchPolicy = "UPDATE politici SET chosen_action = $2, nume = $3, antivirus_module = $4, firewall_module = $5, update_module = $6  WHERE id = $1"

module.exports = {
    getPolicies,
    getPolicyById,
    addNewPolicy,
    deletePolicy,
    patchPolicy,
}