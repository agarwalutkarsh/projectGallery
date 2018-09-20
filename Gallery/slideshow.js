$(function(){
	var galleryImage=$(".gallery").find("img").first();
	var images=[
	"images/1.jpg",
	"images/2.jpg",
	"images/3.jpg",
	"images/4.jpg",
	"images/5.jpg",
	"images/6.jpg",
	
	"images/8.jpg",
	"images/9.jpg",
	"images/10.jpg"
	];
	var i=0;
	
	 setInterval(function(){
    i = (i+1) % images.length;
    galleryImage.fadeOut(function(){
        $(this).attr('src', images[i]);
        $(this).fadeIn();
    });
  }, 2000);

});
