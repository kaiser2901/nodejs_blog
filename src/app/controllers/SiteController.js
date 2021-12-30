
class SiteController {

    // [GET] /index
    index(req, res) {
        res.render('/');
    }

    // [GET] /search
    search(req, res) {
        res.render('/search');
    }

}
module.exports = new SiteController;