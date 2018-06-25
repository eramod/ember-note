import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-note', 'Integration | Component | edit note', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{edit-note}}`);
  assert.equal(this.$().text().trim(), 'Save\n  Close');
});

test('it saves', function(assert) {
  // This sets up a mock object to act in the role of a note model
  // We then pass it into the edit note component and if the save action works,
  //  the message 'saved the note' will be printed to the screen.
  this.set('note', {
    save: function() {
      assert.ok(true,'saved the note');
    }
  });
  this.render(hbs`{{edit-note note=note}}`);
  this.$().find('#save').click();
});

test('it closes', function(assert) {
  this.set('close', function() {
    assert.ok(true,'closed the window');
  })
  this.render(hbs`{{edit-note close=(action close)}}`);
  this.$().find('#close').click();
});