const express = require("express");
const config = require("config");
const routes = require("./routes/index.js");
const cors = require('cors');

const PORT = config.get("port");

express()
  .use(express.json())
  .use(cors())
  .use("/api", routes)
  .use("/", express.static("./public"))
  .listen(PORT, () => console.log(`Server started at :${PORT}`));
