const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secret');
const authRepository = require('../repository/authRepository');

module.exports = {
    login: async (email, password) => {
        if (!email || !password) {
            const error = new Error("Email e senha são obrigatórios.");
            error.status = 400;
            throw error;
        }

        const user = await authRepository.findByEmail(email);
        if (!user) {
            const error = new Error("Email ou senha incorretos.");
            error.status = 401;
            throw error;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            const error = new Error("Email ou senha incorretos.");
            error.status = 401;
            throw error;
        }

        const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1d' });
        return token;
    }
};