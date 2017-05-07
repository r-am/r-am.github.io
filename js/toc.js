$(function() {
	o = '\n<ol>';
	h = $('h1, h2, h3, h4, h5, h6', '.entry-content');

	h.first().before('<nav class="toc js-toc"></nav>');

	function lv(x, y, ol) {
		num = x.replace(/h/i,'') - y.replace(/h/i,'');
		for(j=0; j < num; j++) {
			o += '\n' + ol;
		};
		return o;
	}

	h.each(function(i) {
		this.id = 'anc' + ('0' + (i + 1)).slice(-2);

		now = $(this).get(0).tagName;
		prev = h.eq( i - 1 ).get(0).tagName;

		if(i == 0 || now > prev) {
			lv(now, prev, '<ol>');
		} else if(now < prev) {
			lv(prev, now, '</ol>');
		}
		o += '\n<li><a href="#' + this.id + '">' + this.innerHTML + '</a></li>';
	});
	o += '\n</ol>';

	$('.js-toc').html(o);
});