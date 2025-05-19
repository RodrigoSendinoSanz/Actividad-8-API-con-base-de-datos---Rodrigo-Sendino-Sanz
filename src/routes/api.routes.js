const router = require('express').Router();

router.use('/restaurantes', require('./api/restaurantes.routes'));

module.exports = router;