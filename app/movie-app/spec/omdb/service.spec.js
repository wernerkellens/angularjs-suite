describe('omdb service', function () {
    var movieData = { "Title": "The Lord of the Rings: The Fellowship of the Ring", "Year": "2001", "Rated": "PG-13", "Released": "19 Dec 2001", "Runtime": "178 min", "Genre": "Adventure, Drama, Fantasy", "Director": "Peter Jackson", "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)", "Actors": "Alan Howard, Noel Appleby, Sean Astin, Sala Baker", "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.", "Language": "English, Sindarin", "Country": "New Zealand, USA", "Awards": "Won 4 Oscars. Another 111 wins & 124 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNmFmZDdkODMtNzUyMy00NzhhLWFjZmEtMGMzYjNhMDA1NTBkXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.8/10" }, { "Source": "Rotten Tomatoes", "Value": "91%" }, { "Source": "Metacritic", "Value": "92/100" }], "Metascore": "92", "imdbRating": "8.8", "imdbVotes": "1,311,058", "imdbID": "tt0120737", "Type": "movie", "DVD": "06 Aug 2002", "BoxOffice": "$314,000,000.00", "Production": "New Line Cinema", "Website": "http://www.lordoftherings.net/film/trilogy/thefellowship.html", "Response": "True" };

    it('should retun search movie data', function () {
        var omdbApi = {}

        // angular.mock.module({
        //     'omdbApi': {
        //         search: function (query) {
        //             return movieData;
        //         }
        //     }
        // });

        angular.mock.module(function($provide){
            $provide.factory('omdbApi', function(){
                return {
                    search: function(query){
                        return movieData;
                    }
                }
            })
        });

        angular.mock.inject(function(_omdbApi_) {
            omdbApi = _omdbApi_
        });

        expect(omdbApi.search('lord of the rings')).toEqual(movieData);
    });
});