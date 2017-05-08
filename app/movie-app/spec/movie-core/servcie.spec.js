describe('MovieCore', function () {

    var PopularMovies;
    var $httpBackend;

    beforeEach(module('movieCore'));

    beforeEach(inject(function (_PopularMovies_, _$httpBackend_) {
        PopularMovies = _PopularMovies_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    })

    it('should create popular movie', function () {
        console.log('should create popular movie');

        // '{"movieId":"tt0120737","description":"Great movie!" }'
        // var expectedData = function(data) {
        //     dump(angular.mock.dump(data));
        //     return angular.fromJson(data).movieId === 'tt0120737';
        // }
        var expectedData = '{"movieId":"tt0120737","description":"Great movie!"}';
        //var expectedData = /{"movieId":"tt0120737","description":".*" }/;

        $httpBackend.expectPOST(/./, expectedData)
            .respond(201);

        var popularMovie = new PopularMovies({
            movieId: 'tt0120737',
            description: 'Great movie!'
        });

        popularMovie.$save();

        expect($httpBackend.flush).not.toThrow();
    });

    it('should get popular movie by id', function () {
        console.log('should get popular movie by id');
        $httpBackend.expectGET('popular/tt0120737')
            .respond(200);

        PopularMovies.get({ movieId: 'tt0120737' });

        expect($httpBackend.flush).not.toThrow();
    });

    it('should update popular movie', function () {
        console.log('should update popular movie');
        $httpBackend.expectPUT('popular')
            .respond(200);

        var popularMovie = new PopularMovies({
            movieId: 'tt0120737',
            description: 'Great movie!'
        });

        popularMovie.$update();
        expect($httpBackend.flush).not.toThrow();
    });

    it('should authenticate requests', function () {
        console.log('should authenticate requests');
        //'{"authToken": "teddybear","Accept": "application/json, text/plain, */*"}'
        var headerData = function (headers) {
            return headers.authToken === 'teddybear';
        }

        var matchAny = /.*/;

        $httpBackend.whenGET(matchAny, headerData)
            .respond(200);
        $httpBackend.expectPOST(matchAny, matchAny, headerData)
             .respond(200);
        $httpBackend.expectPUT(matchAny, matchAny, headerData)
             .respond(200);
        $httpBackend.expectDELETE(matchAny, headerData)
             .respond(200);

        var popularMovie = { id: 'tt0120737', description: 'This movie is great!' };

        PopularMovies.query();
        PopularMovies.get({ id: 'tt0120737' });
        new PopularMovies(popularMovie).$save();
        new PopularMovies(popularMovie).$update();
        new PopularMovies(popularMovie).$remove();

        expect($httpBackend.flush).not.toThrow();
    });
});