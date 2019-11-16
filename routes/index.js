var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

router.get('/scrollytest', function(req, res){
  res.render('post-scrollytest', {
    title: 'Scrollytest',
    articleDescription: 'It\'s not doing the sticky thing.',
    articleDate: 'Nov. 6, 2019'
  });
});

router.get('/deckgl', function(req, res){
  res.render('post-deckgl', {
    title: 'Deck.gl',
    articleDate: 'Nov. 5, 2019'
  });
});

router.get('/new-blog', function(req, res){
  res.render('post-new-blog', {
    title: 'New Year, New (First) Blog',
    articleDescription: 'Trying my best.',
    articleDate: 'Jan. 24, 2019'
  });
});

module.exports = router;
