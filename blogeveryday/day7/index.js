$(document).ready(function() {
    // var words = getWordsArray();
    var words = ['apple',
                 'banana',
                 'bike',
                 'cherry',
                 'doodle',
                 'elephant']

    var word = getWord();

    // console.log($('.word_container').text());
    

    function getWord() {
        var newWord = words[Math.floor(Math.random() * 
                            words.length)]

        return newWord.toUpperCase();
    }

    function getWordsArray() {
        var array;

        $.ajax({
            type: 'GET',
            url: './words.html',
            async: false,
            success: function(data) {
                array = data.split("\n");
            }
        })

        return array;
    }

    function showHint(str) {

        if(str.length > 0) {
    
            var hint = '';

            for(var i = 0; i < words.length; i++) {
                if(str.toUpperCase()==words[i].toUpperCase().substr(0, str.length)) {

                    if(hint == '') {
                        hint = words[i];
                    }
                    else {
                        hint = hint + ', ' + words[i];
                    }
                };
            };

            $('.word_container').text(hint);
        }
        else {
            $('.word_container').text('Here\'s your suggestion');
        }

        if(hint == '') {
            $('.word_container').text('No suggestion');
        };
    }

    $('#txt1').on('keyup', function() {
        var str = $("#txt1").val();
        showHint(str);
        console.log(str);
    })

    $('#txt1').focus();
    
    // $('#txt1').on('keyup', showHint(str));
})
