const express = require("express");
const app = express();
const PORT = process.env.port || 8080;

app.get("/", (req, res) => {
  res.json({ data: "App is running on docker CONTAINER" });
});

app.listen(PORT, () => {
  res.json({ data: "Server is running" });
});
