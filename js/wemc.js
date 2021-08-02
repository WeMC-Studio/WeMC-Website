$(function(){
    $('#fullpage').fullpage();
});

$(function(){
    if($(window).height()==$(document).height()){
      $(".footer").addClass("navbar-fixed-bottom");
    }
    else{
      $(".footer").removeClass(" navbar-fixed-bottom");
    }
  });