var user = require('../../Models/UserModel');


exports.login = function(req, res) {
    var code = req.body.code;
    if (code) {
        user.checkLogin(code, function(found) {
            if (found) {
                res.json(found);
            } else {
                res.status(401).json({error_message:"invalid invitation code"});
            }
        });
    } else {
        res.status(401).json({error_message:"invalid invitation code"});
    }
};
