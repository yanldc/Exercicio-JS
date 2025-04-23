const { validationResult, matchedData } = require('express-validator');
const carService = require('../service/carService');

module.exports = {
    getCars: async (req, res) => {
        const cars = await carService.getAllCars();
        return res.json({ cars });
    },

    postCar: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.mapped() });
        }

        const data = matchedData(req);

        try {
            const newCar = await carService.createCar(data);
            return res.status(201).json({ car: newCar });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    editCar: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.mapped() });
        }

        const data = matchedData(req);
        const carId = req.params.id; 

        try {
            await carService.editCar(carId, data); 
            return res.status(200).json({ success: true });
        } catch (err) {
            return res.status(400).json({ error: err.message });
    }
    },

    deleteCar: async (req, res) => {
        const carId = req.params.id; 

        try {
            await carService.deleteCar(carId); 
            return res.status(200).json({ success: true });
        } catch (err) {
            return res.status(400).json({ error: err.message });
    }
    },
    
};
