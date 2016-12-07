/**
 * Created by qzhang72 on 12/5/16.
 */
var User = require('../models/user');

module.exports = function(router) {
    var userRoute = router.route('/users/:id');
    userRoute.get(function(req, res) {
        var id = req.params.id;
        User.findOne({'_id': id }, function(err, user) {
            if (err || user === null)
                return res.status(404).send({'message': 'User not found.', 'data': []});
            else
                return res.status(200).send({'message': "OK", 'data': user});
        });
    });
    return router;
}