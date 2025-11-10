const jwtUtils = require('../utils/jwtUtils');

const users = [];

exports.register = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    const user = { username, password }; // In real app, hash the password
    users.push(user);

    const token = jwtUtils.generateToken(username);
    res.status(201).json({ message: 'User registered successfully', token });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = users.find(user => user.username === username && user.password === password); // In real app, compare hashed passwords
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwtUtils.generateToken(username);
    res.json({ message: 'Login successful', token });
};