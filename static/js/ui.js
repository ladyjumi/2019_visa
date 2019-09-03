// web 검색창
function topSearch(){
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

// mobile 검색창
function topSearchM(){
	$('.btnWrap .showsearchBar').each(function(){
		$(this).click(function(){
			$(this).closest('.header')
			.find('.searchTop').show()
			.find('input[type="text"]').focus();
		})
		$('.searchTop .back').click(function(){
			$(this).closest('.searchTop').hide();
		})
	})	
}

function inputTextDel(){
	$('.inputWrap .btnDel').click(function(){
		$(this).siblings('input').val('').focus();
		return false;
	});
};

// 모바일 툴팁
function tooltipM(){
	$('.tipIcon').click(function(){
		$('.tooltip').removeClass('on').find('.tipTxt').hide();
		$(this).closest('.tooltip').addClass('on');
		$(this).next('.tipTxt').fadeIn(50);
	})
	$('.tipTxt .closeTip').click(function(){
		$(this).closest('.tipTxt').hide().closest('.tooltip').removeClass('on');
	})
	$('body, html').mouseup(function(e){
		var container = $(".tipTxt");
		if(container.has(e.target).length === 0){
			$('.tooltip').removeClass('on').find('.tipTxt').hide();
		}
	})	
}

// 모바일 메뉴 열기
function gnbOpenM(){
	$('.header').find('.gnbBtn').each(function(){
		$(this).click(function(){
			$(this).closest('.inner')
			.next('.gnbWrap').fadeIn(50).addClass('on')
			.animate({right: '0'}, 300);
			$('body').addClass('hidden');			
		})
	})
	gnbCloseM();
}

// 모바일 메뉴 닫기
function gnbCloseM(){
	$('.header').find('.gnbClose').each(function(){
		$(this).click(function(){
			$(this).closest('.gnbWrap')
			.animate({right: '-100%'}, 300)
			.fadeOut(50)
			.removeClass('on');
			$('body').removeClass('hidden');			
		})
	})
}

function closePop(){
	$('.popWrap').each(function(){
		$(this).find('.closePop').click(function(){
			$(this).closest('.popWrap').fadeOut(120);
			$('body').removeClass('hidden');
			return false;
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

function openPopS(){
	$('.openPopS').each(function(){
		$(this).click(function(){
			$(this).next('.popS').slideDown(200);
		})
	})
	closePop();
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
		var wrapHeight = $('.wrap').height();	
		var FooterHeight = $('.footer').outerHeight();
		var gap = 30;
		var Top = $(window).scrollTop();	
		if ((wrapHeight - FooterHeight - BodyHeight) < Top )
		{$('.topButtonArea').removeClass('fix').css('bottom',FooterHeight+gap);}
		else if ((wrapHeight - FooterHeight - BodyHeight) > Top )
		{$('.topButtonArea').addClass('fix').css('bottom',gap);}
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
			$(this).parent('li').addClass('active').siblings().removeClass('active');
			$(this).closest('.tabMenu').siblings('.tabBox').eq(idx).show().siblings('.tabBox').hide();
			$(this).closest('.box').find('.tabBoxWrap').children('.tabBox').eq(idx).show().siblings('.tabBox').hide();
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
		$('.lnb .active > .subM').show().parent('li').addClass('open');
		$('.lnb li > span').click(function(){
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

function viewBoxOpen(){
	$('.viewBox').each(function(){
		$('.viewBox.open .contBox').show();
		$(this).find('.titleBox').click(function(){
			if ($(this).closest('.viewBox').hasClass('open')) {
				$(this).next('.contBox').hide().closest('.viewBox').removeClass('open');
			} else {
				$(this).next('.contBox').show().closest('.viewBox').addClass('open');	
			}
		})
	})

	$('.viewBox .closeUp').click(function(){
		$(this).closest('.contBox').hide().closest('.viewBox').removeClass('open')
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

function scrollMove(target, speed){	
	var moveTo = $(target).offset();
	$('html, body').animate({scrollTop: moveTo.top}, speed);
}


$(function(){	
	inputTextDel();
	topSearch();
	topSearchM();
	inputFileTxt();
	tabMenu();
	selectedTableLine();
	adminLNB();
	viewBoxOpen();
	visaListMenu();
	openPop();
	openPopS();
	gnbOpenM();	
	topButtonWeb();
	topButton();
	if($('.closeTip').length != 0){
		tooltipM();
	}
});