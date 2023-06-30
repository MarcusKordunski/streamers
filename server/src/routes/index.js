const { Router } = require("express");
const streamers = require("./streamers.js");

module.exports = Router()
  .use("/streamers", streamers)
