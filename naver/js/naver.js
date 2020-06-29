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
            $('.type-empty').css('display', 'none');
            $('.NM-FAVORITE-LIST').css('display', '');
            $('.NM-FAVORITE-EDIT-LY .service-data').removeClass('chk-check');
            $('.NM-FAVORITE-EDIT-LY').css('display', 'none');
            $('.type-empty').html(
            '<li class="nav-item"><div class="empty-box type-point"></div></li><li class="nav-item"><div class="empty-box"></div></li><li class="nav-item"><div class="empty-box"></div></li><li class="nav-item"><div class="empty-box"></div></li><li class="nav-item"><div class="empty-box"></div></li>'
            );
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
        $('.NM-FAVORITE-LIST').css('display', 'none');
        $('.type-empty').css('display', '');
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
    
    var cnt=1;
    $('.list-service label').click(function(){
        if($('.type-empty').find('.empty-box').length==0){
            alert('최대5개까지 설정할 수 있습니다.');
            event.preventDefault();
        }else{
            $(this).parents('.service-data').toggleClass('chk-check');
            var val=$(this).children('input').val();
            var text=$(this).text();
            var html='<span data-id="'+val+'">'+text+'</span>';
            $('.type-point').parent().html(html);
            $('.type-empty').find('.empty-box').first().addClass('type-point');
            event.preventDefault();
        }
    });

    $('.btn-reset').click(function(){
        alert('초기설정으로 돌아갑니다.');
        $('.btn-more').click();
    });

    $('.btn-save').click(function(){
        if($('.type-empty').find('.empty-box').length==5){
            alert('선택된 메뉴가 없습니다. 초기설정으로 돌아갑니다.');
            $('.btn-more').click();
        }else{
            $('.btn-more').click();
        }
    });

    $('.btn-set2').click(function(){
        $('.btn-set2').removeClass('set-on');
        $(this).addClass('set-on');
    });

    $('.pm-btn-prev-l').click(function(){
        if($(this).parent().find('.thumb-area').not('.display-none').prev().prev().length!=0){
            $(this).parent().find('.thumb-area').not('.display-none').prev().removeClass('display-none');
            $(this).parent().find('.thumb-area').not('.display-none').last().addClass('display-none');
            $('.pm-btn-next-l').removeClass('display-none');
        }
        if(!$(this).parent().find('.thumb-area').first().hasClass('display-none')){
            $(this).addClass('display-none');
        }else{
            $(this).removeClass('display-none');
        }
    });

    $('.pm-btn-next-l').click(function(){
        if($(this).parent().find('.thumb-area').not('.display-none').next().length!=0){
            $(this).parent().find('.thumb-area').not('.display-none').next().removeClass('display-none');
            $(this).parent().find('.thumb-area').not('.display-none').first().addClass('display-none');
            $('.pm-btn-prev-l').removeClass('display-none');
        }
        if(!$(this).parent().find('.thumb-area').last().hasClass('display-none')){
            $(this).addClass('display-none');
        }else{
            $(this).removeClass('display-none');
        }
    });

    $('.btn-next').click(function(){
        $('.list-card>.card').first().animate({'margin-left':'-351px'}, 1000, function(){
            $(this).first().detach().appendTo('.list-card').removeAttr('style');
        });
    });

    $('.btn-prev').click(function(){
        $('.list-card>.card').last().detach().prependTo('.list-card').css('margin-left', '-351px');
        $('.list-card>.card').first().animate()({'margin-left':'0'}, 1000);
    });

    $('.main-category .pm-btn-next').click(function(){
        if($('.id-movie').hasClass('selected')||$('.id-wedding').hasClass('selected')||$('.id-farm').hasClass('selected')){
            $('.eg-flick-panel').animate({'left':'-=750px'}, 300);
            $('.main-category').find('.selected').parents('.eg-flick-panel').next().children().children().first().children().addClass('selected');
            $('.main-category').find('.selected').first().removeClass('selected');
        }else{
            $('.main-category').find('.selected').parent().next().children().addClass('selected');
            $('.main-category').find('.selected').first().removeClass('selected');
            if(!$('.id-enter').hasClass('selected')){
                $(this).prev().removeClass('display-none');
            }
            if($('.id-school').hasClass('selected')){
                $(this).addClass('display-none');
            }
        }
        themeBodyView();
    });

    $('.main-category .pm-btn-prev').click(function(){
        if($('.id-job').hasClass('selected')||$('.id-culture').hasClass('selected')||$('.id-show').hasClass('selected')){
            $('.eg-flick-panel').animate({'left':'+=750px'}, 300);
            $('.main-category').find('.selected').parents('.eg-flick-panel').prev().children().children().last().children().addClass('selected');
            $('.main-category').find('.selected').last().removeClass('selected');
        }else{
            $('.main-category').find('.selected').parent().prev().children().addClass('selected');
            $('.main-category').find('.selected').last().removeClass('selected');
            if($('.id-enter').hasClass('selected')){
                $(this).addClass('display-none');
            }
            if(!$('.id-school').hasClass('selected')){
                $(this).next().removeClass('display-none');
            }
        }
        themeBodyView();
    });

    $('.category-item').click(function(){
        $('.selected').removeClass('selected')
        $(this).children().addClass('selected');
        if(!$('.id-enter').hasClass('selected')){
            $('.main-category .pm-btn-next').prev().removeClass('display-none');
        }
        if($('.id-school').hasClass('selected')){
            $('.main-category .pm-btn-next').addClass('display-none');
        }
        if($('.id-enter').hasClass('selected')){
            $('.main-category .pm-btn-prev').addClass('display-none');
        }
        if(!$('.id-school').hasClass('selected')){
            $('.main-category .pm-btn-prev').next().removeClass('display-none');
        }
        themeBodyView();
    });
    themeBodyView();
    function themeBodyView(){
        var target=$('.tab.selected').attr('data-target');
        $('.theme-cont .theme-body').addClass('display-none');
        $('.theme-cont>.'+target).removeClass('display-none')
    }

    $('#tab-title').children().click(function(){
        $('#tab-title').children().children().attr('aria-selected', 'false');
        $(this).children().attr('aria-selected', 'true');
        adBodyView();
        tabRandom();
    });

    adBodyView();
    function adBodyView(){
        var target=$('.tab[aria-selected=true]').attr('data-target');
        $('.shop-wrap .shop-content').addClass('display-none');
        $('.shop-wrap .'+target).removeClass('display-none');
    }

    tabRandom();
    function tabRandom(){
        var target=$('.tab[aria-selected=true]').attr('data-target');
        var arr=[];
        $('.group-mall .link-mall').removeClass('random');
        for(; arr.length<4;){
            var r=getRandom(1, 12);
            if(arr.indexOf(r)>=0){
                continue;
            }
            arr.push(r);
            if(r<=6){
                $('.'+target+' .mall-area').eq(0).find('.link-mall').eq(r-1).addClass('random');
            }else{
                $('.'+target+' .mall-area').eq(1).find('.link-mall').eq(r-7).addClass('random');
            }
        }
    }

    function getRandom(min, max){
        return Math.floor(Math.random()*(max-min+1)+1);
    }
});