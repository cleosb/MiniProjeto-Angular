var express = require('express');
var router = express.Router();
var cors = require('cors')

var tarefas = []

router.use(cors())

router.post('/criar', function(req, res){
    tarefas.push(req.body)
    res.send({ok: true})
})

router.get('/:email', function(req, res){
    let email = req.params.email
    res.send(tarefas.filter(t => t.dono == email))
})

module.exports = router;