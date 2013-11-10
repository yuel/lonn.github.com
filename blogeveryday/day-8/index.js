$(document).ready(function() {
   var y = 0;
   var timer = null;
   var running = false;

   $('form').on('submit', function(event) {

      event.preventDefault();

      var text = $('textarea').val();
      if (text.replace(/^\s+|\s+$/g, '') == '') {
         text = 'You should probably enter some text next time.'
      }

      $('body').toggleClass('bgc_blk');
      $('#footer').toggleClass('dspl_none');
      $('#main').toggleClass('dspl_none');
      $('#teleprompt_screen').toggleClass('dspl_none');
      $('#teleprompt_screen').html(text);

      running = true;
      scrollText(y);

      $('#submit').attr("disabled", true);
      $('#resume').attr("disabled", true);
   })

   $('#pause').on('click', function() {

      // clearTimeout(timer);
      running = false;
      $('#resume').attr("disabled", false);

   })

   $('#resume').on('click', function() {

      y = parseInt($('#teleprompt_screen').css('top'));
      running = true;
      scrollText(y);
      $('#resume').attr("disabled", true);
      
   })

   $('#back').on('click', function() {

      clearTimeout(timer);
      y = 0;
      $('#teleprompt_screen').css('top', 0);
      $('body').toggleClass('bgc_blk');
      $('#footer').toggleClass('dspl_none');
      $('#main').toggleClass('dspl_none');
      $('#teleprompt_screen').toggleClass('dspl_none');

      $('#submit').attr("disabled", false);
   })

   $('#reset').on('click', function() {

      clearTimeout(timer);
      running = true;
      scrollText(0);
      $('#resume').attr("disabled", true);
   })

   function scrollText(y) {

      timer = setTimeout(function() {
         if(running) {
            var newY = y;
            var height = $('#teleprompt_screen').height();
   
            if (newY > -1 * height - 150) {
               newY -= 1;
               $('#teleprompt_screen').css('top', newY);
               scrollText(newY);
            }
         }
      }, 30);     
   };

})
