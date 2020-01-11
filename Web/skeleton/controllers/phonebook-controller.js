const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    // TODO: load index page
    res.render('index')
    
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
    console.log('add phonebook')
  }
}