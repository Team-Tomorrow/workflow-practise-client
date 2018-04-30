'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetBooks = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.getBooksfailure)
}

const addHandlers = () => {
  $('#get-books').on('submit', onGetBooks)
}

module.exports = {
  addHandlers
}
