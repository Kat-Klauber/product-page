$(document).ready(function() {
  $('input').focus(function(){
    placeholder = $(this).attr('placeholder');
    if(placeholder != undefined){
      $(this).parent().prepend('<span class="input-placeholder">'+placeholder+'</span>');
    }
  });
  $('input').blur(function(){
    $(this).parent().find('.input-placeholder').remove();
  });
});