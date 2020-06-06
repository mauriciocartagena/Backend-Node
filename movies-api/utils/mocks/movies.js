const moviesMock = [
  {
    "_id": "5edbf353a7ac2a4982d2cbc6",
    "title": "Ticked-Off Trannies with Knives",
    "year": 2005,
    "cover": "http://dummyimage.com/156x169.png/5fa2dd/ffffff",
    "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    "duration": 299,
    "contentRating": "G",
    "source": "http://fc2.com/lacus.jsp",
    "tags": [
      "Drama|Thriller",
      "Documentary"
    ]
  }
]
function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}
class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }
  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}
module.exports = {
  moviesMock, filteredMoviesMock, MoviesServiceMock
}