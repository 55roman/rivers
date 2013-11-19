var PngAnime = function(obj,numFrame){

    var W = obj.width();
    var H = obj.height();
    var step=0;
    var intervalId;

    obj.bind("click",function(){
        stopAnime();
    })

    this.start = function(){
        obj.css({"display":"block"});
        intervalId = setInterval(progAnime,100);
    }

    function stopAnime(){
        clearInterval(intervalId);
        step = 0;
        obj.css({"display":"none","background-position":"0 0"});
    }

    function progAnime(){
        console.log((step*W)+"px 0");
        obj.css({"background-position":-(step*W)+"px 0"});
        step++;
        if(step>=numFrame){
            step = 0;
        }
    }

}