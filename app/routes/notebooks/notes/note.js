import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('note', params.note_id);
  },
  actions: {
    close() {
      this.transitionTo('notebooks.notes');
    },
    deleteNote(note) {
      note.destroyRecord();
      // destroyRecord is equivalent to calling deleteRecord() followed by save(),
      //  so we can write out the above in long form.
      //  note.deleteRecord(); // Removes record from the Ember store.
      //   If you just do this, the record will return when you reload the UI
      //  note.save(); // Saves that deletion to persistent storage
    }
  }
});
