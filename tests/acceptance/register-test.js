import { test } from 'qunit';
import moduleForAcceptance from 'ember-note/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | register');

test('visiting /register', function(assert) {
  visit('/register');

  fillIn('#name', 'test@pragprog.com');
  click('#register');

  andThen(function() {
    assert.equal(find('#message').text().trim(),
      'A new user with the name test@pragprog.com was added!');
    assert.equal(currentURL(), '/register');
  });
});
