var express = require('express');
var router = express.Router();

/* GET tickets. */
router.get('/', function(req, res, next) {
  const r = JSON.stringify(req.query);
  res.render('tickets', { type: req.query.type });
});

/* POST generate tickets. */
router.post('/generate', function(req, res, next) {
  const r = JSON.stringify(req.body);
  res.send('posted: ' + r);
});

module.exports = router;
