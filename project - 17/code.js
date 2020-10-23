var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["deab6fbd-a5f4-4d08-a856-2fcce2e2d533","c2339e30-071e-4aa2-b605-5ca2804b5b9b"],"propsByKey":{"deab6fbd-a5f4-4d08-a856-2fcce2e2d533":{"name":"paddle.png_1","sourceUrl":"assets/v3/animations/9HOVke4xTw1Y9LqhIstkxKAl-vT-IRhxDa7xTrHW9xk/deab6fbd-a5f4-4d08-a856-2fcce2e2d533.png","frameSize":{"x":13,"y":63},"frameCount":1,"looping":true,"frameDelay":4,"version":"xRTQ.Qav71zwRzpD5udQLvZyOGUcn8_.","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":63},"rootRelativePath":"assets/v3/animations/9HOVke4xTw1Y9LqhIstkxKAl-vT-IRhxDa7xTrHW9xk/deab6fbd-a5f4-4d08-a856-2fcce2e2d533.png"},"c2339e30-071e-4aa2-b605-5ca2804b5b9b":{"name":"lol.png_3","sourceUrl":null,"frameSize":{"x":25,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"BbEsQwxXxzHpRhP8XSTkKZihQ7QbtEop","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":30},"rootRelativePath":"assets/c2339e30-071e-4aa2-b605-5ca2804b5b9b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var paddle=createSprite(350,200,10,20);
paddle.setAnimation("paddle.png_1");
paddle.scale=1.3;

var ball=createSprite(20,200,10,10);
ball.setAnimation("lol.png_3");
  ball.velocityX=9;
  ball.velocityY=9;

function draw() {
  
  background("cyan");
  createEdgeSprites();
  
  ball.bounceOff(leftEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);
  
  paddle.bounce(bottomEdge);
  paddle.bounceOff(topEdge);
  
  if(keyDown(UP_ARROW)){
    
    paddle.y=paddle.y-20;
    
  }
  
  if(keyDown(DOWN_ARROW)){
    
    paddle.y=paddle.y+20;
    
  }


drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
