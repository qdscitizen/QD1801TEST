define(["jquery", "jquery-cookie"], function($){
	var index_Settlement = function(){
	   //-----------------地区选项---------------------
		$.ajax({
			type:"get",
			url:"../data/provice.json",
			async:true,
			success:function(res){
				for(var i = 0 ; i < res.length;i++){
					
					for(var j = 0 ; j < res[0].list.length;j++){
						$("#province_city").find("p").eq(0).append("<dd>" +  res[0].list[j] +  "</dd>")

					}
					
				}
				
				$("#province_city").find("p").eq(0).find("dd").on("mousedown",function(){
					$("#province_city").find("p").eq(0).find("dd").css("backgroundColor","white");
					$("#province_city").find("p").eq(0).find("dd").css("color","black");
					$(this).css({
							backgroundColor:"#d41c44",
							color:"white"
					})
					$("#province_city_option").find("a").attr("class","")
					$("#province_city_option").find("a").eq(1).attr("class","actively")
					$("#province_city").find("p").css("display","none")
					$("#province_city").find("p").eq(1).css("display","block")
					$("#province").html($(this).html());
				})
				
				
			}
		})

		$.ajax({
					type:"get",
					url:"../data/city.json",
					async:true,
					success:function(res){
						for(var i = 0 ; i < res.length;i++){
							
							for(var j = 0 ; j < res[0].list.length;j++){
								$("#province_city").find("p").eq(1).append("<dd>" +  res[0].list[j] + "</dd>")
		
							}
		
						}
						$("#province_city").find("p").eq(1).find("dd").on("mousedown",function(){
						$("#province_city").find("p").eq(1).find("dd").css("box-shadow","none");
						$("#city").html($(this).html())
						$(this).css({
								boxShadow:"0px 0px 0 1px #d41c44",
								
						})
						
						$("#province_city_option").find("a").attr("class","")
						$("#province_city_option").find("a").eq(2).attr("class","actively")
						$("#province_city").find("p").css("display","none")
						$("#province_city").find("p").eq(2).css("display","block")
						$("#city").html($(this).html())
						})
					}
				})
			$.ajax({
					type:"get",
					url:"../data/district.json",
					async:true,
					success:function(res){
						for(var i = 0 ; i < res.length;i++){
							
							for(var j = 0 ; j < res[0].list.length;j++){
								$("#province_city").find("p").eq(2).append("<dd>" + res[0].list[j] +  "</dd>")
		
							}
		
						}
						$("#province_city").find("p").eq(2).find("dd").on("mousedown",function(){
						$("#province_city").find("p").eq(2).find("dd").css("box-shadow","none");

						$(this).css({
								boxShadow:"0px 0px 0 1px #d41c44",
								
						})
						$("#district").html($(this).html());
						})
					}
				})
		var aLis = 	$("#province_city_option").find("a");
		for(var i = 0 ; i < aLis.length;i++){
			aLis.eq(i).on("click",function(){
				aLis.attr("class","")
				$(this).attr("class","actively");
				
				$("#province_city").find("p").css({
					
					display:"none"
					
				})
				$("#province_city").find("p").eq($(this).index()).css({
					display:"block"
					
				})
				
			})
		}
			var open = false;	
		
			$("#sc_num").find("li").eq(7).on("click",function(){
			 	if(open == false){
			 		$("#province_city_option").find("a").css("display","block");
					$("#province_city").css("display","block");
					open = true;
			 	}else if(open == true){
			 	
			 			$("#province_city_option").find("a").css("display","none");
						$("#province_city").css("display","none");
			 	
			 			
						open = false;
							
			 	}
			
				
			})
		}
//--------------------------购物车---------------------------------------------
	
	
			sc_car();	
			
			
		
	
	

	   	function sc_car(){
			var newCookie = $.cookie("goods");
			if(newCookie){
			 	var sum = 0;
				var newarr = eval(newCookie);
			
				for(var i in newarr ){
					sum += newarr [i].num ;
				}
				$(".sc_num").html(sum);
			}
		}
	  /*  ----------------------------------sc_car结束*/
	 
	 function msg(){
	 	$.ajax({
	 		url: "../data/Koubeibaokuan.json",
			type: "get",
	 		success:function(res){
	 			var newCookie = $.cookie("goods")
	 			var newarr = eval(newCookie);
	 			var html = ""
	 			for(var i in newarr){
	 			html += '<li><div class ="good_choice"><img src="../images/settmental/right.png" alt=""></div><div class="sc_goodsPic"><img src="'+res[newarr[i].id].img+'" alt=""></div><div class="sc_goodsTitle"><ol>666.00</ol><p><a href=>'+res[newarr[i].id].h5+'</a></p><h4>27.00</h4><h5>27</h5><ul><h2><img src="../images/baby_right/Minus.png" alt=""></h2><dl>0</dl><h3><img src="../images/baby_right/Plus .png" alt=""></h3><dd>删除</dd><dt>移入我的收藏</dt></ul></div></li>';
	 				
	 			}
				$(".production").html(html);
				$(".sc_goodsTitle").css({
					position:"relative",
					zIndex:1
				})
				$(".sc_goodsTitle").find("p").css({
					position:"absolute",
					left:100,
					top:-100,
					zIndex:999
				})
				$(".sc_goodsTitle").find("h4").css({
					position:"absolute",
					left:640,
					top:-100
				})
				$(".sc_goodsTitle").find("h5").css({
					position:"absolute",
					left:640,
					top:-80
				})
				$(".sc_goodsTitle").find("h2").find("img").css({
					position:"absolute",
					width:24,
					height:24,
					left:0,
					top:0,
					cursor:"pointer"
				})
				$(".sc_goodsTitle").find("h3").find("img").css({
					position:"absolute",
					width:24,
					height:24,					
					left:50,
					top:0,
					cursor:"pointer"
				})
				$(".sc_goodsTitle").find("dl").css({
					position:"absolute",
					width:24,
					height:24,					
					left:33,
					top:3,
					color:"black"
				})
				
				
				$(".sc_goodsTitle").find("ul").css({
					position:"absolute",
					position:"relative",
					width:75,
					border:"1px solid #eaeaea",
					height:24,					
					left:780,
					top:-100,
					zIndex:1
				})
				$(".sc_goodsTitle").find("ol").css({
					position:"absolute",
					left:980,
					top:-95,
					fontWeight:800,
					zIndex:1
				})
				
				$(".sc_goodsTitle").find("dd").css({
					width:30,
					position:"absolute",
					left:335,
					top:4,
					fontWeight:800,
					zIndex:999,
					cursor:"pointer",
					fontWeight:100,
					zIndex:1
				})
				$(".sc_goodsTitle").find("dt").css({
					width:80,
					position:"absolute",
					left:335,
					top:30,
					fontWeight:800,
					zIndex:999,
					cursor:"pointer",
					fontWeight:100,
					zIndex:1
				})
				
				$(".good_choice").css({
					width:14,
					height:14,
					border:"1px solid #A9A9A9",
					position:"relative",
					top:60,
					left:-20,
					
				})
				$(".good_choice").find("img").css({
					width:14,
					height:14,
					
				})
				
				
					
				
				var iCount = 0;	
/*			-----------结算-------------	
*/				for(var i = 0 ; i < $(".production").find("li").length;i++){
			
				$(".production").find("li").eq(i).find(".good_choice").click(function(){
						price += 666;
						$(".good_choice").eq($(this).parents("li").index()).find("img").toggle()
						$("#footer_ul").find("li").eq(8).html(price);
				})
				
					$(".production").find("li").eq(i).find("ul").find("h3").click(function(){
						$(".production").find("li").eq($(this).parents("li").index()).find("ul").find("dl").html(iCount);
						iCount++;
					})
					$(".production").find("li").eq(i).find("ul").find("h2").click(function(){
						$(".production").find("li").eq($(this).parents("li").index()).find("ul").find("dl").html(iCount);
						iCount--;
						if(iCount <= 0){
							iCount = 0;
						}
						
					
					})
					
						
						
					
					
				}
				
		
				
				
				
	 		}
	 	})
	 }
	 
	 msg();
//--------------------------购物车结束------------------------------------------
	
//--------------------------全选----------------------------------------
     
     var close = false;
     var price = 0;
     $("#footer_ul").find("li").eq(0).click(function(){
     	if(close == false){
     	$("#footer_ul").find("li").eq(0).find("img").css("display","block");
     	$("#choice").find("li").eq(0).find("img").css("display","block");
     	$("#choice_next").find("li").eq(0).find("img").css("display","block");
     	$(".good_choice").find("img").css("display","block");
     	
     	close = true;
        }else if(close == true){
   	  	$("#choice").find("li").eq(0).find("img").css("display","none")
     	$("#choice_next").find("li").eq(0).find("img").css("display","none")
     	$(".good_choice").find("img").css("display","none");
     	$("#footer_ul").find("li").eq(0).find("img").css("display","none");
     	close = false;
     }
     })
     $("#choice").find("li").eq(0).click(function(){
     if(close == false){
     	$("#choice").find("li").eq(0).find("img").css("display","block")
     	$("#choice_next").find("li").eq(0).find("img").css("display","block")
     	$(".good_choice").find("img").css("display","block");
     	
     	close = true;
     }else if(close == true){
     	$("#choice").find("li").eq(0).find("img").css("display","none")
     	$("#choice_next").find("li").eq(0).find("img").css("display","none")
     	$(".good_choice").find("img").css("display","none");
     	
     	close = false;
     }
     })
     var closing = false;
     $("#choice_next").find("li").eq(0).click(function(){
     if(closing == false){
     	$("#choice").find("li").eq(0).find("img").css("display","block")
     	$("#choice_next").find("li").eq(0).find("img").css("display","block")
     	$(".good_choice").find("img").css("display","block");
     	closing = true;
     }else if(closing == true){
     	$("#choice").find("li").eq(0).find("img").css("display","none")
     	$("#choice_next").find("li").eq(0).find("img").css("display","none")
     	$(".good_choice").find("img").css("display","none");
     	closing = false;
     }
     })
     
    
	return{
		index_Settlement:index_Settlement
	}
})
