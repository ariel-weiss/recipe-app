const router = require('express').Router();
const User = require('../model/user');
//const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/google/signin', async (req, res) => {
    const { name, email, token } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            await User.create({ email, password: "-", name });
        }
        res.status(200).json({ name, email, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

router.post('/signin', async (req, res) => {
    
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: 'Wrong email or password' });
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid || password === "-") return res.status(404).json({ message: 'Wrong email or password' });

        const token = jwt.sign({ id: existingUser._id, email: existingUser.email }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
        res.status(200).json({
            name: existingUser.name,
            email: existingUser.email,
            token: token
        });
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
     
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser || password === "-") return res.status(404).json({ message: 'User already exists' });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const new_user = await User.create({ email, password: hashedPassword, name });
        const token = jwt.sign({ id: result._id, email: new_user.email }, process.env.TOKEN_SECRET, { expiresIn: "1h" });

        res.status(200).json({
            name: new_user.name,
            email: new_user.email,
            token: token
        });
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});

module.exports = router;