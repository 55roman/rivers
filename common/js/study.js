;(function(){

    var stage;
    var mainCnt;
    var cnt1,cnt2,cnt3;
    var currentLevel = 1;
    var bmp1;
    var bmp2;
    var bmp3;


    var limitRect;

    $(function(){

        setLimitRect();

        var imgCanvas = $("#main-stage");
        stage = new createjs.Stage(imgCanvas[0]);
        mainCnt = new createjs.Container();
        stage.addChild(mainCnt);
        stage.mouseEnabled = false;
        stage.enableMouseOver(30);

        //createjs.Touch.enable(stage);

        createBmp();
        setStageClickable(true);

        //ticker設定
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick",tick);

        function tick(){

            stage.update();

        }

        //コンテナ生成
        function createBmp(){

            cnt3 = new Container3(mainCnt,stage);
            cnt2 = new Container2(mainCnt,stage);


            cnt1 = new Container1(mainCnt,stage);


        }

        function setStageClickable(b){
            if(b){
                startClickable()
            } else {
                stopClickable();
            }
        }

        function startClickable(){

            if(isSP||isTab){
                setPinchDetect();
                //stage.addEventListener("mousedown",stageClick);
            } else {
                stage.addEventListener("dblclick",stageClick);
            }

        }

        function setPinchDetect(){
            if ("ontouchstart" in window) {
              stage.addEventListener("touchstart", touchStartHandler, false);
              stage.addEventListener("touchmove", touchMoveHandler, false);
              document.addEventListener("touchend", touchEndHandler, false);
              document.addEventListener("touchcancel", touchEndHandler, false);
            }
            /*if ("ongesturestart" in window) {
              stage.addEventListener("gesturestart", gestureStartHandler, false);
              stage.addEventListener("gesturechange", gestureChangeHandler, false);
              document.addEventListener("gestureend", gestureEndHandler, false);
            }*/
                console.log("onTouchStart");

        }
        function touchStartHandler(e){
              console.log("touchStart");
        }
        function touchMoveHandler(e){

        }
        function touchEndHandler(e){

        }

        function stopClickable(){
            stage.removeEventListener("mousedown",stageClick);
            stage.removeEventListener("dblclick",stageClick);
        }

        function stageClick(event){
            zoomIn(currentLevel);

        }

        function zoomIn(){

            var mX = stage.mouseX;
            var mY = stage.mouseY;

            if(mX<limitRect.left()){mX = limitRect.left()} else if(mX > limitRect.right()){mX = limitRect.right()};
            if(mY<limitRect.top()){mY = limitRect.top()} else if(mY > limitRect.bottom()){mY = limitRect.bottom()};
            console.log(mX + " / " + mY);

            switch(currentLevel){
                case 1:

                    setStageClickable(false);
                    cnt1.startZoomIn(mX,mY,zoomInHandler);
                    cnt2.setPosition(mX,mY);

                    break;
                case 2:

                    cnt2.startZoomIn(mX,mY,zoomInHandler);
                    break;

            }


        }

        function zoomInHandler(){
            switch(currentLevel){
                case 1:
                    cnt1.hide();
                    cnt2.startDrag();
                    cnt2.setDoubleClick(zoomInHandler);
                    currentLevel = 2;
                    break;
                case 2:
                    cnt2.hide();
                    break;
            }

            console.log("zoom Complete");
        }

        function setLimitRect(){
            var c = Math.ceil(640/3);
            var h = Math.ceil(480/3);
            limitRect = new Rectangle(c,h,c,h);

        }

    })



})();


var AnimeSample;

$(function(){
    var obj = $("#anime01");
    AnimeSample = new PngAnime(obj,12);
})

function showAnimeSample(){
    AnimeSample.start();
}
