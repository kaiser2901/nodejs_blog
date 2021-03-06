const Course = require('../models/Course');

class SiteController {
    // [GET] /index
    index(req, res) {
        Course.find({}, function (err, courses) {
            // docs.forEach
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'ERROR!'});
            }
        })
    };

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
