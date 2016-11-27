/**
 * Created by qzhang72 on 11/26/16.
 */
var House = require('../models/house');

module.exports = function(router) {
    var housesRoute = router.route('/houses');
    housesRoute.post(function(req, res) {
        var house = new House();
        var data = req.body;
        for (var k in data) {
            if (data.hasOwnProperty(k)) {
                house[k] = data[k];
            }
        }
        house.dateCreated =  new Date();
        house.save(function(err, savedTask) {
            if (err)
                return res.status(500).send({ 'message': 'crashed', 'data': [] });
            else
                return res.status(201).send({ 'message': 'Task successfully created!', 'data': house });
        });
    });

    housesRoute.get(function(req, res) {
        var count = req.query.count === 'true';
        if(count === true) {
            House.count(where, function(err, list) {
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
        House.find(where, select, function (err, list) {
            if (err)
                return res.status(500).send({'message': 'Failed to retrieve tasks.', 'data': []});
            else
                return res.status(200).send({'message': "OK", 'data': list});
        }).limit(limit).skip(skip).sort(sort);
    });
    return router;
}