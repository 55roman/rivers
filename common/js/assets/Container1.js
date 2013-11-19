var Container1 = function(mainCnt,stage){

    var imgSrc = "img/stage_l1.jpg";
    var cnt = new createjs.Container();
    var bmp1 = new createjs.Bitmap(imgSrc);
    var scl2 = 960 / 640;



    cnt.addChild(bmp1);
    bmp1.regX = 320;
    bmp1.regY = 240;
    bmp1.x = 320;
    bmp1.y = 240;

    mainCnt.addChild(cnt);

    this.startZoomIn = function(mX,mY,cbFunc){

        cnt.regX = mX;
        cnt.regY = mY;
        cnt.x = mX;
        cnt.y = mY;
        createjs.Tween.get(cnt).to({scaleX:scl2,scaleY:scl2,x:320,y:240},1000,createjs.Ease.quartInOut).call(function(){
            cbFunc.apply();
        });

    }

    this.hide = function(){
        createjs.Tween.get(cnt).to({alpha:0},300).call(function(){
            cnt.alpha = 1;
            cnt.visible = false;
        })
    }

    return this;



}