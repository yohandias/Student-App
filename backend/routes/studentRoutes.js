const express = require("express");
const router = express.Router();
const { getStudent, addUser } = require("../controllers/studentController");

router.route("/").get(getStudent).post(addUser);
router.route("/:id");

module.exports = router;
