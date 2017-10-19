var path = require('path');
var router = require('express').Router();

router.use('/login', require('./login'));

router.use('/', function(req, res) {
    res.json({
        status: true,
        message: 'api / ready!'
    })
});

module.exports = router;
