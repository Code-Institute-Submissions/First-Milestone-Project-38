$(document).ready(function(){

  checkScreenWidth();
  
});

var mql = window.matchMedia('(max-width: 991px');

function checkScreenWidth() {
  if (window.matchMedia('(max-width: 991px)').matches) {

    //$(".footer-links").hide();
    
    $(".my-social").click(function(){
      $(".footer-links").slideToggle("slow");
      $(".arrow.up").toggleClass("down");
    });

  } //else {
    //$(".footer-links").show();
  //}
}

mql.addListener(checkScreenWidth);