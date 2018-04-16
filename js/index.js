define(["turn_pic","shopping_car","parabola","jquery", "jquery-cookie"], function(turn_pic,shopping_car,parabola,$){
	var index = function(){
		/*-----------------登陆注册部分-----------------------------*/
		   $("#signin_ul li").eq(3).hover(function(){
			 
			$("#signin_ul_l4 div").css("display","block")
			
			},function(){
			 $("#signin_ul_l4 div").css("display","none")
			})
			$("#signin_ul_l7").hover(function(){
			 $("#signin_ul_l7 div").css("display","block")
			},function(){
			 $("#signin_ul_l7 div").css("display","none")
			})
			$("#signin_ul_l8").hover(function(){
			 $("#signin_ul_l8 div").css("display","block")
			},function(){
			 $("#signin_ul_l8 div").css("display","none")
			})
			$("#signin_ul_l9").hover(function(){
			 $("#signin_ul_l9 div").css("display","block")
			},function(){
			 $("#signin_ul_l9 div").css("display","none")
			})
			$("#signin_ul_l11").hover(function(){
			 $("#signin_ul_l11 div").css("display","block")
			},function(){
			 $("#signin_ul_l11 div").css("display","none")
			})
		}
		
	/*-------------------登陆注册结束-----------------------*/
	
	/*----------------导航开始------------------------------*/
			$(function(){
					    $.ajax({
	    	type:"get",
	    	url:"../data/nav1.json",
	    	async:true,
	    	success:function(res){
	    		var oImg = document.getElementsByTagName("img")[0];
	    		oImg.src = "../images/nav/three.png";
	    		for(var i = 0 ; i < res.length;i++){
	    			$(".nav").append("<li>"+"<a" + " " + "href=``" + ">" + res[i].title + "</a>"+"</li>")
	    		}
	    		$(".nav li").eq(0).css({
	    			width:120,
	    			height:42,
	    			marginLeft:40,
	    		   "fontFamily":"微软雅黑",
	    		   "color":"white"
	    		})
	    		$(".nav li").eq(0).css("backgroundColor","black")
	    		
	    	}
//	    -------------success--------
	    });
/*-----------------ajax结束-------------	*/
//--------------------子导航栏ajax-----------
			$.ajax({
				type:"get",
				url:"../data/subnav.json",
				async:true,
				success:function(res){
					for(var i = 0; i < res.length;i++){
						$("#subnav_ul").append("<li>"+"<a" + " " + "href=``" + ">" + res[i].title + "</a>"+"</li>")	
						$("#subnav_ul li").eq(i).append("<div>" + "</div>");
						
					}
					$("#subnav_ul").find("li").eq(0).append("<ul>" + "</ul>") ;
						$("#subnav_ul").find("li").find("ul").css({
							width:"928px",
							height:"399px",
							position:"absolute",
							left:"160px",
							top:0,
							backgroundColor:"white",
							"zIndex":999,
							display:"none"
					})
			
					
					
					var alis = $("#subnav_ul li");
				
					for(var i = 0; i < alis.length;i++){
						
					  	$("#subnav_ul li").eq(i).hover(function(){
								$(this).find("div").css({
									display:"block",
								})
							    $("#subnav_ul li").eq(0).find("ul").css({
								    display:"block",
								})
								},function(){
								$(this).find("div").css({
									display:"none",
								})
								$("#subnav_ul li").find("ul").css({
									display:"none",
								})
							})
						}
					
					
					
					
				}
				//--------------success结束----
			});
//----------------------ajax结束------------------------
//----------------------3级导航ajax---------------------
			$.ajax({
				type:"get",
				url:"../data/nav2.json",
				async:true,
			    success:function(res){

			    	for(var i = 0 ; i < res.length;i++){
			    		
			    		$("#subnav_ul").find("li").find("ul").append(
			    			"<dl>" + "<dt id=" + i + ">" + res[i].name + "</dt>" + "</dl>"
			    		)
			    		$("#subnav_ul").find("li").find("ul").find("dl").attr("class" , "subnav_ul_dl")
			    		var newarr = res[i].list;
			    		for(var j = 0 ; j < newarr.length;j++){
			    			$("#subnav_ul").find("li").find("ul").find("dl").eq(i).append($("<dd>" + "<a href=" + " " + ">" +  newarr[j] + "</a>" +"</dd>"))
			    		}
			    	
			    	$("dl").css({
			    		position:"absolute",
			    	})
			    	
			    	
			    	}
			    	$("dl").eq(0).css({
			    		width:275,
			    		height:150,
			    		left:30,
			    		top:0
			    	})
			    	
			    	$("dl").eq(1).css({
			    		width:275,
			    		height:150,
			    		left:335,
			    		top:0
			    	})
			    	$("dl").eq(2).css({
			    		width:275,
			    		height:150,
			    		left:30,
			    		top:150
			    	})
			    	$("dl").eq(3).css({
			    		width:275,
			    		height:122,
			    		left:335,
			    		top:150
			    	})
			    	$("dl").eq(4).css({
			    		width:275,
			    		height:70,
			    		
			    		left:30,
			    		top:300
			    	})
			    	$("dl").eq(5).css({
			    		width:285,
			    		height:90,
			    		left:335,
			    		top:300
			    	})
			    	
			    },
			  
	//*---------------success结束----------------*/
		
			
			});
			
	//------------------三级导航的右边图片部分-------------		
	$.ajax({
		type:"get",
		url:"../data/subnavright.json",
		async:true,
		success:function(res){
		
			 $("#subnav_ul").find("li").find("ul").append("<ol>" + "</ol>");
			 for(var i = 0; i <　res.length; i++){
			 	$("#subnav_ul").find("li").find("ul").find("ol").append("<a href=" + "#"+">" +  "<img src="  + res[i].img + ">" +"</a>");
			 }
			 $("#subnav_ul").find("li").find("ul").find("ol").css({
			 	position:"absolute",
			 	position:"relative",
			 	width:285,
			 	height:399,
			 	left:643,
			 	top:0,
			 	backgroundColor:"#f6f6f6",
			 })
			 $("#subnav_ul").find("li").find("ul").attr("class", "subsubnav")
			 
			 
		}
	})
	//-----------------------三级导航的右边图片部分结束---------	
			
/*-------------------ajax轮播图-----------------------*/
 		  turn_pic.turn_pic()

//-----------------------特惠专场-------------
   		$.ajax({
   			type:"get",
			url:"../data/XinRenZhuanXiang.json",
			async:true,
			success:function(res){
			
				for(var i = 0; i < res.length;i++){
					$("#XinRenZhuanXiang_ul").append("<li>" + "<a href=" + " " + ">" +  "<img src=" + res[i].img + ">" + "</a>" + "</li>")
				}
				
			},
			
   		})
				
    })
//-------------------口碑爆款---------------------------------
			$.ajax({
				type:"get",
				url:"../data/Koubeibaokuan.json",
				async:true,
				success:function(res){
					
					for(var i = 0; i < res.length;i++){
						
						$("#Koubeibaokuan_ul").append("<li>" + "<i>" + "<img src=" + "../images/koubeibaokuan/xinrenzhuanxiang.png" + ">" +"</i>" +"<h3>"  +"</h3>" + "<a href=" + " "+ ">" +　"<img src=" + res[i].img + ">" + "</a>"+ "<h5>" + res[i].h5 + "</h5>" +  "<p>" + res[i].p +"</p>"  
						
						+ "<h6>" + "<img src=" + res[i].price + ">" + "</h6>" + "<h4 id=" + res[i].id +">"+ "<img src=" + "../images/koubeibaokuan/lijigoumai.jpg" +">" +  "</h4>" + "<div>" +"<span>" + "666666条评论" + "</span>" + "<h2>"+ "<img src=" + "../images/koubeibaokuan/star.png"+ ">" + "</h2>" + "<p>" + "网易考拉" + "</p>" + "</div>" + "</li>")
					}
					var count = 0;
					var oP = $("#Koubeibaokuan_ul").find("div").find("p");
					var aLis = $("#Koubeibaokuan_ul").find("li");
					var oDiv = $("#Koubeibaokuan_ul").find("div");
					
					var timer = setInterval(function(){
						oP.stop().animate({
							left:-10  * count 
						})
						
						count++
						if(count % 10  == 0){
							for(var i = 0 ; i < aLis.length; i++ ){
								oP.get(i).innerHTML += "网易考拉海购每一件商品都通过严苛的品质把关，保障正品，保障品质。特推出 “假一赔十” 的正品保障政策，杜绝一切假货，让您无忧购物。";
								aLis.eq(i).hover(function(){
									$(this).find("div").css("display", "block")
									$(this).find("h3").css("display", "block")
								},function(){
									$(this).find("div").css("display", "none")
									$(this).find("h3").css("display", "none")
								})
							}

						}
						
					},100)
					for(var i = 0 ; i < aLis.length; i++ ){
						var offsetX = 0;
						var offsetY = 0;
						
						aLis.eq(i).hover(function(ev){
							
							var e = ev || window.event;
							offsetX= $(this).offset().left;
							offsetY= $(this).offset().top;
							var _this = $(this);
							setTimeout(function(){
								_this.find("i").css({
							 	left:e.pageX - offsetX,
							 	top:e.pageY  -offsetY
							 })
								_this.find("i").css("display","block");
							
							},500)

						},function(){
							
							aLis.find("i").css("display","none");
						})
				    
						
					}
				
					
					
					
					
					shopping_car.shopping_car()	
					 
				}
/*success结束*/
				
			});
/*--------------99任选开始---------------------------*/
$.ajax({
				type:"get",
				url:"../data/99renxuan.json",
				async:true,
				success:function(res){
					
					for(var i = 0; i < res.length;i++){
						
						$("#optional_ul").append("<li>" + "<i>" + "<img src=" + "../images/koubeibaokuan/xinrenzhuanxiang.png" + ">" +"</i>" +"<h3>"  +"</h3>" + "<a href=" + " "+ ">" +　"<img src=" + res[i].img + ">" + "</a>"+ "<h5>" + res[i].h5 + "</h5>" +  "<p>" + res[i].p +"</p>"  
						
						+ "<h6>" + "<img src=" + res[i].price + ">" + "</h6>" + "<h4>"+ "<a href=" + "" +">" + "<img src=" + "../images/99renxuan/sc_car.png" +">" + "</a>" + "</h4>" + "<div>" +"<span>" + "666666条评论" + "</span>" + "<h2>"+ "<img src=" + "../images/koubeibaokuan/star.png"+ ">" + "</h2>" + "<p>" + "网易考拉" + "</p>" + "</div>" + "</li>")
					}
					var count = 0;
					var oP = $("#optional_ul").find("div").find("p");
					var aLis = $("#optional_ul").find("li");
					var oDiv = $("#optional_ul").find("div");
					var timer = setInterval(function(){
						oP.stop().animate({
							left:-10  * count 
						})
						
						count++
						if(count % 10  == 0){
							for(var i = 0 ; i < aLis.length; i++ ){
								oP.get(i).innerHTML += "网易考拉海购每一件商品都通过严苛的品质把关，保障正品，保障品质。特推出 “假一赔十” 的正品保障政策，杜绝一切假货，让您无忧购物。";
								aLis.eq(i).hover(function(){
									$(this).find("div").css("display", "block")
									$(this).find("h3").css("display", "block")
								},function(){
									$(this).find("div").css("display", "none")
									$(this).find("h3").css("display", "none")
								})
							}

						}
						
					},100)
					for(var i = 0 ; i < aLis.length; i++ ){
						var offsetX = 0;
						var offsetY = 0;
						
						aLis.eq(i).hover(function(ev){
							
							var e = ev || window.event;
							offsetX= $(this).offset().left;
							offsetY= $(this).offset().top;
							var _this = $(this);
							setTimeout(function(){
								_this.find("i").css({
							 	left:e.pageX - offsetX,
							 	top:e.pageY  -offsetY
							 })
								_this.find("i").css("display","block");
							
							},500)

						},function(){
							
							aLis.find("i").css("display","none");
						})
				    
						
					}
						
					 
				}
/*success结束*/
				
			});

//---------------------99包邮---------------------------
			$.ajax({
				type:"get",
				url:"../data/99baoyou.json",
				async:true,
				success:function(res){
					
					for(var i = 0; i < res.length;i++){
						
						$("#send_ul").append("<li>" + "<i>" + "<img src=" + "../images/koubeibaokuan/xinrenzhuanxiang.png" + ">" +"</i>" +"<h3>"  +"</h3>" + "<a href=" + " "+ ">" +　"<img src=" + res[i].img + ">" + "</a>"+ "<h5>" + res[i].h5 + "</h5>" +  "<p>" + res[i].p +"</p>"  
						
						+ "<h6>" + "<img src=" + res[i].price + ">" + "</h6>" + "<h4>"+ "<a href=" + "" +">" + "<img src=" + "../images/99renxuan/sc_car.png" +">" + "</a>" + "</h4>" + "<div>" +"<span>" + "666666条评论" + "</span>" + "<h2>"+ "<img src=" + "../images/koubeibaokuan/star.png"+ ">" + "</h2>" + "<p>" + "网易考拉" + "</p>" + "</div>" + "</li>")
					}
					var count = 0;
					var oP = $("#send_ul").find("div").find("p");
					var aLis = $("#send_ul").find("li");
					var oDiv = $("#send_ul").find("div");
					var timer = setInterval(function(){
						oP.stop().animate({
							left:-10  * count 
						})
						
						count++
						if(count % 10  == 0){
							for(var i = 0 ; i < aLis.length; i++ ){
								oP.get(i).innerHTML += "网易考拉海购每一件商品都通过严苛的品质把关，保障正品，保障品质。特推出 “假一赔十” 的正品保障政策，杜绝一切假货，让您无忧购物。";
								aLis.eq(i).hover(function(){
									$(this).find("div").css("display", "block")
									$(this).find("h3").css("display", "block")
								},function(){
									$(this).find("div").css("display", "none")
									$(this).find("h3").css("display", "none")
								})
							}

						}
						
					},100)
					for(var i = 0 ; i < aLis.length; i++ ){
						var offsetX = 0;
						var offsetY = 0;
						
						aLis.eq(i).hover(function(ev){
							
							var e = ev || window.event;
							offsetX= $(this).offset().left;
							offsetY= $(this).offset().top;
							var _this = $(this);
							setTimeout(function(){
								_this.find("i").css({
							 	left:e.pageX - offsetX,
							 	top:e.pageY  -offsetY
							 })
								_this.find("i").css("display","block");
							
							},500)

						},function(){
							
							aLis.find("i").css("display","none");
						})
				    
						
					}
						
					 
				}
/*success结束*/
				
			});
/*-----------------50元包邮----------------------*/
			$.ajax({
				type:"get",
				url:"../data/50baoyou.json",
				async:true,
				success:function(res){
					
					for(var i = 0; i < res.length;i++){
						
						$("#sender_ul").append("<li>" + "<i>" + "<img src=" + "../images/koubeibaokuan/xinrenzhuanxiang.png" + ">" +"</i>" +"<h3>"  +"</h3>" + "<a href=" + " "+ ">" +　"<img src=" + res[i].img + ">" + "</a>"+ "<h5>" + res[i].h5 + "</h5>" +  "<p>" + res[i].p +"</p>"  
						
						+ "<h6>" + "<img src=" + res[i].price + ">" + "</h6>" + "<h4>"+ "<a href=" + "" +">" + "<img src=" + "../images/99renxuan/sc_car.png" +">" + "</a>" + "</h4>" + "<div>" +"<span>" + "666666条评论" + "</span>" + "<h2>"+ "<img src=" + "../images/koubeibaokuan/star.png"+ ">" + "</h2>" + "<p>" + "网易考拉" + "</p>" + "</div>" + "</li>")
					}
					var count = 0;
					var oP = $("#sender_ul").find("div").find("p");
					var aLis = $("#sender_ul").find("li");
					var oDiv = $("#sender_ul").find("div");
					var timer = setInterval(function(){
						oP.stop().animate({
							left:-10  * count 
						})
						
						count++
						if(count % 10  == 0){
							for(var i = 0 ; i < aLis.length; i++ ){
								oP.get(i).innerHTML += "网易考拉海购每一件商品都通过严苛的品质把关，保障正品，保障品质。特推出 “假一赔十” 的正品保障政策，杜绝一切假货，让您无忧购物。";
								aLis.eq(i).hover(function(){
									$(this).find("div").css("display", "block")
									$(this).find("h3").css("display", "block")
								},function(){
									$(this).find("div").css("display", "none")
									$(this).find("h3").css("display", "none")
								})
							}

						}
						
					},100)
					for(var i = 0 ; i < aLis.length; i++ ){
						var offsetX = 0;
						var offsetY = 0;
						
						aLis.eq(i).hover(function(ev){
							
							var e = ev || window.event;
							offsetX= $(this).offset().left;
							offsetY= $(this).offset().top;
							var _this = $(this);
							setTimeout(function(){
								_this.find("i").css({
							 	left:e.pageX - offsetX,
							 	top:e.pageY  -offsetY
							 })
								_this.find("i").css("display","block");
							
							},500)

						},function(){
							
							aLis.find("i").css("display","none");
						})
				    
						
					}
						
					 
				}
/*success结束*/
				
			});
//-----------------------70包邮---------------------------
			$.ajax({
				type:"get",
				url:"../data/70baoyou.json",
				async:true,
				success:function(res){
					
					for(var i = 0; i < res.length;i++){
						
						$("#sender2_ul").append("<li>" + "<i>" + "<img src=" + "../images/koubeibaokuan/xinrenzhuanxiang.png" + ">" +"</i>" +"<h3>"  +"</h3>" + "<a href=" + " "+ ">" +　"<img src=" + res[i].img + ">" + "</a>"+ "<h5>" + res[i].h5 + "</h5>" +  "<p>" + res[i].p +"</p>"  
						
						+ "<h6>" + "<img src=" + res[i].price + ">" + "</h6>" + "<h4>"+ "<a href=" + "" +">" + "<img src=" + "../images/99renxuan/sc_car.png" +">" + "</a>" + "</h4>" + "<div>" +"<span>" + "666666条评论" + "</span>" + "<h2>"+ "<img src=" + "../images/koubeibaokuan/star.png"+ ">" + "</h2>" + "<p>" + "网易考拉" + "</p>" + "</div>" + "</li>")
					}
					var count = 0;
					var oP = $("#sender2_ul").find("div").find("p");
					var aLis = $("#sender2_ul").find("li");
					var oDiv = $("#sender2_ul").find("div");
					var timer = setInterval(function(){
						oP.stop().animate({
							left:-10  * count 
						})
						
						count++
						if(count % 10  == 0){
							for(var i = 0 ; i < aLis.length; i++ ){
								oP.get(i).innerHTML += "网易考拉海购每一件商品都通过严苛的品质把关，保障正品，保障品质。特推出 “假一赔十” 的正品保障政策，杜绝一切假货，让您无忧购物。";
								aLis.eq(i).hover(function(){
									$(this).find("div").css("display", "block")
									$(this).find("h3").css("display", "block")
								},function(){
									$(this).find("div").css("display", "none")
									$(this).find("h3").css("display", "none")
								})
							}

						}
						
					},100)
					for(var i = 0 ; i < aLis.length; i++ ){
						var offsetX = 0;
						var offsetY = 0;
						
						aLis.eq(i).hover(function(ev){
							
							var e = ev || window.event;
							offsetX= $(this).offset().left;
							offsetY= $(this).offset().top;
							var _this = $(this);
							setTimeout(function(){
								_this.find("i").css({
							 	left:e.pageX - offsetX,
							 	top:e.pageY  -offsetY
							 })
								_this.find("i").css("display","block");
							
							},500)

						},function(){
							
							aLis.find("i").css("display","none");
						})
				    
						
					}
						
					 
				}
/*success结束*/
				
			});
//----------------footer开始-------------------------
 	$("#seeus").find("dd").hover(function(){
 		$(this).find("#Code").css("display","block");
 	},function(){
 		$(this).find("#Code").css("display","none");
 	})
// ------------------购物车------------------------------	
	
	
	
		function center(node){
			node.css("top",($(window).height() - node.outerHeight()) /2 + $(window).scrollTop()) 
			node.css("left",($(window).width()- node.outerWidth()) + 30)
			if($(window).scrollTop() > ($(window).height() / 4)){
				node.css("display","block")
			}else{
				node.css("display","none");
			
			}
			
		}
		$(window).on("scroll resize",function(){
			center($("#shoppingcar"));
		
		})
		var oLis = $("#shoppingcar").find("ul").find("li")
			for(var i = 0; i < oLis.length; i++){
			    oLis.eq(i).hover(function(){
			    	$(this).css("backgroundColor", "#ab1b32")
			    },function(){
			    	$(this).css("backgroundColor", "#d6223f")
			    	oLis.eq(0).css("backgroundColor","#ab1b32")	
					oLis.eq(2).css("backgroundColor","#ab1b32")	
			    })
		}
		oLis.eq(0).css("backgroundColor","#ab1b32")	
		oLis.eq(2).css("backgroundColor","#ab1b32")	
		
		
	return{
		index:index,
	}
})
