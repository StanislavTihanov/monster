"use strict"
  $(function(){
//------------------------------------------------------------------------Спойлеры
  $('.about__block-title',).click(function(event){
    if($('.about__block').hasClass('one')){
      $('.about__block-title').not($(this)).removeClass('active');
      $('.about__block-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
  
  });
//------------------------------------------------------------------------Спойлеры
$(function(){
  //------------------------------------------------------------------------Спойлеры
    $('.questions__block-title',).click(function(event){
      if($('.questions__block').hasClass('one')){
        $('.questions__block-title').not($(this)).removeClass('active');
        $('.questions__block-text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
    });
    
    });
//------------------------------------------------------------------------Меню-Бургер

const burgerMenu = document.querySelector('.header__burger');
const menuBody= document.querySelector('.menu');
if(burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
}
let buttons = document.querySelectorAll('.menu__link');
buttons.forEach((elem)=>{
  elem.addEventListener('click',()=>{
    menuBody.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  })
})
//------------------------------------------------------------------------Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
      
        window.scrollTo({
        top:gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
//------------------------------------------------------------------------Меню-Бургер

$('.fresh__items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
//------------------------------------------------------------------------Форма для отправки на почту
jQuery(document).ready(function () {
     
  $(".phone").mask("+7 (99) 999-99-99"); 
 

 jQuery('.send-form').click( function() {
   var form = jQuery(this).closest('form');
   
   if ( form.valid() ) {
     form.css('opacity','.5');
     var actUrl = form.attr('action');

     jQuery.ajax({
       url: actUrl,
       type: 'post',
       dataType: 'html',
       data: form.serialize(),
       success: function(data) {
         form.html(data);
         form.css('opacity','1');
                 //form.find('.status').html('форма отправлена успешно');
                 //$('#myModal').modal('show') // для бутстрапа
       },
       error:	 function() {
            form.find('.status').html('серверная ошибка');
       }
     });
   }
 });

});