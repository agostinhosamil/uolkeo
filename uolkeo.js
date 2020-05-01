(function(w,d){

	// uolkeo 2.0

	var a, _a, A, b, c, _c, __c, d = d, D, e, E, f, F, g, h, i, j, k, l, L, m, n, o, p, q, r, s, t, u, v, w, x, y, z

	, $$addEvent
	, $$core_html

	,_ukeConfigVariables = (function(){ // An object containing whole the uolkeo configuration variables
		return (!(typeof undefined === typeof _uolkeoConfigVariables) && (_uolkeoConfigVariables instanceof Object)) ? _uolkeoConfigVariables : new Object;
	}()),
	_ukeGeneralStyles = (function(){ // An array containg whole the uolkeo style to be applied 4the images
		return (!(typeof undefined === typeof _uolkeoGeneralStyles) && (_uolkeoGeneralStyles instanceof Object)) ? _uolkeoGeneralStyles : new Array;
	}()),
	_ukeScutsStrg = (function(){
		return (!(typeof undefined !== typeof _ukeScutsStrg && (_ukeScutsStrg instanceof Object))) ? new Object : _ukeScutsStrg;
	}()),

	_ukeDatas = {
		'globalise':false,
		'ready': false
	},

	_ukeDomem = (function(){
		return (!(typeof undefined !== typeof _ukeDomem && (_ukeDomem instanceof Object))) ? new Object : _ukeDomem;
	}()),

	_domEvs = [],

	_ukeFormRules = (
	function(){

		return {
			"empty": "(/\S/g.test({{val}}))"
		};

	}()),

	_ukeFormRulesData = (
	function(){

		return {
			"empty": "(isBool({{val}}) && {{val}})"
		};

	}()),

	_ukeLoopers = new Array,

	_ukeAppsDataRepository = (
	function(){
		return (!(typeof undefined !== typeof _ukeAppsDataRepository && (_ukeAppsDataRepository instanceof Object))) ? new Object : _ukeAppsDataRepository;
	}()),

	_ukeAppsDomeRepository = (
	function(){
		return (!(typeof undefined !== typeof _ukeAppsDomeRepository && (_ukeAppsDomeRepository instanceof Object))) ? new Object : _ukeAppsDomeRepository;
	}()),

	_ukeAppsDirectiveAppliedElements = (
	function(){
		return (!(typeof undefined !== typeof _ukeAppsDirectiveAppliedElements && (_ukeAppsDirectiveAppliedElements instanceof Object))) ? new Object : _ukeAppsDirectiveAppliedElements;
	}()),

	_ukeAppsDirectiveAppliedElementsArgs = (
	function(){
		return (!(typeof undefined !== typeof _ukeAppsDirectiveAppliedElementsArgs && (_ukeAppsDirectiveAppliedElementsArgs instanceof Object))) ? new Object : _ukeAppsDirectiveAppliedElementsArgs;
	}()),

	_ukeAppsDirectiveCallBacks = (
	function(){
		return (!(typeof undefined !== typeof _ukeAppsDirectiveCallBacks && (_ukeAppsDirectiveCallBacks instanceof Object))) ? new Object : _ukeAppsDirectiveCallBacks;
	}()),

	_ukeAppsDirectiveDefaultCallBack,

	_ukeAppsDirsPropertyElements = ( // An array containg HTMLElements
		// wish value should be the other with the same index in
		// the _ukeAppsDirsValueElements array ''bellow''
	function(){
		return (!(typeof undefined !== typeof _ukeAppsDirsPropertyElements && (_ukeAppsDirsPropertyElements instanceof Array))) ? new Array : _ukeAppsDirsPropertyElements;
	}()),

	_ukeAppsDirsValueElements = ( // An array containg HTMLElements
		// wish properties should be the other with the same index in
		// the _ukeAppsDirsValueElements array ''bellow''
	function(){
		return (!(typeof undefined !== typeof _ukeAppsDirsValueElements && (_ukeAppsDirsValueElements instanceof Array))) ? new Array : _ukeAppsDirsValueElements;
	}()),

	_ukeRoutes = ( // An array containg whole the used 
		// routes 4 the current app
	function(){
		return (!(typeof undefined !== typeof _ukeRoutes && (_ukeRoutes instanceof Object))) ? new Object : _ukeRoutes;
	}());


	a = (
	function(){ // functions used2 create objects
		return new Object;
	});

	_a = (
	function(){ // functions used2 create annonimous functions
		return new Function;
	});

	b = (
	function(){ // Function used2 create objects based in an array sequence
		if(!(arguments['length'] >= 1)){
			return;
		}

		var rga = arguments, 
			rgb, 
			rgc = a(), 
			i, _a, _b;

		for(i = 0; i < rga['length']; i++){

			rgb = rga[i];

			if(!(rgb instanceof Array)){
				continue;
			}else if(rgb['length'] <= 0){
				continue;
			}

			_a = rgb[0] || null;
			_b = rgb[1] || '';
			rgc[ _a ] = _b;

		}

		return rgc;

	});

	c = (
	function(){ // functions used2 create functions
		return (function(){

			if(!(arguments['length'] >= 1)){
				return;
			}

			var rga = arguments, 
				rgb = rga[rga['length'] - 1],
				rgc = (rga[0] instanceof Boolean) ? rga[0] : true;

			return (!((rgb instanceof Function))) ? null :

			(function(){
				
				var ukedatafunction = (rgb instanceof Function) ? rgb : _a();
				return (function(){
					return ukedatafunction['apply'](this,arguments);
				});

			}());

		}
		['apply']({},arguments));
	});

	_c = (
	function(_o){ // functions used2 create objects
		return !(_o instanceof Object) ? null :
		(function(o){
			for(var k in _o){
				o[k] =  (isFunction(_o[k])) ? c(_o[k]) :
						(isObject(_o[k])) ? _c(_o[k]) :
						(isArray(_o[k])) ? __c(_o[k]) : _o[k];
			}
			return o;
		}({}));
	});

	__c = (
	function(_o){ // functions used2 create arrays
		return !(_o instanceof Array) ? null :
		(function(o){
			for(var k = 0; k < count(_o); k++){
				o[k] =  (isFunction(_o[k])) ? c(_o[k]) :
						(isObject(_o[k])) ? _c(_o[k]) :
						(isArray(_o[k])) ? __c(_o[k]) : _o[k];
			}
			return o;
		}([]));
	});

	e = c(
	function(){ // functions used2 select DOMElements
		return (function(){

			if(!(arguments['length'] >= 1)){
				return;
			}

			var rga = arguments,
				rgb = rga[0],
				rgc = rga[rga['length'] - 1] || '#',
				_rgc = 'querySelector',
				rgd;

			return (!((isStr(rgb) || isHtml(rgb) || isArray(rgb)) && (isStr(rgc) || isFunction(rgc)))) ? null :

			(function(){

				if(isStr(rgb)){

					return (isStr(rgc)) ? (function(){
						try{
							_rgc += (!(rgc !== '*')) ? 'All' : '';
							return d[_rgc]((function(r){
								return /^\${1,}/g['test'](r) ? '[name=' + r['replace'](/^\${1,}/g, '') + ']' : r;
							}(rgb)));
						}catch(err){
							return;
						}
					}())

					: (function(){

						try{

							rgd = d['querySelectorAll'](rgb);

							if(rgd){

								for(var i = 0; i < rgd.length; i++){

									rgc['apply'](rgd[i], []);

								}

							}

						}catch(err){
							return;
						}

					}());

				}else if(isArray(rgb)){

					for(var i = 0; i < count(rgb); i++){
						e(rgb[i], rgc);
					}

					return;

				}else{

					var _rgb = rga[1] || undefined;

					if(isStr(_rgb)){

						try{

							_rgc += (!(rgc !== '*')) ? 'All' : '';
							return rgb[_rgc]((function(r){
								return /^\${1,}/g['test'](r) ? '[name=' + r['replace'](/^\${1,}/g, '') + ']' : r;
							}(rgb)));

						}catch(err){
							return;
						}

					}

				}

			}());

		}
		['apply']({},arguments));
	});

	f = c(
	function(){ // function used2addEventListener
		return (function(){

			if(!(count(arguments) >= 1)){
				return;
			}

			var rga = arguments, 
				rgb = rga[0],
				rgc = rga[1],
				rgd = rga[ count(rga) - 1 ],

				_rgb, _rgc;

			return (!((isStr(rgb) || isNodeList(rgb) || isArray(rgb) || isHtml(rgb) || (rgb == d||rgb == w)) && (isStr(rgc) || isArray(rgc)) && (isFunction(rgd) || isArray(rgd)))) ? null :

			(function(){

				try{

					if(isArray(rgb) || isNodeList(rgb)){
						for(var i = 0; i < count(rgb); i++){
							f(rgb[i], rgc, rgd);
						}
						return;
					}

					if(isStr(rgb)){
						return f(e(rgb,'*'), rgc, rgd);
					}

				}catch(err){
				}

				if(isHtml(rgb) || (rgb == d||rgb == w)){
					
					if(isArray(rgc)){
						for(var i = 0; i < count(rgc); i++){
							f(rgb, rgc[i], rgd);
						}
						return;
					}

					$$addEvent(rgb, rgc, rgd);

					return;

				}

			}());

		}
		['apply']({},arguments));
	});

	g = c(
	function(){ // functions used as a wscope
		return (function(){

			if(!(count(arguments) >= 1)){
				return;
			}

			var rga = arguments, 
				rgb = rga[0];

			return (!(isFunction(rgb))) ? null :

			(function(){

				if(!(d['readyState'] === 'complete')){

					f(d, 'readystatechange', function(){
						if(!(d['readyState'] !== 'complete')){
							rgb['apply'](this,[]);
							_ukeDatas.ready = true;
						}
					});

				}else{

					if(!(d['readyState'] !== 'complete')){
						rgb['apply'](this,[]);
					}

				}

			}());

		}
		['apply']({},arguments));
	});

	h = c(
	function(){ // functions used2 create uolkeo configuration variables
		return (function(){

			if(!(count(arguments) >= 1)){
				return;
			}

			var rga = arguments, 
				rgb = rga[0];

			return (!(isStr(rgb))) ? null :

			(function(){
				_uolkeoConfigVariables[rgb] = rga[count(rga) - 1];
			}());

		}
		['apply']({},arguments));
	});

	String.prototype.trim = String.prototype.trim || c(function(){
		return this.replace(/^\s{1,}/, '').replace(/\s{1,}$/, '');
	});

	Function.prototype.getName = c(function(){
		if(typeof 'str' === typeof this.name){
			return this.name;
		}else{

			try{

				var fnc = this.toString().trim().replace(/^function(\s{1,})/, ''),
					functionName;

				functionName = fnc.match(/^([a-zA-Z0-9_\$]+)/);

				if(functionName){
					return functionName[0]['trim']();
				}else{
					return null;
				}

			}catch(err){
				return null;
			}
		}
	});

	window.document.querySelector = 
	window.document.querySelector || c(
	function($query){});

	$$addEvent = (
	function(el, ev, handler){

		if(typeof 'str' === typeof el){
			el = e(el, '*');

			for(var i = 0; i < el.length; i++){
				$$addEvent(el[i], ev, handler);
			}

			return;

		}

		if(d['addEventListener']){
			el['addEventListener'](ev, c(handler));
		}else if(d['attachEvent']){
			el['attachEvent']('on' + ev, c(handler));
		}else{
			el['on' + ev] = c(handler);
		}

	});


	$$core_html = d.createElement('html');


	j = ((function(){
		return arguments[0];
	})([

		function count(_v){
			try{
				return _v['length'];
			}catch(err){
			}
			return 0;
		},
		function isNull(_v){
			return (null === _v);
		},
		function isEmpty(_v){
			return (!/\S/['test'](_v));
		},
		function isFunction(_v){
			return (!('function' !== typeof _v));
		},
		function isObject(_v){
			return (_v instanceof Object);
		},
		function isArray(_v){
			try{
				return (_v instanceof Array);
			}catch(err){
				alert('return (_v instanceof Array);');
				return;
			}
		},
		function isHtml(_v){
			try{
				return typeof undefined !== window.HTMLElement ? (_v instanceof window.HTMLElement) : typeof {} === typeof _v && _v.nodeType === 1;
			}catch(error){
				return typeof {} === typeof _v && _v.nodeType === 1;
			}
		},
		function isNodeList(_v){
			try{
				return (_v instanceof NodeList);
			}catch(err){
				return typeof undefined !== _v[0] && isHtml(_v[0]) ? true : false;
			}
		},
		function isNumber(_v){
			return (!(isNaN(_v)));
		},
		function isStr(_v){
			return (!('string' !== typeof _v));
		},
		function isBool(_v){
			return (!('boolean' !== typeof _v));
		},
		function inArray(rg, rga){
			try{
				
				if(isArray(rga)){

					var rgb = count(rga);

					for(var i = 0; i < rgb; i++){

						if(rga[i] == rg){
							return true;
						}else{
							continue;
						}

					}

					return false;

				}

			}catch(er){	
			}
			return (false)
		},
		function equals(){
			return (function(){

				var rga = arguments,
					rgb = 1,
					i = 0;

				return (!(count(rga) >= 1)) ? false :

				(function(){

					for( ; i < count(rga); i++ ){
						rgb += (!(rga[i] !== rga[i-1])) ? 1 : 0;
					}

					return (!(count(rga) !== rgb));

				}());

			}['apply']({},arguments))
		},
		function notEquals(){
			return (!(typeof equals === 'function')) ? null :
			(function(){
				return (!equals['apply'](this,arguments));
			}['apply'](this,arguments));
		},
		function toLower(str){
			return isStr(str) ? str['toLowerCase']() : undefined;
		},
		function toUpper(str){
			return isStr(str) ? str['toUpperCase']() : undefined;
		},


		function winExtend(_var, _val){
			return (!(typeof undefined !== typeof _var)) ? undefined :
			(function(){
				w[_var] = (!(typeof undefined === typeof _val)) ? _val : null;
			}());
		},
		function globalise(){
			return (function(){

				if(!(typeof undefined !== typeof uolkeo)){
					return;
				}

				return (!(isObject(uolkeo))) ? null : 

				(function(){

					for(var key in uolkeo){
						uolkeo['winExtend'](key, uolkeo[key]);
					}

					_ukeDatas['globalise'] = true;

				}());

			})
			['apply']
			(this, arguments);
		},

		function $$Function(){
			return (!(!(typeof undefined === typeof c) && isFunction(c))) ? null :
			(function(){
				return c['apply'](this,arguments[0]);
			}(arguments));
		},
		function $$Object(){
			return (!(!(typeof undefined === typeof _c) && isFunction(_c))) ? null :
			(function(){
				return _c['apply'](this,arguments[0]);
			}(arguments));
		},
		function $$Array(){
			return (!(!(typeof undefined === typeof __c) && isFunction(__c))) ? null :
			(function(){
				return __c['apply'](this,arguments[0]);
			}(arguments));
		},

		function $$keyCode(){
			return (!(count(arguments) >= 1 && isStr(arguments[0]) && isObject(l))) ? null :
			(function(k){
				return l[k] || undefined;
			}(arguments[0]));
		},
		function $$keyName(){
			return (!(count(arguments) >= 1 && isObject(n))) ? null :
			(function(k){
				return n[k] || undefined;
			}(arguments[0]));
		},
		function $$auxKey(){
			return (!(count(arguments) >= 1 && isFunction(m))) ? null :
			(function(k){
				return !isNaN(k[0]) ? m['apply'](this,k) : m['apply'](this,[$$keyCode(k[0])]);
			}(arguments));
		},

		function $$varExts(vr, p, v){
			
			if(!('object' === typeof vr)){
				return;
			}
			return isStr(p) ? (function(){

				vr[p] = (isFunction(v)) ? c(v) :
						(isArray(v)) ? __c(v) :
						(isObject(v)) ? _c(v) : v;

			}()) : (isObject(p)) ? (function(){

				for(var k in p){
					uolkeo.$$varExts(vr, k, p[k]);
				}

			}()) : null;

		},
		function $$exts(){
			return (function(){

				if(!(count(arguments) >= 1)){
					return;
				}

				var rga = arguments,
					rgb = rga[0],
					rgc = rga[ count(rga) - 1 ];

				return (!!(isStr(rgb) && !isEmpty(rgb))) ?

				(function(){
					uolkeo[rgb] = (isFunction(rgc)) ? c(rgc) :
								  (isArray(rgc)) ? __c(rgc) :
								  (isObject(rgc)) ? _c(rgc) : rgc;
					if(_ukeDatas['globalise']){
						w[rgb] = (isFunction(rgc)) ? c(rgc) :
								 (isArray(rgc)) ? _c(rgc) :
								 (isObject(rgc)) ? __c(rgc) : rgc;
					}
				}()) :

				(!!(isObject(rgb))) ?

				(function(o){
					for(var k in o){
						uolkeo.$$exts(k, o[k]);
					}
					return null;
				}(rgb)) : null;

			})
			['apply']
			({}, arguments);
		},
		function $$scut(){
			return (!(!(typeof undefined === typeof k) && isFunction(k))) ? null :
			(function(){
				k['apply'](this,arguments[0]);
			}(arguments));
		},
		function $$querySelector(){
			return (!(!(typeof undefined === typeof e) && isFunction(e))) ? null :
			(function(){
				return e['apply'](this,arguments[0]);
			}(arguments));
		},
		function $$qs(){
			return (!(!(typeof undefined === typeof e) && isFunction(e))) ? null :
			(function(){
				return e['apply'](this,arguments[0]);
			}(arguments));
		},

		function $$range(f,t){
			if(!(isNumber(f) && isNumber(t))){
				return;
			}
			var r = new Array;
			t = isNaN(t)?f:t;
			if(f==t){
				f = 0;
			}
			if(!(f < t)){
				return;
			}
			for(; f <= t; f++){
				r.push(f);
			}
			return r;
		},

		function $$replace(){
			return (function(){

				if(!(arguments["length"] >= 1)){
					return null;
				}

				var rga = arguments,
					rgb = rga[0], // The original str
					rgc = rga[1], // Old Value
					rgd = rga[2], // New value

					rge, rgf;

				return (!(typeof "string" === typeof rgb && isStr(rgc))) ? null :

				(function(){

					rge = rgb["split"]( rgc )[ "length" ];

					rgf = rgb["replace"](rgc, rgd);

					for(var __i__ = 0; __i__ < rge; __i__++){
						rgf = rgf["replace"](rgc, rgd);
					}	

					return rgf;

				})
				["apply"]
				(this, arguments);

			})	
			["apply"]
			(this,arguments);
		}

	]));

	for(var n = 0; n < j['length']; n++){

		var _m = j[n],
			_n;

		_n = (function(data){

			if(!/\S/['test'](data['getName']())){
				return;
			}

			return (
				'var ' + data['getName']() + '=' + 'c(' + data['toString']() + ')'
			);

		}(_m));

		eval(_n);

	}

	w['requestAnimationFrame'] = 
	w['requestAnimationFrame'] || 
	w['webkitRequestAnimationFrame'] ||
	w['mozRequestAnimationFrame'] ||
	w['oRequestAnimationFrame'] ||
	w['msRequestAnimationFrame'] ||
	undefined;

	navigator['$$getUserMedia'] = navigator['getUserMedia'] = (navigator['mediaDevices'] && navigator['mediaDevices']['getUserMedia']) ? navigator['mediaDevices']['getUserMedia'] :

	navigator['getUserMedia'] ||
	navigator['webkitGetUserMedia'] ||
	navigator['mozGetUserMedia'] ||
	navigator['oGetUserMedia'] ||
	navigator['msGetUserMedia'] || null;

	window.URL = 
	window.URL ||
	window.webkitURL ||
	window.mozURL ||
	window.msURL ||
	window.oURL || null;

	var __re,

	netCDIStringStorage = [
		[], []
	],
	netCDIStringSyntaxes = [
		["\"", "\""],
		["'", "'"],
		["\`", "\`"]
   	],

	rgexp_jwhitespace = /\S/,
	rgexp_ukevarsnt = /\%\{{2}[^\}\}]+/gim;

	var __arr = [
		(w['FileList']),
		(w['NodeList'] || a()),
		(w['Array'])
	];

	//
	// Create the .forEcah method 4ach var in the array above
	//

	for(var _r_ = 0; _r_ < __arr.length; _r_++){
		if(!("function" !== typeof __arr[_r_])){
			__arr[_r_].prototype.forEach = __arr[_r_].prototype.forEach || c(function(f){
				for(var i = 0; i < this.length; i++){
					f.apply(this, [this[i]]);
				}
			});
		}
	}
	
	// Create the configuration vars by <meta> and ...
	g(function(){

		e(['meta'], function(){

			var 
			_ex = /^(data:|)uke(|\-page)\-/gi,
			_name = (function(){
				return this['getAttribute']('property');
			}['apply'](this,[])),

			_content = (function(){
				return this['content'];
			}['apply'](this,[]));


			if(_ex['test'](_name)){
				_ukeConfigVariables[ _name['replace'](_ex, '')['trim']()['toLowerCase']() ] = _content || undefined;
			}

		});

		e(['[date_select]', '[date-select]'], function(){

			var 

			ds = 
			this.getAttribute('date_select') ||
			this.getAttribute('date-select') ||
			null,

			ds_dts = [],
			ds_datas = {
				"day": "$day",
				"mon": "$mon",
				"year": "$year"
			},
			_datas_ = {
				"day": {
					"name": "day",
					"label": "day"
				},
				"mon": {
					"name": "mon",
					"label": "mon"
				},
				"year": {
					"name": "year",
					"label": "year"
				}
			},

			$it = this;

			if(!ds){
				return;
			}

			ds.trim().split(/,{1,}/).forEach(function(dsd){

				var _re = /^(day|mon|year)\:/gi,
					_pro = dsd['trim']()['match'](_re),
					_val = dsd['trim']()['replace'](_re, '')['trim'](),

					val, label, lbl;

				if(!_pro){
					return;
				}

				_pro = _pro[0]['replace'](/\:$/,'');


				val = _val['match'](/^([^\s]+)/g) ? _val['match'](/^([^\s]+)/g)[0]['trim']() : _val;
				lbl = _val['replace'](/^([^\s]+)/g, '')['trim']();
				label = isEmpty( lbl ) ? '' : lbl;

				ds_datas[ _pro ] = ("$" + val);
				ds_dts['push'](val);
				_datas_[ _pro ]['name'] = ("" + val);
				_datas_[ _pro ]['label'] = ("" + label);

			});

			var 

			sels = [
				document.createElement("select"),
				document.createElement("select"),
				document.createElement("select")
			];

			sels[0]['__name__'] = _datas_.day;
			sels[1]['__name__'] = _datas_.mon;
			sels[2]['__name__'] = _datas_.year;

			sels.forEach(function(sel){

				var _anOption = document.createElement('option');

				_anOption.value = '0';
				_anOption.innerHTML = !isEmpty(sel.__name__.label) ? sel.__name__.label : sel.__name__.name;

				sel.name = sel.__name__.name;
				sel.appendChild(_anOption);

				if(inArray(sel.name, ds_dts)){
					$it.appendChild(sel)
				}

			});

			uolkeo.$$date_select(ds_datas);

		});

		e(['[time_select]', '[time-select]'], function(){

			var 

			ds = 
			this.getAttribute('time_select') ||
			this.getAttribute('time-select') ||
			null,

			ds_dts = [],
			ds_datas = {
				"hour": "$hour",
				"min": "$min",
				"sec": "$sec"
			},
			_datas_ = {
				"hour": {
					"name": "hour",
					"label": "hour"
				},
				"min": {
					"name": "min",
					"label": "min"
				},
				"sec": {
					"name": "sec",
					"label": "sec"
				}
			},

			$it = this;

			if(!ds){
				return;
			}

			ds.trim().split(/,{1,}/).forEach(function(dsd){

				var _re = /^(hour|min|sec)\:/gi,
					_pro = dsd.trim().match(_re),
					_val = dsd.trim().replace(_re, ''),

					val, label, lbl;

				if(!_pro){
					return;
				}

				_pro = _pro[0]['replace'](/\:$/,'');

				val = _val['match'](/^([^\s]+)/g) ? _val['match'](/^([^\s]+)/g)[0]['trim']() : _val;
				lbl = _val['replace'](/^([^\s]+)/g, '')['trim']();
				label = isEmpty( lbl ) ? '' : lbl;

				ds_datas[ _pro ] = ("$" + val);
				ds_dts.push(val);
				_datas_[ _pro ]['name'] = ("" + val);
				_datas_[ _pro ]['label'] = ("" + label);

			});

			var 

			sels = [
				document.createElement("select"),
				document.createElement("select"),
				document.createElement("select")
			];

			sels[0]['__name__'] = _datas_.hour;
			sels[1]['__name__'] = _datas_.min;
			sels[2]['__name__'] = _datas_.sec;

			sels.forEach(function(sel){

				var _anOption = document.createElement('option');

				_anOption.value = '0';
				_anOption.innerHTML = !isEmpty(sel.__name__.label) ? sel.__name__.label : sel.__name__.name;

				sel.name = sel.__name__.name;
				sel.appendChild(_anOption);
				
				if(inArray(sel.name, ds_dts)){
					$it.appendChild(sel)
				}

			});

			uolkeo.$$time_select(ds_datas);

		});

	});

	winExtend('uolkeo', {});

	for(var n = 0; n < j['length']; n++){

		var _m = j[n],
			_n;

		_n = (function(data){

			try{

				if(!/\S/['test'](data['getName']()) || !(typeof undefined !== typeof uolkeo)){
					return;
				}

				uolkeo[ data['getName']() ] = (function(n){
					return c(n);
				}(data));

			}catch(erro){
				return null;
			}

		}(_m));

	}

	uolkeo.$$on = f;
	uolkeo.$$addEvent = $$addEvent;
	uolkeo.$$q = 
	uolkeo.$$q || c(
	function(query){
		if(!(this instanceof uolkeo.$$q)){
			return new uolkeo.$$q(query);
		}
		this.$$element = e(query);
	});

	uolkeo.$$q.extend = c(
	function(key, value){

		if(typeof 'str' === typeof key){
			uolkeo.$$q['prototype'][ key ] = isFunction(value) ? c(value) : 
								isObject(value) ? _c(value) : value;
		}else if(typeof {} === typeof key){
			for(var k in key){
				uolkeo.$$q.extend(k, key[k]);
			}
		}

	});

	uolkeo.$$q.extend('addClass', function(){
		
		if(typeof $$core_html === typeof this.$$element){

			try{

				if(typeof this.$$element.classList === 'object' && this.$$element.classList.add){
					for(var i = 0; i < arguments.length; i++){
						this.$$element.classList.add(arguments[i] + '');
					}
				}else{

					for(var i = 0; i < arguments.length; i++){
						
						var className = arguments[i];
						var classNameRe = new RegExp( className, 'i' );

						if(!classNameRe.test(this.$$element.className)){
							this.$$element.className += (' ' + className);
						}

					}

				}

			}catch(err){
				return;
			}

		}

	});

	uolkeo.$$q.extend('removeClass', function(){
		
		if(typeof $$core_html === typeof this.$$element){

			try{

				if(typeof this.$$element.classList === 'object' && this.$$element.classList.remove){
					for(var i = 0; i < arguments.length; i++){
						this.$$element.classList.remove(arguments[i] + '');
					}
				}else{

					for(var i = 0; i < arguments.length; i++){
						
						var className = arguments[i];
						var classNameRe = new RegExp( className, 'i' );

						if(classNameRe.test(this.$$element.className)){
							this.$$element.className = uolkeo.$$replace(this.$$element.className, className, '');
						}

					}

				}

			}catch(err){
				return;
			}

		}

	});

	uolkeo.$$q.extend('toggleClass', function(){
		
		if(typeof $$core_html === typeof this.$$element){

			try{

				if(typeof this.$$element.classList === 'object' && this.$$element.classList.toggle){
					for(var i = 0; i < arguments.length; i++){
						this.$$element.classList.toggle(arguments[i] + '');
					}
				}else{

					for(var i = 0; i < arguments.length; i++){
						
						var className = arguments[i];
						var classNameRe = new RegExp( className, 'i' );

						if(!classNameRe.test(this.$$element.className)){
							this.$$element.className += (' ' + className);
						}else{
							this.$$element.className = uolkeo.$$replace(this.$$element.className, className, '');
						}

					}

				}

			}catch(err){
				return;
			}

		}

	});

	uolkeo.$$q.extend('hasClass', function(){
		
		if(typeof $$core_html === typeof this.$$element){

			try{

				if(typeof this.$$element.classList === 'object' && this.$$element.classList.contains){
					return this.$$element.classList.contains(arguments[0] + '');
				}else{

					var className = arguments[0];
					var classNameRe = new RegExp( className, 'i' );

					return this.$$element.className.match(classNameRe);

				}

			}catch(err){
				return;
			}

		}

	});

	//
	// Multi
	//

	(function(){
		for(var ky in uolkeo){
			if(/^is/.test(ky)){
				var nn = ky.replace(/^is/, 'are');
				uolkeo[ nn ] = (function(k){

					return c(function(){
						return (function(){

							if(!(count(arguments) >= 1)){
								return false;
							}

							var rga = arguments,
								rgb = 0;

							for(var rgc = 0; rgc < count(rga); rgc++){
								rgb += (uolkeo[k](rga[rgc])) ? 1 : 0;
							}

							return rgb === count(rga) ? true : false;

						})
						['apply']
						(this, arguments);
					});

				}(ky));
			}
		}
	}());

	k = (c(function(){ // function used2 create keyboard shortcut
		return (function(){

			if(!(count(arguments) >= 2)){
				return;
			}

			var rga = arguments,
				rgb = rga[0],
				rgc = rga[count(rga) - 1],

				rgd = [], // Pressed keys
				rge = false, // A bool indicating if the script may keep while pressing the keys
				rgf = 0, // An int value indicating the pressed keys and comparing with the values inside the keys list
				rgg = 'if('; // Condition4 trigger the function


			return (!(isStr(rgb) && isFunction(rgc))) ? null :

			(function(){

				rgb = (uolkeo.toLower(rgb)||'')['split']('+');

				for(var i = 0; i < count(rgb); i++){
					if(rgb[i]['trim']() in l){
						rgd['push']( l[ rgb[i]['trim']() ] );
					}else{
						return;
					}
				}

				for(var i = 0; i < count(rgd); i++){

					var _in = i + 1 < count(rgd) ? '&&' : '';
					if(!m(rgd[i])){
						rgg += ('e.which === ' + rgd[i] + _in);
					}else{
						rgg += ('e.' + (n[rgd[i]]['toString']()['toLowerCase']()) + 'Key' + _in);
					}

				}

				rgg += '){__rga__()}';

				f(d, 'keydown', (function(e){
					var __rga__ = (function(data){
						return data;
					}(rgc));
					eval(rgg);
				}));

				f(d, 'keyup--', (function(e){
					if(inArray(e.keyCode, [rgd[0]])){
						rge = false;
					}
				}));

			}());

		})
		['apply']
		({},arguments)
	}));

	l = ((function(){ // Key Codes by name
		return arguments[0];
	})({

		"enter": 13, 
		"shift": 16, 
		"ctrl": 17, 
		"tab": 9, 
		"space": 32, 
		"alt": 18, 
		"capslock": 20, 
		"ctxmenu": 93,
		"left": 37, 
		"right": 39, 
		"top": 38, 
		"down": 40, 
		"home": 36, 
		"pgup": 33, 
		"pgdn": 34, 
		"end": 35,
		"backspace": 8, 
		"one": 49, "1": 49,
		"two": 50, "2": 50,
		"three": 51, "3": 51,
		"four": 52, "4": 52,
		"five": 53, "5": 53,
		"six": 54, "6": 54,
		"seven": 55, "7": 55,
		"eight": 56, "8": 56,
		"nine": 57, "9": 57,
		"zero": 48, "0": 48,

		"esc": 27, 
		"f1": 112, 
		"f2": 113, 
		"f3": 114, 
		"f4": 115, 
		"f5": 116, 
		"f6": 117, 
		"f7": 118, 
		"f8": 119, 
		"f9": 120, 
		"f10": 121, 
		"f11": 122, 
		"f12": 123,
		"a": 65, 
		"b": 66, 
		"c": 67, 
		"d": 68, 
		"e": 69, 
		"f": 70, 
		"g": 71, 
		"h": 72, 
		"i": 73, 
		"j": 74, 
		"k": 75, 
		"l": 76, 
		"m": 77,
		"n": 78, 
		"o": 79, 
		"p": 80, 
		"q": 81, 
		"r": 82, 
		"s": 83, 
		"t": 84, 
		"u": 85, 
		"v": 86, 
		"w": 87, 
		"x": 88, 
		"y": 89, 
		"z": 90,
		"A": 65,
		"B": 66,
		"C": 67,
		"D": 68,
		"E": 69,
		"F": 70,
		"G": 71,
		"H": 72, 
		"I": 73, 
		"J": 74, 
		"K": 75, 
		"L": 76, 
		"M": 77, 
		"N": 78, 
		"O": 79, 
		"P": 80, 
		"Q": 81, 
		"R": 82, 
		"S": 83, 
		"T": 84, 
		"U": 85,
		"V": 86, 
		"W": 87, 
		"X": 88, 
		"Y": 89, 
		"Z": 90,
		"scroll": 145, 
		"pause": 19, 
		"insert": 45, 
		"delete": 46		
		
	}));

	m = c(function(keyCode){ // function used2 verify if a key in an auxiliary
		return !!(inArray(keyCode, [l.ctrl, l.alt, l.shift]));
	});

	n = ((function(){ // Key names by code
		
		var rga = arguments[0], // Keys list
			rgb = a(); // New keys list

		for(var key in rga){
			rgb[ rga[ key ] ] = key;
		}

		return rgb;

	}(l)));

	(function(){ // Extend uolkeo object with eventListener functions
		
		for(var key in w){
			
			if(/^on/gi['test'](key)){
				
				_domEvs.push(key.replace(/^on/,''));
				uolkeo['$$' + key] = (function(){
					
					var _k = key['replace'](/^on/gi,'');
					return (c(function(){
						return (!(!(typeof undefined === typeof f) && isFunction(f))) ? null :
						(function(el, cl){
							return f['apply'](this,[el, _k, cl]);
						}['apply']({},arguments));
					}));

				}());

			}

		}

	}());

	o = (
	function(w){ // Reg DomElelements inside an application
		return c(function(){
			return (function(){

				if(!(count(arguments) >= 1)){
					return;
				}

				var rga = arguments,
					rgb = rga[0],
					rgc = rga[1],
					rgd = rga[ count(rga) - 1 ];

				return (!(isHtml(rgb) && isStr(rgc) && isObject(rgd))) ? (null) :

				(function(){

					p(
						rgb, // App View
						rgc, // App Name
						rgd // App Repository
					);

					

					return _ukeAppsDomeRepository[ rgc ];

				}());

			})
			['apply']
			(this, arguments);
		});
	}(w));

	p = c(
	function(){ // Set domElements inside <<app>> in _ukeAppsDomeRepository
		return (function(){

			if(!(count(arguments) >= 1)){
				return;
			}

			var _a = arguments,
				rga = _a[0],
				rgb = _a[2],
				rgc = _a[1];

			return (!(isHtml(rga) && isStr(rgc) && isObject(rgb) && rgb.__dts__)) ? alert(null) :

			(function(){

				for(var i = 0; i < count(rga['childNodes']); i++){

					if(!inArray(rga['childNodes'][i], _ukeAppsDomeRepository[rgc])){
						
						_ukeAppsDomeRepository[rgc].push( rga['childNodes'][i] );
						rgb.__dts__.domeCount++;

						rga['childNodes'][i]['ukApp'] = 
						rga['childNodes'][i]['ukApp'] || rgc;
					}

					if(rga['childNodes'][i]['childNodes'] && isHtml(rga['childNodes'][i])){
						p(rga['childNodes'][i], rgc, rgb);
					}

				}

			}());

		})
		['apply']
		(this, arguments);
	});

	q = c(
	function(){ // Encode strings inside an expression
		return (function(){

			if(!(count(arguments) >= 1)){
				return;
			}

			var rga = arguments,
				rgb = rga[0];

			return (!(isStr(rgb) )) ? (null) :

			(function(){

				for(var A = 0; A < rgb["length"]; A++){

					try{
						
						// StringRaeder
						for(var c = 0; c < netCDIStringSyntaxes["length"]; c++){

							// Veriicar se ha uma string nesta area do codigo sendo
							// lido para que esta seja temporariamente codificada
							// e salva... netCDIStringSyntaxes[c][0]

							try{

								if(rgb["substring"](A, (A + netCDIStringSyntaxes[c][0]["length"])) == netCDIStringSyntaxes[c][0]){

									// tendo encontrado o commando de abertura de uma string
									// procurar pelo comando de echamento da mesma para a
									// codificar inteira

									for(var e = A + 1; e < rgb["length"]; e++){

										if(rgb["substring"](e, (e + netCDIStringSyntaxes[c][1]["length"])) == netCDIStringSyntaxes[c][1]){

											if(rgb.charAt(e - 1) == "\\"){
												continue;
											}

											var strid,
												strbody = rgb["substring"](A, (e + netCDIStringSyntaxes[c][1]["length"]));

											if(inArray(strbody, netCDIStringStorage[0])){
												strid = netCDIStringStorage[0]['indexOf'](strbody);
											}else{
												netCDIStringStorage[0]["push"](strbody.trim());
												strid = netCDIStringStorage[0]["length"];
											}

											rgb = rgb["replace"](strbody, "$::" + strid + ":");

											break;

										}

									}

								}

							}catch(err){

								alert(err + "  -- [StringReader 1.0.1]");
								continue;

							}

						}
						

					}catch(err){

						continue;

					}

				}

				return rgb;

			}());

		})
		['apply']
		(this, arguments);
	});

	r = c(
	function(){ // Decode strings inside an expression
		return (function(){

			if(!(count(arguments) >= 1)){
				return;
			}

			var rga = arguments, // The arguments list
				rgb = rga[ 0 ], // The net code
				rgc, // net var mathces inside the current code
				rgd = 0, // each var match index
				rge, // each var match
				_rgf = isBool(rga[ 1 ]) ? rga[ 1 ] : true;

			return (!(isStr(rgb) )) ? (null) :

			(function(){

				rgc = rgb[ 'match' ]( /(\$\:{2}[^(\:)]+)/gi );

				for( ; rgd < count(rgc); rgd++ ){

					try{

						rge = ( rgc[ rgd ] || '' )[ 'replace' ]( /^\$\:\:/, '' )['trim']();

						var __r = _rgf ? ("uolkeo.$$format(" + netCDIStringStorage[0][parseInt(rge)] + ", _ukeAppDataRepository)") :
							netCDIStringStorage[0][parseInt(rge)];

						rgb = uolkeo.$$replace(
							rgb,
							(rgc[ rgd ] + ':'), __r.trim()
						);

					}catch(err){
						// alert(err)
					}

				}

				return ( rgb );

			}());

		})
		['apply']
		(this, arguments);
	});

	s = c(
	function(){ // Split a string by upper-case letters
		return (function(){

			if(!(count(arguments) >= 1)){
				return;
			}

			var rga = arguments, // The arguments list
				rgb = rga[ 0 ], // The STR
				rgc;

			return (!(isStr(rgb) && /[A-Z]/g.test(rgb))) ? null :

			(function(){

				rgc = rgb.match(/[A-Z]/g);

				if(rgc){

					rgc.forEach(
					function(rgd){
						rgb = rgb.replace(rgd, '-' + rgd)
					})

				}

				return (uolkeo.toLower(rgb));

			}());

		})
		['apply']
		(this, arguments);
	});

	t = c(
	function(){ // Read %{{vars}} inside a string based on an app <<object>>
		return (function(){

			if(!(count(arguments) >= 2)){
				return;
			}

			var rga = arguments, // The arguments list
				rgb, // Encoded {{STR}}
				rgc = rgc = rga[ 1 ], // _ukeAppDataRepository
				_ukeAppDataRepository,
				rgd = rga[ 0 ]; // The STR

			return (!((uolkeo.areStr(rgd, rgc) && (rgc in _ukeAppsDataRepository)) && /\S/.test(rgd))) ? '' :

			(!(rgexp_ukevarsnt.test(rgd))) ? rgd :

			(function(){

				rgb = q(rgd);

				var 
				_matches = rgb.match(
					rgexp_ukevarsnt
				),

				_newData = rgd;

				_ukeAppDataRepository = _ukeAppsDataRepository[ rgc ];

				for(var o = 0; o < count(_matches); o++){
					
					var

					_match = _matches[ o ][ 'replace' ](
						/^\%\{{2}/g, ''
					),

					_matchVal = r(_match);

					with(_ukeAppDataRepository){

						try{
							
							_newData = _newData.replace(
								('%{{' + r(_match, false).trim() + '}}'),
								uolkeo['$$stringify'](eval('typeof (' + _matchVal + ') !== typeof undefined ? ' + _matchVal + ' : ""'))
							);

						}catch(err){
							console.log(err)
							//rgd.data = '';
						}

					}

				}

				return _newData;

			}());

		})
		['apply']
		(this, arguments);
	});

	u =  c(
	function(){ // Element Attribute names
		return (function(){

			if(!(count(arguments) >= 1)){
				return;
			}

			var rga = arguments, // The arguments list
				rgb = rga[0], // The Element

				rgc, rgd, rge, rgf = [];

			return (!(isHtml(rgb))) ? null :

			(function(){

				if(isFunction(rgb.getAttributeNames)){
					//return rgb.getAttributeNames();
				}

				rgb = rgb.cloneNode();
				rgb.innerHTML = '';
				rgc = d.createElement('body');
				rgc.appendChild(rgb);

				rgd = q(rgc.innerHTML);

				rge = (rgd.match(/([a-zA-Z0-9_.\^\-\$\[\]\#\@\!\%\&\(\)\+\-\,\;\"\*\?\\~\{\}\:]+)\=/gi));

				if(!(rge)){
					return rgf;
				}

				for(var i = 0; i < count(rge); i++){
					rgf.push(rge[i].trim().replace(/\=$/,''));
				}

				return rgf;

			}());

		})
		['apply']
		(this, arguments);
	});

	v =  c(
	function(){ // Get whole the properties presents 
		// in each object inside the given array 
		// case-insencitive by default
		return (function(){

			if(!(count(arguments) >= 1)){
				return;
			}

			var rga = arguments, // The arguments list
				rgb = rga[0], // The Array

				rgc = isBool(rga[1]) ? rga[1] : true, // ?Case insencitive
				rgd = new Array;

			return (!(isArray(rgb))) ? null :

			(function(){

				rgb.forEach(
				function(ob){

					for(key in ob){

						if(rgc){

							if(!inArray(key.toLowerCase(), ((rgd + '').toLowerCase()).split(','))){
								rgd.push(key);
							}

						}else{

							if(!inArray(key, rgd)){
								rgd.push(key);
							}

						}

					}

				});

				return (rgd);

			}());

		})
		['apply']
		(this, arguments);
	});

	w = w;

	x =  c(
	function(){ // Prepare a data grid html content  
		// based on an array of data objects
		return (function(){

			if(!(count(arguments) >= 1)){
				return;
			}

			var rga = arguments, // The arguments list
				rgb = rga[0], // The Array
				_rgb = rga[1], // The HTMLTableElement
				_rgc = rga[2], // The Array Name

				rgc,

				TableHead,
				TableBody;

			return (!(isArray(rgb) && !!(isHtml(_rgb)))) ? null :

			(function(){

				rgc = v(rgb);

				if(!_rgb.tHead){
					TableHead = d.createElement('thead');
					_rgb.appendChild(TableHead);
				}else{
					TableHead = _rgb.tHead;
				}

				if(!(_rgb.tBodies.length <= 0)){
					TableBody = _rgb.tBodies[0];
				}else{
					TableBody = d.createElement('tbody');
					_rgb.appendChild(TableBody);
				}

				TableHead.__thd__ = 
				TableHead.__thd__ || a();

				TableHead.__thd__.__f__ = 
				(isBool(TableHead.__thd__.__f__)) ? TableHead.__thd__.__f__ : false;


				var 

				AddRow = c(
				function(data, index){
					var _TableRow = d.createElement('tr');

					for(var ii = 0; ii < count(rgc); ii++){

						var _Td = d.createElement('td');
						_Td.innerHTML = typeof undefined !== typeof data[ rgc[ ii ] ] ? uolkeo.$$stringify(data[ rgc[ ii ] ]) : '';

						_Td.setAttribute('uk-bind', _rgc + '[' + index + '][\'' + rgc[ ii ] + '\']');

						_TableRow.appendChild(_Td);

					}

					TableBody.appendChild(_TableRow);
				}),

				LoadCols = c(
				function(){
					for(var i = 0; i < count(rgc); i++){

						var _th = d.createElement('th');

						_th.innerHTML = rgc[i];

						TableHead.appendChild(_th)

					}
				});

				if(!TableHead.__thd__.__f__){

					TableBody.innerHTML = '';
					TableHead.innerHTML = '';
					LoadCols();

					rgb.forEach(
					function(data, index){

						if(!isObject(data)){
							return;
						}

						AddRow(data, index);

					});

					TableHead.__thd__.__f__ = true;

				}
				else if(!(TableBody.children.length === rgb.length)){

					TableBody.innerHTML = '';

					for(var _index = 0; _index < rgb.length; _index++){

						AddRow(rgb[_index], _index);

					}

				}

				if(!(TableHead.children.length === count(rgc))){
					TableHead.innerHTML = '';
					LoadCols();
				}




				



			}());

		})
		['apply']
		(this, arguments);
	});

	y =  c(
	function(){ // Append element(s) to an HTMLElement
		return (function(){

			if(!(count(arguments) >= 2)){
				return;
			}

			var rga = arguments, // The arguments list
				rgb = rga[0], // The HTMLElement
				rgc = rga[1]; // The Element 2 append

			return (!!(isHtml(rgb) && !!isHtml(rgc))) ? (function(){
				rgb.appendChild(rgc);
			}()) :

			(!(isHtml(rgb) && (rgc instanceof NodeList))) ? null :

			(function(){

				for(var i = 0; i < rgc.length; i++){
					rgb.appendChild( rgc[ i ] );
				}

			}());

		})
		['apply']
		(this, arguments);
	});

	z =  c(
	function(){ // Remove every childNodes from an HTMLElement
		return (function(){

			if(!(count(arguments) >= 1)){
				return;
			}

			var rga = arguments, // The arguments list
				rgb = rga[0], // The HTMLElement
				rgc; // ...

			return (!(isHtml(rgb))) ? null :

			(function(){

				for(var i = 0; i < rgb.childNodes.length; i++){
					rgb.removeChild( rgb.childNodes[ i ] );
				}

			}());

		})
		['apply']
		(this, arguments);
	});

	var 

	_ukeRoutesObject = _c({

		"get": (
		function(){
			return (function(){

				if(!(count(arguments) >= 2)){
					return;
				}

				var rga = arguments, // The arguments list
					rgb = rga[0], // The route name or expression
					rgc = rga[count(rga) - 1]; // The rout callback function

				if(isArray(rgb) && !!(isFunction(rgc) || isStr(rgc))){
					
					for(var i = 0; i < count(rgb); i++){

						_ukeRoutesObject.get(rgb[i], rgc);

					}
					return;
				}

				return (!((isStr(rgb) || (rgb instanceof RegExp)) && !!(isFunction(rgc) || isStr(rgc)))) ? null :

				(function(){

					!!(rgb in _ukeRoutes) ? null : (function(){
						_ukeRoutes[ rgb.replace(/^\//, '').replace(/\/$/, '') + '' ] = rgc;
					}());

				}());

			}
			['apply']
			(this,arguments))
		})

	});



	(function(tagNames){ // create each htmlTag selector

		tagNames.forEach(
		function(t){
			
			uolkeo.$$exts(('$$' + t), function(ref){

				if(!(this instanceof uolkeo['$$'+t])){
					return new uolkeo['$$'+t](ref);
				}

				if('object' === typeof ref){
					this.queryRef = ref;
				}

				this.queryRef = this.queryRef || (function(r){
					return r.charAt(0) === '$' ? ''+t+'[name='+r.replace(/^\$/,'')+']' : t+r;
				}(ref));
				
			});

			_domEvs.forEach(function(de){

				uolkeo['$$' + t]['prototype']['$$'+de] = c(function(ca){

					var qs = uolkeo.$$qs(this.queryRef, '*');

					for(var _i = 0; _i < qs.length; _i++){

						f(qs[_i], de, function(){
							ca.apply(this, arguments);
						});

					}

				});

			});

		});

	}([
		'body', 'html', 'head', 'div', 'header', 'aside', 'nav', 'button', 'input', 'p', 'pre', 'abbr',
		'canvas', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h8', 'h7', 'dl', 'dd', 'dt', 'ul', 'ol',
		'video', 'audio', 'svg', 'table', 'tbody', 'thead', 'br', 'u', 'i', 'b', 'a', 'form'
	]));

	$$exts({

		"$$": (function(){
			return (function(){

				if(!(count(arguments) >= 1)){
					return;
				}

				var rga = arguments,
					rgb = rga[0],
					rgc, rgd = new Array;

				return (!!(isHtml(uolkeo.$$qs(rgb)))) ? uolkeo.$$qs(rgb) :

				(!((isStr(rgb) && (rgb.trim().charAt(0) === '<' &&  rgb.trim().charAt(rgb.trim().length - 1) === '>')))) ? null :

				(function(){

					rgb = rgb['trim']();

					rgc = d['createElement']("body");

					rgc['innerHTML'] = (function(){
						return rgb['trim']()
					}());

					if(rgc['children']['length'] === 1){
						return rgc['childNodes'][0];
					}

					rgc['childNodes']['forEach'](function(){
						rgd['push'](arguments[0])
					});

					return rgd;

				}());

			})
			["apply"]
			(this, arguments);
		}),

		"$$format": (function(){
			return (function(){

				if(!(count(arguments) >= 2)){
					return;
				}

				var rga = arguments,
					rgb = rga[0], // the str to format
					rgc = rga[ count(rga) - 1 ];

				return (!(isStr(rgb))) ? null :

				(!!(isObject(rgc))) ? (function(){

					for(var k in rgc){
						rgb = uolkeo.$$replace(rgb, '{' + k + '}', rgc[k]);
					}

					return rgb;

				}()) : (!(isArray(rgc))) ? (function(){

					for(var i = 1; i < count(rga); i++){
						rgb = uolkeo.$$replace(rgb, ('{' + i + '}'), (rga[i] + ''));
					}

					return rgb;

				}()) : 

				(function(){

					for(var i = 0; i < count(rgc); i++){
						rgb = uolkeo.$$replace(rgb, ('{' + i + '}'), rgc[i]);
					}

					return rgb;

				}());

			})
			["apply"]
			(this, arguments);
		}),

		"$$everdo": (function(f){
			try{ uolkeo.isFunction(f) ? _ukeLoopers.push(f) : null; }
			catch(err){
				return;
			}
		}),

		"$$dir": (function(){
			return (function(){
				
				if(!(count(arguments) >= 2)){
					return;
				}

				var rga = arguments,
					rgb = rga[0], // $$dir name
					rgc = rga[1]; // $dir callback

				return (!!(isArray(rgb) && isFunction(rgc))) ? (
				
				function(){

					for(var i = 0; i < count(rgb); i++){
						uolkeo.$$dir(rgb[i], rgc);
					}

				}()) :

				(!(isStr(rgb) && isFunction(rgc))) ? null :

				(function(){
					
					uolkeo.$$$dc(rgb, _ukeAppsDirectiveDefaultCallBack);

					_ukeAppsDirectiveCallBacks[ rgb ] = 
					_ukeAppsDirectiveCallBacks[ rgb ] || rgc;

				}());

			})
			["apply"]
			(this,arguments)
		}),

		"$$app": (function(){
			return (function(){

				if(!(count(arguments) >= 2)){
					return;
				}

				var rga = arguments,
					rgb = rga[0],
					rgc = rga[ count(rga) - 1 ],
					rgd = (isArray(rga[1]) && uolkeo.areStr.apply(this, rga[1])) ? rga[1] : new Array,
					rge = true;

				return (!(count(rga) >= 2 && isStr(rgb) && (isFunction(rgc) || (isArray(rgc) && isFunction(rgc[count(rgc) - 1]))))) ? null :

				(function(){

					if(/^:{1,3}/.test(rgb)){
						rge = false;
						rgb = rgb.replace(/^:{1,3}/, new String);
					}

					if(!!(/[^a-zA-Z0-9_\$]+/i['test'](rgb) || (rgb in Object.prototype))){
						return;
					}

					if((rgb in _ukeAppsDataRepository) && !(_ukeAppsDataRepository[ rgb ][ '_$$allowPartiality' ] === true)){
						return;
					}

					rgc = isFunction(rgc) ? rgc : rgc[count(rgc) - 1];

					_ukeAppsDataRepository[ rgb ] =
					_ukeAppsDataRepository[ rgb ] ||

					(new Object());

					_ukeAppsDomeRepository[ rgb ] = 
					_ukeAppsDomeRepository[ rgb ] ||

					(new Array());

					_ukeAppsDataRepository[ rgb ][ '__dts__' ] =
					_ukeAppsDataRepository[ rgb ][ '__dts__' ] ||

					({
						'domeCount': 0
					});

					_ukeAppsDataRepository[ rgb ][ '_$$allowPartiality' ] = 
					_ukeAppsDataRepository[ rgb ][ '_$$allowPartiality' ] || rge;

					var 
					__rg = (isFunction(rga[ count(rga) - 1 ])) ? [
						_ukeAppsDataRepository[ rgb ]
					] : [],

					__ar = {
						'$sel': _ukeAppsDataRepository[ rgb ],
						'$routes': _ukeRoutesObject
					};

					if(!(__rg.length >= 1)){

						for(var i = 0; i < (count(rga[ count(rga) - 1 ]) - 1); i++){

							if(isStr(rga[ count(rga) - 1 ][i]) && __ar[ rga[ count(rga) - 1 ][i] ]){
								__rg.push(__ar[ rga[ count(rga) - 1 ][i] ])
							}

						}

					}

					rgc.apply(_ukeAppsDataRepository[ rgb ], __rg);

					return _ukeAppsDataRepository[ rgb ];

				}());

			})
			["apply"]
			(this, arguments);
		}),

		"$$stringify": (function(){
			return (function(){

				if(!(count(arguments) >= 0)){
					return;
				}

				var rga = arguments,
					rgb = rga[0];

				return "object" === typeof rgb ? (function(){
					return JSON['stringify'](rgb);
				}()) : rgb + '';

			})
			["apply"]
			(this, arguments);
		})


	});
	
	$$exts({ // uke images working function

		"$$ready": g,

		"$$images": (function(){
			return (function(){

				var rga = [];

				uolkeo.$$qs(['img', 'input[type=image]'], (function(){
					rga['push'](this);
				}));

				return (rga);

			})
			["apply"]
			(this, arguments);
		}),

		"$$image": (function(i){
			return uolkeo.$$images()['length'] >= 1 ? uolkeo.$$images()[isNumber(i) ? parseInt(i) : 0] : null;
		}),

		"$$imagesCount": (function(){
			return uolkeo.count(uolkeo.$$images());
		})

	});

	$$exts({ // $$form_init

		"$$form_init": (function(){
			return (function(){

				if(!(count(arguments) >= 1)){
					return;
				}

				var rga = arguments,
					rgb = rga[0],
					rgc = null,

					rgd, // An array containig whole the node lists
					rge = a(); // Form datas

				return (!((isStr(rgb) || isHtml(rgb)))) ? null :

				(function(){

					rgb = isHtml(rgb) ? rgb : e(rgb);
					rge['__datas__'] = [];

					if(!isHtml(rgb)){
						return;
					}

					rgd = [
						rgb.querySelectorAll('input[name]'),
						rgb.querySelectorAll('select[name]'),
						rgb.querySelectorAll('textarea[name]'),
						rgb.querySelectorAll('[contenteditable=true]'),
						rgb.querySelectorAll('[contenteditable=""]')
					];

					rgd.forEach(function(nls){
						
						nls.forEach(function(no){

							if(!(no.name && !isEmpty(no))){
								return;
							}

							rge['$'+no.name] = no;
							rge.__datas__.push(''+no.name);

						});

					});

					winExtend(rga[0], rge);
					var __form__ = rgb;

					$$varExts(w[rga[0]], {

						"$$submit": (function(){
							return (function(){

								if(!(count(arguments) >= 1)){
									return;
								}

								var rga = arguments,
									rgb = rga[0] || null,
									rgc = this.__datas__,
									rge,
									rgf = this;

								return (!(count(rga) >= 1 && isFunction(rgb))) ? null :

								(function(rgd){

									uolkeo.$$onsubmit(__form__, function(evt){

										rge = a();

										for(var I = 0; I < count(rgc); I++){
											rge[ rgc[I] ] = (function(rgg){
												try{
													return (rgg.nodeName === 'INPUT' && !(rgg.type.toLowerCase() !== "file")) ? rgg.files : (rgg['value'] || rgg['innerHTML'] || '');
												}catch(err){
													return rgg.value || '';
												}
											}(rgf[ '$' + rgc[I] ]));
										}

										evt['preventDefault']();

										if(isFunction(rgb)){
											rgb['apply'](this, [rge, evt]);
										}

									});


								}(rgb));

							})
							["apply"]
							(this,arguments)
						}),

						"$$reset": (function(){
							return (function(){

								if(!(count(arguments) >= 0)){
									return;
								}


								return (!(count(arguments) >= 0)) ? null :

								(function(rga){
									
									try{
										return rga['reset']();
									}catch(err){
										return;
									}

								}(__form__));

							})
							["apply"]
							(this,arguments)
						}),

						"$$data2JSON": (function(){
							return (function(){

								if(!(count(arguments) >= 0)){
									return;
								}

								var rga = arguments,
									rgb = rga[0] || null,
									rgc = this.__datas__,
									rge,
									rgf = this;

								rge = a();


								for(var I = 0; I < count(rgc); I++){
									
									rge[ rgc[I] ] = (function(rgg){
										try{
											return (rgg.nodeName === 'INPUT' && !(rgg.type.toLowerCase() !== "file")) ?
											 
											 (function(it){
											 	return rgf[ '$' + it.name ][ '$$files' ] || it.files;
											 }(rgg)) : 

											 (rgg['value'] || rgg['innerHTML'] || '');
										}catch(err){
											return rgg.value || '';
										}
									}(rgf[ '$' + rgc[I] ]));

								}

								return (JSON['stringify'](rge));

							})
							["apply"]
							(this,arguments)
						}),

						"$$data2QueryStr": (function(){
							return (function(){

								if(!(count(arguments) >= 0)){
									return;
								}

								var rga = arguments,
									rgb = isBool(rga[0]) ? rga[0] : true,
									rgc = this.__datas__,
									rge,
									rgf = this,
									rgg = "", k;

								rge = a();


								for(var I = 0; I < count(rgc); I++){
									
									rge[ rgc[I] ] = (function(rgg){
										try{
											return (rgg.nodeName === 'INPUT' && !(rgg.type.toLowerCase() !== "file")) ?
											 
											 (function(it){
											 	return rgf[ '$' + it.name ][ '$$files' ] || it.files;
											 }(rgg)) : 

											 (rgg['value'] || rgg['innerHTML'] || '');
										}catch(err){
											return rgg.value || '';
										}
									}(rgf[ '$' + rgc[I] ]));

								}

								for(k in rge){
									rgg += (k + '=' + (rgb ? encodeURI(rge[k]) : rge[k]) + '&');
								}

								return rgg['replace'](/&$/, '');

							})
							["apply"]
							(this,arguments)
						}),


						"$$validate": (function(){
							return (function(){

								if(!(count(arguments) >= 1)){
									return;
								}

								var rga = arguments;

							})
							["apply"]
							({},arguments)
						}),

						"$$valid": (function(){
							return (function(){

								if(!(count(arguments) >= 1)){
									return;
								}

								var rga = arguments;

							})
							["apply"]
							({},arguments)
						})

					});

					// console.log(w[rga[0]])

					
					if(isFunction(rga[count(rga) - 1])){
						rga[count(rga) - 1]['apply'](w[rga[0]], [w[rga[0]]  ])
					}

				}());

			})
			["apply"]
			(this, arguments);
		})

	});

	$$exts({ // uke fields

		"$$template": (function(){
			return (function(){

			})
			["apply"]
			(this,arguments)
		}),

		"$$list": (function(){
			return (function(){

				if(!(count(arguments) >= 2)){
					return null;
				}

				var rga = arguments,
					rgb = rga[0],
					rgc = rga[count(rga) - 1];

				return (!((isHtml(rgb) || isStr(rgb)))) ? null :
				
				(function(){

					rgb = isHtml(rgb) ? rgb : (function(r){
						return /^\$/['test'](r) ? e('[name='+r['replace'](/^\$/,'') +']') : e(rgb);
					}(rgb));

					if(!isHtml(rgb)){
						return;
					}

					uolkeo.$$varExts(rgb, {

						"item": (function(i){
							return rgb['children'] ? rgb['children'][i] :
								   rgb['childNodes'] ? rgb['childNodes'][i] : null;
						}),

						"items": {
							"count": (function(i){
								return rgb['children'] ? rgb['children']['length'] :
									   rgb['childNodes'] ? rgb['childNodes']['length'] : null;
							}),
							"add": (function(){
								return (function(){

									if(!(count(arguments) >= 1)){
										return;
									}

									var l = arguments[0],it,el = rgb.nodeName === 'SELECT' ? 'option' : 'li';

									if(isArray(l)){
										for(var _i = 0; _i < count(l); _i++){
											rgb.items.add(l[_i]);
										}
										return;
									}

									rgb.appendChild((function(){
										it = d['createElement'](el);
										it.innerHTML = l;
										if('option' == el){
											it.value = (rgb.items.count() + 1);
										}
										return it;
									}()));

								})
								["apply"]
								(this,arguments)
							}),
							"clear": (function(){
								rgb.innerHTML='';
							}),
							"removeAll": (function(){
								rgb.innerHTML='';
							}),
							"removeAt": (function(){
								return (!(count(arguments) >= 1)) ? null :
								(function(){

									var _i = !isNaN(arguments[0]) ? parseInt(arguments[0]) : null,
										_it;

									if(isNaN(_i)){
										return;
									}

									_it = rgb.item(_i);

									if(isHtml(_it)){
										_it.parentNode.removeChild(_it);
									}

								})
								['apply']
								(this,arguments);
							}),
							"remove": (function(i){
								return (!(count(arguments) >= 1)) ? null :
								(function(){

									var _i = !isNaN(arguments[0]) ? parseInt(arguments[0]) : null,
										_it;

									if(isNaN(_i)){
										return;
									}

									_it = rgb.item(_i);

									if(isHtml(_it)){
										_it.parentNode.removeChild(_it);
									}

								})
								['apply']
								(this,arguments);
							})
						}

					});

					uolkeo.winExtend(rga[0], rgb);
					if(isFunction(rgc)){
						rgc.apply(rgb, [rgb]);
					}

				}());

			})
			["apply"]
			(this,arguments)
		}),

		"$$data_field": (function(){
			return (function(){

				if(!(count(arguments) >= 1)){
					return;
				}

				var rga = arguments;

			})
			["apply"]
			(this, arguments);
		}),

		"$$longText_field": (function(){
			return (function(){

				if(!(count(arguments) >= 1)){
					return;
				}

				var rga = arguments;

			})
			["apply"]
			(this, arguments);
		}),

		"$$file_field": (function(){
			return (function(){

				if(!(count(arguments) >= 1)){
					return;
				}

				var rga = arguments;

			})
			["apply"]
			(this, arguments);
		}),

		"$$date_select": (function(){
			return (function(){

				if(!(count(arguments) >= 1)){
					return;
				}

				var rga = arguments, 
					rgb = rga[0],
					rgc = isObject(rga[1]) ? rga[1] : a();

				return (!((isArray(rgb) || isObject(rgb)) && isObject(rgc))) ? null :

				(function(){

					isArray(rgb) ?

					(function(){
						
						for(var i = 0; i < count(rgb); i++){

							if(!isStr(rgb[i])){
								continue;
							}

							var _re = /^(day|mon(th|)|year)\:{1,}/gim,
								p = rgb[i]['match'](_re), v;

							if(!p){
								continue;
							}

							p = p[0]['replace'](/\:{1,}$/g, '');
							v = rgb[i]['replace'](_re, '');

							rgc[p] = uolkeo.$$qs((function(){
								return /^\$/['test'](v) ? '[name='+v['replace'](/^\$/,'')+']' : v;
							}()));

						}

					}()) : isObject(rgb) ?

					(function(){
						for(var k in rgb){
							rgc[k] = uolkeo.$$qs((function(v){
								return /^\$/['test'](v) ? '[name='+v['replace'](/^\$/,'')+']' : v;
							}(rgb[k])));
						}
					}()) : (function(){
						return;
					}());

					(function(D){

						if(!isHtml(D) || (D.nodeName !== 'SELECT')){
							return;
						}

						uolkeo.$$list(D, function(){
							this.items.add( uolkeo.$$range(1, 31) );
						});

					}(rgc['day']));

					(function(M){

						if(!isHtml(M) || (M.nodeName !== 'SELECT')){
							return;
						}

						uolkeo.$$list(M, function(){
							
							this.items.add((function(){
								
								if(rgc.mon_format){

									if(inArray(rgc.mon_format, [':num', ':number', '::n', '', null, undefined])){
										return uolkeo.$$range(1, 12);
									}
									else if(inArray(rgc.mon_format, [':nam', ':name', '::nm'])){
										return _ukeDatas.months;
									}
									else if(inArray(rgc.mon_format, [':nam_abbr', ':name_abbr', '::nm_abbr'])){
										return _ukeDatas.months_abbr;
									}

								}else{
									return uolkeo.$$range(1, 12);
								}

							}()));

						});

					}(rgc['mon'] || rgc['month']));

					(function(Y){

						if(!isHtml(Y) || (Y.nodeName !== 'SELECT')){
							return;
						}

						var miy = !isNaN(rgc.min_year) ? parseInt(rgc.min_year) : !isNaN(rgc.miny) ? parseInt(rgc.miny) :
								 (function(){
								 	return parseInt(new Date().getFullYear() - 30)
								 }()),

							may = !isNaN(rgc.max_year) ? parseInt(rgc.max_year) : !isNaN(rgc.maxy) ? parseInt(rgc.maxy) :
								  (function(){
								  	return parseInt(new Date().getFullYear() - 0)
								  }());

						uolkeo.$$list(Y, function(){
							this.items.add( uolkeo.$$range(miy, may) );
						});

					}(rgc['year']));


				}());

			})
			["apply"]
			(this,arguments)
		}),

		"$$time_select": (function(){
			return (function(){

				if(!(count(arguments) >= 1)){
					return;
				}

				var rga = arguments, 
					rgb = rga[0],
					rgc = isObject(rga[1]) ? rga[1] : a();

				return (!((isArray(rgb) || isObject(rgb)) && isObject(rgc))) ? null :

				(function(){

					isArray(rgb) ?

					(function(){
						
						for(var i = 0; i < count(rgb); i++){

							if(!isStr(rgb[i])){
								continue;
							}

							var _re = /^(hour|min(utes|)|sec)\:{1,}/gim,
								p = rgb[i]['match'](_re), v;

							if(!p){
								continue;
							}

							p = p[0]['replace'](/\:{1,}$/g, '');
							v = rgb[i]['replace'](_re, '');

							rgc[p] = uolkeo.$$qs((function(){
								return /^\$/['test'](v) ? '[name='+v['replace'](/^\$/,'')+']' : v;
							}()));

						}

					}()) : isObject(rgb) ?

					(function(){
						for(var k in rgb){
							rgc[k] = uolkeo.$$qs((function(v){
								return /^\$/['test'](v) ? '[name='+v['replace'](/^\$/,'')+']' : v;
							}(rgb[k])));
						}
					}()) : (function(){
						return;
					}());

					(function(H){

						if(!isHtml(H) || (H.nodeName !== 'SELECT')){
							return;
						}

						uolkeo.$$list(H, function(){
							this.items.add( uolkeo.$$range(0, 23) );
						});

					}(rgc['hour']));

					(function(M){

						if(!isHtml(M) || (M.nodeName !== 'SELECT')){
							return;
						}

						uolkeo.$$list(M, function(){
							
							this.items.add((function(){
								return uolkeo.$$range(0, 59);
							}()));

						});

					}(rgc['min'] || rgc['minutes']));

					(function(S){

						if(!isHtml(S) || (S.nodeName !== 'SELECT')){
							return;
						}

						uolkeo.$$list(S, function(){
							this.items.add( uolkeo.$$range(0, 59) );
						});

					}(rgc['sec']));


				}());

			})
			["apply"]
			(this,arguments)
		})

	});

	$$exts({

		"$$$dc": (
		function(){
			return (function(){

				if(!(count(arguments) >= 2)){
					return;
				}

				var rga = arguments,
					rgb = rga[0],
					rgc = rga[ count(rga) - 1 ],

					rgd = /^(data|uke|uk)/i, rge, rgf;

				return (!!((isArray(rgb)) && isFunction(rgc))) ? (function(){

					for(var i = 0; i < count(rgb); i++){
						uolkeo.$$$dc(rgb[i], rgc);
					}

				}()) :

				(!((isStr(rgb)) && isFunction(rgc))) ? null :

				(function(){

					rge = uolkeo.toLower( rgb[ 'replace' ]( rgd, new String )[ 'trim' ]() );
					rgf = uolkeo.toLower( rgb[ 'match' ]( rgd ) ? rgb[ 'match' ]( rgd )[ 0 ] : null );

					if(!rgf){
						return;
					}

					_ukeAppsDirectiveAppliedElements[ rgb ] =
					_ukeAppsDirectiveAppliedElements[ rgb ] ||
					(new Array());

					_ukeAppsDirectiveAppliedElementsArgs[ rgb ] =
					_ukeAppsDirectiveAppliedElementsArgs[ rgb ] ||
					(new Array());

					uolkeo.$$everdo(function(){

						uolkeo.$$qs(('[' + (s(rgb)) + ']'), function(){

							var __a__ = this['getAttribute'](rgf + '-' + rge);

							this[ rgb ] = 
							this[ rgb ] || __a__;
							
							rgc['apply'](this, [ this[rgb], rgb ]);

						});

					});

				}());

			})
			["apply"]
			(this, arguments);
		})

	});

	L = (function(lpr){ // LOOP
		return (function(){
			return (isFunction && isFunction(lpr)) ? lpr['apply']({},[_ukeLoopers]) : null;
		}());
	}(function(lprs){

		var __i__ = c(function(){

			lprs['forEach'](function(l){

				if(!(isFunction(l))){
					return;
				}

				window.requestAnimationFrame(l);

			});

			window.requestAnimationFrame(__i__);

		});

		return __i__;

	}));

	L();
	D = uolkeo.$$dir;
	A = uolkeo.$$app;
	E = uolkeo.$$$dc;

	uolkeo.$format = 
	uolkeo.$format ||
	uolkeo.$$format;

	g(function(){

		uolkeo['$document'] = (function(d){return d;}(window['document']));
		uolkeo['$body'] = (function(d){return d;}(window['document']['documentElement']));

		_ukeConfigVariables.frm_autoinit = 
		_ukeConfigVariables.frm_autoinit  ||
		_ukeConfigVariables.form_autoinit ||
		_ukeConfigVariables.frmautoinit   ||
		_ukeConfigVariables.formautoinit  || "!1";

		uolkeo.$$qs(["input[type=file]"], function(){

			uolkeo.$$onchange(this, function(){
				
				if(!w['FileReader'] || !(this.name && !(isEmpty(this.name)))){
					return;
				}

				var 
				fs = this.files,
				_name = this.name;
				$it = this;

				this.$$files = isArray(this.$$files) ? this.$$files : new Array;

				for(var index = 0; index < count(fs); index++){

					(function(reader, indx){

						reader.readAsDataURL(fs[index]);

						reader.onloadend = (function(){

							if(isHtml(uolkeo.$$qs("$" + _name + "_logger"))){
								
								uolkeo.$$qs("$" + _name + "_logger").appendChild((function(r){
									
									var im = d.createElement('img'), imd;
									im.src = r;

									imd = {
										"src": r
									};

									$$varExts(imd, fs[indx]);

									$it.$$files.push(imd);
									return im;

								}(reader.result)))

							}

						});

					}(new window['FileReader'](), index));

				}

			});


		});

	});

	g(function(){

		if(inArray(_ukeConfigVariables.frm_autoinit, ['1', 'true', 'on', 't', 'o'])){
		
			e("form", (function(){

				if(this.name && !isEmpty(this.name)){
					uolkeo.$$form_init("$" + this.name);
				}

			}));

		}
		
	});

	_ukeAppsDirectiveDefaultCallBack = c(
	function(){
		return (function(){

			if(!(count(arguments) >= 1 && isStr(arguments[0]))){
				return;
			}

			var 
			rga = arguments,
			rgb = rga[0], // App Name
			rgc = rga[1],
			rgd;

			return (!(_ukeAppsDirectiveAppliedElements[ rgc ]['indexOf'](this) < 0)) ? null :

			(function(){
				
				_ukeAppsDirectiveAppliedElements[ rgc ]['push']( this );
				rgd = _ukeAppsDirectiveAppliedElements[ rgc ]['indexOf'](this);

				_ukeAppsDirectiveAppliedElementsArgs[ rgc ][ rgd ] = 
				_ukeAppsDirectiveAppliedElementsArgs[ rgc ][ rgd ] || [];

				_ukeAppsDirectiveAppliedElementsArgs[ rgc ][ rgd ]['push']( rga );
				
			})
			['apply']
			(this, []);

		})
		['apply']
		(this, arguments);
	});

	/*
		Create uolkeo default directives
	*/

	// data-...

	D(['dataOutput'], function(i){
		
		this.innerHTML = (function(t){

			if(isHtml(uolkeo.$$(i))){

				var ta = uolkeo.$$(i);

				return (ta.nodeName === 'INPUT' && ta.type.toLowerCase() == 'file') ?
						(function(){

							return (ta.$$files && isArray(ta.$$files)) ?
									JSON['stringify'](ta.$$files) :
									JSON['stringify'](ta.files);

						}()) :

						ta.value || ta.innerHTML || null;

			}

		}(this));

	});

	// uke-...

	D(['ukeTime'], function(s){

		var da = new Date(),

			tdatas;

		tdatas = {
			'H': da.getHours(),
			'h': da.getHours(),
			'M': da.getMinutes(),
			'm': da.getMinutes(),
			'S': da.getSeconds(),
			's': da.getSeconds()
		}

		this.innerHTML = uolkeo.$$format(s, tdatas);

	});

	D(['ukeDate'], function(s){

		var da = new Date(),

			tdatas;

		tdatas = {
			'D': da.getDay(),
			'd': da.getDay(),
			'M': da.getMonth(),
			'm': da.getMonth(),
			'Y': da.getYear(),
			'y': da.getYear()
		}

		this.innerHTML = uolkeo.$$format(s, tdatas);

	});

	// uk-...

	D(['ukApp'], function(){
		return (function(){

			if(!(count(arguments) >= 1 && isStr(arguments[0]))){
				return;
			}

			var 
			rga = arguments,
			rgb = rga[0], // App Name
			rgc, // App dome Repository
			_r = this,
			rge,

			_ukeAppDataRepository = _ukeAppsDataRepository[rgb];

			rgc = (function(){
				// Get the App dome Repository
				return o(this, rgb, _ukeAppsDataRepository[rgb]);
			}['apply'](this,[]));

			return (!(isArray(rgc))) ? null :

			(function(){

				rgc.forEach(
				function(rgd){

					// 4instanceof window.Text
					if(!(rgd.nodeType !== 3)){
						
						rgd.__d__ = 
						rgd.__d__ || a();

						rgd.__d__.$$text =
						rgd.__d__.$$text || rgd.wholeText;

						var _newData = t((rgd.__d__.$$text), rgb);

						if(rgd.data !== _newData){
							rgd.data = ( _newData );
						}

					}else if(!(rgd.nodeType !== 1)){

						var _attrs = u(rgd);

						rgd.__attrs__ = 
						rgd.__attrs__ || a();

						if(!!(count(_attrs) >= 1)){

							_attrs.forEach(
							function(_attr){

								var _$$attr = rgd.__attrs__[_attr] = 
											   rgd.__attrs__[_attr] || 
											   rgd.getAttribute(_attr),
									
									_newData = t(_$$attr, rgb);

								if(rgd.getAttribute(_attr) !== _newData){
									rgd.setAttribute(_attr, _newData);
								}

							});

						}

					}

				});

			}());

		})
		['apply']
		(this, arguments);
	});

	D(['ukInput'], function(){
		return (function(){

			if(!(count(arguments) >= 1 && isStr(arguments[0]) && this.ukApp)){
				return;
			}

			var 
			rga = arguments,
			rgb = rga[0], // Var Reference
			rgc, // App dome Repository
			_r = this,
			rge,

			_ukeAppDataRepository = _ukeAppsDataRepository[rgb];

			(function(){

				var _exvrcd = "_ukeAppsDataRepository[_r.ukApp]." + rgb,
					_itsval = inArray(uolkeo.toLower(_r.nodeName), ['input', 'select', 'textarea']) ? _r.value : _r.innerText;

				eval('try{ '+_exvrcd+' = "'+_itsval+'"; }catch(err){alert(err)}')

			}());

		})
		['apply']
		(this, arguments);
	});

	D(['ukModel'], function(){
		return (function(){

			if(!(count(arguments) >= 1 && isStr(arguments[0]) && this.ukApp)){
				return;
			}

			var 
			rga = arguments,
			rgb = rga[0], // Var Reference
			rgc, // App dome Repository
			_r = this,
			rge,

			_ukeAppDataRepository = _ukeAppsDataRepository[rgb];

			(function(){

				var _exvrcd = "_ukeAppsDataRepository[_r.ukApp]." + rgb,
					_itsval = inArray(uolkeo.toLower(_r.nodeName), ['input', 'select', 'textarea']) ? _r.value : _r.innerText;
				
				eval('try{ '+_exvrcd+' = "'+_itsval+'"; }catch(err){alert(err)}')

			}());

		})
		['apply']
		(this, arguments);
	});

	D(['ukBind', 'ukDataBind', 'ukOutput'], function(){
		return (function(){

			if(!(count(arguments) >= 1 && isStr(arguments[0]) && this.ukApp)){
				return;
			}

			var 
			rga = arguments,
			rgb = rga[0], // Var Reference
			rgc, // App data Repository
			_r = this,
			rge,

			_ukeAppDataRepository = _ukeAppsDataRepository[this.ukApp];

			(function(){

				with(_ukeAppDataRepository){

					try{

						var _nd = eval('typeof undefined !== typeof (' + rgb + ") ? " + rgb + " : \"\""),
							_newData = uolkeo.$$format(_nd, _ukeAppDataRepository);

						if(_r.innerHTML !== _newData){
							_r.innerHTML = (_newData);
						}

					}catch(err){

					}

				}

			}());

		})
		['apply']
		(this, arguments);
	});

	D(['ukShow', 'ukHide'], function(){
		return (function(){

			if(!(count(arguments) >= 1 && isStr(arguments[0]) && this.ukApp)){
				return;
			}

			var 
			rga = arguments,
			rgb = rga[0], // Sent condition
			rgc = rga[1], // Directive
			_r = this,
			rge,

			_ukeAppDataRepository = _ukeAppsDataRepository[_r.ukApp];

			(function(){

				this.$$ukShowHide =
				this.$$ukShowHide || rgb;

				with(_ukeAppDataRepository){
					
					try{

						if(!('ukHide' !== rgc)){
							
							this.$$display = 
							this.$$display ||
							window.getComputedStyle(this)['display'];

							if(eval(rgb)){
								this.style.display = 'none';
							}else{
								this.style.display = this.$$display;
							}

						}else{
							
							this.$$display = 
							this.$$display ||
							window.getComputedStyle(this)['display'];

							if(!eval(rgb)){
								this.style.display = 'none';
							}else{
								this.style.display = this.$$display;
							}

						}

					}catch(err){
						// Error
					}

				}

			}
			['apply'](this,[]));

		})
		['apply']
		(this, arguments);
	});

	D(['ukDisabled'], function(){
		return (function(){

			if(!(count(arguments) >= 1 && isStr(arguments[0]) && this.ukApp)){
				return;
			}

			var 
			rga = arguments,
			rgb = rga[0], // Sent condition
			rgc = rga[1], // Directive
			_r = this,
			rge,

			_ukeAppDataRepository = _ukeAppsDataRepository[_r.ukApp];

			(function(){

				with(_ukeAppDataRepository){
					
					try{

						if(eval(rgb)){
							this.setAttribute('disabled', 'disabled');
						}else{
							this.removeAttribute('disabled');
						}

					}catch(err){
						// Error
					}

				}

			}
			['apply'](this,[]));

		})
		['apply']
		(this, arguments);
	});

	D(['ukClick'], function(){
		return (function(){

			if(!(count(arguments) >= 1 && isStr(arguments[0]) && this.ukApp)){
				return;
			}

			var 
			rga = arguments,
			rgb = rga[0], // CallBack
			rgc = rga[1], // Directive
			_r = this,
			rge,

			_ukeAppDataRepository = _ukeAppsDataRepository[_r.ukApp];

			(function(_ukeAppDataRepository){

				this.$$ukClick =
				this.$$ukClick || rgb;
				this.__d__ = this.__d__ || a();

				this.__d__.$$ukc = 
				this.__d__.$$ukc || false;

				if(!this.__d__.$$ukc){

					f(this, 'click', 
					function(){

						with(_ukeAppDataRepository){
							try{
								eval(this.$$ukClick);
							}catch(err){
								// ...
							}
						}

					});

					this.__d__.$$ukc = true;

				}

			}
			['apply'](this,[_ukeAppDataRepository]));

		})
		['apply']
		(this, arguments);
	});

	D(['ukGrid', 'ukDataGrid'], function(){
		return (function(){

			if(!(count(arguments) >= 1 && isStr(arguments[0]) && this.ukApp && !(this.nodeName.toLowerCase() !== 'table'))){
				return;
			}

			var
			rga = arguments,
			rgb = rga[0], // Var Reference
			rgc, // App dome Repository
			_r = this,
			rge,

			_ukeAppDataRepository = _ukeAppsDataRepository[rgb],

			rgf;

			(function(){

				var _exvrcd = "_ukeAppsDataRepository[_r.ukApp]." + rgb;

				eval('try{rge = '+ _exvrcd +' || undefined;}catch(err){console.log(err)}')

				if(!isArray(rge)){
					return;
				}

				rgf = x(rge, _r, rgb);

			}());

		})
		['apply']
		(this, arguments);
	});

	D(['ukIf'], function(){
		return (function(){

			if(!(count(arguments) >= 1 && isStr(arguments[0]) && this.ukApp)){
				return;
			}

			var 
			rga = arguments,
			rgb = rga[0], // Sent condition
			rgc = rga[1], // Directive
			_r = this,
			rge,

			_ukeAppDataRepository = _ukeAppsDataRepository[_r.ukApp];

			(function(){

				if(!inArray(this, _ukeAppsDirsPropertyElements)){
					_ukeAppsDirsPropertyElements.push(this);
					_ukeAppsDirsValueElements.push(this.innerHTML);
				}

				with(_ukeAppDataRepository){
					
					try{

						if(!eval(rgb)){
							z(this);
						}
						else if(!rgexp_jwhitespace.test(this.innerHTML)){
							
							this.innerHTML = (_ukeAppsDirsValueElements[  
								_ukeAppsDirsPropertyElements.indexOf(this)
							]);

						}

					}catch(err){
						// Error
					}

				}

			}
			['apply'](this,[]));

		})
		['apply']
		(this, arguments);
	});

	
	uolkeo.$$everdo(
	function(){

		for(var key in _ukeAppsDirectiveAppliedElements){

			if(!(_ukeAppsDirectiveAppliedElementsArgs[key] && isFunction(_ukeAppsDirectiveCallBacks[key]) && isArray(_ukeAppsDirectiveAppliedElements[key]))){
				continue;
			}

			_ukeAppsDirectiveAppliedElements[key]['forEach'](
			function(el, i){

				//alert(_ukeAppsDirectiveAppliedElementsArgs[key][i])
				_ukeAppsDirectiveCallBacks[key]['apply'](
					el, _ukeAppsDirectiveAppliedElementsArgs[key][i][0]
				);

			});

		}

	});





	$$varExts(_ukeDatas, {
		"months": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		"months_abbr": ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		"days": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		"days_abbr": ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	});

	
	

}
(window,window['document']));