const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const userValidator = require('../validator/userValidator');
const carController = require('../controller/carController')
const carValidator = require('../validator/carValidator')

router.get('/ping', (req, res) => {
    res.json({retorno:true});
});

router.get('/users', userController.getUsers);
router.post('/users', userValidator.postUserAction, userController.postUser)
router.put('/users/:id', userValidator.editUserAction, userController.editUser )

router.get('/cars', carController.getCars);
router.post('/cars', carValidator.postCarAction, carController.postCar)
router.put('/cars/:id', carValidator.editCarAction, carController.editCar )
router.delete('/cars/:id', carController.deleteCar )

module.exports = router;