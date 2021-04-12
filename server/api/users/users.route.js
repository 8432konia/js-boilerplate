
const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    users: [{
      id: "001",
      name: "name01",
      image: "/profile/image01.png"
    },{
      id: "002",
      name: "name02",
      image: "/profile/image02.png"
    }]
  });
});

module.exports = router;
