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

module.exports = Cinema;
