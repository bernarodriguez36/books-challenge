const bcryptjs = require('bcryptjs');
const db = require('../database/models');

const mainController = {
  home: (req, res) => {
    db.Book.findAll({
      include: [{ association: 'authors' }]
    })
      .then((books) => {
        res.render('home', { books });
      })
      .catch((error) => console.log(error));
  },
  bookDetail: (req, res) => {
    const id = req.params.id
    db.Book.findByPk(id)
    .then(books => res.render("bookDetail", {books}))
    // Implement look for details in the database
  },
  bookSearch: (req, res) => {
    res.render('search', { books: [] });
  },
  bookSearchResult: (req, res) => {
    // Implement search by title
    res.render('search');
  },
  deleteBook: (req, res) => {
    // Implement delete book
    res.render('home');
  },
  authors: (req, res) => {
    db.Author.findAll()
      .then((authors) => {
        res.render('authors', { authors });
      })
      .catch((error) => console.log(error));
  },
  authorBooks: (req, res) => {
    // Implement books by author
    res.render('authorBooks');
  },
  register: (req, res) => {
    res.cookie('Test', {maxAge: 1000 * 30});
    res.render('register');
  },
  processRegister: (req, res) => {
    db.User.create({
      Name: req.body.name,
      Email: req.body.email,
      Country: req.body.country,
      Pass: bcryptjs.hashSync(req.body.password, 10),
      CategoryId: req.body.category
    })
      .then(() => {
        res.redirect('/');
      })
      .catch((error) => console.log(error));
  },
  login: (req, res) => {

    // Implement login process
    res.render('login');
  },
  processLogin: (req, res) => {
    // Implement login process
    let userToLog = User.findByField("email", req.body.email)
   if (userToLog) { 
    let passwordCorrect = bcryptjs.compareSync(req.body.password, userToLog.password);
if (passwordCorrect) {
  delete userToLog.password;
  req.session.userLogged = userToLog;
return res.redirect('/')
}
return res.render('users/login', {
  errors: {
email: {
msg: 'Credenciales incorrectas'
   }
  }
});
   }
   
return res.render('users/login', {
    errors: {
email: {
  msg: 'Email no registrado'
}
    } })
    /* res.render('home'); */
  },
  edit: (req, res) => {
    Id = req.params.id;
    db.Books.update({
        title: req.body.title,
        cover: req.body.cover,
        description: req.body.description
    }, {
        where: { id: productId }
    }) 
        .then(() => {
            return res.redirect("/productos/productsList");
        })
        .catch(error => res.send(error))  
    // Implement edit book
    res.render('editBook', {id: req.params.id})
  },
  processEdit: (req, res) => {
    // Implement edit book
    res.render('home');
  },

  logout: (req, res) => {
    req.session.destroy();
    return res.redirect('/');
  }
};

module.exports = mainController;
