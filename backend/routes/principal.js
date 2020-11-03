"use strict";

const express = require("express");
const principal = express.Router();
const userCtrl = require("../controllers/users");
const auth = require("../middlewares/auth");

/**
 * Handler for '/contests' routes
 */

principal.get("/:princiapl", auth.isAuth, userCtrl.getSubmission);

module.exports = principal;
