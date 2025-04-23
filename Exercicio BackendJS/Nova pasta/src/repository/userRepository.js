const User = require('../model/user');

module.exports = {
    findAllUsers: async () => {
        return await User.find();
    },

    findUserByEmail: async (email) => {
        return await User.findOne({ email });
    },

    findById: async (id) => {
        return await User.findOne({ id });
    },

    updateUserById: async (id, updates) => {
    return await User.findByIdAndUpdate(id, { $set: updates }, { new: true });
    },

    createUser: async (userData) => {
        const newUser = new User(userData);
        return await newUser.save();
    }
};
