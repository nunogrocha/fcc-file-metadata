var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

router.post('/fileanalyse', upload.single('file'), function(req, res, next) {
  console.log(req.file)
  res.json({size:req.file.size});
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'FreeCodeCamp Challenge: File Metadata Microservice' });
});

module.exports = router;
