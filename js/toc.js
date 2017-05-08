window.onload = function() {

	function lv(a, b, c) {
		var d = a - b;
		for (e = 0; e < d; e++) {
			o += c;
		};
		return o;
	}

	var ec = document.getElementsByClassName('entry-content')[0],
		h = ec.querySelectorAll('h1, h2, h3, h4, h5, h6'),
		o = '<ol>\n',
		nav = document.createElement('nav');

	nav.className = 'toc';
	ec.insertBefore(nav, ec.firstChild);

	for (i = 0; i < h.length; i++) {
		h[i].id = 'anc' + ('0' + (i + 1)).slice(-2);

		var now = h[i].tagName[1];

		if(i - 1 < 0) {
			var prev = h[i].tagName[1];
		} else {
			var prev = h[i - 1].tagName[1];
		}

		if (now > prev) {
			lv(now, prev, '<ol>\n')
		} else if (now < prev) {
			lv(prev, now, '</ol>\n')
		}
		o += '<li><a href="#' + h[i].id + '">' + h[i].innerHTML + "</a></li>\n";
	}

	o += '</ol>\n';
	nav.innerHTML = o;

}