describe('omdb service', function () {
    var movieData = { "Search": [{ "Title": "The Lord of the Rings: The Fellowship of the Ring", "Year": "2001", "Rated": "PG-13", "Released": "19 Dec 2001", "Runtime": "178 min", "Genre": "Adventure, Drama, Fantasy", "Director": "Peter Jackson", "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)", "Actors": "Alan Howard, Noel Appleby, Sean Astin, Sala Baker", "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.", "Language": "English, Sindarin", "Country": "New Zealand, USA", "Awards": "Won 4 Oscars. Another 111 wins & 124 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNmFmZDdkODMtNzUyMy00NzhhLWFjZmEtMGMzYjNhMDA1NTBkXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.8/10" }, { "Source": "Rotten Tomatoes", "Value": "91%" }, { "Source": "Metacritic", "Value": "92/100" }], "Metascore": "92", "imdbRating": "8.8", "imdbVotes": "1,311,058", "imdbID": "tt0120737", "Type": "movie", "DVD": "06 Aug 2002", "BoxOffice": "$314,000,000.00", "Production": "New Line Cinema", "Website": "http://www.lordoftherings.net/film/trilogy/thefellowship.html", "Response": "True" }] };
    var movieDataById = { "Title": "The Lord of the Rings: The Fellowship of the Ring", "Year": "2001", "Rated": "PG-13", "Released": "19 Dec 2001", "Runtime": "178 min", "Genre": "Adventure, Drama, Fantasy", "Director": "Peter Jackson", "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)", "Actors": "Alan Howard, Noel Appleby, Sean Astin, Sala Baker", "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.", "Language": "English, Sindarin", "Country": "New Zealand, USA", "Awards": "Won 4 Oscars. Another 111 wins & 124 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNmFmZDdkODMtNzUyMy00NzhhLWFjZmEtMGMzYjNhMDA1NTBkXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.8/10" }, { "Source": "Rotten Tomatoes", "Value": "91%" }, { "Source": "Metacritic", "Value": "92/100" }], "Metascore": "92", "imdbRating": "8.8", "imdbVotes": "1,311,058", "imdbID": "tt0120737", "Type": "movie", "DVD": "06 Aug 2002", "BoxOffice": "$314,000,000.00", "Production": "New Line Cinema", "Website": "http://www.lordoftherings.net/film/trilogy/thefellowship.html", "Response": "True" };
    var omdbApi = {};
    var $httpBackend;

    beforeEach(module('omdb'));
    beforeEach(inject(function (_omdbApi_, _$httpBackend_) {
        omdbApi = _omdbApi_;
        $httpBackend = _$httpBackend_;
    }));

    it('should return search movie data', function () {
        console.log('should return search movie data');
        // console.log(angular.mock.dump(movieData));
        var response;

        var expectedUrl = 'http://www.omdbapi.com/?v=1&s=lord%20of%20the%20rings';
        // var expectedUrl = function(url) {
        //     return url.indexOf('http://www.omdbapi.com') !== -1;
        // }

        $httpBackend.when('GET', expectedUrl)
            .respond(200, movieData);

        omdbApi.search('lord of the rings')
            .then(function (data) {
                response = data;
            })

        $httpBackend.flush();

        expect(response).toEqual(movieData);
    });

    it('should handle error', function () {
        console.log('should handle error');
        // console.log(angular.mock.dump(movieData));
        var response;

        $httpBackend.expect('GET', 'http://www.omdbapi.com/?v=1&i=tt0120737')
            .respond(500);

        omdbApi.find('tt0120737')
            .then(function (data) {
                response = data;
            })
            .catch(function() {
                response = 'Error!'
            });

        $httpBackend.flush();

        expect(response).toEqual('Error!');
    });

    it('should return movie data by id', function () {
        console.log('should return movie data by id');
        // console.log(angular.mock.dump(movieDataById));
        var response;

        $httpBackend.expect('GET', 'http://www.omdbapi.com/?v=1&i=tt0120737')
            .respond(200, movieDataById);

        omdbApi.find('tt0120737')
            .then(function (data) {
                response = data;
            });

        $httpBackend.flush();

        expect(response).toEqual(movieDataById);
    });
});