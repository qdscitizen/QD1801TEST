define(["jquery", "jquery-cookie"], function($){
	var index_baby = function(){
		$(function(){
		 $.ajax({
	    	type:"get",
	    	url:"../data/nav1.json",
	    	async:true,
	    	success:function(res){
	    		
	    		
	    		
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
			
		
			})
	}
	//----------多余类目----------   
		for(var i = 0 ; i < $("#extro_ul").find("li").length;i++){
			$("#extro_ul").find("li").eq(i).hover(function(){
			$(this).find("#arrow").css({
				transform:"rotateZ(180deg)",
				transition:"0.5s"
			})
		},function(){
				$(this).find("#arrow").css({
				transform:"rotateZ(0deg)",
				transition:"0.5s"
			})
		})
		}
		$("#extro_ul").find("li").eq(2).mouseover(function(){
			$("#extro_list1").css("display","block");
			$("#extro_ul").find("li").eq(2).css("border-bottom","1px solid white")
		})
		$("#extro_list1").mouseover(function(){
			$("#extro_list1").css("display","block");
			$("#extro_ul").find("li").eq(2).css("border-bottom","1px solid white")
		})
		$("#extro_list1").mouseout(function(){
			$("#extro_list1").css("display","none");
			$("#extro_ul").find("li").eq(2).css("border-bottom","1px solid #A9A9A9")
		})
		$("#extro_ul").find("li").eq(2).mouseout(function(){
			$("#extro_list1").css("display","none");
			$("#extro_ul").find("li").eq(2).css("border-bottom","1px solid #A9A9A9")
		})
		//----------------------------------------------
		$("#extro_ul").find("li").eq(4).mouseover(function(){
			$("#extro_list2").css("display","block");
			$("#extro_ul").find("li").eq(4).css("border-bottom","1px solid white")
		})
		$("#extro_list2").mouseover(function(){
			$("#extro_list2").css("display","block");
			$("#extro_ul").find("li").eq(4).css("border-bottom","1px solid white")
		})
		$("#extro_list2").mouseout(function(){
			$("#extro_list2").css("display","none");
			$("#extro_ul").find("li").eq(4).css("border-bottom","1px solid #A9A9A9")
		})
		$("#extro_ul").find("li").eq(4).mouseout(function(){
			$("#extro_list2").css("display","none");
			$("#extro_ul").find("li").eq(4).css("border-bottom","1px solid #A9A9A9")
		})
		
		
		
		$.ajax({
			type:"get",
			url:"../data/extro.json",
			async:true,
			success:function(res){
				for(var i = 0 ; i < res.length;i++){
					for(var j = 0; j < res[0].list.length;j++){
						$("#extro_list1").append("<dd>" + "<a href=" +"" +">"+res[0].list[j] +"</a>"+ "</dd>")
						$("#extro_list1").find("dd").eq(j).css({
							width:120,
							lineHeight:"26px"
						})
						$("#extro_list1").find("dd").eq(j).css({
							"display":"inline-block",
							textAlign : "center"
						})
						$("#extro_list1").find("dd").eq(j).hover(function(){
							$(this).find("a").css("color","red");
						},function(){
							$(this).find("a").css("color","black");
						})
  						//------------------extro2------------------------
  						$("#extro_list2").append("<dd>" + "<a href=" +"" +">"+res[0].list[j] +"</a>"+ "</dd>")
						$("#extro_list2").find("dd").eq(j).css({
							width:120,
							lineHeight:"26px"
						})
						$("#extro_list2").find("dd").eq(j).css({
							"display":"inline-block",
							textAlign : "center"
						})
						$("#extro_list2").find("dd").eq(j).hover(function(){
							$(this).find("a").css("color","red");
						},function(){
							$(this).find("a").css("color","black");
						})
					}
				}


			}
//---------success-----------
		})
/*-------------图像放大------------*/
	
	var oS_box=document.getElementById('s_box');
		var oS_position=oS_box.children[2];
		var oS_mark=oS_box.children[0];
		var oB_box=document.getElementById('b_box');
		var oB_box_all=document.getElementById('b_box_all')
		oS_mark.onmouseover=function(){
			oS_position.style.display='block';
			oB_box.style.display='block';

		}
		oS_mark.onmouseout=function(){
			oS_position.style.display='none';
			oB_box.style.display='none';
		}

		oS_mark.onmousemove=function(event){
			var evt=event||window.event;

			var left=evt.offsetX-oS_position.offsetWidth/2;
			//console.log(left)
			
			if(left<0){
				left=0;
			}else if(left>oS_box.offsetWidth-oS_position.offsetWidth){
				left=oS_box.offsetWidth-oS_position.offsetWidth
			}
			//console.log(left)
			oS_position.style.left=left+'px';


			var top=evt.offsetY-oS_position.offsetHeight/2;
			if(top<0){
				top=0;
			}else if(top>oS_box.offsetHeight-oS_position.offsetHeight){
				top=oS_box.offsetHeight-oS_position.offsetHeight
			}
			//console.log(top)
			oS_position.style.top=top+'px';

			//移动的比例  把X值和Y值换算成比例;

			var proportionX=left/(oS_box.offsetWidth-oS_position.offsetWidth);
			var proportionY=top/(oS_box.offsetHeight-oS_position.offsetHeight);

			console.log(proportionX+':'+proportionY)

			//利用比例去算出大小不同的元素的偏移距离；

			oB_box_all.style.left=-proportionX*(oB_box_all.offsetWidth-oB_box.offsetWidth)+'px';

			oB_box_all.style.top=-proportionY*(oB_box_all.offsetHeight-oB_box.offsetHeight)+'px';
		}
	//------------------详情图转换--------------------
	   var oBtn = $("#b_box_turn").find("li").find("div");
	   var oPic = $("#s_box").find("img");
	   var oBpic = $("#b_box_all").find("img");
	  
	   		for(var i = 0 ; i < oBtn.length;i++){
	   			oBtn.eq(i).on("click",function(){
	   				for(var j = 0 ; j < oPic.length;j++){
	   					oPic.eq(j).css("display","none")
	   					oBpic.eq(j).css("display","none")
	   					
	   				}
	   				oPic.eq($(this).index()).css("display","block")
	   				oBpic.eq($(this).index()).css("display","block")
	
	   			})
	   			
	   		}
	//---------------宝贝详情图右边部分------------------
	$("#tax").find("li").eq(2).mouseover(function(){
			$("#count").css("display","block");
			$("#tax").find("li").eq(2).css("border-bottom","1px solid white")
		})
		$("#count").mouseover(function(){
			$("#count").css("display","block");
			$("#tax").find("li").eq(2).css("border-bottom","1px solid white")
		})
		$("#count").mouseout(function(){
			$("#count").css("display","none");
			
		})
		$("#tax").find("li").eq(2).mouseout(function(){
			$("#count").css("display","none");
			
		})
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
		
			$("#area").find("li").eq(2).on("click",function(){
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
		//--------------地区的显示---------------	

			 	
			
		//-------------购买数量---------------
			var iCount = 0;
			$("#num").find("ol").find("div").eq(2).click(function(){
				
				iCount++
				$("#num").find("ol").find("div").eq(1).html(iCount)
			})
		
			$("#num").find("ol").find("div").eq(0).click(function(){
				
				iCount--
				$("#num").find("ol").find("div").eq(1).html(iCount)
				if(iCount < 0){
				iCount = 0;
			}
			})
	
			$("#buy").find("li").eq(0).hover(function(){
				$("#buy_white").css("display","block")
			},function(){
				$("#buy_white").css("display","none")
			})
//----------------宝贝展示-----------------------	
		
	$.ajax({
		type:"get",
	    url:"../data/product.json",
		async:true,
		success:function(res){
			for(var i = 0; i <res.length;i++){
				$("#product").append("<li>" +  "<a href=" + "" + ">"+ "<img src=" + res[i].img + ">" +"<p>" + res[i].p + "</p>" + "<span>" + res[i].price + "</span>" + "<span>" + 260 + "</span>"+ "</a>" +"<p>" +"9913人已评价" +"</p>" + "</li>")
				$("#product").find("a").css("color","black")
				$("#seeagain").append("<li>" +  "<a href=" + "" + ">"+ "<img src=" + res[i].img + ">" +"<p>" + res[i].p + "</p>" + "<span>" + res[i].price + "</span>" + "<span>" + 260 + "</span>"+ "</a>" +"<p>" +"9913人已评价" +"</p>" + "</li>")

			}
		}
	})
	//-------------------商品详情/用户评价--------------------	
	  

				$("#baby_detail").find("a").eq(1).on("click",function(){
	  	 		
	  	 		$("#baby_detail").find("div").css("display","none");
	  	 		$("#user_comment").css("display","block");
	  	 		$("#baby_detail").find("a").attr("class","")
	  			$("#baby_detail").find("a").eq(1).attr("class","move")
	  			$("#baby_detail").find("a").eq(0).css("color","black")
	  	 		
	 		 })
			
				$("#baby_detail").find("a").eq(0).on("click",function(){
	  	 		
	  	 		$("#baby_detail").find("div").css("display","none");
	  			$("#baby_detail").find("a").attr("class","")
	  			$("#baby_detail").find("a").eq(0).attr("class","move")
	  	 		$("#product_detail").css("display","block");
	  	 		$("#baby_detail").find("a").eq(1).css("color","black")
	 		})
		//--------------------FAQ--------------------
			var openning =false;
			for(var i = 0; i <　$("#FAQ").find("li").length; i++){
				
					$("#FAQ").find("li").eq(i).click(function(){
						
						if(openning == false){
							$(this).find("img").css({
								transform:"rotateZ(180deg)",
							})	
							$("#FAQ").find("span").eq($(this).index() - 5).css("display","block")
							openning =true;
						}else{
							$(this).find("img").css({
								transform:"rotateZ(0deg)",
							})	
							$("#FAQ").find("span").eq($(this).index() - 5).css("display","none")
							openning =false;
						}
							
					})

			}
	//----------------footer开始-------------------------
 	$("#seeus").find("dd").hover(function(){
 		$(this).find("#Code").css("display","block");
 	},function(){
 		$(this).find("#Code").css("display","none");
 	})	
			
		
		
		
	    return{
			index_baby:index_baby
		}
	})
