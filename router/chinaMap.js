const express = require("express");
const router = express.Router()
const chinaMap = require('../mock/china.json')

router.get('/data', (req, res) => {
    res.send({ data: chinaMap })
})

module.exports = router