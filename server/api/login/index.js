var router = require('express').Router();
var User = require('../../schemas/User');

router.use('/', function(req, res) {
    var status = false;
    var message = '';

    User.findOne({name: req.query.name, password: req.query.password}, function (err, user) {
        if(user) {
            status = true;
            message = "User is exist";
        } else {
            status = false;
            message = "User is'nt exist";
        }

        return res.json({
            status: status,
            message: message,
            user: user
        })
    });
});

module.exports = router;
