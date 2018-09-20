
$(".card-img-top").mouseover(function(){
	$(this).animate({height: "375px"},"slow");

});
$(".card-img-top").mouseout(function(){
	$(this).animate({height: "300px"},"slow");
	
});