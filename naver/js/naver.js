$(function(){
    $('html').scrollTop(0);

    $('.bn-btn-close').click(function(){
        $('.box-whale').addClass('display-none');
    });
    var str='접기';
    var str4='block';
    var str5='';
    $('.btn-more').click(function(){
        $('.box-container-menu').toggleClass('ly-open');
        $('.btn-more').text(str);
        if(str=='접기'){
            str='더보기';
        }else{
            str='접기';
        }
        $('.ly-service').css('display', str4);
        if(str4=='block'){
            str4='';
        }else{
            str4='block';
        }
        $('.NM-FAVORITE-ALL-LY').css('display', str5);
        if(str5==''){
            str5='none';
        }else{
            str5='';
        }
        $('.btn-service-all').css('display','');
        $('.btn-set').css('display','');
        $('.btn-reset').css('display','none');
        $('.btn-save').css('display','none');
        $('.NM-FAVORITE-EDIT-LY').css('display', 'none');
    });

    $('.btn-set').click(function(){
        $('.btn-service-all').css('display','none');
        $('.btn-set').css('display','none');
        $('.btn-reset').css('display','');
        $('.btn-save').css('display','');
        $('.NM-FAVORITE-ALL-LY').css('display', 'none');
        $('.NM-FAVORITE-EDIT-LY').css('display', '');
    });

    $('.btn-arw').click(function(){
        $('.btn-arw').toggleClass('fold');
    });

    var str2='block';
    $('.btn-arw').click(function(){
        $('.api-atcmp-wrap').css('display',str2);
        $('.reatcmp').css('display',str2);
        if(str2=='block'){
            str2='none';
        }else{
            str2='block';
        }
    });

    var str3='inline';
    $('.funoff').hover(function(){
        $('.atcmp-helper').css('display','inline');
    }, function(){
        $('.atcmp-helper').css('display','none');
    });

    $('.list-service label').click(function(){
        $(this).parents('.service-data').toggleClass('chk-check');
        event.preventDefault();
    });
});