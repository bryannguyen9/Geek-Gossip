const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
const apiRoutes = require('./api');
const postRoutes = require('./postRoute');
const moment = require('moment');

// Handler for the home page that always renders the homepage template
router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
  

    // Serialize data so the template can read it
    const posts = postData.map((post) => {
      return {
        ...post.get({ plain: true }),
        date_created: moment(post.date_created).format('MMMM Do, YYYY')}
      });

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      dashboard_link: '/homepage',
      logout_link: '/logout',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Handler for the login page
router.get('/login', (req, res) => {
  // Render the login template
  res.render('login');
});

router.use('/api', apiRoutes);
router.use('/post', postRoutes);

module.exports = router;
