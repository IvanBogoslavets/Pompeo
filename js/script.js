// Кнопка до гори
$(window).on('scroll', function (){
	if($(this).scrollTop() > 500){
		$('#btn-up').fadeIn()
	}else{
		$('#btn-up').fadeOut()
	}
})
$('#btn-up').on('click', function () {
	$('html, body').animate({ scrollTop: 0 }, 500)
})
// Модальне вікно(Pop-up)
$('.modal-shevcenko').on('click', function (e) {
	if ($(e.target).closest('.modal-window').length == 0) {
		$(this).fadeOut();
	}
});

$('.close').on('click', function () {
	$(this).parents('.modal-shevcenko').fadeOut()
})

$('#open').on('click', function () {
	$('.modal-shevcenko').fadeIn()
})