jQuery(document).ready(function(){
								
	/* To delete Test Only */
	function activelink(mm, sm, mmm){
		var link1 = parseFloat(mm)-1;
		var link2 = parseFloat(sm)-1;
		var link3 = parseFloat(mmm)-1;
		$(".site-menu li:eq("+link1+")").addClass("m-active");
		$("#submenu li:eq("+link2+")").addClass("s-active");
		$("#menu li:eq("+link3+")").addClass("active");
	}
	activelink($("#mm").attr("title"), $("#mm").attr("stitle"), $("#header").attr("mid"))
	/* End To delete Test Only */
	$("#print").click(function(){window.print()});
	/* VIP PAGE */
	if(jQuery.browser.msie == true){$("#menuwrap").css({"overflow":"hidden"})}
	
	var globalStatus = 0;
	var globalContentStatus = 0;
	
	function carusel(){
		$("#iwrapper").css({"width":$("body").width()*3+"px","margin-left":-1*globalStatus*$("body").width()+"px"})
		$(".iwrap").css("width", $("body").width());
	}
	carusel();
	$(window).resize(function() {
		carusel();
	});
	
	$("#one").click(function(){
		$("#iwrapper").animate({"margin-left":0+"px"},{duration:1000, easing: "easeOutQuart"});
		globalStatus = 0;
		$("#two").removeClass("active-count");
		$("#tre").removeClass("active-count");
		$(this).addClass("active-count");
	})
	$("#two").click(function(){
		$("#iwrapper").animate({"margin-left":-1*$("body").width()+"px"},{duration:1000, easing: "easeOutQuart"});
		globalStatus = 1;
		$("#one").removeClass("active-count");
		$("#tre").removeClass("active-count");
		$(this).addClass("active-count");
	})
	$("#tre").click(function(){
		$("#iwrapper").animate({"margin-left":-2*$("body").width()+"px"},{duration:1000, easing: "easeOutQuart"});
		globalStatus = 2;
		$("#one").removeClass("active-count");
		$("#two").removeClass("active-count");
		$(this).addClass("active-count");
	})
	$("#manager .show").click(function(){
		var tHeight = $("#manager .dwrap").height();
		$("#manager .description").animate({"top":"146px"},{duration:1000, easing: "easeOutQuart"});
		if(tHeight > 300){
			$("#manager .overlay").css({"height":tHeight-300+543+"px"}, 300);
			$("#illustration").animate({"height":tHeight-300+543+"px"}, 300);
			$("#manager").animate({"height":tHeight-300+543+"px"}, 300);
			globalContentStatus = 1;
		}
		$("#manager .overlay").fadeOut();
	});
	$("#manager .close").click(function(){
		$("#manager .description").animate({"top":"543px"},{duration:1000, easing: "easeOutQuart"});
		if(globalContentStatus !== 0){
			$("#manager .overlay").css({"height":"543px"}, 300);
			$("#illustration").animate({"height":"543px"}, 300);
			$("#manager").animate({"height":"543px"}, 300);
		}
		$("#manager .overlay").fadeIn();
	});
	$("#cars .show").click(function(){
		var tHeight = $("#cars .dwrap").height();
		$("#cars .description").animate({"top":"146px"},{duration:1000, easing: "easeOutQuart"});
		if(tHeight > 300){
			$("#cars .overlay").css({"height":tHeight-300+543+"px"}, 300);
			$("#illustration").animate({"height":tHeight-300+543+"px"}, 300);
			$("#cars").animate({"height":tHeight-300+543+"px"}, 300);
			globalContentStatus = 1;
		}
		$("#cars .overlay").fadeOut();
	});
	$("#cars .close").click(function(){
		$("#cars .description").animate({"top":"543px"},{duration:1000, easing: "easeOutQuart"});
		if(globalContentStatus !== 0){
			$("#cars .overlay").css({"height":"543px"}, 300);
			$("#illustration").animate({"height":"543px"}, 300);
			$("#cars").animate({"height":"543px"}, 300);
		}
		$("#cars .overlay").fadeIn();
	});
	$("#office .show").click(function(){
		var tHeight = $("#office .dwrap").height();
		$("#office .description").animate({"top":"146px"},{duration:1000, easing: "easeOutQuart"});
		if(tHeight > 300){
			$("#office .overlay").css({"height":tHeight-300+543+"px"}, 300);
			$("#illustration").animate({"height":tHeight-300+543+"px"}, 300);
			$("#office").animate({"height":tHeight-300+543+"px"}, 300);
			globalContentStatus = 1;
		}
		$("#office .overlay").fadeOut();
	});
	$("#office .close").click(function(){
		$("#office .description").animate({"top":"543px"},{duration:1000, easing: "easeOutQuart"});
		if(globalContentStatus !== 0){
			$("#office .overlay").css({"height":"543px"}, 300);
			$("#illustration").animate({"height":"543px"}, 300);
			$("#office").animate({"height":"543px"}, 300);
		}
		$("#office .overlay").fadeIn();
	});
	
	/* TOP MENU STYLES*/
	$("#menuwrap .links li").hover(function(){
		$(this).addClass("hover");
				var ttext = $("a",this).text();
		if (ttext == "FxPro"){
		ttext = "";
		}
		if($("a",this).attr("title") !== ""){
			$("body").append("<div class=\"toolbar\"><div class=\"header\"><span><b>FxPro</b> "+ttext+"</span></div><div class=\"descr\">"+$("a",this).attr("title")+"</div><div class=\"foot\"></div></div>");
			$(".toolbar").fadeIn("fast");
			$(document).mousemove(function(e){
      			$('.toolbar').css({"left":e.pageX+5+"px","top":e.pageY+30+"px"});
   			}); 
		}
	},function(){
		$(".toolbar").fadeOut("fast", function(){
			$(this).remove();
		});
		$(this).removeClass("hover");
	})
	$("#menu li:last-child").addClass("m-end");
	$("#menu li:first-child").addClass("m-first");

	var mnum = $("#menuwrap li").length;
	var ulwidth = 0;
	var ulStatus = 0;
	for(var i = 0; i <= mnum; i++) {
		ulwidth = ulwidth+$("#menuwrap li:eq("+i+")").width();
		if(i == mnum){
			$("#menuwrap ul").css("width",ulwidth+"px");
			if(ulwidth > 884) {
				$("#next-menu").show();
			}
		}
	}
	$("#next-menu").click(function(){
		ulStatus = ulStatus-161;
		$("#menuwrap ul").animate({"margin-left":ulStatus+"px"}, {
		duration: 450, 
    	complete: function(){
			if(ulStatus < -1*(ulwidth-884)) {
				$("#menuwrap ul").animate({"margin-left":-1*(ulwidth-884)+"px"}, 300);
				ulStatus = -1*(ulwidth-884);
			}
		}});
		if(ulStatus < -1*(ulwidth-884)) {
			$("#next-menu").fadeOut();
		}
		if(ulStatus < -99) {
			$("#prev-menu").fadeIn();
		}
	});
	$("#prev-menu").click(function(){
		ulStatus = ulStatus+161;
		$("#menuwrap ul").animate({"margin-left":ulStatus+"px"}, {
		duration: 450,
		complete: function() {
			if(ulStatus > -1) {
				$("#menuwrap ul").animate({"margin-left":"0px"}, 300);
				ulStatus = 0;
				$("#next-menu").fadeIn();
			}
		}});
		if(ulStatus > 0) {
			$("#prev-menu").fadeOut();
		}
		if(ulStatus <= 0) {
			$("#next-menu").fadeIn();
		}
	});
	
	$("#submenu li")
	$("#submenu div a:last-child").addClass("last");
	$("#navigator div").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")});
	
	/* CONTACTS PAGE */
	var scount = "#oc";
	var scount2 = "#offices .oc";
	$("#country div, #offices div").hide();
	$("#oc").show();
	$("#offices .oc").show();
	$("#countries li").hover(function(){
		if($(this).attr("class") !== "clear"){
			$(scount).hide();
			$(scount2).hide();
			scount = "#"+$(this).attr("class");
			scount2 = "#offices ."+$(this).attr("class");
			$(scount).show();
			$(scount2).show();
		}
	},function(){
		
	});
	
	
	/* TOOLS PAGE */
	$("#tools-list div").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")})
	
	/* DOWNLOADS PAGE */
	var pli = $("#paginator ul li").length;
	$("#paginator ul").css("margin-left",(-1*pli*26)/2+"px");
	$('#show-search').toggle(function() {
		$("#search-box form").hide()
		$(this).removeClass("open");
	}, function() {
		$("#search-box form").show();
		$(this).addClass("open");
	});
	$("#paginator ul li").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	
	/* SELECT JS */
	for(var i = 0; i < $(".cselect").length; i++){
		$(".cselect:eq("+i+")").attr("cs-num",i);
		$(".cselect:eq("+i+") ul").css("z-index",$(".cselect").length+5-i)
	}
	$(".selected2").toggle(function(){
		var csNumber = $(this).parent().parent().attr("cs-num");
		var cs = $(".cselect:eq("+csNumber+") li").length;
		$(this).parent().animate({"height":cs*23+"px"},{duration:500, easing: "easeOutQuart"});
		$(this).parent().addClass("open2");
	}, function(){
		$(this).parent().animate({"height":22+"px"},{duration:500, easing: "easeOutQuart"});
		$(this).parent().removeClass("open2");
	});
	$(".cselect ul li.option").click(function(){
		$(".selected2").text($(this).text());
		$(this).parent().animate({"height":22+"px"},{duration:300, easing: "easeOutQuart"});
	});
	
	/* SPONSORSHIP PAGE */
	$(".imatrix div").hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});
	
	/* SOCIAL PAGE */
	var sblock;
	var globalSocial = 0;
	$(".social_menu a").click(function(){
		var sblock2 = "#"+$(this).attr("title")+"";
		if(sblock2 !== sblock){
			if(globalSocial == 1){
				$(sblock).animate({"top":"100%"},{duration:1000, easing: "easeOutQuart", 
				complete:function(){
					sblock = sblock2;
					var socHeight = $(sblock).height();
					$(sblock).animate({"top":"95px"},{duration:1000, easing: "easeOutQuart"});
					if(socHeight > 254){
						$(".social-block").animate({"height":socHeight-158+365+"px"},{duration:1000, easing: "easeOutQuart"});
					}
					globalSocial = 1;
				}});
				$(".social-block").animate({"height":"365px"},{duration:1000, easing: "easeOutQuart"});
			} else {
				sblock = "#"+$(this).attr("title")+"";
				var socHeight = $(sblock).height();
				$(sblock).animate({"top":"95px"},{duration:1000, easing: "easeOutQuart"});
				if(socHeight > 254){
					$(".social-block").animate({"height":socHeight-158+365+"px"},{duration:1000, easing: "easeOutQuart"});
				}
				globalSocial = 1;
			}
		}
	});
	$(".close").click(function(){
		globalSocial = 0;
		$(sblock).animate({"top":"100%"},{duration:1000, easing: "easeOutQuart"});
		$(".social-block").animate({"height":"365px"},{duration:1000, easing: "easeOutQuart"});
		sblock = undefined;
	});
	
	
	/* PLATFORMS PAGE */

	
	$('#mp1').click(function() { $('#text_01').animate({"top":"-435px"}, 500, 'linear', function() { $(this).after(' '); }); });
	$('#mc1').click(function() { $('#text_01').animate({"top":"100%"}, 500, 'linear', function() { $(this).after(' '); }); });
	
	$('#mp2').click(function() { $('#text_02').animate({"top":"-856px"}, 500, 'linear', function() { $(this).after(' '); }); });
	$('#mc2').click(function() { $('#text_02').animate({"top":"100%"}, 500, 'linear', function() { $(this).after(' '); }); });

	$('#mp3').click(function() { $('#text_03').animate({"top":"-1275px"}, 500, 'linear', function() { $(this).after(' '); }); });
	$('#mc3').click(function() { $('#text_03').animate({"top":"100%"}, 500, 'linear', function() { $(this).after(' '); }); });

	
	$('#mp4').click(function() { $('#text_04').animate({"top":"-1695px"}, 500, 'linear', function() { $(this).after(' '); }); });
	$('#mc4').click(function() { $('#text_04').animate({"top":"100%"}, 500, 'linear', function() { $(this).after(' '); }); });

	
	$('#mp5').click(function() { $('#text_05').animate({"top":"-2115px"}, 500, 'linear', function() { $(this).after(' '); }); });
	$('#mc5').click(function() { $('#text_05').animate({"top":"100%"}, 500, 'linear', function() { $(this).after(' '); }); });

	
	$('#mp6').click(function() { $('#text_06').animate({"top":"-2535px"}, 500, 'linear', function() { $(this).after(' '); }); });
	$('#mc6').click(function() { $('#text_06').animate({"top":"100%"}, 500, 'linear', function() { $(this).after(' '); }); });

	$('#mp7').click(function() { $('#text_07').animate({"top":"-2955px"}, 500, 'linear', function() { $(this).after(' '); }); });
	$('#mc7').click(function() { $('#text_07').animate({"top":"100%"}, 500, 'linear', function() { $(this).after(' '); }); });
	
	
	/* FxPro JS */

	
	/* Forex Popup Table */
	$("#cfd_forex tbody tr").click(function(){
		$(".popup").remove();
		var popNum = $("td", this).length;
		var popCont = new Array();
		for(var i = 0; i < popNum; i++){
			popCont.push($("td:eq("+i+")", this).text());
		}
		$("#popups").append('<div class="popup"><div class="close-but"></div><div class="top"></div><div class="con"><div class="name">'+popCont[0]+'</div><div align="center"><p class="small">* - Only if Margin Level > 100%</p></div></div><div class="bot"></div></div>')
		$("#popups .name").after('<table cellspacing="0"><tbody><tr><td class="left"><b>minimum price fluctuation</b><div>'+popCont[1]+'</div></td><td class="right"><b>Minimum Spread</b><div>'+popCont[2]+'</div></td></tr><tr><td class="left"><b>Typical Max. Spread</b><div>'+popCont[3]+'</div></td><td class="right"><b>swap value in points: Long</b><div>'+popCont[4]+'</div></td></tr><tr><td class="left"><b>swap value in points: Short</b><div>'+popCont[5]+'</div></td><td class="right"><b>Limit and Stop Levels</b><div>'+popCont[6]+'</div></td></tr><tr><td class="left"><b>used margin (1:100 leverage rate) in US Dollar</b><div>'+popCont[7]+'</div></td><td class="right"><b>1 pip value per 1 lot in US Dollar</b><div>'+popCont[8]+'</div></td></tr><tr><td class="left"><b>Size of 1 lot</b><div>'+popCont[9]+'</div></td><td class="right"><b>Minimum step for increasing contract size</b><div>'+popCont[10]+'</div></td></tr><tr><td class="left"><b>Minimum contract size</b><div>'+popCont[11]+'</div></td><td class="right"><b>Margin requierments to open a lock position*</b><div>'+popCont[12]+'</div></td></tr><tr><td class="left"><b>Open time(Server time)</b><div>'+popCont[13]+'</div></td><td class="right"><b>Close time (Server Time)</b><div>'+popCont[14]+'</div></td></tr></tbody></table>');
		$("#popups .popup").css("top",$(document).scrollTop()+15+"px");
		$(".close-but").click(function(){
			$(this).parent().remove();
		})
	});
	/* Spot Metals Popup Table */
	$("#cfd_spot-metals tbody tr").click(function(){
		$(".popup").remove();
		var popNum = $("td", this).length;
		var popCont = new Array();
		for(var i = 0; i < popNum; i++){
			popCont.push($("td:eq("+i+")", this).text());
		}
		$("#popups").append('<div class="popup"><div class="close-but"></div><div class="top"></div><div class="con"><div class="name">'+popCont[1]+'</div><div align="center"><p class="small">* - Only if Margin Level > 100%</p></div></div><div class="bot"></div></div>');
		$("#popups .name").after('<table cellspacing="0"><tbody><tr><td class="left"><b>Ticker</b><div>'+popCont[0]+'</div></td><td class="right"><b>1 lot size</b><div>'+popCont[2]+'</div></td></tr><tr><td class="left"><b>Used margin per 1 lot</b><div>'+popCont[3]+'</div></td><td class="right"><b>Spread</b><div>'+popCont[4]+'</div></td></tr><tr><td class="left"><b>Limit &amp; Stop Level</b><div>'+popCont[7]+'</div></td><td class="right"><b>Commission</b><div>-</div></td></tr><tr><td class="left"><b>1 tick value per 1 lot</b><div>'+popCont[9]+'</div></td><td class="right"><b>Minimum price fluctuation (tick size)</b><div>'+popCont[8]+'</div></td></tr><tr><td class="left"><b>Minimum contract size</b><div>'+popCont[10]+'</div></td><td class="right"><b>Minimum step for increasing contract size</b><div>'+popCont[11]+'</div></td></tr><tr><td class="left"></td><td class="right"><b>Used margin per 1 lot in US Dollar</b><div>'+popCont[12]+'</div></td></tr><tr><td class="left"><b>Margin requirements to open a lock position *</b><div>'+popCont[13]+'</div></td><td class="right"><b>Swap value</b><div>-</div></td></tr><tr><td class="left"><b>Open time (Server Time)</b><div>'+popCont[14]+'</div></td><td class="right"><b>Close time (Server Time)</b><div>'+popCont[15]+'</div></td></tr></tbody></table>');
		$("#popups .popup").css("top",$(document).scrollTop()+15+"px");
		$(".close-but").click(function(){
			$(this).parent().remove();
		})
	});
	/* Shares Popup Table */
	$("#cfd_shares tbody tr").click(function(){
		$(".popup").remove();
		var popNum = $("td", this).length;
		var popCont = new Array();
		for(var i = 0; i < popNum; i++){
			popCont.push($("td:eq("+i+")", this).text());
		}
		$("#popups").append('<div class="popup"><div class="close-but"></div><div class="top"></div><div class="con"><div class="name">'+popCont[1]+'</div><div align="center"><p class="small">* - Commission is charged only upon opening a position<br/>** - Only if Margin Level > 100%</p></div></div><div class="bot"></div></div>');
		$("#popups .name").after('<table cellspacing="0"><tbody><tr><td class="left"><b>Ticker</b><div>'+popCont[0]+'</div></td><td class="right"><b>1 lot size</b><div>'+popCont[2]+'</div></td></tr><tr><td class="left"><b>Used margin per 1 lot</b><div>'+popCont[3]+'</div></td><td class="right"><b>Spread</b><div>'+popCont[4]+'</div></td></tr><tr><td class="left"><b>Limit &amp; Stop Level</b><div>'+popCont[5]+'</div></td><td class="right"><b>Commission</b><div>'+popCont[6]+'</div></td></tr><tr><td class="left"><b>1 tick value per 1 lot</b><div>'+popCont[7]+'</div></td><td class="right"><b>Minimum price fluctuation (tick size)</b><div>'+popCont[8]+'</div></td></tr><tr><td class="left"><b>Minimum contract size</b><div>'+popCont[9]+'</div></td><td class="right"><b>Minimum step for increasing contract size</b><div>'+popCont[10]+'</div></td></tr><tr><td class="left"><b>Commission USD *</b><div>'+popCont[11]+'</div></td><td class="right"><b>Used margin per 1 lot in US Dollar</b><div>'+popCont[12]+'</div></td></tr><tr><td class="left"><b>Margin requirements to open a lock position **</b><div>'+popCont[13]+'</div></td><td class="right"><b>Swap value</b><div>'+popCont[14]+'</div></td></tr><tr><td class="left"><b>Open time (Server Time)</b><div>'+popCont[15]+'</div></td><td class="right"><b>Close time (Server Time)</b><div>'+popCont[16]+'</div></td></tr></tbody></table>');
		$("#popups .popup").css("top",$(document).scrollTop()+15+"px");
		$(".close-but").click(function(){
			$(this).parent().remove();
		})
	});
	
	$(".site-menu li:has(ul)").addClass("level_1");
	
	$(".caruselle, .item-img, #item-img").imageZoom();
	var carn = $(".caruselle li").length;
	var carGlob = 0;
	$(".caruselle").wrap("<div id=\"car-wrap\"><div id=\"car-con\"></div></div>");
	$("#car-wrap").append("<div id=\"car-prev\"></div><div id=\"car-next\"></div>");
	$(".caruselle").css("width",carn*161+"px");
	$("#car-prev").click(function(){
		carGlob = carGlob+161;
		if(carGlob > 0) carGlob = 0;
		$(".caruselle").animate({"margin-left":carGlob+"px"},{duration:500, easing:"easeOutQuart"});
	});
	$("#car-next").click(function(){
		carGlob = carGlob-161;
		if(carGlob < -1*161*(carn-5)) carGlob = -1*161*(carn-5);
		$(".caruselle").animate({"margin-left":carGlob+"px"},{duration:500, easing:"easeOutQuart"});
	});
	
	$("#imatrix .block").hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});
	$('#scroll01, #scroll02, #scroll03').jScrollPane({showArrows:false, scrollbarWidth:16, dragMaxHeight:48});
	$("#tabs").tabs({fxFade: true, fxSpeed: 'fast'});
	
	var pn = $("#promo-image div").length;
	var pi = 0;
	for(var i = 0; i < pn; i++) {
		if(i == 0) {
			$("#promo-image div:eq(0)").css("display", "block");
		}
		$("#promo-image div:eq("+i+")").addClass("promo"+i);
	}
	function updateImage() {
		$("#promo-image div:eq("+pi+")").fadeOut("slow");
		$("#promo-nav a:eq("+pi+")").removeClass("active");
		pi++;
		if(pi >= pn){pi = 0;}
		$("#promo-image div:eq("+pi+")").fadeIn("slow");
		$("#promo-nav a:eq("+pi+")").addClass("active");
	}
	$("#promo-nav a").click(function(){
		clearInterval(promoInt);
		updateImage2(parseFloat($(this).text()-1));
	});
	function updateImage2(param1){
		clearInterval(promoInt);
		$("#promo-image div:eq("+pi+")").fadeOut("slow");
		$("#promo-nav a:eq("+pi+")").removeClass("active");
		$("#promo-image div:eq("+param1+")").fadeIn("slow");
		$("#promo-nav a:eq("+param1+")").addClass("active");
		pi = param1;
		promoInt = setInterval(updateImage,5000);
	}
	var promoInt = setInterval(updateImage,5000);
	
	var nm = $("#promo-top a").length;
	var ni = 0;
	for(var i = 0; i < nm; i++) {
		if(i == 0) {
			$("#promo-top a:eq(0)").css("display", "block");
		}
	}
	function updateNews() {
		$("#promo-top a:eq("+ni+")").fadeOut("fast");
		ni++;
		if(ni >= nm){ni = 0;}
		$("#promo-top a:eq("+ni+")").fadeIn("fast");
	}
	var newsInt = setInterval(updateNews,3000);
	
	var banner1 = $("#ipromo .bcont:eq(0) div").length;
	var ban1 = 0;
	$("#ipromo .bcont:eq(0) div:eq(0)").show();
	if(banner1 > 1){
		function updateB1() {
			$("#ipromo .bcont:eq(0) div:eq("+ban1+")").hide();
			ban1++;
			if(ban1 >= banner1){ban1 = 0;}
			$("#ipromo .bcont:eq(0) div:eq("+ban1+")").fadeIn();
		}
		var ban1timer = setInterval(updateB1,3000);
	}
	var banner2 = $("#ipromo .bcont:eq(1) div").length;
	var ban2 = 0;
	$("#ipromo .bcont:eq(1) div:eq(0)").show();
	if(banner2 > 1){
		function updateB2() {
			$("#ipromo .bcont:eq(1) div:eq("+ban2+")").hide();
			ban2++;
			if(ban2 >= banner2){ban2 = 0;}
			$("#ipromo .bcont:eq(1) div:eq("+ban2+")").fadeIn();
		}
		var ban2timer = setInterval(updateB2,3000);
	}
	var banner3 = $("#ipromo .bcont:eq(2) div").length;
	var ban3 = 0;
	$("#ipromo .bcont:eq(2) div:eq(0)").show();
	if(banner3 > 1){
		function updateB3() {
			$("#ipromo .bcont:eq(2) div:eq("+ban3+")").hide();
			ban3++;
			if(ban3 >= banner3){ban3 = 0;}
			$("#ipromo .bcont:eq(2) div:eq("+ban3+")").fadeIn();
		}
		var ban3timer = setInterval(updateB3,3000);
	}
	var banner4 = $("#ipromo .bcont:eq(3) div").length;
	var ban4 = 0;
	$("#ipromo .bcont:eq(3) div:eq(0)").show();
	if(banner4 > 1){
		function updateB4() {
			$("#ipromo .bcont:eq(3) div:eq("+ban4+")").hide();
			ban4++;
			if(ban4 >= banner4){ban4 = 0;}
			$("#ipromo .bcont:eq(3) div:eq("+ban4+")").fadeIn();
		}
		var ban4timer = setInterval(updateB4,3000);
	}
	var banner5 = $("#ipromo .bcont:eq(4) div").length;
	var ban5 = 0;
	$("#ipromo .bcont:eq(4) div:eq(0)").show();
	if(banner5 > 1){
		function updateB5() {
			$("#ipromo .bcont:eq(4) div:eq("+ban5+")").hide();
			ban5++;
			if(ban5 >= banner5){ban5 = 0;}
			$("#ipromo .bcont:eq(4) div:eq("+ban5+")").fadeIn();
		}
		var ban5timer = setInterval(updateB5,3000);
	}
	var banner6 = $("#ipromo .bcont:eq(5) div").length;
	var ban6 = 0;
	$("#ipromo .bcont:eq(5) div:eq(0)").show();
	if(banner6 > 1){
		function updateB6() {
			$("#ipromo .bcont:eq(5) div:eq("+ban6+")").hide();
			ban6++;
			if(ban6 >= banner6){ban6 = 0;}
			$("#ipromo .bcont:eq(5) div:eq("+ban6+")").fadeIn();
		}
		var ban6timer = setInterval(updateB6,3000);
	}
	
		/* Elastic code */
	var banid = Math.floor( Math.random() * (4) ) + 1;
		$(".lb01").css("background","url('/themes/fxpro/images/ban"+banid+"b.jpg') left bottom no-repeat");
		$(".lb01 a").html("<img src='/themes/fxpro/images/ban"+banid+".jpg'>");
	if($("#cwrap .node").height() > $("#left").height()){
		$("#elastic .block, #elastic a").css("height", $("#cwrap .node").height()-$("#block-local_menu-0").height()-$("#block-block-2").height()-107+255+"px");
	}
	if($("#cwrap").height()-$("#block-local_menu-0").height()-$("#block-block-2").height()-70 < 650) {
		$(".lb01").css("background","none");
	}
	
})