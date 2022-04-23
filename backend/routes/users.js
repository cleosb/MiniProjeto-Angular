var express = require('express');
var router = express.Router();
var cors = require('cors')

var users = []

router.use(cors())

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.post('/cadastrar', function(req, res){
  let user = (req.body)
  users.push(user)
  res.send({message: 'usuario cadastrado com sucesso', ok: true})
})

router.post('/login', function(req, res){
  let login = (req.body)
  let c_user = users.find(user => user.email == login.email)
  if(c_user && c_user.senha == login.senha){
    return res.send({email: c_user.email, ok: true})
  }
  res.send({ok: false})
})

module.exports = router;
