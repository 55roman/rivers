var Container3 = function(mainCnt,stage){

    var imgSrc = "img/z04.jpg";
    var cnt = new createjs.Container();
    var bmp1 = new createjs.Bitmap(imgSrc);
    var scl2 = 960 / 640;
    var scl3 = 1920 / 960;
    var hit1 = new createjs.Shape();
    hit1.graphics.beginFill("#ffffff").drawCircle(0,0,60);
    hit1.alpha = 0.01;
    hit1.x = 230;
    hit1.y = 370;

    hit1.addEventListener("click",showAnime);

    cnt.addChild(bmp1);
    cnt.addChild(hit1);
    mainCnt.addChild(cnt);

    function showAnime(){
        showAnimeSample();
    }
/*

    cnt.addEventListener("dblclick",function(){
        console.log("click cnt");
        cnt.alpha = 0.5;
    })

*/


    return this;

}