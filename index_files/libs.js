$(document).ready(function(){
	$('.sociallogin a').on('click',function(){
	   var href = $(this).attr('href');
       var width  = 820;
       var height = 420;
       var left   = (screen.width  - width)/2;
       var top   = (screen.height - height)/2-100;   

       auth_window = window.open(href, 'auth_window', "width="+width+",height="+height+",top="+top+",left="+left+"menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no");
       return false;
	})
});


$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel();
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});

 /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );


$(document).ready(function() {
    var panels = $('.user-infos');
    var panelsButton = $('.dropdown-user');
    panels.hide();

    //Click dropdown
    panelsButton.click(function() {
        //get data-for attribute
        var dataFor = $(this).attr('data-for');
        var idFor = $(dataFor);

        //current button
        var currentButton = $(this);
        idFor.slideToggle(400, function() {
            //Completed slidetoggle
            if(idFor.is(':visible'))
            {
                currentButton.html('<i class="glyphicon glyphicon-chevron-up text-muted"></i>');
            }
            else
            {
                currentButton.html('<i class="glyphicon glyphicon-chevron-down text-muted"></i>');
            }
        })
    });

});


// Модуль Easy Like by ПафНутиЙ
$(document).on('click touchstart', '.easylike_count', function (event) {
	event.preventDefault();
	var $this = $(this),
		news_id = $this.data('news_id'),
		comment_id = $this.data('comment_id'),
		count = $this.data('count');
	// показываем прелоадер
	$this.html('<span class="easylike_load"><i class="easylike_circles ec1"></i><i class="easylike_circles ec2"></i><i class="easylike_circles ec3"></i></span>');
	$.post(dle_root + "engine/ajax/easylike.php", {
		news_id: news_id,
		comment_id: comment_id,
		count: count
	}, function (data) {
		if (data > count + 1) {
			// Если вдруг запись лайкнет кто-то ещё пока пользователь смотрит страницу - скажем ему об этом, пусть знает.
			data = (data) + '<span title="Пока вы смотрели страницу, запись понравилась ещё кому-то.">(' + (data - count - 1) + ')</span>';
		};
		$this.html(data);
	});
});


