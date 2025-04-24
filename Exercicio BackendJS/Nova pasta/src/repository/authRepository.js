const User = require('../model/user');

module.exports = {
    findByEmail: async (email) => {
        return await User.findOne({ email });
    }
};