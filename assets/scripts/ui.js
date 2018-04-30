const showBooksTemplate = require('./templates/books-listing.handlebars')

const getBooksSuccess = (data) => {
  $('#message').text('Books were displayed successfully')
  $('#message').css('background-color', 'green')
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.container-fluid').html(showBooksHtml)
}

const getBooksFailure = () => {
  $('#message').text('Failed to display books')
  $('#message').css('background-color', 'red')
}

module.exports = {
  getBooksSuccess,
  getBooksFailure
}
