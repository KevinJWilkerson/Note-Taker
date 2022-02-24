const router = require("express").Router();
const { notes } = require("../../db/db.json");
const fs = require("fs");

router.get("/notes", (req, res) => {
  let data = notes;
  res.json(data);
});

module.exports = router;
