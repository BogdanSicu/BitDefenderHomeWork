const { Router } = require('express');
const controller = require("./controller");

const router = Router();

router.get("/getPolicies", controller.getPolicies);
router.get("/getPolicyById/:id", controller.getPolicyById);
router.post("/addPolicy", controller.addPolicy);

module.exports = router;