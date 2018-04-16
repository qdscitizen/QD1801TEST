define(["jquery", "jquery-cookie"],function($){
	var shopping_car = function(){
  		$.ajax({
  			type:"get",
  			url:"../data/Koubeibaokuan.json",
  			async:true,
  			success:function(res){
  			for(var i = 0; i < res.length; i++){
  			  
  			  $("#Koubeibaokuan_ul").find("h4").eq(i).on("click",function(){
			  $("#ball").html($(this).parent().find("img").clone(true))
			  
			
			//抛物线运动
			ballMove(this);

			// alert(this.id);
			//是否是第一次添加cookie
			var id = this.id;
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				//第一次添加  [{id:id,num:2}]
				$.cookie("goods", '[{id:' + id + ',num:1}]', {
					expires: 7
				});
			}else{
				var str = $.cookie("goods");
				var arr = eval(str);
				var same = false; //代表是否有相同商品

				//遍历所有的对象，判断是否id相同，num++
				for(var i in arr){
					if(arr[i].id == id){
						arr[i].num = arr[i].num + 1;
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr,  {
							expires: 7
						});
						same = true;
						break;
					}
				}

				//没有相同的商品
				if(!same){
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr, {
						expires: 7
					});
				}
				
			}

			


			return false;
		})

  				
  			}
  			
		function ballMove(node){
			//抛物线运动
			$("#ball").css({
				display: "block",
				left: $(node).offset().left,
				top: $(node).offset().top
			})
			
			var offsetX = $("#sc_pic").offset().left - $("#ball").offset().left;
			var offsetY = $("#sc_pic").offset().top - $("#ball").offset().top;

			//【注】配置参数的
			var bool = new Parabola({
				el: "#ball",
				targetEl: null,
				offset: [offsetX, offsetY],
				curvature: 0.0005,
				duration: 400,
				callback: function(){
					$("#ball").css("display", "none")
				}
				
			})

			bool.start();
		}	
  			}
  		});
		
		
		//给购物车按钮添加事件
		//页面控件非常多，非常容易叠加，很容易造成事件冒泡
		 

	}
	return{
		shopping_car:shopping_car
	}
	
})
