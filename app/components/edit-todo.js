import Ember from 'ember';

export default Ember.TextField.extend({
  didInsertElement: function didInsertElement() {
    this.$().focus();
  }
});
