var router = require('express').Router();
var User = require('../../schemas/User');

router.use('/', function(req, res) {
    var status = false;
    var message = '';

    User.findOne({name: req.query.name, password: req.query.password}, function (err, user) {
        if(user) {
            status = false;
            message = "User is exist";

            return res.json({
                status: status,
                message: message
            })
        } else {
            var user = new User({name: req.query.name, password: req.query.password});

            user.save(function (err) {
                if (err) {
                    status = false;
                    message = err;

                    return res.json({
                        status: status,
                        message: message
                    })
                } else {
                    status = true;
                    message = "Register success!!!";

                    return res.json({
                        status: status,
                        message: message
                    })
                }
            });
        }
    });
});

module.exports = router;
