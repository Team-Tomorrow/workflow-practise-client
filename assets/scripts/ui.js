const showBooksTemplate = require('./templates/books-listing.handlebars')

const onGetBooksSuccess = (data) => {
  $('#message').text('Books were displayed successfully')
  $('#message').css('background-color', 'green')
  const showBooksHtml = showBooksTemplate({ notes: data.books })
  $('.container-fluid').html(showBooksHtml)
}

const onGetBooksFailure = () => {
  $('#message').text('Failed to display books')
  $('#message').css('background-color', 'red')
}

module.exports = {
  onGetBooksSuccess,
  onGetBooksFailure
}
