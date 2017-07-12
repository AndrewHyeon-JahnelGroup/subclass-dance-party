var makeJPEGDancer = function(top, left, timeBetweenSteps) {

  
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pulse animated infinite');
  this.$node = $('<span class="dancer JPEGDancer"><img src = travolta.gif></span>');
  var styleSettings = {
    'border-size' : '0px',
    'position' : 'absolute',
    'width' : '50%',
    'height' : '50%',
    'top': $("body").height() * Math.random(),
    'left': $("body").width() * Math.random(),
  };
  this.$node.animate( {'transform': 'rotate(360deg)'}, 400);
  this.$node.css(styleSettings);

};

makeJPEGDancer.prototype = Object.create(makeDancer.prototype);
makeJPEGDancer.prototype.constructor = makeJPEGDancer;

makeJPEGDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this); 

  

};


