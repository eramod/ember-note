import DS from 'ember-data';

export default DS.Model.extend({
  notes: DS.hasMany('note'),
  user: DS.belongsTo('user'),

  title: DS.attr('string')
});
