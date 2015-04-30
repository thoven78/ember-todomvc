import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createTodo: function createTodo() {
      let title = this.get('newTitle');

      if (!title.trim()) {
        return null;
      }

      let todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      this.set('newTitle', '');
      todo.save();
    },
    clearCompleted: function clearCompleted() {
      let completed = this.fliterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    }
  },
  remaining: function remaining() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function inflection() {
    let remaining = this.get('remaining');
    return remaining === 1 ? 'todo' : 'todos';
  }.property('remaining'),

  hasCompleted: function hasCompleted() {
    return this.get('completed') > 0;
  }.property('completed'),

  completed: function completed() {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  allAreDone: function allAreDone(key, value) {
    if (value === undefined) {
      return !!this.get('length') && this.isEvery('isCompleted');
    } else {
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;
    }
  }.property('@each.isCompleted')
});
