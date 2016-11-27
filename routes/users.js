/**
 * Created by qzhang72 on 11/26/16.
 */
var User = require('../models/user');

module.exports = function(router) {
    var usersRoute = router.route('/users');
    usersRoute.post(function (req, res) {
        var user = new User();
        var data = req.body;
        user.name = data.name;
        user.email = data.email;
        user.dateCreated =  new Date();
        user.houses = [];
        if(user.name === "undefined" || user.email === "undefined" || user.name === undefined || user.email === undefined) {
            return res.status(500).send({ 'message': 'invalid argument', 'data': [] });
        }
        User.findOne({'email': user.email}, function(error, person){
            if(error) {
                return res.status(500).send({ 'message': 'invalid argument', 'data': [] });
            }
            if(person == null) {
                user.save(function(err) {
                    if (err)
                        return res.status(500).send({ 'message': 'Failed', 'data': [] });
                    else
                        return res.status(201).send({ 'message': 'User successfully created!', 'data': user });
                });
            }
            else
                return res.status(500).send({ 'message': 'The email provided is already in use!', 'data': []});
        });
    });

    usersRoute.get(function(req, res) {

        var count = req.query.count === 'true';
        if(count === true) {
            User.count(where, function(err, list) {
                if (err)
                    return res.status(500).send({'message': 'Failed to retrieve tasks.', 'data': []});
                else
                    return res.status(200).send({'message': "OK", 'data': list});
            });
            return;
        }
        var where = req.query.where != undefined? JSON.parse(req.query.where): undefined;
        var sort = req.query.sort != undefined? JSON.parse(req.query.sort): undefined;
        var select =req.query.select!= undefined? JSON.parse(req.query.select):undefined;
        var skip = req.query.skip!=undefined? parseInt(req.query.skip): undefined;
        var limit = req.query.limit != undefined? parseInt(req.query.limit): undefined;
        User.find(where, select, function (err, list) {
            if (err)
                return res.status(500).send({'message': 'Failed to retrieve tasks.', 'data': []});
            else
                return res.status(200).send({'message': "OK", 'data': list});
        }).limit(limit).skip(skip).sort(sort);
    });
    return router;
}