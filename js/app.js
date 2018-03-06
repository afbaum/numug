$( document ).ready(function() {
  $(".namelist").each(function(i, e){
    $(this).delay(i*500).animate({fontSize: '150%'},"slow");
  });
});

$(document).ready(function(){
  //Init Scroll ScrollMagic
  var controller = new ScrollMagic.Controller();

  // build a scene
  var ourScene = new ScrollMagic.Scene({
      tiggerElement: '#missiontitle'
  })
  .setClassToggle('#missiontitle', 'fade-in') // add class to missiontitle
  .addTo(controller)
});
