
var DEBUG = false;
var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();
var isLegacy = false;
var isTab = false;
var isSP = false;
var SC_LOCK = true;
var SW =640;
var sH = 480;

var REF = document.referrer.toString().split(location.host)[1];
if(REF==undefined){
    REF = "none";
}

if (userAgent.indexOf('opera') != -1) {
} else if (userAgent.indexOf("msie") != -1) {
  if (appVersion.indexOf("msie 6.") != -1) {
      isLegacy = true;
  } else if (appVersion.indexOf("msie 7.") != -1) {
      isLegacy = true;
  } else if (appVersion.indexOf("msie 8.") != -1) {
      isLegacy = true;
  } else if (appVersion.indexOf("msie 9.") != -1) {
  } else {
  }
}

if((navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('iPad') > 0){
   isTab = true;
} else if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
   isSP = true;
}


//Default Setting ******************************************************************
$(function(){


    $(window).bind("resize",resizeHandler);
    function resizeHandler(){
        SW = Math.max($(window).innerWidth());
        SH = Math.max($(window).innerHeight());
    }

    resizeHandler();
})

