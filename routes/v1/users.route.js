const express = require('express');
const usersController = require('../../controllers/usersController');
const fileReading = require('../../middlewares/fileReading');
const router = express.Router();

router.route('/all').get(fileReading,usersController.getAllUsers)

router.route('/random').get(fileReading,usersController.getRandomUser)

router.route('/save').post(usersController.saveUser)

router.route('/update/:id').patch(usersController.updateSingleUser)

router.route('/bulk-update/:id').patch(usersController.updateMultipleUser)

router.route('/delete').delete(usersController.deleteUser)


module.exports = router;
