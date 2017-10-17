var router = require('express').Router();

router.use('/', function(req, res) {
    res.json({
        status: true,
        message: 'api /redisricting ready!'
    })
});

module.exports = router;