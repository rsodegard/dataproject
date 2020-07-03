const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Tgovernor = require('../models/Tgovernor');

// @desc    get all results
// @route   GET /api/v1/discover
// @access  Public
exports.getResults = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc    get Governor
// @route   GET /api/v1/discover/:id
// @access  Public
exports.getGovernor = asyncHandler(async (req, res, next) => {
  const tgovernor = await Tgovernor.findById(req.params.id);

  if (!tgovernor) {
    // properly formatted id not found
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: tgovernor });
});
