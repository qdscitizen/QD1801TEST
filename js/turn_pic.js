define(["jquery", "jquery-cookie"],function($){
	var turn_pic = function(){

	   $.ajax({
				type:"get",
				url:"../data/turn-pic.json",
				async:true,
				success:function(res){

				     for(var i = 0 ; i < res.length;i++){
				     $("#turn_pic_ul").append("<li>" + "</li>");
				     
				     var oImg = document.createElement("img");
				     $("#turn_pic_ul").find("li").css({
				     	width:1920,
				     	height:400,
				     })
				     
					 oImg.src = res[i].img;
				     $("#turn_pic_ul").find("li").eq(i).append(oImg);	
				   
				   } 
				   	 
				   
				   	var count = 0;
		     		$("#option").click(function(){
		     			Picturemove(count)
		     			count++;
		     			
		     		})
		     		$("#optionleft").click(function(){
		     			
		     			Picturemove(count)
		     			count--;
		     			
		     		})
		     		
		     		
		     		for(var j = 0 ; j < $("#turn_pic_ol").find("li").length;j++){
		     			
		     			$("#turn_pic_ol").find("li").eq(j).hover(function(){
		     				Picturemove(count)
		     				count++;
		     				},function(){
		     			    $("#turn_pic_ol").find("li").but(".fuck").css("backgroundColor","white")
		     			})
		     			
		     		}
		     	
		     		
		     		
		     		
					function Picturemove(index){
					var aLis = $("#turn_pic_ul").find("li");
		     		for(var i = 0; i < aLis.length; i++){
		     		$("#turn_pic_ul").find("li").eq(i).attr("class","");
		     		$("#turn_pic_ol").find("li").eq(i).attr("class","");
		     		    $("#turn_pic_ul").find("li").eq(i).animate({
		     		    	opacity:0,
		     		    },300)
		     		    $("#turn_pic_ul").find("li").eq(i).css("zIndex","0");
		     		
		     		}
		     		 	$("#turn_pic_ul").find("li").eq(index % 3).attr("class","active");
		     		 	$("#turn_pic_ol").find("li").eq(index % 3).attr("class","fuck"); 
		     			 $("#turn_pic_ul").find(".active").animate({
		     		 	opacity:1,
		     		 	
		     		 	},300)
					 	$("#turn_pic_ul").find(".active").css("zIndex","222");
					 	
					
					 	for(var j = 0 ; j < $("#turn_pic_ol").find("li").length;j++){
					 		$("#turn_pic_ol").find("li").css("background-color","");	
					 	}
					 
					 	
					 	$("#turn_pic_ol").find("li").css("background-color","white");
					 	$("#turn_pic_ol").find(".fuck").css("background-color","red");	

					}
					
					
				}
				
	
				 
			});
			
				
		}
	return{
		turn_pic:turn_pic
	}
})