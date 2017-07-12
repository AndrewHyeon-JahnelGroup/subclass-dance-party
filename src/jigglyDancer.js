var makeJigglyDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class="jigglyDancer"></span>');
  
  this.timeBetweenSteps = timeBetweenSteps;

  makeDancer.call(this, top, left, this.timeBetweenSteps);
  this.$node.addClass('bounce animated infinite');

  //this.$node.removeClass('dancer');
  //this.$node.addClass('jigglyDancer');
  //this.$node.addClass('bounce animated infinite');  



};

makeJigglyDancer.prototype = Object.create(makeDancer.prototype);
makeJigglyDancer.prototype.constructor = makeJigglyDancer;

makeJigglyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this); 

};


