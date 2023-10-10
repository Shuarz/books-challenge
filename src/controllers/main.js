const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op

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
    // Implement look for details in the database

    db.Book.findByPk(req.params.id, {
      include: [{ association: 'authors' }]
    })
      .then((book) => {
    res.render('bookDetail', { book });
    })
  .catch((error) => console.log(error));;
  },

  bookSearch: (req, res) => {
    res.render('search', { books: [] });
  },
  bookSearchResult: (req, res) => {
    // Implement search by title

    let {title} = req.body
    db.Book.findAll({
      where: {title: {[Op.like]: '%' + title + '%'}},
      include: [{ association: 'authors' }]
    })
      .then((books) => {

      res.render('search', { books });
    })
      .catch((error) => console.log(error));
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

    db.Author.findByPk(req.params.id, {
      include: [{ association: 'books' }]
    })
    .then((author) => {
    res.render('authorBooks', {author});
    })
    .catch((error) => console.log(error));

  },
  register: (req, res) => {
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
    res.render('home');
  },
  edit: (req, res) => {
    // Implement edit book
    res.render('editBook', {id: req.params.id})
  },
  processEdit: (req, res) => {
    // Implement edit book
    res.render('home');
  }
};

module.exports = mainController;
