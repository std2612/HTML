$(function(){
    var news=newsRolling();

    $('.issue').hover(function(){
        clearInterval(news);
    }, function(){
        news=cardRolling();
    });

    function newsRolling(){
        setInterval(function(){
            $('.issue').first().animate({'margin-top':'-24px'}, 700, function(){
                $(this).first().detach().appendTo('.list-issue').removeAttr('style');
            });
        }, 3000);
    }

    var card=cardRolling();
    
    $('.card').hover(function(){
        clearInterval(card);
    }, function(){
        card=cardRolling();
    });

    function cardRolling(){
        return setInterval(function(){
            $('.card').first().animate({'margin-left':'-351px'}, 1000, function(){
                $(this).first().detach().appendTo('.list-card').removeAttr('style');
            });
        }, 3000);
    }
});