import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.filter('todo', (todo) => todo.get('isCompleted'));
  },
  renderTemplate(controller) {
    this.render('todos/completed', {
      controller: controller
    });
  }
});
