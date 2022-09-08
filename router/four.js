const express = require("express");
const router = express.Router()
const fourData = require('../mock/four.json')

router.get('/data', (req, res) => {
    res.send({ data: fourData })
})

module.exports = router