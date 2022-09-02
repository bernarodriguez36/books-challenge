function authMiddleware (req, res, netx) {
    if (!req.session.userLogged) {
        return res.redirect('./users/login');
    }
    next ();

}

module.exports = authMiddleware;