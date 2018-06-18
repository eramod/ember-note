import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      // This function executes a query against our server API using the value of
      //  the name field from login.hbs as a query parameter.
      // this.store.queryRecord is async, so it returns a promise object, which
      //  will execute the code in the then function if it resolves successfully
      this.store.queryRecord('user', {
        name: this.controller.get('name')
      }).then((user) => {
        // set the user object returned by the query as the user on the
        //  application controller so the user variable used in the application
        //  template works
        this.session.set('user', user)
        this.transitionTo('notebooks', user.get('id'));
      });
    }
  }
});
