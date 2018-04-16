define(["jquery", "jquery-cookie"],function($){
	var Specialbenefit = function(){
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

	}
	return{
	  	Specialbenefit:Specialbenefit
	}
})