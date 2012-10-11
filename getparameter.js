// Thanks to Anatoly Mironov
// http://sharepointkunskap.wordpress.com/2012/01/11/get-url-parameters-with-javascript/

if (!window.location.getParameter ) {
	window.location.getParameter = function(key) {
	function parseParams() {
		var params = {},
			e,
			a = /\+/g,  // Replace plus signs in URL with spaces
			r = /([^&=]+)=?([^&]*)/g,
			d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
			q = window.location.search.substring(1);

		while (e = r.exec(q))
			params[d(e[1])] = d(e[2]);

		return params;
	}

	if (!this.queryStringParams)
		this.queryStringParams = parseParams(); 

	return this.queryStringParams[key];
  };
}
