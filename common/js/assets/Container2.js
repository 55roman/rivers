var Container2 = function(mainCnt,stage){

    var imgSrc = "img/stage_l2.jpg";
    var cnt = new createjs.Container();
    var bmp1 = new createjs.Bitmap(imgSrc);
    var scl2 = 960 / 640;
    var scl3 = 1920 / 960;

    cnt.addChild(bmp1);
    mainCnt.addChild(cnt);
/*

    cnt.addEventListener("dblclick",function(){
        console.log("click cnt");
        cnt.alpha = 0.5;
    })

*/


    this.setPosition = function(mX,mY){
        cnt.x = 320 - (mX * scl2);
        cnt.y = 240 - (mY * scl2);
    }

    this.startDrag = function(){

        cnt.addEventListener("mousedown",mouseDownHandler);

    }
    this.stopDrag = function(){

        cnt.removeEventListener("mousedown",mouseDownHandler);

    }
    function mouseDownHandler(eventObject) {

    	var instance = eventObject.target;
    	eventObject.addEventListener("mousemove", drag);
    	eventObject.addEventListener("mouseup", mouseUpHandler);
    	instance.dispatcher = eventObject;
    	instance.offset = new createjs.Point(instance.x - eventObject.stageX, instance.y - eventObject.stageY);
    }
    function drag(eventObject) {
    	var instance = eventObject.target;
    	var offset = instance.offset;
    	instance.x = eventObject.stageX + offset.x;
    	instance.y = eventObject.stageY + offset.y;
    	stage.update();
    }
    function mouseUpHandler(eventObject) {
    	var dispatcher = eventObject.target.dispatcher;
    	dispatcher.removeEventListener("mousemove", drag);
    	dispatcher.removeEventListener("mouseup", mouseUpHandler);
    }

    this.setDoubleClick = function(cbFunc){

        cnt.addEventListener("dblclick",function(){
            startZoomIn(cbFunc);
        })
    }

    function startZoomIn(cbFunc){
        /*cnt.regX = 480;
        cnt.regY = 360;*/
        //cnt.x = 480;
        //cnt.y = 360;
        createjs.Tween.get(cnt).to({scaleX:scl3,scaleY:scl3,x:-640,y:-480},1000,createjs.Ease.quartInOut).call(function(){
            cbFunc.apply();
        });

    }
    this.hide = function(){
        createjs.Tween.get(cnt).to({alpha:0},300).call(function(){
            cnt.alpha = 1;
            cnt.visible = false;
        })
    }
/*    function mouseDownHandler(){
        console.log("down");
        cnt.addEventListener("mousemove",mouseMoveHandler);
    }
    function mouseMoveHandler(){
        console.log("a")
        console.log(stage.mouseX);
    }*/


    return this;

}