import Ember from 'ember';

export default Ember.Route.extend({
  model: function model() {
    return this.store.filter('todo', (todo) => todo.get('isCompleted'));
  },
  renderTemplate: function renderTemplate(controller) {
    this.render('todos/completed', {
      controller: controller
    });
  }
});
