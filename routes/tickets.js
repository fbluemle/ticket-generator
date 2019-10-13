var express = require('express');
var router = express.Router();

/* GET tickets. */
router.get('/', function(req, res, next) {
  const r = JSON.stringify(req.query);
  res.render('tickets', { type: req.query.type });
});

module.exports = router;
