var express = require('express');
var router = express.Router();

var PdfGenerator = require('../services/PdfGenerator');

/* GET tickets. */
router.get('/', function (req, res, next) {
  res.render('tickets', {type: req.query.type});
});

/* POST generate tickets. */
router.post('/generate', function (req, res, next) {
  res.statusCode = 200;
  res.contentType('application/pdf');
  var tg = new PdfGenerator(
    req.body.template,
    req.body.startDate,
    req.body.days,
  );
  // res.setHeader('Content-Disposition', 'attachment; filename="' + tg.getFilename() + '"');
  tg.generate(res);
});

module.exports = router;
