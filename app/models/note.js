import DS from 'ember-data';

export default DS.Model.extend({
  notebook: DS.belongsTo('notebook'),

  title: DS.attr('string'),
  body: DS.attr('string')
});
