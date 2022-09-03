const express = require('express');
const usersController = require('../../controllers/usersController');
const fileReading = require('../../middlewares/fileReading');
const fileWritting = require('../../middlewares/fileWritting');
const validateBulkUpdateBody = require('../../middlewares/validateBulkUpdateBody');
const validateId = require('../../middlewares/validateId');
const validatePostBody = require('../../middlewares/validatePostBody');
const router = express.Router();

router.route('/all').get(fileReading,usersController.getAllUsers)

router.route('/random').get(fileReading,usersController.getRandomUser)

router.route('/save').post(validatePostBody,fileReading,usersController.saveUser,fileWritting)

router.route('/update/:id').patch(validateId,fileReading,usersController.updateSingleUser,fileWritting)

router.route('/bulk-update').patch(validateBulkUpdateBody,fileReading,usersController.updateMultipleUser,fileWritting)

router.route('/delete/:id').delete(validateId,fileReading,usersController.deleteUser,fileWritting)


module.exports = router;
