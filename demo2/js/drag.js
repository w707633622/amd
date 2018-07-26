/*AMD规范*/
/*引入了限制模块rang*/
define(["rang"], function(rang){
	var drag = function(elem){
		var disX = 0;
		var disY = 0;
		elem.onmousedown = function(ev){
			var e = ev || window.event;
			disX = e.pageX - this.offsetLeft;
			disY = e.pageY - this.offsetTop;

			document.onmousemove = function(ev){
				var e = ev || window.event;
				var maxWidth = document.documentElement.clientWidth - elem.offsetWidth;
				var maxHeight = document.documentElement.clientHeight - elem.offsetHeight;
				var l = rang.rang(e.pageX - disX, maxWidth, 0);
				var t = rang.rang(e.pageY - disY, maxHeight, 0);
				this.style.left = l + 'px';
				this.style.top = t + 'px';
			}.bind(elem)
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
	}
	return {
		drag: drag
	};
})