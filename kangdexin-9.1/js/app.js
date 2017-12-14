	$(document).ready(function() {
				$('.carousel').carousel({ interval: 3000 }); //每隔5秒自动轮播
			});

			//导航
			$("#nav-list li a").mouseover(function() {
				$("<hr>").appendTo($(this));

				$(this).css("color", "#000000");
				$(this).parent().siblings("li").find("a").css("color", "#464545").find("hr").remove()

				$(this).mouseleave(function() {
					$(this).find("hr").remove();
				})
			});

			//文字
			$(".showimg .item").find("p").slideUp(0);
			$(".showimg .item").on("mousemove",function() {
				$(this).find(".capital").hide();
				$(this).find("p").slideDown("slow");
			
			}).mouseleave(function() {
				$(this).find(".capital").show();
					$(this).find("p").slideUp("slow");
			});

			//电视
			$("#indexImg img").eq(0).show().siblings().hide();
			$("#cklist li").mouseover(function() {
				var index = $(this).index();
				$(this).addClass("active").siblings().removeClass("active")
				$("#indexImg img").eq(index).show().siblings().hide();
			})

			//终端
			var arr = [];
			$("#ly li.on").each(function(e) {
				arr.push($(this).index());
			});

			function indexOf(current, obj) {
				for(var i = 0; i < obj.length; i++) {
					if(obj[i] == current) {
						return i;
					}
				}
			}
			$("#ly li.on").on("mouseover", function() {
				$(this).addClass("active").siblings().removeClass("active");
				var index = $(this).index();
				var k = indexOf(index, arr);
				$("#showindex li").eq(k).show().siblings().hide();
			})

			function pageScroll(){
				window.scrollBy(0,-100);
				scrolldelay = setTimeout('pageScroll()',20);
				var sTop=document.documentElement.scrollTop+document.body.scrollTop;
				if(sTop==0) clearTimeout(scrolldelay);
			}