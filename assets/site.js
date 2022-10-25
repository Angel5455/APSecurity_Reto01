$('.sendmsg').click( function(){
    $.post('/contact-msg',{
        'name'    :  $('input[name="name"]').val(),
        'email'   :  $('input[name="email"]').val(),
        'msg'     :  $('textarea[name="msg"]').val()
    },function(){
        $('input[name="name"]').val('')
        $('input[name="email"]').val('')
        $('textarea[name="msg"]').val('')
        alert('Contact Form Sent');
    });

});