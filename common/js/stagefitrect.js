
//Rectangle
function Rectangle(x,y,w,h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

    this.top = function(){
        return this.y;
    }
    this.left = function(){
        return this.x;
    }
    this.bottom = function(){
        return this.y + this.height;
    }
    this.right = function(){
        return this.x + this.width;
    }

}

/*
 StageFitRect.js
 イメージがステージ領域にフィットするためのパラメータを返す
 */

var StageFitRect = {
    W:0,
    H:0,
    stageW:0,
    stageH:0,

    init:function(w,h){

        StageFitRect.W = w;
        StageFitRect.H = h;

    },

    /* */
    getFitRect:function(imgW,imgH,fixedW,fixedH) {

        var sW = (fixedW)? fixedW : StageFitRect.getStageWidth();
        var sH = (fixedH)? fixedH : StageFitRect.getStageHeight();

        var imgWidth = imgW;
        var imgHeight = imgH;

        var viewerRatio = sH / sW;
        var imgRatio = imgHeight/imgWidth;

        var imgScale;
        if(imgRatio > 1){
            //横位置写真
            if(imgRatio>viewerRatio){
                imgScale = sW/imgWidth;
            } else {
                imgScale = sH/imgHeight;
            }

        } else {
            //横位置写真
            if(imgRatio>viewerRatio){
                imgScale = sW/imgWidth;
            } else {
                imgScale = sH/imgHeight;
            }
        }

        imgWidth *= imgScale;
        imgHeight *= imgScale;

        return new Rectangle((sW-imgWidth)/2,(sH-imgHeight)/2,imgWidth,imgHeight);

    },
    getStageWidth:function(){
        var w = $(window).innerWidth();
        //var w = $('html').innerWidth();
        StageFitRect.stageW = w;
        return w;
    },
    getStageHeight:function(){

        var h = $(window).height();
        StageFitRect.stageH = h;
        return h;

    }

}
