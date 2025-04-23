const Car = require('../model/car');

module.exports = {
    findAllCars: async () => {
        return await Car.find().populate('userId', 'name');
    },

    updateCarById: async (id, updates) => {
    return await Car.findByIdAndUpdate(id, { $set: updates }, { new: true });
    },

    createCar: async (carData) => {
        const newCar = new Car(carData);
        return await newCar.save();
    },

    deleteCarById: async (id) => {
    return await Car.findByIdAndDelete(id);
    },
};
