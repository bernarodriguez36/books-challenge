const db = require('../database/models')

async function logMiddleware (req, res, next) {
    res.locals.isLogged = false;

    let emailCookie = req.cookies.userEmail;
    let userCookie = await db.User.findOne({where: {email: `${emailCookie}`}});
    
    console.log(userCookie, "usercokieeee")
    if (userCookie) {
req.session.userLogged = userCookie;
    }

    if (req.session.userLogged) {

        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    
    next();
    }
    
    module.exports = logMiddleware;