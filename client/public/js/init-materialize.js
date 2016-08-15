$(function(){
  $(".button-collapse").sideNav();
  $("#mobile-nav li a").on('click', function(){
    $('.button-collapse').sideNav('hide');
    console.log('click');
  });
});
