'use strict'
const config = require('./config')

const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET',
    headers: {
      contentType: 'application/json'
      // Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBooks
}
