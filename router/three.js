const express = require("express");
const router = express.Router()
const threeData = require('../mock/three.json')

router.get('/data', (req, res) => {
    res.send({ data: threeData })
})

module.exports = router