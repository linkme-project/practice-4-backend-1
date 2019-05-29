var express = require('express');
var router = express.Router();

let users = [
  { name: 'lkh', age: '29', id: 0 },
  { name: 'ptk', age: '23', id: 1 },
  { name: 'bks', age: '29', id: 2 },
  { name: 'pjh', age: '29', id: 3 },
  { name: 'lhs', age: '29', id: 4 }
]

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    res.status(200).json(users[parseInt(req.params.id)]);
});

router.get('/', function(req, res, next) {
    res.status(200).json(users);
});

module.exports = router;
