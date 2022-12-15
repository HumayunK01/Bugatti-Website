$(document).ready(function(){
    
});

$(".my-car").slick({
  autoplay: true,
    speed:1000,
  dots: true,
  customPaging : function(slider, i) {
  var thumb = $(slider.$slides[i]).data();
  return '<a>'+(i+1)+'</a>';
},
 
});