import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('notebook', {user: params.user_id});
  },
  actions: {
    addNotebook: function() {
      let notebook = this.store.createRecord('notebook', {
        title: this.controller.get('title'),
        user: this.session.get('user')
      });
      notebook.save().then(() => {
        this.logger.log('save successful');
        this.controller.set('title', null);
        this.refresh();
      }, function() {
        this.logger.log('save failed');
      });
    }
  }
});