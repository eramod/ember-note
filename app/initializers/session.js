import Ember from 'ember';

export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  let session = Ember.Object.extend();
  // Using the register method results in a single instance of the
  //  session object being created and shared across the app.
  application.register('session:main', session);
  // inject parameters:
  //  1. type factory we want to inject into
  //  2. the property name within that type that will make the object available
  //  3. the name we registered the object under previously
  application.inject('adapter', 'session', 'session:main');
  application.inject('route', 'session', 'session:main');
}

export default {
  name: 'session',
  initialize
};
