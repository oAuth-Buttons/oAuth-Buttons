// These sources are distributed and available under the MIT License.
// See LICENSE for details.
// Build date: Thursday, May 3rd 2018, 8:31:24 pm
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}
// https://jaketrent.com/post/addremove-classes-raw-javascript/
if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (search) {
        var d = document,
            elements,
            pattern,
            i,
            results = [];
        if (d.querySelectorAll) {
            // IE8
            return d.querySelectorAll("." + search);
        }
        if (d.evaluate) {
            // IE6, IE7
            pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
            elements = d.evaluate(pattern, d, null, 0, null);
            while (i = elements.iterateNext()) {
                results.push(i);
            }
        } else {
            elements = d.getElementsByTagName("*");
            pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
            for (i = 0; i < elements.length; i++) {
                if (pattern.test(elements[i].className)) {
                    results.push(elements[i]);
                }
            }
        }
        return results;
    };
}
// https://stackoverflow.com/a/25054465
function ready(callback) {
    // in case the document is already rendered
    if (document.readyState != 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
        // IE <= 8
        else document.attachEvent('onreadystatechange', function () {
                if (document.readyState == 'complete') callback();
            });
}
// https://stackoverflow.com/a/7053197
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssfilters-svg-setclasses !*/
!function (e, n, t) {
    function r(e, n) {
        return (typeof e === 'undefined' ? 'undefined' : _typeof(e)) === n;
    }function s() {
        var e, n, t, s, o, i, l;for (var a in C) {
            if (C.hasOwnProperty(a)) {
                if (e = [], n = C[a], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) {
                    e.push(n.options.aliases[t].toLowerCase());
                }for (s = r(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) {
                    i = e[o], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = s : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = s), S.push((s ? "" : "no-") + l.join("-"));
                }
            }
        }
    }function o(e) {
        var n = _.className,
            t = Modernizr._config.classPrefix || "";if (x && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");n = n.replace(r, "$1" + t + "js$2");
        }Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), x ? _.className.baseVal = n : _.className = n);
    }function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
    }function l(e, n) {
        return function () {
            return e.apply(n, arguments);
        };
    }function a(e, n, t) {
        var s;for (var o in e) {
            if (e[o] in n) return t === !1 ? e[o] : (s = n[e[o]], r(s, "function") ? l(s, t || n) : s);
        }return !1;
    }function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
            return n + t.toUpperCase();
        }).replace(/^-/, "");
    }function f(e, n) {
        return !!~("" + e).indexOf(n);
    }function p(n, t, r) {
        var s;if ("getComputedStyle" in e) {
            s = getComputedStyle.call(e, n, t);var o = e.console;if (null !== s) r && (s = s.getPropertyValue(r));else if (o) {
                var i = o.error ? "error" : "log";o[i].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
            }
        } else s = !t && n.currentStyle && n.currentStyle[r];return s;
    }function c(e) {
        return e.replace(/([A-Z])/g, function (e, n) {
            return "-" + n.toLowerCase();
        }).replace(/^ms-/, "-ms-");
    }function d() {
        var e = n.body;return e || (e = i(x ? "svg" : "body"), e.fake = !0), e;
    }function m(e, t, r, s) {
        var o,
            l,
            a,
            u,
            f = "modernizr",
            p = i("div"),
            c = d();if (parseInt(r, 10)) for (; r--;) {
            a = i("div"), a.id = s ? s[r] : f + (r + 1), p.appendChild(a);
        }return o = i("style"), o.type = "text/css", o.id = "s" + f, (c.fake ? c : p).appendChild(o), c.appendChild(p), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(n.createTextNode(e)), p.id = f, c.fake && (c.style.background = "", c.style.overflow = "hidden", u = _.style.overflow, _.style.overflow = "hidden", _.appendChild(c)), l = t(p, e), c.fake ? (c.parentNode.removeChild(c), _.style.overflow = u, _.offsetHeight) : p.parentNode.removeChild(p), !!l;
    }function v(n, r) {
        var s = n.length;if ("CSS" in e && "supports" in e.CSS) {
            for (; s--;) {
                if (e.CSS.supports(c(n[s]), r)) return !0;
            }return !1;
        }if ("CSSSupportsRule" in e) {
            for (var o = []; s--;) {
                o.push("(" + c(n[s]) + ":" + r + ")");
            }return o = o.join(" or "), m("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == p(e, null, "position");
            });
        }return t;
    }function g(e, n, s, o) {
        function l() {
            p && (delete k.style, delete k.modElem);
        }if (o = r(o, "undefined") ? !1 : o, !r(s, "undefined")) {
            var a = v(e, s);if (!r(a, "undefined")) return a;
        }for (var p, c, d, m, g, y = ["modernizr", "tspan", "samp"]; !k.style && y.length;) {
            p = !0, k.modElem = i(y.shift()), k.style = k.modElem.style;
        }for (d = e.length, c = 0; d > c; c++) {
            if (m = e[c], g = k.style[m], f(m, "-") && (m = u(m)), k.style[m] !== t) {
                if (o || r(s, "undefined")) return l(), "pfx" == n ? m : !0;try {
                    k.style[m] = s;
                } catch (h) {}if (k.style[m] != g) return l(), "pfx" == n ? m : !0;
            }
        }return l(), !1;
    }function y(e, n, t, s, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            l = (e + " " + N.join(i + " ") + i).split(" ");return r(n, "string") || r(n, "undefined") ? g(l, n, s, o) : (l = (e + " " + T.join(i + " ") + i).split(" "), a(l, n, t));
    }function h(e, n, r) {
        return y(e, t, t, n, r);
    }var S = [],
        C = [],
        w = { _version: "3.5.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function on(e, n) {
            var t = this;setTimeout(function () {
                n(t[e]);
            }, 0);
        }, addTest: function addTest(e, n, t) {
            C.push({ name: e, fn: n, options: t });
        }, addAsyncTest: function addAsyncTest(e) {
            C.push({ name: null, fn: e });
        } },
        Modernizr = function Modernizr() {};Modernizr.prototype = w, Modernizr = new Modernizr(), Modernizr.addTest("svg", !!n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);var _ = n.documentElement,
        x = "svg" === _.nodeName.toLowerCase(),
        b = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];w._prefixes = b;var E = "CSS" in e && "supports" in e.CSS,
        P = "supportsCSS" in e;Modernizr.addTest("supports", E || P);var z = "Moz O ms Webkit",
        N = w._config.usePrefixes ? z.split(" ") : [];w._cssomPrefixes = N;var T = w._config.usePrefixes ? z.toLowerCase().split(" ") : [];w._domPrefixes = T;var j = { elem: i("modernizr") };Modernizr._q.push(function () {
        delete j.elem;
    });var k = { style: j.elem.style };Modernizr._q.unshift(function () {
        delete k.style;
    }), w.testAllProps = y, w.testAllProps = h, Modernizr.addTest("cssfilters", function () {
        if (Modernizr.supports) return h("filter", "blur(2px)");var e = i("a");return e.style.cssText = b.join("filter:blur(2px); "), !!e.style.length && (n.documentMode === t || n.documentMode > 9);
    }), s(), o(S), delete w.addTest, delete w.addAsyncTest;for (var A = 0; A < Modernizr._q.length; A++) {
        Modernizr._q[A]();
    }e.Modernizr_oauth_buttons = Modernizr;
}(window, document);
// main
ready(function () {
    // css filter detect
    if (!Modernizr_oauth_buttons.cssfilters) {
        var el = document.getElementsByClassName('lbtn');
        for (var i = 0; i < el.length; i++) {
            addClass(el[i], 'white');
        }
        console.log('This browser does not support css filter.');
    } else {
        console.log('This browser supports css filter.');
    }

    // svg detect
    if (!Modernizr_oauth_buttons.svg) {
        var _el = document.getElementsByClassName('lbtn');
        for (var _i = 0; _i < _el.length; _i++) {
            addClass(_el[_i], 'lbtn-fallback-svg');
        }
        console.log('This browser does not support svg.');
    } else {
        console.log('This browser supports svg.');
    }
});
//# sourceMappingURL=oauth-buttons.js.map
//# sourceMappingURL=oauth-buttons.js.map
