import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // This is a different way of making a computed property, where the properties it depends
  //  on are listed inside the '.property' method at the end of the function
  // This computed property adds a list of key-value pairs as HTTP request headers
  //  to each request that is issued by JSONAPIAdapter
  headers: function() {
    if ( this.get('session.user') ) {
      return {
        'username' : this.get('session.user.name'),
      };
    }
  }.property('session.user')
});
