$( document ).ready(function() {
  $(".namelist").each(function(i, e){
    $(this).delay(i*500).animate({fontSize: '150%'},"slow");
  });
});
