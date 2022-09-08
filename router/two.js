const express = require("express");
const router = express.Router()
const twoData = require('../mock/two.json')

router.get('/data', (req, res) => {
    res.send({ data: twoData })
})

module.exports = router