import Ember from 'ember';

export default Ember.Route.extend({
  model: function model() {
    return this.modelFor('todos');
  }
});
