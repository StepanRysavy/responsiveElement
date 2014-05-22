(function (e) {

	console.log ("responsiveElement loaded");

	e.fn.responsiveElement = function (t) {
	
		console.log("responsiveElement run");
	
		var i = e.extend({
				prefix: "",
				selector: "data-responsive_element",
				init: true,
				define: []
			}, t),
			s = 0;
			
		if (i.init === true) {
			for (s = 0; s < i.define.length; s++) {
				var n = i.define[s],
					r = n.breakpoints;
				e(n.select).attr(i.selector, r);
			}
			
			e(window).resize(onResize);
		}
		
		function onResize() {
			e("[" + i.selector + "]").each(function () {
				var t = e(this),
					n = t.attr(i.selector).split(","),
					r = t.width();
				if (n.length > 1) {
					for (s = 0; s < n.length; s++) {
						var l = n[s].split(":"),
							a = n.length - 1 === s ? null : n[s + 1].split(":"),
							o = {
								min: 0 === s ? 0 : Number(e.trim(l[1])),
								max: s === n.length - 1 ? 1e4 : Number(e.trim(a[1])) - 1,
								"class": i.prefix + e.trim(l[0])
							};
						r >= o.min && r <= o.max ? t.addClass(o.class) : t.removeClass(o.class)
					}
				}
			});
		}
		
		onResize();
		
	}
	
})(jQuery);