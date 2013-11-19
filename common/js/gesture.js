;(function(){


    var W = 320;
    var H = 550;
    var stage;
    var _canvas;
    var mainCnt;
    var sqr;
    var sqr2;


    var checkPinch = false;

    $(function(){



        var imgCanvas = $("#main-stage");
        _canvas = imgCanvas[0];
        stage = new createjs.Stage(imgCanvas[0]);
        mainCnt = new createjs.Container();
        stage.addChild(mainCnt);
        sqr = new createjs.Shape();
        sqr.graphics.beginFill("#ff0000").drawRect(0,0,W,H);
        mainCnt.addChild(sqr);
        sqr2 = new createjs.Shape();
        sqr2.graphics.beginFill("#ffff00").drawRect(0,0,W-20,H-20);
        mainCnt.addChild(sqr2);
        sqr2.x = sqr2.y = 10;


        /*stage.mouseEnabled = false;*/
        /*stage.enableMouseOver(30);*/

        //createjs.Touch.enable(stage);


        //ticker設定
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick",tick);

        function tick(){

            stage.update();

        }

        if ("ontouchstart" in window) {
          _canvas.addEventListener("touchstart", touchStartHandler, false);
          _canvas.addEventListener("touchmove", touchMoveHandler, false);
          document.addEventListener("touchend", touchEndHandler, false);
          document.addEventListener("touchcancel", touchEndHandler, false);
        }
        if ("ongesturestart" in window) {
          _canvas.addEventListener("gesturestart", gestureStartHandler, false);
          _canvas.addEventListener("gesturechange", gestureChangeHandler, false);
          document.addEventListener("gestureend", gestureEndHandler, false);
        }



        //iPhone and ???
        var startPinchLenge;
        var movePinchLenge;
        var touch1,touch2;
        function touchStartHandler(e){
            console.log("touchStart");
            e.preventDefault();
            var touches = e.changedTouches;
            if(touches.length==2){
                startPinchLenge = getPointsLenge(touches[0],touches[1]);
                checkPinch = true;
            }

        }
        function touchMoveHandler(f){
            //e.preventDefault();

            if(checkPinch){
                var touches = f.changedTouches;
                movePinchLenge = getPointsLenge(touches[0],touches[1]);
                if(movePinchLenge > startPinchLenge*1.3){
                    checkPinch = false;
                    zoomInAction();
                }
                if(movePinchLenge < startPinchLenge*0.8){
                    checkPinch = false;
                    zoomOutAction();
                }
            }

        }
        function zoomInAction(){
            console.log("ZOOM IN!");
        }
        function zoomOutAction(){
            console.log("ZOOM OUT!");
        }
        function getPointsLenge(t1,t2){
            var p1 = new createjs.Point(t1.pageX,t1.pageY);
            var p2 = new createjs.Point(t2.pageX,t2.pageY);

            var l = Math.sqrt(Math.pow((p1.x-p2.x),2)+(Math.pow((p1.y-p2.y),2)));

            return l;
        }

        function touchEndHandler(e){

        }



        function gestureStartHandler(e){
            console.log("gestureStart");
        }
        function gestureChangeHandler(e){

        }
        function gestureEndHandler(e){

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

