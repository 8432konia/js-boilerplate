const router = require('express').Router();
const users = require('./users/users.route');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Api route',
  });
});

// routes registration
router.use('/users', users);

module.exports = router;