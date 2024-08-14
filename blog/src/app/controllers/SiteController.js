class SiteController {
  //GET /home
  index(req, res) {
    res.render('home');
  }
  //GET /home/:slug
  show(req, res) {
    res.send('search');
  }
}

module.exports = new SiteController();
