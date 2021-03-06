// Generated by CoffeeScript 1.6.3
var Main,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Main = (function() {
  var container, maxCount, objs, renderer, sprs, stage;

  maxCount = 5;

  container = null;

  renderer = null;

  stage = null;

  objs = [];

  sprs = [];

  function Main() {
    this.animate = __bind(this.animate, this);
    this.addOneSprite = __bind(this.addOneSprite, this);
    this.addOneObj = __bind(this.addOneObj, this);
    this.init = __bind(this.init, this);
    console.log("construct Main");
  }

  Main.prototype.init = function() {
    var dobj;
    stage = new PIXI.Stage(0xffff88);
    renderer = new PIXI.CanvasRenderer(PConfig.stageW, PConfig.stageH);
    dobj = document.getElementById("pixitest").appendChild(renderer.view);
    container = new PIXI.DisplayObjectContainer();
    stage.addChild(container);
    this.addOneObj();
    this.addOneSprite();
    renderer.render(stage);
    requestAnimFrame(this.animate);
    return null;
  };

  Main.prototype.addOneObj = function() {
    var o, p;
    o = new PIXI.Graphics();
    o.beginFill(Math.random() * 255 * 255 * 255);
    o.drawCircle(0, 0, 10);
    objs.push(o);
    p = new ParticleBase(o);
    return container.addChild(o);
  };

  Main.prototype.addOneSprite = function() {
    var spr, texture;
    texture = new PIXI.Texture.fromImage("img/z00.jpg");
    spr = new PIXI.Sprite(texture);
    spr.pivot.x = 200;
    spr.pivot.y = 300;
    sprs.push(spr);
    return container.addChild(spr);
  };

  Main.prototype.animate = function() {
    var spr,
      _this = this;
    objs[0].position.x += 2;
    spr = sprs[0];
    spr.rotation += 0.1;
    renderer.render(stage);
    setTimeout((function() {
      return requestAnimFrame(_this.animate);
    }), 20);
    return null;
  };

  return Main;

})();

/*
//@ sourceMappingURL=pixistudy.map
*/
