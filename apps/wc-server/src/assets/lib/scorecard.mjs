import * as ne from "react/jsx-runtime";
import * as j from "react";
import Ke, { forwardRef as Vr, useContext as Lr } from "react";
import Fr from "react-dom";
function zr(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Yr(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Wr = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(s) {
      var o;
      n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(s, o), n.tags.push(s);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Yr(this));
    var s = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var o = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o;
    }
    if (this.isSpeedy) {
      var i = zr(s);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch (a) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', a);
      }
    } else
      s.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), $ = "-ms-", se = "-moz-", v = "-webkit-", we = "comm", xe = "rule", Se = "decl", Ur = "@import", Xe = "@keyframes", qr = "@layer", Gr = Math.abs, ie = String.fromCharCode, Br = Object.assign;
function Jr(e, r) {
  return A(e, 0) ^ 45 ? (((r << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) : 0;
}
function Qe(e) {
  return e.trim();
}
function Zr(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function E(e, r, t) {
  return e.replace(r, t);
}
function he(e, r) {
  return e.indexOf(r);
}
function A(e, r) {
  return e.charCodeAt(r) | 0;
}
function U(e, r, t) {
  return e.slice(r, t);
}
function M(e) {
  return e.length;
}
function _e(e) {
  return e.length;
}
function H(e, r) {
  return r.push(e), e;
}
function Hr(e, r) {
  return e.map(r).join("");
}
var ae = 1, z = 1, er = 0, P = 0, R = 0, Y = "";
function ce(e, r, t, n, s, o, i) {
  return { value: e, root: r, parent: t, type: n, props: s, children: o, line: ae, column: z, length: i, return: "" };
}
function W(e, r) {
  return Br(ce("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Kr() {
  return R;
}
function Xr() {
  return R = P > 0 ? A(Y, --P) : 0, z--, R === 10 && (z = 1, ae--), R;
}
function k() {
  return R = P < er ? A(Y, P++) : 0, z++, R === 10 && (z = 1, ae++), R;
}
function D() {
  return A(Y, P);
}
function ee() {
  return P;
}
function J(e, r) {
  return U(Y, e, r);
}
function q(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function rr(e) {
  return ae = z = 1, er = M(Y = e), P = 0, [];
}
function tr(e) {
  return Y = "", e;
}
function re(e) {
  return Qe(J(P - 1, ye(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qr(e) {
  for (; (R = D()) && R < 33; )
    k();
  return q(e) > 2 || q(R) > 3 ? "" : " ";
}
function et(e, r) {
  for (; --r && k() && !(R < 48 || R > 102 || R > 57 && R < 65 || R > 70 && R < 97); )
    ;
  return J(e, ee() + (r < 6 && D() == 32 && k() == 32));
}
function ye(e) {
  for (; k(); )
    switch (R) {
      case e:
        return P;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ye(R);
        break;
      case 40:
        e === 41 && ye(e);
        break;
      case 92:
        k();
        break;
    }
  return P;
}
function rt(e, r) {
  for (; k() && e + R !== 57; )
    if (e + R === 84 && D() === 47)
      break;
  return "/*" + J(r, P - 1) + "*" + ie(e === 47 ? e : k());
}
function tt(e) {
  for (; !q(D()); )
    k();
  return J(e, P);
}
function nt(e) {
  return tr(te("", null, null, null, [""], e = rr(e), 0, [0], e));
}
function te(e, r, t, n, s, o, i, a, d) {
  for (var m = 0, l = 0, u = i, h = 0, _ = 0, y = 0, p = 1, x = 1, b = 1, O = 0, C = "", N = s, c = o, T = n, S = C; x; )
    switch (y = O, O = k()) {
      case 40:
        if (y != 108 && A(S, u - 1) == 58) {
          he(S += E(re(O), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += re(O);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Qr(y);
        break;
      case 92:
        S += et(ee() - 1, 7);
        continue;
      case 47:
        switch (D()) {
          case 42:
          case 47:
            H(st(rt(k(), ee()), r, t), d);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * p:
        a[m++] = M(S) * b;
      case 125 * p:
      case 59:
      case 0:
        switch (O) {
          case 0:
          case 125:
            x = 0;
          case 59 + l:
            b == -1 && (S = E(S, /\f/g, "")), _ > 0 && M(S) - u && H(_ > 32 ? ke(S + ";", n, t, u - 1) : ke(E(S, " ", "") + ";", n, t, u - 2), d);
            break;
          case 59:
            S += ";";
          default:
            if (H(T = Pe(S, r, t, m, l, s, a, C, N = [], c = [], u), o), O === 123)
              if (l === 0)
                te(S, r, T, T, N, o, u, a, c);
              else
                switch (h === 99 && A(S, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    te(e, T, T, n && H(Pe(e, T, T, 0, 0, s, a, C, s, N = [], u), c), s, c, u, a, n ? N : c);
                    break;
                  default:
                    te(S, T, T, T, [""], c, 0, a, c);
                }
        }
        m = l = _ = 0, p = b = 1, C = S = "", u = i;
        break;
      case 58:
        u = 1 + M(S), _ = y;
      default:
        if (p < 1) {
          if (O == 123)
            --p;
          else if (O == 125 && p++ == 0 && Xr() == 125)
            continue;
        }
        switch (S += ie(O), O * p) {
          case 38:
            b = l > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            a[m++] = (M(S) - 1) * b, b = 1;
            break;
          case 64:
            D() === 45 && (S += re(k())), h = D(), l = u = M(C = S += tt(ee())), O++;
            break;
          case 45:
            y === 45 && M(S) == 2 && (p = 0);
        }
    }
  return o;
}
function Pe(e, r, t, n, s, o, i, a, d, m, l) {
  for (var u = s - 1, h = s === 0 ? o : [""], _ = _e(h), y = 0, p = 0, x = 0; y < n; ++y)
    for (var b = 0, O = U(e, u + 1, u = Gr(p = i[y])), C = e; b < _; ++b)
      (C = Qe(p > 0 ? h[b] + " " + O : E(O, /&\f/g, h[b]))) && (d[x++] = C);
  return ce(e, r, t, s === 0 ? xe : a, d, m, l);
}
function st(e, r, t) {
  return ce(e, r, t, we, ie(Kr()), U(e, 2, -2), 0);
}
function ke(e, r, t, n) {
  return ce(e, r, t, Se, U(e, 0, n), U(e, n + 1, -1), n);
}
function F(e, r) {
  for (var t = "", n = _e(e), s = 0; s < n; s++)
    t += r(e[s], s, e, r) || "";
  return t;
}
function ot(e, r, t, n) {
  switch (e.type) {
    case qr:
      if (e.children.length)
        break;
    case Ur:
    case Se:
      return e.return = e.return || e.value;
    case we:
      return "";
    case Xe:
      return e.return = e.value + "{" + F(e.children, n) + "}";
    case xe:
      e.value = e.props.join(",");
  }
  return M(t = F(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function it(e) {
  var r = _e(e);
  return function(t, n, s, o) {
    for (var i = "", a = 0; a < r; a++)
      i += e[a](t, n, s, o) || "";
    return i;
  };
}
function at(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function ct(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var ut = function(r, t, n) {
  for (var s = 0, o = 0; s = o, o = D(), s === 38 && o === 12 && (t[n] = 1), !q(o); )
    k();
  return J(r, P);
}, ft = function(r, t) {
  var n = -1, s = 44;
  do
    switch (q(s)) {
      case 0:
        s === 38 && D() === 12 && (t[n] = 1), r[n] += ut(P - 1, t, n);
        break;
      case 2:
        r[n] += re(s);
        break;
      case 4:
        if (s === 44) {
          r[++n] = D() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += ie(s);
    }
  while (s = k());
  return r;
}, lt = function(r, t) {
  return tr(ft(rr(r), t));
}, Ie = /* @__PURE__ */ new WeakMap(), dt = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, s = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Ie.get(n)) && !s) {
      Ie.set(r, !0);
      for (var o = [], i = lt(t, o), a = n.props, d = 0, m = 0; d < i.length; d++)
        for (var l = 0; l < a.length; l++, m++)
          r.props[m] = o[d] ? i[d].replace(/&\f/g, a[l]) : a[l] + " " + i[d];
    }
  }
}, mt = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, pt = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", ht = function(r) {
  return r.type === "comm" && r.children.indexOf(pt) > -1;
}, yt = function(r) {
  return function(t, n, s) {
    if (!(t.type !== "rule" || r.compat)) {
      var o = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var i = !!t.parent, a = i ? t.parent.children : (
          // global rule at the root level
          s
        ), d = a.length - 1; d >= 0; d--) {
          var m = a[d];
          if (m.line < t.line)
            break;
          if (m.column < t.column) {
            if (ht(m))
              return;
            break;
          }
        }
        o.forEach(function(l) {
          console.error('The pseudo class "' + l + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + l.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, nr = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, vt = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!nr(t[n]))
      return !0;
  return !1;
}, Me = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, Et = function(r, t, n) {
  nr(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Me(r)) : vt(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Me(r)));
};
function sr(e, r) {
  switch (Jr(e, r)) {
    case 5103:
      return v + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return v + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return v + e + se + e + $ + e + e;
    case 6828:
    case 4268:
      return v + e + $ + e + e;
    case 6165:
      return v + e + $ + "flex-" + e + e;
    case 5187:
      return v + e + E(e, /(\w+).+(:[^]+)/, v + "box-$1$2" + $ + "flex-$1$2") + e;
    case 5443:
      return v + e + $ + "flex-item-" + E(e, /flex-|-self/, "") + e;
    case 4675:
      return v + e + $ + "flex-line-pack" + E(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return v + e + $ + E(e, "shrink", "negative") + e;
    case 5292:
      return v + e + $ + E(e, "basis", "preferred-size") + e;
    case 6060:
      return v + "box-" + E(e, "-grow", "") + v + e + $ + E(e, "grow", "positive") + e;
    case 4554:
      return v + E(e, /([^-])(transform)/g, "$1" + v + "$2") + e;
    case 6187:
      return E(E(E(e, /(zoom-|grab)/, v + "$1"), /(image-set)/, v + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return E(e, /(image-set\([^]*)/, v + "$1$`$1");
    case 4968:
      return E(E(e, /(.+:)(flex-)?(.*)/, v + "box-pack:$3" + $ + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + v + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return E(e, /(.+)-inline(.+)/, v + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (M(e) - 1 - r > 6)
        switch (A(e, r + 1)) {
          case 109:
            if (A(e, r + 4) !== 45)
              break;
          case 102:
            return E(e, /(.+:)(.+)-([^]+)/, "$1" + v + "$2-$3$1" + se + (A(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~he(e, "stretch") ? sr(E(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (A(e, r + 1) !== 115)
        break;
    case 6444:
      switch (A(e, M(e) - 3 - (~he(e, "!important") && 10))) {
        case 107:
          return E(e, ":", ":" + v) + e;
        case 101:
          return E(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + v + (A(e, 14) === 45 ? "inline-" : "") + "box$3$1" + v + "$2$3$1" + $ + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (A(e, r + 11)) {
        case 114:
          return v + e + $ + E(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return v + e + $ + E(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return v + e + $ + E(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return v + e + $ + e + e;
  }
  return e;
}
var bt = function(r, t, n, s) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Se:
        r.return = sr(r.value, r.length);
        break;
      case Xe:
        return F([W(r, {
          value: E(r.value, "@", "@" + v)
        })], s);
      case xe:
        if (r.length)
          return Hr(r.props, function(o) {
            switch (Zr(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return F([W(r, {
                  props: [E(o, /:(read-\w+)/, ":" + se + "$1")]
                })], s);
              case "::placeholder":
                return F([W(r, {
                  props: [E(o, /:(plac\w+)/, ":" + v + "input-$1")]
                }), W(r, {
                  props: [E(o, /:(plac\w+)/, ":" + se + "$1")]
                }), W(r, {
                  props: [E(o, /:(plac\w+)/, $ + "input-$1")]
                })], s);
            }
            return "";
          });
    }
}, gt = [bt], wt = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(p) {
      var x = p.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var s = r.stylisPlugins || gt;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var o = {}, i, a = [];
  i = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(p) {
      for (var x = p.getAttribute("data-emotion").split(" "), b = 1; b < x.length; b++)
        o[x[b]] = !0;
      a.push(p);
    }
  );
  var d, m = [dt, mt];
  process.env.NODE_ENV !== "production" && m.push(yt({
    get compat() {
      return y.compat;
    }
  }), Et);
  {
    var l, u = [ot, process.env.NODE_ENV !== "production" ? function(p) {
      p.root || (p.return ? l.insert(p.return) : p.value && p.type !== we && l.insert(p.value + "{}"));
    } : at(function(p) {
      l.insert(p);
    })], h = it(m.concat(s, u)), _ = function(x) {
      return F(nt(x), h);
    };
    d = function(x, b, O, C) {
      l = O, process.env.NODE_ENV !== "production" && b.map !== void 0 && (l = {
        insert: function(c) {
          O.insert(c + b.map);
        }
      }), _(x ? x + "{" + b.styles + "}" : b.styles), C && (y.inserted[b.name] = !0);
    };
  }
  var y = {
    key: t,
    sheet: new Wr({
      key: t,
      container: i,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: o,
    registered: {},
    insert: d
  };
  return y.sheet.hydrate(a), y;
}, ve = { exports: {} }, g = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function xt() {
  if (De)
    return g;
  De = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function C(c) {
    if (typeof c == "object" && c !== null) {
      var T = c.$$typeof;
      switch (T) {
        case r:
          switch (c = c.type, c) {
            case d:
            case m:
            case n:
            case o:
            case s:
            case u:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case a:
                case l:
                case y:
                case _:
                case i:
                  return c;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  function N(c) {
    return C(c) === m;
  }
  return g.AsyncMode = d, g.ConcurrentMode = m, g.ContextConsumer = a, g.ContextProvider = i, g.Element = r, g.ForwardRef = l, g.Fragment = n, g.Lazy = y, g.Memo = _, g.Portal = t, g.Profiler = o, g.StrictMode = s, g.Suspense = u, g.isAsyncMode = function(c) {
    return N(c) || C(c) === d;
  }, g.isConcurrentMode = N, g.isContextConsumer = function(c) {
    return C(c) === a;
  }, g.isContextProvider = function(c) {
    return C(c) === i;
  }, g.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === r;
  }, g.isForwardRef = function(c) {
    return C(c) === l;
  }, g.isFragment = function(c) {
    return C(c) === n;
  }, g.isLazy = function(c) {
    return C(c) === y;
  }, g.isMemo = function(c) {
    return C(c) === _;
  }, g.isPortal = function(c) {
    return C(c) === t;
  }, g.isProfiler = function(c) {
    return C(c) === o;
  }, g.isStrictMode = function(c) {
    return C(c) === s;
  }, g.isSuspense = function(c) {
    return C(c) === u;
  }, g.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === m || c === o || c === s || c === u || c === h || typeof c == "object" && c !== null && (c.$$typeof === y || c.$$typeof === _ || c.$$typeof === i || c.$$typeof === a || c.$$typeof === l || c.$$typeof === x || c.$$typeof === b || c.$$typeof === O || c.$$typeof === p);
  }, g.typeOf = C, g;
}
var w = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function St() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function C(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === n || f === m || f === o || f === s || f === u || f === h || typeof f == "object" && f !== null && (f.$$typeof === y || f.$$typeof === _ || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === x || f.$$typeof === b || f.$$typeof === O || f.$$typeof === p);
    }
    function N(f) {
      if (typeof f == "object" && f !== null) {
        var le = f.$$typeof;
        switch (le) {
          case r:
            var Z = f.type;
            switch (Z) {
              case d:
              case m:
              case n:
              case o:
              case s:
              case u:
                return Z;
              default:
                var je = Z && Z.$$typeof;
                switch (je) {
                  case a:
                  case l:
                  case y:
                  case _:
                  case i:
                    return je;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var c = d, T = m, S = a, yr = i, vr = r, Er = l, br = n, gr = y, wr = _, xr = t, Sr = o, _r = s, Cr = u, Te = !1;
    function Nr(f) {
      return Te || (Te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $e(f) || N(f) === d;
    }
    function $e(f) {
      return N(f) === m;
    }
    function Or(f) {
      return N(f) === a;
    }
    function Rr(f) {
      return N(f) === i;
    }
    function Ar(f) {
      return typeof f == "object" && f !== null && f.$$typeof === r;
    }
    function Tr(f) {
      return N(f) === l;
    }
    function $r(f) {
      return N(f) === n;
    }
    function jr(f) {
      return N(f) === y;
    }
    function Pr(f) {
      return N(f) === _;
    }
    function kr(f) {
      return N(f) === t;
    }
    function Ir(f) {
      return N(f) === o;
    }
    function Mr(f) {
      return N(f) === s;
    }
    function Dr(f) {
      return N(f) === u;
    }
    w.AsyncMode = c, w.ConcurrentMode = T, w.ContextConsumer = S, w.ContextProvider = yr, w.Element = vr, w.ForwardRef = Er, w.Fragment = br, w.Lazy = gr, w.Memo = wr, w.Portal = xr, w.Profiler = Sr, w.StrictMode = _r, w.Suspense = Cr, w.isAsyncMode = Nr, w.isConcurrentMode = $e, w.isContextConsumer = Or, w.isContextProvider = Rr, w.isElement = Ar, w.isForwardRef = Tr, w.isFragment = $r, w.isLazy = jr, w.isMemo = Pr, w.isPortal = kr, w.isProfiler = Ir, w.isStrictMode = Mr, w.isSuspense = Dr, w.isValidElementType = C, w.typeOf = N;
  }()), w;
}
process.env.NODE_ENV === "production" ? ve.exports = xt() : ve.exports = St();
var _t = ve.exports, or = _t, Ct = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Nt = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ir = {};
ir[or.ForwardRef] = Ct;
ir[or.Memo] = Nt;
var Ot = !0;
function ar(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(s) {
    e[s] !== void 0 ? r.push(e[s] + ";") : n += s + " ";
  }), n;
}
var Ce = function(r, t, n) {
  var s = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ot === !1) && r.registered[s] === void 0 && (r.registered[s] = t.styles);
}, Ne = function(r, t, n) {
  Ce(r, t, n);
  var s = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var o = t;
    do
      r.insert(t === o ? "." + s : "", o, r.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function Rt(e) {
  for (var r = 0, t, n = 0, s = e.length; s >= 4; ++n, s -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var At = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Le = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Tt = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", $t = /[A-Z]|^ms/g, cr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Oe = function(r) {
  return r.charCodeAt(1) === 45;
}, Fe = function(r) {
  return r != null && typeof r != "boolean";
}, de = /* @__PURE__ */ ct(function(e) {
  return Oe(e) ? e : e.replace($t, "-$&").toLowerCase();
}), oe = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(cr, function(n, s, o) {
          return I = {
            name: s,
            styles: o,
            next: I
          }, s;
        });
  }
  return At[r] !== 1 && !Oe(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var jt = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Pt = ["normal", "none", "initial", "inherit", "unset"], kt = oe, It = /^-ms-/, Mt = /-(.)/g, ze = {};
  oe = function(r, t) {
    if (r === "content" && (typeof t != "string" || Pt.indexOf(t) === -1 && !jt.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = kt(r, t);
    return n !== "" && !Oe(r) && r.indexOf("-") !== -1 && ze[r] === void 0 && (ze[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(It, "ms-").replace(Mt, function(s, o) {
      return o.toUpperCase();
    }) + "?")), n;
  };
}
var ur = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function G(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ur);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return I = {
          name: t.name,
          styles: t.styles,
          next: I
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            I = {
              name: n.name,
              styles: n.styles,
              next: I
            }, n = n.next;
        var s = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (s += t.map), s;
      }
      return Dt(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var o = I, i = t(e);
        return I = o, G(e, r, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var a = [], d = t.replace(cr, function(l, u, h) {
          var _ = "animation" + a.length;
          return a.push("const " + _ + " = keyframes`" + h.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + _ + "}";
        });
        a.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(a, ["`" + d + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + d + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var m = r[t];
  return m !== void 0 ? m : t;
}
function Dt(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var s = 0; s < t.length; s++)
      n += G(e, r, t[s]) + ";";
  else
    for (var o in t) {
      var i = t[o];
      if (typeof i != "object")
        r != null && r[i] !== void 0 ? n += o + "{" + r[i] + "}" : Fe(i) && (n += de(o) + ":" + oe(o, i) + ";");
      else {
        if (o === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(ur);
        if (Array.isArray(i) && typeof i[0] == "string" && (r == null || r[i[0]] === void 0))
          for (var a = 0; a < i.length; a++)
            Fe(i[a]) && (n += de(o) + ":" + oe(o, i[a]) + ";");
        else {
          var d = G(e, r, i);
          switch (o) {
            case "animation":
            case "animationName": {
              n += de(o) + ":" + d + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && o === "undefined" && console.error(Tt), n += o + "{" + d + "}";
          }
        }
      }
    }
  return n;
}
var Ye = /label:\s*([^\s;\n{]+)\s*(;|$)/g, fr;
process.env.NODE_ENV !== "production" && (fr = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var I, B = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var s = !0, o = "";
  I = void 0;
  var i = r[0];
  i == null || i.raw === void 0 ? (s = !1, o += G(n, t, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(Le), o += i[0]);
  for (var a = 1; a < r.length; a++)
    o += G(n, t, r[a]), s && (process.env.NODE_ENV !== "production" && i[a] === void 0 && console.error(Le), o += i[a]);
  var d;
  process.env.NODE_ENV !== "production" && (o = o.replace(fr, function(h) {
    return d = h, "";
  })), Ye.lastIndex = 0;
  for (var m = "", l; (l = Ye.exec(o)) !== null; )
    m += "-" + // $FlowFixMe we know it's not null
    l[1];
  var u = Rt(o) + m;
  return process.env.NODE_ENV !== "production" ? {
    name: u,
    styles: o,
    map: d,
    next: I,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: u,
    styles: o,
    next: I
  };
}, Vt = function(r) {
  return r();
}, lr = j.useInsertionEffect ? j.useInsertionEffect : !1, dr = lr || Vt, We = lr || j.useLayoutEffect, ue = {}.hasOwnProperty, Re = /* @__PURE__ */ j.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ wt({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Re.displayName = "EmotionCacheContext");
Re.Provider;
var Ae = function(r) {
  return /* @__PURE__ */ Vr(function(t, n) {
    var s = Lr(Re);
    return r(t, s, n);
  });
}, fe = /* @__PURE__ */ j.createContext({});
process.env.NODE_ENV !== "production" && (fe.displayName = "EmotionThemeContext");
var Ue = function(r) {
  var t = r.split(".");
  return t[t.length - 1];
}, Lt = function(r) {
  var t = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(r);
  if (t || (t = /^([A-Za-z0-9$.]+)@/.exec(r), t))
    return Ue(t[1]);
}, Ft = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), zt = function(r) {
  return r.replace(/\$/g, "-");
}, Yt = function(r) {
  if (r)
    for (var t = r.split(`
`), n = 0; n < t.length; n++) {
      var s = Lt(t[n]);
      if (s) {
        if (Ft.has(s))
          break;
        if (/^[A-Z]/.test(s))
          return zt(s);
      }
    }
}, Ee = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", be = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", mr = function(r, t) {
  if (process.env.NODE_ENV !== "production" && typeof t.css == "string" && // check if there is a css declaration
  t.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + t.css + "`");
  var n = {};
  for (var s in t)
    ue.call(t, s) && (n[s] = t[s]);
  if (n[Ee] = r, process.env.NODE_ENV !== "production" && t.css && (typeof t.css != "object" || typeof t.css.name != "string" || t.css.name.indexOf("-") === -1)) {
    var o = Yt(new Error().stack);
    o && (n[be] = o);
  }
  return n;
}, Wt = function(r) {
  var t = r.cache, n = r.serialized, s = r.isStringTag;
  return Ce(t, n, s), dr(function() {
    return Ne(t, n, s);
  }), null;
}, pr = /* @__PURE__ */ Ae(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var s = e[Ee], o = [n], i = "";
  typeof e.className == "string" ? i = ar(r.registered, o, e.className) : e.className != null && (i = e.className + " ");
  var a = B(o, void 0, j.useContext(fe));
  if (process.env.NODE_ENV !== "production" && a.name.indexOf("-") === -1) {
    var d = e[be];
    d && (a = B([a, "label:" + d + ";"]));
  }
  i += r.key + "-" + a.name;
  var m = {};
  for (var l in e)
    ue.call(e, l) && l !== "css" && l !== Ee && (process.env.NODE_ENV === "production" || l !== be) && (m[l] = e[l]);
  return m.ref = t, m.className = i, /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement(Wt, {
    cache: r,
    serialized: a,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ j.createElement(s, m));
});
process.env.NODE_ENV !== "production" && (pr.displayName = "EmotionCssPropInternal");
var hr = pr;
function qe(e, r, t) {
  return ue.call(r, "css") ? ne.jsx(hr, mr(e, r), t) : ne.jsx(e, r, t);
}
function Ut(e, r, t) {
  return ue.call(r, "css") ? ne.jsxs(hr, mr(e, r), t) : ne.jsxs(e, r, t);
}
var qt = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, Ge = !1, Gt = /* @__PURE__ */ Ae(function(e, r) {
  process.env.NODE_ENV !== "production" && !Ge && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Ge = !0);
  var t = e.styles, n = B([t], void 0, j.useContext(fe)), s = j.useRef();
  return We(function() {
    var o = r.key + "-global", i = new r.sheet.constructor({
      key: o,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), a = !1, d = document.querySelector('style[data-emotion="' + o + " " + n.name + '"]');
    return r.sheet.tags.length && (i.before = r.sheet.tags[0]), d !== null && (a = !0, d.setAttribute("data-emotion", o), i.hydrate([d])), s.current = [i, a], function() {
      i.flush();
    };
  }, [r]), We(function() {
    var o = s.current, i = o[0], a = o[1];
    if (a) {
      o[1] = !1;
      return;
    }
    if (n.next !== void 0 && Ne(r, n.next, !0), i.tags.length) {
      var d = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = d, i.flush();
    }
    r.insert("", n, i, !1);
  }, [r, n.name]), null;
});
process.env.NODE_ENV !== "production" && (Gt.displayName = "EmotionGlobal");
function Bt() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return B(r);
}
var Jt = function e(r) {
  for (var t = r.length, n = 0, s = ""; n < t; n++) {
    var o = r[n];
    if (o != null) {
      var i = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o))
            i = e(o);
          else {
            process.env.NODE_ENV !== "production" && o.styles !== void 0 && o.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), i = "";
            for (var a in o)
              o[a] && a && (i && (i += " "), i += a);
          }
          break;
        }
        default:
          i = o;
      }
      i && (s && (s += " "), s += i);
    }
  }
  return s;
};
function Zt(e, r, t) {
  var n = [], s = ar(e, n, t);
  return n.length < 2 ? t : s + r(n);
}
var Ht = function(r) {
  var t = r.cache, n = r.serializedArr;
  return dr(function() {
    for (var s = 0; s < n.length; s++)
      Ne(t, n[s], !1);
  }), null;
}, Kt = /* @__PURE__ */ Ae(function(e, r) {
  var t = !1, n = [], s = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var m = arguments.length, l = new Array(m), u = 0; u < m; u++)
      l[u] = arguments[u];
    var h = B(l, r.registered);
    return n.push(h), Ce(r, h, !1), r.key + "-" + h.name;
  }, o = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var m = arguments.length, l = new Array(m), u = 0; u < m; u++)
      l[u] = arguments[u];
    return Zt(r.registered, s, Jt(l));
  }, i = {
    css: s,
    cx: o,
    theme: j.useContext(fe)
  }, a = e.children(i);
  return t = !0, /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement(Ht, {
    cache: r,
    serializedArr: n
  }), a);
});
process.env.NODE_ENV !== "production" && (Kt.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Be = !0, Xt = typeof jest < "u" || typeof vi < "u";
  if (Be && !Xt) {
    var Je = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Be ? window : global
    ), Ze = "__EMOTION_REACT_" + qt.version.split(".")[0] + "__";
    Je[Ze] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Je[Ze] = !0;
  }
}
var ge, K = Fr;
if (process.env.NODE_ENV === "production")
  ge = K.createRoot, K.hydrateRoot;
else {
  var He = K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ge = function(e, r) {
    He.usingClientEntryPoint = !0;
    try {
      return K.createRoot(e, r);
    } finally {
      He.usingClientEntryPoint = !1;
    }
  };
}
var Qt = Object.defineProperty, en = (e, r, t) => r in e ? Qt(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, X = (e, r, t) => (en(e, typeof r != "symbol" ? r + "" : r, t), t);
const rn = {
  stringify: (e) => e,
  parse: (e) => e
}, tn = {
  stringify: (e) => `${e}`,
  parse: (e) => parseFloat(e)
}, nn = {
  stringify: (e) => e ? "true" : "false",
  parse: (e) => /^[ty1-9]/i.test(e)
}, sn = {
  stringify: (e) => e.name,
  parse: (e, r) => {
    const t = (() => {
      if (typeof window < "u" && e in window)
        return window[e];
      if (typeof global < "u" && e in global)
        return global[e];
    })();
    return typeof t == "function" ? t.bind(r) : void 0;
  }
}, on = {
  stringify: (e) => JSON.stringify(e),
  parse: (e) => JSON.parse(e)
}, me = {
  string: rn,
  number: tn,
  boolean: nn,
  function: sn,
  json: on
}, pe = Symbol.for("r2wc.render"), Q = Symbol.for("r2wc.connected"), L = Symbol.for("r2wc.context"), V = Symbol.for("r2wc.props");
function an(e, r, t) {
  var n, s, o;
  r.props || (r.props = e.propTypes ? Object.keys(e.propTypes) : []);
  const i = (Array.isArray(r.props) ? r.props.slice() : Object.keys(r.props)).filter((u) => u !== "container"), a = {}, d = {}, m = {};
  for (const u of i) {
    a[u] = Array.isArray(r.props) ? "string" : r.props[u];
    const h = cn(u);
    d[u] = h, m[h] = u;
  }
  class l extends HTMLElement {
    constructor() {
      super(), X(this, n, !0), X(this, s), X(this, o, {}), X(this, "container"), r.shadow ? this.container = this.attachShadow({
        mode: r.shadow
      }) : this.container = this, this[V].container = this.container;
      for (const h of i) {
        const _ = d[h], y = this.getAttribute(_), p = a[h], x = me[p];
        y && x != null && x.parse && (this[V][h] = x.parse(y, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(m);
    }
    connectedCallback() {
      this[Q] = !0, this[pe]();
    }
    disconnectedCallback() {
      this[Q] = !1, this[L] && t.unmount(this[L]), delete this[L];
    }
    attributeChangedCallback(h, _, y) {
      const p = m[h], x = a[p], b = me[x];
      p in a && b != null && b.parse && (this[V][p] = b.parse(y, this), this[pe]());
    }
    [(n = Q, s = L, o = V, pe)]() {
      this[Q] && (this[L] ? t.update(this[L], this[V]) : this[L] = t.mount(
        this.container,
        e,
        this[V]
      ));
    }
  }
  for (const u of i) {
    const h = d[u], _ = a[u];
    Object.defineProperty(l.prototype, u, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[V][u];
      },
      set(y) {
        this[V][u] = y;
        const p = me[_];
        if (p != null && p.stringify) {
          const x = p.stringify(y);
          this.getAttribute(h) !== x && this.setAttribute(h, x);
        }
      }
    });
  }
  return l;
}
function cn(e = "") {
  return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function un(e, r, t) {
  const n = ge(e), s = Ke.createElement(r, t);
  return n.render(s), {
    root: n,
    ReactComponent: r
  };
}
function fn({ root: e, ReactComponent: r }, t) {
  const n = Ke.createElement(r, t);
  e.render(n);
}
function ln({ root: e }) {
  e.unmount();
}
function dn(e, r = {}) {
  return an(e, r, { mount: un, update: fn, unmount: ln });
}
function mn() {
  return /* @__PURE__ */ Ut("div", { children: [
    /* @__PURE__ */ qe("h1", { children: "Scorecard" }),
    /* @__PURE__ */ qe(
      "div",
      {
        css: Bt`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${"white"};
          }
        `,
        children: "test"
      }
    )
  ] });
}
const pn = dn(mn);
window.customElements.define("scorecard", pn);
export {
  pn as default
};
