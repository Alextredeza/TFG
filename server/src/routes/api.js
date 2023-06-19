const { Router } = require("express");
const cars = require("./cars");

const router = Router();

router.use("/cars", cars)

module.exports = router;