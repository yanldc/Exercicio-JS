const { validationResult, matchedData } = require('express-validator');
const userService = require('../service/userService');

module.exports = {
    getUsers: async (req, res) => {
        const users = await userService.getAllUsers();
        return res.json({ users });
    },

    postUser: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.mapped() });
        }

        const data = matchedData(req);

        try {
            const newUser = await userService.createUser(data);
            return res.status(201).json({ user: newUser });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    editUser: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.mapped() });
        }

        const data = matchedData(req);
        const userId = req.params.id; 

        try {
            await userService.editUser(userId, data); 
            return res.status(200).json({ success: true });
        } catch (err) {
            return res.status(400).json({ error: err.message });
    }
    },
};
