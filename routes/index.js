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

router.get('/learning-devops', function(req, res){
  res.render('post-learning-devops', {
    title: 'Learning DevOps, Unfortunately',
    articleDescription: 'Accepting my fate and building robust software.',
    articleDate: 'Oct. 26, 2019'
  });
});

router.get('/cyclist-safety', function(req, res){
  res.render('post-cyclist-safety', {
    title: 'Mapping Cyclist Safety in New York City',
    articleDescription: 'Is there a relationship between bike path access and cyclist injuries?',
    articleDate: 'Sept. 11, 2019'
  });
});

router.get('/year-one', function(req, res){
  res.render('post-year-one', {
    title: 'Year One in Review',
    articleDescription: 'A reflection on my first year (and change) in the real world.',
    articleDate: 'Aug. 4, 2019'
  });
});

router.get('/date-mapdeck', function(req, res){
  res.render('post-date-mapdeck', {
    title: 'A Date with Mapdeck',
    articleDescription: 'Deck.gl is cool, Deck.gl in R is cooler.',
    articleDate: 'Jun. 16, 2019'
  });
});

router.get('/mta-doom-gloom', function(req, res){
  res.render('post-mta-doom-gloom', {
    title: 'MTA Doom and Gloom',
    articleDescription: 'Is the NYC subway system as dire as we say it is?',
    articleDate: 'Apr. 14, 2019'
  });
});

router.get('/shiny-is-cool', function(req, res){
  res.render('post-shiny-is-cool', {
    title: 'Shiny is Cool as Hell',
    articleDescription: 'A surprisingly intuitive tool for data democratization.',
    articleDate: 'Apr. 2, 2019'
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
