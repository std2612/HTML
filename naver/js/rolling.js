$(function(){
    setInterval(function(){
        $('.issue').first().animate({'margin-top':'-24px'}, 300, function(){
            $(this).first().detach().appendTo('.list-issue').css('margin-top', '0');
            $(this).removeAttr('style');
        });
    }, 3000);
});