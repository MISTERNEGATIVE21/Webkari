! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	"use strict";
	var i = [],
		n = e.document,
		o = Object.getPrototypeOf,
		s = i.slice,
		r = i.concat,
		a = i.push,
		l = i.indexOf,
		u = {},
		c = u.toString,
		d = u.hasOwnProperty,
		h = d.toString,
		p = h.call(Object),
		f = {},
		m = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType
		},
		g = function(e) {
			return null != e && e === e.window
		},
		v = {
			type: !0,
			src: !0,
			noModule: !0
		};

	function y(e, t, i) {
		var o, s = (t = t || n).createElement("script");
		if (s.text = e, i)
			for (o in v) i[o] && (s[o] = i[o]);
		t.head.appendChild(s).parentNode.removeChild(s)
	}

	function b(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[c.call(e)] || "object" : typeof e
	}
	var w = function(e, t) {
			return new w.fn.init(e, t)
		},
		_ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	function x(e) {
		var t = !!e && "length" in e && e.length,
			i = b(e);
		return !m(e) && !g(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	w.fn = w.prototype = {
		jquery: "3.3.1",
		constructor: w,
		length: 0,
		toArray: function() {
			return s.call(this)
		},
		get: function(e) {
			return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = w.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return w.each(this, e)
		},
		map: function(e) {
			return this.pushStack(w.map(this, function(t, i) {
				return e.call(t, i, t)
			}))
		},
		slice: function() {
			return this.pushStack(s.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				i = +e + (e < 0 ? t : 0);
			return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: a,
		sort: i.sort,
		splice: i.splice
	}, w.extend = w.fn.extend = function() {
		var e, t, i, n, o, s, r = arguments[0] || {},
			a = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof r && (u = r, r = arguments[a] || {}, a++), "object" == typeof r || m(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
			if (null != (e = arguments[a]))
				for (t in e) i = r[t], r !== (n = e[t]) && (u && n && (w.isPlainObject(n) || (o = Array.isArray(n))) ? (o ? (o = !1, s = i && Array.isArray(i) ? i : []) : s = i && w.isPlainObject(i) ? i : {}, r[t] = w.extend(u, s, n)) : void 0 !== n && (r[t] = n));
		return r
	}, w.extend({
		expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, i;
			return !(!e || "[object Object]" !== c.call(e) || (t = o(e)) && ("function" != typeof(i = d.call(t, "constructor") && t.constructor) || h.call(i) !== p))
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function(e) {
			y(e)
		},
		each: function(e, t) {
			var i, n = 0;
			if (x(e))
				for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
			else
				for (n in e)
					if (!1 === t.call(e[n], n, e[n])) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(_, "")
		},
		makeArray: function(e, t) {
			var i = t || [];
			return null != e && (x(Object(e)) ? w.merge(i, "string" == typeof e ? [e] : e) : a.call(i, e)), i
		},
		inArray: function(e, t, i) {
			return null == t ? -1 : l.call(t, e, i)
		},
		merge: function(e, t) {
			for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
			return e.length = o, e
		},
		grep: function(e, t, i) {
			for (var n = [], o = 0, s = e.length, r = !i; o < s; o++) !t(e[o], o) !== r && n.push(e[o]);
			return n
		},
		map: function(e, t, i) {
			var n, o, s = 0,
				a = [];
			if (x(e))
				for (n = e.length; s < n; s++) null != (o = t(e[s], s, i)) && a.push(o);
			else
				for (s in e) null != (o = t(e[s], s, i)) && a.push(o);
			return r.apply([], a)
		},
		guid: 1,
		support: f
	}), "function" == typeof Symbol && (w.fn[Symbol.iterator] = i[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		u["[object " + t + "]"] = t.toLowerCase()
	});
	var C = function(e) {
		var t, i, n, o, s, r, a, l, u, c, d, h, p, f, m, g, v, y, b, w = "sizzle" + 1 * new Date,
			_ = e.document,
			x = 0,
			C = 0,
			S = re(),
			T = re(),
			E = re(),
			$ = function(e, t) {
				return e === t && (d = !0), 0
			},
			k = {}.hasOwnProperty,
			A = [],
			D = A.pop,
			j = A.push,
			O = A.push,
			I = A.slice,
			N = function(e, t) {
				for (var i = 0, n = e.length; i < n; i++)
					if (e[i] === t) return i;
				return -1
			},
			L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			P = "[\\x20\\t\\r\\n\\f]",
			z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			M = "\\[" + P + "*(" + z + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + P + "*\\]",
			q = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
			W = new RegExp(P + "+", "g"),
			H = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
			F = new RegExp("^" + P + "*," + P + "*"),
			R = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
			B = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
			Q = new RegExp(q),
			U = new RegExp("^" + z + "$"),
			V = {
				ID: new RegExp("^#(" + z + ")"),
				CLASS: new RegExp("^\\.(" + z + ")"),
				TAG: new RegExp("^(" + z + "|[*])"),
				ATTR: new RegExp("^" + M),
				PSEUDO: new RegExp("^" + q),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + L + ")$", "i"),
				needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
			},
			G = /^(?:input|select|textarea|button)$/i,
			Y = /^h\d$/i,
			K = /^[^{]+\{\s*\[native \w/,
			X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			Z = /[+~]/,
			J = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
			ee = function(e, t, i) {
				var n = "0x" + t - 65536;
				return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
			},
			te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ie = function(e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			ne = function() {
				h()
			},
			oe = ye(function(e) {
				return !0 === e.disabled && ("form" in e || "label" in e)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			O.apply(A = I.call(_.childNodes), _.childNodes), A[_.childNodes.length].nodeType
		} catch (e) {
			O = {
				apply: A.length ? function(e, t) {
					j.apply(e, I.call(t))
				} : function(e, t) {
					for (var i = e.length, n = 0; e[i++] = t[n++];);
					e.length = i - 1
				}
			}
		}

		function se(e, t, n, o) {
			var s, a, u, c, d, f, v, y = t && t.ownerDocument,
				x = t ? t.nodeType : 9;
			if (n = n || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return n;
			if (!o && ((t ? t.ownerDocument || t : _) !== p && h(t), t = t || p, m)) {
				if (11 !== x && (d = X.exec(e)))
					if (s = d[1]) {
						if (9 === x) {
							if (!(u = t.getElementById(s))) return n;
							if (u.id === s) return n.push(u), n
						} else if (y && (u = y.getElementById(s)) && b(t, u) && u.id === s) return n.push(u), n
					} else {
						if (d[2]) return O.apply(n, t.getElementsByTagName(e)), n;
						if ((s = d[3]) && i.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(s)), n
					} if (i.qsa && !E[e + " "] && (!g || !g.test(e))) {
					if (1 !== x) y = t, v = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						for ((c = t.getAttribute("id")) ? c = c.replace(te, ie) : t.setAttribute("id", c = w), a = (f = r(e)).length; a--;) f[a] = "#" + c + " " + ve(f[a]);
						v = f.join(","), y = Z.test(e) && me(t.parentNode) || t
					}
					if (v) try {
						return O.apply(n, y.querySelectorAll(v)), n
					} catch (e) {} finally {
						c === w && t.removeAttribute("id")
					}
				}
			}
			return l(e.replace(H, "$1"), t, n, o)
		}

		function re() {
			var e = [];
			return function t(i, o) {
				return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = o
			}
		}

		function ae(e) {
			return e[w] = !0, e
		}

		function le(e) {
			var t = p.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function ue(e, t) {
			for (var i = e.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = t
		}

		function ce(e, t) {
			var i = t && e,
				n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (n) return n;
			if (i)
				for (; i = i.nextSibling;)
					if (i === t) return -1;
			return e ? 1 : -1
		}

		function de(e) {
			return function(t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}

		function he(e) {
			return function(t) {
				var i = t.nodeName.toLowerCase();
				return ("input" === i || "button" === i) && t.type === e
			}
		}

		function pe(e) {
			return function(t) {
				return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function fe(e) {
			return ae(function(t) {
				return t = +t, ae(function(i, n) {
					for (var o, s = e([], i.length, t), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
				})
			})
		}

		function me(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}
		for (t in i = se.support = {}, s = se.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, h = se.setDocument = function(e) {
				var t, o, r = e ? e.ownerDocument || e : _;
				return r !== p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement, m = !s(p), _ !== p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ne, !1) : o.attachEvent && o.attachEvent("onunload", ne)), i.attributes = le(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), i.getElementsByTagName = le(function(e) {
					return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
				}), i.getElementsByClassName = K.test(p.getElementsByClassName), i.getById = le(function(e) {
					return f.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
				}), i.getById ? (n.filter.ID = function(e) {
					var t = e.replace(J, ee);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}, n.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && m) {
						var i = t.getElementById(e);
						return i ? [i] : []
					}
				}) : (n.filter.ID = function(e) {
					var t = e.replace(J, ee);
					return function(e) {
						var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
						return i && i.value === t
					}
				}, n.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && m) {
						var i, n, o, s = t.getElementById(e);
						if (s) {
							if ((i = s.getAttributeNode("id")) && i.value === e) return [s];
							for (o = t.getElementsByName(e), n = 0; s = o[n++];)
								if ((i = s.getAttributeNode("id")) && i.value === e) return [s]
						}
						return []
					}
				}), n.find.TAG = i.getElementsByTagName ? function(e, t) {
					return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var i, n = [],
						o = 0,
						s = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; i = s[o++];) 1 === i.nodeType && n.push(i);
						return n
					}
					return s
				}, n.find.CLASS = i.getElementsByClassName && function(e, t) {
					if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
				}, v = [], g = [], (i.qsa = K.test(p.querySelectorAll)) && (le(function(e) {
					f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
				}), le(function(e) {
					e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var t = p.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
				})), (i.matchesSelector = K.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le(function(e) {
					i.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", q)
				}), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(f.compareDocumentPosition), b = t || K.test(f.contains) ? function(e, t) {
					var i = 9 === e.nodeType ? e.documentElement : e,
						n = t && t.parentNode;
					return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, $ = t ? function(e, t) {
					if (e === t) return d = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === p || e.ownerDocument === _ && b(_, e) ? -1 : t === p || t.ownerDocument === _ && b(_, t) ? 1 : c ? N(c, e) - N(c, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return d = !0, 0;
					var i, n = 0,
						o = e.parentNode,
						s = t.parentNode,
						r = [e],
						a = [t];
					if (!o || !s) return e === p ? -1 : t === p ? 1 : o ? -1 : s ? 1 : c ? N(c, e) - N(c, t) : 0;
					if (o === s) return ce(e, t);
					for (i = e; i = i.parentNode;) r.unshift(i);
					for (i = t; i = i.parentNode;) a.unshift(i);
					for (; r[n] === a[n];) n++;
					return n ? ce(r[n], a[n]) : r[n] === _ ? -1 : a[n] === _ ? 1 : 0
				}, p) : p
			}, se.matches = function(e, t) {
				return se(e, null, null, t)
			}, se.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== p && h(e), t = t.replace(B, "='$1']"), i.matchesSelector && m && !E[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
					var n = y.call(e, t);
					if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {}
				return se(t, p, null, [e]).length > 0
			}, se.contains = function(e, t) {
				return (e.ownerDocument || e) !== p && h(e), b(e, t)
			}, se.attr = function(e, t) {
				(e.ownerDocument || e) !== p && h(e);
				var o = n.attrHandle[t.toLowerCase()],
					s = o && k.call(n.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
				return void 0 !== s ? s : i.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
			}, se.escape = function(e) {
				return (e + "").replace(te, ie)
			}, se.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, se.uniqueSort = function(e) {
				var t, n = [],
					o = 0,
					s = 0;
				if (d = !i.detectDuplicates, c = !i.sortStable && e.slice(0), e.sort($), d) {
					for (; t = e[s++];) t === e[s] && (o = n.push(s));
					for (; o--;) e.splice(n[o], 1)
				}
				return c = null, e
			}, o = se.getText = function(e) {
				var t, i = "",
					n = 0,
					s = e.nodeType;
				if (s) {
					if (1 === s || 9 === s || 11 === s) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) i += o(e)
					} else if (3 === s || 4 === s) return e.nodeValue
				} else
					for (; t = e[n++];) i += o(t);
				return i
			}, (n = se.selectors = {
				cacheLength: 50,
				createPseudo: ae,
				match: V,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, i = !e[6] && e[2];
						return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && Q.test(i) && (t = r(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(J, ee).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = S[e + " "];
						return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && S(e, function(e) {
							return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, t, i) {
						return function(n) {
							var o = se.attr(n, e);
							return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o.replace(W, " ") + " ").indexOf(i) > -1 : "|=" === t && (o === i || o.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function(e, t, i, n, o) {
						var s = "nth" !== e.slice(0, 3),
							r = "last" !== e.slice(-4),
							a = "of-type" === t;
						return 1 === n && 0 === o ? function(e) {
							return !!e.parentNode
						} : function(t, i, l) {
							var u, c, d, h, p, f, m = s !== r ? "nextSibling" : "previousSibling",
								g = t.parentNode,
								v = a && t.nodeName.toLowerCase(),
								y = !l && !a,
								b = !1;
							if (g) {
								if (s) {
									for (; m;) {
										for (h = t; h = h[m];)
											if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
										f = m = "only" === e && !f && "nextSibling"
									}
									return !0
								}
								if (f = [r ? g.firstChild : g.lastChild], r && y) {
									for (b = (p = (u = (c = (d = (h = g)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();)
										if (1 === h.nodeType && ++b && h === t) {
											c[e] = [x, p, b];
											break
										}
								} else if (y && (b = p = (u = (c = (d = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === x && u[1]), !1 === b)
									for (;
										(h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((c = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [x, b]), h !== t)););
								return (b -= o) === n || b % n == 0 && b / n >= 0
							}
						}
					},
					PSEUDO: function(e, t) {
						var i, o = n.pseudos[e] || n.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
						return o[w] ? o(t) : o.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, i) {
							for (var n, s = o(e, t), r = s.length; r--;) e[n = N(e, s[r])] = !(i[n] = s[r])
						}) : function(e) {
							return o(e, 0, i)
						}) : o
					}
				},
				pseudos: {
					not: ae(function(e) {
						var t = [],
							i = [],
							n = a(e.replace(H, "$1"));
						return n[w] ? ae(function(e, t, i, o) {
							for (var s, r = n(e, null, o, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
						}) : function(e, o, s) {
							return t[0] = e, n(t, null, s, i), t[0] = null, !i.pop()
						}
					}),
					has: ae(function(e) {
						return function(t) {
							return se(e, t).length > 0
						}
					}),
					contains: ae(function(e) {
						return e = e.replace(J, ee),
							function(t) {
								return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
							}
					}),
					lang: ae(function(e) {
						return U.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(),
							function(t) {
								var i;
								do {
									if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var i = e.location && e.location.hash;
						return i && i.slice(1) === t.id
					},
					root: function(e) {
						return e === f
					},
					focus: function(e) {
						return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: pe(!1),
					disabled: pe(!0),
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !n.pseudos.empty(e)
					},
					header: function(e) {
						return Y.test(e.nodeName)
					},
					input: function(e) {
						return G.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: fe(function() {
						return [0]
					}),
					last: fe(function(e, t) {
						return [t - 1]
					}),
					eq: fe(function(e, t, i) {
						return [i < 0 ? i + t : i]
					}),
					even: fe(function(e, t) {
						for (var i = 0; i < t; i += 2) e.push(i);
						return e
					}),
					odd: fe(function(e, t) {
						for (var i = 1; i < t; i += 2) e.push(i);
						return e
					}),
					lt: fe(function(e, t, i) {
						for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
						return e
					}),
					gt: fe(function(e, t, i) {
						for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
						return e
					})
				}
			}).pseudos.nth = n.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) n.pseudos[t] = de(t);
		for (t in {
				submit: !0,
				reset: !0
			}) n.pseudos[t] = he(t);

		function ge() {}

		function ve(e) {
			for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
			return n
		}

		function ye(e, t, i) {
			var n = t.dir,
				o = t.next,
				s = o || n,
				r = i && "parentNode" === s,
				a = C++;
			return t.first ? function(t, i, o) {
				for (; t = t[n];)
					if (1 === t.nodeType || r) return e(t, i, o);
				return !1
			} : function(t, i, l) {
				var u, c, d, h = [x, a];
				if (l) {
					for (; t = t[n];)
						if ((1 === t.nodeType || r) && e(t, i, l)) return !0
				} else
					for (; t = t[n];)
						if (1 === t.nodeType || r)
							if (c = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[n] || t;
							else {
								if ((u = c[s]) && u[0] === x && u[1] === a) return h[2] = u[2];
								if (c[s] = h, h[2] = e(t, i, l)) return !0
							} return !1
			}
		}

		function be(e) {
			return e.length > 1 ? function(t, i, n) {
				for (var o = e.length; o--;)
					if (!e[o](t, i, n)) return !1;
				return !0
			} : e[0]
		}

		function we(e, t, i, n, o) {
			for (var s, r = [], a = 0, l = e.length, u = null != t; a < l; a++)(s = e[a]) && (i && !i(s, n, o) || (r.push(s), u && t.push(a)));
			return r
		}

		function _e(e, t, i, n, o, s) {
			return n && !n[w] && (n = _e(n)), o && !o[w] && (o = _e(o, s)), ae(function(s, r, a, l) {
				var u, c, d, h = [],
					p = [],
					f = r.length,
					m = s || function(e, t, i) {
						for (var n = 0, o = t.length; n < o; n++) se(e, t[n], i);
						return i
					}(t || "*", a.nodeType ? [a] : a, []),
					g = !e || !s && t ? m : we(m, h, e, a, l),
					v = i ? o || (s ? e : f || n) ? [] : r : g;
				if (i && i(g, v, a, l), n)
					for (u = we(v, p), n(u, [], a, l), c = u.length; c--;)(d = u[c]) && (v[p[c]] = !(g[p[c]] = d));
				if (s) {
					if (o || e) {
						if (o) {
							for (u = [], c = v.length; c--;)(d = v[c]) && u.push(g[c] = d);
							o(null, v = [], u, l)
						}
						for (c = v.length; c--;)(d = v[c]) && (u = o ? N(s, d) : h[c]) > -1 && (s[u] = !(r[u] = d))
					}
				} else v = we(v === r ? v.splice(f, v.length) : v), o ? o(null, r, v, l) : O.apply(r, v)
			})
		}

		function xe(e) {
			for (var t, i, o, s = e.length, r = n.relative[e[0].type], a = r || n.relative[" "], l = r ? 1 : 0, c = ye(function(e) {
					return e === t
				}, a, !0), d = ye(function(e) {
					return N(t, e) > -1
				}, a, !0), h = [function(e, i, n) {
					var o = !r && (n || i !== u) || ((t = i).nodeType ? c(e, i, n) : d(e, i, n));
					return t = null, o
				}]; l < s; l++)
				if (i = n.relative[e[l].type]) h = [ye(be(h), i)];
				else {
					if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
						for (o = ++l; o < s && !n.relative[e[o].type]; o++);
						return _e(l > 1 && be(h), l > 1 && ve(e.slice(0, l - 1).concat({
							value: " " === e[l - 2].type ? "*" : ""
						})).replace(H, "$1"), i, l < o && xe(e.slice(l, o)), o < s && xe(e = e.slice(o)), o < s && ve(e))
					}
					h.push(i)
				} return be(h)
		}

		function Ce(e, t) {
			var i = t.length > 0,
				o = e.length > 0,
				s = function(s, r, a, l, c) {
					var d, f, g, v = 0,
						y = "0",
						b = s && [],
						w = [],
						_ = u,
						C = s || o && n.find.TAG("*", c),
						S = x += null == _ ? 1 : Math.random() || .1,
						T = C.length;
					for (c && (u = r === p || r || c); y !== T && null != (d = C[y]); y++) {
						if (o && d) {
							for (f = 0, r || d.ownerDocument === p || (h(d), a = !m); g = e[f++];)
								if (g(d, r || p, a)) {
									l.push(d);
									break
								} c && (x = S)
						}
						i && ((d = !g && d) && v--, s && b.push(d))
					}
					if (v += y, i && y !== v) {
						for (f = 0; g = t[f++];) g(b, w, r, a);
						if (s) {
							if (v > 0)
								for (; y--;) b[y] || w[y] || (w[y] = D.call(l));
							w = we(w)
						}
						O.apply(l, w), c && !s && w.length > 0 && v + t.length > 1 && se.uniqueSort(l)
					}
					return c && (x = S, u = _), b
				};
			return i ? ae(s) : s
		}
		return ge.prototype = n.filters = n.pseudos, n.setFilters = new ge, r = se.tokenize = function(e, t) {
			var i, o, s, r, a, l, u, c = T[e + " "];
			if (c) return t ? 0 : c.slice(0);
			for (a = e, l = [], u = n.preFilter; a;) {
				for (r in i && !(o = F.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = R.exec(a)) && (i = o.shift(), s.push({
						value: i,
						type: o[0].replace(H, " ")
					}), a = a.slice(i.length)), n.filter) !(o = V[r].exec(a)) || u[r] && !(o = u[r](o)) || (i = o.shift(), s.push({
					value: i,
					type: r,
					matches: o
				}), a = a.slice(i.length));
				if (!i) break
			}
			return t ? a.length : a ? se.error(e) : T(e, l).slice(0)
		}, a = se.compile = function(e, t) {
			var i, n = [],
				o = [],
				s = E[e + " "];
			if (!s) {
				for (t || (t = r(e)), i = t.length; i--;)(s = xe(t[i]))[w] ? n.push(s) : o.push(s);
				(s = E(e, Ce(o, n))).selector = e
			}
			return s
		}, l = se.select = function(e, t, i, o) {
			var s, l, u, c, d, h = "function" == typeof e && e,
				p = !o && r(e = h.selector || e);
			if (i = i || [], 1 === p.length) {
				if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
					if (!(t = (n.find.ID(u.matches[0].replace(J, ee), t) || [])[0])) return i;
					h && (t = t.parentNode), e = e.slice(l.shift().value.length)
				}
				for (s = V.needsContext.test(e) ? 0 : l.length; s-- && (u = l[s], !n.relative[c = u.type]);)
					if ((d = n.find[c]) && (o = d(u.matches[0].replace(J, ee), Z.test(l[0].type) && me(t.parentNode) || t))) {
						if (l.splice(s, 1), !(e = o.length && ve(l))) return O.apply(i, o), i;
						break
					}
			}
			return (h || a(e, p))(o, t, !m, i, !t || Z.test(e) && me(t.parentNode) || t), i
		}, i.sortStable = w.split("").sort($).join("") === w, i.detectDuplicates = !!d, h(), i.sortDetached = le(function(e) {
			return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
		}), le(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || ue("type|href|height|width", function(e, t, i) {
			if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), i.attributes && le(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || ue("value", function(e, t, i) {
			if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), le(function(e) {
			return null == e.getAttribute("disabled")
		}) || ue(L, function(e, t, i) {
			var n;
			if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
		}), se
	}(e);
	w.find = C, w.expr = C.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = C.uniqueSort, w.text = C.getText, w.isXMLDoc = C.isXML, w.contains = C.contains, w.escapeSelector = C.escape;
	var S = function(e, t, i) {
			for (var n = [], o = void 0 !== i;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (o && w(e).is(i)) break;
					n.push(e)
				} return n
		},
		T = function(e, t) {
			for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
			return i
		},
		E = w.expr.match.needsContext;

	function $(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function A(e, t, i) {
		return m(t) ? w.grep(e, function(e, n) {
			return !!t.call(e, n, e) !== i
		}) : t.nodeType ? w.grep(e, function(e) {
			return e === t !== i
		}) : "string" != typeof t ? w.grep(e, function(e) {
			return l.call(t, e) > -1 !== i
		}) : w.filter(t, e, i)
	}
	w.filter = function(e, t, i) {
		var n = t[0];
		return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? w.find.matchesSelector(n, e) ? [n] : [] : w.find.matches(e, w.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, w.fn.extend({
		find: function(e) {
			var t, i, n = this.length,
				o = this;
			if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
				for (t = 0; t < n; t++)
					if (w.contains(o[t], this)) return !0
			}));
			for (i = this.pushStack([]), t = 0; t < n; t++) w.find(e, o[t], i);
			return n > 1 ? w.uniqueSort(i) : i
		},
		filter: function(e) {
			return this.pushStack(A(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(A(this, e || [], !0))
		},
		is: function(e) {
			return !!A(this, "string" == typeof e && E.test(e) ? w(e) : e || [], !1).length
		}
	});
	var D, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(w.fn.init = function(e, t, i) {
		var o, s;
		if (!e) return this;
		if (i = i || D, "string" == typeof e) {
			if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
			if (o[1]) {
				if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : n, !0)), k.test(o[1]) && w.isPlainObject(t))
					for (o in t) m(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
				return this
			}
			return (s = n.getElementById(o[2])) && (this[0] = s, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== i.ready ? i.ready(e) : e(w) : w.makeArray(e, this)
	}).prototype = w.fn, D = w(n);
	var O = /^(?:parents|prev(?:Until|All))/,
		I = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function N(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	w.fn.extend({
		has: function(e) {
			var t = w(e, this),
				i = t.length;
			return this.filter(function() {
				for (var e = 0; e < i; e++)
					if (w.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var i, n = 0,
				o = this.length,
				s = [],
				r = "string" != typeof e && w(e);
			if (!E.test(e))
				for (; n < o; n++)
					for (i = this[n]; i && i !== t; i = i.parentNode)
						if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && w.find.matchesSelector(i, e))) {
							s.push(i);
							break
						} return this.pushStack(s.length > 1 ? w.uniqueSort(s) : s)
		},
		index: function(e) {
			return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), w.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return S(e, "parentNode")
		},
		parentsUntil: function(e, t, i) {
			return S(e, "parentNode", i)
		},
		next: function(e) {
			return N(e, "nextSibling")
		},
		prev: function(e) {
			return N(e, "previousSibling")
		},
		nextAll: function(e) {
			return S(e, "nextSibling")
		},
		prevAll: function(e) {
			return S(e, "previousSibling")
		},
		nextUntil: function(e, t, i) {
			return S(e, "nextSibling", i)
		},
		prevUntil: function(e, t, i) {
			return S(e, "previousSibling", i)
		},
		siblings: function(e) {
			return T((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return T(e.firstChild)
		},
		contents: function(e) {
			return $(e, "iframe") ? e.contentDocument : ($(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
		}
	}, function(e, t) {
		w.fn[e] = function(i, n) {
			var o = w.map(this, t, i);
			return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = w.filter(n, o)), this.length > 1 && (I[e] || w.uniqueSort(o), O.test(e) && o.reverse()), this.pushStack(o)
		}
	});
	var L = /[^\x20\t\r\n\f]+/g;

	function P(e) {
		return e
	}

	function z(e) {
		throw e
	}

	function M(e, t, i, n) {
		var o;
		try {
			e && m(o = e.promise) ? o.call(e).done(t).fail(i) : e && m(o = e.then) ? o.call(e, t, i) : t.apply(void 0, [e].slice(n))
		} catch (e) {
			i.apply(void 0, [e])
		}
	}
	w.Callbacks = function(e) {
		e = "string" == typeof e ? function(e) {
			var t = {};
			return w.each(e.match(L) || [], function(e, i) {
				t[i] = !0
			}), t
		}(e) : w.extend({}, e);
		var t, i, n, o, s = [],
			r = [],
			a = -1,
			l = function() {
				for (o = o || e.once, n = t = !0; r.length; a = -1)
					for (i = r.shift(); ++a < s.length;) !1 === s[a].apply(i[0], i[1]) && e.stopOnFalse && (a = s.length, i = !1);
				e.memory || (i = !1), t = !1, o && (s = i ? [] : "")
			},
			u = {
				add: function() {
					return s && (i && !t && (a = s.length - 1, r.push(i)), function t(i) {
						w.each(i, function(i, n) {
							m(n) ? e.unique && u.has(n) || s.push(n) : n && n.length && "string" !== b(n) && t(n)
						})
					}(arguments), i && !t && l()), this
				},
				remove: function() {
					return w.each(arguments, function(e, t) {
						for (var i;
							(i = w.inArray(t, s, i)) > -1;) s.splice(i, 1), i <= a && a--
					}), this
				},
				has: function(e) {
					return e ? w.inArray(e, s) > -1 : s.length > 0
				},
				empty: function() {
					return s && (s = []), this
				},
				disable: function() {
					return o = r = [], s = i = "", this
				},
				disabled: function() {
					return !s
				},
				lock: function() {
					return o = r = [], i || t || (s = i = ""), this
				},
				locked: function() {
					return !!o
				},
				fireWith: function(e, i) {
					return o || (i = [e, (i = i || []).slice ? i.slice() : i], r.push(i), t || l()), this
				},
				fire: function() {
					return u.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
				}
			};
		return u
	}, w.extend({
		Deferred: function(t) {
			var i = [
					["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
					["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
				],
				n = "pending",
				o = {
					state: function() {
						return n
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					catch: function(e) {
						return o.then(null, e)
					},
					pipe: function() {
						var e = arguments;
						return w.Deferred(function(t) {
							w.each(i, function(i, n) {
								var o = m(e[n[4]]) && e[n[4]];
								s[n[1]](function() {
									var e = o && o.apply(this, arguments);
									e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, o ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					then: function(t, n, o) {
						var s = 0;

						function r(t, i, n, o) {
							return function() {
								var a = this,
									l = arguments,
									u = function() {
										var e, u;
										if (!(t < s)) {
											if ((e = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
											u = e && ("object" == typeof e || "function" == typeof e) && e.then, m(u) ? o ? u.call(e, r(s, i, P, o), r(s, i, z, o)) : (s++, u.call(e, r(s, i, P, o), r(s, i, z, o), r(s, i, P, i.notifyWith))) : (n !== P && (a = void 0, l = [e]), (o || i.resolveWith)(a, l))
										}
									},
									c = o ? u : function() {
										try {
											u()
										} catch (e) {
											w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= s && (n !== z && (a = void 0, l = [e]), i.rejectWith(a, l))
										}
									};
								t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
							}
						}
						return w.Deferred(function(e) {
							i[0][3].add(r(0, e, m(o) ? o : P, e.notifyWith)), i[1][3].add(r(0, e, m(t) ? t : P)), i[2][3].add(r(0, e, m(n) ? n : z))
						}).promise()
					},
					promise: function(e) {
						return null != e ? w.extend(e, o) : o
					}
				},
				s = {};
			return w.each(i, function(e, t) {
				var r = t[2],
					a = t[5];
				o[t[1]] = r.add, a && r.add(function() {
					n = a
				}, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), r.add(t[3].fire), s[t[0]] = function() {
					return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[t[0] + "With"] = r.fireWith
			}), o.promise(s), t && t.call(s, s), s
		},
		when: function(e) {
			var t = arguments.length,
				i = t,
				n = Array(i),
				o = s.call(arguments),
				r = w.Deferred(),
				a = function(e) {
					return function(i) {
						n[e] = this, o[e] = arguments.length > 1 ? s.call(arguments) : i, --t || r.resolveWith(n, o)
					}
				};
			if (t <= 1 && (M(e, r.done(a(i)).resolve, r.reject, !t), "pending" === r.state() || m(o[i] && o[i].then))) return r.then();
			for (; i--;) M(o[i], a(i), r.reject);
			return r.promise()
		}
	});
	var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	w.Deferred.exceptionHook = function(t, i) {
		e.console && e.console.warn && t && q.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
	}, w.readyException = function(t) {
		e.setTimeout(function() {
			throw t
		})
	};
	var W = w.Deferred();

	function H() {
		n.removeEventListener("DOMContentLoaded", H), e.removeEventListener("load", H), w.ready()
	}
	w.fn.ready = function(e) {
		return W.then(e).catch(function(e) {
			w.readyException(e)
		}), this
	}, w.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || W.resolveWith(n, [w]))
		}
	}), w.ready.then = W.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? e.setTimeout(w.ready) : (n.addEventListener("DOMContentLoaded", H), e.addEventListener("load", H));
	var F = function(e, t, i, n, o, s, r) {
			var a = 0,
				l = e.length,
				u = null == i;
			if ("object" === b(i))
				for (a in o = !0, i) F(e, t, a, i[a], !0, s, r);
			else if (void 0 !== n && (o = !0, m(n) || (r = !0), u && (r ? (t.call(e, n), t = null) : (u = t, t = function(e, t, i) {
					return u.call(w(e), i)
				})), t))
				for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
			return o ? e : u ? t.call(e) : l ? t(e[0], i) : s
		},
		R = /^-ms-/,
		B = /-([a-z])/g;

	function Q(e, t) {
		return t.toUpperCase()
	}

	function U(e) {
		return e.replace(R, "ms-").replace(B, Q)
	}
	var V = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function G() {
		this.expando = w.expando + G.uid++
	}
	G.uid = 1, G.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, i) {
			var n, o = this.cache(e);
			if ("string" == typeof t) o[U(t)] = i;
			else
				for (n in t) o[U(n)] = t[n];
			return o
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
		},
		access: function(e, t, i) {
			return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
		},
		remove: function(e, t) {
			var i, n = e[this.expando];
			if (void 0 !== n) {
				if (void 0 !== t) {
					i = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in n ? [t] : t.match(L) || []).length;
					for (; i--;) delete n[t[i]]
				}(void 0 === t || w.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !w.isEmptyObject(t)
		}
	};
	var Y = new G,
		K = new G,
		X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Z = /[A-Z]/g;

	function J(e, t, i) {
		var n;
		if (void 0 === i && 1 === e.nodeType)
			if (n = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
				try {
					i = function(e) {
						return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : X.test(e) ? JSON.parse(e) : e)
					}(i)
				} catch (e) {}
				K.set(e, t, i)
			} else i = void 0;
		return i
	}
	w.extend({
		hasData: function(e) {
			return K.hasData(e) || Y.hasData(e)
		},
		data: function(e, t, i) {
			return K.access(e, t, i)
		},
		removeData: function(e, t) {
			K.remove(e, t)
		},
		_data: function(e, t, i) {
			return Y.access(e, t, i)
		},
		_removeData: function(e, t) {
			Y.remove(e, t)
		}
	}), w.fn.extend({
		data: function(e, t) {
			var i, n, o, s = this[0],
				r = s && s.attributes;
			if (void 0 === e) {
				if (this.length && (o = K.get(s), 1 === s.nodeType && !Y.get(s, "hasDataAttrs"))) {
					for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = U(n.slice(5)), J(s, n, o[n]));
					Y.set(s, "hasDataAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function() {
				K.set(this, e)
			}) : F(this, function(t) {
				var i;
				if (s && void 0 === t) {
					if (void 0 !== (i = K.get(s, e))) return i;
					if (void 0 !== (i = J(s, e))) return i
				} else this.each(function() {
					K.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				K.remove(this, e)
			})
		}
	}), w.extend({
		queue: function(e, t, i) {
			var n;
			if (e) return t = (t || "fx") + "queue", n = Y.get(e, t), i && (!n || Array.isArray(i) ? n = Y.access(e, t, w.makeArray(i)) : n.push(i)), n || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var i = w.queue(e, t),
				n = i.length,
				o = i.shift(),
				s = w._queueHooks(e, t);
			"inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, function() {
				w.dequeue(e, t)
			}, s)), !n && s && s.empty.fire()
		},
		_queueHooks: function(e, t) {
			var i = t + "queueHooks";
			return Y.get(e, i) || Y.access(e, i, {
				empty: w.Callbacks("once memory").add(function() {
					Y.remove(e, [t + "queue", i])
				})
			})
		}
	}), w.fn.extend({
		queue: function(e, t) {
			var i = 2;
			return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var i = w.queue(this, e, t);
				w._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && w.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				w.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var i, n = 1,
				o = w.Deferred(),
				s = this,
				r = this.length,
				a = function() {
					--n || o.resolveWith(s, [s])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = Y.get(s[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
			return a(), o.promise(t)
		}
	});
	var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
		ie = ["Top", "Right", "Bottom", "Left"],
		ne = function(e, t) {
			return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
		},
		oe = function(e, t, i, n) {
			var o, s, r = {};
			for (s in t) r[s] = e.style[s], e.style[s] = t[s];
			for (s in o = i.apply(e, n || []), t) e.style[s] = r[s];
			return o
		};

	function se(e, t, i, n) {
		var o, s, r = 20,
			a = n ? function() {
				return n.cur()
			} : function() {
				return w.css(e, t, "")
			},
			l = a(),
			u = i && i[3] || (w.cssNumber[t] ? "" : "px"),
			c = (w.cssNumber[t] || "px" !== u && +l) && te.exec(w.css(e, t));
		if (c && c[3] !== u) {
			for (l /= 2, u = u || c[3], c = +l || 1; r--;) w.style(e, t, c + u), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (r = 0), c /= s;
			c *= 2, w.style(e, t, c + u), i = i || []
		}
		return i && (c = +c || +l || 0, o = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = c, n.end = o)), o
	}
	var re = {};

	function ae(e) {
		var t, i = e.ownerDocument,
			n = e.nodeName,
			o = re[n];
		return o || (t = i.body.appendChild(i.createElement(n)), o = w.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), re[n] = o, o)
	}

	function le(e, t) {
		for (var i, n, o = [], s = 0, r = e.length; s < r; s++)(n = e[s]).style && (i = n.style.display, t ? ("none" === i && (o[s] = Y.get(n, "display") || null, o[s] || (n.style.display = "")), "" === n.style.display && ne(n) && (o[s] = ae(n))) : "none" !== i && (o[s] = "none", Y.set(n, "display", i)));
		for (s = 0; s < r; s++) null != o[s] && (e[s].style.display = o[s]);
		return e
	}
	w.fn.extend({
		show: function() {
			return le(this, !0)
		},
		hide: function() {
			return le(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				ne(this) ? w(this).show() : w(this).hide()
			})
		}
	});
	var ue = /^(?:checkbox|radio)$/i,
		ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		de = /^$|^module$|\/(?:java|ecma)script/i,
		he = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function pe(e, t) {
		var i;
		return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && $(e, t) ? w.merge([e], i) : i
	}

	function fe(e, t) {
		for (var i = 0, n = e.length; i < n; i++) Y.set(e[i], "globalEval", !t || Y.get(t[i], "globalEval"))
	}
	he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
	var me = /<|&#?\w+;/;

	function ge(e, t, i, n, o) {
		for (var s, r, a, l, u, c, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
			if ((s = e[p]) || 0 === s)
				if ("object" === b(s)) w.merge(h, s.nodeType ? [s] : s);
				else if (me.test(s)) {
			for (r = r || d.appendChild(t.createElement("div")), a = (ce.exec(s) || ["", ""])[1].toLowerCase(), l = he[a] || he._default, r.innerHTML = l[1] + w.htmlPrefilter(s) + l[2], c = l[0]; c--;) r = r.lastChild;
			w.merge(h, r.childNodes), (r = d.firstChild).textContent = ""
		} else h.push(t.createTextNode(s));
		for (d.textContent = "", p = 0; s = h[p++];)
			if (n && w.inArray(s, n) > -1) o && o.push(s);
			else if (u = w.contains(s.ownerDocument, s), r = pe(d.appendChild(s), "script"), u && fe(r), i)
			for (c = 0; s = r[c++];) de.test(s.type || "") && i.push(s);
		return d
	}! function() {
		var e = n.createDocumentFragment().appendChild(n.createElement("div")),
			t = n.createElement("input");
		t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), f.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
	}();
	var ve = n.documentElement,
		ye = /^key/,
		be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		we = /^([^.]*)(?:\.(.+)|)/;

	function _e() {
		return !0
	}

	function xe() {
		return !1
	}

	function Ce() {
		try {
			return n.activeElement
		} catch (e) {}
	}

	function Se(e, t, i, n, o, s) {
		var r, a;
		if ("object" == typeof t) {
			for (a in "string" != typeof i && (n = n || i, i = void 0), t) Se(e, a, i, n, t[a], s);
			return e
		}
		if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = xe;
		else if (!o) return e;
		return 1 === s && (r = o, (o = function(e) {
			return w().off(e), r.apply(this, arguments)
		}).guid = r.guid || (r.guid = w.guid++)), e.each(function() {
			w.event.add(this, t, o, n, i)
		})
	}
	w.event = {
		global: {},
		add: function(e, t, i, n, o) {
			var s, r, a, l, u, c, d, h, p, f, m, g = Y.get(e);
			if (g)
				for (i.handler && (i = (s = i).handler, o = s.selector), o && w.find.matchesSelector(ve, o), i.guid || (i.guid = w.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(t) {
						return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
					}), u = (t = (t || "").match(L) || [""]).length; u--;) p = m = (a = we.exec(t[u]) || [])[1], f = (a[2] || "").split(".").sort(), p && (d = w.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = w.event.special[p] || {}, c = w.extend({
					type: p,
					origType: m,
					data: n,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && w.expr.match.needsContext.test(o),
					namespace: f.join(".")
				}, s), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, f, r) || e.addEventListener && e.addEventListener(p, r)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, c) : h.push(c), w.event.global[p] = !0)
		},
		remove: function(e, t, i, n, o) {
			var s, r, a, l, u, c, d, h, p, f, m, g = Y.hasData(e) && Y.get(e);
			if (g && (l = g.events)) {
				for (u = (t = (t || "").match(L) || [""]).length; u--;)
					if (p = m = (a = we.exec(t[u]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
						for (d = w.event.special[p] || {}, h = l[p = (n ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) c = h[s], !o && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (h.splice(s, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
						r && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || w.removeEvent(e, p, g.handle), delete l[p])
					} else
						for (p in l) w.event.remove(e, p + t[u], i, n, !0);
				w.isEmptyObject(l) && Y.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, i, n, o, s, r, a = w.event.fix(e),
				l = new Array(arguments.length),
				u = (Y.get(this, "events") || {})[a.type] || [],
				c = w.event.special[a.type] || {};
			for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
			if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
				for (r = w.event.handlers.call(this, a, u), t = 0;
					(o = r[t++]) && !a.isPropagationStopped();)
					for (a.currentTarget = o.elem, i = 0;
						(s = o.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((w.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(e, t) {
			var i, n, o, s, r, a = [],
				l = t.delegateCount,
				u = e.target;
			if (l && u.nodeType && !("click" === e.type && e.button >= 1))
				for (; u !== this; u = u.parentNode || this)
					if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
						for (s = [], r = {}, i = 0; i < l; i++) void 0 === r[o = (n = t[i]).selector + " "] && (r[o] = n.needsContext ? w(o, this).index(u) > -1 : w.find(o, this, null, [u]).length), r[o] && s.push(n);
						s.length && a.push({
							elem: u,
							handlers: s
						})
					} return u = this, l < t.length && a.push({
				elem: u,
				handlers: t.slice(l)
			}), a
		},
		addProp: function(e, t) {
			Object.defineProperty(w.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: m(t) ? function() {
					if (this.originalEvent) return t(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[e]
				},
				set: function(t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function(e) {
			return e[w.expando] ? e : new w.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== Ce() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === Ce() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if ("checkbox" === this.type && this.click && $(this, "input")) return this.click(), !1
				},
				_default: function(e) {
					return $(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, w.removeEvent = function(e, t, i) {
		e.removeEventListener && e.removeEventListener(t, i)
	}, w.Event = function(e, t) {
		if (!(this instanceof w.Event)) return new w.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
	}, w.Event.prototype = {
		constructor: w.Event,
		isDefaultPrevented: xe,
		isPropagationStopped: xe,
		isImmediatePropagationStopped: xe,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = _e, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = _e, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = _e, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, w.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(e) {
			var t = e.button;
			return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, w.event.addProp), w.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		w.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var i, n = e.relatedTarget,
					o = e.handleObj;
				return n && (n === this || w.contains(this, n)) || (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
			}
		}
	}), w.fn.extend({
		on: function(e, t, i, n) {
			return Se(this, e, t, i, n)
		},
		one: function(e, t, i, n) {
			return Se(this, e, t, i, n, 1)
		},
		off: function(e, t, i) {
			var n, o;
			if (e && e.preventDefault && e.handleObj) return n = e.handleObj, w(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, t, e[o]);
				return this
			}
			return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = xe), this.each(function() {
				w.event.remove(this, e, i, t)
			})
		}
	});
	var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Ee = /<script|<style|<link/i,
		$e = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Ae(e, t) {
		return $(e, "table") && $(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
	}

	function De(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function je(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Oe(e, t) {
		var i, n, o, s, r, a, l, u;
		if (1 === t.nodeType) {
			if (Y.hasData(e) && (s = Y.access(e), r = Y.set(t, s), u = s.events))
				for (o in delete r.handle, r.events = {}, u)
					for (i = 0, n = u[o].length; i < n; i++) w.event.add(t, o, u[o][i]);
			K.hasData(e) && (a = K.access(e), l = w.extend({}, a), K.set(t, l))
		}
	}

	function Ie(e, t) {
		var i = t.nodeName.toLowerCase();
		"input" === i && ue.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
	}

	function Ne(e, t, i, n) {
		t = r.apply([], t);
		var o, s, a, l, u, c, d = 0,
			h = e.length,
			p = h - 1,
			g = t[0],
			v = m(g);
		if (v || h > 1 && "string" == typeof g && !f.checkClone && $e.test(g)) return e.each(function(o) {
			var s = e.eq(o);
			v && (t[0] = g.call(this, o, s.html())), Ne(s, t, i, n)
		});
		if (h && (s = (o = ge(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === o.childNodes.length && (o = s), s || n)) {
			for (l = (a = w.map(pe(o, "script"), De)).length; d < h; d++) u = o, d !== p && (u = w.clone(u, !0, !0), l && w.merge(a, pe(u, "script"))), i.call(e[d], u, d);
			if (l)
				for (c = a[a.length - 1].ownerDocument, w.map(a, je), d = 0; d < l; d++) u = a[d], de.test(u.type || "") && !Y.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(u.src) : y(u.textContent.replace(ke, ""), c, u))
		}
		return e
	}

	function Le(e, t, i) {
		for (var n, o = t ? w.filter(t, e) : e, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || w.cleanData(pe(n)), n.parentNode && (i && w.contains(n.ownerDocument, n) && fe(pe(n, "script")), n.parentNode.removeChild(n));
		return e
	}
	w.extend({
		htmlPrefilter: function(e) {
			return e.replace(Te, "<$1></$2>")
		},
		clone: function(e, t, i) {
			var n, o, s, r, a = e.cloneNode(!0),
				l = w.contains(e.ownerDocument, e);
			if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
				for (r = pe(a), n = 0, o = (s = pe(e)).length; n < o; n++) Ie(s[n], r[n]);
			if (t)
				if (i)
					for (s = s || pe(e), r = r || pe(a), n = 0, o = s.length; n < o; n++) Oe(s[n], r[n]);
				else Oe(e, a);
			return (r = pe(a, "script")).length > 0 && fe(r, !l && pe(e, "script")), a
		},
		cleanData: function(e) {
			for (var t, i, n, o = w.event.special, s = 0; void 0 !== (i = e[s]); s++)
				if (V(i)) {
					if (t = i[Y.expando]) {
						if (t.events)
							for (n in t.events) o[n] ? w.event.remove(i, n) : w.removeEvent(i, n, t.handle);
						i[Y.expando] = void 0
					}
					i[K.expando] && (i[K.expando] = void 0)
				}
		}
	}), w.fn.extend({
		detach: function(e) {
			return Le(this, e, !0)
		},
		remove: function(e) {
			return Le(this, e)
		},
		text: function(e) {
			return F(this, function(e) {
				return void 0 === e ? w.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return Ne(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return Ne(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Ae(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return Ne(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return Ne(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(pe(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return w.clone(this, e, t)
			})
		},
		html: function(e) {
			return F(this, function(e) {
				var t = this[0] || {},
					i = 0,
					n = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Ee.test(e) && !he[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = w.htmlPrefilter(e);
					try {
						for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (w.cleanData(pe(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = [];
			return Ne(this, arguments, function(t) {
				var i = this.parentNode;
				w.inArray(this, e) < 0 && (w.cleanData(pe(this)), i && i.replaceChild(t, this))
			}, e)
		}
	}), w.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		w.fn[e] = function(e) {
			for (var i, n = [], o = w(e), s = o.length - 1, r = 0; r <= s; r++) i = r === s ? this : this.clone(!0), w(o[r])[t](i), a.apply(n, i.get());
			return this.pushStack(n)
		}
	});
	var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
		ze = function(t) {
			var i = t.ownerDocument.defaultView;
			return i && i.opener || (i = e), i.getComputedStyle(t)
		},
		Me = new RegExp(ie.join("|"), "i");

	function qe(e, t, i) {
		var n, o, s, r, a = e.style;
		return (i = i || ze(e)) && ("" !== (r = i.getPropertyValue(t) || i[t]) || w.contains(e.ownerDocument, e) || (r = w.style(e, t)), !f.pixelBoxStyles() && Pe.test(r) && Me.test(t) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
	}

	function We(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}! function() {
		function t() {
			if (c) {
				u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ve.appendChild(u).appendChild(c);
				var t = e.getComputedStyle(c);
				o = "1%" !== t.top, l = 12 === i(t.marginLeft), c.style.right = "60%", a = 36 === i(t.right), s = 36 === i(t.width), c.style.position = "absolute", r = 36 === c.offsetWidth || "absolute", ve.removeChild(u), c = null
			}
		}

		function i(e) {
			return Math.round(parseFloat(e))
		}
		var o, s, r, a, l, u = n.createElement("div"),
			c = n.createElement("div");
		c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(f, {
			boxSizingReliable: function() {
				return t(), s
			},
			pixelBoxStyles: function() {
				return t(), a
			},
			pixelPosition: function() {
				return t(), o
			},
			reliableMarginLeft: function() {
				return t(), l
			},
			scrollboxSize: function() {
				return t(), r
			}
		}))
	}();
	var He = /^(none|table(?!-c[ea]).+)/,
		Fe = /^--/,
		Re = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Be = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Qe = ["Webkit", "Moz", "ms"],
		Ue = n.createElement("div").style;

	function Ve(e) {
		var t = w.cssProps[e];
		return t || (t = w.cssProps[e] = function(e) {
			if (e in Ue) return e;
			for (var t = e[0].toUpperCase() + e.slice(1), i = Qe.length; i--;)
				if ((e = Qe[i] + t) in Ue) return e
		}(e) || e), t
	}

	function Ge(e, t, i) {
		var n = te.exec(t);
		return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
	}

	function Ye(e, t, i, n, o, s) {
		var r = "width" === t ? 1 : 0,
			a = 0,
			l = 0;
		if (i === (n ? "border" : "content")) return 0;
		for (; r < 4; r += 2) "margin" === i && (l += w.css(e, i + ie[r], !0, o)), n ? ("content" === i && (l -= w.css(e, "padding" + ie[r], !0, o)), "margin" !== i && (l -= w.css(e, "border" + ie[r] + "Width", !0, o))) : (l += w.css(e, "padding" + ie[r], !0, o), "padding" !== i ? l += w.css(e, "border" + ie[r] + "Width", !0, o) : a += w.css(e, "border" + ie[r] + "Width", !0, o));
		return !n && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5))), l
	}

	function Ke(e, t, i) {
		var n = ze(e),
			o = qe(e, t, n),
			s = "border-box" === w.css(e, "boxSizing", !1, n),
			r = s;
		if (Pe.test(o)) {
			if (!i) return o;
			o = "auto"
		}
		return r = r && (f.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === w.css(e, "display", !1, n)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], r = !0), (o = parseFloat(o) || 0) + Ye(e, t, i || (s ? "border" : "content"), r, n, o) + "px"
	}

	function Xe(e, t, i, n, o) {
		return new Xe.prototype.init(e, t, i, n, o)
	}
	w.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var i = qe(e, "opacity");
						return "" === i ? "1" : i
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(e, t, i, n) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, s, r, a = U(t),
					l = Fe.test(t),
					u = e.style;
				if (l || (t = Ve(a)), r = w.cssHooks[t] || w.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : u[t];
				"string" == (s = typeof i) && (o = te.exec(i)) && o[1] && (i = se(e, t, o), s = "number"), null != i && i == i && ("number" === s && (i += o && o[3] || (w.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (u[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l ? u.setProperty(t, i) : u[t] = i))
			}
		},
		css: function(e, t, i, n) {
			var o, s, r, a = U(t);
			return Fe.test(t) || (t = Ve(a)), (r = w.cssHooks[t] || w.cssHooks[a]) && "get" in r && (o = r.get(e, !0, i)), void 0 === o && (o = qe(e, t, n)), "normal" === o && t in Be && (o = Be[t]), "" === i || i ? (s = parseFloat(o), !0 === i || isFinite(s) ? s || 0 : o) : o
		}
	}), w.each(["height", "width"], function(e, t) {
		w.cssHooks[t] = {
			get: function(e, i, n) {
				if (i) return !He.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, n) : oe(e, Re, function() {
					return Ke(e, t, n)
				})
			},
			set: function(e, i, n) {
				var o, s = ze(e),
					r = "border-box" === w.css(e, "boxSizing", !1, s),
					a = n && Ye(e, t, n, r, s);
				return r && f.scrollboxSize() === s.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - Ye(e, t, "border", !1, s) - .5)), a && (o = te.exec(i)) && "px" !== (o[3] || "px") && (e.style[t] = i, i = w.css(e, t)), Ge(0, i, a)
			}
		}
	}), w.cssHooks.marginLeft = We(f.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), w.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		w.cssHooks[e + t] = {
			expand: function(i) {
				for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[e + ie[n] + t] = s[n] || s[n - 2] || s[0];
				return o
			}
		}, "margin" !== e && (w.cssHooks[e + t].set = Ge)
	}), w.fn.extend({
		css: function(e, t) {
			return F(this, function(e, t, i) {
				var n, o, s = {},
					r = 0;
				if (Array.isArray(t)) {
					for (n = ze(e), o = t.length; r < o; r++) s[t[r]] = w.css(e, t[r], !1, n);
					return s
				}
				return void 0 !== i ? w.style(e, t, i) : w.css(e, t)
			}, e, t, arguments.length > 1)
		}
	}), w.Tween = Xe, Xe.prototype = {
		constructor: Xe,
		init: function(e, t, i, n, o, s) {
			this.elem = e, this.prop = i, this.easing = o || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (w.cssNumber[i] ? "" : "px")
		},
		cur: function() {
			var e = Xe.propHooks[this.prop];
			return e && e.get ? e.get(this) : Xe.propHooks._default.get(this)
		},
		run: function(e) {
			var t, i = Xe.propHooks[this.prop];
			return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Xe.propHooks._default.set(this), this
		}
	}, Xe.prototype.init.prototype = Xe.prototype, Xe.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(e) {
				w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, Xe.propHooks.scrollTop = Xe.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, w.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, w.fx = Xe.prototype.init, w.fx.step = {};
	var Ze, Je, et = /^(?:toggle|show|hide)$/,
		tt = /queueHooks$/;

	function it() {
		Je && (!1 === n.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, w.fx.interval), w.fx.tick())
	}

	function nt() {
		return e.setTimeout(function() {
			Ze = void 0
		}), Ze = Date.now()
	}

	function ot(e, t) {
		var i, n = 0,
			o = {
				height: e
			};
		for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (i = ie[n])] = o["padding" + i] = e;
		return t && (o.opacity = o.width = e), o
	}

	function st(e, t, i) {
		for (var n, o = (rt.tweeners[t] || []).concat(rt.tweeners["*"]), s = 0, r = o.length; s < r; s++)
			if (n = o[s].call(i, t, e)) return n
	}

	function rt(e, t, i) {
		var n, o, s = 0,
			r = rt.prefilters.length,
			a = w.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (o) return !1;
				for (var t = Ze || nt(), i = Math.max(0, u.startTime + u.duration - t), n = 1 - (i / u.duration || 0), s = 0, r = u.tweens.length; s < r; s++) u.tweens[s].run(n);
				return a.notifyWith(e, [u, n, i]), n < 1 && r ? i : (r || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
			},
			u = a.promise({
				elem: e,
				props: w.extend({}, t),
				opts: w.extend(!0, {
					specialEasing: {},
					easing: w.easing._default
				}, i),
				originalProperties: t,
				originalOptions: i,
				startTime: Ze || nt(),
				duration: i.duration,
				tweens: [],
				createTween: function(t, i) {
					var n = w.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(n), n
				},
				stop: function(t) {
					var i = 0,
						n = t ? u.tweens.length : 0;
					if (o) return this;
					for (o = !0; i < n; i++) u.tweens[i].run(1);
					return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for (function(e, t) {
				var i, n, o, s, r;
				for (i in e)
					if (o = t[n = U(i)], s = e[i], Array.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (r = w.cssHooks[n]) && "expand" in r)
						for (i in s = r.expand(s), delete e[n], s) i in e || (e[i] = s[i], t[i] = o);
					else t[n] = o
			}(c, u.opts.specialEasing); s < r; s++)
			if (n = rt.prefilters[s].call(u, e, c, u.opts)) return m(n.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
		return w.map(c, st, u), m(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), w.fx.timer(w.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u
	}
	w.Animation = w.extend(rt, {
			tweeners: {
				"*": [function(e, t) {
					var i = this.createTween(e, t);
					return se(i.elem, e, te.exec(t), i), i
				}]
			},
			tweener: function(e, t) {
				m(e) ? (t = e, e = ["*"]) : e = e.match(L);
				for (var i, n = 0, o = e.length; n < o; n++) i = e[n], rt.tweeners[i] = rt.tweeners[i] || [], rt.tweeners[i].unshift(t)
			},
			prefilters: [function(e, t, i) {
				var n, o, s, r, a, l, u, c, d = "width" in t || "height" in t,
					h = this,
					p = {},
					f = e.style,
					m = e.nodeType && ne(e),
					g = Y.get(e, "fxshow");
				for (n in i.queue || (null == (r = w._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
						r.unqueued || a()
					}), r.unqueued++, h.always(function() {
						h.always(function() {
							r.unqueued--, w.queue(e, "fx").length || r.empty.fire()
						})
					})), t)
					if (o = t[n], et.test(o)) {
						if (delete t[n], s = s || "toggle" === o, o === (m ? "hide" : "show")) {
							if ("show" !== o || !g || void 0 === g[n]) continue;
							m = !0
						}
						p[n] = g && g[n] || w.style(e, n)
					} if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
					for (n in d && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = g && g.display) && (u = Y.get(e, "display")), "none" === (c = w.css(e, "display")) && (u ? c = u : (le([e], !0), u = e.style.display || u, c = w.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(e, "float") && (l || (h.done(function() {
							f.display = u
						}), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() {
							f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
						})), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = Y.access(e, "fxshow", {
						display: u
					}), s && (g.hidden = !m), m && le([e], !0), h.done(function() {
						for (n in m || le([e]), Y.remove(e, "fxshow"), p) w.style(e, n, p[n])
					})), l = st(m ? g[n] : 0, n, h), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
			}],
			prefilter: function(e, t) {
				t ? rt.prefilters.unshift(e) : rt.prefilters.push(e)
			}
		}), w.speed = function(e, t, i) {
			var n = e && "object" == typeof e ? w.extend({}, e) : {
				complete: i || !i && t || m(e) && e,
				duration: e,
				easing: i && t || t && !m(t) && t
			};
			return w.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in w.fx.speeds ? n.duration = w.fx.speeds[n.duration] : n.duration = w.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
				m(n.old) && n.old.call(this), n.queue && w.dequeue(this, n.queue)
			}, n
		}, w.fn.extend({
			fadeTo: function(e, t, i, n) {
				return this.filter(ne).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, i, n)
			},
			animate: function(e, t, i, n) {
				var o = w.isEmptyObject(e),
					s = w.speed(t, i, n),
					r = function() {
						var t = rt(this, w.extend({}, e), s);
						(o || Y.get(this, "finish")) && t.stop(!0)
					};
				return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
			},
			stop: function(e, t, i) {
				var n = function(e) {
					var t = e.stop;
					delete e.stop, t(i)
				};
				return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						o = null != e && e + "queueHooks",
						s = w.timers,
						r = Y.get(this);
					if (o) r[o] && r[o].stop && n(r[o]);
					else
						for (o in r) r[o] && r[o].stop && tt.test(o) && n(r[o]);
					for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(i), t = !1, s.splice(o, 1));
					!t && i || w.dequeue(this, e)
				})
			},
			finish: function(e) {
				return !1 !== e && (e = e || "fx"), this.each(function() {
					var t, i = Y.get(this),
						n = i[e + "queue"],
						o = i[e + "queueHooks"],
						s = w.timers,
						r = n ? n.length : 0;
					for (i.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
					for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
					delete i.finish
				})
			}
		}), w.each(["toggle", "show", "hide"], function(e, t) {
			var i = w.fn[t];
			w.fn[t] = function(e, n, o) {
				return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ot(t, !0), e, n, o)
			}
		}), w.each({
			slideDown: ot("show"),
			slideUp: ot("hide"),
			slideToggle: ot("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			w.fn[e] = function(e, i, n) {
				return this.animate(t, e, i, n)
			}
		}), w.timers = [], w.fx.tick = function() {
			var e, t = 0,
				i = w.timers;
			for (Ze = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
			i.length || w.fx.stop(), Ze = void 0
		}, w.fx.timer = function(e) {
			w.timers.push(e), w.fx.start()
		}, w.fx.interval = 13, w.fx.start = function() {
			Je || (Je = !0, it())
		}, w.fx.stop = function() {
			Je = null
		}, w.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, w.fn.delay = function(t, i) {
			return t = w.fx && w.fx.speeds[t] || t, i = i || "fx", this.queue(i, function(i, n) {
				var o = e.setTimeout(i, t);
				n.stop = function() {
					e.clearTimeout(o)
				}
			})
		},
		function() {
			var e = n.createElement("input"),
				t = n.createElement("select").appendChild(n.createElement("option"));
			e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = t.selected, (e = n.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value
		}();
	var at, lt = w.expr.attrHandle;
	w.fn.extend({
		attr: function(e, t) {
			return F(this, w.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				w.removeAttr(this, e)
			})
		}
	}), w.extend({
		attr: function(e, t, i) {
			var n, o, s = e.nodeType;
			if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? w.prop(e, t, i) : (1 === s && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? at : void 0)), void 0 !== i ? null === i ? void w.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = w.find.attr(e, t)) ? void 0 : n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!f.radioValue && "radio" === t && $(e, "input")) {
						var i = e.value;
						return e.setAttribute("type", t), i && (e.value = i), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var i, n = 0,
				o = t && t.match(L);
			if (o && 1 === e.nodeType)
				for (; i = o[n++];) e.removeAttribute(i)
		}
	}), at = {
		set: function(e, t, i) {
			return !1 === t ? w.removeAttr(e, i) : e.setAttribute(i, i), i
		}
	}, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var i = lt[t] || w.find.attr;
		lt[t] = function(e, t, n) {
			var o, s, r = t.toLowerCase();
			return n || (s = lt[r], lt[r] = o, o = null != i(e, t, n) ? r : null, lt[r] = s), o
		}
	});
	var ut = /^(?:input|select|textarea|button)$/i,
		ct = /^(?:a|area)$/i;

	function dt(e) {
		return (e.match(L) || []).join(" ")
	}

	function ht(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function pt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
	}
	w.fn.extend({
		prop: function(e, t) {
			return F(this, w.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[w.propFix[e] || e]
			})
		}
	}), w.extend({
		prop: function(e, t, i) {
			var n, o, s = e.nodeType;
			if (3 !== s && 8 !== s && 2 !== s) return 1 === s && w.isXMLDoc(e) || (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = w.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : ut.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), f.optSelected || (w.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		w.propFix[this.toLowerCase()] = this
	}), w.fn.extend({
		addClass: function(e) {
			var t, i, n, o, s, r, a, l = 0;
			if (m(e)) return this.each(function(t) {
				w(this).addClass(e.call(this, t, ht(this)))
			});
			if ((t = pt(e)).length)
				for (; i = this[l++];)
					if (o = ht(i), n = 1 === i.nodeType && " " + dt(o) + " ") {
						for (r = 0; s = t[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
						o !== (a = dt(n)) && i.setAttribute("class", a)
					} return this
		},
		removeClass: function(e) {
			var t, i, n, o, s, r, a, l = 0;
			if (m(e)) return this.each(function(t) {
				w(this).removeClass(e.call(this, t, ht(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((t = pt(e)).length)
				for (; i = this[l++];)
					if (o = ht(i), n = 1 === i.nodeType && " " + dt(o) + " ") {
						for (r = 0; s = t[r++];)
							for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
						o !== (a = dt(n)) && i.setAttribute("class", a)
					} return this
		},
		toggleClass: function(e, t) {
			var i = typeof e,
				n = "string" === i || Array.isArray(e);
			return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function(i) {
				w(this).toggleClass(e.call(this, i, ht(this), t), t)
			}) : this.each(function() {
				var t, o, s, r;
				if (n)
					for (o = 0, s = w(this), r = pt(e); t = r[o++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
				else void 0 !== e && "boolean" !== i || ((t = ht(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, i, n = 0;
			for (t = " " + e + " "; i = this[n++];)
				if (1 === i.nodeType && (" " + dt(ht(i)) + " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var ft = /\r/g;
	w.fn.extend({
		val: function(e) {
			var t, i, n, o = this[0];
			return arguments.length ? (n = m(e), this.each(function(i) {
				var o;
				1 === this.nodeType && (null == (o = n ? e.call(this, i, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, function(e) {
					return null == e ? "" : e + ""
				})), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
			})) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(ft, "") : null == i ? "" : i : void 0
		}
	}), w.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = w.find.attr(e, "value");
					return null != t ? t : dt(w.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, i, n, o = e.options,
						s = e.selectedIndex,
						r = "select-one" === e.type,
						a = r ? null : [],
						l = r ? s + 1 : o.length;
					for (n = s < 0 ? l : r ? s : 0; n < l; n++)
						if (((i = o[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !$(i.parentNode, "optgroup"))) {
							if (t = w(i).val(), r) return t;
							a.push(t)
						} return a
				},
				set: function(e, t) {
					for (var i, n, o = e.options, s = w.makeArray(t), r = o.length; r--;)((n = o[r]).selected = w.inArray(w.valHooks.option.get(n), s) > -1) && (i = !0);
					return i || (e.selectedIndex = -1), s
				}
			}
		}
	}), w.each(["radio", "checkbox"], function() {
		w.valHooks[this] = {
			set: function(e, t) {
				if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
			}
		}, f.checkOn || (w.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), f.focusin = "onfocusin" in e;
	var mt = /^(?:focusinfocus|focusoutblur)$/,
		gt = function(e) {
			e.stopPropagation()
		};
	w.extend(w.event, {
		trigger: function(t, i, o, s) {
			var r, a, l, u, c, h, p, f, v = [o || n],
				y = d.call(t, "type") ? t.type : t,
				b = d.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = f = l = o = o || n, 3 !== o.nodeType && 8 !== o.nodeType && !mt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), i = null == i ? [t] : w.makeArray(i, [t]), p = w.event.special[y] || {}, s || !p.trigger || !1 !== p.trigger.apply(o, i))) {
				if (!s && !p.noBubble && !g(o)) {
					for (u = p.delegateType || y, mt.test(u + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
					l === (o.ownerDocument || n) && v.push(l.defaultView || l.parentWindow || e)
				}
				for (r = 0;
					(a = v[r++]) && !t.isPropagationStopped();) f = a, t.type = r > 1 ? u : p.bindType || y, (h = (Y.get(a, "events") || {})[t.type] && Y.get(a, "handle")) && h.apply(a, i), (h = c && a[c]) && h.apply && V(a) && (t.result = h.apply(a, i), !1 === t.result && t.preventDefault());
				return t.type = y, s || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), i) || !V(o) || c && m(o[y]) && !g(o) && ((l = o[c]) && (o[c] = null), w.event.triggered = y, t.isPropagationStopped() && f.addEventListener(y, gt), o[y](), t.isPropagationStopped() && f.removeEventListener(y, gt), w.event.triggered = void 0, l && (o[c] = l)), t.result
			}
		},
		simulate: function(e, t, i) {
			var n = w.extend(new w.Event, i, {
				type: e,
				isSimulated: !0
			});
			w.event.trigger(n, null, t)
		}
	}), w.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				w.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var i = this[0];
			if (i) return w.event.trigger(e, t, i, !0)
		}
	}), f.focusin || w.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var i = function(e) {
			w.event.simulate(t, e.target, w.event.fix(e))
		};
		w.event.special[t] = {
			setup: function() {
				var n = this.ownerDocument || this,
					o = Y.access(n, t);
				o || n.addEventListener(e, i, !0), Y.access(n, t, (o || 0) + 1)
			},
			teardown: function() {
				var n = this.ownerDocument || this,
					o = Y.access(n, t) - 1;
				o ? Y.access(n, t, o) : (n.removeEventListener(e, i, !0), Y.remove(n, t))
			}
		}
	});
	var vt = e.location,
		yt = Date.now(),
		bt = /\?/;
	w.parseXML = function(t) {
		var i;
		if (!t || "string" != typeof t) return null;
		try {
			i = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch (e) {
			i = void 0
		}
		return i && !i.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), i
	};
	var wt = /\[\]$/,
		_t = /\r?\n/g,
		xt = /^(?:submit|button|image|reset|file)$/i,
		Ct = /^(?:input|select|textarea|keygen)/i;

	function St(e, t, i, n) {
		var o;
		if (Array.isArray(t)) w.each(t, function(t, o) {
			i || wt.test(e) ? n(e, o) : St(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
		});
		else if (i || "object" !== b(t)) n(e, t);
		else
			for (o in t) St(e + "[" + o + "]", t[o], i, n)
	}
	w.param = function(e, t) {
		var i, n = [],
			o = function(e, t) {
				var i = m(t) ? t() : t;
				n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
			};
		if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
			o(this.name, this.value)
		});
		else
			for (i in e) St(i, e[i], t, o);
		return n.join("&")
	}, w.fn.extend({
		serialize: function() {
			return w.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = w.prop(this, "elements");
				return e ? w.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !w(this).is(":disabled") && Ct.test(this.nodeName) && !xt.test(e) && (this.checked || !ue.test(e))
			}).map(function(e, t) {
				var i = w(this).val();
				return null == i ? null : Array.isArray(i) ? w.map(i, function(e) {
					return {
						name: t.name,
						value: e.replace(_t, "\r\n")
					}
				}) : {
					name: t.name,
					value: i.replace(_t, "\r\n")
				}
			}).get()
		}
	});
	var Tt = /%20/g,
		Et = /#.*$/,
		$t = /([?&])_=[^&]*/,
		kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		At = /^(?:GET|HEAD)$/,
		Dt = /^\/\//,
		jt = {},
		Ot = {},
		It = "*/".concat("*"),
		Nt = n.createElement("a");

	function Lt(e) {
		return function(t, i) {
			"string" != typeof t && (i = t, t = "*");
			var n, o = 0,
				s = t.toLowerCase().match(L) || [];
			if (m(i))
				for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
		}
	}

	function Pt(e, t, i, n) {
		var o = {},
			s = e === Ot;

		function r(a) {
			var l;
			return o[a] = !0, w.each(e[a] || [], function(e, a) {
				var u = a(t, i, n);
				return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
			}), l
		}
		return r(t.dataTypes[0]) || !o["*"] && r("*")
	}

	function zt(e, t) {
		var i, n, o = w.ajaxSettings.flatOptions || {};
		for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
		return n && w.extend(!0, e, n), e
	}
	Nt.href = vt.href, w.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: vt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": It,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": w.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
		},
		ajaxPrefilter: Lt(jt),
		ajaxTransport: Lt(Ot),
		ajax: function(t, i) {
			"object" == typeof t && (i = t, t = void 0), i = i || {};
			var o, s, r, a, l, u, c, d, h, p, f = w.ajaxSetup({}, i),
				m = f.context || f,
				g = f.context && (m.nodeType || m.jquery) ? w(m) : w.event,
				v = w.Deferred(),
				y = w.Callbacks("once memory"),
				b = f.statusCode || {},
				_ = {},
				x = {},
				C = "canceled",
				S = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (c) {
							if (!a)
								for (a = {}; t = kt.exec(r);) a[t[1].toLowerCase()] = t[2];
							t = a[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return c ? r : null
					},
					setRequestHeader: function(e, t) {
						return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, _[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == c && (f.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (c) S.always(e[S.status]);
							else
								for (t in e) b[t] = [b[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || C;
						return o && o.abort(t), T(0, t), this
					}
				};
			if (v.promise(S), f.url = ((t || f.url || vt.href) + "").replace(Dt, vt.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(L) || [""], null == f.crossDomain) {
				u = n.createElement("a");
				try {
					u.href = f.url, u.href = u.href, f.crossDomain = Nt.protocol + "//" + Nt.host != u.protocol + "//" + u.host
				} catch (e) {
					f.crossDomain = !0
				}
			}
			if (f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), Pt(jt, f, i, S), c) return S;
			for (h in (d = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !At.test(f.type), s = f.url.replace(Et, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Tt, "+")) : (p = f.url.slice(s.length), f.data && (f.processData || "string" == typeof f.data) && (s += (bt.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace($t, "$1"), p = (bt.test(s) ? "&" : "?") + "_=" + yt++ + p), f.url = s + p), f.ifModified && (w.lastModified[s] && S.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && S.setRequestHeader("If-None-Match", w.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && S.setRequestHeader("Content-Type", f.contentType), S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + It + "; q=0.01" : "") : f.accepts["*"]), f.headers) S.setRequestHeader(h, f.headers[h]);
			if (f.beforeSend && (!1 === f.beforeSend.call(m, S, f) || c)) return S.abort();
			if (C = "abort", y.add(f.complete), S.done(f.success), S.fail(f.error), o = Pt(Ot, f, i, S)) {
				if (S.readyState = 1, d && g.trigger("ajaxSend", [S, f]), c) return S;
				f.async && f.timeout > 0 && (l = e.setTimeout(function() {
					S.abort("timeout")
				}, f.timeout));
				try {
					c = !1, o.send(_, T)
				} catch (e) {
					if (c) throw e;
					T(-1, e)
				}
			} else T(-1, "No Transport");

			function T(t, i, n, a) {
				var u, h, p, _, x, C = i;
				c || (c = !0, l && e.clearTimeout(l), o = void 0, r = a || "", S.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, n && (_ = function(e, t, i) {
					for (var n, o, s, r, a = e.contents, l = e.dataTypes;
						"*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
					if (n)
						for (o in a)
							if (a[o] && a[o].test(n)) {
								l.unshift(o);
								break
							} if (l[0] in i) s = l[0];
					else {
						for (o in i) {
							if (!l[0] || e.converters[o + " " + l[0]]) {
								s = o;
								break
							}
							r || (r = o)
						}
						s = s || r
					}
					if (s) return s !== l[0] && l.unshift(s), i[s]
				}(f, S, n)), _ = function(e, t, i, n) {
					var o, s, r, a, l, u = {},
						c = e.dataTypes.slice();
					if (c[1])
						for (r in e.converters) u[r.toLowerCase()] = e.converters[r];
					for (s = c.shift(); s;)
						if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
							if ("*" === s) s = l;
							else if ("*" !== l && l !== s) {
						if (!(r = u[l + " " + s] || u["* " + s]))
							for (o in u)
								if ((a = o.split(" "))[1] === s && (r = u[l + " " + a[0]] || u["* " + a[0]])) {
									!0 === r ? r = u[o] : !0 !== u[o] && (s = a[0], c.unshift(a[1]));
									break
								} if (!0 !== r)
							if (r && e.throws) t = r(t);
							else try {
								t = r(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: r ? e : "No conversion from " + l + " to " + s
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(f, _, S, u), u ? (f.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (w.lastModified[s] = x), (x = S.getResponseHeader("etag")) && (w.etag[s] = x)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = _.state, h = _.data, u = !(p = _.error))) : (p = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (i || C) + "", u ? v.resolveWith(m, [h, C, S]) : v.rejectWith(m, [S, C, p]), S.statusCode(b), b = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [S, f, u ? h : p]), y.fireWith(m, [S, C]), d && (g.trigger("ajaxComplete", [S, f]), --w.active || w.event.trigger("ajaxStop")))
			}
			return S
		},
		getJSON: function(e, t, i) {
			return w.get(e, t, i, "json")
		},
		getScript: function(e, t) {
			return w.get(e, void 0, t, "script")
		}
	}), w.each(["get", "post"], function(e, t) {
		w[t] = function(e, i, n, o) {
			return m(i) && (o = o || n, n = i, i = void 0), w.ajax(w.extend({
				url: e,
				type: t,
				dataType: o,
				data: i,
				success: n
			}, w.isPlainObject(e) && e))
		}
	}), w._evalUrl = function(e) {
		return w.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, w.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (m(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(e) {
			return m(e) ? this.each(function(t) {
				w(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = w(this),
					i = t.contents();
				i.length ? i.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = m(e);
			return this.each(function(i) {
				w(this).wrapAll(t ? e.call(this, i) : e)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				w(this).replaceWith(this.childNodes)
			}), this
		}
	}), w.expr.pseudos.hidden = function(e) {
		return !w.expr.pseudos.visible(e)
	}, w.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, w.ajaxSettings.xhr = function() {
		try {
			return new e.XMLHttpRequest
		} catch (e) {}
	};
	var Mt = {
			0: 200,
			1223: 204
		},
		qt = w.ajaxSettings.xhr();
	f.cors = !!qt && "withCredentials" in qt, f.ajax = qt = !!qt, w.ajaxTransport(function(t) {
		var i, n;
		if (f.cors || qt && !t.crossDomain) return {
			send: function(o, s) {
				var r, a = t.xhr();
				if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (r in t.xhrFields) a[r] = t.xhrFields[r];
				for (r in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(r, o[r]);
				i = function(e) {
					return function() {
						i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Mt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
							binary: a.response
						} : {
							text: a.responseText
						}, a.getAllResponseHeaders()))
					}
				}, a.onload = i(), n = a.onerror = a.ontimeout = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
					4 === a.readyState && e.setTimeout(function() {
						i && n()
					})
				}, i = i("abort");
				try {
					a.send(t.hasContent && t.data || null)
				} catch (e) {
					if (i) throw e
				}
			},
			abort: function() {
				i && i()
			}
		}
	}), w.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), w.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return w.globalEval(e), e
			}
		}
	}), w.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), w.ajaxTransport("script", function(e) {
		var t, i;
		if (e.crossDomain) return {
			send: function(o, s) {
				t = w("<script>").prop({
					charset: e.scriptCharset,
					src: e.url
				}).on("load error", i = function(e) {
					t.remove(), i = null, e && s("error" === e.type ? 404 : 200, e.type)
				}), n.head.appendChild(t[0])
			},
			abort: function() {
				i && i()
			}
		}
	});
	var Wt = [],
		Ht = /(=)\?(?=&|$)|\?\?/;
	w.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Wt.pop() || w.expando + "_" + yt++;
			return this[e] = !0, e
		}
	}), w.ajaxPrefilter("json jsonp", function(t, i, n) {
		var o, s, r, a = !1 !== t.jsonp && (Ht.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
		if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ht, "$1" + o) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
			return r || w.error(o + " was not called"), r[0]
		}, t.dataTypes[0] = "json", s = e[o], e[o] = function() {
			r = arguments
		}, n.always(function() {
			void 0 === s ? w(e).removeProp(o) : e[o] = s, t[o] && (t.jsonpCallback = i.jsonpCallback, Wt.push(o)), r && m(s) && s(r[0]), r = s = void 0
		}), "script"
	}), f.createHTMLDocument = function() {
		var e = n.implementation.createHTMLDocument("").body;
		return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
	}(), w.parseHTML = function(e, t, i) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (f.createHTMLDocument ? ((o = (t = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, t.head.appendChild(o)) : t = n), r = !i && [], (s = k.exec(e)) ? [t.createElement(s[1])] : (s = ge([e], t, r), r && r.length && w(r).remove(), w.merge([], s.childNodes)));
		var o, s, r
	}, w.fn.load = function(e, t, i) {
		var n, o, s, r = this,
			a = e.indexOf(" ");
		return a > -1 && (n = dt(e.slice(a)), e = e.slice(0, a)), m(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), r.length > 0 && w.ajax({
			url: e,
			type: o || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			s = arguments, r.html(n ? w("<div>").append(w.parseHTML(e)).find(n) : e)
		}).always(i && function(e, t) {
			r.each(function() {
				i.apply(this, s || [e.responseText, t, e])
			})
		}), this
	}, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		w.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), w.expr.pseudos.animated = function(e) {
		return w.grep(w.timers, function(t) {
			return e === t.elem
		}).length
	}, w.offset = {
		setOffset: function(e, t, i) {
			var n, o, s, r, a, l, u = w.css(e, "position"),
				c = w(e),
				d = {};
			"static" === u && (e.style.position = "relative"), a = c.offset(), s = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1 ? (r = (n = c.position()).top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), m(t) && (t = t.call(e, i, w.extend({}, a))), null != t.top && (d.top = t.top - a.top + r), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : c.css(d)
		}
	}, w.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				w.offset.setOffset(this, e, t)
			});
			var t, i, n = this[0];
			return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
				top: t.top + i.pageYOffset,
				left: t.left + i.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, i, n = this[0],
					o = {
						top: 0,
						left: 0
					};
				if ("fixed" === w.css(n, "position")) t = n.getBoundingClientRect();
				else {
					for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
					e && e !== n && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0), o.left += w.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - o.top - w.css(n, "marginTop", !0),
					left: t.left - o.left - w.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
				return e || ve
			})
		}
	}), w.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var i = "pageYOffset" === t;
		w.fn[e] = function(n) {
			return F(this, function(e, n, o) {
				var s;
				if (g(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === o) return s ? s[t] : e[n];
				s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : e[n] = o
			}, e, n, arguments.length)
		}
	}), w.each(["top", "left"], function(e, t) {
		w.cssHooks[t] = We(f.pixelPosition, function(e, i) {
			if (i) return i = qe(e, t), Pe.test(i) ? w(e).position()[t] + "px" : i
		})
	}), w.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		w.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(i, n) {
			w.fn[n] = function(o, s) {
				var r = arguments.length && (i || "boolean" != typeof o),
					a = i || (!0 === o || !0 === s ? "margin" : "border");
				return F(this, function(t, i, o) {
					var s;
					return g(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === o ? w.css(t, i, a) : w.style(t, i, o, a)
				}, t, r ? o : void 0, r)
			}
		})
	}), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
		w.fn[t] = function(e, i) {
			return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
		}
	}), w.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), w.fn.extend({
		bind: function(e, t, i) {
			return this.on(e, null, t, i)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, i, n) {
			return this.on(t, e, i, n)
		},
		undelegate: function(e, t, i) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
		}
	}), w.proxy = function(e, t) {
		var i, n, o;
		if ("string" == typeof t && (i = e[t], t = e, e = i), m(e)) return n = s.call(arguments, 2), (o = function() {
			return e.apply(t || this, n.concat(s.call(arguments)))
		}).guid = e.guid = e.guid || w.guid++, o
	}, w.holdReady = function(e) {
		e ? w.readyWait++ : w.ready(!0)
	}, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = $, w.isFunction = m, w.isWindow = g, w.camelCase = U, w.type = b, w.now = Date.now, w.isNumeric = function(e) {
		var t = w.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return w
	});
	var Ft = e.jQuery,
		Rt = e.$;
	return w.noConflict = function(t) {
		return e.$ === w && (e.$ = Rt), t && e.jQuery === w && (e.jQuery = Ft), w
	}, t || (e.jQuery = e.$ = w), w
}),
function() {
	var e, t, i, n, o, s = function(e, t) {
			return function() {
				return e.apply(t, arguments)
			}
		},
		r = [].indexOf || function(e) {
			for (var t = 0, i = this.length; i > t; t++)
				if (t in this && this[t] === e) return t;
			return -1
		};
	t = function() {
		function e() {}
		return e.prototype.extend = function(e, t) {
			var i, n;
			for (i in t) n = t[i], null == e[i] && (e[i] = n);
			return e
		}, e.prototype.isMobile = function(e) {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
		}, e.prototype.createEvent = function(e, t, i, n) {
			var o;
			return null == t && (t = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(e, t, i, n) : null != document.createEventObject ? (o = document.createEventObject()).eventType = e : o.eventName = e, o
		}, e.prototype.emitEvent = function(e, t) {
			return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
		}, e.prototype.addEvent = function(e, t, i) {
			return null != e.addEventListener ? e.addEventListener(t, i, !1) : null != e.attachEvent ? e.attachEvent("on" + t, i) : e[t] = i
		}, e.prototype.removeEvent = function(e, t, i) {
			return null != e.removeEventListener ? e.removeEventListener(t, i, !1) : null != e.detachEvent ? e.detachEvent("on" + t, i) : delete e[t]
		}, e.prototype.innerHeight = function() {
			return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
		}, e
	}(), i = this.WeakMap || this.MozWeakMap || (i = function() {
		function e() {
			this.keys = [], this.values = []
		}
		return e.prototype.get = function(e) {
			var t, i, n, o;
			for (t = i = 0, n = (o = this.keys).length; n > i; t = ++i)
				if (o[t] === e) return this.values[t]
		}, e.prototype.set = function(e, t) {
			var i, n, o, s;
			for (i = n = 0, o = (s = this.keys).length; o > n; i = ++n)
				if (s[i] === e) return void(this.values[i] = t);
			return this.keys.push(e), this.values.push(t)
		}, e
	}()), e = this.MutationObserver || this.WinkitMutationObserver || this.MozMutationObserver || (e = function() {
		function e() {
			"undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
		}
		return e.notSupported = !0, e.prototype.observe = function() {}, e
	}()), n = this.getComputedStyle || function(e) {
		return this.getPropertyValue = function(t) {
			var i;
			return "float" === t && (t = "styleFloat"), o.test(t) && t.replace(o, function(e, t) {
				return t.toUpperCase()
			}), (null != (i = e.currentStyle) ? i[t] : void 0) || null
		}, this
	}, o = /(\-([a-z]){1})/g, this.WOW = function() {
		function o(e) {
			null == e && (e = {}), this.scrollCallback = s(this.scrollCallback, this), this.scrollHandler = s(this.scrollHandler, this), this.resetAnimation = s(this.resetAnimation, this), this.start = s(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
		}
		return o.prototype.defaults = {
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: !0,
			live: !0,
			callback: null,
			scrollContainer: null
		}, o.prototype.init = function() {
			var e;
			return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
		}, o.prototype.start = function() {
			var t, i, n, o;
			if (this.stopped = !1, this.boxes = function() {
					var e, i, n, o;
					for (o = [], e = 0, i = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; i > e; e++) t = n[e], o.push(t);
					return o
				}.call(this), this.all = function() {
					var e, i, n, o;
					for (o = [], e = 0, i = (n = this.boxes).length; i > e; e++) t = n[e], o.push(t);
					return o
				}.call(this), this.boxes.length)
				if (this.disabled()) this.resetStyle();
				else
					for (i = 0, n = (o = this.boxes).length; n > i; i++) t = o[i], this.applyStyle(t, !0);
			return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new e(function(e) {
				return function(t) {
					var i, n, o, s, r;
					for (r = [], i = 0, n = t.length; n > i; i++) s = t[i], r.push(function() {
						var e, t, i, n;
						for (n = [], e = 0, t = (i = s.addedNodes || []).length; t > e; e++) o = i[e], n.push(this.doSync(o));
						return n
					}.call(e));
					return r
				}
			}(this)).observe(document.body, {
				childList: !0,
				subtree: !0
			}) : void 0
		}, o.prototype.stop = function() {
			return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
		}, o.prototype.sync = function() {
			return e.notSupported ? this.doSync(this.element) : void 0
		}, o.prototype.doSync = function(e) {
			var t, i, n, o, s;
			if (null == e && (e = this.element), 1 === e.nodeType) {
				for (s = [], i = 0, n = (o = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; n > i; i++) t = o[i], r.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), s.push(this.scrolled = !0)) : s.push(void 0);
				return s
			}
		}, o.prototype.show = function(e) {
			return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "WinkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
		}, o.prototype.applyStyle = function(e, t) {
			var i, n, o, s;
			return n = e.getAttribute("data-wow-duration"), i = e.getAttribute("data-wow-delay"), o = e.getAttribute("data-wow-iteration"), this.animate((s = this, function() {
				return s.customStyle(e, t, n, i, o)
			}))
		}, o.prototype.animate = "requestAnimationFrame" in window ? function(e) {
			return window.requestAnimationFrame(e)
		} : function(e) {
			return e()
		}, o.prototype.resetStyle = function() {
			var e, t, i, n, o;
			for (o = [], t = 0, i = (n = this.boxes).length; i > t; t++) e = n[t], o.push(e.style.visibility = "visible");
			return o
		}, o.prototype.resetAnimation = function(e) {
			var t;
			return e.type.toLowerCase().indexOf("animationend") >= 0 ? (t = e.target || e.srcElement).className = t.className.replace(this.config.animateClass, "").trim() : void 0
		}, o.prototype.customStyle = function(e, t, i, n, o) {
			return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", i && this.vendorSet(e.style, {
				animationDuration: i
			}), n && this.vendorSet(e.style, {
				animationDelay: n
			}), o && this.vendorSet(e.style, {
				animationIterationCount: o
			}), this.vendorSet(e.style, {
				animationName: t ? "none" : this.cachedAnimationName(e)
			}), e
		}, o.prototype.vendors = ["moz", "Winkit"], o.prototype.vendorSet = function(e, t) {
			var i, n, o, s;
			for (i in n = [], t) o = t[i], e["" + i] = o, n.push(function() {
				var t, n, r, a;
				for (a = [], t = 0, n = (r = this.vendors).length; n > t; t++) s = r[t], a.push(e["" + s + i.charAt(0).toUpperCase() + i.substr(1)] = o);
				return a
			}.call(this));
			return n
		}, o.prototype.vendorCSS = function(e, t) {
			var i, o, s, r, a, l;
			for (r = (a = n(e)).getPropertyCSSValue(t), i = 0, o = (s = this.vendors).length; o > i; i++) l = s[i], r = r || a.getPropertyCSSValue("-" + l + "-" + t);
			return r
		}, o.prototype.animationName = function(e) {
			var t;
			try {
				t = this.vendorCSS(e, "animation-name").cssText
			} catch (i) {
				t = n(e).getPropertyValue("animation-name")
			}
			return "none" === t ? "" : t
		}, o.prototype.cacheAnimationName = function(e) {
			return this.animationNameCache.set(e, this.animationName(e))
		}, o.prototype.cachedAnimationName = function(e) {
			return this.animationNameCache.get(e)
		}, o.prototype.scrollHandler = function() {
			return this.scrolled = !0
		}, o.prototype.scrollCallback = function() {
			var e;
			return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
				var t, i, n, o;
				for (o = [], t = 0, i = (n = this.boxes).length; i > t; t++)(e = n[t]) && (this.isVisible(e) ? this.show(e) : o.push(e));
				return o
			}.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
		}, o.prototype.offsetTop = function(e) {
			for (var t; void 0 === e.offsetTop;) e = e.parentNode;
			for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
			return t
		}, o.prototype.isVisible = function(e) {
			var t, i, n, o, s;
			return i = e.getAttribute("data-wow-offset") || this.config.offset, o = (s = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, t = (n = this.offsetTop(e)) + e.clientHeight, o >= n && t >= s
		}, o.prototype.util = function() {
			return null != this._util ? this._util : this._util = new t
		}, o.prototype.disabled = function() {
			return !this.config.mobile && this.util().isMobile(navigator.userAgent)
		}, o
	}()
}.call(this),
	function(e, t) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
	}(this, function() {
		"use strict";

		function e(e) {
			return e && "[object Function]" === {}.toString.call(e)
		}

		function t(e, t) {
			if (1 !== e.nodeType) return [];
			var i = getComputedStyle(e, null);
			return t ? i[t] : i
		}

		function i(e) {
			return "HTML" === e.nodeName ? e : e.parentNode || e.host
		}

		function n(e) {
			if (!e) return document.body;
			switch (e.nodeName) {
				case "HTML":
				case "BODY":
					return e.ownerDocument.body;
				case "#document":
					return e.body
			}
			var o = t(e),
				s = o.overflow,
				r = o.overflowX,
				a = o.overflowY;
			return /(auto|scroll|overlay)/.test(s + a + r) ? e : n(i(e))
		}

		function o(e) {
			if (!e) return document.documentElement;
			for (var i = U(10) ? document.body : null, n = e.offsetParent; n === i && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
			var s = n && n.nodeName;
			return s && "BODY" !== s && "HTML" !== s ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? o(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
		}

		function s(e) {
			return null === e.parentNode ? e : s(e.parentNode)
		}

		function r(e, t) {
			if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
			var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
				n = i ? e : t,
				a = i ? t : e,
				l = document.createRange();
			l.setStart(n, 0), l.setEnd(a, 0);
			var u = l.commonAncestorContainer;
			if (e !== u && t !== u || n.contains(a)) return function(e) {
				var t = e.nodeName;
				return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
			}(u) ? u : o(u);
			var c = s(e);
			return c.host ? r(c.host, t) : r(e, s(t).host)
		}

		function a(e) {
			var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
				i = e.nodeName;
			if ("BODY" === i || "HTML" === i) {
				var n = e.ownerDocument.documentElement;
				return (e.ownerDocument.scrollingElement || n)[t]
			}
			return e[t]
		}

		function l(e, t) {
			var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
				n = a(t, "top"),
				o = a(t, "left"),
				s = i ? -1 : 1;
			return e.top += n * s, e.bottom += n * s, e.left += o * s, e.right += o * s, e
		}

		function u(e, t) {
			var i = "x" === t ? "Left" : "Top",
				n = "Left" == i ? "Right" : "Bottom";
			return parseFloat(e["border" + i + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10)
		}

		function c(e, t, i, n) {
			return q(t["offset" + e], t["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], U(10) ? i["offset" + e] + n["margin" + ("Height" === e ? "Top" : "Left")] + n["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
		}

		function d() {
			var e = document.body,
				t = document.documentElement,
				i = U(10) && getComputedStyle(t);
			return {
				height: c("Height", e, t, i),
				width: c("Width", e, t, i)
			}
		}

		function h(e) {
			return K({}, e, {
				right: e.left + e.width,
				bottom: e.top + e.height
			})
		}

		function p(e) {
			var i = {};
			try {
				if (U(10)) {
					i = e.getBoundingClientRect();
					var n = a(e, "top"),
						o = a(e, "left");
					i.top += n, i.left += o, i.bottom += n, i.right += o
				} else i = e.getBoundingClientRect()
			} catch (e) {}
			var s = {
					left: i.left,
					top: i.top,
					width: i.right - i.left,
					height: i.bottom - i.top
				},
				r = "HTML" === e.nodeName ? d() : {},
				l = r.width || e.clientWidth || s.right - s.left,
				c = r.height || e.clientHeight || s.bottom - s.top,
				p = e.offsetWidth - l,
				f = e.offsetHeight - c;
			if (p || f) {
				var m = t(e);
				p -= u(m, "x"), f -= u(m, "y"), s.width -= p, s.height -= f
			}
			return h(s)
		}

		function f(e, i) {
			var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
				s = U(10),
				r = "HTML" === i.nodeName,
				a = p(e),
				u = p(i),
				c = n(e),
				d = t(i),
				f = parseFloat(d.borderTopWidth, 10),
				m = parseFloat(d.borderLeftWidth, 10);
			o && "HTML" === i.nodeName && (u.top = q(u.top, 0), u.left = q(u.left, 0));
			var g = h({
				top: a.top - u.top - f,
				left: a.left - u.left - m,
				width: a.width,
				height: a.height
			});
			if (g.marginTop = 0, g.marginLeft = 0, !s && r) {
				var v = parseFloat(d.marginTop, 10),
					y = parseFloat(d.marginLeft, 10);
				g.top -= f - v, g.bottom -= f - v, g.left -= m - y, g.right -= m - y, g.marginTop = v, g.marginLeft = y
			}
			return (s && !o ? i.contains(c) : i === c && "BODY" !== c.nodeName) && (g = l(g, i)), g
		}

		function m(e) {
			var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
				i = e.ownerDocument.documentElement,
				n = f(e, i),
				o = q(i.clientWidth, window.innerWidth || 0),
				s = q(i.clientHeight, window.innerHeight || 0),
				r = t ? 0 : a(i),
				l = t ? 0 : a(i, "left");
			return h({
				top: r - n.top + n.marginTop,
				left: l - n.left + n.marginLeft,
				width: o,
				height: s
			})
		}

		function g(e) {
			var n = e.nodeName;
			return "BODY" !== n && "HTML" !== n && ("fixed" === t(e, "position") || g(i(e)))
		}

		function v(e) {
			if (!e || !e.parentElement || U()) return document.documentElement;
			for (var i = e.parentElement; i && "none" === t(i, "transform");) i = i.parentElement;
			return i || document.documentElement
		}

		function y(e, t, o, s) {
			var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
				l = {
					top: 0,
					left: 0
				},
				u = a ? v(e) : r(e, t);
			if ("viewport" === s) l = m(u, a);
			else {
				var c;
				"scrollParent" === s ? "BODY" === (c = n(i(t))).nodeName && (c = e.ownerDocument.documentElement) : c = "window" === s ? e.ownerDocument.documentElement : s;
				var h = f(c, u, a);
				if ("HTML" !== c.nodeName || g(u)) l = h;
				else {
					var p = d(),
						y = p.height,
						b = p.width;
					l.top += h.top - h.marginTop, l.bottom = y + h.top, l.left += h.left - h.marginLeft, l.right = b + h.left
				}
			}
			return l.left += o, l.top += o, l.right -= o, l.bottom -= o, l
		}

		function b(e) {
			return e.width * e.height
		}

		function w(e, t, i, n, o) {
			var s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
			if (-1 === e.indexOf("auto")) return e;
			var r = y(i, n, s, o),
				a = {
					top: {
						width: r.width,
						height: t.top - r.top
					},
					right: {
						width: r.right - t.right,
						height: r.height
					},
					bottom: {
						width: r.width,
						height: r.bottom - t.bottom
					},
					left: {
						width: t.left - r.left,
						height: r.height
					}
				},
				l = Object.keys(a).map(function(e) {
					return K({
						key: e
					}, a[e], {
						area: b(a[e])
					})
				}).sort(function(e, t) {
					return t.area - e.area
				}),
				u = l.filter(function(e) {
					var t = e.width,
						n = e.height;
					return t >= i.clientWidth && n >= i.clientHeight
				}),
				c = 0 < u.length ? u[0].key : l[0].key,
				d = e.split("-")[1];
			return c + (d ? "-" + d : "")
		}

		function _(e, t, i) {
			var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
			return f(i, n ? v(t) : r(t, i), n)
		}

		function x(e) {
			var t = getComputedStyle(e),
				i = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
				n = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
			return {
				width: e.offsetWidth + n,
				height: e.offsetHeight + i
			}
		}

		function C(e) {
			var t = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};
			return e.replace(/left|right|bottom|top/g, function(e) {
				return t[e]
			})
		}

		function S(e, t, i) {
			i = i.split("-")[0];
			var n = x(e),
				o = {
					width: n.width,
					height: n.height
				},
				s = -1 !== ["right", "left"].indexOf(i),
				r = s ? "top" : "left",
				a = s ? "left" : "top",
				l = s ? "height" : "width",
				u = s ? "width" : "height";
			return o[r] = t[r] + t[l] / 2 - n[l] / 2, o[a] = i === a ? t[a] - n[u] : t[C(a)], o
		}

		function T(e, t) {
			return Array.prototype.find ? e.find(t) : e.filter(t)[0]
		}

		function E(t, i, n) {
			return (void 0 === n ? t : t.slice(0, function(e, t, i) {
				if (Array.prototype.findIndex) return e.findIndex(function(e) {
					return e[t] === i
				});
				var n = T(e, function(e) {
					return e[t] === i
				});
				return e.indexOf(n)
			}(t, "name", n))).forEach(function(t) {
				t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
				var n = t.function || t.fn;
				t.enabled && e(n) && (i.offsets.popper = h(i.offsets.popper), i.offsets.reference = h(i.offsets.reference), i = n(i, t))
			}), i
		}

		function $(e, t) {
			return e.some(function(e) {
				var i = e.name;
				return e.enabled && i === t
			})
		}

		function k(e) {
			for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
				var o = t[n],
					s = o ? "" + o + i : e;
				if (void 0 !== document.body.style[s]) return s
			}
			return null
		}

		function A(e) {
			var t = e.ownerDocument;
			return t ? t.defaultView : window
		}

		function D(e, t, i, o) {
			i.updateBound = o, A(e).addEventListener("resize", i.updateBound, {
				passive: !0
			});
			var s = n(e);
			return function e(t, i, o, s) {
				var r = "BODY" === t.nodeName,
					a = r ? t.ownerDocument.defaultView : t;
				a.addEventListener(i, o, {
					passive: !0
				}), r || e(n(a.parentNode), i, o, s), s.push(a)
			}(s, "scroll", i.updateBound, i.scrollParents), i.scrollElement = s, i.eventsEnabled = !0, i
		}

		function j() {
			var e, t;
			this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, A(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
				e.removeEventListener("scroll", t.updateBound)
			}), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
		}

		function O(e) {
			return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
		}

		function I(e, t) {
			Object.keys(t).forEach(function(i) {
				var n = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && O(t[i]) && (n = "px"), e.style[i] = t[i] + n
			})
		}

		function N(e, t, i) {
			var n = T(e, function(e) {
					return e.name === t
				}),
				o = !!n && e.some(function(e) {
					return e.name === i && e.enabled && e.order < n.order
				});
			if (!o) {
				var s = "`" + t + "`";
				console.warn("`" + i + "` modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")
			}
			return o
		}

		function L(e) {
			var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
				i = Z.indexOf(e),
				n = Z.slice(i + 1).concat(Z.slice(0, i));
			return t ? n.reverse() : n
		}

		function P(e, t, i, n) {
			var o = [0, 0],
				s = -1 !== ["right", "left"].indexOf(n),
				r = e.split(/(\+|\-)/).map(function(e) {
					return e.trim()
				}),
				a = r.indexOf(T(r, function(e) {
					return -1 !== e.search(/,|\s/)
				}));
			r[a] && -1 === r[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
			var l = /\s*,\s*|\s+/,
				u = -1 === a ? [r] : [r.slice(0, a).concat([r[a].split(l)[0]]), [r[a].split(l)[1]].concat(r.slice(a + 1))];
			return (u = u.map(function(e, n) {
				var o = (1 === n ? !s : s) ? "height" : "width",
					r = !1;
				return e.reduce(function(e, t) {
					return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, r = !0, e) : r ? (e[e.length - 1] += t, r = !1, e) : e.concat(t)
				}, []).map(function(e) {
					return function(e, t, i, n) {
						var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
							s = +o[1],
							r = o[2];
						if (!s) return e;
						if (0 === r.indexOf("%")) {
							var a;
							switch (r) {
								case "%p":
									a = i;
									break;
								case "%":
								case "%r":
								default:
									a = n
							}
							return h(a)[t] / 100 * s
						}
						return "vh" === r || "vw" === r ? ("vh" === r ? q(document.documentElement.clientHeight, window.innerHeight || 0) : q(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * s : s
					}(e, o, t, i)
				})
			})).forEach(function(e, t) {
				e.forEach(function(i, n) {
					O(i) && (o[t] += i * ("-" === e[n - 1] ? -1 : 1))
				})
			}), o
		}
		for (var z = Math.min, M = Math.floor, q = Math.max, W = "undefined" != typeof window && "undefined" != typeof document, H = ["Edge", "Trident", "Firefox"], F = 0, R = 0; R < H.length; R += 1)
			if (W && 0 <= navigator.userAgent.indexOf(H[R])) {
				F = 1;
				break
			} var B = W && window.Promise ? function(e) {
				var t = !1;
				return function() {
					t || (t = !0, window.Promise.resolve().then(function() {
						t = !1, e()
					}))
				}
			} : function(e) {
				var t = !1;
				return function() {
					t || (t = !0, setTimeout(function() {
						t = !1, e()
					}, F))
				}
			},
			Q = {},
			U = function() {
				var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "all";
				return e = e.toString(), Q.hasOwnProperty(e) ? Q[e] : ("11" === e ? Q[e] = -1 !== navigator.userAgent.indexOf("Trident") : "10" === e ? Q[e] = -1 !== navigator.appVersion.indexOf("MSIE 10") : "all" === e && (Q[e] = -1 !== navigator.userAgent.indexOf("Trident") || -1 !== navigator.userAgent.indexOf("MSIE")), Q.all = Q.all || Object.keys(Q).some(function(e) {
					return Q[e]
				}), Q[e])
			},
			V = function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			},
			G = function() {
				function e(e, t) {
					for (var i, n = 0; n < t.length; n++)(i = t[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
				return function(t, i, n) {
					return i && e(t.prototype, i), n && e(t, n), t
				}
			}(),
			Y = function(e, t, i) {
				return t in e ? Object.defineProperty(e, t, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = i, e
			},
			K = Object.assign || function(e) {
				for (var t, i = 1; i < arguments.length; i++)
					for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
				return e
			},
			X = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
			Z = X.slice(3),
			J = "flip",
			ee = "clockwise",
			te = "counterclockwise",
			ie = function() {
				function t(i, n) {
					var o = this,
						s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
					V(this, t), this.scheduleUpdate = function() {
						return requestAnimationFrame(o.update)
					}, this.update = B(this.update.bind(this)), this.options = K({}, t.Defaults, s), this.state = {
						isDestroyed: !1,
						isCreated: !1,
						scrollParents: []
					}, this.reference = i && i.jquery ? i[0] : i, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(K({}, t.Defaults.modifiers, s.modifiers)).forEach(function(e) {
						o.options.modifiers[e] = K({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {})
					}), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
						return K({
							name: e
						}, o.options.modifiers[e])
					}).sort(function(e, t) {
						return e.order - t.order
					}), this.modifiers.forEach(function(t) {
						t.enabled && e(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state)
					}), this.update();
					var r = this.options.eventsEnabled;
					r && this.enableEventListeners(), this.state.eventsEnabled = r
				}
				return G(t, [{
					key: "update",
					value: function() {
						return function() {
							if (!this.state.isDestroyed) {
								var e = {
									instance: this,
									styles: {},
									arrowStyles: {},
									attributes: {},
									flipped: !1,
									offsets: {}
								};
								e.offsets.reference = _(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = E(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
							}
						}.call(this)
					}
				}, {
					key: "destroy",
					value: function() {
						return function() {
							return this.state.isDestroyed = !0, $(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[k("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
						}.call(this)
					}
				}, {
					key: "enableEventListeners",
					value: function() {
						return function() {
							this.state.eventsEnabled || (this.state = D(this.reference, this.options, this.state, this.scheduleUpdate))
						}.call(this)
					}
				}, {
					key: "disableEventListeners",
					value: function() {
						return j.call(this)
					}
				}]), t
			}();
		return ie.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ie.placements = X, ie.Defaults = {
			placement: "bottom",
			positionFixed: !1,
			eventsEnabled: !0,
			removeOnDestroy: !1,
			onCreate: function() {},
			onUpdate: function() {},
			modifiers: {
				shift: {
					order: 100,
					enabled: !0,
					fn: function(e) {
						var t = e.placement,
							i = t.split("-")[0],
							n = t.split("-")[1];
						if (n) {
							var o = e.offsets,
								s = o.reference,
								r = o.popper,
								a = -1 !== ["bottom", "top"].indexOf(i),
								l = a ? "left" : "top",
								u = a ? "width" : "height",
								c = {
									start: Y({}, l, s[l]),
									end: Y({}, l, s[l] + s[u] - r[u])
								};
							e.offsets.popper = K({}, r, c[n])
						}
						return e
					}
				},
				offset: {
					order: 200,
					enabled: !0,
					fn: function(e, t) {
						var i, n = t.offset,
							o = e.placement,
							s = e.offsets,
							r = s.popper,
							a = s.reference,
							l = o.split("-")[0];
						return i = O(+n) ? [+n, 0] : P(n, r, a, l), "left" === l ? (r.top += i[0], r.left -= i[1]) : "right" === l ? (r.top += i[0], r.left += i[1]) : "top" === l ? (r.left += i[0], r.top -= i[1]) : "bottom" === l && (r.left += i[0], r.top += i[1]), e.popper = r, e
					},
					offset: 0
				},
				preventOverflow: {
					order: 300,
					enabled: !0,
					fn: function(e, t) {
						var i = t.boundariesElement || o(e.instance.popper);
						e.instance.reference === i && (i = o(i));
						var n = y(e.instance.popper, e.instance.reference, t.padding, i, e.positionFixed);
						t.boundaries = n;
						var s = t.priority,
							r = e.offsets.popper,
							a = {
								primary: function(e) {
									var i = r[e];
									return r[e] < n[e] && !t.escapeWithReference && (i = q(r[e], n[e])), Y({}, e, i)
								},
								secondary: function(e) {
									var i = "right" === e ? "left" : "top",
										o = r[i];
									return r[e] > n[e] && !t.escapeWithReference && (o = z(r[i], n[e] - ("right" === e ? r.width : r.height))), Y({}, i, o)
								}
							};
						return s.forEach(function(e) {
							var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
							r = K({}, r, a[t](e))
						}), e.offsets.popper = r, e
					},
					priority: ["left", "right", "top", "bottom"],
					padding: 5,
					boundariesElement: "scrollParent"
				},
				keepTogether: {
					order: 400,
					enabled: !0,
					fn: function(e) {
						var t = e.offsets,
							i = t.popper,
							n = t.reference,
							o = e.placement.split("-")[0],
							s = M,
							r = -1 !== ["top", "bottom"].indexOf(o),
							a = r ? "right" : "bottom",
							l = r ? "left" : "top",
							u = r ? "width" : "height";
						return i[a] < s(n[l]) && (e.offsets.popper[l] = s(n[l]) - i[u]), i[l] > s(n[a]) && (e.offsets.popper[l] = s(n[a])), e
					}
				},
				arrow: {
					order: 500,
					enabled: !0,
					fn: function(e, i) {
						var n;
						if (!N(e.instance.modifiers, "arrow", "keepTogether")) return e;
						var o = i.element;
						if ("string" == typeof o) {
							if (!(o = e.instance.popper.querySelector(o))) return e
						} else if (!e.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
						var s = e.placement.split("-")[0],
							r = e.offsets,
							a = r.popper,
							l = r.reference,
							u = -1 !== ["left", "right"].indexOf(s),
							c = u ? "height" : "width",
							d = u ? "Top" : "Left",
							p = d.toLowerCase(),
							f = u ? "left" : "top",
							m = u ? "bottom" : "right",
							g = x(o)[c];
						l[m] - g < a[p] && (e.offsets.popper[p] -= a[p] - (l[m] - g)), l[p] + g > a[m] && (e.offsets.popper[p] += l[p] + g - a[m]), e.offsets.popper = h(e.offsets.popper);
						var v = l[p] + l[c] / 2 - g / 2,
							y = t(e.instance.popper),
							b = parseFloat(y["margin" + d], 10),
							w = parseFloat(y["border" + d + "Width"], 10),
							_ = v - e.offsets.popper[p] - b - w;
						return _ = q(z(a[c] - g, _), 0), e.arrowElement = o, e.offsets.arrow = (Y(n = {}, p, Math.round(_)), Y(n, f, ""), n), e
					},
					element: "[x-arrow]"
				},
				flip: {
					order: 600,
					enabled: !0,
					fn: function(e, t) {
						if ($(e.instance.modifiers, "inner")) return e;
						if (e.flipped && e.placement === e.originalPlacement) return e;
						var i = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
							n = e.placement.split("-")[0],
							o = C(n),
							s = e.placement.split("-")[1] || "",
							r = [];
						switch (t.behavior) {
							case J:
								r = [n, o];
								break;
							case ee:
								r = L(n);
								break;
							case te:
								r = L(n, !0);
								break;
							default:
								r = t.behavior
						}
						return r.forEach(function(a, l) {
							if (n !== a || r.length === l + 1) return e;
							n = e.placement.split("-")[0], o = C(n);
							var u = e.offsets.popper,
								c = e.offsets.reference,
								d = M,
								h = "left" === n && d(u.right) > d(c.left) || "right" === n && d(u.left) < d(c.right) || "top" === n && d(u.bottom) > d(c.top) || "bottom" === n && d(u.top) < d(c.bottom),
								p = d(u.left) < d(i.left),
								f = d(u.right) > d(i.right),
								m = d(u.top) < d(i.top),
								g = d(u.bottom) > d(i.bottom),
								v = "left" === n && p || "right" === n && f || "top" === n && m || "bottom" === n && g,
								y = -1 !== ["top", "bottom"].indexOf(n),
								b = !!t.flipVariations && (y && "start" === s && p || y && "end" === s && f || !y && "start" === s && m || !y && "end" === s && g);
							(h || v || b) && (e.flipped = !0, (h || v) && (n = r[l + 1]), b && (s = function(e) {
								return "end" === e ? "start" : "start" === e ? "end" : e
							}(s)), e.placement = n + (s ? "-" + s : ""), e.offsets.popper = K({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = E(e.instance.modifiers, e, "flip"))
						}), e
					},
					behavior: "flip",
					padding: 5,
					boundariesElement: "viewport"
				},
				inner: {
					order: 700,
					enabled: !1,
					fn: function(e) {
						var t = e.placement,
							i = t.split("-")[0],
							n = e.offsets,
							o = n.popper,
							s = n.reference,
							r = -1 !== ["left", "right"].indexOf(i),
							a = -1 === ["top", "left"].indexOf(i);
						return o[r ? "left" : "top"] = s[i] - (a ? o[r ? "width" : "height"] : 0), e.placement = C(t), e.offsets.popper = h(o), e
					}
				},
				hide: {
					order: 800,
					enabled: !0,
					fn: function(e) {
						if (!N(e.instance.modifiers, "hide", "preventOverflow")) return e;
						var t = e.offsets.reference,
							i = T(e.instance.modifiers, function(e) {
								return "preventOverflow" === e.name
							}).boundaries;
						if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
							if (!0 === e.hide) return e;
							e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
						} else {
							if (!1 === e.hide) return e;
							e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
						}
						return e
					}
				},
				computeStyle: {
					order: 850,
					enabled: !0,
					fn: function(e, t) {
						var i = t.x,
							n = t.y,
							s = e.offsets.popper,
							r = T(e.instance.modifiers, function(e) {
								return "applyStyle" === e.name
							}).gpuAcceleration;
						void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
						var a, l, u = void 0 === r ? t.gpuAcceleration : r,
							c = p(o(e.instance.popper)),
							d = {
								position: s.position
							},
							h = {
								left: M(s.left),
								top: M(s.top),
								bottom: M(s.bottom),
								right: M(s.right)
							},
							f = "bottom" === i ? "top" : "bottom",
							m = "right" === n ? "left" : "right",
							g = k("transform");
						if (l = "bottom" == f ? -c.height + h.bottom : h.top, a = "right" == m ? -c.width + h.right : h.left, u && g) d[g] = "translate3d(" + a + "px, " + l + "px, 0)", d[f] = 0, d[m] = 0, d.willChange = "transform";
						else {
							var v = "bottom" == f ? -1 : 1,
								y = "right" == m ? -1 : 1;
							d[f] = l * v, d[m] = a * y, d.willChange = f + ", " + m
						}
						var b = {
							"x-placement": e.placement
						};
						return e.attributes = K({}, b, e.attributes), e.styles = K({}, d, e.styles), e.arrowStyles = K({}, e.offsets.arrow, e.arrowStyles), e
					},
					gpuAcceleration: !0,
					x: "bottom",
					y: "right"
				},
				applyStyle: {
					order: 900,
					enabled: !0,
					fn: function(e) {
						return I(e.instance.popper, e.styles),
							function(e, t) {
								Object.keys(t).forEach(function(i) {
									!1 === t[i] ? e.removeAttribute(i) : e.setAttribute(i, t[i])
								})
							}(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && I(e.arrowElement, e.arrowStyles), e
					},
					onLoad: function(e, t, i, n, o) {
						var s = _(o, t, e, i.positionFixed),
							r = w(i.placement, s, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
						return t.setAttribute("x-placement", r), I(t, {
							position: i.positionFixed ? "fixed" : "absolute"
						}), i
					},
					gpuAcceleration: void 0
				}
			}
		}, ie
	}),
	function(e, t) {
		"object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
	}(this, function(e, t, i) {
		"use strict";

		function n(e, t) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
			}
		}

		function o(e, t, i) {
			return t && n(e.prototype, t), i && n(e, i), e
		}

		function s(e) {
			for (var t = 1; t < arguments.length; t++) {
				var i = null != arguments[t] ? arguments[t] : {},
					n = Object.keys(i);
				"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
					return Object.getOwnPropertyDescriptor(i, e).enumerable
				}))), n.forEach(function(t) {
					var n, o, s;
					n = e, s = i[o = t], o in n ? Object.defineProperty(n, o, {
						value: s,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : n[o] = s
				})
			}
			return e
		}
		t = t && t.hasOwnProperty("default") ? t.default : t, i = i && i.hasOwnProperty("default") ? i.default : i;
		var r = "transitionend";
		var a = {
			TRANSITION_END: "bsTransitionEnd",
			getUID: function(e) {
				for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
				return e
			},
			getSelectorFromElement: function(e) {
				var t = e.getAttribute("data-target");
				if (!t || "#" === t) {
					var i = e.getAttribute("href");
					t = i && "#" !== i ? i.trim() : ""
				}
				try {
					return document.querySelector(t) ? t : null
				} catch (e) {
					return null
				}
			},
			getTransitionDurationFromElement: function(e) {
				if (!e) return 0;
				var i = t(e).css("transition-duration"),
					n = t(e).css("transition-delay"),
					o = parseFloat(i),
					s = parseFloat(n);
				return o || s ? (i = i.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(i) + parseFloat(n))) : 0
			},
			reflow: function(e) {
				return e.offsetHeight
			},
			triggerTransitionEnd: function(e) {
				t(e).trigger(r)
			},
			supportsTransitionEnd: function() {
				return Boolean(r)
			},
			isElement: function(e) {
				return (e[0] || e).nodeType
			},
			typeCheckConfig: function(e, t, i) {
				for (var n in i)
					if (Object.prototype.hasOwnProperty.call(i, n)) {
						var o = i[n],
							s = t[n],
							r = s && a.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
						if (!new RegExp(o).test(r)) throw new Error(e.toUpperCase() + ': Option "' + n + '" provided type "' + r + '" but expected type "' + o + '".')
					} var l
			},
			findShadowRoot: function(e) {
				if (!document.documentElement.attachShadow) return null;
				if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null;
				var t = e.getRootNode();
				return t instanceof ShadowRoot ? t : null
			}
		};
		t.fn.emulateTransitionEnd = function(e) {
			var i = this,
				n = !1;
			return t(this).one(a.TRANSITION_END, function() {
				n = !0
			}), setTimeout(function() {
				n || a.triggerTransitionEnd(i)
			}, e), this
		}, t.event.special[a.TRANSITION_END] = {
			bindType: r,
			delegateType: r,
			handle: function(e) {
				if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
			}
		};
		var l = "alert",
			u = "bs.alert",
			c = "." + u,
			d = t.fn[l],
			h = {
				CLOSE: "close" + c,
				CLOSED: "closed" + c,
				CLICK_DATA_API: "click" + c + ".data-api"
			},
			p = function() {
				function e(e) {
					this._element = e
				}
				var i = e.prototype;
				return i.close = function(e) {
					var t = this._element;
					e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
				}, i.dispose = function() {
					t.removeData(this._element, u), this._element = null
				}, i._getRootElement = function(e) {
					var i = a.getSelectorFromElement(e),
						n = !1;
					return i && (n = document.querySelector(i)), n || (n = t(e).closest(".alert")[0]), n
				}, i._triggerCloseEvent = function(e) {
					var i = t.Event(h.CLOSE);
					return t(e).trigger(i), i
				}, i._removeElement = function(e) {
					var i = this;
					if (t(e).removeClass("show"), t(e).hasClass("fade")) {
						var n = a.getTransitionDurationFromElement(e);
						t(e).one(a.TRANSITION_END, function(t) {
							return i._destroyElement(e, t)
						}).emulateTransitionEnd(n)
					} else this._destroyElement(e)
				}, i._destroyElement = function(e) {
					t(e).detach().trigger(h.CLOSED).remove()
				}, e._jQueryInterface = function(i) {
					return this.each(function() {
						var n = t(this),
							o = n.data(u);
						o || (o = new e(this), n.data(u, o)), "close" === i && o[i](this)
					})
				}, e._handleDismiss = function(e) {
					return function(t) {
						t && t.preventDefault(), e.close(this)
					}
				}, o(e, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}]), e
			}();
		t(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), t.fn[l] = p._jQueryInterface, t.fn[l].Constructor = p, t.fn[l].noConflict = function() {
			return t.fn[l] = d, p._jQueryInterface
		};
		var f = "button",
			m = "bs.button",
			g = "." + m,
			v = ".data-api",
			y = t.fn[f],
			b = "active",
			w = '[data-toggle^="button"]',
			_ = ".btn",
			x = {
				CLICK_DATA_API: "click" + g + v,
				FOCUS_BLUR_DATA_API: "focus" + g + v + " blur" + g + v
			},
			C = function() {
				function e(e) {
					this._element = e
				}
				var i = e.prototype;
				return i.toggle = function() {
					var e = !0,
						i = !0,
						n = t(this._element).closest('[data-toggle="buttons"]')[0];
					if (n) {
						var o = this._element.querySelector('input:not([type="hidden"])');
						if (o) {
							if ("radio" === o.type)
								if (o.checked && this._element.classList.contains(b)) e = !1;
								else {
									var s = n.querySelector(".active");
									s && t(s).removeClass(b)
								} if (e) {
								if (o.hasAttribute("disabled") || n.hasAttribute("disabled") || o.classList.contains("disabled") || n.classList.contains("disabled")) return;
								o.checked = !this._element.classList.contains(b), t(o).trigger("change")
							}
							o.focus(), i = !1
						}
					}
					i && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), e && t(this._element).toggleClass(b)
				}, i.dispose = function() {
					t.removeData(this._element, m), this._element = null
				}, e._jQueryInterface = function(i) {
					return this.each(function() {
						var n = t(this).data(m);
						n || (n = new e(this), t(this).data(m, n)), "toggle" === i && n[i]()
					})
				}, o(e, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}]), e
			}();
		t(document).on(x.CLICK_DATA_API, w, function(e) {
			e.preventDefault();
			var i = e.target;
			t(i).hasClass("btn") || (i = t(i).closest(_)), C._jQueryInterface.call(t(i), "toggle")
		}).on(x.FOCUS_BLUR_DATA_API, w, function(e) {
			var i = t(e.target).closest(_)[0];
			t(i).toggleClass("focus", /^focus(in)?$/.test(e.type))
		}), t.fn[f] = C._jQueryInterface, t.fn[f].Constructor = C, t.fn[f].noConflict = function() {
			return t.fn[f] = y, C._jQueryInterface
		};
		var S = "carousel",
			T = "bs.carousel",
			E = "." + T,
			$ = ".data-api",
			k = t.fn[S],
			A = {
				interval: 5e3,
				keyboard: !0,
				slide: !1,
				pause: "hover",
				wrap: !0,
				touch: !0
			},
			D = {
				interval: "(number|boolean)",
				keyboard: "boolean",
				slide: "(boolean|string)",
				pause: "(string|boolean)",
				wrap: "boolean",
				touch: "boolean"
			},
			j = "next",
			O = "prev",
			I = {
				SLIDE: "slide" + E,
				SLID: "slid" + E,
				KEYDOWN: "keydown" + E,
				MOUSEENTER: "mouseenter" + E,
				MOUSELEAVE: "mouseleave" + E,
				TOUCHSTART: "touchstart" + E,
				TOUCHMOVE: "touchmove" + E,
				TOUCHEND: "touchend" + E,
				POINTERDOWN: "pointerdown" + E,
				POINTERUP: "pointerup" + E,
				DRAG_START: "dragstart" + E,
				LOAD_DATA_API: "load" + E + $,
				CLICK_DATA_API: "click" + E + $
			},
			N = "active",
			L = ".active.carousel-item",
			P = ".carousel-indicators",
			z = {
				TOUCH: "touch",
				PEN: "pen"
			},
			M = function() {
				function e(e, t) {
					this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(P), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
				}
				var i = e.prototype;
				return i.next = function() {
					this._isSliding || this._slide(j)
				}, i.nextWhenVisible = function() {
					!document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
				}, i.prev = function() {
					this._isSliding || this._slide(O)
				}, i.pause = function(e) {
					e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
				}, i.cycle = function(e) {
					e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
				}, i.to = function(e) {
					var i = this;
					this._activeElement = this._element.querySelector(L);
					var n = this._getItemIndex(this._activeElement);
					if (!(e > this._items.length - 1 || e < 0))
						if (this._isSliding) t(this._element).one(I.SLID, function() {
							return i.to(e)
						});
						else {
							if (n === e) return this.pause(), void this.cycle();
							var o = n < e ? j : O;
							this._slide(o, this._items[e])
						}
				}, i.dispose = function() {
					t(this._element).off(E), t.removeData(this._element, T), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
				}, i._getConfig = function(e) {
					return e = s({}, A, e), a.typeCheckConfig(S, e, D), e
				}, i._handleSwipe = function() {
					var e = Math.abs(this.touchDeltaX);
					if (!(e <= 40)) {
						var t = e / this.touchDeltaX;
						0 < t && this.prev(), t < 0 && this.next()
					}
				}, i._addEventListeners = function() {
					var e = this;
					this._config.keyboard && t(this._element).on(I.KEYDOWN, function(t) {
						return e._keydown(t)
					}), "hover" === this._config.pause && t(this._element).on(I.MOUSEENTER, function(t) {
						return e.pause(t)
					}).on(I.MOUSELEAVE, function(t) {
						return e.cycle(t)
					}), this._config.touch && this._addTouchEventListeners()
				}, i._addTouchEventListeners = function() {
					var e = this;
					if (this._touchSupported) {
						var i = function(t) {
								e._pointerEvent && z[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
							},
							n = function(t) {
								e._pointerEvent && z[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
									return e.cycle(t)
								}, 500 + e._config.interval))
							};
						t(this._element.querySelectorAll(".carousel-item img")).on(I.DRAG_START, function(e) {
							return e.preventDefault()
						}), this._pointerEvent ? (t(this._element).on(I.POINTERDOWN, function(e) {
							return i(e)
						}), t(this._element).on(I.POINTERUP, function(e) {
							return n(e)
						}), this._element.classList.add("pointer-event")) : (t(this._element).on(I.TOUCHSTART, function(e) {
							return i(e)
						}), t(this._element).on(I.TOUCHMOVE, function(t) {
							var i;
							(i = t).originalEvent.touches && 1 < i.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = i.originalEvent.touches[0].clientX - e.touchStartX
						}), t(this._element).on(I.TOUCHEND, function(e) {
							return n(e)
						}))
					}
				}, i._keydown = function(e) {
					if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
						case 37:
							e.preventDefault(), this.prev();
							break;
						case 39:
							e.preventDefault(), this.next()
					}
				}, i._getItemIndex = function(e) {
					return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
				}, i._getItemByDirection = function(e, t) {
					var i = e === j,
						n = e === O,
						o = this._getItemIndex(t),
						s = this._items.length - 1;
					if ((n && 0 === o || i && o === s) && !this._config.wrap) return t;
					var r = (o + (e === O ? -1 : 1)) % this._items.length;
					return -1 === r ? this._items[this._items.length - 1] : this._items[r]
				}, i._triggerSlideEvent = function(e, i) {
					var n = this._getItemIndex(e),
						o = this._getItemIndex(this._element.querySelector(L)),
						s = t.Event(I.SLIDE, {
							relatedTarget: e,
							direction: i,
							from: o,
							to: n
						});
					return t(this._element).trigger(s), s
				}, i._setActiveIndicatorElement = function(e) {
					if (this._indicatorsElement) {
						var i = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
						t(i).removeClass(N);
						var n = this._indicatorsElement.children[this._getItemIndex(e)];
						n && t(n).addClass(N)
					}
				}, i._slide = function(e, i) {
					var n, o, s, r = this,
						l = this._element.querySelector(L),
						u = this._getItemIndex(l),
						c = i || l && this._getItemByDirection(e, l),
						d = this._getItemIndex(c),
						h = Boolean(this._interval);
					if (s = e === j ? (n = "carousel-item-left", o = "carousel-item-next", "left") : (n = "carousel-item-right", o = "carousel-item-prev", "right"), c && t(c).hasClass(N)) this._isSliding = !1;
					else if (!this._triggerSlideEvent(c, s).isDefaultPrevented() && l && c) {
						this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(c);
						var p = t.Event(I.SLID, {
							relatedTarget: c,
							direction: s,
							from: u,
							to: d
						});
						if (t(this._element).hasClass("slide")) {
							t(c).addClass(o), a.reflow(c), t(l).addClass(n), t(c).addClass(n);
							var f = parseInt(c.getAttribute("data-interval"), 10);
							this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
							var m = a.getTransitionDurationFromElement(l);
							t(l).one(a.TRANSITION_END, function() {
								t(c).removeClass(n + " " + o).addClass(N), t(l).removeClass(N + " " + o + " " + n), r._isSliding = !1, setTimeout(function() {
									return t(r._element).trigger(p)
								}, 0)
							}).emulateTransitionEnd(m)
						} else t(l).removeClass(N), t(c).addClass(N), this._isSliding = !1, t(this._element).trigger(p);
						h && this.cycle()
					}
				}, e._jQueryInterface = function(i) {
					return this.each(function() {
						var n = t(this).data(T),
							o = s({}, A, t(this).data());
						"object" == typeof i && (o = s({}, o, i));
						var r = "string" == typeof i ? i : o.slide;
						if (n || (n = new e(this, o), t(this).data(T, n)), "number" == typeof i) n.to(i);
						else if ("string" == typeof r) {
							if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
							n[r]()
						} else o.interval && o.ride && (n.pause(), n.cycle())
					})
				}, e._dataApiClickHandler = function(i) {
					var n = a.getSelectorFromElement(this);
					if (n) {
						var o = t(n)[0];
						if (o && t(o).hasClass("carousel")) {
							var r = s({}, t(o).data(), t(this).data()),
								l = this.getAttribute("data-slide-to");
							l && (r.interval = !1), e._jQueryInterface.call(t(o), r), l && t(o).data(T).to(l), i.preventDefault()
						}
					}
				}, o(e, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return A
					}
				}]), e
			}();
		t(document).on(I.CLICK_DATA_API, "[data-slide], [data-slide-to]", M._dataApiClickHandler), t(window).on(I.LOAD_DATA_API, function() {
			for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), i = 0, n = e.length; i < n; i++) {
				var o = t(e[i]);
				M._jQueryInterface.call(o, o.data())
			}
		}), t.fn[S] = M._jQueryInterface, t.fn[S].Constructor = M, t.fn[S].noConflict = function() {
			return t.fn[S] = k, M._jQueryInterface
		};
		var q = "collapse",
			W = "bs.collapse",
			H = "." + W,
			F = t.fn[q],
			R = {
				toggle: !0,
				parent: ""
			},
			B = {
				toggle: "boolean",
				parent: "(string|element)"
			},
			Q = {
				SHOW: "show" + H,
				SHOWN: "shown" + H,
				HIDE: "hide" + H,
				HIDDEN: "hidden" + H,
				CLICK_DATA_API: "click" + H + ".data-api"
			},
			U = "show",
			V = "collapse",
			G = "collapsing",
			Y = "collapsed",
			K = '[data-toggle="collapse"]',
			X = function() {
				function e(e, t) {
					this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
					for (var i = [].slice.call(document.querySelectorAll(K)), n = 0, o = i.length; n < o; n++) {
						var s = i[n],
							r = a.getSelectorFromElement(s),
							l = [].slice.call(document.querySelectorAll(r)).filter(function(t) {
								return t === e
							});
						null !== r && 0 < l.length && (this._selector = r, this._triggerArray.push(s))
					}
					this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
				}
				var i = e.prototype;
				return i.toggle = function() {
					t(this._element).hasClass(U) ? this.hide() : this.show()
				}, i.show = function() {
					var i, n, o = this;
					if (!(this._isTransitioning || t(this._element).hasClass(U) || (this._parent && 0 === (i = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
							return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(V)
						})).length && (i = null), i && (n = t(i).not(this._selector).data(W)) && n._isTransitioning))) {
						var s = t.Event(Q.SHOW);
						if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
							i && (e._jQueryInterface.call(t(i).not(this._selector), "hide"), n || t(i).data(W, null));
							var r = this._getDimension();
							t(this._element).removeClass(V).addClass(G), this._element.style[r] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(Y).attr("aria-expanded", !0), this.setTransitioning(!0);
							var l = "scroll" + (r[0].toUpperCase() + r.slice(1)),
								u = a.getTransitionDurationFromElement(this._element);
							t(this._element).one(a.TRANSITION_END, function() {
								t(o._element).removeClass(G).addClass(V).addClass(U), o._element.style[r] = "", o.setTransitioning(!1), t(o._element).trigger(Q.SHOWN)
							}).emulateTransitionEnd(u), this._element.style[r] = this._element[l] + "px"
						}
					}
				}, i.hide = function() {
					var e = this;
					if (!this._isTransitioning && t(this._element).hasClass(U)) {
						var i = t.Event(Q.HIDE);
						if (t(this._element).trigger(i), !i.isDefaultPrevented()) {
							var n = this._getDimension();
							this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", a.reflow(this._element), t(this._element).addClass(G).removeClass(V).removeClass(U);
							var o = this._triggerArray.length;
							if (0 < o)
								for (var s = 0; s < o; s++) {
									var r = this._triggerArray[s],
										l = a.getSelectorFromElement(r);
									null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass(U) || t(r).addClass(Y).attr("aria-expanded", !1))
								}
							this.setTransitioning(!0), this._element.style[n] = "";
							var u = a.getTransitionDurationFromElement(this._element);
							t(this._element).one(a.TRANSITION_END, function() {
								e.setTransitioning(!1), t(e._element).removeClass(G).addClass(V).trigger(Q.HIDDEN)
							}).emulateTransitionEnd(u)
						}
					}
				}, i.setTransitioning = function(e) {
					this._isTransitioning = e
				}, i.dispose = function() {
					t.removeData(this._element, W), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
				}, i._getConfig = function(e) {
					return (e = s({}, R, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(q, e, B), e
				}, i._getDimension = function() {
					return t(this._element).hasClass("width") ? "width" : "height"
				}, i._getParent = function() {
					var i, n = this;
					a.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = document.querySelector(this._config.parent);
					var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
						s = [].slice.call(i.querySelectorAll(o));
					return t(s).each(function(t, i) {
						n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
					}), i
				}, i._addAriaAndCollapsedClass = function(e, i) {
					var n = t(e).hasClass(U);
					i.length && t(i).toggleClass(Y, !n).attr("aria-expanded", n)
				}, e._getTargetFromElement = function(e) {
					var t = a.getSelectorFromElement(e);
					return t ? document.querySelector(t) : null
				}, e._jQueryInterface = function(i) {
					return this.each(function() {
						var n = t(this),
							o = n.data(W),
							r = s({}, R, n.data(), "object" == typeof i && i ? i : {});
						if (!o && r.toggle && /show|hide/.test(i) && (r.toggle = !1), o || (o = new e(this, r), n.data(W, o)), "string" == typeof i) {
							if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
							o[i]()
						}
					})
				}, o(e, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return R
					}
				}]), e
			}();
		t(document).on(Q.CLICK_DATA_API, K, function(e) {
			"A" === e.currentTarget.tagName && e.preventDefault();
			var i = t(this),
				n = a.getSelectorFromElement(this),
				o = [].slice.call(document.querySelectorAll(n));
			t(o).each(function() {
				var e = t(this),
					n = e.data(W) ? "toggle" : i.data();
				X._jQueryInterface.call(e, n)
			})
		}), t.fn[q] = X._jQueryInterface, t.fn[q].Constructor = X, t.fn[q].noConflict = function() {
			return t.fn[q] = F, X._jQueryInterface
		};
		var Z = "dropdown",
			J = "bs.dropdown",
			ee = "." + J,
			te = ".data-api",
			ie = t.fn[Z],
			ne = new RegExp("38|40|27"),
			oe = {
				HIDE: "hide" + ee,
				HIDDEN: "hidden" + ee,
				SHOW: "show" + ee,
				SHOWN: "shown" + ee,
				CLICK: "click" + ee,
				CLICK_DATA_API: "click" + ee + te,
				KEYDOWN_DATA_API: "keydown" + ee + te,
				KEYUP_DATA_API: "keyup" + ee + te
			},
			se = "disabled",
			re = "show",
			ae = "dropdown-menu-right",
			le = '[data-toggle="dropdown"]',
			ue = ".dropdown-menu",
			ce = {
				offset: 0,
				flip: !0,
				boundary: "scrollParent",
				reference: "toggle",
				display: "dynamic"
			},
			de = {
				offset: "(number|string|function)",
				flip: "boolean",
				boundary: "(string|element)",
				reference: "(string|element)",
				display: "string"
			},
			he = function() {
				function e(e, t) {
					this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
				}
				var n = e.prototype;
				return n.toggle = function() {
					if (!this._element.disabled && !t(this._element).hasClass(se)) {
						var n = e._getParentFromElement(this._element),
							o = t(this._menu).hasClass(re);
						if (e._clearMenus(), !o) {
							var s = {
									relatedTarget: this._element
								},
								r = t.Event(oe.SHOW, s);
							if (t(n).trigger(r), !r.isDefaultPrevented()) {
								if (!this._inNavbar) {
									if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
									var l = this._element;
									"parent" === this._config.reference ? l = n : a.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(n).addClass("position-static"), this._popper = new i(l, this._menu, this._getPopperConfig())
								}
								"ontouchstart" in document.documentElement && 0 === t(n).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(re), t(n).toggleClass(re).trigger(t.Event(oe.SHOWN, s))
							}
						}
					}
				}, n.show = function() {
					if (!(this._element.disabled || t(this._element).hasClass(se) || t(this._menu).hasClass(re))) {
						var i = {
								relatedTarget: this._element
							},
							n = t.Event(oe.SHOW, i),
							o = e._getParentFromElement(this._element);
						t(o).trigger(n), n.isDefaultPrevented() || (t(this._menu).toggleClass(re), t(o).toggleClass(re).trigger(t.Event(oe.SHOWN, i)))
					}
				}, n.hide = function() {
					if (!this._element.disabled && !t(this._element).hasClass(se) && t(this._menu).hasClass(re)) {
						var i = {
								relatedTarget: this._element
							},
							n = t.Event(oe.HIDE, i),
							o = e._getParentFromElement(this._element);
						t(o).trigger(n), n.isDefaultPrevented() || (t(this._menu).toggleClass(re), t(o).toggleClass(re).trigger(t.Event(oe.HIDDEN, i)))
					}
				}, n.dispose = function() {
					t.removeData(this._element, J), t(this._element).off(ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
				}, n.update = function() {
					this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
				}, n._addEventListeners = function() {
					var e = this;
					t(this._element).on(oe.CLICK, function(t) {
						t.preventDefault(), t.stopPropagation(), e.toggle()
					})
				}, n._getConfig = function(e) {
					return e = s({}, this.constructor.Default, t(this._element).data(), e), a.typeCheckConfig(Z, e, this.constructor.DefaultType), e
				}, n._getMenuElement = function() {
					if (!this._menu) {
						var t = e._getParentFromElement(this._element);
						t && (this._menu = t.querySelector(ue))
					}
					return this._menu
				}, n._getPlacement = function() {
					var e = t(this._element.parentNode),
						i = "bottom-start";
					return e.hasClass("dropup") ? (i = "top-start", t(this._menu).hasClass(ae) && (i = "top-end")) : e.hasClass("dropright") ? i = "right-start" : e.hasClass("dropleft") ? i = "left-start" : t(this._menu).hasClass(ae) && (i = "bottom-end"), i
				}, n._detectNavbar = function() {
					return 0 < t(this._element).closest(".navbar").length
				}, n._getOffset = function() {
					var e = this,
						t = {};
					return "function" == typeof this._config.offset ? t.fn = function(t) {
						return t.offsets = s({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
					} : t.offset = this._config.offset, t
				}, n._getPopperConfig = function() {
					var e = {
						placement: this._getPlacement(),
						modifiers: {
							offset: this._getOffset(),
							flip: {
								enabled: this._config.flip
							},
							preventOverflow: {
								boundariesElement: this._config.boundary
							}
						}
					};
					return "static" === this._config.display && (e.modifiers.applyStyle = {
						enabled: !1
					}), e
				}, e._jQueryInterface = function(i) {
					return this.each(function() {
						var n = t(this).data(J);
						if (n || (n = new e(this, "object" == typeof i ? i : null), t(this).data(J, n)), "string" == typeof i) {
							if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
							n[i]()
						}
					})
				}, e._clearMenus = function(i) {
					if (!i || 3 !== i.which && ("keyup" !== i.type || 9 === i.which))
						for (var n = [].slice.call(document.querySelectorAll(le)), o = 0, s = n.length; o < s; o++) {
							var r = e._getParentFromElement(n[o]),
								a = t(n[o]).data(J),
								l = {
									relatedTarget: n[o]
								};
							if (i && "click" === i.type && (l.clickEvent = i), a) {
								var u = a._menu;
								if (t(r).hasClass(re) && !(i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "keyup" === i.type && 9 === i.which) && t.contains(r, i.target))) {
									var c = t.Event(oe.HIDE, l);
									t(r).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), n[o].setAttribute("aria-expanded", "false"), t(u).removeClass(re), t(r).removeClass(re).trigger(t.Event(oe.HIDDEN, l)))
								}
							}
						}
				}, e._getParentFromElement = function(e) {
					var t, i = a.getSelectorFromElement(e);
					return i && (t = document.querySelector(i)), t || e.parentNode
				}, e._dataApiKeydownHandler = function(i) {
					if ((/input|textarea/i.test(i.target.tagName) ? !(32 === i.which || 27 !== i.which && (40 !== i.which && 38 !== i.which || t(i.target).closest(ue).length)) : ne.test(i.which)) && (i.preventDefault(), i.stopPropagation(), !this.disabled && !t(this).hasClass(se))) {
						var n = e._getParentFromElement(this),
							o = t(n).hasClass(re);
						if (o && (!o || 27 !== i.which && 32 !== i.which)) {
							var s = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
							if (0 !== s.length) {
								var r = s.indexOf(i.target);
								38 === i.which && 0 < r && r--, 40 === i.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
							}
						} else {
							if (27 === i.which) {
								var a = n.querySelector(le);
								t(a).trigger("focus")
							}
							t(this).trigger("click")
						}
					}
				}, o(e, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return ce
					}
				}, {
					key: "DefaultType",
					get: function() {
						return de
					}
				}]), e
			}();
		t(document).on(oe.KEYDOWN_DATA_API, le, he._dataApiKeydownHandler).on(oe.KEYDOWN_DATA_API, ue, he._dataApiKeydownHandler).on(oe.CLICK_DATA_API + " " + oe.KEYUP_DATA_API, he._clearMenus).on(oe.CLICK_DATA_API, le, function(e) {
			e.preventDefault(), e.stopPropagation(), he._jQueryInterface.call(t(this), "toggle")
		}).on(oe.CLICK_DATA_API, ".dropdown form", function(e) {
			e.stopPropagation()
		}), t.fn[Z] = he._jQueryInterface, t.fn[Z].Constructor = he, t.fn[Z].noConflict = function() {
			return t.fn[Z] = ie, he._jQueryInterface
		};
		var pe = "modal",
			fe = "bs.modal",
			me = "." + fe,
			ge = t.fn[pe],
			ve = {
				backdrop: !0,
				keyboard: !0,
				focus: !0,
				show: !0
			},
			ye = {
				backdrop: "(boolean|string)",
				keyboard: "boolean",
				focus: "boolean",
				show: "boolean"
			},
			be = {
				HIDE: "hide" + me,
				HIDDEN: "hidden" + me,
				SHOW: "show" + me,
				SHOWN: "shown" + me,
				FOCUSIN: "focusin" + me,
				RESIZE: "resize" + me,
				CLICK_DISMISS: "click.dismiss" + me,
				KEYDOWN_DISMISS: "keydown.dismiss" + me,
				MOUSEUP_DISMISS: "mouseup.dismiss" + me,
				MOUSEDOWN_DISMISS: "mousedown.dismiss" + me,
				CLICK_DATA_API: "click" + me + ".data-api"
			},
			we = "modal-open",
			_e = "fade",
			xe = "show",
			Ce = ".modal-dialog",
			Se = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
			Te = ".sticky-top",
			Ee = function() {
				function e(e, t) {
					this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Ce), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
				}
				var i = e.prototype;
				return i.toggle = function(e) {
					return this._isShown ? this.hide() : this.show(e)
				}, i.show = function(e) {
					var i = this;
					if (!this._isShown && !this._isTransitioning) {
						t(this._element).hasClass(_e) && (this._isTransitioning = !0);
						var n = t.Event(be.SHOW, {
							relatedTarget: e
						});
						t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(be.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
							return i.hide(e)
						}), t(this._dialog).on(be.MOUSEDOWN_DISMISS, function() {
							t(i._element).one(be.MOUSEUP_DISMISS, function(e) {
								t(e.target).is(i._element) && (i._ignoreBackdropClick = !0)
							})
						}), this._showBackdrop(function() {
							return i._showElement(e)
						}))
					}
				}, i.hide = function(e) {
					var i = this;
					if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
						var n = t.Event(be.HIDE);
						if (t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
							this._isShown = !1;
							var o = t(this._element).hasClass(_e);
							if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(be.FOCUSIN), t(this._element).removeClass(xe), t(this._element).off(be.CLICK_DISMISS), t(this._dialog).off(be.MOUSEDOWN_DISMISS), o) {
								var s = a.getTransitionDurationFromElement(this._element);
								t(this._element).one(a.TRANSITION_END, function(e) {
									return i._hideModal(e)
								}).emulateTransitionEnd(s)
							} else this._hideModal()
						}
					}
				}, i.dispose = function() {
					[window, this._element, this._dialog].forEach(function(e) {
						return t(e).off(me)
					}), t(document).off(be.FOCUSIN), t.removeData(this._element, fe), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
				}, i.handleUpdate = function() {
					this._adjustDialog()
				}, i._getConfig = function(e) {
					return e = s({}, ve, e), a.typeCheckConfig(pe, e, ye), e
				}, i._showElement = function(e) {
					var i = this,
						n = t(this._element).hasClass(_e);
					this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, n && a.reflow(this._element), t(this._element).addClass(xe), this._config.focus && this._enforceFocus();
					var o = t.Event(be.SHOWN, {
							relatedTarget: e
						}),
						s = function() {
							i._config.focus && i._element.focus(), i._isTransitioning = !1, t(i._element).trigger(o)
						};
					if (n) {
						var r = a.getTransitionDurationFromElement(this._dialog);
						t(this._dialog).one(a.TRANSITION_END, s).emulateTransitionEnd(r)
					} else s()
				}, i._enforceFocus = function() {
					var e = this;
					t(document).off(be.FOCUSIN).on(be.FOCUSIN, function(i) {
						document !== i.target && e._element !== i.target && 0 === t(e._element).has(i.target).length && e._element.focus()
					})
				}, i._setEscapeEvent = function() {
					var e = this;
					this._isShown && this._config.keyboard ? t(this._element).on(be.KEYDOWN_DISMISS, function(t) {
						27 === t.which && (t.preventDefault(), e.hide())
					}) : this._isShown || t(this._element).off(be.KEYDOWN_DISMISS)
				}, i._setResizeEvent = function() {
					var e = this;
					this._isShown ? t(window).on(be.RESIZE, function(t) {
						return e.handleUpdate(t)
					}) : t(window).off(be.RESIZE)
				}, i._hideModal = function() {
					var e = this;
					this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
						t(document.body).removeClass(we), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(be.HIDDEN)
					})
				}, i._removeBackdrop = function() {
					this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
				}, i._showBackdrop = function(e) {
					var i = this,
						n = t(this._element).hasClass(_e) ? _e : "";
					if (this._isShown && this._config.backdrop) {
						if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), t(this._backdrop).appendTo(document.body), t(this._element).on(be.CLICK_DISMISS, function(e) {
								i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide())
							}), n && a.reflow(this._backdrop), t(this._backdrop).addClass(xe), !e) return;
						if (!n) return void e();
						var o = a.getTransitionDurationFromElement(this._backdrop);
						t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(o)
					} else if (!this._isShown && this._backdrop) {
						t(this._backdrop).removeClass(xe);
						var s = function() {
							i._removeBackdrop(), e && e()
						};
						if (t(this._element).hasClass(_e)) {
							var r = a.getTransitionDurationFromElement(this._backdrop);
							t(this._backdrop).one(a.TRANSITION_END, s).emulateTransitionEnd(r)
						} else s()
					} else e && e()
				}, i._adjustDialog = function() {
					var e = this._element.scrollHeight > document.documentElement.clientHeight;
					!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
				}, i._resetAdjustments = function() {
					this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
				}, i._checkScrollbar = function() {
					var e = document.body.getBoundingClientRect();
					this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
				}, i._setScrollbar = function() {
					var e = this;
					if (this._isBodyOverflowing) {
						var i = [].slice.call(document.querySelectorAll(Se)),
							n = [].slice.call(document.querySelectorAll(Te));
						t(i).each(function(i, n) {
							var o = n.style.paddingRight,
								s = t(n).css("padding-right");
							t(n).data("padding-right", o).css("padding-right", parseFloat(s) + e._scrollbarWidth + "px")
						}), t(n).each(function(i, n) {
							var o = n.style.marginRight,
								s = t(n).css("margin-right");
							t(n).data("margin-right", o).css("margin-right", parseFloat(s) - e._scrollbarWidth + "px")
						});
						var o = document.body.style.paddingRight,
							s = t(document.body).css("padding-right");
						t(document.body).data("padding-right", o).css("padding-right", parseFloat(s) + this._scrollbarWidth + "px")
					}
					t(document.body).addClass(we)
				}, i._resetScrollbar = function() {
					var e = [].slice.call(document.querySelectorAll(Se));
					t(e).each(function(e, i) {
						var n = t(i).data("padding-right");
						t(i).removeData("padding-right"), i.style.paddingRight = n || ""
					});
					var i = [].slice.call(document.querySelectorAll("" + Te));
					t(i).each(function(e, i) {
						var n = t(i).data("margin-right");
						void 0 !== n && t(i).css("margin-right", n).removeData("margin-right")
					});
					var n = t(document.body).data("padding-right");
					t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
				}, i._getScrollbarWidth = function() {
					var e = document.createElement("div");
					e.className = "modal-scrollbar-measure", document.body.appendChild(e);
					var t = e.getBoundingClientRect().width - e.clientWidth;
					return document.body.removeChild(e), t
				}, e._jQueryInterface = function(i, n) {
					return this.each(function() {
						var o = t(this).data(fe),
							r = s({}, ve, t(this).data(), "object" == typeof i && i ? i : {});
						if (o || (o = new e(this, r), t(this).data(fe, o)), "string" == typeof i) {
							if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
							o[i](n)
						} else r.show && o.show(n)
					})
				}, o(e, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return ve
					}
				}]), e
			}();
		t(document).on(be.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
			var i, n = this,
				o = a.getSelectorFromElement(this);
			o && (i = document.querySelector(o));
			var r = t(i).data(fe) ? "toggle" : s({}, t(i).data(), t(this).data());
			"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
			var l = t(i).one(be.SHOW, function(e) {
				e.isDefaultPrevented() || l.one(be.HIDDEN, function() {
					t(n).is(":visible") && n.focus()
				})
			});
			Ee._jQueryInterface.call(t(i), r, this)
		}), t.fn[pe] = Ee._jQueryInterface, t.fn[pe].Constructor = Ee, t.fn[pe].noConflict = function() {
			return t.fn[pe] = ge, Ee._jQueryInterface
		};
		var $e = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
			ke = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
			Ae = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

		function De(e, t, i) {
			if (0 === e.length) return e;
			if (i && "function" == typeof i) return i(e);
			for (var n = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), s = [].slice.call(n.body.querySelectorAll("*")), r = function(e, i) {
					var n = s[e],
						r = n.nodeName.toLowerCase();
					if (-1 === o.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
					var a = [].slice.call(n.attributes),
						l = [].concat(t["*"] || [], t[r] || []);
					a.forEach(function(e) {
						(function(e, t) {
							var i = e.nodeName.toLowerCase();
							if (-1 !== t.indexOf(i)) return -1 === $e.indexOf(i) || Boolean(e.nodeValue.match(ke) || e.nodeValue.match(Ae));
							for (var n = t.filter(function(e) {
									return e instanceof RegExp
								}), o = 0, s = n.length; o < s; o++)
								if (i.match(n[o])) return !0;
							return !1
						})(e, l) || n.removeAttribute(e.nodeName)
					})
				}, a = 0, l = s.length; a < l; a++) r(a);
			return n.body.innerHTML
		}
		var je = "tooltip",
			Oe = "bs.tooltip",
			Ie = "." + Oe,
			Ne = t.fn[je],
			Le = "bs-tooltip",
			Pe = new RegExp("(^|\\s)" + Le + "\\S+", "g"),
			ze = ["sanitize", "whiteList", "sanitizeFn"],
			Me = {
				animation: "boolean",
				template: "string",
				title: "(string|element|function)",
				trigger: "string",
				delay: "(number|object)",
				html: "boolean",
				selector: "(string|boolean)",
				placement: "(string|function)",
				offset: "(number|string|function)",
				container: "(string|element|boolean)",
				fallbackPlacement: "(string|array)",
				boundary: "(string|element)",
				sanitize: "boolean",
				sanitizeFn: "(null|function)",
				whiteList: "object"
			},
			qe = {
				AUTO: "auto",
				TOP: "top",
				RIGHT: "right",
				BOTTOM: "bottom",
				LEFT: "left"
			},
			We = {
				animation: !0,
				template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
				trigger: "hover focus",
				title: "",
				delay: 0,
				html: !1,
				selector: !1,
				placement: "top",
				offset: 0,
				container: !1,
				fallbackPlacement: "flip",
				boundary: "scrollParent",
				sanitize: !0,
				sanitizeFn: null,
				whiteList: {
					"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
					a: ["target", "href", "title", "rel"],
					area: [],
					b: [],
					br: [],
					col: [],
					code: [],
					div: [],
					em: [],
					hr: [],
					h1: [],
					h2: [],
					h3: [],
					h4: [],
					h5: [],
					h6: [],
					i: [],
					img: ["src", "alt", "title", "width", "height"],
					li: [],
					ol: [],
					p: [],
					pre: [],
					s: [],
					small: [],
					span: [],
					sub: [],
					sup: [],
					strong: [],
					u: [],
					ul: []
				}
			},
			He = "show",
			Fe = {
				HIDE: "hide" + Ie,
				HIDDEN: "hidden" + Ie,
				SHOW: "show" + Ie,
				SHOWN: "shown" + Ie,
				INSERTED: "inserted" + Ie,
				CLICK: "click" + Ie,
				FOCUSIN: "focusin" + Ie,
				FOCUSOUT: "focusout" + Ie,
				MOUSEENTER: "mouseenter" + Ie,
				MOUSELEAVE: "mouseleave" + Ie
			},
			Re = "fade",
			Be = "show",
			Qe = "hover",
			Ue = "focus",
			Ve = function() {
				function e(e, t) {
					if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
					this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
				}
				var n = e.prototype;
				return n.enable = function() {
					this._isEnabled = !0
				}, n.disable = function() {
					this._isEnabled = !1
				}, n.toggleEnabled = function() {
					this._isEnabled = !this._isEnabled
				}, n.toggle = function(e) {
					if (this._isEnabled)
						if (e) {
							var i = this.constructor.DATA_KEY,
								n = t(e.currentTarget).data(i);
							n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
						} else {
							if (t(this.getTipElement()).hasClass(Be)) return void this._leave(null, this);
							this._enter(null, this)
						}
				}, n.dispose = function() {
					clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
				}, n.show = function() {
					var e = this;
					if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
					var n = t.Event(this.constructor.Event.SHOW);
					if (this.isWithContent() && this._isEnabled) {
						t(this.element).trigger(n);
						var o = a.findShadowRoot(this.element),
							s = t.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
						if (n.isDefaultPrevented() || !s) return;
						var r = this.getTipElement(),
							l = a.getUID(this.constructor.NAME);
						r.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && t(r).addClass(Re);
						var u = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
							c = this._getAttachment(u);
						this.addAttachmentClass(c);
						var d = this._getContainer();
						t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(d), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, r, {
							placement: c,
							modifiers: {
								offset: this._getOffset(),
								flip: {
									behavior: this.config.fallbackPlacement
								},
								arrow: {
									element: ".arrow"
								},
								preventOverflow: {
									boundariesElement: this.config.boundary
								}
							},
							onCreate: function(t) {
								t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
							},
							onUpdate: function(t) {
								return e._handlePopperPlacementChange(t)
							}
						}), t(r).addClass(Be), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
						var h = function() {
							e.config.animation && e._fixTransition();
							var i = e._hoverState;
							e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === i && e._leave(null, e)
						};
						if (t(this.tip).hasClass(Re)) {
							var p = a.getTransitionDurationFromElement(this.tip);
							t(this.tip).one(a.TRANSITION_END, h).emulateTransitionEnd(p)
						} else h()
					}
				}, n.hide = function(e) {
					var i = this,
						n = this.getTipElement(),
						o = t.Event(this.constructor.Event.HIDE),
						s = function() {
							i._hoverState !== He && n.parentNode && n.parentNode.removeChild(n), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), t(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), e && e()
						};
					if (t(this.element).trigger(o), !o.isDefaultPrevented()) {
						if (t(n).removeClass(Be), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[Ue] = !1, this._activeTrigger[Qe] = !1, t(this.tip).hasClass(Re)) {
							var r = a.getTransitionDurationFromElement(n);
							t(n).one(a.TRANSITION_END, s).emulateTransitionEnd(r)
						} else s();
						this._hoverState = ""
					}
				}, n.update = function() {
					null !== this._popper && this._popper.scheduleUpdate()
				}, n.isWithContent = function() {
					return Boolean(this.getTitle())
				}, n.addAttachmentClass = function(e) {
					t(this.getTipElement()).addClass(Le + "-" + e)
				}, n.getTipElement = function() {
					return this.tip = this.tip || t(this.config.template)[0], this.tip
				}, n.setContent = function() {
					var e = this.getTipElement();
					this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass(Re + " " + Be)
				}, n.setElementContent = function(e, i) {
					"object" != typeof i || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = De(i, this.config.whiteList, this.config.sanitizeFn)), e.html(i)) : e.text(i) : this.config.html ? t(i).parent().is(e) || e.empty().append(i) : e.text(t(i).text())
				}, n.getTitle = function() {
					var e = this.element.getAttribute("data-original-title");
					return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
				}, n._getOffset = function() {
					var e = this,
						t = {};
					return "function" == typeof this.config.offset ? t.fn = function(t) {
						return t.offsets = s({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
					} : t.offset = this.config.offset, t
				}, n._getContainer = function() {
					return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
				}, n._getAttachment = function(e) {
					return qe[e.toUpperCase()]
				}, n._setListeners = function() {
					var e = this;
					this.config.trigger.split(" ").forEach(function(i) {
						if ("click" === i) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
							return e.toggle(t)
						});
						else if ("manual" !== i) {
							var n = i === Qe ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
								o = i === Qe ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
							t(e.element).on(n, e.config.selector, function(t) {
								return e._enter(t)
							}).on(o, e.config.selector, function(t) {
								return e._leave(t)
							})
						}
					}), t(this.element).closest(".modal").on("hide.bs.modal", function() {
						e.element && e.hide()
					}), this.config.selector ? this.config = s({}, this.config, {
						trigger: "manual",
						selector: ""
					}) : this._fixTitle()
				}, n._fixTitle = function() {
					var e = typeof this.element.getAttribute("data-original-title");
					(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
				}, n._enter = function(e, i) {
					var n = this.constructor.DATA_KEY;
					(i = i || t(e.currentTarget).data(n)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusin" === e.type ? Ue : Qe] = !0), t(i.getTipElement()).hasClass(Be) || i._hoverState === He ? i._hoverState = He : (clearTimeout(i._timeout), i._hoverState = He, i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() {
						i._hoverState === He && i.show()
					}, i.config.delay.show) : i.show())
				}, n._leave = function(e, i) {
					var n = this.constructor.DATA_KEY;
					(i = i || t(e.currentTarget).data(n)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusout" === e.type ? Ue : Qe] = !1), i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = "out", i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() {
						"out" === i._hoverState && i.hide()
					}, i.config.delay.hide) : i.hide())
				}, n._isWithActiveTrigger = function() {
					for (var e in this._activeTrigger)
						if (this._activeTrigger[e]) return !0;
					return !1
				}, n._getConfig = function(e) {
					var i = t(this.element).data();
					return Object.keys(i).forEach(function(e) {
						-1 !== ze.indexOf(e) && delete i[e]
					}), "number" == typeof(e = s({}, this.constructor.Default, i, "object" == typeof e && e ? e : {})).delay && (e.delay = {
						show: e.delay,
						hide: e.delay
					}), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), a.typeCheckConfig(je, e, this.constructor.DefaultType), e.sanitize && (e.template = De(e.template, e.whiteList, e.sanitizeFn)), e
				}, n._getDelegateConfig = function() {
					var e = {};
					if (this.config)
						for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
					return e
				}, n._cleanTipClass = function() {
					var e = t(this.getTipElement()),
						i = e.attr("class").match(Pe);
					null !== i && i.length && e.removeClass(i.join(""))
				}, n._handlePopperPlacementChange = function(e) {
					var t = e.instance;
					this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
				}, n._fixTransition = function() {
					var e = this.getTipElement(),
						i = this.config.animation;
					null === e.getAttribute("x-placement") && (t(e).removeClass(Re), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
				}, e._jQueryInterface = function(i) {
					return this.each(function() {
						var n = t(this).data(Oe),
							o = "object" == typeof i && i;
						if ((n || !/dispose|hide/.test(i)) && (n || (n = new e(this, o), t(this).data(Oe, n)), "string" == typeof i)) {
							if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
							n[i]()
						}
					})
				}, o(e, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return We
					}
				}, {
					key: "NAME",
					get: function() {
						return je
					}
				}, {
					key: "DATA_KEY",
					get: function() {
						return Oe
					}
				}, {
					key: "Event",
					get: function() {
						return Fe
					}
				}, {
					key: "EVENT_KEY",
					get: function() {
						return Ie
					}
				}, {
					key: "DefaultType",
					get: function() {
						return Me
					}
				}]), e
			}();
		t.fn[je] = Ve._jQueryInterface, t.fn[je].Constructor = Ve, t.fn[je].noConflict = function() {
			return t.fn[je] = Ne, Ve._jQueryInterface
		};
		var Ge = "popover",
			Ye = "bs.popover",
			Ke = "." + Ye,
			Xe = t.fn[Ge],
			Ze = "bs-popover",
			Je = new RegExp("(^|\\s)" + Ze + "\\S+", "g"),
			et = s({}, Ve.Default, {
				placement: "right",
				trigger: "click",
				content: "",
				template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
			}),
			tt = s({}, Ve.DefaultType, {
				content: "(string|element|function)"
			}),
			it = {
				HIDE: "hide" + Ke,
				HIDDEN: "hidden" + Ke,
				SHOW: "show" + Ke,
				SHOWN: "shown" + Ke,
				INSERTED: "inserted" + Ke,
				CLICK: "click" + Ke,
				FOCUSIN: "focusin" + Ke,
				FOCUSOUT: "focusout" + Ke,
				MOUSEENTER: "mouseenter" + Ke,
				MOUSELEAVE: "mouseleave" + Ke
			},
			nt = function(e) {
				var i, n;

				function s() {
					return e.apply(this, arguments) || this
				}
				n = e, (i = s).prototype = Object.create(n.prototype), (i.prototype.constructor = i).__proto__ = n;
				var r = s.prototype;
				return r.isWithContent = function() {
					return this.getTitle() || this._getContent()
				}, r.addAttachmentClass = function(e) {
					t(this.getTipElement()).addClass(Ze + "-" + e)
				}, r.getTipElement = function() {
					return this.tip = this.tip || t(this.config.template)[0], this.tip
				}, r.setContent = function() {
					var e = t(this.getTipElement());
					this.setElementContent(e.find(".popover-header"), this.getTitle());
					var i = this._getContent();
					"function" == typeof i && (i = i.call(this.element)), this.setElementContent(e.find(".popover-body"), i), e.removeClass("fade show")
				}, r._getContent = function() {
					return this.element.getAttribute("data-content") || this.config.content
				}, r._cleanTipClass = function() {
					var e = t(this.getTipElement()),
						i = e.attr("class").match(Je);
					null !== i && 0 < i.length && e.removeClass(i.join(""))
				}, s._jQueryInterface = function(e) {
					return this.each(function() {
						var i = t(this).data(Ye),
							n = "object" == typeof e ? e : null;
						if ((i || !/dispose|hide/.test(e)) && (i || (i = new s(this, n), t(this).data(Ye, i)), "string" == typeof e)) {
							if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
							i[e]()
						}
					})
				}, o(s, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return et
					}
				}, {
					key: "NAME",
					get: function() {
						return Ge
					}
				}, {
					key: "DATA_KEY",
					get: function() {
						return Ye
					}
				}, {
					key: "Event",
					get: function() {
						return it
					}
				}, {
					key: "EVENT_KEY",
					get: function() {
						return Ke
					}
				}, {
					key: "DefaultType",
					get: function() {
						return tt
					}
				}]), s
			}(Ve);
		t.fn[Ge] = nt._jQueryInterface, t.fn[Ge].Constructor = nt, t.fn[Ge].noConflict = function() {
			return t.fn[Ge] = Xe, nt._jQueryInterface
		};
		var ot = "scrollspy",
			st = "bs.scrollspy",
			rt = "." + st,
			at = t.fn[ot],
			lt = {
				offset: 10,
				method: "auto",
				target: ""
			},
			ut = {
				offset: "number",
				method: "string",
				target: "(string|element)"
			},
			ct = {
				ACTIVATE: "activate" + rt,
				SCROLL: "scroll" + rt,
				LOAD_DATA_API: "load" + rt + ".data-api"
			},
			dt = "active",
			ht = ".nav, .list-group",
			pt = ".nav-link",
			ft = ".list-group-item",
			mt = ".dropdown-item",
			gt = "position",
			vt = function() {
				function e(e, i) {
					var n = this;
					this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + pt + "," + this._config.target + " " + ft + "," + this._config.target + " " + mt, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(ct.SCROLL, function(e) {
						return n._process(e)
					}), this.refresh(), this._process()
				}
				var i = e.prototype;
				return i.refresh = function() {
					var e = this,
						i = this._scrollElement === this._scrollElement.window ? "offset" : gt,
						n = "auto" === this._config.method ? i : this._config.method,
						o = n === gt ? this._getScrollTop() : 0;
					this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
						var i, s = a.getSelectorFromElement(e);
						if (s && (i = document.querySelector(s)), i) {
							var r = i.getBoundingClientRect();
							if (r.width || r.height) return [t(i)[n]().top + o, s]
						}
						return null
					}).filter(function(e) {
						return e
					}).sort(function(e, t) {
						return e[0] - t[0]
					}).forEach(function(t) {
						e._offsets.push(t[0]), e._targets.push(t[1])
					})
				}, i.dispose = function() {
					t.removeData(this._element, st), t(this._scrollElement).off(rt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
				}, i._getConfig = function(e) {
					if ("string" != typeof(e = s({}, lt, "object" == typeof e && e ? e : {})).target) {
						var i = t(e.target).attr("id");
						i || (i = a.getUID(ot), t(e.target).attr("id", i)), e.target = "#" + i
					}
					return a.typeCheckConfig(ot, e, ut), e
				}, i._getScrollTop = function() {
					return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
				}, i._getScrollHeight = function() {
					return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
				}, i._getOffsetHeight = function() {
					return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
				}, i._process = function() {
					var e = this._getScrollTop() + this._config.offset,
						t = this._getScrollHeight(),
						i = this._config.offset + t - this._getOffsetHeight();
					if (this._scrollHeight !== t && this.refresh(), i <= e) {
						var n = this._targets[this._targets.length - 1];
						this._activeTarget !== n && this._activate(n)
					} else {
						if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
						for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
					}
				}, i._activate = function(e) {
					this._activeTarget = e, this._clear();
					var i = this._selector.split(",").map(function(t) {
							return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
						}),
						n = t([].slice.call(document.querySelectorAll(i.join(","))));
					n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(dt), n.addClass(dt)) : (n.addClass(dt), n.parents(ht).prev(pt + ", " + ft).addClass(dt), n.parents(ht).prev(".nav-item").children(pt).addClass(dt)), t(this._scrollElement).trigger(ct.ACTIVATE, {
						relatedTarget: e
					})
				}, i._clear = function() {
					[].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
						return e.classList.contains(dt)
					}).forEach(function(e) {
						return e.classList.remove(dt)
					})
				}, e._jQueryInterface = function(i) {
					return this.each(function() {
						var n = t(this).data(st);
						if (n || (n = new e(this, "object" == typeof i && i), t(this).data(st, n)), "string" == typeof i) {
							if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
							n[i]()
						}
					})
				}, o(e, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return lt
					}
				}]), e
			}();
		t(window).on(ct.LOAD_DATA_API, function() {
			for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), i = e.length; i--;) {
				var n = t(e[i]);
				vt._jQueryInterface.call(n, n.data())
			}
		}), t.fn[ot] = vt._jQueryInterface, t.fn[ot].Constructor = vt, t.fn[ot].noConflict = function() {
			return t.fn[ot] = at, vt._jQueryInterface
		};
		var yt = "bs.tab",
			bt = "." + yt,
			wt = t.fn.tab,
			_t = {
				HIDE: "hide" + bt,
				HIDDEN: "hidden" + bt,
				SHOW: "show" + bt,
				SHOWN: "shown" + bt,
				CLICK_DATA_API: "click" + bt + ".data-api"
			},
			xt = "active",
			Ct = ".active",
			St = "> li > .active",
			Tt = function() {
				function e(e) {
					this._element = e
				}
				var i = e.prototype;
				return i.show = function() {
					var e = this;
					if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(xt) || t(this._element).hasClass("disabled"))) {
						var i, n, o = t(this._element).closest(".nav, .list-group")[0],
							s = a.getSelectorFromElement(this._element);
						if (o) {
							var r = "UL" === o.nodeName || "OL" === o.nodeName ? St : Ct;
							n = (n = t.makeArray(t(o).find(r)))[n.length - 1]
						}
						var l = t.Event(_t.HIDE, {
								relatedTarget: this._element
							}),
							u = t.Event(_t.SHOW, {
								relatedTarget: n
							});
						if (n && t(n).trigger(l), t(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented()) {
							s && (i = document.querySelector(s)), this._activate(this._element, o);
							var c = function() {
								var i = t.Event(_t.HIDDEN, {
										relatedTarget: e._element
									}),
									o = t.Event(_t.SHOWN, {
										relatedTarget: n
									});
								t(n).trigger(i), t(e._element).trigger(o)
							};
							i ? this._activate(i, i.parentNode, c) : c()
						}
					}
				}, i.dispose = function() {
					t.removeData(this._element, yt), this._element = null
				}, i._activate = function(e, i, n) {
					var o = this,
						s = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t(i).children(Ct) : t(i).find(St))[0],
						r = n && s && t(s).hasClass("fade"),
						l = function() {
							return o._transitionComplete(e, s, n)
						};
					if (s && r) {
						var u = a.getTransitionDurationFromElement(s);
						t(s).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(u)
					} else l()
				}, i._transitionComplete = function(e, i, n) {
					if (i) {
						t(i).removeClass(xt);
						var o = t(i.parentNode).find("> .dropdown-menu .active")[0];
						o && t(o).removeClass(xt), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
					}
					if (t(e).addClass(xt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), a.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
						var s = t(e).closest(".dropdown")[0];
						if (s) {
							var r = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
							t(r).addClass(xt)
						}
						e.setAttribute("aria-expanded", !0)
					}
					n && n()
				}, e._jQueryInterface = function(i) {
					return this.each(function() {
						var n = t(this),
							o = n.data(yt);
						if (o || (o = new e(this), n.data(yt, o)), "string" == typeof i) {
							if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
							o[i]()
						}
					})
				}, o(e, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}]), e
			}();
		t(document).on(_t.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
			e.preventDefault(), Tt._jQueryInterface.call(t(this), "show")
		}), t.fn.tab = Tt._jQueryInterface, t.fn.tab.Constructor = Tt, t.fn.tab.noConflict = function() {
			return t.fn.tab = wt, Tt._jQueryInterface
		};
		var Et = "toast",
			$t = "bs.toast",
			kt = "." + $t,
			At = t.fn[Et],
			Dt = {
				CLICK_DISMISS: "click.dismiss" + kt,
				HIDE: "hide" + kt,
				HIDDEN: "hidden" + kt,
				SHOW: "show" + kt,
				SHOWN: "shown" + kt
			},
			jt = "show",
			Ot = "showing",
			It = {
				animation: "boolean",
				autohide: "boolean",
				delay: "number"
			},
			Nt = {
				animation: !0,
				autohide: !0,
				delay: 500
			},
			Lt = function() {
				function e(e, t) {
					this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
				}
				var i = e.prototype;
				return i.show = function() {
					var e = this;
					t(this._element).trigger(Dt.SHOW), this._config.animation && this._element.classList.add("fade");
					var i = function() {
						e._element.classList.remove(Ot), e._element.classList.add(jt), t(e._element).trigger(Dt.SHOWN), e._config.autohide && e.hide()
					};
					if (this._element.classList.remove("hide"), this._element.classList.add(Ot), this._config.animation) {
						var n = a.getTransitionDurationFromElement(this._element);
						t(this._element).one(a.TRANSITION_END, i).emulateTransitionEnd(n)
					} else i()
				}, i.hide = function(e) {
					var i = this;
					this._element.classList.contains(jt) && (t(this._element).trigger(Dt.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
						i._close()
					}, this._config.delay))
				}, i.dispose = function() {
					clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(jt) && this._element.classList.remove(jt), t(this._element).off(Dt.CLICK_DISMISS), t.removeData(this._element, $t), this._element = null, this._config = null
				}, i._getConfig = function(e) {
					return e = s({}, Nt, t(this._element).data(), "object" == typeof e && e ? e : {}), a.typeCheckConfig(Et, e, this.constructor.DefaultType), e
				}, i._setListeners = function() {
					var e = this;
					t(this._element).on(Dt.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
						return e.hide(!0)
					})
				}, i._close = function() {
					var e = this,
						i = function() {
							e._element.classList.add("hide"), t(e._element).trigger(Dt.HIDDEN)
						};
					if (this._element.classList.remove(jt), this._config.animation) {
						var n = a.getTransitionDurationFromElement(this._element);
						t(this._element).one(a.TRANSITION_END, i).emulateTransitionEnd(n)
					} else i()
				}, e._jQueryInterface = function(i) {
					return this.each(function() {
						var n = t(this),
							o = n.data($t);
						if (o || (o = new e(this, "object" == typeof i && i), n.data($t, o)), "string" == typeof i) {
							if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
							o[i](this)
						}
					})
				}, o(e, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "DefaultType",
					get: function() {
						return It
					}
				}, {
					key: "Default",
					get: function() {
						return Nt
					}
				}]), e
			}();
		t.fn[Et] = Lt._jQueryInterface, t.fn[Et].Constructor = Lt, t.fn[Et].noConflict = function() {
				return t.fn[Et] = At, Lt._jQueryInterface
			},
			function() {
				if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
				var e = t.fn.jquery.split(" ")[0].split(".");
				if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
			}(), e.Util = a, e.Alert = p, e.Button = C, e.Carousel = M, e.Collapse = X, e.Dropdown = he, e.Modal = Ee, e.Popover = nt, e.Scrollspy = vt, e.Tab = Tt, e.Toast = Lt, e.Tooltip = Ve, Object.defineProperty(e, "__esModule", {
				value: !0
			})
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t()
		}) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(0, function() {
		! function(e) {
			"use strict";

			function t(t) {
				return e.each([{
					re: /[\xC0-\xC6]/g,
					ch: "A"
				}, {
					re: /[\xE0-\xE6]/g,
					ch: "a"
				}, {
					re: /[\xC8-\xCB]/g,
					ch: "E"
				}, {
					re: /[\xE8-\xEB]/g,
					ch: "e"
				}, {
					re: /[\xCC-\xCF]/g,
					ch: "I"
				}, {
					re: /[\xEC-\xEF]/g,
					ch: "i"
				}, {
					re: /[\xD2-\xD6]/g,
					ch: "O"
				}, {
					re: /[\xF2-\xF6]/g,
					ch: "o"
				}, {
					re: /[\xD9-\xDC]/g,
					ch: "U"
				}, {
					re: /[\xF9-\xFC]/g,
					ch: "u"
				}, {
					re: /[\xC7-\xE7]/g,
					ch: "c"
				}, {
					re: /[\xD1]/g,
					ch: "N"
				}, {
					re: /[\xF1]/g,
					ch: "n"
				}], function() {
					t = t.replace(this.re, this.ch)
				}), t
			}

			function i(e) {
				var t = {
						"&": "&amp;",
						"<": "&lt;",
						">": "&gt;",
						'"': "&quot;",
						"'": "&#x27;",
						"`": "&#x60;"
					},
					i = "(?:" + Object.keys(t).join("|") + ")",
					n = new RegExp(i),
					o = new RegExp(i, "g"),
					s = null == e ? "" : "" + e;
				return n.test(s) ? s.replace(o, function(e) {
					return t[e]
				}) : s
			}

			function n(t, i) {
				var n = arguments,
					s = t,
					r = i;
				[].shift.apply(n);
				var a, l = this.each(function() {
					var t = e(this);
					if (t.is("select")) {
						var i = t.data("selectpicker"),
							l = "object" == typeof s && s;
						if (i) {
							if (l)
								for (var u in l) l.hasOwnProperty(u) && (i.options[u] = l[u])
						} else {
							var c = e.extend({}, o.DEFAULTS, e.fn.selectpicker.defaults || {}, t.data(), l);
							t.data("selectpicker", i = new o(this, c, r))
						}
						"string" == typeof s && (a = i[s] instanceof Function ? i[s].apply(i, n) : i.options[s])
					}
				});
				return void 0 !== a ? a : l
			}
			String.prototype.includes || function() {
				var e = {}.toString,
					t = function() {
						try {
							var e = {},
								t = Object.defineProperty,
								i = t(e, e, e) && t
						} catch (e) {}
						return i
					}(),
					i = "".indexOf,
					n = function(t) {
						if (null == this) throw TypeError();
						var n = String(this);
						if (t && "[object RegExp]" == e.call(t)) throw TypeError();
						var o = n.length,
							s = String(t),
							r = s.length,
							a = arguments.length > 1 ? arguments[1] : void 0,
							l = a ? Number(a) : 0;
						return l != l && (l = 0), !(r + Math.min(Math.max(l, 0), o) > o) && -1 != i.call(n, s, l)
					};
				t ? t(String.prototype, "includes", {
					value: n,
					configurable: !0,
					writable: !0
				}) : String.prototype.includes = n
			}(), String.prototype.startsWith || function() {
				var e = function() {
						try {
							var e = {},
								t = Object.defineProperty,
								i = t(e, e, e) && t
						} catch (e) {}
						return i
					}(),
					t = {}.toString,
					i = function(e) {
						if (null == this) throw TypeError();
						var i = String(this);
						if (e && "[object RegExp]" == t.call(e)) throw TypeError();
						var n = i.length,
							o = String(e),
							s = o.length,
							r = arguments.length > 1 ? arguments[1] : void 0,
							a = r ? Number(r) : 0;
						a != a && (a = 0);
						var l = Math.min(Math.max(a, 0), n);
						if (s + l > n) return !1;
						for (var u = -1; ++u < s;)
							if (i.charCodeAt(l + u) != o.charCodeAt(u)) return !1;
						return !0
					};
				e ? e(String.prototype, "startsWith", {
					value: i,
					configurable: !0,
					writable: !0
				}) : String.prototype.startsWith = i
			}(), Object.keys || (Object.keys = function(e, t, i) {
				for (t in i = [], e) i.hasOwnProperty.call(e, t) && i.push(t);
				return i
			}), e.expr[":"].icontains = function(t, i, n) {
				var o = e(t);
				return (o.data("tokens") || o.text()).toUpperCase().includes(n[3].toUpperCase())
			}, e.expr[":"].ibegins = function(t, i, n) {
				var o = e(t);
				return (o.data("tokens") || o.text()).toUpperCase().startsWith(n[3].toUpperCase())
			}, e.expr[":"].aicontains = function(t, i, n) {
				var o = e(t);
				return (o.data("tokens") || o.data("normalizedText") || o.text()).toUpperCase().includes(n[3].toUpperCase())
			}, e.expr[":"].aibegins = function(t, i, n) {
				var o = e(t);
				return (o.data("tokens") || o.data("normalizedText") || o.text()).toUpperCase().startsWith(n[3].toUpperCase())
			};
			var o = function(t, i, n) {
				n && (n.stopPropagation(), n.preventDefault()), this.$element = e(t), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = i, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = o.prototype.val, this.render = o.prototype.render, this.refresh = o.prototype.refresh, this.setStyle = o.prototype.setStyle, this.selectAll = o.prototype.selectAll, this.deselectAll = o.prototype.deselectAll, this.destroy = o.prototype.remove, this.remove = o.prototype.remove, this.show = o.prototype.show, this.hide = o.prototype.hide, this.init()
			};
			o.VERSION = "1.7.2", o.DEFAULTS = {
				noneSelectedText: "Nothing selected",
				noneResultsText: "No results matched {0}",
				countSelectedText: function(e, t) {
					return 1 == e ? "{0} item selected" : "{0} items selected"
				},
				maxOptionsText: function(e, t) {
					return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
				},
				selectAllText: "Select All",
				deselectAllText: "Deselect All",
				doneButton: !1,
				doneButtonText: "Close",
				multipleSeparator: ", ",
				styleBase: "btn",
				style: "btn-default",
				size: "auto",
				title: null,
				selectedTextFormat: "values",
				width: !1,
				container: !1,
				hideDisabled: !1,
				showSubtext: !1,
				showIcon: !0,
				showContent: !0,
				dropupAuto: !0,
				header: !1,
				liveSearch: !1,
				liveSearchPlaceholder: null,
				liveSearchNormalize: !1,
				liveSearchStyle: "contains",
				actionsBox: !1,
				iconBase: "glyphicon",
				tickIcon: "glyphicon-ok",
				maxOptions: !1,
				mobile: !1,
				selectOnTab: !1,
				dropdownAlignRight: !1
			}, o.prototype = {
				constructor: o,
				init: function() {
					var t = this,
						i = this.$element.attr("id");
					this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), void 0 !== i && (this.$button.attr("data-id", i), e('label[for="' + i + '"]').click(function(e) {
						e.preventDefault(), t.$button.focus()
					})), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on("hide.bs.dropdown", function(e) {
						t.$element.trigger("hide.bs.select", e)
					}), this.$newElement.on("hidden.bs.dropdown", function(e) {
						t.$element.trigger("hidden.bs.select", e)
					}), this.$newElement.on("show.bs.dropdown", function(e) {
						t.$element.trigger("show.bs.select", e)
					}), this.$newElement.on("shown.bs.dropdown", function(e) {
						t.$element.trigger("shown.bs.select", e)
					}), setTimeout(function() {
						t.$element.trigger("loaded.bs.select")
					})
				},
				createDropdown: function() {
					var t = this.multiple ? " show-tick" : "",
						n = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
						o = this.autofocus ? " autofocus" : "",
						s = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
						r = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + i(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
						a = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
						l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
						u = '<div class="btn-group bootstrap-select' + t + n + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + o + '><span class="filter-option pull-left"></span>&nbsp;<span class="caret fa fa-caret-down"></span></button><div class="dropdown-menu open">' + s + r + a + '<ul class="dropdown-menu inner" role="menu"></ul>' + l + "</div></div>";
					return e(u)
				},
				createView: function() {
					var e = this.createDropdown(),
						t = this.createLi();
					return e.find("ul")[0].innerHTML = t, e
				},
				reloadLi: function() {
					this.destroyLi();
					var e = this.createLi();
					this.$menuInner[0].innerHTML = e
				},
				destroyLi: function() {
					this.$menu.find("li").remove()
				},
				createLi: function() {
					var n = this,
						o = [],
						s = 0,
						r = document.createElement("option"),
						a = -1,
						l = function(e, t, i, n) {
							return "<li" + (void 0 !== i & "" !== i ? ' class="' + i + '"' : "") + (void 0 !== t & null !== t ? ' data-original-index="' + t + '"' : "") + (void 0 !== n & null !== n ? 'data-optgroup="' + n + '"' : "") + ">" + e + "</li>"
						},
						u = function(e, o, s, r) {
							return '<a tabindex="0"' + (void 0 !== o ? ' class="' + o + '"' : "") + (void 0 !== s ? ' style="' + s + '"' : "") + (n.options.liveSearchNormalize ? ' data-normalized-text="' + t(i(e)) + '"' : "") + (void 0 !== r || null !== r ? ' data-tokens="' + r + '"' : "") + ">" + e + '<span class="' + n.options.iconBase + " " + n.options.tickIcon + ' check-mark"></span></a>'
						};
					if (this.options.title && !this.multiple && (a--, !this.$element.find(".bs-title-option").length)) {
						var c = this.$element[0];
						r.className = "bs-title-option", r.appendChild(document.createTextNode(this.options.title)), r.value = "", c.insertBefore(r, c.firstChild), null === c.options[c.selectedIndex].getAttribute("selected") && (r.selected = !0)
					}
					return this.$element.find("option").each(function(t) {
						var i = e(this);
						if (a++, !i.hasClass("bs-title-option")) {
							var r = this.className || "",
								c = this.style.cssText,
								d = i.data("content") ? i.data("content") : i.html(),
								h = i.data("tokens") ? i.data("tokens") : null,
								p = void 0 !== i.data("subtext") ? '<small class="text-muted">' + i.data("subtext") + "</small>" : "",
								f = void 0 !== i.data("icon") ? '<span class="' + n.options.iconBase + " " + i.data("icon") + '"></span> ' : "",
								m = this.disabled || "OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled;
							if ("" !== f && m && (f = "<span>" + f + "</span>"), n.options.hideDisabled && m) return void a--;
							if (i.data("content") || (d = f + '<span class="text">' + d + p + "</span>"), "OPTGROUP" === this.parentElement.tagName && !0 !== i.data("divider")) {
								if (0 === i.index()) {
									s += 1;
									var g = this.parentElement.label,
										v = void 0 !== i.parent().data("subtext") ? '<small class="text-muted">' + i.parent().data("subtext") + "</small>" : "",
										y = i.parent().data("icon") ? '<span class="' + n.options.iconBase + " " + i.parent().data("icon") + '"></span> ' : "",
										b = " " + this.parentElement.className || "";
									g = y + '<span class="text">' + g + v + "</span>", 0 !== t && o.length > 0 && (a++, o.push(l("", null, "divider", s + "div"))), a++, o.push(l(g, null, "dropdown-header" + b, s))
								}
								o.push(l(u(d, "opt " + r + b, c, h), t, "", s))
							} else !0 === i.data("divider") ? o.push(l("", t, "divider")) : !0 === i.data("hidden") ? o.push(l(u(d, r, c, h), t, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (a++, o.push(l("", null, "divider", s + "div"))), o.push(l(u(d, r, c, h), t)));
							n.liObj[t] = a
						}
					}), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), o.join("")
				},
				findLis: function() {
					return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
				},
				render: function(t) {
					var i, n = this;
					!1 !== t && this.$element.find("option").each(function(e) {
						var t = n.findLis().eq(n.liObj[e]);
						n.setDisabled(e, this.disabled || "OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled, t), n.setSelected(e, this.selected, t)
					}), this.tabIndex();
					var o = this.$element.find("option").map(function() {
							if (this.selected) {
								if (n.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled)) return !1;
								var t, i = e(this),
									o = i.data("icon") && n.options.showIcon ? '<i class="' + n.options.iconBase + " " + i.data("icon") + '"></i> ' : "";
								return t = n.options.showSubtext && i.data("subtext") && !n.multiple ? ' <small class="text-muted">' + i.data("subtext") + "</small>" : "", void 0 !== i.attr("title") ? i.attr("title") : i.data("content") && n.options.showContent ? i.data("content") : o + i.html() + t
							}
						}).toArray(),
						s = this.multiple ? o.join(this.options.multipleSeparator) : o[0];
					if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
						var r = this.options.selectedTextFormat.split(">");
						if (r.length > 1 && o.length > r[1] || 1 == r.length && o.length >= 2) {
							i = this.options.hideDisabled ? ", [disabled]" : "";
							var a = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + i).length;
							s = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o.length, a) : this.options.countSelectedText).replace("{0}", o.length.toString()).replace("{1}", a.toString())
						}
					}
					null == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (s = this.options.title), s || (s = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", e.trim(s.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(s), this.$element.trigger("rendered.bs.select")
				},
				setStyle: function(e, t) {
					this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
					var i = e || this.options.style;
					"add" == t ? this.$button.addClass(i) : "remove" == t ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
				},
				liHeight: function(t) {
					if (t || !1 !== this.options.size && !this.sizeInfo) {
						var i = document.createElement("div"),
							n = document.createElement("div"),
							o = document.createElement("ul"),
							s = document.createElement("li"),
							r = document.createElement("li"),
							a = document.createElement("a"),
							l = document.createElement("span"),
							u = this.options.header ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
							c = this.options.liveSearch ? document.createElement("div") : null,
							d = this.options.actionsBox && this.multiple ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
							h = this.options.doneButton && this.multiple ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
						if (l.className = "text", i.className = this.$menu[0].parentNode.className + " open", n.className = "dropdown-menu open", o.className = "dropdown-menu inner", s.className = "divider", l.appendChild(document.createTextNode("Inner text")), a.appendChild(l), r.appendChild(a), o.appendChild(r), o.appendChild(s), u && n.appendChild(u), c) {
							var p = document.createElement("span");
							c.className = "bs-searchbox", p.className = "form-control", c.appendChild(p), n.appendChild(c)
						}
						d && n.appendChild(d), n.appendChild(o), h && n.appendChild(h), i.appendChild(n), document.body.appendChild(i);
						var f = a.offsetHeight,
							m = u ? u.offsetHeight : 0,
							g = c ? c.offsetHeight : 0,
							v = d ? d.offsetHeight : 0,
							y = h ? h.offsetHeight : 0,
							b = e(s).outerHeight(!0),
							w = !!getComputedStyle && getComputedStyle(n),
							_ = w ? e(n) : null,
							x = parseInt(w ? w.paddingTop : _.css("paddingTop")) + parseInt(w ? w.paddingBottom : _.css("paddingBottom")) + parseInt(w ? w.borderTopWidth : _.css("borderTopWidth")) + parseInt(w ? w.borderBottomWidth : _.css("borderBottomWidth")),
							C = x + parseInt(w ? w.marginTop : _.css("marginTop")) + parseInt(w ? w.marginBottom : _.css("marginBottom")) + 2;
						document.body.removeChild(i), this.sizeInfo = {
							liHeight: f,
							headerHeight: m,
							searchHeight: g,
							actionsHeight: v,
							doneButtonHeight: y,
							dividerHeight: b,
							menuPadding: x,
							menuExtras: C
						}
					}
				},
				setSize: function() {
					this.findLis(), this.liHeight();
					var t, i, n, o, s = this,
						r = this.$menu,
						a = this.$menuInner,
						l = e(window),
						u = this.$newElement[0].offsetHeight,
						c = this.sizeInfo.liHeight,
						d = this.sizeInfo.headerHeight,
						h = this.sizeInfo.searchHeight,
						p = this.sizeInfo.actionsHeight,
						f = this.sizeInfo.doneButtonHeight,
						m = this.sizeInfo.dividerHeight,
						g = this.sizeInfo.menuPadding,
						v = this.sizeInfo.menuExtras,
						y = this.options.hideDisabled ? ".disabled" : "",
						b = function() {
							n = s.$newElement.offset().top - l.scrollTop(), o = l.height() - n - u
						};
					if (b(), this.options.header && r.css("padding-top", 0), "auto" === this.options.size) {
						var w = function() {
							var l, u = function(t, i) {
									return function(n) {
										return i ? n.classList ? n.classList.contains(t) : e(n).hasClass(t) : !(n.classList ? n.classList.contains(t) : e(n).hasClass(t))
									}
								},
								m = s.$menuInner[0].getElementsByTagName("li"),
								y = Array.prototype.filter ? Array.prototype.filter.call(m, u("hidden", !1)) : s.$lis.not(".hidden"),
								w = Array.prototype.filter ? Array.prototype.filter.call(y, u("dropdown-header", !0)) : y.filter(".dropdown-header");
							b(), t = o - v, s.options.container ? (r.data("height") || r.data("height", r.height()), i = r.data("height")) : i = r.height(), s.options.dropupAuto && s.$newElement.toggleClass("dropup", n > o && i > t - v), s.$newElement.hasClass("dropup") && (t = n - v), l = y.length + w.length > 3 ? 3 * c + v - 2 : 0, r.css({
								"max-height": t + "px",
								overflow: "hidden",
								"min-height": l + d + h + p + f + "px"
							}), a.css({
								"max-height": t - d - h - p - f - g + "px",
								"overflow-y": "auto",
								"min-height": Math.max(l - g, 0) + "px"
							})
						};
						w(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", w), l.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", w)
					} else if (this.options.size && "auto" != this.options.size && this.$lis.not(y).length > this.options.size) {
						var _ = this.$lis.not(".divider").not(y).children().slice(0, this.options.size).last().parent().index(),
							x = this.$lis.slice(0, _ + 1).filter(".divider").length;
						t = c * this.options.size + x * m + g, s.options.container ? (r.data("height") || r.data("height", r.height()), i = r.data("height")) : i = r.height(), s.options.dropupAuto && this.$newElement.toggleClass("dropup", n > o && i > t - v), r.css({
							"max-height": t + d + h + p + f + "px",
							overflow: "hidden",
							"min-height": ""
						}), a.css({
							"max-height": t - g + "px",
							"overflow-y": "auto",
							"min-height": ""
						})
					}
				},
				setWidth: function() {
					if ("auto" === this.options.width) {
						this.$menu.css("min-width", "0");
						var e = this.$menu.parent().clone().appendTo("body"),
							t = this.options.container ? this.$newElement.clone().appendTo("body") : e,
							i = e.children(".dropdown-menu").outerWidth(),
							n = t.css("width", "auto").children("button").outerWidth();
						e.remove(), t.remove(), this.$newElement.css("width", Math.max(i, n) + "px")
					} else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
					this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
				},
				selectPosition: function() {
					var t, i, n = this,
						o = e("<div />"),
						s = function(e) {
							o.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", e.hasClass("dropup")), t = e.offset(), i = e.hasClass("dropup") ? 0 : e[0].offsetHeight, o.css({
								top: t.top + i,
								left: t.left,
								width: e[0].offsetWidth,
								position: "absolute"
							})
						};
					this.$newElement.on("click", function() {
						n.isDisabled() || (s(e(this)), o.appendTo(n.options.container), o.toggleClass("open", !e(this).hasClass("open")), o.append(n.$menu))
					}), e(window).on("resize scroll", function() {
						s(n.$newElement)
					}), this.$element.on("hide.bs.select", function() {
						n.$menu.data("height", n.$menu.height()), o.detach()
					})
				},
				setSelected: function(e, t, i) {
					if (!i) i = this.findLis().eq(this.liObj[e]);
					i.toggleClass("selected", t)
				},
				setDisabled: function(e, t, i) {
					if (!i) i = this.findLis().eq(this.liObj[e]);
					t ? i.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
				},
				isDisabled: function() {
					return this.$element[0].disabled
				},
				checkDisabled: function() {
					var e = this;
					this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
						return !e.isDisabled()
					})
				},
				tabIndex: function() {
					this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
				},
				clickListener: function() {
					var t = this,
						i = e(document);
					this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(e) {
						e.stopPropagation()
					}), i.data("spaceSelect", !1), this.$button.on("keyup", function(e) {
						/(32)/.test(e.keyCode.toString(10)) && i.data("spaceSelect") && (e.preventDefault(), i.data("spaceSelect", !1))
					}), this.$newElement.on("click", function() {
						t.setSize(), t.$element.on("shown.bs.select", function() {
							if (t.options.liveSearch || t.multiple) {
								if (!t.multiple) {
									var e = t.liObj[t.$element[0].selectedIndex];
									if ("number" != typeof e) return;
									var i = t.$lis.eq(e)[0].offsetTop - t.$menuInner[0].offsetTop;
									i = i - t.$menuInner[0].offsetHeight / 2 + t.sizeInfo.liHeight / 2, t.$menuInner[0].scrollTop = i
								}
							} else t.$menu.find(".selected a").focus()
						})
					}), this.$menu.on("click", "li a", function(i) {
						var n = e(this),
							o = n.parent().data("originalIndex"),
							s = t.$element.val(),
							r = t.$element.prop("selectedIndex");
						if (t.multiple && i.stopPropagation(), i.preventDefault(), !t.isDisabled() && !n.parent().hasClass("disabled")) {
							var a = t.$element.find("option"),
								l = a.eq(o),
								u = l.prop("selected"),
								c = l.parent("optgroup"),
								d = t.options.maxOptions,
								h = c.data("maxOptions") || !1;
							if (t.multiple) {
								if (l.prop("selected", !u), t.setSelected(o, !u), n.blur(), !1 !== d || !1 !== h) {
									var p = d < a.filter(":selected").length,
										f = h < c.find("option:selected").length;
									if (d && p || h && f)
										if (d && 1 == d) a.prop("selected", !1), l.prop("selected", !0), t.$menu.find(".selected").removeClass("selected"), t.setSelected(o, !0);
										else if (h && 1 == h) {
										c.find("option:selected").prop("selected", !1), l.prop("selected", !0);
										var m = n.parent().data("optgroup");
										t.$menu.find('[data-optgroup="' + m + '"]').removeClass("selected"), t.setSelected(o, !0)
									} else {
										var g = "function" == typeof t.options.maxOptionsText ? t.options.maxOptionsText(d, h) : t.options.maxOptionsText,
											v = g[0].replace("{n}", d),
											y = g[1].replace("{n}", h),
											b = e('<div class="notify"></div>');
										g[2] && (v = v.replace("{var}", g[2][d > 1 ? 0 : 1]), y = y.replace("{var}", g[2][h > 1 ? 0 : 1])), l.prop("selected", !1), t.$menu.append(b), d && p && (b.append(e("<div>" + v + "</div>")), t.$element.trigger("maxReached.bs.select")), h && f && (b.append(e("<div>" + y + "</div>")), t.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
											t.setSelected(o, !1)
										}, 10), b.delay(750).fadeOut(300, function() {
											e(this).remove()
										})
									}
								}
							} else a.prop("selected", !1), l.prop("selected", !0), t.$menu.find(".selected").removeClass("selected"), t.setSelected(o, !0);
							t.multiple ? t.options.liveSearch && t.$searchbox.focus() : t.$button.focus(), (s != t.$element.val() && t.multiple || r != t.$element.prop("selectedIndex") && !t.multiple) && (t.$element.change(), t.$element.trigger("changed.bs.select", [o, l.prop("selected"), u]))
						}
					}), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(i) {
						i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), t.options.liveSearch && !e(i.target).hasClass("close") ? t.$searchbox.focus() : t.$button.focus())
					}), this.$menu.on("click", "li.divider, li.dropdown-header", function(e) {
						e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus()
					}), this.$menu.on("click", ".popover-title .close", function() {
						t.$button.click()
					}), this.$searchbox.on("click", function(e) {
						e.stopPropagation()
					}), this.$menu.on("click", ".actions-btn", function(i) {
						t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus(), i.preventDefault(), i.stopPropagation(), e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll(), t.$element.change()
					}), this.$element.change(function() {
						t.render(!1)
					})
				},
				liveSearchListener: function() {
					var n = this,
						o = e('<li class="no-results"></li>');
					this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
						n.$menuInner.find(".active").removeClass("active"), n.$searchbox.val() && (n.$searchbox.val(""), n.$lis.not(".is-hidden").removeClass("hidden"), o.parent().length && o.remove()), n.multiple || n.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
							n.$searchbox.focus()
						}, 10)
					}), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(e) {
						e.stopPropagation()
					}), this.$searchbox.on("input propertychange", function() {
						if (n.$searchbox.val()) {
							var s = n.$lis.not(".is-hidden").removeClass("hidden").children("a");
							(s = n.options.liveSearchNormalize ? s.not(":a" + n._searchStyle() + "(" + t(n.$searchbox.val()) + ")") : s.not(":" + n._searchStyle() + "(" + n.$searchbox.val() + ")")).parent().addClass("hidden"), n.$lis.filter(".dropdown-header").each(function() {
								var t = e(this),
									i = t.data("optgroup");
								0 === n.$lis.filter("[data-optgroup=" + i + "]").not(t).not(".hidden").length && (t.addClass("hidden"), n.$lis.filter("[data-optgroup=" + i + "div]").addClass("hidden"))
							});
							var r = n.$lis.not(".hidden");
							r.each(function(t) {
								var i = e(this);
								i.hasClass("divider") && (i.index() === r.eq(0).index() || i.index() === r.last().index() || r.eq(t + 1).hasClass("divider")) && i.addClass("hidden")
							}), n.$lis.not(".hidden, .no-results").length ? o.parent().length && o.remove() : (o.parent().length && o.remove(), o.html(n.options.noneResultsText.replace("{0}", '"' + i(n.$searchbox.val()) + '"')).show(), n.$menuInner.append(o))
						} else n.$lis.not(".is-hidden").removeClass("hidden"), o.parent().length && o.remove();
						n.$lis.filter(".active").removeClass("active"), n.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), e(this).focus()
					})
				},
				_searchStyle: function() {
					var e = "icontains";
					switch (this.options.liveSearchStyle) {
						case "begins":
						case "startsWith":
							e = "ibegins"
					}
					return e
				},
				val: function(e) {
					return void 0 !== e ? (this.$element.val(e), this.render(), this.$element) : this.$element.val()
				},
				selectAll: function() {
					this.findLis(), this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected", !0), this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").addClass("selected"), this.render(!1)
				},
				deselectAll: function() {
					this.findLis(), this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected", !1), this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").removeClass("selected"), this.render(!1)
				},
				keydown: function(i) {
					var n, o, s, r, a, l, u, c, d, h = e(this),
						p = h.is("input") ? h.parent().parent() : h.parent(),
						f = p.data("this"),
						m = ":not(.disabled, .hidden, .dropdown-header, .divider)",
						g = {
							32: " ",
							48: "0",
							49: "1",
							50: "2",
							51: "3",
							52: "4",
							53: "5",
							54: "6",
							55: "7",
							56: "8",
							57: "9",
							59: ";",
							65: "a",
							66: "b",
							67: "c",
							68: "d",
							69: "e",
							70: "f",
							71: "g",
							72: "h",
							73: "i",
							74: "j",
							75: "k",
							76: "l",
							77: "m",
							78: "n",
							79: "o",
							80: "p",
							81: "q",
							82: "r",
							83: "s",
							84: "t",
							85: "u",
							86: "v",
							87: "w",
							88: "x",
							89: "y",
							90: "z",
							96: "0",
							97: "1",
							98: "2",
							99: "3",
							100: "4",
							101: "5",
							102: "6",
							103: "7",
							104: "8",
							105: "9"
						};
					if (f.options.liveSearch && (p = h.parent().parent()), f.options.container && (p = f.$menu), n = e("[role=menu] li a", p), !(d = f.$menu.parent().hasClass("open")) && (i.keyCode >= 48 && i.keyCode <= 57 || event.keyCode >= 65 && event.keyCode <= 90) && (f.options.container ? f.$newElement.trigger("click") : (f.setSize(), f.$menu.parent().addClass("open"), d = !0), f.$searchbox.focus()), f.options.liveSearch && (/(^9$|27)/.test(i.keyCode.toString(10)) && d && 0 === f.$menu.find(".active").length && (i.preventDefault(), f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus()), n = e("[role=menu] li:not(.disabled, .hidden, .dropdown-header, .divider)", p), h.val() || /(38|40)/.test(i.keyCode.toString(10)) || 0 === n.filter(".active").length && (n = f.$newElement.find("li"), n = f.options.liveSearchNormalize ? n.filter(":a" + f._searchStyle() + "(" + t(g[i.keyCode]) + ")") : n.filter(":" + f._searchStyle() + "(" + g[i.keyCode] + ")"))), n.length) {
						if (/(38|40)/.test(i.keyCode.toString(10))) o = n.index(n.filter(":focus")), r = n.parent(m).first().data("originalIndex"), a = n.parent(m).last().data("originalIndex"), s = n.eq(o).parent().nextAll(m).eq(0).data("originalIndex"), l = n.eq(o).parent().prevAll(m).eq(0).data("originalIndex"), u = n.eq(s).parent().prevAll(m).eq(0).data("originalIndex"), f.options.liveSearch && (n.each(function(t) {
							e(this).hasClass("disabled") || e(this).data("index", t)
						}), o = n.index(n.filter(".active")), r = n.first().data("index"), a = n.last().data("index"), s = n.eq(o).nextAll().eq(0).data("index"), l = n.eq(o).prevAll().eq(0).data("index"), u = n.eq(s).prevAll().eq(0).data("index")), c = h.data("prevIndex"), 38 == i.keyCode ? (f.options.liveSearch && (o -= 1), o != u && o > l && (o = l), r > o && (o = r), o == c && (o = a)) : 40 == i.keyCode && (f.options.liveSearch && (o += 1), -1 == o && (o = 0), o != u && s > o && (o = s), o > a && (o = a), o == c && (o = r)), h.data("prevIndex", o), f.options.liveSearch ? (i.preventDefault(), h.hasClass("dropdown-toggle") || (n.removeClass("active").eq(o).addClass("active").children("a").focus(), h.focus())) : n.eq(o).focus();
						else if (!h.is("input")) {
							var v, y = [];
							n.each(function() {
								e(this).parent().hasClass("disabled") || e.trim(e(this).text().toLowerCase()).substring(0, 1) == g[i.keyCode] && y.push(e(this).parent().index())
							}), v = e(document).data("keycount"), v++, e(document).data("keycount", v), e.trim(e(":focus").text().toLowerCase()).substring(0, 1) != g[i.keyCode] ? (v = 1, e(document).data("keycount", v)) : v >= y.length && (e(document).data("keycount", 0), v > y.length && (v = 1)), n.eq(y[v - 1]).focus()
						}
						if ((/(13|32)/.test(i.keyCode.toString(10)) || /(^9$)/.test(i.keyCode.toString(10)) && f.options.selectOnTab) && d) {
							if (/(32)/.test(i.keyCode.toString(10)) || i.preventDefault(), f.options.liveSearch) /(32)/.test(i.keyCode.toString(10)) || (f.$menu.find(".active a").click(), h.focus());
							else {
								var b = e(":focus");
								b.click(), b.focus(), i.preventDefault(), e(document).data("spaceSelect", !0)
							}
							e(document).data("keycount", 0)
						}(/(^9$|27)/.test(i.keyCode.toString(10)) && d && (f.multiple || f.options.liveSearch) || /(27)/.test(i.keyCode.toString(10)) && !d) && (f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus())
					}
				},
				mobile: function() {
					this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
				},
				refresh: function() {
					this.$lis = null, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
				},
				hide: function() {
					this.$newElement.hide()
				},
				show: function() {
					this.$newElement.show()
				},
				remove: function() {
					this.$newElement.remove(), this.$element.remove()
				}
			};
			var s = e.fn.selectpicker;
			e.fn.selectpicker = n, e.fn.selectpicker.Constructor = o, e.fn.selectpicker.noConflict = function() {
				return e.fn.selectpicker = s, this
			}, e(document).data("keycount", 0).on("keydown", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', o.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(e) {
				e.stopPropagation()
			}), e(window).on("load.bs.select.data-api", function() {
				e(".selectpicker").each(function() {
					var t = e(this);
					n.call(t, t.data())
				})
			})
		}(jQuery)
	}),
	function(e) {
		"use strict";

		function t(t, i) {
			return e.map(t, function(e) {
				return function(e, t) {
					return e + ".touchspin_" + t
				}(e, i)
			})
		}
		var i = 0;
		e.fn.TouchSpin = function(n) {
			if ("destroy" !== n) {
				var o = {
						min: 0,
						max: 100,
						initval: "",
						replacementval: "",
						step: 1,
						decimals: 0,
						stepinterval: 100,
						forcestepdivisibility: "round",
						stepintervaldelay: 500,
						verticalbuttons: !1,
						verticalupclass: "fa fa-angle-up",
						verticaldownclass: "fa fa-angle-down",
						prefix: "",
						postfix: "",
						prefix_extraclass: "",
						postfix_extraclass: "",
						booster: !0,
						boostat: 10,
						maxboostedstep: !1,
						mousewheel: !0,
						buttondown_class: "btn btn-default",
						buttonup_class: "btn btn-default",
						buttondown_txt: "-",
						buttonup_txt: "+"
					},
					s = {
						min: "min",
						max: "max",
						initval: "init-val",
						replacementval: "replacement-val",
						step: "step",
						decimals: "decimals",
						stepinterval: "step-interval",
						verticalbuttons: "vertical-buttons",
						verticalupclass: "vertical-up-class",
						verticaldownclass: "vertical-down-class",
						forcestepdivisibility: "force-step-divisibility",
						stepintervaldelay: "step-interval-delay",
						prefix: "prefix",
						postfix: "postfix",
						prefix_extraclass: "prefix-extra-class",
						postfix_extraclass: "postfix-extra-class",
						booster: "booster",
						boostat: "boostat",
						maxboostedstep: "max-boosted-step",
						mousewheel: "mouse-wheel",
						buttondown_class: "button-down-class",
						buttonup_class: "button-up-class",
						buttondown_txt: "button-down-txt",
						buttonup_txt: "button-up-txt"
					};
				return this.each(function() {
					function n(t) {
						v = e.extend({}, v, t)
					}

					function r(t) {
						t.addClass("bootstrap-touchspin");
						var i, n, o = T.prev(),
							s = T.next(),
							r = '<span class="input-group-addon bootstrap-touchspin-prefix">' + v.prefix + "</span>",
							a = '<span class="input-group-addon bootstrap-touchspin-postfix">' + v.postfix + "</span>";
						o.hasClass("input-group-btn") ? (i = '<button class="' + v.buttondown_class + ' bootstrap-touchspin-down" type="button">' + v.buttondown_txt + "</button>", o.append(i)) : (i = '<span class="input-group-btn"><button class="' + v.buttondown_class + ' bootstrap-touchspin-down" type="button">' + v.buttondown_txt + "</button></span>", e(i).insertBefore(T)), s.hasClass("input-group-btn") ? (n = '<button class="' + v.buttonup_class + ' bootstrap-touchspin-up" type="button">' + v.buttonup_txt + "</button>", s.prepend(n)) : (n = '<span class="input-group-btn"><button class="' + v.buttonup_class + ' bootstrap-touchspin-up" type="button">' + v.buttonup_txt + "</button></span>", e(n).insertAfter(T)), e(r).insertBefore(T), e(a).insertAfter(T), y = t
					}

					function a() {
						var t;
						t = v.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + v.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + v.postfix + '</span><span class="input-group-btn-vertical"><button class="' + v.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + v.verticalupclass + '"></i></button><button class="' + v.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + v.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + v.buttondown_class + ' bootstrap-touchspin-down" type="button">' + v.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + v.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + v.postfix + '</span><span class="input-group-btn"><button class="' + v.buttonup_class + ' bootstrap-touchspin-up" type="button">' + v.buttonup_txt + "</button></span></div>", y = e(t).insertBefore(T), e(".bootstrap-touchspin-prefix", y).after(T), T.hasClass("input-sm") ? y.addClass("input-group-sm") : T.hasClass("input-lg") && y.addClass("input-group-lg")
					}

					function l() {
						b = {
							down: e(".bootstrap-touchspin-down", y),
							up: e(".bootstrap-touchspin-up", y),
							input: e("input", y),
							prefix: e(".bootstrap-touchspin-prefix", y).addClass(v.prefix_extraclass),
							postfix: e(".bootstrap-touchspin-postfix", y).addClass(v.postfix_extraclass)
						}
					}

					function u() {
						T.on("keydown", function(e) {
							var t = e.keyCode || e.which;
							38 === t ? ("up" !== k && (h(), m()), e.preventDefault()) : 40 === t && ("down" !== k && (p(), f()), e.preventDefault())
						}), T.on("keyup", function(e) {
							var t = e.keyCode || e.which;
							38 === t ? g() : 40 === t && g()
						}), T.on("blur", function() {
							c()
						}), b.down.on("keydown", function(e) {
							var t = e.keyCode || e.which;
							(32 === t || 13 === t) && ("down" !== k && (p(), f()), e.preventDefault())
						}), b.down.on("keyup", function(e) {
							var t = e.keyCode || e.which;
							(32 === t || 13 === t) && g()
						}), b.up.on("keydown", function(e) {
							var t = e.keyCode || e.which;
							(32 === t || 13 === t) && ("up" !== k && (h(), m()), e.preventDefault())
						}), b.up.on("keyup", function(e) {
							var t = e.keyCode || e.which;
							(32 === t || 13 === t) && g()
						}), b.down.on("mousedown.touchspin", function(e) {
							b.down.off("touchstart.touchspin"), T.is(":disabled") || (p(), f(), e.preventDefault(), e.stopPropagation())
						}), b.down.on("touchstart.touchspin", function(e) {
							b.down.off("mousedown.touchspin"), T.is(":disabled") || (p(), f(), e.preventDefault(), e.stopPropagation())
						}), b.up.on("mousedown.touchspin", function(e) {
							b.up.off("touchstart.touchspin"), T.is(":disabled") || (h(), m(), e.preventDefault(), e.stopPropagation())
						}), b.up.on("touchstart.touchspin", function(e) {
							b.up.off("mousedown.touchspin"), T.is(":disabled") || (h(), m(), e.preventDefault(), e.stopPropagation())
						}), b.up.on("mouseout touchleave touchend touchcancel", function(e) {
							k && (e.stopPropagation(), g())
						}), b.down.on("mouseout touchleave touchend touchcancel", function(e) {
							k && (e.stopPropagation(), g())
						}), b.down.on("mousemove touchmove", function(e) {
							k && (e.stopPropagation(), e.preventDefault())
						}), b.up.on("mousemove touchmove", function(e) {
							k && (e.stopPropagation(), e.preventDefault())
						}), e(document).on(t(["mouseup", "touchend", "touchcancel"], i).join(" "), function(e) {
							k && (e.preventDefault(), g())
						}), e(document).on(t(["mousemove", "touchmove", "scroll", "scrollstart"], i).join(" "), function(e) {
							k && (e.preventDefault(), g())
						}), T.on("mousewheel DOMMouseScroll", function(e) {
							if (v.mousewheel && T.is(":focus")) {
								var t = e.originalEvent.wheelDelta || -e.originalEvent.deltaY || -e.originalEvent.detail;
								e.stopPropagation(), e.preventDefault(), 0 > t ? p() : h()
							}
						})
					}

					function c() {
						var e, t, i;
						return "" === (e = T.val()) ? void("" !== v.replacementval && (T.val(v.replacementval), T.trigger("change"))) : void(v.decimals > 0 && "." === e || (t = parseFloat(e), isNaN(t) && (t = "" !== v.replacementval ? v.replacementval : 0), i = t, t.toString() !== e && (i = t), t < v.min && (i = v.min), t > v.max && (i = v.max), i = function(e) {
							switch (v.forcestepdivisibility) {
								case "round":
									return (Math.round(e / v.step) * v.step).toFixed(v.decimals);
								case "floor":
									return (Math.floor(e / v.step) * v.step).toFixed(v.decimals);
								case "ceil":
									return (Math.ceil(e / v.step) * v.step).toFixed(v.decimals);
								default:
									return e
							}
						}(i), Number(e).toString() !== i.toString() && (T.val(i), T.trigger("change"))))
					}

					function d() {
						if (v.booster) {
							var e = Math.pow(2, Math.floor($ / v.boostat)) * v.step;
							return v.maxboostedstep && e > v.maxboostedstep && (e = v.maxboostedstep, w = Math.round(w / e) * e), Math.max(v.step, e)
						}
						return v.step
					}

					function h() {
						c(), w = parseFloat(b.input.val()), isNaN(w) && (w = 0);
						var e = w,
							t = d();
						(w += t) > v.max && (w = v.max, T.trigger("touchspin.on.max"), g()), b.input.val(Number(w).toFixed(v.decimals)), e !== w && T.trigger("change")
					}

					function p() {
						c(), w = parseFloat(b.input.val()), isNaN(w) && (w = 0);
						var e = w,
							t = d();
						(w -= t) < v.min && (w = v.min, T.trigger("touchspin.on.min"), g()), b.input.val(w.toFixed(v.decimals)), e !== w && T.trigger("change")
					}

					function f() {
						g(), $ = 0, k = "down", T.trigger("touchspin.on.startspin"), T.trigger("touchspin.on.startdownspin"), C = setTimeout(function() {
							_ = setInterval(function() {
								$++, p()
							}, v.stepinterval)
						}, v.stepintervaldelay)
					}

					function m() {
						g(), $ = 0, k = "up", T.trigger("touchspin.on.startspin"), T.trigger("touchspin.on.startupspin"), S = setTimeout(function() {
							x = setInterval(function() {
								$++, h()
							}, v.stepinterval)
						}, v.stepintervaldelay)
					}

					function g() {
						switch (clearTimeout(C), clearTimeout(S), clearInterval(_), clearInterval(x), k) {
							case "up":
								T.trigger("touchspin.on.stopupspin"), T.trigger("touchspin.on.stopspin");
								break;
							case "down":
								T.trigger("touchspin.on.stopdownspin"), T.trigger("touchspin.on.stopspin")
						}
						$ = 0, k = !1
					}
					var v, y, b, w, _, x, C, S, T = e(this),
						E = T.data(),
						$ = 0,
						k = !1;
					! function() {
						if (!T.data("alreadyinitialized")) {
							if (T.data("alreadyinitialized", !0), i += 1, T.data("spinnerid", i), !T.is("input")) return void console.log("Must be an input.");
							"" !== (v = e.extend({}, o, E, function() {
								var t = {};
								return e.each(s, function(e, i) {
									var n = "bts-" + i;
									T.is("[data-" + n + "]") && (t[e] = T.data(n))
								}), t
							}(), t)).initval && "" === T.val() && T.val(v.initval), c(), e = T.val(), t = T.parent(), "" !== e && (e = Number(e).toFixed(v.decimals)), T.data("initvalue", e).val(e), T.addClass("form-control"), t.hasClass("input-group") ? r(t) : a(), l(), "" === v.prefix && b.prefix.hide(), "" === v.postfix && b.postfix.hide(), u(), T.on("touchspin.uponce", function() {
								g(), h()
							}), T.on("touchspin.downonce", function() {
								g(), p()
							}), T.on("touchspin.startupspin", function() {
								m()
							}), T.on("touchspin.startdownspin", function() {
								f()
							}), T.on("touchspin.stopspin", function() {
								g()
							}), T.on("touchspin.updatesettings", function(e, t) {
								! function(e) {
									n(e), c();
									var t = b.input.val();
									"" !== t && (t = Number(b.input.val()), b.input.val(t.toFixed(v.decimals)))
								}(t)
							}), b.input.css("display", "block")
						}
						var e, t
					}()
				})
			}
			this.each(function() {
				var i = e(this).data();
				e(document).off(t(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], i.spinnerid).join(" "))
			})
		}
	}(jQuery),
	function(e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
	}(function(e) {
		var t, i, n, o, s, r, a = "Close",
			l = "BeforeClose",
			u = "MarkupParse",
			c = "Open",
			d = "Change",
			h = "mfp",
			p = "." + h,
			f = "mfp-ready",
			m = "mfp-removing",
			g = "mfp-prevent-close",
			v = function() {},
			y = !!window.jQuery,
			b = e(window),
			w = function(e, i) {
				t.ev.on(h + e + p, i)
			},
			_ = function(t, i, n, o) {
				var s = document.createElement("div");
				return s.className = "mfp-" + t, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = e(s), i && s.appendTo(i)), s
			},
			x = function(i, n) {
				t.ev.triggerHandler(h + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
			},
			C = function(i) {
				return i === r && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), r = i), t.currTemplate.closeBtn
			},
			S = function() {
				e.magnificPopup.instance || ((t = new v).init(), e.magnificPopup.instance = t)
			};
		v.prototype = {
			constructor: v,
			init: function() {
				var i = navigator.appVersion;
				t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = function() {
					var e = document.createElement("p").style,
						t = ["ms", "O", "Moz", "Winkit"];
					if (void 0 !== e.transition) return !0;
					for (; t.length;)
						if (t.pop() + "Transition" in e) return !0;
					return !1
				}(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {}
			},
			open: function(i) {
				var o;
				if (!1 === i.isObj) {
					t.items = i.items.toArray(), t.index = 0;
					var r, a = i.items;
					for (o = 0; o < a.length; o++)
						if ((r = a[o]).parsed && (r = r.el[0]), r === i.el[0]) {
							t.index = o;
							break
						}
				} else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
				if (!t.isOpen) {
					t.types = [], s = "", i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = n, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = _("bg").on("click" + p, function() {
						t.close()
					}), t.wrap = _("wrap").attr("tabindex", -1).on("click" + p, function(e) {
						t._checkIfClose(e.target) && t.close()
					}), t.container = _("container", t.wrap)), t.contentContainer = _("content"), t.st.preloader && (t.preloader = _("preloader", t.container, t.st.tLoading));
					var l = e.magnificPopup.modules;
					for (o = 0; o < l.length; o++) {
						var d = l[o];
						d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
					}
					x("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (w(u, function(e, t, i, n) {
						i.close_replaceWith = C(n.type)
					}), s += " mfp-close-btn-in") : t.wrap.append(C())), t.st.alignTop && (s += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
						overflow: t.st.overflowY,
						overflowX: "hidden",
						overflowY: t.st.overflowY
					}) : t.wrap.css({
						top: b.scrollTop(),
						position: "absolute"
					}), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
						height: n.height(),
						position: "absolute"
					}), t.st.enableEscapeKey && n.on("keyup" + p, function(e) {
						27 === e.keyCode && t.close()
					}), b.on("resize" + p, function() {
						t.updateSize()
					}), t.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && t.wrap.addClass(s);
					var h = t.wH = b.height(),
						m = {};
					if (t.fixedContentPos && t._hasScrollBar(h)) {
						var g = t._getScrollbarSize();
						g && (m.marginRight = g)
					}
					t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
					var v = t.st.mainClass;
					return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), x("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
						t.content ? (t._addClassToMFP(f), t._setFocus()) : t.bgOverlay.addClass(f), n.on("focusin" + p, t._onFocusIn)
					}, 16), t.isOpen = !0, t.updateSize(h), x(c), i
				}
				t.updateItemHTML()
			},
			close: function() {
				t.isOpen && (x(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(m), setTimeout(function() {
					t._close()
				}, t.st.removalDelay)) : t._close())
			},
			_close: function() {
				x(a);
				var i = m + " " + f + " ";
				if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
					var o = {
						marginRight: ""
					};
					t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
				}
				n.off("keyup.mfp focusin" + p), t.ev.off(p), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, x("AfterClose")
			},
			updateSize: function(e) {
				if (t.isIOS) {
					var i = document.documentElement.clientWidth / window.innerWidth,
						n = window.innerHeight * i;
					t.wrap.css("height", n), t.wH = n
				} else t.wH = e || b.height();
				t.fixedContentPos || t.wrap.css("height", t.wH), x("Resize")
			},
			updateItemHTML: function() {
				var i = t.items[t.index];
				t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
				var n = i.type;
				if (x("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
					var s = !!t.st[n] && t.st[n].markup;
					x("FirstMarkupParse", s), t.currTemplate[n] = !s || e(s)
				}
				o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
				var r = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
				t.appendContent(r, n), i.preloaded = !0, x(d, i), o = i.type, t.container.prepend(t.contentContainer), x("AfterChange")
			},
			appendContent: function(e, i) {
				t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i] ? t.content.find(".mfp-close").length || t.content.append(C()) : t.content = e : t.content = "", x("BeforeAppend"), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
			},
			parseEl: function(i) {
				var n, o = t.items[i];
				if (o.tagName ? o = {
						el: e(o)
					} : (n = o.type, o = {
						data: o,
						src: o.src
					}), o.el) {
					for (var s = t.types, r = 0; r < s.length; r++)
						if (o.el.hasClass("mfp-" + s[r])) {
							n = s[r];
							break
						} o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
				}
				return o.type = n || t.st.type || "inline", o.index = i, o.parsed = !0, t.items[i] = o, x("ElementParse", o), t.items[i]
			},
			addGroup: function(e, i) {
				var n = function(n) {
					n.mfpEl = this, t._openClick(n, e, i)
				};
				i || (i = {});
				var o = "click.magnificPopup";
				i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, n) : (i.items = e, e.off(o).on(o, n)))
			},
			_openClick: function(i, n, o) {
				if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
					var s = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
					if (s)
						if (e.isFunction(s)) {
							if (!s.call(t)) return !0
						} else if (b.width() < s) return !0;
					i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), o.el = e(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), t.open(o)
				}
			},
			updateStatus: function(e, n) {
				if (t.preloader) {
					i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
					var o = {
						status: e,
						text: n
					};
					x("UpdateStatus", o), e = o.status, n = o.text, t.preloader.html(n), t.preloader.find("a").on("click", function(e) {
						e.stopImmediatePropagation()
					}), t.container.addClass("mfp-s-" + e), i = e
				}
			},
			_checkIfClose: function(i) {
				if (!e(i).hasClass(g)) {
					var n = t.st.closeOnContentClick,
						o = t.st.closeOnBgClick;
					if (n && o) return !0;
					if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
					if (i === t.content[0] || e.contains(t.content[0], i)) {
						if (n) return !0
					} else if (o && e.contains(document, i)) return !0;
					return !1
				}
			},
			_addClassToMFP: function(e) {
				t.bgOverlay.addClass(e), t.wrap.addClass(e)
			},
			_removeClassFromMFP: function(e) {
				this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
			},
			_hasScrollBar: function(e) {
				return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || b.height())
			},
			_setFocus: function() {
				(t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
			},
			_onFocusIn: function(i) {
				return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (t._setFocus(), !1)
			},
			_parseMarkup: function(t, i, n) {
				var o;
				n.data && (i = e.extend(n.data, i)), x(u, [t, i, n]), e.each(i, function(i, n) {
					if (void 0 === n || !1 === n) return !0;
					if ((o = i.split("_")).length > 1) {
						var s = t.find(p + "-" + o[0]);
						if (s.length > 0) {
							var r = o[1];
							"replaceWith" === r ? s[0] !== n[0] && s.replaceWith(n) : "img" === r ? s.is("img") ? s.attr("src", n) : s.replaceWith(e("<img>").attr("src", n).attr("class", s.attr("class"))) : s.attr(o[1], n)
						}
					} else t.find(p + "-" + i).html(n)
				})
			},
			_getScrollbarSize: function() {
				if (void 0 === t.scrollbarSize) {
					var e = document.createElement("div");
					e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
				}
				return t.scrollbarSize
			}
		}, e.magnificPopup = {
			instance: null,
			proto: v.prototype,
			modules: [],
			open: function(t, i) {
				return S(), (t = t ? e.extend(!0, {}, t) : {}).isObj = !0, t.index = i || 0, this.instance.open(t)
			},
			close: function() {
				return e.magnificPopup.instance && e.magnificPopup.instance.close()
			},
			registerModule: function(t, i) {
				i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
			},
			defaults: {
				disableOn: 0,
				key: null,
				midClick: !1,
				mainClass: "",
				preloader: !0,
				focus: "",
				closeOnContentClick: !1,
				closeOnBgClick: !0,
				closeBtnInside: !0,
				showCloseBtn: !0,
				enableEscapeKey: !0,
				modal: !1,
				alignTop: !1,
				removalDelay: 0,
				prependTo: null,
				fixedContentPos: "auto",
				fixedBgPos: "auto",
				overflowY: "auto",
				closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
				tClose: "Close (Esc)",
				tLoading: "Loading...",
				autoFocusLast: !0
			}
		}, e.fn.magnificPopup = function(i) {
			S();
			var n = e(this);
			if ("string" == typeof i)
				if ("open" === i) {
					var o, s = y ? n.data("magnificPopup") : n[0].magnificPopup,
						r = parseInt(arguments[1], 10) || 0;
					s.items ? o = s.items[r] : (o = n, s.delegate && (o = o.find(s.delegate)), o = o.eq(r)), t._openClick({
						mfpEl: o
					}, n, s)
				} else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
			else i = e.extend(!0, {}, i), y ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
			return n
		};
		var T, E, $, k = "inline",
			A = function() {
				$ && (E.after($.addClass(T)).detach(), $ = null)
			};
		e.magnificPopup.registerModule(k, {
			options: {
				hiddenClass: "hide",
				markup: "",
				tNotFound: "Content not found"
			},
			proto: {
				initInline: function() {
					t.types.push(k), w(a + "." + k, function() {
						A()
					})
				},
				getInline: function(i, n) {
					if (A(), i.src) {
						var o = t.st.inline,
							s = e(i.src);
						if (s.length) {
							var r = s[0].parentNode;
							r && r.tagName && (E || (T = o.hiddenClass, E = _(T), T = "mfp-" + T), $ = s.after(E).detach().removeClass(T)), t.updateStatus("ready")
						} else t.updateStatus("error", o.tNotFound), s = e("<div>");
						return i.inlineElement = s, s
					}
					return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
				}
			}
		});
		var D, j = "ajax",
			O = function() {
				D && e(document.body).removeClass(D)
			},
			I = function() {
				O(), t.req && t.req.abort()
			};
		e.magnificPopup.registerModule(j, {
			options: {
				settings: null,
				cursor: "mfp-ajax-cur",
				tError: '<a href="%url%">The content</a> could not be loaded.'
			},
			proto: {
				initAjax: function() {
					t.types.push(j), D = t.st.ajax.cursor, w(a + "." + j, I), w("BeforeChange." + j, I)
				},
				getAjax: function(i) {
					D && e(document.body).addClass(D), t.updateStatus("loading");
					var n = e.extend({
						url: i.src,
						success: function(n, o, s) {
							var r = {
								data: n,
								xhr: s
							};
							x("ParseAjax", r), t.appendContent(e(r.data), j), i.finished = !0, O(), t._setFocus(), setTimeout(function() {
								t.wrap.addClass(f)
							}, 16), t.updateStatus("ready"), x("AjaxContentAdded")
						},
						error: function() {
							O(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
						}
					}, t.st.ajax.settings);
					return t.req = e.ajax(n), ""
				}
			}
		});
		var N, L = function(i) {
			if (i.data && void 0 !== i.data.title) return i.data.title;
			var n = t.st.image.titleSrc;
			if (n) {
				if (e.isFunction(n)) return n.call(t, i);
				if (i.el) return i.el.attr(n) || ""
			}
			return ""
		};
		e.magnificPopup.registerModule("image", {
			options: {
				markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
				cursor: "mfp-zoom-out-cur",
				titleSrc: "title",
				verticalFit: !0,
				tError: '<a href="%url%">The image</a> could not be loaded.'
			},
			proto: {
				initImage: function() {
					var i = t.st.image,
						n = ".image";
					t.types.push("image"), w(c + n, function() {
						"image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
					}), w(a + n, function() {
						i.cursor && e(document.body).removeClass(i.cursor), b.off("resize" + p)
					}), w("Resize" + n, t.resizeImage), t.isLowIE && w("AfterChange", t.resizeImage)
				},
				resizeImage: function() {
					var e = t.currItem;
					if (e && e.img && t.st.image.verticalFit) {
						var i = 0;
						t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
					}
				},
				_onImageHasSize: function(e) {
					e.img && (e.hasSize = !0, N && clearInterval(N), e.isCheckingImgSize = !1, x("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
				},
				findImageSize: function(e) {
					var i = 0,
						n = e.img[0],
						o = function(s) {
							N && clearInterval(N), N = setInterval(function() {
								return n.naturalWidth > 0 ? void t._onImageHasSize(e) : (i > 200 && clearInterval(N), void(3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
							}, s)
						};
					o(1)
				},
				getImage: function(i, n) {
					var o = 0,
						s = function() {
							i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, x("ImageLoadComplete")) : 200 > ++o ? setTimeout(s, 100) : r())
						},
						r = function() {
							i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
						},
						a = t.st.image,
						l = n.find(".mfp-img");
					if (l.length) {
						var u = document.createElement("img");
						u.className = "mfp-img", i.el && i.el.find("img").length && (u.alt = i.el.find("img").attr("alt")), i.img = e(u).on("load.mfploader", s).on("error.mfploader", r), u.src = i.src, l.is("img") && (i.img = i.img.clone()), (u = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : u.width || (i.hasSize = !1)
					}
					return t._parseMarkup(n, {
						title: L(i),
						img_replaceWith: i.img
					}, i), t.resizeImage(), i.hasSize ? (N && clearInterval(N), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
				}
			}
		});
		var P;
		e.magnificPopup.registerModule("zoom", {
			options: {
				enabled: !1,
				easing: "ease-in-out",
				duration: 300,
				opener: function(e) {
					return e.is("img") ? e : e.find("img")
				}
			},
			proto: {
				initZoom: function() {
					var e, i = t.st.zoom,
						n = ".zoom";
					if (i.enabled && t.supportsTransition) {
						var o, s, r = i.duration,
							u = function(e) {
								var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
									n = "all " + i.duration / 1e3 + "s " + i.easing,
									o = {
										position: "fixed",
										zIndex: 9999,
										left: 0,
										top: 0,
										"-webkit-backface-visibility": "hidden"
									},
									s = "transition";
								return o["-webkit-" + s] = o["-moz-" + s] = o["-o-" + s] = o[s] = n, t.css(o), t
							},
							c = function() {
								t.content.css("visibility", "visible")
							};
						w("BuildControls" + n, function() {
							if (t._allowZoom()) {
								if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void c();
								(s = u(e)).css(t._getOffset()), t.wrap.append(s), o = setTimeout(function() {
									s.css(t._getOffset(!0)), o = setTimeout(function() {
										c(), setTimeout(function() {
											s.remove(), e = s = null, x("ZoomAnimationEnded")
										}, 16)
									}, r)
								}, 16)
							}
						}), w(l + n, function() {
							if (t._allowZoom()) {
								if (clearTimeout(o), t.st.removalDelay = r, !e) {
									if (!(e = t._getItemToZoom())) return;
									s = u(e)
								}
								s.css(t._getOffset(!0)), t.wrap.append(s), t.content.css("visibility", "hidden"), setTimeout(function() {
									s.css(t._getOffset())
								}, 16)
							}
						}), w(a + n, function() {
							t._allowZoom() && (c(), s && s.remove(), e = null)
						})
					}
				},
				_allowZoom: function() {
					return "image" === t.currItem.type
				},
				_getItemToZoom: function() {
					return !!t.currItem.hasSize && t.currItem.img
				},
				_getOffset: function(i) {
					var n, o = (n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
						s = parseInt(n.css("padding-top"), 10),
						r = parseInt(n.css("padding-bottom"), 10);
					o.top -= e(window).scrollTop() - s;
					var a = {
						width: n.width(),
						height: (y ? n.innerHeight() : n[0].offsetHeight) - r - s
					};
					return void 0 === P && (P = void 0 !== document.createElement("p").style.MozTransform), P ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
				}
			}
		});
		var z = "iframe",
			M = function(e) {
				if (t.currTemplate[z]) {
					var i = t.currTemplate[z].find("iframe");
					i.length && (e || (i[0].src = "//about:blank"), t.isIE8 && i.css("display", e ? "block" : "none"))
				}
			};
		e.magnificPopup.registerModule(z, {
			options: {
				markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
				srcAction: "iframe_src",
				patterns: {
					youtube: {
						index: "youtube.com",
						id: "v=",
						src: "//www.youtube.com/embed/%id%?autoplay=1"
					},
					vimeo: {
						index: "vimeo.com/",
						id: "/",
						src: "//player.vimeo.com/video/%id%?autoplay=1"
					},
					gmaps: {
						index: "//maps.google.",
						src: "%id%&output=embed"
					}
				}
			},
			proto: {
				initIframe: function() {
					t.types.push(z), w("BeforeChange", function(e, t, i) {
						t !== i && (t === z ? M() : i === z && M(!0))
					}), w(a + "." + z, function() {
						M()
					})
				},
				getIframe: function(i, n) {
					var o = i.src,
						s = t.st.iframe;
					e.each(s.patterns, function() {
						return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
					});
					var r = {};
					return s.srcAction && (r[s.srcAction] = o), t._parseMarkup(n, r, i), t.updateStatus("ready"), n
				}
			}
		});
		var q = function(e) {
				var i = t.items.length;
				return e > i - 1 ? e - i : 0 > e ? i + e : e
			},
			W = function(e, t, i) {
				return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
			};
		e.magnificPopup.registerModule("gallery", {
			options: {
				enabled: !1,
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
				preload: [0, 2],
				navigateByImgClick: !0,
				arrows: !0,
				tPrev: "Previous (Left arrow key)",
				tNext: "Next (Right arrow key)",
				tCounter: "%curr% of %total%"
			},
			proto: {
				initGallery: function() {
					var i = t.st.gallery,
						o = ".mfp-gallery";
					return t.direction = !0, !(!i || !i.enabled) && (s += " mfp-gallery", w(c + o, function() {
						i.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
							return t.items.length > 1 ? (t.next(), !1) : void 0
						}), n.on("keydown" + o, function(e) {
							37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
						})
					}), w("UpdateStatus" + o, function(e, i) {
						i.text && (i.text = W(i.text, t.currItem.index, t.items.length))
					}), w(u + o, function(e, n, o, s) {
						var r = t.items.length;
						o.counter = r > 1 ? W(i.tCounter, s.index, r) : ""
					}), w("BuildControls" + o, function() {
						if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
							var n = i.arrowMarkup,
								o = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g),
								s = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g);
							o.click(function() {
								t.prev()
							}), s.click(function() {
								t.next()
							}), t.container.append(o.add(s))
						}
					}), w(d + o, function() {
						t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
							t.preloadNearbyImages(), t._preloadTimeout = null
						}, 16)
					}), void w(a + o, function() {
						n.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null
					}))
				},
				next: function() {
					t.direction = !0, t.index = q(t.index + 1), t.updateItemHTML()
				},
				prev: function() {
					t.direction = !1, t.index = q(t.index - 1), t.updateItemHTML()
				},
				goTo: function(e) {
					t.direction = e >= t.index, t.index = e, t.updateItemHTML()
				},
				preloadNearbyImages: function() {
					var e, i = t.st.gallery.preload,
						n = Math.min(i[0], t.items.length),
						o = Math.min(i[1], t.items.length);
					for (e = 1; e <= (t.direction ? o : n); e++) t._preloadItem(t.index + e);
					for (e = 1; e <= (t.direction ? n : o); e++) t._preloadItem(t.index - e)
				},
				_preloadItem: function(i) {
					if (i = q(i), !t.items[i].preloaded) {
						var n = t.items[i];
						n.parsed || (n = t.parseEl(i)), x("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
							n.hasSize = !0
						}).on("error.mfploader", function() {
							n.hasSize = !0, n.loadError = !0, x("LazyLoadError", n)
						}).attr("src", n.src)), n.preloaded = !0
					}
				}
			}
		});
		var H = "retina";
		e.magnificPopup.registerModule(H, {
			options: {
				replaceSrc: function(e) {
					return e.src.replace(/\.\w+$/, function(e) {
						return "@2x" + e
					})
				},
				ratio: 1
			},
			proto: {
				initRetina: function() {
					if (window.devicePixelRatio > 1) {
						var e = t.st.retina,
							i = e.ratio;
						(i = isNaN(i) ? i() : i) > 1 && (w("ImageHasSize." + H, function(e, t) {
							t.img.css({
								"max-width": t.img[0].naturalWidth / i,
								width: "100%"
							})
						}), w("ElementParse." + H, function(t, n) {
							n.src = e.replaceSrc(n, i)
						}))
					}
				}
			}
		}), S()
	}),
	function() {
		"use strict";
		var e = 0,
			t = {};

		function i(n) {
			if (!n) throw new Error("No options passed to Waypoint constructor");
			if (!n.element) throw new Error("No element option passed to Waypoint constructor");
			if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
			this.key = "waypoint-" + e, this.options = i.Adapter.extend({}, i.defaults, n), this.element = this.options.element, this.adapter = new i.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = i.Group.findOrCreate({
				name: this.options.group,
				axis: this.axis
			}), this.context = i.Context.findOrCreateByElement(this.options.context), i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), t[this.key] = this, e += 1
		}
		i.prototype.queueTrigger = function(e) {
			this.group.queueTrigger(this, e)
		}, i.prototype.trigger = function(e) {
			this.enabled && this.callback && this.callback.apply(this, e)
		}, i.prototype.destroy = function() {
			this.context.remove(this), this.group.remove(this), delete t[this.key]
		}, i.prototype.disable = function() {
			return this.enabled = !1, this
		}, i.prototype.enable = function() {
			return this.context.refresh(), this.enabled = !0, this
		}, i.prototype.next = function() {
			return this.group.next(this)
		}, i.prototype.previous = function() {
			return this.group.previous(this)
		}, i.invokeAll = function(e) {
			var i = [];
			for (var n in t) i.push(t[n]);
			for (var o = 0, s = i.length; o < s; o++) i[o][e]()
		}, i.destroyAll = function() {
			i.invokeAll("destroy")
		}, i.disableAll = function() {
			i.invokeAll("disable")
		}, i.enableAll = function() {
			for (var e in i.Context.refreshAll(), t) t[e].enabled = !0;
			return this
		}, i.refreshAll = function() {
			i.Context.refreshAll()
		}, i.viewportHeight = function() {
			return window.innerHeight || document.documentElement.clientHeight
		}, i.viewportWidth = function() {
			return document.documentElement.clientWidth
		}, i.adapters = [], i.defaults = {
			context: window,
			continuous: !0,
			enabled: !0,
			group: "default",
			horizontal: !1,
			offset: 0
		}, i.offsetAliases = {
			"bottom-in-view": function() {
				return this.context.innerHeight() - this.adapter.outerHeight()
			},
			"right-in-view": function() {
				return this.context.innerWidth() - this.adapter.outerWidth()
			}
		}, window.Waypoint = i
	}(),
	function() {
		"use strict";
		var e = 0,
			t = {},
			i = window.Waypoint,
			n = window.onload;

		function o(n) {
			this.element = n, this.Adapter = i.Adapter, this.adapter = new this.Adapter(n), this.key = "waypoint-context-" + e, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
				x: this.adapter.scrollLeft(),
				y: this.adapter.scrollTop()
			}, this.waypoints = {
				vertical: {},
				horizontal: {}
			}, n.waypointContextKey = this.key, t[n.waypointContextKey] = this, e += 1, i.windowContext || (i.windowContext = !0, i.windowContext = new o(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
		}
		o.prototype.add = function(e) {
			var t = e.options.horizontal ? "horizontal" : "vertical";
			this.waypoints[t][e.key] = e, this.refresh()
		}, o.prototype.checkEmpty = function() {
			var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
				i = this.Adapter.isEmptyObject(this.waypoints.vertical),
				n = this.element == this.element.window;
			e && i && !n && (this.adapter.off(".waypoints"), delete t[this.key])
		}, o.prototype.createThrottledResizeHandler = function() {
			var e = this;

			function t() {
				e.handleResize(), e.didResize = !1
			}
			this.adapter.on("resize.waypoints", function() {
				e.didResize || (e.didResize = !0, i.requestAnimationFrame(t))
			})
		}, o.prototype.createThrottledScrollHandler = function() {
			var e = this;

			function t() {
				e.handleScroll(), e.didScroll = !1
			}
			this.adapter.on("scroll.waypoints", function() {
				e.didScroll && !i.isTouch || (e.didScroll = !0, i.requestAnimationFrame(t))
			})
		}, o.prototype.handleResize = function() {
			i.Context.refreshAll()
		}, o.prototype.handleScroll = function() {
			var e = {},
				t = {
					horizontal: {
						newScroll: this.adapter.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.adapter.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				};
			for (var i in t) {
				var n = t[i],
					o = n.newScroll > n.oldScroll ? n.forward : n.backward;
				for (var s in this.waypoints[i]) {
					var r = this.waypoints[i][s];
					if (null !== r.triggerPoint) {
						var a = n.oldScroll < r.triggerPoint,
							l = n.newScroll >= r.triggerPoint;
						(a && l || !a && !l) && (r.queueTrigger(o), e[r.group.id] = r.group)
					}
				}
			}
			for (var u in e) e[u].flushTriggers();
			this.oldScroll = {
				x: t.horizontal.newScroll,
				y: t.vertical.newScroll
			}
		}, o.prototype.innerHeight = function() {
			return this.element == this.element.window ? i.viewportHeight() : this.adapter.innerHeight()
		}, o.prototype.remove = function(e) {
			delete this.waypoints[e.axis][e.key], this.checkEmpty()
		}, o.prototype.innerWidth = function() {
			return this.element == this.element.window ? i.viewportWidth() : this.adapter.innerWidth()
		}, o.prototype.destroy = function() {
			var e = [];
			for (var t in this.waypoints)
				for (var i in this.waypoints[t]) e.push(this.waypoints[t][i]);
			for (var n = 0, o = e.length; n < o; n++) e[n].destroy()
		}, o.prototype.refresh = function() {
			var e, t = this.element == this.element.window,
				n = t ? void 0 : this.adapter.offset(),
				o = {};
			for (var s in this.handleScroll(), e = {
					horizontal: {
						contextOffset: t ? 0 : n.left,
						contextScroll: t ? 0 : this.oldScroll.x,
						contextDimension: this.innerWidth(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left"
					},
					vertical: {
						contextOffset: t ? 0 : n.top,
						contextScroll: t ? 0 : this.oldScroll.y,
						contextDimension: this.innerHeight(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top"
					}
				}) {
				var r = e[s];
				for (var a in this.waypoints[s]) {
					var l, u, c, d, h = this.waypoints[s][a],
						p = h.options.offset,
						f = h.triggerPoint,
						m = 0,
						g = null == f;
					h.element !== h.element.window && (m = h.adapter.offset()[r.offsetProp]), "function" == typeof p ? p = p.apply(h) : "string" == typeof p && (p = parseFloat(p), h.options.offset.indexOf("%") > -1 && (p = Math.ceil(r.contextDimension * p / 100))), l = r.contextScroll - r.contextOffset, h.triggerPoint = Math.floor(m + l - p), u = f < r.oldScroll, c = h.triggerPoint >= r.oldScroll, d = !u && !c, !g && u && c ? (h.queueTrigger(r.backward), o[h.group.id] = h.group) : !g && d ? (h.queueTrigger(r.forward), o[h.group.id] = h.group) : g && r.oldScroll >= h.triggerPoint && (h.queueTrigger(r.forward), o[h.group.id] = h.group)
				}
			}
			return i.requestAnimationFrame(function() {
				for (var e in o) o[e].flushTriggers()
			}), this
		}, o.findOrCreateByElement = function(e) {
			return o.findByElement(e) || new o(e)
		}, o.refreshAll = function() {
			for (var e in t) t[e].refresh()
		}, o.findByElement = function(e) {
			return t[e.waypointContextKey]
		}, window.onload = function() {
			n && n(), o.refreshAll()
		}, i.requestAnimationFrame = function(e) {
			(window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
				window.setTimeout(e, 1e3 / 60)
			}).call(window, e)
		}, i.Context = o
	}(),
	function() {
		"use strict";

		function e(e, t) {
			return e.triggerPoint - t.triggerPoint
		}

		function t(e, t) {
			return t.triggerPoint - e.triggerPoint
		}
		var i = {
				vertical: {},
				horizontal: {}
			},
			n = window.Waypoint;

		function o(e) {
			this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
		}
		o.prototype.add = function(e) {
			this.waypoints.push(e)
		}, o.prototype.clearTriggerQueues = function() {
			this.triggerQueues = {
				up: [],
				down: [],
				left: [],
				right: []
			}
		}, o.prototype.flushTriggers = function() {
			for (var i in this.triggerQueues) {
				var n = this.triggerQueues[i],
					o = "up" === i || "left" === i;
				n.sort(o ? t : e);
				for (var s = 0, r = n.length; s < r; s += 1) {
					var a = n[s];
					(a.options.continuous || s === n.length - 1) && a.trigger([i])
				}
			}
			this.clearTriggerQueues()
		}, o.prototype.next = function(t) {
			this.waypoints.sort(e);
			var i = n.Adapter.inArray(t, this.waypoints);
			return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
		}, o.prototype.previous = function(t) {
			this.waypoints.sort(e);
			var i = n.Adapter.inArray(t, this.waypoints);
			return i ? this.waypoints[i - 1] : null
		}, o.prototype.queueTrigger = function(e, t) {
			this.triggerQueues[t].push(e)
		}, o.prototype.remove = function(e) {
			var t = n.Adapter.inArray(e, this.waypoints);
			t > -1 && this.waypoints.splice(t, 1)
		}, o.prototype.first = function() {
			return this.waypoints[0]
		}, o.prototype.last = function() {
			return this.waypoints[this.waypoints.length - 1]
		}, o.findOrCreate = function(e) {
			return i[e.axis][e.name] || new o(e)
		}, n.Group = o
	}(),
	function() {
		"use strict";
		var e = window.jQuery,
			t = window.Waypoint;

		function i(t) {
			this.$element = e(t)
		}
		e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, t) {
			i.prototype[t] = function() {
				var e = Array.prototype.slice.call(arguments);
				return this.$element[t].apply(this.$element, e)
			}
		}), e.each(["extend", "inArray", "isEmptyObject"], function(t, n) {
			i[n] = e[n]
		}), t.adapters.push({
			name: "jquery",
			Adapter: i
		}), t.Adapter = i
	}(),
	function() {
		"use strict";
		var e = window.Waypoint;

		function t(t) {
			return function() {
				var i = [],
					n = arguments[0];
				return t.isFunction(arguments[0]) && ((n = t.extend({}, arguments[1])).handler = arguments[0]), this.each(function() {
					var o = t.extend({}, n, {
						element: this
					});
					"string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), i.push(new e(o))
				}), i
			}
		}
		window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
	}(),
	function(e) {
		"use strict";
		e.fn.counterUp = function(t) {
			var i, n = e.extend({
				time: 400,
				delay: 10,
				offset: 100,
				beginAt: 0,
				formatter: !1,
				context: "window",
				callback: function() {}
			}, t);
			return this.each(function() {
				var t = e(this),
					o = {
						time: e(this).data("counterup-time") || n.time,
						delay: e(this).data("counterup-delay") || n.delay,
						offset: e(this).data("counterup-offset") || n.offset,
						beginAt: e(this).data("counterup-beginat") || n.beginAt,
						context: e(this).data("counterup-context") || n.context
					};
				t.waypoint(function(s) {
					! function() {
						var s = [],
							r = o.time / o.delay,
							a = e(this).attr("data-num") ? e(this).attr("data-num") : t.text(),
							l = /[0-9]+,[0-9]+/.test(a),
							u = ((a = a.replace(/,/g, "")).split(".")[1] || []).length;
						o.beginAt > a && (o.beginAt = a);
						var c = /[0-9]+:[0-9]+:[0-9]+/.test(a);
						if (c) {
							var d = a.split(":"),
								h = 1;
							for (i = 0; d.length > 0;) i += h * parseInt(d.pop(), 10), h *= 60
						}
						for (var p = r; p >= o.beginAt / a * r; p--) {
							var f = parseFloat(a / r * p).toFixed(u);
							if (c) {
								f = parseInt(i / r * p);
								var m = parseInt(f / 3600) % 24,
									g = parseInt(f / 60) % 60,
									v = parseInt(f % 60, 10);
								f = (m < 10 ? "0" + m : m) + ":" + (g < 10 ? "0" + g : g) + ":" + (v < 10 ? "0" + v : v)
							}
							if (l)
								for (;
									/(\d+)(\d{3})/.test(f.toString());) f = f.toString().replace(/(\d+)(\d{3})/, "$1,$2");
							n.formatter && (f = n.formatter.call(this, f)), s.unshift(f)
						}
						t.data("counterup-nums", s), t.text(o.beginAt);
						t.data("counterup-func", function() {
							t.data("counterup-nums") ? (t.html(t.data("counterup-nums").shift()), t.data("counterup-nums").length ? setTimeout(t.data("counterup-func"), o.delay) : (t.data("counterup-nums", null), t.data("counterup-func", null), n.callback.call(this))) : n.callback.call(this)
						}), setTimeout(t.data("counterup-func"), o.delay)
					}(), this.destroy()
				}, {
					offset: o.offset + "%",
					context: o.context
				})
			})
		}
	}(jQuery),
	function() {
		function e() {}

		function t(e, t) {
			for (var i = e.length; i--;)
				if (e[i].listener === t) return i;
			return -1
		}

		function i(e) {
			return function() {
				return this[e].apply(this, arguments)
			}
		}
		var n = e.prototype,
			o = this,
			s = o.EventEmitter;
		n.getListeners = function(e) {
			var t, i, n = this._getEvents();
			if ("object" == typeof e)
				for (i in t = {}, n) n.hasOwnProperty(i) && e.test(i) && (t[i] = n[i]);
			else t = n[e] || (n[e] = []);
			return t
		}, n.flattenListeners = function(e) {
			var t, i = [];
			for (t = 0; t < e.length; t += 1) i.push(e[t].listener);
			return i
		}, n.getListenersAsObject = function(e) {
			var t, i = this.getListeners(e);
			return i instanceof Array && ((t = {})[e] = i), t || i
		}, n.addListener = function(e, i) {
			var n, o = this.getListenersAsObject(e),
				s = "object" == typeof i;
			for (n in o) o.hasOwnProperty(n) && -1 === t(o[n], i) && o[n].push(s ? i : {
				listener: i,
				once: !1
			});
			return this
		}, n.on = i("addListener"), n.addOnceListener = function(e, t) {
			return this.addListener(e, {
				listener: t,
				once: !0
			})
		}, n.once = i("addOnceListener"), n.defineEvent = function(e) {
			return this.getListeners(e), this
		}, n.defineEvents = function(e) {
			for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
			return this
		}, n.removeListener = function(e, i) {
			var n, o, s = this.getListenersAsObject(e);
			for (o in s) s.hasOwnProperty(o) && (-1 !== (n = t(s[o], i)) && s[o].splice(n, 1));
			return this
		}, n.off = i("removeListener"), n.addListeners = function(e, t) {
			return this.manipulateListeners(!1, e, t)
		}, n.removeListeners = function(e, t) {
			return this.manipulateListeners(!0, e, t)
		}, n.manipulateListeners = function(e, t, i) {
			var n, o, s = e ? this.removeListener : this.addListener,
				r = e ? this.removeListeners : this.addListeners;
			if ("object" != typeof t || t instanceof RegExp)
				for (n = i.length; n--;) s.call(this, t, i[n]);
			else
				for (n in t) t.hasOwnProperty(n) && (o = t[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
			return this
		}, n.removeEvent = function(e) {
			var t, i = typeof e,
				n = this._getEvents();
			if ("string" === i) delete n[e];
			else if ("object" === i)
				for (t in n) n.hasOwnProperty(t) && e.test(t) && delete n[t];
			else delete this._events;
			return this
		}, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(e, t) {
			var i, n, o, s = this.getListenersAsObject(e);
			for (o in s)
				if (s.hasOwnProperty(o))
					for (n = s[o].length; n--;) !0 === (i = s[o][n]).once && this.removeListener(e, i.listener), i.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, i.listener);
			return this
		}, n.trigger = i("emitEvent"), n.emit = function(e) {
			var t = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(e, t)
		}, n.setOnceReturnValue = function(e) {
			return this._onceReturnValue = e, this
		}, n._getOnceReturnValue = function() {
			return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
		}, n._getEvents = function() {
			return this._events || (this._events = {})
		}, e.noConflict = function() {
			return o.EventEmitter = s, e
		}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
			return e
		}) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
	}.call(this),
	function(e) {
		function t(t) {
			var i = e.event;
			return i.target = i.target || i.srcElement || t, i
		}
		var i = document.documentElement,
			n = function() {};
		i.addEventListener ? n = function(e, t, i) {
			e.addEventListener(t, i, !1)
		} : i.attachEvent && (n = function(e, i, n) {
			e[i + n] = n.handleEvent ? function() {
				var i = t(e);
				n.handleEvent.call(n, i)
			} : function() {
				var i = t(e);
				n.call(e, i)
			}, e.attachEvent("on" + i, e[i + n])
		});
		var o = function() {};
		i.removeEventListener ? o = function(e, t, i) {
			e.removeEventListener(t, i, !1)
		} : i.detachEvent && (o = function(e, t, i) {
			e.detachEvent("on" + t, e[t + i]);
			try {
				delete e[t + i]
			} catch (n) {
				e[t + i] = void 0
			}
		});
		var s = {
			bind: n,
			unbind: o
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
	}(this),
	function(e, t) {
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
			return t(e, i, n)
		}) : "object" == typeof exports ? module.exports = t(e, require("eventEmitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
	}(this, function(e, t, i) {
		function n(e, t) {
			for (var i in t) e[i] = t[i];
			return e
		}

		function o(e) {
			var t = [];
			if (function(e) {
					return "[object Array]" === d.call(e)
				}(e)) t = e;
			else if ("number" == typeof e.length)
				for (var i = 0, n = e.length; n > i; i++) t.push(e[i]);
			else t.push(e);
			return t
		}

		function s(e, t, i) {
			if (!(this instanceof s)) return new s(e, t);
			"string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = n({}, this.options), "function" == typeof t ? i = t : n(this.options, t), i && this.on("always", i), this.getImages(), l && (this.jqDeferred = new l.Deferred);
			var r = this;
			setTimeout(function() {
				r.check()
			})
		}

		function r(e) {
			this.img = e
		}

		function a(e) {
			this.src = e, h[e] = this
		}
		var l = e.jQuery,
			u = e.console,
			c = void 0 !== u,
			d = Object.prototype.toString;
		s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
			this.images = [];
			for (var e = 0, t = this.elements.length; t > e; e++) {
				var i = this.elements[e];
				"IMG" === i.nodeName && this.addImage(i);
				for (var n = i.querySelectorAll("img"), o = 0, s = n.length; s > o; o++) {
					var r = n[o];
					this.addImage(r)
				}
			}
		}, s.prototype.addImage = function(e) {
			var t = new r(e);
			this.images.push(t)
		}, s.prototype.check = function() {
			function e(e, o) {
				return t.options.debug && c && u.log("confirm", e, o), t.progress(e), ++i === n && t.complete(), !0
			}
			var t = this,
				i = 0,
				n = this.images.length;
			if (this.hasAnyBroken = !1, n)
				for (var o = 0; n > o; o++) {
					var s = this.images[o];
					s.on("confirm", e), s.check()
				} else this.complete()
		}, s.prototype.progress = function(e) {
			this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
			var t = this;
			setTimeout(function() {
				t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
			})
		}, s.prototype.complete = function() {
			var e = this.hasAnyBroken ? "fail" : "done";
			this.isComplete = !0;
			var t = this;
			setTimeout(function() {
				if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
					var i = t.hasAnyBroken ? "reject" : "resolve";
					t.jqDeferred[i](t)
				}
			})
		}, l && (l.fn.imagesLoaded = function(e, t) {
			return new s(this, e, t).jqDeferred.promise(l(this))
		}), r.prototype = new t, r.prototype.check = function() {
			var e = h[this.img.src] || new a(this.img.src);
			if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
			else if (this.img.complete && void 0 !== this.img.naturalWidth) this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
			else {
				var t = this;
				e.on("confirm", function(e, i) {
					return t.confirm(e.isLoaded, i), !0
				}), e.check()
			}
		}, r.prototype.confirm = function(e, t) {
			this.isLoaded = e, this.emit("confirm", this, t)
		};
		var h = {};
		return a.prototype = new t, a.prototype.check = function() {
			if (!this.isChecked) {
				var e = new Image;
				i.bind(e, "load", this), i.bind(e, "error", this), e.src = this.src, this.isChecked = !0
			}
		}, a.prototype.handleEvent = function(e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, a.prototype.onload = function(e) {
			this.confirm(!0, "onload"), this.unbindProxyEvents(e)
		}, a.prototype.onerror = function(e) {
			this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
		}, a.prototype.confirm = function(e, t) {
			this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
		}, a.prototype.unbindProxyEvents = function(e) {
			i.unbind(e.target, "load", this), i.unbind(e.target, "error", this)
		}, s
	}),
	function(e) {
		function t() {}

		function i(e) {
			function i(t) {
				t.prototype.option || (t.prototype.option = function(t) {
					e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
				})
			}

			function o(t, i) {
				e.fn[t] = function(o) {
					if ("string" == typeof o) {
						for (var r = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
							var u = this[a],
								c = e.data(u, t);
							if (c)
								if (e.isFunction(c[o]) && "_" !== o.charAt(0)) {
									var d = c[o].apply(c, r);
									if (void 0 !== d) return d
								} else s("no such method '" + o + "' for " + t + " instance");
							else s("cannot call methods on " + t + " prior to initialization; attempted to call '" + o + "'")
						}
						return this
					}
					return this.each(function() {
						var n = e.data(this, t);
						n ? (n.option(o), n._init()) : (n = new i(this, o), e.data(this, t, n))
					})
				}
			}
			if (e) {
				var s = "undefined" == typeof console ? t : function(e) {
					console.error(e)
				};
				return e.bridget = function(e, t) {
					i(t), o(e, t)
				}, e.bridget
			}
		}
		var n = Array.prototype.slice;
		"function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(e.jQuery)
	}(window),
	function(e) {
		function t(t) {
			var i = e.event;
			return i.target = i.target || i.srcElement || t, i
		}
		var i = document.documentElement,
			n = function() {};
		i.addEventListener ? n = function(e, t, i) {
			e.addEventListener(t, i, !1)
		} : i.attachEvent && (n = function(e, i, n) {
			e[i + n] = n.handleEvent ? function() {
				var i = t(e);
				n.handleEvent.call(n, i)
			} : function() {
				var i = t(e);
				n.call(e, i)
			}, e.attachEvent("on" + i, e[i + n])
		});
		var o = function() {};
		i.removeEventListener ? o = function(e, t, i) {
			e.removeEventListener(t, i, !1)
		} : i.detachEvent && (o = function(e, t, i) {
			e.detachEvent("on" + t, e[t + i]);
			try {
				delete e[t + i]
			} catch (n) {
				e[t + i] = void 0
			}
		});
		var s = {
			bind: n,
			unbind: o
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : e.eventie = s
	}(this),
	function(e) {
		function t(e) {
			"function" == typeof e && (t.isReady ? e() : s.push(e))
		}

		function i(e) {
			var i = "readystatechange" === e.type && "complete" !== o.readyState;
			if (!t.isReady && !i) {
				t.isReady = !0;
				for (var n = 0, r = s.length; r > n; n++) {
					(0, s[n])()
				}
			}
		}

		function n(n) {
			return n.bind(o, "DOMContentLoaded", i), n.bind(o, "readystatechange", i), n.bind(e, "load", i), t
		}
		var o = e.document,
			s = [];
		t.isReady = !1, "function" == typeof define && define.amd ? (t.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], n)) : e.docReady = n(e.eventie)
	}(this),
	function() {
		function e() {}

		function t(e, t) {
			for (var i = e.length; i--;)
				if (e[i].listener === t) return i;
			return -1
		}

		function i(e) {
			return function() {
				return this[e].apply(this, arguments)
			}
		}
		var n = e.prototype,
			o = this,
			s = o.EventEmitter;
		n.getListeners = function(e) {
			var t, i, n = this._getEvents();
			if (e instanceof RegExp)
				for (i in t = {}, n) n.hasOwnProperty(i) && e.test(i) && (t[i] = n[i]);
			else t = n[e] || (n[e] = []);
			return t
		}, n.flattenListeners = function(e) {
			var t, i = [];
			for (t = 0; t < e.length; t += 1) i.push(e[t].listener);
			return i
		}, n.getListenersAsObject = function(e) {
			var t, i = this.getListeners(e);
			return i instanceof Array && ((t = {})[e] = i), t || i
		}, n.addListener = function(e, i) {
			var n, o = this.getListenersAsObject(e),
				s = "object" == typeof i;
			for (n in o) o.hasOwnProperty(n) && -1 === t(o[n], i) && o[n].push(s ? i : {
				listener: i,
				once: !1
			});
			return this
		}, n.on = i("addListener"), n.addOnceListener = function(e, t) {
			return this.addListener(e, {
				listener: t,
				once: !0
			})
		}, n.once = i("addOnceListener"), n.defineEvent = function(e) {
			return this.getListeners(e), this
		}, n.defineEvents = function(e) {
			for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
			return this
		}, n.removeListener = function(e, i) {
			var n, o, s = this.getListenersAsObject(e);
			for (o in s) s.hasOwnProperty(o) && (-1 !== (n = t(s[o], i)) && s[o].splice(n, 1));
			return this
		}, n.off = i("removeListener"), n.addListeners = function(e, t) {
			return this.manipulateListeners(!1, e, t)
		}, n.removeListeners = function(e, t) {
			return this.manipulateListeners(!0, e, t)
		}, n.manipulateListeners = function(e, t, i) {
			var n, o, s = e ? this.removeListener : this.addListener,
				r = e ? this.removeListeners : this.addListeners;
			if ("object" != typeof t || t instanceof RegExp)
				for (n = i.length; n--;) s.call(this, t, i[n]);
			else
				for (n in t) t.hasOwnProperty(n) && (o = t[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
			return this
		}, n.removeEvent = function(e) {
			var t, i = typeof e,
				n = this._getEvents();
			if ("string" === i) delete n[e];
			else if (e instanceof RegExp)
				for (t in n) n.hasOwnProperty(t) && e.test(t) && delete n[t];
			else delete this._events;
			return this
		}, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(e, t) {
			var i, n, o, s = this.getListenersAsObject(e);
			for (o in s)
				if (s.hasOwnProperty(o))
					for (n = s[o].length; n--;) !0 === (i = s[o][n]).once && this.removeListener(e, i.listener), i.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, i.listener);
			return this
		}, n.trigger = i("emitEvent"), n.emit = function(e) {
			var t = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(e, t)
		}, n.setOnceReturnValue = function(e) {
			return this._onceReturnValue = e, this
		}, n._getOnceReturnValue = function() {
			return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
		}, n._getEvents = function() {
			return this._events || (this._events = {})
		}, e.noConflict = function() {
			return o.EventEmitter = s, e
		}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
			return e
		}) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
	}.call(this),
	function(e) {
		function t(e) {
			if (e) {
				if ("string" == typeof n[e]) return e;
				e = e.charAt(0).toUpperCase() + e.slice(1);
				for (var t, o = 0, s = i.length; s > o; o++)
					if (t = i[o] + e, "string" == typeof n[t]) return t
			}
		}
		var i = "Winkit Moz ms Ms O".split(" "),
			n = document.documentElement.style;
		"function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
			return t
		}) : "object" == typeof exports ? module.exports = t : e.getStyleProperty = t
	}(window),
	function(e, t) {
		function i(e) {
			var t = parseFloat(e);
			return -1 === e.indexOf("%") && !isNaN(t) && t
		}

		function n(e) {
			function t(e, t) {
				if (o || -1 === t.indexOf("%")) return t;
				var i = e.style,
					n = i.left,
					s = e.runtimeStyle,
					r = s && s.left;
				return r && (s.left = e.currentStyle.left), i.left = t, t = i.pixelLeft, i.left = n, r && (s.left = r), t
			}
			var n, a = e("boxSizing");
			return function() {
					if (a) {
						var e = document.createElement("div");
						e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[a] = "border-box";
						var t = document.body || document.documentElement;
						t.appendChild(e);
						var o = s(e);
						n = 200 === i(o.width), t.removeChild(e)
					}
				}(),
				function(e) {
					if ("string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
						var o = s(e);
						if ("none" === o.display) return function() {
							for (var e = {
									width: 0,
									height: 0,
									innerWidth: 0,
									innerHeight: 0,
									outerWidth: 0,
									outerHeight: 0
								}, t = 0, i = r.length; i > t; t++) e[r[t]] = 0;
							return e
						}();
						var l = {};
						l.width = e.offsetWidth, l.height = e.offsetHeight;
						for (var u = l.isBorderBox = !(!a || !o[a] || "border-box" !== o[a]), c = 0, d = r.length; d > c; c++) {
							var h = r[c],
								p = o[h];
							p = t(e, p);
							var f = parseFloat(p);
							l[h] = isNaN(f) ? 0 : f
						}
						var m = l.paddingLeft + l.paddingRight,
							g = l.paddingTop + l.paddingBottom,
							v = l.marginLeft + l.marginRight,
							y = l.marginTop + l.marginBottom,
							b = l.borderLeftWidth + l.borderRightWidth,
							w = l.borderTopWidth + l.borderBottomWidth,
							_ = u && n,
							x = i(o.width);
						!1 !== x && (l.width = x + (_ ? 0 : m + b));
						var C = i(o.height);
						return !1 !== C && (l.height = C + (_ ? 0 : g + w)), l.innerWidth = l.width - (m + b), l.innerHeight = l.height - (g + w), l.outerWidth = l.width + v, l.outerHeight = l.height + y, l
					}
				}
		}
		var o = e.getComputedStyle,
			s = o ? function(e) {
				return o(e, null)
			} : function(e) {
				return e.currentStyle
			},
			r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
		"function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("get-style-property")) : e.getSize = n(e.getStyleProperty)
	}(window),
	function(e, t) {
		function i(e, t) {
			return e[s](t)
		}

		function n(e) {
			e.parentNode || document.createDocumentFragment().appendChild(e)
		}
		var o, s = function() {
			if (t.matchesSelector) return "matchesSelector";
			for (var e = ["Winkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
				var o = e[i] + "MatchesSelector";
				if (t[o]) return o
			}
		}();
		if (s) {
			var r = i(document.createElement("div"), "div");
			o = r ? i : function(e, t) {
				return n(e), i(e, t)
			}
		} else o = function(e, t) {
			n(e);
			for (var i = e.parentNode.querySelectorAll(t), o = 0, s = i.length; s > o; o++)
				if (i[o] === e) return !0;
			return !1
		};
		"function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
			return o
		}) : window.matchesSelector = o
	}(0, Element.prototype),
	function(e) {
		function t(e, t, i) {
			function o(e, t) {
				e && (this.element = e, this.layout = t, this.position = {
					x: 0,
					y: 0
				}, this._create())
			}
			var s = i("transition"),
				r = i("transform"),
				a = s && r,
				l = !!i("perspective"),
				u = {
					WinkitTransition: "WinkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "otransitionend",
					transition: "transitionend"
				} [s],
				c = ["transform", "transition", "transitionDuration", "transitionProperty"],
				d = function() {
					for (var e = {}, t = 0, n = c.length; n > t; t++) {
						var o = c[t],
							s = i(o);
						s && s !== o && (e[o] = s)
					}
					return e
				}();
			(function(e, t) {
				for (var i in t) e[i] = t[i]
			})(o.prototype, e.prototype), o.prototype._create = function() {
				this._transn = {
					ingProperties: {},
					clean: {},
					onEnd: {}
				}, this.css({
					position: "absolute"
				})
			}, o.prototype.handleEvent = function(e) {
				var t = "on" + e.type;
				this[t] && this[t](e)
			}, o.prototype.getSize = function() {
				this.size = t(this.element)
			}, o.prototype.css = function(e) {
				var t = this.element.style;
				for (var i in e) {
					t[d[i] || i] = e[i]
				}
			}, o.prototype.getPosition = function() {
				var e = n(this.element),
					t = this.layout.options,
					i = t.isOriginLeft,
					o = t.isOriginTop,
					s = parseInt(e[i ? "left" : "right"], 10),
					r = parseInt(e[o ? "top" : "bottom"], 10);
				s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r;
				var a = this.layout.size;
				s -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
			}, o.prototype.layoutPosition = function() {
				var e = this.layout.size,
					t = this.layout.options,
					i = {};
				t.isOriginLeft ? (i.left = this.position.x + e.paddingLeft + "px", i.right = "") : (i.right = this.position.x + e.paddingRight + "px", i.left = ""), t.isOriginTop ? (i.top = this.position.y + e.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + e.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
			};
			var h = l ? function(e, t) {
				return "translate3d(" + e + "px, " + t + "px, 0)"
			} : function(e, t) {
				return "translate(" + e + "px, " + t + "px)"
			};
			o.prototype._transitionTo = function(e, t) {
				this.getPosition();
				var i = this.position.x,
					n = this.position.y,
					o = parseInt(e, 10),
					s = parseInt(t, 10),
					r = o === this.position.x && s === this.position.y;
				if (this.setPosition(e, t), !r || this.isTransitioning) {
					var a = e - i,
						l = t - n,
						u = {},
						c = this.layout.options;
					a = c.isOriginLeft ? a : -a, l = c.isOriginTop ? l : -l, u.transform = h(a, l), this.transition({
						to: u,
						onTransitionEnd: {
							transform: this.layoutPosition
						},
						isConstruction: !0
					})
				} else this.layoutPosition()
			}, o.prototype.goTo = function(e, t) {
				this.setPosition(e, t), this.layoutPosition()
			}, o.prototype.moveTo = a ? o.prototype._transitionTo : o.prototype.goTo, o.prototype.setPosition = function(e, t) {
				this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
			}, o.prototype._nonTransition = function(e) {
				for (var t in this.css(e.to), e.isConstruction && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
			}, o.prototype._transition = function(e) {
				if (parseFloat(this.layout.options.transitionDuration)) {
					var t = this._transn;
					for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
					for (i in e.to) t.ingProperties[i] = !0, e.isConstruction && (t.clean[i] = !0);
					if (e.from) {
						this.css(e.from);
						this.element.offsetHeight;
						null
					}
					this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
				} else this._nonTransition(e)
			};
			var p = r && function(e) {
				return e.replace(/([A-Z])/g, function(e) {
					return "-" + e.toLowerCase()
				})
			}(r) + ",opacity";
			o.prototype.enableTransition = function() {
				this.isTransitioning || (this.css({
					transitionProperty: p,
					transitionDuration: this.layout.options.transitionDuration
				}), this.element.addEventListener(u, this, !1))
			}, o.prototype.transition = o.prototype[s ? "_transition" : "_nonTransition"], o.prototype.onWinkitTransitionEnd = function(e) {
				this.ontransitionend(e)
			}, o.prototype.onotransitionend = function(e) {
				this.ontransitionend(e)
			};
			var f = {
				"-webkit-transform": "transform",
				"-moz-transform": "transform",
				"-o-transform": "transform"
			};
			o.prototype.ontransitionend = function(e) {
				if (e.target === this.element) {
					var t = this._transn,
						i = f[e.propertyName] || e.propertyName;
					if (delete t.ingProperties[i], function(e) {
							for (var t in e) return !1;
							return !0
						}(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd) t.onEnd[i].call(this), delete t.onEnd[i];
					this.emitEvent("transitionEnd", [this])
				}
			}, o.prototype.disableTransition = function() {
				this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
			}, o.prototype._removeStyles = function(e) {
				var t = {};
				for (var i in e) t[i] = "";
				this.css(t)
			};
			var m = {
				transitionProperty: "",
				transitionDuration: ""
			};
			return o.prototype.removeTransitionStyles = function() {
				this.css(m)
			}, o.prototype.removeElem = function() {
				this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
			}, o.prototype.remove = function() {
				if (s && parseFloat(this.layout.options.transitionDuration)) {
					var e = this;
					this.on("transitionEnd", function() {
						return e.removeElem(), !0
					}), this.hide()
				} else this.removeElem()
			}, o.prototype.reveal = function() {
				delete this.isHidden, this.css({
					display: ""
				});
				var e = this.layout.options;
				this.transition({
					from: e.hiddenStyle,
					to: e.visibleStyle,
					isConstruction: !0
				})
			}, o.prototype.hide = function() {
				this.isHidden = !0, this.css({
					display: ""
				});
				var e = this.layout.options;
				this.transition({
					from: e.visibleStyle,
					to: e.hiddenStyle,
					isConstruction: !0,
					onTransitionEnd: {
						opacity: function() {
							this.isHidden && this.css({
								display: "none"
							})
						}
					}
				})
			}, o.prototype.destroy = function() {
				this.css({
					position: "",
					left: "",
					right: "",
					top: "",
					bottom: "",
					transition: "",
					transform: ""
				})
			}, o
		}
		var i = document.defaultView,
			n = i && i.getComputedStyle ? function(e) {
				return i.getComputedStyle(e, null)
			} : function(e) {
				return e.currentStyle
			};
		"function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], t) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EventEmitter, e.getSize, e.getStyleProperty))
	}(window),
	function(e) {
		function t(e, t) {
			for (var i in t) e[i] = t[i];
			return e
		}

		function i(e) {
			var t = [];
			if (function(e) {
					return "[object Array]" === u.call(e)
				}(e)) t = e;
			else if (e && "number" == typeof e.length)
				for (var i = 0, n = e.length; n > i; i++) t.push(e[i]);
			else t.push(e);
			return t
		}

		function n(e, t) {
			var i = d(t, e); - 1 !== i && t.splice(i, 1)
		}

		function o(o, u, d, h, p, f) {
			function m(e, i) {
				if ("string" == typeof e && (e = s.querySelector(e)), e && c(e)) {
					this.element = e, this.options = t({}, this.options), this.option(i);
					var n = ++g;
					this.element.outlayerGUID = n, v[n] = this, this._create(), this.options.isInitLayout && this.layout()
				} else r && r.error("Bad " + this.constructor.namespace + " element: " + e)
			}
			var g = 0,
				v = {};
			return m.namespace = "outlayer", m.Item = f, m.prototype.options = {
				containerStyle: {
					position: "relative"
				},
				isInitLayout: !0,
				isOriginLeft: !0,
				isOriginTop: !0,
				isResizeBound: !0,
				transitionDuration: "0.4s",
				hiddenStyle: {
					opacity: 0,
					transform: "scale(0.001)"
				},
				visibleStyle: {
					opacity: 1,
					transform: "scale(1)"
				}
			}, t(m.prototype, d.prototype), m.prototype.option = function(e) {
				t(this.options, e)
			}, m.prototype._create = function() {
				this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), t(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
			}, m.prototype.reloadItems = function() {
				this.items = this._itemize(this.element.children)
			}, m.prototype._itemize = function(e) {
				for (var t = this._filterFindItemElements(e), i = this.constructor.Item, n = [], o = 0, s = t.length; s > o; o++) {
					var r = new i(t[o], this);
					n.push(r)
				}
				return n
			}, m.prototype._filterFindItemElements = function(e) {
				e = i(e);
				for (var t = this.options.itemSelector, n = [], o = 0, s = e.length; s > o; o++) {
					var r = e[o];
					if (c(r))
						if (t) {
							p(r, t) && n.push(r);
							for (var a = r.querySelectorAll(t), l = 0, u = a.length; u > l; l++) n.push(a[l])
						} else n.push(r)
				}
				return n
			}, m.prototype.getAllItems = function() {
				for (var e = [], t = 0, i = this.items.length; i > t; t++) e.push(this.items[t]);
				return e
			}, m.prototype.getItemElements = function() {
				for (var e = [], t = 0, i = this.items.length; i > t; t++) e.push(this.items[t].element);
				return e
			}, m.prototype.layout = function() {
				this._resetLayout(), this._manageStamps();
				var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
				this.layoutItems(this.items, e), this._isLayoutInited = !0
			}, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
				this.getSize()
			}, m.prototype.getSize = function() {
				this.size = h(this.element)
			}, m.prototype._getMeasurement = function(e, t) {
				var i, n = this.options[e];
				n ? ("string" == typeof n ? i = this.element.querySelector(n) : c(n) && (i = n), this[e] = i ? h(i)[t] : n) : this[e] = 0
			}, m.prototype.layoutItems = function(e, t) {
				e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
			}, m.prototype._getItemsForLayout = function(e) {
				for (var t = [], i = 0, n = e.length; n > i; i++) {
					var o = e[i];
					o.isIgnored || t.push(o)
				}
				return t
			}, m.prototype._layoutItems = function(e, t) {
				function i() {
					n.emitEvent("layoutComplete", [n, e])
				}
				var n = this;
				if (e && e.length) {
					this._itemsOn(e, "layout", i);
					for (var o = [], s = 0, r = e.length; r > s; s++) {
						var a = e[s],
							l = this._getItemLayoutPosition(a);
						l.item = a, l.isInstant = t || a.isLayoutInstant, o.push(l)
					}
					this._processLayoutQueue(o)
				} else i()
			}, m.prototype._getItemLayoutPosition = function() {
				return {
					x: 0,
					y: 0
				}
			}, m.prototype._processLayoutQueue = function(e) {
				for (var t = 0, i = e.length; i > t; t++) {
					var n = e[t];
					this._positionItem(n.item, n.x, n.y, n.isInstant)
				}
			}, m.prototype._positionItem = function(e, t, i, n) {
				n ? e.goTo(t, i) : e.moveTo(t, i)
			}, m.prototype._postLayout = function() {
				var e = this._getContainerSize();
				e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
			}, m.prototype._getContainerSize = l, m.prototype._setContainerMeasure = function(e, t) {
				if (void 0 !== e) {
					var i = this.size;
					i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
				}
			}, m.prototype._itemsOn = function(e, t, i) {
				function n() {
					return ++o === s && i.call(r), !0
				}
				for (var o = 0, s = e.length, r = this, a = 0, l = e.length; l > a; a++) {
					e[a].on(t, n)
				}
			}, m.prototype.ignore = function(e) {
				var t = this.getItem(e);
				t && (t.isIgnored = !0)
			}, m.prototype.unignore = function(e) {
				var t = this.getItem(e);
				t && delete t.isIgnored
			}, m.prototype.stamp = function(e) {
				if (e = this._find(e)) {
					this.stamps = this.stamps.concat(e);
					for (var t = 0, i = e.length; i > t; t++) {
						var n = e[t];
						this.ignore(n)
					}
				}
			}, m.prototype.unstamp = function(e) {
				if (e = this._find(e))
					for (var t = 0, i = e.length; i > t; t++) {
						var o = e[t];
						n(o, this.stamps), this.unignore(o)
					}
			}, m.prototype._find = function(e) {
				return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = i(e)) : void 0
			}, m.prototype._manageStamps = function() {
				if (this.stamps && this.stamps.length) {
					this._getBoundingRect();
					for (var e = 0, t = this.stamps.length; t > e; e++) {
						var i = this.stamps[e];
						this._manageStamp(i)
					}
				}
			}, m.prototype._getBoundingRect = function() {
				var e = this.element.getBoundingClientRect(),
					t = this.size;
				this._boundingRect = {
					left: e.left + t.paddingLeft + t.borderLeftWidth,
					top: e.top + t.paddingTop + t.borderTopWidth,
					right: e.right - (t.paddingRight + t.borderRightWidth),
					bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
				}
			}, m.prototype._manageStamp = l, m.prototype._getElementOffset = function(e) {
				var t = e.getBoundingClientRect(),
					i = this._boundingRect,
					n = h(e);
				return {
					left: t.left - i.left - n.marginLeft,
					top: t.top - i.top - n.marginTop,
					right: i.right - t.right - n.marginRight,
					bottom: i.bottom - t.bottom - n.marginBottom
				}
			}, m.prototype.handleEvent = function(e) {
				var t = "on" + e.type;
				this[t] && this[t](e)
			}, m.prototype.bindResize = function() {
				this.isResizeBound || (o.bind(e, "resize", this), this.isResizeBound = !0)
			}, m.prototype.unbindResize = function() {
				o.unbind(e, "resize", this), this.isResizeBound = !1
			}, m.prototype.onresize = function() {
				this.resizeTimeout && clearTimeout(this.resizeTimeout);
				var e = this;
				this.resizeTimeout = setTimeout(function() {
					e.resize(), delete e.resizeTimeout
				}, 100)
			}, m.prototype.resize = function() {
				var e = h(this.element);
				this.size && e && e.innerWidth === this.size.innerWidth || this.layout()
			}, m.prototype.addItems = function(e) {
				var t = this._itemize(e);
				return t.length && (this.items = this.items.concat(t)), t
			}, m.prototype.appended = function(e) {
				var t = this.addItems(e);
				t.length && (this.layoutItems(t, !0), this.reveal(t))
			}, m.prototype.prepended = function(e) {
				var t = this._itemize(e);
				if (t.length) {
					var i = this.items.slice(0);
					this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
				}
			}, m.prototype.reveal = function(e) {
				var t = e && e.length;
				if (t)
					for (var i = 0; t > i; i++) {
						e[i].reveal()
					}
			}, m.prototype.hide = function(e) {
				var t = e && e.length;
				if (t)
					for (var i = 0; t > i; i++) {
						e[i].hide()
					}
			}, m.prototype.getItem = function(e) {
				for (var t = 0, i = this.items.length; i > t; t++) {
					var n = this.items[t];
					if (n.element === e) return n
				}
			}, m.prototype.getItems = function(e) {
				if (e && e.length) {
					for (var t = [], i = 0, n = e.length; n > i; i++) {
						var o = e[i],
							s = this.getItem(o);
						s && t.push(s)
					}
					return t
				}
			}, m.prototype.remove = function(e) {
				e = i(e);
				var t = this.getItems(e);
				if (t && t.length) {
					this._itemsOn(t, "remove", function() {
						this.emitEvent("removeComplete", [this, t])
					});
					for (var o = 0, s = t.length; s > o; o++) {
						var r = t[o];
						r.remove(), n(r, this.items)
					}
				}
			}, m.prototype.destroy = function() {
				var e = this.element.style;
				e.height = "", e.position = "", e.width = "";
				for (var t = 0, i = this.items.length; i > t; t++) {
					this.items[t].destroy()
				}
				this.unbindResize(), delete this.element.outlayerGUID, a && a.removeData(this.element, this.constructor.namespace)
			}, m.data = function(e) {
				var t = e && e.outlayerGUID;
				return t && v[t]
			}, m.create = function(e, i) {
				function n() {
					m.apply(this, arguments)
				}
				return Object.create ? n.prototype = Object.create(m.prototype) : t(n.prototype, m.prototype), n.prototype.constructor = n,
					function(e, i) {
						e.prototype[i] = t({}, m.prototype[i])
					}(n, "options"), t(n.prototype.options, i), n.namespace = e, n.data = m.data, n.Item = function() {
						f.apply(this, arguments)
					}, n.Item.prototype = new f, u(function() {
						for (var t = function(e) {
								return e.replace(/(.)([A-Z])/g, function(e, t, i) {
									return t + "-" + i
								}).toLowerCase()
							}(e), i = s.querySelectorAll(".js-" + t), o = "data-" + t + "-options", l = 0, u = i.length; u > l; l++) {
							var c, d = i[l],
								h = d.getAttribute(o);
							try {
								c = h && JSON.parse(h)
							} catch (e) {
								r && r.error("Error parsing " + o + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + e);
								continue
							}
							var p = new n(d, c);
							a && a.data(d, e, p)
						}
					}), a && a.bridget && a.bridget(e, n), n
			}, m.Item = f, m
		}
		var s = e.document,
			r = e.console,
			a = e.jQuery,
			l = function() {},
			u = Object.prototype.toString,
			c = "object" == typeof HTMLElement ? function(e) {
				return e instanceof HTMLElement
			} : function(e) {
				return e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
			},
			d = Array.prototype.indexOf ? function(e, t) {
				return e.indexOf(t)
			} : function(e, t) {
				for (var i = 0, n = e.length; n > i; i++)
					if (e[i] === t) return i;
				return -1
			};
		"function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], o) : e.Outlayer = o(e.eventie, e.docReady, e.EventEmitter, e.getSize, e.matchesSelector, e.Outlayer.Item)
	}(window),
	function(e) {
		function t(e, t) {
			var n = e.create("masonry");
			return n.prototype._resetLayout = function() {
				this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
				var e = this.cols;
				for (this.colYs = []; e--;) this.colYs.push(0);
				this.maxY = 0
			}, n.prototype.measureColumns = function() {
				if (this.getContainerWidth(), !this.columnWidth) {
					for (var e, i = 0, n = this.items.length; n > i; i++)
						if (!this.items[i].isIgnored) {
							e = this.items[i];
							break
						} e || (e = this.items[0]);
					var o = e && e.element;
					this.columnWidth = o && t(o).outerWidth || this.containerWidth
				}
				this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
			}, n.prototype.getContainerWidth = function() {
				var e = this.options.isFitWidth ? this.element.parentNode : this.element,
					i = t(e);
				this.containerWidth = i && i.innerWidth
			}, n.prototype._getItemLayoutPosition = function(e) {
				e.getSize();
				var t = e.size.outerWidth % this.columnWidth,
					n = Math[t && 1 > t ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
				n = Math.min(n, this.cols);
				for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = i(o, s), a = {
						x: this.columnWidth * r,
						y: s
					}, l = s + e.size.outerHeight, u = this.cols + 1 - o.length, c = 0; u > c; c++) this.colYs[r + c] = l;
				return a
			}, n.prototype._getColGroup = function(e) {
				if (2 > e) return this.colYs;
				for (var t = [], i = this.cols + 1 - e, n = 0; i > n; n++) {
					var o = this.colYs.slice(n, n + e);
					t[n] = Math.max.apply(Math, o)
				}
				return t
			}, n.prototype._manageStamp = function(e) {
				var i = t(e),
					n = this._getElementOffset(e),
					o = this.options.isOriginLeft ? n.left : n.right,
					s = o + i.outerWidth,
					r = Math.floor(o / this.columnWidth);
				r = Math.max(0, r);
				var a = Math.floor(s / this.columnWidth);
				a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
				for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, u = r; a >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
			}, n.prototype._getContainerSize = function() {
				this.maxY = Math.max.apply(Math, this.colYs);
				var e = {
					height: this.maxY
				};
				return this.options.isFitWidth && (e.width = this._getContainerFitWidth()), e
			}, n.prototype._getContainerFitWidth = function() {
				for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
				return (this.cols - e) * this.columnWidth - this.gutter
			}, n.prototype.resize = function() {
				var e = this.containerWidth;
				this.getContainerWidth(), e !== this.containerWidth && this.layout()
			}, n
		}
		var i = Array.prototype.indexOf ? function(e, t) {
			return e.indexOf(t)
		} : function(e, t) {
			for (var i = 0, n = e.length; n > i; i++) {
				if (e[i] === t) return i
			}
			return -1
		};
		"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : e.Masonry = t(e.Outlayer, e.getSize)
	}(window),
	function(e) {
		"use strict";
		e.fn.masonryFilter = function(t) {
			var i = function(i) {
				var n = i.masonry("getAllItems"),
					o = [],
					s = [];
				e.each(n, function(i) {
						var r = n[i],
							a = e(r.element);
						t.filter && t.filter.call(a) ? r.isHidden && (r.isIgnored = !1, o.push(r)) : r.isHidden || (r.isIgnored = !0, s.push(r))
					}), i.masonry("hide", s), i.masonry("reveal", o),
					function(e) {
						setTimeout(function() {
							e.masonry("layout")
						}, 100)
					}(i)
			};
			return this.each(function() {
				var t = e(this);
				i(t)
			})
		}
	}(window.jQuery),
	function(e, t, i, n) {
		function o(t, i) {
			this.settings = null, this.options = e.extend({}, o.Defaults, i), this.$element = e(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
				time: null,
				target: null,
				pointer: null,
				stage: {
					start: null,
					current: null
				},
				direction: null
			}, this._states = {
				current: {},
				tags: {
					initializing: ["busy"],
					animating: ["busy"],
					dragging: ["interacting"]
				}
			}, e.each(["onResize", "onThrottledResize"], e.proxy(function(t, i) {
				this._handlers[i] = e.proxy(this[i], this)
			}, this)), e.each(o.Plugins, e.proxy(function(e, t) {
				this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
			}, this)), e.each(o.Workers, e.proxy(function(t, i) {
				this._pipe.push({
					filter: i.filter,
					run: e.proxy(i.run, this)
				})
			}, this)), this.setup(), this.initialize()
		}
		o.Defaults = {
			items: 3,
			loop: !1,
			center: !1,
			rewind: !1,
			mouseDrag: !0,
			touchDrag: !0,
			pullDrag: !0,
			freeDrag: !1,
			margin: 0,
			stagePadding: 0,
			merge: !1,
			mergeFit: !0,
			autoWidth: !1,
			startPosition: 0,
			rtl: !1,
			smartSpeed: 250,
			fluidSpeed: !1,
			dragEndSpeed: !1,
			responsive: {},
			responsiveRefreshRate: 200,
			responsiveBaseElement: t,
			fallbackEasing: "swing",
			info: !1,
			nestedItemSelector: !1,
			itemElement: "div",
			stageElement: "div",
			refreshClass: "owl-refresh",
			loadedClass: "owl-loaded",
			loadingClass: "owl-loading",
			rtlClass: "owl-rtl",
			responsiveClass: "owl-responsive",
			dragClass: "owl-drag",
			itemClass: "owl-item",
			stageClass: "owl-stage",
			stageOuterClass: "owl-stage-outer",
			grabClass: "owl-grab"
		}, o.Width = {
			Default: "default",
			Inner: "inner",
			Outer: "outer"
		}, o.Type = {
			Event: "event",
			State: "state"
		}, o.Plugins = {}, o.Workers = [{
			filter: ["width", "settings"],
			run: function() {
				this._width = this.$element.width()
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(e) {
				e.current = this._items && this._items[this.relative(this._current)]
			}
		}, {
			filter: ["items", "settings"],
			run: function() {
				this.$stage.children(".cloned").remove()
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(e) {
				var t = this.settings.margin || "",
					i = !this.settings.autoWidth,
					n = this.settings.rtl,
					o = {
						width: "auto",
						"margin-left": n ? t : "",
						"margin-right": n ? "" : t
					};
				!i && this.$stage.children().css(o), e.css = o
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(e) {
				var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
					i = null,
					n = this._items.length,
					o = !this.settings.autoWidth,
					s = [];
				for (e.items = {
						merge: !1,
						width: t
					}; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, e.items.merge = i > 1 || e.items.merge, s[n] = o ? t * i : this._items[n].width();
				this._widths = s
			}
		}, {
			filter: ["items", "settings"],
			run: function() {
				var t = [],
					i = this._items,
					n = this.settings,
					o = Math.max(2 * n.items, 4),
					s = 2 * Math.ceil(i.length / 2),
					r = n.loop && i.length ? n.rewind ? o : Math.max(o, s) : 0,
					a = "",
					l = "";
				for (r /= 2; r--;) t.push(this.normalize(t.length / 2, !0)), a += i[t[t.length - 1]][0].outerHTML, t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), l = i[t[t.length - 1]][0].outerHTML + l;
				this._clones = t, e(a).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage)
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function() {
				for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, i = -1, n = 0, o = 0, s = []; ++i < t;) n = s[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, s.push(n + o * e);
				this._coordinates = s
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function() {
				var e = this.settings.stagePadding,
					t = this._coordinates,
					i = {
						width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
						"padding-left": e || "",
						"padding-right": e || ""
					};
				this.$stage.css(i)
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(e) {
				var t = this._coordinates.length,
					i = !this.settings.autoWidth,
					n = this.$stage.children();
				if (i && e.items.merge)
					for (; t--;) e.css.width = this._widths[this.relative(t)], n.eq(t).css(e.css);
				else i && (e.css.width = e.items.width, n.css(e.css))
			}
		}, {
			filter: ["items"],
			run: function() {
				this._coordinates.length < 1 && this.$stage.removeAttr("style")
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(e) {
				e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
			}
		}, {
			filter: ["position"],
			run: function() {
				this.animate(this.coordinates(this._current))
			}
		}, {
			filter: ["width", "position", "items", "settings"],
			run: function() {
				var e, t, i, n, o = this.settings.rtl ? 1 : -1,
					s = 2 * this.settings.stagePadding,
					r = this.coordinates(this.current()) + s,
					a = r + this.width() * o,
					l = [];
				for (i = 0, n = this._coordinates.length; i < n; i++) e = this._coordinates[i - 1] || 0, t = Math.abs(this._coordinates[i]) + s * o, (this.op(e, "<=", r) && this.op(e, ">", a) || this.op(t, "<", r) && this.op(t, ">", a)) && l.push(i);
				this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
			}
		}], o.prototype.initialize = function() {
			var t, i, o;
			(this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, o = this.$element.children(i).width(), t.length && o <= 0 && this.preloadAutoWidthImages(t));
			this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
		}, o.prototype.setup = function() {
			var t = this.viewport(),
				i = this.options.responsive,
				n = -1,
				o = null;
			i ? (e.each(i, function(e) {
				e <= t && e > n && (n = Number(e))
			}), "function" == typeof(o = e.extend({}, this.options, i[n])).stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : o = e.extend({}, this.options), this.trigger("change", {
				property: {
					name: "settings",
					value: o
				}
			}), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
				property: {
					name: "settings",
					value: this.settings
				}
			})
		}, o.prototype.optionsLogic = function() {
			this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
		}, o.prototype.prepare = function(t) {
			var i = this.trigger("prepare", {
				content: t
			});
			return i.data || (i.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
				content: i.data
			}), i.data
		}, o.prototype.update = function() {
			for (var t = 0, i = this._pipe.length, n = e.proxy(function(e) {
					return this[e]
				}, this._invalidated), o = {}; t < i;)(this._invalidated.all || e.grep(this._pipe[t].filter, n).length > 0) && this._pipe[t].run(o), t++;
			this._invalidated = {}, !this.is("valid") && this.enter("valid")
		}, o.prototype.width = function(e) {
			switch (e = e || o.Width.Default) {
				case o.Width.Inner:
				case o.Width.Outer:
					return this._width;
				default:
					return this._width - 2 * this.settings.stagePadding + this.settings.margin
			}
		}, o.prototype.refresh = function() {
			this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
		}, o.prototype.onThrottledResize = function() {
			t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
		}, o.prototype.onResize = function() {
			return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
		}, o.prototype.registerEventHandlers = function() {
			e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(t, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
				return !1
			})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)))
		}, o.prototype.onDragStart = function(t) {
			var n = null;
			3 !== t.which && (e.support.transform ? n = {
				x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
				y: n[16 === n.length ? 13 : 5]
			} : (n = this.$stage.position(), n = {
				x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
				y: n.top
			}), this.is("animating") && (e.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(t.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(t), e(i).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(i).one("mousemove.owl.core touchmove.owl.core", e.proxy(function(t) {
				var n = this.difference(this._drag.pointer, this.pointer(t));
				e(i).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
			}, this)))
		}, o.prototype.onDragMove = function(e) {
			var t = null,
				i = null,
				n = null,
				o = this.difference(this._drag.pointer, this.pointer(e)),
				s = this.difference(this._drag.stage.start, o);
			this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - t, s.x = ((s.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, s.x = Math.max(Math.min(s.x, t + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
		}, o.prototype.onDragEnd = function(t) {
			var n = this.difference(this._drag.pointer, this.pointer(t)),
				o = this._drag.stage.current,
				s = n.x > 0 ^ this.settings.rtl ? "left" : "right";
			e(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== n.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
				return !1
			})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
		}, o.prototype.closest = function(t, i) {
			var n = -1,
				o = this.width(),
				s = this.coordinates();
			return this.settings.freeDrag || e.each(s, e.proxy(function(e, r) {
				return "left" === i && t > r - 30 && t < r + 30 ? n = e : "right" === i && t > r - o - 30 && t < r - o + 30 ? n = e + 1 : this.op(t, "<", r) && this.op(t, ">", s[e + 1] || r - o) && (n = "left" === i ? e + 1 : e), -1 === n
			}, this)), this.settings.loop || (this.op(t, ">", s[this.minimum()]) ? n = t = this.minimum() : this.op(t, "<", s[this.maximum()]) && (n = t = this.maximum())), n
		}, o.prototype.animate = function(t) {
			var i = this.speed() > 0;
			this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({
				transform: "translate3d(" + t + "px,0px,0px)",
				transition: this.speed() / 1e3 + "s"
			}) : i ? this.$stage.animate({
				left: t + "px"
			}, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({
				left: t + "px"
			})
		}, o.prototype.is = function(e) {
			return this._states.current[e] && this._states.current[e] > 0
		}, o.prototype.current = function(e) {
			if (e === n) return this._current;
			if (0 === this._items.length) return n;
			if (e = this.normalize(e), this._current !== e) {
				var t = this.trigger("change", {
					property: {
						name: "position",
						value: e
					}
				});
				t.data !== n && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
					property: {
						name: "position",
						value: this._current
					}
				})
			}
			return this._current
		}, o.prototype.invalidate = function(t) {
			return "string" === e.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, function(e, t) {
				return t
			})
		}, o.prototype.reset = function(e) {
			(e = this.normalize(e)) !== n && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
		}, o.prototype.normalize = function(e, t) {
			var i = this._items.length,
				o = t ? 0 : this._clones.length;
			return !this.isNumeric(e) || i < 1 ? e = n : (e < 0 || e >= i + o) && (e = ((e - o / 2) % i + i) % i + o / 2), e
		}, o.prototype.relative = function(e) {
			return e -= this._clones.length / 2, this.normalize(e, !0)
		}, o.prototype.maximum = function(e) {
			var t, i, n, o = this.settings,
				s = this._coordinates.length;
			if (o.loop) s = this._clones.length / 2 + this._items.length - 1;
			else if (o.autoWidth || o.merge) {
				for (t = this._items.length, i = this._items[--t].width(), n = this.$element.width(); t-- && !((i += this._items[t].width() + this.settings.margin) > n););
				s = t + 1
			} else s = o.center ? this._items.length - 1 : this._items.length - o.items;
			return e && (s -= this._clones.length / 2), Math.max(s, 0)
		}, o.prototype.minimum = function(e) {
			return e ? 0 : this._clones.length / 2
		}, o.prototype.items = function(e) {
			return e === n ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
		}, o.prototype.mergers = function(e) {
			return e === n ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
		}, o.prototype.clones = function(t) {
			var i = this._clones.length / 2,
				o = i + this._items.length,
				s = function(e) {
					return e % 2 == 0 ? o + e / 2 : i - (e + 1) / 2
				};
			return t === n ? e.map(this._clones, function(e, t) {
				return s(t)
			}) : e.map(this._clones, function(e, i) {
				return e === t ? s(i) : null
			})
		}, o.prototype.speed = function(e) {
			return e !== n && (this._speed = e), this._speed
		}, o.prototype.coordinates = function(t) {
			var i, o = 1,
				s = t - 1;
			return t === n ? e.map(this._coordinates, e.proxy(function(e, t) {
				return this.coordinates(t)
			}, this)) : (this.settings.center ? (this.settings.rtl && (o = -1, s = t + 1), i = this._coordinates[t], i += (this.width() - i + (this._coordinates[s] || 0)) / 2 * o) : i = this._coordinates[s] || 0, i = Math.ceil(i))
		}, o.prototype.duration = function(e, t, i) {
			return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(i || this.settings.smartSpeed)
		}, o.prototype.to = function(e, t) {
			var i = this.current(),
				n = null,
				o = e - this.relative(i),
				s = (o > 0) - (o < 0),
				r = this._items.length,
				a = this.minimum(),
				l = this.maximum();
			this.settings.loop ? (!this.settings.rewind && Math.abs(o) > r / 2 && (o += -1 * s * r), (n = (((e = i + o) - a) % r + r) % r + a) !== e && n - o <= l && n - o > 0 && (i = n - o, e = n, this.reset(i))) : this.settings.rewind ? e = (e % (l += 1) + l) % l : e = Math.max(a, Math.min(l, e)), this.speed(this.duration(i, e, t)), this.current(e), this.$element.is(":visible") && this.update()
		}, o.prototype.next = function(e) {
			e = e || !1, this.to(this.relative(this.current()) + 1, e)
		}, o.prototype.prev = function(e) {
			e = e || !1, this.to(this.relative(this.current()) - 1, e)
		}, o.prototype.onTransitionEnd = function(e) {
			if (e !== n && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
			this.leave("animating"), this.trigger("translated")
		}, o.prototype.viewport = function() {
			var n;
			return this.options.responsiveBaseElement !== t ? n = e(this.options.responsiveBaseElement).width() : t.innerWidth ? n = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
		}, o.prototype.replace = function(t) {
			this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
				return 1 === this.nodeType
			}).each(e.proxy(function(e, t) {
				t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
			}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
		}, o.prototype.add = function(t, i) {
			var o = this.relative(this._current);
			i = i === n ? this._items.length : this.normalize(i, !0), t = t instanceof jQuery ? t : e(t), this.trigger("add", {
				content: t,
				position: i
			}), t = this.prepare(t), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[i - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(t), this._items.splice(i, 0, t), this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
				content: t,
				position: i
			})
		}, o.prototype.remove = function(e) {
			(e = this.normalize(e, !0)) !== n && (this.trigger("remove", {
				content: this._items[e],
				position: e
			}), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
				content: null,
				position: e
			}))
		}, o.prototype.preloadAutoWidthImages = function(t) {
			t.each(e.proxy(function(t, i) {
				this.enter("pre-loading"), i = e(i), e(new Image).one("load", e.proxy(function(e) {
					i.attr("src", e.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
				}, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
			}, this))
		}, o.prototype.destroy = function() {
			for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(i).off(".owl.core"), !1 !== this.settings.responsive && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
			this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
		}, o.prototype.op = function(e, t, i) {
			var n = this.settings.rtl;
			switch (t) {
				case "<":
					return n ? e > i : e < i;
				case ">":
					return n ? e < i : e > i;
				case ">=":
					return n ? e <= i : e >= i;
				case "<=":
					return n ? e >= i : e <= i
			}
		}, o.prototype.on = function(e, t, i, n) {
			e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent && e.attachEvent("on" + t, i)
		}, o.prototype.off = function(e, t, i, n) {
			e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent && e.detachEvent("on" + t, i)
		}, o.prototype.trigger = function(t, i, n, s, r) {
			var a = {
					item: {
						count: this._items.length,
						index: this.current()
					}
				},
				l = e.camelCase(e.grep(["on", t, n], function(e) {
					return e
				}).join("-").toLowerCase()),
				u = e.Event([t, "owl", n || "carousel"].join(".").toLowerCase(), e.extend({
					relatedTarget: this
				}, a, i));
			return this._supress[t] || (e.each(this._plugins, function(e, t) {
				t.onTrigger && t.onTrigger(u)
			}), this.register({
				type: o.Type.Event,
				name: t
			}), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u
		}, o.prototype.enter = function(t) {
			e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) {
				this._states.current[t] === n && (this._states.current[t] = 0), this._states.current[t]++
			}, this))
		}, o.prototype.leave = function(t) {
			e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) {
				this._states.current[t]--
			}, this))
		}, o.prototype.register = function(t) {
			if (t.type === o.Type.Event) {
				if (e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl) {
					var i = e.event.special[t.name]._default;
					e.event.special[t.name]._default = function(e) {
						return !i || !i.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
					}, e.event.special[t.name].owl = !0
				}
			} else t.type === o.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = e.grep(this._states.tags[t.name], e.proxy(function(i, n) {
				return e.inArray(i, this._states.tags[t.name]) === n
			}, this)))
		}, o.prototype.suppress = function(t) {
			e.each(t, e.proxy(function(e, t) {
				this._supress[t] = !0
			}, this))
		}, o.prototype.release = function(t) {
			e.each(t, e.proxy(function(e, t) {
				delete this._supress[t]
			}, this))
		}, o.prototype.pointer = function(e) {
			var i = {
				x: null,
				y: null
			};
			return (e = (e = e.originalEvent || e || t.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX ? (i.x = e.pageX, i.y = e.pageY) : (i.x = e.clientX, i.y = e.clientY), i
		}, o.prototype.isNumeric = function(e) {
			return !isNaN(parseFloat(e))
		}, o.prototype.difference = function(e, t) {
			return {
				x: e.x - t.x,
				y: e.y - t.y
			}
		}, e.fn.owlCarousel = function(t) {
			var i = Array.prototype.slice.call(arguments, 1);
			return this.each(function() {
				var n = e(this),
					s = n.data("owl.carousel");
				s || (s = new o(this, "object" == typeof t && t), n.data("owl.carousel", s), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, i) {
					s.register({
						type: o.Type.Event,
						name: i
					}), s.$element.on(i + ".owl.carousel.core", e.proxy(function(e) {
						e.namespace && e.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
					}, s))
				})), "string" == typeof t && "_" !== t.charAt(0) && s[t].apply(s, i)
			})
		}, e.fn.owlCarousel.Constructor = o
	}(window.Zepto || window.jQuery, window, document),
	function(e, t, i, n) {
		var o = function(t) {
			this._core = t, this._interval = null, this._visible = null, this._handlers = {
				"initialized.owl.carousel": e.proxy(function(e) {
					e.namespace && this._core.settings.autoRefresh && this.watch()
				}, this)
			}, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		o.Defaults = {
			autoRefresh: !0,
			autoRefreshInterval: 500
		}, o.prototype.watch = function() {
			this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
		}, o.prototype.refresh = function() {
			this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
		}, o.prototype.destroy = function() {
			var e, i;
			for (e in t.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
			for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
		}, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
	}(window.Zepto || window.jQuery, window, document),
	function(e, t, i, n) {
		var o = function(t) {
			this._core = t, this._loaded = [], this._handlers = {
				"initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function(t) {
					if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
						for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, s = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + o, r = this._core.clones().length, a = e.proxy(function(e, t) {
								this.load(t)
							}, this); o++ < n;) this.load(r / 2 + this._core.relative(s)), r && e.each(this._core.clones(this._core.relative(s)), a), s++
				}, this)
			}, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		o.Defaults = {
			lazyLoad: !1
		}, o.prototype.load = function(i) {
			var n = this._core.$stage.children().eq(i),
				o = n && n.find(".owl-lazy");
			!o || e.inArray(n.get(0), this._loaded) > -1 || (o.each(e.proxy(function(i, n) {
				var o, s = e(n),
					r = t.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
				this._core.trigger("load", {
					element: s,
					url: r
				}, "lazy"), s.is("img") ? s.one("load.owl.lazy", e.proxy(function() {
					s.css("opacity", 1), this._core.trigger("loaded", {
						element: s,
						url: r
					}, "lazy")
				}, this)).attr("src", r) : ((o = new Image).onload = e.proxy(function() {
					s.css({
						"background-image": 'url("' + r + '")',
						opacity: "1"
					}), this._core.trigger("loaded", {
						element: s,
						url: r
					}, "lazy")
				}, this), o.src = r)
			}, this)), this._loaded.push(n.get(0)))
		}, o.prototype.destroy = function() {
			var e, t;
			for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
			for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
		}, e.fn.owlCarousel.Constructor.Plugins.Lazy = o
	}(window.Zepto || window.jQuery, window, document),
	function(e, t, i, n) {
		var o = function(t) {
			this._core = t, this._handlers = {
				"initialized.owl.carousel refreshed.owl.carousel": e.proxy(function(e) {
					e.namespace && this._core.settings.autoHeight && this.update()
				}, this),
				"changed.owl.carousel": e.proxy(function(e) {
					e.namespace && this._core.settings.autoHeight && "position" == e.property.name && this.update()
				}, this),
				"loaded.owl.lazy": e.proxy(function(e) {
					e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
				}, this)
			}, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		o.Defaults = {
			autoHeight: !1,
			autoHeightClass: "owl-height"
		}, o.prototype.update = function() {
			var t, i = this._core._current,
				n = i + this._core.settings.items,
				o = this._core.$stage.children().toArray().slice(i, n),
				s = [];
			e.each(o, function(t, i) {
				s.push(e(i).height())
			}), t = Math.max.apply(null, s), this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
		}, o.prototype.destroy = function() {
			var e, t;
			for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
			for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
		}, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
	}(window.Zepto || window.jQuery, window, document),
	function(e, t, i, n) {
		var o = function(t) {
			this._core = t, this._videos = {}, this._playing = null, this._handlers = {
				"initialized.owl.carousel": e.proxy(function(e) {
					e.namespace && this._core.register({
						type: "state",
						name: "playing",
						tags: ["interacting"]
					})
				}, this),
				"resize.owl.carousel": e.proxy(function(e) {
					e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
				}, this),
				"refreshed.owl.carousel": e.proxy(function(e) {
					e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
				}, this),
				"changed.owl.carousel": e.proxy(function(e) {
					e.namespace && "position" === e.property.name && this._playing && this.stop()
				}, this),
				"prepared.owl.carousel": e.proxy(function(t) {
					if (t.namespace) {
						var i = e(t.content).find(".owl-video");
						i.length && (i.css("display", "none"), this.fetch(i, e(t.content)))
					}
				}, this)
			}, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function(e) {
				this.play(e)
			}, this))
		};
		o.Defaults = {
			video: !1,
			videoHeight: !1,
			videoWidth: !1
		}, o.prototype.fetch = function(e, t) {
			var i = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
				n = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
				o = e.attr("data-width") || this._core.settings.videoWidth,
				s = e.attr("data-height") || this._core.settings.videoHeight,
				r = e.attr("href");
			if (!r) throw new Error("Missing video URL.");
			if ((n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
			else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
			else {
				if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
				i = "vzaar"
			}
			n = n[6], this._videos[r] = {
				type: i,
				id: n,
				width: o,
				height: s
			}, t.attr("data-video", r), this.thumbnail(e, this._videos[r])
		}, o.prototype.thumbnail = function(t, i) {
			var n, o, s = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
				r = t.find("img"),
				a = "src",
				l = "",
				u = this._core.settings,
				c = function(e) {
					'<div class="owl-video-play-icon"></div>',
					n = u.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + e + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>',
					t.after(n),
					t.after('<div class="owl-video-play-icon"></div>')
				};
			if (t.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), r.length) return c(r.attr(a)), r.remove(), !1;
			"youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", c(o)) : "vimeo" === i.type ? e.ajax({
				type: "GET",
				url: "//vimeo.com/api/v2/video/" + i.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function(e) {
					o = e[0].thumbnail_large, c(o)
				}
			}) : "vzaar" === i.type && e.ajax({
				type: "GET",
				url: "//vzaar.com/api/videos/" + i.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function(e) {
					o = e.framegrab_url, c(o)
				}
			})
		}, o.prototype.stop = function() {
			this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
		}, o.prototype.play = function(t) {
			var i, n = e(t.target).closest("." + this._core.settings.itemClass),
				o = this._videos[n.attr("data-video")],
				s = o.width || "100%",
				r = o.height || this._core.$stage.height();
			this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === o.type ? i = '<iframe width="' + s + '" height="' + r + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&rel=0&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? i = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + s + '" height="' + r + '" frameborder="0" Winkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (i = '<iframe frameborder="0"height="' + r + '"width="' + s + '" allowfullscreen mozallowfullscreen WinkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), e('<div class="owl-video-frame">' + i + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
		}, o.prototype.isInFullScreen = function() {
			var t = i.fullscreenElement || i.mozFullScreenElement || i.WinkitFullscreenElement;
			return t && e(t).parent().hasClass("owl-video-frame")
		}, o.prototype.destroy = function() {
			var e, t;
			for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
			for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
		}, e.fn.owlCarousel.Constructor.Plugins.Video = o
	}(window.Zepto || window.jQuery, window, document),
	function(e, t, i, n) {
		var o = function(t) {
			this.core = t, this.core.options = e.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
				"change.owl.carousel": e.proxy(function(e) {
					e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
				}, this),
				"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function(e) {
					e.namespace && (this.swapping = "translated" == e.type)
				}, this),
				"translate.owl.carousel": e.proxy(function(e) {
					e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
				}, this)
			}, this.core.$element.on(this.handlers)
		};
		o.Defaults = {
			animateOut: !1,
			animateIn: !1
		}, o.prototype.swap = function() {
			if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
				this.core.speed(0);
				var t, i = e.proxy(this.clear, this),
					n = this.core.$stage.children().eq(this.previous),
					o = this.core.$stage.children().eq(this.next),
					s = this.core.settings.animateIn,
					r = this.core.settings.animateOut;
				this.core.current() !== this.previous && (r && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(e.support.animation.end, i).css({
					left: t + "px"
				}).addClass("animated owl-animated-out").addClass(r)), s && o.one(e.support.animation.end, i).addClass("animated owl-animated-in").addClass(s))
			}
		}, o.prototype.clear = function(t) {
			e(t.target).css({
				left: ""
			}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
		}, o.prototype.destroy = function() {
			var e, t;
			for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
			for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
		}, e.fn.owlCarousel.Constructor.Plugins.Animate = o
	}(window.Zepto || window.jQuery, window, document),
	function(e, t, i, n) {
		var o = function(t) {
			this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
				"changed.owl.carousel": e.proxy(function(e) {
					e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
				}, this),
				"initialized.owl.carousel": e.proxy(function(e) {
					e.namespace && this._core.settings.autoplay && this.play()
				}, this),
				"play.owl.autoplay": e.proxy(function(e, t, i) {
					e.namespace && this.play(t, i)
				}, this),
				"stop.owl.autoplay": e.proxy(function(e) {
					e.namespace && this.stop()
				}, this),
				"mouseover.owl.autoplay": e.proxy(function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}, this),
				"mouseleave.owl.autoplay": e.proxy(function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
				}, this),
				"touchstart.owl.core": e.proxy(function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}, this),
				"touchend.owl.core": e.proxy(function() {
					this._core.settings.autoplayHoverPause && this.play()
				}, this)
			}, this._core.$element.on(this._handlers), this._core.options = e.extend({}, o.Defaults, this._core.options)
		};
		o.Defaults = {
			autoplay: !1,
			autoplayTimeout: 5e3,
			autoplayHoverPause: !1,
			autoplaySpeed: !1
		}, o.prototype.play = function(e, t) {
			this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
		}, o.prototype._getNextTimeout = function(n, o) {
			return this._timeout && t.clearTimeout(this._timeout), t.setTimeout(e.proxy(function() {
				this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(o || this._core.settings.autoplaySpeed)
			}, this), n || this._core.settings.autoplayTimeout)
		}, o.prototype._setAutoPlayInterval = function() {
			this._timeout = this._getNextTimeout()
		}, o.prototype.stop = function() {
			this._core.is("rotating") && (t.clearTimeout(this._timeout), this._core.leave("rotating"))
		}, o.prototype.pause = function() {
			this._core.is("rotating") && (this._paused = !0)
		}, o.prototype.destroy = function() {
			var e, t;
			for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
			for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
		}, e.fn.owlCarousel.Constructor.Plugins.autoplay = o
	}(window.Zepto || window.jQuery, window, document),
	function(e, t, i, n) {
		"use strict";
		var o = function(t) {
			this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
				next: this._core.next,
				prev: this._core.prev,
				to: this._core.to
			}, this._handlers = {
				"prepared.owl.carousel": e.proxy(function(t) {
					t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
				}, this),
				"added.owl.carousel": e.proxy(function(e) {
					e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
				}, this),
				"remove.owl.carousel": e.proxy(function(e) {
					e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
				}, this),
				"changed.owl.carousel": e.proxy(function(e) {
					e.namespace && "position" == e.property.name && this.draw()
				}, this),
				"initialized.owl.carousel": e.proxy(function(e) {
					e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
				}, this),
				"refreshed.owl.carousel": e.proxy(function(e) {
					e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
				}, this)
			}, this._core.options = e.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
		};
		o.Defaults = {
			nav: !1,
			navText: ["prev", "next"],
			navSpeed: !1,
			navElement: "div",
			navContainer: !1,
			navContainerClass: "owl-nav",
			navClass: ["owl-prev", "owl-next"],
			slideBy: 1,
			dotClass: "owl-dot",
			dotsClass: "owl-dots",
			dots: !0,
			dotsEach: !1,
			dotsData: !1,
			dotsSpeed: !1,
			dotsContainer: !1
		}, o.prototype.initialize = function() {
			var t, i = this._core.settings;
			for (t in this._controls.$relative = (i.navContainer ? e(i.navContainer) : e("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy(function(e) {
					this.prev(i.navSpeed)
				}, this)), this._controls.$next = e("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy(function(e) {
					this.next(i.navSpeed)
				}, this)), i.dotsData || (this._templates = [e("<div>").addClass(i.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? e(i.dotsContainer) : e("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", e.proxy(function(t) {
					var n = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
					t.preventDefault(), this.to(n, i.dotsSpeed)
				}, this)), this._overrides) this._core[t] = e.proxy(this[t], this)
		}, o.prototype.destroy = function() {
			var e, t, i, n;
			for (e in this._handlers) this.$element.off(e, this._handlers[e]);
			for (t in this._controls) this._controls[t].remove();
			for (n in this.overides) this._core[n] = this._overrides[n];
			for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
		}, o.prototype.update = function() {
			var e, t, i = this._core.clones().length / 2,
				n = i + this._core.items().length,
				o = this._core.maximum(!0),
				s = this._core.settings,
				r = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
			if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
				for (this._pages = [], e = i, t = 0, 0; e < n; e++) {
					if (t >= r || 0 === t) {
						if (this._pages.push({
								start: Math.min(o, e - i),
								end: e - i + r - 1
							}), Math.min(o, e - i) === o) break;
						t = 0, 0
					}
					t += this._core.mergers(this._core.relative(e))
				}
		}, o.prototype.draw = function() {
			var t, i = this._core.settings,
				n = this._core.items().length <= i.items,
				o = this._core.relative(this._core.current()),
				s = i.loop || i.rewind;
			this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !s && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (t = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
		}, o.prototype.onTrigger = function(t) {
			var i = this._core.settings;
			t.page = {
				index: e.inArray(this.current(), this._pages),
				count: this._pages.length,
				size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
			}
		}, o.prototype.current = function() {
			var t = this._core.relative(this._core.current());
			return e.grep(this._pages, e.proxy(function(e, i) {
				return e.start <= t && e.end >= t
			}, this)).pop()
		}, o.prototype.getPosition = function(t) {
			var i, n, o = this._core.settings;
			return "page" == o.slideBy ? (i = e.inArray(this.current(), this._pages), n = this._pages.length, t ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, t ? i += o.slideBy : i -= o.slideBy), i
		}, o.prototype.next = function(t) {
			e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
		}, o.prototype.prev = function(t) {
			e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
		}, o.prototype.to = function(t, i, n) {
			var o;
			!n && this._pages.length ? (o = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % o + o) % o].start, i)) : e.proxy(this._overrides.to, this._core)(t, i)
		}, e.fn.owlCarousel.Constructor.Plugins.Navigation = o
	}(window.Zepto || window.jQuery, window, document),
	function(e, t, i, n) {
		"use strict";
		var o = function(i) {
			this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
				"initialized.owl.carousel": e.proxy(function(i) {
					i.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
				}, this),
				"prepared.owl.carousel": e.proxy(function(t) {
					if (t.namespace) {
						var i = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
						if (!i) return;
						this._hashes[i] = t.content
					}
				}, this),
				"changed.owl.carousel": e.proxy(function(i) {
					if (i.namespace && "position" === i.property.name) {
						var n = this._core.items(this._core.relative(this._core.current())),
							o = e.map(this._hashes, function(e, t) {
								return e === n ? t : null
							}).join();
						if (!o || t.location.hash.slice(1) === o) return;
						t.location.hash = o
					}
				}, this)
			}, this._core.options = e.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function(e) {
				var i = t.location.hash.substring(1),
					n = this._core.$stage.children(),
					o = this._hashes[i] && n.index(this._hashes[i]);
				void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
			}, this))
		};
		o.Defaults = {
			URLhashListener: !1
		}, o.prototype.destroy = function() {
			var i, n;
			for (i in e(t).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
			for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
		}, e.fn.owlCarousel.Constructor.Plugins.Hash = o
	}(window.Zepto || window.jQuery, window, document),
	function(e, t, i, n) {
		function o(t, i) {
			var o = !1,
				s = t.charAt(0).toUpperCase() + t.slice(1);
			return e.each((t + " " + a.join(s + " ") + s).split(" "), function(e, t) {
				if (r[t] !== n) return o = !i || t, !1
			}), o
		}

		function s(e) {
			return o(e, !0)
		}
		var r = e("<support>").get(0).style,
			a = "Winkit Moz O ms".split(" "),
			l = {
				transition: {
					end: {
						WinkitTransition: "WinkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd",
						transition: "transitionend"
					}
				},
				animation: {
					end: {
						WinkitAnimation: "WinkitAnimationEnd",
						MozAnimation: "animationend",
						OAnimation: "oAnimationEnd",
						animation: "animationend"
					}
				}
			},
			u = function() {
				return !!o("transform")
			},
			c = function() {
				return !!o("perspective")
			},
			d = function() {
				return !!o("animation")
			};
		(function() {
			return !!o("transition")
		})() && (e.support.transition = new String(s("transition")), e.support.transition.end = l.transition.end[e.support.transition]), d() && (e.support.animation = new String(s("animation")), e.support.animation.end = l.animation.end[e.support.animation]), u() && (e.support.transform = new String(s("transform")), e.support.transform3d = c())
	}(window.Zepto || window.jQuery, window, document),
	function(e, t) {
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t(e)
		}) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
	}(this, function(e) {
		! function() {
			"use strict";

			function t(t, n) {
				if (this.el = t, this.$el = e(t), this.s = e.extend({}, i, n), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
				return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = e(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(e(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
			}
			var i = {
				mode: "lg-slide",
				cssEasing: "ease",
				easing: "linear",
				speed: 600,
				height: "100%",
				width: "100%",
				addClass: "",
				startClass: "lg-start-zoom",
				backdropDuration: 150,
				hideBarsDelay: 6e3,
				useLeft: !1,
				closable: !0,
				loop: !0,
				escKey: !0,
				keyPress: !0,
				controls: !0,
				slideEndAnimatoin: !0,
				hideControlOnEnd: !1,
				mousewheel: !0,
				getCaptionFromTitleOrAlt: !0,
				appendSubHtmlTo: ".lg-sub-html",
				subHtmlSelectorRelative: !1,
				preload: 1,
				showAfterLoad: !0,
				selector: "",
				selectWithin: "",
				nextHtml: "",
				prevHtml: "",
				index: !1,
				iframeMaxWidth: "100%",
				download: !0,
				counter: !0,
				appendCounterTo: ".lg-toolbar",
				swipeThreshold: 50,
				enableSwipe: !0,
				enableDrag: !0,
				dynamic: !1,
				dynamicEl: [],
				galleryId: 1
			};
			t.prototype.init = function() {
				var t = this;
				t.s.preload > t.$items.length && (t.s.preload = t.$items.length);
				var i = window.location.hash;
				i.indexOf("lg=" + this.s.galleryId) > 0 && (t.index = parseInt(i.split("&slide=")[1], 10), e("body").addClass("lg-from-hash"), e("body").hasClass("lg-on") || (setTimeout(function() {
					t.build(t.index)
				}), e("body").addClass("lg-on"))), t.s.dynamic ? (t.$el.trigger("onBeforeOpen.lg"), t.index = t.s.index || 0, e("body").hasClass("lg-on") || setTimeout(function() {
					t.build(t.index), e("body").addClass("lg-on")
				})) : t.$items.on("click.lgcustom", function(i) {
					try {
						i.preventDefault(), i.preventDefault()
					} catch (e) {
						i.returnValue = !1
					}
					t.$el.trigger("onBeforeOpen.lg"), t.index = t.s.index || t.$items.index(this), e("body").hasClass("lg-on") || (t.build(t.index), e("body").addClass("lg-on"))
				})
			}, t.prototype.build = function(t) {
				var i = this;
				i.structure(), e.each(e.fn.lightGallery.modules, function(t) {
					i.modules[t] = new e.fn.lightGallery.modules[t](i.el)
				}), i.slide(t, !1, !1, !1), i.s.keyPress && i.keyPress(), i.$items.length > 1 ? (i.arrow(), setTimeout(function() {
					i.enableDrag(), i.enableSwipe()
				}, 50), i.s.mousewheel && i.mousewheel()) : i.$slide.on("click.lg", function() {
					i.$el.trigger("onSlideClick.lg")
				}), i.counter(), i.closeGallery(), i.$el.trigger("onAfterOpen.lg"), i.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
					i.$outer.removeClass("lg-hide-items"), clearTimeout(i.hideBartimeout), i.hideBartimeout = setTimeout(function() {
						i.$outer.addClass("lg-hide-items")
					}, i.s.hideBarsDelay)
				}), i.$outer.trigger("mousemove.lg")
			}, t.prototype.structure = function() {
				var t, i = "",
					n = "",
					o = 0,
					s = "",
					r = this;
				for (e("body").append('<div class="lg-backdrop"></div>'), e(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), o = 0; o < this.$items.length; o++) i += '<div class="lg-item"></div>';
				if (this.s.controls && this.$items.length > 1 && (n = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (s = '<div class="lg-sub-html"></div>'), t = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + i + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + n + s + "</div></div>", e("body").append(t), this.$outer = e(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), r.setTop(), e(window).on("resize.lg orientationchange.lg", function() {
						setTimeout(function() {
							r.setTop()
						}, 100)
					}), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
					var a = this.$outer.find(".lg-inner");
					a.css("transition-timing-function", this.s.cssEasing), a.css("transition-duration", this.s.speed + "ms")
				}
				setTimeout(function() {
					e(".lg-backdrop").addClass("in")
				}), setTimeout(function() {
					r.$outer.addClass("lg-visible")
				}, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = e(window).scrollTop()
			}, t.prototype.setTop = function() {
				if ("100%" !== this.s.height) {
					var t = e(window).height(),
						i = (t - parseInt(this.s.height, 10)) / 2,
						n = this.$outer.find(".lg");
					t >= parseInt(this.s.height, 10) ? n.css("top", i + "px") : n.css("top", "0px")
				}
			}, t.prototype.doCss = function() {
				return !! function() {
					var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
						t = document.documentElement,
						i = 0;
					for (i = 0; i < e.length; i++)
						if (e[i] in t.style) return !0
				}()
			}, t.prototype.isVideo = function(e, t) {
				var i;
				if (i = this.s.dynamic ? this.s.dynamicEl[t].html : this.$items.eq(t).attr("data-html"), !e) return i ? {
					html5: !0
				} : (console.error("lightGallery :- data-src is not pvovided on slide item " + (t + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
				var n = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
					o = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
					s = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
					r = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
				return n ? {
					youtube: n
				} : o ? {
					vimeo: o
				} : s ? {
					dailymotion: s
				} : r ? {
					vk: r
				} : void 0
			}, t.prototype.counter = function() {
				this.s.counter && e(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
			}, t.prototype.addHtml = function(t) {
				var i, n, o = null;
				if (this.s.dynamic ? this.s.dynamicEl[t].subHtmlUrl ? i = this.s.dynamicEl[t].subHtmlUrl : o = this.s.dynamicEl[t].subHtml : (n = this.$items.eq(t)).attr("data-sub-html-url") ? i = n.attr("data-sub-html-url") : (o = n.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !o && (o = n.attr("title") || n.find("img").first().attr("alt"))), !i)
					if (null != o) {
						var s = o.substring(0, 1);
						"." !== s && "#" !== s || (o = this.s.subHtmlSelectorRelative && !this.s.dynamic ? n.find(o).html() : e(o).html())
					} else o = "";
				".lg-sub-html" === this.s.appendSubHtmlTo ? i ? this.$outer.find(this.s.appendSubHtmlTo).load(i) : this.$outer.find(this.s.appendSubHtmlTo).html(o) : i ? this.$slide.eq(t).load(i) : this.$slide.eq(t).append(o), null != o && ("" === o ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [t])
			}, t.prototype.preload = function(e) {
				var t = 1,
					i = 1;
				for (t = 1; t <= this.s.preload && !(t >= this.$items.length - e); t++) this.loadContent(e + t, !1, 0);
				for (i = 1; i <= this.s.preload && !(e - i < 0); i++) this.loadContent(e - i, !1, 0)
			}, t.prototype.loadContent = function(t, i, n) {
				var o, s, r, a, l, u, c = this,
					d = !1,
					h = function(t) {
						for (var i = [], n = [], o = 0; o < t.length; o++) {
							var r = t[o].split(" ");
							"" === r[0] && r.splice(0, 1), n.push(r[0]), i.push(r[1])
						}
						for (var a = e(window).width(), l = 0; l < i.length; l++)
							if (parseInt(i[l], 10) > a) {
								s = n[l];
								break
							}
					};
				c.s.dynamic ? (c.s.dynamicEl[t].poster && (d = !0, r = c.s.dynamicEl[t].poster), u = c.s.dynamicEl[t].html, s = c.s.dynamicEl[t].src, c.s.dynamicEl[t].responsive && h(c.s.dynamicEl[t].responsive.split(",")), a = c.s.dynamicEl[t].srcset, l = c.s.dynamicEl[t].sizes) : (c.$items.eq(t).attr("data-poster") && (d = !0, r = c.$items.eq(t).attr("data-poster")), u = c.$items.eq(t).attr("data-html"), s = c.$items.eq(t).attr("href") || c.$items.eq(t).attr("data-src"), c.$items.eq(t).attr("data-responsive") && h(c.$items.eq(t).attr("data-responsive").split(",")), a = c.$items.eq(t).attr("data-srcset"), l = c.$items.eq(t).attr("data-sizes"));
				var p = !1;
				c.s.dynamic ? c.s.dynamicEl[t].iframe && (p = !0) : "true" === c.$items.eq(t).attr("data-iframe") && (p = !0);
				var f = c.isVideo(s, t);
				if (!c.$slide.eq(t).hasClass("lg-loaded")) {
					if (p) c.$slide.eq(t).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + c.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + s + '"  allowfullscreen="true"></iframe></div></div>');
					else if (d) {
						var m;
						m = f && f.youtube ? "lg-has-youtube" : f && f.vimeo ? "lg-has-vimeo" : "lg-has-html5", c.$slide.eq(t).prepend('<div class="lg-video-cont ' + m + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + r + '" /></div></div>')
					} else f ? (c.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), c.$el.trigger("hasVideo.lg", [t, s, u])) : c.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + s + '" /></div>');
					if (c.$el.trigger("onAferAppendSlide.lg", [t]), o = c.$slide.eq(t).find(".lg-object"), l && o.attr("sizes", l), a) {
						o.attr("srcset", a);
						try {
							picturefill({
								elements: [o[0]]
							})
						} catch (e) {
							console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
						}
					}
					".lg-sub-html" !== this.s.appendSubHtmlTo && c.addHtml(t), c.$slide.eq(t).addClass("lg-loaded")
				}
				c.$slide.eq(t).find(".lg-object").on("load.lg error.lg", function() {
					var i = 0;
					n && !e("body").hasClass("lg-from-hash") && (i = n), setTimeout(function() {
						c.$slide.eq(t).addClass("lg-complete"), c.$el.trigger("onSlideItemLoad.lg", [t, n || 0])
					}, i)
				}), f && f.html5 && !d && c.$slide.eq(t).addClass("lg-complete"), !0 === i && (c.$slide.eq(t).hasClass("lg-complete") ? c.preload(t) : c.$slide.eq(t).find(".lg-object").on("load.lg error.lg", function() {
					c.preload(t)
				}))
			}, t.prototype.slide = function(t, i, n, o) {
				var s = this.$outer.find(".lg-current").index(),
					r = this;
				if (!r.lGalleryOn || s !== t) {
					var a = this.$slide.length,
						l = r.lGalleryOn ? this.s.speed : 0;
					if (!r.lgBusy) {
						var u, c, d;
						if (this.s.download)(u = r.s.dynamic ? !1 !== r.s.dynamicEl[t].downloadUrl && (r.s.dynamicEl[t].downloadUrl || r.s.dynamicEl[t].src) : "false" !== r.$items.eq(t).attr("data-download-url") && (r.$items.eq(t).attr("data-download-url") || r.$items.eq(t).attr("href") || r.$items.eq(t).attr("data-src"))) ? (e("#lg-download").attr("href", u), r.$outer.removeClass("lg-hide-download")) : r.$outer.addClass("lg-hide-download");
						if (this.$el.trigger("onBeforeSlide.lg", [s, t, i, n]), r.lgBusy = !0, clearTimeout(r.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
								r.addHtml(t)
							}, l), this.arrowDisable(t), o || (t < s ? o = "prev" : t > s && (o = "next")), i) this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), a > 2 ? (c = t - 1, d = t + 1, 0 === t && s === a - 1 ? (d = 0, c = a - 1) : t === a - 1 && 0 === s && (d = 0, c = a - 1)) : (c = 0, d = 1), "prev" === o ? r.$slide.eq(d).addClass("lg-next-slide") : r.$slide.eq(c).addClass("lg-prev-slide"), r.$slide.eq(t).addClass("lg-current");
						else r.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === o ? (this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(s).addClass("lg-next-slide")) : (this.$slide.eq(t).addClass("lg-next-slide"), this.$slide.eq(s).addClass("lg-prev-slide")), setTimeout(function() {
							r.$slide.removeClass("lg-current"), r.$slide.eq(t).addClass("lg-current"), r.$outer.removeClass("lg-no-trans")
						}, 50);
						r.lGalleryOn ? (setTimeout(function() {
							r.loadContent(t, !0, 0)
						}, this.s.speed + 50), setTimeout(function() {
							r.lgBusy = !1, r.$el.trigger("onAfterSlide.lg", [s, t, i, n])
						}, this.s.speed)) : (r.loadContent(t, !0, r.s.backdropDuration), r.lgBusy = !1, r.$el.trigger("onAfterSlide.lg", [s, t, i, n])), r.lGalleryOn = !0, this.s.counter && e("#lg-counter-current").text(t + 1)
					}
					r.index = t
				}
			}, t.prototype.goToNextSlide = function(e) {
				var t = this,
					i = t.s.loop;
				e && t.$slide.length < 3 && (i = !1), t.lgBusy || (t.index + 1 < t.$slide.length ? (t.index++, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1, "next")) : i ? (t.index = 0, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1, "next")) : t.s.slideEndAnimatoin && !e && (t.$outer.addClass("lg-right-end"), setTimeout(function() {
					t.$outer.removeClass("lg-right-end")
				}, 400)))
			}, t.prototype.goToPrevSlide = function(e) {
				var t = this,
					i = t.s.loop;
				e && t.$slide.length < 3 && (i = !1), t.lgBusy || (t.index > 0 ? (t.index--, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1, "prev")) : i ? (t.index = t.$items.length - 1, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1, "prev")) : t.s.slideEndAnimatoin && !e && (t.$outer.addClass("lg-left-end"), setTimeout(function() {
					t.$outer.removeClass("lg-left-end")
				}, 400)))
			}, t.prototype.keyPress = function() {
				var t = this;
				this.$items.length > 1 && e(window).on("keyup.lg", function(e) {
					t.$items.length > 1 && (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()), 39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()))
				}), e(window).on("keydown.lg", function(e) {
					!0 === t.s.escKey && 27 === e.keyCode && (e.preventDefault(), t.$outer.hasClass("lg-thumb-open") ? t.$outer.removeClass("lg-thumb-open") : t.destroy())
				})
			}, t.prototype.arrow = function() {
				var e = this;
				this.$outer.find(".lg-prev").on("click.lg", function() {
					e.goToPrevSlide()
				}), this.$outer.find(".lg-next").on("click.lg", function() {
					e.goToNextSlide()
				})
			}, t.prototype.arrowDisable = function(e) {
				!this.s.loop && this.s.hideControlOnEnd && (e + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), e > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
			}, t.prototype.setTranslate = function(e, t, i) {
				this.s.useLeft ? e.css("left", t) : e.css({
					transform: "translate3d(" + t + "px, " + i + "px, 0px)"
				})
			}, t.prototype.touchMove = function(t, i) {
				var n = i - t;
				Math.abs(n) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), n, 0), this.setTranslate(e(".lg-prev-slide"), -this.$slide.eq(this.index).width() + n, 0), this.setTranslate(e(".lg-next-slide"), this.$slide.eq(this.index).width() + n, 0))
			}, t.prototype.touchEnd = function(e) {
				var t = this;
				"lg-slide" !== t.s.mode && t.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() {
					t.$outer.removeClass("lg-dragging"), e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && t.$el.trigger("onSlideClick.lg"), t.$slide.removeAttr("style")
				}), setTimeout(function() {
					t.$outer.hasClass("lg-dragging") || "lg-slide" === t.s.mode || t.$outer.removeClass("lg-slide")
				}, t.s.speed + 100)
			}, t.prototype.enableSwipe = function() {
				var e = this,
					t = 0,
					i = 0,
					n = !1;
				e.s.enableSwipe && e.doCss() && (e.$slide.on("touchstart.lg", function(i) {
					e.$outer.hasClass("lg-zoomed") || e.lgBusy || (i.preventDefault(), e.manageSwipeClass(), t = i.originalEvent.targetTouches[0].pageX)
				}), e.$slide.on("touchmove.lg", function(o) {
					e.$outer.hasClass("lg-zoomed") || (o.preventDefault(), i = o.originalEvent.targetTouches[0].pageX, e.touchMove(t, i), n = !0)
				}), e.$slide.on("touchend.lg", function() {
					e.$outer.hasClass("lg-zoomed") || (n ? (n = !1, e.touchEnd(i - t)) : e.$el.trigger("onSlideClick.lg"))
				}))
			}, t.prototype.enableDrag = function() {
				var t = this,
					i = 0,
					n = 0,
					o = !1,
					s = !1;
				t.s.enableDrag && t.doCss() && (t.$slide.on("mousedown.lg", function(n) {
					t.$outer.hasClass("lg-zoomed") || t.lgBusy || e(n.target).text().trim() || (n.preventDefault(), t.manageSwipeClass(), i = n.pageX, o = !0, t.$outer.scrollLeft += 1, t.$outer.scrollLeft -= 1, t.$outer.removeClass("lg-grab").addClass("lg-grabbing"), t.$el.trigger("onDragstart.lg"))
				}), e(window).on("mousemove.lg", function(e) {
					o && (s = !0, n = e.pageX, t.touchMove(i, n), t.$el.trigger("onDragmove.lg"))
				}), e(window).on("mouseup.lg", function(r) {
					s ? (s = !1, t.touchEnd(n - i), t.$el.trigger("onDragend.lg")) : (e(r.target).hasClass("lg-object") || e(r.target).hasClass("lg-video-play")) && t.$el.trigger("onSlideClick.lg"), o && (o = !1, t.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
				}))
			}, t.prototype.manageSwipeClass = function() {
				var e = this.index + 1,
					t = this.index - 1;
				this.s.loop && this.$slide.length > 2 && (0 === this.index ? t = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (e = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), t > -1 && this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")
			}, t.prototype.mousewheel = function() {
				var e = this;
				e.$outer.on("mousewheel.lg", function(t) {
					t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault())
				})
			}, t.prototype.closeGallery = function() {
				var t = this,
					i = !1;
				this.$outer.find(".lg-close").on("click.lg", function() {
					t.destroy()
				}), t.s.closable && (t.$outer.on("mousedown.lg", function(t) {
					i = !!(e(t.target).is(".lg-outer") || e(t.target).is(".lg-item ") || e(t.target).is(".lg-img-wrap"))
				}), t.$outer.on("mousemove.lg", function() {
					i = !1
				}), t.$outer.on("mouseup.lg", function(n) {
					(e(n.target).is(".lg-outer") || e(n.target).is(".lg-item ") || e(n.target).is(".lg-img-wrap") && i) && (t.$outer.hasClass("lg-dragging") || t.destroy())
				}))
			}, t.prototype.destroy = function(t) {
				var i = this;
				t || (i.$el.trigger("onBeforeClose.lg"), e(window).scrollTop(i.prevScrollTop)), t && (i.s.dynamic || this.$items.off("click.lg click.lgcustom"), e.removeData(i.el, "lightGallery")), this.$el.off(".lg.tm"), e.each(e.fn.lightGallery.modules, function(e) {
					i.modules[e] && i.modules[e].destroy()
				}), this.lGalleryOn = !1, clearTimeout(i.hideBartimeout), this.hideBartimeout = !1, e(window).off(".lg"), e("body").removeClass("lg-on lg-from-hash"), i.$outer && i.$outer.removeClass("lg-visible"), e(".lg-backdrop").removeClass("in"), setTimeout(function() {
					i.$outer && i.$outer.remove(), e(".lg-backdrop").remove(), t || i.$el.trigger("onCloseAfter.lg")
				}, i.s.backdropDuration + 50)
			}, e.fn.lightGallery = function(i) {
				return this.each(function() {
					if (e.data(this, "lightGallery")) try {
						e(this).data("lightGallery").init()
					} catch (e) {
						console.error("lightGallery has not initiated properly")
					} else e.data(this, "lightGallery", new t(this, i))
				})
			}, e.fn.lightGallery.modules = {}
		}()
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t(e)
		}) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(0, function(e) {
		! function() {
			"use strict";
			var t = {
					autoplay: !1,
					pause: 5e3,
					progressBar: !0,
					fourceAutoplay: !1,
					autoplayControls: !0,
					appendAutoplayControlsTo: ".lg-toolbar"
				},
				i = function(i) {
					return this.core = e(i).data("lightGallery"), this.$el = e(i), !(this.core.$items.length < 2) && (this.core.s = e.extend({}, t, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this)
				};
			i.prototype.init = function() {
				var e = this;
				e.core.s.autoplayControls && e.controls(), e.core.s.progressBar && e.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), e.progress(), e.core.s.autoplay && e.$el.one("onSlideItemLoad.lg.tm", function() {
					e.startlAuto()
				}), e.$el.on("onDragstart.lg.tm touchstart.lg.tm", function() {
					e.interval && (e.cancelAuto(), e.canceledOnTouch = !0)
				}), e.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function() {
					!e.interval && e.canceledOnTouch && (e.startlAuto(), e.canceledOnTouch = !1)
				})
			}, i.prototype.progress = function() {
				var e, t, i = this;
				i.$el.on("onBeforeSlide.lg.tm", function() {
					i.core.s.progressBar && i.fromAuto && (e = i.core.$outer.find(".lg-progress-bar"), t = i.core.$outer.find(".lg-progress"), i.interval && (t.removeAttr("style"), e.removeClass("lg-start"), setTimeout(function() {
						t.css("transition", "width " + (i.core.s.speed + i.core.s.pause) + "ms ease 0s"), e.addClass("lg-start")
					}, 20))), i.fromAuto || i.core.s.fourceAutoplay || i.cancelAuto(), i.fromAuto = !1
				})
			}, i.prototype.controls = function() {
				var t = this;
				e(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'), t.core.$outer.find(".lg-autoplay-button").on("click.lg", function() {
					e(t.core.$outer).hasClass("lg-show-autoplay") ? (t.cancelAuto(), t.core.s.fourceAutoplay = !1) : t.interval || (t.startlAuto(), t.core.s.fourceAutoplay = t.fourceAutoplayTemp)
				})
			}, i.prototype.startlAuto = function() {
				var e = this;
				e.core.$outer.find(".lg-progress").css("transition", "width " + (e.core.s.speed + e.core.s.pause) + "ms ease 0s"), e.core.$outer.addClass("lg-show-autoplay"), e.core.$outer.find(".lg-progress-bar").addClass("lg-start"), e.interval = setInterval(function() {
					e.core.index + 1 < e.core.$items.length ? e.core.index++ : e.core.index = 0, e.fromAuto = !0, e.core.slide(e.core.index, !1, !1, "next")
				}, e.core.s.speed + e.core.s.pause)
			}, i.prototype.cancelAuto = function() {
				clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
			}, i.prototype.destroy = function() {
				this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove()
			}, e.fn.lightGallery.modules.autoplay = i
		}()
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t(e)
		}) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
	}(this, function(e) {
		! function() {
			"use strict";

			function t() {
				return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
			}
			var i = {
					fullScreen: !0
				},
				n = function(t) {
					return this.core = e(t).data("lightGallery"), this.$el = e(t), this.core.s = e.extend({}, i, this.core.s), this.init(), this
				};
			n.prototype.init = function() {
				var e = "";
				if (this.core.s.fullScreen) {
					if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
					e = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(e), this.fullScreen()
				}
			}, n.prototype.requestFullscreen = function() {
				var e = document.documentElement;
				e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
			}, n.prototype.exitFullscreen = function() {
				document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
			}, n.prototype.fullScreen = function() {
				var i = this;
				e(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function() {
					i.core.$outer.toggleClass("lg-fullscreen-on")
				}), this.core.$outer.find(".lg-fullscreen").on("click.lg", function() {
					t() ? i.exitFullscreen() : i.requestFullscreen()
				})
			}, n.prototype.destroy = function() {
				t() && this.exitFullscreen(), e(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
			}, e.fn.lightGallery.modules.fullscreen = n
		}()
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t(e)
		}) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(0, function(e) {
		! function() {
			"use strict";
			var t = {
					pager: !1
				},
				i = function(i) {
					return this.core = e(i).data("lightGallery"), this.$el = e(i), this.core.s = e.extend({}, t, this.core.s), this.core.s.pager && this.core.$items.length > 1 && this.init(), this
				};
			i.prototype.init = function() {
				var t, i, n, o = this,
					s = "";
				if (o.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), o.core.s.dynamic)
					for (var r = 0; r < o.core.s.dynamicEl.length; r++) s += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + o.core.s.dynamicEl[r].thumb + '" /></div></span>';
				else o.core.$items.each(function() {
					o.core.s.exThumbImage ? s += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e(this).attr(o.core.s.exThumbImage) + '" /></div></span>' : s += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e(this).find("img").attr("src") + '" /></div></span>'
				});
				(i = o.core.$outer.find(".lg-pager-outer")).html(s), (t = o.core.$outer.find(".lg-pager-cont")).on("click.lg touchend.lg", function() {
					var t = e(this);
					o.core.index = t.index(), o.core.slide(o.core.index, !1, !0, !1)
				}), i.on("mouseover.lg", function() {
					clearTimeout(n), i.addClass("lg-pager-hover")
				}), i.on("mouseout.lg", function() {
					n = setTimeout(function() {
						i.removeClass("lg-pager-hover")
					})
				}), o.core.$el.on("onBeforeSlide.lg.tm", function(e, i, n) {
					t.removeClass("lg-pager-active"), t.eq(n).addClass("lg-pager-active")
				})
			}, i.prototype.destroy = function() {}, e.fn.lightGallery.modules.pager = i
		}()
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t(e)
		}) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(0, function(e) {
		! function() {
			"use strict";
			var t = {
					thumbnail: !0,
					animateThumb: !0,
					currentPagerPosition: "middle",
					thumbWidth: 100,
					thumbHeight: "80px",
					thumbContHeight: 100,
					thumbMargin: 5,
					exThumbImage: !1,
					showThumbByDefault: !0,
					toogleThumb: !0,
					pullCaptionUp: !0,
					enableThumbDrag: !0,
					enableThumbSwipe: !0,
					swipeThreshold: 50,
					loadYoutubeThumbnail: !0,
					youtubeThumbSize: 1,
					loadVimeoThumbnail: !0,
					vimeoThumbSize: "thumbnail_small",
					loadDailymotionThumbnail: !0
				},
				i = function(i) {
					return this.core = e(i).data("lightGallery"), this.core.s = e.extend({}, t, this.core.s), this.$el = e(i), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"), this.left = 0, this.init(), this
				};
			i.prototype.init = function() {
				var e = this;
				this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function() {
					e.core.$outer.addClass("lg-thumb-open")
				}, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
			}, i.prototype.build = function() {
				function t(e, t, i) {
					var r, a = n.core.isVideo(e, i) || {},
						l = "";
					a.youtube || a.vimeo || a.dailymotion ? a.youtube ? r = n.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + a.youtube[1] + "/" + n.core.s.youtubeThumbSize + ".jpg" : t : a.vimeo ? n.core.s.loadVimeoThumbnail ? (r = "//i.vimeocdn.com/video/error_" + s + ".jpg", l = a.vimeo[1]) : r = t : a.dailymotion && (r = n.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + a.dailymotion[1] : t) : r = t, o += '<div data-vimeo-id="' + l + '" class="lg-thumb-item" style="width:' + n.core.s.thumbWidth + "px; height: " + n.core.s.thumbHeight + "; margin-right: " + n.core.s.thumbMargin + 'px"><img src="' + r + '" /></div>', l = ""
				}
				var i, n = this,
					o = "",
					s = "";
				switch (this.core.s.vimeoThumbSize) {
					case "thumbnail_large":
						s = "640";
						break;
					case "thumbnail_medium":
						s = "200x150";
						break;
					case "thumbnail_small":
						s = "100x75"
				}
				if (n.core.$outer.addClass("lg-has-thumb"), n.core.$outer.find(".lg").append('<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>'), n.$thumbOuter = n.core.$outer.find(".lg-thumb-outer"), n.thumbOuterWidth = n.$thumbOuter.width(), n.core.s.animateThumb && n.core.$outer.find(".lg-thumb").css({
						width: n.thumbTotalWidth + "px",
						position: "relative"
					}), this.core.s.animateThumb && n.$thumbOuter.css("height", n.core.s.thumbContHeight + "px"), n.core.s.dynamic)
					for (var r = 0; r < n.core.s.dynamicEl.length; r++) t(n.core.s.dynamicEl[r].src, n.core.s.dynamicEl[r].thumb, r);
				else n.core.$items.each(function(i) {
					n.core.s.exThumbImage ? t(e(this).attr("href") || e(this).attr("data-src"), e(this).attr(n.core.s.exThumbImage), i) : t(e(this).attr("href") || e(this).attr("data-src"), e(this).find("img").attr("src"), i)
				});
				n.core.$outer.find(".lg-thumb").html(o), (i = n.core.$outer.find(".lg-thumb-item")).each(function() {
					var t = e(this),
						i = t.attr("data-vimeo-id");
					i && e.getJSON("//www.vimeo.com/api/v2/video/" + i + ".json?callback=?", {
						format: "json"
					}, function(e) {
						t.find("img").attr("src", e[0][n.core.s.vimeoThumbSize])
					})
				}), i.eq(n.core.index).addClass("active"), n.core.$el.on("onBeforeSlide.lg.tm", function() {
					i.removeClass("active"), i.eq(n.core.index).addClass("active")
				}), i.on("click.lg touchend.lg", function() {
					var t = e(this);
					setTimeout(function() {
						(n.thumbClickable && !n.core.lgBusy || !n.core.doCss()) && (n.core.index = t.index(), n.core.slide(n.core.index, !1, !0, !1))
					}, 50)
				}), n.core.$el.on("onBeforeSlide.lg.tm", function() {
					n.animateThumb(n.core.index)
				}), e(window).on("resize.lg.thumb orientationchange.lg.thumb", function() {
					setTimeout(function() {
						n.animateThumb(n.core.index), n.thumbOuterWidth = n.$thumbOuter.width()
					}, 200)
				})
			}, i.prototype.setTranslate = function(e) {
				this.core.$outer.find(".lg-thumb").css({
					transform: "translate3d(-" + e + "px, 0px, 0px)"
				})
			}, i.prototype.animateThumb = function(e) {
				var t = this.core.$outer.find(".lg-thumb");
				if (this.core.s.animateThumb) {
					var i;
					switch (this.core.s.currentPagerPosition) {
						case "left":
							i = 0;
							break;
						case "middle":
							i = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
							break;
						case "right":
							i = this.thumbOuterWidth - this.core.s.thumbWidth
					}
					this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * e - 1 - i, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (t.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || t.animate({
						left: -this.left + "px"
					}, this.core.s.speed)) : this.core.doCss() || t.css("left", -this.left + "px"), this.setTranslate(this.left)
				}
			}, i.prototype.enableThumbDrag = function() {
				var t = this,
					i = 0,
					n = 0,
					o = !1,
					s = !1,
					r = 0;
				t.$thumbOuter.addClass("lg-grab"), t.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function(e) {
					t.thumbTotalWidth > t.thumbOuterWidth && (e.preventDefault(), i = e.pageX, o = !0, t.core.$outer.scrollLeft += 1, t.core.$outer.scrollLeft -= 1, t.thumbClickable = !1, t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
				}), e(window).on("mousemove.lg.thumb", function(e) {
					o && (r = t.left, s = !0, n = e.pageX, t.$thumbOuter.addClass("lg-dragging"), (r -= n - i) > t.thumbTotalWidth - t.thumbOuterWidth && (r = t.thumbTotalWidth - t.thumbOuterWidth), r < 0 && (r = 0), t.setTranslate(r))
				}), e(window).on("mouseup.lg.thumb", function() {
					s ? (s = !1, t.$thumbOuter.removeClass("lg-dragging"), t.left = r, Math.abs(n - i) < t.core.s.swipeThreshold && (t.thumbClickable = !0)) : t.thumbClickable = !0, o && (o = !1, t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
				})
			}, i.prototype.enableThumbSwipe = function() {
				var e = this,
					t = 0,
					i = 0,
					n = !1,
					o = 0;
				e.core.$outer.find(".lg-thumb").on("touchstart.lg", function(i) {
					e.thumbTotalWidth > e.thumbOuterWidth && (i.preventDefault(), t = i.originalEvent.targetTouches[0].pageX, e.thumbClickable = !1)
				}), e.core.$outer.find(".lg-thumb").on("touchmove.lg", function(s) {
					e.thumbTotalWidth > e.thumbOuterWidth && (s.preventDefault(), i = s.originalEvent.targetTouches[0].pageX, n = !0, e.$thumbOuter.addClass("lg-dragging"), o = e.left, (o -= i - t) > e.thumbTotalWidth - e.thumbOuterWidth && (o = e.thumbTotalWidth - e.thumbOuterWidth), o < 0 && (o = 0), e.setTranslate(o))
				}), e.core.$outer.find(".lg-thumb").on("touchend.lg", function() {
					e.thumbTotalWidth > e.thumbOuterWidth && n ? (n = !1, e.$thumbOuter.removeClass("lg-dragging"), Math.abs(i - t) < e.core.s.swipeThreshold && (e.thumbClickable = !0), e.left = o) : e.thumbClickable = !0
				})
			}, i.prototype.toogle = function() {
				var e = this;
				e.core.s.toogleThumb && (e.core.$outer.addClass("lg-can-toggle"), e.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), e.core.$outer.find(".lg-toogle-thumb").on("click.lg", function() {
					e.core.$outer.toggleClass("lg-thumb-open")
				}))
			}, i.prototype.thumbkeyPress = function() {
				var t = this;
				e(window).on("keydown.lg.thumb", function(e) {
					38 === e.keyCode ? (e.preventDefault(), t.core.$outer.addClass("lg-thumb-open")) : 40 === e.keyCode && (e.preventDefault(), t.core.$outer.removeClass("lg-thumb-open"))
				})
			}, i.prototype.destroy = function() {
				this.core.s.thumbnail && this.core.$items.length > 1 && (e(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
			}, e.fn.lightGallery.modules.Thumbnail = i
		}()
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t(e)
		}) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
	}(this, function(e) {
		! function() {
			"use strict";
			var t = {
					videoMaxWidth: "855px",
					autoplayFirstVideo: !0,
					youtubePlayerParams: !1,
					vimeoPlayerParams: !1,
					dailymotionPlayerParams: !1,
					vkPlayerParams: !1,
					videojs: !1,
					videojsOptions: {}
				},
				i = function(i) {
					return this.core = e(i).data("lightGallery"), this.$el = e(i), this.core.s = e.extend({}, t, this.core.s), this.videoLoaded = !1, this.init(), this
				};
			i.prototype.init = function() {
				var t = this;
				t.core.$el.on("hasVideo.lg.tm", function(e, t, i, n) {
					var o = this;
					if (o.core.$slide.eq(t).find(".lg-video").append(o.loadVideo(i, "lg-object", !0, t, n)), n)
						if (o.core.s.videojs) try {
							videojs(o.core.$slide.eq(t).find(".lg-html5").get(0), o.core.s.videojsOptions, function() {
								!o.videoLoaded && o.core.s.autoplayFirstVideo && this.play()
							})
						} catch (e) {
							console.error("Make sure you have included videojs")
						} else !o.videoLoaded && o.core.s.autoplayFirstVideo && o.core.$slide.eq(t).find(".lg-html5").get(0).play()
				}.bind(this)), t.core.$el.on("onAferAppendSlide.lg.tm", function(e, t) {
					var i = this.core.$slide.eq(t).find(".lg-video-cont");
					i.hasClass("lg-has-iframe") || (i.css("max-width", this.core.s.videoMaxWidth), this.videoLoaded = !0)
				}.bind(this)), t.core.doCss() && t.core.$items.length > 1 && (t.core.s.enableSwipe || t.core.s.enableDrag) ? t.core.$el.on("onSlideClick.lg.tm", function() {
					var e = t.core.$slide.eq(t.core.index);
					t.loadVideoOnclick(e)
				}) : t.core.$slide.on("click.lg", function() {
					t.loadVideoOnclick(e(this))
				}), t.core.$el.on("onBeforeSlide.lg.tm", function(t, i, n) {
					var o, s = this,
						r = s.core.$slide.eq(i),
						a = r.find(".lg-youtube").get(0),
						l = r.find(".lg-vimeo").get(0),
						u = r.find(".lg-dailymotion").get(0),
						c = r.find(".lg-vk").get(0),
						d = r.find(".lg-html5").get(0);
					if (a) a.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
					else if (l) try {
							$f(l).api("pause")
						} catch (e) {
							console.error("Make sure you have included froogaloop2 js")
						} else if (u) u.contentWindow.postMessage("pause", "*");
						else if (d)
						if (s.core.s.videojs) try {
							videojs(d).pause()
						} catch (e) {
							console.error("Make sure you have included videojs")
						} else d.pause();
					c && e(c).attr("src", e(c).attr("src").replace("&autoplay", "&noplay")), o = s.core.s.dynamic ? s.core.s.dynamicEl[n].src : s.core.$items.eq(n).attr("href") || s.core.$items.eq(n).attr("data-src");
					var h = s.core.isVideo(o, n) || {};
					(h.youtube || h.vimeo || h.dailymotion || h.vk) && s.core.$outer.addClass("lg-hide-download")
				}.bind(this)), t.core.$el.on("onAfterSlide.lg.tm", function(e, i) {
					t.core.$slide.eq(i).removeClass("lg-video-playing")
				}), t.core.s.autoplayFirstVideo && t.core.$el.on("onAferAppendSlide.lg.tm", function(e, i) {
					if (!t.core.lGalleryOn) {
						var n = t.core.$slide.eq(i);
						setTimeout(function() {
							t.loadVideoOnclick(n)
						}, 100)
					}
				})
			}, i.prototype.loadVideo = function(t, i, n, o, s) {
				var r = "",
					a = 1,
					l = "",
					u = this.core.isVideo(t, o) || {};
				if (n && (a = this.videoLoaded ? 0 : this.core.s.autoplayFirstVideo ? 1 : 0), u.youtube) l = "?wmode=opaque&autoplay=" + a + "&enablejsapi=1", this.core.s.youtubePlayerParams && (l = l + "&" + e.param(this.core.s.youtubePlayerParams)), r = '<iframe class="lg-video-object lg-youtube ' + i + '" width="560" height="315" src="//www.youtube.com/embed/' + u.youtube[1] + l + '" frameborder="0" allowfullscreen></iframe>';
				else if (u.vimeo) l = "?autoplay=" + a + "&api=1", this.core.s.vimeoPlayerParams && (l = l + "&" + e.param(this.core.s.vimeoPlayerParams)), r = '<iframe class="lg-video-object lg-vimeo ' + i + '" width="560" height="315"  src="//player.vimeo.com/video/' + u.vimeo[1] + l + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
				else if (u.dailymotion) l = "?wmode=opaque&autoplay=" + a + "&api=postMessage", this.core.s.dailymotionPlayerParams && (l = l + "&" + e.param(this.core.s.dailymotionPlayerParams)), r = '<iframe class="lg-video-object lg-dailymotion ' + i + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + u.dailymotion[1] + l + '" frameborder="0" allowfullscreen></iframe>';
				else if (u.html5) {
					var c = s.substring(0, 1);
					"." !== c && "#" !== c || (s = e(s).html()), r = s
				} else u.vk && (l = "&autoplay=" + a, this.core.s.vkPlayerParams && (l = l + "&" + e.param(this.core.s.vkPlayerParams)), r = '<iframe class="lg-video-object lg-vk ' + i + '" width="560" height="315" src="//vk.com/video_ext.php?' + u.vk[1] + l + '" frameborder="0" allowfullscreen></iframe>');
				return r
			}, i.prototype.loadVideoOnclick = function(e) {
				var t = this;
				if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
					if (e.hasClass("lg-has-video")) {
						var i = e.find(".lg-youtube").get(0),
							n = e.find(".lg-vimeo").get(0),
							o = e.find(".lg-dailymotion").get(0),
							s = e.find(".lg-html5").get(0);
						if (i) i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
						else if (n) try {
								$f(n).api("play")
							} catch (e) {
								console.error("Make sure you have included froogaloop2 js")
							} else if (o) o.contentWindow.postMessage("play", "*");
							else if (s)
							if (t.core.s.videojs) try {
								videojs(s).play()
							} catch (e) {
								console.error("Make sure you have included videojs")
							} else s.play();
						e.addClass("lg-video-playing")
					} else {
						e.addClass("lg-video-playing lg-has-video");
						var r = function(i, n) {
							if (e.find(".lg-video").append(t.loadVideo(i, "", !1, t.core.index, n)), n)
								if (t.core.s.videojs) try {
									videojs(t.core.$slide.eq(t.core.index).find(".lg-html5").get(0), t.core.s.videojsOptions, function() {
										this.play()
									})
								} catch (e) {
									console.error("Make sure you have included videojs")
								} else t.core.$slide.eq(t.core.index).find(".lg-html5").get(0).play()
						};
						t.core.s.dynamic ? r(t.core.s.dynamicEl[t.core.index].src, t.core.s.dynamicEl[t.core.index].html) : r(t.core.$items.eq(t.core.index).attr("href") || t.core.$items.eq(t.core.index).attr("data-src"), t.core.$items.eq(t.core.index).attr("data-html"));
						var a = e.find(".lg-object");
						e.find(".lg-video").append(a), e.find(".lg-video-object").hasClass("lg-html5") || (e.removeClass("lg-complete"), e.find(".lg-video-object").on("load.lg error.lg", function() {
							e.addClass("lg-complete")
						}))
					}
			}, i.prototype.destroy = function() {
				this.videoLoaded = !1
			}, e.fn.lightGallery.modules.video = i
		}()
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t(e)
		}) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(0, function(e) {
		! function() {
			"use strict";
			var t = {
					scale: 1,
					zoom: !0,
					actualSize: !0,
					enableZoomAfter: 300,
					useLeftForZoom: function() {
						var e = !1,
							t = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
						return t && parseInt(t[2], 10) < 54 && (e = !0), e
					}()
				},
				i = function(i) {
					return this.core = e(i).data("lightGallery"), this.core.s = e.extend({}, t, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = e(window).width() / 2, this.pageY = e(window).height() / 2 + e(window).scrollTop()), this
				};
			i.prototype.init = function() {
				var t = this,
					i = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
				t.core.s.actualSize && (i += '<span id="lg-actual-size" class="lg-icon"></span>'), t.core.s.useLeftForZoom ? t.core.$outer.addClass("lg-use-left-for-zoom") : t.core.$outer.addClass("lg-use-transition-for-zoom"), this.core.$outer.find(".lg-toolbar").append(i), t.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(i, n, o) {
					var s = t.core.s.enableZoomAfter + o;
					e("body").hasClass("lg-from-hash") && o ? s = 0 : e("body").removeClass("lg-from-hash"), t.zoomabletimeout = setTimeout(function() {
						t.core.$slide.eq(n).addClass("lg-zoomable")
					}, s + 30)
				});
				var n = 1,
					o = function(i) {
						var n = t.core.$outer.find(".lg-current .lg-image"),
							o = (e(window).width() - n.prop("offsetWidth")) / 2,
							s = (e(window).height() - n.prop("offsetHeight")) / 2 + e(window).scrollTop(),
							r = (i - 1) * (t.pageX - o),
							a = (i - 1) * (t.pageY - s);
						n.css("transform", "scale3d(" + i + ", " + i + ", 1)").attr("data-scale", i), t.core.s.useLeftForZoom ? n.parent().css({
							left: -r + "px",
							top: -a + "px"
						}).attr("data-x", r).attr("data-y", a) : n.parent().css("transform", "translate3d(-" + r + "px, -" + a + "px, 0)").attr("data-x", r).attr("data-y", a)
					},
					s = function() {
						n > 1 ? t.core.$outer.addClass("lg-zoomed") : t.resetZoom(), n < 1 && (n = 1), o(n)
					},
					r = function(i, o, r, a) {
						var l, u = o.prop("offsetWidth");
						l = t.core.s.dynamic ? t.core.s.dynamicEl[r].width || o[0].naturalWidth || u : t.core.$items.eq(r).attr("data-width") || o[0].naturalWidth || u, t.core.$outer.hasClass("lg-zoomed") ? n = 1 : l > u && (n = l / u || 2), a ? (t.pageX = e(window).width() / 2, t.pageY = e(window).height() / 2 + e(window).scrollTop()) : (t.pageX = i.pageX || i.originalEvent.targetTouches[0].pageX, t.pageY = i.pageY || i.originalEvent.targetTouches[0].pageY), s(), setTimeout(function() {
							t.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
						}, 10)
					},
					a = !1;
				t.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(e, i) {
					var n = t.core.$slide.eq(i).find(".lg-image");
					n.on("dblclick", function(e) {
						r(e, n, i)
					}), n.on("touchstart", function(e) {
						a ? (clearTimeout(a), a = null, r(e, n, i)) : a = setTimeout(function() {
							a = null
						}, 300), e.preventDefault()
					})
				}), e(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
					t.pageX = e(window).width() / 2, t.pageY = e(window).height() / 2 + e(window).scrollTop(), o(n)
				}), e("#lg-zoom-out").on("click.lg", function() {
					t.core.$outer.find(".lg-current .lg-image").length && (n -= t.core.s.scale, s())
				}), e("#lg-zoom-in").on("click.lg", function() {
					t.core.$outer.find(".lg-current .lg-image").length && (n += t.core.s.scale, s())
				}), e("#lg-actual-size").on("click.lg", function(e) {
					r(e, t.core.$slide.eq(t.core.index).find(".lg-image"), t.core.index, !0)
				}), t.core.$el.on("onBeforeSlide.lg.tm", function() {
					n = 1, t.resetZoom()
				}), t.zoomDrag(), t.zoomSwipe()
			}, i.prototype.resetZoom = function() {
				this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = e(window).width() / 2, this.pageY = e(window).height() / 2 + e(window).scrollTop()
			}, i.prototype.zoomSwipe = function() {
				var e = this,
					t = {},
					i = {},
					n = !1,
					o = !1,
					s = !1;
				e.core.$slide.on("touchstart.lg", function(i) {
					if (e.core.$outer.hasClass("lg-zoomed")) {
						var n = e.core.$slide.eq(e.core.index).find(".lg-object");
						s = n.prop("offsetHeight") * n.attr("data-scale") > e.core.$outer.find(".lg").height(), ((o = n.prop("offsetWidth") * n.attr("data-scale") > e.core.$outer.find(".lg").width()) || s) && (i.preventDefault(), t = {
							x: i.originalEvent.targetTouches[0].pageX,
							y: i.originalEvent.targetTouches[0].pageY
						})
					}
				}), e.core.$slide.on("touchmove.lg", function(r) {
					if (e.core.$outer.hasClass("lg-zoomed")) {
						var a, l, u = e.core.$slide.eq(e.core.index).find(".lg-img-wrap");
						r.preventDefault(), n = !0, i = {
							x: r.originalEvent.targetTouches[0].pageX,
							y: r.originalEvent.targetTouches[0].pageY
						}, e.core.$outer.addClass("lg-zoom-dragging"), l = s ? -Math.abs(u.attr("data-y")) + (i.y - t.y) : -Math.abs(u.attr("data-y")), a = o ? -Math.abs(u.attr("data-x")) + (i.x - t.x) : -Math.abs(u.attr("data-x")), (Math.abs(i.x - t.x) > 15 || Math.abs(i.y - t.y) > 15) && (e.core.s.useLeftForZoom ? u.css({
							left: a + "px",
							top: l + "px"
						}) : u.css("transform", "translate3d(" + a + "px, " + l + "px, 0)"))
					}
				}), e.core.$slide.on("touchend.lg", function() {
					e.core.$outer.hasClass("lg-zoomed") && n && (n = !1, e.core.$outer.removeClass("lg-zoom-dragging"), e.touchendZoom(t, i, o, s))
				})
			}, i.prototype.zoomDrag = function() {
				var t = this,
					i = {},
					n = {},
					o = !1,
					s = !1,
					r = !1,
					a = !1;
				t.core.$slide.on("mousedown.lg.zoom", function(n) {
					var s = t.core.$slide.eq(t.core.index).find(".lg-object");
					a = s.prop("offsetHeight") * s.attr("data-scale") > t.core.$outer.find(".lg").height(), r = s.prop("offsetWidth") * s.attr("data-scale") > t.core.$outer.find(".lg").width(), t.core.$outer.hasClass("lg-zoomed") && e(n.target).hasClass("lg-object") && (r || a) && (n.preventDefault(), i = {
						x: n.pageX,
						y: n.pageY
					}, o = !0, t.core.$outer.scrollLeft += 1, t.core.$outer.scrollLeft -= 1, t.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
				}), e(window).on("mousemove.lg.zoom", function(e) {
					if (o) {
						var l, u, c = t.core.$slide.eq(t.core.index).find(".lg-img-wrap");
						s = !0, n = {
							x: e.pageX,
							y: e.pageY
						}, t.core.$outer.addClass("lg-zoom-dragging"), u = a ? -Math.abs(c.attr("data-y")) + (n.y - i.y) : -Math.abs(c.attr("data-y")), l = r ? -Math.abs(c.attr("data-x")) + (n.x - i.x) : -Math.abs(c.attr("data-x")), t.core.s.useLeftForZoom ? c.css({
							left: l + "px",
							top: u + "px"
						}) : c.css("transform", "translate3d(" + l + "px, " + u + "px, 0)")
					}
				}), e(window).on("mouseup.lg.zoom", function(e) {
					o && (o = !1, t.core.$outer.removeClass("lg-zoom-dragging"), !s || i.x === n.x && i.y === n.y || (n = {
						x: e.pageX,
						y: e.pageY
					}, t.touchendZoom(i, n, r, a)), s = !1), t.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
				})
			}, i.prototype.touchendZoom = function(e, t, i, n) {
				var o = this,
					s = o.core.$slide.eq(o.core.index).find(".lg-img-wrap"),
					r = o.core.$slide.eq(o.core.index).find(".lg-object"),
					a = -Math.abs(s.attr("data-x")) + (t.x - e.x),
					l = -Math.abs(s.attr("data-y")) + (t.y - e.y),
					u = (o.core.$outer.find(".lg").height() - r.prop("offsetHeight")) / 2,
					c = Math.abs(r.prop("offsetHeight") * Math.abs(r.attr("data-scale")) - o.core.$outer.find(".lg").height() + u),
					d = (o.core.$outer.find(".lg").width() - r.prop("offsetWidth")) / 2,
					h = Math.abs(r.prop("offsetWidth") * Math.abs(r.attr("data-scale")) - o.core.$outer.find(".lg").width() + d);
				(Math.abs(t.x - e.x) > 15 || Math.abs(t.y - e.y) > 15) && (n && (l <= -c ? l = -c : l >= -u && (l = -u)), i && (a <= -h ? a = -h : a >= -d && (a = -d)), n ? s.attr("data-y", Math.abs(l)) : l = -Math.abs(s.attr("data-y")), i ? s.attr("data-x", Math.abs(a)) : a = -Math.abs(s.attr("data-x")), o.core.s.useLeftForZoom ? s.css({
					left: a + "px",
					top: l + "px"
				}) : s.css("transform", "translate3d(" + a + "px, " + l + "px, 0)"))
			}, i.prototype.destroy = function() {
				var t = this;
				t.core.$el.off(".lg.zoom"), e(window).off(".lg.zoom"), t.core.$slide.off(".lg.zoom"), t.core.$el.off(".lg.tm.zoom"), t.resetZoom(), clearTimeout(t.zoomabletimeout), t.zoomabletimeout = !1
			}, e.fn.lightGallery.modules.zoom = i
		}()
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t(e)
		}) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(0, function(e) {
		! function() {
			"use strict";
			var t = {
					hash: !0
				},
				i = function(i) {
					return this.core = e(i).data("lightGallery"), this.core.s = e.extend({}, t, this.core.s), this.core.s.hash && (this.oldHash = window.location.hash, this.init()), this
				};
			i.prototype.init = function() {
				var t, i = this;
				i.core.$el.on("onAfterSlide.lg.tm", function(e, t, n) {
					history.replaceState ? history.replaceState(null, null, window.location.pathname + window.location.search + "#lg=" + i.core.s.galleryId + "&slide=" + n) : window.location.hash = "lg=" + i.core.s.galleryId + "&slide=" + n
				}), e(window).on("hashchange.lg.hash", function() {
					t = window.location.hash;
					var e = parseInt(t.split("&slide=")[1], 10);
					t.indexOf("lg=" + i.core.s.galleryId) > -1 ? i.core.slide(e, !1, !1) : i.core.lGalleryOn && i.core.destroy()
				})
			}, i.prototype.destroy = function() {
				this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "", this.core.$el.off(".lg.hash"))
			}, e.fn.lightGallery.modules.hash = i
		}()
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t(e)
		}) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(0, function(e) {
		! function() {
			"use strict";
			var t = {
					share: !0,
					facebook: !0,
					facebookDropdownText: "Facebook",
					twitter: !0,
					twitterDropdownText: "Twitter",
					googlePlus: !0,
					googlePlusDropdownText: "GooglePlus",
					pinterest: !0,
					pinterestDropdownText: "Pinterest"
				},
				i = function(i) {
					return this.core = e(i).data("lightGallery"), this.core.s = e.extend({}, t, this.core.s), this.core.s.share && this.init(), this
				};
			i.prototype.init = function() {
				var t = this,
					i = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
				i += t.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + "</span></a></li>" : "", i += t.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + "</span></a></li>" : "", i += t.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + "</span></a></li>" : "", i += t.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + "</span></a></li>" : "", i += "</ul></span>", this.core.$outer.find(".lg-toolbar").append(i), this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'), e("#lg-share").on("click.lg", function() {
					t.core.$outer.toggleClass("lg-dropdown-active")
				}), e("#lg-dropdown-overlay").on("click.lg", function() {
					t.core.$outer.removeClass("lg-dropdown-active")
				}), t.core.$el.on("onAfterSlide.lg.tm", function(i, n, o) {
					setTimeout(function() {
						e("#lg-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(t.getSahreProps(o, "facebookShareUrl") || window.location.href)), e("#lg-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + t.getSahreProps(o, "tweetText") + "&url=" + encodeURIComponent(t.getSahreProps(o, "twitterShareUrl") || window.location.href)), e("#lg-share-googleplus").attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(t.getSahreProps(o, "googleplusShareUrl") || window.location.href)), e("#lg-share-pinterest").attr("href", "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(t.getSahreProps(o, "pinterestShareUrl") || window.location.href) + "&media=" + encodeURIComponent(t.getSahreProps(o, "src")) + "&description=" + t.getSahreProps(o, "pinterestText"))
					}, 100)
				})
			}, i.prototype.getSahreProps = function(e, t) {
				var i = "";
				if (this.core.s.dynamic) i = this.core.s.dynamicEl[e][t];
				else {
					var n = this.core.$items.eq(e).attr("href"),
						o = this.core.$items.eq(e).data(t);
					i = "src" === t && n || o
				}
				return i
			}, i.prototype.destroy = function() {}, e.fn.lightGallery.modules.share = i
		}()
	});
var Industry = function() {
	siteUrl = "";
	var e = $(window).width(),
		t = function() {
			"use strict";
			var e = parseInt($(".onepage").css("height"), 10);
			$(".scroll").unbind().on("click", function(e) {
				if (e.preventDefault(), "" !== this.hash) {
					var t = this.hash,
						i = $(t).offset().top,
						n = parseInt($(".onepage").css("height"), 10);
					$("body").scrollspy({
						target: ".navbar",
						offset: n + 2
					});
					var o = i - n;
					$("html, body").animate({
						scrollTop: o
					}, 800, function() {})
				}
			}), $("body").scrollspy({
				target: ".navbar",
				offset: e + 2
			})
		},
		i = function() {
			$(".header").css("height", "");
			var t = $(".header").height();
			$(".header").css("height", t), e > 991 && $(".homedemo").find(".mega-menu").css("height", "calc(100vh - " + t + "px)")
		},
		n = function(e) {
			if (0 == jQuery(e).length) return !1;
			var t, i = 0,
				n = 0,
				o = new Array;
			$(e).each(function() {
				if (t = $(this), $(t).height("auto"), topPostion = t.position().top, n != topPostion) {
					for (currentDiv = 0; currentDiv < o.length; currentDiv++) o[currentDiv].height(i);
					o.length = 0, n = topPostion, i = t.height(), o.push(t)
				} else o.push(t), i = i < t.height() ? t.height() : i;
				for (currentDiv = 0; currentDiv < o.length; currentDiv++) o[currentDiv].height(i)
			})
		},
		o = function() {
			"use strict";
			jQuery(".site-footer").css("display", "block"), jQuery(".site-footer").css("height", "auto");
			var e = jQuery(".site-footer").outerHeight();
			jQuery(".footer-fixed > .page-wraper").css("padding-bottom", e), jQuery(".site-footer").css("height", e)
		},
		s = function() {
			"use strict";
			var e = jQuery(this),
				t = e.find(".modal-dialog");
			e.css("display", "block"), t.css("margin-top", Math.max(0, (jQuery(window).height() - t.height()) / 2))
		},
		r = new Date;
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], r.setMonth(r.getMonth() + 1), r = r.getDate() + " " + monthNames[r.getMonth()] + " " + r.getFullYear();
	var a = function() {
		"use strict";
		e <= 991 && jQuery(".navbar-nav > li > a, .sub-menu > li > a").unbind().on("click", function(e) {
			jQuery(this).parent().hasClass("open") ? jQuery(this).parent().removeClass("open") : (jQuery(this).parent().parent().find("li").removeClass("open"), jQuery(this).parent().addClass("open"))
		}), jQuery(".full-sidenav .navbar-nav > li > a").next(".sub-menu").slideUp(), jQuery(".full-sidenav .sub-menu > li > a").next(".sub-menu").slideUp(), jQuery(".full-sidenav .navbar-nav > li > a, .full-sidenav .sub-menu > li > a").unbind().on("click", function(e) {
			jQuery(".full-sidenav .navbar-nav > li > a").not(this).next(".sub-menu").slideUp(), jQuery(this).next(".sub-menu").toggle(500)
		}), jQuery(".menu-icon").on("click", function() {
			jQuery(".menu-close,.full-sidenav").addClass("active"), t()
		}), jQuery(".menu-close").on("click", function() {
			jQuery(".menu-close,.full-sidenav").removeClass("active")
		})
	};
	return {
		init: function() {
			jQuery(".box-hover").on("mouseenter", function() {
					jQuery(".box-hover").removeClass("active"), jQuery(this).addClass("active")
				}), $(".wow").length > 0 && new WOW({
					boxClass: "wow",
					animateClass: "animated",
					offset: 50,
					mobile: !1
				}).init(), $(".price-slide, .price-slide-2").length > 0 && $("#slider-range,#slider-range-2").slider({
					range: !0,
					min: 300,
					max: 4e3,
					values: [0, 5e3],
					slide: function(e, t) {
						var i = t.values[0],
							n = t.values[1];
						$("#" + this.id).prev().val("$" + i + " - $" + n)
					}
				}), t(), a(), i(),
				function() {
					"use strict";
					var e = jQuery("#quik-search-btn"),
						t = jQuery("#quik-search-remove");
					e.on("click", function() {
						jQuery(".dlab-quik-search").fadeIn(500), jQuery(".dlab-quik-search").addClass("On")
					}), t.on("click", function() {
						jQuery(".dlab-quik-search").fadeOut(500), jQuery(".dlab-quik-search").removeClass("On")
					})
				}(),
				function() {
					"use strict";
					jQuery(".mfp-gallery").magnificPopup({
						delegate: ".mfp-link",
						type: "image",
						tLoading: "Loading image #%curr%...",
						mainClass: "mfp-img-mobile",
						gallery: {
							enabled: !0,
							navigateByImgClick: !0,
							preload: [0, 1]
						},
						image: {
							tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
							titleSrc: function(e) {
								return e.el.attr("title") + "<small></small>"
							}
						}
					}), jQuery(".video").magnificPopup({
						type: "iframe",
						iframe: {
							markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Some caption</div></div>'
						},
						callbacks: {
							markupParse: function(e, t, i) {
								t.title = i.el.attr("title")
							}
						}
					}), $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
						disableOn: 700,
						type: "iframe",
						mainClass: "mfp-fade",
						removalDelay: 160,
						preloader: !1,
						fixedContentPos: !1
					})
				}(), jQuery("#accordion").on("hidden.bs.collapse", function(e) {
					jQuery(e.target).prev(".panel-heading").find("i.indicator").toggleClass("glyphicon-minus glyphicon-plus")
				}), jQuery("#accordion").on("shown.bs.collapse", function(e) {
					jQuery(e.target).prev(".panel-heading").find("i.indicator").toggleClass("glyphicon-minus glyphicon-plus")
				}),
				function() {
					"use strict";
					jQuery("button.scroltop").on("click", function() {
						return jQuery("html, body").animate({
							scrollTop: 0
						}, 1e3), !1
					}), jQuery(window).bind("scroll", function() {
						jQuery(window).scrollTop() > 900 ? jQuery("button.scroltop").fadeIn(1e3) : jQuery("button.scroltop").fadeOut(1e3)
					})
				}(), jQuery.support.placeholder = "placeholder" in document.createElement("input"), jQuery.support.placeholder || (jQuery("[placeholder]").focus(function() {
					jQuery(this).val() == jQuery(this).attr("placeholder") && jQuery(this).val("")
				}).blur(function() {
					"" == jQuery(this).val() && jQuery(this).val(jQuery(this).attr("placeholder"))
				}).blur(), jQuery("[placeholder]").parents("form").submit(function() {
					jQuery(this).find("[placeholder]").each(function() {
						jQuery(this).val() == jQuery(this).attr("placeholder") && jQuery(this).val("")
					})
				})), jQuery(".dezPlaceAni").length && ($(".dezPlaceAni input, .dezPlaceAni textarea").on("focus", function() {
					$(this).parents(".form-group, .news-box").addClass("focused")
				}), $(".dezPlaceAni input, .dezPlaceAni textarea").on("blur", function() {
					"" == $(this).val() ? ($(this).removeClass("filled"), $(this).parents(".form-group, .news-box").removeClass("focused")) : $(this).addClass("filled")
				})), o(),
				function() {
					"use strict";
					jQuery(document).on("change", ".btn-file :file", function() {
						var e = jQuery(this),
							t = e.get(0).files ? e.get(0).files.length : 1,
							i = e.val().replace(/\\/g, "/").replace(/.*\//, "");
						e.trigger("fileselect", [t, i])
					}), jQuery(".btn-file :file").on("fileselect", function(e, t, i) {
						input = jQuery(this).parents(".input-group").find(":text");
						var n = t > 10 ? t + " files selected" : i;
						input.length ? input.val(n) : n && alert(n)
					})
				}(),
				function() {
					"use strict";
					jQuery(window).bind("scroll", function() {
						if (jQuery(".sticky-header").length) {
							var e = jQuery(".sticky-header");
							$(window).scrollTop() > e.offset().top ? e.addClass("is-fixed") : e.removeClass("is-fixed")
						}
					})
				}(),
				function() {
					"use strict";
					var t = [];
					jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function(e) {
						t.push(jQuery(this).height())
					}), jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function(e) {
						var i = Math.max.apply(Math, t);
						jQuery(this).css("height", i)
					}), t = [], e < 991 && jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function(e) {
						jQuery(this).css("height", "")
					})
				}(), jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'), jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'), jQuery("#image-gallery-mix").length && (jQuery(".gallery-filter").find("li").each(function() {
					$(this).addClass("filter")
				}), jQuery("#image-gallery-mix").mixItUp()), jQuery(".gallery-filter.masonary").length && jQuery(".gallery-filter.masonary").on("click", "span", function() {
					var e = $(this).parent().attr("data-filter");
					return jQuery(".gallery-filter.masonary span").parent().removeClass("active"), jQuery(this).parent().addClass("active"), jQuery("#image-gallery-isotope").isotope({
						filter: e
					}), !1
				}),
				function(e) {
					$(".countdown").length && $(".countdown").countdown({
						date: e + " 23:5"
					}, function() {
						$(".countdown").text("we are live")
					})
				}(r), $(".content-scroll").length && $(".content-scroll").mCustomScrollbar({
					setWidth: !1,
					setHeight: !1,
					axis: "y"
				}), $(".openbtn").on("click", function(e) {
					e.preventDefault(), $("#mySidenav").length > 0 && (document.getElementById("mySidenav").style.left = "0"), $("#mySidenav1").length > 0 && (document.getElementById("mySidenav1").style.right = "0")
				}), $(".closebtn").on("click", function(e) {
					e.preventDefault(), $("#mySidenav").length > 0 && (document.getElementById("mySidenav").style.left = "-300px"), $("#mySidenav1").length > 0 && (document.getElementById("mySidenav1").style.right = "-820px")
				}), $(".item-close").on("click", function() {
					$(this).closest(".cart-item").hide("500")
				}), $(".cart-btn").unbind().on("click", function() {
					$(".cart-list").slideToggle("slow")
				}), $(".full-height").css("height", $(window).height()),
				function() {
					if ($(".setResizeMargin").length > 0 && e >= 1280) {
						var t = $(".container").width(),
							i = (e - t) / 2;
						$(".setResizeMargin").css("margin-left", i)
					}
				}(), jQuery(window).on("resize", function() {
					jQuery(".modal:visible").each(s), n(".equal-wraper .equal-col"), o()
				}), $("#lightgallery, .lightgallery").length > 0 && $("#lightgallery, .lightgallery").lightGallery({
					selector: ".check-km",
					loop: !0,
					thumbnail: !0,
					exThumbImage: "data-exthumbimage"
				}), jQuery(".modal").on("show.bs.modal", s)
		},
		handleMasonryFilter: function() {
			! function() {
				"use strict";
				if (jQuery("#masonry1").length) {
					var e = $("#masonry1");
					e.imagesLoaded(function() {
						e.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters1").on("click", "li", function(t) {
						t.preventDefault();
						var i = $(this).attr("data-filter");
						e.masonryFilter({
							filter: function() {
								return !i || $(this).hasClass(i)
							}
						})
					})
				}
				if (jQuery("#masonry2").length) {
					var t = $("#masonry2");
					t.imagesLoaded(function() {
						t.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters2").on("click", "li", function(e) {
						e.preventDefault();
						var i = $(this).attr("data-filter");
						t.masonryFilter({
							filter: function() {
								return !i || $(this).hasClass(i)
							}
						})
					})
				}
				if (jQuery("#masonry3").length) {
					var i = $("#masonry3");
					i.imagesLoaded(function() {
						i.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters3").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						i.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry4").length) {
					var n = $("#masonry4");
					n.imagesLoaded(function() {
						n.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters4").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						n.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry5").length) {
					var o = $("#masonry5");
					o.imagesLoaded(function() {
						o.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters5").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						o.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry6").length) {
					var s = $("#masonry6");
					s.imagesLoaded(function() {
						s.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters6").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						s.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry7").length) {
					var r = $("#masonry7");
					r.imagesLoaded(function() {
						r.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters7").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						r.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry8").length) {
					var a = $("#masonry8");
					a.imagesLoaded(function() {
						a.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters8").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						a.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry9").length) {
					var l = $("#masonry9");
					l.imagesLoaded(function() {
						l.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters9").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						l.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry10").length) {
					var u = $("#masonry10");
					u.imagesLoaded(function() {
						u.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters10").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						u.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry11").length) {
					var c = $("#masonry11");
					c.imagesLoaded(function() {
						c.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters11").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						c.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry12").length) {
					var d = $("#masonry12");
					d.imagesLoaded(function() {
						d.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters12").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						d.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry13").length) {
					var h = $("#masonry13");
					h.imagesLoaded(function() {
						h.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters13").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						h.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry14").length) {
					var p = $("#masonry14");
					p.imagesLoaded(function() {
						p.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters14").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						p.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry15").length) {
					var f = $("#masonry15");
					f.imagesLoaded(function() {
						f.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters15").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						f.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry16").length) {
					var m = $("#masonry16");
					m.imagesLoaded(function() {
						m.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters16").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						m.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry17").length) {
					var g = $("#masonry17");
					g.imagesLoaded(function() {
						g.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters17").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						g.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
				if (jQuery("#masonry18").length) {
					var v = $("#masonry18");
					v.imagesLoaded(function() {
						v.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters18").on("click", "li", function(e) {
						e.preventDefault();
						var t = $(this).attr("data-filter");
						v.masonryFilter({
							filter: function() {
								return !t || $(this).hasClass(t)
							}
						})
					})
				}
			}()
		},
		load: function() {
			jQuery("select").length && jQuery("select").selectpicker(), jQuery("input[name='demo_vertical2']").TouchSpin({
					verticalbuttons: !0,
					verticalupclass: "ti-plus",
					verticaldownclass: "ti-minus"
				}), n(".equal-wraper .equal-col"), jQuery(".counter").length && jQuery(".counter").counterUp({
					delay: 10,
					time: 3e3
				}),
				function() {
					"use strict";
					if (jQuery("#masonry, .masonry").length) {
						var e = $("#masonry, .masonry");
						jQuery(".card-container").length && e.imagesLoaded(function() {
							e.masonry({
								gutterWidth: 15,
								isAnimated: !0,
								itemSelector: ".card-container"
							})
						})
					}
					jQuery(".filters").length && jQuery(".filters").on("click", "li", function(t) {
						t.preventDefault();
						var i = $(this).attr("data-filter");
						e.masonryFilter({
							filter: function() {
								return !i || $(this).hasClass(i)
							}
						})
					})
				}(), jQuery("body").append("")
		},
		resize: function() {
			e = $(window).width(), a(), setTimeout(function() {
				i()
			}, 500)
		}
	}
}();

function contactForm() {
	var e;
	window.verifyRecaptchaCallback = function(e) {
		$("input[data-recaptcha]").val(e).trigger("change")
	}, window.expiredRecaptchaCallback = function() {
		$("input[data-recaptcha]").val("").trigger("change")
	}, $(".dzForm").submit(function(t) {
		t.preventDefault(), $(".dzFormMsg").html('<div class="gen alert alert-success">Submiting..</div>');
		var i = $(this).attr("action"),
			n = $(this).serialize();
		$.ajax({
			method: "POST",
			url: i,
			data: n,
			dataType: "json",
			success: function(t) {
				1 == t.status && (e = '<div class="gen alert alert-success">' + t.msg + "</div>"), 0 == t.status && (e = '<div class="err alert alert-danger">' + t.msg + "</div>"), $(".dzFormMsg").html(e), $(".dzForm")[0].reset(), grecaptcha.reset()
			}
		})
	}), setInterval(function() {
		$(".dzFormMsg .alert").hide(1e3)
	}, 1e4), $(".dzSubscribe").submit(function(t) {
		t.preventDefault();
		var i = $(this).attr("action"),
			n = $(this).serialize();
		$.ajax({
			method: "POST",
			url: i,
			data: n,
			dataType: "json",
			success: function(t) {
				1 == t.status && (e = '<p style="color: #34A853">' + t.msg + "</p>"), 0 == t.status && (e = '<p style="color: #EA4335">' + t.msg + "</p>"), $(".dzSubscribeMsg").html(e), $(".dzSubscribe")[0].reset()
			}
		})
	}), setInterval(function() {
		$(".dzSubscribeMsg p").hide(1e3)
	}, 5e3)
}

function init_map() {
	var e = {
			zoom: 10,
			center: new google.maps.LatLng(51.5073509, -.12775829999998223),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: [{
				featureType: "all",
				elementType: "labels.text.fill",
				stylers: [{
					saturation: 36
				}, {
					color: "#000000"
				}, {
					lightness: 40
				}]
			}, {
				featureType: "all",
				elementType: "labels.text.stroke",
				stylers: [{
					visibility: "on"
				}, {
					color: "#000000"
				}, {
					lightness: 16
				}]
			}, {
				featureType: "all",
				elementType: "labels.icon",
				stylers: [{
					visibility: "off"
				}]
			}, {
				featureType: "administrative",
				elementType: "geometry.fill",
				stylers: [{
					color: "#000000"
				}, {
					lightness: 20
				}]
			}, {
				featureType: "administrative",
				elementType: "geometry.stroke",
				stylers: [{
					color: "#000000"
				}, {
					lightness: 17
				}, {
					weight: 1.2
				}]
			}, {
				featureType: "landscape",
				elementType: "geometry",
				stylers: [{
					color: "#000000"
				}, {
					lightness: 20
				}]
			}, {
				featureType: "poi",
				elementType: "geometry",
				stylers: [{
					color: "#000000"
				}, {
					lightness: 21
				}]
			}, {
				featureType: "road.highway",
				elementType: "geometry.fill",
				stylers: [{
					color: "#000000"
				}, {
					lightness: 17
				}]
			}, {
				featureType: "road.highway",
				elementType: "geometry.stroke",
				stylers: [{
					color: "#000000"
				}, {
					lightness: 29
				}, {
					weight: .2
				}]
			}, {
				featureType: "road.arterial",
				elementType: "geometry",
				stylers: [{
					color: "#000000"
				}, {
					lightness: 18
				}]
			}, {
				featureType: "road.local",
				elementType: "geometry",
				stylers: [{
					color: "#000000"
				}, {
					lightness: 16
				}]
			}, {
				featureType: "transit",
				elementType: "geometry",
				stylers: [{
					color: "#000000"
				}, {
					lightness: 19
				}]
			}, {
				featureType: "water",
				elementType: "geometry",
				stylers: [{
					color: "#000000"
				}, {
					lightness: 17
				}]
			}]
		},
		t = new google.maps.Map(document.getElementById("gmap_canvas"), e);
	marker = new google.maps.Marker({
		map: t,
		position: new google.maps.LatLng(51.5073509, -.12775829999998223)
	}), infowindow = new google.maps.InfoWindow({
		content: "<strong>Title</strong><br>London, United Kingdom<br>"
	}), google.maps.event.addListener(marker, "click", function() {
		infowindow.open(t, marker)
	})
}
jQuery(document).ready(function() {
		"use strict";
		jQuery(".navbar-nav > li > a, .sub-menu > li > a").unbind().on("click", (function(e) {
			jQuery(this).parent().hasClass("open") ? jQuery(this).parent().removeClass("open") : (jQuery(this).parent().parent().find("li").removeClass("open"), jQuery(this).parent().addClass("open"))
		}));
		Industry.init(), $('a[data-toggle="tab"]').click(function() {
			$('a[data-toggle="tab"]').click(function() {
				$($(this).attr("href")).show().addClass("show active").siblings().hide()
			})
		}), jQuery(".navicon").on("click", function() {
			$(this).toggleClass("open")
		})
	}), jQuery(window).on("load", function() {
		"use strict";
		Industry.load(), setTimeout(function() {
			jQuery("#loading-area").remove()
		}, 0)
	}), jQuery(window).on("resize", function() {
		"use strict";
		
	}), jQuery(document).ready(function() {
		jQuery(".img-carousel").owlCarousel({
			loop: !0,
			margin: 30,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		}), jQuery(".img-carousel-dots").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !1,
			dots: !0,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		}), jQuery(".img-carousel-dots-nav").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !0,
			dots: !0,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		}), jQuery(".img-carousel-content").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		}), jQuery(".service-carousel").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				1024: {
					items: 3
				},
				1400: {
					items: 3.7
				}
			}
		}), jQuery(".gallery-light").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 0,
			nav: !1,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 4
				},
				480: {
					items: 6
				},
				1024: {
					items: 8
				},
				1400: {
					items: 12
				}
			}
		}), jQuery(".portfolio-carousel").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		}), jQuery(".portfolio-carousel-1").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 15,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		}), jQuery(".portfolio-carousel-nogap").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 0,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				767: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		}), jQuery(".blog-carousel").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				991: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		}), jQuery(".event-carousel").owlCarousel({
			loop: !0,
			margin: 30,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				767: {
					items: 3
				},
				1000: {
					items: 3
				}
			}
		}), jQuery(".client-logo-carousel").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				767: {
					items: 3
				},
				1000: {
					items: 5
				}
			}
		}), jQuery(".owl-fade-one").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			autoplayTimeout: 2e3,
			margin: 30,
			nav: !0,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			items: 1,
			dots: !1,
			animateOut: "fadeOut"
		}), jQuery(".testimonial-one").owlCarousel({
			loop: !0,
			margin: 30,
			nav: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				767: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		}), jQuery(".testimonial-seven").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				767: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		}), jQuery(".owl-slider").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 0,
			nav: !1,
			dots: !0,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				1024: {
					items: 1
				},
				1200: {
					items: 1
				}
			}
		}), jQuery(".testimonial-two").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				991: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		}), jQuery(".testimonial-two-dots").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !0,
			dots: !0,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				991: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		}), jQuery(".testimonial-three").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				991: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		}), jQuery(".testimonial-four").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 80,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				991: {
					items: 2
				}
			}
		}), jQuery(".testimonial-five").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !1,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				991: {
					items: 2
				}
			}
		}), jQuery(".testimonial-six").owlCarousel({
			loop: !0,
			margin: 0,
			center: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			nav: !1,
			dots: !0,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				991: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		}), jQuery(".widget-project-box").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 0,
			nav: !1,
			dots: !0,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				991: {
					items: 1
				}
			}
		}), jQuery(".our-classes").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !1,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				767: {
					items: 3
				},
				1000: {
					items: 5
				}
			}
		}), jQuery(".item-2").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !1,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				767: {
					items: 2
				},
				1000: {
					items: 2
				}
			}
		}), jQuery(".item-3").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !1,
			dots: !1,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				767: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		}), jQuery(".item-center").owlCarousel({
			center: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			items: 3,
			loop: !0,
			margin: 0,
			nav: !1,
			dots: !0,
			autoplaySpeed: 1e3,
			navSpeed: 1e3,
			paginationSpeed: 1e3,
			slideSpeed: 1e3,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				767: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		}), jQuery(".filter-curs").owlCarousel({
			center: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			items: 3,
			autoWidth: !0,
			loop: !0,
			margin: 15,
			nav: !1,
			dots: !0,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				767: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		}), jQuery(".project-carousel1").owlCarousel({
			items: 4,
			loop: !0,
			margin: 10,
			nav: !1,
			dots: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				767: {
					items: 2
				},
				1000: {
					items: 4
				}
			}
		}), jQuery(".project-carousel-1").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			right: !0,
			margin: 0,
			nav: !0,
			navText: ['<i class="la la-arrow-left"></i> Prev', 'Next <i class="la la-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				991: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		}), jQuery(".exhibition-carousel").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			right: !0,
			margin: 0,
			nav: !0,
			dots: !0,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				991: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		}), jQuery(".project-carousel-2").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			right: !0,
			margin: 30,
			nav: !0,
			dots: !0,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive: {
				0: {
					items: 1,
					stagePadding: 60,
					margin: 15
				},
				480: {
					items: 1,
					margin: 15,
					stagePadding: 60
				},
				768: {
					items: 1
				},
				1000: {
					items: 1.5
				}
			}
		}), jQuery(".about-ser-carousel").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			margin: 30,
			nav: !0,
			dots: !1,
			navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				1024: {
					items: 2
				},
				1200: {
					items: 3
				}
			}
		}), jQuery(".owl-project").owlCarousel({
			loop: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			responsive: !0,
			margin: 30,
			nav: !1,
			dots: !1,
			navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2,
					margin: 15
				},
				700: {
					items: 2,
					margin: 15
				},
				1024: {
					items: 3
				},
				1200: {
					items: 3
				}
			}
		}), jQuery(".owl-team").owlCarousel({
			loop: !0,
			responsive: !0,
			margin: 30,
			nav: !1,
			dots: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				700: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		}), jQuery(".client-carousel").owlCarousel({
			loop: !0,
			margin: 0,
			nav: !1,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
			dots: !0,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				991: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		}), jQuery(".team-carousel").owlCarousel({
			loop: !0,
			margin: 30,
			center: !0,
			nav: !0,
			dots: !1,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				991: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		}), jQuery(".testimonial-one-dots").owlCarousel({
			loop: !0,
			margin: 30,
			center: !1,
			nav: !0,
			dots: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			navText: ['<i class="ti-arrow-circle-left"></i>', '<i class="ti-arrow-circle-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				991: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		}), jQuery(".testimonial-box-carousel").owlCarousel({
			loop: !0,
			margin: 30,
			center: !1,
			nav: !0,
			dots: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				991: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		}), jQuery(".testimonial-num-count").owlCarousel({
			loop: !0,
			margin: 30,
			center: !1,
			nav: !0,
			dots: !0,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				991: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		}), jQuery(".project-carousel").owlCarousel({
			loop: !0,
			margin: 20,
			center: !0,
			nav: !0,
			dots: !1,
			autoplaySpeed: 3e3,
			navSpeed: 3e3,
			paginationSpeed: 3e3,
			slideSpeed: 3e3,
			smartSpeed: 3e3,
			autoplay: 3e3,
			navText: ['<i class="la la-long-arrow-left"></i>', '<i class="la la-long-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				1024: {
					items: 2
				},
				1200: {
					items: 2
				}
			}
		})
	}), $("#gmap_canvas").length > 1 && google.maps.event.addDomListener(window, "load", init_map), jQuery(document).ready(function() {
		"use strict";
		contactForm()
	}),
	function(e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
	}(function(e) {
		var t, i, n, o;

		function s(t, i) {
			var n, o, s, a = t.nodeName.toLowerCase();
			return "area" === a ? (o = (n = t.parentNode).name, !(!t.href || !o || "map" !== n.nodeName.toLowerCase()) && !!(s = e("img[usemap='#" + o + "']")[0]) && r(s)) : (/^(input|select|textarea|button|object)$/.test(a) ? !t.disabled : "a" === a && t.href || i) && r(t)
		}

		function r(t) {
			return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
				return "hidden" === e.css(this, "visibility")
			}).length
		}
		e.ui = e.ui || {}, e.extend(e.ui, {
			version: "1.11.4",
			keyCode: {
				BACKSPACE: 8,
				COMMA: 188,
				DELETE: 46,
				DOWN: 40,
				END: 35,
				ENTER: 13,
				ESCAPE: 27,
				HOME: 36,
				LEFT: 37,
				PAGE_DOWN: 34,
				PAGE_UP: 33,
				PERIOD: 190,
				RIGHT: 39,
				SPACE: 32,
				TAB: 9,
				UP: 38
			}
		}), e.fn.extend({
			scrollParent: function(t) {
				var i = this.css("position"),
					n = "absolute" === i,
					o = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
					s = this.parents().filter(function() {
						var t = e(this);
						return (!n || "static" !== t.css("position")) && o.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
					}).eq(0);
				return "fixed" !== i && s.length ? s : e(this[0].ownerDocument || document)
			},
			uniqueId: (t = 0, function() {
				return this.each(function() {
					this.id || (this.id = "ui-id-" + ++t)
				})
			}),
			removeUniqueId: function() {
				return this.each(function() {
					/^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
				})
			}
		}), e.extend(e.expr[":"], {
			data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
				return function(i) {
					return !!e.data(i, t)
				}
			}) : function(t, i, n) {
				return !!e.data(t, n[3])
			},
			focusable: function(t) {
				return s(t, !isNaN(e.attr(t, "tabindex")))
			},
			tabbable: function(t) {
				var i = e.attr(t, "tabindex"),
					n = isNaN(i);
				return (n || i >= 0) && s(t, !n)
			}
		}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
			var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
				o = i.toLowerCase(),
				s = {
					innerWidth: e.fn.innerWidth,
					innerHeight: e.fn.innerHeight,
					outerWidth: e.fn.outerWidth,
					outerHeight: e.fn.outerHeight
				};

			function r(t, i, o, s) {
				return e.each(n, function() {
					i -= parseFloat(e.css(t, "padding" + this)) || 0, o && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
				}), i
			}
			e.fn["inner" + i] = function(t) {
				return void 0 === t ? s["inner" + i].call(this) : this.each(function() {
					e(this).css(o, r(this, t) + "px")
				})
			}, e.fn["outer" + i] = function(t, n) {
				return "number" != typeof t ? s["outer" + i].call(this, t) : this.each(function() {
					e(this).css(o, r(this, t, !0, n) + "px")
				})
			}
		}), e.fn.addBack || (e.fn.addBack = function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = (i = e.fn.removeData, function(t) {
			return arguments.length ? i.call(this, e.camelCase(t)) : i.call(this)
		})), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
			focus: (o = e.fn.focus, function(t, i) {
				return "number" == typeof t ? this.each(function() {
					var n = this;
					setTimeout(function() {
						e(n).focus(), i && i.call(n)
					}, t)
				}) : o.apply(this, arguments)
			}),
			disableSelection: (n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
				return this.bind(n + ".ui-disableSelection", function(e) {
					e.preventDefault()
				})
			}),
			enableSelection: function() {
				return this.unbind(".ui-disableSelection")
			},
			zIndex: function(t) {
				if (void 0 !== t) return this.css("zIndex", t);
				if (this.length)
					for (var i, n, o = e(this[0]); o.length && o[0] !== document;) {
						if (("absolute" === (i = o.css("position")) || "relative" === i || "fixed" === i) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
						o = o.parent()
					}
				return 0
			}
		}), e.ui.plugin = {
			add: function(t, i, n) {
				var o, s = e.ui[t].prototype;
				for (o in n) s.plugins[o] = s.plugins[o] || [], s.plugins[o].push([i, n[o]])
			},
			call: function(e, t, i, n) {
				var o, s = e.plugins[t];
				if (s && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
					for (o = 0; o < s.length; o++) e.options[s[o][0]] && s[o][1].apply(e.element, i)
			}
		};
		var a = 0,
			l = Array.prototype.slice;
		e.cleanData = function(t) {
			return function(i) {
				var n, o, s;
				for (s = 0; null != (o = i[s]); s++) try {
					(n = e._data(o, "events")) && n.remove && e(o).triggerHandler("remove")
				} catch (e) {}
				t(i)
			}
		}(e.cleanData), e.widget = function(t, i, n) {
			var o, s, r, a, l = {},
				u = t.split(".")[0];
			return t = t.split(".")[1], o = u + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][o.toLowerCase()] = function(t) {
				return !!e.data(t, o)
			}, e[u] = e[u] || {}, s = e[u][t], r = e[u][t] = function(e, t) {
				if (!this._createWidget) return new r(e, t);
				arguments.length && this._createWidget(e, t)
			}, e.extend(r, s, {
				version: n.version,
				_proto: e.extend({}, n),
				_childConstructors: []
			}), (a = new i).options = e.widget.extend({}, a.options), e.each(n, function(t, n) {
				var o, s;
				e.isFunction(n) ? l[t] = (o = function() {
					return i.prototype[t].apply(this, arguments)
				}, s = function(e) {
					return i.prototype[t].apply(this, e)
				}, function() {
					var e, t = this._super,
						i = this._superApply;
					return this._super = o, this._superApply = s, e = n.apply(this, arguments), this._super = t, this._superApply = i, e
				}) : l[t] = n
			}), r.prototype = e.widget.extend(a, {
				widgetEventPrefix: s && a.widgetEventPrefix || t
			}, l, {
				constructor: r,
				namespace: u,
				widgetName: t,
				widgetFullName: o
			}), s ? (e.each(s._childConstructors, function(t, i) {
				var n = i.prototype;
				e.widget(n.namespace + "." + n.widgetName, r, i._proto)
			}), delete s._childConstructors) : i._childConstructors.push(r), e.widget.bridge(t, r), r
		}, e.widget.extend = function(t) {
			for (var i, n, o = l.call(arguments, 1), s = 0, r = o.length; s < r; s++)
				for (i in o[s]) n = o[s][i], o[s].hasOwnProperty(i) && void 0 !== n && (e.isPlainObject(n) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], n) : e.widget.extend({}, n) : t[i] = n);
			return t
		}, e.widget.bridge = function(t, i) {
			var n = i.prototype.widgetFullName || t;
			e.fn[t] = function(o) {
				var s = "string" == typeof o,
					r = l.call(arguments, 1),
					a = this;
				return s ? this.each(function() {
					var i, s = e.data(this, n);
					return "instance" === o ? (a = s, !1) : s ? e.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r)) !== s && void 0 !== i ? (a = i && i.jquery ? a.pushStack(i.get()) : i, !1) : void 0 : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
				}) : (r.length && (o = e.widget.extend.apply(null, [o].concat(r))), this.each(function() {
					var t = e.data(this, n);
					t ? (t.option(o || {}), t._init && t._init()) : e.data(this, n, new i(o, this))
				})), a
			}
		}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options: {
				disabled: !1,
				create: null
			},
			_createWidget: function(t, i) {
				i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = a++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
					remove: function(e) {
						e.target === i && this.destroy()
					}
				}), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
			},
			_getCreateOptions: e.noop,
			_getCreateEventData: e.noop,
			_create: e.noop,
			_init: e.noop,
			destroy: function() {
				this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
			},
			_destroy: e.noop,
			widget: function() {
				return this.element
			},
			option: function(t, i) {
				var n, o, s, r = t;
				if (0 === arguments.length) return e.widget.extend({}, this.options);
				if ("string" == typeof t)
					if (r = {}, n = t.split("."), t = n.shift(), n.length) {
						for (o = r[t] = e.widget.extend({}, this.options[t]), s = 0; s < n.length - 1; s++) o[n[s]] = o[n[s]] || {}, o = o[n[s]];
						if (t = n.pop(), 1 === arguments.length) return void 0 === o[t] ? null : o[t];
						o[t] = i
					} else {
						if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
						r[t] = i
					} return this._setOptions(r), this
			},
			_setOptions: function(e) {
				var t;
				for (t in e) this._setOption(t, e[t]);
				return this
			},
			_setOption: function(e, t) {
				return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
			},
			enable: function() {
				return this._setOptions({
					disabled: !1
				})
			},
			disable: function() {
				return this._setOptions({
					disabled: !0
				})
			},
			_on: function(t, i, n) {
				var o, s = this;
				"boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = o = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), e.each(n, function(n, r) {
					function a() {
						if (t || !0 !== s.options.disabled && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? s[r] : r).apply(s, arguments)
					}
					"string" != typeof r && (a.guid = r.guid = r.guid || a.guid || e.guid++);
					var l = n.match(/^([\w:-]*)\s*(.*)$/),
						u = l[1] + s.eventNamespace,
						c = l[2];
					c ? o.delegate(c, u, a) : i.bind(u, a)
				})
			},
			_off: function(t, i) {
				i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
			},
			_delay: function(e, t) {
				var i = this;
				return setTimeout(function() {
					return ("string" == typeof e ? i[e] : e).apply(i, arguments)
				}, t || 0)
			},
			_hoverable: function(t) {
				this.hoverable = this.hoverable.add(t), this._on(t, {
					mouseenter: function(t) {
						e(t.currentTarget).addClass("ui-state-hover")
					},
					mouseleave: function(t) {
						e(t.currentTarget).removeClass("ui-state-hover")
					}
				})
			},
			_focusable: function(t) {
				this.focusable = this.focusable.add(t), this._on(t, {
					focusin: function(t) {
						e(t.currentTarget).addClass("ui-state-focus")
					},
					focusout: function(t) {
						e(t.currentTarget).removeClass("ui-state-focus")
					}
				})
			},
			_trigger: function(t, i, n) {
				var o, s, r = this.options[t];
				if (n = n || {}, (i = e.Event(i)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], s = i.originalEvent)
					for (o in s) o in i || (i[o] = s[o]);
				return this.element.trigger(i, n), !(e.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
			}
		}, e.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function(t, i) {
			e.Widget.prototype["_" + t] = function(n, o, s) {
				"string" == typeof o && (o = {
					effect: o
				});
				var r, a = o ? !0 === o || "number" == typeof o ? i : o.effect || i : t;
				"number" == typeof(o = o || {}) && (o = {
					duration: o
				}), r = !e.isEmptyObject(o), o.complete = s, o.delay && n.delay(o.delay), r && e.effects && e.effects.effect[a] ? n[t](o) : a !== t && n[a] ? n[a](o.duration, o.easing, s) : n.queue(function(i) {
					e(this)[t](), s && s.call(n[0]), i()
				})
			}
		}), e.widget;
		var u = !1;
		e(document).mouseup(function() {
			u = !1
		}), e.widget("ui.mouse", {
			version: "1.11.4",
			options: {
				cancel: "input,textarea,button,select,option",
				distance: 1,
				delay: 0
			},
			_mouseInit: function() {
				var t = this;
				this.element.bind("mousedown." + this.widgetName, function(e) {
					return t._mouseDown(e)
				}).bind("click." + this.widgetName, function(i) {
					if (!0 === e.data(i.target, t.widgetName + ".preventClickEvent")) return e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
				}), this.started = !1
			},
			_mouseDestroy: function() {
				this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
			},
			_mouseDown: function(t) {
				if (!u) {
					this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
					var i = this,
						n = 1 === t.which,
						o = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
					return !(n && !o && this._mouseCapture(t) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
						i.mouseDelayMet = !0
					}, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), 0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
						return i._mouseMove(e)
					}, this._mouseUpDelegate = function(e) {
						return i._mouseUp(e)
					}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), u = !0, 0)))
				}
			},
			_mouseMove: function(t) {
				if (this._mouseMoved) {
					if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
					if (!t.which) return this._mouseUp(t)
				}
				return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
			},
			_mouseUp: function(t) {
				return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), u = !1, !1
			},
			_mouseDistanceMet: function(e) {
				return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
			},
			_mouseDelayMet: function() {
				return this.mouseDelayMet
			},
			_mouseStart: function() {},
			_mouseDrag: function() {},
			_mouseStop: function() {},
			_mouseCapture: function() {
				return !0
			}
		}), e.widget("ui.slider", e.ui.mouse, {
			version: "1.11.4",
			widgetEventPrefix: "slide",
			options: {
				animate: !1,
				distance: 0,
				max: 100,
				min: 0,
				orientation: "horizontal",
				range: !1,
				step: 1,
				value: 0,
				values: null,
				change: null,
				slide: null,
				start: null,
				stop: null
			},
			numPages: 5,
			_create: function() {
				this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
			},
			_refresh: function() {
				this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
			},
			_createHandles: function() {
				var t, i, n = this.options,
					o = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
					s = [];
				for (i = n.values && n.values.length || 1, o.length > i && (o.slice(i).remove(), o = o.slice(0, i)), t = o.length; t < i; t++) s.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
				this.handles = o.add(e(s.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
					e(this).data("ui-slider-handle-index", t)
				})
			},
			_createRange: function() {
				var t = this.options,
					i = "";
				t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
					left: "",
					bottom: ""
				}) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
			},
			_setupEvents: function() {
				this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
			},
			_destroy: function() {
				this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
			},
			_mouseCapture: function(t) {
				var i, n, o, s, r, a, l, u = this,
					c = this.options;
				return !c.disabled && (this.elementSize = {
					width: this.element.outerWidth(),
					height: this.element.outerHeight()
				}, this.elementOffset = this.element.offset(), i = {
					x: t.pageX,
					y: t.pageY
				}, n = this._normValueFromMouse(i), o = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
					var i = Math.abs(n - u.values(t));
					(o > i || o === i && (t === u._lastChangedValue || u.values(t) === c.min)) && (o = i, s = e(this), r = t)
				}), !1 !== this._start(t, r) && (this._mouseSliding = !0, this._handleIndex = r, s.addClass("ui-state-active").focus(), a = s.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
					left: 0,
					top: 0
				} : {
					left: t.pageX - a.left - s.width() / 2,
					top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
				}, this.handles.hasClass("ui-state-hover") || this._slide(t, r, n), this._animateOff = !0, !0))
			},
			_mouseStart: function() {
				return !0
			},
			_mouseDrag: function(e) {
				var t = {
						x: e.pageX,
						y: e.pageY
					},
					i = this._normValueFromMouse(t);
				return this._slide(e, this._handleIndex, i), !1
			},
			_mouseStop: function(e) {
				return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
			},
			_detectOrientation: function() {
				this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
			},
			_normValueFromMouse: function(e) {
				var t, i, n, o, s;
				return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (n = i / t) > 1 && (n = 1), n < 0 && (n = 0), "vertical" === this.orientation && (n = 1 - n), o = this._valueMax() - this._valueMin(), s = this._valueMin() + n * o, this._trimAlignValue(s)
			},
			_start: function(e, t) {
				var i = {
					handle: this.handles[t],
					value: this.value()
				};
				return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
			},
			_slide: function(e, t, i) {
				var n, o, s;
				this.options.values && this.options.values.length ? (n = this.values(t ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === t && i > n || 1 === t && i < n) && (i = n), i !== this.values(t) && ((o = this.values())[t] = i, s = this._trigger("slide", e, {
					handle: this.handles[t],
					value: i,
					values: o
				}), n = this.values(t ? 0 : 1), !1 !== s && this.values(t, i))) : i !== this.value() && !1 !== (s = this._trigger("slide", e, {
					handle: this.handles[t],
					value: i
				})) && this.value(i)
			},
			_stop: function(e, t) {
				var i = {
					handle: this.handles[t],
					value: this.value()
				};
				this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
			},
			_change: function(e, t) {
				if (!this._keySliding && !this._mouseSliding) {
					var i = {
						handle: this.handles[t],
						value: this.value()
					};
					this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
				}
			},
			value: function(e) {
				return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
			},
			values: function(t, i) {
				var n, o, s;
				if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, t);
				if (!arguments.length) return this._values();
				if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
				for (n = this.options.values, o = arguments[0], s = 0; s < n.length; s += 1) n[s] = this._trimAlignValue(o[s]), this._change(null, s);
				this._refreshValue()
			},
			_setOption: function(t, i) {
				var n, o = 0;
				switch ("range" === t && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (o = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
					case "orientation":
						this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
						break;
					case "value":
						this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
						break;
					case "values":
						for (this._animateOff = !0, this._refreshValue(), n = 0; n < o; n += 1) this._change(null, n);
						this._animateOff = !1;
						break;
					case "step":
					case "min":
					case "max":
						this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
						break;
					case "range":
						this._animateOff = !0, this._refresh(), this._animateOff = !1
				}
			},
			_value: function() {
				var e = this.options.value;
				return this._trimAlignValue(e)
			},
			_values: function(e) {
				var t, i, n;
				if (arguments.length) return t = this.options.values[e], this._trimAlignValue(t);
				if (this.options.values && this.options.values.length) {
					for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
					return i
				}
				return []
			},
			_trimAlignValue: function(e) {
				if (e <= this._valueMin()) return this._valueMin();
				if (e >= this._valueMax()) return this._valueMax();
				var t = this.options.step > 0 ? this.options.step : 1,
					i = (e - this._valueMin()) % t,
					n = e - i;
				return 2 * Math.abs(i) >= t && (n += i > 0 ? t : -t), parseFloat(n.toFixed(5))
			},
			_calculateNewMax: function() {
				var e = this.options.max,
					t = this._valueMin(),
					i = this.options.step;
				e = Math.floor(+(e - t).toFixed(this._precision()) / i) * i + t, this.max = parseFloat(e.toFixed(this._precision()))
			},
			_precision: function() {
				var e = this._precisionOf(this.options.step);
				return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
			},
			_precisionOf: function(e) {
				var t = e.toString(),
					i = t.indexOf(".");
				return -1 === i ? 0 : t.length - i - 1
			},
			_valueMin: function() {
				return this.options.min
			},
			_valueMax: function() {
				return this.max
			},
			_refreshValue: function() {
				var t, i, n, o, s, r = this.options.range,
					a = this.options,
					l = this,
					u = !this._animateOff && a.animate,
					c = {};
				this.options.values && this.options.values.length ? this.handles.each(function(n) {
					i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[u ? "animate" : "css"](c, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
						left: i + "%"
					}, a.animate), 1 === n && l.range[u ? "animate" : "css"]({
						width: i - t + "%"
					}, {
						queue: !1,
						duration: a.animate
					})) : (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
						bottom: i + "%"
					}, a.animate), 1 === n && l.range[u ? "animate" : "css"]({
						height: i - t + "%"
					}, {
						queue: !1,
						duration: a.animate
					}))), t = i
				}) : (n = this.value(), o = this._valueMin(), s = this._valueMax(), i = s !== o ? (n - o) / (s - o) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
					width: i + "%"
				}, a.animate), "max" === r && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
					width: 100 - i + "%"
				}, {
					queue: !1,
					duration: a.animate
				}), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
					height: i + "%"
				}, a.animate), "max" === r && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
					height: 100 - i + "%"
				}, {
					queue: !1,
					duration: a.animate
				}))
			},
			_handleEvents: {
				keydown: function(t) {
					var i, n, o, s = e(t.target).data("ui-slider-handle-index");
					switch (t.keyCode) {
						case e.ui.keyCode.HOME:
						case e.ui.keyCode.END:
						case e.ui.keyCode.PAGE_UP:
						case e.ui.keyCode.PAGE_DOWN:
						case e.ui.keyCode.UP:
						case e.ui.keyCode.RIGHT:
						case e.ui.keyCode.DOWN:
						case e.ui.keyCode.LEFT:
							if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), !1 === this._start(t, s))) return
					}
					switch (o = this.options.step, i = n = this.options.values && this.options.values.length ? this.values(s) : this.value(), t.keyCode) {
						case e.ui.keyCode.HOME:
							n = this._valueMin();
							break;
						case e.ui.keyCode.END:
							n = this._valueMax();
							break;
						case e.ui.keyCode.PAGE_UP:
							n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
							break;
						case e.ui.keyCode.PAGE_DOWN:
							n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
							break;
						case e.ui.keyCode.UP:
						case e.ui.keyCode.RIGHT:
							if (i === this._valueMax()) return;
							n = this._trimAlignValue(i + o);
							break;
						case e.ui.keyCode.DOWN:
						case e.ui.keyCode.LEFT:
							if (i === this._valueMin()) return;
							n = this._trimAlignValue(i - o)
					}
					this._slide(t, s, n)
				},
				keyup: function(t) {
					var i = e(t.target).data("ui-slider-handle-index");
					this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
				}
			}
		})
	});