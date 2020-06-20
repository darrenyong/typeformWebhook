const express = require("express");
const router = express.Router();

const { google } = require("googleapis");
const sheets = google.sheets("v4");
const sheetUtil = require('../utils/getSheetData')

router.get('/', (req, res) => {
  res.json({ msg: "This is Typeform" });
})

router.post('/webhook', (req, res) => {
  const answers = req.body.form_response.answers;
  const data = sheetUtil.getSheetData(answers);

  console.log(data);
  
  return res.status(200);
})

module.exports = router;