import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    editTodo: function editTodo() {
      this.model.set('isEditing', true);
    },
    acceptChanges: function acceptChanges() {
      this.model.set('isEditing', false);

      if (Ember.isEmpty(this.model.get('title'))) {
        this.send('removeTodo');
      } else {
        this.get('model').save();
      }

    },
    removeTodo: function removeTodo() {
      let todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  },
  isCompleted: function isCompleted(key, value) {
    let model = this.get('model');
    console.log(key, value, 'hello');
    if (value === undefined) {
      return model.get('isCompleted');
    } else {
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});
