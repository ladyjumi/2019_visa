function topSerach(){
	$('.topMenu .btnSerach').each(function(){
		$(this).click(function(){
			$('body').addClass('hidden');
			$(this).closest('.header')
			.find('.searchTop').show()
			.find('input[type="text"]').focus();
		})
		$('.searchTop').find('.btnClose').click(function(){
			$('body').removeClass('hidden');
			$(this).closest('.searchTop').hide();
		})
	})	
}

function inputCheckDesign(){
	$('.inputCheckWrap').each(function(){
		$(this).find('input[type="checkbox"]').on('change',function(){
			if ($(this).prop('checked')) {
				$(this).parents('.inputCheckWrap').addClass('active')
			} else {
				$(this).parents('.inputCheckWrap').removeClass('active')
			}
		})
	})
}

function inputRadioDesign(){
	$('.inputRadioWrap').each(function(){
		$(this).find('input[type="radio"]').on('change',function(){
			$(this).parents('.inputRadioWrap').addClass('active');
			$(this).parents('.inputRadioWrap').siblings().removeClass('active')
		})
	})
}

function changeInputDesign(){
	var $designWrap = $('.inputCheckWrap, .inputRadioWrap');
	$designWrap.each(function(){
		if ($(this).find('input').prop('checked')) {
			$(this).addClass('active')
		} else {
			$(this).removeClass('active')
		}
	})
	
}


function openPop(){
	$('.popWrap').fadeIn(100);
	$('body').addClass('hidden');
}

function closePop(){
	$('.popWrap').fadeOut(200);
	$('body').removeClass('hidden');
	return false;
}

function topButton(){
	$(".backTop").each(function(){
		$(".backTop").hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('.backTop').fadeIn();
			} else {
				$('.backTop').fadeOut();
			}
		});				
		$('.backTop').click(function () {
			$('body,html').animate({scrollTop: 0}, 200);
			return false;
		});	
	})	
}

$(window).scroll(function(){
	topButtonWeb();
});

function topButtonWeb(){
	$('.topButtonArea').each(function(){
		var BodyHeight = $('body, html').height();	
		var tableNum = $('.tableArea').offset();
		var tableHeight = $('.tableArea').height();
		var tableBottomNum = tableNum.top + tableHeight;
		var Top = $(window).scrollTop();	
		console.log(BodyHeight);
		if ((tableBottomNum - BodyHeight) < Top )
		{
			$('.topButtonArea').removeClass('fix');
		} else if ((tableBottomNum - BodyHeight) > Top )
		{
			$('.topButtonArea').addClass('fix');
		}
	})
}


// 메뉴 아코디언
function gnbmenuM(){
	$('.gnbArea').each(function(){
		var $gnb = $(this).find('.gnb');
		$gnb.find('span').click(function(){
			if ($(this).closest('li').hasClass('active')) {
				$(this).closest('li').removeClass('active').find('.gnbSub').slideUp(200);
			} else {
				$(this).next('.gnbSub').slideDown(200);
				$(this).parent('li').addClass('active').siblings('li').removeClass('active').find('.gnbSub').slideUp(200);
			}
		})
	})
}

// 모바일 메뉴 열기
function gnbOpenM(){
	$('.headerWrap').find('.gnbBtn').each(function(){
		$(this).click(function(){
			$(this).closest('.inner')
			.next('.gnbWrap').fadeIn(50).addClass('on')
			.animate({left: '0'}, 300);
			$('body').addClass('hidden');			
		})
	})
}

// 모바일 메뉴 닫기
function gnbCloseM(){
	$('.headerWrap').find('.gnbClose').each(function(){
		$(this).click(function(){
			$(this).closest('.gnbWrap')
			.animate({left: '-100%'}, 300)
			.fadeOut(50)
			.removeClass('on');
			$('body').removeClass('hidden');			
		})
	})
}

//로딩바 show
function lodingLoad(){
	$('body').css('overflow','hidden');
	$('.preLoading').show();
}
//로딩바 hide
function lodingClose(){
	$('body').removeAttr('style');
	$('.preLoading').hide();
}

$(function(){	

	topSerach();




	topButtonWeb();
	topButton();
	inputCheckDesign();	
	inputRadioDesign();
	changeInputDesign();
});