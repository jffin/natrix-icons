/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'natrix-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'natrix-icon-json-file': '&#xe904;',
		'natrix-icon-exe-file': '&#xe906;',
		'natrix-icon-applicationxperl_103626': '&#xe907;',
		'natrix-icon-node-dot-js': '&#xe905;',
		'natrix-icon-folder': '&#xe90b;',
		'natrix-icon-batman': '&#xe900;',
		'natrix-icon-file-css': '&#xe901;',
		'natrix-icon-document-file-php': '&#xe902;',
		'natrix-icon-file-archive-o': '&#xe903;',
		'natrix-icon-file-zip-o': '&#xe903;',
		'natrix-icon-image': '&#xe90d;',
		'natrix-icon-file-text2': '&#xe926;',
		'natrix-icon-database': '&#xe964;',
		'natrix-icon-wrench': '&#xe991;',
		'natrix-icon-cogs': '&#xe995;',
		'natrix-icon-windows': '&#xeac1;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/natrix-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
