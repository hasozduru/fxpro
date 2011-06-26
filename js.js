$(document).ready(function(){
	$("#paging_button li").click(function(){
		$("#paging_button li").css({'background-color' : ''});
		$(this).css({'background-color' : '#A5CDFA'});
		$("#content_ajax").load("data.php?page=" + this.id);
	});
	// by default first time this will execute
	$("#1").css({'background-color' : '#A5CDFA'});
	$("#content_ajax").load("data.php?page=1");
});