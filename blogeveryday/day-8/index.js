$(document).ready(function() {
   var y = 0;
   var timer = null;
   var time_flag = null;

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

      scrollText(y);
      var time_flag = 1;

      function scrollText(y) {

         // $('#btn1').on('click', function() {
         //    clearTimeout(timer);
         // })
         // var time_flag = 1;

         timer = setTimeout(function() {
            var newY = y;
            var height = $('#teleprompt_screen').height();

            if (newY > -1 * height - 150) {
               newY -= 1;
               $('#teleprompt_screen').css('top', newY);
               scrollText(newY);
            }
         }, 30);     

      };

      $('#btn1').on('click', function() {
         if(time_flag) {
            time_flag = 0;
            clearTimeout(timer);
         };
         // clearTimeout(timer);
      })

      $('#btn2').on('click', function() {
         if(!time_flag) {
            time_flag = 1;
            y = parseInt($('#teleprompt_screen').css('top'));
            scrollText(y);
         }
      })

      

   })

   $('#btn3').on('click', function() {
      // if(time_flag) {
      //    time_flag = 0;
      //    clearTimeout(timer);
      // }
      clearTimeout(timer);
      y = 0;
      $('#teleprompt_screen').css('top', 0);
      $('body').toggleClass('bgc_blk');
      $('#footer').toggleClass('dspl_none');
      $('#main').toggleClass('dspl_none');
      $('#teleprompt_screen').toggleClass('dspl_none');
   })

})
