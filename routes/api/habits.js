const express = require('express');
const router = express.Router();
const habitsCtrl = require('../../controllers/api/habits');

router.post('/', habitsCtrl.create);
router.get('/', habitsCtrl.index);


module.exports = router;