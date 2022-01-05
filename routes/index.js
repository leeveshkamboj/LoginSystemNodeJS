const express = require("express");

const { homeResolver } = require("../resolvers/");
const { authentication_middleware } = require("../middlewares");

const router = express.Router();
router.get("/", authentication_middleware, homeResolver);

module.exports = router;
