function topSerach(){
	$('.topMenu .showsearchBar').each(function(){
		$(this).click(function(){
			$('body').addClass('hidden');
			$(this).closest('.header')
			.find('.searchTop').fadeIn(150)
			.find('input[type="text"]').focus();
		})
		$('.searchTop .dimmed').click(function(){
			$('body').removeClass('hidden');
			$(this).closest('.searchTop').fadeOut(100);
		})
	})	
}

function openPop(){
	$('.openPop').click(function(){
		$('body').addClass('hidden');
		var href = $(this).attr('href');
		$(href).fadeIn(100);		
		return false;	
	});
	closePop();
}

function closePop(){
	$('.popWrap').each(function(){
		$(this).find('.closePop').click(function(){
			$(this).closest('.popWrap').fadeOut(150);
			$('body').removeClass('hidden');
			return false;
		})
	})
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
		var tableNum = $('.contents').offset();
		var tableHeight = $('.contents').height();
		var tableBottomNum = tableNum.top + tableHeight + 36;
		var Top = $(window).scrollTop();	
		if ((tableBottomNum - BodyHeight) < Top )
		{
			$('.topButtonArea').removeClass('fix');
		} else if ((tableBottomNum - BodyHeight) > Top )
		{
			$('.topButtonArea').addClass('fix');
		}
	})
}

function inputFileTxt(){
	$('.inpFileWrap').each(function(){
		$('input[type="file"]').on('change',function(){
			var $fileName = $(this).val();
			$(this).parents('label').siblings('input').val($fileName);
		})
	})
}

// 탭메뉴
function tabMenu(){
	$('.tabMenu').each(function(){
		$(this).find('button').click(function(){
			var idx = $(this).parents('li').index();
			$(this).parents('li').addClass('active').siblings().removeClass('active');
			$(this).closest('.tabMenu').siblings('.tabBox').eq(idx).show().siblings('.tabBox').hide();
		});
	})
}

function selectedTableLine(){
	$('.table .inpCell .inpD').each(function(){
		$(this).find('input:checked')
		.parents('tr').addClass('selected')
		.siblings('tr').removeClass('selected');
		$(this).find('input[type="radio"]').on('change',function(){
			if ($(this).prop('checked')) {
				$(this).parents('tr').addClass('selected')
				.siblings('tr').removeClass('selected');
			}
		})
		$(this).find('input[type="checkbox"]').on('change',function(){
			if ($(this).prop('checked')) {
				$(this).parents('tr').addClass('selected');
			}else{
				$(this).parents('tr').removeClass('selected');
			}
		})
	})
}

function adminLNB(){
	$('.lnb').each(function(){
		$('.subM > .active').parents('li').addClass('active');
		$('.lnb > .active .subM').show().closest('li').addClass('open');
		$('.lnb > li > span').click(function(){
			if ($(this).closest('li').hasClass('open')) {
				$(this).siblings('.subM').slideUp(200)
				.closest('li').removeClass('open');
			} else {
				$(this).siblings('.subM').slideDown(200)
				.closest('li').addClass('open');
			}
		})
	})
}

function regBoxOpen(){
	$('.registBox .openBtn').click(function(){
		$(this).toggleClass('closed')
		.closest('.titleBox')
		.next('.contBox').slideToggle(200);
	})
}

function visaListMenu(){
	$('.visaList.total .inBox').click(function(){
		if ($(this).closest('li').hasClass('open')) {
			$(this).next('.visaType').slideUp(200)
			$(this).closest('li').removeClass('open')
		} else {
			$(this).next('.visaType').slideDown(200);
			$(this).closest('li').addClass('open')
		}
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
	inputFileTxt();
	tabMenu();
	selectedTableLine();
	adminLNB();
	regBoxOpen();
	visaListMenu();
	openPop();


	topButtonWeb();
	topButton();
});