import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel(){
    //super(...arguments);
    this.replaceWith("rentals")
  }
});
