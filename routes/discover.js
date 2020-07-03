const express = require('express');

const { getResults, getGovernor } = require('../controllers/discover');

//MODEL REQUIRE
const Tgovernors = require('../models/Tgovernor');
//END
const advancedResults = require('../middleware/advancedResults');
const Tgovernor = require('../models/Tgovernor');

const router = express.Router();

router.route('/').get(advancedResults(Tgovernor), getResults);

router.route('/:id').get(getGovernor);

module.exports = router;
