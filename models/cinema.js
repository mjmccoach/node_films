const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function() {
  return this.films.map((film) => {
  return film.title; 
  })
}

Cinema.prototype.getFilmByTitle = function(title) {
  return this.films.find((film) => {
    return film.title === title;
  })
}

Cinema.prototype.getFilmsByGenre = function(genre) {

  return this.films.filter((film) => {
    return film.genre === genre;
  })
}

Cinema.prototype.getFilmsByYear = function(year) {
  return this.films.filter((film) => {
    return film.year === year;
  })
}

Cinema.prototype.filterByLength = function(length) {
  return this.films.every((film) => {
    return film.length >= length;
  })
}

module.exports = Cinema;
