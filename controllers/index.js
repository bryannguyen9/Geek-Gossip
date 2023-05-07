const router = require('express').Router();
const withAuth = require('../utils/auth')
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/post', postRoutes);
router.get('/homepage', withAuth, (req, res) => {
  res.render('homepage');
});

module.exports = router;
