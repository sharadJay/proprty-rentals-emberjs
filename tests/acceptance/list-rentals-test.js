import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';
import Ember from 'ember';

let StubMapsService = Ember.Service.extend({
  getMapElement() {
    return document.createElement('div');
  }
});

moduleForAcceptance('Acceptance | list rentals', {
  beforeEach() {
    this.application.register('service:stubMaps', StubMapsService);
    this.application.inject('component:location-map', 'maps', 'service:stubMaps');
  }
});

test('visiting /', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(currentURL(), '/rentals', 'Index page redirects to /rentals');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("About")')
  andThen(function () {
    assert.equal(currentURL(), '/about', 'Link to about redirects to /about');
  });

});

test('should link to contact information.', function (assert) {
  visit('/');
  click('a:contains("Contact")')
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'Link to about redirects to /contact');
  });
});

test('should list available rentals.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find(".listing").length, 3, 'Three items are displayed on the page');
  });
});

test('should filter the list of rentals by city.', function (assert) {
  visit('/');
  fillIn('.list-filter input', 'Seattle');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function() {
    assert.equal(find('.listing').length, 1, 'should show 1 listing');
    assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should contain 1 listing with location Seattle');
  });
});

test('should show details for a specific rental', function (assert) {
  visit('/rentals');
  click('a:contains("Grand Old Mansion")');
  andThen(function() {
    assert.equal(currentURL(), '/rentals/grand-old-mansion', 'should navigate to show route');
    assert.equal(find('.show-listing h2').text(), "Grand Old Mansion", 'should list rental title');
    assert.equal(find('.description').length, 1, 'should list a description of the property');
  });
});
