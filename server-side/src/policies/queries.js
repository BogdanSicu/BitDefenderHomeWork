const getPolicies = "SELECT * FROM politici";
const getPolicyById = "SELECT nume, module_active, editable FROM politici WHERE id = $1 "
const addNewPolicy = "INSERT INTO politici (nume, module_active, editable) VALUES ($1, $2, $3);"
const deletePolicy = "DELETE FROM politici WHERE id = $1"

module.exports = {
    getPolicies,
    getPolicyById,
    addNewPolicy,
    deletePolicy,
}