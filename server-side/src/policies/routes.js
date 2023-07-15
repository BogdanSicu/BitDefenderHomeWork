const { Router } = require('express');
const controller = require("./controller");

const router = Router();

router.get("/get-policies", controller.getPolicies);
router.get("/get-policy-by-id/:id", controller.getPolicyById);
router.post("/add-policy", controller.addPolicy);
router.delete("/delete-policy-by-id/:id", controller.deletePolicyById);

module.exports = router;