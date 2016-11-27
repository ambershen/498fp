/**
 * Created by qzhang72 on 11/26/16.
 */

var House = require('../models/house');

module.exports = function(router) {
    var houseRoute = router.route('/houses/:id');
    houseRoute.get(function(req, res) {
        var id = req.params.id;
        House.findOne({'_id': id }, function(err, house) {
            if (err || house === null)
                return res.status(404).send({'message': 'Task not found.', 'data': []});
            else
                return res.status(200).send({'message': "OK", 'data': house});
        });
    });
    return router;
}