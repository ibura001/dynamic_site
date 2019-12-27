const express = require('express')
const router = express.Router()
const db = require('./db_create.js') 

router.get('/', function(req, res) {
    db.all('SELECT * FROM Kids', (err, rows) => res.send(rows))
})

router.post('/', (req, res) => {
    const { customer, thing, price } = req.body 
    db.run(
        `INSERT INTO Kids VALUES (NULL, '${customer}','${thing}','${price}')`
    ) 
    res.sendStatus(200) 
})
module.exports = router
