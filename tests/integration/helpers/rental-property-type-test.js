
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rental-property-type', 'helper:rental-property-type', {
  integration: true
});

test('Standalone', function(assert) {
  this.set('propertyType', 'Condo');

  this.render(hbs`{{rental-property-type propertyType}}`);

  assert.equal(this.$().text().trim(), 'Community',"Standalone for condo");
});

test('Community', function(assert) {
  this.set('propertyType', 'anthingelse');

  this.render(hbs`{{rental-property-type propertyType}}`);

  assert.equal(this.$().text().trim(), 'Standalone',"Community for condo");
});

