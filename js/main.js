$(document).ready(function() {
  $('#scroll-down').click(function(){
    height = $('.jumbrotron-background').height() - 100;
    $("html, body").animate({ scrollTop: height }, 600);
  });
});
