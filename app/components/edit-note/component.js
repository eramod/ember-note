import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNote() {
      // This is a component scoped action, which can only operate on data that's
      //  in the component's scope (i.e. data passed in by the calling template)
      //  or on injeced objects
      this.get('note').save();
    },
    closeNote() {
      // The 'close' string passed to sendAction is referring to this component's
      //  property, which was set in the containing template (which is note.hbs)
      this.sendAction('close');
    }
  }
});
