import Ember from 'ember';
import ValidationFunctions from 'ember-note/mixins/validation-functions';

export default Ember.Route.extend(ValidationFunctions,{

  actions: {
    addNew() {
      let name = this.controller.get('name');
      if ( this.isValidEmail(name) ) {
        let user = this.store.createRecord('user', {
          name: name
        });
        user.save().then(() => {
          this.controller.set('message', 'A new user with the name ' + name + ' was added!');
          this.controller.set('name', null);
        },
        function(){
          alert('save failed');
        });
      } else {
        alert('Invalid email address.');
      }
    }
  }
});
