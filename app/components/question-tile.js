import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerShow: false,
  actions: {
    answerShow: function(){
      this.set('isAnswerShow', true);
    },
    answerHide: function(){
      this.set('isAnswerShow', false);
    }
  }
});
