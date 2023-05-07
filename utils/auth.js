const withAuth = (req, res, next) => {
  // Exclude the home page and login routes
  if (req.originalUrl === '/' || req.originalUrl === '/login') {
    return next();
  }

  // Check if the user is authenticated
  if (!req.session.logged_in) {
    return res.redirect('/login');
  }

  next();
};

module.exports = withAuth;
