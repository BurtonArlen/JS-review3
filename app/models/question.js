import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  author: DS.attr(),
  ask: DS.attr(),
  answer: DS.attr()
});
