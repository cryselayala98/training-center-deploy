"use strict";

const express = require("express");
const principal = express.Router();
const userCtrl = require("../controllers/users");
const auth = require("../middlewares/auth");

/**
 * Handler for '/contests' routes
 */

principal.get("/:principal", auth.isAuth);

module.exports = principal;
