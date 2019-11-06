
$(document).ready(function(){

  $(".footer-links").hide();

    $(".my-social").click(function(){
      $(".footer-links").slideToggle("slow");
      $(".arrow.up").toggleClass("down");
    });

  });