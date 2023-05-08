const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute.js');
const dashboardRoutes = require('./dashboardRoute.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
