const mongoose = require('mongoose');
const carRepository = require('../repository/carRepository');
const userRepository = require('../repository/userRepository');

module.exports = {
    getAllCars: async () => {
        return await carRepository.findAllCars();
    },

    createCar: async (data) => {
        if (!mongoose.Types.ObjectId.isValid(data.userId)) {
            throw new Error("ID de usuário inválido");
        }

        const user = await userRepository.findById(data.userId);

        const carData = {
            model: data.model,
            brand: data.brand,
            year: data.year,
            color: data.color,
            fuel: data.fuel,
            userId: data.userId,
            air: data.air,
            eletricWindow: data.eletricWindow
        };

        return await carRepository.createCar(carData);
    },

    editCar: async (id, data) => {
        const updates = {};

        if (data.model) updates.model = data.model;
        if (data.brand) updates.brand = data.brand;
        if (data.year) updates.year = data.year;
        if (data.color) updates.color = data.color;
        if (data.fuel) updates.fuel = data.fuel;
        if (data.userId) {
            if (!mongoose.Types.ObjectId.isValid(data.userId)) {
                throw new Error("ID de usuário inválido");
            }

            const user = await userRepository.findById(data.userId);

            updates.userId = data.userId;
        }
        if (data.air !== undefined) updates.air = data.air;
        if (data.eletricWindow !== undefined) updates.eletricWindow = data.eletricWindow;

        return await carRepository.updateCarById(id, updates);
    },

    deleteCar: async (id, data) => {
        return await carRepository.deleteCarById(id);
    }
};
