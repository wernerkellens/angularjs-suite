describe('PhoneListController', function() {
    beforeEach(module('phonecatApp'));

    it('should create a `phones` model with 3 phones', inject(function($controller) {
    it('should create a `phones` model with 3 phones', inject(function($componentController) {
      var ctrl = $componentController('phoneList');

      expect(ctrl.phones.length).toBe(3);
    }));
    }));
});