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

function tableLineCheck(){
	$('.listTable tbody .inputCheckWrap').each(function(){
		$(this).find('input:checked').parents('tr').addClass('selectedCell');
		$(this).find('input[type="checkbox"]').on('change',function(){
			if ($(this).prop('checked')) {
				$(this).parents('tr').addClass('selectedCell')
			} else {
				$(this).parents('tr').removeClass('selectedCell')
			}
		})
	})
}

function tableSelect(){
	$('.selectOption').each(function(){
		var selectedTxt= $(this).find('option:selected').text();
		$(this).find('select').parents('.optionBox').siblings('.putTxt').text(selectedTxt);
		if ($(this).find('select').hasClass('switch')) {
			$(this).find('.putTxt').
			removeClass('on').
			removeClass('off').
			addClass(selectedTxt);
		}
	})
}

// function oneSelect(){
// 	$('.oneSelect').children().click(function(){
// 		$(this).addClass('active').siblings().removeClass('active');
// 	})
// }

function calendarSet(){
	$('.datePicker').find('.inputTxt').datepicker({
		showOn: 'button',
		dateFormat: 'yy-mm-dd',
		changeMonth: true, 
		changeYear: true, 
		showButtonPanel: true, 
		nextText: '다음 달',
		prevText: '이전 달',
		currentText: '오늘 날짜', 
		closeText: '닫기', 
		dayNamesMin: ['일','월', '화', '수', '목', '금', '토'], 
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	})

	var dateFormat = 'yy-mm-dd',
	from = $(".dateFrom").on("change", function(){
		to.datepicker( "option", "minDate", getDate(this));
	}),
	to = $(".dateTo").on("change", function(){
		from.datepicker("option", "maxDate", getDate(this));
	});

	$('.datePicker').find('.dateFrom').each(function(){
		to.datepicker( "option", "minDate", getDate(this));
	})
	$('.datePicker').find('.dateTo').each(function(){
		from.datepicker( "option", "maxDate", getDate(this));
	})

	function getDate(element){
		var date;
		try {
			date = $.datepicker.parseDate(dateFormat, element.value);
		} catch( error ) {
			date = null;
		}
		return date;
	}
}

function dragDrop(){
	$('.sortTable').sortable({placeholder: "ui-sortable-placeholder"});
	// $('.sortTable').sortable({
	// 	update: function( event, ui ) {
	// 	alert('test')
	// 	}
	// });
}

function inputFileTxt(){
	$('.inputFileWrap').each(function(){
		$('input[type="file"]').on('change',function(){
			var $fileName = $(this).val();
			$(this).parents('label').siblings('.inputTxt').val($fileName);
		})
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

function textLengthLimit(){
	$('.txtLimit').each(function(){
		var $inputCount = $(this).find('.inputTxt');
		var $leftTxt = $(this).find('.left');
		var $totalTxt = $(this).find('.total');
		var maxLength = $inputCount.attr('maxlength');
		var txtLength = $inputCount.val().length;
		$totalTxt.text(maxLength);
		$inputCount.keyup(function(){
			var txtLength = $inputCount.val().length;
			if (txtLength < 0) {
				$leftTxt.text(0)
			}else{
				$leftTxt.text(txtLength)
			}	
		})
	})	
}

function hideformShow(){
	$('.showButton').each(function(){
		$(this).click(function(){
			$(this).parents('.editFormWrap, .infoForm')
				.find('.hiddenArea').show()
				.filter('.tableLine').css('display','table');
			$(this).remove();
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

function tooltipM(){
	$('.tipOpen').each(function(){
		$(this).click(function(){
			$(this).closest('tr').siblings('tr').find('.tipBox').fadeOut(120);
			$(this).next('.tipBox').fadeIn(120);
			$('.moreMenu').slideUp(100);
		})
		$(this).next('.tipBox').find('.xBtn').click(function(){
			$(this).parents('.tipBox').fadeOut(120);
		})
	})
}

function tooltipBoxM(){	
	$('.tipIcon').click(function(){
		var htmlNum = $(window).width();
		var centerNum =htmlNum/2;
		var iconNum = $(this).offset();
		if (iconNum.left > centerNum) {
			$(this).next('.tipBox').addClass('right')
		}
	})
}

function tableMoreMenu(){
	$('.moreBtn').each(function(){
		var btnMore = $('.moreBtn');
		$(this).click(function(){
			$('.tipBox').fadeOut(120);
			$(this).next('.moreMenu').slideToggle(100);
			$(this).closest('tr').siblings().find('.moreMenu').slideUp(100);
		});
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
	tableMoreMenu();
	topButtonWeb();
	topButton();
	tooltipBoxM();
	gnbOpenM();
	gnbCloseM();
	gnbmenuM();
	tooltipM();
	hideformShow();
	textLengthLimit();
	inputCheckDesign();	
	inputRadioDesign();
	changeInputDesign();
	tableLineCheck();
	tableSelect();	
	inputFileTxt();
	if($('.datePicker').length > 0){calendarSet()}
	$('.selectOption select').on('change', function(){
		tableSelect();	
	})
});