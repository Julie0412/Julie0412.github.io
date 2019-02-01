//Карта
var myMap,
	addresses = [],
	myObjects;
$(document).ready(function(){
	if ($('#map').length) {
		ymaps.ready(function () {		
			$('.contacts__select option').each(function () {
				addresses.push($(this).attr('value'));
			});
			myObjects = ymaps.geoQuery();
			for (i = 0; i < addresses.length; i++) {
				myObjects = myObjects.add(ymaps.geocode(addresses[i],{
					kind: 'house',
					results: 1,
				}));
			}
			myObjects.then(function (res) {			
				myMap = new ymaps.Map('map', {
					center: myObjects._objects[0].geometry.getCoordinates(),
					zoom: 17,
					controls: ['smallMapDefaultSet']
				});
				myObjects.addToMap(myMap);
				//myMap.behaviors.disable(['scrollZoom']);
				$('.contacts__select').on('change',function(){
					var index = +this.selectedIndex,
              coords = myObjects._objects[index].geometry.getCoordinates();
					myMap.panTo(coords,{
						fly:1
					});
				})	
			});
		});
	}
});
$('.contacts__select').change(function(){
  var index = +this.selectedIndex;
  $(this).parents('.contacts').find('.contacts__tab').not(':eq('+index+')').hide();
  $(this).parents('.contacts').find('.contacts__tab').eq(index).fadeIn(200);
})
//
function is_mobile(){
  return $(window).width()<992;
}
function changeTemplate(){
  if(is_mobile()){
    $('.dropdown').css('display','');
    $('.main-menu .has-children.open').removeClass('open');
  }else{
    $('.header__search input').blur();
    $('.header__bottomline,.header__search').removeClass('open');    
    $('.menu-btn,.search-btn').removeClass('active');
  }
}
$(document).ready(changeTemplate);
$(window).resize(changeTemplate);
//Меню
$('.main-menu a').each(function(){//Убрать. Будет реализовано на backend
  if(this.href == location.href){
    $(this).parent('li').addClass('active');
  }
})
$('.main-menu .has-children>a').click(function(e){
  if(!is_mobile()){
    e.preventDefault();
    var targetId = $(this).data('id') ? '#' + $(this).data('id') : false;
    if(targetId){
      $(this).parent().toggleClass('open');
      $('.header__dropdown').not(targetId).hide();
      $('.main-menu .has-children.open').not($(this).parent()).removeClass('open');
      $(this).toggleClass('open');
      $(targetId).fadeToggle(200);
    }
  }
})
$(document).on('click',function(e){
  if(!$(e.target).is('.main-menu .has-children>a,.dropdown') && $('.dropdown').has(e.target).size()==0){
    $('.main-menu .has-children.open').removeClass('open');
    $('.dropdown').fadeOut(100);
  }
  if(is_mobile() && !$(e.target).is('.menu-btn,.header__bottomline') && $('.header__bottomline').has(e.target).size()==0){
    $('.menu-btn').removeClass('active');
    $('.header__bottomline').removeClass('open');
  }
})
$('.show-sidebar-button').click(function(){
  $('.sidebar-block__sidebar').toggleClass('open');
})
$('.menu-btn').click(function(){
  $(this).toggleClass('active');
  $('.header__bottomline').toggleClass('open');
})
$('.search-btn').click(function(){
  if(!$(this).is('.active')){
    $(this).addClass('active');
    $('.header__search').addClass('open');
    $('.header__search input').focus();
  }
})
$('.header__search input').blur(function(){
  if(is_mobile()){
    $(this).parents('.header__search').removeClass('open');
    $('.search-btn').removeClass('active');
  }
})
//Поиск и выбор города
$('.location a,.location__current').click(function(e){
  e.preventDefault();
  $('.location__form').fadeToggle(200);
})

$('.location__list>li').click(function(){
  $('.location__current').text($(this).text());
  $('.location__form').hide();
});

$('.location__input').on('input',function(){
  $('.location__list .select').removeClass('select');
  var val = this.value;
  if(val && val.length > 2){
    val = val.toLowerCase();
    $('.location__list li').each(function(){
      var text = $(this).text().toLowerCase();
      if(text.includes(val)){
        $(this).addClass('select');
        var top = $(this).position().top;
        $(this).parent('ul').scrollTop(top);
      }
    })
  }
})
$('.location__input').keydown(function(e){
  if(e.which == 13){
		$(this).parents('.location').find('.location__list .select').eq(0).trigger('click');
	}
})
$(document).on('mousedown',function(e){
  if(!$(e.target).is('.location') && $('.location').has(e.target).size()==0){
    $('.location__form').fadeOut(100);
  }
})
//Маска для теефона
$('[type=tel]').inputmask({
	mask :'+7(999)-999-99-99'
});
//тыбы
$('.tabs__content').each(function(){
  if(!$(this).siblings('.tabs__trigger').is('.active')){
    $(this).hide();
  }
})
$('.tabs__trigger').click(function(){
  $(this).toggleClass('active');
  $(this).siblings('.tabs__content').slideToggle(200);
})

//Слайдер
$('.top-slider').slick({
  prevArrow:'<span class="fa-chevron-left top-slider__arrow prev">',
  nextArrow:'<span class="fa-chevron-right top-slider__arrow next">',
  dots:true,
  dotsClass:'slick-dots top-slider__dots',
  customPaging:function(){return ''},
  responsive:[
    {
      breakpoint:992,
      settings:{
        arrows:false
      }
    }
  ]
})