const express = require('express');
const usersController = require('../../controllers/usersController');
const fileReading = require('../../middlewares/fileReading');
const fileWritting = require('../../middlewares/fileWritting');
const router = express.Router();

router.route('/all').get(fileReading,usersController.getAllUsers)

router.route('/random').get(fileReading,usersController.getRandomUser)

router.route('/save').post(fileReading,usersController.saveUser,fileWritting)

router.route('/update/:id').patch(fileReading,usersController.updateSingleUser,fileWritting)

router.route('/bulk-update').patch(fileReading,usersController.updateMultipleUser,fileWritting)

router.route('/delete/:id').delete(fileReading,usersController.deleteUser,fileWritting)


module.exports = router;
