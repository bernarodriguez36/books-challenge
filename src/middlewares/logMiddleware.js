function logMiddleware (req, res, next) {
    res.locals.isLogged = false;

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
    }
    
    next();
    }
    
    module.exports = logMiddleware;