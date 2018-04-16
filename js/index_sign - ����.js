define(["jquery", "jquery-cookie"], function($){
	var index_sign = function(){
	     //-----注册---------
	    
	   
	    /*	  var oDiv = document.createElement("div");
	    	  oDiv.id = "sign"
	    	  var oUl = document.createElement("ul");
	    	  oUl.id = "sign_head";
	    	  $("#sign_head").append("<li>"+ "欢迎注册"+"</li>" + "<li>" + "<a href=" + "" + "已有账号?" +
	    	  ">"+""+ "</li>" + "<li>" + "<a href=" + "" + "去登陆" +
	    	  ">"+""+ "</li>")
	    	  var Omoblie_num = document.createElement("div");
	    	  Omoblie_num.id = "Omoblie_num";
	    	  $("#Omoblie_num").append("<img src=" + "../images/sign/mobile_num.png" + "alt="+ "" +"/>" + "<input type="+ "text" + "placeholder="+ "请输入手机号" + "/>")
	    	  var OPrompt = document.createElement("div");
	    	  OPrompt.id = "Prompt";
				
			  $("#sign").append($("#Omoblie_num"));
			  $("#sign").append($("#Omoblie_num"));*/
			
			
			
			
			
					
				   
				   	$("#moblie_num").find("input").click(function(){
				    	$("#Prompt").html(" ")
				     	$("#moblie_num").css("border","1px solid #4aafe9")
				     })
				     $("#moblie_num").find("input").blur(function(){
				     	var oValue = $("#moblie_num").find("input").get(0).value.replace(/ /ig ,"")
				     	$("#moblie_num").find("input").get(0).value = oValue;
				     	$("#moblie_num").css("border","1px solid #A9A9A9")
					    if(!oValue){
					     	$("#Prompt").html("手机号不能为空")
					    }else if(oValue){
					    	for(var i = 0; i <　oValue.length;i++){
					    		
					    		if(!(oValue.length == 11 && oValue[i] >= "0" && oValue[i] <= "9")){
					    			$("#Prompt").html("<img src=" + "../images/sign/fork.png" + ">" + "<span>"+ "手机号格式错误格式错误" + "<span>")
					    			$("#moblie_num").css("border","1px solid red")
					    		}else{
					    			$("#Prompt").html("格式正确")
					    		}
					    	}
					    }
					   

			   		})
		     
//----------------滑块-------------------	   

	var offsetX = 0;
	$("#slider").hover(function(){
				$("#slider_pic2").css("display","block")
				$("#slider_pic").css("display","block")
				
			},function(){
				$("#slider_pic2").css("display","none")
				$("#slider_pic").css("display","none")
				$("#Check_mark").css("display","none")
				$("#slider_move").css({
				left: 0,
				})
				
			})
	$("#slider_move").mousedown(function(ev){
		
		
		var e = ev || window.event;
		offsetX = e.pageX - $("#slider_move").offset().left ;
			$(document).mousemove(function(ev){
			var e = ev || window.event;
			$("#slider").find("span").animate({
				opacity:0
			},1000)
			
			$("#slider_move").css({
				left:e.pageX - offsetX   - 792  + "px"
			})
			$("#slider_pic2").css({
				left:e.pageX - offsetX   - 792  + "px"
			})
			
			
			if($("#slider_move").offset().left < 792){
				$("#slider_move").css({
				left: 0,
				})
				$("#slider_pic2").css({
				left: 12,
				})	
				
			}else if($("#slider_move").offset().left > 1018){
				$("#slider_move").css({
				left: 224,
				})
				$("#slider_pic2").css({
				left: 223,
				})
					
			}
			if($("#slider_pic2").offset().left > 1000){
				$("#Check_mark").css("display","block")
			}
			
			
			
		})
		$(document).mouseup(function(){
			$(document).off();
		})
		
	})
	$("#message").find("input").click(function(){
		$("#Prompt").html(" ")
			$("#message").css("border","1px solid #4aafe9")
    })
	 $("#message").find("input").blur(function(){
	 	 $("#message").css("border","1px solid #A9A9A9")
	 })
//-----------------------密码设置------------------------------	
	$("#passage").find("input").click(function(){
		$("#Prompt").html(" ")
			$("#passage").css("border","1px solid #4aafe9")
    })
		 $("#passage").find("input").blur(function(){
		    var oValue = $("#passage").find("input").get(0).value.replace(/ /ig ,"*")
			 	$("#passage").find("input").get(0).value = oValue;
			 	$("#passage").css("border","1px solid #A9A9A9")
			 	
			    if(!oValue){
			    $("#Prompt").html("密码不能为空")
				}else if(oValue){
			    for(var i = 0; i <　oValue.length;i++){
					    		
				if(!(oValue.length > 6 && oValue.length < 16)){
						$("#Prompt").html("<img src=" + "../images/sign/fork.png" + ">" + "<span>"+ "密码必须由6-16位数字组成,且区分大小写" + "<span>")
						$("#passage").css("border","1px solid red")	 
				}
			}
		}
				
		    	
	})
		 var check = false;   
		$("#checked").find("li").eq(0).click(function(){
			if(check == false){
				$("#checked").find("li").eq(0).find("img").css("display","block")
				check = true;
			}else if(check == true){
				$("#checked").find("li").eq(0).find("img").css("display","none")
				check = false;
			}
			
		})	     			    
	     
	     
	    
	     
	     
	 
	     
	}
	return{
		index_sign:index_sign
	}
})
