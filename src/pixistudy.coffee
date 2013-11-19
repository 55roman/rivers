class Main

  maxCount = 5;
  container = null;
  renderer = null;
  stage = null;
  objs = [];
  sprs = [];

  constructor: ()->
    console.log("construct Main");

  init: ()=>
    stage = new PIXI.Stage(0xffff88);
    renderer = new PIXI.CanvasRenderer(PConfig.stageW,PConfig.stageH);

    dobj = document.getElementById("pixitest").appendChild(renderer.view);

    container = new PIXI.DisplayObjectContainer();
    stage.addChild(container);

    @addOneObj();
    @addOneSprite();

    renderer.render(stage);
    requestAnimFrame(@animate);

    return null

  addOneObj: ()=>
    o = new PIXI.Graphics();
    o.beginFill(Math.random()*255*255*255);
    o.drawCircle(0,0,10);
    objs.push(o);
    p = new ParticleBase(o);
    container.addChild(o);

  addOneSprite: ()=>
    texture = new PIXI.Texture.fromImage("img/z00.jpg");
    spr = new PIXI.Sprite(texture);
    spr.pivot.x = 100;
    spr.pivot.y = 200;
    sprs.push(spr);

    container.addChild(spr);

  animate: ()=>
    objs[0].position.x += 2;
    spr = sprs[0];
    spr.rotation += 0.2;
    renderer.render(stage);
    setTimeout (=> requestAnimFrame(@animate)),20
    return null;


