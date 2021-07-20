var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6a07db27-56b9-421d-948f-0bfe134822c1","65f6dd13-dc8e-4cfa-a494-16e9ce03343e","663030e9-be1c-4a4f-9905-653f4d70bb6a"],"propsByKey":{"6a07db27-56b9-421d-948f-0bfe134822c1":{"name":"kid_6_1","categories":["people"],"frameCount":1,"frameSize":{"x":170,"y":310},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:24:52 UTC","pngLastModified":"2021-01-05 19:25:42 UTC","version":"9YMncO3KU8m9HFE1DJp2deVYZ9wKGhXc","sourceUrl":"assets/api/v1/animation-library/gamelab/9YMncO3KU8m9HFE1DJp2deVYZ9wKGhXc/category_people/kid_6.png","sourceSize":{"x":170,"y":310},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/9YMncO3KU8m9HFE1DJp2deVYZ9wKGhXc/category_people/kid_6.png"},"65f6dd13-dc8e-4cfa-a494-16e9ce03343e":{"name":"diamond_1","categories":["icons"],"frameCount":1,"frameSize":{"x":391,"y":358},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:20:43 UTC","pngLastModified":"2021-01-05 19:20:33 UTC","version":"RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS","sourceUrl":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png","sourceSize":{"x":391,"y":358},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png"},"663030e9-be1c-4a4f-9905-653f4d70bb6a":{"name":"city_1","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:39:13 UTC","pngLastModified":"2021-01-05 18:39:28 UTC","version":"OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF","sourceUrl":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png"}}};
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

var thief = createSprite(10,390);
thief.setAnimation("kid_6_1");
thief.scale=0.1;
var laser1 = createSprite(3,350,740,5);
laser1.shapeColor="blue";
laser1.velocityY=-2;
var laser2 = createSprite(392,50,740,5);
laser2.shapeColor="gold";
laser2.velocityY=2;
var diamond=createSprite(380,25);
diamond.setAnimation("diamond_1");
diamond.scale=0.1;
createEdgeSprites();
function draw() {
  background("pink")
  stroke("red");
  fill("silver");
  drawSprites();
 if (keyWentDown("RIGHT_ARROW")) {
    thief.velocityX=2;
    thief.velocityY=0;
  }
  if (keyWentDown("LEFT_ARROW")) {
     thief.velocityX=-2;
     thief.velocityY=0;
   }
  if (keyWentDown("UP_ARROW")) {
      thief.velocityX=0;
      thief.velocityY=-2;
  }
  if (keyWentDown("DOWN_ARROW")) {
      thief.velocityX=0;
      thief.velocityY=2;
  }

  if (laser1.isTouching(thief)||laser2.isTouching(thief)) {
    stroke( "green");
    fill("black");
    textSize(24);
    text("Thief is caught",120,200);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    thief.setVelocity(0,0);
  
  }
  
  drawSprites();
  laser1.bounceOff(topEdge);
  laser1.bounceOff(bottomEdge);
  laser2.bounceOff(topEdge);
  laser2.bounceOff(bottomEdge);
  thief.bounceOff(edges);

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
