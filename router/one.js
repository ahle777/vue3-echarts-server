const express = require("express");
const router = express.Router()
const oneData = require('../mock/one.json')

router.get('/data', (req, res) => {
    res.send({ data: oneData })
})

module.exports = router