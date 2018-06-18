import Ember from 'ember';
import isValidLength from 'ember-note/utils/is-valid-length';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('note', {notebook:params.notebook_id});
  },
  actions: {
    addNote: function() {
      let title = this.controller.get('title');
      if( !isValidLength(title, 0, 140) ) {
        alert('Title must be longer than 0 characters and not more than 140.');
      } else {
        this.store.findRecord('notebook',
        this.paramsFor('notebooks.notes').notebook_id).then(
        (notebook) => {
          var note = this.store.createRecord('note', {
            title: this.controller.get('title'),
            notebook: notebook
          });
          note.save().then(() => {
            this.controller.set('title', null);
            this.refresh();
          }, function() {
            alert('save failed');
          });
        });
      }
    },
    deleteNote: function(note) {
      note.deleteRecord();
      note.save();
    }
  }
});
