const extractToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (authHeader && authHeader.startsWith('Bearer')) {
        const token = authHeader.split(' ')[1];
        console.log(token)
        req.token = token;
        next();
    } else {
        res.sendStatus(401); // Unauthorized
    }
};

// Sample route that requires a valid token
app.get('/protected-route', extractToken, (req, res) => {
    // Verify the token
    jwt.verify(req.token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            res.status(403).json({ message: 'Invalid token' });
        } else {
            // Token is valid, access the decoded payload
            res.json({ message: 'Token is valid', user: decoded });
        }
    });
});
