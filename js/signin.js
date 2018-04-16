define(["jquery", "jquery-cookie"],function($){
	var signin = function(){
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
	    	
	 return{
	 	signin:signin
	 }
})
