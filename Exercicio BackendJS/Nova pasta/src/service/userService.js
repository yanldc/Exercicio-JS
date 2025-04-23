const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const userRepository = require('../repository/userRepository');

module.exports = {
    getAllUsers: async () => {
        return await userRepository.findAllUsers();
    },

   createUser: async (data) => {
        const emailExists = await userRepository.findUserByEmail(data.email);
        if (emailExists) throw new Error('Email já cadastrado');

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const userData = {
            name: data.name,
            email: data.email,
            password: hashedPassword,
        };

        return await userRepository.createUser(userData);
    },

    editUser: async (id, data) => {
    const updates = {};

    if (data.name) updates.name = data.name;

     if (data.email) {
            const emailExists = await userRepository.findUserByEmail(data.email);
            if (emailExists) throw new Error('Email já existe em outra conta');
            updates.email = data.email;
        }
    if (data.password) {
        updates.password = await bcrypt.hash(data.password, 10);
    }

    return await userRepository.updateUserById(id, updates);
}

    
};
