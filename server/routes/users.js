const router = require('express').Router();
const User = require('../model/user');
//const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: 'Wrong email or password' });
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) return res.status(404).json({ message: 'Wrong email or password' });

        const token = jwt.sign({ id: existingUser._id }, 'testSecret', { expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token: token });
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(404).json({ message: 'User already exists' });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const result = await User.create({ email, password: hashedPassword, name });
        const token = jwt.sign({ id: result._id }, 'testSecret', { expiresIn: "1h" });

        res.status(200).json({ result, token });
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});

module.exports = router;