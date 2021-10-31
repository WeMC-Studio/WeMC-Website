$(function(){
    $('#fullpage').fullpage();
});

// $(function(){
// 	if(window.matchMedia("(max-width: 767px)").matches){
//         // $(".fubuki-loading").addClass("loading-phone");
// 		document.getElementById("fubuki-loading").className="loading-phone"
//  	}else {
//         // $(".fubuki-loading").removeClass("loading-phone");
//  	}
// });

$(function() {
    var sUserAgent = navigator.userAgent;
    if (sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('iPhone') > -1 || sUserAgent.indexOf('iPad') > -1 || sUserAgent.indexOf('iPod') > -1 || sUserAgent.indexOf('Symbian') > -1) {
        document.getElementById("fubuki-loading").className="loading-phone"
    } else {}
});

$(function(){
    if($(window).height()==$(document).height()){
      $(".footer").addClass("navbar-fixed-bottom");
    }else{
      $(".footer").removeClass(" navbar-fixed-bottom");
    }
  });

$(function(){
    var bodyBgs = [];
	bodyBgs[0] = "长风破浪会有时，直挂云帆济沧海。";
	bodyBgs[1] = "人生自古谁无死？留取丹心照汗青。";
	bodyBgs[2] = "宝剑锋从磨砺出，梅花香自苦寒来。";
	bodyBgs[3] = "回首向来萧瑟处，归去，也无风雨也无晴。";
	bodyBgs[4] = "石可破也，而不可夺坚；丹可磨也，而不可夺赤。";
	bodyBgs[5] = "众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。";
	bodyBgs[6] = "http://file.wyh2004.top/background/07.jpg";
	bodyBgs[7] = "http://file.wyh2004.top/background/08.png";
	bodyBgs[8] = "http://file.wyh2004.top/background/09.jpg";
	bodyBgs[9] = "http://file.wyh2004.top/background/10.jpg";
	bodyBgs[10] = "http://file.wyh2004.top/background/11.jpg";
	bodyBgs[11] = "http://file.wyh2004.top/background/12.jpg";
	bodyBgs[12] = "http://file.wyh2004.top/background/13.png";
 
	var randomBgIndex = Math.round( Math.random() * 5 );
 
    document.getElementById("mdjl-text").innerHTML=bodyBgs[randomBgIndex];
	
});

// $(function () {
// 	window.onload=function(){
// 		var web = document.getElementById('wemc-loading');
// 		web.style.display = 'none'
// 	}
// });

document.onreadystatechange = function(){
	var web = document.getElementById('wemc-loading');
	console.log(document.readyState)
	if(document.readyState == 'complete'){
		var timer = setTimeout(function () {
			document.getElementById("wemc-loading").style="transition: all 500ms ease-out; opacity: 0; z-index: -1;"
			// web.style.display = 'none'
		},1000);
	}
	if(document.readyState == 'loading'){
		var timer = setTimeout(function () {
			document.getElementById("wemc-loading").style="transition: all 500ms ease-out; opacity: 0; z-index: -1;"
			// web.style.display = 'none'
		},1000);
		// setTimeout("loading_done()",1000);
	}
}

// function loading_done() {
// 	var web = document.getElementById('wemc-loading');
// 	web.style.display = 'none'
// }