// A同学  写了拖拽
define(["range"], function(range){
	function drag(node){
		var disX = 0;
		var disY = 0;
		node.onmousedown = function(ev){
			var e = ev || window.event;
			disX = e.clientX - node.offsetLeft;
			disY = e.clientY - node.offsetTop;
			document.onmousemove = function(ev){
				var e = ev || window.event;
				/*node.style.left = e.clientX - disX + "px";
				node.style.top = e.clientY - disY + "px";*/

				var L = range.range(e.clientX - disX, document.documentElement.clientWidth - node.offsetWidth, 0);
				var T = range.range(e.clientY - disY, document.documentElement.clientHeight - node.offsetHeight, 0);

				node.style.left = L + "px";
				node.style.top = T + "px";
			}
			document.onmouseup = function(){
				document.onmousemove = null;
			}
		}
	}

	return {
		drag: drag
	}

})
  
   define(["range"],function(range){
   	 function drag(node){
   		var disX = 0;
   		var disY = 0;
   		node.onmousedown = function(ev){
   			var e = ev ||  window.event;
   			disX  = e.clientX -  node.offsetLeft;
   			disY = e.clientY - node.offsetTop;
   			
   			document.onmousemove = function(ev){
   		      	var e = ev ||  window.event;
   		    	var T = range.range(e.clientX - disX , document.documentElement.clientWidth - e.clientX - disX , 0)
   		    	var H = range.range(e.clientY - disY , document.documentElement.clientWidth - e.clientX - disX , 0)
   		
   				node.style.left = T + "px";
   				node.style.height = H + "px";
   			}
   			
   			
   			
   			document.onmouseup = function(){
   				document.onmousemove = null;
   			}

   		}
   }

   })
  