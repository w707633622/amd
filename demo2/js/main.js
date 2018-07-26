console.log(123);
/*需求:
1.点击按钮显示div1
2.拖动黄色div,红色div变大变小
3.拖动粉色div*/

/*配置路径*/
require.config({
	path:{
		"drag": "drag.js"
	}
})

/*使用对象*/


define(function(){
	function main(){
		var btn = document.getElementById("input1");
		var div1 = document.getElementById("div1");
		var div2 = document.getElementById("div2");
		var div3 = document.getElementById("div3");

		btn.onclick = function(){
			div1.style.display = "block";
		}
		require(["drag"],function(drag){
			drag.drag(div3);
		})
	}
	return {
		main: main
	};
})