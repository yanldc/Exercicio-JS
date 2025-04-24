const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const userValidator = require('../middlewares/validator/userValidator');
const carController = require('../controller/carController')
const carValidator = require('../middlewares/validator/carValidator')
const authController = require('../controller/authController');
const authMiddleware = require('../middlewares/authRouter');
const authRouter = require('../middlewares/authRouter');

router.get('/ping', (req, res) => {
    res.json({retorno:true});
});

router.post('/users', userValidator.postUserAction, userController.postUser)
router.post('/login', authController.login);


router.use(authRouter)
router.get('/users', userController.getUsers);
router.put('/users/:id', userValidator.editUserAction, userController.editUser )

router.get('/cars', carController.getCars);
router.post('/cars', carValidator.postCarAction, carController.postCar)
router.put('/cars/:id', carValidator.editCarAction, carController.editCar )
router.delete('/cars/:id', carController.deleteCar )

module.exports = router;