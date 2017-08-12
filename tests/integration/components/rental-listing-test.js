import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});

let rental = Ember.Object.create({
  image: 'fake.png',
  title: 'test-title',
  owner: 'test-owner',
  propertyType: 'test-type',
  city: 'test-city',
  bedrooms: 3
});

test('should display rental details', function(assert) {
  this.set('r',rental);
  this.render(hbs`{{rental-listing rental=r}}`);
  assert.equal(this.$('.listing h3').text(), 'test-title', 'Title: test-title');
  assert.equal(this.$('.listing .owner').text().trim(), 'Owner: test-owner', 'Owner: test-owner')
});

test('should toggle wide class on click', function(assert) {
  this.set('r',rental);
  this.render(hbs`{{rental-listing rental=r}}`);
  assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
  Ember.run(() => document.querySelector('.image').click());
  assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
  Ember.run(() => document.querySelector('.image').click());
  assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
});
