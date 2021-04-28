$(document).ready(function () {
	$(window).scroll(function () {
	  var sc = $(window).scrollTop();
	  if (sc > 90) {
		$(".navbar-top").addClass("sticky");
		$(".sticky-logo").removeClass("d-none");
		$(".default-logo").addClass("d-none");
	  } else {
		$(".navbar-top").removeClass("sticky");
		$(".sticky-logo").addClass("d-none");
		$(".default-logo").removeClass("d-none");
	  }
	});
});