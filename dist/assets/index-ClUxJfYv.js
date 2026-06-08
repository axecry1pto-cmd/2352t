var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e2, _t2, _r2, _n2, _e3, _e4, _t3, _r3, _n3, _l2, _c2, _u2, _d2, _f2, _p2, _h2, _x2, _s2, _o2, _a2, _i2, _m2, _b2, _Kt_instances, g_fn, _e5, _t4, _r4, _xt_instances, n_fn, _Vu_instances, e_fn, _e6, _e7, _t5, _r5, _uv_instances, n_fn2, _Lt_instances, e_fn2, _Lt_static, t_fn;
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
  new MutationObserver((a) => {
    for (const o of a) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: true, subtree: true });
  function r(a) {
    const o = {};
    return a.integrity && (o.integrity = a.integrity), a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? o.credentials = "include" : a.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function n(a) {
    if (a.ep) return;
    a.ep = true;
    const o = r(a);
    fetch(a.href, o);
  }
})();
function cm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hd = { exports: {} }, os = {}, $d = { exports: {} }, re = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var zo = Symbol.for("react.element"), um = Symbol.for("react.portal"), dm = Symbol.for("react.fragment"), fm = Symbol.for("react.strict_mode"), pm = Symbol.for("react.profiler"), hm = Symbol.for("react.provider"), xm = Symbol.for("react.context"), mm = Symbol.for("react.forward_ref"), bm = Symbol.for("react.suspense"), gm = Symbol.for("react.memo"), ym = Symbol.for("react.lazy"), Yu = Symbol.iterator;
function vm(e) {
  return e === null || typeof e != "object" ? null : (e = Yu && e[Yu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Md = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Dd = Object.assign, Vd = {};
function ka(e, t, r) {
  this.props = e, this.context = t, this.refs = Vd, this.updater = r || Md;
}
ka.prototype.isReactComponent = {};
ka.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ka.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gd() {
}
Gd.prototype = ka.prototype;
function Nc(e, t, r) {
  this.props = e, this.context = t, this.refs = Vd, this.updater = r || Md;
}
var Pc = Nc.prototype = new Gd();
Pc.constructor = Nc;
Dd(Pc, ka.prototype);
Pc.isPureReactComponent = true;
var Qu = Array.isArray, qd = Object.prototype.hasOwnProperty, Cc = { current: null }, Kd = { key: true, ref: true, __self: true, __source: true };
function Wd(e, t, r) {
  var n, a = {}, o = null, i = null;
  if (t != null) for (n in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) qd.call(t, n) && !Kd.hasOwnProperty(n) && (a[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) a.children = r;
  else if (1 < s) {
    for (var l = Array(s), d = 0; d < s; d++) l[d] = arguments[d + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (n in s = e.defaultProps, s) a[n] === void 0 && (a[n] = s[n]);
  return { $$typeof: zo, type: e, key: o, ref: i, props: a, _owner: Cc.current };
}
function wm(e, t) {
  return { $$typeof: zo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function _c(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zo;
}
function km(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Zu = /\/+/g;
function Os(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? km("" + e.key) : t.toString(36);
}
function pi(e, t, r, n, a) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = false;
  if (e === null) i = true;
  else switch (o) {
    case "string":
    case "number":
      i = true;
      break;
    case "object":
      switch (e.$$typeof) {
        case zo:
        case um:
          i = true;
      }
  }
  if (i) return i = e, a = a(i), e = n === "" ? "." + Os(i, 0) : n, Qu(a) ? (r = "", e != null && (r = e.replace(Zu, "$&/") + "/"), pi(a, t, r, "", function(d) {
    return d;
  })) : a != null && (_c(a) && (a = wm(a, r + (!a.key || i && i.key === a.key ? "" : ("" + a.key).replace(Zu, "$&/") + "/") + e)), t.push(a)), 1;
  if (i = 0, n = n === "" ? "." : n + ":", Qu(e)) for (var s = 0; s < e.length; s++) {
    o = e[s];
    var l = n + Os(o, s);
    i += pi(o, t, r, l, a);
  }
  else if (l = vm(e), typeof l == "function") for (e = l.call(e), s = 0; !(o = e.next()).done; ) o = o.value, l = n + Os(o, s++), i += pi(o, t, r, l, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Mo(e, t, r) {
  if (e == null) return e;
  var n = [], a = 0;
  return pi(e, n, "", "", function(o) {
    return t.call(r, o, a++);
  }), n;
}
function Em(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var at = { current: null }, hi = { transition: null }, Sm = { ReactCurrentDispatcher: at, ReactCurrentBatchConfig: hi, ReactCurrentOwner: Cc };
function Yd() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = { map: Mo, forEach: function(e, t, r) {
  Mo(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return Mo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Mo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!_c(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
re.Component = ka;
re.Fragment = dm;
re.Profiler = pm;
re.PureComponent = Nc;
re.StrictMode = fm;
re.Suspense = bm;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sm;
re.act = Yd;
re.cloneElement = function(e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = Dd({}, e.props), a = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Cc.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (l in t) qd.call(t, l) && !Kd.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var d = 0; d < l; d++) s[d] = arguments[d + 2];
    n.children = s;
  }
  return { $$typeof: zo, type: e.type, key: a, ref: o, props: n, _owner: i };
};
re.createContext = function(e) {
  return e = { $$typeof: xm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hm, _context: e }, e.Consumer = e;
};
re.createElement = Wd;
re.createFactory = function(e) {
  var t = Wd.bind(null, e);
  return t.type = e, t;
};
re.createRef = function() {
  return { current: null };
};
re.forwardRef = function(e) {
  return { $$typeof: mm, render: e };
};
re.isValidElement = _c;
re.lazy = function(e) {
  return { $$typeof: ym, _payload: { _status: -1, _result: e }, _init: Em };
};
re.memo = function(e, t) {
  return { $$typeof: gm, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function(e) {
  var t = hi.transition;
  hi.transition = {};
  try {
    e();
  } finally {
    hi.transition = t;
  }
};
re.unstable_act = Yd;
re.useCallback = function(e, t) {
  return at.current.useCallback(e, t);
};
re.useContext = function(e) {
  return at.current.useContext(e);
};
re.useDebugValue = function() {
};
re.useDeferredValue = function(e) {
  return at.current.useDeferredValue(e);
};
re.useEffect = function(e, t) {
  return at.current.useEffect(e, t);
};
re.useId = function() {
  return at.current.useId();
};
re.useImperativeHandle = function(e, t, r) {
  return at.current.useImperativeHandle(e, t, r);
};
re.useInsertionEffect = function(e, t) {
  return at.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function(e, t) {
  return at.current.useLayoutEffect(e, t);
};
re.useMemo = function(e, t) {
  return at.current.useMemo(e, t);
};
re.useReducer = function(e, t, r) {
  return at.current.useReducer(e, t, r);
};
re.useRef = function(e) {
  return at.current.useRef(e);
};
re.useState = function(e) {
  return at.current.useState(e);
};
re.useSyncExternalStore = function(e, t, r) {
  return at.current.useSyncExternalStore(e, t, r);
};
re.useTransition = function() {
  return at.current.useTransition();
};
re.version = "18.3.1";
$d.exports = re;
var Zt = $d.exports;
const Qd = cm(Zt);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var zm = Zt, Im = Symbol.for("react.element"), Am = Symbol.for("react.fragment"), Bm = Object.prototype.hasOwnProperty, Nm = zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Pm = { key: true, ref: true, __self: true, __source: true };
function Zd(e, t, r) {
  var n, a = {}, o = null, i = null;
  r !== void 0 && (o = "" + r), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (n in t) Bm.call(t, n) && !Pm.hasOwnProperty(n) && (a[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) a[n] === void 0 && (a[n] = t[n]);
  return { $$typeof: Im, type: e, key: o, ref: i, props: a, _owner: Nm.current };
}
os.Fragment = Am;
os.jsx = Zd;
os.jsxs = Zd;
Hd.exports = os;
var $ = Hd.exports, Al = {}, Xd = { exports: {} }, zt = {}, Jd = { exports: {} }, ef = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e) {
  function t(T, k) {
    var _ = T.length;
    T.push(k);
    e: for (; 0 < _; ) {
      var R = _ - 1 >>> 1, M = T[R];
      if (0 < a(M, k)) T[R] = k, T[_] = M, _ = R;
      else break e;
    }
  }
  function r(T) {
    return T.length === 0 ? null : T[0];
  }
  function n(T) {
    if (T.length === 0) return null;
    var k = T[0], _ = T.pop();
    if (_ !== k) {
      T[0] = _;
      e: for (var R = 0, M = T.length, ae = M >>> 1; R < ae; ) {
        var oe = 2 * (R + 1) - 1, We = T[oe], Le = oe + 1, Oe = T[Le];
        if (0 > a(We, _)) Le < M && 0 > a(Oe, We) ? (T[R] = Oe, T[Le] = _, R = Le) : (T[R] = We, T[oe] = _, R = oe);
        else if (Le < M && 0 > a(Oe, _)) T[R] = Oe, T[Le] = _, R = Le;
        else break e;
      }
    }
    return k;
  }
  function a(T, k) {
    var _ = T.sortIndex - k.sortIndex;
    return _ !== 0 ? _ : T.id - k.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, s = i.now();
    e.unstable_now = function() {
      return i.now() - s;
    };
  }
  var l = [], d = [], h = 1, f = null, x = 3, w = false, E = false, v = false, A = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var k = r(d); k !== null; ) {
      if (k.callback === null) n(d);
      else if (k.startTime <= T) n(d), k.sortIndex = k.expirationTime, t(l, k);
      else break;
      k = r(d);
    }
  }
  function z(T) {
    if (v = false, g(T), !E) if (r(l) !== null) E = true, H(I);
    else {
      var k = r(d);
      k !== null && W(z, k.startTime - T);
    }
  }
  function I(T, k) {
    E = false, v && (v = false, m(C), C = -1), w = true;
    var _ = x;
    try {
      for (g(k), f = r(l); f !== null && (!(f.expirationTime > k) || T && !q()); ) {
        var R = f.callback;
        if (typeof R == "function") {
          f.callback = null, x = f.priorityLevel;
          var M = R(f.expirationTime <= k);
          k = e.unstable_now(), typeof M == "function" ? f.callback = M : f === r(l) && n(l), g(k);
        } else n(l);
        f = r(l);
      }
      if (f !== null) var ae = true;
      else {
        var oe = r(d);
        oe !== null && W(z, oe.startTime - k), ae = false;
      }
      return ae;
    } finally {
      f = null, x = _, w = false;
    }
  }
  var N = false, j = null, C = -1, V = 5, F = -1;
  function q() {
    return !(e.unstable_now() - F < V);
  }
  function Z() {
    if (j !== null) {
      var T = e.unstable_now();
      F = T;
      var k = true;
      try {
        k = j(true, T);
      } finally {
        k ? ee() : (N = false, j = null);
      }
    } else N = false;
  }
  var ee;
  if (typeof b == "function") ee = function() {
    b(Z);
  };
  else if (typeof MessageChannel < "u") {
    var ue = new MessageChannel(), U = ue.port2;
    ue.port1.onmessage = Z, ee = function() {
      U.postMessage(null);
    };
  } else ee = function() {
    A(Z, 0);
  };
  function H(T) {
    j = T, N || (N = true, ee());
  }
  function W(T, k) {
    C = A(function() {
      T(e.unstable_now());
    }, k);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    E || w || (E = true, H(I));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return x;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(T) {
    switch (x) {
      case 1:
      case 2:
      case 3:
        var k = 3;
        break;
      default:
        k = x;
    }
    var _ = x;
    x = k;
    try {
      return T();
    } finally {
      x = _;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, k) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var _ = x;
    x = T;
    try {
      return k();
    } finally {
      x = _;
    }
  }, e.unstable_scheduleCallback = function(T, k, _) {
    var R = e.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? R + _ : R) : _ = R, T) {
      case 1:
        var M = -1;
        break;
      case 2:
        M = 250;
        break;
      case 5:
        M = 1073741823;
        break;
      case 4:
        M = 1e4;
        break;
      default:
        M = 5e3;
    }
    return M = _ + M, T = { id: h++, callback: k, priorityLevel: T, startTime: _, expirationTime: M, sortIndex: -1 }, _ > R ? (T.sortIndex = _, t(d, T), r(l) === null && T === r(d) && (v ? (m(C), C = -1) : v = true, W(z, _ - R))) : (T.sortIndex = M, t(l, T), E || w || (E = true, H(I))), T;
  }, e.unstable_shouldYield = q, e.unstable_wrapCallback = function(T) {
    var k = x;
    return function() {
      var _ = x;
      x = k;
      try {
        return T.apply(this, arguments);
      } finally {
        x = _;
      }
    };
  };
})(ef);
Jd.exports = ef;
var Cm = Jd.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var _m = Zt, Et = Cm;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var tf = /* @__PURE__ */ new Set(), to = {};
function Un(e, t) {
  ua(e, t), ua(e + "Capture", t);
}
function ua(e, t) {
  for (to[e] = t, e = 0; e < t.length; e++) tf.add(t[e]);
}
var Br = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bl = Object.prototype.hasOwnProperty, jm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xu = {}, Ju = {};
function Lm(e) {
  return Bl.call(Ju, e) ? true : Bl.call(Xu, e) ? false : jm.test(e) ? Ju[e] = true : (Xu[e] = true, false);
}
function Tm(e, t, r, n) {
  if (r !== null && r.type === 0) return false;
  switch (typeof t) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      return n ? false : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return false;
  }
}
function Um(e, t, r, n) {
  if (t === null || typeof t > "u" || Tm(e, t, r, n)) return true;
  if (n) return false;
  if (r !== null) switch (r.type) {
    case 3:
      return !t;
    case 4:
      return t === false;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return false;
}
function ot(e, t, r, n, a, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var Ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ke[e] = new ot(e, 0, false, e, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ke[t] = new ot(t, 1, false, e[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ke[e] = new ot(e, 2, false, e.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ke[e] = new ot(e, 2, false, e, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ke[e] = new ot(e, 3, false, e.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ke[e] = new ot(e, 3, true, e, null, false, false);
});
["capture", "download"].forEach(function(e) {
  Ke[e] = new ot(e, 4, false, e, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ke[e] = new ot(e, 6, false, e, null, false, false);
});
["rowSpan", "start"].forEach(function(e) {
  Ke[e] = new ot(e, 5, false, e.toLowerCase(), null, false, false);
});
var jc = /[\-:]([a-z])/g;
function Lc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(jc, Lc);
  Ke[t] = new ot(t, 1, false, e, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(jc, Lc);
  Ke[t] = new ot(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(jc, Lc);
  Ke[t] = new ot(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ke[e] = new ot(e, 1, false, e.toLowerCase(), null, false, false);
});
Ke.xlinkHref = new ot("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ke[e] = new ot(e, 1, false, e.toLowerCase(), null, true, true);
});
function Tc(e, t, r, n) {
  var a = Ke.hasOwnProperty(t) ? Ke[t] : null;
  (a !== null ? a.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Um(t, r, a, n) && (r = null), n || a === null ? Lm(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : a.mustUseProperty ? e[a.propertyName] = r === null ? a.type === 3 ? false : "" : r : (t = a.attributeName, n = a.attributeNamespace, r === null ? e.removeAttribute(t) : (a = a.type, r = a === 3 || a === 4 && r === true ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var _r = _m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Do = Symbol.for("react.element"), Dn = Symbol.for("react.portal"), Vn = Symbol.for("react.fragment"), Uc = Symbol.for("react.strict_mode"), Nl = Symbol.for("react.profiler"), rf = Symbol.for("react.provider"), nf = Symbol.for("react.context"), Oc = Symbol.for("react.forward_ref"), Pl = Symbol.for("react.suspense"), Cl = Symbol.for("react.suspense_list"), Rc = Symbol.for("react.memo"), Gr = Symbol.for("react.lazy"), af = Symbol.for("react.offscreen"), e0 = Symbol.iterator;
function Na(e) {
  return e === null || typeof e != "object" ? null : (e = e0 && e[e0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ee = Object.assign, Rs;
function Fa(e) {
  if (Rs === void 0) try {
    throw Error();
  } catch (r) {
    var t = r.stack.trim().match(/\n( *(at )?)/);
    Rs = t && t[1] || "";
  }
  return `
` + Rs + e;
}
var Fs = false;
function Hs(e, t) {
  if (!e || Fs) return "";
  Fs = true;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (d) {
        var n = d;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (d) {
        n = d;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (d) {
        n = d;
      }
      e();
    }
  } catch (d) {
    if (d && n && typeof d.stack == "string") {
      for (var a = d.stack.split(`
`), o = n.stack.split(`
`), i = a.length - 1, s = o.length - 1; 1 <= i && 0 <= s && a[i] !== o[s]; ) s--;
      for (; 1 <= i && 0 <= s; i--, s--) if (a[i] !== o[s]) {
        if (i !== 1 || s !== 1) do
          if (i--, s--, 0 > s || a[i] !== o[s]) {
            var l = `
` + a[i].replace(" at new ", " at ");
            return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
          }
        while (1 <= i && 0 <= s);
        break;
      }
    }
  } finally {
    Fs = false, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? Fa(e) : "";
}
function Om(e) {
  switch (e.tag) {
    case 5:
      return Fa(e.type);
    case 16:
      return Fa("Lazy");
    case 13:
      return Fa("Suspense");
    case 19:
      return Fa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Hs(e.type, false), e;
    case 11:
      return e = Hs(e.type.render, false), e;
    case 1:
      return e = Hs(e.type, true), e;
    default:
      return "";
  }
}
function _l(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vn:
      return "Fragment";
    case Dn:
      return "Portal";
    case Nl:
      return "Profiler";
    case Uc:
      return "StrictMode";
    case Pl:
      return "Suspense";
    case Cl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case nf:
      return (e.displayName || "Context") + ".Consumer";
    case rf:
      return (e._context.displayName || "Context") + ".Provider";
    case Oc:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Rc:
      return t = e.displayName || null, t !== null ? t : _l(e.type) || "Memo";
    case Gr:
      t = e._payload, e = e._init;
      try {
        return _l(e(t));
      } catch {
      }
  }
  return null;
}
function Rm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return _l(t);
    case 8:
      return t === Uc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function sn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function of(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Fm(e) {
  var t = of(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var a = r.get, o = r.set;
    return Object.defineProperty(e, t, { configurable: true, get: function() {
      return a.call(this);
    }, set: function(i) {
      n = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(i) {
      n = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Vo(e) {
  e._valueTracker || (e._valueTracker = Fm(e));
}
function sf(e) {
  if (!e) return false;
  var t = e._valueTracker;
  if (!t) return true;
  var r = t.getValue(), n = "";
  return e && (n = of(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), true) : false;
}
function Ni(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function jl(e, t) {
  var r = t.checked;
  return Ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function t0(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = sn(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function lf(e, t) {
  t = t.checked, t != null && Tc(e, "checked", t, false);
}
function Ll(e, t) {
  lf(e, t);
  var r = sn(t.value), n = t.type;
  if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Tl(e, t.type, r) : t.hasOwnProperty("defaultValue") && Tl(e, t.type, sn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function r0(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function Tl(e, t, r) {
  (t !== "number" || Ni(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Ha = Array.isArray;
function na(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < r.length; a++) t["$" + r[a]] = true;
    for (r = 0; r < e.length; r++) a = t.hasOwnProperty("$" + e[r].value), e[r].selected !== a && (e[r].selected = a), a && n && (e[r].defaultSelected = true);
  } else {
    for (r = "" + sn(r), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === r) {
        e[a].selected = true, n && (e[a].defaultSelected = true);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = true);
  }
}
function Ul(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return Ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function n0(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null) throw Error(O(92));
      if (Ha(r)) {
        if (1 < r.length) throw Error(O(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: sn(r) };
}
function cf(e, t) {
  var r = sn(t.value), n = sn(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function a0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function uf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ol(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? uf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Go, df = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Go = Go || document.createElement("div"), Go.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Go.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ro(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Va = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Hm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Va).forEach(function(e) {
  Hm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Va[t] = Va[e];
  });
});
function ff(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Va.hasOwnProperty(e) && Va[e] ? ("" + t).trim() : t + "px";
}
function pf(e, t) {
  e = e.style;
  for (var r in t) if (t.hasOwnProperty(r)) {
    var n = r.indexOf("--") === 0, a = ff(r, t[r], n);
    r === "float" && (r = "cssFloat"), n ? e.setProperty(r, a) : e[r] = a;
  }
}
var $m = Ee({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function Rl(e, t) {
  if (t) {
    if ($m[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Fl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var Hl = null;
function Fc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var $l = null, aa = null, oa = null;
function o0(e) {
  if (e = Bo(e)) {
    if (typeof $l != "function") throw Error(O(280));
    var t = e.stateNode;
    t && (t = us(t), $l(e.stateNode, e.type, t));
  }
}
function hf(e) {
  aa ? oa ? oa.push(e) : oa = [e] : aa = e;
}
function xf() {
  if (aa) {
    var e = aa, t = oa;
    if (oa = aa = null, o0(e), t) for (e = 0; e < t.length; e++) o0(t[e]);
  }
}
function mf(e, t) {
  return e(t);
}
function bf() {
}
var $s = false;
function gf(e, t, r) {
  if ($s) return e(t, r);
  $s = true;
  try {
    return mf(e, t, r);
  } finally {
    $s = false, (aa !== null || oa !== null) && (bf(), xf());
  }
}
function no(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = us(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
      break e;
    default:
      e = false;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(O(231, t, typeof r));
  return r;
}
var Ml = false;
if (Br) try {
  var Pa = {};
  Object.defineProperty(Pa, "passive", { get: function() {
    Ml = true;
  } }), window.addEventListener("test", Pa, Pa), window.removeEventListener("test", Pa, Pa);
} catch {
  Ml = false;
}
function Mm(e, t, r, n, a, o, i, s, l) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, d);
  } catch (h) {
    this.onError(h);
  }
}
var Ga = false, Pi = null, Ci = false, Dl = null, Dm = { onError: function(e) {
  Ga = true, Pi = e;
} };
function Vm(e, t, r, n, a, o, i, s, l) {
  Ga = false, Pi = null, Mm.apply(Dm, arguments);
}
function Gm(e, t, r, n, a, o, i, s, l) {
  if (Vm.apply(this, arguments), Ga) {
    if (Ga) {
      var d = Pi;
      Ga = false, Pi = null;
    } else throw Error(O(198));
    Ci || (Ci = true, Dl = d);
  }
}
function On(e) {
  var t = e, r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (r = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function yf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function i0(e) {
  if (On(e) !== e) throw Error(O(188));
}
function qm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = On(e), t === null) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var a = r.return;
    if (a === null) break;
    var o = a.alternate;
    if (o === null) {
      if (n = a.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (a.child === o.child) {
      for (o = a.child; o; ) {
        if (o === r) return i0(a), e;
        if (o === n) return i0(a), t;
        o = o.sibling;
      }
      throw Error(O(188));
    }
    if (r.return !== n.return) r = a, n = o;
    else {
      for (var i = false, s = a.child; s; ) {
        if (s === r) {
          i = true, r = a, n = o;
          break;
        }
        if (s === n) {
          i = true, n = a, r = o;
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === r) {
            i = true, r = o, n = a;
            break;
          }
          if (s === n) {
            i = true, n = o, r = a;
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(O(189));
      }
    }
    if (r.alternate !== n) throw Error(O(190));
  }
  if (r.tag !== 3) throw Error(O(188));
  return r.stateNode.current === r ? e : t;
}
function vf(e) {
  return e = qm(e), e !== null ? wf(e) : null;
}
function wf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var kf = Et.unstable_scheduleCallback, s0 = Et.unstable_cancelCallback, Km = Et.unstable_shouldYield, Wm = Et.unstable_requestPaint, Ae = Et.unstable_now, Ym = Et.unstable_getCurrentPriorityLevel, Hc = Et.unstable_ImmediatePriority, Ef = Et.unstable_UserBlockingPriority, _i = Et.unstable_NormalPriority, Qm = Et.unstable_LowPriority, Sf = Et.unstable_IdlePriority, is = null, hr = null;
function Zm(e) {
  if (hr && typeof hr.onCommitFiberRoot == "function") try {
    hr.onCommitFiberRoot(is, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Xt = Math.clz32 ? Math.clz32 : e1, Xm = Math.log, Jm = Math.LN2;
function e1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Xm(e) / Jm | 0) | 0;
}
var qo = 64, Ko = 4194304;
function $a(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ji(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0, a = e.suspendedLanes, o = e.pingedLanes, i = r & 268435455;
  if (i !== 0) {
    var s = i & ~a;
    s !== 0 ? n = $a(s) : (o &= i, o !== 0 && (n = $a(o)));
  } else i = r & ~a, i !== 0 ? n = $a(i) : o !== 0 && (n = $a(o));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & a) && (a = n & -n, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= n; 0 < t; ) r = 31 - Xt(t), a = 1 << r, n |= e[r], t &= ~a;
  return n;
}
function t1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function r1(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Xt(o), s = 1 << i, l = a[i];
    l === -1 ? (!(s & r) || s & n) && (a[i] = t1(s, t)) : l <= t && (e.expiredLanes |= s), o &= ~s;
  }
}
function Vl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function zf() {
  var e = qo;
  return qo <<= 1, !(qo & 4194240) && (qo = 64), e;
}
function Ms(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Io(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xt(t), e[t] = r;
}
function n1(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var a = 31 - Xt(r), o = 1 << a;
    t[a] = 0, n[a] = -1, e[a] = -1, r &= ~o;
  }
}
function $c(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - Xt(r), a = 1 << n;
    a & t | e[n] & t && (e[n] |= t), r &= ~a;
  }
}
var ce = 0;
function If(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Af, Mc, Bf, Nf, Pf, Gl = false, Wo = [], Zr = null, Xr = null, Jr = null, ao = /* @__PURE__ */ new Map(), oo = /* @__PURE__ */ new Map(), Kr = [], a1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function l0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zr = null;
      break;
    case "dragenter":
    case "dragleave":
      Xr = null;
      break;
    case "mouseover":
    case "mouseout":
      Jr = null;
      break;
    case "pointerover":
    case "pointerout":
      ao.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oo.delete(t.pointerId);
  }
}
function Ca(e, t, r, n, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Bo(t), t !== null && Mc(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function o1(e, t, r, n, a) {
  switch (t) {
    case "focusin":
      return Zr = Ca(Zr, e, t, r, n, a), true;
    case "dragenter":
      return Xr = Ca(Xr, e, t, r, n, a), true;
    case "mouseover":
      return Jr = Ca(Jr, e, t, r, n, a), true;
    case "pointerover":
      var o = a.pointerId;
      return ao.set(o, Ca(ao.get(o) || null, e, t, r, n, a)), true;
    case "gotpointercapture":
      return o = a.pointerId, oo.set(o, Ca(oo.get(o) || null, e, t, r, n, a)), true;
  }
  return false;
}
function Cf(e) {
  var t = wn(e.target);
  if (t !== null) {
    var r = On(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = yf(r), t !== null) {
          e.blockedOn = t, Pf(e.priority, function() {
            Bf(r);
          });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xi(e) {
  if (e.blockedOn !== null) return false;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      Hl = n, r.target.dispatchEvent(n), Hl = null;
    } else return t = Bo(r), t !== null && Mc(t), e.blockedOn = r, false;
    t.shift();
  }
  return true;
}
function c0(e, t, r) {
  xi(e) && r.delete(t);
}
function i1() {
  Gl = false, Zr !== null && xi(Zr) && (Zr = null), Xr !== null && xi(Xr) && (Xr = null), Jr !== null && xi(Jr) && (Jr = null), ao.forEach(c0), oo.forEach(c0);
}
function _a(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Gl || (Gl = true, Et.unstable_scheduleCallback(Et.unstable_NormalPriority, i1)));
}
function io(e) {
  function t(a) {
    return _a(a, e);
  }
  if (0 < Wo.length) {
    _a(Wo[0], e);
    for (var r = 1; r < Wo.length; r++) {
      var n = Wo[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (Zr !== null && _a(Zr, e), Xr !== null && _a(Xr, e), Jr !== null && _a(Jr, e), ao.forEach(t), oo.forEach(t), r = 0; r < Kr.length; r++) n = Kr[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Kr.length && (r = Kr[0], r.blockedOn === null); ) Cf(r), r.blockedOn === null && Kr.shift();
}
var ia = _r.ReactCurrentBatchConfig, Li = true;
function s1(e, t, r, n) {
  var a = ce, o = ia.transition;
  ia.transition = null;
  try {
    ce = 1, Dc(e, t, r, n);
  } finally {
    ce = a, ia.transition = o;
  }
}
function l1(e, t, r, n) {
  var a = ce, o = ia.transition;
  ia.transition = null;
  try {
    ce = 4, Dc(e, t, r, n);
  } finally {
    ce = a, ia.transition = o;
  }
}
function Dc(e, t, r, n) {
  if (Li) {
    var a = ql(e, t, r, n);
    if (a === null) Xs(e, t, n, Ti, r), l0(e, n);
    else if (o1(a, e, t, r, n)) n.stopPropagation();
    else if (l0(e, n), t & 4 && -1 < a1.indexOf(e)) {
      for (; a !== null; ) {
        var o = Bo(a);
        if (o !== null && Af(o), o = ql(e, t, r, n), o === null && Xs(e, t, n, Ti, r), o === a) break;
        a = o;
      }
      a !== null && n.stopPropagation();
    } else Xs(e, t, n, null, r);
  }
}
var Ti = null;
function ql(e, t, r, n) {
  if (Ti = null, e = Fc(n), e = wn(e), e !== null) if (t = On(e), t === null) e = null;
  else if (r = t.tag, r === 13) {
    if (e = yf(t), e !== null) return e;
    e = null;
  } else if (r === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ti = e, null;
}
function _f(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ym()) {
        case Hc:
          return 1;
        case Ef:
          return 4;
        case _i:
        case Qm:
          return 16;
        case Sf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yr = null, Vc = null, mi = null;
function jf() {
  if (mi) return mi;
  var e, t = Vc, r = t.length, n, a = "value" in Yr ? Yr.value : Yr.textContent, o = a.length;
  for (e = 0; e < r && t[e] === a[e]; e++) ;
  var i = r - e;
  for (n = 1; n <= i && t[r - n] === a[o - n]; n++) ;
  return mi = a.slice(e, 1 < n ? 1 - n : void 0);
}
function bi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Yo() {
  return true;
}
function u0() {
  return false;
}
function It(e) {
  function t(r, n, a, o, i) {
    this._reactName = r, this._targetInst = a, this.type = n, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(o) : o[s]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? Yo : u0, this.isPropagationStopped = u0, this;
  }
  return Ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = false), this.isDefaultPrevented = Yo);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = true), this.isPropagationStopped = Yo);
  }, persist: function() {
  }, isPersistent: Yo }), t;
}
var Ea = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Gc = It(Ea), Ao = Ee({}, Ea, { view: 0, detail: 0 }), c1 = It(Ao), Ds, Vs, ja, ss = Ee({}, Ao, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ja && (ja && e.type === "mousemove" ? (Ds = e.screenX - ja.screenX, Vs = e.screenY - ja.screenY) : Vs = Ds = 0, ja = e), Ds);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Vs;
} }), d0 = It(ss), u1 = Ee({}, ss, { dataTransfer: 0 }), d1 = It(u1), f1 = Ee({}, Ao, { relatedTarget: 0 }), Gs = It(f1), p1 = Ee({}, Ea, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), h1 = It(p1), x1 = Ee({}, Ea, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), m1 = It(x1), b1 = Ee({}, Ea, { data: 0 }), f0 = It(b1), g1 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, y1 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, v1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function w1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = v1[e]) ? !!t[e] : false;
}
function qc() {
  return w1;
}
var k1 = Ee({}, Ao, { key: function(e) {
  if (e.key) {
    var t = g1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = bi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? y1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qc, charCode: function(e) {
  return e.type === "keypress" ? bi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? bi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), E1 = It(k1), S1 = Ee({}, ss, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), p0 = It(S1), z1 = Ee({}, Ao, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qc }), I1 = It(z1), A1 = Ee({}, Ea, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), B1 = It(A1), N1 = Ee({}, ss, { deltaX: function(e) {
  return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
}, deltaY: function(e) {
  return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), P1 = It(N1), C1 = [9, 13, 27, 32], Kc = Br && "CompositionEvent" in window, qa = null;
Br && "documentMode" in document && (qa = document.documentMode);
var _1 = Br && "TextEvent" in window && !qa, Lf = Br && (!Kc || qa && 8 < qa && 11 >= qa), h0 = " ", x0 = false;
function Tf(e, t) {
  switch (e) {
    case "keyup":
      return C1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function Uf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Gn = false;
function j1(e, t) {
  switch (e) {
    case "compositionend":
      return Uf(t);
    case "keypress":
      return t.which !== 32 ? null : (x0 = true, h0);
    case "textInput":
      return e = t.data, e === h0 && x0 ? null : e;
    default:
      return null;
  }
}
function L1(e, t) {
  if (Gn) return e === "compositionend" || !Kc && Tf(e, t) ? (e = jf(), mi = Vc = Yr = null, Gn = false, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Lf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var T1 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function m0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!T1[e.type] : t === "textarea";
}
function Of(e, t, r, n) {
  hf(n), t = Ui(t, "onChange"), 0 < t.length && (r = new Gc("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Ka = null, so = null;
function U1(e) {
  Wf(e, 0);
}
function ls(e) {
  var t = Wn(e);
  if (sf(t)) return e;
}
function O1(e, t) {
  if (e === "change") return t;
}
var Rf = false;
if (Br) {
  var qs;
  if (Br) {
    var Ks = "oninput" in document;
    if (!Ks) {
      var b0 = document.createElement("div");
      b0.setAttribute("oninput", "return;"), Ks = typeof b0.oninput == "function";
    }
    qs = Ks;
  } else qs = false;
  Rf = qs && (!document.documentMode || 9 < document.documentMode);
}
function g0() {
  Ka && (Ka.detachEvent("onpropertychange", Ff), so = Ka = null);
}
function Ff(e) {
  if (e.propertyName === "value" && ls(so)) {
    var t = [];
    Of(t, so, e, Fc(e)), gf(U1, t);
  }
}
function R1(e, t, r) {
  e === "focusin" ? (g0(), Ka = t, so = r, Ka.attachEvent("onpropertychange", Ff)) : e === "focusout" && g0();
}
function F1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ls(so);
}
function H1(e, t) {
  if (e === "click") return ls(t);
}
function $1(e, t) {
  if (e === "input" || e === "change") return ls(t);
}
function M1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var er = typeof Object.is == "function" ? Object.is : M1;
function lo(e, t) {
  if (er(e, t)) return true;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return false;
  for (n = 0; n < r.length; n++) {
    var a = r[n];
    if (!Bl.call(t, a) || !er(e[a], t[a])) return false;
  }
  return true;
}
function y0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function v0(e, t) {
  var r = y0(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = y0(r);
  }
}
function Hf(e, t) {
  return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Hf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
}
function $f() {
  for (var e = window, t = Ni(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = false;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Ni(e.document);
  }
  return t;
}
function Wc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function D1(e) {
  var t = $f(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Hf(r.ownerDocument.documentElement, r)) {
    if (n !== null && Wc(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = r.textContent.length, o = Math.min(n.start, a);
        n = n.end === void 0 ? o : Math.min(n.end, a), !e.extend && o > n && (a = n, n = o, o = a), a = v0(r, o);
        var i = v0(r, n);
        a && i && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), o > n ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var V1 = Br && "documentMode" in document && 11 >= document.documentMode, qn = null, Kl = null, Wa = null, Wl = false;
function w0(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Wl || qn == null || qn !== Ni(n) || (n = qn, "selectionStart" in n && Wc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Wa && lo(Wa, n) || (Wa = n, n = Ui(Kl, "onSelect"), 0 < n.length && (t = new Gc("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = qn)));
}
function Qo(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var Kn = { animationend: Qo("Animation", "AnimationEnd"), animationiteration: Qo("Animation", "AnimationIteration"), animationstart: Qo("Animation", "AnimationStart"), transitionend: Qo("Transition", "TransitionEnd") }, Ws = {}, Mf = {};
Br && (Mf = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
function cs(e) {
  if (Ws[e]) return Ws[e];
  if (!Kn[e]) return e;
  var t = Kn[e], r;
  for (r in t) if (t.hasOwnProperty(r) && r in Mf) return Ws[e] = t[r];
  return e;
}
var Df = cs("animationend"), Vf = cs("animationiteration"), Gf = cs("animationstart"), qf = cs("transitionend"), Kf = /* @__PURE__ */ new Map(), k0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function un(e, t) {
  Kf.set(e, t), Un(t, [e]);
}
for (var Ys = 0; Ys < k0.length; Ys++) {
  var Qs = k0[Ys], G1 = Qs.toLowerCase(), q1 = Qs[0].toUpperCase() + Qs.slice(1);
  un(G1, "on" + q1);
}
un(Df, "onAnimationEnd");
un(Vf, "onAnimationIteration");
un(Gf, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(qf, "onTransitionEnd");
ua("onMouseEnter", ["mouseout", "mouseover"]);
ua("onMouseLeave", ["mouseout", "mouseover"]);
ua("onPointerEnter", ["pointerout", "pointerover"]);
ua("onPointerLeave", ["pointerout", "pointerover"]);
Un("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Un("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Un("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Un("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Un("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ma = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), K1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));
function E0(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, Gm(n, t, void 0, e), e.currentTarget = null;
}
function Wf(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], a = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = n.length - 1; 0 <= i; i--) {
        var s = n[i], l = s.instance, d = s.currentTarget;
        if (s = s.listener, l !== o && a.isPropagationStopped()) break e;
        E0(a, s, d), o = l;
      }
      else for (i = 0; i < n.length; i++) {
        if (s = n[i], l = s.instance, d = s.currentTarget, s = s.listener, l !== o && a.isPropagationStopped()) break e;
        E0(a, s, d), o = l;
      }
    }
  }
  if (Ci) throw e = Dl, Ci = false, Dl = null, e;
}
function me(e, t) {
  var r = t[Jl];
  r === void 0 && (r = t[Jl] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (Yf(t, e, 2, false), r.add(n));
}
function Zs(e, t, r) {
  var n = 0;
  t && (n |= 4), Yf(r, e, n, t);
}
var Zo = "_reactListening" + Math.random().toString(36).slice(2);
function co(e) {
  if (!e[Zo]) {
    e[Zo] = true, tf.forEach(function(r) {
      r !== "selectionchange" && (K1.has(r) || Zs(r, false, e), Zs(r, true, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zo] || (t[Zo] = true, Zs("selectionchange", false, t));
  }
}
function Yf(e, t, r, n) {
  switch (_f(t)) {
    case 1:
      var a = s1;
      break;
    case 4:
      a = l1;
      break;
    default:
      a = Dc;
  }
  r = a.bind(null, t, r, e), a = void 0, !Ml || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = true), n ? a !== void 0 ? e.addEventListener(t, r, { capture: true, passive: a }) : e.addEventListener(t, r, true) : a !== void 0 ? e.addEventListener(t, r, { passive: a }) : e.addEventListener(t, r, false);
}
function Xs(e, t, r, n, a) {
  var o = n;
  if (!(t & 1) && !(t & 2) && n !== null) e: for (; ; ) {
    if (n === null) return;
    var i = n.tag;
    if (i === 3 || i === 4) {
      var s = n.stateNode.containerInfo;
      if (s === a || s.nodeType === 8 && s.parentNode === a) break;
      if (i === 4) for (i = n.return; i !== null; ) {
        var l = i.tag;
        if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo, l === a || l.nodeType === 8 && l.parentNode === a)) return;
        i = i.return;
      }
      for (; s !== null; ) {
        if (i = wn(s), i === null) return;
        if (l = i.tag, l === 5 || l === 6) {
          n = o = i;
          continue e;
        }
        s = s.parentNode;
      }
    }
    n = n.return;
  }
  gf(function() {
    var d = o, h = Fc(r), f = [];
    e: {
      var x = Kf.get(e);
      if (x !== void 0) {
        var w = Gc, E = e;
        switch (e) {
          case "keypress":
            if (bi(r) === 0) break e;
          case "keydown":
          case "keyup":
            w = E1;
            break;
          case "focusin":
            E = "focus", w = Gs;
            break;
          case "focusout":
            E = "blur", w = Gs;
            break;
          case "beforeblur":
          case "afterblur":
            w = Gs;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = d0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = d1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = I1;
            break;
          case Df:
          case Vf:
          case Gf:
            w = h1;
            break;
          case qf:
            w = B1;
            break;
          case "scroll":
            w = c1;
            break;
          case "wheel":
            w = P1;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = m1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = p0;
        }
        var v = (t & 4) !== 0, A = !v && e === "scroll", m = v ? x !== null ? x + "Capture" : null : x;
        v = [];
        for (var b = d, g; b !== null; ) {
          g = b;
          var z = g.stateNode;
          if (g.tag === 5 && z !== null && (g = z, m !== null && (z = no(b, m), z != null && v.push(uo(b, z, g)))), A) break;
          b = b.return;
        }
        0 < v.length && (x = new w(x, E, null, r, h), f.push({ event: x, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (x = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", x && r !== Hl && (E = r.relatedTarget || r.fromElement) && (wn(E) || E[Nr])) break e;
        if ((w || x) && (x = h.window === h ? h : (x = h.ownerDocument) ? x.defaultView || x.parentWindow : window, w ? (E = r.relatedTarget || r.toElement, w = d, E = E ? wn(E) : null, E !== null && (A = On(E), E !== A || E.tag !== 5 && E.tag !== 6) && (E = null)) : (w = null, E = d), w !== E)) {
          if (v = d0, z = "onMouseLeave", m = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (v = p0, z = "onPointerLeave", m = "onPointerEnter", b = "pointer"), A = w == null ? x : Wn(w), g = E == null ? x : Wn(E), x = new v(z, b + "leave", w, r, h), x.target = A, x.relatedTarget = g, z = null, wn(h) === d && (v = new v(m, b + "enter", E, r, h), v.target = g, v.relatedTarget = A, z = v), A = z, w && E) t: {
            for (v = w, m = E, b = 0, g = v; g; g = Fn(g)) b++;
            for (g = 0, z = m; z; z = Fn(z)) g++;
            for (; 0 < b - g; ) v = Fn(v), b--;
            for (; 0 < g - b; ) m = Fn(m), g--;
            for (; b--; ) {
              if (v === m || m !== null && v === m.alternate) break t;
              v = Fn(v), m = Fn(m);
            }
            v = null;
          }
          else v = null;
          w !== null && S0(f, x, w, v, false), E !== null && A !== null && S0(f, A, E, v, true);
        }
      }
      e: {
        if (x = d ? Wn(d) : window, w = x.nodeName && x.nodeName.toLowerCase(), w === "select" || w === "input" && x.type === "file") var I = O1;
        else if (m0(x)) if (Rf) I = $1;
        else {
          I = F1;
          var N = R1;
        }
        else (w = x.nodeName) && w.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (I = H1);
        if (I && (I = I(e, d))) {
          Of(f, I, r, h);
          break e;
        }
        N && N(e, x, d), e === "focusout" && (N = x._wrapperState) && N.controlled && x.type === "number" && Tl(x, "number", x.value);
      }
      switch (N = d ? Wn(d) : window, e) {
        case "focusin":
          (m0(N) || N.contentEditable === "true") && (qn = N, Kl = d, Wa = null);
          break;
        case "focusout":
          Wa = Kl = qn = null;
          break;
        case "mousedown":
          Wl = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Wl = false, w0(f, r, h);
          break;
        case "selectionchange":
          if (V1) break;
        case "keydown":
        case "keyup":
          w0(f, r, h);
      }
      var j;
      if (Kc) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e;
        }
        C = void 0;
      }
      else Gn ? Tf(e, r) && (C = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (C = "onCompositionStart");
      C && (Lf && r.locale !== "ko" && (Gn || C !== "onCompositionStart" ? C === "onCompositionEnd" && Gn && (j = jf()) : (Yr = h, Vc = "value" in Yr ? Yr.value : Yr.textContent, Gn = true)), N = Ui(d, C), 0 < N.length && (C = new f0(C, e, null, r, h), f.push({ event: C, listeners: N }), j ? C.data = j : (j = Uf(r), j !== null && (C.data = j)))), (j = _1 ? j1(e, r) : L1(e, r)) && (d = Ui(d, "onBeforeInput"), 0 < d.length && (h = new f0("onBeforeInput", "beforeinput", null, r, h), f.push({ event: h, listeners: d }), h.data = j));
    }
    Wf(f, t);
  });
}
function uo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Ui(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = no(e, r), o != null && n.unshift(uo(e, o, a)), o = no(e, t), o != null && n.push(uo(e, o, a))), e = e.return;
  }
  return n;
}
function Fn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function S0(e, t, r, n, a) {
  for (var o = t._reactName, i = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, d = s.stateNode;
    if (l !== null && l === n) break;
    s.tag === 5 && d !== null && (s = d, a ? (l = no(r, o), l != null && i.unshift(uo(r, l, s))) : a || (l = no(r, o), l != null && i.push(uo(r, l, s)))), r = r.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var W1 = /\r\n?/g, Y1 = /\u0000|\uFFFD/g;
function z0(e) {
  return (typeof e == "string" ? e : "" + e).replace(W1, `
`).replace(Y1, "");
}
function Xo(e, t, r) {
  if (t = z0(t), z0(e) !== t && r) throw Error(O(425));
}
function Oi() {
}
var Yl = null, Ql = null;
function Zl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Xl = typeof setTimeout == "function" ? setTimeout : void 0, Q1 = typeof clearTimeout == "function" ? clearTimeout : void 0, I0 = typeof Promise == "function" ? Promise : void 0, Z1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof I0 < "u" ? function(e) {
  return I0.resolve(null).then(e).catch(X1);
} : Xl;
function X1(e) {
  setTimeout(function() {
    throw e;
  });
}
function Js(e, t) {
  var r = t, n = 0;
  do {
    var a = r.nextSibling;
    if (e.removeChild(r), a && a.nodeType === 8) if (r = a.data, r === "/$") {
      if (n === 0) {
        e.removeChild(a), io(t);
        return;
      }
      n--;
    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = a;
  } while (r);
  io(t);
}
function en(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function A0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sa = Math.random().toString(36).slice(2), dr = "__reactFiber$" + Sa, fo = "__reactProps$" + Sa, Nr = "__reactContainer$" + Sa, Jl = "__reactEvents$" + Sa, J1 = "__reactListeners$" + Sa, eb = "__reactHandles$" + Sa;
function wn(e) {
  var t = e[dr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[Nr] || r[dr]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = A0(e); e !== null; ) {
        if (r = e[dr]) return r;
        e = A0(e);
      }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function Bo(e) {
  return e = e[dr] || e[Nr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function us(e) {
  return e[fo] || null;
}
var ec = [], Yn = -1;
function dn(e) {
  return { current: e };
}
function be(e) {
  0 > Yn || (e.current = ec[Yn], ec[Yn] = null, Yn--);
}
function xe(e, t) {
  Yn++, ec[Yn] = e.current, e.current = t;
}
var ln = {}, et = dn(ln), ut = dn(false), Pn = ln;
function da(e, t) {
  var r = e.type.contextTypes;
  if (!r) return ln;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in r) a[o] = t[o];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function dt(e) {
  return e = e.childContextTypes, e != null;
}
function Ri() {
  be(ut), be(et);
}
function B0(e, t, r) {
  if (et.current !== ln) throw Error(O(168));
  xe(et, t), xe(ut, r);
}
function Qf(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
  n = n.getChildContext();
  for (var a in n) if (!(a in t)) throw Error(O(108, Rm(e) || "Unknown", a));
  return Ee({}, r, n);
}
function Fi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ln, Pn = et.current, xe(et, e), xe(ut, ut.current), true;
}
function N0(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(O(169));
  r ? (e = Qf(e, t, Pn), n.__reactInternalMemoizedMergedChildContext = e, be(ut), be(et), xe(et, e)) : be(ut), xe(ut, r);
}
var wr = null, ds = false, el = false;
function Zf(e) {
  wr === null ? wr = [e] : wr.push(e);
}
function tb(e) {
  ds = true, Zf(e);
}
function fn() {
  if (!el && wr !== null) {
    el = true;
    var e = 0, t = ce;
    try {
      var r = wr;
      for (ce = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(true);
        while (n !== null);
      }
      wr = null, ds = false;
    } catch (a) {
      throw wr !== null && (wr = wr.slice(e + 1)), kf(Hc, fn), a;
    } finally {
      ce = t, el = false;
    }
  }
  return null;
}
var Qn = [], Zn = 0, Hi = null, $i = 0, Tt = [], Ut = 0, Cn = null, Er = 1, Sr = "";
function mn(e, t) {
  Qn[Zn++] = $i, Qn[Zn++] = Hi, Hi = e, $i = t;
}
function Xf(e, t, r) {
  Tt[Ut++] = Er, Tt[Ut++] = Sr, Tt[Ut++] = Cn, Cn = e;
  var n = Er;
  e = Sr;
  var a = 32 - Xt(n) - 1;
  n &= ~(1 << a), r += 1;
  var o = 32 - Xt(t) + a;
  if (30 < o) {
    var i = a - a % 5;
    o = (n & (1 << i) - 1).toString(32), n >>= i, a -= i, Er = 1 << 32 - Xt(t) + a | r << a | n, Sr = o + e;
  } else Er = 1 << o | r << a | n, Sr = e;
}
function Yc(e) {
  e.return !== null && (mn(e, 1), Xf(e, 1, 0));
}
function Qc(e) {
  for (; e === Hi; ) Hi = Qn[--Zn], Qn[Zn] = null, $i = Qn[--Zn], Qn[Zn] = null;
  for (; e === Cn; ) Cn = Tt[--Ut], Tt[Ut] = null, Sr = Tt[--Ut], Tt[Ut] = null, Er = Tt[--Ut], Tt[Ut] = null;
}
var vt = null, yt = null, ye = false, Qt = null;
function Jf(e, t) {
  var r = Ot(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function P0(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, vt = e, yt = en(t.firstChild), true) : false;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, vt = e, yt = null, true) : false;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Cn !== null ? { id: Er, overflow: Sr } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Ot(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, vt = e, yt = null, true) : false;
    default:
      return false;
  }
}
function tc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rc(e) {
  if (ye) {
    var t = yt;
    if (t) {
      var r = t;
      if (!P0(e, t)) {
        if (tc(e)) throw Error(O(418));
        t = en(r.nextSibling);
        var n = vt;
        t && P0(e, t) ? Jf(n, r) : (e.flags = e.flags & -4097 | 2, ye = false, vt = e);
      }
    } else {
      if (tc(e)) throw Error(O(418));
      e.flags = e.flags & -4097 | 2, ye = false, vt = e;
    }
  }
}
function C0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  vt = e;
}
function Jo(e) {
  if (e !== vt) return false;
  if (!ye) return C0(e), ye = true, false;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Zl(e.type, e.memoizedProps)), t && (t = yt)) {
    if (tc(e)) throw ep(), Error(O(418));
    for (; t; ) Jf(e, t), t = en(t.nextSibling);
  }
  if (C0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              yt = en(e.nextSibling);
              break e;
            }
            t--;
          } else r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      yt = null;
    }
  } else yt = vt ? en(e.stateNode.nextSibling) : null;
  return true;
}
function ep() {
  for (var e = yt; e; ) e = en(e.nextSibling);
}
function fa() {
  yt = vt = null, ye = false;
}
function Zc(e) {
  Qt === null ? Qt = [e] : Qt.push(e);
}
var rb = _r.ReactCurrentBatchConfig;
function La(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1) throw Error(O(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(O(147, e));
      var a = n, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var s = a.refs;
        i === null ? delete s[o] : s[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!r._owner) throw Error(O(290, e));
  }
  return e;
}
function ei(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function _0(e) {
  var t = e._init;
  return t(e._payload);
}
function tp(e) {
  function t(m, b) {
    if (e) {
      var g = m.deletions;
      g === null ? (m.deletions = [b], m.flags |= 16) : g.push(b);
    }
  }
  function r(m, b) {
    if (!e) return null;
    for (; b !== null; ) t(m, b), b = b.sibling;
    return null;
  }
  function n(m, b) {
    for (m = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? m.set(b.key, b) : m.set(b.index, b), b = b.sibling;
    return m;
  }
  function a(m, b) {
    return m = an(m, b), m.index = 0, m.sibling = null, m;
  }
  function o(m, b, g) {
    return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < b ? (m.flags |= 2, b) : g) : (m.flags |= 2, b)) : (m.flags |= 1048576, b);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, b, g, z) {
    return b === null || b.tag !== 6 ? (b = sl(g, m.mode, z), b.return = m, b) : (b = a(b, g), b.return = m, b);
  }
  function l(m, b, g, z) {
    var I = g.type;
    return I === Vn ? h(m, b, g.props.children, z, g.key) : b !== null && (b.elementType === I || typeof I == "object" && I !== null && I.$$typeof === Gr && _0(I) === b.type) ? (z = a(b, g.props), z.ref = La(m, b, g), z.return = m, z) : (z = Si(g.type, g.key, g.props, null, m.mode, z), z.ref = La(m, b, g), z.return = m, z);
  }
  function d(m, b, g, z) {
    return b === null || b.tag !== 4 || b.stateNode.containerInfo !== g.containerInfo || b.stateNode.implementation !== g.implementation ? (b = ll(g, m.mode, z), b.return = m, b) : (b = a(b, g.children || []), b.return = m, b);
  }
  function h(m, b, g, z, I) {
    return b === null || b.tag !== 7 ? (b = In(g, m.mode, z, I), b.return = m, b) : (b = a(b, g), b.return = m, b);
  }
  function f(m, b, g) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return b = sl("" + b, m.mode, g), b.return = m, b;
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Do:
          return g = Si(b.type, b.key, b.props, null, m.mode, g), g.ref = La(m, null, b), g.return = m, g;
        case Dn:
          return b = ll(b, m.mode, g), b.return = m, b;
        case Gr:
          var z = b._init;
          return f(m, z(b._payload), g);
      }
      if (Ha(b) || Na(b)) return b = In(b, m.mode, g, null), b.return = m, b;
      ei(m, b);
    }
    return null;
  }
  function x(m, b, g, z) {
    var I = b !== null ? b.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return I !== null ? null : s(m, b, "" + g, z);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Do:
          return g.key === I ? l(m, b, g, z) : null;
        case Dn:
          return g.key === I ? d(m, b, g, z) : null;
        case Gr:
          return I = g._init, x(m, b, I(g._payload), z);
      }
      if (Ha(g) || Na(g)) return I !== null ? null : h(m, b, g, z, null);
      ei(m, g);
    }
    return null;
  }
  function w(m, b, g, z, I) {
    if (typeof z == "string" && z !== "" || typeof z == "number") return m = m.get(g) || null, s(b, m, "" + z, I);
    if (typeof z == "object" && z !== null) {
      switch (z.$$typeof) {
        case Do:
          return m = m.get(z.key === null ? g : z.key) || null, l(b, m, z, I);
        case Dn:
          return m = m.get(z.key === null ? g : z.key) || null, d(b, m, z, I);
        case Gr:
          var N = z._init;
          return w(m, b, g, N(z._payload), I);
      }
      if (Ha(z) || Na(z)) return m = m.get(g) || null, h(b, m, z, I, null);
      ei(b, z);
    }
    return null;
  }
  function E(m, b, g, z) {
    for (var I = null, N = null, j = b, C = b = 0, V = null; j !== null && C < g.length; C++) {
      j.index > C ? (V = j, j = null) : V = j.sibling;
      var F = x(m, j, g[C], z);
      if (F === null) {
        j === null && (j = V);
        break;
      }
      e && j && F.alternate === null && t(m, j), b = o(F, b, C), N === null ? I = F : N.sibling = F, N = F, j = V;
    }
    if (C === g.length) return r(m, j), ye && mn(m, C), I;
    if (j === null) {
      for (; C < g.length; C++) j = f(m, g[C], z), j !== null && (b = o(j, b, C), N === null ? I = j : N.sibling = j, N = j);
      return ye && mn(m, C), I;
    }
    for (j = n(m, j); C < g.length; C++) V = w(j, m, C, g[C], z), V !== null && (e && V.alternate !== null && j.delete(V.key === null ? C : V.key), b = o(V, b, C), N === null ? I = V : N.sibling = V, N = V);
    return e && j.forEach(function(q) {
      return t(m, q);
    }), ye && mn(m, C), I;
  }
  function v(m, b, g, z) {
    var I = Na(g);
    if (typeof I != "function") throw Error(O(150));
    if (g = I.call(g), g == null) throw Error(O(151));
    for (var N = I = null, j = b, C = b = 0, V = null, F = g.next(); j !== null && !F.done; C++, F = g.next()) {
      j.index > C ? (V = j, j = null) : V = j.sibling;
      var q = x(m, j, F.value, z);
      if (q === null) {
        j === null && (j = V);
        break;
      }
      e && j && q.alternate === null && t(m, j), b = o(q, b, C), N === null ? I = q : N.sibling = q, N = q, j = V;
    }
    if (F.done) return r(m, j), ye && mn(m, C), I;
    if (j === null) {
      for (; !F.done; C++, F = g.next()) F = f(m, F.value, z), F !== null && (b = o(F, b, C), N === null ? I = F : N.sibling = F, N = F);
      return ye && mn(m, C), I;
    }
    for (j = n(m, j); !F.done; C++, F = g.next()) F = w(j, m, C, F.value, z), F !== null && (e && F.alternate !== null && j.delete(F.key === null ? C : F.key), b = o(F, b, C), N === null ? I = F : N.sibling = F, N = F);
    return e && j.forEach(function(Z) {
      return t(m, Z);
    }), ye && mn(m, C), I;
  }
  function A(m, b, g, z) {
    if (typeof g == "object" && g !== null && g.type === Vn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Do:
          e: {
            for (var I = g.key, N = b; N !== null; ) {
              if (N.key === I) {
                if (I = g.type, I === Vn) {
                  if (N.tag === 7) {
                    r(m, N.sibling), b = a(N, g.props.children), b.return = m, m = b;
                    break e;
                  }
                } else if (N.elementType === I || typeof I == "object" && I !== null && I.$$typeof === Gr && _0(I) === N.type) {
                  r(m, N.sibling), b = a(N, g.props), b.ref = La(m, N, g), b.return = m, m = b;
                  break e;
                }
                r(m, N);
                break;
              } else t(m, N);
              N = N.sibling;
            }
            g.type === Vn ? (b = In(g.props.children, m.mode, z, g.key), b.return = m, m = b) : (z = Si(g.type, g.key, g.props, null, m.mode, z), z.ref = La(m, b, g), z.return = m, m = z);
          }
          return i(m);
        case Dn:
          e: {
            for (N = g.key; b !== null; ) {
              if (b.key === N) if (b.tag === 4 && b.stateNode.containerInfo === g.containerInfo && b.stateNode.implementation === g.implementation) {
                r(m, b.sibling), b = a(b, g.children || []), b.return = m, m = b;
                break e;
              } else {
                r(m, b);
                break;
              }
              else t(m, b);
              b = b.sibling;
            }
            b = ll(g, m.mode, z), b.return = m, m = b;
          }
          return i(m);
        case Gr:
          return N = g._init, A(m, b, N(g._payload), z);
      }
      if (Ha(g)) return E(m, b, g, z);
      if (Na(g)) return v(m, b, g, z);
      ei(m, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, b !== null && b.tag === 6 ? (r(m, b.sibling), b = a(b, g), b.return = m, m = b) : (r(m, b), b = sl(g, m.mode, z), b.return = m, m = b), i(m)) : r(m, b);
  }
  return A;
}
var pa = tp(true), rp = tp(false), Mi = dn(null), Di = null, Xn = null, Xc = null;
function Jc() {
  Xc = Xn = Di = null;
}
function eu(e) {
  var t = Mi.current;
  be(Mi), e._currentValue = t;
}
function nc(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
    e = e.return;
  }
}
function sa(e, t) {
  Di = e, Xc = Xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ct = true), e.firstContext = null);
}
function Ft(e) {
  var t = e._currentValue;
  if (Xc !== e) if (e = { context: e, memoizedValue: t, next: null }, Xn === null) {
    if (Di === null) throw Error(O(308));
    Xn = e, Di.dependencies = { lanes: 0, firstContext: e };
  } else Xn = Xn.next = e;
  return t;
}
var kn = null;
function tu(e) {
  kn === null ? kn = [e] : kn.push(e);
}
function np(e, t, r, n) {
  var a = t.interleaved;
  return a === null ? (r.next = r, tu(t)) : (r.next = a.next, a.next = r), t.interleaved = r, Pr(e, n);
}
function Pr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var qr = false;
function ru(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ap(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function zr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function tn(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (n = n.shared, se & 2) {
    var a = n.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, Pr(e, r);
  }
  return a = n.interleaved, a === null ? (t.next = t, tu(n)) : (t.next = a.next, a.next = t), n.interleaved = t, Pr(e, r);
}
function gi(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, $c(e, r);
  }
}
function j0(e, t) {
  var r = e.updateQueue, n = e.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var a = null, o = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var i = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        o === null ? a = o = i : o = o.next = i, r = r.next;
      } while (r !== null);
      o === null ? a = o = t : o = o.next = t;
    } else a = o = t;
    r = { baseState: n.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: n.shared, effects: n.effects }, e.updateQueue = r;
    return;
  }
  e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
}
function Vi(e, t, r, n) {
  var a = e.updateQueue;
  qr = false;
  var o = a.firstBaseUpdate, i = a.lastBaseUpdate, s = a.shared.pending;
  if (s !== null) {
    a.shared.pending = null;
    var l = s, d = l.next;
    l.next = null, i === null ? o = d : i.next = d, i = l;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, s = h.lastBaseUpdate, s !== i && (s === null ? h.firstBaseUpdate = d : s.next = d, h.lastBaseUpdate = l));
  }
  if (o !== null) {
    var f = a.baseState;
    i = 0, h = d = l = null, s = o;
    do {
      var x = s.lane, w = s.eventTime;
      if ((n & x) === x) {
        h !== null && (h = h.next = { eventTime: w, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
        e: {
          var E = e, v = s;
          switch (x = t, w = r, v.tag) {
            case 1:
              if (E = v.payload, typeof E == "function") {
                f = E.call(w, f, x);
                break e;
              }
              f = E;
              break e;
            case 3:
              E.flags = E.flags & -65537 | 128;
            case 0:
              if (E = v.payload, x = typeof E == "function" ? E.call(w, f, x) : E, x == null) break e;
              f = Ee({}, f, x);
              break e;
            case 2:
              qr = true;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, x = a.effects, x === null ? a.effects = [s] : x.push(s));
      } else w = { eventTime: w, lane: x, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, h === null ? (d = h = w, l = f) : h = h.next = w, i |= x;
      if (s = s.next, s === null) {
        if (s = a.shared.pending, s === null) break;
        x = s, s = x.next, x.next = null, a.lastBaseUpdate = x, a.shared.pending = null;
      }
    } while (true);
    if (h === null && (l = f), a.baseState = l, a.firstBaseUpdate = d, a.lastBaseUpdate = h, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        i |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    jn |= i, e.lanes = i, e.memoizedState = f;
  }
}
function L0(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var n = e[t], a = n.callback;
    if (a !== null) {
      if (n.callback = null, n = r, typeof a != "function") throw Error(O(191, a));
      a.call(n);
    }
  }
}
var No = {}, xr = dn(No), po = dn(No), ho = dn(No);
function En(e) {
  if (e === No) throw Error(O(174));
  return e;
}
function nu(e, t) {
  switch (xe(ho, t), xe(po, e), xe(xr, No), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ol(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ol(t, e);
  }
  be(xr), xe(xr, t);
}
function ha() {
  be(xr), be(po), be(ho);
}
function op(e) {
  En(ho.current);
  var t = En(xr.current), r = Ol(t, e.type);
  t !== r && (xe(po, e), xe(xr, r));
}
function au(e) {
  po.current === e && (be(xr), be(po));
}
var ve = dn(0);
function Gi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var tl = [];
function ou() {
  for (var e = 0; e < tl.length; e++) tl[e]._workInProgressVersionPrimary = null;
  tl.length = 0;
}
var yi = _r.ReactCurrentDispatcher, rl = _r.ReactCurrentBatchConfig, _n = 0, we = null, Te = null, Re = null, qi = false, Ya = false, xo = 0, nb = 0;
function Ye() {
  throw Error(O(321));
}
function iu(e, t) {
  if (t === null) return false;
  for (var r = 0; r < t.length && r < e.length; r++) if (!er(e[r], t[r])) return false;
  return true;
}
function su(e, t, r, n, a, o) {
  if (_n = o, we = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, yi.current = e === null || e.memoizedState === null ? sb : lb, e = r(n, a), Ya) {
    o = 0;
    do {
      if (Ya = false, xo = 0, 25 <= o) throw Error(O(301));
      o += 1, Re = Te = null, t.updateQueue = null, yi.current = cb, e = r(n, a);
    } while (Ya);
  }
  if (yi.current = Ki, t = Te !== null && Te.next !== null, _n = 0, Re = Te = we = null, qi = false, t) throw Error(O(300));
  return e;
}
function lu() {
  var e = xo !== 0;
  return xo = 0, e;
}
function cr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Re === null ? we.memoizedState = Re = e : Re = Re.next = e, Re;
}
function Ht() {
  if (Te === null) {
    var e = we.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = Re === null ? we.memoizedState : Re.next;
  if (t !== null) Re = t, Te = e;
  else {
    if (e === null) throw Error(O(310));
    Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, Re === null ? we.memoizedState = Re = e : Re = Re.next = e;
  }
  return Re;
}
function mo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function nl(e) {
  var t = Ht(), r = t.queue;
  if (r === null) throw Error(O(311));
  r.lastRenderedReducer = e;
  var n = Te, a = n.baseQueue, o = r.pending;
  if (o !== null) {
    if (a !== null) {
      var i = a.next;
      a.next = o.next, o.next = i;
    }
    n.baseQueue = a = o, r.pending = null;
  }
  if (a !== null) {
    o = a.next, n = n.baseState;
    var s = i = null, l = null, d = o;
    do {
      var h = d.lane;
      if ((_n & h) === h) l !== null && (l = l.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), n = d.hasEagerState ? d.eagerState : e(n, d.action);
      else {
        var f = { lane: h, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null };
        l === null ? (s = l = f, i = n) : l = l.next = f, we.lanes |= h, jn |= h;
      }
      d = d.next;
    } while (d !== null && d !== o);
    l === null ? i = n : l.next = s, er(n, t.memoizedState) || (ct = true), t.memoizedState = n, t.baseState = i, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, we.lanes |= o, jn |= o, a = a.next;
    while (a !== e);
  } else a === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function al(e) {
  var t = Ht(), r = t.queue;
  if (r === null) throw Error(O(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, a = r.pending, o = t.memoizedState;
  if (a !== null) {
    r.pending = null;
    var i = a = a.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== a);
    er(o, t.memoizedState) || (ct = true), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), r.lastRenderedState = o;
  }
  return [o, n];
}
function ip() {
}
function sp(e, t) {
  var r = we, n = Ht(), a = t(), o = !er(n.memoizedState, a);
  if (o && (n.memoizedState = a, ct = true), n = n.queue, cu(up.bind(null, r, n, e), [e]), n.getSnapshot !== t || o || Re !== null && Re.memoizedState.tag & 1) {
    if (r.flags |= 2048, bo(9, cp.bind(null, r, n, a, t), void 0, null), De === null) throw Error(O(349));
    _n & 30 || lp(r, t, a);
  }
  return a;
}
function lp(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = we.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, we.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function cp(e, t, r, n) {
  t.value = r, t.getSnapshot = n, dp(t) && fp(e);
}
function up(e, t, r) {
  return r(function() {
    dp(t) && fp(e);
  });
}
function dp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !er(e, r);
  } catch {
    return true;
  }
}
function fp(e) {
  var t = Pr(e, 1);
  t !== null && Jt(t, e, 1, -1);
}
function T0(e) {
  var t = cr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: mo, lastRenderedState: e }, t.queue = e, e = e.dispatch = ib.bind(null, we, e), [t.memoizedState, e];
}
function bo(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = we.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, we.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function pp() {
  return Ht().memoizedState;
}
function vi(e, t, r, n) {
  var a = cr();
  we.flags |= e, a.memoizedState = bo(1 | t, r, void 0, n === void 0 ? null : n);
}
function fs(e, t, r, n) {
  var a = Ht();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (Te !== null) {
    var i = Te.memoizedState;
    if (o = i.destroy, n !== null && iu(n, i.deps)) {
      a.memoizedState = bo(t, r, o, n);
      return;
    }
  }
  we.flags |= e, a.memoizedState = bo(1 | t, r, o, n);
}
function U0(e, t) {
  return vi(8390656, 8, e, t);
}
function cu(e, t) {
  return fs(2048, 8, e, t);
}
function hp(e, t) {
  return fs(4, 2, e, t);
}
function xp(e, t) {
  return fs(4, 4, e, t);
}
function mp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function bp(e, t, r) {
  return r = r != null ? r.concat([e]) : null, fs(4, 4, mp.bind(null, t, e), r);
}
function uu() {
}
function gp(e, t) {
  var r = Ht();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && iu(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function yp(e, t) {
  var r = Ht();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && iu(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function vp(e, t, r) {
  return _n & 21 ? (er(r, t) || (r = zf(), we.lanes |= r, jn |= r, e.baseState = true), t) : (e.baseState && (e.baseState = false, ct = true), e.memoizedState = r);
}
function ab(e, t) {
  var r = ce;
  ce = r !== 0 && 4 > r ? r : 4, e(true);
  var n = rl.transition;
  rl.transition = {};
  try {
    e(false), t();
  } finally {
    ce = r, rl.transition = n;
  }
}
function wp() {
  return Ht().memoizedState;
}
function ob(e, t, r) {
  var n = nn(e);
  if (r = { lane: n, action: r, hasEagerState: false, eagerState: null, next: null }, kp(e)) Ep(t, r);
  else if (r = np(e, t, r, n), r !== null) {
    var a = nt();
    Jt(r, e, n, a), Sp(r, t, n);
  }
}
function ib(e, t, r) {
  var n = nn(e), a = { lane: n, action: r, hasEagerState: false, eagerState: null, next: null };
  if (kp(e)) Ep(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, s = o(i, r);
      if (a.hasEagerState = true, a.eagerState = s, er(s, i)) {
        var l = t.interleaved;
        l === null ? (a.next = a, tu(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    r = np(e, t, a, n), r !== null && (a = nt(), Jt(r, e, n, a), Sp(r, t, n));
  }
}
function kp(e) {
  var t = e.alternate;
  return e === we || t !== null && t === we;
}
function Ep(e, t) {
  Ya = qi = true;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function Sp(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, $c(e, r);
  }
}
var Ki = { readContext: Ft, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useInsertionEffect: Ye, useLayoutEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useMutableSource: Ye, useSyncExternalStore: Ye, useId: Ye, unstable_isNewReconciler: false }, sb = { readContext: Ft, useCallback: function(e, t) {
  return cr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ft, useEffect: U0, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, vi(4194308, 4, mp.bind(null, t, e), r);
}, useLayoutEffect: function(e, t) {
  return vi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return vi(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = cr();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = cr();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = ob.bind(null, we, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = cr();
  return e = { current: e }, t.memoizedState = e;
}, useState: T0, useDebugValue: uu, useDeferredValue: function(e) {
  return cr().memoizedState = e;
}, useTransition: function() {
  var e = T0(false), t = e[0];
  return e = ab.bind(null, e[1]), cr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = we, a = cr();
  if (ye) {
    if (r === void 0) throw Error(O(407));
    r = r();
  } else {
    if (r = t(), De === null) throw Error(O(349));
    _n & 30 || lp(n, t, r);
  }
  a.memoizedState = r;
  var o = { value: r, getSnapshot: t };
  return a.queue = o, U0(up.bind(null, n, o, e), [e]), n.flags |= 2048, bo(9, cp.bind(null, n, o, r, t), void 0, null), r;
}, useId: function() {
  var e = cr(), t = De.identifierPrefix;
  if (ye) {
    var r = Sr, n = Er;
    r = (n & ~(1 << 32 - Xt(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = xo++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else r = nb++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: false }, lb = { readContext: Ft, useCallback: gp, useContext: Ft, useEffect: cu, useImperativeHandle: bp, useInsertionEffect: hp, useLayoutEffect: xp, useMemo: yp, useReducer: nl, useRef: pp, useState: function() {
  return nl(mo);
}, useDebugValue: uu, useDeferredValue: function(e) {
  var t = Ht();
  return vp(t, Te.memoizedState, e);
}, useTransition: function() {
  var e = nl(mo)[0], t = Ht().memoizedState;
  return [e, t];
}, useMutableSource: ip, useSyncExternalStore: sp, useId: wp, unstable_isNewReconciler: false }, cb = { readContext: Ft, useCallback: gp, useContext: Ft, useEffect: cu, useImperativeHandle: bp, useInsertionEffect: hp, useLayoutEffect: xp, useMemo: yp, useReducer: al, useRef: pp, useState: function() {
  return al(mo);
}, useDebugValue: uu, useDeferredValue: function(e) {
  var t = Ht();
  return Te === null ? t.memoizedState = e : vp(t, Te.memoizedState, e);
}, useTransition: function() {
  var e = al(mo)[0], t = Ht().memoizedState;
  return [e, t];
}, useMutableSource: ip, useSyncExternalStore: sp, useId: wp, unstable_isNewReconciler: false };
function Gt(e, t) {
  if (e && e.defaultProps) {
    t = Ee({}, t), e = e.defaultProps;
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function ac(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : Ee({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var ps = { isMounted: function(e) {
  return (e = e._reactInternals) ? On(e) === e : false;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = nt(), a = nn(e), o = zr(n, a);
  o.payload = t, r != null && (o.callback = r), t = tn(e, o, a), t !== null && (Jt(t, e, a, n), gi(t, e, a));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = nt(), a = nn(e), o = zr(n, a);
  o.tag = 1, o.payload = t, r != null && (o.callback = r), t = tn(e, o, a), t !== null && (Jt(t, e, a, n), gi(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = nt(), n = nn(e), a = zr(r, n);
  a.tag = 2, t != null && (a.callback = t), t = tn(e, a, n), t !== null && (Jt(t, e, n, r), gi(t, e, n));
} };
function O0(e, t, r, n, a, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, o, i) : t.prototype && t.prototype.isPureReactComponent ? !lo(r, n) || !lo(a, o) : true;
}
function zp(e, t, r) {
  var n = false, a = ln, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ft(o) : (a = dt(t) ? Pn : et.current, n = t.contextTypes, o = (n = n != null) ? da(e, a) : ln), t = new t(r, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ps, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function R0(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && ps.enqueueReplaceState(t, t.state, null);
}
function oc(e, t, r, n) {
  var a = e.stateNode;
  a.props = r, a.state = e.memoizedState, a.refs = {}, ru(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = Ft(o) : (o = dt(t) ? Pn : et.current, a.context = da(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ac(e, t, o, r), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && ps.enqueueReplaceState(a, a.state, null), Vi(e, r, a, n), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function xa(e, t) {
  try {
    var r = "", n = t;
    do
      r += Om(n), n = n.return;
    while (n);
    var a = r;
  } catch (o) {
    a = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function ol(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function ic(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var ub = typeof WeakMap == "function" ? WeakMap : Map;
function Ip(e, t, r) {
  r = zr(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Yi || (Yi = true, mc = n), ic(e, t);
  }, r;
}
function Ap(e, t, r) {
  r = zr(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var a = t.value;
    r.payload = function() {
      return n(a);
    }, r.callback = function() {
      ic(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (r.callback = function() {
    ic(e, t), typeof n != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), r;
}
function F0(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new ub();
    var a = /* @__PURE__ */ new Set();
    n.set(t, a);
  } else a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
  a.has(r) || (a.add(r), e = Sb.bind(null, e, t, r), t.then(e, e));
}
function H0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $0(e, t, r, n, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = zr(-1, 1), t.tag = 2, tn(r, t, 1))), r.lanes |= 1), e);
}
var db = _r.ReactCurrentOwner, ct = false;
function tt(e, t, r, n) {
  t.child = e === null ? rp(t, null, r, n) : pa(t, e.child, r, n);
}
function M0(e, t, r, n, a) {
  r = r.render;
  var o = t.ref;
  return sa(t, a), n = su(e, t, r, n, o, a), r = lu(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Cr(e, t, a)) : (ye && r && Yc(t), t.flags |= 1, tt(e, t, n, a), t.child);
}
function D0(e, t, r, n, a) {
  if (e === null) {
    var o = r.type;
    return typeof o == "function" && !gu(o) && o.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = o, Bp(e, t, o, n, a)) : (e = Si(r.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var i = o.memoizedProps;
    if (r = r.compare, r = r !== null ? r : lo, r(i, n) && e.ref === t.ref) return Cr(e, t, a);
  }
  return t.flags |= 1, e = an(o, n), e.ref = t.ref, e.return = t, t.child = e;
}
function Bp(e, t, r, n, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (lo(o, n) && e.ref === t.ref) if (ct = false, t.pendingProps = n = o, (e.lanes & a) !== 0) e.flags & 131072 && (ct = true);
    else return t.lanes = e.lanes, Cr(e, t, a);
  }
  return sc(e, t, r, n, a);
}
function Np(e, t, r) {
  var n = t.pendingProps, a = n.children, o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xe(ea, mt), mt |= r;
  else {
    if (!(r & 1073741824)) return e = o !== null ? o.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, xe(ea, mt), mt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = o !== null ? o.baseLanes : r, xe(ea, mt), mt |= n;
  }
  else o !== null ? (n = o.baseLanes | r, t.memoizedState = null) : n = r, xe(ea, mt), mt |= n;
  return tt(e, t, a, r), t.child;
}
function Pp(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function sc(e, t, r, n, a) {
  var o = dt(r) ? Pn : et.current;
  return o = da(t, o), sa(t, a), r = su(e, t, r, n, o, a), n = lu(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Cr(e, t, a)) : (ye && n && Yc(t), t.flags |= 1, tt(e, t, r, a), t.child);
}
function V0(e, t, r, n, a) {
  if (dt(r)) {
    var o = true;
    Fi(t);
  } else o = false;
  if (sa(t, a), t.stateNode === null) wi(e, t), zp(t, r, n), oc(t, r, n, a), n = true;
  else if (e === null) {
    var i = t.stateNode, s = t.memoizedProps;
    i.props = s;
    var l = i.context, d = r.contextType;
    typeof d == "object" && d !== null ? d = Ft(d) : (d = dt(r) ? Pn : et.current, d = da(t, d));
    var h = r.getDerivedStateFromProps, f = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== n || l !== d) && R0(t, i, n, d), qr = false;
    var x = t.memoizedState;
    i.state = x, Vi(t, n, i, a), l = t.memoizedState, s !== n || x !== l || ut.current || qr ? (typeof h == "function" && (ac(t, r, h, n), l = t.memoizedState), (s = qr || O0(t, r, s, n, x, l, d)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), i.props = n, i.state = l, i.context = d, n = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = false);
  } else {
    i = t.stateNode, ap(e, t), s = t.memoizedProps, d = t.type === t.elementType ? s : Gt(t.type, s), i.props = d, f = t.pendingProps, x = i.context, l = r.contextType, typeof l == "object" && l !== null ? l = Ft(l) : (l = dt(r) ? Pn : et.current, l = da(t, l));
    var w = r.getDerivedStateFromProps;
    (h = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== f || x !== l) && R0(t, i, n, l), qr = false, x = t.memoizedState, i.state = x, Vi(t, n, i, a);
    var E = t.memoizedState;
    s !== f || x !== E || ut.current || qr ? (typeof w == "function" && (ac(t, r, w, n), E = t.memoizedState), (d = qr || O0(t, r, d, n, x, E, l) || false) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, E, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, E, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = E), i.props = n, i.state = E, i.context = l, n = d) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), n = false);
  }
  return lc(e, t, r, n, o, a);
}
function lc(e, t, r, n, a, o) {
  Pp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!n && !i) return a && N0(t, r, false), Cr(e, t, o);
  n = t.stateNode, db.current = t;
  var s = i && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && i ? (t.child = pa(t, e.child, null, o), t.child = pa(t, null, s, o)) : tt(e, t, s, o), t.memoizedState = n.state, a && N0(t, r, true), t.child;
}
function Cp(e) {
  var t = e.stateNode;
  t.pendingContext ? B0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && B0(e, t.context, false), nu(e, t.containerInfo);
}
function G0(e, t, r, n, a) {
  return fa(), Zc(a), t.flags |= 256, tt(e, t, r, n), t.child;
}
var cc = { dehydrated: null, treeContext: null, retryLane: 0 };
function uc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _p(e, t, r) {
  var n = t.pendingProps, a = ve.current, o = false, i = (t.flags & 128) !== 0, s;
  if ((s = i) || (s = e !== null && e.memoizedState === null ? false : (a & 2) !== 0), s ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), xe(ve, a & 1), e === null) return rc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = n.children, e = n.fallback, o ? (n = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(n & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = ms(i, n, 0, null), e = In(e, n, r, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = uc(r), t.memoizedState = cc, e) : du(t, i));
  if (a = e.memoizedState, a !== null && (s = a.dehydrated, s !== null)) return fb(e, t, i, n, s, a, r);
  if (o) {
    o = n.fallback, i = t.mode, a = e.child, s = a.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(i & 1) && t.child !== a ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = an(a, l), n.subtreeFlags = a.subtreeFlags & 14680064), s !== null ? o = an(s, o) : (o = In(o, i, r, null), o.flags |= 2), o.return = t, n.return = t, n.sibling = o, t.child = n, n = o, o = t.child, i = e.child.memoizedState, i = i === null ? uc(r) : { baseLanes: i.baseLanes | r, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~r, t.memoizedState = cc, n;
  }
  return o = e.child, e = o.sibling, n = an(o, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function du(e, t) {
  return t = ms({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ti(e, t, r, n) {
  return n !== null && Zc(n), pa(t, e.child, null, r), e = du(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function fb(e, t, r, n, a, o, i) {
  if (r) return t.flags & 256 ? (t.flags &= -257, n = ol(Error(O(422))), ti(e, t, i, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = n.fallback, a = t.mode, n = ms({ mode: "visible", children: n.children }, a, 0, null), o = In(o, a, i, null), o.flags |= 2, n.return = t, o.return = t, n.sibling = o, t.child = n, t.mode & 1 && pa(t, e.child, null, i), t.child.memoizedState = uc(i), t.memoizedState = cc, o);
  if (!(t.mode & 1)) return ti(e, t, i, null);
  if (a.data === "$!") {
    if (n = a.nextSibling && a.nextSibling.dataset, n) var s = n.dgst;
    return n = s, o = Error(O(419)), n = ol(o, n, void 0), ti(e, t, i, n);
  }
  if (s = (i & e.childLanes) !== 0, ct || s) {
    if (n = De, n !== null) {
      switch (i & -i) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      a = a & (n.suspendedLanes | i) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, Pr(e, a), Jt(n, e, a, -1));
    }
    return bu(), n = ol(Error(O(421))), ti(e, t, i, n);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zb.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, yt = en(a.nextSibling), vt = t, ye = true, Qt = null, e !== null && (Tt[Ut++] = Er, Tt[Ut++] = Sr, Tt[Ut++] = Cn, Er = e.id, Sr = e.overflow, Cn = t), t = du(t, n.children), t.flags |= 4096, t);
}
function q0(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), nc(e.return, t, r);
}
function il(e, t, r, n, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = r, o.tailMode = a);
}
function jp(e, t, r) {
  var n = t.pendingProps, a = n.revealOrder, o = n.tail;
  if (tt(e, t, n.children, r), n = ve.current, n & 2) n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && q0(e, r, t);
      else if (e.tag === 19) q0(e, r, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    n &= 1;
  }
  if (xe(ve, n), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (r = t.child, a = null; r !== null; ) e = r.alternate, e !== null && Gi(e) === null && (a = r), r = r.sibling;
      r = a, r === null ? (a = t.child, t.child = null) : (a = r.sibling, r.sibling = null), il(t, false, a, r, o);
      break;
    case "backwards":
      for (r = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Gi(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = r, r = a, a = e;
      }
      il(t, true, r, null, o);
      break;
    case "together":
      il(t, false, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function wi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Cr(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), jn |= t.lanes, !(r & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, r = an(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = an(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function pb(e, t, r) {
  switch (t.tag) {
    case 3:
      Cp(t), fa();
      break;
    case 5:
      op(t);
      break;
    case 1:
      dt(t.type) && Fi(t);
      break;
    case 4:
      nu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, a = t.memoizedProps.value;
      xe(Mi, n._currentValue), n._currentValue = a;
      break;
    case 13:
      if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (xe(ve, ve.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? _p(e, t, r) : (xe(ve, ve.current & 1), e = Cr(e, t, r), e !== null ? e.sibling : null);
      xe(ve, ve.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n) return jp(e, t, r);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), xe(ve, ve.current), n) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Np(e, t, r);
  }
  return Cr(e, t, r);
}
var Lp, dc, Tp, Up;
Lp = function(e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
dc = function() {
};
Tp = function(e, t, r, n) {
  var a = e.memoizedProps;
  if (a !== n) {
    e = t.stateNode, En(xr.current);
    var o = null;
    switch (r) {
      case "input":
        a = jl(e, a), n = jl(e, n), o = [];
        break;
      case "select":
        a = Ee({}, a, { value: void 0 }), n = Ee({}, n, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = Ul(e, a), n = Ul(e, n), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Oi);
    }
    Rl(r, n);
    var i;
    r = null;
    for (d in a) if (!n.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null) if (d === "style") {
      var s = a[d];
      for (i in s) s.hasOwnProperty(i) && (r || (r = {}), r[i] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (to.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in n) {
      var l = n[d];
      if (s = a == null ? void 0 : a[d], n.hasOwnProperty(d) && l !== s && (l != null || s != null)) if (d === "style") if (s) {
        for (i in s) !s.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (r || (r = {}), r[i] = "");
        for (i in l) l.hasOwnProperty(i) && s[i] !== l[i] && (r || (r = {}), r[i] = l[i]);
      } else r || (o || (o = []), o.push(d, r)), r = l;
      else d === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (o = o || []).push(d, l)) : d === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(d, "" + l) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (to.hasOwnProperty(d) ? (l != null && d === "onScroll" && me("scroll", e), o || s === l || (o = [])) : (o = o || []).push(d, l));
    }
    r && (o = o || []).push("style", r);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Up = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Ta(e, t) {
  if (!ye) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? e.tail = null : r.sibling = null;
      break;
    case "collapsed":
      r = e.tail;
      for (var n = null; r !== null; ) r.alternate !== null && (n = r), r = r.sibling;
      n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
  }
}
function Qe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t) for (var a = e.child; a !== null; ) r |= a.lanes | a.childLanes, n |= a.subtreeFlags & 14680064, n |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) r |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function hb(e, t, r) {
  var n = t.pendingProps;
  switch (Qc(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Qe(t), null;
    case 1:
      return dt(t.type) && Ri(), Qe(t), null;
    case 3:
      return n = t.stateNode, ha(), be(ut), be(et), ou(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Jo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qt !== null && (yc(Qt), Qt = null))), dc(e, t), Qe(t), null;
    case 5:
      au(t);
      var a = En(ho.current);
      if (r = t.type, e !== null && t.stateNode != null) Tp(e, t, r, n, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(O(166));
          return Qe(t), null;
        }
        if (e = En(xr.current), Jo(t)) {
          n = t.stateNode, r = t.type;
          var o = t.memoizedProps;
          switch (n[dr] = t, n[fo] = o, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              me("cancel", n), me("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              me("load", n);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Ma.length; a++) me(Ma[a], n);
              break;
            case "source":
              me("error", n);
              break;
            case "img":
            case "image":
            case "link":
              me("error", n), me("load", n);
              break;
            case "details":
              me("toggle", n);
              break;
            case "input":
              t0(n, o), me("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!o.multiple }, me("invalid", n);
              break;
            case "textarea":
              n0(n, o), me("invalid", n);
          }
          Rl(r, o), a = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var s = o[i];
            i === "children" ? typeof s == "string" ? n.textContent !== s && (o.suppressHydrationWarning !== true && Xo(n.textContent, s, e), a = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (o.suppressHydrationWarning !== true && Xo(n.textContent, s, e), a = ["children", "" + s]) : to.hasOwnProperty(i) && s != null && i === "onScroll" && me("scroll", n);
          }
          switch (r) {
            case "input":
              Vo(n), r0(n, o, true);
              break;
            case "textarea":
              Vo(n), a0(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = Oi);
          }
          n = a, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          i = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = uf(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = i.createElement(r, { is: n.is }) : (e = i.createElement(r), r === "select" && (i = e, n.multiple ? i.multiple = true : n.size && (i.size = n.size))) : e = i.createElementNS(e, r), e[dr] = t, e[fo] = n, Lp(e, t, false, false), t.stateNode = e;
          e: {
            switch (i = Fl(r, n), r) {
              case "dialog":
                me("cancel", e), me("close", e), a = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                me("load", e), a = n;
                break;
              case "video":
              case "audio":
                for (a = 0; a < Ma.length; a++) me(Ma[a], e);
                a = n;
                break;
              case "source":
                me("error", e), a = n;
                break;
              case "img":
              case "image":
              case "link":
                me("error", e), me("load", e), a = n;
                break;
              case "details":
                me("toggle", e), a = n;
                break;
              case "input":
                t0(e, n), a = jl(e, n), me("invalid", e);
                break;
              case "option":
                a = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, a = Ee({}, n, { value: void 0 }), me("invalid", e);
                break;
              case "textarea":
                n0(e, n), a = Ul(e, n), me("invalid", e);
                break;
              default:
                a = n;
            }
            Rl(r, a), s = a;
            for (o in s) if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "style" ? pf(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && df(e, l)) : o === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && ro(e, l) : typeof l == "number" && ro(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (to.hasOwnProperty(o) ? l != null && o === "onScroll" && me("scroll", e) : l != null && Tc(e, o, l, i));
            }
            switch (r) {
              case "input":
                Vo(e), r0(e, n, false);
                break;
              case "textarea":
                Vo(e), a0(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + sn(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, o = n.value, o != null ? na(e, !!n.multiple, o, false) : n.defaultValue != null && na(e, !!n.multiple, n.defaultValue, true);
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Oi);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = true;
                break e;
              default:
                n = false;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Qe(t), null;
    case 6:
      if (e && t.stateNode != null) Up(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(O(166));
        if (r = En(ho.current), En(xr.current), Jo(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[dr] = t, (o = n.nodeValue !== r) && (e = vt, e !== null)) switch (e.tag) {
            case 3:
              Xo(n.nodeValue, r, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== true && Xo(n.nodeValue, r, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[dr] = t, t.stateNode = n;
      }
      return Qe(t), null;
    case 13:
      if (be(ve), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ye && yt !== null && t.mode & 1 && !(t.flags & 128)) ep(), fa(), t.flags |= 98560, o = false;
        else if (o = Jo(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(O(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(O(317));
            o[dr] = t;
          } else fa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Qe(t), o = false;
        } else Qt !== null && (yc(Qt), Qt = null), o = true;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || ve.current & 1 ? Ue === 0 && (Ue = 3) : bu())), t.updateQueue !== null && (t.flags |= 4), Qe(t), null);
    case 4:
      return ha(), dc(e, t), e === null && co(t.stateNode.containerInfo), Qe(t), null;
    case 10:
      return eu(t.type._context), Qe(t), null;
    case 17:
      return dt(t.type) && Ri(), Qe(t), null;
    case 19:
      if (be(ve), o = t.memoizedState, o === null) return Qe(t), null;
      if (n = (t.flags & 128) !== 0, i = o.rendering, i === null) if (n) Ta(o, false);
      else {
        if (Ue !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Gi(e), i !== null) {
            for (t.flags |= 128, Ta(o, false), n = i.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) o = r, e = n, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
            return xe(ve, ve.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Ae() > ma && (t.flags |= 128, n = true, Ta(o, false), t.lanes = 4194304);
      }
      else {
        if (!n) if (e = Gi(i), e !== null) {
          if (t.flags |= 128, n = true, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Ta(o, true), o.tail === null && o.tailMode === "hidden" && !i.alternate && !ye) return Qe(t), null;
        } else 2 * Ae() - o.renderingStartTime > ma && r !== 1073741824 && (t.flags |= 128, n = true, Ta(o, false), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (r = o.last, r !== null ? r.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ae(), t.sibling = null, r = ve.current, xe(ve, n ? r & 1 | 2 : r & 1), t) : (Qe(t), null);
    case 22:
    case 23:
      return mu(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? mt & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function xb(e, t) {
  switch (Qc(t), t.tag) {
    case 1:
      return dt(t.type) && Ri(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ha(), be(ut), be(et), ou(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return au(t), null;
    case 13:
      if (be(ve), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(O(340));
        fa();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return be(ve), null;
    case 4:
      return ha(), null;
    case 10:
      return eu(t.type._context), null;
    case 22:
    case 23:
      return mu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ri = false, Je = false, mb = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function Jn(e, t) {
  var r = e.ref;
  if (r !== null) if (typeof r == "function") try {
    r(null);
  } catch (n) {
    Ie(e, t, n);
  }
  else r.current = null;
}
function fc(e, t, r) {
  try {
    r();
  } catch (n) {
    Ie(e, t, n);
  }
}
var K0 = false;
function bb(e, t) {
  if (Yl = Li, e = $f(), Wc(e)) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      r = (r = e.ownerDocument) && r.defaultView || window;
      var n = r.getSelection && r.getSelection();
      if (n && n.rangeCount !== 0) {
        r = n.anchorNode;
        var a = n.anchorOffset, o = n.focusNode;
        n = n.focusOffset;
        try {
          r.nodeType, o.nodeType;
        } catch {
          r = null;
          break e;
        }
        var i = 0, s = -1, l = -1, d = 0, h = 0, f = e, x = null;
        t: for (; ; ) {
          for (var w; f !== r || a !== 0 && f.nodeType !== 3 || (s = i + a), f !== o || n !== 0 && f.nodeType !== 3 || (l = i + n), f.nodeType === 3 && (i += f.nodeValue.length), (w = f.firstChild) !== null; ) x = f, f = w;
          for (; ; ) {
            if (f === e) break t;
            if (x === r && ++d === a && (s = i), x === o && ++h === n && (l = i), (w = f.nextSibling) !== null) break;
            f = x, x = f.parentNode;
          }
          f = w;
        }
        r = s === -1 || l === -1 ? null : { start: s, end: l };
      } else r = null;
    }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Ql = { focusedElem: e, selectionRange: r }, Li = false, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
  else for (; G !== null; ) {
    t = G;
    try {
      var E = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (E !== null) {
            var v = E.memoizedProps, A = E.memoizedState, m = t.stateNode, b = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Gt(t.type, v), A);
            m.__reactInternalSnapshotBeforeUpdate = b;
          }
          break;
        case 3:
          var g = t.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(O(163));
      }
    } catch (z) {
      Ie(t, t.return, z);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, G = e;
      break;
    }
    G = t.return;
  }
  return E = K0, K0 = false, E;
}
function Qa(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var a = n = n.next;
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        a.destroy = void 0, o !== void 0 && fc(t, r, o);
      }
      a = a.next;
    } while (a !== n);
  }
}
function hs(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var r = t = t.next;
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function pc(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Op(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Op(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dr], delete t[fo], delete t[Jl], delete t[J1], delete t[eb])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Rp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function W0(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function hc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Oi));
  else if (n !== 4 && (e = e.child, e !== null)) for (hc(e, t, r), e = e.sibling; e !== null; ) hc(e, t, r), e = e.sibling;
}
function xc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null)) for (xc(e, t, r), e = e.sibling; e !== null; ) xc(e, t, r), e = e.sibling;
}
var Ge = null, Wt = false;
function Lr(e, t, r) {
  for (r = r.child; r !== null; ) Fp(e, t, r), r = r.sibling;
}
function Fp(e, t, r) {
  if (hr && typeof hr.onCommitFiberUnmount == "function") try {
    hr.onCommitFiberUnmount(is, r);
  } catch {
  }
  switch (r.tag) {
    case 5:
      Je || Jn(r, t);
    case 6:
      var n = Ge, a = Wt;
      Ge = null, Lr(e, t, r), Ge = n, Wt = a, Ge !== null && (Wt ? (e = Ge, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Ge.removeChild(r.stateNode));
      break;
    case 18:
      Ge !== null && (Wt ? (e = Ge, r = r.stateNode, e.nodeType === 8 ? Js(e.parentNode, r) : e.nodeType === 1 && Js(e, r), io(e)) : Js(Ge, r.stateNode));
      break;
    case 4:
      n = Ge, a = Wt, Ge = r.stateNode.containerInfo, Wt = true, Lr(e, t, r), Ge = n, Wt = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Je && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        a = n = n.next;
        do {
          var o = a, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && fc(r, t, i), a = a.next;
        } while (a !== n);
      }
      Lr(e, t, r);
      break;
    case 1:
      if (!Je && (Jn(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
      } catch (s) {
        Ie(r, t, s);
      }
      Lr(e, t, r);
      break;
    case 21:
      Lr(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (Je = (n = Je) || r.memoizedState !== null, Lr(e, t, r), Je = n) : Lr(e, t, r);
      break;
    default:
      Lr(e, t, r);
  }
}
function Y0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new mb()), t.forEach(function(n) {
      var a = Ib.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(a, a));
    });
  }
}
function Vt(e, t) {
  var r = t.deletions;
  if (r !== null) for (var n = 0; n < r.length; n++) {
    var a = r[n];
    try {
      var o = e, i = t, s = i;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            Ge = s.stateNode, Wt = false;
            break e;
          case 3:
            Ge = s.stateNode.containerInfo, Wt = true;
            break e;
          case 4:
            Ge = s.stateNode.containerInfo, Wt = true;
            break e;
        }
        s = s.return;
      }
      if (Ge === null) throw Error(O(160));
      Fp(o, i, a), Ge = null, Wt = false;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (d) {
      Ie(a, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Hp(t, e), t = t.sibling;
}
function Hp(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Vt(t, e), ar(e), n & 4) {
        try {
          Qa(3, e, e.return), hs(3, e);
        } catch (v) {
          Ie(e, e.return, v);
        }
        try {
          Qa(5, e, e.return);
        } catch (v) {
          Ie(e, e.return, v);
        }
      }
      break;
    case 1:
      Vt(t, e), ar(e), n & 512 && r !== null && Jn(r, r.return);
      break;
    case 5:
      if (Vt(t, e), ar(e), n & 512 && r !== null && Jn(r, r.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          ro(a, "");
        } catch (v) {
          Ie(e, e.return, v);
        }
      }
      if (n & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, i = r !== null ? r.memoizedProps : o, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          s === "input" && o.type === "radio" && o.name != null && lf(a, o), Fl(s, i);
          var d = Fl(s, o);
          for (i = 0; i < l.length; i += 2) {
            var h = l[i], f = l[i + 1];
            h === "style" ? pf(a, f) : h === "dangerouslySetInnerHTML" ? df(a, f) : h === "children" ? ro(a, f) : Tc(a, h, f, d);
          }
          switch (s) {
            case "input":
              Ll(a, o);
              break;
            case "textarea":
              cf(a, o);
              break;
            case "select":
              var x = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? na(a, !!o.multiple, w, false) : x !== !!o.multiple && (o.defaultValue != null ? na(a, !!o.multiple, o.defaultValue, true) : na(a, !!o.multiple, o.multiple ? [] : "", false));
          }
          a[fo] = o;
        } catch (v) {
          Ie(e, e.return, v);
        }
      }
      break;
    case 6:
      if (Vt(t, e), ar(e), n & 4) {
        if (e.stateNode === null) throw Error(O(162));
        a = e.stateNode, o = e.memoizedProps;
        try {
          a.nodeValue = o;
        } catch (v) {
          Ie(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Vt(t, e), ar(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
        io(t.containerInfo);
      } catch (v) {
        Ie(e, e.return, v);
      }
      break;
    case 4:
      Vt(t, e), ar(e);
      break;
    case 13:
      Vt(t, e), ar(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (hu = Ae())), n & 4 && Y0(e);
      break;
    case 22:
      if (h = r !== null && r.memoizedState !== null, e.mode & 1 ? (Je = (d = Je) || h, Vt(t, e), Je = d) : Vt(t, e), ar(e), n & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (G = e, h = e.child; h !== null; ) {
          for (f = G = h; G !== null; ) {
            switch (x = G, w = x.child, x.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Qa(4, x, x.return);
                break;
              case 1:
                Jn(x, x.return);
                var E = x.stateNode;
                if (typeof E.componentWillUnmount == "function") {
                  n = x, r = x.return;
                  try {
                    t = n, E.props = t.memoizedProps, E.state = t.memoizedState, E.componentWillUnmount();
                  } catch (v) {
                    Ie(n, r, v);
                  }
                }
                break;
              case 5:
                Jn(x, x.return);
                break;
              case 22:
                if (x.memoizedState !== null) {
                  Z0(f);
                  continue;
                }
            }
            w !== null ? (w.return = x, G = w) : Z0(f);
          }
          h = h.sibling;
        }
        e: for (h = null, f = e; ; ) {
          if (f.tag === 5) {
            if (h === null) {
              h = f;
              try {
                a = f.stateNode, d ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = f.stateNode, l = f.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = ff("display", i));
              } catch (v) {
                Ie(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (h === null) try {
              f.stateNode.nodeValue = d ? "" : f.memoizedProps;
            } catch (v) {
              Ie(e, e.return, v);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            h === f && (h = null), f = f.return;
          }
          h === f && (h = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      Vt(t, e), ar(e), n & 4 && Y0(e);
      break;
    case 21:
      break;
    default:
      Vt(t, e), ar(e);
  }
}
function ar(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Rp(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(O(160));
      }
      switch (n.tag) {
        case 5:
          var a = n.stateNode;
          n.flags & 32 && (ro(a, ""), n.flags &= -33);
          var o = W0(e);
          xc(e, o, a);
          break;
        case 3:
        case 4:
          var i = n.stateNode.containerInfo, s = W0(e);
          hc(e, s, i);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      Ie(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gb(e, t, r) {
  G = e, $p(e);
}
function $p(e, t, r) {
  for (var n = (e.mode & 1) !== 0; G !== null; ) {
    var a = G, o = a.child;
    if (a.tag === 22 && n) {
      var i = a.memoizedState !== null || ri;
      if (!i) {
        var s = a.alternate, l = s !== null && s.memoizedState !== null || Je;
        s = ri;
        var d = Je;
        if (ri = i, (Je = l) && !d) for (G = a; G !== null; ) i = G, l = i.child, i.tag === 22 && i.memoizedState !== null ? X0(a) : l !== null ? (l.return = i, G = l) : X0(a);
        for (; o !== null; ) G = o, $p(o), o = o.sibling;
        G = a, ri = s, Je = d;
      }
      Q0(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, G = o) : Q0(e);
  }
}
function Q0(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Je || hs(5, t);
            break;
          case 1:
            var n = t.stateNode;
            if (t.flags & 4 && !Je) if (r === null) n.componentDidMount();
            else {
              var a = t.elementType === t.type ? r.memoizedProps : Gt(t.type, r.memoizedProps);
              n.componentDidUpdate(a, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && L0(t, o, n);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (r = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  r = t.child.stateNode;
                  break;
                case 1:
                  r = t.child.stateNode;
              }
              L0(t, i, r);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (r === null && t.flags & 4) {
              r = s;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && r.focus();
                  break;
                case "img":
                  l.src && (r.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var d = t.alternate;
              if (d !== null) {
                var h = d.memoizedState;
                if (h !== null) {
                  var f = h.dehydrated;
                  f !== null && io(f);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(O(163));
        }
        Je || t.flags & 512 && pc(t);
      } catch (x) {
        Ie(t, t.return, x);
      }
    }
    if (t === e) {
      G = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, G = r;
      break;
    }
    G = t.return;
  }
}
function Z0(e) {
  for (; G !== null; ) {
    var t = G;
    if (t === e) {
      G = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, G = r;
      break;
    }
    G = t.return;
  }
}
function X0(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            hs(4, t);
          } catch (l) {
            Ie(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var a = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Ie(t, a, l);
            }
          }
          var o = t.return;
          try {
            pc(t);
          } catch (l) {
            Ie(t, o, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            pc(t);
          } catch (l) {
            Ie(t, i, l);
          }
      }
    } catch (l) {
      Ie(t, t.return, l);
    }
    if (t === e) {
      G = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, G = s;
      break;
    }
    G = t.return;
  }
}
var yb = Math.ceil, Wi = _r.ReactCurrentDispatcher, fu = _r.ReactCurrentOwner, Rt = _r.ReactCurrentBatchConfig, se = 0, De = null, je = null, qe = 0, mt = 0, ea = dn(0), Ue = 0, go = null, jn = 0, xs = 0, pu = 0, Za = null, lt = null, hu = 0, ma = 1 / 0, vr = null, Yi = false, mc = null, rn = null, ni = false, Qr = null, Qi = 0, Xa = 0, bc = null, ki = -1, Ei = 0;
function nt() {
  return se & 6 ? Ae() : ki !== -1 ? ki : ki = Ae();
}
function nn(e) {
  return e.mode & 1 ? se & 2 && qe !== 0 ? qe & -qe : rb.transition !== null ? (Ei === 0 && (Ei = zf()), Ei) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : _f(e.type)), e) : 1;
}
function Jt(e, t, r, n) {
  if (50 < Xa) throw Xa = 0, bc = null, Error(O(185));
  Io(e, r, n), (!(se & 2) || e !== De) && (e === De && (!(se & 2) && (xs |= r), Ue === 4 && Wr(e, qe)), ft(e, n), r === 1 && se === 0 && !(t.mode & 1) && (ma = Ae() + 500, ds && fn()));
}
function ft(e, t) {
  var r = e.callbackNode;
  r1(e, t);
  var n = ji(e, e === De ? qe : 0);
  if (n === 0) r !== null && s0(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && s0(r), t === 1) e.tag === 0 ? tb(J0.bind(null, e)) : Zf(J0.bind(null, e)), Z1(function() {
      !(se & 6) && fn();
    }), r = null;
    else {
      switch (If(n)) {
        case 1:
          r = Hc;
          break;
        case 4:
          r = Ef;
          break;
        case 16:
          r = _i;
          break;
        case 536870912:
          r = Sf;
          break;
        default:
          r = _i;
      }
      r = Yp(r, Mp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function Mp(e, t) {
  if (ki = -1, Ei = 0, se & 6) throw Error(O(327));
  var r = e.callbackNode;
  if (la() && e.callbackNode !== r) return null;
  var n = ji(e, e === De ? qe : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Zi(e, n);
  else {
    t = n;
    var a = se;
    se |= 2;
    var o = Vp();
    (De !== e || qe !== t) && (vr = null, ma = Ae() + 500, zn(e, t));
    do
      try {
        kb();
        break;
      } catch (s) {
        Dp(e, s);
      }
    while (true);
    Jc(), Wi.current = o, se = a, je !== null ? t = 0 : (De = null, qe = 0, t = Ue);
  }
  if (t !== 0) {
    if (t === 2 && (a = Vl(e), a !== 0 && (n = a, t = gc(e, a))), t === 1) throw r = go, zn(e, 0), Wr(e, n), ft(e, Ae()), r;
    if (t === 6) Wr(e, n);
    else {
      if (a = e.current.alternate, !(n & 30) && !vb(a) && (t = Zi(e, n), t === 2 && (o = Vl(e), o !== 0 && (n = o, t = gc(e, o))), t === 1)) throw r = go, zn(e, 0), Wr(e, n), ft(e, Ae()), r;
      switch (e.finishedWork = a, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          bn(e, lt, vr);
          break;
        case 3:
          if (Wr(e, n), (n & 130023424) === n && (t = hu + 500 - Ae(), 10 < t)) {
            if (ji(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & n) !== n) {
              nt(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = Xl(bn.bind(null, e, lt, vr), t);
            break;
          }
          bn(e, lt, vr);
          break;
        case 4:
          if (Wr(e, n), (n & 4194240) === n) break;
          for (t = e.eventTimes, a = -1; 0 < n; ) {
            var i = 31 - Xt(n);
            o = 1 << i, i = t[i], i > a && (a = i), n &= ~o;
          }
          if (n = a, n = Ae() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * yb(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = Xl(bn.bind(null, e, lt, vr), n);
            break;
          }
          bn(e, lt, vr);
          break;
        case 5:
          bn(e, lt, vr);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return ft(e, Ae()), e.callbackNode === r ? Mp.bind(null, e) : null;
}
function gc(e, t) {
  var r = Za;
  return e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256), e = Zi(e, t), e !== 2 && (t = lt, lt = r, t !== null && yc(t)), e;
}
function yc(e) {
  lt === null ? lt = e : lt.push.apply(lt, e);
}
function vb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
        var a = r[n], o = a.getSnapshot;
        a = a.value;
        try {
          if (!er(o(), a)) return false;
        } catch {
          return false;
        }
      }
    }
    if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return true;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return true;
}
function Wr(e, t) {
  for (t &= ~pu, t &= ~xs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - Xt(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function J0(e) {
  if (se & 6) throw Error(O(327));
  la();
  var t = ji(e, 0);
  if (!(t & 1)) return ft(e, Ae()), null;
  var r = Zi(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Vl(e);
    n !== 0 && (t = n, r = gc(e, n));
  }
  if (r === 1) throw r = go, zn(e, 0), Wr(e, t), ft(e, Ae()), r;
  if (r === 6) throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, bn(e, lt, vr), ft(e, Ae()), null;
}
function xu(e, t) {
  var r = se;
  se |= 1;
  try {
    return e(t);
  } finally {
    se = r, se === 0 && (ma = Ae() + 500, ds && fn());
  }
}
function Ln(e) {
  Qr !== null && Qr.tag === 0 && !(se & 6) && la();
  var t = se;
  se |= 1;
  var r = Rt.transition, n = ce;
  try {
    if (Rt.transition = null, ce = 1, e) return e();
  } finally {
    ce = n, Rt.transition = r, se = t, !(se & 6) && fn();
  }
}
function mu() {
  mt = ea.current, be(ea);
}
function zn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, Q1(r)), je !== null) for (r = je.return; r !== null; ) {
    var n = r;
    switch (Qc(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && Ri();
        break;
      case 3:
        ha(), be(ut), be(et), ou();
        break;
      case 5:
        au(n);
        break;
      case 4:
        ha();
        break;
      case 13:
        be(ve);
        break;
      case 19:
        be(ve);
        break;
      case 10:
        eu(n.type._context);
        break;
      case 22:
      case 23:
        mu();
    }
    r = r.return;
  }
  if (De = e, je = e = an(e.current, null), qe = mt = t, Ue = 0, go = null, pu = xs = jn = 0, lt = Za = null, kn !== null) {
    for (t = 0; t < kn.length; t++) if (r = kn[t], n = r.interleaved, n !== null) {
      r.interleaved = null;
      var a = n.next, o = r.pending;
      if (o !== null) {
        var i = o.next;
        o.next = a, n.next = i;
      }
      r.pending = n;
    }
    kn = null;
  }
  return e;
}
function Dp(e, t) {
  do {
    var r = je;
    try {
      if (Jc(), yi.current = Ki, qi) {
        for (var n = we.memoizedState; n !== null; ) {
          var a = n.queue;
          a !== null && (a.pending = null), n = n.next;
        }
        qi = false;
      }
      if (_n = 0, Re = Te = we = null, Ya = false, xo = 0, fu.current = null, r === null || r.return === null) {
        Ue = 1, go = t, je = null;
        break;
      }
      e: {
        var o = e, i = r.return, s = r, l = t;
        if (t = qe, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var d = l, h = s, f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var x = h.alternate;
            x ? (h.updateQueue = x.updateQueue, h.memoizedState = x.memoizedState, h.lanes = x.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var w = H0(i);
          if (w !== null) {
            w.flags &= -257, $0(w, i, s, o, t), w.mode & 1 && F0(o, d, t), t = w, l = d;
            var E = t.updateQueue;
            if (E === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else E.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              F0(o, d, t), bu();
              break e;
            }
            l = Error(O(426));
          }
        } else if (ye && s.mode & 1) {
          var A = H0(i);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256), $0(A, i, s, o, t), Zc(xa(l, s));
            break e;
          }
        }
        o = l = xa(l, s), Ue !== 4 && (Ue = 2), Za === null ? Za = [o] : Za.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = Ip(o, l, t);
              j0(o, m);
              break e;
            case 1:
              s = l;
              var b = o.type, g = o.stateNode;
              if (!(o.flags & 128) && (typeof b.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (rn === null || !rn.has(g)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var z = Ap(o, s, t);
                j0(o, z);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qp(r);
    } catch (I) {
      t = I, je === r && r !== null && (je = r = r.return);
      continue;
    }
    break;
  } while (true);
}
function Vp() {
  var e = Wi.current;
  return Wi.current = Ki, e === null ? Ki : e;
}
function bu() {
  (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), De === null || !(jn & 268435455) && !(xs & 268435455) || Wr(De, qe);
}
function Zi(e, t) {
  var r = se;
  se |= 2;
  var n = Vp();
  (De !== e || qe !== t) && (vr = null, zn(e, t));
  do
    try {
      wb();
      break;
    } catch (a) {
      Dp(e, a);
    }
  while (true);
  if (Jc(), se = r, Wi.current = n, je !== null) throw Error(O(261));
  return De = null, qe = 0, Ue;
}
function wb() {
  for (; je !== null; ) Gp(je);
}
function kb() {
  for (; je !== null && !Km(); ) Gp(je);
}
function Gp(e) {
  var t = Wp(e.alternate, e, mt);
  e.memoizedProps = e.pendingProps, t === null ? qp(e) : je = t, fu.current = null;
}
function qp(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = xb(r, t), r !== null) {
        r.flags &= 32767, je = r;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ue = 6, je = null;
        return;
      }
    } else if (r = hb(r, t, mt), r !== null) {
      je = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      je = t;
      return;
    }
    je = t = e;
  } while (t !== null);
  Ue === 0 && (Ue = 5);
}
function bn(e, t, r) {
  var n = ce, a = Rt.transition;
  try {
    Rt.transition = null, ce = 1, Eb(e, t, r, n);
  } finally {
    Rt.transition = a, ce = n;
  }
  return null;
}
function Eb(e, t, r, n) {
  do
    la();
  while (Qr !== null);
  if (se & 6) throw Error(O(327));
  r = e.finishedWork;
  var a = e.finishedLanes;
  if (r === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = r.lanes | r.childLanes;
  if (n1(e, o), e === De && (je = De = null, qe = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || ni || (ni = true, Yp(_i, function() {
    return la(), null;
  })), o = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || o) {
    o = Rt.transition, Rt.transition = null;
    var i = ce;
    ce = 1;
    var s = se;
    se |= 4, fu.current = null, bb(e, r), Hp(r, e), D1(Ql), Li = !!Yl, Ql = Yl = null, e.current = r, gb(r), Wm(), se = s, ce = i, Rt.transition = o;
  } else e.current = r;
  if (ni && (ni = false, Qr = e, Qi = a), o = e.pendingLanes, o === 0 && (rn = null), Zm(r.stateNode), ft(e, Ae()), t !== null) for (n = e.onRecoverableError, r = 0; r < t.length; r++) a = t[r], n(a.value, { componentStack: a.stack, digest: a.digest });
  if (Yi) throw Yi = false, e = mc, mc = null, e;
  return Qi & 1 && e.tag !== 0 && la(), o = e.pendingLanes, o & 1 ? e === bc ? Xa++ : (Xa = 0, bc = e) : Xa = 0, fn(), null;
}
function la() {
  if (Qr !== null) {
    var e = If(Qi), t = Rt.transition, r = ce;
    try {
      if (Rt.transition = null, ce = 16 > e ? 16 : e, Qr === null) var n = false;
      else {
        if (e = Qr, Qr = null, Qi = 0, se & 6) throw Error(O(331));
        var a = se;
        for (se |= 4, G = e.current; G !== null; ) {
          var o = G, i = o.child;
          if (G.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var d = s[l];
                for (G = d; G !== null; ) {
                  var h = G;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qa(8, h, o);
                  }
                  var f = h.child;
                  if (f !== null) f.return = h, G = f;
                  else for (; G !== null; ) {
                    h = G;
                    var x = h.sibling, w = h.return;
                    if (Op(h), h === d) {
                      G = null;
                      break;
                    }
                    if (x !== null) {
                      x.return = w, G = x;
                      break;
                    }
                    G = w;
                  }
                }
              }
              var E = o.alternate;
              if (E !== null) {
                var v = E.child;
                if (v !== null) {
                  E.child = null;
                  do {
                    var A = v.sibling;
                    v.sibling = null, v = A;
                  } while (v !== null);
                }
              }
              G = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, G = i;
          else e: for (; G !== null; ) {
            if (o = G, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Qa(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, G = m;
              break e;
            }
            G = o.return;
          }
        }
        var b = e.current;
        for (G = b; G !== null; ) {
          i = G;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) g.return = i, G = g;
          else e: for (i = b; G !== null; ) {
            if (s = G, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  hs(9, s);
              }
            } catch (I) {
              Ie(s, s.return, I);
            }
            if (s === i) {
              G = null;
              break e;
            }
            var z = s.sibling;
            if (z !== null) {
              z.return = s.return, G = z;
              break e;
            }
            G = s.return;
          }
        }
        if (se = a, fn(), hr && typeof hr.onPostCommitFiberRoot == "function") try {
          hr.onPostCommitFiberRoot(is, e);
        } catch {
        }
        n = true;
      }
      return n;
    } finally {
      ce = r, Rt.transition = t;
    }
  }
  return false;
}
function ed(e, t, r) {
  t = xa(r, t), t = Ip(e, t, 1), e = tn(e, t, 1), t = nt(), e !== null && (Io(e, 1, t), ft(e, t));
}
function Ie(e, t, r) {
  if (e.tag === 3) ed(e, e, r);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ed(t, e, r);
      break;
    } else if (t.tag === 1) {
      var n = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (rn === null || !rn.has(n))) {
        e = xa(r, e), e = Ap(t, e, 1), t = tn(t, e, 1), e = nt(), t !== null && (Io(t, 1, e), ft(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Sb(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = nt(), e.pingedLanes |= e.suspendedLanes & r, De === e && (qe & r) === r && (Ue === 4 || Ue === 3 && (qe & 130023424) === qe && 500 > Ae() - hu ? zn(e, 0) : pu |= r), ft(e, t);
}
function Kp(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ko, Ko <<= 1, !(Ko & 130023424) && (Ko = 4194304)) : t = 1);
  var r = nt();
  e = Pr(e, t), e !== null && (Io(e, t, r), ft(e, r));
}
function zb(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), Kp(e, r);
}
function Ib(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode, a = e.memoizedState;
      a !== null && (r = a.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  n !== null && n.delete(t), Kp(e, r);
}
var Wp;
Wp = function(e, t, r) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ut.current) ct = true;
  else {
    if (!(e.lanes & r) && !(t.flags & 128)) return ct = false, pb(e, t, r);
    ct = !!(e.flags & 131072);
  }
  else ct = false, ye && t.flags & 1048576 && Xf(t, $i, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      wi(e, t), e = t.pendingProps;
      var a = da(t, et.current);
      sa(t, r), a = su(null, t, n, e, a, r);
      var o = lu();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, dt(n) ? (o = true, Fi(t)) : o = false, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ru(t), a.updater = ps, t.stateNode = a, a._reactInternals = t, oc(t, n, e, r), t = lc(null, t, n, true, o, r)) : (t.tag = 0, ye && o && Yc(t), tt(null, t, a, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (wi(e, t), e = t.pendingProps, a = n._init, n = a(n._payload), t.type = n, a = t.tag = Bb(n), e = Gt(n, e), a) {
          case 0:
            t = sc(null, t, n, e, r);
            break e;
          case 1:
            t = V0(null, t, n, e, r);
            break e;
          case 11:
            t = M0(null, t, n, e, r);
            break e;
          case 14:
            t = D0(null, t, n, Gt(n.type, e), r);
            break e;
        }
        throw Error(O(306, n, ""));
      }
      return t;
    case 0:
      return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : Gt(n, a), sc(e, t, n, a, r);
    case 1:
      return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : Gt(n, a), V0(e, t, n, a, r);
    case 3:
      e: {
        if (Cp(t), e === null) throw Error(O(387));
        n = t.pendingProps, o = t.memoizedState, a = o.element, ap(e, t), Vi(t, n, null, r);
        var i = t.memoizedState;
        if (n = i.element, o.isDehydrated) if (o = { element: n, isDehydrated: false, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = xa(Error(O(423)), t), t = G0(e, t, n, r, a);
          break e;
        } else if (n !== a) {
          a = xa(Error(O(424)), t), t = G0(e, t, n, r, a);
          break e;
        } else for (yt = en(t.stateNode.containerInfo.firstChild), vt = t, ye = true, Qt = null, r = rp(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (fa(), n === a) {
            t = Cr(e, t, r);
            break e;
          }
          tt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return op(t), e === null && rc(t), n = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = a.children, Zl(n, a) ? i = null : o !== null && Zl(n, o) && (t.flags |= 32), Pp(e, t), tt(e, t, i, r), t.child;
    case 6:
      return e === null && rc(t), null;
    case 13:
      return _p(e, t, r);
    case 4:
      return nu(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = pa(t, null, n, r) : tt(e, t, n, r), t.child;
    case 11:
      return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : Gt(n, a), M0(e, t, n, a, r);
    case 7:
      return tt(e, t, t.pendingProps, r), t.child;
    case 8:
      return tt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return tt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, a = t.pendingProps, o = t.memoizedProps, i = a.value, xe(Mi, n._currentValue), n._currentValue = i, o !== null) if (er(o.value, i)) {
          if (o.children === a.children && !ut.current) {
            t = Cr(e, t, r);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var s = o.dependencies;
          if (s !== null) {
            i = o.child;
            for (var l = s.firstContext; l !== null; ) {
              if (l.context === n) {
                if (o.tag === 1) {
                  l = zr(-1, r & -r), l.tag = 2;
                  var d = o.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? l.next = l : (l.next = h.next, h.next = l), d.pending = l;
                  }
                }
                o.lanes |= r, l = o.alternate, l !== null && (l.lanes |= r), nc(o.return, r, t), s.lanes |= r;
                break;
              }
              l = l.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(O(341));
            i.lanes |= r, s = i.alternate, s !== null && (s.lanes |= r), nc(i, r, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        tt(e, t, a.children, r), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, n = t.pendingProps.children, sa(t, r), a = Ft(a), n = n(a), t.flags |= 1, tt(e, t, n, r), t.child;
    case 14:
      return n = t.type, a = Gt(n, t.pendingProps), a = Gt(n.type, a), D0(e, t, n, a, r);
    case 15:
      return Bp(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : Gt(n, a), wi(e, t), t.tag = 1, dt(n) ? (e = true, Fi(t)) : e = false, sa(t, r), zp(t, n, a), oc(t, n, a, r), lc(null, t, n, true, e, r);
    case 19:
      return jp(e, t, r);
    case 22:
      return Np(e, t, r);
  }
  throw Error(O(156, t.tag));
};
function Yp(e, t) {
  return kf(e, t);
}
function Ab(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ot(e, t, r, n) {
  return new Ab(e, t, r, n);
}
function gu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Bb(e) {
  if (typeof e == "function") return gu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Oc) return 11;
    if (e === Rc) return 14;
  }
  return 2;
}
function an(e, t) {
  var r = e.alternate;
  return r === null ? (r = Ot(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function Si(e, t, r, n, a, o) {
  var i = 2;
  if (n = e, typeof e == "function") gu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Vn:
      return In(r.children, a, o, t);
    case Uc:
      i = 8, a |= 8;
      break;
    case Nl:
      return e = Ot(12, r, t, a | 2), e.elementType = Nl, e.lanes = o, e;
    case Pl:
      return e = Ot(13, r, t, a), e.elementType = Pl, e.lanes = o, e;
    case Cl:
      return e = Ot(19, r, t, a), e.elementType = Cl, e.lanes = o, e;
    case af:
      return ms(r, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case rf:
          i = 10;
          break e;
        case nf:
          i = 9;
          break e;
        case Oc:
          i = 11;
          break e;
        case Rc:
          i = 14;
          break e;
        case Gr:
          i = 16, n = null;
          break e;
      }
      throw Error(O(130, e == null ? e : typeof e, ""));
  }
  return t = Ot(i, r, t, a), t.elementType = e, t.type = n, t.lanes = o, t;
}
function In(e, t, r, n) {
  return e = Ot(7, e, n, t), e.lanes = r, e;
}
function ms(e, t, r, n) {
  return e = Ot(22, e, n, t), e.elementType = af, e.lanes = r, e.stateNode = { isHidden: false }, e;
}
function sl(e, t, r) {
  return e = Ot(6, e, null, t), e.lanes = r, e;
}
function ll(e, t, r) {
  return t = Ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Nb(e, t, r, n, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ms(0), this.expirationTimes = Ms(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ms(0), this.identifierPrefix = n, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function yu(e, t, r, n, a, o, i, s, l) {
  return e = new Nb(e, t, r, s, l), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = Ot(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ru(o), e;
}
function Pb(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Dn, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Qp(e) {
  if (!e) return ln;
  e = e._reactInternals;
  e: {
    if (On(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (dt(r)) return Qf(e, r, t);
  }
  return t;
}
function Zp(e, t, r, n, a, o, i, s, l) {
  return e = yu(r, n, true, e, a, o, i, s, l), e.context = Qp(null), r = e.current, n = nt(), a = nn(r), o = zr(n, a), o.callback = t ?? null, tn(r, o, a), e.current.lanes = a, Io(e, a, n), ft(e, n), e;
}
function bs(e, t, r, n) {
  var a = t.current, o = nt(), i = nn(a);
  return r = Qp(r), t.context === null ? t.context = r : t.pendingContext = r, t = zr(o, i), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = tn(a, t, i), e !== null && (Jt(e, a, i, o), gi(e, a, i)), i;
}
function Xi(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function td(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function vu(e, t) {
  td(e, t), (e = e.alternate) && td(e, t);
}
function Cb() {
  return null;
}
var Xp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function wu(e) {
  this._internalRoot = e;
}
gs.prototype.render = wu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  bs(e, t, null, null);
};
gs.prototype.unmount = wu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ln(function() {
      bs(null, e, null, null);
    }), t[Nr] = null;
  }
};
function gs(e) {
  this._internalRoot = e;
}
gs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Nf();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Kr.length && t !== 0 && t < Kr[r].priority; r++) ;
    Kr.splice(r, 0, e), r === 0 && Cf(e);
  }
};
function ku(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ys(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function rd() {
}
function _b(e, t, r, n, a) {
  if (a) {
    if (typeof n == "function") {
      var o = n;
      n = function() {
        var d = Xi(i);
        o.call(d);
      };
    }
    var i = Zp(t, n, e, 0, null, false, false, "", rd);
    return e._reactRootContainer = i, e[Nr] = i.current, co(e.nodeType === 8 ? e.parentNode : e), Ln(), i;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var d = Xi(l);
      s.call(d);
    };
  }
  var l = yu(e, 0, false, null, null, false, false, "", rd);
  return e._reactRootContainer = l, e[Nr] = l.current, co(e.nodeType === 8 ? e.parentNode : e), Ln(function() {
    bs(t, l, r, n);
  }), l;
}
function vs(e, t, r, n, a) {
  var o = r._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof a == "function") {
      var s = a;
      a = function() {
        var l = Xi(i);
        s.call(l);
      };
    }
    bs(t, i, e, a);
  } else i = _b(r, t, e, a, n);
  return Xi(i);
}
Af = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = $a(t.pendingLanes);
        r !== 0 && ($c(t, r | 1), ft(t, Ae()), !(se & 6) && (ma = Ae() + 500, fn()));
      }
      break;
    case 13:
      Ln(function() {
        var n = Pr(e, 1);
        if (n !== null) {
          var a = nt();
          Jt(n, e, 1, a);
        }
      }), vu(e, 1);
  }
};
Mc = function(e) {
  if (e.tag === 13) {
    var t = Pr(e, 134217728);
    if (t !== null) {
      var r = nt();
      Jt(t, e, 134217728, r);
    }
    vu(e, 134217728);
  }
};
Bf = function(e) {
  if (e.tag === 13) {
    var t = nn(e), r = Pr(e, t);
    if (r !== null) {
      var n = nt();
      Jt(r, e, t, n);
    }
    vu(e, t);
  }
};
Nf = function() {
  return ce;
};
Pf = function(e, t) {
  var r = ce;
  try {
    return ce = e, t();
  } finally {
    ce = r;
  }
};
$l = function(e, t, r) {
  switch (t) {
    case "input":
      if (Ll(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var a = us(n);
            if (!a) throw Error(O(90));
            sf(n), Ll(n, a);
          }
        }
      }
      break;
    case "textarea":
      cf(e, r);
      break;
    case "select":
      t = r.value, t != null && na(e, !!r.multiple, t, false);
  }
};
mf = xu;
bf = Ln;
var jb = { usingClientEntryPoint: false, Events: [Bo, Wn, us, hf, xf, xu] }, Ua = { findFiberByHostInstance: wn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Lb = { bundleType: Ua.bundleType, version: Ua.version, rendererPackageName: Ua.rendererPackageName, rendererConfig: Ua.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _r.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = vf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ua.findFiberByHostInstance || Cb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ai.isDisabled && ai.supportsFiber) try {
    is = ai.inject(Lb), hr = ai;
  } catch {
  }
}
zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jb;
zt.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ku(t)) throw Error(O(200));
  return Pb(e, t, null, r);
};
zt.createRoot = function(e, t) {
  if (!ku(e)) throw Error(O(299));
  var r = false, n = "", a = Xp;
  return t != null && (t.unstable_strictMode === true && (r = true), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = yu(e, 1, false, null, null, r, false, n, a), e[Nr] = t.current, co(e.nodeType === 8 ? e.parentNode : e), new wu(t);
};
zt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = vf(t), e = e === null ? null : e.stateNode, e;
};
zt.flushSync = function(e) {
  return Ln(e);
};
zt.hydrate = function(e, t, r) {
  if (!ys(t)) throw Error(O(200));
  return vs(null, e, t, true, r);
};
zt.hydrateRoot = function(e, t, r) {
  if (!ku(e)) throw Error(O(405));
  var n = r != null && r.hydratedSources || null, a = false, o = "", i = Xp;
  if (r != null && (r.unstable_strictMode === true && (a = true), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (i = r.onRecoverableError)), t = Zp(t, null, e, 1, r ?? null, a, false, o, i), e[Nr] = t.current, co(e), n) for (e = 0; e < n.length; e++) r = n[e], a = r._getVersion, a = a(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, a] : t.mutableSourceEagerHydrationData.push(r, a);
  return new gs(t);
};
zt.render = function(e, t, r) {
  if (!ys(t)) throw Error(O(200));
  return vs(null, e, t, false, r);
};
zt.unmountComponentAtNode = function(e) {
  if (!ys(e)) throw Error(O(40));
  return e._reactRootContainer ? (Ln(function() {
    vs(null, null, e, false, function() {
      e._reactRootContainer = null, e[Nr] = null;
    });
  }), true) : false;
};
zt.unstable_batchedUpdates = xu;
zt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!ys(r)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return vs(e, t, r, false, n);
};
zt.version = "18.3.1-next-f1338f8080-20240426";
function Jp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp);
  } catch (e) {
    console.error(e);
  }
}
Jp(), Xd.exports = zt;
var Tb = Xd.exports, nd = Tb;
Al.createRoot = nd.createRoot, Al.hydrateRoot = nd.hydrateRoot;
var br = {}, pr = {}, pe = {}, rt = {}, za = {}, ws = {};
Object.defineProperty(ws, "__esModule", { value: true });
ws.crypto = void 0;
ws.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: true }), e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.Hash = e.nextTick = e.swap32IfBE = e.byteSwapIfBE = e.swap8IfBE = e.isLE = void 0, e.isBytes = r, e.anumber = n, e.abytes = a, e.ahash = o, e.aexists = i, e.aoutput = s, e.u8 = l, e.u32 = d, e.clean = h, e.createView = f, e.rotr = x, e.rotl = w, e.byteSwap = E, e.byteSwap32 = v, e.bytesToHex = b, e.hexToBytes = I, e.asyncLoop = j, e.utf8ToBytes = C, e.bytesToUtf8 = V, e.toBytes = F, e.kdfInputToBytes = q, e.concatBytes = Z, e.checkOpts = ee, e.createHasher = U, e.createOptHasher = H, e.createXOFer = W, e.randomBytes = T;
  const t = ws;
  function r(k) {
    return k instanceof Uint8Array || ArrayBuffer.isView(k) && k.constructor.name === "Uint8Array";
  }
  function n(k) {
    if (!Number.isSafeInteger(k) || k < 0) throw new Error("positive integer expected, got " + k);
  }
  function a(k, ..._) {
    if (!r(k)) throw new Error("Uint8Array expected");
    if (_.length > 0 && !_.includes(k.length)) throw new Error("Uint8Array expected of length " + _ + ", got length=" + k.length);
  }
  function o(k) {
    if (typeof k != "function" || typeof k.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    n(k.outputLen), n(k.blockLen);
  }
  function i(k, _ = true) {
    if (k.destroyed) throw new Error("Hash instance has been destroyed");
    if (_ && k.finished) throw new Error("Hash#digest() has already been called");
  }
  function s(k, _) {
    a(k);
    const R = _.outputLen;
    if (k.length < R) throw new Error("digestInto() expects output buffer of length at least " + R);
  }
  function l(k) {
    return new Uint8Array(k.buffer, k.byteOffset, k.byteLength);
  }
  function d(k) {
    return new Uint32Array(k.buffer, k.byteOffset, Math.floor(k.byteLength / 4));
  }
  function h(...k) {
    for (let _ = 0; _ < k.length; _++) k[_].fill(0);
  }
  function f(k) {
    return new DataView(k.buffer, k.byteOffset, k.byteLength);
  }
  function x(k, _) {
    return k << 32 - _ | k >>> _;
  }
  function w(k, _) {
    return k << _ | k >>> 32 - _ >>> 0;
  }
  e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  function E(k) {
    return k << 24 & 4278190080 | k << 8 & 16711680 | k >>> 8 & 65280 | k >>> 24 & 255;
  }
  e.swap8IfBE = e.isLE ? (k) => k : (k) => E(k), e.byteSwapIfBE = e.swap8IfBE;
  function v(k) {
    for (let _ = 0; _ < k.length; _++) k[_] = E(k[_]);
    return k;
  }
  e.swap32IfBE = e.isLE ? (k) => k : v;
  const A = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", m = Array.from({ length: 256 }, (k, _) => _.toString(16).padStart(2, "0"));
  function b(k) {
    if (a(k), A) return k.toHex();
    let _ = "";
    for (let R = 0; R < k.length; R++) _ += m[k[R]];
    return _;
  }
  const g = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
  function z(k) {
    if (k >= g._0 && k <= g._9) return k - g._0;
    if (k >= g.A && k <= g.F) return k - (g.A - 10);
    if (k >= g.a && k <= g.f) return k - (g.a - 10);
  }
  function I(k) {
    if (typeof k != "string") throw new Error("hex string expected, got " + typeof k);
    if (A) return Uint8Array.fromHex(k);
    const _ = k.length, R = _ / 2;
    if (_ % 2) throw new Error("hex string expected, got unpadded hex of length " + _);
    const M = new Uint8Array(R);
    for (let ae = 0, oe = 0; ae < R; ae++, oe += 2) {
      const We = z(k.charCodeAt(oe)), Le = z(k.charCodeAt(oe + 1));
      if (We === void 0 || Le === void 0) {
        const Oe = k[oe] + k[oe + 1];
        throw new Error('hex string expected, got non-hex character "' + Oe + '" at index ' + oe);
      }
      M[ae] = We * 16 + Le;
    }
    return M;
  }
  const N = async () => {
  };
  e.nextTick = N;
  async function j(k, _, R) {
    let M = Date.now();
    for (let ae = 0; ae < k; ae++) {
      R(ae);
      const oe = Date.now() - M;
      oe >= 0 && oe < _ || (await (0, e.nextTick)(), M += oe);
    }
  }
  function C(k) {
    if (typeof k != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(k));
  }
  function V(k) {
    return new TextDecoder().decode(k);
  }
  function F(k) {
    return typeof k == "string" && (k = C(k)), a(k), k;
  }
  function q(k) {
    return typeof k == "string" && (k = C(k)), a(k), k;
  }
  function Z(...k) {
    let _ = 0;
    for (let M = 0; M < k.length; M++) {
      const ae = k[M];
      a(ae), _ += ae.length;
    }
    const R = new Uint8Array(_);
    for (let M = 0, ae = 0; M < k.length; M++) {
      const oe = k[M];
      R.set(oe, ae), ae += oe.length;
    }
    return R;
  }
  function ee(k, _) {
    if (_ !== void 0 && {}.toString.call(_) !== "[object Object]") throw new Error("options should be object or undefined");
    return Object.assign(k, _);
  }
  class ue {
  }
  e.Hash = ue;
  function U(k) {
    const _ = (M) => k().update(F(M)).digest(), R = k();
    return _.outputLen = R.outputLen, _.blockLen = R.blockLen, _.create = () => k(), _;
  }
  function H(k) {
    const _ = (M, ae) => k(ae).update(F(M)).digest(), R = k({});
    return _.outputLen = R.outputLen, _.blockLen = R.blockLen, _.create = (M) => k(M), _;
  }
  function W(k) {
    const _ = (M, ae) => k(ae).update(F(M)).digest(), R = k({});
    return _.outputLen = R.outputLen, _.blockLen = R.blockLen, _.create = (M) => k(M), _;
  }
  e.wrapConstructor = U, e.wrapConstructorWithOpts = H, e.wrapXOFConstructorWithOpts = W;
  function T(k = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function") return t.crypto.getRandomValues(new Uint8Array(k));
    if (t.crypto && typeof t.crypto.randomBytes == "function") return Uint8Array.from(t.crypto.randomBytes(k));
    throw new Error("crypto.getRandomValues must be defined");
  }
})(za);
Object.defineProperty(rt, "__esModule", { value: true });
rt.SHA512_IV = rt.SHA384_IV = rt.SHA224_IV = rt.SHA256_IV = rt.HashMD = void 0;
rt.setBigUint64 = eh;
rt.Chi = Ub;
rt.Maj = Ob;
const or = za;
function eh(e, t, r, n) {
  if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, r, n);
  const a = BigInt(32), o = BigInt(4294967295), i = Number(r >> a & o), s = Number(r & o), l = n ? 4 : 0, d = n ? 0 : 4;
  e.setUint32(t + l, i, n), e.setUint32(t + d, s, n);
}
function Ub(e, t, r) {
  return e & t ^ ~e & r;
}
function Ob(e, t, r) {
  return e & t ^ e & r ^ t & r;
}
class Rb extends or.Hash {
  constructor(t, r, n, a) {
    super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = t, this.outputLen = r, this.padOffset = n, this.isLE = a, this.buffer = new Uint8Array(t), this.view = (0, or.createView)(this.buffer);
  }
  update(t) {
    (0, or.aexists)(this), t = (0, or.toBytes)(t), (0, or.abytes)(t);
    const { view: r, buffer: n, blockLen: a } = this, o = t.length;
    for (let i = 0; i < o; ) {
      const s = Math.min(a - this.pos, o - i);
      if (s === a) {
        const l = (0, or.createView)(t);
        for (; a <= o - i; i += a) this.process(l, i);
        continue;
      }
      n.set(t.subarray(i, i + s), this.pos), this.pos += s, i += s, this.pos === a && (this.process(r, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    (0, or.aexists)(this), (0, or.aoutput)(t, this), this.finished = true;
    const { buffer: r, view: n, blockLen: a, isLE: o } = this;
    let { pos: i } = this;
    r[i++] = 128, (0, or.clean)(this.buffer.subarray(i)), this.padOffset > a - i && (this.process(n, 0), i = 0);
    for (let f = i; f < a; f++) r[f] = 0;
    eh(n, a - 8, BigInt(this.length * 8), o), this.process(n, 0);
    const s = (0, or.createView)(t), l = this.outputLen;
    if (l % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const d = l / 4, h = this.get();
    if (d > h.length) throw new Error("_sha2: outputLen bigger than state");
    for (let f = 0; f < d; f++) s.setUint32(4 * f, h[f], o);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: a, finished: o, destroyed: i, pos: s } = this;
    return t.destroyed = i, t.finished = o, t.length = a, t.pos = s, a % r && t.buffer.set(n), t;
  }
  clone() {
    return this._cloneInto();
  }
}
rt.HashMD = Rb;
rt.SHA256_IV = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
rt.SHA224_IV = Uint32Array.from([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
rt.SHA384_IV = Uint32Array.from([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]);
rt.SHA512_IV = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209]);
var Q = {};
Object.defineProperty(Q, "__esModule", { value: true });
Q.toBig = Q.shrSL = Q.shrSH = Q.rotrSL = Q.rotrSH = Q.rotrBL = Q.rotrBH = Q.rotr32L = Q.rotr32H = Q.rotlSL = Q.rotlSH = Q.rotlBL = Q.rotlBH = Q.add5L = Q.add5H = Q.add4L = Q.add4H = Q.add3L = Q.add3H = void 0;
Q.add = xh;
Q.fromBig = Eu;
Q.split = th;
const oi = BigInt(2 ** 32 - 1), vc = BigInt(32);
function Eu(e, t = false) {
  return t ? { h: Number(e & oi), l: Number(e >> vc & oi) } : { h: Number(e >> vc & oi) | 0, l: Number(e & oi) | 0 };
}
function th(e, t = false) {
  const r = e.length;
  let n = new Uint32Array(r), a = new Uint32Array(r);
  for (let o = 0; o < r; o++) {
    const { h: i, l: s } = Eu(e[o], t);
    [n[o], a[o]] = [i, s];
  }
  return [n, a];
}
const rh = (e, t) => BigInt(e >>> 0) << vc | BigInt(t >>> 0);
Q.toBig = rh;
const nh = (e, t, r) => e >>> r;
Q.shrSH = nh;
const ah = (e, t, r) => e << 32 - r | t >>> r;
Q.shrSL = ah;
const oh = (e, t, r) => e >>> r | t << 32 - r;
Q.rotrSH = oh;
const ih = (e, t, r) => e << 32 - r | t >>> r;
Q.rotrSL = ih;
const sh = (e, t, r) => e << 64 - r | t >>> r - 32;
Q.rotrBH = sh;
const lh = (e, t, r) => e >>> r - 32 | t << 64 - r;
Q.rotrBL = lh;
const ch = (e, t) => t;
Q.rotr32H = ch;
const uh = (e, t) => e;
Q.rotr32L = uh;
const dh = (e, t, r) => e << r | t >>> 32 - r;
Q.rotlSH = dh;
const fh = (e, t, r) => t << r | e >>> 32 - r;
Q.rotlSL = fh;
const ph = (e, t, r) => t << r - 32 | e >>> 64 - r;
Q.rotlBH = ph;
const hh = (e, t, r) => e << r - 32 | t >>> 64 - r;
Q.rotlBL = hh;
function xh(e, t, r, n) {
  const a = (t >>> 0) + (n >>> 0);
  return { h: e + r + (a / 2 ** 32 | 0) | 0, l: a | 0 };
}
const mh = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
Q.add3L = mh;
const bh = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0;
Q.add3H = bh;
const gh = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
Q.add4L = gh;
const yh = (e, t, r, n, a) => t + r + n + a + (e / 2 ** 32 | 0) | 0;
Q.add4H = yh;
const vh = (e, t, r, n, a) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (a >>> 0);
Q.add5L = vh;
const wh = (e, t, r, n, a, o) => t + r + n + a + o + (e / 2 ** 32 | 0) | 0;
Q.add5H = wh;
const Fb = { fromBig: Eu, split: th, toBig: rh, shrSH: nh, shrSL: ah, rotrSH: oh, rotrSL: ih, rotrBH: sh, rotrBL: lh, rotr32H: ch, rotr32L: uh, rotlSH: dh, rotlSL: fh, rotlBH: ph, rotlBL: hh, add: xh, add3L: mh, add3H: bh, add4L: gh, add4H: yh, add5H: wh, add5L: vh };
Q.default = Fb;
Object.defineProperty(pe, "__esModule", { value: true });
pe.sha512_224 = pe.sha512_256 = pe.sha384 = pe.sha512 = pe.sha224 = pe.sha256 = pe.SHA512_256 = pe.SHA512_224 = pe.SHA384 = pe.SHA512 = pe.SHA224 = pe.SHA256 = void 0;
const Y = rt, X = Q, Ce = za, Hb = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), Tr = new Uint32Array(64);
let Su = class extends Y.HashMD {
  constructor(t = 32) {
    super(64, t, 8, false), this.A = Y.SHA256_IV[0] | 0, this.B = Y.SHA256_IV[1] | 0, this.C = Y.SHA256_IV[2] | 0, this.D = Y.SHA256_IV[3] | 0, this.E = Y.SHA256_IV[4] | 0, this.F = Y.SHA256_IV[5] | 0, this.G = Y.SHA256_IV[6] | 0, this.H = Y.SHA256_IV[7] | 0;
  }
  get() {
    const { A: t, B: r, C: n, D: a, E: o, F: i, G: s, H: l } = this;
    return [t, r, n, a, o, i, s, l];
  }
  set(t, r, n, a, o, i, s, l) {
    this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = a | 0, this.E = o | 0, this.F = i | 0, this.G = s | 0, this.H = l | 0;
  }
  process(t, r) {
    for (let f = 0; f < 16; f++, r += 4) Tr[f] = t.getUint32(r, false);
    for (let f = 16; f < 64; f++) {
      const x = Tr[f - 15], w = Tr[f - 2], E = (0, Ce.rotr)(x, 7) ^ (0, Ce.rotr)(x, 18) ^ x >>> 3, v = (0, Ce.rotr)(w, 17) ^ (0, Ce.rotr)(w, 19) ^ w >>> 10;
      Tr[f] = v + Tr[f - 7] + E + Tr[f - 16] | 0;
    }
    let { A: n, B: a, C: o, D: i, E: s, F: l, G: d, H: h } = this;
    for (let f = 0; f < 64; f++) {
      const x = (0, Ce.rotr)(s, 6) ^ (0, Ce.rotr)(s, 11) ^ (0, Ce.rotr)(s, 25), w = h + x + (0, Y.Chi)(s, l, d) + Hb[f] + Tr[f] | 0, v = ((0, Ce.rotr)(n, 2) ^ (0, Ce.rotr)(n, 13) ^ (0, Ce.rotr)(n, 22)) + (0, Y.Maj)(n, a, o) | 0;
      h = d, d = l, l = s, s = i + w | 0, i = o, o = a, a = n, n = w + v | 0;
    }
    n = n + this.A | 0, a = a + this.B | 0, o = o + this.C | 0, i = i + this.D | 0, s = s + this.E | 0, l = l + this.F | 0, d = d + this.G | 0, h = h + this.H | 0, this.set(n, a, o, i, s, l, d, h);
  }
  roundClean() {
    (0, Ce.clean)(Tr);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, Ce.clean)(this.buffer);
  }
};
pe.SHA256 = Su;
class kh extends Su {
  constructor() {
    super(28), this.A = Y.SHA224_IV[0] | 0, this.B = Y.SHA224_IV[1] | 0, this.C = Y.SHA224_IV[2] | 0, this.D = Y.SHA224_IV[3] | 0, this.E = Y.SHA224_IV[4] | 0, this.F = Y.SHA224_IV[5] | 0, this.G = Y.SHA224_IV[6] | 0, this.H = Y.SHA224_IV[7] | 0;
  }
}
pe.SHA224 = kh;
const Eh = X.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((e) => BigInt(e))), $b = Eh[0], Mb = Eh[1], Ur = new Uint32Array(80), Or = new Uint32Array(80);
let Po = class extends Y.HashMD {
  constructor(t = 64) {
    super(128, t, 16, false), this.Ah = Y.SHA512_IV[0] | 0, this.Al = Y.SHA512_IV[1] | 0, this.Bh = Y.SHA512_IV[2] | 0, this.Bl = Y.SHA512_IV[3] | 0, this.Ch = Y.SHA512_IV[4] | 0, this.Cl = Y.SHA512_IV[5] | 0, this.Dh = Y.SHA512_IV[6] | 0, this.Dl = Y.SHA512_IV[7] | 0, this.Eh = Y.SHA512_IV[8] | 0, this.El = Y.SHA512_IV[9] | 0, this.Fh = Y.SHA512_IV[10] | 0, this.Fl = Y.SHA512_IV[11] | 0, this.Gh = Y.SHA512_IV[12] | 0, this.Gl = Y.SHA512_IV[13] | 0, this.Hh = Y.SHA512_IV[14] | 0, this.Hl = Y.SHA512_IV[15] | 0;
  }
  get() {
    const { Ah: t, Al: r, Bh: n, Bl: a, Ch: o, Cl: i, Dh: s, Dl: l, Eh: d, El: h, Fh: f, Fl: x, Gh: w, Gl: E, Hh: v, Hl: A } = this;
    return [t, r, n, a, o, i, s, l, d, h, f, x, w, E, v, A];
  }
  set(t, r, n, a, o, i, s, l, d, h, f, x, w, E, v, A) {
    this.Ah = t | 0, this.Al = r | 0, this.Bh = n | 0, this.Bl = a | 0, this.Ch = o | 0, this.Cl = i | 0, this.Dh = s | 0, this.Dl = l | 0, this.Eh = d | 0, this.El = h | 0, this.Fh = f | 0, this.Fl = x | 0, this.Gh = w | 0, this.Gl = E | 0, this.Hh = v | 0, this.Hl = A | 0;
  }
  process(t, r) {
    for (let g = 0; g < 16; g++, r += 4) Ur[g] = t.getUint32(r), Or[g] = t.getUint32(r += 4);
    for (let g = 16; g < 80; g++) {
      const z = Ur[g - 15] | 0, I = Or[g - 15] | 0, N = X.rotrSH(z, I, 1) ^ X.rotrSH(z, I, 8) ^ X.shrSH(z, I, 7), j = X.rotrSL(z, I, 1) ^ X.rotrSL(z, I, 8) ^ X.shrSL(z, I, 7), C = Ur[g - 2] | 0, V = Or[g - 2] | 0, F = X.rotrSH(C, V, 19) ^ X.rotrBH(C, V, 61) ^ X.shrSH(C, V, 6), q = X.rotrSL(C, V, 19) ^ X.rotrBL(C, V, 61) ^ X.shrSL(C, V, 6), Z = X.add4L(j, q, Or[g - 7], Or[g - 16]), ee = X.add4H(Z, N, F, Ur[g - 7], Ur[g - 16]);
      Ur[g] = ee | 0, Or[g] = Z | 0;
    }
    let { Ah: n, Al: a, Bh: o, Bl: i, Ch: s, Cl: l, Dh: d, Dl: h, Eh: f, El: x, Fh: w, Fl: E, Gh: v, Gl: A, Hh: m, Hl: b } = this;
    for (let g = 0; g < 80; g++) {
      const z = X.rotrSH(f, x, 14) ^ X.rotrSH(f, x, 18) ^ X.rotrBH(f, x, 41), I = X.rotrSL(f, x, 14) ^ X.rotrSL(f, x, 18) ^ X.rotrBL(f, x, 41), N = f & w ^ ~f & v, j = x & E ^ ~x & A, C = X.add5L(b, I, j, Mb[g], Or[g]), V = X.add5H(C, m, z, N, $b[g], Ur[g]), F = C | 0, q = X.rotrSH(n, a, 28) ^ X.rotrBH(n, a, 34) ^ X.rotrBH(n, a, 39), Z = X.rotrSL(n, a, 28) ^ X.rotrBL(n, a, 34) ^ X.rotrBL(n, a, 39), ee = n & o ^ n & s ^ o & s, ue = a & i ^ a & l ^ i & l;
      m = v | 0, b = A | 0, v = w | 0, A = E | 0, w = f | 0, E = x | 0, { h: f, l: x } = X.add(d | 0, h | 0, V | 0, F | 0), d = s | 0, h = l | 0, s = o | 0, l = i | 0, o = n | 0, i = a | 0;
      const U = X.add3L(F, Z, ue);
      n = X.add3H(U, V, q, ee), a = U | 0;
    }
    ({ h: n, l: a } = X.add(this.Ah | 0, this.Al | 0, n | 0, a | 0)), { h: o, l: i } = X.add(this.Bh | 0, this.Bl | 0, o | 0, i | 0), { h: s, l } = X.add(this.Ch | 0, this.Cl | 0, s | 0, l | 0), { h: d, l: h } = X.add(this.Dh | 0, this.Dl | 0, d | 0, h | 0), { h: f, l: x } = X.add(this.Eh | 0, this.El | 0, f | 0, x | 0), { h: w, l: E } = X.add(this.Fh | 0, this.Fl | 0, w | 0, E | 0), { h: v, l: A } = X.add(this.Gh | 0, this.Gl | 0, v | 0, A | 0), { h: m, l: b } = X.add(this.Hh | 0, this.Hl | 0, m | 0, b | 0), this.set(n, a, o, i, s, l, d, h, f, x, w, E, v, A, m, b);
  }
  roundClean() {
    (0, Ce.clean)(Ur, Or);
  }
  destroy() {
    (0, Ce.clean)(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
pe.SHA512 = Po;
class Sh extends Po {
  constructor() {
    super(48), this.Ah = Y.SHA384_IV[0] | 0, this.Al = Y.SHA384_IV[1] | 0, this.Bh = Y.SHA384_IV[2] | 0, this.Bl = Y.SHA384_IV[3] | 0, this.Ch = Y.SHA384_IV[4] | 0, this.Cl = Y.SHA384_IV[5] | 0, this.Dh = Y.SHA384_IV[6] | 0, this.Dl = Y.SHA384_IV[7] | 0, this.Eh = Y.SHA384_IV[8] | 0, this.El = Y.SHA384_IV[9] | 0, this.Fh = Y.SHA384_IV[10] | 0, this.Fl = Y.SHA384_IV[11] | 0, this.Gh = Y.SHA384_IV[12] | 0, this.Gl = Y.SHA384_IV[13] | 0, this.Hh = Y.SHA384_IV[14] | 0, this.Hl = Y.SHA384_IV[15] | 0;
  }
}
pe.SHA384 = Sh;
const Ze = Uint32Array.from([2352822216, 424955298, 1944164710, 2312950998, 502970286, 855612546, 1738396948, 1479516111, 258812777, 2077511080, 2011393907, 79989058, 1067287976, 1780299464, 286451373, 2446758561]), Xe = Uint32Array.from([573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857, 2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490, 721525244, 746961066, 246885852, 2177182882]);
class zh extends Po {
  constructor() {
    super(28), this.Ah = Ze[0] | 0, this.Al = Ze[1] | 0, this.Bh = Ze[2] | 0, this.Bl = Ze[3] | 0, this.Ch = Ze[4] | 0, this.Cl = Ze[5] | 0, this.Dh = Ze[6] | 0, this.Dl = Ze[7] | 0, this.Eh = Ze[8] | 0, this.El = Ze[9] | 0, this.Fh = Ze[10] | 0, this.Fl = Ze[11] | 0, this.Gh = Ze[12] | 0, this.Gl = Ze[13] | 0, this.Hh = Ze[14] | 0, this.Hl = Ze[15] | 0;
  }
}
pe.SHA512_224 = zh;
class Ih extends Po {
  constructor() {
    super(32), this.Ah = Xe[0] | 0, this.Al = Xe[1] | 0, this.Bh = Xe[2] | 0, this.Bl = Xe[3] | 0, this.Ch = Xe[4] | 0, this.Cl = Xe[5] | 0, this.Dh = Xe[6] | 0, this.Dl = Xe[7] | 0, this.Eh = Xe[8] | 0, this.El = Xe[9] | 0, this.Fh = Xe[10] | 0, this.Fl = Xe[11] | 0, this.Gh = Xe[12] | 0, this.Gl = Xe[13] | 0, this.Hh = Xe[14] | 0, this.Hl = Xe[15] | 0;
  }
}
pe.SHA512_256 = Ih;
pe.sha256 = (0, Ce.createHasher)(() => new Su());
pe.sha224 = (0, Ce.createHasher)(() => new kh());
pe.sha512 = (0, Ce.createHasher)(() => new Po());
pe.sha384 = (0, Ce.createHasher)(() => new Sh());
pe.sha512_256 = (0, Ce.createHasher)(() => new Ih());
pe.sha512_224 = (0, Ce.createHasher)(() => new zh());
Object.defineProperty(pr, "__esModule", { value: true });
pr.sha224 = pr.SHA224 = pr.sha256 = pr.SHA256 = void 0;
const ks = pe;
pr.SHA256 = ks.SHA256;
pr.sha256 = ks.sha256;
pr.SHA224 = ks.SHA224;
pr.sha224 = ks.sha224;
var Fe = {};
Object.defineProperty(Fe, "__esModule", { value: true });
Fe.sha512_256 = Fe.SHA512_256 = Fe.sha512_224 = Fe.SHA512_224 = Fe.sha384 = Fe.SHA384 = Fe.sha512 = Fe.SHA512 = void 0;
const pn = pe;
Fe.SHA512 = pn.SHA512;
Fe.sha512 = pn.sha512;
Fe.SHA384 = pn.SHA384;
Fe.sha384 = pn.sha384;
Fe.SHA512_224 = pn.SHA512_224;
Fe.sha512_224 = pn.sha512_224;
Fe.SHA512_256 = pn.SHA512_256;
Fe.sha512_256 = pn.sha512_256;
var Es = {}, Ah = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.hmac = e.HMAC = void 0;
  const t = za;
  class r extends t.Hash {
    constructor(o, i) {
      super(), this.finished = false, this.destroyed = false, (0, t.ahash)(o);
      const s = (0, t.toBytes)(i);
      if (this.iHash = o.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const l = this.blockLen, d = new Uint8Array(l);
      d.set(s.length > l ? o.create().update(s).digest() : s);
      for (let h = 0; h < d.length; h++) d[h] ^= 54;
      this.iHash.update(d), this.oHash = o.create();
      for (let h = 0; h < d.length; h++) d[h] ^= 106;
      this.oHash.update(d), (0, t.clean)(d);
    }
    update(o) {
      return (0, t.aexists)(this), this.iHash.update(o), this;
    }
    digestInto(o) {
      (0, t.aexists)(this), (0, t.abytes)(o, this.outputLen), this.finished = true, this.iHash.digestInto(o), this.oHash.update(o), this.oHash.digestInto(o), this.destroy();
    }
    digest() {
      const o = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(o), o;
    }
    _cloneInto(o) {
      o || (o = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: i, iHash: s, finished: l, destroyed: d, blockLen: h, outputLen: f } = this;
      return o = o, o.finished = l, o.destroyed = d, o.blockLen = h, o.outputLen = f, o.oHash = i._cloneInto(o.oHash), o.iHash = s._cloneInto(o.iHash), o;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  }
  e.HMAC = r;
  const n = (a, o, i) => new r(a, o).update(i).digest();
  e.hmac = n, e.hmac.create = (a, o) => new r(a, o);
})(Ah);
Object.defineProperty(Es, "__esModule", { value: true });
Es.pbkdf2 = Vb;
Es.pbkdf2Async = Gb;
const Db = Ah, Yt = za;
function Bh(e, t, r, n) {
  (0, Yt.ahash)(e);
  const a = (0, Yt.checkOpts)({ dkLen: 32, asyncTick: 10 }, n), { c: o, dkLen: i, asyncTick: s } = a;
  if ((0, Yt.anumber)(o), (0, Yt.anumber)(i), (0, Yt.anumber)(s), o < 1) throw new Error("iterations (c) should be >= 1");
  const l = (0, Yt.kdfInputToBytes)(t), d = (0, Yt.kdfInputToBytes)(r), h = new Uint8Array(i), f = Db.hmac.create(e, l), x = f._cloneInto().update(d);
  return { c: o, dkLen: i, asyncTick: s, DK: h, PRF: f, PRFSalt: x };
}
function Nh(e, t, r, n, a) {
  return e.destroy(), t.destroy(), n && n.destroy(), (0, Yt.clean)(a), r;
}
function Vb(e, t, r, n) {
  const { c: a, dkLen: o, DK: i, PRF: s, PRFSalt: l } = Bh(e, t, r, n);
  let d;
  const h = new Uint8Array(4), f = (0, Yt.createView)(h), x = new Uint8Array(s.outputLen);
  for (let w = 1, E = 0; E < o; w++, E += s.outputLen) {
    const v = i.subarray(E, E + s.outputLen);
    f.setInt32(0, w, false), (d = l._cloneInto(d)).update(h).digestInto(x), v.set(x.subarray(0, v.length));
    for (let A = 1; A < a; A++) {
      s._cloneInto(d).update(x).digestInto(x);
      for (let m = 0; m < v.length; m++) v[m] ^= x[m];
    }
  }
  return Nh(s, l, i, d, x);
}
async function Gb(e, t, r, n) {
  const { c: a, dkLen: o, asyncTick: i, DK: s, PRF: l, PRFSalt: d } = Bh(e, t, r, n);
  let h;
  const f = new Uint8Array(4), x = (0, Yt.createView)(f), w = new Uint8Array(l.outputLen);
  for (let E = 1, v = 0; v < o; E++, v += l.outputLen) {
    const A = s.subarray(v, v + l.outputLen);
    x.setInt32(0, E, false), (h = d._cloneInto(h)).update(f).digestInto(w), A.set(w.subarray(0, A.length)), await (0, Yt.asyncLoop)(a - 1, i, () => {
      l._cloneInto(h).update(w).digestInto(w);
      for (let m = 0; m < A.length; m++) A[m] ^= w[m];
    });
  }
  return Nh(l, d, s, h, w);
}
var it = {};
const qb = ["abdikace", "abeceda", "adresa", "agrese", "akce", "aktovka", "alej", "alkohol", "amputace", "ananas", "andulka", "anekdota", "anketa", "antika", "anulovat", "archa", "arogance", "asfalt", "asistent", "aspirace", "astma", "astronom", "atlas", "atletika", "atol", "autobus", "azyl", "babka", "bachor", "bacil", "baculka", "badatel", "bageta", "bagr", "bahno", "bakterie", "balada", "baletka", "balkon", "balonek", "balvan", "balza", "bambus", "bankomat", "barbar", "baret", "barman", "baroko", "barva", "baterka", "batoh", "bavlna", "bazalka", "bazilika", "bazuka", "bedna", "beran", "beseda", "bestie", "beton", "bezinka", "bezmoc", "beztak", "bicykl", "bidlo", "biftek", "bikiny", "bilance", "biograf", "biolog", "bitva", "bizon", "blahobyt", "blatouch", "blecha", "bledule", "blesk", "blikat", "blizna", "blokovat", "bloudit", "blud", "bobek", "bobr", "bodlina", "bodnout", "bohatost", "bojkot", "bojovat", "bokorys", "bolest", "borec", "borovice", "bota", "boubel", "bouchat", "bouda", "boule", "bourat", "boxer", "bradavka", "brambora", "branka", "bratr", "brepta", "briketa", "brko", "brloh", "bronz", "broskev", "brunetka", "brusinka", "brzda", "brzy", "bublina", "bubnovat", "buchta", "buditel", "budka", "budova", "bufet", "bujarost", "bukvice", "buldok", "bulva", "bunda", "bunkr", "burza", "butik", "buvol", "buzola", "bydlet", "bylina", "bytovka", "bzukot", "capart", "carevna", "cedr", "cedule", "cejch", "cejn", "cela", "celer", "celkem", "celnice", "cenina", "cennost", "cenovka", "centrum", "cenzor", "cestopis", "cetka", "chalupa", "chapadlo", "charita", "chata", "chechtat", "chemie", "chichot", "chirurg", "chlad", "chleba", "chlubit", "chmel", "chmura", "chobot", "chochol", "chodba", "cholera", "chomout", "chopit", "choroba", "chov", "chrapot", "chrlit", "chrt", "chrup", "chtivost", "chudina", "chutnat", "chvat", "chvilka", "chvost", "chyba", "chystat", "chytit", "cibule", "cigareta", "cihelna", "cihla", "cinkot", "cirkus", "cisterna", "citace", "citrus", "cizinec", "cizost", "clona", "cokoliv", "couvat", "ctitel", "ctnost", "cudnost", "cuketa", "cukr", "cupot", "cvaknout", "cval", "cvik", "cvrkot", "cyklista", "daleko", "dareba", "datel", "datum", "dcera", "debata", "dechovka", "decibel", "deficit", "deflace", "dekl", "dekret", "demokrat", "deprese", "derby", "deska", "detektiv", "dikobraz", "diktovat", "dioda", "diplom", "disk", "displej", "divadlo", "divoch", "dlaha", "dlouho", "dluhopis", "dnes", "dobro", "dobytek", "docent", "dochutit", "dodnes", "dohled", "dohoda", "dohra", "dojem", "dojnice", "doklad", "dokola", "doktor", "dokument", "dolar", "doleva", "dolina", "doma", "dominant", "domluvit", "domov", "donutit", "dopad", "dopis", "doplnit", "doposud", "doprovod", "dopustit", "dorazit", "dorost", "dort", "dosah", "doslov", "dostatek", "dosud", "dosyta", "dotaz", "dotek", "dotknout", "doufat", "doutnat", "dovozce", "dozadu", "doznat", "dozorce", "drahota", "drak", "dramatik", "dravec", "draze", "drdol", "drobnost", "drogerie", "drozd", "drsnost", "drtit", "drzost", "duben", "duchovno", "dudek", "duha", "duhovka", "dusit", "dusno", "dutost", "dvojice", "dvorec", "dynamit", "ekolog", "ekonomie", "elektron", "elipsa", "email", "emise", "emoce", "empatie", "epizoda", "epocha", "epopej", "epos", "esej", "esence", "eskorta", "eskymo", "etiketa", "euforie", "evoluce", "exekuce", "exkurze", "expedice", "exploze", "export", "extrakt", "facka", "fajfka", "fakulta", "fanatik", "fantazie", "farmacie", "favorit", "fazole", "federace", "fejeton", "fenka", "fialka", "figurant", "filozof", "filtr", "finance", "finta", "fixace", "fjord", "flanel", "flirt", "flotila", "fond", "fosfor", "fotbal", "fotka", "foton", "frakce", "freska", "fronta", "fukar", "funkce", "fyzika", "galeje", "garant", "genetika", "geolog", "gilotina", "glazura", "glejt", "golem", "golfista", "gotika", "graf", "gramofon", "granule", "grep", "gril", "grog", "groteska", "guma", "hadice", "hadr", "hala", "halenka", "hanba", "hanopis", "harfa", "harpuna", "havran", "hebkost", "hejkal", "hejno", "hejtman", "hektar", "helma", "hematom", "herec", "herna", "heslo", "hezky", "historik", "hladovka", "hlasivky", "hlava", "hledat", "hlen", "hlodavec", "hloh", "hloupost", "hltat", "hlubina", "hluchota", "hmat", "hmota", "hmyz", "hnis", "hnojivo", "hnout", "hoblina", "hoboj", "hoch", "hodiny", "hodlat", "hodnota", "hodovat", "hojnost", "hokej", "holinka", "holka", "holub", "homole", "honitba", "honorace", "horal", "horda", "horizont", "horko", "horlivec", "hormon", "hornina", "horoskop", "horstvo", "hospoda", "hostina", "hotovost", "houba", "houf", "houpat", "houska", "hovor", "hradba", "hranice", "hravost", "hrazda", "hrbolek", "hrdina", "hrdlo", "hrdost", "hrnek", "hrobka", "hromada", "hrot", "hrouda", "hrozen", "hrstka", "hrubost", "hryzat", "hubenost", "hubnout", "hudba", "hukot", "humr", "husita", "hustota", "hvozd", "hybnost", "hydrant", "hygiena", "hymna", "hysterik", "idylka", "ihned", "ikona", "iluze", "imunita", "infekce", "inflace", "inkaso", "inovace", "inspekce", "internet", "invalida", "investor", "inzerce", "ironie", "jablko", "jachta", "jahoda", "jakmile", "jakost", "jalovec", "jantar", "jarmark", "jaro", "jasan", "jasno", "jatka", "javor", "jazyk", "jedinec", "jedle", "jednatel", "jehlan", "jekot", "jelen", "jelito", "jemnost", "jenom", "jepice", "jeseter", "jevit", "jezdec", "jezero", "jinak", "jindy", "jinoch", "jiskra", "jistota", "jitrnice", "jizva", "jmenovat", "jogurt", "jurta", "kabaret", "kabel", "kabinet", "kachna", "kadet", "kadidlo", "kahan", "kajak", "kajuta", "kakao", "kaktus", "kalamita", "kalhoty", "kalibr", "kalnost", "kamera", "kamkoliv", "kamna", "kanibal", "kanoe", "kantor", "kapalina", "kapela", "kapitola", "kapka", "kaple", "kapota", "kapr", "kapusta", "kapybara", "karamel", "karotka", "karton", "kasa", "katalog", "katedra", "kauce", "kauza", "kavalec", "kazajka", "kazeta", "kazivost", "kdekoliv", "kdesi", "kedluben", "kemp", "keramika", "kino", "klacek", "kladivo", "klam", "klapot", "klasika", "klaun", "klec", "klenba", "klepat", "klesnout", "klid", "klima", "klisna", "klobouk", "klokan", "klopa", "kloub", "klubovna", "klusat", "kluzkost", "kmen", "kmitat", "kmotr", "kniha", "knot", "koalice", "koberec", "kobka", "kobliha", "kobyla", "kocour", "kohout", "kojenec", "kokos", "koktejl", "kolaps", "koleda", "kolize", "kolo", "komando", "kometa", "komik", "komnata", "komora", "kompas", "komunita", "konat", "koncept", "kondice", "konec", "konfese", "kongres", "konina", "konkurs", "kontakt", "konzerva", "kopanec", "kopie", "kopnout", "koprovka", "korbel", "korektor", "kormidlo", "koroptev", "korpus", "koruna", "koryto", "korzet", "kosatec", "kostka", "kotel", "kotleta", "kotoul", "koukat", "koupelna", "kousek", "kouzlo", "kovboj", "koza", "kozoroh", "krabice", "krach", "krajina", "kralovat", "krasopis", "kravata", "kredit", "krejcar", "kresba", "kreveta", "kriket", "kritik", "krize", "krkavec", "krmelec", "krmivo", "krocan", "krok", "kronika", "kropit", "kroupa", "krovka", "krtek", "kruhadlo", "krupice", "krutost", "krvinka", "krychle", "krypta", "krystal", "kryt", "kudlanka", "kufr", "kujnost", "kukla", "kulajda", "kulich", "kulka", "kulomet", "kultura", "kuna", "kupodivu", "kurt", "kurzor", "kutil", "kvalita", "kvasinka", "kvestor", "kynolog", "kyselina", "kytara", "kytice", "kytka", "kytovec", "kyvadlo", "labrador", "lachtan", "ladnost", "laik", "lakomec", "lamela", "lampa", "lanovka", "lasice", "laso", "lastura", "latinka", "lavina", "lebka", "leckdy", "leden", "lednice", "ledovka", "ledvina", "legenda", "legie", "legrace", "lehce", "lehkost", "lehnout", "lektvar", "lenochod", "lentilka", "lepenka", "lepidlo", "letadlo", "letec", "letmo", "letokruh", "levhart", "levitace", "levobok", "libra", "lichotka", "lidojed", "lidskost", "lihovina", "lijavec", "lilek", "limetka", "linie", "linka", "linoleum", "listopad", "litina", "litovat", "lobista", "lodivod", "logika", "logoped", "lokalita", "loket", "lomcovat", "lopata", "lopuch", "lord", "losos", "lotr", "loudal", "louh", "louka", "louskat", "lovec", "lstivost", "lucerna", "lucifer", "lump", "lusk", "lustrace", "lvice", "lyra", "lyrika", "lysina", "madam", "madlo", "magistr", "mahagon", "majetek", "majitel", "majorita", "makak", "makovice", "makrela", "malba", "malina", "malovat", "malvice", "maminka", "mandle", "manko", "marnost", "masakr", "maskot", "masopust", "matice", "matrika", "maturita", "mazanec", "mazivo", "mazlit", "mazurka", "mdloba", "mechanik", "meditace", "medovina", "melasa", "meloun", "mentolka", "metla", "metoda", "metr", "mezera", "migrace", "mihnout", "mihule", "mikina", "mikrofon", "milenec", "milimetr", "milost", "mimika", "mincovna", "minibar", "minomet", "minulost", "miska", "mistr", "mixovat", "mladost", "mlha", "mlhovina", "mlok", "mlsat", "mluvit", "mnich", "mnohem", "mobil", "mocnost", "modelka", "modlitba", "mohyla", "mokro", "molekula", "momentka", "monarcha", "monokl", "monstrum", "montovat", "monzun", "mosaz", "moskyt", "most", "motivace", "motorka", "motyka", "moucha", "moudrost", "mozaika", "mozek", "mozol", "mramor", "mravenec", "mrkev", "mrtvola", "mrzet", "mrzutost", "mstitel", "mudrc", "muflon", "mulat", "mumie", "munice", "muset", "mutace", "muzeum", "muzikant", "myslivec", "mzda", "nabourat", "nachytat", "nadace", "nadbytek", "nadhoz", "nadobro", "nadpis", "nahlas", "nahnat", "nahodile", "nahradit", "naivita", "najednou", "najisto", "najmout", "naklonit", "nakonec", "nakrmit", "nalevo", "namazat", "namluvit", "nanometr", "naoko", "naopak", "naostro", "napadat", "napevno", "naplnit", "napnout", "naposled", "naprosto", "narodit", "naruby", "narychlo", "nasadit", "nasekat", "naslepo", "nastat", "natolik", "navenek", "navrch", "navzdory", "nazvat", "nebe", "nechat", "necky", "nedaleko", "nedbat", "neduh", "negace", "nehet", "nehoda", "nejen", "nejprve", "neklid", "nelibost", "nemilost", "nemoc", "neochota", "neonka", "nepokoj", "nerost", "nerv", "nesmysl", "nesoulad", "netvor", "neuron", "nevina", "nezvykle", "nicota", "nijak", "nikam", "nikdy", "nikl", "nikterak", "nitro", "nocleh", "nohavice", "nominace", "nora", "norek", "nositel", "nosnost", "nouze", "noviny", "novota", "nozdra", "nuda", "nudle", "nuget", "nutit", "nutnost", "nutrie", "nymfa", "obal", "obarvit", "obava", "obdiv", "obec", "obehnat", "obejmout", "obezita", "obhajoba", "obilnice", "objasnit", "objekt", "obklopit", "oblast", "oblek", "obliba", "obloha", "obluda", "obnos", "obohatit", "obojek", "obout", "obrazec", "obrna", "obruba", "obrys", "obsah", "obsluha", "obstarat", "obuv", "obvaz", "obvinit", "obvod", "obvykle", "obyvatel", "obzor", "ocas", "ocel", "ocenit", "ochladit", "ochota", "ochrana", "ocitnout", "odboj", "odbyt", "odchod", "odcizit", "odebrat", "odeslat", "odevzdat", "odezva", "odhadce", "odhodit", "odjet", "odjinud", "odkaz", "odkoupit", "odliv", "odluka", "odmlka", "odolnost", "odpad", "odpis", "odplout", "odpor", "odpustit", "odpykat", "odrazka", "odsoudit", "odstup", "odsun", "odtok", "odtud", "odvaha", "odveta", "odvolat", "odvracet", "odznak", "ofina", "ofsajd", "ohlas", "ohnisko", "ohrada", "ohrozit", "ohryzek", "okap", "okenice", "oklika", "okno", "okouzlit", "okovy", "okrasa", "okres", "okrsek", "okruh", "okupant", "okurka", "okusit", "olejnina", "olizovat", "omak", "omeleta", "omezit", "omladina", "omlouvat", "omluva", "omyl", "onehdy", "opakovat", "opasek", "operace", "opice", "opilost", "opisovat", "opora", "opozice", "opravdu", "oproti", "orbital", "orchestr", "orgie", "orlice", "orloj", "ortel", "osada", "oschnout", "osika", "osivo", "oslava", "oslepit", "oslnit", "oslovit", "osnova", "osoba", "osolit", "ospalec", "osten", "ostraha", "ostuda", "ostych", "osvojit", "oteplit", "otisk", "otop", "otrhat", "otrlost", "otrok", "otruby", "otvor", "ovanout", "ovar", "oves", "ovlivnit", "ovoce", "oxid", "ozdoba", "pachatel", "pacient", "padouch", "pahorek", "pakt", "palanda", "palec", "palivo", "paluba", "pamflet", "pamlsek", "panenka", "panika", "panna", "panovat", "panstvo", "pantofle", "paprika", "parketa", "parodie", "parta", "paruka", "paryba", "paseka", "pasivita", "pastelka", "patent", "patrona", "pavouk", "pazneht", "pazourek", "pecka", "pedagog", "pejsek", "peklo", "peloton", "penalta", "pendrek", "penze", "periskop", "pero", "pestrost", "petarda", "petice", "petrolej", "pevnina", "pexeso", "pianista", "piha", "pijavice", "pikle", "piknik", "pilina", "pilnost", "pilulka", "pinzeta", "pipeta", "pisatel", "pistole", "pitevna", "pivnice", "pivovar", "placenta", "plakat", "plamen", "planeta", "plastika", "platit", "plavidlo", "plaz", "plech", "plemeno", "plenta", "ples", "pletivo", "plevel", "plivat", "plnit", "plno", "plocha", "plodina", "plomba", "plout", "pluk", "plyn", "pobavit", "pobyt", "pochod", "pocit", "poctivec", "podat", "podcenit", "podepsat", "podhled", "podivit", "podklad", "podmanit", "podnik", "podoba", "podpora", "podraz", "podstata", "podvod", "podzim", "poezie", "pohanka", "pohnutka", "pohovor", "pohroma", "pohyb", "pointa", "pojistka", "pojmout", "pokazit", "pokles", "pokoj", "pokrok", "pokuta", "pokyn", "poledne", "polibek", "polknout", "poloha", "polynom", "pomalu", "pominout", "pomlka", "pomoc", "pomsta", "pomyslet", "ponechat", "ponorka", "ponurost", "popadat", "popel", "popisek", "poplach", "poprosit", "popsat", "popud", "poradce", "porce", "porod", "porucha", "poryv", "posadit", "posed", "posila", "poskok", "poslanec", "posoudit", "pospolu", "postava", "posudek", "posyp", "potah", "potkan", "potlesk", "potomek", "potrava", "potupa", "potvora", "poukaz", "pouto", "pouzdro", "povaha", "povidla", "povlak", "povoz", "povrch", "povstat", "povyk", "povzdech", "pozdrav", "pozemek", "poznatek", "pozor", "pozvat", "pracovat", "prahory", "praktika", "prales", "praotec", "praporek", "prase", "pravda", "princip", "prkno", "probudit", "procento", "prodej", "profese", "prohra", "projekt", "prolomit", "promile", "pronikat", "propad", "prorok", "prosba", "proton", "proutek", "provaz", "prskavka", "prsten", "prudkost", "prut", "prvek", "prvohory", "psanec", "psovod", "pstruh", "ptactvo", "puberta", "puch", "pudl", "pukavec", "puklina", "pukrle", "pult", "pumpa", "punc", "pupen", "pusa", "pusinka", "pustina", "putovat", "putyka", "pyramida", "pysk", "pytel", "racek", "rachot", "radiace", "radnice", "radon", "raft", "ragby", "raketa", "rakovina", "rameno", "rampouch", "rande", "rarach", "rarita", "rasovna", "rastr", "ratolest", "razance", "razidlo", "reagovat", "reakce", "recept", "redaktor", "referent", "reflex", "rejnok", "reklama", "rekord", "rekrut", "rektor", "reputace", "revize", "revma", "revolver", "rezerva", "riskovat", "riziko", "robotika", "rodokmen", "rohovka", "rokle", "rokoko", "romaneto", "ropovod", "ropucha", "rorejs", "rosol", "rostlina", "rotmistr", "rotoped", "rotunda", "roubenka", "roucho", "roup", "roura", "rovina", "rovnice", "rozbor", "rozchod", "rozdat", "rozeznat", "rozhodce", "rozinka", "rozjezd", "rozkaz", "rozloha", "rozmar", "rozpad", "rozruch", "rozsah", "roztok", "rozum", "rozvod", "rubrika", "ruchadlo", "rukavice", "rukopis", "ryba", "rybolov", "rychlost", "rydlo", "rypadlo", "rytina", "ryzost", "sadista", "sahat", "sako", "samec", "samizdat", "samota", "sanitka", "sardinka", "sasanka", "satelit", "sazba", "sazenice", "sbor", "schovat", "sebranka", "secese", "sedadlo", "sediment", "sedlo", "sehnat", "sejmout", "sekera", "sekta", "sekunda", "sekvoje", "semeno", "seno", "servis", "sesadit", "seshora", "seskok", "seslat", "sestra", "sesuv", "sesypat", "setba", "setina", "setkat", "setnout", "setrvat", "sever", "seznam", "shoda", "shrnout", "sifon", "silnice", "sirka", "sirotek", "sirup", "situace", "skafandr", "skalisko", "skanzen", "skaut", "skeptik", "skica", "skladba", "sklenice", "sklo", "skluz", "skoba", "skokan", "skoro", "skripta", "skrz", "skupina", "skvost", "skvrna", "slabika", "sladidlo", "slanina", "slast", "slavnost", "sledovat", "slepec", "sleva", "slezina", "slib", "slina", "sliznice", "slon", "sloupek", "slovo", "sluch", "sluha", "slunce", "slupka", "slza", "smaragd", "smetana", "smilstvo", "smlouva", "smog", "smrad", "smrk", "smrtka", "smutek", "smysl", "snad", "snaha", "snob", "sobota", "socha", "sodovka", "sokol", "sopka", "sotva", "souboj", "soucit", "soudce", "souhlas", "soulad", "soumrak", "souprava", "soused", "soutok", "souviset", "spalovna", "spasitel", "spis", "splav", "spodek", "spojenec", "spolu", "sponzor", "spornost", "spousta", "sprcha", "spustit", "sranda", "sraz", "srdce", "srna", "srnec", "srovnat", "srpen", "srst", "srub", "stanice", "starosta", "statika", "stavba", "stehno", "stezka", "stodola", "stolek", "stopa", "storno", "stoupat", "strach", "stres", "strhnout", "strom", "struna", "studna", "stupnice", "stvol", "styk", "subjekt", "subtropy", "suchar", "sudost", "sukno", "sundat", "sunout", "surikata", "surovina", "svah", "svalstvo", "svetr", "svatba", "svazek", "svisle", "svitek", "svoboda", "svodidlo", "svorka", "svrab", "sykavka", "sykot", "synek", "synovec", "sypat", "sypkost", "syrovost", "sysel", "sytost", "tabletka", "tabule", "tahoun", "tajemno", "tajfun", "tajga", "tajit", "tajnost", "taktika", "tamhle", "tampon", "tancovat", "tanec", "tanker", "tapeta", "tavenina", "tazatel", "technika", "tehdy", "tekutina", "telefon", "temnota", "tendence", "tenista", "tenor", "teplota", "tepna", "teprve", "terapie", "termoska", "textil", "ticho", "tiskopis", "titulek", "tkadlec", "tkanina", "tlapka", "tleskat", "tlukot", "tlupa", "tmel", "toaleta", "topinka", "topol", "torzo", "touha", "toulec", "tradice", "traktor", "tramp", "trasa", "traverza", "trefit", "trest", "trezor", "trhavina", "trhlina", "trochu", "trojice", "troska", "trouba", "trpce", "trpitel", "trpkost", "trubec", "truchlit", "truhlice", "trus", "trvat", "tudy", "tuhnout", "tuhost", "tundra", "turista", "turnaj", "tuzemsko", "tvaroh", "tvorba", "tvrdost", "tvrz", "tygr", "tykev", "ubohost", "uboze", "ubrat", "ubrousek", "ubrus", "ubytovna", "ucho", "uctivost", "udivit", "uhradit", "ujednat", "ujistit", "ujmout", "ukazatel", "uklidnit", "uklonit", "ukotvit", "ukrojit", "ulice", "ulita", "ulovit", "umyvadlo", "unavit", "uniforma", "uniknout", "upadnout", "uplatnit", "uplynout", "upoutat", "upravit", "uran", "urazit", "usednout", "usilovat", "usmrtit", "usnadnit", "usnout", "usoudit", "ustlat", "ustrnout", "utahovat", "utkat", "utlumit", "utonout", "utopenec", "utrousit", "uvalit", "uvolnit", "uvozovka", "uzdravit", "uzel", "uzenina", "uzlina", "uznat", "vagon", "valcha", "valoun", "vana", "vandal", "vanilka", "varan", "varhany", "varovat", "vcelku", "vchod", "vdova", "vedro", "vegetace", "vejce", "velbloud", "veletrh", "velitel", "velmoc", "velryba", "venkov", "veranda", "verze", "veselka", "veskrze", "vesnice", "vespodu", "vesta", "veterina", "veverka", "vibrace", "vichr", "videohra", "vidina", "vidle", "vila", "vinice", "viset", "vitalita", "vize", "vizitka", "vjezd", "vklad", "vkus", "vlajka", "vlak", "vlasec", "vlevo", "vlhkost", "vliv", "vlnovka", "vloupat", "vnucovat", "vnuk", "voda", "vodivost", "vodoznak", "vodstvo", "vojensky", "vojna", "vojsko", "volant", "volba", "volit", "volno", "voskovka", "vozidlo", "vozovna", "vpravo", "vrabec", "vracet", "vrah", "vrata", "vrba", "vrcholek", "vrhat", "vrstva", "vrtule", "vsadit", "vstoupit", "vstup", "vtip", "vybavit", "vybrat", "vychovat", "vydat", "vydra", "vyfotit", "vyhledat", "vyhnout", "vyhodit", "vyhradit", "vyhubit", "vyjasnit", "vyjet", "vyjmout", "vyklopit", "vykonat", "vylekat", "vymazat", "vymezit", "vymizet", "vymyslet", "vynechat", "vynikat", "vynutit", "vypadat", "vyplatit", "vypravit", "vypustit", "vyrazit", "vyrovnat", "vyrvat", "vyslovit", "vysoko", "vystavit", "vysunout", "vysypat", "vytasit", "vytesat", "vytratit", "vyvinout", "vyvolat", "vyvrhel", "vyzdobit", "vyznat", "vzadu", "vzbudit", "vzchopit", "vzdor", "vzduch", "vzdychat", "vzestup", "vzhledem", "vzkaz", "vzlykat", "vznik", "vzorek", "vzpoura", "vztah", "vztek", "xylofon", "zabrat", "zabydlet", "zachovat", "zadarmo", "zadusit", "zafoukat", "zahltit", "zahodit", "zahrada", "zahynout", "zajatec", "zajet", "zajistit", "zaklepat", "zakoupit", "zalepit", "zamezit", "zamotat", "zamyslet", "zanechat", "zanikat", "zaplatit", "zapojit", "zapsat", "zarazit", "zastavit", "zasunout", "zatajit", "zatemnit", "zatknout", "zaujmout", "zavalit", "zavelet", "zavinit", "zavolat", "zavrtat", "zazvonit", "zbavit", "zbrusu", "zbudovat", "zbytek", "zdaleka", "zdarma", "zdatnost", "zdivo", "zdobit", "zdroj", "zdvih", "zdymadlo", "zelenina", "zeman", "zemina", "zeptat", "zezadu", "zezdola", "zhatit", "zhltnout", "zhluboka", "zhotovit", "zhruba", "zima", "zimnice", "zjemnit", "zklamat", "zkoumat", "zkratka", "zkumavka", "zlato", "zlehka", "zloba", "zlom", "zlost", "zlozvyk", "zmapovat", "zmar", "zmatek", "zmije", "zmizet", "zmocnit", "zmodrat", "zmrzlina", "zmutovat", "znak", "znalost", "znamenat", "znovu", "zobrazit", "zotavit", "zoubek", "zoufale", "zplodit", "zpomalit", "zprava", "zprostit", "zprudka", "zprvu", "zrada", "zranit", "zrcadlo", "zrnitost", "zrno", "zrovna", "zrychlit", "zrzavost", "zticha", "ztratit", "zubovina", "zubr", "zvednout", "zvenku", "zvesela", "zvon", "zvrat", "zvukovod", "zvyk"], Kb = ["\u7684", "\u4E00", "\u662F", "\u5728", "\u4E0D", "\u4E86", "\u6709", "\u548C", "\u4EBA", "\u8FD9", "\u4E2D", "\u5927", "\u4E3A", "\u4E0A", "\u4E2A", "\u56FD", "\u6211", "\u4EE5", "\u8981", "\u4ED6", "\u65F6", "\u6765", "\u7528", "\u4EEC", "\u751F", "\u5230", "\u4F5C", "\u5730", "\u4E8E", "\u51FA", "\u5C31", "\u5206", "\u5BF9", "\u6210", "\u4F1A", "\u53EF", "\u4E3B", "\u53D1", "\u5E74", "\u52A8", "\u540C", "\u5DE5", "\u4E5F", "\u80FD", "\u4E0B", "\u8FC7", "\u5B50", "\u8BF4", "\u4EA7", "\u79CD", "\u9762", "\u800C", "\u65B9", "\u540E", "\u591A", "\u5B9A", "\u884C", "\u5B66", "\u6CD5", "\u6240", "\u6C11", "\u5F97", "\u7ECF", "\u5341", "\u4E09", "\u4E4B", "\u8FDB", "\u7740", "\u7B49", "\u90E8", "\u5EA6", "\u5BB6", "\u7535", "\u529B", "\u91CC", "\u5982", "\u6C34", "\u5316", "\u9AD8", "\u81EA", "\u4E8C", "\u7406", "\u8D77", "\u5C0F", "\u7269", "\u73B0", "\u5B9E", "\u52A0", "\u91CF", "\u90FD", "\u4E24", "\u4F53", "\u5236", "\u673A", "\u5F53", "\u4F7F", "\u70B9", "\u4ECE", "\u4E1A", "\u672C", "\u53BB", "\u628A", "\u6027", "\u597D", "\u5E94", "\u5F00", "\u5B83", "\u5408", "\u8FD8", "\u56E0", "\u7531", "\u5176", "\u4E9B", "\u7136", "\u524D", "\u5916", "\u5929", "\u653F", "\u56DB", "\u65E5", "\u90A3", "\u793E", "\u4E49", "\u4E8B", "\u5E73", "\u5F62", "\u76F8", "\u5168", "\u8868", "\u95F4", "\u6837", "\u4E0E", "\u5173", "\u5404", "\u91CD", "\u65B0", "\u7EBF", "\u5185", "\u6570", "\u6B63", "\u5FC3", "\u53CD", "\u4F60", "\u660E", "\u770B", "\u539F", "\u53C8", "\u4E48", "\u5229", "\u6BD4", "\u6216", "\u4F46", "\u8D28", "\u6C14", "\u7B2C", "\u5411", "\u9053", "\u547D", "\u6B64", "\u53D8", "\u6761", "\u53EA", "\u6CA1", "\u7ED3", "\u89E3", "\u95EE", "\u610F", "\u5EFA", "\u6708", "\u516C", "\u65E0", "\u7CFB", "\u519B", "\u5F88", "\u60C5", "\u8005", "\u6700", "\u7ACB", "\u4EE3", "\u60F3", "\u5DF2", "\u901A", "\u5E76", "\u63D0", "\u76F4", "\u9898", "\u515A", "\u7A0B", "\u5C55", "\u4E94", "\u679C", "\u6599", "\u8C61", "\u5458", "\u9769", "\u4F4D", "\u5165", "\u5E38", "\u6587", "\u603B", "\u6B21", "\u54C1", "\u5F0F", "\u6D3B", "\u8BBE", "\u53CA", "\u7BA1", "\u7279", "\u4EF6", "\u957F", "\u6C42", "\u8001", "\u5934", "\u57FA", "\u8D44", "\u8FB9", "\u6D41", "\u8DEF", "\u7EA7", "\u5C11", "\u56FE", "\u5C71", "\u7EDF", "\u63A5", "\u77E5", "\u8F83", "\u5C06", "\u7EC4", "\u89C1", "\u8BA1", "\u522B", "\u5979", "\u624B", "\u89D2", "\u671F", "\u6839", "\u8BBA", "\u8FD0", "\u519C", "\u6307", "\u51E0", "\u4E5D", "\u533A", "\u5F3A", "\u653E", "\u51B3", "\u897F", "\u88AB", "\u5E72", "\u505A", "\u5FC5", "\u6218", "\u5148", "\u56DE", "\u5219", "\u4EFB", "\u53D6", "\u636E", "\u5904", "\u961F", "\u5357", "\u7ED9", "\u8272", "\u5149", "\u95E8", "\u5373", "\u4FDD", "\u6CBB", "\u5317", "\u9020", "\u767E", "\u89C4", "\u70ED", "\u9886", "\u4E03", "\u6D77", "\u53E3", "\u4E1C", "\u5BFC", "\u5668", "\u538B", "\u5FD7", "\u4E16", "\u91D1", "\u589E", "\u4E89", "\u6D4E", "\u9636", "\u6CB9", "\u601D", "\u672F", "\u6781", "\u4EA4", "\u53D7", "\u8054", "\u4EC0", "\u8BA4", "\u516D", "\u5171", "\u6743", "\u6536", "\u8BC1", "\u6539", "\u6E05", "\u7F8E", "\u518D", "\u91C7", "\u8F6C", "\u66F4", "\u5355", "\u98CE", "\u5207", "\u6253", "\u767D", "\u6559", "\u901F", "\u82B1", "\u5E26", "\u5B89", "\u573A", "\u8EAB", "\u8F66", "\u4F8B", "\u771F", "\u52A1", "\u5177", "\u4E07", "\u6BCF", "\u76EE", "\u81F3", "\u8FBE", "\u8D70", "\u79EF", "\u793A", "\u8BAE", "\u58F0", "\u62A5", "\u6597", "\u5B8C", "\u7C7B", "\u516B", "\u79BB", "\u534E", "\u540D", "\u786E", "\u624D", "\u79D1", "\u5F20", "\u4FE1", "\u9A6C", "\u8282", "\u8BDD", "\u7C73", "\u6574", "\u7A7A", "\u5143", "\u51B5", "\u4ECA", "\u96C6", "\u6E29", "\u4F20", "\u571F", "\u8BB8", "\u6B65", "\u7FA4", "\u5E7F", "\u77F3", "\u8BB0", "\u9700", "\u6BB5", "\u7814", "\u754C", "\u62C9", "\u6797", "\u5F8B", "\u53EB", "\u4E14", "\u7A76", "\u89C2", "\u8D8A", "\u7EC7", "\u88C5", "\u5F71", "\u7B97", "\u4F4E", "\u6301", "\u97F3", "\u4F17", "\u4E66", "\u5E03", "\u590D", "\u5BB9", "\u513F", "\u987B", "\u9645", "\u5546", "\u975E", "\u9A8C", "\u8FDE", "\u65AD", "\u6DF1", "\u96BE", "\u8FD1", "\u77FF", "\u5343", "\u5468", "\u59D4", "\u7D20", "\u6280", "\u5907", "\u534A", "\u529E", "\u9752", "\u7701", "\u5217", "\u4E60", "\u54CD", "\u7EA6", "\u652F", "\u822C", "\u53F2", "\u611F", "\u52B3", "\u4FBF", "\u56E2", "\u5F80", "\u9178", "\u5386", "\u5E02", "\u514B", "\u4F55", "\u9664", "\u6D88", "\u6784", "\u5E9C", "\u79F0", "\u592A", "\u51C6", "\u7CBE", "\u503C", "\u53F7", "\u7387", "\u65CF", "\u7EF4", "\u5212", "\u9009", "\u6807", "\u5199", "\u5B58", "\u5019", "\u6BDB", "\u4EB2", "\u5FEB", "\u6548", "\u65AF", "\u9662", "\u67E5", "\u6C5F", "\u578B", "\u773C", "\u738B", "\u6309", "\u683C", "\u517B", "\u6613", "\u7F6E", "\u6D3E", "\u5C42", "\u7247", "\u59CB", "\u5374", "\u4E13", "\u72B6", "\u80B2", "\u5382", "\u4EAC", "\u8BC6", "\u9002", "\u5C5E", "\u5706", "\u5305", "\u706B", "\u4F4F", "\u8C03", "\u6EE1", "\u53BF", "\u5C40", "\u7167", "\u53C2", "\u7EA2", "\u7EC6", "\u5F15", "\u542C", "\u8BE5", "\u94C1", "\u4EF7", "\u4E25", "\u9996", "\u5E95", "\u6DB2", "\u5B98", "\u5FB7", "\u968F", "\u75C5", "\u82CF", "\u5931", "\u5C14", "\u6B7B", "\u8BB2", "\u914D", "\u5973", "\u9EC4", "\u63A8", "\u663E", "\u8C08", "\u7F6A", "\u795E", "\u827A", "\u5462", "\u5E2D", "\u542B", "\u4F01", "\u671B", "\u5BC6", "\u6279", "\u8425", "\u9879", "\u9632", "\u4E3E", "\u7403", "\u82F1", "\u6C27", "\u52BF", "\u544A", "\u674E", "\u53F0", "\u843D", "\u6728", "\u5E2E", "\u8F6E", "\u7834", "\u4E9A", "\u5E08", "\u56F4", "\u6CE8", "\u8FDC", "\u5B57", "\u6750", "\u6392", "\u4F9B", "\u6CB3", "\u6001", "\u5C01", "\u53E6", "\u65BD", "\u51CF", "\u6811", "\u6EB6", "\u600E", "\u6B62", "\u6848", "\u8A00", "\u58EB", "\u5747", "\u6B66", "\u56FA", "\u53F6", "\u9C7C", "\u6CE2", "\u89C6", "\u4EC5", "\u8D39", "\u7D27", "\u7231", "\u5DE6", "\u7AE0", "\u65E9", "\u671D", "\u5BB3", "\u7EED", "\u8F7B", "\u670D", "\u8BD5", "\u98DF", "\u5145", "\u5175", "\u6E90", "\u5224", "\u62A4", "\u53F8", "\u8DB3", "\u67D0", "\u7EC3", "\u5DEE", "\u81F4", "\u677F", "\u7530", "\u964D", "\u9ED1", "\u72AF", "\u8D1F", "\u51FB", "\u8303", "\u7EE7", "\u5174", "\u4F3C", "\u4F59", "\u575A", "\u66F2", "\u8F93", "\u4FEE", "\u6545", "\u57CE", "\u592B", "\u591F", "\u9001", "\u7B14", "\u8239", "\u5360", "\u53F3", "\u8D22", "\u5403", "\u5BCC", "\u6625", "\u804C", "\u89C9", "\u6C49", "\u753B", "\u529F", "\u5DF4", "\u8DDF", "\u867D", "\u6742", "\u98DE", "\u68C0", "\u5438", "\u52A9", "\u5347", "\u9633", "\u4E92", "\u521D", "\u521B", "\u6297", "\u8003", "\u6295", "\u574F", "\u7B56", "\u53E4", "\u5F84", "\u6362", "\u672A", "\u8DD1", "\u7559", "\u94A2", "\u66FE", "\u7AEF", "\u8D23", "\u7AD9", "\u7B80", "\u8FF0", "\u94B1", "\u526F", "\u5C3D", "\u5E1D", "\u5C04", "\u8349", "\u51B2", "\u627F", "\u72EC", "\u4EE4", "\u9650", "\u963F", "\u5BA3", "\u73AF", "\u53CC", "\u8BF7", "\u8D85", "\u5FAE", "\u8BA9", "\u63A7", "\u5DDE", "\u826F", "\u8F74", "\u627E", "\u5426", "\u7EAA", "\u76CA", "\u4F9D", "\u4F18", "\u9876", "\u7840", "\u8F7D", "\u5012", "\u623F", "\u7A81", "\u5750", "\u7C89", "\u654C", "\u7565", "\u5BA2", "\u8881", "\u51B7", "\u80DC", "\u7EDD", "\u6790", "\u5757", "\u5242", "\u6D4B", "\u4E1D", "\u534F", "\u8BC9", "\u5FF5", "\u9648", "\u4ECD", "\u7F57", "\u76D0", "\u53CB", "\u6D0B", "\u9519", "\u82E6", "\u591C", "\u5211", "\u79FB", "\u9891", "\u9010", "\u9760", "\u6DF7", "\u6BCD", "\u77ED", "\u76AE", "\u7EC8", "\u805A", "\u6C7D", "\u6751", "\u4E91", "\u54EA", "\u65E2", "\u8DDD", "\u536B", "\u505C", "\u70C8", "\u592E", "\u5BDF", "\u70E7", "\u8FC5", "\u5883", "\u82E5", "\u5370", "\u6D32", "\u523B", "\u62EC", "\u6FC0", "\u5B54", "\u641E", "\u751A", "\u5BA4", "\u5F85", "\u6838", "\u6821", "\u6563", "\u4FB5", "\u5427", "\u7532", "\u6E38", "\u4E45", "\u83DC", "\u5473", "\u65E7", "\u6A21", "\u6E56", "\u8D27", "\u635F", "\u9884", "\u963B", "\u6BEB", "\u666E", "\u7A33", "\u4E59", "\u5988", "\u690D", "\u606F", "\u6269", "\u94F6", "\u8BED", "\u6325", "\u9152", "\u5B88", "\u62FF", "\u5E8F", "\u7EB8", "\u533B", "\u7F3A", "\u96E8", "\u5417", "\u9488", "\u5218", "\u554A", "\u6025", "\u5531", "\u8BEF", "\u8BAD", "\u613F", "\u5BA1", "\u9644", "\u83B7", "\u8336", "\u9C9C", "\u7CAE", "\u65A4", "\u5B69", "\u8131", "\u786B", "\u80A5", "\u5584", "\u9F99", "\u6F14", "\u7236", "\u6E10", "\u8840", "\u6B22", "\u68B0", "\u638C", "\u6B4C", "\u6C99", "\u521A", "\u653B", "\u8C13", "\u76FE", "\u8BA8", "\u665A", "\u7C92", "\u4E71", "\u71C3", "\u77DB", "\u4E4E", "\u6740", "\u836F", "\u5B81", "\u9C81", "\u8D35", "\u949F", "\u7164", "\u8BFB", "\u73ED", "\u4F2F", "\u9999", "\u4ECB", "\u8FEB", "\u53E5", "\u4E30", "\u57F9", "\u63E1", "\u5170", "\u62C5", "\u5F26", "\u86CB", "\u6C89", "\u5047", "\u7A7F", "\u6267", "\u7B54", "\u4E50", "\u8C01", "\u987A", "\u70DF", "\u7F29", "\u5F81", "\u8138", "\u559C", "\u677E", "\u811A", "\u56F0", "\u5F02", "\u514D", "\u80CC", "\u661F", "\u798F", "\u4E70", "\u67D3", "\u4E95", "\u6982", "\u6162", "\u6015", "\u78C1", "\u500D", "\u7956", "\u7687", "\u4FC3", "\u9759", "\u8865", "\u8BC4", "\u7FFB", "\u8089", "\u8DF5", "\u5C3C", "\u8863", "\u5BBD", "\u626C", "\u68C9", "\u5E0C", "\u4F24", "\u64CD", "\u5782", "\u79CB", "\u5B9C", "\u6C22", "\u5957", "\u7763", "\u632F", "\u67B6", "\u4EAE", "\u672B", "\u5BAA", "\u5E86", "\u7F16", "\u725B", "\u89E6", "\u6620", "\u96F7", "\u9500", "\u8BD7", "\u5EA7", "\u5C45", "\u6293", "\u88C2", "\u80DE", "\u547C", "\u5A18", "\u666F", "\u5A01", "\u7EFF", "\u6676", "\u539A", "\u76DF", "\u8861", "\u9E21", "\u5B59", "\u5EF6", "\u5371", "\u80F6", "\u5C4B", "\u4E61", "\u4E34", "\u9646", "\u987E", "\u6389", "\u5440", "\u706F", "\u5C81", "\u63AA", "\u675F", "\u8010", "\u5267", "\u7389", "\u8D75", "\u8DF3", "\u54E5", "\u5B63", "\u8BFE", "\u51EF", "\u80E1", "\u989D", "\u6B3E", "\u7ECD", "\u5377", "\u9F50", "\u4F1F", "\u84B8", "\u6B96", "\u6C38", "\u5B97", "\u82D7", "\u5DDD", "\u7089", "\u5CA9", "\u5F31", "\u96F6", "\u6768", "\u594F", "\u6CBF", "\u9732", "\u6746", "\u63A2", "\u6ED1", "\u9547", "\u996D", "\u6D53", "\u822A", "\u6000", "\u8D76", "\u5E93", "\u593A", "\u4F0A", "\u7075", "\u7A0E", "\u9014", "\u706D", "\u8D5B", "\u5F52", "\u53EC", "\u9F13", "\u64AD", "\u76D8", "\u88C1", "\u9669", "\u5EB7", "\u552F", "\u5F55", "\u83CC", "\u7EAF", "\u501F", "\u7CD6", "\u76D6", "\u6A2A", "\u7B26", "\u79C1", "\u52AA", "\u5802", "\u57DF", "\u67AA", "\u6DA6", "\u5E45", "\u54C8", "\u7ADF", "\u719F", "\u866B", "\u6CFD", "\u8111", "\u58E4", "\u78B3", "\u6B27", "\u904D", "\u4FA7", "\u5BE8", "\u6562", "\u5F7B", "\u8651", "\u659C", "\u8584", "\u5EAD", "\u7EB3", "\u5F39", "\u9972", "\u4F38", "\u6298", "\u9EA6", "\u6E7F", "\u6697", "\u8377", "\u74E6", "\u585E", "\u5E8A", "\u7B51", "\u6076", "\u6237", "\u8BBF", "\u5854", "\u5947", "\u900F", "\u6881", "\u5200", "\u65CB", "\u8FF9", "\u5361", "\u6C2F", "\u9047", "\u4EFD", "\u6BD2", "\u6CE5", "\u9000", "\u6D17", "\u6446", "\u7070", "\u5F69", "\u5356", "\u8017", "\u590F", "\u62E9", "\u5FD9", "\u94DC", "\u732E", "\u786C", "\u4E88", "\u7E41", "\u5708", "\u96EA", "\u51FD", "\u4EA6", "\u62BD", "\u7BC7", "\u9635", "\u9634", "\u4E01", "\u5C3A", "\u8FFD", "\u5806", "\u96C4", "\u8FCE", "\u6CDB", "\u7238", "\u697C", "\u907F", "\u8C0B", "\u5428", "\u91CE", "\u732A", "\u65D7", "\u7D2F", "\u504F", "\u5178", "\u9986", "\u7D22", "\u79E6", "\u8102", "\u6F6E", "\u7237", "\u8C46", "\u5FFD", "\u6258", "\u60CA", "\u5851", "\u9057", "\u6108", "\u6731", "\u66FF", "\u7EA4", "\u7C97", "\u503E", "\u5C1A", "\u75DB", "\u695A", "\u8C22", "\u594B", "\u8D2D", "\u78E8", "\u541B", "\u6C60", "\u65C1", "\u788E", "\u9AA8", "\u76D1", "\u6355", "\u5F1F", "\u66B4", "\u5272", "\u8D2F", "\u6B8A", "\u91CA", "\u8BCD", "\u4EA1", "\u58C1", "\u987F", "\u5B9D", "\u5348", "\u5C18", "\u95FB", "\u63ED", "\u70AE", "\u6B8B", "\u51AC", "\u6865", "\u5987", "\u8B66", "\u7EFC", "\u62DB", "\u5434", "\u4ED8", "\u6D6E", "\u906D", "\u5F90", "\u60A8", "\u6447", "\u8C37", "\u8D5E", "\u7BB1", "\u9694", "\u8BA2", "\u7537", "\u5439", "\u56ED", "\u7EB7", "\u5510", "\u8D25", "\u5B8B", "\u73BB", "\u5DE8", "\u8015", "\u5766", "\u8363", "\u95ED", "\u6E7E", "\u952E", "\u51E1", "\u9A7B", "\u9505", "\u6551", "\u6069", "\u5265", "\u51DD", "\u78B1", "\u9F7F", "\u622A", "\u70BC", "\u9EBB", "\u7EBA", "\u7981", "\u5E9F", "\u76DB", "\u7248", "\u7F13", "\u51C0", "\u775B", "\u660C", "\u5A5A", "\u6D89", "\u7B52", "\u5634", "\u63D2", "\u5CB8", "\u6717", "\u5E84", "\u8857", "\u85CF", "\u59D1", "\u8D38", "\u8150", "\u5974", "\u5566", "\u60EF", "\u4E58", "\u4F19", "\u6062", "\u5300", "\u7EB1", "\u624E", "\u8FA9", "\u8033", "\u5F6A", "\u81E3", "\u4EBF", "\u7483", "\u62B5", "\u8109", "\u79C0", "\u8428", "\u4FC4", "\u7F51", "\u821E", "\u5E97", "\u55B7", "\u7EB5", "\u5BF8", "\u6C57", "\u6302", "\u6D2A", "\u8D3A", "\u95EA", "\u67EC", "\u7206", "\u70EF", "\u6D25", "\u7A3B", "\u5899", "\u8F6F", "\u52C7", "\u50CF", "\u6EDA", "\u5398", "\u8499", "\u82B3", "\u80AF", "\u5761", "\u67F1", "\u8361", "\u817F", "\u4EEA", "\u65C5", "\u5C3E", "\u8F67", "\u51B0", "\u8D21", "\u767B", "\u9ECE", "\u524A", "\u94BB", "\u52D2", "\u9003", "\u969C", "\u6C28", "\u90ED", "\u5CF0", "\u5E01", "\u6E2F", "\u4F0F", "\u8F68", "\u4EA9", "\u6BD5", "\u64E6", "\u83AB", "\u523A", "\u6D6A", "\u79D8", "\u63F4", "\u682A", "\u5065", "\u552E", "\u80A1", "\u5C9B", "\u7518", "\u6CE1", "\u7761", "\u7AE5", "\u94F8", "\u6C64", "\u9600", "\u4F11", "\u6C47", "\u820D", "\u7267", "\u7ED5", "\u70B8", "\u54F2", "\u78F7", "\u7EE9", "\u670B", "\u6DE1", "\u5C16", "\u542F", "\u9677", "\u67F4", "\u5448", "\u5F92", "\u989C", "\u6CEA", "\u7A0D", "\u5FD8", "\u6CF5", "\u84DD", "\u62D6", "\u6D1E", "\u6388", "\u955C", "\u8F9B", "\u58EE", "\u950B", "\u8D2B", "\u865A", "\u5F2F", "\u6469", "\u6CF0", "\u5E7C", "\u5EF7", "\u5C0A", "\u7A97", "\u7EB2", "\u5F04", "\u96B6", "\u7591", "\u6C0F", "\u5BAB", "\u59D0", "\u9707", "\u745E", "\u602A", "\u5C24", "\u7434", "\u5FAA", "\u63CF", "\u819C", "\u8FDD", "\u5939", "\u8170", "\u7F18", "\u73E0", "\u7A77", "\u68EE", "\u679D", "\u7AF9", "\u6C9F", "\u50AC", "\u7EF3", "\u5FC6", "\u90A6", "\u5269", "\u5E78", "\u6D46", "\u680F", "\u62E5", "\u7259", "\u8D2E", "\u793C", "\u6EE4", "\u94A0", "\u7EB9", "\u7F62", "\u62CD", "\u54B1", "\u558A", "\u8896", "\u57C3", "\u52E4", "\u7F5A", "\u7126", "\u6F5C", "\u4F0D", "\u58A8", "\u6B32", "\u7F1D", "\u59D3", "\u520A", "\u9971", "\u4EFF", "\u5956", "\u94DD", "\u9B3C", "\u4E3D", "\u8DE8", "\u9ED8", "\u6316", "\u94FE", "\u626B", "\u559D", "\u888B", "\u70AD", "\u6C61", "\u5E55", "\u8BF8", "\u5F27", "\u52B1", "\u6885", "\u5976", "\u6D01", "\u707E", "\u821F", "\u9274", "\u82EF", "\u8BBC", "\u62B1", "\u6BC1", "\u61C2", "\u5BD2", "\u667A", "\u57D4", "\u5BC4", "\u5C4A", "\u8DC3", "\u6E21", "\u6311", "\u4E39", "\u8270", "\u8D1D", "\u78B0", "\u62D4", "\u7239", "\u6234", "\u7801", "\u68A6", "\u82BD", "\u7194", "\u8D64", "\u6E14", "\u54ED", "\u656C", "\u9897", "\u5954", "\u94C5", "\u4EF2", "\u864E", "\u7A00", "\u59B9", "\u4E4F", "\u73CD", "\u7533", "\u684C", "\u9075", "\u5141", "\u9686", "\u87BA", "\u4ED3", "\u9B4F", "\u9510", "\u6653", "\u6C2E", "\u517C", "\u9690", "\u788D", "\u8D6B", "\u62E8", "\u5FE0", "\u8083", "\u7F38", "\u7275", "\u62A2", "\u535A", "\u5DE7", "\u58F3", "\u5144", "\u675C", "\u8BAF", "\u8BDA", "\u78A7", "\u7965", "\u67EF", "\u9875", "\u5DE1", "\u77E9", "\u60B2", "\u704C", "\u9F84", "\u4F26", "\u7968", "\u5BFB", "\u6842", "\u94FA", "\u5723", "\u6050", "\u6070", "\u90D1", "\u8DA3", "\u62AC", "\u8352", "\u817E", "\u8D34", "\u67D4", "\u6EF4", "\u731B", "\u9614", "\u8F86", "\u59BB", "\u586B", "\u64A4", "\u50A8", "\u7B7E", "\u95F9", "\u6270", "\u7D2B", "\u7802", "\u9012", "\u620F", "\u540A", "\u9676", "\u4F10", "\u5582", "\u7597", "\u74F6", "\u5A46", "\u629A", "\u81C2", "\u6478", "\u5FCD", "\u867E", "\u8721", "\u90BB", "\u80F8", "\u5DE9", "\u6324", "\u5076", "\u5F03", "\u69FD", "\u52B2", "\u4E73", "\u9093", "\u5409", "\u4EC1", "\u70C2", "\u7816", "\u79DF", "\u4E4C", "\u8230", "\u4F34", "\u74DC", "\u6D45", "\u4E19", "\u6682", "\u71E5", "\u6A61", "\u67F3", "\u8FF7", "\u6696", "\u724C", "\u79E7", "\u80C6", "\u8BE6", "\u7C27", "\u8E0F", "\u74F7", "\u8C31", "\u5446", "\u5BBE", "\u7CCA", "\u6D1B", "\u8F89", "\u6124", "\u7ADE", "\u9699", "\u6012", "\u7C98", "\u4E43", "\u7EEA", "\u80A9", "\u7C4D", "\u654F", "\u6D82", "\u7199", "\u7686", "\u4FA6", "\u60AC", "\u6398", "\u4EAB", "\u7EA0", "\u9192", "\u72C2", "\u9501", "\u6DC0", "\u6068", "\u7272", "\u9738", "\u722C", "\u8D4F", "\u9006", "\u73A9", "\u9675", "\u795D", "\u79D2", "\u6D59", "\u8C8C", "\u5F79", "\u5F7C", "\u6089", "\u9E2D", "\u8D8B", "\u51E4", "\u6668", "\u755C", "\u8F88", "\u79E9", "\u5375", "\u7F72", "\u68AF", "\u708E", "\u6EE9", "\u68CB", "\u9A71", "\u7B5B", "\u5CE1", "\u5192", "\u5565", "\u5BFF", "\u8BD1", "\u6D78", "\u6CC9", "\u5E3D", "\u8FDF", "\u7845", "\u7586", "\u8D37", "\u6F0F", "\u7A3F", "\u51A0", "\u5AE9", "\u80C1", "\u82AF", "\u7262", "\u53DB", "\u8680", "\u5965", "\u9E23", "\u5CAD", "\u7F8A", "\u51ED", "\u4E32", "\u5858", "\u7ED8", "\u9175", "\u878D", "\u76C6", "\u9521", "\u5E99", "\u7B79", "\u51BB", "\u8F85", "\u6444", "\u88AD", "\u7B4B", "\u62D2", "\u50DA", "\u65F1", "\u94BE", "\u9E1F", "\u6F06", "\u6C88", "\u7709", "\u758F", "\u6DFB", "\u68D2", "\u7A57", "\u785D", "\u97E9", "\u903C", "\u626D", "\u4FA8", "\u51C9", "\u633A", "\u7897", "\u683D", "\u7092", "\u676F", "\u60A3", "\u998F", "\u529D", "\u8C6A", "\u8FBD", "\u52C3", "\u9E3F", "\u65E6", "\u540F", "\u62DC", "\u72D7", "\u57CB", "\u8F8A", "\u63A9", "\u996E", "\u642C", "\u9A82", "\u8F9E", "\u52FE", "\u6263", "\u4F30", "\u848B", "\u7ED2", "\u96FE", "\u4E08", "\u6735", "\u59C6", "\u62DF", "\u5B87", "\u8F91", "\u9655", "\u96D5", "\u507F", "\u84C4", "\u5D07", "\u526A", "\u5021", "\u5385", "\u54AC", "\u9A76", "\u85AF", "\u5237", "\u65A5", "\u756A", "\u8D4B", "\u5949", "\u4F5B", "\u6D47", "\u6F2B", "\u66FC", "\u6247", "\u9499", "\u6843", "\u6276", "\u4ED4", "\u8FD4", "\u4FD7", "\u4E8F", "\u8154", "\u978B", "\u68F1", "\u8986", "\u6846", "\u6084", "\u53D4", "\u649E", "\u9A97", "\u52D8", "\u65FA", "\u6CB8", "\u5B64", "\u5410", "\u5B5F", "\u6E20", "\u5C48", "\u75BE", "\u5999", "\u60DC", "\u4EF0", "\u72E0", "\u80C0", "\u8C10", "\u629B", "\u9709", "\u6851", "\u5C97", "\u561B", "\u8870", "\u76D7", "\u6E17", "\u810F", "\u8D56", "\u6D8C", "\u751C", "\u66F9", "\u9605", "\u808C", "\u54E9", "\u5389", "\u70C3", "\u7EAC", "\u6BC5", "\u6628", "\u4F2A", "\u75C7", "\u716E", "\u53F9", "\u9489", "\u642D", "\u830E", "\u7B3C", "\u9177", "\u5077", "\u5F13", "\u9525", "\u6052", "\u6770", "\u5751", "\u9F3B", "\u7FFC", "\u7EB6", "\u53D9", "\u72F1", "\u902E", "\u7F50", "\u7EDC", "\u68DA", "\u6291", "\u81A8", "\u852C", "\u5BFA", "\u9AA4", "\u7A46", "\u51B6", "\u67AF", "\u518C", "\u5C38", "\u51F8", "\u7EC5", "\u576F", "\u727A", "\u7130", "\u8F70", "\u6B23", "\u664B", "\u7626", "\u5FA1", "\u952D", "\u9526", "\u4E27", "\u65EC", "\u953B", "\u5784", "\u641C", "\u6251", "\u9080", "\u4EAD", "\u916F", "\u8FC8", "\u8212", "\u8106", "\u9176", "\u95F2", "\u5FE7", "\u915A", "\u987D", "\u7FBD", "\u6DA8", "\u5378", "\u4ED7", "\u966A", "\u8F9F", "\u60E9", "\u676D", "\u59DA", "\u809A", "\u6349", "\u98D8", "\u6F02", "\u6606", "\u6B3A", "\u543E", "\u90CE", "\u70F7", "\u6C41", "\u5475", "\u9970", "\u8427", "\u96C5", "\u90AE", "\u8FC1", "\u71D5", "\u6492", "\u59FB", "\u8D74", "\u5BB4", "\u70E6", "\u503A", "\u5E10", "\u6591", "\u94C3", "\u65E8", "\u9187", "\u8463", "\u997C", "\u96CF", "\u59FF", "\u62CC", "\u5085", "\u8179", "\u59A5", "\u63C9", "\u8D24", "\u62C6", "\u6B6A", "\u8461", "\u80FA", "\u4E22", "\u6D69", "\u5FBD", "\u6602", "\u57AB", "\u6321", "\u89C8", "\u8D2A", "\u6170", "\u7F34", "\u6C6A", "\u614C", "\u51AF", "\u8BFA", "\u59DC", "\u8C0A", "\u51F6", "\u52A3", "\u8BEC", "\u8000", "\u660F", "\u8EBA", "\u76C8", "\u9A91", "\u4E54", "\u6EAA", "\u4E1B", "\u5362", "\u62B9", "\u95F7", "\u54A8", "\u522E", "\u9A7E", "\u7F06", "\u609F", "\u6458", "\u94D2", "\u63B7", "\u9887", "\u5E7B", "\u67C4", "\u60E0", "\u60E8", "\u4F73", "\u4EC7", "\u814A", "\u7A9D", "\u6DA4", "\u5251", "\u77A7", "\u5821", "\u6CFC", "\u8471", "\u7F69", "\u970D", "\u635E", "\u80CE", "\u82CD", "\u6EE8", "\u4FE9", "\u6345", "\u6E58", "\u780D", "\u971E", "\u90B5", "\u8404", "\u75AF", "\u6DEE", "\u9042", "\u718A", "\u7CAA", "\u70D8", "\u5BBF", "\u6863", "\u6208", "\u9A73", "\u5AC2", "\u88D5", "\u5F99", "\u7BAD", "\u6350", "\u80A0", "\u6491", "\u6652", "\u8FA8", "\u6BBF", "\u83B2", "\u644A", "\u6405", "\u9171", "\u5C4F", "\u75AB", "\u54C0", "\u8521", "\u5835", "\u6CAB", "\u76B1", "\u7545", "\u53E0", "\u9601", "\u83B1", "\u6572", "\u8F96", "\u94A9", "\u75D5", "\u575D", "\u5DF7", "\u997F", "\u7978", "\u4E18", "\u7384", "\u6E9C", "\u66F0", "\u903B", "\u5F6D", "\u5C1D", "\u537F", "\u59A8", "\u8247", "\u541E", "\u97E6", "\u6028", "\u77EE", "\u6B47"], Wb = ["\u7684", "\u4E00", "\u662F", "\u5728", "\u4E0D", "\u4E86", "\u6709", "\u548C", "\u4EBA", "\u9019", "\u4E2D", "\u5927", "\u70BA", "\u4E0A", "\u500B", "\u570B", "\u6211", "\u4EE5", "\u8981", "\u4ED6", "\u6642", "\u4F86", "\u7528", "\u5011", "\u751F", "\u5230", "\u4F5C", "\u5730", "\u65BC", "\u51FA", "\u5C31", "\u5206", "\u5C0D", "\u6210", "\u6703", "\u53EF", "\u4E3B", "\u767C", "\u5E74", "\u52D5", "\u540C", "\u5DE5", "\u4E5F", "\u80FD", "\u4E0B", "\u904E", "\u5B50", "\u8AAA", "\u7522", "\u7A2E", "\u9762", "\u800C", "\u65B9", "\u5F8C", "\u591A", "\u5B9A", "\u884C", "\u5B78", "\u6CD5", "\u6240", "\u6C11", "\u5F97", "\u7D93", "\u5341", "\u4E09", "\u4E4B", "\u9032", "\u8457", "\u7B49", "\u90E8", "\u5EA6", "\u5BB6", "\u96FB", "\u529B", "\u88E1", "\u5982", "\u6C34", "\u5316", "\u9AD8", "\u81EA", "\u4E8C", "\u7406", "\u8D77", "\u5C0F", "\u7269", "\u73FE", "\u5BE6", "\u52A0", "\u91CF", "\u90FD", "\u5169", "\u9AD4", "\u5236", "\u6A5F", "\u7576", "\u4F7F", "\u9EDE", "\u5F9E", "\u696D", "\u672C", "\u53BB", "\u628A", "\u6027", "\u597D", "\u61C9", "\u958B", "\u5B83", "\u5408", "\u9084", "\u56E0", "\u7531", "\u5176", "\u4E9B", "\u7136", "\u524D", "\u5916", "\u5929", "\u653F", "\u56DB", "\u65E5", "\u90A3", "\u793E", "\u7FA9", "\u4E8B", "\u5E73", "\u5F62", "\u76F8", "\u5168", "\u8868", "\u9593", "\u6A23", "\u8207", "\u95DC", "\u5404", "\u91CD", "\u65B0", "\u7DDA", "\u5167", "\u6578", "\u6B63", "\u5FC3", "\u53CD", "\u4F60", "\u660E", "\u770B", "\u539F", "\u53C8", "\u9EBC", "\u5229", "\u6BD4", "\u6216", "\u4F46", "\u8CEA", "\u6C23", "\u7B2C", "\u5411", "\u9053", "\u547D", "\u6B64", "\u8B8A", "\u689D", "\u53EA", "\u6C92", "\u7D50", "\u89E3", "\u554F", "\u610F", "\u5EFA", "\u6708", "\u516C", "\u7121", "\u7CFB", "\u8ECD", "\u5F88", "\u60C5", "\u8005", "\u6700", "\u7ACB", "\u4EE3", "\u60F3", "\u5DF2", "\u901A", "\u4E26", "\u63D0", "\u76F4", "\u984C", "\u9EE8", "\u7A0B", "\u5C55", "\u4E94", "\u679C", "\u6599", "\u8C61", "\u54E1", "\u9769", "\u4F4D", "\u5165", "\u5E38", "\u6587", "\u7E3D", "\u6B21", "\u54C1", "\u5F0F", "\u6D3B", "\u8A2D", "\u53CA", "\u7BA1", "\u7279", "\u4EF6", "\u9577", "\u6C42", "\u8001", "\u982D", "\u57FA", "\u8CC7", "\u908A", "\u6D41", "\u8DEF", "\u7D1A", "\u5C11", "\u5716", "\u5C71", "\u7D71", "\u63A5", "\u77E5", "\u8F03", "\u5C07", "\u7D44", "\u898B", "\u8A08", "\u5225", "\u5979", "\u624B", "\u89D2", "\u671F", "\u6839", "\u8AD6", "\u904B", "\u8FB2", "\u6307", "\u5E7E", "\u4E5D", "\u5340", "\u5F37", "\u653E", "\u6C7A", "\u897F", "\u88AB", "\u5E79", "\u505A", "\u5FC5", "\u6230", "\u5148", "\u56DE", "\u5247", "\u4EFB", "\u53D6", "\u64DA", "\u8655", "\u968A", "\u5357", "\u7D66", "\u8272", "\u5149", "\u9580", "\u5373", "\u4FDD", "\u6CBB", "\u5317", "\u9020", "\u767E", "\u898F", "\u71B1", "\u9818", "\u4E03", "\u6D77", "\u53E3", "\u6771", "\u5C0E", "\u5668", "\u58D3", "\u5FD7", "\u4E16", "\u91D1", "\u589E", "\u722D", "\u6FDF", "\u968E", "\u6CB9", "\u601D", "\u8853", "\u6975", "\u4EA4", "\u53D7", "\u806F", "\u4EC0", "\u8A8D", "\u516D", "\u5171", "\u6B0A", "\u6536", "\u8B49", "\u6539", "\u6E05", "\u7F8E", "\u518D", "\u63A1", "\u8F49", "\u66F4", "\u55AE", "\u98A8", "\u5207", "\u6253", "\u767D", "\u6559", "\u901F", "\u82B1", "\u5E36", "\u5B89", "\u5834", "\u8EAB", "\u8ECA", "\u4F8B", "\u771F", "\u52D9", "\u5177", "\u842C", "\u6BCF", "\u76EE", "\u81F3", "\u9054", "\u8D70", "\u7A4D", "\u793A", "\u8B70", "\u8072", "\u5831", "\u9B25", "\u5B8C", "\u985E", "\u516B", "\u96E2", "\u83EF", "\u540D", "\u78BA", "\u624D", "\u79D1", "\u5F35", "\u4FE1", "\u99AC", "\u7BC0", "\u8A71", "\u7C73", "\u6574", "\u7A7A", "\u5143", "\u6CC1", "\u4ECA", "\u96C6", "\u6EAB", "\u50B3", "\u571F", "\u8A31", "\u6B65", "\u7FA4", "\u5EE3", "\u77F3", "\u8A18", "\u9700", "\u6BB5", "\u7814", "\u754C", "\u62C9", "\u6797", "\u5F8B", "\u53EB", "\u4E14", "\u7A76", "\u89C0", "\u8D8A", "\u7E54", "\u88DD", "\u5F71", "\u7B97", "\u4F4E", "\u6301", "\u97F3", "\u773E", "\u66F8", "\u5E03", "\u590D", "\u5BB9", "\u5152", "\u9808", "\u969B", "\u5546", "\u975E", "\u9A57", "\u9023", "\u65B7", "\u6DF1", "\u96E3", "\u8FD1", "\u7926", "\u5343", "\u9031", "\u59D4", "\u7D20", "\u6280", "\u5099", "\u534A", "\u8FA6", "\u9752", "\u7701", "\u5217", "\u7FD2", "\u97FF", "\u7D04", "\u652F", "\u822C", "\u53F2", "\u611F", "\u52DE", "\u4FBF", "\u5718", "\u5F80", "\u9178", "\u6B77", "\u5E02", "\u514B", "\u4F55", "\u9664", "\u6D88", "\u69CB", "\u5E9C", "\u7A31", "\u592A", "\u6E96", "\u7CBE", "\u503C", "\u865F", "\u7387", "\u65CF", "\u7DAD", "\u5283", "\u9078", "\u6A19", "\u5BEB", "\u5B58", "\u5019", "\u6BDB", "\u89AA", "\u5FEB", "\u6548", "\u65AF", "\u9662", "\u67E5", "\u6C5F", "\u578B", "\u773C", "\u738B", "\u6309", "\u683C", "\u990A", "\u6613", "\u7F6E", "\u6D3E", "\u5C64", "\u7247", "\u59CB", "\u537B", "\u5C08", "\u72C0", "\u80B2", "\u5EE0", "\u4EAC", "\u8B58", "\u9069", "\u5C6C", "\u5713", "\u5305", "\u706B", "\u4F4F", "\u8ABF", "\u6EFF", "\u7E23", "\u5C40", "\u7167", "\u53C3", "\u7D05", "\u7D30", "\u5F15", "\u807D", "\u8A72", "\u9435", "\u50F9", "\u56B4", "\u9996", "\u5E95", "\u6DB2", "\u5B98", "\u5FB7", "\u96A8", "\u75C5", "\u8607", "\u5931", "\u723E", "\u6B7B", "\u8B1B", "\u914D", "\u5973", "\u9EC3", "\u63A8", "\u986F", "\u8AC7", "\u7F6A", "\u795E", "\u85DD", "\u5462", "\u5E2D", "\u542B", "\u4F01", "\u671B", "\u5BC6", "\u6279", "\u71DF", "\u9805", "\u9632", "\u8209", "\u7403", "\u82F1", "\u6C27", "\u52E2", "\u544A", "\u674E", "\u53F0", "\u843D", "\u6728", "\u5E6B", "\u8F2A", "\u7834", "\u4E9E", "\u5E2B", "\u570D", "\u6CE8", "\u9060", "\u5B57", "\u6750", "\u6392", "\u4F9B", "\u6CB3", "\u614B", "\u5C01", "\u53E6", "\u65BD", "\u6E1B", "\u6A39", "\u6EB6", "\u600E", "\u6B62", "\u6848", "\u8A00", "\u58EB", "\u5747", "\u6B66", "\u56FA", "\u8449", "\u9B5A", "\u6CE2", "\u8996", "\u50C5", "\u8CBB", "\u7DCA", "\u611B", "\u5DE6", "\u7AE0", "\u65E9", "\u671D", "\u5BB3", "\u7E8C", "\u8F15", "\u670D", "\u8A66", "\u98DF", "\u5145", "\u5175", "\u6E90", "\u5224", "\u8B77", "\u53F8", "\u8DB3", "\u67D0", "\u7DF4", "\u5DEE", "\u81F4", "\u677F", "\u7530", "\u964D", "\u9ED1", "\u72AF", "\u8CA0", "\u64CA", "\u8303", "\u7E7C", "\u8208", "\u4F3C", "\u9918", "\u5805", "\u66F2", "\u8F38", "\u4FEE", "\u6545", "\u57CE", "\u592B", "\u5920", "\u9001", "\u7B46", "\u8239", "\u4F54", "\u53F3", "\u8CA1", "\u5403", "\u5BCC", "\u6625", "\u8077", "\u89BA", "\u6F22", "\u756B", "\u529F", "\u5DF4", "\u8DDF", "\u96D6", "\u96DC", "\u98DB", "\u6AA2", "\u5438", "\u52A9", "\u6607", "\u967D", "\u4E92", "\u521D", "\u5275", "\u6297", "\u8003", "\u6295", "\u58DE", "\u7B56", "\u53E4", "\u5F91", "\u63DB", "\u672A", "\u8DD1", "\u7559", "\u92FC", "\u66FE", "\u7AEF", "\u8CAC", "\u7AD9", "\u7C21", "\u8FF0", "\u9322", "\u526F", "\u76E1", "\u5E1D", "\u5C04", "\u8349", "\u885D", "\u627F", "\u7368", "\u4EE4", "\u9650", "\u963F", "\u5BA3", "\u74B0", "\u96D9", "\u8ACB", "\u8D85", "\u5FAE", "\u8B93", "\u63A7", "\u5DDE", "\u826F", "\u8EF8", "\u627E", "\u5426", "\u7D00", "\u76CA", "\u4F9D", "\u512A", "\u9802", "\u790E", "\u8F09", "\u5012", "\u623F", "\u7A81", "\u5750", "\u7C89", "\u6575", "\u7565", "\u5BA2", "\u8881", "\u51B7", "\u52DD", "\u7D55", "\u6790", "\u584A", "\u5291", "\u6E2C", "\u7D72", "\u5354", "\u8A34", "\u5FF5", "\u9673", "\u4ECD", "\u7F85", "\u9E7D", "\u53CB", "\u6D0B", "\u932F", "\u82E6", "\u591C", "\u5211", "\u79FB", "\u983B", "\u9010", "\u9760", "\u6DF7", "\u6BCD", "\u77ED", "\u76AE", "\u7D42", "\u805A", "\u6C7D", "\u6751", "\u96F2", "\u54EA", "\u65E2", "\u8DDD", "\u885B", "\u505C", "\u70C8", "\u592E", "\u5BDF", "\u71D2", "\u8FC5", "\u5883", "\u82E5", "\u5370", "\u6D32", "\u523B", "\u62EC", "\u6FC0", "\u5B54", "\u641E", "\u751A", "\u5BA4", "\u5F85", "\u6838", "\u6821", "\u6563", "\u4FB5", "\u5427", "\u7532", "\u904A", "\u4E45", "\u83DC", "\u5473", "\u820A", "\u6A21", "\u6E56", "\u8CA8", "\u640D", "\u9810", "\u963B", "\u6BEB", "\u666E", "\u7A69", "\u4E59", "\u5ABD", "\u690D", "\u606F", "\u64F4", "\u9280", "\u8A9E", "\u63EE", "\u9152", "\u5B88", "\u62FF", "\u5E8F", "\u7D19", "\u91AB", "\u7F3A", "\u96E8", "\u55CE", "\u91DD", "\u5289", "\u554A", "\u6025", "\u5531", "\u8AA4", "\u8A13", "\u9858", "\u5BE9", "\u9644", "\u7372", "\u8336", "\u9BAE", "\u7CE7", "\u65A4", "\u5B69", "\u812B", "\u786B", "\u80A5", "\u5584", "\u9F8D", "\u6F14", "\u7236", "\u6F38", "\u8840", "\u6B61", "\u68B0", "\u638C", "\u6B4C", "\u6C99", "\u525B", "\u653B", "\u8B02", "\u76FE", "\u8A0E", "\u665A", "\u7C92", "\u4E82", "\u71C3", "\u77DB", "\u4E4E", "\u6BBA", "\u85E5", "\u5BE7", "\u9B6F", "\u8CB4", "\u9418", "\u7164", "\u8B80", "\u73ED", "\u4F2F", "\u9999", "\u4ECB", "\u8FEB", "\u53E5", "\u8C50", "\u57F9", "\u63E1", "\u862D", "\u64D4", "\u5F26", "\u86CB", "\u6C89", "\u5047", "\u7A7F", "\u57F7", "\u7B54", "\u6A02", "\u8AB0", "\u9806", "\u7159", "\u7E2E", "\u5FB5", "\u81C9", "\u559C", "\u677E", "\u8173", "\u56F0", "\u7570", "\u514D", "\u80CC", "\u661F", "\u798F", "\u8CB7", "\u67D3", "\u4E95", "\u6982", "\u6162", "\u6015", "\u78C1", "\u500D", "\u7956", "\u7687", "\u4FC3", "\u975C", "\u88DC", "\u8A55", "\u7FFB", "\u8089", "\u8E10", "\u5C3C", "\u8863", "\u5BEC", "\u63DA", "\u68C9", "\u5E0C", "\u50B7", "\u64CD", "\u5782", "\u79CB", "\u5B9C", "\u6C2B", "\u5957", "\u7763", "\u632F", "\u67B6", "\u4EAE", "\u672B", "\u61B2", "\u6176", "\u7DE8", "\u725B", "\u89F8", "\u6620", "\u96F7", "\u92B7", "\u8A69", "\u5EA7", "\u5C45", "\u6293", "\u88C2", "\u80DE", "\u547C", "\u5A18", "\u666F", "\u5A01", "\u7DA0", "\u6676", "\u539A", "\u76DF", "\u8861", "\u96DE", "\u5B6B", "\u5EF6", "\u5371", "\u81A0", "\u5C4B", "\u9109", "\u81E8", "\u9678", "\u9867", "\u6389", "\u5440", "\u71C8", "\u6B72", "\u63AA", "\u675F", "\u8010", "\u5287", "\u7389", "\u8D99", "\u8DF3", "\u54E5", "\u5B63", "\u8AB2", "\u51F1", "\u80E1", "\u984D", "\u6B3E", "\u7D39", "\u5377", "\u9F4A", "\u5049", "\u84B8", "\u6B96", "\u6C38", "\u5B97", "\u82D7", "\u5DDD", "\u7210", "\u5CA9", "\u5F31", "\u96F6", "\u694A", "\u594F", "\u6CBF", "\u9732", "\u687F", "\u63A2", "\u6ED1", "\u93AE", "\u98EF", "\u6FC3", "\u822A", "\u61F7", "\u8D95", "\u5EAB", "\u596A", "\u4F0A", "\u9748", "\u7A05", "\u9014", "\u6EC5", "\u8CFD", "\u6B78", "\u53EC", "\u9F13", "\u64AD", "\u76E4", "\u88C1", "\u96AA", "\u5EB7", "\u552F", "\u9304", "\u83CC", "\u7D14", "\u501F", "\u7CD6", "\u84CB", "\u6A6B", "\u7B26", "\u79C1", "\u52AA", "\u5802", "\u57DF", "\u69CD", "\u6F64", "\u5E45", "\u54C8", "\u7ADF", "\u719F", "\u87F2", "\u6FA4", "\u8166", "\u58E4", "\u78B3", "\u6B50", "\u904D", "\u5074", "\u5BE8", "\u6562", "\u5FB9", "\u616E", "\u659C", "\u8584", "\u5EAD", "\u7D0D", "\u5F48", "\u98FC", "\u4F38", "\u6298", "\u9EA5", "\u6FD5", "\u6697", "\u8377", "\u74E6", "\u585E", "\u5E8A", "\u7BC9", "\u60E1", "\u6236", "\u8A2A", "\u5854", "\u5947", "\u900F", "\u6881", "\u5200", "\u65CB", "\u8DE1", "\u5361", "\u6C2F", "\u9047", "\u4EFD", "\u6BD2", "\u6CE5", "\u9000", "\u6D17", "\u64FA", "\u7070", "\u5F69", "\u8CE3", "\u8017", "\u590F", "\u64C7", "\u5FD9", "\u9285", "\u737B", "\u786C", "\u4E88", "\u7E41", "\u5708", "\u96EA", "\u51FD", "\u4EA6", "\u62BD", "\u7BC7", "\u9663", "\u9670", "\u4E01", "\u5C3A", "\u8FFD", "\u5806", "\u96C4", "\u8FCE", "\u6CDB", "\u7238", "\u6A13", "\u907F", "\u8B00", "\u5678", "\u91CE", "\u8C6C", "\u65D7", "\u7D2F", "\u504F", "\u5178", "\u9928", "\u7D22", "\u79E6", "\u8102", "\u6F6E", "\u723A", "\u8C46", "\u5FFD", "\u6258", "\u9A5A", "\u5851", "\u907A", "\u6108", "\u6731", "\u66FF", "\u7E96", "\u7C97", "\u50BE", "\u5C1A", "\u75DB", "\u695A", "\u8B1D", "\u596E", "\u8CFC", "\u78E8", "\u541B", "\u6C60", "\u65C1", "\u788E", "\u9AA8", "\u76E3", "\u6355", "\u5F1F", "\u66B4", "\u5272", "\u8CAB", "\u6B8A", "\u91CB", "\u8A5E", "\u4EA1", "\u58C1", "\u9813", "\u5BF6", "\u5348", "\u5875", "\u805E", "\u63ED", "\u70AE", "\u6B98", "\u51AC", "\u6A4B", "\u5A66", "\u8B66", "\u7D9C", "\u62DB", "\u5433", "\u4ED8", "\u6D6E", "\u906D", "\u5F90", "\u60A8", "\u6416", "\u8C37", "\u8D0A", "\u7BB1", "\u9694", "\u8A02", "\u7537", "\u5439", "\u5712", "\u7D1B", "\u5510", "\u6557", "\u5B8B", "\u73BB", "\u5DE8", "\u8015", "\u5766", "\u69AE", "\u9589", "\u7063", "\u9375", "\u51E1", "\u99D0", "\u934B", "\u6551", "\u6069", "\u525D", "\u51DD", "\u9E7C", "\u9F52", "\u622A", "\u7149", "\u9EBB", "\u7D21", "\u7981", "\u5EE2", "\u76DB", "\u7248", "\u7DE9", "\u6DE8", "\u775B", "\u660C", "\u5A5A", "\u6D89", "\u7B52", "\u5634", "\u63D2", "\u5CB8", "\u6717", "\u838A", "\u8857", "\u85CF", "\u59D1", "\u8CBF", "\u8150", "\u5974", "\u5566", "\u6163", "\u4E58", "\u5925", "\u6062", "\u52FB", "\u7D17", "\u624E", "\u8FAF", "\u8033", "\u5F6A", "\u81E3", "\u5104", "\u7483", "\u62B5", "\u8108", "\u79C0", "\u85A9", "\u4FC4", "\u7DB2", "\u821E", "\u5E97", "\u5674", "\u7E31", "\u5BF8", "\u6C57", "\u639B", "\u6D2A", "\u8CC0", "\u9583", "\u67EC", "\u7206", "\u70EF", "\u6D25", "\u7A3B", "\u7246", "\u8EDF", "\u52C7", "\u50CF", "\u6EFE", "\u5398", "\u8499", "\u82B3", "\u80AF", "\u5761", "\u67F1", "\u76EA", "\u817F", "\u5100", "\u65C5", "\u5C3E", "\u8ECB", "\u51B0", "\u8CA2", "\u767B", "\u9ECE", "\u524A", "\u947D", "\u52D2", "\u9003", "\u969C", "\u6C28", "\u90ED", "\u5CF0", "\u5E63", "\u6E2F", "\u4F0F", "\u8ECC", "\u755D", "\u7562", "\u64E6", "\u83AB", "\u523A", "\u6D6A", "\u79D8", "\u63F4", "\u682A", "\u5065", "\u552E", "\u80A1", "\u5CF6", "\u7518", "\u6CE1", "\u7761", "\u7AE5", "\u9444", "\u6E6F", "\u95A5", "\u4F11", "\u532F", "\u820D", "\u7267", "\u7E5E", "\u70B8", "\u54F2", "\u78F7", "\u7E3E", "\u670B", "\u6DE1", "\u5C16", "\u555F", "\u9677", "\u67F4", "\u5448", "\u5F92", "\u984F", "\u6DDA", "\u7A0D", "\u5FD8", "\u6CF5", "\u85CD", "\u62D6", "\u6D1E", "\u6388", "\u93E1", "\u8F9B", "\u58EF", "\u92D2", "\u8CA7", "\u865B", "\u5F4E", "\u6469", "\u6CF0", "\u5E7C", "\u5EF7", "\u5C0A", "\u7A97", "\u7DB1", "\u5F04", "\u96B8", "\u7591", "\u6C0F", "\u5BAE", "\u59D0", "\u9707", "\u745E", "\u602A", "\u5C24", "\u7434", "\u5FAA", "\u63CF", "\u819C", "\u9055", "\u593E", "\u8170", "\u7DE3", "\u73E0", "\u7AAE", "\u68EE", "\u679D", "\u7AF9", "\u6E9D", "\u50AC", "\u7E69", "\u61B6", "\u90A6", "\u5269", "\u5E78", "\u6F3F", "\u6B04", "\u64C1", "\u7259", "\u8CAF", "\u79AE", "\u6FFE", "\u9209", "\u7D0B", "\u7F77", "\u62CD", "\u54B1", "\u558A", "\u8896", "\u57C3", "\u52E4", "\u7F70", "\u7126", "\u6F5B", "\u4F0D", "\u58A8", "\u6B32", "\u7E2B", "\u59D3", "\u520A", "\u98FD", "\u4EFF", "\u734E", "\u92C1", "\u9B3C", "\u9E97", "\u8DE8", "\u9ED8", "\u6316", "\u93C8", "\u6383", "\u559D", "\u888B", "\u70AD", "\u6C61", "\u5E55", "\u8AF8", "\u5F27", "\u52F5", "\u6885", "\u5976", "\u6F54", "\u707D", "\u821F", "\u9451", "\u82EF", "\u8A1F", "\u62B1", "\u6BC0", "\u61C2", "\u5BD2", "\u667A", "\u57D4", "\u5BC4", "\u5C46", "\u8E8D", "\u6E21", "\u6311", "\u4E39", "\u8271", "\u8C9D", "\u78B0", "\u62D4", "\u7239", "\u6234", "\u78BC", "\u5922", "\u82BD", "\u7194", "\u8D64", "\u6F01", "\u54ED", "\u656C", "\u9846", "\u5954", "\u925B", "\u4EF2", "\u864E", "\u7A00", "\u59B9", "\u4E4F", "\u73CD", "\u7533", "\u684C", "\u9075", "\u5141", "\u9686", "\u87BA", "\u5009", "\u9B4F", "\u92B3", "\u66C9", "\u6C2E", "\u517C", "\u96B1", "\u7919", "\u8D6B", "\u64A5", "\u5FE0", "\u8085", "\u7F38", "\u727D", "\u6436", "\u535A", "\u5DE7", "\u6BBC", "\u5144", "\u675C", "\u8A0A", "\u8AA0", "\u78A7", "\u7965", "\u67EF", "\u9801", "\u5DE1", "\u77E9", "\u60B2", "\u704C", "\u9F61", "\u502B", "\u7968", "\u5C0B", "\u6842", "\u92EA", "\u8056", "\u6050", "\u6070", "\u912D", "\u8DA3", "\u62AC", "\u8352", "\u9A30", "\u8CBC", "\u67D4", "\u6EF4", "\u731B", "\u95CA", "\u8F1B", "\u59BB", "\u586B", "\u64A4", "\u5132", "\u7C3D", "\u9B27", "\u64FE", "\u7D2B", "\u7802", "\u905E", "\u6232", "\u540A", "\u9676", "\u4F10", "\u9935", "\u7642", "\u74F6", "\u5A46", "\u64AB", "\u81C2", "\u6478", "\u5FCD", "\u8766", "\u881F", "\u9130", "\u80F8", "\u978F", "\u64E0", "\u5076", "\u68C4", "\u69FD", "\u52C1", "\u4E73", "\u9127", "\u5409", "\u4EC1", "\u721B", "\u78DA", "\u79DF", "\u70CF", "\u8266", "\u4F34", "\u74DC", "\u6DFA", "\u4E19", "\u66AB", "\u71E5", "\u6A61", "\u67F3", "\u8FF7", "\u6696", "\u724C", "\u79E7", "\u81BD", "\u8A73", "\u7C27", "\u8E0F", "\u74F7", "\u8B5C", "\u5446", "\u8CD3", "\u7CCA", "\u6D1B", "\u8F1D", "\u61A4", "\u7AF6", "\u9699", "\u6012", "\u7C98", "\u4E43", "\u7DD2", "\u80A9", "\u7C4D", "\u654F", "\u5857", "\u7199", "\u7686", "\u5075", "\u61F8", "\u6398", "\u4EAB", "\u7CFE", "\u9192", "\u72C2", "\u9396", "\u6DC0", "\u6068", "\u7272", "\u9738", "\u722C", "\u8CDE", "\u9006", "\u73A9", "\u9675", "\u795D", "\u79D2", "\u6D59", "\u8C8C", "\u5F79", "\u5F7C", "\u6089", "\u9D28", "\u8DA8", "\u9CF3", "\u6668", "\u755C", "\u8F29", "\u79E9", "\u5375", "\u7F72", "\u68AF", "\u708E", "\u7058", "\u68CB", "\u9A45", "\u7BE9", "\u5CFD", "\u5192", "\u5565", "\u58FD", "\u8B6F", "\u6D78", "\u6CC9", "\u5E3D", "\u9072", "\u77FD", "\u7586", "\u8CB8", "\u6F0F", "\u7A3F", "\u51A0", "\u5AE9", "\u8105", "\u82AF", "\u7262", "\u53DB", "\u8755", "\u5967", "\u9CF4", "\u5DBA", "\u7F8A", "\u6191", "\u4E32", "\u5858", "\u7E6A", "\u9175", "\u878D", "\u76C6", "\u932B", "\u5EDF", "\u7C4C", "\u51CD", "\u8F14", "\u651D", "\u8972", "\u7B4B", "\u62D2", "\u50DA", "\u65F1", "\u9240", "\u9CE5", "\u6F06", "\u6C88", "\u7709", "\u758F", "\u6DFB", "\u68D2", "\u7A57", "\u785D", "\u97D3", "\u903C", "\u626D", "\u50D1", "\u6DBC", "\u633A", "\u7897", "\u683D", "\u7092", "\u676F", "\u60A3", "\u993E", "\u52F8", "\u8C6A", "\u907C", "\u52C3", "\u9D3B", "\u65E6", "\u540F", "\u62DC", "\u72D7", "\u57CB", "\u8F25", "\u63A9", "\u98F2", "\u642C", "\u7F75", "\u8FAD", "\u52FE", "\u6263", "\u4F30", "\u8523", "\u7D68", "\u9727", "\u4E08", "\u6735", "\u59C6", "\u64EC", "\u5B87", "\u8F2F", "\u965D", "\u96D5", "\u511F", "\u84C4", "\u5D07", "\u526A", "\u5021", "\u5EF3", "\u54AC", "\u99DB", "\u85AF", "\u5237", "\u65A5", "\u756A", "\u8CE6", "\u5949", "\u4F5B", "\u6F86", "\u6F2B", "\u66FC", "\u6247", "\u9223", "\u6843", "\u6276", "\u4ED4", "\u8FD4", "\u4FD7", "\u8667", "\u8154", "\u978B", "\u68F1", "\u8986", "\u6846", "\u6084", "\u53D4", "\u649E", "\u9A19", "\u52D8", "\u65FA", "\u6CB8", "\u5B64", "\u5410", "\u5B5F", "\u6E20", "\u5C48", "\u75BE", "\u5999", "\u60DC", "\u4EF0", "\u72E0", "\u8139", "\u8AE7", "\u62CB", "\u9EF4", "\u6851", "\u5D17", "\u561B", "\u8870", "\u76DC", "\u6EF2", "\u81DF", "\u8CF4", "\u6E67", "\u751C", "\u66F9", "\u95B1", "\u808C", "\u54E9", "\u53B2", "\u70F4", "\u7DEF", "\u6BC5", "\u6628", "\u507D", "\u75C7", "\u716E", "\u5606", "\u91D8", "\u642D", "\u8396", "\u7C60", "\u9177", "\u5077", "\u5F13", "\u9310", "\u6046", "\u5091", "\u5751", "\u9F3B", "\u7FFC", "\u7DB8", "\u6558", "\u7344", "\u902E", "\u7F50", "\u7D61", "\u68DA", "\u6291", "\u81A8", "\u852C", "\u5BFA", "\u9A5F", "\u7A46", "\u51B6", "\u67AF", "\u518A", "\u5C4D", "\u51F8", "\u7D33", "\u576F", "\u72A7", "\u7130", "\u8F5F", "\u6B23", "\u6649", "\u7626", "\u79A6", "\u9320", "\u9326", "\u55AA", "\u65EC", "\u935B", "\u58DF", "\u641C", "\u64B2", "\u9080", "\u4EAD", "\u916F", "\u9081", "\u8212", "\u8106", "\u9176", "\u9592", "\u6182", "\u915A", "\u9811", "\u7FBD", "\u6F32", "\u5378", "\u4ED7", "\u966A", "\u95E2", "\u61F2", "\u676D", "\u59DA", "\u809A", "\u6349", "\u98C4", "\u6F02", "\u6606", "\u6B3A", "\u543E", "\u90CE", "\u70F7", "\u6C41", "\u5475", "\u98FE", "\u856D", "\u96C5", "\u90F5", "\u9077", "\u71D5", "\u6492", "\u59FB", "\u8D74", "\u5BB4", "\u7169", "\u50B5", "\u5E33", "\u6591", "\u9234", "\u65E8", "\u9187", "\u8463", "\u9905", "\u96DB", "\u59FF", "\u62CC", "\u5085", "\u8179", "\u59A5", "\u63C9", "\u8CE2", "\u62C6", "\u6B6A", "\u8461", "\u80FA", "\u4E1F", "\u6D69", "\u5FBD", "\u6602", "\u588A", "\u64CB", "\u89BD", "\u8CAA", "\u6170", "\u7E73", "\u6C6A", "\u614C", "\u99AE", "\u8AFE", "\u59DC", "\u8ABC", "\u5147", "\u52A3", "\u8AA3", "\u8000", "\u660F", "\u8EBA", "\u76C8", "\u9A0E", "\u55AC", "\u6EAA", "\u53E2", "\u76E7", "\u62B9", "\u60B6", "\u8AEE", "\u522E", "\u99D5", "\u7E9C", "\u609F", "\u6458", "\u927A", "\u64F2", "\u9817", "\u5E7B", "\u67C4", "\u60E0", "\u6158", "\u4F73", "\u4EC7", "\u81D8", "\u7AA9", "\u6ECC", "\u528D", "\u77A7", "\u5821", "\u6F51", "\u8525", "\u7F69", "\u970D", "\u6488", "\u80CE", "\u84BC", "\u6FF1", "\u5006", "\u6345", "\u6E58", "\u780D", "\u971E", "\u90B5", "\u8404", "\u760B", "\u6DEE", "\u9042", "\u718A", "\u7CDE", "\u70D8", "\u5BBF", "\u6A94", "\u6208", "\u99C1", "\u5AC2", "\u88D5", "\u5F99", "\u7BAD", "\u6350", "\u8178", "\u6490", "\u66EC", "\u8FA8", "\u6BBF", "\u84EE", "\u6524", "\u652A", "\u91AC", "\u5C4F", "\u75AB", "\u54C0", "\u8521", "\u5835", "\u6CAB", "\u76BA", "\u66A2", "\u758A", "\u95A3", "\u840A", "\u6572", "\u8F44", "\u9264", "\u75D5", "\u58E9", "\u5DF7", "\u9913", "\u798D", "\u4E18", "\u7384", "\u6E9C", "\u66F0", "\u908F", "\u5F6D", "\u5617", "\u537F", "\u59A8", "\u8247", "\u541E", "\u97CB", "\u6028", "\u77EE", "\u6B47"], Yb = ["\u1100\u1161\u1100\u1167\u11A8", "\u1100\u1161\u1101\u1173\u11B7", "\u1100\u1161\u1102\u1161\u11AB", "\u1100\u1161\u1102\u1173\u11BC", "\u1100\u1161\u1103\u1173\u11A8", "\u1100\u1161\u1105\u1173\u110E\u1175\u11B7", "\u1100\u1161\u1106\u116E\u11B7", "\u1100\u1161\u1107\u1161\u11BC", "\u1100\u1161\u1109\u1161\u11BC", "\u1100\u1161\u1109\u1173\u11B7", "\u1100\u1161\u110B\u116E\u11AB\u1103\u1166", "\u1100\u1161\u110B\u1173\u11AF", "\u1100\u1161\u110B\u1175\u1103\u1173", "\u1100\u1161\u110B\u1175\u11B8", "\u1100\u1161\u110C\u1161\u11BC", "\u1100\u1161\u110C\u1165\u11BC", "\u1100\u1161\u110C\u1169\u11A8", "\u1100\u1161\u110C\u116E\u11A8", "\u1100\u1161\u11A8\u110B\u1169", "\u1100\u1161\u11A8\u110C\u1161", "\u1100\u1161\u11AB\u1100\u1167\u11A8", "\u1100\u1161\u11AB\u1107\u116E", "\u1100\u1161\u11AB\u1109\u1165\u11B8", "\u1100\u1161\u11AB\u110C\u1161\u11BC", "\u1100\u1161\u11AB\u110C\u1165\u11B8", "\u1100\u1161\u11AB\u1111\u1161\u11AB", "\u1100\u1161\u11AF\u1103\u1173\u11BC", "\u1100\u1161\u11AF\u1107\u1175", "\u1100\u1161\u11AF\u1109\u1162\u11A8", "\u1100\u1161\u11AF\u110C\u1173\u11BC", "\u1100\u1161\u11B7\u1100\u1161\u11A8", "\u1100\u1161\u11B7\u1100\u1175", "\u1100\u1161\u11B7\u1109\u1169", "\u1100\u1161\u11B7\u1109\u116E\u1109\u1165\u11BC", "\u1100\u1161\u11B7\u110C\u1161", "\u1100\u1161\u11B7\u110C\u1165\u11BC", "\u1100\u1161\u11B8\u110C\u1161\u1100\u1175", "\u1100\u1161\u11BC\u1102\u1161\u11B7", "\u1100\u1161\u11BC\u1103\u1161\u11BC", "\u1100\u1161\u11BC\u1103\u1169", "\u1100\u1161\u11BC\u1105\u1167\u11A8\u1112\u1175", "\u1100\u1161\u11BC\u1107\u1167\u11AB", "\u1100\u1161\u11BC\u1107\u116E\u11A8", "\u1100\u1161\u11BC\u1109\u1161", "\u1100\u1161\u11BC\u1109\u116E\u1105\u1163\u11BC", "\u1100\u1161\u11BC\u110B\u1161\u110C\u1175", "\u1100\u1161\u11BC\u110B\u116F\u11AB\u1103\u1169", "\u1100\u1161\u11BC\u110B\u1174", "\u1100\u1161\u11BC\u110C\u1166", "\u1100\u1161\u11BC\u110C\u1169", "\u1100\u1161\u11C0\u110B\u1175", "\u1100\u1162\u1100\u116E\u1105\u1175", "\u1100\u1162\u1102\u1161\u1105\u1175", "\u1100\u1162\u1107\u1161\u11BC", "\u1100\u1162\u1107\u1167\u11AF", "\u1100\u1162\u1109\u1165\u11AB", "\u1100\u1162\u1109\u1165\u11BC", "\u1100\u1162\u110B\u1175\u11AB", "\u1100\u1162\u11A8\u1100\u116A\u11AB\u110C\u1165\u11A8", "\u1100\u1165\u1109\u1175\u11AF", "\u1100\u1165\u110B\u1162\u11A8", "\u1100\u1165\u110B\u116E\u11AF", "\u1100\u1165\u110C\u1175\u11BA", "\u1100\u1165\u1111\u116E\u11B7", "\u1100\u1165\u11A8\u110C\u1165\u11BC", "\u1100\u1165\u11AB\u1100\u1161\u11BC", "\u1100\u1165\u11AB\u1106\u116E\u11AF", "\u1100\u1165\u11AB\u1109\u1165\u11AF", "\u1100\u1165\u11AB\u110C\u1169", "\u1100\u1165\u11AB\u110E\u116E\u11A8", "\u1100\u1165\u11AF\u110B\u1173\u11B7", "\u1100\u1165\u11B7\u1109\u1161", "\u1100\u1165\u11B7\u1110\u1169", "\u1100\u1166\u1109\u1175\u1111\u1161\u11AB", "\u1100\u1166\u110B\u1175\u11B7", "\u1100\u1167\u110B\u116E\u11AF", "\u1100\u1167\u11AB\u1112\u1162", "\u1100\u1167\u11AF\u1100\u116A", "\u1100\u1167\u11AF\u1100\u116E\u11A8", "\u1100\u1167\u11AF\u1105\u1169\u11AB", "\u1100\u1167\u11AF\u1109\u1165\u11A8", "\u1100\u1167\u11AF\u1109\u1173\u11BC", "\u1100\u1167\u11AF\u1109\u1175\u11B7", "\u1100\u1167\u11AF\u110C\u1165\u11BC", "\u1100\u1167\u11AF\u1112\u1169\u11AB", "\u1100\u1167\u11BC\u1100\u1168", "\u1100\u1167\u11BC\u1100\u1169", "\u1100\u1167\u11BC\u1100\u1175", "\u1100\u1167\u11BC\u1105\u1167\u11A8", "\u1100\u1167\u11BC\u1107\u1169\u11A8\u1100\u116E\u11BC", "\u1100\u1167\u11BC\u1107\u1175", "\u1100\u1167\u11BC\u1109\u1161\u11BC\u1103\u1169", "\u1100\u1167\u11BC\u110B\u1167\u11BC", "\u1100\u1167\u11BC\u110B\u116E", "\u1100\u1167\u11BC\u110C\u1162\u11BC", "\u1100\u1167\u11BC\u110C\u1166", "\u1100\u1167\u11BC\u110C\u116E", "\u1100\u1167\u11BC\u110E\u1161\u11AF", "\u1100\u1167\u11BC\u110E\u1175", "\u1100\u1167\u11BC\u1112\u1163\u11BC", "\u1100\u1167\u11BC\u1112\u1165\u11B7", "\u1100\u1168\u1100\u1169\u11A8", "\u1100\u1168\u1103\u1161\u11AB", "\u1100\u1168\u1105\u1161\u11AB", "\u1100\u1168\u1109\u1161\u11AB", "\u1100\u1168\u1109\u1169\u11A8", "\u1100\u1168\u110B\u1163\u11A8", "\u1100\u1168\u110C\u1165\u11AF", "\u1100\u1168\u110E\u1173\u11BC", "\u1100\u1168\u1112\u116C\u11A8", "\u1100\u1169\u1100\u1162\u11A8", "\u1100\u1169\u1100\u116E\u1105\u1167", "\u1100\u1169\u1100\u116E\u11BC", "\u1100\u1169\u1100\u1173\u11B8", "\u1100\u1169\u1103\u1173\u11BC\u1112\u1161\u11A8\u1109\u1162\u11BC", "\u1100\u1169\u1106\u116E\u1109\u1175\u11AB", "\u1100\u1169\u1106\u1175\u11AB", "\u1100\u1169\u110B\u1163\u11BC\u110B\u1175", "\u1100\u1169\u110C\u1161\u11BC", "\u1100\u1169\u110C\u1165\u11AB", "\u1100\u1169\u110C\u1175\u11B8", "\u1100\u1169\u110E\u116E\u11BA\u1100\u1161\u1105\u116E", "\u1100\u1169\u1110\u1169\u11BC", "\u1100\u1169\u1112\u1163\u11BC", "\u1100\u1169\u11A8\u1109\u1175\u11A8", "\u1100\u1169\u11AF\u1106\u1169\u11A8", "\u1100\u1169\u11AF\u110D\u1161\u1100\u1175", "\u1100\u1169\u11AF\u1111\u1173", "\u1100\u1169\u11BC\u1100\u1161\u11AB", "\u1100\u1169\u11BC\u1100\u1162", "\u1100\u1169\u11BC\u1100\u1167\u11A8", "\u1100\u1169\u11BC\u1100\u116E\u11AB", "\u1100\u1169\u11BC\u1100\u1173\u11B8", "\u1100\u1169\u11BC\u1100\u1175", "\u1100\u1169\u11BC\u1103\u1169\u11BC", "\u1100\u1169\u11BC\u1106\u116E\u110B\u116F\u11AB", "\u1100\u1169\u11BC\u1107\u116E", "\u1100\u1169\u11BC\u1109\u1161", "\u1100\u1169\u11BC\u1109\u1175\u11A8", "\u1100\u1169\u11BC\u110B\u1165\u11B8", "\u1100\u1169\u11BC\u110B\u1167\u11AB", "\u1100\u1169\u11BC\u110B\u116F\u11AB", "\u1100\u1169\u11BC\u110C\u1161\u11BC", "\u1100\u1169\u11BC\u110D\u1161", "\u1100\u1169\u11BC\u110E\u1162\u11A8", "\u1100\u1169\u11BC\u1110\u1169\u11BC", "\u1100\u1169\u11BC\u1111\u1169", "\u1100\u1169\u11BC\u1112\u1161\u11BC", "\u1100\u1169\u11BC\u1112\u1172\u110B\u1175\u11AF", "\u1100\u116A\u1106\u1169\u11A8", "\u1100\u116A\u110B\u1175\u11AF", "\u1100\u116A\u110C\u1161\u11BC", "\u1100\u116A\u110C\u1165\u11BC", "\u1100\u116A\u1112\u1161\u11A8", "\u1100\u116A\u11AB\u1100\u1162\u11A8", "\u1100\u116A\u11AB\u1100\u1168", "\u1100\u116A\u11AB\u1100\u116A\u11BC", "\u1100\u116A\u11AB\u1102\u1167\u11B7", "\u1100\u116A\u11AB\u1105\u1161\u11B7", "\u1100\u116A\u11AB\u1105\u1167\u11AB", "\u1100\u116A\u11AB\u1105\u1175", "\u1100\u116A\u11AB\u1109\u1173\u11B8", "\u1100\u116A\u11AB\u1109\u1175\u11B7", "\u1100\u116A\u11AB\u110C\u1165\u11B7", "\u1100\u116A\u11AB\u110E\u1161\u11AF", "\u1100\u116A\u11BC\u1100\u1167\u11BC", "\u1100\u116A\u11BC\u1100\u1169", "\u1100\u116A\u11BC\u110C\u1161\u11BC", "\u1100\u116A\u11BC\u110C\u116E", "\u1100\u116C\u1105\u1169\u110B\u116E\u11B7", "\u1100\u116C\u11BC\u110C\u1161\u11BC\u1112\u1175", "\u1100\u116D\u1100\u116A\u1109\u1165", "\u1100\u116D\u1106\u116E\u11AB", "\u1100\u116D\u1107\u1169\u11A8", "\u1100\u116D\u1109\u1175\u11AF", "\u1100\u116D\u110B\u1163\u11BC", "\u1100\u116D\u110B\u1172\u11A8", "\u1100\u116D\u110C\u1161\u11BC", "\u1100\u116D\u110C\u1175\u11A8", "\u1100\u116D\u1110\u1169\u11BC", "\u1100\u116D\u1112\u116A\u11AB", "\u1100\u116D\u1112\u116E\u11AB", "\u1100\u116E\u1100\u1167\u11BC", "\u1100\u116E\u1105\u1173\u11B7", "\u1100\u116E\u1106\u1165\u11BC", "\u1100\u116E\u1107\u1167\u11AF", "\u1100\u116E\u1107\u116E\u11AB", "\u1100\u116E\u1109\u1165\u11A8", "\u1100\u116E\u1109\u1165\u11BC", "\u1100\u116E\u1109\u1169\u11A8", "\u1100\u116E\u110B\u1167\u11A8", "\u1100\u116E\u110B\u1175\u11B8", "\u1100\u116E\u110E\u1165\u11BC", "\u1100\u116E\u110E\u1166\u110C\u1165\u11A8", "\u1100\u116E\u11A8\u1100\u1161", "\u1100\u116E\u11A8\u1100\u1175", "\u1100\u116E\u11A8\u1102\u1162", "\u1100\u116E\u11A8\u1105\u1175\u11B8", "\u1100\u116E\u11A8\u1106\u116E\u11AF", "\u1100\u116E\u11A8\u1106\u1175\u11AB", "\u1100\u116E\u11A8\u1109\u116E", "\u1100\u116E\u11A8\u110B\u1165", "\u1100\u116E\u11A8\u110B\u116A\u11BC", "\u1100\u116E\u11A8\u110C\u1165\u11A8", "\u1100\u116E\u11A8\u110C\u1166", "\u1100\u116E\u11A8\u1112\u116C", "\u1100\u116E\u11AB\u1103\u1162", "\u1100\u116E\u11AB\u1109\u1161", "\u1100\u116E\u11AB\u110B\u1175\u11AB", "\u1100\u116E\u11BC\u1100\u1173\u11A8\u110C\u1165\u11A8", "\u1100\u116F\u11AB\u1105\u1175", "\u1100\u116F\u11AB\u110B\u1171", "\u1100\u116F\u11AB\u1110\u116E", "\u1100\u1171\u1100\u116E\u11A8", "\u1100\u1171\u1109\u1175\u11AB", "\u1100\u1172\u110C\u1165\u11BC", "\u1100\u1172\u110E\u1175\u11A8", "\u1100\u1172\u11AB\u1112\u1167\u11BC", "\u1100\u1173\u1102\u1161\u11AF", "\u1100\u1173\u1102\u1163\u11BC", "\u1100\u1173\u1102\u1173\u11AF", "\u1100\u1173\u1105\u1165\u1102\u1161", "\u1100\u1173\u1105\u116E\u11B8", "\u1100\u1173\u1105\u1173\u11BA", "\u1100\u1173\u1105\u1175\u11B7", "\u1100\u1173\u110C\u1166\u1109\u1165\u110B\u1163", "\u1100\u1173\u1110\u1169\u1105\u1169\u11A8", "\u1100\u1173\u11A8\u1107\u1169\u11A8", "\u1100\u1173\u11A8\u1112\u1175", "\u1100\u1173\u11AB\u1100\u1165", "\u1100\u1173\u11AB\u1100\u116D", "\u1100\u1173\u11AB\u1105\u1162", "\u1100\u1173\u11AB\u1105\u1169", "\u1100\u1173\u11AB\u1106\u116E", "\u1100\u1173\u11AB\u1107\u1169\u11AB", "\u1100\u1173\u11AB\u110B\u116F\u11AB", "\u1100\u1173\u11AB\u110B\u1172\u11A8", "\u1100\u1173\u11AB\u110E\u1165", "\u1100\u1173\u11AF\u110A\u1175", "\u1100\u1173\u11AF\u110C\u1161", "\u1100\u1173\u11B7\u1100\u1161\u11BC\u1109\u1161\u11AB", "\u1100\u1173\u11B7\u1100\u1169", "\u1100\u1173\u11B7\u1102\u1167\u11AB", "\u1100\u1173\u11B7\u1106\u1166\u1103\u1161\u11AF", "\u1100\u1173\u11B7\u110B\u1162\u11A8", "\u1100\u1173\u11B7\u110B\u1167\u11AB", "\u1100\u1173\u11B7\u110B\u116D\u110B\u1175\u11AF", "\u1100\u1173\u11B7\u110C\u1175", "\u1100\u1173\u11BC\u110C\u1165\u11BC\u110C\u1165\u11A8", "\u1100\u1175\u1100\u1161\u11AB", "\u1100\u1175\u1100\u116A\u11AB", "\u1100\u1175\u1102\u1167\u11B7", "\u1100\u1175\u1102\u1173\u11BC", "\u1100\u1175\u1103\u1169\u11A8\u1100\u116D", "\u1100\u1175\u1103\u116E\u11BC", "\u1100\u1175\u1105\u1169\u11A8", "\u1100\u1175\u1105\u1173\u11B7", "\u1100\u1175\u1107\u1165\u11B8", "\u1100\u1175\u1107\u1169\u11AB", "\u1100\u1175\u1107\u116E\u11AB", "\u1100\u1175\u1108\u1173\u11B7", "\u1100\u1175\u1109\u116E\u11A8\u1109\u1161", "\u1100\u1175\u1109\u116E\u11AF", "\u1100\u1175\u110B\u1165\u11A8", "\u1100\u1175\u110B\u1165\u11B8", "\u1100\u1175\u110B\u1169\u11AB", "\u1100\u1175\u110B\u116E\u11AB", "\u1100\u1175\u110B\u116F\u11AB", "\u1100\u1175\u110C\u1165\u11A8", "\u1100\u1175\u110C\u116E\u11AB", "\u1100\u1175\u110E\u1175\u11B7", "\u1100\u1175\u1112\u1169\u11AB", "\u1100\u1175\u1112\u116C\u11A8", "\u1100\u1175\u11AB\u1100\u1173\u11B8", "\u1100\u1175\u11AB\u110C\u1161\u11BC", "\u1100\u1175\u11AF\u110B\u1175", "\u1100\u1175\u11B7\u1107\u1161\u11B8", "\u1100\u1175\u11B7\u110E\u1175", "\u1100\u1175\u11B7\u1111\u1169\u1100\u1169\u11BC\u1112\u1161\u11BC", "\u1101\u1161\u11A8\u1103\u116E\u1100\u1175", "\u1101\u1161\u11B7\u1108\u1161\u11A8", "\u1101\u1162\u1103\u1161\u11AF\u110B\u1173\u11B7", "\u1101\u1162\u1109\u1169\u1100\u1173\u11B7", "\u1101\u1165\u11B8\u110C\u1175\u11AF", "\u1101\u1169\u11A8\u1103\u1162\u1100\u1175", "\u1101\u1169\u11BE\u110B\u1175\u11C1", "\u1102\u1161\u1103\u1173\u11AF\u110B\u1175", "\u1102\u1161\u1105\u1161\u11AB\u1112\u1175", "\u1102\u1161\u1106\u1165\u110C\u1175", "\u1102\u1161\u1106\u116E\u11AF", "\u1102\u1161\u110E\u1175\u11B7\u1107\u1161\u11AB", "\u1102\u1161\u1112\u1173\u11AF", "\u1102\u1161\u11A8\u110B\u1167\u11B8", "\u1102\u1161\u11AB\u1107\u1161\u11BC", "\u1102\u1161\u11AF\u1100\u1162", "\u1102\u1161\u11AF\u110A\u1175", "\u1102\u1161\u11AF\u110D\u1161", "\u1102\u1161\u11B7\u1102\u1167", "\u1102\u1161\u11B7\u1103\u1162\u1106\u116E\u11AB", "\u1102\u1161\u11B7\u1106\u1162", "\u1102\u1161\u11B7\u1109\u1161\u11AB", "\u1102\u1161\u11B7\u110C\u1161", "\u1102\u1161\u11B7\u1111\u1167\u11AB", "\u1102\u1161\u11B7\u1112\u1161\u11A8\u1109\u1162\u11BC", "\u1102\u1161\u11BC\u1107\u1175", "\u1102\u1161\u11C0\u1106\u1161\u11AF", "\u1102\u1162\u1102\u1167\u11AB", "\u1102\u1162\u110B\u116D\u11BC", "\u1102\u1162\u110B\u1175\u11AF", "\u1102\u1162\u11B7\u1107\u1175", "\u1102\u1162\u11B7\u1109\u1162", "\u1102\u1162\u11BA\u1106\u116E\u11AF", "\u1102\u1162\u11BC\u1103\u1169\u11BC", "\u1102\u1162\u11BC\u1106\u1167\u11AB", "\u1102\u1162\u11BC\u1107\u1161\u11BC", "\u1102\u1162\u11BC\u110C\u1161\u11BC\u1100\u1169", "\u1102\u1166\u11A8\u1110\u1161\u110B\u1175", "\u1102\u1166\u11BA\u110D\u1162", "\u1102\u1169\u1103\u1169\u11BC", "\u1102\u1169\u1105\u1161\u11AB\u1109\u1162\u11A8", "\u1102\u1169\u1105\u1167\u11A8", "\u1102\u1169\u110B\u1175\u11AB", "\u1102\u1169\u11A8\u110B\u1173\u11B7", "\u1102\u1169\u11A8\u110E\u1161", "\u1102\u1169\u11A8\u1112\u116A", "\u1102\u1169\u11AB\u1105\u1175", "\u1102\u1169\u11AB\u1106\u116E\u11AB", "\u1102\u1169\u11AB\u110C\u1162\u11BC", "\u1102\u1169\u11AF\u110B\u1175", "\u1102\u1169\u11BC\u1100\u116E", "\u1102\u1169\u11BC\u1103\u1161\u11B7", "\u1102\u1169\u11BC\u1106\u1175\u11AB", "\u1102\u1169\u11BC\u1107\u116E", "\u1102\u1169\u11BC\u110B\u1165\u11B8", "\u1102\u1169\u11BC\u110C\u1161\u11BC", "\u1102\u1169\u11BC\u110E\u1169\u11AB", "\u1102\u1169\u11C1\u110B\u1175", "\u1102\u116E\u11AB\u1103\u1169\u11BC\u110C\u1161", "\u1102\u116E\u11AB\u1106\u116E\u11AF", "\u1102\u116E\u11AB\u110A\u1165\u11B8", "\u1102\u1172\u110B\u116D\u11A8", "\u1102\u1173\u1101\u1175\u11B7", "\u1102\u1173\u11A8\u1103\u1162", "\u1102\u1173\u11BC\u1103\u1169\u11BC\u110C\u1165\u11A8", "\u1102\u1173\u11BC\u1105\u1167\u11A8", "\u1103\u1161\u1107\u1161\u11BC", "\u1103\u1161\u110B\u1163\u11BC\u1109\u1165\u11BC", "\u1103\u1161\u110B\u1173\u11B7", "\u1103\u1161\u110B\u1175\u110B\u1165\u1110\u1173", "\u1103\u1161\u1112\u1162\u11BC", "\u1103\u1161\u11AB\u1100\u1168", "\u1103\u1161\u11AB\u1100\u1169\u11AF", "\u1103\u1161\u11AB\u1103\u1169\u11A8", "\u1103\u1161\u11AB\u1106\u1161\u11BA", "\u1103\u1161\u11AB\u1109\u116E\u11AB", "\u1103\u1161\u11AB\u110B\u1165", "\u1103\u1161\u11AB\u110B\u1171", "\u1103\u1161\u11AB\u110C\u1165\u11B7", "\u1103\u1161\u11AB\u110E\u1166", "\u1103\u1161\u11AB\u110E\u116E", "\u1103\u1161\u11AB\u1111\u1167\u11AB", "\u1103\u1161\u11AB\u1111\u116E\u11BC", "\u1103\u1161\u11AF\u1100\u1163\u11AF", "\u1103\u1161\u11AF\u1105\u1165", "\u1103\u1161\u11AF\u1105\u1167\u11A8", "\u1103\u1161\u11AF\u1105\u1175", "\u1103\u1161\u11B0\u1100\u1169\u1100\u1175", "\u1103\u1161\u11B7\u1103\u1161\u11BC", "\u1103\u1161\u11B7\u1107\u1162", "\u1103\u1161\u11B7\u110B\u116D", "\u1103\u1161\u11B7\u110B\u1175\u11B7", "\u1103\u1161\u11B8\u1107\u1167\u11AB", "\u1103\u1161\u11B8\u110C\u1161\u11BC", "\u1103\u1161\u11BC\u1100\u1173\u11AB", "\u1103\u1161\u11BC\u1107\u116E\u11AB\u1100\u1161\u11AB", "\u1103\u1161\u11BC\u110B\u1167\u11AB\u1112\u1175", "\u1103\u1161\u11BC\u110C\u1161\u11BC", "\u1103\u1162\u1100\u1172\u1106\u1169", "\u1103\u1162\u1102\u1161\u11BD", "\u1103\u1162\u1103\u1161\u11AB\u1112\u1175", "\u1103\u1162\u1103\u1161\u11B8", "\u1103\u1162\u1103\u1169\u1109\u1175", "\u1103\u1162\u1105\u1163\u11A8", "\u1103\u1162\u1105\u1163\u11BC", "\u1103\u1162\u1105\u1172\u11A8", "\u1103\u1162\u1106\u116E\u11AB", "\u1103\u1162\u1107\u116E\u1107\u116E\u11AB", "\u1103\u1162\u1109\u1175\u11AB", "\u1103\u1162\u110B\u1173\u11BC", "\u1103\u1162\u110C\u1161\u11BC", "\u1103\u1162\u110C\u1165\u11AB", "\u1103\u1162\u110C\u1165\u11B8", "\u1103\u1162\u110C\u116E\u11BC", "\u1103\u1162\u110E\u1162\u11A8", "\u1103\u1162\u110E\u116E\u11AF", "\u1103\u1162\u110E\u116E\u11BC", "\u1103\u1162\u1110\u1169\u11BC\u1105\u1167\u11BC", "\u1103\u1162\u1112\u1161\u11A8", "\u1103\u1162\u1112\u1161\u11AB\u1106\u1175\u11AB\u1100\u116E\u11A8", "\u1103\u1162\u1112\u1161\u11B8\u1109\u1175\u11AF", "\u1103\u1162\u1112\u1167\u11BC", "\u1103\u1165\u11BC\u110B\u1165\u1105\u1175", "\u1103\u1166\u110B\u1175\u1110\u1173", "\u1103\u1169\u1103\u1162\u110E\u1166", "\u1103\u1169\u1103\u1165\u11A8", "\u1103\u1169\u1103\u116E\u11A8", "\u1103\u1169\u1106\u1161\u11BC", "\u1103\u1169\u1109\u1165\u1100\u116A\u11AB", "\u1103\u1169\u1109\u1175\u11B7", "\u1103\u1169\u110B\u116E\u11B7", "\u1103\u1169\u110B\u1175\u11B8", "\u1103\u1169\u110C\u1161\u1100\u1175", "\u1103\u1169\u110C\u1165\u1112\u1175", "\u1103\u1169\u110C\u1165\u11AB", "\u1103\u1169\u110C\u116E\u11BC", "\u1103\u1169\u110E\u1161\u11A8", "\u1103\u1169\u11A8\u1100\u1161\u11B7", "\u1103\u1169\u11A8\u1105\u1175\u11B8", "\u1103\u1169\u11A8\u1109\u1165", "\u1103\u1169\u11A8\u110B\u1175\u11AF", "\u1103\u1169\u11A8\u110E\u1161\u11BC\u110C\u1165\u11A8", "\u1103\u1169\u11BC\u1112\u116A\u110E\u1162\u11A8", "\u1103\u1171\u11BA\u1106\u1169\u1109\u1173\u11B8", "\u1103\u1171\u11BA\u1109\u1161\u11AB", "\u1104\u1161\u11AF\u110B\u1161\u110B\u1175", "\u1106\u1161\u1102\u116E\u1105\u1161", "\u1106\u1161\u1102\u1173\u11AF", "\u1106\u1161\u1103\u1161\u11BC", "\u1106\u1161\u1105\u1161\u1110\u1169\u11AB", "\u1106\u1161\u1105\u1167\u11AB", "\u1106\u1161\u1106\u116E\u1105\u1175", "\u1106\u1161\u1109\u1161\u110C\u1175", "\u1106\u1161\u110B\u1163\u11A8", "\u1106\u1161\u110B\u116D\u1102\u1166\u110C\u1173", "\u1106\u1161\u110B\u1173\u11AF", "\u1106\u1161\u110B\u1173\u11B7", "\u1106\u1161\u110B\u1175\u110F\u1173", "\u1106\u1161\u110C\u116E\u11BC", "\u1106\u1161\u110C\u1175\u1106\u1161\u11A8", "\u1106\u1161\u110E\u1161\u11AB\u1100\u1161\u110C\u1175", "\u1106\u1161\u110E\u1161\u11AF", "\u1106\u1161\u1112\u1173\u11AB", "\u1106\u1161\u11A8\u1100\u1165\u11AF\u1105\u1175", "\u1106\u1161\u11A8\u1102\u1162", "\u1106\u1161\u11A8\u1109\u1161\u11BC", "\u1106\u1161\u11AB\u1102\u1161\u11B7", "\u1106\u1161\u11AB\u1103\u116E", "\u1106\u1161\u11AB\u1109\u1166", "\u1106\u1161\u11AB\u110B\u1163\u11A8", "\u1106\u1161\u11AB\u110B\u1175\u11AF", "\u1106\u1161\u11AB\u110C\u1165\u11B7", "\u1106\u1161\u11AB\u110C\u1169\u11A8", "\u1106\u1161\u11AB\u1112\u116A", "\u1106\u1161\u11AD\u110B\u1175", "\u1106\u1161\u11AF\u1100\u1175", "\u1106\u1161\u11AF\u110A\u1173\u11B7", "\u1106\u1161\u11AF\u1110\u116E", "\u1106\u1161\u11B7\u1103\u1162\u1105\u1169", "\u1106\u1161\u11BC\u110B\u116F\u11AB\u1100\u1167\u11BC", "\u1106\u1162\u1102\u1167\u11AB", "\u1106\u1162\u1103\u1161\u11AF", "\u1106\u1162\u1105\u1167\u11A8", "\u1106\u1162\u1107\u1165\u11AB", "\u1106\u1162\u1109\u1173\u110F\u1165\u11B7", "\u1106\u1162\u110B\u1175\u11AF", "\u1106\u1162\u110C\u1161\u11BC", "\u1106\u1162\u11A8\u110C\u116E", "\u1106\u1165\u11A8\u110B\u1175", "\u1106\u1165\u11AB\u110C\u1165", "\u1106\u1165\u11AB\u110C\u1175", "\u1106\u1165\u11AF\u1105\u1175", "\u1106\u1166\u110B\u1175\u11AF", "\u1106\u1167\u1102\u1173\u1105\u1175", "\u1106\u1167\u110E\u1175\u11AF", "\u1106\u1167\u11AB\u1103\u1161\u11B7", "\u1106\u1167\u11AF\u110E\u1175", "\u1106\u1167\u11BC\u1103\u1161\u11AB", "\u1106\u1167\u11BC\u1105\u1167\u11BC", "\u1106\u1167\u11BC\u110B\u1168", "\u1106\u1167\u11BC\u110B\u1174", "\u1106\u1167\u11BC\u110C\u1165\u11AF", "\u1106\u1167\u11BC\u110E\u1175\u11BC", "\u1106\u1167\u11BC\u1112\u1161\u11B7", "\u1106\u1169\u1100\u1173\u11B7", "\u1106\u1169\u1102\u1175\u1110\u1165", "\u1106\u1169\u1103\u1166\u11AF", "\u1106\u1169\u1103\u1173\u11AB", "\u1106\u1169\u1107\u1165\u11B7", "\u1106\u1169\u1109\u1173\u11B8", "\u1106\u1169\u110B\u1163\u11BC", "\u1106\u1169\u110B\u1175\u11B7", "\u1106\u1169\u110C\u1169\u1105\u1175", "\u1106\u1169\u110C\u1175\u11B8", "\u1106\u1169\u1110\u116E\u11BC\u110B\u1175", "\u1106\u1169\u11A8\u1100\u1165\u11AF\u110B\u1175", "\u1106\u1169\u11A8\u1105\u1169\u11A8", "\u1106\u1169\u11A8\u1109\u1161", "\u1106\u1169\u11A8\u1109\u1169\u1105\u1175", "\u1106\u1169\u11A8\u1109\u116E\u11B7", "\u1106\u1169\u11A8\u110C\u1165\u11A8", "\u1106\u1169\u11A8\u1111\u116D", "\u1106\u1169\u11AF\u1105\u1162", "\u1106\u1169\u11B7\u1106\u1162", "\u1106\u1169\u11B7\u1106\u116E\u1100\u1166", "\u1106\u1169\u11B7\u1109\u1161\u11AF", "\u1106\u1169\u11B7\u1109\u1169\u11A8", "\u1106\u1169\u11B7\u110C\u1175\u11BA", "\u1106\u1169\u11B7\u1110\u1169\u11BC", "\u1106\u1169\u11B8\u1109\u1175", "\u1106\u116E\u1100\u116A\u11AB\u1109\u1175\u11B7", "\u1106\u116E\u1100\u116E\u11BC\u1112\u116A", "\u1106\u116E\u1103\u1165\u110B\u1171", "\u1106\u116E\u1103\u1165\u11B7", "\u1106\u116E\u1105\u1173\u11C1", "\u1106\u116E\u1109\u1173\u11AB", "\u1106\u116E\u110B\u1165\u11BA", "\u1106\u116E\u110B\u1167\u11A8", "\u1106\u116E\u110B\u116D\u11BC", "\u1106\u116E\u110C\u1169\u1100\u1165\u11AB", "\u1106\u116E\u110C\u1175\u1100\u1162", "\u1106\u116E\u110E\u1165\u11A8", "\u1106\u116E\u11AB\u1100\u116E", "\u1106\u116E\u11AB\u1103\u1173\u11A8", "\u1106\u116E\u11AB\u1107\u1165\u11B8", "\u1106\u116E\u11AB\u1109\u1165", "\u1106\u116E\u11AB\u110C\u1166", "\u1106\u116E\u11AB\u1112\u1161\u11A8", "\u1106\u116E\u11AB\u1112\u116A", "\u1106\u116E\u11AF\u1100\u1161", "\u1106\u116E\u11AF\u1100\u1165\u11AB", "\u1106\u116E\u11AF\u1100\u1167\u11AF", "\u1106\u116E\u11AF\u1100\u1169\u1100\u1175", "\u1106\u116E\u11AF\u1105\u1169\u11AB", "\u1106\u116E\u11AF\u1105\u1175\u1112\u1161\u11A8", "\u1106\u116E\u11AF\u110B\u1173\u11B7", "\u1106\u116E\u11AF\u110C\u1175\u11AF", "\u1106\u116E\u11AF\u110E\u1166", "\u1106\u1175\u1100\u116E\u11A8", "\u1106\u1175\u1103\u1175\u110B\u1165", "\u1106\u1175\u1109\u1161\u110B\u1175\u11AF", "\u1106\u1175\u1109\u116E\u11AF", "\u1106\u1175\u110B\u1167\u11A8", "\u1106\u1175\u110B\u116D\u11BC\u1109\u1175\u11AF", "\u1106\u1175\u110B\u116E\u11B7", "\u1106\u1175\u110B\u1175\u11AB", "\u1106\u1175\u1110\u1175\u11BC", "\u1106\u1175\u1112\u1169\u11AB", "\u1106\u1175\u11AB\u1100\u1161\u11AB", "\u1106\u1175\u11AB\u110C\u1169\u11A8", "\u1106\u1175\u11AB\u110C\u116E", "\u1106\u1175\u11AE\u110B\u1173\u11B7", "\u1106\u1175\u11AF\u1100\u1161\u1105\u116E", "\u1106\u1175\u11AF\u1105\u1175\u1106\u1175\u1110\u1165", "\u1106\u1175\u11C0\u1107\u1161\u1103\u1161\u11A8", "\u1107\u1161\u1100\u1161\u110C\u1175", "\u1107\u1161\u1100\u116E\u1102\u1175", "\u1107\u1161\u1102\u1161\u1102\u1161", "\u1107\u1161\u1102\u1173\u11AF", "\u1107\u1161\u1103\u1161\u11A8", "\u1107\u1161\u1103\u1161\u11BA\u1100\u1161", "\u1107\u1161\u1105\u1161\u11B7", "\u1107\u1161\u110B\u1175\u1105\u1165\u1109\u1173", "\u1107\u1161\u1110\u1161\u11BC", "\u1107\u1161\u11A8\u1106\u116E\u11AF\u1100\u116A\u11AB", "\u1107\u1161\u11A8\u1109\u1161", "\u1107\u1161\u11A8\u1109\u116E", "\u1107\u1161\u11AB\u1103\u1162", "\u1107\u1161\u11AB\u1103\u1173\u1109\u1175", "\u1107\u1161\u11AB\u1106\u1161\u11AF", "\u1107\u1161\u11AB\u1107\u1161\u11AF", "\u1107\u1161\u11AB\u1109\u1165\u11BC", "\u1107\u1161\u11AB\u110B\u1173\u11BC", "\u1107\u1161\u11AB\u110C\u1161\u11BC", "\u1107\u1161\u11AB\u110C\u116E\u11A8", "\u1107\u1161\u11AB\u110C\u1175", "\u1107\u1161\u11AB\u110E\u1161\u11AB", "\u1107\u1161\u11AE\u110E\u1175\u11B7", "\u1107\u1161\u11AF\u1100\u1161\u1105\u1161\u11A8", "\u1107\u1161\u11AF\u1100\u1165\u11AF\u110B\u1173\u11B7", "\u1107\u1161\u11AF\u1100\u1167\u11AB", "\u1107\u1161\u11AF\u1103\u1161\u11AF", "\u1107\u1161\u11AF\u1105\u1166", "\u1107\u1161\u11AF\u1106\u1169\u11A8", "\u1107\u1161\u11AF\u1107\u1161\u1103\u1161\u11A8", "\u1107\u1161\u11AF\u1109\u1162\u11BC", "\u1107\u1161\u11AF\u110B\u1173\u11B7", "\u1107\u1161\u11AF\u110C\u1161\u1100\u116E\u11A8", "\u1107\u1161\u11AF\u110C\u1165\u11AB", "\u1107\u1161\u11AF\u1110\u1169\u11B8", "\u1107\u1161\u11AF\u1111\u116D", "\u1107\u1161\u11B7\u1112\u1161\u1102\u1173\u11AF", "\u1107\u1161\u11B8\u1100\u1173\u1105\u1173\u11BA", "\u1107\u1161\u11B8\u1106\u1161\u11BA", "\u1107\u1161\u11B8\u1109\u1161\u11BC", "\u1107\u1161\u11B8\u1109\u1169\u11C0", "\u1107\u1161\u11BC\u1100\u1173\u11B7", "\u1107\u1161\u11BC\u1106\u1167\u11AB", "\u1107\u1161\u11BC\u1106\u116E\u11AB", "\u1107\u1161\u11BC\u1107\u1161\u1103\u1161\u11A8", "\u1107\u1161\u11BC\u1107\u1165\u11B8", "\u1107\u1161\u11BC\u1109\u1169\u11BC", "\u1107\u1161\u11BC\u1109\u1175\u11A8", "\u1107\u1161\u11BC\u110B\u1161\u11AB", "\u1107\u1161\u11BC\u110B\u116E\u11AF", "\u1107\u1161\u11BC\u110C\u1175", "\u1107\u1161\u11BC\u1112\u1161\u11A8", "\u1107\u1161\u11BC\u1112\u1162", "\u1107\u1161\u11BC\u1112\u1163\u11BC", "\u1107\u1162\u1100\u1167\u11BC", "\u1107\u1162\u1101\u1169\u11B8", "\u1107\u1162\u1103\u1161\u11AF", "\u1107\u1162\u1103\u1173\u1106\u1175\u11AB\u1110\u1165\u11AB", "\u1107\u1162\u11A8\u1103\u116E\u1109\u1161\u11AB", "\u1107\u1162\u11A8\u1109\u1162\u11A8", "\u1107\u1162\u11A8\u1109\u1165\u11BC", "\u1107\u1162\u11A8\u110B\u1175\u11AB", "\u1107\u1162\u11A8\u110C\u1166", "\u1107\u1162\u11A8\u1112\u116A\u110C\u1165\u11B7", "\u1107\u1165\u1105\u1173\u11BA", "\u1107\u1165\u1109\u1165\u11BA", "\u1107\u1165\u1110\u1173\u11AB", "\u1107\u1165\u11AB\u1100\u1162", "\u1107\u1165\u11AB\u110B\u1167\u11A8", "\u1107\u1165\u11AB\u110C\u1175", "\u1107\u1165\u11AB\u1112\u1169", "\u1107\u1165\u11AF\u1100\u1173\u11B7", "\u1107\u1165\u11AF\u1105\u1166", "\u1107\u1165\u11AF\u110A\u1165", "\u1107\u1165\u11B7\u110B\u1171", "\u1107\u1165\u11B7\u110B\u1175\u11AB", "\u1107\u1165\u11B7\u110C\u116C", "\u1107\u1165\u11B8\u1105\u1172\u11AF", "\u1107\u1165\u11B8\u110B\u116F\u11AB", "\u1107\u1165\u11B8\u110C\u1165\u11A8", "\u1107\u1165\u11B8\u110E\u1175\u11A8", "\u1107\u1166\u110B\u1175\u110C\u1175\u11BC", "\u1107\u1166\u11AF\u1110\u1173", "\u1107\u1167\u11AB\u1100\u1167\u11BC", "\u1107\u1167\u11AB\u1103\u1169\u11BC", "\u1107\u1167\u11AB\u1106\u1167\u11BC", "\u1107\u1167\u11AB\u1109\u1175\u11AB", "\u1107\u1167\u11AB\u1112\u1169\u1109\u1161", "\u1107\u1167\u11AB\u1112\u116A", "\u1107\u1167\u11AF\u1103\u1169", "\u1107\u1167\u11AF\u1106\u1167\u11BC", "\u1107\u1167\u11AF\u110B\u1175\u11AF", "\u1107\u1167\u11BC\u1109\u1175\u11AF", "\u1107\u1167\u11BC\u110B\u1161\u1105\u1175", "\u1107\u1167\u11BC\u110B\u116F\u11AB", "\u1107\u1169\u1100\u116A\u11AB", "\u1107\u1169\u1102\u1165\u1109\u1173", "\u1107\u1169\u1105\u1161\u1109\u1162\u11A8", "\u1107\u1169\u1105\u1161\u11B7", "\u1107\u1169\u1105\u1173\u11B7", "\u1107\u1169\u1109\u1161\u11BC", "\u1107\u1169\u110B\u1161\u11AB", "\u1107\u1169\u110C\u1161\u1100\u1175", "\u1107\u1169\u110C\u1161\u11BC", "\u1107\u1169\u110C\u1165\u11AB", "\u1107\u1169\u110C\u1169\u11AB", "\u1107\u1169\u1110\u1169\u11BC", "\u1107\u1169\u1111\u1167\u11AB\u110C\u1165\u11A8", "\u1107\u1169\u1112\u1165\u11B7", "\u1107\u1169\u11A8\u1103\u1169", "\u1107\u1169\u11A8\u1109\u1161", "\u1107\u1169\u11A8\u1109\u116E\u11BC\u110B\u1161", "\u1107\u1169\u11A8\u1109\u1173\u11B8", "\u1107\u1169\u11A9\u110B\u1173\u11B7", "\u1107\u1169\u11AB\u1100\u1167\u11A8\u110C\u1165\u11A8", "\u1107\u1169\u11AB\u1105\u1162", "\u1107\u1169\u11AB\u1107\u116E", "\u1107\u1169\u11AB\u1109\u1161", "\u1107\u1169\u11AB\u1109\u1165\u11BC", "\u1107\u1169\u11AB\u110B\u1175\u11AB", "\u1107\u1169\u11AB\u110C\u1175\u11AF", "\u1107\u1169\u11AF\u1111\u1166\u11AB", "\u1107\u1169\u11BC\u1109\u1161", "\u1107\u1169\u11BC\u110C\u1175", "\u1107\u1169\u11BC\u1110\u116E", "\u1107\u116E\u1100\u1173\u11AB", "\u1107\u116E\u1101\u1173\u1105\u1165\u110B\u116E\u11B7", "\u1107\u116E\u1103\u1161\u11B7", "\u1107\u116E\u1103\u1169\u11BC\u1109\u1161\u11AB", "\u1107\u116E\u1106\u116E\u11AB", "\u1107\u116E\u1107\u116E\u11AB", "\u1107\u116E\u1109\u1161\u11AB", "\u1107\u116E\u1109\u1161\u11BC", "\u1107\u116E\u110B\u1165\u11BF", "\u1107\u116E\u110B\u1175\u11AB", "\u1107\u116E\u110C\u1161\u11A8\u110B\u116D\u11BC", "\u1107\u116E\u110C\u1161\u11BC", "\u1107\u116E\u110C\u1165\u11BC", "\u1107\u116E\u110C\u1169\u11A8", "\u1107\u116E\u110C\u1175\u1105\u1165\u11AB\u1112\u1175", "\u1107\u116E\u110E\u1175\u11AB", "\u1107\u116E\u1110\u1161\u11A8", "\u1107\u116E\u1111\u116E\u11B7", "\u1107\u116E\u1112\u116C\u110C\u1161\u11BC", "\u1107\u116E\u11A8\u1107\u116E", "\u1107\u116E\u11A8\u1112\u1161\u11AB", "\u1107\u116E\u11AB\u1102\u1169", "\u1107\u116E\u11AB\u1105\u1163\u11BC", "\u1107\u116E\u11AB\u1105\u1175", "\u1107\u116E\u11AB\u1106\u1167\u11BC", "\u1107\u116E\u11AB\u1109\u1165\u11A8", "\u1107\u116E\u11AB\u110B\u1163", "\u1107\u116E\u11AB\u110B\u1171\u1100\u1175", "\u1107\u116E\u11AB\u1111\u1175\u11AF", "\u1107\u116E\u11AB\u1112\u1169\u11BC\u1109\u1162\u11A8", "\u1107\u116E\u11AF\u1100\u1169\u1100\u1175", "\u1107\u116E\u11AF\u1100\u116A", "\u1107\u116E\u11AF\u1100\u116D", "\u1107\u116E\u11AF\u1101\u1169\u11BE", "\u1107\u116E\u11AF\u1106\u1161\u11AB", "\u1107\u116E\u11AF\u1107\u1165\u11B8", "\u1107\u116E\u11AF\u1107\u1175\u11BE", "\u1107\u116E\u11AF\u110B\u1161\u11AB", "\u1107\u116E\u11AF\u110B\u1175\u110B\u1175\u11A8", "\u1107\u116E\u11AF\u1112\u1162\u11BC", "\u1107\u1173\u1105\u1162\u11AB\u1103\u1173", "\u1107\u1175\u1100\u1173\u11A8", "\u1107\u1175\u1102\u1161\u11AB", "\u1107\u1175\u1102\u1175\u11AF", "\u1107\u1175\u1103\u116E\u11AF\u1100\u1175", "\u1107\u1175\u1103\u1175\u110B\u1169", "\u1107\u1175\u1105\u1169\u1109\u1169", "\u1107\u1175\u1106\u1161\u11AB", "\u1107\u1175\u1106\u1167\u11BC", "\u1107\u1175\u1106\u1175\u11AF", "\u1107\u1175\u1107\u1161\u1105\u1161\u11B7", "\u1107\u1175\u1107\u1175\u11B7\u1107\u1161\u11B8", "\u1107\u1175\u1109\u1161\u11BC", "\u1107\u1175\u110B\u116D\u11BC", "\u1107\u1175\u110B\u1172\u11AF", "\u1107\u1175\u110C\u116E\u11BC", "\u1107\u1175\u1110\u1161\u1106\u1175\u11AB", "\u1107\u1175\u1111\u1161\u11AB", "\u1107\u1175\u11AF\u1103\u1175\u11BC", "\u1107\u1175\u11BA\u1106\u116E\u11AF", "\u1107\u1175\u11BA\u1107\u1161\u11BC\u110B\u116E\u11AF", "\u1107\u1175\u11BA\u110C\u116E\u11AF\u1100\u1175", "\u1107\u1175\u11BE\u1101\u1161\u11AF", "\u1108\u1161\u11AF\u1100\u1161\u11AB\u1109\u1162\u11A8", "\u1108\u1161\u11AF\u1105\u1162", "\u1108\u1161\u11AF\u1105\u1175", "\u1109\u1161\u1100\u1165\u11AB", "\u1109\u1161\u1100\u1168\u110C\u1165\u11AF", "\u1109\u1161\u1102\u1161\u110B\u1175", "\u1109\u1161\u1102\u1163\u11BC", "\u1109\u1161\u1105\u1161\u11B7", "\u1109\u1161\u1105\u1161\u11BC", "\u1109\u1161\u1105\u1175\u11B8", "\u1109\u1161\u1106\u1169\u1102\u1175\u11B7", "\u1109\u1161\u1106\u116E\u11AF", "\u1109\u1161\u1107\u1161\u11BC", "\u1109\u1161\u1109\u1161\u11BC", "\u1109\u1161\u1109\u1162\u11BC\u1112\u116A\u11AF", "\u1109\u1161\u1109\u1165\u11AF", "\u1109\u1161\u1109\u1173\u11B7", "\u1109\u1161\u1109\u1175\u11AF", "\u1109\u1161\u110B\u1165\u11B8", "\u1109\u1161\u110B\u116D\u11BC", "\u1109\u1161\u110B\u116F\u11AF", "\u1109\u1161\u110C\u1161\u11BC", "\u1109\u1161\u110C\u1165\u11AB", "\u1109\u1161\u110C\u1175\u11AB", "\u1109\u1161\u110E\u1169\u11AB", "\u1109\u1161\u110E\u116E\u11AB\u1100\u1175", "\u1109\u1161\u1110\u1161\u11BC", "\u1109\u1161\u1110\u116E\u1105\u1175", "\u1109\u1161\u1112\u1173\u11AF", "\u1109\u1161\u11AB\u1100\u1175\u11AF", "\u1109\u1161\u11AB\u1107\u116E\u110B\u1175\u11AB\u1100\u116A", "\u1109\u1161\u11AB\u110B\u1165\u11B8", "\u1109\u1161\u11AB\u110E\u1162\u11A8", "\u1109\u1161\u11AF\u1105\u1175\u11B7", "\u1109\u1161\u11AF\u110B\u1175\u11AB", "\u1109\u1161\u11AF\u110D\u1161\u11A8", "\u1109\u1161\u11B7\u1100\u1168\u1110\u1161\u11BC", "\u1109\u1161\u11B7\u1100\u116E\u11A8", "\u1109\u1161\u11B7\u1109\u1175\u11B8", "\u1109\u1161\u11B7\u110B\u116F\u11AF", "\u1109\u1161\u11B7\u110E\u1169\u11AB", "\u1109\u1161\u11BC\u1100\u116A\u11AB", "\u1109\u1161\u11BC\u1100\u1173\u11B7", "\u1109\u1161\u11BC\u1103\u1162", "\u1109\u1161\u11BC\u1105\u1172", "\u1109\u1161\u11BC\u1107\u1161\u11AB\u1100\u1175", "\u1109\u1161\u11BC\u1109\u1161\u11BC", "\u1109\u1161\u11BC\u1109\u1175\u11A8", "\u1109\u1161\u11BC\u110B\u1165\u11B8", "\u1109\u1161\u11BC\u110B\u1175\u11AB", "\u1109\u1161\u11BC\u110C\u1161", "\u1109\u1161\u11BC\u110C\u1165\u11B7", "\u1109\u1161\u11BC\u110E\u1165", "\u1109\u1161\u11BC\u110E\u116E", "\u1109\u1161\u11BC\u1110\u1162", "\u1109\u1161\u11BC\u1111\u116D", "\u1109\u1161\u11BC\u1111\u116E\u11B7", "\u1109\u1161\u11BC\u1112\u116A\u11BC", "\u1109\u1162\u1107\u1167\u11A8", "\u1109\u1162\u11A8\u1101\u1161\u11AF", "\u1109\u1162\u11A8\u110B\u1167\u11AB\u1111\u1175\u11AF", "\u1109\u1162\u11BC\u1100\u1161\u11A8", "\u1109\u1162\u11BC\u1106\u1167\u11BC", "\u1109\u1162\u11BC\u1106\u116E\u11AF", "\u1109\u1162\u11BC\u1107\u1161\u11BC\u1109\u1169\u11BC", "\u1109\u1162\u11BC\u1109\u1161\u11AB", "\u1109\u1162\u11BC\u1109\u1165\u11AB", "\u1109\u1162\u11BC\u1109\u1175\u11AB", "\u1109\u1162\u11BC\u110B\u1175\u11AF", "\u1109\u1162\u11BC\u1112\u116A\u11AF", "\u1109\u1165\u1105\u1161\u11B8", "\u1109\u1165\u1105\u1173\u11AB", "\u1109\u1165\u1106\u1167\u11BC", "\u1109\u1165\u1106\u1175\u11AB", "\u1109\u1165\u1107\u1175\u1109\u1173", "\u1109\u1165\u110B\u1163\u11BC", "\u1109\u1165\u110B\u116E\u11AF", "\u1109\u1165\u110C\u1165\u11A8", "\u1109\u1165\u110C\u1165\u11B7", "\u1109\u1165\u110D\u1169\u11A8", "\u1109\u1165\u110F\u1173\u11AF", "\u1109\u1165\u11A8\u1109\u1161", "\u1109\u1165\u11A8\u110B\u1172", "\u1109\u1165\u11AB\u1100\u1165", "\u1109\u1165\u11AB\u1106\u116E\u11AF", "\u1109\u1165\u11AB\u1107\u1162", "\u1109\u1165\u11AB\u1109\u1162\u11BC", "\u1109\u1165\u11AB\u1109\u116E", "\u1109\u1165\u11AB\u110B\u116F\u11AB", "\u1109\u1165\u11AB\u110C\u1161\u11BC", "\u1109\u1165\u11AB\u110C\u1165\u11AB", "\u1109\u1165\u11AB\u1110\u1162\u11A8", "\u1109\u1165\u11AB\u1111\u116E\u11BC\u1100\u1175", "\u1109\u1165\u11AF\u1100\u1165\u110C\u1175", "\u1109\u1165\u11AF\u1102\u1161\u11AF", "\u1109\u1165\u11AF\u1105\u1165\u11BC\u1110\u1161\u11BC", "\u1109\u1165\u11AF\u1106\u1167\u11BC", "\u1109\u1165\u11AF\u1106\u116E\u11AB", "\u1109\u1165\u11AF\u1109\u1161", "\u1109\u1165\u11AF\u110B\u1161\u11A8\u1109\u1161\u11AB", "\u1109\u1165\u11AF\u110E\u1175", "\u1109\u1165\u11AF\u1110\u1161\u11BC", "\u1109\u1165\u11B8\u110A\u1175", "\u1109\u1165\u11BC\u1100\u1169\u11BC", "\u1109\u1165\u11BC\u1103\u1161\u11BC", "\u1109\u1165\u11BC\u1106\u1167\u11BC", "\u1109\u1165\u11BC\u1107\u1167\u11AF", "\u1109\u1165\u11BC\u110B\u1175\u11AB", "\u1109\u1165\u11BC\u110C\u1161\u11BC", "\u1109\u1165\u11BC\u110C\u1165\u11A8", "\u1109\u1165\u11BC\u110C\u1175\u11AF", "\u1109\u1165\u11BC\u1112\u1161\u11B7", "\u1109\u1166\u1100\u1173\u11B7", "\u1109\u1166\u1106\u1175\u1102\u1161", "\u1109\u1166\u1109\u1161\u11BC", "\u1109\u1166\u110B\u116F\u11AF", "\u1109\u1166\u110C\u1169\u11BC\u1103\u1162\u110B\u116A\u11BC", "\u1109\u1166\u1110\u1161\u11A8", "\u1109\u1166\u11AB\u1110\u1165", "\u1109\u1166\u11AB\u1110\u1175\u1106\u1175\u1110\u1165", "\u1109\u1166\u11BA\u110D\u1162", "\u1109\u1169\u1100\u1172\u1106\u1169", "\u1109\u1169\u1100\u1173\u11A8\u110C\u1165\u11A8", "\u1109\u1169\u1100\u1173\u11B7", "\u1109\u1169\u1102\u1161\u1100\u1175", "\u1109\u1169\u1102\u1167\u11AB", "\u1109\u1169\u1103\u1173\u11A8", "\u1109\u1169\u1106\u1161\u11BC", "\u1109\u1169\u1106\u116E\u11AB", "\u1109\u1169\u1109\u1165\u11AF", "\u1109\u1169\u1109\u1169\u11A8", "\u1109\u1169\u110B\u1161\u1100\u116A", "\u1109\u1169\u110B\u116D\u11BC", "\u1109\u1169\u110B\u116F\u11AB", "\u1109\u1169\u110B\u1173\u11B7", "\u1109\u1169\u110C\u116E\u11BC\u1112\u1175", "\u1109\u1169\u110C\u1175\u1111\u116E\u11B7", "\u1109\u1169\u110C\u1175\u11AF", "\u1109\u1169\u1111\u116E\u11BC", "\u1109\u1169\u1112\u1167\u11BC", "\u1109\u1169\u11A8\u1103\u1161\u11B7", "\u1109\u1169\u11A8\u1103\u1169", "\u1109\u1169\u11A8\u110B\u1169\u11BA", "\u1109\u1169\u11AB\u1100\u1161\u1105\u1161\u11A8", "\u1109\u1169\u11AB\u1100\u1175\u11AF", "\u1109\u1169\u11AB\u1102\u1167", "\u1109\u1169\u11AB\u1102\u1175\u11B7", "\u1109\u1169\u11AB\u1103\u1173\u11BC", "\u1109\u1169\u11AB\u1106\u1169\u11A8", "\u1109\u1169\u11AB\u1108\u1167\u11A8", "\u1109\u1169\u11AB\u1109\u1175\u11AF", "\u1109\u1169\u11AB\u110C\u1175\u11AF", "\u1109\u1169\u11AB\u1110\u1169\u11B8", "\u1109\u1169\u11AB\u1112\u1162", "\u1109\u1169\u11AF\u110C\u1175\u11A8\u1112\u1175", "\u1109\u1169\u11B7\u110A\u1175", "\u1109\u1169\u11BC\u110B\u1161\u110C\u1175", "\u1109\u1169\u11BC\u110B\u1175", "\u1109\u1169\u11BC\u1111\u1167\u11AB", "\u1109\u116C\u1100\u1169\u1100\u1175", "\u1109\u116D\u1111\u1175\u11BC", "\u1109\u116E\u1100\u1165\u11AB", "\u1109\u116E\u1102\u1167\u11AB", "\u1109\u116E\u1103\u1161\u11AB", "\u1109\u116E\u1103\u1169\u11BA\u1106\u116E\u11AF", "\u1109\u116E\u1103\u1169\u11BC\u110C\u1165\u11A8", "\u1109\u116E\u1106\u1167\u11AB", "\u1109\u116E\u1106\u1167\u11BC", "\u1109\u116E\u1107\u1161\u11A8", "\u1109\u116E\u1109\u1161\u11BC", "\u1109\u116E\u1109\u1165\u11A8", "\u1109\u116E\u1109\u116E\u11AF", "\u1109\u116E\u1109\u1175\u1105\u1169", "\u1109\u116E\u110B\u1165\u11B8", "\u1109\u116E\u110B\u1167\u11B7", "\u1109\u116E\u110B\u1167\u11BC", "\u1109\u116E\u110B\u1175\u11B8", "\u1109\u116E\u110C\u116E\u11AB", "\u1109\u116E\u110C\u1175\u11B8", "\u1109\u116E\u110E\u116E\u11AF", "\u1109\u116E\u110F\u1165\u11BA", "\u1109\u116E\u1111\u1175\u11AF", "\u1109\u116E\u1112\u1161\u11A8", "\u1109\u116E\u1112\u1165\u11B7\u1109\u1162\u11BC", "\u1109\u116E\u1112\u116A\u1100\u1175", "\u1109\u116E\u11A8\u1102\u1167", "\u1109\u116E\u11A8\u1109\u1169", "\u1109\u116E\u11A8\u110C\u1166", "\u1109\u116E\u11AB\u1100\u1161\u11AB", "\u1109\u116E\u11AB\u1109\u1165", "\u1109\u116E\u11AB\u1109\u116E", "\u1109\u116E\u11AB\u1109\u1175\u11A8\u1100\u1161\u11AB", "\u1109\u116E\u11AB\u110B\u1171", "\u1109\u116E\u11AE\u1100\u1161\u1105\u1161\u11A8", "\u1109\u116E\u11AF\u1107\u1167\u11BC", "\u1109\u116E\u11AF\u110C\u1175\u11B8", "\u1109\u116E\u11BA\u110C\u1161", "\u1109\u1173\u1102\u1175\u11B7", "\u1109\u1173\u1106\u116E\u11AF", "\u1109\u1173\u1109\u1173\u1105\u1169", "\u1109\u1173\u1109\u1173\u11BC", "\u1109\u1173\u110B\u1170\u1110\u1165", "\u1109\u1173\u110B\u1171\u110E\u1175", "\u1109\u1173\u110F\u1166\u110B\u1175\u1110\u1173", "\u1109\u1173\u1110\u1172\u1103\u1175\u110B\u1169", "\u1109\u1173\u1110\u1173\u1105\u1166\u1109\u1173", "\u1109\u1173\u1111\u1169\u110E\u1173", "\u1109\u1173\u11AF\u110D\u1165\u11A8", "\u1109\u1173\u11AF\u1111\u1173\u11B7", "\u1109\u1173\u11B8\u1100\u116A\u11AB", "\u1109\u1173\u11B8\u1100\u1175", "\u1109\u1173\u11BC\u1100\u1162\u11A8", "\u1109\u1173\u11BC\u1105\u1175", "\u1109\u1173\u11BC\u1107\u116E", "\u1109\u1173\u11BC\u110B\u116D\u11BC\u110E\u1161", "\u1109\u1173\u11BC\u110C\u1175\u11AB", "\u1109\u1175\u1100\u1161\u11A8", "\u1109\u1175\u1100\u1161\u11AB", "\u1109\u1175\u1100\u1169\u11AF", "\u1109\u1175\u1100\u1173\u11B7\u110E\u1175", "\u1109\u1175\u1102\u1161\u1105\u1175\u110B\u1169", "\u1109\u1175\u1103\u1162\u11A8", "\u1109\u1175\u1105\u1175\u110C\u1173", "\u1109\u1175\u1106\u1166\u11AB\u1110\u1173", "\u1109\u1175\u1106\u1175\u11AB", "\u1109\u1175\u1107\u116E\u1106\u1169", "\u1109\u1175\u1109\u1165\u11AB", "\u1109\u1175\u1109\u1165\u11AF", "\u1109\u1175\u1109\u1173\u1110\u1166\u11B7", "\u1109\u1175\u110B\u1161\u1107\u1165\u110C\u1175", "\u1109\u1175\u110B\u1165\u1106\u1165\u1102\u1175", "\u1109\u1175\u110B\u116F\u11AF", "\u1109\u1175\u110B\u1175\u11AB", "\u1109\u1175\u110B\u1175\u11AF", "\u1109\u1175\u110C\u1161\u11A8", "\u1109\u1175\u110C\u1161\u11BC", "\u1109\u1175\u110C\u1165\u11AF", "\u1109\u1175\u110C\u1165\u11B7", "\u1109\u1175\u110C\u116E\u11BC", "\u1109\u1175\u110C\u1173\u11AB", "\u1109\u1175\u110C\u1175\u11B8", "\u1109\u1175\u110E\u1165\u11BC", "\u1109\u1175\u1112\u1161\u11B8", "\u1109\u1175\u1112\u1165\u11B7", "\u1109\u1175\u11A8\u1100\u116E", "\u1109\u1175\u11A8\u1100\u1175", "\u1109\u1175\u11A8\u1103\u1161\u11BC", "\u1109\u1175\u11A8\u1105\u1163\u11BC", "\u1109\u1175\u11A8\u1105\u116D\u1111\u116E\u11B7", "\u1109\u1175\u11A8\u1106\u116E\u11AF", "\u1109\u1175\u11A8\u1108\u1161\u11BC", "\u1109\u1175\u11A8\u1109\u1161", "\u1109\u1175\u11A8\u1109\u1162\u11BC\u1112\u116A\u11AF", "\u1109\u1175\u11A8\u110E\u1169", "\u1109\u1175\u11A8\u1110\u1161\u11A8", "\u1109\u1175\u11A8\u1111\u116E\u11B7", "\u1109\u1175\u11AB\u1100\u1169", "\u1109\u1175\u11AB\u1100\u1172", "\u1109\u1175\u11AB\u1102\u1167\u11B7", "\u1109\u1175\u11AB\u1106\u116E\u11AB", "\u1109\u1175\u11AB\u1107\u1161\u11AF", "\u1109\u1175\u11AB\u1107\u1175", "\u1109\u1175\u11AB\u1109\u1161", "\u1109\u1175\u11AB\u1109\u1166", "\u1109\u1175\u11AB\u110B\u116D\u11BC", "\u1109\u1175\u11AB\u110C\u1166\u1111\u116E\u11B7", "\u1109\u1175\u11AB\u110E\u1165\u11BC", "\u1109\u1175\u11AB\u110E\u1166", "\u1109\u1175\u11AB\u1112\u116A", "\u1109\u1175\u11AF\u1100\u1161\u11B7", "\u1109\u1175\u11AF\u1102\u1162", "\u1109\u1175\u11AF\u1105\u1167\u11A8", "\u1109\u1175\u11AF\u1105\u1168", "\u1109\u1175\u11AF\u1106\u1161\u11BC", "\u1109\u1175\u11AF\u1109\u116E", "\u1109\u1175\u11AF\u1109\u1173\u11B8", "\u1109\u1175\u11AF\u1109\u1175", "\u1109\u1175\u11AF\u110C\u1161\u11BC", "\u1109\u1175\u11AF\u110C\u1165\u11BC", "\u1109\u1175\u11AF\u110C\u1175\u11AF\u110C\u1165\u11A8", "\u1109\u1175\u11AF\u110E\u1165\u11AB", "\u1109\u1175\u11AF\u110E\u1166", "\u1109\u1175\u11AF\u110F\u1165\u11BA", "\u1109\u1175\u11AF\u1110\u1162", "\u1109\u1175\u11AF\u1111\u1162", "\u1109\u1175\u11AF\u1112\u1165\u11B7", "\u1109\u1175\u11AF\u1112\u1167\u11AB", "\u1109\u1175\u11B7\u1105\u1175", "\u1109\u1175\u11B7\u1107\u116E\u1105\u1173\u11B7", "\u1109\u1175\u11B7\u1109\u1161", "\u1109\u1175\u11B7\u110C\u1161\u11BC", "\u1109\u1175\u11B7\u110C\u1165\u11BC", "\u1109\u1175\u11B7\u1111\u1161\u11AB", "\u110A\u1161\u11BC\u1103\u116E\u11BC\u110B\u1175", "\u110A\u1175\u1105\u1173\u11B7", "\u110A\u1175\u110B\u1161\u11BA", "\u110B\u1161\u1100\u1161\u110A\u1175", "\u110B\u1161\u1102\u1161\u110B\u116E\u11AB\u1109\u1165", "\u110B\u1161\u1103\u1173\u1102\u1175\u11B7", "\u110B\u1161\u1103\u1173\u11AF", "\u110B\u1161\u1109\u1171\u110B\u116E\u11B7", "\u110B\u1161\u1109\u1173\u1111\u1161\u11AF\u1110\u1173", "\u110B\u1161\u1109\u1175\u110B\u1161", "\u110B\u1161\u110B\u116E\u11AF\u1105\u1165", "\u110B\u1161\u110C\u1165\u110A\u1175", "\u110B\u1161\u110C\u116E\u11B7\u1106\u1161", "\u110B\u1161\u110C\u1175\u11A8", "\u110B\u1161\u110E\u1175\u11B7", "\u110B\u1161\u1111\u1161\u1110\u1173", "\u110B\u1161\u1111\u1173\u1105\u1175\u110F\u1161", "\u110B\u1161\u1111\u1173\u11B7", "\u110B\u1161\u1112\u1169\u11B8", "\u110B\u1161\u1112\u1173\u11AB", "\u110B\u1161\u11A8\u1100\u1175", "\u110B\u1161\u11A8\u1106\u1169\u11BC", "\u110B\u1161\u11A8\u1109\u116E", "\u110B\u1161\u11AB\u1100\u1162", "\u110B\u1161\u11AB\u1100\u1167\u11BC", "\u110B\u1161\u11AB\u1100\u116A", "\u110B\u1161\u11AB\u1102\u1162", "\u110B\u1161\u11AB\u1102\u1167\u11BC", "\u110B\u1161\u11AB\u1103\u1169\u11BC", "\u110B\u1161\u11AB\u1107\u1161\u11BC", "\u110B\u1161\u11AB\u1107\u116E", "\u110B\u1161\u11AB\u110C\u116E", "\u110B\u1161\u11AF\u1105\u116E\u1106\u1175\u1102\u1172\u11B7", "\u110B\u1161\u11AF\u110F\u1169\u110B\u1169\u11AF", "\u110B\u1161\u11B7\u1109\u1175", "\u110B\u1161\u11B7\u110F\u1165\u11BA", "\u110B\u1161\u11B8\u1105\u1167\u11A8", "\u110B\u1161\u11C1\u1102\u1161\u11AF", "\u110B\u1161\u11C1\u1106\u116E\u11AB", "\u110B\u1162\u110B\u1175\u11AB", "\u110B\u1162\u110C\u1165\u11BC", "\u110B\u1162\u11A8\u1109\u116E", "\u110B\u1162\u11AF\u1107\u1165\u11B7", "\u110B\u1163\u1100\u1161\u11AB", "\u110B\u1163\u1103\u1161\u11AB", "\u110B\u1163\u110B\u1169\u11BC", "\u110B\u1163\u11A8\u1100\u1161\u11AB", "\u110B\u1163\u11A8\u1100\u116E\u11A8", "\u110B\u1163\u11A8\u1109\u1169\u11A8", "\u110B\u1163\u11A8\u1109\u116E", "\u110B\u1163\u11A8\u110C\u1165\u11B7", "\u110B\u1163\u11A8\u1111\u116E\u11B7", "\u110B\u1163\u11A8\u1112\u1169\u11AB\u1102\u1167", "\u110B\u1163\u11BC\u1102\u1167\u11B7", "\u110B\u1163\u11BC\u1105\u1167\u11A8", "\u110B\u1163\u11BC\u1106\u1161\u11AF", "\u110B\u1163\u11BC\u1107\u1162\u110E\u116E", "\u110B\u1163\u11BC\u110C\u116E", "\u110B\u1163\u11BC\u1111\u1161", "\u110B\u1165\u1103\u116E\u11B7", "\u110B\u1165\u1105\u1167\u110B\u116E\u11B7", "\u110B\u1165\u1105\u1173\u11AB", "\u110B\u1165\u110C\u1166\u11BA\u1107\u1161\u11B7", "\u110B\u1165\u110D\u1162\u11BB\u1103\u1173\u11AB", "\u110B\u1165\u110D\u1165\u1103\u1161\u1100\u1161", "\u110B\u1165\u110D\u1165\u11AB\u110C\u1175", "\u110B\u1165\u11AB\u1102\u1175", "\u110B\u1165\u11AB\u1103\u1165\u11A8", "\u110B\u1165\u11AB\u1105\u1169\u11AB", "\u110B\u1165\u11AB\u110B\u1165", "\u110B\u1165\u11AF\u1100\u116E\u11AF", "\u110B\u1165\u11AF\u1105\u1173\u11AB", "\u110B\u1165\u11AF\u110B\u1173\u11B7", "\u110B\u1165\u11AF\u1111\u1175\u11BA", "\u110B\u1165\u11B7\u1106\u1161", "\u110B\u1165\u11B8\u1106\u116E", "\u110B\u1165\u11B8\u110C\u1169\u11BC", "\u110B\u1165\u11B8\u110E\u1166", "\u110B\u1165\u11BC\u1103\u1165\u11BC\u110B\u1175", "\u110B\u1165\u11BC\u1106\u1161\u11BC", "\u110B\u1165\u11BC\u1110\u1165\u1105\u1175", "\u110B\u1165\u11BD\u1100\u1173\u110C\u1166", "\u110B\u1166\u1102\u1165\u110C\u1175", "\u110B\u1166\u110B\u1165\u110F\u1165\u11AB", "\u110B\u1166\u11AB\u110C\u1175\u11AB", "\u110B\u1167\u1100\u1165\u11AB", "\u110B\u1167\u1100\u1169\u1109\u1162\u11BC", "\u110B\u1167\u1100\u116A\u11AB", "\u110B\u1167\u1100\u116E\u11AB", "\u110B\u1167\u1100\u116F\u11AB", "\u110B\u1167\u1103\u1162\u1109\u1162\u11BC", "\u110B\u1167\u1103\u1165\u11B2", "\u110B\u1167\u1103\u1169\u11BC\u1109\u1162\u11BC", "\u110B\u1167\u1103\u1173\u11AB", "\u110B\u1167\u1105\u1169\u11AB", "\u110B\u1167\u1105\u1173\u11B7", "\u110B\u1167\u1109\u1165\u11BA", "\u110B\u1167\u1109\u1165\u11BC", "\u110B\u1167\u110B\u116A\u11BC", "\u110B\u1167\u110B\u1175\u11AB", "\u110B\u1167\u110C\u1165\u11AB\u1112\u1175", "\u110B\u1167\u110C\u1175\u11A8\u110B\u116F\u11AB", "\u110B\u1167\u1112\u1161\u11A8\u1109\u1162\u11BC", "\u110B\u1167\u1112\u1162\u11BC", "\u110B\u1167\u11A8\u1109\u1161", "\u110B\u1167\u11A8\u1109\u1175", "\u110B\u1167\u11A8\u1112\u1161\u11AF", "\u110B\u1167\u11AB\u1100\u1167\u11AF", "\u110B\u1167\u11AB\u1100\u116E", "\u110B\u1167\u11AB\u1100\u1173\u11A8", "\u110B\u1167\u11AB\u1100\u1175", "\u110B\u1167\u11AB\u1105\u1161\u11A8", "\u110B\u1167\u11AB\u1109\u1165\u11AF", "\u110B\u1167\u11AB\u1109\u1166", "\u110B\u1167\u11AB\u1109\u1169\u11A8", "\u110B\u1167\u11AB\u1109\u1173\u11B8", "\u110B\u1167\u11AB\u110B\u1162", "\u110B\u1167\u11AB\u110B\u1168\u110B\u1175\u11AB", "\u110B\u1167\u11AB\u110B\u1175\u11AB", "\u110B\u1167\u11AB\u110C\u1161\u11BC", "\u110B\u1167\u11AB\u110C\u116E", "\u110B\u1167\u11AB\u110E\u116E\u11AF", "\u110B\u1167\u11AB\u1111\u1175\u11AF", "\u110B\u1167\u11AB\u1112\u1161\u11B8", "\u110B\u1167\u11AB\u1112\u1172", "\u110B\u1167\u11AF\u1100\u1175", "\u110B\u1167\u11AF\u1106\u1162", "\u110B\u1167\u11AF\u1109\u116C", "\u110B\u1167\u11AF\u1109\u1175\u11B7\u1112\u1175", "\u110B\u1167\u11AF\u110C\u1165\u11BC", "\u110B\u1167\u11AF\u110E\u1161", "\u110B\u1167\u11AF\u1112\u1173\u11AF", "\u110B\u1167\u11B7\u1105\u1167", "\u110B\u1167\u11B8\u1109\u1165", "\u110B\u1167\u11BC\u1100\u116E\u11A8", "\u110B\u1167\u11BC\u1102\u1161\u11B7", "\u110B\u1167\u11BC\u1109\u1161\u11BC", "\u110B\u1167\u11BC\u110B\u1163\u11BC", "\u110B\u1167\u11BC\u110B\u1167\u11A8", "\u110B\u1167\u11BC\u110B\u116E\u11BC", "\u110B\u1167\u11BC\u110B\u116F\u11AB\u1112\u1175", "\u110B\u1167\u11BC\u1112\u1161", "\u110B\u1167\u11BC\u1112\u1163\u11BC", "\u110B\u1167\u11BC\u1112\u1169\u11AB", "\u110B\u1167\u11BC\u1112\u116A", "\u110B\u1167\u11C1\u1100\u116E\u1105\u1175", "\u110B\u1167\u11C1\u1107\u1161\u11BC", "\u110B\u1167\u11C1\u110C\u1175\u11B8", "\u110B\u1168\u1100\u1161\u11B7", "\u110B\u1168\u1100\u1173\u11B7", "\u110B\u1168\u1107\u1161\u11BC", "\u110B\u1168\u1109\u1161\u11AB", "\u110B\u1168\u1109\u1161\u11BC", "\u110B\u1168\u1109\u1165\u11AB", "\u110B\u1168\u1109\u116E\u11AF", "\u110B\u1168\u1109\u1173\u11B8", "\u110B\u1168\u1109\u1175\u11A8\u110C\u1161\u11BC", "\u110B\u1168\u110B\u1163\u11A8", "\u110B\u1168\u110C\u1165\u11AB", "\u110B\u1168\u110C\u1165\u11AF", "\u110B\u1168\u110C\u1165\u11BC", "\u110B\u1168\u110F\u1165\u11AB\u1103\u1162", "\u110B\u1168\u11BA\u1102\u1161\u11AF", "\u110B\u1169\u1102\u1173\u11AF", "\u110B\u1169\u1105\u1161\u11A8", "\u110B\u1169\u1105\u1162\u11BA\u1103\u1169\u11BC\u110B\u1161\u11AB", "\u110B\u1169\u1105\u1166\u11AB\u110C\u1175", "\u110B\u1169\u1105\u1169\u110C\u1175", "\u110B\u1169\u1105\u1173\u11AB\u1107\u1161\u11AF", "\u110B\u1169\u1107\u1173\u11AB", "\u110B\u1169\u1109\u1175\u11B8", "\u110B\u1169\u110B\u1167\u11B7", "\u110B\u1169\u110B\u116F\u11AF", "\u110B\u1169\u110C\u1165\u11AB", "\u110B\u1169\u110C\u1175\u11A8", "\u110B\u1169\u110C\u1175\u11BC\u110B\u1165", "\u110B\u1169\u1111\u1166\u1105\u1161", "\u110B\u1169\u1111\u1175\u1109\u1173\u1110\u1166\u11AF", "\u110B\u1169\u1112\u1175\u1105\u1167", "\u110B\u1169\u11A8\u1109\u1161\u11BC", "\u110B\u1169\u11A8\u1109\u116E\u1109\u116E", "\u110B\u1169\u11AB\u1100\u1161\u11BD", "\u110B\u1169\u11AB\u1105\u1161\u110B\u1175\u11AB", "\u110B\u1169\u11AB\u1106\u1169\u11B7", "\u110B\u1169\u11AB\u110C\u1169\u11BC\u110B\u1175\u11AF", "\u110B\u1169\u11AB\u1110\u1169\u11BC", "\u110B\u1169\u11AF\u1100\u1161\u110B\u1173\u11AF", "\u110B\u1169\u11AF\u1105\u1175\u11B7\u1111\u1175\u11A8", "\u110B\u1169\u11AF\u1112\u1162", "\u110B\u1169\u11BA\u110E\u1161\u1105\u1175\u11B7", "\u110B\u116A\u110B\u1175\u1109\u1167\u110E\u1173", "\u110B\u116A\u110B\u1175\u11AB", "\u110B\u116A\u11AB\u1109\u1165\u11BC", "\u110B\u116A\u11AB\u110C\u1165\u11AB", "\u110B\u116A\u11BC\u1107\u1175", "\u110B\u116A\u11BC\u110C\u1161", "\u110B\u116B\u1102\u1163\u1112\u1161\u1106\u1167\u11AB", "\u110B\u116B\u11AB\u110C\u1175", "\u110B\u116C\u1100\u1161\u11BA\u110C\u1175\u11B8", "\u110B\u116C\u1100\u116E\u11A8", "\u110B\u116C\u1105\u1169\u110B\u116E\u11B7", "\u110B\u116C\u1109\u1161\u11B7\u110E\u1169\u11AB", "\u110B\u116C\u110E\u116E\u11AF", "\u110B\u116C\u110E\u1175\u11B7", "\u110B\u116C\u1112\u1161\u11AF\u1106\u1165\u1102\u1175", "\u110B\u116C\u11AB\u1107\u1161\u11AF", "\u110B\u116C\u11AB\u1109\u1169\u11AB", "\u110B\u116C\u11AB\u110D\u1169\u11A8", "\u110B\u116D\u1100\u1173\u11B7", "\u110B\u116D\u110B\u1175\u11AF", "\u110B\u116D\u110C\u1173\u11B7", "\u110B\u116D\u110E\u1165\u11BC", "\u110B\u116D\u11BC\u1100\u1175", "\u110B\u116D\u11BC\u1109\u1165", "\u110B\u116D\u11BC\u110B\u1165", "\u110B\u116E\u1109\u1161\u11AB", "\u110B\u116E\u1109\u1165\u11AB", "\u110B\u116E\u1109\u1173\u11BC", "\u110B\u116E\u110B\u1167\u11AB\u1112\u1175", "\u110B\u116E\u110C\u1165\u11BC", "\u110B\u116E\u110E\u1166\u1100\u116E\u11A8", "\u110B\u116E\u1111\u1167\u11AB", "\u110B\u116E\u11AB\u1103\u1169\u11BC", "\u110B\u116E\u11AB\u1106\u1167\u11BC", "\u110B\u116E\u11AB\u1107\u1161\u11AB", "\u110B\u116E\u11AB\u110C\u1165\u11AB", "\u110B\u116E\u11AB\u1112\u1162\u11BC", "\u110B\u116E\u11AF\u1109\u1161\u11AB", "\u110B\u116E\u11AF\u110B\u1173\u11B7", "\u110B\u116E\u11B7\u110C\u1175\u11A8\u110B\u1175\u11B7", "\u110B\u116E\u11BA\u110B\u1165\u1105\u1173\u11AB", "\u110B\u116E\u11BA\u110B\u1173\u11B7", "\u110B\u116F\u1102\u1161\u11A8", "\u110B\u116F\u11AB\u1100\u1169", "\u110B\u116F\u11AB\u1105\u1162", "\u110B\u116F\u11AB\u1109\u1165", "\u110B\u116F\u11AB\u1109\u116E\u11BC\u110B\u1175", "\u110B\u116F\u11AB\u110B\u1175\u11AB", "\u110B\u116F\u11AB\u110C\u1161\u11BC", "\u110B\u116F\u11AB\u1111\u1175\u1109\u1173", "\u110B\u116F\u11AF\u1100\u1173\u11B8", "\u110B\u116F\u11AF\u1103\u1173\u110F\u1165\u11B8", "\u110B\u116F\u11AF\u1109\u1166", "\u110B\u116F\u11AF\u110B\u116D\u110B\u1175\u11AF", "\u110B\u1170\u110B\u1175\u1110\u1165", "\u110B\u1171\u1107\u1161\u11AB", "\u110B\u1171\u1107\u1165\u11B8", "\u110B\u1171\u1109\u1165\u11BC", "\u110B\u1171\u110B\u116F\u11AB", "\u110B\u1171\u1112\u1165\u11B7", "\u110B\u1171\u1112\u1167\u11B8", "\u110B\u1171\u11BA\u1109\u1161\u1105\u1161\u11B7", "\u110B\u1172\u1102\u1161\u11AB\u1112\u1175", "\u110B\u1172\u1105\u1165\u11B8", "\u110B\u1172\u1106\u1167\u11BC", "\u110B\u1172\u1106\u116E\u11AF", "\u110B\u1172\u1109\u1161\u11AB", "\u110B\u1172\u110C\u1165\u11A8", "\u110B\u1172\u110E\u1175\u110B\u116F\u11AB", "\u110B\u1172\u1112\u1161\u11A8", "\u110B\u1172\u1112\u1162\u11BC", "\u110B\u1172\u1112\u1167\u11BC", "\u110B\u1172\u11A8\u1100\u116E\u11AB", "\u110B\u1172\u11A8\u1109\u1161\u11BC", "\u110B\u1172\u11A8\u1109\u1175\u11B8", "\u110B\u1172\u11A8\u110E\u1166", "\u110B\u1173\u11AB\u1112\u1162\u11BC", "\u110B\u1173\u11B7\u1105\u1167\u11A8", "\u110B\u1173\u11B7\u1105\u116D", "\u110B\u1173\u11B7\u1107\u1161\u11AB", "\u110B\u1173\u11B7\u1109\u1165\u11BC", "\u110B\u1173\u11B7\u1109\u1175\u11A8", "\u110B\u1173\u11B7\u110B\u1161\u11A8", "\u110B\u1173\u11B7\u110C\u116E", "\u110B\u1174\u1100\u1167\u11AB", "\u110B\u1174\u1102\u1169\u11AB", "\u110B\u1174\u1106\u116E\u11AB", "\u110B\u1174\u1107\u1169\u11A8", "\u110B\u1174\u1109\u1175\u11A8", "\u110B\u1174\u1109\u1175\u11B7", "\u110B\u1174\u110B\u116C\u1105\u1169", "\u110B\u1174\u110B\u116D\u11A8", "\u110B\u1174\u110B\u116F\u11AB", "\u110B\u1174\u1112\u1161\u11A8", "\u110B\u1175\u1100\u1165\u11BA", "\u110B\u1175\u1100\u1169\u11BA", "\u110B\u1175\u1102\u1167\u11B7", "\u110B\u1175\u1102\u1169\u11B7", "\u110B\u1175\u1103\u1161\u11AF", "\u110B\u1175\u1103\u1162\u1105\u1169", "\u110B\u1175\u1103\u1169\u11BC", "\u110B\u1175\u1105\u1165\u11C2\u1100\u1166", "\u110B\u1175\u1105\u1167\u11A8\u1109\u1165", "\u110B\u1175\u1105\u1169\u11AB\u110C\u1165\u11A8", "\u110B\u1175\u1105\u1173\u11B7", "\u110B\u1175\u1106\u1175\u11AB", "\u110B\u1175\u1107\u1161\u11AF\u1109\u1169", "\u110B\u1175\u1107\u1167\u11AF", "\u110B\u1175\u1107\u116E\u11AF", "\u110B\u1175\u1108\u1161\u11AF", "\u110B\u1175\u1109\u1161\u11BC", "\u110B\u1175\u1109\u1165\u11BC", "\u110B\u1175\u1109\u1173\u11AF", "\u110B\u1175\u110B\u1163\u1100\u1175", "\u110B\u1175\u110B\u116D\u11BC", "\u110B\u1175\u110B\u116E\u11BA", "\u110B\u1175\u110B\u116F\u11AF", "\u110B\u1175\u110B\u1173\u11A8\u1100\u1169", "\u110B\u1175\u110B\u1175\u11A8", "\u110B\u1175\u110C\u1165\u11AB", "\u110B\u1175\u110C\u116E\u11BC", "\u110B\u1175\u1110\u1173\u11AE\u1102\u1161\u11AF", "\u110B\u1175\u1110\u1173\u11AF", "\u110B\u1175\u1112\u1169\u11AB", "\u110B\u1175\u11AB\u1100\u1161\u11AB", "\u110B\u1175\u11AB\u1100\u1167\u11A8", "\u110B\u1175\u11AB\u1100\u1169\u11BC", "\u110B\u1175\u11AB\u1100\u116E", "\u110B\u1175\u11AB\u1100\u1173\u11AB", "\u110B\u1175\u11AB\u1100\u1175", "\u110B\u1175\u11AB\u1103\u1169", "\u110B\u1175\u11AB\u1105\u1172", "\u110B\u1175\u11AB\u1106\u116E\u11AF", "\u110B\u1175\u11AB\u1109\u1162\u11BC", "\u110B\u1175\u11AB\u1109\u116B", "\u110B\u1175\u11AB\u110B\u1167\u11AB", "\u110B\u1175\u11AB\u110B\u116F\u11AB", "\u110B\u1175\u11AB\u110C\u1162", "\u110B\u1175\u11AB\u110C\u1169\u11BC", "\u110B\u1175\u11AB\u110E\u1165\u11AB", "\u110B\u1175\u11AB\u110E\u1166", "\u110B\u1175\u11AB\u1110\u1165\u1102\u1166\u11BA", "\u110B\u1175\u11AB\u1112\u1161", "\u110B\u1175\u11AB\u1112\u1167\u11BC", "\u110B\u1175\u11AF\u1100\u1169\u11B8", "\u110B\u1175\u11AF\u1100\u1175", "\u110B\u1175\u11AF\u1103\u1161\u11AB", "\u110B\u1175\u11AF\u1103\u1162", "\u110B\u1175\u11AF\u1103\u1173\u11BC", "\u110B\u1175\u11AF\u1107\u1161\u11AB", "\u110B\u1175\u11AF\u1107\u1169\u11AB", "\u110B\u1175\u11AF\u1107\u116E", "\u110B\u1175\u11AF\u1109\u1161\u11BC", "\u110B\u1175\u11AF\u1109\u1162\u11BC", "\u110B\u1175\u11AF\u1109\u1169\u11AB", "\u110B\u1175\u11AF\u110B\u116D\u110B\u1175\u11AF", "\u110B\u1175\u11AF\u110B\u116F\u11AF", "\u110B\u1175\u11AF\u110C\u1165\u11BC", "\u110B\u1175\u11AF\u110C\u1169\u11BC", "\u110B\u1175\u11AF\u110C\u116E\u110B\u1175\u11AF", "\u110B\u1175\u11AF\u110D\u1175\u11A8", "\u110B\u1175\u11AF\u110E\u1166", "\u110B\u1175\u11AF\u110E\u1175", "\u110B\u1175\u11AF\u1112\u1162\u11BC", "\u110B\u1175\u11AF\u1112\u116C\u110B\u116D\u11BC", "\u110B\u1175\u11B7\u1100\u1173\u11B7", "\u110B\u1175\u11B7\u1106\u116E", "\u110B\u1175\u11B8\u1103\u1162", "\u110B\u1175\u11B8\u1105\u1167\u11A8", "\u110B\u1175\u11B8\u1106\u1161\u11BA", "\u110B\u1175\u11B8\u1109\u1161", "\u110B\u1175\u11B8\u1109\u116E\u11AF", "\u110B\u1175\u11B8\u1109\u1175", "\u110B\u1175\u11B8\u110B\u116F\u11AB", "\u110B\u1175\u11B8\u110C\u1161\u11BC", "\u110B\u1175\u11B8\u1112\u1161\u11A8", "\u110C\u1161\u1100\u1161\u110B\u116D\u11BC", "\u110C\u1161\u1100\u1167\u11A8", "\u110C\u1161\u1100\u1173\u11A8", "\u110C\u1161\u1103\u1169\u11BC", "\u110C\u1161\u1105\u1161\u11BC", "\u110C\u1161\u1107\u116E\u1109\u1175\u11B7", "\u110C\u1161\u1109\u1175\u11A8", "\u110C\u1161\u1109\u1175\u11AB", "\u110C\u1161\u110B\u1167\u11AB", "\u110C\u1161\u110B\u116F\u11AB", "\u110C\u1161\u110B\u1172\u11AF", "\u110C\u1161\u110C\u1165\u11AB\u1100\u1165", "\u110C\u1161\u110C\u1165\u11BC", "\u110C\u1161\u110C\u1169\u11AB\u1109\u1175\u11B7", "\u110C\u1161\u1111\u1161\u11AB", "\u110C\u1161\u11A8\u1100\u1161", "\u110C\u1161\u11A8\u1102\u1167\u11AB", "\u110C\u1161\u11A8\u1109\u1165\u11BC", "\u110C\u1161\u11A8\u110B\u1165\u11B8", "\u110C\u1161\u11A8\u110B\u116D\u11BC", "\u110C\u1161\u11A8\u110B\u1173\u11AB\u1104\u1161\u11AF", "\u110C\u1161\u11A8\u1111\u116E\u11B7", "\u110C\u1161\u11AB\u1103\u1175", "\u110C\u1161\u11AB\u1104\u1173\u11A8", "\u110C\u1161\u11AB\u110E\u1175", "\u110C\u1161\u11AF\u1106\u1169\u11BA", "\u110C\u1161\u11B7\u1101\u1161\u11AB", "\u110C\u1161\u11B7\u1109\u116E\u1112\u1161\u11B7", "\u110C\u1161\u11B7\u1109\u1175", "\u110C\u1161\u11B7\u110B\u1169\u11BA", "\u110C\u1161\u11B7\u110C\u1161\u1105\u1175", "\u110C\u1161\u11B8\u110C\u1175", "\u110C\u1161\u11BC\u1100\u116A\u11AB", "\u110C\u1161\u11BC\u1100\u116E\u11AB", "\u110C\u1161\u11BC\u1100\u1175\u1100\u1161\u11AB", "\u110C\u1161\u11BC\u1105\u1162", "\u110C\u1161\u11BC\u1105\u1168", "\u110C\u1161\u11BC\u1105\u1173", "\u110C\u1161\u11BC\u1106\u1161", "\u110C\u1161\u11BC\u1106\u1167\u11AB", "\u110C\u1161\u11BC\u1106\u1169", "\u110C\u1161\u11BC\u1106\u1175", "\u110C\u1161\u11BC\u1107\u1175", "\u110C\u1161\u11BC\u1109\u1161", "\u110C\u1161\u11BC\u1109\u1169", "\u110C\u1161\u11BC\u1109\u1175\u11A8", "\u110C\u1161\u11BC\u110B\u1162\u110B\u1175\u11AB", "\u110C\u1161\u11BC\u110B\u1175\u11AB", "\u110C\u1161\u11BC\u110C\u1165\u11B7", "\u110C\u1161\u11BC\u110E\u1161", "\u110C\u1161\u11BC\u1112\u1161\u11A8\u1100\u1173\u11B7", "\u110C\u1162\u1102\u1173\u11BC", "\u110C\u1162\u1108\u1161\u11AF\u1105\u1175", "\u110C\u1162\u1109\u1161\u11AB", "\u110C\u1162\u1109\u1162\u11BC", "\u110C\u1162\u110C\u1161\u11A8\u1102\u1167\u11AB", "\u110C\u1162\u110C\u1165\u11BC", "\u110C\u1162\u110E\u1162\u1100\u1175", "\u110C\u1162\u1111\u1161\u11AB", "\u110C\u1162\u1112\u1161\u11A8", "\u110C\u1162\u1112\u116A\u11AF\u110B\u116D\u11BC", "\u110C\u1165\u1100\u1165\u11BA", "\u110C\u1165\u1100\u1169\u1105\u1175", "\u110C\u1165\u1100\u1169\u11BA", "\u110C\u1165\u1102\u1167\u11A8", "\u110C\u1165\u1105\u1165\u11AB", "\u110C\u1165\u1105\u1165\u11C2\u1100\u1166", "\u110C\u1165\u1107\u1165\u11AB", "\u110C\u1165\u110B\u116E\u11AF", "\u110C\u1165\u110C\u1165\u11AF\u1105\u1169", "\u110C\u1165\u110E\u116E\u11A8", "\u110C\u1165\u11A8\u1100\u1173\u11A8", "\u110C\u1165\u11A8\u1103\u1161\u11BC\u1112\u1175", "\u110C\u1165\u11A8\u1109\u1165\u11BC", "\u110C\u1165\u11A8\u110B\u116D\u11BC", "\u110C\u1165\u11A8\u110B\u1173\u11BC", "\u110C\u1165\u11AB\u1100\u1162", "\u110C\u1165\u11AB\u1100\u1169\u11BC", "\u110C\u1165\u11AB\u1100\u1175", "\u110C\u1165\u11AB\u1103\u1161\u11AF", "\u110C\u1165\u11AB\u1105\u1161\u1103\u1169", "\u110C\u1165\u11AB\u1106\u1161\u11BC", "\u110C\u1165\u11AB\u1106\u116E\u11AB", "\u110C\u1165\u11AB\u1107\u1161\u11AB", "\u110C\u1165\u11AB\u1107\u116E", "\u110C\u1165\u11AB\u1109\u1166", "\u110C\u1165\u11AB\u1109\u1175", "\u110C\u1165\u11AB\u110B\u116D\u11BC", "\u110C\u1165\u11AB\u110C\u1161", "\u110C\u1165\u11AB\u110C\u1162\u11BC", "\u110C\u1165\u11AB\u110C\u116E", "\u110C\u1165\u11AB\u110E\u1165\u11AF", "\u110C\u1165\u11AB\u110E\u1166", "\u110C\u1165\u11AB\u1110\u1169\u11BC", "\u110C\u1165\u11AB\u1112\u1167", "\u110C\u1165\u11AB\u1112\u116E", "\u110C\u1165\u11AF\u1103\u1162", "\u110C\u1165\u11AF\u1106\u1161\u11BC", "\u110C\u1165\u11AF\u1107\u1161\u11AB", "\u110C\u1165\u11AF\u110B\u1163\u11A8", "\u110C\u1165\u11AF\u110E\u1161", "\u110C\u1165\u11B7\u1100\u1165\u11B7", "\u110C\u1165\u11B7\u1109\u116E", "\u110C\u1165\u11B7\u1109\u1175\u11B7", "\u110C\u1165\u11B7\u110B\u116F\u11AB", "\u110C\u1165\u11B7\u110C\u1165\u11B7", "\u110C\u1165\u11B7\u110E\u1161", "\u110C\u1165\u11B8\u1100\u1173\u11AB", "\u110C\u1165\u11B8\u1109\u1175", "\u110C\u1165\u11B8\u110E\u1169\u11A8", "\u110C\u1165\u11BA\u1100\u1161\u1105\u1161\u11A8", "\u110C\u1165\u11BC\u1100\u1165\u110C\u1161\u11BC", "\u110C\u1165\u11BC\u1103\u1169", "\u110C\u1165\u11BC\u1105\u1172\u110C\u1161\u11BC", "\u110C\u1165\u11BC\u1105\u1175", "\u110C\u1165\u11BC\u1106\u1161\u11AF", "\u110C\u1165\u11BC\u1106\u1167\u11AB", "\u110C\u1165\u11BC\u1106\u116E\u11AB", "\u110C\u1165\u11BC\u1107\u1161\u11AB\u1103\u1162", "\u110C\u1165\u11BC\u1107\u1169", "\u110C\u1165\u11BC\u1107\u116E", "\u110C\u1165\u11BC\u1107\u1175", "\u110C\u1165\u11BC\u1109\u1161\u11BC", "\u110C\u1165\u11BC\u1109\u1165\u11BC", "\u110C\u1165\u11BC\u110B\u1169", "\u110C\u1165\u11BC\u110B\u116F\u11AB", "\u110C\u1165\u11BC\u110C\u1161\u11BC", "\u110C\u1165\u11BC\u110C\u1175", "\u110C\u1165\u11BC\u110E\u1175", "\u110C\u1165\u11BC\u1112\u116A\u11A8\u1112\u1175", "\u110C\u1166\u1100\u1169\u11BC", "\u110C\u1166\u1100\u116A\u110C\u1165\u11B7", "\u110C\u1166\u1103\u1162\u1105\u1169", "\u110C\u1166\u1106\u1169\u11A8", "\u110C\u1166\u1107\u1161\u11AF", "\u110C\u1166\u1107\u1165\u11B8", "\u110C\u1166\u1109\u1161\u11BA\u1102\u1161\u11AF", "\u110C\u1166\u110B\u1161\u11AB", "\u110C\u1166\u110B\u1175\u11AF", "\u110C\u1166\u110C\u1161\u11A8", "\u110C\u1166\u110C\u116E\u1103\u1169", "\u110C\u1166\u110E\u116E\u11AF", "\u110C\u1166\u1111\u116E\u11B7", "\u110C\u1166\u1112\u1161\u11AB", "\u110C\u1169\u1100\u1161\u11A8", "\u110C\u1169\u1100\u1165\u11AB", "\u110C\u1169\u1100\u1173\u11B7", "\u110C\u1169\u1100\u1175\u11BC", "\u110C\u1169\u1106\u1167\u11BC", "\u110C\u1169\u1106\u1175\u1105\u116D", "\u110C\u1169\u1109\u1161\u11BC", "\u110C\u1169\u1109\u1165\u11AB", "\u110C\u1169\u110B\u116D\u11BC\u1112\u1175", "\u110C\u1169\u110C\u1165\u11AF", "\u110C\u1169\u110C\u1165\u11BC", "\u110C\u1169\u110C\u1175\u11A8", "\u110C\u1169\u11AB\u1103\u1162\u11BA\u1106\u1161\u11AF", "\u110C\u1169\u11AB\u110C\u1162", "\u110C\u1169\u11AF\u110B\u1165\u11B8", "\u110C\u1169\u11AF\u110B\u1173\u11B7", "\u110C\u1169\u11BC\u1100\u116D", "\u110C\u1169\u11BC\u1105\u1169", "\u110C\u1169\u11BC\u1105\u1172", "\u110C\u1169\u11BC\u1109\u1169\u1105\u1175", "\u110C\u1169\u11BC\u110B\u1165\u11B8\u110B\u116F\u11AB", "\u110C\u1169\u11BC\u110C\u1169\u11BC", "\u110C\u1169\u11BC\u1112\u1161\u11B8", "\u110C\u116A\u1109\u1165\u11A8", "\u110C\u116C\u110B\u1175\u11AB", "\u110C\u116E\u1100\u116A\u11AB\u110C\u1165\u11A8", "\u110C\u116E\u1105\u1173\u11B7", "\u110C\u116E\u1106\u1161\u11AF", "\u110C\u116E\u1106\u1165\u1102\u1175", "\u110C\u116E\u1106\u1165\u11A8", "\u110C\u116E\u1106\u116E\u11AB", "\u110C\u116E\u1106\u1175\u11AB", "\u110C\u116E\u1107\u1161\u11BC", "\u110C\u116E\u1107\u1167\u11AB", "\u110C\u116E\u1109\u1175\u11A8", "\u110C\u116E\u110B\u1175\u11AB", "\u110C\u116E\u110B\u1175\u11AF", "\u110C\u116E\u110C\u1161\u11BC", "\u110C\u116E\u110C\u1165\u11AB\u110C\u1161", "\u110C\u116E\u1110\u1162\u11A8", "\u110C\u116E\u11AB\u1107\u1175", "\u110C\u116E\u11AF\u1100\u1165\u1105\u1175", "\u110C\u116E\u11AF\u1100\u1175", "\u110C\u116E\u11AF\u1106\u116E\u1102\u1174", "\u110C\u116E\u11BC\u1100\u1161\u11AB", "\u110C\u116E\u11BC\u1100\u1168\u1107\u1161\u11BC\u1109\u1169\u11BC", "\u110C\u116E\u11BC\u1100\u116E\u11A8", "\u110C\u116E\u11BC\u1102\u1167\u11AB", "\u110C\u116E\u11BC\u1103\u1161\u11AB", "\u110C\u116E\u11BC\u1103\u1169\u11A8", "\u110C\u116E\u11BC\u1107\u1161\u11AB", "\u110C\u116E\u11BC\u1107\u116E", "\u110C\u116E\u11BC\u1109\u1166", "\u110C\u116E\u11BC\u1109\u1169\u1100\u1175\u110B\u1165\u11B8", "\u110C\u116E\u11BC\u1109\u116E\u11AB", "\u110C\u116E\u11BC\u110B\u1161\u11BC", "\u110C\u116E\u11BC\u110B\u116D", "\u110C\u116E\u11BC\u1112\u1161\u11A8\u1100\u116D", "\u110C\u1173\u11A8\u1109\u1165\u11A8", "\u110C\u1173\u11A8\u1109\u1175", "\u110C\u1173\u11AF\u1100\u1165\u110B\u116E\u11B7", "\u110C\u1173\u11BC\u1100\u1161", "\u110C\u1173\u11BC\u1100\u1165", "\u110C\u1173\u11BC\u1100\u116F\u11AB", "\u110C\u1173\u11BC\u1109\u1161\u11BC", "\u110C\u1173\u11BC\u1109\u1166", "\u110C\u1175\u1100\u1161\u11A8", "\u110C\u1175\u1100\u1161\u11B8", "\u110C\u1175\u1100\u1167\u11BC", "\u110C\u1175\u1100\u1173\u11A8\u1112\u1175", "\u110C\u1175\u1100\u1173\u11B7", "\u110C\u1175\u1100\u1173\u11B8", "\u110C\u1175\u1102\u1173\u11BC", "\u110C\u1175\u1105\u1173\u11B7\u1100\u1175\u11AF", "\u110C\u1175\u1105\u1175\u1109\u1161\u11AB", "\u110C\u1175\u1107\u1161\u11BC", "\u110C\u1175\u1107\u116E\u11BC", "\u110C\u1175\u1109\u1175\u11A8", "\u110C\u1175\u110B\u1167\u11A8", "\u110C\u1175\u110B\u116E\u1100\u1162", "\u110C\u1175\u110B\u116F\u11AB", "\u110C\u1175\u110C\u1165\u11A8", "\u110C\u1175\u110C\u1165\u11B7", "\u110C\u1175\u110C\u1175\u11AB", "\u110C\u1175\u110E\u116E\u11AF", "\u110C\u1175\u11A8\u1109\u1165\u11AB", "\u110C\u1175\u11A8\u110B\u1165\u11B8", "\u110C\u1175\u11A8\u110B\u116F\u11AB", "\u110C\u1175\u11A8\u110C\u1161\u11BC", "\u110C\u1175\u11AB\u1100\u1173\u11B8", "\u110C\u1175\u11AB\u1103\u1169\u11BC", "\u110C\u1175\u11AB\u1105\u1169", "\u110C\u1175\u11AB\u1105\u116D", "\u110C\u1175\u11AB\u1105\u1175", "\u110C\u1175\u11AB\u110D\u1161", "\u110C\u1175\u11AB\u110E\u1161\u11AF", "\u110C\u1175\u11AB\u110E\u116E\u11AF", "\u110C\u1175\u11AB\u1110\u1169\u11BC", "\u110C\u1175\u11AB\u1112\u1162\u11BC", "\u110C\u1175\u11AF\u1106\u116E\u11AB", "\u110C\u1175\u11AF\u1107\u1167\u11BC", "\u110C\u1175\u11AF\u1109\u1165", "\u110C\u1175\u11B7\u110C\u1161\u11A8", "\u110C\u1175\u11B8\u1103\u1161\u11AB", "\u110C\u1175\u11B8\u110B\u1161\u11AB", "\u110C\u1175\u11B8\u110C\u116E\u11BC", "\u110D\u1161\u110C\u1173\u11BC", "\u110D\u1175\u1101\u1165\u1100\u1175", "\u110E\u1161\u1102\u1161\u11B7", "\u110E\u1161\u1105\u1161\u1105\u1175", "\u110E\u1161\u1105\u1163\u11BC", "\u110E\u1161\u1105\u1175\u11B7", "\u110E\u1161\u1107\u1167\u11AF", "\u110E\u1161\u1109\u1165\u11AB", "\u110E\u1161\u110E\u1173\u11B7", "\u110E\u1161\u11A8\u1100\u1161\u11A8", "\u110E\u1161\u11AB\u1106\u116E\u11AF", "\u110E\u1161\u11AB\u1109\u1165\u11BC", "\u110E\u1161\u11B7\u1100\u1161", "\u110E\u1161\u11B7\u1100\u1175\u1105\u1173\u11B7", "\u110E\u1161\u11B7\u1109\u1162", "\u110E\u1161\u11B7\u1109\u1165\u11A8", "\u110E\u1161\u11B7\u110B\u1167", "\u110E\u1161\u11B7\u110B\u116C", "\u110E\u1161\u11B7\u110C\u1169", "\u110E\u1161\u11BA\u110C\u1161\u11AB", "\u110E\u1161\u11BC\u1100\u1161", "\u110E\u1161\u11BC\u1100\u1169", "\u110E\u1161\u11BC\u1100\u116E", "\u110E\u1161\u11BC\u1106\u116E\u11AB", "\u110E\u1161\u11BC\u1107\u1161\u11A9", "\u110E\u1161\u11BC\u110C\u1161\u11A8", "\u110E\u1161\u11BC\u110C\u1169", "\u110E\u1162\u1102\u1165\u11AF", "\u110E\u1162\u110C\u1165\u11B7", "\u110E\u1162\u11A8\u1100\u1161\u1107\u1161\u11BC", "\u110E\u1162\u11A8\u1107\u1161\u11BC", "\u110E\u1162\u11A8\u1109\u1161\u11BC", "\u110E\u1162\u11A8\u110B\u1175\u11B7", "\u110E\u1162\u11B7\u1111\u1175\u110B\u1165\u11AB", "\u110E\u1165\u1107\u1165\u11AF", "\u110E\u1165\u110B\u1173\u11B7", "\u110E\u1165\u11AB\u1100\u116E\u11A8", "\u110E\u1165\u11AB\u1103\u116E\u11BC", "\u110E\u1165\u11AB\u110C\u1161\u11BC", "\u110E\u1165\u11AB\u110C\u1162", "\u110E\u1165\u11AB\u110E\u1165\u11AB\u1112\u1175", "\u110E\u1165\u11AF\u1103\u1169", "\u110E\u1165\u11AF\u110C\u1165\u1112\u1175", "\u110E\u1165\u11AF\u1112\u1161\u11A8", "\u110E\u1165\u11BA\u1102\u1161\u11AF", "\u110E\u1165\u11BA\u110D\u1162", "\u110E\u1165\u11BC\u1102\u1167\u11AB", "\u110E\u1165\u11BC\u1107\u1161\u110C\u1175", "\u110E\u1165\u11BC\u1109\u1169", "\u110E\u1165\u11BC\u110E\u116E\u11AB", "\u110E\u1166\u1100\u1168", "\u110E\u1166\u1105\u1167\u11A8", "\u110E\u1166\u110B\u1169\u11AB", "\u110E\u1166\u110B\u1172\u11A8", "\u110E\u1166\u110C\u116E\u11BC", "\u110E\u1166\u1112\u1165\u11B7", "\u110E\u1169\u1103\u1173\u11BC\u1112\u1161\u11A8\u1109\u1162\u11BC", "\u110E\u1169\u1107\u1161\u11AB", "\u110E\u1169\u1107\u1161\u11B8", "\u110E\u1169\u1109\u1161\u11BC\u1112\u116A", "\u110E\u1169\u1109\u116E\u11AB", "\u110E\u1169\u110B\u1167\u1105\u1173\u11B7", "\u110E\u1169\u110B\u116F\u11AB", "\u110E\u1169\u110C\u1165\u1102\u1167\u11A8", "\u110E\u1169\u110C\u1165\u11B7", "\u110E\u1169\u110E\u1165\u11BC", "\u110E\u1169\u110F\u1169\u11AF\u1105\u1175\u11BA", "\u110E\u1169\u11BA\u1107\u116E\u11AF", "\u110E\u1169\u11BC\u1100\u1161\u11A8", "\u110E\u1169\u11BC\u1105\u1175", "\u110E\u1169\u11BC\u110C\u1161\u11BC", "\u110E\u116A\u11AF\u110B\u1167\u11BC", "\u110E\u116C\u1100\u1173\u11AB", "\u110E\u116C\u1109\u1161\u11BC", "\u110E\u116C\u1109\u1165\u11AB", "\u110E\u116C\u1109\u1175\u11AB", "\u110E\u116C\u110B\u1161\u11A8", "\u110E\u116C\u110C\u1169\u11BC", "\u110E\u116E\u1109\u1165\u11A8", "\u110E\u116E\u110B\u1165\u11A8", "\u110E\u116E\u110C\u1175\u11AB", "\u110E\u116E\u110E\u1165\u11AB", "\u110E\u116E\u110E\u1173\u11A8", "\u110E\u116E\u11A8\u1100\u116E", "\u110E\u116E\u11A8\u1109\u1169", "\u110E\u116E\u11A8\u110C\u1166", "\u110E\u116E\u11A8\u1112\u1161", "\u110E\u116E\u11AF\u1100\u1173\u11AB", "\u110E\u116E\u11AF\u1107\u1161\u11AF", "\u110E\u116E\u11AF\u1109\u1161\u11AB", "\u110E\u116E\u11AF\u1109\u1175\u11AB", "\u110E\u116E\u11AF\u110B\u1167\u11AB", "\u110E\u116E\u11AF\u110B\u1175\u11B8", "\u110E\u116E\u11AF\u110C\u1161\u11BC", "\u110E\u116E\u11AF\u1111\u1161\u11AB", "\u110E\u116E\u11BC\u1100\u1167\u11A8", "\u110E\u116E\u11BC\u1100\u1169", "\u110E\u116E\u11BC\u1103\u1169\u11AF", "\u110E\u116E\u11BC\u1107\u116E\u11AB\u1112\u1175", "\u110E\u116E\u11BC\u110E\u1165\u11BC\u1103\u1169", "\u110E\u1171\u110B\u1165\u11B8", "\u110E\u1171\u110C\u1175\u11A8", "\u110E\u1171\u1112\u1163\u11BC", "\u110E\u1175\u110B\u1163\u11A8", "\u110E\u1175\u11AB\u1100\u116E", "\u110E\u1175\u11AB\u110E\u1165\u11A8", "\u110E\u1175\u11AF\u1109\u1175\u11B8", "\u110E\u1175\u11AF\u110B\u116F\u11AF", "\u110E\u1175\u11AF\u1111\u1161\u11AB", "\u110E\u1175\u11B7\u1103\u1162", "\u110E\u1175\u11B7\u1106\u116E\u11A8", "\u110E\u1175\u11B7\u1109\u1175\u11AF", "\u110E\u1175\u11BA\u1109\u1169\u11AF", "\u110E\u1175\u11BC\u110E\u1161\u11AB", "\u110F\u1161\u1106\u1166\u1105\u1161", "\u110F\u1161\u110B\u116E\u11AB\u1110\u1165", "\u110F\u1161\u11AF\u1100\u116E\u11A8\u1109\u116E", "\u110F\u1162\u1105\u1175\u11A8\u1110\u1165", "\u110F\u1162\u11B7\u1111\u1165\u1109\u1173", "\u110F\u1162\u11B7\u1111\u1166\u110B\u1175\u11AB", "\u110F\u1165\u1110\u1173\u11AB", "\u110F\u1165\u11AB\u1103\u1175\u1109\u1167\u11AB", "\u110F\u1165\u11AF\u1105\u1165", "\u110F\u1165\u11B7\u1111\u1172\u1110\u1165", "\u110F\u1169\u1101\u1175\u1105\u1175", "\u110F\u1169\u1106\u1175\u1103\u1175", "\u110F\u1169\u11AB\u1109\u1165\u1110\u1173", "\u110F\u1169\u11AF\u1105\u1161", "\u110F\u1169\u11B7\u1111\u1173\u11AF\u1105\u1166\u11A8\u1109\u1173", "\u110F\u1169\u11BC\u1102\u1161\u1106\u116E\u11AF", "\u110F\u116B\u1100\u1161\u11B7", "\u110F\u116E\u1103\u1166\u1110\u1161", "\u110F\u1173\u1105\u1175\u11B7", "\u110F\u1173\u11AB\u1100\u1175\u11AF", "\u110F\u1173\u11AB\u1104\u1161\u11AF", "\u110F\u1173\u11AB\u1109\u1169\u1105\u1175", "\u110F\u1173\u11AB\u110B\u1161\u1103\u1173\u11AF", "\u110F\u1173\u11AB\u110B\u1165\u1106\u1165\u1102\u1175", "\u110F\u1173\u11AB\u110B\u1175\u11AF", "\u110F\u1173\u11AB\u110C\u1165\u11AF", "\u110F\u1173\u11AF\u1105\u1162\u1109\u1175\u11A8", "\u110F\u1173\u11AF\u1105\u1165\u11B8", "\u110F\u1175\u11AF\u1105\u1169", "\u1110\u1161\u110B\u1175\u11B8", "\u1110\u1161\u110C\u1161\u1100\u1175", "\u1110\u1161\u11A8\u1100\u116E", "\u1110\u1161\u11A8\u110C\u1161", "\u1110\u1161\u11AB\u1109\u1162\u11BC", "\u1110\u1162\u1100\u116F\u11AB\u1103\u1169", "\u1110\u1162\u110B\u1163\u11BC", "\u1110\u1162\u1111\u116E\u11BC", "\u1110\u1162\u11A8\u1109\u1175", "\u1110\u1162\u11AF\u1105\u1165\u11AB\u1110\u1173", "\u1110\u1165\u1102\u1165\u11AF", "\u1110\u1165\u1106\u1175\u1102\u1165\u11AF", "\u1110\u1166\u1102\u1175\u1109\u1173", "\u1110\u1166\u1109\u1173\u1110\u1173", "\u1110\u1166\u110B\u1175\u1107\u1173\u11AF", "\u1110\u1166\u11AF\u1105\u1166\u1107\u1175\u110C\u1165\u11AB", "\u1110\u1169\u1105\u1169\u11AB", "\u1110\u1169\u1106\u1161\u1110\u1169", "\u1110\u1169\u110B\u116D\u110B\u1175\u11AF", "\u1110\u1169\u11BC\u1100\u1168", "\u1110\u1169\u11BC\u1100\u116A", "\u1110\u1169\u11BC\u1105\u1169", "\u1110\u1169\u11BC\u1109\u1175\u11AB", "\u1110\u1169\u11BC\u110B\u1167\u11A8", "\u1110\u1169\u11BC\u110B\u1175\u11AF", "\u1110\u1169\u11BC\u110C\u1161\u11BC", "\u1110\u1169\u11BC\u110C\u1166", "\u1110\u1169\u11BC\u110C\u1173\u11BC", "\u1110\u1169\u11BC\u1112\u1161\u11B8", "\u1110\u1169\u11BC\u1112\u116A", "\u1110\u116C\u1100\u1173\u11AB", "\u1110\u116C\u110B\u116F\u11AB", "\u1110\u116C\u110C\u1175\u11A8\u1100\u1173\u11B7", "\u1110\u1171\u1100\u1175\u11B7", "\u1110\u1173\u1105\u1165\u11A8", "\u1110\u1173\u11A8\u1100\u1173\u11B8", "\u1110\u1173\u11A8\u1107\u1167\u11AF", "\u1110\u1173\u11A8\u1109\u1165\u11BC", "\u1110\u1173\u11A8\u1109\u116E", "\u1110\u1173\u11A8\u110C\u1175\u11BC", "\u1110\u1173\u11A8\u1112\u1175", "\u1110\u1173\u11AB\u1110\u1173\u11AB\u1112\u1175", "\u1110\u1175\u1109\u1167\u110E\u1173", "\u1111\u1161\u1105\u1161\u11AB\u1109\u1162\u11A8", "\u1111\u1161\u110B\u1175\u11AF", "\u1111\u1161\u110E\u116E\u11AF\u1109\u1169", "\u1111\u1161\u11AB\u1100\u1167\u11AF", "\u1111\u1161\u11AB\u1103\u1161\u11AB", "\u1111\u1161\u11AB\u1106\u1162", "\u1111\u1161\u11AB\u1109\u1161", "\u1111\u1161\u11AF\u1109\u1175\u11B8", "\u1111\u1161\u11AF\u110B\u116F\u11AF", "\u1111\u1161\u11B8\u1109\u1169\u11BC", "\u1111\u1162\u1109\u1167\u11AB", "\u1111\u1162\u11A8\u1109\u1173", "\u1111\u1162\u11A8\u1109\u1175\u1106\u1175\u11AF\u1105\u1175", "\u1111\u1162\u11AB\u1110\u1175", "\u1111\u1165\u1109\u1166\u11AB\u1110\u1173", "\u1111\u1166\u110B\u1175\u11AB\u1110\u1173", "\u1111\u1167\u11AB\u1100\u1167\u11AB", "\u1111\u1167\u11AB\u110B\u1174", "\u1111\u1167\u11AB\u110C\u1175", "\u1111\u1167\u11AB\u1112\u1175", "\u1111\u1167\u11BC\u1100\u1161", "\u1111\u1167\u11BC\u1100\u1172\u11AB", "\u1111\u1167\u11BC\u1109\u1162\u11BC", "\u1111\u1167\u11BC\u1109\u1169", "\u1111\u1167\u11BC\u110B\u1163\u11BC", "\u1111\u1167\u11BC\u110B\u1175\u11AF", "\u1111\u1167\u11BC\u1112\u116A", "\u1111\u1169\u1109\u1173\u1110\u1165", "\u1111\u1169\u110B\u1175\u11AB\u1110\u1173", "\u1111\u1169\u110C\u1161\u11BC", "\u1111\u1169\u1112\u1161\u11B7", "\u1111\u116D\u1106\u1167\u11AB", "\u1111\u116D\u110C\u1165\u11BC", "\u1111\u116D\u110C\u116E\u11AB", "\u1111\u116D\u1112\u1167\u11AB", "\u1111\u116E\u11B7\u1106\u1169\u11A8", "\u1111\u116E\u11B7\u110C\u1175\u11AF", "\u1111\u116E\u11BC\u1100\u1167\u11BC", "\u1111\u116E\u11BC\u1109\u1169\u11A8", "\u1111\u116E\u11BC\u1109\u1173\u11B8", "\u1111\u1173\u1105\u1161\u11BC\u1109\u1173", "\u1111\u1173\u1105\u1175\u11AB\u1110\u1165", "\u1111\u1173\u11AF\u1105\u1161\u1109\u1173\u1110\u1175\u11A8", "\u1111\u1175\u1100\u1169\u11AB", "\u1111\u1175\u1106\u1161\u11BC", "\u1111\u1175\u110B\u1161\u1102\u1169", "\u1111\u1175\u11AF\u1105\u1173\u11B7", "\u1111\u1175\u11AF\u1109\u116E", "\u1111\u1175\u11AF\u110B\u116D", "\u1111\u1175\u11AF\u110C\u1161", "\u1111\u1175\u11AF\u1110\u1169\u11BC", "\u1111\u1175\u11BC\u1100\u1168", "\u1112\u1161\u1102\u1173\u1102\u1175\u11B7", "\u1112\u1161\u1102\u1173\u11AF", "\u1112\u1161\u1103\u1173\u110B\u1170\u110B\u1165", "\u1112\u1161\u1105\u116E\u11BA\u1107\u1161\u11B7", "\u1112\u1161\u1107\u1161\u11AB\u1100\u1175", "\u1112\u1161\u1109\u116E\u11A8\u110C\u1175\u11B8", "\u1112\u1161\u1109\u116E\u11AB", "\u1112\u1161\u110B\u1167\u1110\u1173\u11AB", "\u1112\u1161\u110C\u1175\u1106\u1161\u11AB", "\u1112\u1161\u110E\u1165\u11AB", "\u1112\u1161\u1111\u116E\u11B7", "\u1112\u1161\u1111\u1175\u11AF", "\u1112\u1161\u11A8\u1100\u116A", "\u1112\u1161\u11A8\u1100\u116D", "\u1112\u1161\u11A8\u1100\u1173\u11B8", "\u1112\u1161\u11A8\u1100\u1175", "\u1112\u1161\u11A8\u1102\u1167\u11AB", "\u1112\u1161\u11A8\u1105\u1167\u11A8", "\u1112\u1161\u11A8\u1107\u1165\u11AB", "\u1112\u1161\u11A8\u1107\u116E\u1106\u1169", "\u1112\u1161\u11A8\u1107\u1175", "\u1112\u1161\u11A8\u1109\u1162\u11BC", "\u1112\u1161\u11A8\u1109\u116E\u11AF", "\u1112\u1161\u11A8\u1109\u1173\u11B8", "\u1112\u1161\u11A8\u110B\u116D\u11BC\u1111\u116E\u11B7", "\u1112\u1161\u11A8\u110B\u116F\u11AB", "\u1112\u1161\u11A8\u110B\u1171", "\u1112\u1161\u11A8\u110C\u1161", "\u1112\u1161\u11A8\u110C\u1165\u11B7", "\u1112\u1161\u11AB\u1100\u1168", "\u1112\u1161\u11AB\u1100\u1173\u11AF", "\u1112\u1161\u11AB\u1101\u1165\u1107\u1165\u11AB\u110B\u1166", "\u1112\u1161\u11AB\u1102\u1161\u11BD", "\u1112\u1161\u11AB\u1102\u116E\u11AB", "\u1112\u1161\u11AB\u1103\u1169\u11BC\u110B\u1161\u11AB", "\u1112\u1161\u11AB\u1104\u1162", "\u1112\u1161\u11AB\u1105\u1161\u1109\u1161\u11AB", "\u1112\u1161\u11AB\u1106\u1161\u1103\u1175", "\u1112\u1161\u11AB\u1106\u116E\u11AB", "\u1112\u1161\u11AB\u1107\u1165\u11AB", "\u1112\u1161\u11AB\u1107\u1169\u11A8", "\u1112\u1161\u11AB\u1109\u1175\u11A8", "\u1112\u1161\u11AB\u110B\u1167\u1105\u1173\u11B7", "\u1112\u1161\u11AB\u110D\u1169\u11A8", "\u1112\u1161\u11AF\u1106\u1165\u1102\u1175", "\u1112\u1161\u11AF\u110B\u1161\u1107\u1165\u110C\u1175", "\u1112\u1161\u11AF\u110B\u1175\u11AB", "\u1112\u1161\u11B7\u1101\u1166", "\u1112\u1161\u11B7\u1107\u116E\u1105\u1169", "\u1112\u1161\u11B8\u1100\u1167\u11A8", "\u1112\u1161\u11B8\u1105\u1175\u110C\u1165\u11A8", "\u1112\u1161\u11BC\u1100\u1169\u11BC", "\u1112\u1161\u11BC\u1100\u116E", "\u1112\u1161\u11BC\u1109\u1161\u11BC", "\u1112\u1161\u11BC\u110B\u1174", "\u1112\u1162\u1100\u1167\u11AF", "\u1112\u1162\u1100\u116E\u11AB", "\u1112\u1162\u1103\u1161\u11B8", "\u1112\u1162\u1103\u1161\u11BC", "\u1112\u1162\u1106\u116E\u11AF", "\u1112\u1162\u1109\u1165\u11A8", "\u1112\u1162\u1109\u1165\u11AF", "\u1112\u1162\u1109\u116E\u110B\u116D\u11A8\u110C\u1161\u11BC", "\u1112\u1162\u110B\u1161\u11AB", "\u1112\u1162\u11A8\u1109\u1175\u11B7", "\u1112\u1162\u11AB\u1103\u1173\u1107\u1162\u11A8", "\u1112\u1162\u11B7\u1107\u1165\u1100\u1165", "\u1112\u1162\u11BA\u1107\u1167\u11C0", "\u1112\u1162\u11BA\u1109\u1161\u11AF", "\u1112\u1162\u11BC\u1103\u1169\u11BC", "\u1112\u1162\u11BC\u1107\u1169\u11A8", "\u1112\u1162\u11BC\u1109\u1161", "\u1112\u1162\u11BC\u110B\u116E\u11AB", "\u1112\u1162\u11BC\u110B\u1171", "\u1112\u1163\u11BC\u1100\u1175", "\u1112\u1163\u11BC\u1109\u1161\u11BC", "\u1112\u1163\u11BC\u1109\u116E", "\u1112\u1165\u1105\u1161\u11A8", "\u1112\u1165\u110B\u116D\u11BC", "\u1112\u1166\u11AF\u1100\u1175", "\u1112\u1167\u11AB\u1100\u116A\u11AB", "\u1112\u1167\u11AB\u1100\u1173\u11B7", "\u1112\u1167\u11AB\u1103\u1162", "\u1112\u1167\u11AB\u1109\u1161\u11BC", "\u1112\u1167\u11AB\u1109\u1175\u11AF", "\u1112\u1167\u11AB\u110C\u1161\u11BC", "\u1112\u1167\u11AB\u110C\u1162", "\u1112\u1167\u11AB\u110C\u1175", "\u1112\u1167\u11AF\u110B\u1162\u11A8", "\u1112\u1167\u11B8\u1105\u1167\u11A8", "\u1112\u1167\u11BC\u1107\u116E", "\u1112\u1167\u11BC\u1109\u1161", "\u1112\u1167\u11BC\u1109\u116E", "\u1112\u1167\u11BC\u1109\u1175\u11A8", "\u1112\u1167\u11BC\u110C\u1166", "\u1112\u1167\u11BC\u1110\u1162", "\u1112\u1167\u11BC\u1111\u1167\u11AB", "\u1112\u1168\u1110\u1162\u11A8", "\u1112\u1169\u1100\u1175\u1109\u1175\u11B7", "\u1112\u1169\u1102\u1161\u11B7", "\u1112\u1169\u1105\u1161\u11BC\u110B\u1175", "\u1112\u1169\u1107\u1161\u11A8", "\u1112\u1169\u1110\u1166\u11AF", "\u1112\u1169\u1112\u1173\u11B8", "\u1112\u1169\u11A8\u1109\u1175", "\u1112\u1169\u11AF\u1105\u1169", "\u1112\u1169\u11B7\u1111\u1166\u110B\u1175\u110C\u1175", "\u1112\u1169\u11BC\u1107\u1169", "\u1112\u1169\u11BC\u1109\u116E", "\u1112\u1169\u11BC\u110E\u1161", "\u1112\u116A\u1106\u1167\u11AB", "\u1112\u116A\u1107\u116E\u11AB", "\u1112\u116A\u1109\u1161\u11AF", "\u1112\u116A\u110B\u116D\u110B\u1175\u11AF", "\u1112\u116A\u110C\u1161\u11BC", "\u1112\u116A\u1112\u1161\u11A8", "\u1112\u116A\u11A8\u1107\u1169", "\u1112\u116A\u11A8\u110B\u1175\u11AB", "\u1112\u116A\u11A8\u110C\u1161\u11BC", "\u1112\u116A\u11A8\u110C\u1165\u11BC", "\u1112\u116A\u11AB\u1100\u1161\u11B8", "\u1112\u116A\u11AB\u1100\u1167\u11BC", "\u1112\u116A\u11AB\u110B\u1167\u11BC", "\u1112\u116A\u11AB\u110B\u1172\u11AF", "\u1112\u116A\u11AB\u110C\u1161", "\u1112\u116A\u11AF\u1100\u1175", "\u1112\u116A\u11AF\u1103\u1169\u11BC", "\u1112\u116A\u11AF\u1107\u1161\u11AF\u1112\u1175", "\u1112\u116A\u11AF\u110B\u116D\u11BC", "\u1112\u116A\u11AF\u110D\u1161\u11A8", "\u1112\u116C\u1100\u1167\u11AB", "\u1112\u116C\u1100\u116A\u11AB", "\u1112\u116C\u1107\u1169\u11A8", "\u1112\u116C\u1109\u1162\u11A8", "\u1112\u116C\u110B\u116F\u11AB", "\u1112\u116C\u110C\u1161\u11BC", "\u1112\u116C\u110C\u1165\u11AB", "\u1112\u116C\u11BA\u1109\u116E", "\u1112\u116C\u11BC\u1103\u1161\u11AB\u1107\u1169\u1103\u1169", "\u1112\u116D\u110B\u1172\u11AF\u110C\u1165\u11A8", "\u1112\u116E\u1107\u1161\u11AB", "\u1112\u116E\u110E\u116E\u11BA\u1100\u1161\u1105\u116E", "\u1112\u116E\u11AB\u1105\u1167\u11AB", "\u1112\u116F\u11AF\u110A\u1175\u11AB", "\u1112\u1172\u1109\u1175\u11A8", "\u1112\u1172\u110B\u1175\u11AF", "\u1112\u1172\u11BC\u1102\u1162", "\u1112\u1173\u1105\u1173\u11B7", "\u1112\u1173\u11A8\u1107\u1162\u11A8", "\u1112\u1173\u11A8\u110B\u1175\u11AB", "\u1112\u1173\u11AB\u110C\u1165\u11A8", "\u1112\u1173\u11AB\u1112\u1175", "\u1112\u1173\u11BC\u1106\u1175", "\u1112\u1173\u11BC\u1107\u116E\u11AB", "\u1112\u1174\u1100\u1169\u11A8", "\u1112\u1174\u1106\u1161\u11BC", "\u1112\u1174\u1109\u1162\u11BC", "\u1112\u1174\u11AB\u1109\u1162\u11A8", "\u1112\u1175\u11B7\u1101\u1165\u11BA"], Qb = ["abaisser", "abandon", "abdiquer", "abeille", "abolir", "aborder", "aboutir", "aboyer", "abrasif", "abreuver", "abriter", "abroger", "abrupt", "absence", "absolu", "absurde", "abusif", "abyssal", "acade\u0301mie", "acajou", "acarien", "accabler", "accepter", "acclamer", "accolade", "accroche", "accuser", "acerbe", "achat", "acheter", "aciduler", "acier", "acompte", "acque\u0301rir", "acronyme", "acteur", "actif", "actuel", "adepte", "ade\u0301quat", "adhe\u0301sif", "adjectif", "adjuger", "admettre", "admirer", "adopter", "adorer", "adoucir", "adresse", "adroit", "adulte", "adverbe", "ae\u0301rer", "ae\u0301ronef", "affaire", "affecter", "affiche", "affreux", "affubler", "agacer", "agencer", "agile", "agiter", "agrafer", "agre\u0301able", "agrume", "aider", "aiguille", "ailier", "aimable", "aisance", "ajouter", "ajuster", "alarmer", "alchimie", "alerte", "alge\u0300bre", "algue", "alie\u0301ner", "aliment", "alle\u0301ger", "alliage", "allouer", "allumer", "alourdir", "alpaga", "altesse", "alve\u0301ole", "amateur", "ambigu", "ambre", "ame\u0301nager", "amertume", "amidon", "amiral", "amorcer", "amour", "amovible", "amphibie", "ampleur", "amusant", "analyse", "anaphore", "anarchie", "anatomie", "ancien", "ane\u0301antir", "angle", "angoisse", "anguleux", "animal", "annexer", "annonce", "annuel", "anodin", "anomalie", "anonyme", "anormal", "antenne", "antidote", "anxieux", "apaiser", "ape\u0301ritif", "aplanir", "apologie", "appareil", "appeler", "apporter", "appuyer", "aquarium", "aqueduc", "arbitre", "arbuste", "ardeur", "ardoise", "argent", "arlequin", "armature", "armement", "armoire", "armure", "arpenter", "arracher", "arriver", "arroser", "arsenic", "arte\u0301riel", "article", "aspect", "asphalte", "aspirer", "assaut", "asservir", "assiette", "associer", "assurer", "asticot", "astre", "astuce", "atelier", "atome", "atrium", "atroce", "attaque", "attentif", "attirer", "attraper", "aubaine", "auberge", "audace", "audible", "augurer", "aurore", "automne", "autruche", "avaler", "avancer", "avarice", "avenir", "averse", "aveugle", "aviateur", "avide", "avion", "aviser", "avoine", "avouer", "avril", "axial", "axiome", "badge", "bafouer", "bagage", "baguette", "baignade", "balancer", "balcon", "baleine", "balisage", "bambin", "bancaire", "bandage", "banlieue", "bannie\u0300re", "banquier", "barbier", "baril", "baron", "barque", "barrage", "bassin", "bastion", "bataille", "bateau", "batterie", "baudrier", "bavarder", "belette", "be\u0301lier", "belote", "be\u0301ne\u0301fice", "berceau", "berger", "berline", "bermuda", "besace", "besogne", "be\u0301tail", "beurre", "biberon", "bicycle", "bidule", "bijou", "bilan", "bilingue", "billard", "binaire", "biologie", "biopsie", "biotype", "biscuit", "bison", "bistouri", "bitume", "bizarre", "blafard", "blague", "blanchir", "blessant", "blinder", "blond", "bloquer", "blouson", "bobard", "bobine", "boire", "boiser", "bolide", "bonbon", "bondir", "bonheur", "bonifier", "bonus", "bordure", "borne", "botte", "boucle", "boueux", "bougie", "boulon", "bouquin", "bourse", "boussole", "boutique", "boxeur", "branche", "brasier", "brave", "brebis", "bre\u0300che", "breuvage", "bricoler", "brigade", "brillant", "brioche", "brique", "brochure", "broder", "bronzer", "brousse", "broyeur", "brume", "brusque", "brutal", "bruyant", "buffle", "buisson", "bulletin", "bureau", "burin", "bustier", "butiner", "butoir", "buvable", "buvette", "cabanon", "cabine", "cachette", "cadeau", "cadre", "cafe\u0301ine", "caillou", "caisson", "calculer", "calepin", "calibre", "calmer", "calomnie", "calvaire", "camarade", "came\u0301ra", "camion", "campagne", "canal", "caneton", "canon", "cantine", "canular", "capable", "caporal", "caprice", "capsule", "capter", "capuche", "carabine", "carbone", "caresser", "caribou", "carnage", "carotte", "carreau", "carton", "cascade", "casier", "casque", "cassure", "causer", "caution", "cavalier", "caverne", "caviar", "ce\u0301dille", "ceinture", "ce\u0301leste", "cellule", "cendrier", "censurer", "central", "cercle", "ce\u0301re\u0301bral", "cerise", "cerner", "cerveau", "cesser", "chagrin", "chaise", "chaleur", "chambre", "chance", "chapitre", "charbon", "chasseur", "chaton", "chausson", "chavirer", "chemise", "chenille", "che\u0301quier", "chercher", "cheval", "chien", "chiffre", "chignon", "chime\u0300re", "chiot", "chlorure", "chocolat", "choisir", "chose", "chouette", "chrome", "chute", "cigare", "cigogne", "cimenter", "cine\u0301ma", "cintrer", "circuler", "cirer", "cirque", "citerne", "citoyen", "citron", "civil", "clairon", "clameur", "claquer", "classe", "clavier", "client", "cligner", "climat", "clivage", "cloche", "clonage", "cloporte", "cobalt", "cobra", "cocasse", "cocotier", "coder", "codifier", "coffre", "cogner", "cohe\u0301sion", "coiffer", "coincer", "cole\u0300re", "colibri", "colline", "colmater", "colonel", "combat", "come\u0301die", "commande", "compact", "concert", "conduire", "confier", "congeler", "connoter", "consonne", "contact", "convexe", "copain", "copie", "corail", "corbeau", "cordage", "corniche", "corpus", "correct", "corte\u0300ge", "cosmique", "costume", "coton", "coude", "coupure", "courage", "couteau", "couvrir", "coyote", "crabe", "crainte", "cravate", "crayon", "cre\u0301ature", "cre\u0301diter", "cre\u0301meux", "creuser", "crevette", "cribler", "crier", "cristal", "crite\u0300re", "croire", "croquer", "crotale", "crucial", "cruel", "crypter", "cubique", "cueillir", "cuille\u0300re", "cuisine", "cuivre", "culminer", "cultiver", "cumuler", "cupide", "curatif", "curseur", "cyanure", "cycle", "cylindre", "cynique", "daigner", "damier", "danger", "danseur", "dauphin", "de\u0301battre", "de\u0301biter", "de\u0301border", "de\u0301brider", "de\u0301butant", "de\u0301caler", "de\u0301cembre", "de\u0301chirer", "de\u0301cider", "de\u0301clarer", "de\u0301corer", "de\u0301crire", "de\u0301cupler", "de\u0301dale", "de\u0301ductif", "de\u0301esse", "de\u0301fensif", "de\u0301filer", "de\u0301frayer", "de\u0301gager", "de\u0301givrer", "de\u0301glutir", "de\u0301grafer", "de\u0301jeuner", "de\u0301lice", "de\u0301loger", "demander", "demeurer", "de\u0301molir", "de\u0301nicher", "de\u0301nouer", "dentelle", "de\u0301nuder", "de\u0301part", "de\u0301penser", "de\u0301phaser", "de\u0301placer", "de\u0301poser", "de\u0301ranger", "de\u0301rober", "de\u0301sastre", "descente", "de\u0301sert", "de\u0301signer", "de\u0301sobe\u0301ir", "dessiner", "destrier", "de\u0301tacher", "de\u0301tester", "de\u0301tourer", "de\u0301tresse", "devancer", "devenir", "deviner", "devoir", "diable", "dialogue", "diamant", "dicter", "diffe\u0301rer", "dige\u0301rer", "digital", "digne", "diluer", "dimanche", "diminuer", "dioxyde", "directif", "diriger", "discuter", "disposer", "dissiper", "distance", "divertir", "diviser", "docile", "docteur", "dogme", "doigt", "domaine", "domicile", "dompter", "donateur", "donjon", "donner", "dopamine", "dortoir", "dorure", "dosage", "doseur", "dossier", "dotation", "douanier", "double", "douceur", "douter", "doyen", "dragon", "draper", "dresser", "dribbler", "droiture", "duperie", "duplexe", "durable", "durcir", "dynastie", "e\u0301blouir", "e\u0301carter", "e\u0301charpe", "e\u0301chelle", "e\u0301clairer", "e\u0301clipse", "e\u0301clore", "e\u0301cluse", "e\u0301cole", "e\u0301conomie", "e\u0301corce", "e\u0301couter", "e\u0301craser", "e\u0301cre\u0301mer", "e\u0301crivain", "e\u0301crou", "e\u0301cume", "e\u0301cureuil", "e\u0301difier", "e\u0301duquer", "effacer", "effectif", "effigie", "effort", "effrayer", "effusion", "e\u0301galiser", "e\u0301garer", "e\u0301jecter", "e\u0301laborer", "e\u0301largir", "e\u0301lectron", "e\u0301le\u0301gant", "e\u0301le\u0301phant", "e\u0301le\u0300ve", "e\u0301ligible", "e\u0301litisme", "e\u0301loge", "e\u0301lucider", "e\u0301luder", "emballer", "embellir", "embryon", "e\u0301meraude", "e\u0301mission", "emmener", "e\u0301motion", "e\u0301mouvoir", "empereur", "employer", "emporter", "emprise", "e\u0301mulsion", "encadrer", "enche\u0300re", "enclave", "encoche", "endiguer", "endosser", "endroit", "enduire", "e\u0301nergie", "enfance", "enfermer", "enfouir", "engager", "engin", "englober", "e\u0301nigme", "enjamber", "enjeu", "enlever", "ennemi", "ennuyeux", "enrichir", "enrobage", "enseigne", "entasser", "entendre", "entier", "entourer", "entraver", "e\u0301nume\u0301rer", "envahir", "enviable", "envoyer", "enzyme", "e\u0301olien", "e\u0301paissir", "e\u0301pargne", "e\u0301patant", "e\u0301paule", "e\u0301picerie", "e\u0301pide\u0301mie", "e\u0301pier", "e\u0301pilogue", "e\u0301pine", "e\u0301pisode", "e\u0301pitaphe", "e\u0301poque", "e\u0301preuve", "e\u0301prouver", "e\u0301puisant", "e\u0301querre", "e\u0301quipe", "e\u0301riger", "e\u0301rosion", "erreur", "e\u0301ruption", "escalier", "espadon", "espe\u0300ce", "espie\u0300gle", "espoir", "esprit", "esquiver", "essayer", "essence", "essieu", "essorer", "estime", "estomac", "estrade", "e\u0301tage\u0300re", "e\u0301taler", "e\u0301tanche", "e\u0301tatique", "e\u0301teindre", "e\u0301tendoir", "e\u0301ternel", "e\u0301thanol", "e\u0301thique", "ethnie", "e\u0301tirer", "e\u0301toffer", "e\u0301toile", "e\u0301tonnant", "e\u0301tourdir", "e\u0301trange", "e\u0301troit", "e\u0301tude", "euphorie", "e\u0301valuer", "e\u0301vasion", "e\u0301ventail", "e\u0301vidence", "e\u0301viter", "e\u0301volutif", "e\u0301voquer", "exact", "exage\u0301rer", "exaucer", "exceller", "excitant", "exclusif", "excuse", "exe\u0301cuter", "exemple", "exercer", "exhaler", "exhorter", "exigence", "exiler", "exister", "exotique", "expe\u0301dier", "explorer", "exposer", "exprimer", "exquis", "extensif", "extraire", "exulter", "fable", "fabuleux", "facette", "facile", "facture", "faiblir", "falaise", "fameux", "famille", "farceur", "farfelu", "farine", "farouche", "fasciner", "fatal", "fatigue", "faucon", "fautif", "faveur", "favori", "fe\u0301brile", "fe\u0301conder", "fe\u0301de\u0301rer", "fe\u0301lin", "femme", "fe\u0301mur", "fendoir", "fe\u0301odal", "fermer", "fe\u0301roce", "ferveur", "festival", "feuille", "feutre", "fe\u0301vrier", "fiasco", "ficeler", "fictif", "fide\u0300le", "figure", "filature", "filetage", "filie\u0300re", "filleul", "filmer", "filou", "filtrer", "financer", "finir", "fiole", "firme", "fissure", "fixer", "flairer", "flamme", "flasque", "flatteur", "fle\u0301au", "fle\u0300che", "fleur", "flexion", "flocon", "flore", "fluctuer", "fluide", "fluvial", "folie", "fonderie", "fongible", "fontaine", "forcer", "forgeron", "formuler", "fortune", "fossile", "foudre", "fouge\u0300re", "fouiller", "foulure", "fourmi", "fragile", "fraise", "franchir", "frapper", "frayeur", "fre\u0301gate", "freiner", "frelon", "fre\u0301mir", "fre\u0301ne\u0301sie", "fre\u0300re", "friable", "friction", "frisson", "frivole", "froid", "fromage", "frontal", "frotter", "fruit", "fugitif", "fuite", "fureur", "furieux", "furtif", "fusion", "futur", "gagner", "galaxie", "galerie", "gambader", "garantir", "gardien", "garnir", "garrigue", "gazelle", "gazon", "ge\u0301ant", "ge\u0301latine", "ge\u0301lule", "gendarme", "ge\u0301ne\u0301ral", "ge\u0301nie", "genou", "gentil", "ge\u0301ologie", "ge\u0301ome\u0300tre", "ge\u0301ranium", "germe", "gestuel", "geyser", "gibier", "gicler", "girafe", "givre", "glace", "glaive", "glisser", "globe", "gloire", "glorieux", "golfeur", "gomme", "gonfler", "gorge", "gorille", "goudron", "gouffre", "goulot", "goupille", "gourmand", "goutte", "graduel", "graffiti", "graine", "grand", "grappin", "gratuit", "gravir", "grenat", "griffure", "griller", "grimper", "grogner", "gronder", "grotte", "groupe", "gruger", "grutier", "gruye\u0300re", "gue\u0301pard", "guerrier", "guide", "guimauve", "guitare", "gustatif", "gymnaste", "gyrostat", "habitude", "hachoir", "halte", "hameau", "hangar", "hanneton", "haricot", "harmonie", "harpon", "hasard", "he\u0301lium", "he\u0301matome", "herbe", "he\u0301risson", "hermine", "he\u0301ron", "he\u0301siter", "heureux", "hiberner", "hibou", "hilarant", "histoire", "hiver", "homard", "hommage", "homoge\u0300ne", "honneur", "honorer", "honteux", "horde", "horizon", "horloge", "hormone", "horrible", "houleux", "housse", "hublot", "huileux", "humain", "humble", "humide", "humour", "hurler", "hydromel", "hygie\u0300ne", "hymne", "hypnose", "idylle", "ignorer", "iguane", "illicite", "illusion", "image", "imbiber", "imiter", "immense", "immobile", "immuable", "impact", "impe\u0301rial", "implorer", "imposer", "imprimer", "imputer", "incarner", "incendie", "incident", "incliner", "incolore", "indexer", "indice", "inductif", "ine\u0301dit", "ineptie", "inexact", "infini", "infliger", "informer", "infusion", "inge\u0301rer", "inhaler", "inhiber", "injecter", "injure", "innocent", "inoculer", "inonder", "inscrire", "insecte", "insigne", "insolite", "inspirer", "instinct", "insulter", "intact", "intense", "intime", "intrigue", "intuitif", "inutile", "invasion", "inventer", "inviter", "invoquer", "ironique", "irradier", "irre\u0301el", "irriter", "isoler", "ivoire", "ivresse", "jaguar", "jaillir", "jambe", "janvier", "jardin", "jauger", "jaune", "javelot", "jetable", "jeton", "jeudi", "jeunesse", "joindre", "joncher", "jongler", "joueur", "jouissif", "journal", "jovial", "joyau", "joyeux", "jubiler", "jugement", "junior", "jupon", "juriste", "justice", "juteux", "juve\u0301nile", "kayak", "kimono", "kiosque", "label", "labial", "labourer", "lace\u0301rer", "lactose", "lagune", "laine", "laisser", "laitier", "lambeau", "lamelle", "lampe", "lanceur", "langage", "lanterne", "lapin", "largeur", "larme", "laurier", "lavabo", "lavoir", "lecture", "le\u0301gal", "le\u0301ger", "le\u0301gume", "lessive", "lettre", "levier", "lexique", "le\u0301zard", "liasse", "libe\u0301rer", "libre", "licence", "licorne", "lie\u0300ge", "lie\u0300vre", "ligature", "ligoter", "ligue", "limer", "limite", "limonade", "limpide", "line\u0301aire", "lingot", "lionceau", "liquide", "lisie\u0300re", "lister", "lithium", "litige", "littoral", "livreur", "logique", "lointain", "loisir", "lombric", "loterie", "louer", "lourd", "loutre", "louve", "loyal", "lubie", "lucide", "lucratif", "lueur", "lugubre", "luisant", "lumie\u0300re", "lunaire", "lundi", "luron", "lutter", "luxueux", "machine", "magasin", "magenta", "magique", "maigre", "maillon", "maintien", "mairie", "maison", "majorer", "malaxer", "male\u0301fice", "malheur", "malice", "mallette", "mammouth", "mandater", "maniable", "manquant", "manteau", "manuel", "marathon", "marbre", "marchand", "mardi", "maritime", "marqueur", "marron", "marteler", "mascotte", "massif", "mate\u0301riel", "matie\u0300re", "matraque", "maudire", "maussade", "mauve", "maximal", "me\u0301chant", "me\u0301connu", "me\u0301daille", "me\u0301decin", "me\u0301diter", "me\u0301duse", "meilleur", "me\u0301lange", "me\u0301lodie", "membre", "me\u0301moire", "menacer", "mener", "menhir", "mensonge", "mentor", "mercredi", "me\u0301rite", "merle", "messager", "mesure", "me\u0301tal", "me\u0301te\u0301ore", "me\u0301thode", "me\u0301tier", "meuble", "miauler", "microbe", "miette", "mignon", "migrer", "milieu", "million", "mimique", "mince", "mine\u0301ral", "minimal", "minorer", "minute", "miracle", "miroiter", "missile", "mixte", "mobile", "moderne", "moelleux", "mondial", "moniteur", "monnaie", "monotone", "monstre", "montagne", "monument", "moqueur", "morceau", "morsure", "mortier", "moteur", "motif", "mouche", "moufle", "moulin", "mousson", "mouton", "mouvant", "multiple", "munition", "muraille", "mure\u0300ne", "murmure", "muscle", "muse\u0301um", "musicien", "mutation", "muter", "mutuel", "myriade", "myrtille", "myste\u0300re", "mythique", "nageur", "nappe", "narquois", "narrer", "natation", "nation", "nature", "naufrage", "nautique", "navire", "ne\u0301buleux", "nectar", "ne\u0301faste", "ne\u0301gation", "ne\u0301gliger", "ne\u0301gocier", "neige", "nerveux", "nettoyer", "neurone", "neutron", "neveu", "niche", "nickel", "nitrate", "niveau", "noble", "nocif", "nocturne", "noirceur", "noisette", "nomade", "nombreux", "nommer", "normatif", "notable", "notifier", "notoire", "nourrir", "nouveau", "novateur", "novembre", "novice", "nuage", "nuancer", "nuire", "nuisible", "nume\u0301ro", "nuptial", "nuque", "nutritif", "obe\u0301ir", "objectif", "obliger", "obscur", "observer", "obstacle", "obtenir", "obturer", "occasion", "occuper", "oce\u0301an", "octobre", "octroyer", "octupler", "oculaire", "odeur", "odorant", "offenser", "officier", "offrir", "ogive", "oiseau", "oisillon", "olfactif", "olivier", "ombrage", "omettre", "onctueux", "onduler", "one\u0301reux", "onirique", "opale", "opaque", "ope\u0301rer", "opinion", "opportun", "opprimer", "opter", "optique", "orageux", "orange", "orbite", "ordonner", "oreille", "organe", "orgueil", "orifice", "ornement", "orque", "ortie", "osciller", "osmose", "ossature", "otarie", "ouragan", "ourson", "outil", "outrager", "ouvrage", "ovation", "oxyde", "oxyge\u0300ne", "ozone", "paisible", "palace", "palmare\u0300s", "palourde", "palper", "panache", "panda", "pangolin", "paniquer", "panneau", "panorama", "pantalon", "papaye", "papier", "papoter", "papyrus", "paradoxe", "parcelle", "paresse", "parfumer", "parler", "parole", "parrain", "parsemer", "partager", "parure", "parvenir", "passion", "paste\u0300que", "paternel", "patience", "patron", "pavillon", "pavoiser", "payer", "paysage", "peigne", "peintre", "pelage", "pe\u0301lican", "pelle", "pelouse", "peluche", "pendule", "pe\u0301ne\u0301trer", "pe\u0301nible", "pensif", "pe\u0301nurie", "pe\u0301pite", "pe\u0301plum", "perdrix", "perforer", "pe\u0301riode", "permuter", "perplexe", "persil", "perte", "peser", "pe\u0301tale", "petit", "pe\u0301trir", "peuple", "pharaon", "phobie", "phoque", "photon", "phrase", "physique", "piano", "pictural", "pie\u0300ce", "pierre", "pieuvre", "pilote", "pinceau", "pipette", "piquer", "pirogue", "piscine", "piston", "pivoter", "pixel", "pizza", "placard", "plafond", "plaisir", "planer", "plaque", "plastron", "plateau", "pleurer", "plexus", "pliage", "plomb", "plonger", "pluie", "plumage", "pochette", "poe\u0301sie", "poe\u0300te", "pointe", "poirier", "poisson", "poivre", "polaire", "policier", "pollen", "polygone", "pommade", "pompier", "ponctuel", "ponde\u0301rer", "poney", "portique", "position", "posse\u0301der", "posture", "potager", "poteau", "potion", "pouce", "poulain", "poumon", "pourpre", "poussin", "pouvoir", "prairie", "pratique", "pre\u0301cieux", "pre\u0301dire", "pre\u0301fixe", "pre\u0301lude", "pre\u0301nom", "pre\u0301sence", "pre\u0301texte", "pre\u0301voir", "primitif", "prince", "prison", "priver", "proble\u0300me", "proce\u0301der", "prodige", "profond", "progre\u0300s", "proie", "projeter", "prologue", "promener", "propre", "prospe\u0300re", "prote\u0301ger", "prouesse", "proverbe", "prudence", "pruneau", "psychose", "public", "puceron", "puiser", "pulpe", "pulsar", "punaise", "punitif", "pupitre", "purifier", "puzzle", "pyramide", "quasar", "querelle", "question", "quie\u0301tude", "quitter", "quotient", "racine", "raconter", "radieux", "ragondin", "raideur", "raisin", "ralentir", "rallonge", "ramasser", "rapide", "rasage", "ratisser", "ravager", "ravin", "rayonner", "re\u0301actif", "re\u0301agir", "re\u0301aliser", "re\u0301animer", "recevoir", "re\u0301citer", "re\u0301clamer", "re\u0301colter", "recruter", "reculer", "recycler", "re\u0301diger", "redouter", "refaire", "re\u0301flexe", "re\u0301former", "refrain", "refuge", "re\u0301galien", "re\u0301gion", "re\u0301glage", "re\u0301gulier", "re\u0301ite\u0301rer", "rejeter", "rejouer", "relatif", "relever", "relief", "remarque", "reme\u0300de", "remise", "remonter", "remplir", "remuer", "renard", "renfort", "renifler", "renoncer", "rentrer", "renvoi", "replier", "reporter", "reprise", "reptile", "requin", "re\u0301serve", "re\u0301sineux", "re\u0301soudre", "respect", "rester", "re\u0301sultat", "re\u0301tablir", "retenir", "re\u0301ticule", "retomber", "retracer", "re\u0301union", "re\u0301ussir", "revanche", "revivre", "re\u0301volte", "re\u0301vulsif", "richesse", "rideau", "rieur", "rigide", "rigoler", "rincer", "riposter", "risible", "risque", "rituel", "rival", "rivie\u0300re", "rocheux", "romance", "rompre", "ronce", "rondin", "roseau", "rosier", "rotatif", "rotor", "rotule", "rouge", "rouille", "rouleau", "routine", "royaume", "ruban", "rubis", "ruche", "ruelle", "rugueux", "ruiner", "ruisseau", "ruser", "rustique", "rythme", "sabler", "saboter", "sabre", "sacoche", "safari", "sagesse", "saisir", "salade", "salive", "salon", "saluer", "samedi", "sanction", "sanglier", "sarcasme", "sardine", "saturer", "saugrenu", "saumon", "sauter", "sauvage", "savant", "savonner", "scalpel", "scandale", "sce\u0301le\u0301rat", "sce\u0301nario", "sceptre", "sche\u0301ma", "science", "scinder", "score", "scrutin", "sculpter", "se\u0301ance", "se\u0301cable", "se\u0301cher", "secouer", "se\u0301cre\u0301ter", "se\u0301datif", "se\u0301duire", "seigneur", "se\u0301jour", "se\u0301lectif", "semaine", "sembler", "semence", "se\u0301minal", "se\u0301nateur", "sensible", "sentence", "se\u0301parer", "se\u0301quence", "serein", "sergent", "se\u0301rieux", "serrure", "se\u0301rum", "service", "se\u0301same", "se\u0301vir", "sevrage", "sextuple", "side\u0301ral", "sie\u0300cle", "sie\u0301ger", "siffler", "sigle", "signal", "silence", "silicium", "simple", "since\u0300re", "sinistre", "siphon", "sirop", "sismique", "situer", "skier", "social", "socle", "sodium", "soigneux", "soldat", "soleil", "solitude", "soluble", "sombre", "sommeil", "somnoler", "sonde", "songeur", "sonnette", "sonore", "sorcier", "sortir", "sosie", "sottise", "soucieux", "soudure", "souffle", "soulever", "soupape", "source", "soutirer", "souvenir", "spacieux", "spatial", "spe\u0301cial", "sphe\u0300re", "spiral", "stable", "station", "sternum", "stimulus", "stipuler", "strict", "studieux", "stupeur", "styliste", "sublime", "substrat", "subtil", "subvenir", "succe\u0300s", "sucre", "suffixe", "sugge\u0301rer", "suiveur", "sulfate", "superbe", "supplier", "surface", "suricate", "surmener", "surprise", "sursaut", "survie", "suspect", "syllabe", "symbole", "syme\u0301trie", "synapse", "syntaxe", "syste\u0300me", "tabac", "tablier", "tactile", "tailler", "talent", "talisman", "talonner", "tambour", "tamiser", "tangible", "tapis", "taquiner", "tarder", "tarif", "tartine", "tasse", "tatami", "tatouage", "taupe", "taureau", "taxer", "te\u0301moin", "temporel", "tenaille", "tendre", "teneur", "tenir", "tension", "terminer", "terne", "terrible", "te\u0301tine", "texte", "the\u0300me", "the\u0301orie", "the\u0301rapie", "thorax", "tibia", "tie\u0300de", "timide", "tirelire", "tiroir", "tissu", "titane", "titre", "tituber", "toboggan", "tole\u0301rant", "tomate", "tonique", "tonneau", "toponyme", "torche", "tordre", "tornade", "torpille", "torrent", "torse", "tortue", "totem", "toucher", "tournage", "tousser", "toxine", "traction", "trafic", "tragique", "trahir", "train", "trancher", "travail", "tre\u0300fle", "tremper", "tre\u0301sor", "treuil", "triage", "tribunal", "tricoter", "trilogie", "triomphe", "tripler", "triturer", "trivial", "trombone", "tronc", "tropical", "troupeau", "tuile", "tulipe", "tumulte", "tunnel", "turbine", "tuteur", "tutoyer", "tuyau", "tympan", "typhon", "typique", "tyran", "ubuesque", "ultime", "ultrason", "unanime", "unifier", "union", "unique", "unitaire", "univers", "uranium", "urbain", "urticant", "usage", "usine", "usuel", "usure", "utile", "utopie", "vacarme", "vaccin", "vagabond", "vague", "vaillant", "vaincre", "vaisseau", "valable", "valise", "vallon", "valve", "vampire", "vanille", "vapeur", "varier", "vaseux", "vassal", "vaste", "vecteur", "vedette", "ve\u0301ge\u0301tal", "ve\u0301hicule", "veinard", "ve\u0301loce", "vendredi", "ve\u0301ne\u0301rer", "venger", "venimeux", "ventouse", "verdure", "ve\u0301rin", "vernir", "verrou", "verser", "vertu", "veston", "ve\u0301te\u0301ran", "ve\u0301tuste", "vexant", "vexer", "viaduc", "viande", "victoire", "vidange", "vide\u0301o", "vignette", "vigueur", "vilain", "village", "vinaigre", "violon", "vipe\u0300re", "virement", "virtuose", "virus", "visage", "viseur", "vision", "visqueux", "visuel", "vital", "vitesse", "viticole", "vitrine", "vivace", "vivipare", "vocation", "voguer", "voile", "voisin", "voiture", "volaille", "volcan", "voltiger", "volume", "vorace", "vortex", "voter", "vouloir", "voyage", "voyelle", "wagon", "xe\u0301non", "yacht", "ze\u0300bre", "ze\u0301nith", "zeste", "zoologie"], Zb = ["abaco", "abbaglio", "abbinato", "abete", "abisso", "abolire", "abrasivo", "abrogato", "accadere", "accenno", "accusato", "acetone", "achille", "acido", "acqua", "acre", "acrilico", "acrobata", "acuto", "adagio", "addebito", "addome", "adeguato", "aderire", "adipe", "adottare", "adulare", "affabile", "affetto", "affisso", "affranto", "aforisma", "afoso", "africano", "agave", "agente", "agevole", "aggancio", "agire", "agitare", "agonismo", "agricolo", "agrumeto", "aguzzo", "alabarda", "alato", "albatro", "alberato", "albo", "albume", "alce", "alcolico", "alettone", "alfa", "algebra", "aliante", "alibi", "alimento", "allagato", "allegro", "allievo", "allodola", "allusivo", "almeno", "alogeno", "alpaca", "alpestre", "altalena", "alterno", "alticcio", "altrove", "alunno", "alveolo", "alzare", "amalgama", "amanita", "amarena", "ambito", "ambrato", "ameba", "america", "ametista", "amico", "ammasso", "ammenda", "ammirare", "ammonito", "amore", "ampio", "ampliare", "amuleto", "anacardo", "anagrafe", "analista", "anarchia", "anatra", "anca", "ancella", "ancora", "andare", "andrea", "anello", "angelo", "angolare", "angusto", "anima", "annegare", "annidato", "anno", "annuncio", "anonimo", "anticipo", "anzi", "apatico", "apertura", "apode", "apparire", "appetito", "appoggio", "approdo", "appunto", "aprile", "arabica", "arachide", "aragosta", "araldica", "arancio", "aratura", "arazzo", "arbitro", "archivio", "ardito", "arenile", "argento", "argine", "arguto", "aria", "armonia", "arnese", "arredato", "arringa", "arrosto", "arsenico", "arso", "artefice", "arzillo", "asciutto", "ascolto", "asepsi", "asettico", "asfalto", "asino", "asola", "aspirato", "aspro", "assaggio", "asse", "assoluto", "assurdo", "asta", "astenuto", "astice", "astratto", "atavico", "ateismo", "atomico", "atono", "attesa", "attivare", "attorno", "attrito", "attuale", "ausilio", "austria", "autista", "autonomo", "autunno", "avanzato", "avere", "avvenire", "avviso", "avvolgere", "azione", "azoto", "azzimo", "azzurro", "babele", "baccano", "bacino", "baco", "badessa", "badilata", "bagnato", "baita", "balcone", "baldo", "balena", "ballata", "balzano", "bambino", "bandire", "baraonda", "barbaro", "barca", "baritono", "barlume", "barocco", "basilico", "basso", "batosta", "battuto", "baule", "bava", "bavosa", "becco", "beffa", "belgio", "belva", "benda", "benevole", "benigno", "benzina", "bere", "berlina", "beta", "bibita", "bici", "bidone", "bifido", "biga", "bilancia", "bimbo", "binocolo", "biologo", "bipede", "bipolare", "birbante", "birra", "biscotto", "bisesto", "bisnonno", "bisonte", "bisturi", "bizzarro", "blando", "blatta", "bollito", "bonifico", "bordo", "bosco", "botanico", "bottino", "bozzolo", "braccio", "bradipo", "brama", "branca", "bravura", "bretella", "brevetto", "brezza", "briglia", "brillante", "brindare", "broccolo", "brodo", "bronzina", "brullo", "bruno", "bubbone", "buca", "budino", "buffone", "buio", "bulbo", "buono", "burlone", "burrasca", "bussola", "busta", "cadetto", "caduco", "calamaro", "calcolo", "calesse", "calibro", "calmo", "caloria", "cambusa", "camerata", "camicia", "cammino", "camola", "campale", "canapa", "candela", "cane", "canino", "canotto", "cantina", "capace", "capello", "capitolo", "capogiro", "cappero", "capra", "capsula", "carapace", "carcassa", "cardo", "carisma", "carovana", "carretto", "cartolina", "casaccio", "cascata", "caserma", "caso", "cassone", "castello", "casuale", "catasta", "catena", "catrame", "cauto", "cavillo", "cedibile", "cedrata", "cefalo", "celebre", "cellulare", "cena", "cenone", "centesimo", "ceramica", "cercare", "certo", "cerume", "cervello", "cesoia", "cespo", "ceto", "chela", "chiaro", "chicca", "chiedere", "chimera", "china", "chirurgo", "chitarra", "ciao", "ciclismo", "cifrare", "cigno", "cilindro", "ciottolo", "circa", "cirrosi", "citrico", "cittadino", "ciuffo", "civetta", "civile", "classico", "clinica", "cloro", "cocco", "codardo", "codice", "coerente", "cognome", "collare", "colmato", "colore", "colposo", "coltivato", "colza", "coma", "cometa", "commando", "comodo", "computer", "comune", "conciso", "condurre", "conferma", "congelare", "coniuge", "connesso", "conoscere", "consumo", "continuo", "convegno", "coperto", "copione", "coppia", "copricapo", "corazza", "cordata", "coricato", "cornice", "corolla", "corpo", "corredo", "corsia", "cortese", "cosmico", "costante", "cottura", "covato", "cratere", "cravatta", "creato", "credere", "cremoso", "crescita", "creta", "criceto", "crinale", "crisi", "critico", "croce", "cronaca", "crostata", "cruciale", "crusca", "cucire", "cuculo", "cugino", "cullato", "cupola", "curatore", "cursore", "curvo", "cuscino", "custode", "dado", "daino", "dalmata", "damerino", "daniela", "dannoso", "danzare", "datato", "davanti", "davvero", "debutto", "decennio", "deciso", "declino", "decollo", "decreto", "dedicato", "definito", "deforme", "degno", "delegare", "delfino", "delirio", "delta", "demenza", "denotato", "dentro", "deposito", "derapata", "derivare", "deroga", "descritto", "deserto", "desiderio", "desumere", "detersivo", "devoto", "diametro", "dicembre", "diedro", "difeso", "diffuso", "digerire", "digitale", "diluvio", "dinamico", "dinnanzi", "dipinto", "diploma", "dipolo", "diradare", "dire", "dirotto", "dirupo", "disagio", "discreto", "disfare", "disgelo", "disposto", "distanza", "disumano", "dito", "divano", "divelto", "dividere", "divorato", "doblone", "docente", "doganale", "dogma", "dolce", "domato", "domenica", "dominare", "dondolo", "dono", "dormire", "dote", "dottore", "dovuto", "dozzina", "drago", "druido", "dubbio", "dubitare", "ducale", "duna", "duomo", "duplice", "duraturo", "ebano", "eccesso", "ecco", "eclissi", "economia", "edera", "edicola", "edile", "editoria", "educare", "egemonia", "egli", "egoismo", "egregio", "elaborato", "elargire", "elegante", "elencato", "eletto", "elevare", "elfico", "elica", "elmo", "elsa", "eluso", "emanato", "emblema", "emesso", "emiro", "emotivo", "emozione", "empirico", "emulo", "endemico", "enduro", "energia", "enfasi", "enoteca", "entrare", "enzima", "epatite", "epilogo", "episodio", "epocale", "eppure", "equatore", "erario", "erba", "erboso", "erede", "eremita", "erigere", "ermetico", "eroe", "erosivo", "errante", "esagono", "esame", "esanime", "esaudire", "esca", "esempio", "esercito", "esibito", "esigente", "esistere", "esito", "esofago", "esortato", "esoso", "espanso", "espresso", "essenza", "esso", "esteso", "estimare", "estonia", "estroso", "esultare", "etilico", "etnico", "etrusco", "etto", "euclideo", "europa", "evaso", "evidenza", "evitato", "evoluto", "evviva", "fabbrica", "faccenda", "fachiro", "falco", "famiglia", "fanale", "fanfara", "fango", "fantasma", "fare", "farfalla", "farinoso", "farmaco", "fascia", "fastoso", "fasullo", "faticare", "fato", "favoloso", "febbre", "fecola", "fede", "fegato", "felpa", "feltro", "femmina", "fendere", "fenomeno", "fermento", "ferro", "fertile", "fessura", "festivo", "fetta", "feudo", "fiaba", "fiducia", "fifa", "figurato", "filo", "finanza", "finestra", "finire", "fiore", "fiscale", "fisico", "fiume", "flacone", "flamenco", "flebo", "flemma", "florido", "fluente", "fluoro", "fobico", "focaccia", "focoso", "foderato", "foglio", "folata", "folclore", "folgore", "fondente", "fonetico", "fonia", "fontana", "forbito", "forchetta", "foresta", "formica", "fornaio", "foro", "fortezza", "forzare", "fosfato", "fosso", "fracasso", "frana", "frassino", "fratello", "freccetta", "frenata", "fresco", "frigo", "frollino", "fronde", "frugale", "frutta", "fucilata", "fucsia", "fuggente", "fulmine", "fulvo", "fumante", "fumetto", "fumoso", "fune", "funzione", "fuoco", "furbo", "furgone", "furore", "fuso", "futile", "gabbiano", "gaffe", "galateo", "gallina", "galoppo", "gambero", "gamma", "garanzia", "garbo", "garofano", "garzone", "gasdotto", "gasolio", "gastrico", "gatto", "gaudio", "gazebo", "gazzella", "geco", "gelatina", "gelso", "gemello", "gemmato", "gene", "genitore", "gennaio", "genotipo", "gergo", "ghepardo", "ghiaccio", "ghisa", "giallo", "gilda", "ginepro", "giocare", "gioiello", "giorno", "giove", "girato", "girone", "gittata", "giudizio", "giurato", "giusto", "globulo", "glutine", "gnomo", "gobba", "golf", "gomito", "gommone", "gonfio", "gonna", "governo", "gracile", "grado", "grafico", "grammo", "grande", "grattare", "gravoso", "grazia", "greca", "gregge", "grifone", "grigio", "grinza", "grotta", "gruppo", "guadagno", "guaio", "guanto", "guardare", "gufo", "guidare", "ibernato", "icona", "identico", "idillio", "idolo", "idra", "idrico", "idrogeno", "igiene", "ignaro", "ignorato", "ilare", "illeso", "illogico", "illudere", "imballo", "imbevuto", "imbocco", "imbuto", "immane", "immerso", "immolato", "impacco", "impeto", "impiego", "importo", "impronta", "inalare", "inarcare", "inattivo", "incanto", "incendio", "inchino", "incisivo", "incluso", "incontro", "incrocio", "incubo", "indagine", "india", "indole", "inedito", "infatti", "infilare", "inflitto", "ingaggio", "ingegno", "inglese", "ingordo", "ingrosso", "innesco", "inodore", "inoltrare", "inondato", "insano", "insetto", "insieme", "insonnia", "insulina", "intasato", "intero", "intonaco", "intuito", "inumidire", "invalido", "invece", "invito", "iperbole", "ipnotico", "ipotesi", "ippica", "iride", "irlanda", "ironico", "irrigato", "irrorare", "isolato", "isotopo", "isterico", "istituto", "istrice", "italia", "iterare", "labbro", "labirinto", "lacca", "lacerato", "lacrima", "lacuna", "laddove", "lago", "lampo", "lancetta", "lanterna", "lardoso", "larga", "laringe", "lastra", "latenza", "latino", "lattuga", "lavagna", "lavoro", "legale", "leggero", "lembo", "lentezza", "lenza", "leone", "lepre", "lesivo", "lessato", "lesto", "letterale", "leva", "levigato", "libero", "lido", "lievito", "lilla", "limatura", "limitare", "limpido", "lineare", "lingua", "liquido", "lira", "lirica", "lisca", "lite", "litigio", "livrea", "locanda", "lode", "logica", "lombare", "londra", "longevo", "loquace", "lorenzo", "loto", "lotteria", "luce", "lucidato", "lumaca", "luminoso", "lungo", "lupo", "luppolo", "lusinga", "lusso", "lutto", "macabro", "macchina", "macero", "macinato", "madama", "magico", "maglia", "magnete", "magro", "maiolica", "malafede", "malgrado", "malinteso", "malsano", "malto", "malumore", "mana", "mancia", "mandorla", "mangiare", "manifesto", "mannaro", "manovra", "mansarda", "mantide", "manubrio", "mappa", "maratona", "marcire", "maretta", "marmo", "marsupio", "maschera", "massaia", "mastino", "materasso", "matricola", "mattone", "maturo", "mazurca", "meandro", "meccanico", "mecenate", "medesimo", "meditare", "mega", "melassa", "melis", "melodia", "meninge", "meno", "mensola", "mercurio", "merenda", "merlo", "meschino", "mese", "messere", "mestolo", "metallo", "metodo", "mettere", "miagolare", "mica", "micelio", "michele", "microbo", "midollo", "miele", "migliore", "milano", "milite", "mimosa", "minerale", "mini", "minore", "mirino", "mirtillo", "miscela", "missiva", "misto", "misurare", "mitezza", "mitigare", "mitra", "mittente", "mnemonico", "modello", "modifica", "modulo", "mogano", "mogio", "mole", "molosso", "monastero", "monco", "mondina", "monetario", "monile", "monotono", "monsone", "montato", "monviso", "mora", "mordere", "morsicato", "mostro", "motivato", "motosega", "motto", "movenza", "movimento", "mozzo", "mucca", "mucosa", "muffa", "mughetto", "mugnaio", "mulatto", "mulinello", "multiplo", "mummia", "munto", "muovere", "murale", "musa", "muscolo", "musica", "mutevole", "muto", "nababbo", "nafta", "nanometro", "narciso", "narice", "narrato", "nascere", "nastrare", "naturale", "nautica", "naviglio", "nebulosa", "necrosi", "negativo", "negozio", "nemmeno", "neofita", "neretto", "nervo", "nessuno", "nettuno", "neutrale", "neve", "nevrotico", "nicchia", "ninfa", "nitido", "nobile", "nocivo", "nodo", "nome", "nomina", "nordico", "normale", "norvegese", "nostrano", "notare", "notizia", "notturno", "novella", "nucleo", "nulla", "numero", "nuovo", "nutrire", "nuvola", "nuziale", "oasi", "obbedire", "obbligo", "obelisco", "oblio", "obolo", "obsoleto", "occasione", "occhio", "occidente", "occorrere", "occultare", "ocra", "oculato", "odierno", "odorare", "offerta", "offrire", "offuscato", "oggetto", "oggi", "ognuno", "olandese", "olfatto", "oliato", "oliva", "ologramma", "oltre", "omaggio", "ombelico", "ombra", "omega", "omissione", "ondoso", "onere", "onice", "onnivoro", "onorevole", "onta", "operato", "opinione", "opposto", "oracolo", "orafo", "ordine", "orecchino", "orefice", "orfano", "organico", "origine", "orizzonte", "orma", "ormeggio", "ornativo", "orologio", "orrendo", "orribile", "ortensia", "ortica", "orzata", "orzo", "osare", "oscurare", "osmosi", "ospedale", "ospite", "ossa", "ossidare", "ostacolo", "oste", "otite", "otre", "ottagono", "ottimo", "ottobre", "ovale", "ovest", "ovino", "oviparo", "ovocito", "ovunque", "ovviare", "ozio", "pacchetto", "pace", "pacifico", "padella", "padrone", "paese", "paga", "pagina", "palazzina", "palesare", "pallido", "palo", "palude", "pandoro", "pannello", "paolo", "paonazzo", "paprica", "parabola", "parcella", "parere", "pargolo", "pari", "parlato", "parola", "partire", "parvenza", "parziale", "passivo", "pasticca", "patacca", "patologia", "pattume", "pavone", "peccato", "pedalare", "pedonale", "peggio", "peloso", "penare", "pendice", "penisola", "pennuto", "penombra", "pensare", "pentola", "pepe", "pepita", "perbene", "percorso", "perdonato", "perforare", "pergamena", "periodo", "permesso", "perno", "perplesso", "persuaso", "pertugio", "pervaso", "pesatore", "pesista", "peso", "pestifero", "petalo", "pettine", "petulante", "pezzo", "piacere", "pianta", "piattino", "piccino", "picozza", "piega", "pietra", "piffero", "pigiama", "pigolio", "pigro", "pila", "pilifero", "pillola", "pilota", "pimpante", "pineta", "pinna", "pinolo", "pioggia", "piombo", "piramide", "piretico", "pirite", "pirolisi", "pitone", "pizzico", "placebo", "planare", "plasma", "platano", "plenario", "pochezza", "poderoso", "podismo", "poesia", "poggiare", "polenta", "poligono", "pollice", "polmonite", "polpetta", "polso", "poltrona", "polvere", "pomice", "pomodoro", "ponte", "popoloso", "porfido", "poroso", "porpora", "porre", "portata", "posa", "positivo", "possesso", "postulato", "potassio", "potere", "pranzo", "prassi", "pratica", "precluso", "predica", "prefisso", "pregiato", "prelievo", "premere", "prenotare", "preparato", "presenza", "pretesto", "prevalso", "prima", "principe", "privato", "problema", "procura", "produrre", "profumo", "progetto", "prolunga", "promessa", "pronome", "proposta", "proroga", "proteso", "prova", "prudente", "prugna", "prurito", "psiche", "pubblico", "pudica", "pugilato", "pugno", "pulce", "pulito", "pulsante", "puntare", "pupazzo", "pupilla", "puro", "quadro", "qualcosa", "quasi", "querela", "quota", "raccolto", "raddoppio", "radicale", "radunato", "raffica", "ragazzo", "ragione", "ragno", "ramarro", "ramingo", "ramo", "randagio", "rantolare", "rapato", "rapina", "rappreso", "rasatura", "raschiato", "rasente", "rassegna", "rastrello", "rata", "ravveduto", "reale", "recepire", "recinto", "recluta", "recondito", "recupero", "reddito", "redimere", "regalato", "registro", "regola", "regresso", "relazione", "remare", "remoto", "renna", "replica", "reprimere", "reputare", "resa", "residente", "responso", "restauro", "rete", "retina", "retorica", "rettifica", "revocato", "riassunto", "ribadire", "ribelle", "ribrezzo", "ricarica", "ricco", "ricevere", "riciclato", "ricordo", "ricreduto", "ridicolo", "ridurre", "rifasare", "riflesso", "riforma", "rifugio", "rigare", "rigettato", "righello", "rilassato", "rilevato", "rimanere", "rimbalzo", "rimedio", "rimorchio", "rinascita", "rincaro", "rinforzo", "rinnovo", "rinomato", "rinsavito", "rintocco", "rinuncia", "rinvenire", "riparato", "ripetuto", "ripieno", "riportare", "ripresa", "ripulire", "risata", "rischio", "riserva", "risibile", "riso", "rispetto", "ristoro", "risultato", "risvolto", "ritardo", "ritegno", "ritmico", "ritrovo", "riunione", "riva", "riverso", "rivincita", "rivolto", "rizoma", "roba", "robotico", "robusto", "roccia", "roco", "rodaggio", "rodere", "roditore", "rogito", "rollio", "romantico", "rompere", "ronzio", "rosolare", "rospo", "rotante", "rotondo", "rotula", "rovescio", "rubizzo", "rubrica", "ruga", "rullino", "rumine", "rumoroso", "ruolo", "rupe", "russare", "rustico", "sabato", "sabbiare", "sabotato", "sagoma", "salasso", "saldatura", "salgemma", "salivare", "salmone", "salone", "saltare", "saluto", "salvo", "sapere", "sapido", "saporito", "saraceno", "sarcasmo", "sarto", "sassoso", "satellite", "satira", "satollo", "saturno", "savana", "savio", "saziato", "sbadiglio", "sbalzo", "sbancato", "sbarra", "sbattere", "sbavare", "sbendare", "sbirciare", "sbloccato", "sbocciato", "sbrinare", "sbruffone", "sbuffare", "scabroso", "scadenza", "scala", "scambiare", "scandalo", "scapola", "scarso", "scatenare", "scavato", "scelto", "scenico", "scettro", "scheda", "schiena", "sciarpa", "scienza", "scindere", "scippo", "sciroppo", "scivolo", "sclerare", "scodella", "scolpito", "scomparto", "sconforto", "scoprire", "scorta", "scossone", "scozzese", "scriba", "scrollare", "scrutinio", "scuderia", "scultore", "scuola", "scuro", "scusare", "sdebitare", "sdoganare", "seccatura", "secondo", "sedano", "seggiola", "segnalato", "segregato", "seguito", "selciato", "selettivo", "sella", "selvaggio", "semaforo", "sembrare", "seme", "seminato", "sempre", "senso", "sentire", "sepolto", "sequenza", "serata", "serbato", "sereno", "serio", "serpente", "serraglio", "servire", "sestina", "setola", "settimana", "sfacelo", "sfaldare", "sfamato", "sfarzoso", "sfaticato", "sfera", "sfida", "sfilato", "sfinge", "sfocato", "sfoderare", "sfogo", "sfoltire", "sforzato", "sfratto", "sfruttato", "sfuggito", "sfumare", "sfuso", "sgabello", "sgarbato", "sgonfiare", "sgorbio", "sgrassato", "sguardo", "sibilo", "siccome", "sierra", "sigla", "signore", "silenzio", "sillaba", "simbolo", "simpatico", "simulato", "sinfonia", "singolo", "sinistro", "sino", "sintesi", "sinusoide", "sipario", "sisma", "sistole", "situato", "slitta", "slogatura", "sloveno", "smarrito", "smemorato", "smentito", "smeraldo", "smilzo", "smontare", "smottato", "smussato", "snellire", "snervato", "snodo", "sobbalzo", "sobrio", "soccorso", "sociale", "sodale", "soffitto", "sogno", "soldato", "solenne", "solido", "sollazzo", "solo", "solubile", "solvente", "somatico", "somma", "sonda", "sonetto", "sonnifero", "sopire", "soppeso", "sopra", "sorgere", "sorpasso", "sorriso", "sorso", "sorteggio", "sorvolato", "sospiro", "sosta", "sottile", "spada", "spalla", "spargere", "spatola", "spavento", "spazzola", "specie", "spedire", "spegnere", "spelatura", "speranza", "spessore", "spettrale", "spezzato", "spia", "spigoloso", "spillato", "spinoso", "spirale", "splendido", "sportivo", "sposo", "spranga", "sprecare", "spronato", "spruzzo", "spuntino", "squillo", "sradicare", "srotolato", "stabile", "stacco", "staffa", "stagnare", "stampato", "stantio", "starnuto", "stasera", "statuto", "stelo", "steppa", "sterzo", "stiletto", "stima", "stirpe", "stivale", "stizzoso", "stonato", "storico", "strappo", "stregato", "stridulo", "strozzare", "strutto", "stuccare", "stufo", "stupendo", "subentro", "succoso", "sudore", "suggerito", "sugo", "sultano", "suonare", "superbo", "supporto", "surgelato", "surrogato", "sussurro", "sutura", "svagare", "svedese", "sveglio", "svelare", "svenuto", "svezia", "sviluppo", "svista", "svizzera", "svolta", "svuotare", "tabacco", "tabulato", "tacciare", "taciturno", "tale", "talismano", "tampone", "tannino", "tara", "tardivo", "targato", "tariffa", "tarpare", "tartaruga", "tasto", "tattico", "taverna", "tavolata", "tazza", "teca", "tecnico", "telefono", "temerario", "tempo", "temuto", "tendone", "tenero", "tensione", "tentacolo", "teorema", "terme", "terrazzo", "terzetto", "tesi", "tesserato", "testato", "tetro", "tettoia", "tifare", "tigella", "timbro", "tinto", "tipico", "tipografo", "tiraggio", "tiro", "titanio", "titolo", "titubante", "tizio", "tizzone", "toccare", "tollerare", "tolto", "tombola", "tomo", "tonfo", "tonsilla", "topazio", "topologia", "toppa", "torba", "tornare", "torrone", "tortora", "toscano", "tossire", "tostatura", "totano", "trabocco", "trachea", "trafila", "tragedia", "tralcio", "tramonto", "transito", "trapano", "trarre", "trasloco", "trattato", "trave", "treccia", "tremolio", "trespolo", "tributo", "tricheco", "trifoglio", "trillo", "trincea", "trio", "tristezza", "triturato", "trivella", "tromba", "trono", "troppo", "trottola", "trovare", "truccato", "tubatura", "tuffato", "tulipano", "tumulto", "tunisia", "turbare", "turchino", "tuta", "tutela", "ubicato", "uccello", "uccisore", "udire", "uditivo", "uffa", "ufficio", "uguale", "ulisse", "ultimato", "umano", "umile", "umorismo", "uncinetto", "ungere", "ungherese", "unicorno", "unificato", "unisono", "unitario", "unte", "uovo", "upupa", "uragano", "urgenza", "urlo", "usanza", "usato", "uscito", "usignolo", "usuraio", "utensile", "utilizzo", "utopia", "vacante", "vaccinato", "vagabondo", "vagliato", "valanga", "valgo", "valico", "valletta", "valoroso", "valutare", "valvola", "vampata", "vangare", "vanitoso", "vano", "vantaggio", "vanvera", "vapore", "varano", "varcato", "variante", "vasca", "vedetta", "vedova", "veduto", "vegetale", "veicolo", "velcro", "velina", "velluto", "veloce", "venato", "vendemmia", "vento", "verace", "verbale", "vergogna", "verifica", "vero", "verruca", "verticale", "vescica", "vessillo", "vestale", "veterano", "vetrina", "vetusto", "viandante", "vibrante", "vicenda", "vichingo", "vicinanza", "vidimare", "vigilia", "vigneto", "vigore", "vile", "villano", "vimini", "vincitore", "viola", "vipera", "virgola", "virologo", "virulento", "viscoso", "visione", "vispo", "vissuto", "visura", "vita", "vitello", "vittima", "vivanda", "vivido", "viziare", "voce", "voga", "volatile", "volere", "volpe", "voragine", "vulcano", "zampogna", "zanna", "zappato", "zattera", "zavorra", "zefiro", "zelante", "zelo", "zenzero", "zerbino", "zibetto", "zinco", "zircone", "zitto", "zolla", "zotico", "zucchero", "zufolo", "zulu", "zuppa"], Xb = ["a\u0301baco", "abdomen", "abeja", "abierto", "abogado", "abono", "aborto", "abrazo", "abrir", "abuelo", "abuso", "acabar", "academia", "acceso", "accio\u0301n", "aceite", "acelga", "acento", "aceptar", "a\u0301cido", "aclarar", "acne\u0301", "acoger", "acoso", "activo", "acto", "actriz", "actuar", "acudir", "acuerdo", "acusar", "adicto", "admitir", "adoptar", "adorno", "aduana", "adulto", "ae\u0301reo", "afectar", "aficio\u0301n", "afinar", "afirmar", "a\u0301gil", "agitar", "agoni\u0301a", "agosto", "agotar", "agregar", "agrio", "agua", "agudo", "a\u0301guila", "aguja", "ahogo", "ahorro", "aire", "aislar", "ajedrez", "ajeno", "ajuste", "alacra\u0301n", "alambre", "alarma", "alba", "a\u0301lbum", "alcalde", "aldea", "alegre", "alejar", "alerta", "aleta", "alfiler", "alga", "algodo\u0301n", "aliado", "aliento", "alivio", "alma", "almeja", "almi\u0301bar", "altar", "alteza", "altivo", "alto", "altura", "alumno", "alzar", "amable", "amante", "amapola", "amargo", "amasar", "a\u0301mbar", "a\u0301mbito", "ameno", "amigo", "amistad", "amor", "amparo", "amplio", "ancho", "anciano", "ancla", "andar", "ande\u0301n", "anemia", "a\u0301ngulo", "anillo", "a\u0301nimo", "ani\u0301s", "anotar", "antena", "antiguo", "antojo", "anual", "anular", "anuncio", "an\u0303adir", "an\u0303ejo", "an\u0303o", "apagar", "aparato", "apetito", "apio", "aplicar", "apodo", "aporte", "apoyo", "aprender", "aprobar", "apuesta", "apuro", "arado", "aran\u0303a", "arar", "a\u0301rbitro", "a\u0301rbol", "arbusto", "archivo", "arco", "arder", "ardilla", "arduo", "a\u0301rea", "a\u0301rido", "aries", "armoni\u0301a", "arne\u0301s", "aroma", "arpa", "arpo\u0301n", "arreglo", "arroz", "arruga", "arte", "artista", "asa", "asado", "asalto", "ascenso", "asegurar", "aseo", "asesor", "asiento", "asilo", "asistir", "asno", "asombro", "a\u0301spero", "astilla", "astro", "astuto", "asumir", "asunto", "atajo", "ataque", "atar", "atento", "ateo", "a\u0301tico", "atleta", "a\u0301tomo", "atraer", "atroz", "atu\u0301n", "audaz", "audio", "auge", "aula", "aumento", "ausente", "autor", "aval", "avance", "avaro", "ave", "avellana", "avena", "avestruz", "avio\u0301n", "aviso", "ayer", "ayuda", "ayuno", "azafra\u0301n", "azar", "azote", "azu\u0301car", "azufre", "azul", "baba", "babor", "bache", "bahi\u0301a", "baile", "bajar", "balanza", "balco\u0301n", "balde", "bambu\u0301", "banco", "banda", "ban\u0303o", "barba", "barco", "barniz", "barro", "ba\u0301scula", "basto\u0301n", "basura", "batalla", "bateri\u0301a", "batir", "batuta", "bau\u0301l", "bazar", "bebe\u0301", "bebida", "bello", "besar", "beso", "bestia", "bicho", "bien", "bingo", "blanco", "bloque", "blusa", "boa", "bobina", "bobo", "boca", "bocina", "boda", "bodega", "boina", "bola", "bolero", "bolsa", "bomba", "bondad", "bonito", "bono", "bonsa\u0301i", "borde", "borrar", "bosque", "bote", "boti\u0301n", "bo\u0301veda", "bozal", "bravo", "brazo", "brecha", "breve", "brillo", "brinco", "brisa", "broca", "broma", "bronce", "brote", "bruja", "brusco", "bruto", "buceo", "bucle", "bueno", "buey", "bufanda", "bufo\u0301n", "bu\u0301ho", "buitre", "bulto", "burbuja", "burla", "burro", "buscar", "butaca", "buzo\u0301n", "caballo", "cabeza", "cabina", "cabra", "cacao", "cada\u0301ver", "cadena", "caer", "cafe\u0301", "cai\u0301da", "caima\u0301n", "caja", "cajo\u0301n", "cal", "calamar", "calcio", "caldo", "calidad", "calle", "calma", "calor", "calvo", "cama", "cambio", "camello", "camino", "campo", "ca\u0301ncer", "candil", "canela", "canguro", "canica", "canto", "can\u0303a", "can\u0303o\u0301n", "caoba", "caos", "capaz", "capita\u0301n", "capote", "captar", "capucha", "cara", "carbo\u0301n", "ca\u0301rcel", "careta", "carga", "carin\u0303o", "carne", "carpeta", "carro", "carta", "casa", "casco", "casero", "caspa", "castor", "catorce", "catre", "caudal", "causa", "cazo", "cebolla", "ceder", "cedro", "celda", "ce\u0301lebre", "celoso", "ce\u0301lula", "cemento", "ceniza", "centro", "cerca", "cerdo", "cereza", "cero", "cerrar", "certeza", "ce\u0301sped", "cetro", "chacal", "chaleco", "champu\u0301", "chancla", "chapa", "charla", "chico", "chiste", "chivo", "choque", "choza", "chuleta", "chupar", "ciclo\u0301n", "ciego", "cielo", "cien", "cierto", "cifra", "cigarro", "cima", "cinco", "cine", "cinta", "cipre\u0301s", "circo", "ciruela", "cisne", "cita", "ciudad", "clamor", "clan", "claro", "clase", "clave", "cliente", "clima", "cli\u0301nica", "cobre", "coccio\u0301n", "cochino", "cocina", "coco", "co\u0301digo", "codo", "cofre", "coger", "cohete", "coji\u0301n", "cojo", "cola", "colcha", "colegio", "colgar", "colina", "collar", "colmo", "columna", "combate", "comer", "comida", "co\u0301modo", "compra", "conde", "conejo", "conga", "conocer", "consejo", "contar", "copa", "copia", "corazo\u0301n", "corbata", "corcho", "cordo\u0301n", "corona", "correr", "coser", "cosmos", "costa", "cra\u0301neo", "cra\u0301ter", "crear", "crecer", "crei\u0301do", "crema", "cri\u0301a", "crimen", "cripta", "crisis", "cromo", "cro\u0301nica", "croqueta", "crudo", "cruz", "cuadro", "cuarto", "cuatro", "cubo", "cubrir", "cuchara", "cuello", "cuento", "cuerda", "cuesta", "cueva", "cuidar", "culebra", "culpa", "culto", "cumbre", "cumplir", "cuna", "cuneta", "cuota", "cupo\u0301n", "cu\u0301pula", "curar", "curioso", "curso", "curva", "cutis", "dama", "danza", "dar", "dardo", "da\u0301til", "deber", "de\u0301bil", "de\u0301cada", "decir", "dedo", "defensa", "definir", "dejar", "delfi\u0301n", "delgado", "delito", "demora", "denso", "dental", "deporte", "derecho", "derrota", "desayuno", "deseo", "desfile", "desnudo", "destino", "desvi\u0301o", "detalle", "detener", "deuda", "di\u0301a", "diablo", "diadema", "diamante", "diana", "diario", "dibujo", "dictar", "diente", "dieta", "diez", "difi\u0301cil", "digno", "dilema", "diluir", "dinero", "directo", "dirigir", "disco", "disen\u0303o", "disfraz", "diva", "divino", "doble", "doce", "dolor", "domingo", "don", "donar", "dorado", "dormir", "dorso", "dos", "dosis", "drago\u0301n", "droga", "ducha", "duda", "duelo", "duen\u0303o", "dulce", "du\u0301o", "duque", "durar", "dureza", "duro", "e\u0301bano", "ebrio", "echar", "eco", "ecuador", "edad", "edicio\u0301n", "edificio", "editor", "educar", "efecto", "eficaz", "eje", "ejemplo", "elefante", "elegir", "elemento", "elevar", "elipse", "e\u0301lite", "elixir", "elogio", "eludir", "embudo", "emitir", "emocio\u0301n", "empate", "empen\u0303o", "empleo", "empresa", "enano", "encargo", "enchufe", "enci\u0301a", "enemigo", "enero", "enfado", "enfermo", "engan\u0303o", "enigma", "enlace", "enorme", "enredo", "ensayo", "ensen\u0303ar", "entero", "entrar", "envase", "envi\u0301o", "e\u0301poca", "equipo", "erizo", "escala", "escena", "escolar", "escribir", "escudo", "esencia", "esfera", "esfuerzo", "espada", "espejo", "espi\u0301a", "esposa", "espuma", "esqui\u0301", "estar", "este", "estilo", "estufa", "etapa", "eterno", "e\u0301tica", "etnia", "evadir", "evaluar", "evento", "evitar", "exacto", "examen", "exceso", "excusa", "exento", "exigir", "exilio", "existir", "e\u0301xito", "experto", "explicar", "exponer", "extremo", "fa\u0301brica", "fa\u0301bula", "fachada", "fa\u0301cil", "factor", "faena", "faja", "falda", "fallo", "falso", "faltar", "fama", "familia", "famoso", "farao\u0301n", "farmacia", "farol", "farsa", "fase", "fatiga", "fauna", "favor", "fax", "febrero", "fecha", "feliz", "feo", "feria", "feroz", "fe\u0301rtil", "fervor", "festi\u0301n", "fiable", "fianza", "fiar", "fibra", "ficcio\u0301n", "ficha", "fideo", "fiebre", "fiel", "fiera", "fiesta", "figura", "fijar", "fijo", "fila", "filete", "filial", "filtro", "fin", "finca", "fingir", "finito", "firma", "flaco", "flauta", "flecha", "flor", "flota", "fluir", "flujo", "flu\u0301or", "fobia", "foca", "fogata", "fogo\u0301n", "folio", "folleto", "fondo", "forma", "forro", "fortuna", "forzar", "fosa", "foto", "fracaso", "fra\u0301gil", "franja", "frase", "fraude", "frei\u0301r", "freno", "fresa", "fri\u0301o", "frito", "fruta", "fuego", "fuente", "fuerza", "fuga", "fumar", "funcio\u0301n", "funda", "furgo\u0301n", "furia", "fusil", "fu\u0301tbol", "futuro", "gacela", "gafas", "gaita", "gajo", "gala", "galeri\u0301a", "gallo", "gamba", "ganar", "gancho", "ganga", "ganso", "garaje", "garza", "gasolina", "gastar", "gato", "gavila\u0301n", "gemelo", "gemir", "gen", "ge\u0301nero", "genio", "gente", "geranio", "gerente", "germen", "gesto", "gigante", "gimnasio", "girar", "giro", "glaciar", "globo", "gloria", "gol", "golfo", "goloso", "golpe", "goma", "gordo", "gorila", "gorra", "gota", "goteo", "gozar", "grada", "gra\u0301fico", "grano", "grasa", "gratis", "grave", "grieta", "grillo", "gripe", "gris", "grito", "grosor", "gru\u0301a", "grueso", "grumo", "grupo", "guante", "guapo", "guardia", "guerra", "gui\u0301a", "guin\u0303o", "guion", "guiso", "guitarra", "gusano", "gustar", "haber", "ha\u0301bil", "hablar", "hacer", "hacha", "hada", "hallar", "hamaca", "harina", "haz", "hazan\u0303a", "hebilla", "hebra", "hecho", "helado", "helio", "hembra", "herir", "hermano", "he\u0301roe", "hervir", "hielo", "hierro", "hi\u0301gado", "higiene", "hijo", "himno", "historia", "hocico", "hogar", "hoguera", "hoja", "hombre", "hongo", "honor", "honra", "hora", "hormiga", "horno", "hostil", "hoyo", "hueco", "huelga", "huerta", "hueso", "huevo", "huida", "huir", "humano", "hu\u0301medo", "humilde", "humo", "hundir", "huraca\u0301n", "hurto", "icono", "ideal", "idioma", "i\u0301dolo", "iglesia", "iglu\u0301", "igual", "ilegal", "ilusio\u0301n", "imagen", "ima\u0301n", "imitar", "impar", "imperio", "imponer", "impulso", "incapaz", "i\u0301ndice", "inerte", "infiel", "informe", "ingenio", "inicio", "inmenso", "inmune", "innato", "insecto", "instante", "intere\u0301s", "i\u0301ntimo", "intuir", "inu\u0301til", "invierno", "ira", "iris", "ironi\u0301a", "isla", "islote", "jabali\u0301", "jabo\u0301n", "jamo\u0301n", "jarabe", "jardi\u0301n", "jarra", "jaula", "jazmi\u0301n", "jefe", "jeringa", "jinete", "jornada", "joroba", "joven", "joya", "juerga", "jueves", "juez", "jugador", "jugo", "juguete", "juicio", "junco", "jungla", "junio", "juntar", "ju\u0301piter", "jurar", "justo", "juvenil", "juzgar", "kilo", "koala", "labio", "lacio", "lacra", "lado", "ladro\u0301n", "lagarto", "la\u0301grima", "laguna", "laico", "lamer", "la\u0301mina", "la\u0301mpara", "lana", "lancha", "langosta", "lanza", "la\u0301piz", "largo", "larva", "la\u0301stima", "lata", "la\u0301tex", "latir", "laurel", "lavar", "lazo", "leal", "leccio\u0301n", "leche", "lector", "leer", "legio\u0301n", "legumbre", "lejano", "lengua", "lento", "len\u0303a", "leo\u0301n", "leopardo", "lesio\u0301n", "letal", "letra", "leve", "leyenda", "libertad", "libro", "licor", "li\u0301der", "lidiar", "lienzo", "liga", "ligero", "lima", "li\u0301mite", "limo\u0301n", "limpio", "lince", "lindo", "li\u0301nea", "lingote", "lino", "linterna", "li\u0301quido", "liso", "lista", "litera", "litio", "litro", "llaga", "llama", "llanto", "llave", "llegar", "llenar", "llevar", "llorar", "llover", "lluvia", "lobo", "locio\u0301n", "loco", "locura", "lo\u0301gica", "logro", "lombriz", "lomo", "lonja", "lote", "lucha", "lucir", "lugar", "lujo", "luna", "lunes", "lupa", "lustro", "luto", "luz", "maceta", "macho", "madera", "madre", "maduro", "maestro", "mafia", "magia", "mago", "mai\u0301z", "maldad", "maleta", "malla", "malo", "mama\u0301", "mambo", "mamut", "manco", "mando", "manejar", "manga", "maniqui\u0301", "manjar", "mano", "manso", "manta", "man\u0303ana", "mapa", "ma\u0301quina", "mar", "marco", "marea", "marfil", "margen", "marido", "ma\u0301rmol", "marro\u0301n", "martes", "marzo", "masa", "ma\u0301scara", "masivo", "matar", "materia", "matiz", "matriz", "ma\u0301ximo", "mayor", "mazorca", "mecha", "medalla", "medio", "me\u0301dula", "mejilla", "mejor", "melena", "melo\u0301n", "memoria", "menor", "mensaje", "mente", "menu\u0301", "mercado", "merengue", "me\u0301rito", "mes", "meso\u0301n", "meta", "meter", "me\u0301todo", "metro", "mezcla", "miedo", "miel", "miembro", "miga", "mil", "milagro", "militar", "millo\u0301n", "mimo", "mina", "minero", "mi\u0301nimo", "minuto", "miope", "mirar", "misa", "miseria", "misil", "mismo", "mitad", "mito", "mochila", "mocio\u0301n", "moda", "modelo", "moho", "mojar", "molde", "moler", "molino", "momento", "momia", "monarca", "moneda", "monja", "monto", "mon\u0303o", "morada", "morder", "moreno", "morir", "morro", "morsa", "mortal", "mosca", "mostrar", "motivo", "mover", "mo\u0301vil", "mozo", "mucho", "mudar", "mueble", "muela", "muerte", "muestra", "mugre", "mujer", "mula", "muleta", "multa", "mundo", "mun\u0303eca", "mural", "muro", "mu\u0301sculo", "museo", "musgo", "mu\u0301sica", "muslo", "na\u0301car", "nacio\u0301n", "nadar", "naipe", "naranja", "nariz", "narrar", "nasal", "natal", "nativo", "natural", "na\u0301usea", "naval", "nave", "navidad", "necio", "ne\u0301ctar", "negar", "negocio", "negro", "neo\u0301n", "nervio", "neto", "neutro", "nevar", "nevera", "nicho", "nido", "niebla", "nieto", "nin\u0303ez", "nin\u0303o", "ni\u0301tido", "nivel", "nobleza", "noche", "no\u0301mina", "noria", "norma", "norte", "nota", "noticia", "novato", "novela", "novio", "nube", "nuca", "nu\u0301cleo", "nudillo", "nudo", "nuera", "nueve", "nuez", "nulo", "nu\u0301mero", "nutria", "oasis", "obeso", "obispo", "objeto", "obra", "obrero", "observar", "obtener", "obvio", "oca", "ocaso", "oce\u0301ano", "ochenta", "ocho", "ocio", "ocre", "octavo", "octubre", "oculto", "ocupar", "ocurrir", "odiar", "odio", "odisea", "oeste", "ofensa", "oferta", "oficio", "ofrecer", "ogro", "oi\u0301do", "oi\u0301r", "ojo", "ola", "oleada", "olfato", "olivo", "olla", "olmo", "olor", "olvido", "ombligo", "onda", "onza", "opaco", "opcio\u0301n", "o\u0301pera", "opinar", "oponer", "optar", "o\u0301ptica", "opuesto", "oracio\u0301n", "orador", "oral", "o\u0301rbita", "orca", "orden", "oreja", "o\u0301rgano", "orgi\u0301a", "orgullo", "oriente", "origen", "orilla", "oro", "orquesta", "oruga", "osadi\u0301a", "oscuro", "osezno", "oso", "ostra", "oton\u0303o", "otro", "oveja", "o\u0301vulo", "o\u0301xido", "oxi\u0301geno", "oyente", "ozono", "pacto", "padre", "paella", "pa\u0301gina", "pago", "pai\u0301s", "pa\u0301jaro", "palabra", "palco", "paleta", "pa\u0301lido", "palma", "paloma", "palpar", "pan", "panal", "pa\u0301nico", "pantera", "pan\u0303uelo", "papa\u0301", "papel", "papilla", "paquete", "parar", "parcela", "pared", "parir", "paro", "pa\u0301rpado", "parque", "pa\u0301rrafo", "parte", "pasar", "paseo", "pasio\u0301n", "paso", "pasta", "pata", "patio", "patria", "pausa", "pauta", "pavo", "payaso", "peato\u0301n", "pecado", "pecera", "pecho", "pedal", "pedir", "pegar", "peine", "pelar", "peldan\u0303o", "pelea", "peligro", "pellejo", "pelo", "peluca", "pena", "pensar", "pen\u0303o\u0301n", "peo\u0301n", "peor", "pepino", "pequen\u0303o", "pera", "percha", "perder", "pereza", "perfil", "perico", "perla", "permiso", "perro", "persona", "pesa", "pesca", "pe\u0301simo", "pestan\u0303a", "pe\u0301talo", "petro\u0301leo", "pez", "pezun\u0303a", "picar", "picho\u0301n", "pie", "piedra", "pierna", "pieza", "pijama", "pilar", "piloto", "pimienta", "pino", "pintor", "pinza", "pin\u0303a", "piojo", "pipa", "pirata", "pisar", "piscina", "piso", "pista", "pito\u0301n", "pizca", "placa", "plan", "plata", "playa", "plaza", "pleito", "pleno", "plomo", "pluma", "plural", "pobre", "poco", "poder", "podio", "poema", "poesi\u0301a", "poeta", "polen", "polici\u0301a", "pollo", "polvo", "pomada", "pomelo", "pomo", "pompa", "poner", "porcio\u0301n", "portal", "posada", "poseer", "posible", "poste", "potencia", "potro", "pozo", "prado", "precoz", "pregunta", "premio", "prensa", "preso", "previo", "primo", "pri\u0301ncipe", "prisio\u0301n", "privar", "proa", "probar", "proceso", "producto", "proeza", "profesor", "programa", "prole", "promesa", "pronto", "propio", "pro\u0301ximo", "prueba", "pu\u0301blico", "puchero", "pudor", "pueblo", "puerta", "puesto", "pulga", "pulir", "pulmo\u0301n", "pulpo", "pulso", "puma", "punto", "pun\u0303al", "pun\u0303o", "pupa", "pupila", "pure\u0301", "quedar", "queja", "quemar", "querer", "queso", "quieto", "qui\u0301mica", "quince", "quitar", "ra\u0301bano", "rabia", "rabo", "racio\u0301n", "radical", "rai\u0301z", "rama", "rampa", "rancho", "rango", "rapaz", "ra\u0301pido", "rapto", "rasgo", "raspa", "rato", "rayo", "raza", "razo\u0301n", "reaccio\u0301n", "realidad", "reban\u0303o", "rebote", "recaer", "receta", "rechazo", "recoger", "recreo", "recto", "recurso", "red", "redondo", "reducir", "reflejo", "reforma", "refra\u0301n", "refugio", "regalo", "regir", "regla", "regreso", "rehe\u0301n", "reino", "rei\u0301r", "reja", "relato", "relevo", "relieve", "relleno", "reloj", "remar", "remedio", "remo", "rencor", "rendir", "renta", "reparto", "repetir", "reposo", "reptil", "res", "rescate", "resina", "respeto", "resto", "resumen", "retiro", "retorno", "retrato", "reunir", "reve\u0301s", "revista", "rey", "rezar", "rico", "riego", "rienda", "riesgo", "rifa", "ri\u0301gido", "rigor", "rinco\u0301n", "rin\u0303o\u0301n", "ri\u0301o", "riqueza", "risa", "ritmo", "rito", "rizo", "roble", "roce", "rociar", "rodar", "rodeo", "rodilla", "roer", "rojizo", "rojo", "romero", "romper", "ron", "ronco", "ronda", "ropa", "ropero", "rosa", "rosca", "rostro", "rotar", "rubi\u0301", "rubor", "rudo", "rueda", "rugir", "ruido", "ruina", "ruleta", "rulo", "rumbo", "rumor", "ruptura", "ruta", "rutina", "sa\u0301bado", "saber", "sabio", "sable", "sacar", "sagaz", "sagrado", "sala", "saldo", "salero", "salir", "salmo\u0301n", "salo\u0301n", "salsa", "salto", "salud", "salvar", "samba", "sancio\u0301n", "sandi\u0301a", "sanear", "sangre", "sanidad", "sano", "santo", "sapo", "saque", "sardina", "sarte\u0301n", "sastre", "sata\u0301n", "sauna", "saxofo\u0301n", "seccio\u0301n", "seco", "secreto", "secta", "sed", "seguir", "seis", "sello", "selva", "semana", "semilla", "senda", "sensor", "sen\u0303al", "sen\u0303or", "separar", "sepia", "sequi\u0301a", "ser", "serie", "sermo\u0301n", "servir", "sesenta", "sesio\u0301n", "seta", "setenta", "severo", "sexo", "sexto", "sidra", "siesta", "siete", "siglo", "signo", "si\u0301laba", "silbar", "silencio", "silla", "si\u0301mbolo", "simio", "sirena", "sistema", "sitio", "situar", "sobre", "socio", "sodio", "sol", "solapa", "soldado", "soledad", "so\u0301lido", "soltar", "solucio\u0301n", "sombra", "sondeo", "sonido", "sonoro", "sonrisa", "sopa", "soplar", "soporte", "sordo", "sorpresa", "sorteo", "soste\u0301n", "so\u0301tano", "suave", "subir", "suceso", "sudor", "suegra", "suelo", "suen\u0303o", "suerte", "sufrir", "sujeto", "sulta\u0301n", "sumar", "superar", "suplir", "suponer", "supremo", "sur", "surco", "suren\u0303o", "surgir", "susto", "sutil", "tabaco", "tabique", "tabla", "tabu\u0301", "taco", "tacto", "tajo", "talar", "talco", "talento", "talla", "talo\u0301n", "taman\u0303o", "tambor", "tango", "tanque", "tapa", "tapete", "tapia", "tapo\u0301n", "taquilla", "tarde", "tarea", "tarifa", "tarjeta", "tarot", "tarro", "tarta", "tatuaje", "tauro", "taza", "tazo\u0301n", "teatro", "techo", "tecla", "te\u0301cnica", "tejado", "tejer", "tejido", "tela", "tele\u0301fono", "tema", "temor", "templo", "tenaz", "tender", "tener", "tenis", "tenso", "teori\u0301a", "terapia", "terco", "te\u0301rmino", "ternura", "terror", "tesis", "tesoro", "testigo", "tetera", "texto", "tez", "tibio", "tiburo\u0301n", "tiempo", "tienda", "tierra", "tieso", "tigre", "tijera", "tilde", "timbre", "ti\u0301mido", "timo", "tinta", "ti\u0301o", "ti\u0301pico", "tipo", "tira", "tiro\u0301n", "tita\u0301n", "ti\u0301tere", "ti\u0301tulo", "tiza", "toalla", "tobillo", "tocar", "tocino", "todo", "toga", "toldo", "tomar", "tono", "tonto", "topar", "tope", "toque", "to\u0301rax", "torero", "tormenta", "torneo", "toro", "torpedo", "torre", "torso", "tortuga", "tos", "tosco", "toser", "to\u0301xico", "trabajo", "tractor", "traer", "tra\u0301fico", "trago", "traje", "tramo", "trance", "trato", "trauma", "trazar", "tre\u0301bol", "tregua", "treinta", "tren", "trepar", "tres", "tribu", "trigo", "tripa", "triste", "triunfo", "trofeo", "trompa", "tronco", "tropa", "trote", "trozo", "truco", "trueno", "trufa", "tuberi\u0301a", "tubo", "tuerto", "tumba", "tumor", "tu\u0301nel", "tu\u0301nica", "turbina", "turismo", "turno", "tutor", "ubicar", "u\u0301lcera", "umbral", "unidad", "unir", "universo", "uno", "untar", "un\u0303a", "urbano", "urbe", "urgente", "urna", "usar", "usuario", "u\u0301til", "utopi\u0301a", "uva", "vaca", "vaci\u0301o", "vacuna", "vagar", "vago", "vaina", "vajilla", "vale", "va\u0301lido", "valle", "valor", "va\u0301lvula", "vampiro", "vara", "variar", "varo\u0301n", "vaso", "vecino", "vector", "vehi\u0301culo", "veinte", "vejez", "vela", "velero", "veloz", "vena", "vencer", "venda", "veneno", "vengar", "venir", "venta", "venus", "ver", "verano", "verbo", "verde", "vereda", "verja", "verso", "verter", "vi\u0301a", "viaje", "vibrar", "vicio", "vi\u0301ctima", "vida", "vi\u0301deo", "vidrio", "viejo", "viernes", "vigor", "vil", "villa", "vinagre", "vino", "vin\u0303edo", "violi\u0301n", "viral", "virgo", "virtud", "visor", "vi\u0301spera", "vista", "vitamina", "viudo", "vivaz", "vivero", "vivir", "vivo", "volca\u0301n", "volumen", "volver", "voraz", "votar", "voto", "voz", "vuelo", "vulgar", "yacer", "yate", "yegua", "yema", "yerno", "yeso", "yodo", "yoga", "yogur", "zafiro", "zanja", "zapato", "zarza", "zona", "zorro", "zumo", "zurdo"], Jb = ["\u3042\u3044\u3053\u304F\u3057\u3093", "\u3042\u3044\u3055\u3064", "\u3042\u3044\u305F\u3099", "\u3042\u304A\u305D\u3099\u3089", "\u3042\u304B\u3061\u3083\u3093", "\u3042\u304D\u308B", "\u3042\u3051\u304B\u3099\u305F", "\u3042\u3051\u308B", "\u3042\u3053\u304B\u3099\u308C\u308B", "\u3042\u3055\u3044", "\u3042\u3055\u3072", "\u3042\u3057\u3042\u3068", "\u3042\u3057\u3099\u308F\u3046", "\u3042\u3059\u3099\u304B\u308B", "\u3042\u3059\u3099\u304D", "\u3042\u305D\u3075\u3099", "\u3042\u305F\u3048\u308B", "\u3042\u305F\u305F\u3081\u308B", "\u3042\u305F\u308A\u307E\u3048", "\u3042\u305F\u308B", "\u3042\u3064\u3044", "\u3042\u3064\u304B\u3046", "\u3042\u3063\u3057\u3085\u304F", "\u3042\u3064\u307E\u308A", "\u3042\u3064\u3081\u308B", "\u3042\u3066\u306A", "\u3042\u3066\u306F\u307E\u308B", "\u3042\u3072\u308B", "\u3042\u3075\u3099\u3089", "\u3042\u3075\u3099\u308B", "\u3042\u3075\u308C\u308B", "\u3042\u307E\u3044", "\u3042\u307E\u3068\u3099", "\u3042\u307E\u3084\u304B\u3059", "\u3042\u307E\u308A", "\u3042\u307F\u3082\u306E", "\u3042\u3081\u308A\u304B", "\u3042\u3084\u307E\u308B", "\u3042\u3086\u3080", "\u3042\u3089\u3044\u304F\u3099\u307E", "\u3042\u3089\u3057", "\u3042\u3089\u3059\u3057\u3099", "\u3042\u3089\u305F\u3081\u308B", "\u3042\u3089\u3086\u308B", "\u3042\u3089\u308F\u3059", "\u3042\u308A\u304B\u3099\u3068\u3046", "\u3042\u308F\u305B\u308B", "\u3042\u308F\u3066\u308B", "\u3042\u3093\u3044", "\u3042\u3093\u304B\u3099\u3044", "\u3042\u3093\u3053", "\u3042\u3093\u305B\u3099\u3093", "\u3042\u3093\u3066\u3044", "\u3042\u3093\u306A\u3044", "\u3042\u3093\u307E\u308A", "\u3044\u3044\u305F\u3099\u3059", "\u3044\u304A\u3093", "\u3044\u304B\u3099\u3044", "\u3044\u304B\u3099\u304F", "\u3044\u304D\u304A\u3044", "\u3044\u304D\u306A\u308A", "\u3044\u304D\u3082\u306E", "\u3044\u304D\u308B", "\u3044\u304F\u3057\u3099", "\u3044\u304F\u3075\u3099\u3093", "\u3044\u3051\u306F\u3099\u306A", "\u3044\u3051\u3093", "\u3044\u3053\u3046", "\u3044\u3053\u304F", "\u3044\u3053\u3064", "\u3044\u3055\u307E\u3057\u3044", "\u3044\u3055\u3093", "\u3044\u3057\u304D", "\u3044\u3057\u3099\u3085\u3046", "\u3044\u3057\u3099\u3087\u3046", "\u3044\u3057\u3099\u308F\u308B", "\u3044\u3059\u3099\u307F", "\u3044\u3059\u3099\u308C", "\u3044\u305B\u3044", "\u3044\u305B\u3048\u3072\u3099", "\u3044\u305B\u304B\u3044", "\u3044\u305B\u304D", "\u3044\u305B\u3099\u3093", "\u3044\u305D\u3046\u308D\u3046", "\u3044\u305D\u304B\u3099\u3057\u3044", "\u3044\u305F\u3099\u3044", "\u3044\u305F\u3099\u304F", "\u3044\u305F\u3059\u3099\u3089", "\u3044\u305F\u307F", "\u3044\u305F\u308A\u3042", "\u3044\u3061\u304A\u3046", "\u3044\u3061\u3057\u3099", "\u3044\u3061\u3068\u3099", "\u3044\u3061\u306F\u3099", "\u3044\u3061\u3075\u3099", "\u3044\u3061\u308A\u3085\u3046", "\u3044\u3064\u304B", "\u3044\u3063\u3057\u3085\u3093", "\u3044\u3063\u305B\u3044", "\u3044\u3063\u305D\u3046", "\u3044\u3063\u305F\u3093", "\u3044\u3063\u3061", "\u3044\u3063\u3066\u3044", "\u3044\u3063\u307B\u309A\u3046", "\u3044\u3066\u3055\u3099", "\u3044\u3066\u3093", "\u3044\u3068\u3099\u3046", "\u3044\u3068\u3053", "\u3044\u306A\u3044", "\u3044\u306A\u304B", "\u3044\u306D\u3080\u308A", "\u3044\u306E\u3061", "\u3044\u306E\u308B", "\u3044\u306F\u3064", "\u3044\u306F\u3099\u308B", "\u3044\u306F\u3093", "\u3044\u3072\u3099\u304D", "\u3044\u3072\u3093", "\u3044\u3075\u304F", "\u3044\u3078\u3093", "\u3044\u307B\u3046", "\u3044\u307F\u3093", "\u3044\u3082\u3046\u3068", "\u3044\u3082\u305F\u308C", "\u3044\u3082\u308A", "\u3044\u3084\u304B\u3099\u308B", "\u3044\u3084\u3059", "\u3044\u3088\u304B\u3093", "\u3044\u3088\u304F", "\u3044\u3089\u3044", "\u3044\u3089\u3059\u3068", "\u3044\u308A\u304F\u3099\u3061", "\u3044\u308A\u3087\u3046", "\u3044\u308C\u3044", "\u3044\u308C\u3082\u306E", "\u3044\u308C\u308B", "\u3044\u308D\u3048\u3093\u3072\u309A\u3064", "\u3044\u308F\u3044", "\u3044\u308F\u3046", "\u3044\u308F\u304B\u3093", "\u3044\u308F\u306F\u3099", "\u3044\u308F\u3086\u308B", "\u3044\u3093\u3051\u3099\u3093\u307E\u3081", "\u3044\u3093\u3055\u3064", "\u3044\u3093\u3057\u3087\u3046", "\u3044\u3093\u3088\u3046", "\u3046\u3048\u304D", "\u3046\u3048\u308B", "\u3046\u304A\u3055\u3099", "\u3046\u304B\u3099\u3044", "\u3046\u304B\u3075\u3099", "\u3046\u304B\u3078\u3099\u308B", "\u3046\u304D\u308F", "\u3046\u304F\u3089\u3044\u306A", "\u3046\u304F\u308C\u308C", "\u3046\u3051\u305F\u307E\u308F\u308B", "\u3046\u3051\u3064\u3051", "\u3046\u3051\u3068\u308B", "\u3046\u3051\u3082\u3064", "\u3046\u3051\u308B", "\u3046\u3053\u3099\u304B\u3059", "\u3046\u3053\u3099\u304F", "\u3046\u3053\u3093", "\u3046\u3055\u304D\u3099", "\u3046\u3057\u306A\u3046", "\u3046\u3057\u308D\u304B\u3099\u307F", "\u3046\u3059\u3044", "\u3046\u3059\u304D\u3099", "\u3046\u3059\u304F\u3099\u3089\u3044", "\u3046\u3059\u3081\u308B", "\u3046\u305B\u3064", "\u3046\u3061\u3042\u308F\u305B", "\u3046\u3061\u304B\u3099\u308F", "\u3046\u3061\u304D", "\u3046\u3061\u3085\u3046", "\u3046\u3063\u304B\u308A", "\u3046\u3064\u304F\u3057\u3044", "\u3046\u3063\u305F\u3048\u308B", "\u3046\u3064\u308B", "\u3046\u3068\u3099\u3093", "\u3046\u306A\u304D\u3099", "\u3046\u306A\u3057\u3099", "\u3046\u306A\u3059\u3099\u304F", "\u3046\u306A\u308B", "\u3046\u306D\u308B", "\u3046\u306E\u3046", "\u3046\u3075\u3099\u3051\u3099", "\u3046\u3075\u3099\u3053\u3099\u3048", "\u3046\u307E\u308C\u308B", "\u3046\u3081\u308B", "\u3046\u3082\u3046", "\u3046\u3084\u307E\u3046", "\u3046\u3088\u304F", "\u3046\u3089\u304B\u3099\u3048\u3059", "\u3046\u3089\u304F\u3099\u3061", "\u3046\u3089\u306A\u3044", "\u3046\u308A\u3042\u3051\u3099", "\u3046\u308A\u304D\u308C", "\u3046\u308B\u3055\u3044", "\u3046\u308C\u3057\u3044", "\u3046\u308C\u3086\u304D", "\u3046\u308C\u308B", "\u3046\u308D\u3053", "\u3046\u308F\u304D", "\u3046\u308F\u3055", "\u3046\u3093\u3053\u3046", "\u3046\u3093\u3061\u3093", "\u3046\u3093\u3066\u3093", "\u3046\u3093\u3068\u3099\u3046", "\u3048\u3044\u3048\u3093", "\u3048\u3044\u304B\u3099", "\u3048\u3044\u304D\u3087\u3046", "\u3048\u3044\u3053\u3099", "\u3048\u3044\u305B\u3044", "\u3048\u3044\u3075\u3099\u3093", "\u3048\u3044\u3088\u3046", "\u3048\u3044\u308F", "\u3048\u304A\u308A", "\u3048\u304B\u3099\u304A", "\u3048\u304B\u3099\u304F", "\u3048\u304D\u305F\u3044", "\u3048\u304F\u305B\u308B", "\u3048\u3057\u3083\u304F", "\u3048\u3059\u3066", "\u3048\u3064\u3089\u3093", "\u3048\u306E\u304F\u3099", "\u3048\u307B\u3046\u307E\u304D", "\u3048\u307B\u3093", "\u3048\u307E\u304D", "\u3048\u3082\u3057\u3099", "\u3048\u3082\u306E", "\u3048\u3089\u3044", "\u3048\u3089\u3075\u3099", "\u3048\u308A\u3042", "\u3048\u3093\u3048\u3093", "\u3048\u3093\u304B\u3044", "\u3048\u3093\u304D\u3099", "\u3048\u3093\u3051\u3099\u304D", "\u3048\u3093\u3057\u3085\u3046", "\u3048\u3093\u305B\u3099\u3064", "\u3048\u3093\u305D\u304F", "\u3048\u3093\u3061\u3087\u3046", "\u3048\u3093\u3068\u3064", "\u304A\u3044\u304B\u3051\u308B", "\u304A\u3044\u3053\u3059", "\u304A\u3044\u3057\u3044", "\u304A\u3044\u3064\u304F", "\u304A\u3046\u3048\u3093", "\u304A\u3046\u3055\u307E", "\u304A\u3046\u3057\u3099", "\u304A\u3046\u305B\u3064", "\u304A\u3046\u305F\u3044", "\u304A\u3046\u3075\u304F", "\u304A\u3046\u3078\u3099\u3044", "\u304A\u3046\u3088\u3046", "\u304A\u3048\u308B", "\u304A\u304A\u3044", "\u304A\u304A\u3046", "\u304A\u304A\u3068\u3099\u304A\u308A", "\u304A\u304A\u3084", "\u304A\u304A\u3088\u305D", "\u304A\u304B\u3048\u308A", "\u304A\u304B\u3059\u3099", "\u304A\u304B\u3099\u3080", "\u304A\u304B\u308F\u308A", "\u304A\u304D\u3099\u306A\u3046", "\u304A\u304D\u308B", "\u304A\u304F\u3055\u307E", "\u304A\u304F\u3057\u3099\u3087\u3046", "\u304A\u304F\u308A\u304B\u3099\u306A", "\u304A\u304F\u308B", "\u304A\u304F\u308C\u308B", "\u304A\u3053\u3059", "\u304A\u3053\u306A\u3046", "\u304A\u3053\u308B", "\u304A\u3055\u3048\u308B", "\u304A\u3055\u306A\u3044", "\u304A\u3055\u3081\u308B", "\u304A\u3057\u3044\u308C", "\u304A\u3057\u3048\u308B", "\u304A\u3057\u3099\u304D\u3099", "\u304A\u3057\u3099\u3055\u3093", "\u304A\u3057\u3083\u308C", "\u304A\u305D\u3089\u304F", "\u304A\u305D\u308F\u308B", "\u304A\u305F\u304B\u3099\u3044", "\u304A\u305F\u304F", "\u304A\u305F\u3099\u3084\u304B", "\u304A\u3061\u3064\u304F", "\u304A\u3063\u3068", "\u304A\u3064\u308A", "\u304A\u3066\u3099\u304B\u3051", "\u304A\u3068\u3057\u3082\u306E", "\u304A\u3068\u306A\u3057\u3044", "\u304A\u3068\u3099\u308A", "\u304A\u3068\u3099\u308D\u304B\u3059", "\u304A\u306F\u3099\u3055\u3093", "\u304A\u307E\u3044\u308A", "\u304A\u3081\u3066\u3099\u3068\u3046", "\u304A\u3082\u3044\u3066\u3099", "\u304A\u3082\u3046", "\u304A\u3082\u305F\u3044", "\u304A\u3082\u3061\u3083", "\u304A\u3084\u3064", "\u304A\u3084\u3086\u3072\u3099", "\u304A\u3088\u307B\u3099\u3059", "\u304A\u3089\u3093\u305F\u3099", "\u304A\u308D\u3059", "\u304A\u3093\u304B\u3099\u304F", "\u304A\u3093\u3051\u3044", "\u304A\u3093\u3057\u3083", "\u304A\u3093\u305B\u3093", "\u304A\u3093\u305F\u3099\u3093", "\u304A\u3093\u3061\u3085\u3046", "\u304A\u3093\u3068\u3099\u3051\u3044", "\u304B\u3042\u3064", "\u304B\u3044\u304B\u3099", "\u304B\u3099\u3044\u304D", "\u304B\u3099\u3044\u3051\u3093", "\u304B\u3099\u3044\u3053\u3046", "\u304B\u3044\u3055\u3064", "\u304B\u3044\u3057\u3083", "\u304B\u3044\u3059\u3044\u3088\u304F", "\u304B\u3044\u305B\u3099\u3093", "\u304B\u3044\u305D\u3099\u3046\u3068\u3099", "\u304B\u3044\u3064\u3046", "\u304B\u3044\u3066\u3093", "\u304B\u3044\u3068\u3046", "\u304B\u3044\u3075\u304F", "\u304B\u3099\u3044\u3078\u304D", "\u304B\u3044\u307B\u3046", "\u304B\u3044\u3088\u3046", "\u304B\u3099\u3044\u3089\u3044", "\u304B\u3044\u308F", "\u304B\u3048\u308B", "\u304B\u304A\u308A", "\u304B\u304B\u3048\u308B", "\u304B\u304B\u3099\u304F", "\u304B\u304B\u3099\u3057", "\u304B\u304B\u3099\u307F", "\u304B\u304F\u3053\u3099", "\u304B\u304F\u3068\u304F", "\u304B\u3055\u3099\u308B", "\u304B\u3099\u305D\u3099\u3046", "\u304B\u305F\u3044", "\u304B\u305F\u3061", "\u304B\u3099\u3061\u3087\u3046", "\u304B\u3099\u3063\u304D\u3085\u3046", "\u304B\u3099\u3063\u3053\u3046", "\u304B\u3099\u3063\u3055\u3093", "\u304B\u3099\u3063\u3057\u3087\u3046", "\u304B\u306A\u3055\u3099\u308F\u3057", "\u304B\u306E\u3046", "\u304B\u3099\u306F\u304F", "\u304B\u3075\u3099\u304B", "\u304B\u307B\u3046", "\u304B\u307B\u3053\u3099", "\u304B\u307E\u3046", "\u304B\u307E\u307B\u3099\u3053", "\u304B\u3081\u308C\u304A\u3093", "\u304B\u3086\u3044", "\u304B\u3088\u3046\u3072\u3099", "\u304B\u3089\u3044", "\u304B\u308B\u3044", "\u304B\u308D\u3046", "\u304B\u308F\u304F", "\u304B\u308F\u3089", "\u304B\u3099\u3093\u304B", "\u304B\u3093\u3051\u3044", "\u304B\u3093\u3053\u3046", "\u304B\u3093\u3057\u3083", "\u304B\u3093\u305D\u3046", "\u304B\u3093\u305F\u3093", "\u304B\u3093\u3061", "\u304B\u3099\u3093\u306F\u3099\u308B", "\u304D\u3042\u3044", "\u304D\u3042\u3064", "\u304D\u3044\u308D", "\u304D\u3099\u3044\u3093", "\u304D\u3046\u3044", "\u304D\u3046\u3093", "\u304D\u3048\u308B", "\u304D\u304A\u3046", "\u304D\u304A\u304F", "\u304D\u304A\u3061", "\u304D\u304A\u3093", "\u304D\u304B\u3044", "\u304D\u304B\u304F", "\u304D\u304B\u3093\u3057\u3083", "\u304D\u304D\u3066", "\u304D\u304F\u306F\u3099\u308A", "\u304D\u304F\u3089\u3051\u3099", "\u304D\u3051\u3093\u305B\u3044", "\u304D\u3053\u3046", "\u304D\u3053\u3048\u308B", "\u304D\u3053\u304F", "\u304D\u3055\u3044", "\u304D\u3055\u304F", "\u304D\u3055\u307E", "\u304D\u3055\u3089\u304D\u3099", "\u304D\u3099\u3057\u3099\u304B\u304B\u3099\u304F", "\u304D\u3099\u3057\u304D", "\u304D\u3099\u3057\u3099\u305F\u3044\u3051\u3093", "\u304D\u3099\u3057\u3099\u306B\u3063\u3066\u3044", "\u304D\u3099\u3057\u3099\u3085\u3064\u3057\u3083", "\u304D\u3059\u3046", "\u304D\u305B\u3044", "\u304D\u305B\u304D", "\u304D\u305B\u3064", "\u304D\u305D\u3046", "\u304D\u305D\u3099\u304F", "\u304D\u305D\u3099\u3093", "\u304D\u305F\u3048\u308B", "\u304D\u3061\u3087\u3046", "\u304D\u3064\u3048\u3093", "\u304D\u3099\u3063\u3061\u308A", "\u304D\u3064\u3064\u304D", "\u304D\u3064\u306D", "\u304D\u3066\u3044", "\u304D\u3068\u3099\u3046", "\u304D\u3068\u3099\u304F", "\u304D\u306A\u3044", "\u304D\u306A\u304B\u3099", "\u304D\u306A\u3053", "\u304D\u306C\u3053\u3099\u3057", "\u304D\u306D\u3093", "\u304D\u306E\u3046", "\u304D\u306E\u3057\u305F", "\u304D\u306F\u304F", "\u304D\u3072\u3099\u3057\u3044", "\u304D\u3072\u3093", "\u304D\u3075\u304F", "\u304D\u3075\u3099\u3093", "\u304D\u307B\u3099\u3046", "\u304D\u307B\u3093", "\u304D\u307E\u308B", "\u304D\u307F\u3064", "\u304D\u3080\u3059\u3099\u304B\u3057\u3044", "\u304D\u3081\u308B", "\u304D\u3082\u305F\u3099\u3081\u3057", "\u304D\u3082\u3061", "\u304D\u3082\u306E", "\u304D\u3083\u304F", "\u304D\u3084\u304F", "\u304D\u3099\u3085\u3046\u306B\u304F", "\u304D\u3088\u3046", "\u304D\u3087\u3046\u308A\u3085\u3046", "\u304D\u3089\u3044", "\u304D\u3089\u304F", "\u304D\u308A\u3093", "\u304D\u308C\u3044", "\u304D\u308C\u3064", "\u304D\u308D\u304F", "\u304D\u3099\u308D\u3093", "\u304D\u308F\u3081\u308B", "\u304D\u3099\u3093\u3044\u308D", "\u304D\u3093\u304B\u304F\u3057\u3099", "\u304D\u3093\u3057\u3099\u3087", "\u304D\u3093\u3088\u3046\u3072\u3099", "\u304F\u3099\u3042\u3044", "\u304F\u3044\u3059\u3099", "\u304F\u3046\u304B\u3093", "\u304F\u3046\u304D", "\u304F\u3046\u304F\u3099\u3093", "\u304F\u3046\u3053\u3046", "\u304F\u3099\u3046\u305B\u3044", "\u304F\u3046\u305D\u3046", "\u304F\u3099\u3046\u305F\u3089", "\u304F\u3046\u3075\u304F", "\u304F\u3046\u307B\u3099", "\u304F\u304B\u3093", "\u304F\u304D\u3087\u3046", "\u304F\u3051\u3099\u3093", "\u304F\u3099\u3053\u3046", "\u304F\u3055\u3044", "\u304F\u3055\u304D", "\u304F\u3055\u306F\u3099\u306A", "\u304F\u3055\u308B", "\u304F\u3057\u3083\u307F", "\u304F\u3057\u3087\u3046", "\u304F\u3059\u306E\u304D", "\u304F\u3059\u308A\u3086\u3072\u3099", "\u304F\u305B\u3051\u3099", "\u304F\u305B\u3093", "\u304F\u3099\u305F\u3044\u3066\u304D", "\u304F\u305F\u3099\u3055\u308B", "\u304F\u305F\u3072\u3099\u308C\u308B", "\u304F\u3061\u3053\u307F", "\u304F\u3061\u3055\u304D", "\u304F\u3064\u3057\u305F", "\u304F\u3099\u3063\u3059\u308A", "\u304F\u3064\u308D\u304F\u3099", "\u304F\u3068\u3046\u3066\u3093", "\u304F\u3068\u3099\u304F", "\u304F\u306A\u3093", "\u304F\u306D\u304F\u306D", "\u304F\u306E\u3046", "\u304F\u3075\u3046", "\u304F\u307F\u3042\u308F\u305B", "\u304F\u307F\u305F\u3066\u308B", "\u304F\u3081\u308B", "\u304F\u3084\u304F\u3057\u3087", "\u304F\u3089\u3059", "\u304F\u3089\u3078\u3099\u308B", "\u304F\u308B\u307E", "\u304F\u308C\u308B", "\u304F\u308D\u3046", "\u304F\u308F\u3057\u3044", "\u304F\u3099\u3093\u304B\u3093", "\u304F\u3099\u3093\u3057\u3087\u304F", "\u304F\u3099\u3093\u305F\u3044", "\u304F\u3099\u3093\u3066", "\u3051\u3042\u306A", "\u3051\u3044\u304B\u304F", "\u3051\u3044\u3051\u3093", "\u3051\u3044\u3053", "\u3051\u3044\u3055\u3064", "\u3051\u3099\u3044\u3057\u3099\u3085\u3064", "\u3051\u3044\u305F\u3044", "\u3051\u3099\u3044\u306E\u3046\u3057\u3099\u3093", "\u3051\u3044\u308C\u304D", "\u3051\u3044\u308D", "\u3051\u304A\u3068\u3059", "\u3051\u304A\u308A\u3082\u306E", "\u3051\u3099\u304D\u304B", "\u3051\u3099\u304D\u3051\u3099\u3093", "\u3051\u3099\u304D\u305F\u3099\u3093", "\u3051\u3099\u304D\u3061\u3093", "\u3051\u3099\u304D\u3068\u3064", "\u3051\u3099\u304D\u306F", "\u3051\u3099\u304D\u3084\u304F", "\u3051\u3099\u3053\u3046", "\u3051\u3099\u3053\u304F\u3057\u3099\u3087\u3046", "\u3051\u3099\u3055\u3099\u3044", "\u3051\u3055\u304D", "\u3051\u3099\u3055\u3099\u3093", "\u3051\u3057\u304D", "\u3051\u3057\u3053\u3099\u3080", "\u3051\u3057\u3087\u3046", "\u3051\u3099\u3059\u3068", "\u3051\u305F\u306F\u3099", "\u3051\u3061\u3083\u3063\u3075\u309A", "\u3051\u3061\u3089\u3059", "\u3051\u3064\u3042\u3064", "\u3051\u3064\u3044", "\u3051\u3064\u3048\u304D", "\u3051\u3063\u3053\u3093", "\u3051\u3064\u3057\u3099\u3087", "\u3051\u3063\u305B\u304D", "\u3051\u3063\u3066\u3044", "\u3051\u3064\u307E\u3064", "\u3051\u3099\u3064\u3088\u3046\u3072\u3099", "\u3051\u3099\u3064\u308C\u3044", "\u3051\u3064\u308D\u3093", "\u3051\u3099\u3068\u3099\u304F", "\u3051\u3068\u306F\u3099\u3059", "\u3051\u3068\u308B", "\u3051\u306A\u3051\u3099", "\u3051\u306A\u3059", "\u3051\u306A\u307F", "\u3051\u306C\u304D", "\u3051\u3099\u306D\u3064", "\u3051\u306D\u3093", "\u3051\u306F\u3044", "\u3051\u3099\u3072\u3093", "\u3051\u3075\u3099\u304B\u3044", "\u3051\u3099\u307B\u3099\u304F", "\u3051\u307E\u308A", "\u3051\u307F\u304B\u308B", "\u3051\u3080\u3057", "\u3051\u3080\u308A", "\u3051\u3082\u306E", "\u3051\u3089\u3044", "\u3051\u308D\u3051\u308D", "\u3051\u308F\u3057\u3044", "\u3051\u3093\u3044", "\u3051\u3093\u3048\u3064", "\u3051\u3093\u304A", "\u3051\u3093\u304B", "\u3051\u3099\u3093\u304D", "\u3051\u3093\u3051\u3099\u3093", "\u3051\u3093\u3053\u3046", "\u3051\u3093\u3055\u304F", "\u3051\u3093\u3057\u3085\u3046", "\u3051\u3093\u3059\u3046", "\u3051\u3099\u3093\u305D\u3046", "\u3051\u3093\u3061\u304F", "\u3051\u3093\u3066\u3044", "\u3051\u3093\u3068\u3046", "\u3051\u3093\u306A\u3044", "\u3051\u3093\u306B\u3093", "\u3051\u3099\u3093\u3075\u3099\u3064", "\u3051\u3093\u307E", "\u3051\u3093\u307F\u3093", "\u3051\u3093\u3081\u3044", "\u3051\u3093\u3089\u3093", "\u3051\u3093\u308A", "\u3053\u3042\u304F\u307E", "\u3053\u3044\u306C", "\u3053\u3044\u3072\u3099\u3068", "\u3053\u3099\u3046\u3044", "\u3053\u3046\u3048\u3093", "\u3053\u3046\u304A\u3093", "\u3053\u3046\u304B\u3093", "\u3053\u3099\u3046\u304D\u3085\u3046", "\u3053\u3099\u3046\u3051\u3044", "\u3053\u3046\u3053\u3046", "\u3053\u3046\u3055\u3044", "\u3053\u3046\u3057\u3099", "\u3053\u3046\u3059\u3044", "\u3053\u3099\u3046\u305B\u3044", "\u3053\u3046\u305D\u304F", "\u3053\u3046\u305F\u3044", "\u3053\u3046\u3061\u3083", "\u3053\u3046\u3064\u3046", "\u3053\u3046\u3066\u3044", "\u3053\u3046\u3068\u3099\u3046", "\u3053\u3046\u306A\u3044", "\u3053\u3046\u306F\u3044", "\u3053\u3099\u3046\u307B\u3046", "\u3053\u3099\u3046\u307E\u3093", "\u3053\u3046\u3082\u304F", "\u3053\u3046\u308A\u3064", "\u3053\u3048\u308B", "\u3053\u304A\u308A", "\u3053\u3099\u304B\u3044", "\u3053\u3099\u304B\u3099\u3064", "\u3053\u3099\u304B\u3093", "\u3053\u304F\u3053\u3099", "\u3053\u304F\u3055\u3044", "\u3053\u304F\u3068\u3046", "\u3053\u304F\u306A\u3044", "\u3053\u304F\u306F\u304F", "\u3053\u304F\u3099\u307E", "\u3053\u3051\u3044", "\u3053\u3051\u308B", "\u3053\u3053\u306E\u304B", "\u3053\u3053\u308D", "\u3053\u3055\u3081", "\u3053\u3057\u3064", "\u3053\u3059\u3046", "\u3053\u305B\u3044", "\u3053\u305B\u304D", "\u3053\u305B\u3099\u3093", "\u3053\u305D\u305F\u3099\u3066", "\u3053\u305F\u3044", "\u3053\u305F\u3048\u308B", "\u3053\u305F\u3064", "\u3053\u3061\u3087\u3046", "\u3053\u3063\u304B", "\u3053\u3064\u3053\u3064", "\u3053\u3064\u306F\u3099\u3093", "\u3053\u3064\u3075\u3099", "\u3053\u3066\u3044", "\u3053\u3066\u3093", "\u3053\u3068\u304B\u3099\u3089", "\u3053\u3068\u3057", "\u3053\u3068\u306F\u3099", "\u3053\u3068\u308A", "\u3053\u306A\u3053\u3099\u306A", "\u3053\u306D\u3053\u306D", "\u3053\u306E\u307E\u307E", "\u3053\u306E\u307F", "\u3053\u306E\u3088", "\u3053\u3099\u306F\u3093", "\u3053\u3072\u3064\u3057\u3099", "\u3053\u3075\u3046", "\u3053\u3075\u3093", "\u3053\u307B\u3099\u308C\u308B", "\u3053\u3099\u307E\u3042\u3075\u3099\u3089", "\u3053\u307E\u304B\u3044", "\u3053\u3099\u307E\u3059\u308A", "\u3053\u307E\u3064\u306A", "\u3053\u307E\u308B", "\u3053\u3080\u304D\u3099\u3053", "\u3053\u3082\u3057\u3099", "\u3053\u3082\u3061", "\u3053\u3082\u306E", "\u3053\u3082\u3093", "\u3053\u3084\u304F", "\u3053\u3084\u307E", "\u3053\u3086\u3046", "\u3053\u3086\u3072\u3099", "\u3053\u3088\u3044", "\u3053\u3088\u3046", "\u3053\u308A\u308B", "\u3053\u308C\u304F\u3057\u3087\u3093", "\u3053\u308D\u3063\u3051", "\u3053\u308F\u3082\u3066", "\u3053\u308F\u308C\u308B", "\u3053\u3093\u3044\u3093", "\u3053\u3093\u304B\u3044", "\u3053\u3093\u304D", "\u3053\u3093\u3057\u3085\u3046", "\u3053\u3093\u3059\u3044", "\u3053\u3093\u305F\u3099\u3066", "\u3053\u3093\u3068\u3093", "\u3053\u3093\u306A\u3093", "\u3053\u3093\u3072\u3099\u306B", "\u3053\u3093\u307B\u309A\u3093", "\u3053\u3093\u307E\u3051", "\u3053\u3093\u3084", "\u3053\u3093\u308C\u3044", "\u3053\u3093\u308F\u304F", "\u3055\u3099\u3044\u3048\u304D", "\u3055\u3044\u304B\u3044", "\u3055\u3044\u304D\u3093", "\u3055\u3099\u3044\u3051\u3099\u3093", "\u3055\u3099\u3044\u3053", "\u3055\u3044\u3057\u3087", "\u3055\u3044\u305B\u3044", "\u3055\u3099\u3044\u305F\u304F", "\u3055\u3099\u3044\u3061\u3085\u3046", "\u3055\u3044\u3066\u304D", "\u3055\u3099\u3044\u308A\u3087\u3046", "\u3055\u3046\u306A", "\u3055\u304B\u3044\u3057", "\u3055\u304B\u3099\u3059", "\u3055\u304B\u306A", "\u3055\u304B\u307F\u3061", "\u3055\u304B\u3099\u308B", "\u3055\u304D\u3099\u3087\u3046", "\u3055\u304F\u3057", "\u3055\u304F\u3072\u3093", "\u3055\u304F\u3089", "\u3055\u3053\u304F", "\u3055\u3053\u3064", "\u3055\u3059\u3099\u304B\u308B", "\u3055\u3099\u305B\u304D", "\u3055\u305F\u3093", "\u3055\u3064\u3048\u3044", "\u3055\u3099\u3064\u304A\u3093", "\u3055\u3099\u3063\u304B", "\u3055\u3099\u3064\u304B\u3099\u304F", "\u3055\u3063\u304D\u3087\u304F", "\u3055\u3099\u3063\u3057", "\u3055\u3064\u3057\u3099\u3093", "\u3055\u3099\u3063\u305D\u3046", "\u3055\u3064\u305F\u306F\u3099", "\u3055\u3064\u307E\u3044\u3082", "\u3055\u3066\u3044", "\u3055\u3068\u3044\u3082", "\u3055\u3068\u3046", "\u3055\u3068\u304A\u3084", "\u3055\u3068\u3057", "\u3055\u3068\u308B", "\u3055\u306E\u3046", "\u3055\u306F\u3099\u304F", "\u3055\u3072\u3099\u3057\u3044", "\u3055\u3078\u3099\u3064", "\u3055\u307B\u3046", "\u3055\u307B\u3068\u3099", "\u3055\u307E\u3059", "\u3055\u307F\u3057\u3044", "\u3055\u307F\u305F\u3099\u308C", "\u3055\u3080\u3051", "\u3055\u3081\u308B", "\u3055\u3084\u3048\u3093\u3068\u3099\u3046", "\u3055\u3086\u3046", "\u3055\u3088\u3046", "\u3055\u3088\u304F", "\u3055\u3089\u305F\u3099", "\u3055\u3099\u308B\u305D\u306F\u3099", "\u3055\u308F\u3084\u304B", "\u3055\u308F\u308B", "\u3055\u3093\u3044\u3093", "\u3055\u3093\u304B", "\u3055\u3093\u304D\u3083\u304F", "\u3055\u3093\u3053\u3046", "\u3055\u3093\u3055\u3044", "\u3055\u3099\u3093\u3057\u3087", "\u3055\u3093\u3059\u3046", "\u3055\u3093\u305B\u3044", "\u3055\u3093\u305D", "\u3055\u3093\u3061", "\u3055\u3093\u307E", "\u3055\u3093\u307F", "\u3055\u3093\u3089\u3093", "\u3057\u3042\u3044", "\u3057\u3042\u3051\u3099", "\u3057\u3042\u3055\u3063\u3066", "\u3057\u3042\u308F\u305B", "\u3057\u3044\u304F", "\u3057\u3044\u3093", "\u3057\u3046\u3061", "\u3057\u3048\u3044", "\u3057\u304A\u3051", "\u3057\u304B\u3044", "\u3057\u304B\u304F", "\u3057\u3099\u304B\u3093", "\u3057\u3053\u3099\u3068", "\u3057\u3059\u3046", "\u3057\u3099\u305F\u3099\u3044", "\u3057\u305F\u3046\u3051", "\u3057\u305F\u304D\u3099", "\u3057\u305F\u3066", "\u3057\u305F\u307F", "\u3057\u3061\u3087\u3046", "\u3057\u3061\u308A\u3093", "\u3057\u3063\u304B\u308A", "\u3057\u3064\u3057\u3099", "\u3057\u3064\u3082\u3093", "\u3057\u3066\u3044", "\u3057\u3066\u304D", "\u3057\u3066\u3064", "\u3057\u3099\u3066\u3093", "\u3057\u3099\u3068\u3099\u3046", "\u3057\u306A\u304D\u3099\u308C", "\u3057\u306A\u3082\u306E", "\u3057\u306A\u3093", "\u3057\u306D\u307E", "\u3057\u306D\u3093", "\u3057\u306E\u304F\u3099", "\u3057\u306E\u3075\u3099", "\u3057\u306F\u3044", "\u3057\u306F\u3099\u304B\u308A", "\u3057\u306F\u3064", "\u3057\u306F\u3089\u3044", "\u3057\u306F\u3093", "\u3057\u3072\u3087\u3046", "\u3057\u3075\u304F", "\u3057\u3099\u3075\u3099\u3093", "\u3057\u3078\u3044", "\u3057\u307B\u3046", "\u3057\u307B\u3093", "\u3057\u307E\u3046", "\u3057\u307E\u308B", "\u3057\u307F\u3093", "\u3057\u3080\u3051\u308B", "\u3057\u3099\u3080\u3057\u3087", "\u3057\u3081\u3044", "\u3057\u3081\u308B", "\u3057\u3082\u3093", "\u3057\u3083\u3044\u3093", "\u3057\u3083\u3046\u3093", "\u3057\u3083\u304A\u3093", "\u3057\u3099\u3083\u304B\u3099\u3044\u3082", "\u3057\u3084\u304F\u3057\u3087", "\u3057\u3083\u304F\u307B\u3046", "\u3057\u3083\u3051\u3093", "\u3057\u3083\u3053", "\u3057\u3083\u3055\u3099\u3044", "\u3057\u3083\u3057\u3093", "\u3057\u3083\u305B\u3093", "\u3057\u3083\u305D\u3046", "\u3057\u3083\u305F\u3044", "\u3057\u3083\u3061\u3087\u3046", "\u3057\u3083\u3063\u304D\u3093", "\u3057\u3099\u3083\u307E", "\u3057\u3083\u308A\u3093", "\u3057\u3083\u308C\u3044", "\u3057\u3099\u3086\u3046", "\u3057\u3099\u3085\u3046\u3057\u3087", "\u3057\u3085\u304F\u306F\u304F", "\u3057\u3099\u3085\u3057\u3093", "\u3057\u3085\u3063\u305B\u304D", "\u3057\u3085\u307F", "\u3057\u3085\u3089\u306F\u3099", "\u3057\u3099\u3085\u3093\u306F\u3099\u3093", "\u3057\u3087\u3046\u304B\u3044", "\u3057\u3087\u304F\u305F\u304F", "\u3057\u3087\u3063\u3051\u3093", "\u3057\u3087\u3068\u3099\u3046", "\u3057\u3087\u3082\u3064", "\u3057\u3089\u305B\u308B", "\u3057\u3089\u3078\u3099\u308B", "\u3057\u3093\u304B", "\u3057\u3093\u3053\u3046", "\u3057\u3099\u3093\u3057\u3099\u3083", "\u3057\u3093\u305B\u3044\u3057\u3099", "\u3057\u3093\u3061\u304F", "\u3057\u3093\u308A\u3093", "\u3059\u3042\u3051\u3099", "\u3059\u3042\u3057", "\u3059\u3042\u306A", "\u3059\u3099\u3042\u3093", "\u3059\u3044\u3048\u3044", "\u3059\u3044\u304B", "\u3059\u3044\u3068\u3046", "\u3059\u3099\u3044\u3075\u3099\u3093", "\u3059\u3044\u3088\u3046\u3072\u3099", "\u3059\u3046\u304B\u3099\u304F", "\u3059\u3046\u3057\u3099\u3064", "\u3059\u3046\u305B\u3093", "\u3059\u304A\u3068\u3099\u308A", "\u3059\u304D\u307E", "\u3059\u304F\u3046", "\u3059\u304F\u306A\u3044", "\u3059\u3051\u308B", "\u3059\u3053\u3099\u3044", "\u3059\u3053\u3057", "\u3059\u3099\u3055\u3093", "\u3059\u3059\u3099\u3057\u3044", "\u3059\u3059\u3080", "\u3059\u3059\u3081\u308B", "\u3059\u3063\u304B\u308A", "\u3059\u3099\u3063\u3057\u308A", "\u3059\u3099\u3063\u3068", "\u3059\u3066\u304D", "\u3059\u3066\u308B", "\u3059\u306D\u308B", "\u3059\u306E\u3053", "\u3059\u306F\u305F\u3099", "\u3059\u306F\u3099\u3089\u3057\u3044", "\u3059\u3099\u3072\u3087\u3046", "\u3059\u3099\u3075\u3099\u306C\u308C", "\u3059\u3075\u3099\u308A", "\u3059\u3075\u308C", "\u3059\u3078\u3099\u3066", "\u3059\u3078\u3099\u308B", "\u3059\u3099\u307B\u3046", "\u3059\u307B\u3099\u3093", "\u3059\u307E\u3044", "\u3059\u3081\u3057", "\u3059\u3082\u3046", "\u3059\u3084\u304D", "\u3059\u3089\u3059\u3089", "\u3059\u308B\u3081", "\u3059\u308C\u3061\u304B\u3099\u3046", "\u3059\u308D\u3063\u3068", "\u3059\u308F\u308B", "\u3059\u3093\u305B\u3099\u3093", "\u3059\u3093\u307B\u309A\u3046", "\u305B\u3042\u3075\u3099\u3089", "\u305B\u3044\u304B\u3064", "\u305B\u3044\u3051\u3099\u3093", "\u305B\u3044\u3057\u3099", "\u305B\u3044\u3088\u3046", "\u305B\u304A\u3046", "\u305B\u304B\u3044\u304B\u3093", "\u305B\u304D\u306B\u3093", "\u305B\u304D\u3080", "\u305B\u304D\u3086", "\u305B\u304D\u3089\u3093\u3046\u3093", "\u305B\u3051\u3093", "\u305B\u3053\u3046", "\u305B\u3059\u3057\u3099", "\u305B\u305F\u3044", "\u305B\u305F\u3051", "\u305B\u3063\u304B\u304F", "\u305B\u3063\u304D\u3083\u304F", "\u305B\u3099\u3063\u304F", "\u305B\u3063\u3051\u3093", "\u305B\u3063\u3053\u3064", "\u305B\u3063\u3055\u305F\u304F\u307E", "\u305B\u3064\u305D\u3099\u304F", "\u305B\u3064\u305F\u3099\u3093", "\u305B\u3064\u3066\u3099\u3093", "\u305B\u3063\u306F\u309A\u3093", "\u305B\u3064\u3072\u3099", "\u305B\u3064\u3075\u3099\u3093", "\u305B\u3064\u3081\u3044", "\u305B\u3064\u308A\u3064", "\u305B\u306A\u304B", "\u305B\u306E\u3072\u3099", "\u305B\u306F\u306F\u3099", "\u305B\u3072\u3099\u308D", "\u305B\u307B\u3099\u306D", "\u305B\u307E\u3044", "\u305B\u307E\u308B", "\u305B\u3081\u308B", "\u305B\u3082\u305F\u308C", "\u305B\u308A\u3075", "\u305B\u3099\u3093\u3042\u304F", "\u305B\u3093\u3044", "\u305B\u3093\u3048\u3044", "\u305B\u3093\u304B", "\u305B\u3093\u304D\u3087", "\u305B\u3093\u304F", "\u305B\u3093\u3051\u3099\u3093", "\u305B\u3099\u3093\u3053\u3099", "\u305B\u3093\u3055\u3044", "\u305B\u3093\u3057\u3085", "\u305B\u3093\u3059\u3044", "\u305B\u3093\u305B\u3044", "\u305B\u3093\u305D\u3099", "\u305B\u3093\u305F\u304F", "\u305B\u3093\u3061\u3087\u3046", "\u305B\u3093\u3066\u3044", "\u305B\u3093\u3068\u3046", "\u305B\u3093\u306C\u304D", "\u305B\u3093\u306D\u3093", "\u305B\u3093\u306F\u309A\u3044", "\u305B\u3099\u3093\u3075\u3099", "\u305B\u3099\u3093\u307B\u309A\u3046", "\u305B\u3093\u3080", "\u305B\u3093\u3081\u3093\u3057\u3099\u3087", "\u305B\u3093\u3082\u3093", "\u305B\u3093\u3084\u304F", "\u305B\u3093\u3086\u3046", "\u305B\u3093\u3088\u3046", "\u305B\u3099\u3093\u3089", "\u305B\u3099\u3093\u308A\u3083\u304F", "\u305B\u3093\u308C\u3044", "\u305B\u3093\u308D", "\u305D\u3042\u304F", "\u305D\u3044\u3068\u3051\u3099\u308B", "\u305D\u3044\u306D", "\u305D\u3046\u304B\u3099\u3093\u304D\u3087\u3046", "\u305D\u3046\u304D", "\u305D\u3046\u3053\u3099", "\u305D\u3046\u3057\u3093", "\u305D\u3046\u305F\u3099\u3093", "\u305D\u3046\u306A\u3093", "\u305D\u3046\u3072\u3099", "\u305D\u3046\u3081\u3093", "\u305D\u3046\u308A", "\u305D\u3048\u3082\u306E", "\u305D\u3048\u3093", "\u305D\u304B\u3099\u3044", "\u305D\u3051\u3099\u304D", "\u305D\u3053\u3046", "\u305D\u3053\u305D\u3053", "\u305D\u3055\u3099\u3044", "\u305D\u3057\u306A", "\u305D\u305B\u3044", "\u305D\u305B\u3093", "\u305D\u305D\u304F\u3099", "\u305D\u305F\u3099\u3066\u308B", "\u305D\u3064\u3046", "\u305D\u3064\u3048\u3093", "\u305D\u3063\u304B\u3093", "\u305D\u3064\u304D\u3099\u3087\u3046", "\u305D\u3063\u3051\u3064", "\u305D\u3063\u3053\u3046", "\u305D\u3063\u305B\u3093", "\u305D\u3063\u3068", "\u305D\u3068\u304B\u3099\u308F", "\u305D\u3068\u3064\u3099\u3089", "\u305D\u306A\u3048\u308B", "\u305D\u306A\u305F", "\u305D\u3075\u307B\u3099", "\u305D\u307B\u3099\u304F", "\u305D\u307B\u3099\u308D", "\u305D\u307E\u3064", "\u305D\u307E\u308B", "\u305D\u3080\u304F", "\u305D\u3080\u308A\u3048", "\u305D\u3081\u308B", "\u305D\u3082\u305D\u3082", "\u305D\u3088\u304B\u305B\u3099", "\u305D\u3089\u307E\u3081", "\u305D\u308D\u3046", "\u305D\u3093\u304B\u3044", "\u305D\u3093\u3051\u3044", "\u305D\u3093\u3055\u3099\u3044", "\u305D\u3093\u3057\u3064", "\u305D\u3093\u305D\u3099\u304F", "\u305D\u3093\u3061\u3087\u3046", "\u305D\u3099\u3093\u3072\u3099", "\u305D\u3099\u3093\u3075\u3099\u3093", "\u305D\u3093\u307F\u3093", "\u305F\u3042\u3044", "\u305F\u3044\u3044\u3093", "\u305F\u3044\u3046\u3093", "\u305F\u3044\u3048\u304D", "\u305F\u3044\u304A\u3046", "\u305F\u3099\u3044\u304B\u3099\u304F", "\u305F\u3044\u304D", "\u305F\u3044\u304F\u3099\u3046", "\u305F\u3044\u3051\u3093", "\u305F\u3044\u3053", "\u305F\u3044\u3055\u3099\u3044", "\u305F\u3099\u3044\u3057\u3099\u3087\u3046\u3075\u3099", "\u305F\u3099\u3044\u3059\u304D", "\u305F\u3044\u305B\u3064", "\u305F\u3044\u305D\u3046", "\u305F\u3099\u3044\u305F\u3044", "\u305F\u3044\u3061\u3087\u3046", "\u305F\u3044\u3066\u3044", "\u305F\u3099\u3044\u3068\u3099\u3053\u308D", "\u305F\u3044\u306A\u3044", "\u305F\u3044\u306D\u3064", "\u305F\u3044\u306E\u3046", "\u305F\u3044\u306F\u3093", "\u305F\u3099\u3044\u3072\u3087\u3046", "\u305F\u3044\u3075\u3046", "\u305F\u3044\u3078\u3093", "\u305F\u3044\u307B", "\u305F\u3044\u307E\u3064\u306F\u3099\u306A", "\u305F\u3044\u307F\u3093\u304F\u3099", "\u305F\u3044\u3080", "\u305F\u3044\u3081\u3093", "\u305F\u3044\u3084\u304D", "\u305F\u3044\u3088\u3046", "\u305F\u3044\u3089", "\u305F\u3044\u308A\u3087\u304F", "\u305F\u3044\u308B", "\u305F\u3044\u308F\u3093", "\u305F\u3046\u3048", "\u305F\u3048\u308B", "\u305F\u304A\u3059", "\u305F\u304A\u308B", "\u305F\u304A\u308C\u308B", "\u305F\u304B\u3044", "\u305F\u304B\u306D", "\u305F\u304D\u3072\u3099", "\u305F\u304F\u3055\u3093", "\u305F\u3053\u304F", "\u305F\u3053\u3084\u304D", "\u305F\u3055\u3044", "\u305F\u3057\u3055\u3099\u3093", "\u305F\u3099\u3057\u3099\u3083\u308C", "\u305F\u3059\u3051\u308B", "\u305F\u3059\u3099\u3055\u308F\u308B", "\u305F\u305D\u304B\u3099\u308C", "\u305F\u305F\u304B\u3046", "\u305F\u305F\u304F", "\u305F\u305F\u3099\u3057\u3044", "\u305F\u305F\u307F", "\u305F\u3061\u306F\u3099\u306A", "\u305F\u3099\u3063\u304B\u3044", "\u305F\u3099\u3063\u304D\u3083\u304F", "\u305F\u3099\u3063\u3053", "\u305F\u3099\u3063\u3057\u3085\u3064", "\u305F\u3099\u3063\u305F\u3044", "\u305F\u3066\u308B", "\u305F\u3068\u3048\u308B", "\u305F\u306A\u306F\u3099\u305F", "\u305F\u306B\u3093", "\u305F\u306C\u304D", "\u305F\u306E\u3057\u307F", "\u305F\u306F\u3064", "\u305F\u3075\u3099\u3093", "\u305F\u3078\u3099\u308B", "\u305F\u307B\u3099\u3046", "\u305F\u307E\u3053\u3099", "\u305F\u307E\u308B", "\u305F\u3099\u3080\u308B", "\u305F\u3081\u3044\u304D", "\u305F\u3081\u3059", "\u305F\u3081\u308B", "\u305F\u3082\u3064", "\u305F\u3084\u3059\u3044", "\u305F\u3088\u308B", "\u305F\u3089\u3059", "\u305F\u308A\u304D\u307B\u3093\u304B\u3099\u3093", "\u305F\u308A\u3087\u3046", "\u305F\u308A\u308B", "\u305F\u308B\u3068", "\u305F\u308C\u308B", "\u305F\u308C\u3093\u3068", "\u305F\u308D\u3063\u3068", "\u305F\u308F\u3080\u308C\u308B", "\u305F\u3099\u3093\u3042\u3064", "\u305F\u3093\u3044", "\u305F\u3093\u304A\u3093", "\u305F\u3093\u304B", "\u305F\u3093\u304D", "\u305F\u3093\u3051\u3093", "\u305F\u3093\u3053\u3099", "\u305F\u3093\u3055\u3093", "\u305F\u3093\u3057\u3099\u3087\u3046\u3072\u3099", "\u305F\u3099\u3093\u305B\u3044", "\u305F\u3093\u305D\u304F", "\u305F\u3093\u305F\u3044", "\u305F\u3099\u3093\u3061", "\u305F\u3093\u3066\u3044", "\u305F\u3093\u3068\u3046", "\u305F\u3099\u3093\u306A", "\u305F\u3093\u306B\u3093", "\u305F\u3099\u3093\u306D\u3064", "\u305F\u3093\u306E\u3046", "\u305F\u3093\u3072\u309A\u3093", "\u305F\u3099\u3093\u307B\u3099\u3046", "\u305F\u3093\u307E\u3064", "\u305F\u3093\u3081\u3044", "\u305F\u3099\u3093\u308C\u3064", "\u305F\u3099\u3093\u308D", "\u305F\u3099\u3093\u308F", "\u3061\u3042\u3044", "\u3061\u3042\u3093", "\u3061\u3044\u304D", "\u3061\u3044\u3055\u3044", "\u3061\u3048\u3093", "\u3061\u304B\u3044", "\u3061\u304B\u3089", "\u3061\u304D\u3085\u3046", "\u3061\u304D\u3093", "\u3061\u3051\u3044\u3059\u3099", "\u3061\u3051\u3093", "\u3061\u3053\u304F", "\u3061\u3055\u3044", "\u3061\u3057\u304D", "\u3061\u3057\u308A\u3087\u3046", "\u3061\u305B\u3044", "\u3061\u305D\u3046", "\u3061\u305F\u3044", "\u3061\u305F\u3093", "\u3061\u3061\u304A\u3084", "\u3061\u3064\u3057\u3099\u3087", "\u3061\u3066\u304D", "\u3061\u3066\u3093", "\u3061\u306C\u304D", "\u3061\u306C\u308A", "\u3061\u306E\u3046", "\u3061\u3072\u3087\u3046", "\u3061\u3078\u3044\u305B\u3093", "\u3061\u307B\u3046", "\u3061\u307E\u305F", "\u3061\u307F\u3064", "\u3061\u307F\u3068\u3099\u308D", "\u3061\u3081\u3044\u3068\u3099", "\u3061\u3083\u3093\u3053\u306A\u3078\u3099", "\u3061\u3085\u3046\u3044", "\u3061\u3086\u308A\u3087\u304F", "\u3061\u3087\u3046\u3057", "\u3061\u3087\u3055\u304F\u3051\u3093", "\u3061\u3089\u3057", "\u3061\u3089\u307F", "\u3061\u308A\u304B\u3099\u307F", "\u3061\u308A\u3087\u3046", "\u3061\u308B\u3068\u3099", "\u3061\u308F\u308F", "\u3061\u3093\u305F\u3044", "\u3061\u3093\u3082\u304F", "\u3064\u3044\u304B", "\u3064\u3044\u305F\u3061", "\u3064\u3046\u304B", "\u3064\u3046\u3057\u3099\u3087\u3046", "\u3064\u3046\u306F\u3093", "\u3064\u3046\u308F", "\u3064\u304B\u3046", "\u3064\u304B\u308C\u308B", "\u3064\u304F\u306D", "\u3064\u304F\u308B", "\u3064\u3051\u306D", "\u3064\u3051\u308B", "\u3064\u3053\u3099\u3046", "\u3064\u305F\u3048\u308B", "\u3064\u3064\u3099\u304F", "\u3064\u3064\u3057\u3099", "\u3064\u3064\u3080", "\u3064\u3068\u3081\u308B", "\u3064\u306A\u304B\u3099\u308B", "\u3064\u306A\u307F", "\u3064\u306D\u3064\u3099\u306D", "\u3064\u306E\u308B", "\u3064\u3075\u3099\u3059", "\u3064\u307E\u3089\u306A\u3044", "\u3064\u307E\u308B", "\u3064\u307F\u304D", "\u3064\u3081\u305F\u3044", "\u3064\u3082\u308A", "\u3064\u3082\u308B", "\u3064\u3088\u3044", "\u3064\u308B\u307B\u3099", "\u3064\u308B\u307F\u304F", "\u3064\u308F\u3082\u306E", "\u3064\u308F\u308A", "\u3066\u3042\u3057", "\u3066\u3042\u3066", "\u3066\u3042\u307F", "\u3066\u3044\u304A\u3093", "\u3066\u3044\u304B", "\u3066\u3044\u304D", "\u3066\u3044\u3051\u3044", "\u3066\u3044\u3053\u304F", "\u3066\u3044\u3055\u3064", "\u3066\u3044\u3057", "\u3066\u3044\u305B\u3044", "\u3066\u3044\u305F\u3044", "\u3066\u3044\u3068\u3099", "\u3066\u3044\u306D\u3044", "\u3066\u3044\u3072\u3087\u3046", "\u3066\u3044\u3078\u3093", "\u3066\u3044\u307B\u3099\u3046", "\u3066\u3046\u3061", "\u3066\u304A\u304F\u308C", "\u3066\u304D\u3068\u3046", "\u3066\u304F\u3072\u3099", "\u3066\u3099\u3053\u307B\u3099\u3053", "\u3066\u3055\u304D\u3099\u3087\u3046", "\u3066\u3055\u3051\u3099", "\u3066\u3059\u308A", "\u3066\u305D\u3046", "\u3066\u3061\u304B\u3099\u3044", "\u3066\u3061\u3087\u3046", "\u3066\u3064\u304B\u3099\u304F", "\u3066\u3064\u3064\u3099\u304D", "\u3066\u3099\u3063\u306F\u309A", "\u3066\u3064\u307B\u3099\u3046", "\u3066\u3064\u3084", "\u3066\u3099\u306C\u304B\u3048", "\u3066\u306C\u304D", "\u3066\u306C\u304F\u3099\u3044", "\u3066\u306E\u3072\u3089", "\u3066\u306F\u3044", "\u3066\u3075\u3099\u304F\u308D", "\u3066\u3075\u305F\u3099", "\u3066\u307B\u3068\u3099\u304D", "\u3066\u307B\u3093", "\u3066\u307E\u3048", "\u3066\u307E\u304D\u3059\u3099\u3057", "\u3066\u307F\u3057\u3099\u304B", "\u3066\u307F\u3084\u3051\u3099", "\u3066\u3089\u3059", "\u3066\u308C\u3072\u3099", "\u3066\u308F\u3051", "\u3066\u308F\u305F\u3057", "\u3066\u3099\u3093\u3042\u3064", "\u3066\u3093\u3044\u3093", "\u3066\u3093\u304B\u3044", "\u3066\u3093\u304D", "\u3066\u3093\u304F\u3099", "\u3066\u3093\u3051\u3093", "\u3066\u3093\u3053\u3099\u304F", "\u3066\u3093\u3055\u3044", "\u3066\u3093\u3057", "\u3066\u3093\u3059\u3046", "\u3066\u3099\u3093\u3061", "\u3066\u3093\u3066\u304D", "\u3066\u3093\u3068\u3046", "\u3066\u3093\u306A\u3044", "\u3066\u3093\u3075\u309A\u3089", "\u3066\u3093\u307B\u3099\u3046\u305F\u3099\u3044", "\u3066\u3093\u3081\u3064", "\u3066\u3093\u3089\u3093\u304B\u3044", "\u3066\u3099\u3093\u308A\u3087\u304F", "\u3066\u3099\u3093\u308F", "\u3068\u3099\u3042\u3044", "\u3068\u3044\u308C", "\u3068\u3099\u3046\u304B\u3093", "\u3068\u3046\u304D\u3085\u3046", "\u3068\u3099\u3046\u304F\u3099", "\u3068\u3046\u3057", "\u3068\u3046\u3080\u304D\u3099", "\u3068\u304A\u3044", "\u3068\u304A\u304B", "\u3068\u304A\u304F", "\u3068\u304A\u3059", "\u3068\u304A\u308B", "\u3068\u304B\u3044", "\u3068\u304B\u3059", "\u3068\u304D\u304A\u308A", "\u3068\u304D\u3068\u3099\u304D", "\u3068\u304F\u3044", "\u3068\u304F\u3057\u3085\u3046", "\u3068\u304F\u3066\u3093", "\u3068\u304F\u306B", "\u3068\u304F\u3078\u3099\u3064", "\u3068\u3051\u3044", "\u3068\u3051\u308B", "\u3068\u3053\u3084", "\u3068\u3055\u304B", "\u3068\u3057\u3087\u304B\u3093", "\u3068\u305D\u3046", "\u3068\u305F\u3093", "\u3068\u3061\u3085\u3046", "\u3068\u3063\u304D\u3085\u3046", "\u3068\u3063\u304F\u3093", "\u3068\u3064\u305B\u3099\u3093", "\u3068\u3064\u306B\u3085\u3046", "\u3068\u3068\u3099\u3051\u308B", "\u3068\u3068\u306E\u3048\u308B", "\u3068\u306A\u3044", "\u3068\u306A\u3048\u308B", "\u3068\u306A\u308A", "\u3068\u306E\u3055\u307E", "\u3068\u306F\u3099\u3059", "\u3068\u3099\u3075\u3099\u304B\u3099\u308F", "\u3068\u307B\u3046", "\u3068\u307E\u308B", "\u3068\u3081\u308B", "\u3068\u3082\u305F\u3099\u3061", "\u3068\u3082\u308B", "\u3068\u3099\u3088\u3046\u3072\u3099", "\u3068\u3089\u3048\u308B", "\u3068\u3093\u304B\u3064", "\u3068\u3099\u3093\u3075\u3099\u308A", "\u306A\u3044\u304B\u304F", "\u306A\u3044\u3053\u3046", "\u306A\u3044\u3057\u3087", "\u306A\u3044\u3059", "\u306A\u3044\u305B\u3093", "\u306A\u3044\u305D\u3046", "\u306A\u304A\u3059", "\u306A\u304B\u3099\u3044", "\u306A\u304F\u3059", "\u306A\u3051\u3099\u308B", "\u306A\u3053\u3046\u3068\u3099", "\u306A\u3055\u3051", "\u306A\u305F\u3066\u3099\u3053\u3053", "\u306A\u3063\u3068\u3046", "\u306A\u3064\u3084\u3059\u307F", "\u306A\u306A\u304A\u3057", "\u306A\u306B\u3053\u3099\u3068", "\u306A\u306B\u3082\u306E", "\u306A\u306B\u308F", "\u306A\u306E\u304B", "\u306A\u3075\u305F\u3099", "\u306A\u307E\u3044\u304D", "\u306A\u307E\u3048", "\u306A\u307E\u307F", "\u306A\u307F\u305F\u3099", "\u306A\u3081\u3089\u304B", "\u306A\u3081\u308B", "\u306A\u3084\u3080", "\u306A\u3089\u3046", "\u306A\u3089\u3072\u3099", "\u306A\u3089\u3075\u3099", "\u306A\u308C\u308B", "\u306A\u308F\u3068\u3072\u3099", "\u306A\u308F\u306F\u3099\u308A", "\u306B\u3042\u3046", "\u306B\u3044\u304B\u3099\u305F", "\u306B\u3046\u3051", "\u306B\u304A\u3044", "\u306B\u304B\u3044", "\u306B\u304B\u3099\u3066", "\u306B\u304D\u3072\u3099", "\u306B\u304F\u3057\u307F", "\u306B\u304F\u307E\u3093", "\u306B\u3051\u3099\u308B", "\u306B\u3055\u3093\u304B\u305F\u3093\u305D", "\u306B\u3057\u304D", "\u306B\u305B\u3082\u306E", "\u306B\u3061\u3057\u3099\u3087\u3046", "\u306B\u3061\u3088\u3046\u3072\u3099", "\u306B\u3063\u304B", "\u306B\u3063\u304D", "\u306B\u3063\u3051\u3044", "\u306B\u3063\u3053\u3046", "\u306B\u3063\u3055\u3093", "\u306B\u3063\u3057\u3087\u304F", "\u306B\u3063\u3059\u3046", "\u306B\u3063\u305B\u304D", "\u306B\u3063\u3066\u3044", "\u306B\u306A\u3046", "\u306B\u307B\u3093", "\u306B\u307E\u3081", "\u306B\u3082\u3064", "\u306B\u3084\u308A", "\u306B\u3085\u3046\u3044\u3093", "\u306B\u308A\u3093\u3057\u3083", "\u306B\u308F\u3068\u308A", "\u306B\u3093\u3044", "\u306B\u3093\u304B", "\u306B\u3093\u304D", "\u306B\u3093\u3051\u3099\u3093", "\u306B\u3093\u3057\u304D", "\u306B\u3093\u3059\u3099\u3046", "\u306B\u3093\u305D\u3046", "\u306B\u3093\u305F\u3044", "\u306B\u3093\u3061", "\u306B\u3093\u3066\u3044", "\u306B\u3093\u306B\u304F", "\u306B\u3093\u3075\u309A", "\u306B\u3093\u307E\u308A", "\u306B\u3093\u3080", "\u306B\u3093\u3081\u3044", "\u306B\u3093\u3088\u3046", "\u306C\u3044\u304F\u304D\u3099", "\u306C\u304B\u3059", "\u306C\u304F\u3099\u3044\u3068\u308B", "\u306C\u304F\u3099\u3046", "\u306C\u304F\u3082\u308A", "\u306C\u3059\u3080", "\u306C\u307E\u3048\u3072\u3099", "\u306C\u3081\u308A", "\u306C\u3089\u3059", "\u306C\u3093\u3061\u3083\u304F", "\u306D\u3042\u3051\u3099", "\u306D\u3044\u304D", "\u306D\u3044\u308B", "\u306D\u3044\u308D", "\u306D\u304F\u3099\u305B", "\u306D\u304F\u305F\u3044", "\u306D\u304F\u3089", "\u306D\u3053\u305B\u3099", "\u306D\u3053\u3080", "\u306D\u3055\u3051\u3099", "\u306D\u3059\u3053\u3099\u3059", "\u306D\u305D\u3078\u3099\u308B", "\u306D\u305F\u3099\u3093", "\u306D\u3064\u3044", "\u306D\u3063\u3057\u3093", "\u306D\u3064\u305D\u3099\u3046", "\u306D\u3063\u305F\u3044\u304D\u3099\u3087", "\u306D\u3075\u3099\u305D\u304F", "\u306D\u3075\u305F\u3099", "\u306D\u307B\u3099\u3046", "\u306D\u307B\u308A\u306F\u307B\u308A", "\u306D\u307E\u304D", "\u306D\u307E\u308F\u3057", "\u306D\u307F\u307F", "\u306D\u3080\u3044", "\u306D\u3080\u305F\u3044", "\u306D\u3082\u3068", "\u306D\u3089\u3046", "\u306D\u308F\u3055\u3099", "\u306D\u3093\u3044\u308A", "\u306D\u3093\u304A\u3057", "\u306D\u3093\u304B\u3093", "\u306D\u3093\u304D\u3093", "\u306D\u3093\u304F\u3099", "\u306D\u3093\u3055\u3099", "\u306D\u3093\u3057", "\u306D\u3093\u3061\u3083\u304F", "\u306D\u3093\u3068\u3099", "\u306D\u3093\u3072\u309A", "\u306D\u3093\u3075\u3099\u3064", "\u306D\u3093\u307E\u3064", "\u306D\u3093\u308A\u3087\u3046", "\u306D\u3093\u308C\u3044", "\u306E\u3044\u3059\u3099", "\u306E\u304A\u3064\u3099\u307E", "\u306E\u304B\u3099\u3059", "\u306E\u304D\u306A\u307F", "\u306E\u3053\u304D\u3099\u308A", "\u306E\u3053\u3059", "\u306E\u3053\u308B", "\u306E\u305B\u308B", "\u306E\u305D\u3099\u304F", "\u306E\u305D\u3099\u3080", "\u306E\u305F\u307E\u3046", "\u306E\u3061\u307B\u3068\u3099", "\u306E\u3063\u304F", "\u306E\u306F\u3099\u3059", "\u306E\u306F\u3089", "\u306E\u3078\u3099\u308B", "\u306E\u307B\u3099\u308B", "\u306E\u307F\u3082\u306E", "\u306E\u3084\u307E", "\u306E\u3089\u3044\u306C", "\u306E\u3089\u306D\u3053", "\u306E\u308A\u3082\u306E", "\u306E\u308A\u3086\u304D", "\u306E\u308C\u3093", "\u306E\u3093\u304D", "\u306F\u3099\u3042\u3044", "\u306F\u3042\u304F", "\u306F\u3099\u3042\u3055\u3093", "\u306F\u3099\u3044\u304B", "\u306F\u3099\u3044\u304F", "\u306F\u3044\u3051\u3093", "\u306F\u3044\u3053\u3099", "\u306F\u3044\u3057\u3093", "\u306F\u3044\u3059\u3044", "\u306F\u3044\u305B\u3093", "\u306F\u3044\u305D\u3046", "\u306F\u3044\u3061", "\u306F\u3099\u3044\u306F\u3099\u3044", "\u306F\u3044\u308C\u3064", "\u306F\u3048\u308B", "\u306F\u304A\u308B", "\u306F\u304B\u3044", "\u306F\u3099\u304B\u308A", "\u306F\u304B\u308B", "\u306F\u304F\u3057\u3085", "\u306F\u3051\u3093", "\u306F\u3053\u3075\u3099", "\u306F\u3055\u307F", "\u306F\u3055\u3093", "\u306F\u3057\u3053\u3099", "\u306F\u3099\u3057\u3087", "\u306F\u3057\u308B", "\u306F\u305B\u308B", "\u306F\u309A\u305D\u3053\u3093", "\u306F\u305D\u3093", "\u306F\u305F\u3093", "\u306F\u3061\u307F\u3064", "\u306F\u3064\u304A\u3093", "\u306F\u3063\u304B\u304F", "\u306F\u3064\u3099\u304D", "\u306F\u3063\u304D\u308A", "\u306F\u3063\u304F\u3064", "\u306F\u3063\u3051\u3093", "\u306F\u3063\u3053\u3046", "\u306F\u3063\u3055\u3093", "\u306F\u3063\u3057\u3093", "\u306F\u3063\u305F\u3064", "\u306F\u3063\u3061\u3085\u3046", "\u306F\u3063\u3066\u3093", "\u306F\u3063\u3072\u309A\u3087\u3046", "\u306F\u3063\u307B\u309A\u3046", "\u306F\u306A\u3059", "\u306F\u306A\u3072\u3099", "\u306F\u306B\u304B\u3080", "\u306F\u3075\u3099\u3089\u3057", "\u306F\u307F\u304B\u3099\u304D", "\u306F\u3080\u304B\u3046", "\u306F\u3081\u3064", "\u306F\u3084\u3044", "\u306F\u3084\u3057", "\u306F\u3089\u3046", "\u306F\u308D\u3046\u3043\u3093", "\u306F\u308F\u3044", "\u306F\u3093\u3044", "\u306F\u3093\u3048\u3044", "\u306F\u3093\u304A\u3093", "\u306F\u3093\u304B\u304F", "\u306F\u3093\u304D\u3087\u3046", "\u306F\u3099\u3093\u304F\u3099\u307F", "\u306F\u3093\u3053", "\u306F\u3093\u3057\u3083", "\u306F\u3093\u3059\u3046", "\u306F\u3093\u305F\u3099\u3093", "\u306F\u309A\u3093\u3061", "\u306F\u309A\u3093\u3064", "\u306F\u3093\u3066\u3044", "\u306F\u3093\u3068\u3057", "\u306F\u3093\u306E\u3046", "\u306F\u3093\u306F\u309A", "\u306F\u3093\u3075\u3099\u3093", "\u306F\u3093\u3078\u309A\u3093", "\u306F\u3093\u307B\u3099\u3046\u304D", "\u306F\u3093\u3081\u3044", "\u306F\u3093\u3089\u3093", "\u306F\u3093\u308D\u3093", "\u3072\u3044\u304D", "\u3072\u3046\u3093", "\u3072\u3048\u308B", "\u3072\u304B\u304F", "\u3072\u304B\u308A", "\u3072\u304B\u308B", "\u3072\u304B\u3093", "\u3072\u304F\u3044", "\u3072\u3051\u3064", "\u3072\u3053\u3046\u304D", "\u3072\u3053\u304F", "\u3072\u3055\u3044", "\u3072\u3055\u3057\u3075\u3099\u308A", "\u3072\u3055\u3093", "\u3072\u3099\u3057\u3099\u3085\u3064\u304B\u3093", "\u3072\u3057\u3087", "\u3072\u305D\u304B", "\u3072\u305D\u3080", "\u3072\u305F\u3080\u304D", "\u3072\u305F\u3099\u308A", "\u3072\u305F\u308B", "\u3072\u3064\u304D\u3099", "\u3072\u3063\u3053\u3057", "\u3072\u3063\u3057", "\u3072\u3064\u3057\u3099\u3085\u3072\u3093", "\u3072\u3063\u3059", "\u3072\u3064\u305B\u3099\u3093", "\u3072\u309A\u3063\u305F\u308A", "\u3072\u309A\u3063\u3061\u308A", "\u3072\u3064\u3088\u3046", "\u3072\u3066\u3044", "\u3072\u3068\u3053\u3099\u307F", "\u3072\u306A\u307E\u3064\u308A", "\u3072\u306A\u3093", "\u3072\u306D\u308B", "\u3072\u306F\u3093", "\u3072\u3072\u3099\u304F", "\u3072\u3072\u3087\u3046", "\u3072\u307B\u3046", "\u3072\u307E\u308F\u308A", "\u3072\u307E\u3093", "\u3072\u307F\u3064", "\u3072\u3081\u3044", "\u3072\u3081\u3057\u3099\u3057", "\u3072\u3084\u3051", "\u3072\u3084\u3059", "\u3072\u3088\u3046", "\u3072\u3099\u3087\u3046\u304D", "\u3072\u3089\u304B\u3099\u306A", "\u3072\u3089\u304F", "\u3072\u308A\u3064", "\u3072\u308A\u3087\u3046", "\u3072\u308B\u307E", "\u3072\u308B\u3084\u3059\u307F", "\u3072\u308C\u3044", "\u3072\u308D\u3044", "\u3072\u308D\u3046", "\u3072\u308D\u304D", "\u3072\u308D\u3086\u304D", "\u3072\u3093\u304B\u304F", "\u3072\u3093\u3051\u3064", "\u3072\u3093\u3053\u3093", "\u3072\u3093\u3057\u3085", "\u3072\u3093\u305D\u3046", "\u3072\u309A\u3093\u3061", "\u3072\u3093\u306F\u309A\u3093", "\u3072\u3099\u3093\u307B\u3099\u3046", "\u3075\u3042\u3093", "\u3075\u3044\u3046\u3061", "\u3075\u3046\u3051\u3044", "\u3075\u3046\u305B\u3093", "\u3075\u309A\u3046\u305F\u308D\u3046", "\u3075\u3046\u3068\u3046", "\u3075\u3046\u3075", "\u3075\u3048\u308B", "\u3075\u304A\u3093", "\u3075\u304B\u3044", "\u3075\u304D\u3093", "\u3075\u304F\u3055\u3099\u3064", "\u3075\u304F\u3075\u3099\u304F\u308D", "\u3075\u3053\u3046", "\u3075\u3055\u3044", "\u3075\u3057\u304D\u3099", "\u3075\u3057\u3099\u307F", "\u3075\u3059\u307E", "\u3075\u305B\u3044", "\u3075\u305B\u304F\u3099", "\u3075\u305D\u304F", "\u3075\u3099\u305F\u306B\u304F", "\u3075\u305F\u3093", "\u3075\u3061\u3087\u3046", "\u3075\u3064\u3046", "\u3075\u3064\u304B", "\u3075\u3063\u304B\u3064", "\u3075\u3063\u304D", "\u3075\u3063\u3053\u304F", "\u3075\u3099\u3068\u3099\u3046", "\u3075\u3068\u308B", "\u3075\u3068\u3093", "\u3075\u306E\u3046", "\u3075\u306F\u3044", "\u3075\u3072\u3087\u3046", "\u3075\u3078\u3093", "\u3075\u307E\u3093", "\u3075\u307F\u3093", "\u3075\u3081\u3064", "\u3075\u3081\u3093", "\u3075\u3088\u3046", "\u3075\u308A\u3053", "\u3075\u308A\u308B", "\u3075\u308B\u3044", "\u3075\u3093\u3044\u304D", "\u3075\u3099\u3093\u304B\u3099\u304F", "\u3075\u3099\u3093\u304F\u3099", "\u3075\u3093\u3057\u3064", "\u3075\u3099\u3093\u305B\u304D", "\u3075\u3093\u305D\u3046", "\u3075\u3099\u3093\u307B\u309A\u3046", "\u3078\u3044\u3042\u3093", "\u3078\u3044\u304A\u3093", "\u3078\u3044\u304B\u3099\u3044", "\u3078\u3044\u304D", "\u3078\u3044\u3051\u3099\u3093", "\u3078\u3044\u3053\u3046", "\u3078\u3044\u3055", "\u3078\u3044\u3057\u3083", "\u3078\u3044\u305B\u3064", "\u3078\u3044\u305D", "\u3078\u3044\u305F\u304F", "\u3078\u3044\u3066\u3093", "\u3078\u3044\u306D\u3064", "\u3078\u3044\u308F", "\u3078\u304D\u304B\u3099", "\u3078\u3053\u3080", "\u3078\u3099\u306B\u3044\u308D", "\u3078\u3099\u306B\u3057\u3087\u3046\u304B\u3099", "\u3078\u3089\u3059", "\u3078\u3093\u304B\u3093", "\u3078\u3099\u3093\u304D\u3087\u3046", "\u3078\u3099\u3093\u3053\u3099\u3057", "\u3078\u3093\u3055\u3044", "\u3078\u3093\u305F\u3044", "\u3078\u3099\u3093\u308A", "\u307B\u3042\u3093", "\u307B\u3044\u304F", "\u307B\u3099\u3046\u304D\u3099\u3087", "\u307B\u3046\u3053\u304F", "\u307B\u3046\u305D\u3046", "\u307B\u3046\u307B\u3046", "\u307B\u3046\u3082\u3093", "\u307B\u3046\u308A\u3064", "\u307B\u3048\u308B", "\u307B\u304A\u3093", "\u307B\u304B\u3093", "\u307B\u304D\u3087\u3046", "\u307B\u3099\u304D\u3093", "\u307B\u304F\u308D", "\u307B\u3051\u3064", "\u307B\u3051\u3093", "\u307B\u3053\u3046", "\u307B\u3053\u308B", "\u307B\u3057\u3044", "\u307B\u3057\u3064", "\u307B\u3057\u3085", "\u307B\u3057\u3087\u3046", "\u307B\u305B\u3044", "\u307B\u305D\u3044", "\u307B\u305D\u304F", "\u307B\u305F\u3066", "\u307B\u305F\u308B", "\u307B\u309A\u3061\u3075\u3099\u304F\u308D", "\u307B\u3063\u304D\u3087\u304F", "\u307B\u3063\u3055", "\u307B\u3063\u305F\u3093", "\u307B\u3068\u3093\u3068\u3099", "\u307B\u3081\u308B", "\u307B\u3093\u3044", "\u307B\u3093\u304D", "\u307B\u3093\u3051", "\u307B\u3093\u3057\u3064", "\u307B\u3093\u3084\u304F", "\u307E\u3044\u306B\u3061", "\u307E\u304B\u3044", "\u307E\u304B\u305B\u308B", "\u307E\u304B\u3099\u308B", "\u307E\u3051\u308B", "\u307E\u3053\u3068", "\u307E\u3055\u3064", "\u307E\u3057\u3099\u3081", "\u307E\u3059\u304F", "\u307E\u305B\u3099\u308B", "\u307E\u3064\u308A", "\u307E\u3068\u3081", "\u307E\u306A\u3075\u3099", "\u307E\u306C\u3051", "\u307E\u306D\u304F", "\u307E\u307B\u3046", "\u307E\u3082\u308B", "\u307E\u3086\u3051\u3099", "\u307E\u3088\u3046", "\u307E\u308D\u3084\u304B", "\u307E\u308F\u3059", "\u307E\u308F\u308A", "\u307E\u308F\u308B", "\u307E\u3093\u304B\u3099", "\u307E\u3093\u304D\u3064", "\u307E\u3093\u305D\u3099\u304F", "\u307E\u3093\u306A\u304B", "\u307F\u3044\u3089", "\u307F\u3046\u3061", "\u307F\u3048\u308B", "\u307F\u304B\u3099\u304F", "\u307F\u304B\u305F", "\u307F\u304B\u3093", "\u307F\u3051\u3093", "\u307F\u3053\u3093", "\u307F\u3057\u3099\u304B\u3044", "\u307F\u3059\u3044", "\u307F\u3059\u3048\u308B", "\u307F\u305B\u308B", "\u307F\u3063\u304B", "\u307F\u3064\u304B\u308B", "\u307F\u3064\u3051\u308B", "\u307F\u3066\u3044", "\u307F\u3068\u3081\u308B", "\u307F\u306A\u3068", "\u307F\u306A\u307F\u304B\u3055\u3044", "\u307F\u306D\u3089\u308B", "\u307F\u306E\u3046", "\u307F\u306E\u304B\u3099\u3059", "\u307F\u307B\u3093", "\u307F\u3082\u3068", "\u307F\u3084\u3051\u3099", "\u307F\u3089\u3044", "\u307F\u308A\u3087\u304F", "\u307F\u308F\u304F", "\u307F\u3093\u304B", "\u307F\u3093\u305D\u3099\u304F", "\u3080\u3044\u304B", "\u3080\u3048\u304D", "\u3080\u3048\u3093", "\u3080\u304B\u3044", "\u3080\u304B\u3046", "\u3080\u304B\u3048", "\u3080\u304B\u3057", "\u3080\u304D\u3099\u3061\u3083", "\u3080\u3051\u308B", "\u3080\u3051\u3099\u3093", "\u3080\u3055\u307B\u3099\u308B", "\u3080\u3057\u3042\u3064\u3044", "\u3080\u3057\u306F\u3099", "\u3080\u3057\u3099\u3085\u3093", "\u3080\u3057\u308D", "\u3080\u3059\u3046", "\u3080\u3059\u3053", "\u3080\u3059\u3075\u3099", "\u3080\u3059\u3081", "\u3080\u305B\u308B", "\u3080\u305B\u3093", "\u3080\u3061\u3085\u3046", "\u3080\u306A\u3057\u3044", "\u3080\u306E\u3046", "\u3080\u3084\u307F", "\u3080\u3088\u3046", "\u3080\u3089\u3055\u304D", "\u3080\u308A\u3087\u3046", "\u3080\u308D\u3093", "\u3081\u3044\u3042\u3093", "\u3081\u3044\u3046\u3093", "\u3081\u3044\u3048\u3093", "\u3081\u3044\u304B\u304F", "\u3081\u3044\u304D\u3087\u304F", "\u3081\u3044\u3055\u3044", "\u3081\u3044\u3057", "\u3081\u3044\u305D\u3046", "\u3081\u3044\u3075\u3099\u3064", "\u3081\u3044\u308C\u3044", "\u3081\u3044\u308F\u304F", "\u3081\u304F\u3099\u307E\u308C\u308B", "\u3081\u3055\u3099\u3059", "\u3081\u3057\u305F", "\u3081\u3059\u3099\u3089\u3057\u3044", "\u3081\u305F\u3099\u3064", "\u3081\u307E\u3044", "\u3081\u3084\u3059", "\u3081\u3093\u304D\u3087", "\u3081\u3093\u305B\u304D", "\u3081\u3093\u3068\u3099\u3046", "\u3082\u3046\u3057\u3042\u3051\u3099\u308B", "\u3082\u3046\u3068\u3099\u3046\u3051\u3093", "\u3082\u3048\u308B", "\u3082\u304F\u3057", "\u3082\u304F\u3066\u304D", "\u3082\u304F\u3088\u3046\u3072\u3099", "\u3082\u3061\u308D\u3093", "\u3082\u3068\u3099\u308B", "\u3082\u3089\u3046", "\u3082\u3093\u304F", "\u3082\u3093\u305F\u3099\u3044", "\u3084\u304A\u3084", "\u3084\u3051\u308B", "\u3084\u3055\u3044", "\u3084\u3055\u3057\u3044", "\u3084\u3059\u3044", "\u3084\u3059\u305F\u308D\u3046", "\u3084\u3059\u307F", "\u3084\u305B\u308B", "\u3084\u305D\u3046", "\u3084\u305F\u3044", "\u3084\u3061\u3093", "\u3084\u3063\u3068", "\u3084\u3063\u306F\u309A\u308A", "\u3084\u3075\u3099\u308B", "\u3084\u3081\u308B", "\u3084\u3084\u3053\u3057\u3044", "\u3084\u3088\u3044", "\u3084\u308F\u3089\u304B\u3044", "\u3086\u3046\u304D", "\u3086\u3046\u3072\u3099\u3093\u304D\u3087\u304F", "\u3086\u3046\u3078\u3099", "\u3086\u3046\u3081\u3044", "\u3086\u3051\u3064", "\u3086\u3057\u3085\u3064", "\u3086\u305B\u3093", "\u3086\u305D\u3046", "\u3086\u305F\u304B", "\u3086\u3061\u3083\u304F", "\u3086\u3066\u3099\u308B", "\u3086\u306B\u3085\u3046", "\u3086\u3072\u3099\u308F", "\u3086\u3089\u3044", "\u3086\u308C\u308B", "\u3088\u3046\u3044", "\u3088\u3046\u304B", "\u3088\u3046\u304D\u3085\u3046", "\u3088\u3046\u3057\u3099", "\u3088\u3046\u3059", "\u3088\u3046\u3061\u3048\u3093", "\u3088\u304B\u305B\u3099", "\u3088\u304B\u3093", "\u3088\u304D\u3093", "\u3088\u304F\u305B\u3044", "\u3088\u304F\u307B\u3099\u3046", "\u3088\u3051\u3044", "\u3088\u3053\u3099\u308C\u308B", "\u3088\u3055\u3093", "\u3088\u3057\u3085\u3046", "\u3088\u305D\u3046", "\u3088\u305D\u304F", "\u3088\u3063\u304B", "\u3088\u3066\u3044", "\u3088\u3068\u3099\u304B\u3099\u308F\u304F", "\u3088\u306D\u3064", "\u3088\u3084\u304F", "\u3088\u3086\u3046", "\u3088\u308D\u3053\u3075\u3099", "\u3088\u308D\u3057\u3044", "\u3089\u3044\u3046", "\u3089\u304F\u304B\u3099\u304D", "\u3089\u304F\u3053\u3099", "\u3089\u304F\u3055\u3064", "\u3089\u304F\u305F\u3099", "\u3089\u3057\u3093\u306F\u3099\u3093", "\u3089\u305B\u3093", "\u3089\u305D\u3099\u304F", "\u3089\u305F\u3044", "\u3089\u3063\u304B", "\u3089\u308C\u3064", "\u308A\u3048\u304D", "\u308A\u304B\u3044", "\u308A\u304D\u3055\u304F", "\u308A\u304D\u305B\u3064", "\u308A\u304F\u304F\u3099\u3093", "\u308A\u304F\u3064", "\u308A\u3051\u3093", "\u308A\u3053\u3046", "\u308A\u305B\u3044", "\u308A\u305D\u3046", "\u308A\u305D\u304F", "\u308A\u3066\u3093", "\u308A\u306D\u3093", "\u308A\u3086\u3046", "\u308A\u3085\u3046\u304B\u3099\u304F", "\u308A\u3088\u3046", "\u308A\u3087\u3046\u308A", "\u308A\u3087\u304B\u3093", "\u308A\u3087\u304F\u3061\u3083", "\u308A\u3087\u3053\u3046", "\u308A\u308A\u304F", "\u308A\u308C\u304D", "\u308A\u308D\u3093", "\u308A\u3093\u3053\u3099", "\u308B\u3044\u3051\u3044", "\u308B\u3044\u3055\u3044", "\u308B\u3044\u3057\u3099", "\u308B\u3044\u305B\u304D", "\u308B\u3059\u306F\u3099\u3093", "\u308B\u308A\u304B\u3099\u308F\u3089", "\u308C\u3044\u304B\u3093", "\u308C\u3044\u304D\u3099", "\u308C\u3044\u305B\u3044", "\u308C\u3044\u305D\u3099\u3046\u3053", "\u308C\u3044\u3068\u3046", "\u308C\u3044\u307B\u3099\u3046", "\u308C\u304D\u3057", "\u308C\u304D\u305F\u3099\u3044", "\u308C\u3093\u3042\u3044", "\u308C\u3093\u3051\u3044", "\u308C\u3093\u3053\u3093", "\u308C\u3093\u3055\u3044", "\u308C\u3093\u3057\u3085\u3046", "\u308C\u3093\u305D\u3099\u304F", "\u308C\u3093\u3089\u304F", "\u308D\u3046\u304B", "\u308D\u3046\u3053\u3099", "\u308D\u3046\u3057\u3099\u3093", "\u308D\u3046\u305D\u304F", "\u308D\u304F\u304B\u3099", "\u308D\u3053\u3064", "\u308D\u3057\u3099\u3046\u3089", "\u308D\u3057\u3085\u3064", "\u308D\u305B\u3093", "\u308D\u3066\u3093", "\u308D\u3081\u3093", "\u308D\u308C\u3064", "\u308D\u3093\u304D\u3099", "\u308D\u3093\u306F\u309A", "\u308D\u3093\u3075\u3099\u3093", "\u308D\u3093\u308A", "\u308F\u304B\u3059", "\u308F\u304B\u3081", "\u308F\u304B\u3084\u307E", "\u308F\u304B\u308C\u308B", "\u308F\u3057\u3064", "\u308F\u3057\u3099\u307E\u3057", "\u308F\u3059\u308C\u3082\u306E", "\u308F\u3089\u3046", "\u308F\u308C\u308B"], eg = ["abacate", "abaixo", "abalar", "abater", "abduzir", "abelha", "aberto", "abismo", "abotoar", "abranger", "abreviar", "abrigar", "abrupto", "absinto", "absoluto", "absurdo", "abutre", "acabado", "acalmar", "acampar", "acanhar", "acaso", "aceitar", "acelerar", "acenar", "acervo", "acessar", "acetona", "achatar", "acidez", "acima", "acionado", "acirrar", "aclamar", "aclive", "acolhida", "acomodar", "acoplar", "acordar", "acumular", "acusador", "adaptar", "adega", "adentro", "adepto", "adequar", "aderente", "adesivo", "adeus", "adiante", "aditivo", "adjetivo", "adjunto", "admirar", "adorar", "adquirir", "adubo", "adverso", "advogado", "aeronave", "afastar", "aferir", "afetivo", "afinador", "afivelar", "aflito", "afluente", "afrontar", "agachar", "agarrar", "agasalho", "agenciar", "agilizar", "agiota", "agitado", "agora", "agradar", "agreste", "agrupar", "aguardar", "agulha", "ajoelhar", "ajudar", "ajustar", "alameda", "alarme", "alastrar", "alavanca", "albergue", "albino", "alcatra", "aldeia", "alecrim", "alegria", "alertar", "alface", "alfinete", "algum", "alheio", "aliar", "alicate", "alienar", "alinhar", "aliviar", "almofada", "alocar", "alpiste", "alterar", "altitude", "alucinar", "alugar", "aluno", "alusivo", "alvo", "amaciar", "amador", "amarelo", "amassar", "ambas", "ambiente", "ameixa", "amenizar", "amido", "amistoso", "amizade", "amolador", "amontoar", "amoroso", "amostra", "amparar", "ampliar", "ampola", "anagrama", "analisar", "anarquia", "anatomia", "andaime", "anel", "anexo", "angular", "animar", "anjo", "anomalia", "anotado", "ansioso", "anterior", "anuidade", "anunciar", "anzol", "apagador", "apalpar", "apanhado", "apego", "apelido", "apertada", "apesar", "apetite", "apito", "aplauso", "aplicada", "apoio", "apontar", "aposta", "aprendiz", "aprovar", "aquecer", "arame", "aranha", "arara", "arcada", "ardente", "areia", "arejar", "arenito", "aresta", "argiloso", "argola", "arma", "arquivo", "arraial", "arrebate", "arriscar", "arroba", "arrumar", "arsenal", "arterial", "artigo", "arvoredo", "asfaltar", "asilado", "aspirar", "assador", "assinar", "assoalho", "assunto", "astral", "atacado", "atadura", "atalho", "atarefar", "atear", "atender", "aterro", "ateu", "atingir", "atirador", "ativo", "atoleiro", "atracar", "atrevido", "atriz", "atual", "atum", "auditor", "aumentar", "aura", "aurora", "autismo", "autoria", "autuar", "avaliar", "avante", "avaria", "avental", "avesso", "aviador", "avisar", "avulso", "axila", "azarar", "azedo", "azeite", "azulejo", "babar", "babosa", "bacalhau", "bacharel", "bacia", "bagagem", "baiano", "bailar", "baioneta", "bairro", "baixista", "bajular", "baleia", "baliza", "balsa", "banal", "bandeira", "banho", "banir", "banquete", "barato", "barbado", "baronesa", "barraca", "barulho", "baseado", "bastante", "batata", "batedor", "batida", "batom", "batucar", "baunilha", "beber", "beijo", "beirada", "beisebol", "beldade", "beleza", "belga", "beliscar", "bendito", "bengala", "benzer", "berimbau", "berlinda", "berro", "besouro", "bexiga", "bezerro", "bico", "bicudo", "bienal", "bifocal", "bifurcar", "bigorna", "bilhete", "bimestre", "bimotor", "biologia", "biombo", "biosfera", "bipolar", "birrento", "biscoito", "bisneto", "bispo", "bissexto", "bitola", "bizarro", "blindado", "bloco", "bloquear", "boato", "bobagem", "bocado", "bocejo", "bochecha", "boicotar", "bolada", "boletim", "bolha", "bolo", "bombeiro", "bonde", "boneco", "bonita", "borbulha", "borda", "boreal", "borracha", "bovino", "boxeador", "branco", "brasa", "braveza", "breu", "briga", "brilho", "brincar", "broa", "brochura", "bronzear", "broto", "bruxo", "bucha", "budismo", "bufar", "bule", "buraco", "busca", "busto", "buzina", "cabana", "cabelo", "cabide", "cabo", "cabrito", "cacau", "cacetada", "cachorro", "cacique", "cadastro", "cadeado", "cafezal", "caiaque", "caipira", "caixote", "cajado", "caju", "calafrio", "calcular", "caldeira", "calibrar", "calmante", "calota", "camada", "cambista", "camisa", "camomila", "campanha", "camuflar", "canavial", "cancelar", "caneta", "canguru", "canhoto", "canivete", "canoa", "cansado", "cantar", "canudo", "capacho", "capela", "capinar", "capotar", "capricho", "captador", "capuz", "caracol", "carbono", "cardeal", "careca", "carimbar", "carneiro", "carpete", "carreira", "cartaz", "carvalho", "casaco", "casca", "casebre", "castelo", "casulo", "catarata", "cativar", "caule", "causador", "cautelar", "cavalo", "caverna", "cebola", "cedilha", "cegonha", "celebrar", "celular", "cenoura", "censo", "centeio", "cercar", "cerrado", "certeiro", "cerveja", "cetim", "cevada", "chacota", "chaleira", "chamado", "chapada", "charme", "chatice", "chave", "chefe", "chegada", "cheiro", "cheque", "chicote", "chifre", "chinelo", "chocalho", "chover", "chumbo", "chutar", "chuva", "cicatriz", "ciclone", "cidade", "cidreira", "ciente", "cigana", "cimento", "cinto", "cinza", "ciranda", "circuito", "cirurgia", "citar", "clareza", "clero", "clicar", "clone", "clube", "coado", "coagir", "cobaia", "cobertor", "cobrar", "cocada", "coelho", "coentro", "coeso", "cogumelo", "coibir", "coifa", "coiote", "colar", "coleira", "colher", "colidir", "colmeia", "colono", "coluna", "comando", "combinar", "comentar", "comitiva", "comover", "complexo", "comum", "concha", "condor", "conectar", "confuso", "congelar", "conhecer", "conjugar", "consumir", "contrato", "convite", "cooperar", "copeiro", "copiador", "copo", "coquetel", "coragem", "cordial", "corneta", "coronha", "corporal", "correio", "cortejo", "coruja", "corvo", "cosseno", "costela", "cotonete", "couro", "couve", "covil", "cozinha", "cratera", "cravo", "creche", "credor", "creme", "crer", "crespo", "criada", "criminal", "crioulo", "crise", "criticar", "crosta", "crua", "cruzeiro", "cubano", "cueca", "cuidado", "cujo", "culatra", "culminar", "culpar", "cultura", "cumprir", "cunhado", "cupido", "curativo", "curral", "cursar", "curto", "cuspir", "custear", "cutelo", "damasco", "datar", "debater", "debitar", "deboche", "debulhar", "decalque", "decimal", "declive", "decote", "decretar", "dedal", "dedicado", "deduzir", "defesa", "defumar", "degelo", "degrau", "degustar", "deitado", "deixar", "delator", "delegado", "delinear", "delonga", "demanda", "demitir", "demolido", "dentista", "depenado", "depilar", "depois", "depressa", "depurar", "deriva", "derramar", "desafio", "desbotar", "descanso", "desenho", "desfiado", "desgaste", "desigual", "deslize", "desmamar", "desova", "despesa", "destaque", "desviar", "detalhar", "detentor", "detonar", "detrito", "deusa", "dever", "devido", "devotado", "dezena", "diagrama", "dialeto", "didata", "difuso", "digitar", "dilatado", "diluente", "diminuir", "dinastia", "dinheiro", "diocese", "direto", "discreta", "disfarce", "disparo", "disquete", "dissipar", "distante", "ditador", "diurno", "diverso", "divisor", "divulgar", "dizer", "dobrador", "dolorido", "domador", "dominado", "donativo", "donzela", "dormente", "dorsal", "dosagem", "dourado", "doutor", "drenagem", "drible", "drogaria", "duelar", "duende", "dueto", "duplo", "duquesa", "durante", "duvidoso", "eclodir", "ecoar", "ecologia", "edificar", "edital", "educado", "efeito", "efetivar", "ejetar", "elaborar", "eleger", "eleitor", "elenco", "elevador", "eliminar", "elogiar", "embargo", "embolado", "embrulho", "embutido", "emenda", "emergir", "emissor", "empatia", "empenho", "empinado", "empolgar", "emprego", "empurrar", "emulador", "encaixe", "encenado", "enchente", "encontro", "endeusar", "endossar", "enfaixar", "enfeite", "enfim", "engajado", "engenho", "englobar", "engomado", "engraxar", "enguia", "enjoar", "enlatar", "enquanto", "enraizar", "enrolado", "enrugar", "ensaio", "enseada", "ensino", "ensopado", "entanto", "enteado", "entidade", "entortar", "entrada", "entulho", "envergar", "enviado", "envolver", "enxame", "enxerto", "enxofre", "enxuto", "epiderme", "equipar", "ereto", "erguido", "errata", "erva", "ervilha", "esbanjar", "esbelto", "escama", "escola", "escrita", "escuta", "esfinge", "esfolar", "esfregar", "esfumado", "esgrima", "esmalte", "espanto", "espelho", "espiga", "esponja", "espreita", "espumar", "esquerda", "estaca", "esteira", "esticar", "estofado", "estrela", "estudo", "esvaziar", "etanol", "etiqueta", "euforia", "europeu", "evacuar", "evaporar", "evasivo", "eventual", "evidente", "evoluir", "exagero", "exalar", "examinar", "exato", "exausto", "excesso", "excitar", "exclamar", "executar", "exemplo", "exibir", "exigente", "exonerar", "expandir", "expelir", "expirar", "explanar", "exposto", "expresso", "expulsar", "externo", "extinto", "extrato", "fabricar", "fabuloso", "faceta", "facial", "fada", "fadiga", "faixa", "falar", "falta", "familiar", "fandango", "fanfarra", "fantoche", "fardado", "farelo", "farinha", "farofa", "farpa", "fartura", "fatia", "fator", "favorita", "faxina", "fazenda", "fechado", "feijoada", "feirante", "felino", "feminino", "fenda", "feno", "fera", "feriado", "ferrugem", "ferver", "festejar", "fetal", "feudal", "fiapo", "fibrose", "ficar", "ficheiro", "figurado", "fileira", "filho", "filme", "filtrar", "firmeza", "fisgada", "fissura", "fita", "fivela", "fixador", "fixo", "flacidez", "flamingo", "flanela", "flechada", "flora", "flutuar", "fluxo", "focal", "focinho", "fofocar", "fogo", "foguete", "foice", "folgado", "folheto", "forjar", "formiga", "forno", "forte", "fosco", "fossa", "fragata", "fralda", "frango", "frasco", "fraterno", "freira", "frente", "fretar", "frieza", "friso", "fritura", "fronha", "frustrar", "fruteira", "fugir", "fulano", "fuligem", "fundar", "fungo", "funil", "furador", "furioso", "futebol", "gabarito", "gabinete", "gado", "gaiato", "gaiola", "gaivota", "galega", "galho", "galinha", "galocha", "ganhar", "garagem", "garfo", "gargalo", "garimpo", "garoupa", "garrafa", "gasoduto", "gasto", "gata", "gatilho", "gaveta", "gazela", "gelado", "geleia", "gelo", "gemada", "gemer", "gemido", "generoso", "gengiva", "genial", "genoma", "genro", "geologia", "gerador", "germinar", "gesso", "gestor", "ginasta", "gincana", "gingado", "girafa", "girino", "glacial", "glicose", "global", "glorioso", "goela", "goiaba", "golfe", "golpear", "gordura", "gorjeta", "gorro", "gostoso", "goteira", "governar", "gracejo", "gradual", "grafite", "gralha", "grampo", "granada", "gratuito", "graveto", "graxa", "grego", "grelhar", "greve", "grilo", "grisalho", "gritaria", "grosso", "grotesco", "grudado", "grunhido", "gruta", "guache", "guarani", "guaxinim", "guerrear", "guiar", "guincho", "guisado", "gula", "guloso", "guru", "habitar", "harmonia", "haste", "haver", "hectare", "herdar", "heresia", "hesitar", "hiato", "hibernar", "hidratar", "hiena", "hino", "hipismo", "hipnose", "hipoteca", "hoje", "holofote", "homem", "honesto", "honrado", "hormonal", "hospedar", "humorado", "iate", "ideia", "idoso", "ignorado", "igreja", "iguana", "ileso", "ilha", "iludido", "iluminar", "ilustrar", "imagem", "imediato", "imenso", "imersivo", "iminente", "imitador", "imortal", "impacto", "impedir", "implante", "impor", "imprensa", "impune", "imunizar", "inalador", "inapto", "inativo", "incenso", "inchar", "incidir", "incluir", "incolor", "indeciso", "indireto", "indutor", "ineficaz", "inerente", "infantil", "infestar", "infinito", "inflamar", "informal", "infrator", "ingerir", "inibido", "inicial", "inimigo", "injetar", "inocente", "inodoro", "inovador", "inox", "inquieto", "inscrito", "inseto", "insistir", "inspetor", "instalar", "insulto", "intacto", "integral", "intimar", "intocado", "intriga", "invasor", "inverno", "invicto", "invocar", "iogurte", "iraniano", "ironizar", "irreal", "irritado", "isca", "isento", "isolado", "isqueiro", "italiano", "janeiro", "jangada", "janta", "jararaca", "jardim", "jarro", "jasmim", "jato", "javali", "jazida", "jejum", "joaninha", "joelhada", "jogador", "joia", "jornal", "jorrar", "jovem", "juba", "judeu", "judoca", "juiz", "julgador", "julho", "jurado", "jurista", "juro", "justa", "labareda", "laboral", "lacre", "lactante", "ladrilho", "lagarta", "lagoa", "laje", "lamber", "lamentar", "laminar", "lampejo", "lanche", "lapidar", "lapso", "laranja", "lareira", "largura", "lasanha", "lastro", "lateral", "latido", "lavanda", "lavoura", "lavrador", "laxante", "lazer", "lealdade", "lebre", "legado", "legendar", "legista", "leigo", "leiloar", "leitura", "lembrete", "leme", "lenhador", "lentilha", "leoa", "lesma", "leste", "letivo", "letreiro", "levar", "leveza", "levitar", "liberal", "libido", "liderar", "ligar", "ligeiro", "limitar", "limoeiro", "limpador", "linda", "linear", "linhagem", "liquidez", "listagem", "lisura", "litoral", "livro", "lixa", "lixeira", "locador", "locutor", "lojista", "lombo", "lona", "longe", "lontra", "lorde", "lotado", "loteria", "loucura", "lousa", "louvar", "luar", "lucidez", "lucro", "luneta", "lustre", "lutador", "luva", "macaco", "macete", "machado", "macio", "madeira", "madrinha", "magnata", "magreza", "maior", "mais", "malandro", "malha", "malote", "maluco", "mamilo", "mamoeiro", "mamute", "manada", "mancha", "mandato", "manequim", "manhoso", "manivela", "manobrar", "mansa", "manter", "manusear", "mapeado", "maquinar", "marcador", "maresia", "marfim", "margem", "marinho", "marmita", "maroto", "marquise", "marreco", "martelo", "marujo", "mascote", "masmorra", "massagem", "mastigar", "matagal", "materno", "matinal", "matutar", "maxilar", "medalha", "medida", "medusa", "megafone", "meiga", "melancia", "melhor", "membro", "memorial", "menino", "menos", "mensagem", "mental", "merecer", "mergulho", "mesada", "mesclar", "mesmo", "mesquita", "mestre", "metade", "meteoro", "metragem", "mexer", "mexicano", "micro", "migalha", "migrar", "milagre", "milenar", "milhar", "mimado", "minerar", "minhoca", "ministro", "minoria", "miolo", "mirante", "mirtilo", "misturar", "mocidade", "moderno", "modular", "moeda", "moer", "moinho", "moita", "moldura", "moleza", "molho", "molinete", "molusco", "montanha", "moqueca", "morango", "morcego", "mordomo", "morena", "mosaico", "mosquete", "mostarda", "motel", "motim", "moto", "motriz", "muda", "muito", "mulata", "mulher", "multar", "mundial", "munido", "muralha", "murcho", "muscular", "museu", "musical", "nacional", "nadador", "naja", "namoro", "narina", "narrado", "nascer", "nativa", "natureza", "navalha", "navegar", "navio", "neblina", "nebuloso", "negativa", "negociar", "negrito", "nervoso", "neta", "neural", "nevasca", "nevoeiro", "ninar", "ninho", "nitidez", "nivelar", "nobreza", "noite", "noiva", "nomear", "nominal", "nordeste", "nortear", "notar", "noticiar", "noturno", "novelo", "novilho", "novo", "nublado", "nudez", "numeral", "nupcial", "nutrir", "nuvem", "obcecado", "obedecer", "objetivo", "obrigado", "obscuro", "obstetra", "obter", "obturar", "ocidente", "ocioso", "ocorrer", "oculista", "ocupado", "ofegante", "ofensiva", "oferenda", "oficina", "ofuscado", "ogiva", "olaria", "oleoso", "olhar", "oliveira", "ombro", "omelete", "omisso", "omitir", "ondulado", "oneroso", "ontem", "opcional", "operador", "oponente", "oportuno", "oposto", "orar", "orbitar", "ordem", "ordinal", "orfanato", "orgasmo", "orgulho", "oriental", "origem", "oriundo", "orla", "ortodoxo", "orvalho", "oscilar", "ossada", "osso", "ostentar", "otimismo", "ousadia", "outono", "outubro", "ouvido", "ovelha", "ovular", "oxidar", "oxigenar", "pacato", "paciente", "pacote", "pactuar", "padaria", "padrinho", "pagar", "pagode", "painel", "pairar", "paisagem", "palavra", "palestra", "palheta", "palito", "palmada", "palpitar", "pancada", "panela", "panfleto", "panqueca", "pantanal", "papagaio", "papelada", "papiro", "parafina", "parcial", "pardal", "parede", "partida", "pasmo", "passado", "pastel", "patamar", "patente", "patinar", "patrono", "paulada", "pausar", "peculiar", "pedalar", "pedestre", "pediatra", "pedra", "pegada", "peitoral", "peixe", "pele", "pelicano", "penca", "pendurar", "peneira", "penhasco", "pensador", "pente", "perceber", "perfeito", "pergunta", "perito", "permitir", "perna", "perplexo", "persiana", "pertence", "peruca", "pescado", "pesquisa", "pessoa", "petiscar", "piada", "picado", "piedade", "pigmento", "pilastra", "pilhado", "pilotar", "pimenta", "pincel", "pinguim", "pinha", "pinote", "pintar", "pioneiro", "pipoca", "piquete", "piranha", "pires", "pirueta", "piscar", "pistola", "pitanga", "pivete", "planta", "plaqueta", "platina", "plebeu", "plumagem", "pluvial", "pneu", "poda", "poeira", "poetisa", "polegada", "policiar", "poluente", "polvilho", "pomar", "pomba", "ponderar", "pontaria", "populoso", "porta", "possuir", "postal", "pote", "poupar", "pouso", "povoar", "praia", "prancha", "prato", "praxe", "prece", "predador", "prefeito", "premiar", "prensar", "preparar", "presilha", "pretexto", "prevenir", "prezar", "primata", "princesa", "prisma", "privado", "processo", "produto", "profeta", "proibido", "projeto", "prometer", "propagar", "prosa", "protetor", "provador", "publicar", "pudim", "pular", "pulmonar", "pulseira", "punhal", "punir", "pupilo", "pureza", "puxador", "quadra", "quantia", "quarto", "quase", "quebrar", "queda", "queijo", "quente", "querido", "quimono", "quina", "quiosque", "rabanada", "rabisco", "rachar", "racionar", "radial", "raiar", "rainha", "raio", "raiva", "rajada", "ralado", "ramal", "ranger", "ranhura", "rapadura", "rapel", "rapidez", "raposa", "raquete", "raridade", "rasante", "rascunho", "rasgar", "raspador", "rasteira", "rasurar", "ratazana", "ratoeira", "realeza", "reanimar", "reaver", "rebaixar", "rebelde", "rebolar", "recado", "recente", "recheio", "recibo", "recordar", "recrutar", "recuar", "rede", "redimir", "redonda", "reduzida", "reenvio", "refinar", "refletir", "refogar", "refresco", "refugiar", "regalia", "regime", "regra", "reinado", "reitor", "rejeitar", "relativo", "remador", "remendo", "remorso", "renovado", "reparo", "repelir", "repleto", "repolho", "represa", "repudiar", "requerer", "resenha", "resfriar", "resgatar", "residir", "resolver", "respeito", "ressaca", "restante", "resumir", "retalho", "reter", "retirar", "retomada", "retratar", "revelar", "revisor", "revolta", "riacho", "rica", "rigidez", "rigoroso", "rimar", "ringue", "risada", "risco", "risonho", "robalo", "rochedo", "rodada", "rodeio", "rodovia", "roedor", "roleta", "romano", "roncar", "rosado", "roseira", "rosto", "rota", "roteiro", "rotina", "rotular", "rouco", "roupa", "roxo", "rubro", "rugido", "rugoso", "ruivo", "rumo", "rupestre", "russo", "sabor", "saciar", "sacola", "sacudir", "sadio", "safira", "saga", "sagrada", "saibro", "salada", "saleiro", "salgado", "saliva", "salpicar", "salsicha", "saltar", "salvador", "sambar", "samurai", "sanar", "sanfona", "sangue", "sanidade", "sapato", "sarda", "sargento", "sarjeta", "saturar", "saudade", "saxofone", "sazonal", "secar", "secular", "seda", "sedento", "sediado", "sedoso", "sedutor", "segmento", "segredo", "segundo", "seiva", "seleto", "selvagem", "semanal", "semente", "senador", "senhor", "sensual", "sentado", "separado", "sereia", "seringa", "serra", "servo", "setembro", "setor", "sigilo", "silhueta", "silicone", "simetria", "simpatia", "simular", "sinal", "sincero", "singular", "sinopse", "sintonia", "sirene", "siri", "situado", "soberano", "sobra", "socorro", "sogro", "soja", "solda", "soletrar", "solteiro", "sombrio", "sonata", "sondar", "sonegar", "sonhador", "sono", "soprano", "soquete", "sorrir", "sorteio", "sossego", "sotaque", "soterrar", "sovado", "sozinho", "suavizar", "subida", "submerso", "subsolo", "subtrair", "sucata", "sucesso", "suco", "sudeste", "sufixo", "sugador", "sugerir", "sujeito", "sulfato", "sumir", "suor", "superior", "suplicar", "suposto", "suprimir", "surdina", "surfista", "surpresa", "surreal", "surtir", "suspiro", "sustento", "tabela", "tablete", "tabuada", "tacho", "tagarela", "talher", "talo", "talvez", "tamanho", "tamborim", "tampa", "tangente", "tanto", "tapar", "tapioca", "tardio", "tarefa", "tarja", "tarraxa", "tatuagem", "taurino", "taxativo", "taxista", "teatral", "tecer", "tecido", "teclado", "tedioso", "teia", "teimar", "telefone", "telhado", "tempero", "tenente", "tensor", "tentar", "termal", "terno", "terreno", "tese", "tesoura", "testado", "teto", "textura", "texugo", "tiara", "tigela", "tijolo", "timbrar", "timidez", "tingido", "tinteiro", "tiragem", "titular", "toalha", "tocha", "tolerar", "tolice", "tomada", "tomilho", "tonel", "tontura", "topete", "tora", "torcido", "torneio", "torque", "torrada", "torto", "tostar", "touca", "toupeira", "toxina", "trabalho", "tracejar", "tradutor", "trafegar", "trajeto", "trama", "trancar", "trapo", "traseiro", "tratador", "travar", "treino", "tremer", "trepidar", "trevo", "triagem", "tribo", "triciclo", "tridente", "trilogia", "trindade", "triplo", "triturar", "triunfal", "trocar", "trombeta", "trova", "trunfo", "truque", "tubular", "tucano", "tudo", "tulipa", "tupi", "turbo", "turma", "turquesa", "tutelar", "tutorial", "uivar", "umbigo", "unha", "unidade", "uniforme", "urologia", "urso", "urtiga", "urubu", "usado", "usina", "usufruir", "vacina", "vadiar", "vagaroso", "vaidoso", "vala", "valente", "validade", "valores", "vantagem", "vaqueiro", "varanda", "vareta", "varrer", "vascular", "vasilha", "vassoura", "vazar", "vazio", "veado", "vedar", "vegetar", "veicular", "veleiro", "velhice", "veludo", "vencedor", "vendaval", "venerar", "ventre", "verbal", "verdade", "vereador", "vergonha", "vermelho", "verniz", "versar", "vertente", "vespa", "vestido", "vetorial", "viaduto", "viagem", "viajar", "viatura", "vibrador", "videira", "vidraria", "viela", "viga", "vigente", "vigiar", "vigorar", "vilarejo", "vinco", "vinheta", "vinil", "violeta", "virada", "virtude", "visitar", "visto", "vitral", "viveiro", "vizinho", "voador", "voar", "vogal", "volante", "voleibol", "voltagem", "volumoso", "vontade", "vulto", "vuvuzela", "xadrez", "xarope", "xeque", "xeretar", "xerife", "xingar", "zangado", "zarpar", "zebu", "zelador", "zombar", "zoologia", "zumbido"], tg = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"];
Object.defineProperty(it, "__esModule", { value: true });
const St = {};
it.wordlists = St;
let ke;
var gr = it._default = ke;
try {
  gr = it._default = ke = qb, St.czech = ke;
} catch {
}
try {
  gr = it._default = ke = Kb, St.chinese_simplified = ke;
} catch {
}
try {
  gr = it._default = ke = Wb, St.chinese_traditional = ke;
} catch {
}
try {
  gr = it._default = ke = Yb, St.korean = ke;
} catch {
}
try {
  gr = it._default = ke = Qb, St.french = ke;
} catch {
}
try {
  gr = it._default = ke = Zb, St.italian = ke;
} catch {
}
try {
  gr = it._default = ke = Xb, St.spanish = ke;
} catch {
}
try {
  gr = it._default = ke = Jb, St.japanese = ke, St.JA = ke;
} catch {
}
try {
  gr = it._default = ke = eg, St.portuguese = ke;
} catch {
}
try {
  gr = it._default = ke = tg, St.english = ke, St.EN = ke;
} catch {
}
Object.defineProperty(br, "__esModule", { value: true });
const rg = pr, Ph = Fe, Ch = Es, ng = za, Ji = it;
let yo = Ji._default;
const ad = "Invalid mnemonic", An = "Invalid entropy", ag = "Invalid mnemonic checksum", _h = `A wordlist is required but a default could not be found.
Please pass a 2048 word array explicitly.`;
function vo(e) {
  return (e || "").normalize("NFKD");
}
function jh(e, t, r) {
  for (; e.length < r; ) e = t + e;
  return e;
}
function Lh(e) {
  return parseInt(e, 2);
}
function Th(e) {
  return e.map((t) => jh(t.toString(2), "0", 8)).join("");
}
function Uh(e) {
  const r = e.length * 8 / 32, n = rg.sha256(Uint8Array.from(e));
  return Th(Array.from(n)).slice(0, r);
}
function Oh(e) {
  return "mnemonic" + (e || "");
}
function og(e, t) {
  const r = Uint8Array.from(Buffer.from(vo(e), "utf8")), n = Uint8Array.from(Buffer.from(Oh(vo(t)), "utf8")), a = Ch.pbkdf2(Ph.sha512, r, n, { c: 2048, dkLen: 64 });
  return Buffer.from(a);
}
var ig = br.mnemonicToSeedSync = og;
function sg(e, t) {
  const r = Uint8Array.from(Buffer.from(vo(e), "utf8")), n = Uint8Array.from(Buffer.from(Oh(vo(t)), "utf8"));
  return Ch.pbkdf2Async(Ph.sha512, r, n, { c: 2048, dkLen: 64 }).then((a) => Buffer.from(a));
}
br.mnemonicToSeed = sg;
function Rh(e, t) {
  if (t = t || yo, !t) throw new Error(_h);
  const r = vo(e).split(" ");
  if (r.length % 3 !== 0) throw new Error(ad);
  const n = r.map((h) => {
    const f = t.indexOf(h);
    if (f === -1) throw new Error(ad);
    return jh(f.toString(2), "0", 11);
  }).join(""), a = Math.floor(n.length / 33) * 32, o = n.slice(0, a), i = n.slice(a), s = o.match(/(.{1,8})/g).map(Lh);
  if (s.length < 16) throw new Error(An);
  if (s.length > 32) throw new Error(An);
  if (s.length % 4 !== 0) throw new Error(An);
  const l = Buffer.from(s);
  if (Uh(l) !== i) throw new Error(ag);
  return l.toString("hex");
}
br.mnemonicToEntropy = Rh;
function Fh(e, t) {
  if (Buffer.isBuffer(e) || (e = Buffer.from(e, "hex")), t = t || yo, !t) throw new Error(_h);
  if (e.length < 16) throw new TypeError(An);
  if (e.length > 32) throw new TypeError(An);
  if (e.length % 4 !== 0) throw new TypeError(An);
  const r = Th(Array.from(e)), n = Uh(e), i = (r + n).match(/(.{1,11})/g).map((s) => {
    const l = Lh(s);
    return t[l];
  });
  return t[0] === "\u3042\u3044\u3053\u304F\u3057\u3093" ? i.join("\u3000") : i.join(" ");
}
br.entropyToMnemonic = Fh;
function lg(e, t, r) {
  if (e = e || 128, e % 32 !== 0) throw new TypeError(An);
  return t = t || ((n) => Buffer.from(ng.randomBytes(n))), Fh(t(e / 8), r);
}
var cg = br.generateMnemonic = lg;
function ug(e, t) {
  try {
    Rh(e, t);
  } catch {
    return false;
  }
  return true;
}
var dg = br.validateMnemonic = ug;
function fg(e) {
  const t = Ji.wordlists[e];
  if (t) yo = t;
  else throw new Error('Could not find wordlist for language "' + e + '"');
}
br.setDefaultWordlist = fg;
function pg() {
  if (!yo) throw new Error("No Default Wordlist set");
  return Object.keys(Ji.wordlists).filter((e) => e === "JA" || e === "EN" ? false : Ji.wordlists[e].every((t, r) => t === yo[r]))[0];
}
br.getDefaultWordlist = pg;
var hg = it;
br.wordlists = hg.wordlists;
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var xg = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Co = (e, t) => {
  const r = Zt.forwardRef(({ color: n = "currentColor", size: a = 24, strokeWidth: o = 2, absoluteStrokeWidth: i, className: s = "", children: l, ...d }, h) => Zt.createElement("svg", { ref: h, ...xg, width: a, height: a, stroke: n, strokeWidth: i ? Number(o) * 24 / Number(a) : o, className: ["lucide", `lucide-${mg(e)}`, s].join(" "), ...d }, [...t.map(([f, x]) => Zt.createElement(f, x)), ...Array.isArray(l) ? l : [l]]));
  return r.displayName = `${e}`, r;
};
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const od = Co("CheckCircle", [["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bg = Co("Copy", [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gg = Co("Info", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const id = Co("RefreshCw", [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yg = Co("Sparkles", [["path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z", key: "17u4zn" }], ["path", { d: "M5 3v4", key: "bklmnn" }], ["path", { d: "M19 17v4", key: "iiml17" }], ["path", { d: "M3 5h4", key: "nem4j1" }], ["path", { d: "M17 19h4", key: "lbex7p" }]]), Hh = "6.16.0";
async function zu(e) {
  const t = Object.keys(e);
  return (await Promise.all(t.map((n) => Promise.resolve(e[n])))).reduce((n, a, o) => (n[t[o]] = a, n), {});
}
function wt(e, t, r) {
  for (let n in t) {
    let a = t[n];
    Object.defineProperty(e, n, { enumerable: true, value: a, writable: false });
  }
}
function ta(e, t) {
  if (e == null) return "null";
  if (t == null && (t = /* @__PURE__ */ new Set()), typeof e == "object") {
    if (t.has(e)) return "[Circular]";
    t.add(e);
  }
  if (Array.isArray(e)) return "[ " + e.map((r) => ta(r, t)).join(", ") + " ]";
  if (e instanceof Uint8Array) {
    const r = "0123456789abcdef";
    let n = "0x";
    for (let a = 0; a < e.length; a++) n += r[e[a] >> 4], n += r[e[a] & 15];
    return n;
  }
  if (typeof e == "object" && typeof e.toJSON == "function") return ta(e.toJSON(), t);
  switch (typeof e) {
    case "boolean":
    case "number":
    case "symbol":
      return e.toString();
    case "bigint":
      return BigInt(e).toString();
    case "string":
      return JSON.stringify(e);
    case "object": {
      const r = Object.keys(e);
      return r.sort(), "{ " + r.map((n) => `${ta(n, t)}: ${ta(e[n], t)}`).join(", ") + " }";
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function vg(e, t, r) {
  let n = e;
  {
    const o = [];
    if (r) {
      if ("message" in r || "code" in r || "name" in r) throw new Error(`value will overwrite populated values: ${ta(r)}`);
      for (const i in r) {
        if (i === "shortMessage") continue;
        const s = r[i];
        o.push(i + "=" + ta(s));
      }
    }
    o.push(`code=${t}`), o.push(`version=${Hh}`), o.length && (e += " (" + o.join(", ") + ")");
  }
  let a;
  switch (t) {
    case "INVALID_ARGUMENT":
      a = new TypeError(e);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      a = new RangeError(e);
      break;
    default:
      a = new Error(e);
  }
  return wt(a, { code: t }), r && Object.assign(a, r), a.shortMessage == null && wt(a, { shortMessage: n }), a;
}
function ie(e, t, r, n) {
  if (!e) throw vg(t, r, n);
}
function P(e, t, r, n) {
  ie(e, t, "INVALID_ARGUMENT", { argument: r, value: n });
}
const wg = ["NFD", "NFC", "NFKD", "NFKC"].reduce((e, t) => {
  try {
    if ("test".normalize(t) !== "test") throw new Error("bad");
    if (t === "NFD" && "\xE9".normalize("NFD") !== "e\u0301") throw new Error("broken");
    e.push(t);
  } catch {
  }
  return e;
}, []);
function $h(e) {
  ie(wg.indexOf(e) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", { operation: "String.prototype.normalize", info: { form: e } });
}
function Ss(e, t, r) {
  if (r == null && (r = ""), e !== t) {
    let n = r, a = "new";
    r && (n += ".", a += " " + r), ie(false, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", { operation: a });
  }
}
function Mh(e, t, r) {
  if (e instanceof Uint8Array) return r ? new Uint8Array(e) : e;
  if (typeof e == "string" && e.length % 2 === 0 && e.match(/^0x[0-9a-f]*$/i)) {
    const n = new Uint8Array((e.length - 2) / 2);
    let a = 2;
    for (let o = 0; o < n.length; o++) n[o] = parseInt(e.substring(a, a + 2), 16), a += 2;
    return n;
  }
  P(false, "invalid BytesLike value", t || "value", e);
}
function K(e, t) {
  return Mh(e, t, false);
}
function Mn(e, t) {
  return Mh(e, t, true);
}
function mr(e, t) {
  return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || typeof t == "number" && e.length !== 2 + 2 * t || t === true && e.length % 2 !== 0);
}
function zs(e) {
  return mr(e, true) || e instanceof Uint8Array;
}
const sd = "0123456789abcdef";
function D(e) {
  const t = K(e);
  let r = "0x";
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    r += sd[(a & 240) >> 4] + sd[a & 15];
  }
  return r;
}
function Pe(e) {
  return "0x" + e.map((t) => D(t).substring(2)).join("");
}
function Ja(e) {
  return mr(e, true) ? (e.length - 2) / 2 : K(e).length;
}
function Iu(e, t, r) {
  const n = K(e);
  return r > n.length && ie(false, "cannot slice beyond data bounds", "BUFFER_OVERRUN", { buffer: n, length: n.length, offset: r }), D(n.slice(t, r));
}
function kg(e, t, r) {
  const n = K(e);
  ie(t >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", { buffer: new Uint8Array(n), length: t, offset: t + 1 });
  const a = new Uint8Array(t);
  return a.fill(0), a.set(n, t - n.length), D(a);
}
function cn(e, t) {
  return kg(e, t);
}
const Is = BigInt(0), yn = BigInt(1), ra = 9007199254740991;
function Eg(e, t) {
  let r = he(e, "value");
  const n = BigInt(kt(t, "width")), a = yn << n - yn;
  if (r < Is) {
    r = -r, ie(r <= a, "too low", "NUMERIC_FAULT", { operation: "toTwos", fault: "overflow", value: e });
    const o = (yn << n) - yn;
    return (~r & o) + yn;
  } else ie(r < a, "too high", "NUMERIC_FAULT", { operation: "toTwos", fault: "overflow", value: e });
  return r;
}
function Sg(e, t) {
  const r = Au(e, "value"), n = BigInt(kt(t, "bits"));
  return r & (yn << n) - yn;
}
function he(e, t) {
  switch (typeof e) {
    case "bigint":
      return e;
    case "number":
      return P(Number.isInteger(e), "underflow", t || "value", e), P(e >= -ra && e <= ra, "overflow", t || "value", e), BigInt(e);
    case "string":
      try {
        if (e === "") throw new Error("empty string");
        return e[0] === "-" && e[1] !== "-" ? -BigInt(e.substring(1)) : BigInt(e);
      } catch (r) {
        P(false, `invalid BigNumberish string: ${r.message}`, t || "value", e);
      }
  }
  P(false, "invalid BigNumberish value", t || "value", e);
}
function Au(e, t) {
  const r = he(e, t);
  return ie(r >= Is, "unsigned value cannot be negative", "NUMERIC_FAULT", { fault: "overflow", operation: "getUint", value: e }), r;
}
const ld = "0123456789abcdef";
function Dh(e) {
  if (e instanceof Uint8Array) {
    let t = "0x0";
    for (const r of e) t += ld[r >> 4], t += ld[r & 15];
    return BigInt(t);
  }
  return he(e);
}
function kt(e, t) {
  switch (typeof e) {
    case "bigint":
      return P(e >= -ra && e <= ra, "overflow", t || "value", e), Number(e);
    case "number":
      return P(Number.isInteger(e), "underflow", t || "value", e), P(e >= -ra && e <= ra, "overflow", t || "value", e), e;
    case "string":
      try {
        if (e === "") throw new Error("empty string");
        return kt(BigInt(e), t);
      } catch (r) {
        P(false, `invalid numeric string: ${r.message}`, t || "value", e);
      }
  }
  P(false, "invalid numeric value", t || "value", e);
}
function ba(e, t) {
  const r = Au(e, "value");
  let n = r.toString(16);
  {
    const a = kt(t, "width");
    if (a === 0 && r === Is) return "0x";
    for (ie(a * 2 >= n.length, `value exceeds width (${a} bytes)`, "NUMERIC_FAULT", { operation: "toBeHex", fault: "overflow", value: e }); n.length < a * 2; ) n = "0" + n;
  }
  return "0x" + n;
}
function Ne(e, t) {
  const r = Au(e, "value");
  if (r === Is) return new Uint8Array(0);
  let n = r.toString(16);
  n.length % 2 && (n = "0" + n);
  const a = new Uint8Array(n.length / 2);
  for (let o = 0; o < a.length; o++) {
    const i = o * 2;
    a[o] = parseInt(n.substring(i, i + 2), 16);
  }
  return a;
}
function zg(e) {
  let t = D(zs(e) ? e : Ne(e)).substring(2);
  for (; t.startsWith("0"); ) t = t.substring(1);
  return t === "" && (t = "0"), "0x" + t;
}
const es = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
let ii = null;
function Ig(e) {
  if (ii == null) {
    ii = {};
    for (let r = 0; r < es.length; r++) ii[es[r]] = BigInt(r);
  }
  const t = ii[e];
  return P(t != null, "invalid base58 value", "letter", e), t;
}
const Ag = BigInt(0), wc = BigInt(58);
function Bg(e) {
  const t = K(e);
  let r = Dh(t), n = "";
  for (; r; ) n = es[Number(r % wc)] + n, r /= wc;
  for (let a = 0; a < t.length && !t[a]; a++) n = es[0] + n;
  return n;
}
function Ng(e) {
  let t = Ag;
  for (let r = 0; r < e.length; r++) t *= wc, t += Ig(e[r]);
  return t;
}
function Bn(e, t) {
  P(typeof e == "string", "invalid string value", "str", e), t != null && ($h(t), e = e.normalize(t));
  let r = [];
  for (let n = 0; n < e.length; n++) {
    const a = e.charCodeAt(n);
    if (a < 128) r.push(a);
    else if (a < 2048) r.push(a >> 6 | 192), r.push(a & 63 | 128);
    else if ((a & 64512) == 55296) {
      n++;
      const o = e.charCodeAt(n);
      P(n < e.length && (o & 64512) === 56320, "invalid surrogate pair", "str", e);
      const i = 65536 + ((a & 1023) << 10) + (o & 1023);
      r.push(i >> 18 | 240), r.push(i >> 12 & 63 | 128), r.push(i >> 6 & 63 | 128), r.push(i & 63 | 128);
    } else r.push(a >> 12 | 224), r.push(a >> 6 & 63 | 128), r.push(a & 63 | 128);
  }
  return new Uint8Array(r);
}
function Pg(e) {
  let t = e.toString(16);
  for (; t.length < 2; ) t = "0" + t;
  return "0x" + t;
}
function cd(e, t, r) {
  let n = 0;
  for (let a = 0; a < r; a++) n = n * 256 + e[t + a];
  return n;
}
function ud(e, t, r, n) {
  const a = [];
  for (; r < t + 1 + n; ) {
    const o = Vh(e, r);
    a.push(o.result), r += o.consumed, ie(r <= t + 1 + n, "child data too short", "BUFFER_OVERRUN", { buffer: e, length: n, offset: t });
  }
  return { consumed: 1 + n, result: a };
}
function Vh(e, t) {
  ie(e.length !== 0, "data too short", "BUFFER_OVERRUN", { buffer: e, length: 0, offset: 1 });
  const r = (n) => {
    ie(n <= e.length, "data short segment too short", "BUFFER_OVERRUN", { buffer: e, length: e.length, offset: n });
  };
  if (e[t] >= 248) {
    const n = e[t] - 247;
    r(t + 1 + n);
    const a = cd(e, t + 1, n);
    return r(t + 1 + n + a), ud(e, t, t + 1 + n, n + a);
  } else if (e[t] >= 192) {
    const n = e[t] - 192;
    return r(t + 1 + n), ud(e, t, t + 1, n);
  } else if (e[t] >= 184) {
    const n = e[t] - 183;
    r(t + 1 + n);
    const a = cd(e, t + 1, n);
    r(t + 1 + n + a);
    const o = D(e.slice(t + 1 + n, t + 1 + n + a));
    return { consumed: 1 + n + a, result: o };
  } else if (e[t] >= 128) {
    const n = e[t] - 128;
    r(t + 1 + n);
    const a = D(e.slice(t + 1, t + 1 + n));
    return { consumed: 1 + n, result: a };
  }
  return { consumed: 1, result: Pg(e[t]) };
}
function _o(e) {
  const t = K(e, "data"), r = Vh(t, 0);
  return P(r.consumed === t.length, "unexpected junk after rlp payload", "data", e), r.result;
}
function dd(e) {
  const t = [];
  for (; e; ) t.unshift(e & 255), e >>= 8;
  return t;
}
function Gh(e) {
  if (Array.isArray(e)) {
    let n = [];
    if (e.forEach(function(o) {
      n = n.concat(Gh(o));
    }), n.length <= 55) return n.unshift(192 + n.length), n;
    const a = dd(n.length);
    return a.unshift(247 + a.length), a.concat(n);
  }
  const t = Array.prototype.slice.call(K(e, "object"));
  if (t.length === 1 && t[0] <= 127) return t;
  if (t.length <= 55) return t.unshift(128 + t.length), t;
  const r = dd(t.length);
  return r.unshift(183 + r.length), r.concat(t);
}
const fd = "0123456789abcdef";
function Ir(e) {
  let t = "0x";
  for (const r of Gh(e)) t += fd[r >> 4], t += fd[r & 15];
  return t;
}
function Cg(e) {
  const t = K(e, "randomBytes");
  t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128;
  const r = D(t);
  return [r.substring(2, 10), r.substring(10, 14), r.substring(14, 18), r.substring(18, 22), r.substring(22, 34)].join("-");
}
function bt(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
function Bu(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length)) throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function qh(e) {
  if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
  bt(e.outputLen), bt(e.blockLen);
}
function ga(e, t = true) {
  if (e.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function Kh(e, t) {
  Bu(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _g = (e) => e instanceof Uint8Array, zi = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), Ii = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), ir = (e, t) => e << 32 - t | e >>> t, jg = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!jg) throw new Error("Non little-endian hardware is not supported");
const Lg = async () => {
};
async function pd(e, t, r) {
  let n = Date.now();
  for (let a = 0; a < e; a++) {
    r(a);
    const o = Date.now() - n;
    o >= 0 && o < t || (await Lg(), n += o);
  }
}
function Tg(e) {
  if (typeof e != "string") throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function ya(e) {
  if (typeof e == "string" && (e = Tg(e)), !_g(e)) throw new Error(`expected Uint8Array, got ${typeof e}`);
  return e;
}
let Nu = class {
  clone() {
    return this._cloneInto();
  }
};
const Ug = {}.toString;
function Wh(e, t) {
  if (t !== void 0 && Ug.call(t) !== "[object Object]") throw new Error("Options should be object or undefined");
  return Object.assign(e, t);
}
function As(e) {
  const t = (n) => e().update(ya(n)).digest(), r = e();
  return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t;
}
let Yh = class extends Nu {
  constructor(t, r) {
    super(), this.finished = false, this.destroyed = false, qh(t);
    const n = ya(r);
    if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const a = this.blockLen, o = new Uint8Array(a);
    o.set(n.length > a ? t.create().update(n).digest() : n);
    for (let i = 0; i < o.length; i++) o[i] ^= 54;
    this.iHash.update(o), this.oHash = t.create();
    for (let i = 0; i < o.length; i++) o[i] ^= 106;
    this.oHash.update(o), o.fill(0);
  }
  update(t) {
    return ga(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    ga(this), Bu(t, this.outputLen), this.finished = true, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: r, iHash: n, finished: a, destroyed: o, blockLen: i, outputLen: s } = this;
    return t = t, t.finished = a, t.destroyed = o, t.blockLen = i, t.outputLen = s, t.oHash = r._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
  }
};
const Pu = (e, t, r) => new Yh(e, t).update(r).digest();
Pu.create = (e, t) => new Yh(e, t);
function Og(e, t, r, n) {
  qh(e);
  const a = Wh({ dkLen: 32, asyncTick: 10 }, n), { c: o, dkLen: i, asyncTick: s } = a;
  if (bt(o), bt(i), bt(s), o < 1) throw new Error("PBKDF2: iterations (c) should be >= 1");
  const l = ya(t), d = ya(r), h = new Uint8Array(i), f = Pu.create(e, l), x = f._cloneInto().update(d);
  return { c: o, dkLen: i, asyncTick: s, DK: h, PRF: f, PRFSalt: x };
}
function Rg(e, t, r, n, a) {
  return e.destroy(), t.destroy(), n && n.destroy(), a.fill(0), r;
}
function Cu(e, t, r, n) {
  const { c: a, dkLen: o, DK: i, PRF: s, PRFSalt: l } = Og(e, t, r, n);
  let d;
  const h = new Uint8Array(4), f = Ii(h), x = new Uint8Array(s.outputLen);
  for (let w = 1, E = 0; E < o; w++, E += s.outputLen) {
    const v = i.subarray(E, E + s.outputLen);
    f.setInt32(0, w, false), (d = l._cloneInto(d)).update(h).digestInto(x), v.set(x.subarray(0, v.length));
    for (let A = 1; A < a; A++) {
      s._cloneInto(d).update(x).digestInto(x);
      for (let m = 0; m < v.length; m++) v[m] ^= x[m];
    }
  }
  return Rg(s, l, i, d, x);
}
function Fg(e, t, r, n) {
  if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, r, n);
  const a = BigInt(32), o = BigInt(4294967295), i = Number(r >> a & o), s = Number(r & o), l = n ? 4 : 0, d = n ? 0 : 4;
  e.setUint32(t + l, i, n), e.setUint32(t + d, s, n);
}
let _u = class extends Nu {
  constructor(t, r, n, a) {
    super(), this.blockLen = t, this.outputLen = r, this.padOffset = n, this.isLE = a, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(t), this.view = Ii(this.buffer);
  }
  update(t) {
    ga(this);
    const { view: r, buffer: n, blockLen: a } = this;
    t = ya(t);
    const o = t.length;
    for (let i = 0; i < o; ) {
      const s = Math.min(a - this.pos, o - i);
      if (s === a) {
        const l = Ii(t);
        for (; a <= o - i; i += a) this.process(l, i);
        continue;
      }
      n.set(t.subarray(i, i + s), this.pos), this.pos += s, i += s, this.pos === a && (this.process(r, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    ga(this), Kh(t, this), this.finished = true;
    const { buffer: r, view: n, blockLen: a, isLE: o } = this;
    let { pos: i } = this;
    r[i++] = 128, this.buffer.subarray(i).fill(0), this.padOffset > a - i && (this.process(n, 0), i = 0);
    for (let f = i; f < a; f++) r[f] = 0;
    Fg(n, a - 8, BigInt(this.length * 8), o), this.process(n, 0);
    const s = Ii(t), l = this.outputLen;
    if (l % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const d = l / 4, h = this.get();
    if (d > h.length) throw new Error("_sha2: outputLen bigger than state");
    for (let f = 0; f < d; f++) s.setUint32(4 * f, h[f], o);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: a, finished: o, destroyed: i, pos: s } = this;
    return t.length = a, t.pos = s, t.finished = o, t.destroyed = i, a % r && t.buffer.set(n), t;
  }
};
const Hg = (e, t, r) => e & t ^ ~e & r, $g = (e, t, r) => e & t ^ e & r ^ t & r, Mg = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), Rr = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), Fr = new Uint32Array(64);
let Dg = class extends _u {
  constructor() {
    super(64, 32, 8, false), this.A = Rr[0] | 0, this.B = Rr[1] | 0, this.C = Rr[2] | 0, this.D = Rr[3] | 0, this.E = Rr[4] | 0, this.F = Rr[5] | 0, this.G = Rr[6] | 0, this.H = Rr[7] | 0;
  }
  get() {
    const { A: t, B: r, C: n, D: a, E: o, F: i, G: s, H: l } = this;
    return [t, r, n, a, o, i, s, l];
  }
  set(t, r, n, a, o, i, s, l) {
    this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = a | 0, this.E = o | 0, this.F = i | 0, this.G = s | 0, this.H = l | 0;
  }
  process(t, r) {
    for (let f = 0; f < 16; f++, r += 4) Fr[f] = t.getUint32(r, false);
    for (let f = 16; f < 64; f++) {
      const x = Fr[f - 15], w = Fr[f - 2], E = ir(x, 7) ^ ir(x, 18) ^ x >>> 3, v = ir(w, 17) ^ ir(w, 19) ^ w >>> 10;
      Fr[f] = v + Fr[f - 7] + E + Fr[f - 16] | 0;
    }
    let { A: n, B: a, C: o, D: i, E: s, F: l, G: d, H: h } = this;
    for (let f = 0; f < 64; f++) {
      const x = ir(s, 6) ^ ir(s, 11) ^ ir(s, 25), w = h + x + Hg(s, l, d) + Mg[f] + Fr[f] | 0, v = (ir(n, 2) ^ ir(n, 13) ^ ir(n, 22)) + $g(n, a, o) | 0;
      h = d, d = l, l = s, s = i + w | 0, i = o, o = a, a = n, n = w + v | 0;
    }
    n = n + this.A | 0, a = a + this.B | 0, o = o + this.C | 0, i = i + this.D | 0, s = s + this.E | 0, l = l + this.F | 0, d = d + this.G | 0, h = h + this.H | 0, this.set(n, a, o, i, s, l, d, h);
  }
  roundClean() {
    Fr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
const jo = As(() => new Dg()), si = BigInt(2 ** 32 - 1), kc = BigInt(32);
function Qh(e, t = false) {
  return t ? { h: Number(e & si), l: Number(e >> kc & si) } : { h: Number(e >> kc & si) | 0, l: Number(e & si) | 0 };
}
function Zh(e, t = false) {
  let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let a = 0; a < e.length; a++) {
    const { h: o, l: i } = Qh(e[a], t);
    [r[a], n[a]] = [o, i];
  }
  return [r, n];
}
const Vg = (e, t) => BigInt(e >>> 0) << kc | BigInt(t >>> 0), Gg = (e, t, r) => e >>> r, qg = (e, t, r) => e << 32 - r | t >>> r, Kg = (e, t, r) => e >>> r | t << 32 - r, Wg = (e, t, r) => e << 32 - r | t >>> r, Yg = (e, t, r) => e << 64 - r | t >>> r - 32, Qg = (e, t, r) => e >>> r - 32 | t << 64 - r, Zg = (e, t) => t, Xg = (e, t) => e, Xh = (e, t, r) => e << r | t >>> 32 - r, Jh = (e, t, r) => t << r | e >>> 32 - r, ex = (e, t, r) => t << r - 32 | e >>> 64 - r, tx = (e, t, r) => e << r - 32 | t >>> 64 - r;
function Jg(e, t, r, n) {
  const a = (t >>> 0) + (n >>> 0);
  return { h: e + r + (a / 2 ** 32 | 0) | 0, l: a | 0 };
}
const e2 = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0), t2 = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0, r2 = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0), n2 = (e, t, r, n, a) => t + r + n + a + (e / 2 ** 32 | 0) | 0, a2 = (e, t, r, n, a) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (a >>> 0), o2 = (e, t, r, n, a, o) => t + r + n + a + o + (e / 2 ** 32 | 0) | 0, J = { fromBig: Qh, split: Zh, toBig: Vg, shrSH: Gg, shrSL: qg, rotrSH: Kg, rotrSL: Wg, rotrBH: Yg, rotrBL: Qg, rotr32H: Zg, rotr32L: Xg, rotlSH: Xh, rotlSL: Jh, rotlBH: ex, rotlBL: tx, add: Jg, add3L: e2, add3H: t2, add4L: r2, add4H: n2, add5H: o2, add5L: a2 }, [i2, s2] = J.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((e) => BigInt(e))), Hr = new Uint32Array(80), $r = new Uint32Array(80);
class l2 extends _u {
  constructor() {
    super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: t, Al: r, Bh: n, Bl: a, Ch: o, Cl: i, Dh: s, Dl: l, Eh: d, El: h, Fh: f, Fl: x, Gh: w, Gl: E, Hh: v, Hl: A } = this;
    return [t, r, n, a, o, i, s, l, d, h, f, x, w, E, v, A];
  }
  set(t, r, n, a, o, i, s, l, d, h, f, x, w, E, v, A) {
    this.Ah = t | 0, this.Al = r | 0, this.Bh = n | 0, this.Bl = a | 0, this.Ch = o | 0, this.Cl = i | 0, this.Dh = s | 0, this.Dl = l | 0, this.Eh = d | 0, this.El = h | 0, this.Fh = f | 0, this.Fl = x | 0, this.Gh = w | 0, this.Gl = E | 0, this.Hh = v | 0, this.Hl = A | 0;
  }
  process(t, r) {
    for (let g = 0; g < 16; g++, r += 4) Hr[g] = t.getUint32(r), $r[g] = t.getUint32(r += 4);
    for (let g = 16; g < 80; g++) {
      const z = Hr[g - 15] | 0, I = $r[g - 15] | 0, N = J.rotrSH(z, I, 1) ^ J.rotrSH(z, I, 8) ^ J.shrSH(z, I, 7), j = J.rotrSL(z, I, 1) ^ J.rotrSL(z, I, 8) ^ J.shrSL(z, I, 7), C = Hr[g - 2] | 0, V = $r[g - 2] | 0, F = J.rotrSH(C, V, 19) ^ J.rotrBH(C, V, 61) ^ J.shrSH(C, V, 6), q = J.rotrSL(C, V, 19) ^ J.rotrBL(C, V, 61) ^ J.shrSL(C, V, 6), Z = J.add4L(j, q, $r[g - 7], $r[g - 16]), ee = J.add4H(Z, N, F, Hr[g - 7], Hr[g - 16]);
      Hr[g] = ee | 0, $r[g] = Z | 0;
    }
    let { Ah: n, Al: a, Bh: o, Bl: i, Ch: s, Cl: l, Dh: d, Dl: h, Eh: f, El: x, Fh: w, Fl: E, Gh: v, Gl: A, Hh: m, Hl: b } = this;
    for (let g = 0; g < 80; g++) {
      const z = J.rotrSH(f, x, 14) ^ J.rotrSH(f, x, 18) ^ J.rotrBH(f, x, 41), I = J.rotrSL(f, x, 14) ^ J.rotrSL(f, x, 18) ^ J.rotrBL(f, x, 41), N = f & w ^ ~f & v, j = x & E ^ ~x & A, C = J.add5L(b, I, j, s2[g], $r[g]), V = J.add5H(C, m, z, N, i2[g], Hr[g]), F = C | 0, q = J.rotrSH(n, a, 28) ^ J.rotrBH(n, a, 34) ^ J.rotrBH(n, a, 39), Z = J.rotrSL(n, a, 28) ^ J.rotrBL(n, a, 34) ^ J.rotrBL(n, a, 39), ee = n & o ^ n & s ^ o & s, ue = a & i ^ a & l ^ i & l;
      m = v | 0, b = A | 0, v = w | 0, A = E | 0, w = f | 0, E = x | 0, { h: f, l: x } = J.add(d | 0, h | 0, V | 0, F | 0), d = s | 0, h = l | 0, s = o | 0, l = i | 0, o = n | 0, i = a | 0;
      const U = J.add3L(F, Z, ue);
      n = J.add3H(U, V, q, ee), a = U | 0;
    }
    ({ h: n, l: a } = J.add(this.Ah | 0, this.Al | 0, n | 0, a | 0)), { h: o, l: i } = J.add(this.Bh | 0, this.Bl | 0, o | 0, i | 0), { h: s, l } = J.add(this.Ch | 0, this.Cl | 0, s | 0, l | 0), { h: d, l: h } = J.add(this.Dh | 0, this.Dl | 0, d | 0, h | 0), { h: f, l: x } = J.add(this.Eh | 0, this.El | 0, f | 0, x | 0), { h: w, l: E } = J.add(this.Fh | 0, this.Fl | 0, w | 0, E | 0), { h: v, l: A } = J.add(this.Gh | 0, this.Gl | 0, v | 0, A | 0), { h: m, l: b } = J.add(this.Hh | 0, this.Hl | 0, m | 0, b | 0), this.set(n, a, o, i, s, l, d, h, f, x, w, E, v, A, m, b);
  }
  roundClean() {
    Hr.fill(0), $r.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const ju = As(() => new l2());
function c2() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("unable to locate global object");
}
const hd = c2(), xd = hd.crypto || hd.msCrypto;
function u2(e) {
  switch (e) {
    case "sha256":
      return jo.create();
    case "sha512":
      return ju.create();
  }
  P(false, "invalid hashing algorithm name", "algorithm", e);
}
function d2(e, t) {
  const r = { sha256: jo, sha512: ju }[e];
  return P(r != null, "invalid hmac algorithm", "algorithm", e), Pu.create(r, t);
}
function f2(e, t, r, n, a) {
  const o = { sha256: jo, sha512: ju }[a];
  return P(o != null, "invalid pbkdf2 algorithm", "algorithm", a), Cu(o, e, t, { c: r, dkLen: n });
}
function p2(e) {
  ie(xd != null, "platform does not support secure random numbers", "UNSUPPORTED_OPERATION", { operation: "randomBytes" }), P(Number.isInteger(e) && e > 0 && e <= 1024, "invalid length", "length", e);
  const t = new Uint8Array(e);
  return xd.getRandomValues(t), t;
}
let rx = false;
const nx = function(e, t, r) {
  return d2(e, t).update(r).digest();
};
let ax = nx;
function Ia(e, t, r) {
  const n = K(t, "key"), a = K(r, "data");
  return D(ax(e, n, a));
}
Ia._ = nx;
Ia.lock = function() {
  rx = true;
};
Ia.register = function(e) {
  if (rx) throw new Error("computeHmac is locked");
  ax = e;
};
Object.freeze(Ia);
const [ox, ix, sx] = [[], [], []], h2 = BigInt(0), Oa = BigInt(1), x2 = BigInt(2), m2 = BigInt(7), b2 = BigInt(256), g2 = BigInt(113);
for (let e = 0, t = Oa, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], ox.push(2 * (5 * n + r)), ix.push((e + 1) * (e + 2) / 2 % 64);
  let a = h2;
  for (let o = 0; o < 7; o++) t = (t << Oa ^ (t >> m2) * g2) % b2, t & x2 && (a ^= Oa << (Oa << BigInt(o)) - Oa);
  sx.push(a);
}
const [y2, v2] = Zh(sx, true), md = (e, t, r) => r > 32 ? ex(e, t, r) : Xh(e, t, r), bd = (e, t, r) => r > 32 ? tx(e, t, r) : Jh(e, t, r);
function w2(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let i = 0; i < 10; i++) r[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
    for (let i = 0; i < 10; i += 2) {
      const s = (i + 8) % 10, l = (i + 2) % 10, d = r[l], h = r[l + 1], f = md(d, h, 1) ^ r[s], x = bd(d, h, 1) ^ r[s + 1];
      for (let w = 0; w < 50; w += 10) e[i + w] ^= f, e[i + w + 1] ^= x;
    }
    let a = e[2], o = e[3];
    for (let i = 0; i < 24; i++) {
      const s = ix[i], l = md(a, o, s), d = bd(a, o, s), h = ox[i];
      a = e[h], o = e[h + 1], e[h] = l, e[h + 1] = d;
    }
    for (let i = 0; i < 50; i += 10) {
      for (let s = 0; s < 10; s++) r[s] = e[i + s];
      for (let s = 0; s < 10; s++) e[i + s] ^= ~r[(s + 2) % 10] & r[(s + 4) % 10];
    }
    e[0] ^= y2[n], e[1] ^= v2[n];
  }
  r.fill(0);
}
class Lu extends Nu {
  constructor(t, r, n, a = false, o = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = a, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, bt(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = zi(this.state);
  }
  keccak() {
    w2(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    ga(this);
    const { blockLen: r, state: n } = this;
    t = ya(t);
    const a = t.length;
    for (let o = 0; o < a; ) {
      const i = Math.min(r - this.pos, a - o);
      for (let s = 0; s < i; s++) n[this.pos++] ^= t[o++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const { state: t, suffix: r, pos: n, blockLen: a } = this;
    t[n] ^= r, r & 128 && n === a - 1 && this.keccak(), t[a - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    ga(this, false), Bu(t), this.finish();
    const r = this.state, { blockLen: n } = this;
    for (let a = 0, o = t.length; a < o; ) {
      this.posOut >= n && this.keccak();
      const i = Math.min(n - this.posOut, o - a);
      t.set(r.subarray(this.posOut, this.posOut + i), a), this.posOut += i, a += i;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return bt(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (Kh(t, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: r, suffix: n, outputLen: a, rounds: o, enableXOF: i } = this;
    return t || (t = new Lu(r, n, a, i, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = n, t.outputLen = a, t.enableXOF = i, t.destroyed = this.destroyed, t;
  }
}
const k2 = (e, t, r) => As(() => new Lu(t, e, r)), E2 = k2(1, 136, 256 / 8);
let lx = false;
const cx = function(e) {
  return E2(e);
};
let ux = cx;
function $e(e) {
  const t = K(e, "data");
  return D(ux(t));
}
$e._ = cx;
$e.lock = function() {
  lx = true;
};
$e.register = function(e) {
  if (lx) throw new TypeError("keccak256 is locked");
  ux = e;
};
Object.freeze($e);
const S2 = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]), dx = Uint8Array.from({ length: 16 }, (e, t) => t), z2 = dx.map((e) => (9 * e + 5) % 16);
let Tu = [dx], Uu = [z2];
for (let e = 0; e < 4; e++) for (let t of [Tu, Uu]) t.push(t[e].map((r) => S2[r]));
const fx = [[11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8], [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7], [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9], [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6], [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]].map((e) => new Uint8Array(e)), I2 = Tu.map((e, t) => e.map((r) => fx[t][r])), A2 = Uu.map((e, t) => e.map((r) => fx[t][r])), B2 = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]), N2 = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]), li = (e, t) => e << t | e >>> 32 - t;
function gd(e, t, r, n) {
  return e === 0 ? t ^ r ^ n : e === 1 ? t & r | ~t & n : e === 2 ? (t | ~r) ^ n : e === 3 ? t & n | r & ~n : t ^ (r | ~n);
}
const ci = new Uint32Array(16);
class P2 extends _u {
  constructor() {
    super(64, 20, 8, true), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
  }
  get() {
    const { h0: t, h1: r, h2: n, h3: a, h4: o } = this;
    return [t, r, n, a, o];
  }
  set(t, r, n, a, o) {
    this.h0 = t | 0, this.h1 = r | 0, this.h2 = n | 0, this.h3 = a | 0, this.h4 = o | 0;
  }
  process(t, r) {
    for (let w = 0; w < 16; w++, r += 4) ci[w] = t.getUint32(r, true);
    let n = this.h0 | 0, a = n, o = this.h1 | 0, i = o, s = this.h2 | 0, l = s, d = this.h3 | 0, h = d, f = this.h4 | 0, x = f;
    for (let w = 0; w < 5; w++) {
      const E = 4 - w, v = B2[w], A = N2[w], m = Tu[w], b = Uu[w], g = I2[w], z = A2[w];
      for (let I = 0; I < 16; I++) {
        const N = li(n + gd(w, o, s, d) + ci[m[I]] + v, g[I]) + f | 0;
        n = f, f = d, d = li(s, 10) | 0, s = o, o = N;
      }
      for (let I = 0; I < 16; I++) {
        const N = li(a + gd(E, i, l, h) + ci[b[I]] + A, z[I]) + x | 0;
        a = x, x = h, h = li(l, 10) | 0, l = i, i = N;
      }
    }
    this.set(this.h1 + s + h | 0, this.h2 + d + x | 0, this.h3 + f + a | 0, this.h4 + n + i | 0, this.h0 + o + l | 0);
  }
  roundClean() {
    ci.fill(0);
  }
  destroy() {
    this.destroyed = true, this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
  }
}
const C2 = As(() => new P2());
let px = false;
const hx = function(e) {
  return C2(e);
};
let xx = hx;
function Aa(e) {
  const t = K(e, "data");
  return D(xx(t));
}
Aa._ = hx;
Aa.lock = function() {
  px = true;
};
Aa.register = function(e) {
  if (px) throw new TypeError("ripemd160 is locked");
  xx = e;
};
Object.freeze(Aa);
let mx = false;
const bx = function(e, t, r, n, a) {
  return f2(e, t, r, n, a);
};
let gx = bx;
function Lo(e, t, r, n, a) {
  const o = K(e, "password"), i = K(t, "salt");
  return D(gx(o, i, r, n, a));
}
Lo._ = bx;
Lo.lock = function() {
  mx = true;
};
Lo.register = function(e) {
  if (mx) throw new Error("pbkdf2 is locked");
  gx = e;
};
Object.freeze(Lo);
let yx = false;
const vx = function(e) {
  return new Uint8Array(p2(e));
};
let wx = vx;
function Ar(e) {
  return wx(e);
}
Ar._ = vx;
Ar.lock = function() {
  yx = true;
};
Ar.register = function(e) {
  if (yx) throw new Error("randomBytes is locked");
  wx = e;
};
Object.freeze(Ar);
const le = (e, t) => e << t | e >>> 32 - t;
function yd(e, t, r, n, a, o) {
  let i = e[t++] ^ r[n++], s = e[t++] ^ r[n++], l = e[t++] ^ r[n++], d = e[t++] ^ r[n++], h = e[t++] ^ r[n++], f = e[t++] ^ r[n++], x = e[t++] ^ r[n++], w = e[t++] ^ r[n++], E = e[t++] ^ r[n++], v = e[t++] ^ r[n++], A = e[t++] ^ r[n++], m = e[t++] ^ r[n++], b = e[t++] ^ r[n++], g = e[t++] ^ r[n++], z = e[t++] ^ r[n++], I = e[t++] ^ r[n++], N = i, j = s, C = l, V = d, F = h, q = f, Z = x, ee = w, ue = E, U = v, H = A, W = m, T = b, k = g, _ = z, R = I;
  for (let M = 0; M < 8; M += 2) F ^= le(N + T | 0, 7), ue ^= le(F + N | 0, 9), T ^= le(ue + F | 0, 13), N ^= le(T + ue | 0, 18), U ^= le(q + j | 0, 7), k ^= le(U + q | 0, 9), j ^= le(k + U | 0, 13), q ^= le(j + k | 0, 18), _ ^= le(H + Z | 0, 7), C ^= le(_ + H | 0, 9), Z ^= le(C + _ | 0, 13), H ^= le(Z + C | 0, 18), V ^= le(R + W | 0, 7), ee ^= le(V + R | 0, 9), W ^= le(ee + V | 0, 13), R ^= le(W + ee | 0, 18), j ^= le(N + V | 0, 7), C ^= le(j + N | 0, 9), V ^= le(C + j | 0, 13), N ^= le(V + C | 0, 18), Z ^= le(q + F | 0, 7), ee ^= le(Z + q | 0, 9), F ^= le(ee + Z | 0, 13), q ^= le(F + ee | 0, 18), W ^= le(H + U | 0, 7), ue ^= le(W + H | 0, 9), U ^= le(ue + W | 0, 13), H ^= le(U + ue | 0, 18), T ^= le(R + _ | 0, 7), k ^= le(T + R | 0, 9), _ ^= le(k + T | 0, 13), R ^= le(_ + k | 0, 18);
  a[o++] = i + N | 0, a[o++] = s + j | 0, a[o++] = l + C | 0, a[o++] = d + V | 0, a[o++] = h + F | 0, a[o++] = f + q | 0, a[o++] = x + Z | 0, a[o++] = w + ee | 0, a[o++] = E + ue | 0, a[o++] = v + U | 0, a[o++] = A + H | 0, a[o++] = m + W | 0, a[o++] = b + T | 0, a[o++] = g + k | 0, a[o++] = z + _ | 0, a[o++] = I + R | 0;
}
function ca(e, t, r, n, a) {
  let o = n + 0, i = n + 16 * a;
  for (let s = 0; s < 16; s++) r[i + s] = e[t + (2 * a - 1) * 16 + s];
  for (let s = 0; s < a; s++, o += 16, t += 16) yd(r, i, e, t, r, o), s > 0 && (i += 16), yd(r, o, e, t += 16, r, i);
}
function kx(e, t, r) {
  const n = Wh({ dkLen: 32, asyncTick: 10, maxmem: 1073742848 }, r), { N: a, r: o, p: i, dkLen: s, asyncTick: l, maxmem: d, onProgress: h } = n;
  if (bt(a), bt(o), bt(i), bt(s), bt(l), bt(d), h !== void 0 && typeof h != "function") throw new Error("progressCb should be function");
  const f = 128 * o, x = f / 4;
  if (a <= 1 || a & a - 1 || a >= 2 ** (f / 8) || a > 2 ** 32) throw new Error("Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32");
  if (i < 0 || i > (2 ** 32 - 1) * 32 / f) throw new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
  if (s < 0 || s > (2 ** 32 - 1) * 32) throw new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
  const w = f * (a + i);
  if (w > d) throw new Error(`Scrypt: parameters too large, ${w} (128 * r * (N + p)) > ${d} (maxmem)`);
  const E = Cu(jo, e, t, { c: 1, dkLen: f * i }), v = zi(E), A = zi(new Uint8Array(f * a)), m = zi(new Uint8Array(f));
  let b = () => {
  };
  if (h) {
    const g = 2 * a * i, z = Math.max(Math.floor(g / 1e4), 1);
    let I = 0;
    b = () => {
      I++, h && (!(I % z) || I === g) && h(I / g);
    };
  }
  return { N: a, r: o, p: i, dkLen: s, blockSize32: x, V: A, B32: v, B: E, tmp: m, blockMixCb: b, asyncTick: l };
}
function Ex(e, t, r, n, a) {
  const o = Cu(jo, e, r, { c: 1, dkLen: t });
  return r.fill(0), n.fill(0), a.fill(0), o;
}
function _2(e, t, r) {
  const { N: n, r: a, p: o, dkLen: i, blockSize32: s, V: l, B32: d, B: h, tmp: f, blockMixCb: x } = kx(e, t, r);
  for (let w = 0; w < o; w++) {
    const E = s * w;
    for (let v = 0; v < s; v++) l[v] = d[E + v];
    for (let v = 0, A = 0; v < n - 1; v++) ca(l, A, l, A += s, a), x();
    ca(l, (n - 1) * s, d, E, a), x();
    for (let v = 0; v < n; v++) {
      const A = d[E + s - 16] % n;
      for (let m = 0; m < s; m++) f[m] = d[E + m] ^ l[A * s + m];
      ca(f, 0, d, E, a), x();
    }
  }
  return Ex(e, i, h, l, f);
}
async function j2(e, t, r) {
  const { N: n, r: a, p: o, dkLen: i, blockSize32: s, V: l, B32: d, B: h, tmp: f, blockMixCb: x, asyncTick: w } = kx(e, t, r);
  for (let E = 0; E < o; E++) {
    const v = s * E;
    for (let m = 0; m < s; m++) l[m] = d[v + m];
    let A = 0;
    await pd(n - 1, w, () => {
      ca(l, A, l, A += s, a), x();
    }), ca(l, (n - 1) * s, d, v, a), x(), await pd(n, w, () => {
      const m = d[v + s - 16] % n;
      for (let b = 0; b < s; b++) f[b] = d[v + b] ^ l[m * s + b];
      ca(f, 0, d, v, a), x();
    });
  }
  return Ex(e, i, h, l, f);
}
let Sx = false, zx = false;
const Ix = async function(e, t, r, n, a, o, i) {
  return await j2(e, t, { N: r, r: n, p: a, dkLen: o, onProgress: i });
}, Ax = function(e, t, r, n, a, o) {
  return _2(e, t, { N: r, r: n, p: a, dkLen: o });
};
let Bx = Ix, Nx = Ax;
async function To(e, t, r, n, a, o, i) {
  const s = K(e, "passwd"), l = K(t, "salt");
  return D(await Bx(s, l, r, n, a, o, i));
}
To._ = Ix;
To.lock = function() {
  zx = true;
};
To.register = function(e) {
  if (zx) throw new Error("scrypt is locked");
  Bx = e;
};
Object.freeze(To);
function Uo(e, t, r, n, a, o) {
  const i = K(e, "passwd"), s = K(t, "salt");
  return D(Nx(i, s, r, n, a, o));
}
Uo._ = Ax;
Uo.lock = function() {
  Sx = true;
};
Uo.register = function(e) {
  if (Sx) throw new Error("scryptSync is locked");
  Nx = e;
};
Object.freeze(Uo);
const Px = function(e) {
  return u2("sha256").update(e).digest();
};
let Cx = Px, _x = false;
function $t(e) {
  const t = K(e, "data");
  return D(Cx(t));
}
$t._ = Px;
$t.lock = function() {
  _x = true;
};
$t.register = function(e) {
  if (_x) throw new Error("sha256 is locked");
  Cx = e;
};
Object.freeze($t);
Object.freeze($t);
function vd(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
function jx(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length)) throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function L2(e) {
  if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
  vd(e.outputLen), vd(e.blockLen);
}
function ts(e, t = true) {
  if (e.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function T2(e, t) {
  jx(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const cl = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Lx = (e) => e instanceof Uint8Array, ul = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), sr = (e, t) => e << 32 - t | e >>> t, U2 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!U2) throw new Error("Non little-endian hardware is not supported");
function O2(e) {
  if (typeof e != "string") throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function Ou(e) {
  if (typeof e == "string" && (e = O2(e)), !Lx(e)) throw new Error(`expected Uint8Array, got ${typeof e}`);
  return e;
}
function R2(...e) {
  const t = new Uint8Array(e.reduce((n, a) => n + a.length, 0));
  let r = 0;
  return e.forEach((n) => {
    if (!Lx(n)) throw new Error("Uint8Array expected");
    t.set(n, r), r += n.length;
  }), t;
}
class Tx {
  clone() {
    return this._cloneInto();
  }
}
function F2(e) {
  const t = (n) => e().update(Ou(n)).digest(), r = e();
  return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t;
}
function H2(e = 32) {
  if (cl && typeof cl.getRandomValues == "function") return cl.getRandomValues(new Uint8Array(e));
  throw new Error("crypto.getRandomValues must be defined");
}
function $2(e, t, r, n) {
  if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, r, n);
  const a = BigInt(32), o = BigInt(4294967295), i = Number(r >> a & o), s = Number(r & o), l = n ? 4 : 0, d = n ? 0 : 4;
  e.setUint32(t + l, i, n), e.setUint32(t + d, s, n);
}
class M2 extends Tx {
  constructor(t, r, n, a) {
    super(), this.blockLen = t, this.outputLen = r, this.padOffset = n, this.isLE = a, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(t), this.view = ul(this.buffer);
  }
  update(t) {
    ts(this);
    const { view: r, buffer: n, blockLen: a } = this;
    t = Ou(t);
    const o = t.length;
    for (let i = 0; i < o; ) {
      const s = Math.min(a - this.pos, o - i);
      if (s === a) {
        const l = ul(t);
        for (; a <= o - i; i += a) this.process(l, i);
        continue;
      }
      n.set(t.subarray(i, i + s), this.pos), this.pos += s, i += s, this.pos === a && (this.process(r, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    ts(this), T2(t, this), this.finished = true;
    const { buffer: r, view: n, blockLen: a, isLE: o } = this;
    let { pos: i } = this;
    r[i++] = 128, this.buffer.subarray(i).fill(0), this.padOffset > a - i && (this.process(n, 0), i = 0);
    for (let f = i; f < a; f++) r[f] = 0;
    $2(n, a - 8, BigInt(this.length * 8), o), this.process(n, 0);
    const s = ul(t), l = this.outputLen;
    if (l % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const d = l / 4, h = this.get();
    if (d > h.length) throw new Error("_sha2: outputLen bigger than state");
    for (let f = 0; f < d; f++) s.setUint32(4 * f, h[f], o);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: a, finished: o, destroyed: i, pos: s } = this;
    return t.length = a, t.pos = s, t.finished = o, t.destroyed = i, a % r && t.buffer.set(n), t;
  }
}
const D2 = (e, t, r) => e & t ^ ~e & r, V2 = (e, t, r) => e & t ^ e & r ^ t & r, G2 = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), Mr = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), Dr = new Uint32Array(64);
class q2 extends M2 {
  constructor() {
    super(64, 32, 8, false), this.A = Mr[0] | 0, this.B = Mr[1] | 0, this.C = Mr[2] | 0, this.D = Mr[3] | 0, this.E = Mr[4] | 0, this.F = Mr[5] | 0, this.G = Mr[6] | 0, this.H = Mr[7] | 0;
  }
  get() {
    const { A: t, B: r, C: n, D: a, E: o, F: i, G: s, H: l } = this;
    return [t, r, n, a, o, i, s, l];
  }
  set(t, r, n, a, o, i, s, l) {
    this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = a | 0, this.E = o | 0, this.F = i | 0, this.G = s | 0, this.H = l | 0;
  }
  process(t, r) {
    for (let f = 0; f < 16; f++, r += 4) Dr[f] = t.getUint32(r, false);
    for (let f = 16; f < 64; f++) {
      const x = Dr[f - 15], w = Dr[f - 2], E = sr(x, 7) ^ sr(x, 18) ^ x >>> 3, v = sr(w, 17) ^ sr(w, 19) ^ w >>> 10;
      Dr[f] = v + Dr[f - 7] + E + Dr[f - 16] | 0;
    }
    let { A: n, B: a, C: o, D: i, E: s, F: l, G: d, H: h } = this;
    for (let f = 0; f < 64; f++) {
      const x = sr(s, 6) ^ sr(s, 11) ^ sr(s, 25), w = h + x + D2(s, l, d) + G2[f] + Dr[f] | 0, v = (sr(n, 2) ^ sr(n, 13) ^ sr(n, 22)) + V2(n, a, o) | 0;
      h = d, d = l, l = s, s = i + w | 0, i = o, o = a, a = n, n = w + v | 0;
    }
    n = n + this.A | 0, a = a + this.B | 0, o = o + this.C | 0, i = i + this.D | 0, s = s + this.E | 0, l = l + this.F | 0, d = d + this.G | 0, h = h + this.H | 0, this.set(n, a, o, i, s, l, d, h);
  }
  roundClean() {
    Dr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const K2 = F2(() => new q2());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const W2 = BigInt(1), Y2 = BigInt(2), Bs = (e) => e instanceof Uint8Array, Q2 = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function va(e) {
  if (!Bs(e)) throw new Error("Uint8Array expected");
  let t = "";
  for (let r = 0; r < e.length; r++) t += Q2[e[r]];
  return t;
}
function Ru(e) {
  if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
  return BigInt(e === "" ? "0" : `0x${e}`);
}
function wo(e) {
  if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
  const t = e.length;
  if (t % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const r = new Uint8Array(t / 2);
  for (let n = 0; n < r.length; n++) {
    const a = n * 2, o = e.slice(a, a + 2), i = Number.parseInt(o, 16);
    if (Number.isNaN(i) || i < 0) throw new Error("Invalid byte sequence");
    r[n] = i;
  }
  return r;
}
function Nn(e) {
  return Ru(va(e));
}
function Fu(e) {
  if (!Bs(e)) throw new Error("Uint8Array expected");
  return Ru(va(Uint8Array.from(e).reverse()));
}
function wa(e, t) {
  return wo(e.toString(16).padStart(t * 2, "0"));
}
function Hu(e, t) {
  return wa(e, t).reverse();
}
function qt(e, t, r) {
  let n;
  if (typeof t == "string") try {
    n = wo(t);
  } catch (o) {
    throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${o}`);
  }
  else if (Bs(t)) n = Uint8Array.from(t);
  else throw new Error(`${e} must be hex string or Uint8Array`);
  const a = n.length;
  if (typeof r == "number" && a !== r) throw new Error(`${e} expected ${r} bytes, got ${a}`);
  return n;
}
function ko(...e) {
  const t = new Uint8Array(e.reduce((n, a) => n + a.length, 0));
  let r = 0;
  return e.forEach((n) => {
    if (!Bs(n)) throw new Error("Uint8Array expected");
    t.set(n, r), r += n.length;
  }), t;
}
const $u = (e) => (Y2 << BigInt(e - 1)) - W2, dl = (e) => new Uint8Array(e), wd = (e) => Uint8Array.from(e);
function Ux(e, t, r) {
  if (typeof e != "number" || e < 2) throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2) throw new Error("qByteLen must be a number");
  if (typeof r != "function") throw new Error("hmacFn must be a function");
  let n = dl(e), a = dl(e), o = 0;
  const i = () => {
    n.fill(1), a.fill(0), o = 0;
  }, s = (...f) => r(a, n, ...f), l = (f = dl()) => {
    a = s(wd([0]), f), n = s(), f.length !== 0 && (a = s(wd([1]), f), n = s());
  }, d = () => {
    if (o++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let f = 0;
    const x = [];
    for (; f < t; ) {
      n = s();
      const w = n.slice();
      x.push(w), f += n.length;
    }
    return ko(...x);
  };
  return (f, x) => {
    i(), l(f);
    let w;
    for (; !(w = x(d())); ) l();
    return i(), w;
  };
}
const Z2 = { bigint: (e) => typeof e == "bigint", function: (e) => typeof e == "function", boolean: (e) => typeof e == "boolean", string: (e) => typeof e == "string", stringOrUint8Array: (e) => typeof e == "string" || e instanceof Uint8Array, isSafeInteger: (e) => Number.isSafeInteger(e), array: (e) => Array.isArray(e), field: (e, t) => t.Fp.isValid(e), hash: (e) => typeof e == "function" && Number.isSafeInteger(e.outputLen) };
function Oo(e, t, r = {}) {
  const n = (a, o, i) => {
    const s = Z2[o];
    if (typeof s != "function") throw new Error(`Invalid validator "${o}", expected function`);
    const l = e[a];
    if (!(i && l === void 0) && !s(l, e)) throw new Error(`Invalid param ${String(a)}=${l} (${typeof l}), expected ${o}`);
  };
  for (const [a, o] of Object.entries(t)) n(a, o, false);
  for (const [a, o] of Object.entries(r)) n(a, o, true);
  return e;
}
const X2 = Object.freeze(Object.defineProperty({ __proto__: null, bitMask: $u, bytesToHex: va, bytesToNumberBE: Nn, bytesToNumberLE: Fu, concatBytes: ko, createHmacDrbg: Ux, ensureBytes: qt, hexToBytes: wo, hexToNumber: Ru, numberToBytesBE: wa, numberToBytesLE: Hu, validateObject: Oo }, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Me = BigInt(0), Be = BigInt(1), vn = BigInt(2), J2 = BigInt(3), Ec = BigInt(4), kd = BigInt(5), Ed = BigInt(8);
BigInt(9);
BigInt(16);
function st(e, t) {
  const r = e % t;
  return r >= Me ? r : t + r;
}
function ey(e, t, r) {
  if (r <= Me || t < Me) throw new Error("Expected power/modulo > 0");
  if (r === Be) return Me;
  let n = Be;
  for (; t > Me; ) t & Be && (n = n * e % r), e = e * e % r, t >>= Be;
  return n;
}
function At(e, t, r) {
  let n = e;
  for (; t-- > Me; ) n *= n, n %= r;
  return n;
}
function Sc(e, t) {
  if (e === Me || t <= Me) throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
  let r = st(e, t), n = t, a = Me, o = Be;
  for (; r !== Me; ) {
    const s = n / r, l = n % r, d = a - o * s;
    n = r, r = l, a = o, o = d;
  }
  if (n !== Be) throw new Error("invert: does not exist");
  return st(a, t);
}
function ty(e) {
  const t = (e - Be) / vn;
  let r, n, a;
  for (r = e - Be, n = 0; r % vn === Me; r /= vn, n++) ;
  for (a = vn; a < e && ey(a, t, e) !== e - Be; a++) ;
  if (n === 1) {
    const i = (e + Be) / Ec;
    return function(l, d) {
      const h = l.pow(d, i);
      if (!l.eql(l.sqr(h), d)) throw new Error("Cannot find square root");
      return h;
    };
  }
  const o = (r + Be) / vn;
  return function(s, l) {
    if (s.pow(l, t) === s.neg(s.ONE)) throw new Error("Cannot find square root");
    let d = n, h = s.pow(s.mul(s.ONE, a), r), f = s.pow(l, o), x = s.pow(l, r);
    for (; !s.eql(x, s.ONE); ) {
      if (s.eql(x, s.ZERO)) return s.ZERO;
      let w = 1;
      for (let v = s.sqr(x); w < d && !s.eql(v, s.ONE); w++) v = s.sqr(v);
      const E = s.pow(h, Be << BigInt(d - w - 1));
      h = s.sqr(E), f = s.mul(f, E), x = s.mul(x, h), d = w;
    }
    return f;
  };
}
function ry(e) {
  if (e % Ec === J2) {
    const t = (e + Be) / Ec;
    return function(n, a) {
      const o = n.pow(a, t);
      if (!n.eql(n.sqr(o), a)) throw new Error("Cannot find square root");
      return o;
    };
  }
  if (e % Ed === kd) {
    const t = (e - kd) / Ed;
    return function(n, a) {
      const o = n.mul(a, vn), i = n.pow(o, t), s = n.mul(a, i), l = n.mul(n.mul(s, vn), i), d = n.mul(s, n.sub(l, n.ONE));
      if (!n.eql(n.sqr(d), a)) throw new Error("Cannot find square root");
      return d;
    };
  }
  return ty(e);
}
const ny = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function ay(e) {
  const t = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, r = ny.reduce((n, a) => (n[a] = "function", n), t);
  return Oo(e, r);
}
function oy(e, t, r) {
  if (r < Me) throw new Error("Expected power > 0");
  if (r === Me) return e.ONE;
  if (r === Be) return t;
  let n = e.ONE, a = t;
  for (; r > Me; ) r & Be && (n = e.mul(n, a)), a = e.sqr(a), r >>= Be;
  return n;
}
function iy(e, t) {
  const r = new Array(t.length), n = t.reduce((o, i, s) => e.is0(i) ? o : (r[s] = o, e.mul(o, i)), e.ONE), a = e.inv(n);
  return t.reduceRight((o, i, s) => e.is0(i) ? o : (r[s] = e.mul(o, r[s]), e.mul(o, i)), a), r;
}
function Ox(e, t) {
  const r = t !== void 0 ? t : e.toString(2).length, n = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: n };
}
function sy(e, t, r = false, n = {}) {
  if (e <= Me) throw new Error(`Expected Field ORDER > 0, got ${e}`);
  const { nBitLength: a, nByteLength: o } = Ox(e, t);
  if (o > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
  const i = ry(e), s = Object.freeze({ ORDER: e, BITS: a, BYTES: o, MASK: $u(a), ZERO: Me, ONE: Be, create: (l) => st(l, e), isValid: (l) => {
    if (typeof l != "bigint") throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);
    return Me <= l && l < e;
  }, is0: (l) => l === Me, isOdd: (l) => (l & Be) === Be, neg: (l) => st(-l, e), eql: (l, d) => l === d, sqr: (l) => st(l * l, e), add: (l, d) => st(l + d, e), sub: (l, d) => st(l - d, e), mul: (l, d) => st(l * d, e), pow: (l, d) => oy(s, l, d), div: (l, d) => st(l * Sc(d, e), e), sqrN: (l) => l * l, addN: (l, d) => l + d, subN: (l, d) => l - d, mulN: (l, d) => l * d, inv: (l) => Sc(l, e), sqrt: n.sqrt || ((l) => i(s, l)), invertBatch: (l) => iy(s, l), cmov: (l, d, h) => h ? d : l, toBytes: (l) => r ? Hu(l, o) : wa(l, o), fromBytes: (l) => {
    if (l.length !== o) throw new Error(`Fp.fromBytes: expected ${o}, got ${l.length}`);
    return r ? Fu(l) : Nn(l);
  } });
  return Object.freeze(s);
}
function Rx(e) {
  if (typeof e != "bigint") throw new Error("field order must be bigint");
  const t = e.toString(2).length;
  return Math.ceil(t / 8);
}
function Fx(e) {
  const t = Rx(e);
  return t + Math.ceil(t / 2);
}
function ly(e, t, r = false) {
  const n = e.length, a = Rx(t), o = Fx(t);
  if (n < 16 || n < o || n > 1024) throw new Error(`expected ${o}-1024 bytes of input, got ${n}`);
  const i = r ? Nn(e) : Fu(e), s = st(i, t - Be) + Be;
  return r ? Hu(s, a) : wa(s, a);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const cy = BigInt(0), fl = BigInt(1);
function uy(e, t) {
  const r = (a, o) => {
    const i = o.negate();
    return a ? i : o;
  }, n = (a) => {
    const o = Math.ceil(t / a) + 1, i = 2 ** (a - 1);
    return { windows: o, windowSize: i };
  };
  return { constTimeNegate: r, unsafeLadder(a, o) {
    let i = e.ZERO, s = a;
    for (; o > cy; ) o & fl && (i = i.add(s)), s = s.double(), o >>= fl;
    return i;
  }, precomputeWindow(a, o) {
    const { windows: i, windowSize: s } = n(o), l = [];
    let d = a, h = d;
    for (let f = 0; f < i; f++) {
      h = d, l.push(h);
      for (let x = 1; x < s; x++) h = h.add(d), l.push(h);
      d = h.double();
    }
    return l;
  }, wNAF(a, o, i) {
    const { windows: s, windowSize: l } = n(a);
    let d = e.ZERO, h = e.BASE;
    const f = BigInt(2 ** a - 1), x = 2 ** a, w = BigInt(a);
    for (let E = 0; E < s; E++) {
      const v = E * l;
      let A = Number(i & f);
      i >>= w, A > l && (A -= x, i += fl);
      const m = v, b = v + Math.abs(A) - 1, g = E % 2 !== 0, z = A < 0;
      A === 0 ? h = h.add(r(g, o[m])) : d = d.add(r(z, o[b]));
    }
    return { p: d, f: h };
  }, wNAFCached(a, o, i, s) {
    const l = a._WINDOW_SIZE || 1;
    let d = o.get(a);
    return d || (d = this.precomputeWindow(a, l), l !== 1 && o.set(a, s(d))), this.wNAF(l, d, i);
  } };
}
function Hx(e) {
  return ay(e.Fp), Oo(e, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...Ox(e.n, e.nBitLength), ...e, p: e.Fp.ORDER });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function dy(e) {
  const t = Hx(e);
  Oo(t, { a: "field", b: "field" }, { allowedPrivateKeyLengths: "array", wrapPrivateKey: "boolean", isTorsionFree: "function", clearCofactor: "function", allowInfinityPoint: "boolean", fromBytes: "function", toBytes: "function" });
  const { endo: r, Fp: n, a } = t;
  if (r) {
    if (!n.eql(a, n.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof r != "object" || typeof r.beta != "bigint" || typeof r.splitScalar != "function") throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...t });
}
const { bytesToNumberBE: fy, hexToBytes: py } = X2, Sn = { Err: class extends Error {
  constructor(t = "") {
    super(t);
  }
}, _parseInt(e) {
  const { Err: t } = Sn;
  if (e.length < 2 || e[0] !== 2) throw new t("Invalid signature integer tag");
  const r = e[1], n = e.subarray(2, r + 2);
  if (!r || n.length !== r) throw new t("Invalid signature integer: wrong length");
  if (n[0] & 128) throw new t("Invalid signature integer: negative");
  if (n[0] === 0 && !(n[1] & 128)) throw new t("Invalid signature integer: unnecessary leading zero");
  return { d: fy(n), l: e.subarray(r + 2) };
}, toSig(e) {
  const { Err: t } = Sn, r = typeof e == "string" ? py(e) : e;
  if (!(r instanceof Uint8Array)) throw new Error("ui8a expected");
  let n = r.length;
  if (n < 2 || r[0] != 48) throw new t("Invalid signature tag");
  if (r[1] !== n - 2) throw new t("Invalid signature: incorrect length");
  const { d: a, l: o } = Sn._parseInt(r.subarray(2)), { d: i, l: s } = Sn._parseInt(o);
  if (s.length) throw new t("Invalid signature: left bytes after parsing");
  return { r: a, s: i };
}, hexFromSig(e) {
  const t = (d) => Number.parseInt(d[0], 16) & 8 ? "00" + d : d, r = (d) => {
    const h = d.toString(16);
    return h.length & 1 ? `0${h}` : h;
  }, n = t(r(e.s)), a = t(r(e.r)), o = n.length / 2, i = a.length / 2, s = r(o), l = r(i);
  return `30${r(i + o + 4)}02${l}${a}02${s}${n}`;
} }, kr = BigInt(0), jt = BigInt(1);
BigInt(2);
const Sd = BigInt(3);
BigInt(4);
function hy(e) {
  const t = dy(e), { Fp: r } = t, n = t.toBytes || ((E, v, A) => {
    const m = v.toAffine();
    return ko(Uint8Array.from([4]), r.toBytes(m.x), r.toBytes(m.y));
  }), a = t.fromBytes || ((E) => {
    const v = E.subarray(1), A = r.fromBytes(v.subarray(0, r.BYTES)), m = r.fromBytes(v.subarray(r.BYTES, 2 * r.BYTES));
    return { x: A, y: m };
  });
  function o(E) {
    const { a: v, b: A } = t, m = r.sqr(E), b = r.mul(m, E);
    return r.add(r.add(b, r.mul(E, v)), A);
  }
  if (!r.eql(r.sqr(t.Gy), o(t.Gx))) throw new Error("bad generator point: equation left != right");
  function i(E) {
    return typeof E == "bigint" && kr < E && E < t.n;
  }
  function s(E) {
    if (!i(E)) throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function l(E) {
    const { allowedPrivateKeyLengths: v, nByteLength: A, wrapPrivateKey: m, n: b } = t;
    if (v && typeof E != "bigint") {
      if (E instanceof Uint8Array && (E = va(E)), typeof E != "string" || !v.includes(E.length)) throw new Error("Invalid key");
      E = E.padStart(A * 2, "0");
    }
    let g;
    try {
      g = typeof E == "bigint" ? E : Nn(qt("private key", E, A));
    } catch {
      throw new Error(`private key must be ${A} bytes, hex or bigint, not ${typeof E}`);
    }
    return m && (g = st(g, b)), s(g), g;
  }
  const d = /* @__PURE__ */ new Map();
  function h(E) {
    if (!(E instanceof f)) throw new Error("ProjectivePoint expected");
  }
  class f {
    constructor(v, A, m) {
      if (this.px = v, this.py = A, this.pz = m, v == null || !r.isValid(v)) throw new Error("x required");
      if (A == null || !r.isValid(A)) throw new Error("y required");
      if (m == null || !r.isValid(m)) throw new Error("z required");
    }
    static fromAffine(v) {
      const { x: A, y: m } = v || {};
      if (!v || !r.isValid(A) || !r.isValid(m)) throw new Error("invalid affine point");
      if (v instanceof f) throw new Error("projective point not allowed");
      const b = (g) => r.eql(g, r.ZERO);
      return b(A) && b(m) ? f.ZERO : new f(A, m, r.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(v) {
      const A = r.invertBatch(v.map((m) => m.pz));
      return v.map((m, b) => m.toAffine(A[b])).map(f.fromAffine);
    }
    static fromHex(v) {
      const A = f.fromAffine(a(qt("pointHex", v)));
      return A.assertValidity(), A;
    }
    static fromPrivateKey(v) {
      return f.BASE.multiply(l(v));
    }
    _setWindowSize(v) {
      this._WINDOW_SIZE = v, d.delete(this);
    }
    assertValidity() {
      if (this.is0()) {
        if (t.allowInfinityPoint && !r.is0(this.py)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: v, y: A } = this.toAffine();
      if (!r.isValid(v) || !r.isValid(A)) throw new Error("bad point: x or y not FE");
      const m = r.sqr(A), b = o(v);
      if (!r.eql(m, b)) throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: v } = this.toAffine();
      if (r.isOdd) return !r.isOdd(v);
      throw new Error("Field doesn't support isOdd");
    }
    equals(v) {
      h(v);
      const { px: A, py: m, pz: b } = this, { px: g, py: z, pz: I } = v, N = r.eql(r.mul(A, I), r.mul(g, b)), j = r.eql(r.mul(m, I), r.mul(z, b));
      return N && j;
    }
    negate() {
      return new f(this.px, r.neg(this.py), this.pz);
    }
    double() {
      const { a: v, b: A } = t, m = r.mul(A, Sd), { px: b, py: g, pz: z } = this;
      let I = r.ZERO, N = r.ZERO, j = r.ZERO, C = r.mul(b, b), V = r.mul(g, g), F = r.mul(z, z), q = r.mul(b, g);
      return q = r.add(q, q), j = r.mul(b, z), j = r.add(j, j), I = r.mul(v, j), N = r.mul(m, F), N = r.add(I, N), I = r.sub(V, N), N = r.add(V, N), N = r.mul(I, N), I = r.mul(q, I), j = r.mul(m, j), F = r.mul(v, F), q = r.sub(C, F), q = r.mul(v, q), q = r.add(q, j), j = r.add(C, C), C = r.add(j, C), C = r.add(C, F), C = r.mul(C, q), N = r.add(N, C), F = r.mul(g, z), F = r.add(F, F), C = r.mul(F, q), I = r.sub(I, C), j = r.mul(F, V), j = r.add(j, j), j = r.add(j, j), new f(I, N, j);
    }
    add(v) {
      h(v);
      const { px: A, py: m, pz: b } = this, { px: g, py: z, pz: I } = v;
      let N = r.ZERO, j = r.ZERO, C = r.ZERO;
      const V = t.a, F = r.mul(t.b, Sd);
      let q = r.mul(A, g), Z = r.mul(m, z), ee = r.mul(b, I), ue = r.add(A, m), U = r.add(g, z);
      ue = r.mul(ue, U), U = r.add(q, Z), ue = r.sub(ue, U), U = r.add(A, b);
      let H = r.add(g, I);
      return U = r.mul(U, H), H = r.add(q, ee), U = r.sub(U, H), H = r.add(m, b), N = r.add(z, I), H = r.mul(H, N), N = r.add(Z, ee), H = r.sub(H, N), C = r.mul(V, U), N = r.mul(F, ee), C = r.add(N, C), N = r.sub(Z, C), C = r.add(Z, C), j = r.mul(N, C), Z = r.add(q, q), Z = r.add(Z, q), ee = r.mul(V, ee), U = r.mul(F, U), Z = r.add(Z, ee), ee = r.sub(q, ee), ee = r.mul(V, ee), U = r.add(U, ee), q = r.mul(Z, U), j = r.add(j, q), q = r.mul(H, U), N = r.mul(ue, N), N = r.sub(N, q), q = r.mul(ue, Z), C = r.mul(H, C), C = r.add(C, q), new f(N, j, C);
    }
    subtract(v) {
      return this.add(v.negate());
    }
    is0() {
      return this.equals(f.ZERO);
    }
    wNAF(v) {
      return w.wNAFCached(this, d, v, (A) => {
        const m = r.invertBatch(A.map((b) => b.pz));
        return A.map((b, g) => b.toAffine(m[g])).map(f.fromAffine);
      });
    }
    multiplyUnsafe(v) {
      const A = f.ZERO;
      if (v === kr) return A;
      if (s(v), v === jt) return this;
      const { endo: m } = t;
      if (!m) return w.unsafeLadder(this, v);
      let { k1neg: b, k1: g, k2neg: z, k2: I } = m.splitScalar(v), N = A, j = A, C = this;
      for (; g > kr || I > kr; ) g & jt && (N = N.add(C)), I & jt && (j = j.add(C)), C = C.double(), g >>= jt, I >>= jt;
      return b && (N = N.negate()), z && (j = j.negate()), j = new f(r.mul(j.px, m.beta), j.py, j.pz), N.add(j);
    }
    multiply(v) {
      s(v);
      let A = v, m, b;
      const { endo: g } = t;
      if (g) {
        const { k1neg: z, k1: I, k2neg: N, k2: j } = g.splitScalar(A);
        let { p: C, f: V } = this.wNAF(I), { p: F, f: q } = this.wNAF(j);
        C = w.constTimeNegate(z, C), F = w.constTimeNegate(N, F), F = new f(r.mul(F.px, g.beta), F.py, F.pz), m = C.add(F), b = V.add(q);
      } else {
        const { p: z, f: I } = this.wNAF(A);
        m = z, b = I;
      }
      return f.normalizeZ([m, b])[0];
    }
    multiplyAndAddUnsafe(v, A, m) {
      const b = f.BASE, g = (I, N) => N === kr || N === jt || !I.equals(b) ? I.multiplyUnsafe(N) : I.multiply(N), z = g(this, A).add(g(v, m));
      return z.is0() ? void 0 : z;
    }
    toAffine(v) {
      const { px: A, py: m, pz: b } = this, g = this.is0();
      v == null && (v = g ? r.ONE : r.inv(b));
      const z = r.mul(A, v), I = r.mul(m, v), N = r.mul(b, v);
      if (g) return { x: r.ZERO, y: r.ZERO };
      if (!r.eql(N, r.ONE)) throw new Error("invZ was invalid");
      return { x: z, y: I };
    }
    isTorsionFree() {
      const { h: v, isTorsionFree: A } = t;
      if (v === jt) return true;
      if (A) return A(f, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: v, clearCofactor: A } = t;
      return v === jt ? this : A ? A(f, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(v = true) {
      return this.assertValidity(), n(f, this, v);
    }
    toHex(v = true) {
      return va(this.toRawBytes(v));
    }
  }
  f.BASE = new f(t.Gx, t.Gy, r.ONE), f.ZERO = new f(r.ZERO, r.ONE, r.ZERO);
  const x = t.nBitLength, w = uy(f, t.endo ? Math.ceil(x / 2) : x);
  return { CURVE: t, ProjectivePoint: f, normPrivateKeyToScalar: l, weierstrassEquation: o, isWithinCurveOrder: i };
}
function xy(e) {
  const t = Hx(e);
  return Oo(t, { hash: "hash", hmac: "function", randomBytes: "function" }, { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }), Object.freeze({ lowS: true, ...t });
}
function my(e) {
  const t = xy(e), { Fp: r, n } = t, a = r.BYTES + 1, o = 2 * r.BYTES + 1;
  function i(U) {
    return kr < U && U < r.ORDER;
  }
  function s(U) {
    return st(U, n);
  }
  function l(U) {
    return Sc(U, n);
  }
  const { ProjectivePoint: d, normPrivateKeyToScalar: h, weierstrassEquation: f, isWithinCurveOrder: x } = hy({ ...t, toBytes(U, H, W) {
    const T = H.toAffine(), k = r.toBytes(T.x), _ = ko;
    return W ? _(Uint8Array.from([H.hasEvenY() ? 2 : 3]), k) : _(Uint8Array.from([4]), k, r.toBytes(T.y));
  }, fromBytes(U) {
    const H = U.length, W = U[0], T = U.subarray(1);
    if (H === a && (W === 2 || W === 3)) {
      const k = Nn(T);
      if (!i(k)) throw new Error("Point is not on curve");
      const _ = f(k);
      let R = r.sqrt(_);
      const M = (R & jt) === jt;
      return (W & 1) === 1 !== M && (R = r.neg(R)), { x: k, y: R };
    } else if (H === o && W === 4) {
      const k = r.fromBytes(T.subarray(0, r.BYTES)), _ = r.fromBytes(T.subarray(r.BYTES, 2 * r.BYTES));
      return { x: k, y: _ };
    } else throw new Error(`Point of length ${H} was invalid. Expected ${a} compressed bytes or ${o} uncompressed bytes`);
  } }), w = (U) => va(wa(U, t.nByteLength));
  function E(U) {
    const H = n >> jt;
    return U > H;
  }
  function v(U) {
    return E(U) ? s(-U) : U;
  }
  const A = (U, H, W) => Nn(U.slice(H, W));
  class m {
    constructor(H, W, T) {
      this.r = H, this.s = W, this.recovery = T, this.assertValidity();
    }
    static fromCompact(H) {
      const W = t.nByteLength;
      return H = qt("compactSignature", H, W * 2), new m(A(H, 0, W), A(H, W, 2 * W));
    }
    static fromDER(H) {
      const { r: W, s: T } = Sn.toSig(qt("DER", H));
      return new m(W, T);
    }
    assertValidity() {
      if (!x(this.r)) throw new Error("r must be 0 < r < CURVE.n");
      if (!x(this.s)) throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(H) {
      return new m(this.r, this.s, H);
    }
    recoverPublicKey(H) {
      const { r: W, s: T, recovery: k } = this, _ = j(qt("msgHash", H));
      if (k == null || ![0, 1, 2, 3].includes(k)) throw new Error("recovery id invalid");
      const R = k === 2 || k === 3 ? W + t.n : W;
      if (R >= r.ORDER) throw new Error("recovery id 2 or 3 invalid");
      const M = k & 1 ? "03" : "02", ae = d.fromHex(M + w(R)), oe = l(R), We = s(-_ * oe), Le = s(T * oe), Oe = d.BASE.multiplyAndAddUnsafe(ae, We, Le);
      if (!Oe) throw new Error("point at infinify");
      return Oe.assertValidity(), Oe;
    }
    hasHighS() {
      return E(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new m(this.r, s(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return wo(this.toDERHex());
    }
    toDERHex() {
      return Sn.hexFromSig({ r: this.r, s: this.s });
    }
    toCompactRawBytes() {
      return wo(this.toCompactHex());
    }
    toCompactHex() {
      return w(this.r) + w(this.s);
    }
  }
  const b = { isValidPrivateKey(U) {
    try {
      return h(U), true;
    } catch {
      return false;
    }
  }, normPrivateKeyToScalar: h, randomPrivateKey: () => {
    const U = Fx(t.n);
    return ly(t.randomBytes(U), t.n);
  }, precompute(U = 8, H = d.BASE) {
    return H._setWindowSize(U), H.multiply(BigInt(3)), H;
  } };
  function g(U, H = true) {
    return d.fromPrivateKey(U).toRawBytes(H);
  }
  function z(U) {
    const H = U instanceof Uint8Array, W = typeof U == "string", T = (H || W) && U.length;
    return H ? T === a || T === o : W ? T === 2 * a || T === 2 * o : U instanceof d;
  }
  function I(U, H, W = true) {
    if (z(U)) throw new Error("first arg must be private key");
    if (!z(H)) throw new Error("second arg must be public key");
    return d.fromHex(H).multiply(h(U)).toRawBytes(W);
  }
  const N = t.bits2int || function(U) {
    const H = Nn(U), W = U.length * 8 - t.nBitLength;
    return W > 0 ? H >> BigInt(W) : H;
  }, j = t.bits2int_modN || function(U) {
    return s(N(U));
  }, C = $u(t.nBitLength);
  function V(U) {
    if (typeof U != "bigint") throw new Error("bigint expected");
    if (!(kr <= U && U < C)) throw new Error(`bigint expected < 2^${t.nBitLength}`);
    return wa(U, t.nByteLength);
  }
  function F(U, H, W = q) {
    if (["recovered", "canonical"].some((Dt) => Dt in W)) throw new Error("sign() legacy options not supported");
    const { hash: T, randomBytes: k } = t;
    let { lowS: _, prehash: R, extraEntropy: M } = W;
    _ == null && (_ = true), U = qt("msgHash", U), R && (U = qt("prehashed msgHash", T(U)));
    const ae = j(U), oe = h(H), We = [V(oe), V(ae)];
    if (M != null) {
      const Dt = M === true ? k(r.BYTES) : M;
      We.push(qt("extraEntropy", Dt));
    }
    const Le = ko(...We), Oe = ae;
    function tr(Dt) {
      const yr = N(Dt);
      if (!x(yr)) return;
      const Ro = l(yr), pt = d.BASE.multiply(yr).toAffine(), ht = s(pt.x);
      if (ht === kr) return;
      const rr = s(Ro * s(Oe + ht * oe));
      if (rr === kr) return;
      let Fo = (pt.x === ht ? 0 : 2) | Number(pt.y & jt), Ho = rr;
      return _ && E(rr) && (Ho = v(rr), Fo ^= 1), new m(ht, Ho, Fo);
    }
    return { seed: Le, k2sig: tr };
  }
  const q = { lowS: t.lowS, prehash: false }, Z = { lowS: t.lowS, prehash: false };
  function ee(U, H, W = q) {
    const { seed: T, k2sig: k } = F(U, H, W), _ = t;
    return Ux(_.hash.outputLen, _.nByteLength, _.hmac)(T, k);
  }
  d.BASE._setWindowSize(8);
  function ue(U, H, W, T = Z) {
    var _a3;
    const k = U;
    if (H = qt("msgHash", H), W = qt("publicKey", W), "strict" in T) throw new Error("options.strict was renamed to lowS");
    const { lowS: _, prehash: R } = T;
    let M, ae;
    try {
      if (typeof k == "string" || k instanceof Uint8Array) try {
        M = m.fromDER(k);
      } catch (pt) {
        if (!(pt instanceof Sn.Err)) throw pt;
        M = m.fromCompact(k);
      }
      else if (typeof k == "object" && typeof k.r == "bigint" && typeof k.s == "bigint") {
        const { r: pt, s: ht } = k;
        M = new m(pt, ht);
      } else throw new Error("PARSE");
      ae = d.fromHex(W);
    } catch (pt) {
      if (pt.message === "PARSE") throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return false;
    }
    if (_ && M.hasHighS()) return false;
    R && (H = t.hash(H));
    const { r: oe, s: We } = M, Le = j(H), Oe = l(We), tr = s(Le * Oe), Dt = s(oe * Oe), yr = (_a3 = d.BASE.multiplyAndAddUnsafe(ae, tr, Dt)) == null ? void 0 : _a3.toAffine();
    return yr ? s(yr.x) === oe : false;
  }
  return { CURVE: t, getPublicKey: g, getSharedSecret: I, sign: ee, verify: ue, ProjectivePoint: d, Signature: m, utils: b };
}
class $x extends Tx {
  constructor(t, r) {
    super(), this.finished = false, this.destroyed = false, L2(t);
    const n = Ou(r);
    if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const a = this.blockLen, o = new Uint8Array(a);
    o.set(n.length > a ? t.create().update(n).digest() : n);
    for (let i = 0; i < o.length; i++) o[i] ^= 54;
    this.iHash.update(o), this.oHash = t.create();
    for (let i = 0; i < o.length; i++) o[i] ^= 106;
    this.oHash.update(o), o.fill(0);
  }
  update(t) {
    return ts(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    ts(this), jx(t, this.outputLen), this.finished = true, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: r, iHash: n, finished: a, destroyed: o, blockLen: i, outputLen: s } = this;
    return t = t, t.finished = a, t.destroyed = o, t.blockLen = i, t.outputLen = s, t.oHash = r._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
  }
}
const Mx = (e, t, r) => new $x(e, t).update(r).digest();
Mx.create = (e, t) => new $x(e, t);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function by(e) {
  return { hash: e, hmac: (t, ...r) => Mx(e, t, R2(...r)), randomBytes: H2 };
}
function gy(e, t) {
  const r = (n) => my({ ...e, ...by(n) });
  return Object.freeze({ ...r(t), create: r });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Dx = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), zd = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), yy = BigInt(1), zc = BigInt(2), Id = (e, t) => (e + t / zc) / t;
function vy(e) {
  const t = Dx, r = BigInt(3), n = BigInt(6), a = BigInt(11), o = BigInt(22), i = BigInt(23), s = BigInt(44), l = BigInt(88), d = e * e * e % t, h = d * d * e % t, f = At(h, r, t) * h % t, x = At(f, r, t) * h % t, w = At(x, zc, t) * d % t, E = At(w, a, t) * w % t, v = At(E, o, t) * E % t, A = At(v, s, t) * v % t, m = At(A, l, t) * A % t, b = At(m, s, t) * v % t, g = At(b, r, t) * h % t, z = At(g, i, t) * E % t, I = At(z, n, t) * d % t, N = At(I, zc, t);
  if (!Ic.eql(Ic.sqr(N), e)) throw new Error("Cannot find square root");
  return N;
}
const Ic = sy(Dx, void 0, void 0, { sqrt: vy }), Vr = gy({ a: BigInt(0), b: BigInt(7), Fp: Ic, n: zd, Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"), Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"), h: BigInt(1), lowS: true, endo: { beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"), splitScalar: (e) => {
  const t = zd, r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -yy * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), a = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), o = r, i = BigInt("0x100000000000000000000000000000000"), s = Id(o * e, t), l = Id(-n * e, t);
  let d = st(e - s * r - l * a, t), h = st(-s * n - l * o, t);
  const f = d > i, x = h > i;
  if (f && (d = t - d), x && (h = t - h), d > i || h > i) throw new Error("splitScalar: Endomorphism failed, k=" + e);
  return { k1neg: f, k1: d, k2neg: x, k2: h };
} } }, K2);
BigInt(0);
Vr.ProjectivePoint;
const Vx = "0x0000000000000000000000000000000000000000", Ad = "0x0000000000000000000000000000000000000000000000000000000000000000", wy = `Ethereum Signed Message:
`, Bd = BigInt(0), Nd = BigInt(1), Ac = BigInt(2), Pd = BigInt(27), Cd = BigInt(28), ui = BigInt(35), Gx = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), ky = Gx / Ac, Ey = Symbol.for("nodejs.util.inspect.custom"), hn = {};
function pl(e) {
  return cn(Ne(e), 32);
}
const __e = class __e {
  constructor(t, r, n, a) {
    __privateAdd(this, _e2);
    __privateAdd(this, _t2);
    __privateAdd(this, _r2);
    __privateAdd(this, _n2);
    Ss(t, hn, "Signature"), __privateSet(this, _e2, r), __privateSet(this, _t2, n), __privateSet(this, _r2, a), __privateSet(this, _n2, null);
  }
  get r() {
    return __privateGet(this, _e2);
  }
  set r(t) {
    P(Ja(t) === 32, "invalid r", "value", t), __privateSet(this, _e2, D(t));
  }
  get s() {
    return P(parseInt(__privateGet(this, _t2).substring(0, 3)) < 8, "non-canonical s; use ._s", "s", __privateGet(this, _t2)), __privateGet(this, _t2);
  }
  set s(t) {
    P(Ja(t) === 32, "invalid s", "value", t), __privateSet(this, _t2, D(t));
  }
  get _s() {
    return __privateGet(this, _t2);
  }
  isValid() {
    return BigInt(__privateGet(this, _t2)) <= ky;
  }
  get v() {
    return __privateGet(this, _r2);
  }
  set v(t) {
    const r = kt(t, "value");
    P(r === 27 || r === 28, "invalid v", "v", t), __privateSet(this, _r2, r);
  }
  get networkV() {
    return __privateGet(this, _n2);
  }
  get legacyChainId() {
    const t = this.networkV;
    return t == null ? null : __e.getChainId(t);
  }
  get yParity() {
    return this.v === 27 ? 0 : 1;
  }
  get yParityAndS() {
    const t = K(this.s);
    return this.yParity && (t[0] |= 128), D(t);
  }
  get compactSerialized() {
    return Pe([this.r, this.yParityAndS]);
  }
  get serialized() {
    return Pe([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
  }
  getCanonical() {
    if (this.isValid()) return this;
    const t = Gx - BigInt(this._s), r = 55 - this.v, n = new __e(hn, this.r, pl(t), r);
    return this.networkV && __privateSet(n, _n2, this.networkV), n;
  }
  clone() {
    const t = new __e(hn, this.r, this._s, this.v);
    return this.networkV && __privateSet(t, _n2, this.networkV), t;
  }
  toJSON() {
    const t = this.networkV;
    return { _type: "signature", networkV: t != null ? t.toString() : null, r: this.r, s: this._s, v: this.v };
  }
  [Ey]() {
    return this.toString();
  }
  toString() {
    return this.isValid() ? `Signature { r: ${this.r}, s: ${this._s}, v: ${this.v} }` : `Signature { r: ${this.r}, s: ${this._s}, v: ${this.v}, valid: false }`;
  }
  static getChainId(t) {
    const r = he(t, "v");
    return r == Pd || r == Cd ? Bd : (P(r >= ui, "invalid EIP-155 v", "v", t), (r - ui) / Ac);
  }
  static getChainIdV(t, r) {
    return he(t) * Ac + BigInt(35 + r - 27);
  }
  static getNormalizedV(t) {
    const r = he(t);
    return r === Bd || r === Pd ? 27 : r === Nd || r === Cd ? 28 : (P(r >= ui, "invalid v", "v", t), r & Nd ? 27 : 28);
  }
  static from(t) {
    function r(d, h) {
      P(d, h, "signature", t);
    }
    if (t == null) return new __e(hn, Ad, Ad, 27);
    if (typeof t == "string") {
      const d = K(t, "signature");
      if (d.length === 64) {
        const h = D(d.slice(0, 32)), f = d.slice(32, 64), x = f[0] & 128 ? 28 : 27;
        return f[0] &= 127, new __e(hn, h, D(f), x);
      }
      if (d.length === 65) {
        const h = D(d.slice(0, 32)), f = D(d.slice(32, 64)), x = __e.getNormalizedV(d[64]);
        return new __e(hn, h, f, x);
      }
      r(false, "invalid raw signature length");
    }
    if (t instanceof __e) return t.clone();
    const n = t.r;
    r(n != null, "missing r");
    const a = pl(n), o = function(d, h) {
      if (d != null) return pl(d);
      if (h != null) {
        r(mr(h, 32), "invalid yParityAndS");
        const f = K(h);
        return f[0] &= 127, D(f);
      }
      r(false, "missing s");
    }(t.s, t.yParityAndS), { networkV: i, v: s } = function(d, h, f) {
      if (d != null) {
        const x = he(d);
        return { networkV: x >= ui ? x : void 0, v: __e.getNormalizedV(x) };
      }
      if (h != null) return r(mr(h, 32), "invalid yParityAndS"), { v: K(h)[0] & 128 ? 28 : 27 };
      if (f != null) {
        switch (kt(f, "sig.yParity")) {
          case 0:
            return { v: 27 };
          case 1:
            return { v: 28 };
        }
        r(false, "invalid yParity");
      }
      r(false, "missing v");
    }(t.v, t.yParityAndS, t.yParity), l = new __e(hn, a, o, s);
    return i && __privateSet(l, _n2, i), r(t.yParity == null || kt(t.yParity, "sig.yParity") === l.yParity, "yParity mismatch"), r(t.yParityAndS == null || t.yParityAndS === l.yParityAndS, "yParityAndS mismatch"), l;
  }
};
_e2 = new WeakMap();
_t2 = new WeakMap();
_r2 = new WeakMap();
_n2 = new WeakMap();
let _e = __e;
const _gt = class _gt {
  constructor(t) {
    __privateAdd(this, _e3);
    P(Ja(t) === 32, "invalid private key", "privateKey", "[REDACTED]"), __privateSet(this, _e3, D(t));
  }
  get privateKey() {
    return __privateGet(this, _e3);
  }
  get publicKey() {
    return _gt.computePublicKey(__privateGet(this, _e3));
  }
  get compressedPublicKey() {
    return _gt.computePublicKey(__privateGet(this, _e3), true);
  }
  sign(t) {
    P(Ja(t) === 32, "invalid digest length", "digest", t);
    const r = Vr.sign(Mn(t), Mn(__privateGet(this, _e3)), { lowS: true });
    return _e.from({ r: ba(r.r, 32), s: ba(r.s, 32), v: r.recovery ? 28 : 27 });
  }
  computeSharedSecret(t) {
    const r = _gt.computePublicKey(t);
    return D(Vr.getSharedSecret(Mn(__privateGet(this, _e3)), K(r), false));
  }
  static computePublicKey(t, r) {
    let n = K(t, "key");
    if (n.length === 32) {
      const o = Vr.getPublicKey(n, !!r);
      return D(o);
    }
    if (n.length === 64) {
      const o = new Uint8Array(65);
      o[0] = 4, o.set(n, 1), n = o;
    }
    const a = Vr.ProjectivePoint.fromHex(n);
    return D(a.toRawBytes(r));
  }
  static recoverPublicKey(t, r) {
    P(Ja(t) === 32, "invalid digest length", "digest", t);
    const n = _e.from(r);
    let a = Vr.Signature.fromCompact(Mn(Pe([n.r, n.s])));
    a = a.addRecoveryBit(n.yParity);
    const o = a.recoverPublicKey(Mn(t));
    return P(o != null, "invalid signature for digest", "signature", r), "0x" + o.toHex(false);
  }
  static addPoints(t, r, n) {
    const a = Vr.ProjectivePoint.fromHex(_gt.computePublicKey(t).substring(2)), o = Vr.ProjectivePoint.fromHex(_gt.computePublicKey(r).substring(2));
    return "0x" + a.add(o).toHex(!!n);
  }
};
_e3 = new WeakMap();
let gt = _gt;
const Sy = BigInt(0), zy = BigInt(36);
function _d(e) {
  e = e.toLowerCase();
  const t = e.substring(2).split(""), r = new Uint8Array(40);
  for (let a = 0; a < 40; a++) r[a] = t[a].charCodeAt(0);
  const n = K($e(r));
  for (let a = 0; a < 40; a += 2) n[a >> 1] >> 4 >= 8 && (t[a] = t[a].toUpperCase()), (n[a >> 1] & 15) >= 8 && (t[a + 1] = t[a + 1].toUpperCase());
  return "0x" + t.join("");
}
const Mu = {};
for (let e = 0; e < 10; e++) Mu[String(e)] = String(e);
for (let e = 0; e < 26; e++) Mu[String.fromCharCode(65 + e)] = String(10 + e);
const jd = 15;
function Iy(e) {
  e = e.toUpperCase(), e = e.substring(4) + e.substring(0, 2) + "00";
  let t = e.split("").map((n) => Mu[n]).join("");
  for (; t.length >= jd; ) {
    let n = t.substring(0, jd);
    t = parseInt(n, 10) % 97 + t.substring(n.length);
  }
  let r = String(98 - parseInt(t, 10) % 97);
  for (; r.length < 2; ) r = "0" + r;
  return r;
}
const Ay = function() {
  const e = {};
  for (let t = 0; t < 36; t++) {
    const r = "0123456789abcdefghijklmnopqrstuvwxyz"[t];
    e[r] = BigInt(t);
  }
  return e;
}();
function By(e) {
  e = e.toLowerCase();
  let t = Sy;
  for (let r = 0; r < e.length; r++) t = t * zy + Ay[e[r]];
  return t;
}
function Mt(e) {
  if (P(typeof e == "string", "invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    e.startsWith("0x") || (e = "0x" + e);
    const t = _d(e);
    return P(!e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || t === e, "bad address checksum", "address", e), t;
  }
  if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    P(e.substring(2, 4) === Iy(e), "bad icap checksum", "address", e);
    let t = By(e.substring(4)).toString(16);
    for (; t.length < 40; ) t = "0" + t;
    return _d("0x" + t);
  }
  P(false, "invalid address", "address", e);
}
function Ny(e) {
  return e && typeof e.getAddress == "function";
}
async function hl(e, t) {
  const r = await t;
  return (r == null || r === "0x0000000000000000000000000000000000000000") && (ie(typeof e != "string", "unconfigured name", "UNCONFIGURED_NAME", { value: e }), P(false, "invalid AddressLike value; did not resolve to a value address", "target", e)), Mt(r);
}
function eo(e, t) {
  if (typeof e == "string") return e.match(/^0x[0-9a-f]{40}$/i) ? Mt(e) : (ie(t != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), hl(e, t.resolveName(e)));
  if (Ny(e)) return hl(e, e.getAddress());
  if (e && typeof e.then == "function") return hl(e, e);
  P(false, "unsupported addressable value", "target", e);
}
function xl(e, t) {
  return { address: Mt(e), storageKeys: t.map((r, n) => (P(mr(r, 32), "invalid slot", `storageKeys[${n}]`, r), r.toLowerCase())) };
}
function Ns(e) {
  if (Array.isArray(e)) return e.map((r, n) => Array.isArray(r) ? (P(r.length === 2, "invalid slot set", `value[${n}]`, r), xl(r[0], r[1])) : (P(r != null && typeof r == "object", "invalid address-slot set", "value", e), xl(r.address, r.storageKeys)));
  P(e != null && typeof e == "object", "invalid access list", "value", e);
  const t = Object.keys(e).map((r) => {
    const n = e[r].reduce((a, o) => (a[o] = true, a), {});
    return xl(r, Object.keys(n).sort());
  });
  return t.sort((r, n) => r.address.localeCompare(n.address)), t;
}
function Py(e) {
  return { address: Mt(e.address), nonce: he(e.nonce != null ? e.nonce : 0), chainId: he(e.chainId != null ? e.chainId : 0), signature: _e.from(e.signature) };
}
function Ps(e) {
  let t;
  return typeof e == "string" ? t = gt.computePublicKey(e, false) : t = e.publicKey, Mt($e("0x" + t.substring(4)).substring(26));
}
function Cy(e, t) {
  return Ps(gt.recoverPublicKey(e, t));
}
const He = BigInt(0), _y = BigInt(2), jy = BigInt(27), Ly = BigInt(28), Ty = BigInt(35), Uy = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), Oy = Symbol.for("nodejs.util.inspect.custom"), ml = 4096 * 32, Ai = 128;
function Ry(e) {
  return { blobToKzgCommitment: (n) => {
    if ("computeBlobProof" in e) {
      if ("blobToKzgCommitment" in e && typeof e.blobToKzgCommitment == "function") return K(e.blobToKzgCommitment(D(n)));
    } else if ("blobToKzgCommitment" in e && typeof e.blobToKzgCommitment == "function") return K(e.blobToKzgCommitment(n));
    if ("blobToKZGCommitment" in e && typeof e.blobToKZGCommitment == "function") return K(e.blobToKZGCommitment(D(n)));
    P(false, "unsupported KZG library", "kzg", e);
  }, computeBlobKzgProof: (n, a) => {
    if ("computeBlobProof" in e && typeof e.computeBlobProof == "function") return K(e.computeBlobProof(D(n), D(a)));
    if ("computeBlobKzgProof" in e && typeof e.computeBlobKzgProof == "function") return e.computeBlobKzgProof(n, a);
    if ("computeBlobKZGProof" in e && typeof e.computeBlobKZGProof == "function") return K(e.computeBlobKZGProof(D(n), D(a)));
    P(false, "unsupported KZG library", "kzg", e);
  } };
}
function Ld(e, t) {
  let r = e.toString(16);
  for (; r.length < 2; ) r = "0" + r;
  return r += $t(t).substring(4), "0x" + r;
}
function Ba(e) {
  return e === "0x" ? null : Mt(e);
}
function Cs(e, t) {
  try {
    return Ns(e);
  } catch (r) {
    P(false, r.message, t, e);
  }
}
function Fy(e, t) {
  try {
    if (!Array.isArray(e)) throw new Error("authorizationList: invalid array");
    const r = [];
    for (let n = 0; n < e.length; n++) {
      const a = e[n];
      if (!Array.isArray(a)) throw new Error(`authorization[${n}]: invalid array`);
      if (a.length !== 6) throw new Error(`authorization[${n}]: wrong length`);
      if (!a[1]) throw new Error(`authorization[${n}]: null address`);
      r.push({ address: Ba(a[1]), nonce: de(a[2], "nonce"), chainId: de(a[0], "chainId"), signature: _e.from({ yParity: Rn(a[3], "yParity"), r: cn(a[4], 32), s: cn(a[5], 32) }) });
    }
    return r;
  } catch (r) {
    P(false, r.message, t, e);
  }
}
function Rn(e, t) {
  return e === "0x" ? 0 : kt(e, t);
}
function de(e, t) {
  if (e === "0x") return He;
  const r = he(e, t);
  return P(r <= Uy, "value exceeds uint size", t, r), r;
}
function ne(e, t) {
  const r = he(e, "value"), n = Ne(r);
  return P(n.length <= 32, "value too large", `tx.${t}`, r), n;
}
function _s(e) {
  return Ns(e).map((t) => [t.address, t.storageKeys]);
}
function Hy(e) {
  return e.map((t) => [ne(t.chainId, "chainId"), t.address, ne(t.nonce, "nonce"), ne(t.signature.yParity, "yParity"), Ne(t.signature.r), Ne(t.signature._s)]);
}
function $y(e, t) {
  P(Array.isArray(e), `invalid ${t}`, "value", e);
  for (let r = 0; r < e.length; r++) P(mr(e[r], 32), "invalid ${ param } hash", `value[${r}]`, e[r]);
  return e;
}
function My(e) {
  const t = _o(e);
  P(Array.isArray(t) && (t.length === 9 || t.length === 6), "invalid field count for legacy transaction", "data", e);
  const r = { type: 0, nonce: Rn(t[0], "nonce"), gasPrice: de(t[1], "gasPrice"), gasLimit: de(t[2], "gasLimit"), to: Ba(t[3]), value: de(t[4], "value"), data: D(t[5]), chainId: He };
  if (t.length === 6) return r;
  const n = de(t[6], "v"), a = de(t[7], "r"), o = de(t[8], "s");
  if (a === He && o === He) r.chainId = n;
  else {
    let i = (n - Ty) / _y;
    i < He && (i = He), r.chainId = i, P(i !== He || n === jy || n === Ly, "non-canonical legacy v", "v", t[6]), r.signature = _e.from({ r: cn(t[7], 32), s: cn(t[8], 32), v: n });
  }
  return r;
}
function Dy(e, t) {
  const r = [ne(e.nonce, "nonce"), ne(e.gasPrice || 0, "gasPrice"), ne(e.gasLimit, "gasLimit"), e.to || "0x", ne(e.value, "value"), e.data];
  let n = He;
  if (e.chainId != He) n = he(e.chainId, "tx.chainId"), P(!t || t.networkV == null || t.legacyChainId === n, "tx.chainId/sig.v mismatch", "sig", t);
  else if (e.signature) {
    const o = e.signature.legacyChainId;
    o != null && (n = o);
  }
  if (!t) return n !== He && (r.push(Ne(n)), r.push("0x"), r.push("0x")), Ir(r);
  let a = BigInt(27 + t.yParity);
  return n !== He ? a = _e.getChainIdV(n, t.v) : BigInt(t.v) !== a && P(false, "tx.chainId/sig.v mismatch", "sig", t), r.push(Ne(a)), r.push(Ne(t.r)), r.push(Ne(t._s)), Ir(r);
}
function js(e, t) {
  let r;
  try {
    if (r = Rn(t[0], "yParity"), r !== 0 && r !== 1) throw new Error("bad yParity");
  } catch {
    P(false, "invalid yParity", "yParity", t[0]);
  }
  const n = cn(t[1], 32), a = cn(t[2], 32), o = _e.from({ r: n, s: a, yParity: r });
  e.signature = o;
}
function Vy(e) {
  const t = _o(K(e).slice(1));
  P(Array.isArray(t) && (t.length === 9 || t.length === 12), "invalid field count for transaction type: 2", "data", D(e));
  const r = { type: 2, chainId: de(t[0], "chainId"), nonce: Rn(t[1], "nonce"), maxPriorityFeePerGas: de(t[2], "maxPriorityFeePerGas"), maxFeePerGas: de(t[3], "maxFeePerGas"), gasPrice: null, gasLimit: de(t[4], "gasLimit"), to: Ba(t[5]), value: de(t[6], "value"), data: D(t[7]), accessList: Cs(t[8], "accessList") };
  return t.length === 9 || js(r, t.slice(9)), r;
}
function Gy(e, t) {
  const r = [ne(e.chainId, "chainId"), ne(e.nonce, "nonce"), ne(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), ne(e.maxFeePerGas || 0, "maxFeePerGas"), ne(e.gasLimit, "gasLimit"), e.to || "0x", ne(e.value, "value"), e.data, _s(e.accessList || [])];
  return t && (r.push(ne(t.yParity, "yParity")), r.push(Ne(t.r)), r.push(Ne(t.s))), Pe(["0x02", Ir(r)]);
}
function qy(e) {
  const t = _o(K(e).slice(1));
  P(Array.isArray(t) && (t.length === 8 || t.length === 11), "invalid field count for transaction type: 1", "data", D(e));
  const r = { type: 1, chainId: de(t[0], "chainId"), nonce: Rn(t[1], "nonce"), gasPrice: de(t[2], "gasPrice"), gasLimit: de(t[3], "gasLimit"), to: Ba(t[4]), value: de(t[5], "value"), data: D(t[6]), accessList: Cs(t[7], "accessList") };
  return t.length === 8 || js(r, t.slice(8)), r;
}
function Ky(e, t) {
  const r = [ne(e.chainId, "chainId"), ne(e.nonce, "nonce"), ne(e.gasPrice || 0, "gasPrice"), ne(e.gasLimit, "gasLimit"), e.to || "0x", ne(e.value, "value"), e.data, _s(e.accessList || [])];
  return t && (r.push(ne(t.yParity, "recoveryParam")), r.push(Ne(t.r)), r.push(Ne(t.s))), Pe(["0x01", Ir(r)]);
}
function Wy(e) {
  let t = _o(K(e).slice(1)), r = "3", n = null, a = null;
  if (t.length === 4 && Array.isArray(t[0])) {
    r = "3 (network format)";
    const i = t[1], s = t[2], l = t[3];
    P(Array.isArray(i), "invalid network format: blobs not an array", "fields[1]", i), P(Array.isArray(s), "invalid network format: commitments not an array", "fields[2]", s), P(Array.isArray(l), "invalid network format: proofs not an array", "fields[3]", l), P(i.length === s.length, "invalid network format: blobs/commitments length mismatch", "fields", t), P(i.length === l.length, "invalid network format: blobs/proofs length mismatch", "fields", t), a = [];
    for (let d = 0; d < t[1].length; d++) a.push({ data: i[d], commitment: s[d], proof: l[d] });
    t = t[0];
  } else if (t.length === 5 && Array.isArray(t[0])) {
    r = "3 (EIP-7594 network format)", n = kt(t[1]);
    const i = t[2], s = t[3], l = t[4];
    P(n === 1, `unsupported EIP-7594 network format version: ${n}`, "fields[1]", n), P(Array.isArray(i), "invalid EIP-7594 network format: blobs not an array", "fields[2]", i), P(Array.isArray(s), "invalid EIP-7594 network format: commitments not an array", "fields[3]", s), P(Array.isArray(l), "invalid EIP-7594 network format: proofs not an array", "fields[4]", l), P(i.length === s.length, "invalid network format: blobs/commitments length mismatch", "fields", t), P(i.length * Ai === l.length, "invalid network format: blobs/proofs length mismatch", "fields", t), a = [];
    for (let d = 0; d < i.length; d++) {
      const h = [];
      for (let f = 0; f < Ai; f++) h.push(l[d * Ai + f]);
      a.push({ data: i[d], commitment: s[d], proof: Pe(h) });
    }
    t = t[0];
  }
  P(Array.isArray(t) && (t.length === 11 || t.length === 14), `invalid field count for transaction type: ${r}`, "data", D(e));
  const o = { type: 3, chainId: de(t[0], "chainId"), nonce: Rn(t[1], "nonce"), maxPriorityFeePerGas: de(t[2], "maxPriorityFeePerGas"), maxFeePerGas: de(t[3], "maxFeePerGas"), gasPrice: null, gasLimit: de(t[4], "gasLimit"), to: Ba(t[5]), value: de(t[6], "value"), data: D(t[7]), accessList: Cs(t[8], "accessList"), maxFeePerBlobGas: de(t[9], "maxFeePerBlobGas"), blobVersionedHashes: t[10], blobWrapperVersion: n };
  a && (o.blobs = a), P(o.to != null, `invalid address for transaction type: ${r}`, "data", e), P(Array.isArray(o.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", e);
  for (let i = 0; i < o.blobVersionedHashes.length; i++) P(mr(o.blobVersionedHashes[i], 32), `invalid blobVersionedHash at index ${i}: must be length 32`, "data", e);
  return t.length === 11 || js(o, t.slice(11)), o;
}
function Yy(e, t, r) {
  const n = [ne(e.chainId, "chainId"), ne(e.nonce, "nonce"), ne(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), ne(e.maxFeePerGas || 0, "maxFeePerGas"), ne(e.gasLimit, "gasLimit"), e.to || Vx, ne(e.value, "value"), e.data, _s(e.accessList || []), ne(e.maxFeePerBlobGas || 0, "maxFeePerBlobGas"), $y(e.blobVersionedHashes || [], "blobVersionedHashes")];
  if (t && (n.push(ne(t.yParity, "yParity")), n.push(Ne(t.r)), n.push(Ne(t.s)), r)) {
    if (e.blobWrapperVersion != null) {
      const a = Ne(e.blobWrapperVersion), o = [];
      for (const { proof: i } of r) {
        const s = K(i), l = s.length / Ai;
        for (let d = 0; d < s.length; d += l) o.push(s.subarray(d, d + l));
      }
      return Pe(["0x03", Ir([n, a, r.map((i) => i.data), r.map((i) => i.commitment), o])]);
    }
    return Pe(["0x03", Ir([n, r.map((a) => a.data), r.map((a) => a.commitment), r.map((a) => a.proof)])]);
  }
  return Pe(["0x03", Ir(n)]);
}
function Qy(e) {
  const t = _o(K(e).slice(1));
  P(Array.isArray(t) && (t.length === 10 || t.length === 13), "invalid field count for transaction type: 4", "data", D(e));
  const r = { type: 4, chainId: de(t[0], "chainId"), nonce: Rn(t[1], "nonce"), maxPriorityFeePerGas: de(t[2], "maxPriorityFeePerGas"), maxFeePerGas: de(t[3], "maxFeePerGas"), gasPrice: null, gasLimit: de(t[4], "gasLimit"), to: Ba(t[5]), value: de(t[6], "value"), data: D(t[7]), accessList: Cs(t[8], "accessList"), authorizationList: Fy(t[9], "authorizationList") };
  return t.length === 10 || js(r, t.slice(10)), r;
}
function Zy(e, t) {
  const r = [ne(e.chainId, "chainId"), ne(e.nonce, "nonce"), ne(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), ne(e.maxFeePerGas || 0, "maxFeePerGas"), ne(e.gasLimit, "gasLimit"), e.to || "0x", ne(e.value, "value"), e.data, _s(e.accessList || []), Hy(e.authorizationList || [])];
  return t && (r.push(ne(t.yParity, "yParity")), r.push(Ne(t.r)), r.push(Ne(t.s))), Pe(["0x04", Ir(r)]);
}
const _Kt = class _Kt {
  constructor() {
    __privateAdd(this, _Kt_instances);
    __privateAdd(this, _e4);
    __privateAdd(this, _t3);
    __privateAdd(this, _r3);
    __privateAdd(this, _n3);
    __privateAdd(this, _l2);
    __privateAdd(this, _c2);
    __privateAdd(this, _u2);
    __privateAdd(this, _d2);
    __privateAdd(this, _f2);
    __privateAdd(this, _p2);
    __privateAdd(this, _h2);
    __privateAdd(this, _x2);
    __privateAdd(this, _s2);
    __privateAdd(this, _o2);
    __privateAdd(this, _a2);
    __privateAdd(this, _i2);
    __privateAdd(this, _m2);
    __privateAdd(this, _b2);
    __privateSet(this, _e4, null), __privateSet(this, _t3, null), __privateSet(this, _n3, 0), __privateSet(this, _l2, He), __privateSet(this, _c2, null), __privateSet(this, _u2, null), __privateSet(this, _d2, null), __privateSet(this, _r3, "0x"), __privateSet(this, _f2, He), __privateSet(this, _p2, He), __privateSet(this, _h2, null), __privateSet(this, _x2, null), __privateSet(this, _s2, null), __privateSet(this, _o2, null), __privateSet(this, _a2, null), __privateSet(this, _i2, null), __privateSet(this, _m2, null), __privateSet(this, _b2, null);
  }
  get type() {
    return __privateGet(this, _e4);
  }
  set type(t) {
    switch (t) {
      case null:
        __privateSet(this, _e4, null);
        break;
      case 0:
      case "legacy":
        __privateSet(this, _e4, 0);
        break;
      case 1:
      case "berlin":
      case "eip-2930":
        __privateSet(this, _e4, 1);
        break;
      case 2:
      case "london":
      case "eip-1559":
        __privateSet(this, _e4, 2);
        break;
      case 3:
      case "cancun":
      case "eip-4844":
        __privateSet(this, _e4, 3);
        break;
      case 4:
      case "pectra":
      case "eip-7702":
        __privateSet(this, _e4, 4);
        break;
      default:
        P(false, "unsupported transaction type", "type", t);
    }
  }
  get typeName() {
    switch (this.type) {
      case 0:
        return "legacy";
      case 1:
        return "eip-2930";
      case 2:
        return "eip-1559";
      case 3:
        return "eip-4844";
      case 4:
        return "eip-7702";
    }
    return null;
  }
  get to() {
    const t = __privateGet(this, _t3);
    return t == null && this.type === 3 ? Vx : t;
  }
  set to(t) {
    __privateSet(this, _t3, t == null ? null : Mt(t));
  }
  get nonce() {
    return __privateGet(this, _n3);
  }
  set nonce(t) {
    __privateSet(this, _n3, kt(t, "value"));
  }
  get gasLimit() {
    return __privateGet(this, _l2);
  }
  set gasLimit(t) {
    __privateSet(this, _l2, he(t));
  }
  get gasPrice() {
    const t = __privateGet(this, _c2);
    return t == null && (this.type === 0 || this.type === 1) ? He : t;
  }
  set gasPrice(t) {
    __privateSet(this, _c2, t == null ? null : he(t, "gasPrice"));
  }
  get maxPriorityFeePerGas() {
    const t = __privateGet(this, _u2);
    return t ?? (this.type === 2 || this.type === 3 ? He : null);
  }
  set maxPriorityFeePerGas(t) {
    __privateSet(this, _u2, t == null ? null : he(t, "maxPriorityFeePerGas"));
  }
  get maxFeePerGas() {
    const t = __privateGet(this, _d2);
    return t ?? (this.type === 2 || this.type === 3 ? He : null);
  }
  set maxFeePerGas(t) {
    __privateSet(this, _d2, t == null ? null : he(t, "maxFeePerGas"));
  }
  get data() {
    return __privateGet(this, _r3);
  }
  set data(t) {
    __privateSet(this, _r3, D(t));
  }
  get value() {
    return __privateGet(this, _f2);
  }
  set value(t) {
    __privateSet(this, _f2, he(t, "value"));
  }
  get chainId() {
    return __privateGet(this, _p2);
  }
  set chainId(t) {
    __privateSet(this, _p2, he(t));
  }
  get signature() {
    return __privateGet(this, _h2) || null;
  }
  set signature(t) {
    __privateSet(this, _h2, t == null ? null : _e.from(t));
  }
  isValid() {
    const t = this.signature;
    if (t && !t.isValid()) return false;
    const r = this.authorizationList;
    if (r) {
      for (const n of r) if (!n.signature.isValid()) return false;
    }
    return true;
  }
  get accessList() {
    const t = __privateGet(this, _x2) || null;
    return t ?? (this.type === 1 || this.type === 2 || this.type === 3 ? [] : null);
  }
  set accessList(t) {
    __privateSet(this, _x2, t == null ? null : Ns(t));
  }
  get authorizationList() {
    const t = __privateGet(this, _m2) || null;
    return t == null && this.type === 4 ? [] : t;
  }
  set authorizationList(t) {
    __privateSet(this, _m2, t == null ? null : t.map((r) => Py(r)));
  }
  get maxFeePerBlobGas() {
    const t = __privateGet(this, _s2);
    return t == null && this.type === 3 ? He : t;
  }
  set maxFeePerBlobGas(t) {
    __privateSet(this, _s2, t == null ? null : he(t, "maxFeePerBlobGas"));
  }
  get blobVersionedHashes() {
    let t = __privateGet(this, _o2);
    return t == null && this.type === 3 ? [] : t;
  }
  set blobVersionedHashes(t) {
    if (t != null) {
      P(Array.isArray(t), "blobVersionedHashes must be an Array", "value", t), t = t.slice();
      for (let r = 0; r < t.length; r++) P(mr(t[r], 32), "invalid blobVersionedHash", `value[${r}]`, t[r]);
    }
    __privateSet(this, _o2, t);
  }
  get blobs() {
    return __privateGet(this, _i2) == null ? null : __privateGet(this, _i2).map((t) => Object.assign({}, t));
  }
  set blobs(t) {
    if (t == null) {
      __privateSet(this, _i2, null);
      return;
    }
    const r = [], n = [];
    for (let a = 0; a < t.length; a++) {
      const o = t[a];
      if (zs(o)) {
        ie(__privateGet(this, _a2), "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", { operation: "set blobs()" });
        let i = K(o);
        if (P(i.length <= ml, "blob is too large", `blobs[${a}]`, o), i.length !== ml) {
          const d = new Uint8Array(ml);
          d.set(i), i = d;
        }
        const s = __privateGet(this, _a2).blobToKzgCommitment(i), l = D(__privateGet(this, _a2).computeBlobKzgProof(i, s));
        r.push({ data: D(i), commitment: D(s), proof: l }), n.push(Ld(1, s));
      } else {
        const i = D(o.data), s = D(o.commitment), l = D(o.proof);
        r.push({ data: i, commitment: s, proof: l }), n.push(Ld(1, s));
      }
    }
    __privateSet(this, _i2, r), __privateSet(this, _o2, n);
  }
  get kzg() {
    return __privateGet(this, _a2);
  }
  set kzg(t) {
    t == null ? __privateSet(this, _a2, null) : __privateSet(this, _a2, Ry(t));
  }
  get blobWrapperVersion() {
    return __privateGet(this, _b2);
  }
  set blobWrapperVersion(t) {
    __privateSet(this, _b2, t);
  }
  get hash() {
    return this.signature == null ? null : $e(__privateMethod(this, _Kt_instances, g_fn).call(this, true, false));
  }
  get unsignedHash() {
    return $e(this.unsignedSerialized);
  }
  get from() {
    return this.signature == null ? null : Cy(this.unsignedHash, this.signature.getCanonical());
  }
  get fromPublicKey() {
    return this.signature == null ? null : gt.recoverPublicKey(this.unsignedHash, this.signature.getCanonical());
  }
  isSigned() {
    return this.signature != null;
  }
  get serialized() {
    return __privateMethod(this, _Kt_instances, g_fn).call(this, true, true);
  }
  get unsignedSerialized() {
    return __privateMethod(this, _Kt_instances, g_fn).call(this, false, false);
  }
  inferType() {
    const t = this.inferTypes();
    return t.indexOf(2) >= 0 ? 2 : t.pop();
  }
  inferTypes() {
    const t = this.gasPrice != null, r = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null, n = this.accessList != null, a = __privateGet(this, _s2) != null || __privateGet(this, _o2);
    this.maxFeePerGas != null && this.maxPriorityFeePerGas != null && ie(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this }), ie(!r || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this }), ie(this.type !== 0 || !n, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
    const o = [];
    return this.type != null ? o.push(this.type) : this.authorizationList && this.authorizationList.length ? o.push(4) : r ? o.push(2) : t ? (o.push(1), n || o.push(0)) : n ? (o.push(1), o.push(2)) : (a && this.to || (o.push(0), o.push(1), o.push(2)), o.push(3)), o.sort(), o;
  }
  isLegacy() {
    return this.type === 0;
  }
  isBerlin() {
    return this.type === 1;
  }
  isLondon() {
    return this.type === 2;
  }
  isCancun() {
    return this.type === 3;
  }
  clone() {
    return _Kt.from(this);
  }
  toJSON() {
    const t = (r) => r == null ? null : r.toString();
    return { type: this.type, to: this.to, data: this.data, nonce: this.nonce, gasLimit: t(this.gasLimit), gasPrice: t(this.gasPrice), maxPriorityFeePerGas: t(this.maxPriorityFeePerGas), maxFeePerGas: t(this.maxFeePerGas), value: t(this.value), chainId: t(this.chainId), sig: this.signature ? this.signature.toJSON() : null, accessList: this.accessList };
  }
  [Oy]() {
    return this.toString();
  }
  toString() {
    const t = [], r = (a) => {
      let o = this[a];
      typeof o == "string" && (o = JSON.stringify(o)), t.push(`${a}: ${o}`);
    };
    this.type && r("type"), r("to"), r("data"), r("nonce"), r("gasLimit"), r("value"), this.chainId != null && r("chainId"), this.signature && (r("from"), t.push(`signature: ${this.signature.toString()}`));
    const n = this.authorizationList;
    if (n) {
      const a = [];
      for (const o of n) {
        const i = [];
        i.push(`address: ${JSON.stringify(o.address)}`), o.nonce != null && i.push(`nonce: ${o.nonce}`), o.chainId != null && i.push(`chainId: ${o.chainId}`), o.signature && i.push(`signature: ${o.signature.toString()}`), a.push(`Authorization { ${i.join(", ")} }`);
      }
      t.push(`authorizations: [ ${a.join(", ")} ]`);
    }
    return `Transaction { ${t.join(", ")} }`;
  }
  static from(t) {
    if (t == null) return new _Kt();
    if (typeof t == "string") {
      const n = K(t);
      if (n[0] >= 127) return _Kt.from(My(n));
      switch (n[0]) {
        case 1:
          return _Kt.from(qy(n));
        case 2:
          return _Kt.from(Vy(n));
        case 3:
          return _Kt.from(Wy(n));
        case 4:
          return _Kt.from(Qy(n));
      }
      ie(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
    }
    const r = new _Kt();
    return t.type != null && (r.type = t.type), t.to != null && (r.to = t.to), t.nonce != null && (r.nonce = t.nonce), t.gasLimit != null && (r.gasLimit = t.gasLimit), t.gasPrice != null && (r.gasPrice = t.gasPrice), t.maxPriorityFeePerGas != null && (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas), t.maxFeePerGas != null && (r.maxFeePerGas = t.maxFeePerGas), t.maxFeePerBlobGas != null && (r.maxFeePerBlobGas = t.maxFeePerBlobGas), t.data != null && (r.data = t.data), t.value != null && (r.value = t.value), t.chainId != null && (r.chainId = t.chainId), t.signature != null && (r.signature = _e.from(t.signature)), t.accessList != null && (r.accessList = t.accessList), t.authorizationList != null && (r.authorizationList = t.authorizationList), t.blobVersionedHashes != null && (r.blobVersionedHashes = t.blobVersionedHashes), t.kzg != null && (r.kzg = t.kzg), t.blobWrapperVersion != null && (r.blobWrapperVersion = t.blobWrapperVersion), t.blobs != null && (r.blobs = t.blobs), t.hash != null && (P(r.isSigned(), "unsigned transaction cannot define '.hash'", "tx", t), P(r.hash === t.hash, "hash mismatch", "tx", t)), t.from != null && (P(r.isSigned(), "unsigned transaction cannot define '.from'", "tx", t), P(r.from.toLowerCase() === (t.from || "").toLowerCase(), "from mismatch", "tx", t)), r;
  }
};
_e4 = new WeakMap();
_t3 = new WeakMap();
_r3 = new WeakMap();
_n3 = new WeakMap();
_l2 = new WeakMap();
_c2 = new WeakMap();
_u2 = new WeakMap();
_d2 = new WeakMap();
_f2 = new WeakMap();
_p2 = new WeakMap();
_h2 = new WeakMap();
_x2 = new WeakMap();
_s2 = new WeakMap();
_o2 = new WeakMap();
_a2 = new WeakMap();
_i2 = new WeakMap();
_m2 = new WeakMap();
_b2 = new WeakMap();
_Kt_instances = new WeakSet();
g_fn = function(t, r) {
  ie(!t || this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
  const n = t ? this.signature : null;
  switch (this.inferType()) {
    case 0:
      return Dy(this, n);
    case 1:
      return Ky(this, n);
    case 2:
      return Gy(this, n);
    case 3:
      return Yy(this, n, r ? this.blobs : null);
    case 4:
      return Zy(this, n);
  }
  ie(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
};
let Kt = _Kt;
function Xy(e) {
  return P(typeof e.address == "string", "invalid address for hashAuthorization", "auth.address", e), $e(Pe(["0x05", Ir([e.chainId != null ? Ne(e.chainId) : "0x", Mt(e.address), e.nonce != null ? Ne(e.nonce) : "0x"])]));
}
function Du(e) {
  return $e(Bn(e));
}
function Jy(e) {
  return typeof e == "string" && (e = Bn(e)), $e(Pe([Bn(wy), Bn(String(e.length)), e]));
}
const qx = new Uint8Array(32);
qx.fill(0);
const ev = BigInt(-1), Kx = BigInt(0), Wx = BigInt(1), tv = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function rv(e) {
  const t = K(e), r = t.length % 32;
  return r ? Pe([t, qx.slice(r)]) : D(t);
}
const nv = ba(Wx, 32), av = ba(Kx, 32), Td = { name: "string", version: "string", chainId: "uint256", verifyingContract: "address", salt: "bytes32" }, bl = ["name", "version", "chainId", "verifyingContract", "salt"];
function Ud(e) {
  return function(t) {
    return P(typeof t == "string", `invalid domain value for ${JSON.stringify(e)}`, `domain.${e}`, t), t;
  };
}
const ov = { name: Ud("name"), version: Ud("version"), chainId: function(e) {
  const t = he(e, "domain.chainId");
  return P(t >= 0, "invalid chain ID", "domain.chainId", e), Number.isSafeInteger(t) ? Number(t) : zg(t);
}, verifyingContract: function(e) {
  try {
    return Mt(e).toLowerCase();
  } catch {
  }
  P(false, 'invalid domain value "verifyingContract"', "domain.verifyingContract", e);
}, salt: function(e) {
  const t = K(e, "domain.salt");
  return P(t.length === 32, 'invalid domain value "salt"', "domain.salt", e), D(t);
} };
function gl(e) {
  {
    const t = e.match(/^(u?)int(\d+)$/);
    if (t) {
      const r = t[1] === "", n = parseInt(t[2]);
      P(n % 8 === 0 && n !== 0 && n <= 256 && t[2] === String(n), "invalid numeric width", "type", e);
      const a = Sg(tv, r ? n - 1 : n), o = r ? (a + Wx) * ev : Kx;
      return function(i) {
        const s = he(i, "value");
        return P(s >= o && s <= a, `value out-of-bounds for ${e}`, "value", s), ba(r ? Eg(s, 256) : s, 32);
      };
    }
  }
  {
    const t = e.match(/^bytes(\d+)$/);
    if (t) {
      const r = parseInt(t[1]);
      return P(r !== 0 && r <= 32 && t[1] === String(r), "invalid bytes width", "type", e), function(n) {
        const a = K(n);
        return P(a.length === r, `invalid length for ${e}`, "value", n), rv(n);
      };
    }
  }
  switch (e) {
    case "address":
      return function(t) {
        return cn(Mt(t), 32);
      };
    case "bool":
      return function(t) {
        return t ? nv : av;
      };
    case "bytes":
      return function(t) {
        return $e(t);
      };
    case "string":
      return function(t) {
        return Du(t);
      };
  }
  return null;
}
function Od(e, t) {
  return `${e}(${t.map(({ name: r, type: n }) => n + " " + r).join(",")})`;
}
function di(e) {
  const t = e.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
  return t ? { base: t[1], index: t[2] + t[4], array: { base: t[1], prefix: t[1] + t[2], count: t[5] ? parseInt(t[5]) : -1 } } : { base: e };
}
const _xt = class _xt {
  constructor(t) {
    __privateAdd(this, _xt_instances);
    __publicField(this, "primaryType");
    __privateAdd(this, _e5);
    __privateAdd(this, _t4);
    __privateAdd(this, _r4);
    __privateSet(this, _t4, /* @__PURE__ */ new Map()), __privateSet(this, _r4, /* @__PURE__ */ new Map());
    const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = {};
    Object.keys(t).forEach((l) => {
      o[l] = t[l].map(({ name: d, type: h }) => {
        let { base: f, index: x } = di(h);
        return f === "int" && !t.int && (f = "int256"), f === "uint" && !t.uint && (f = "uint256"), { name: d, type: f + (x || "") };
      }), r.set(l, /* @__PURE__ */ new Set()), n.set(l, []), a.set(l, /* @__PURE__ */ new Set());
    }), __privateSet(this, _e5, JSON.stringify(o));
    for (const l in o) {
      const d = /* @__PURE__ */ new Set();
      for (const h of o[l]) {
        P(!d.has(h.name), `duplicate variable name ${JSON.stringify(h.name)} in ${JSON.stringify(l)}`, "types", t), d.add(h.name);
        const f = di(h.type).base;
        P(f !== l, `circular type reference to ${JSON.stringify(f)}`, "types", t), !gl(f) && (P(n.has(f), `unknown type ${JSON.stringify(f)}`, "types", t), n.get(f).push(l), r.get(l).add(f));
      }
    }
    const i = Array.from(n.keys()).filter((l) => n.get(l).length === 0);
    P(i.length !== 0, "missing primary type", "types", t), P(i.length === 1, `ambiguous primary types or unused types: ${i.map((l) => JSON.stringify(l)).join(", ")}`, "types", t), wt(this, { primaryType: i[0] });
    function s(l, d) {
      P(!d.has(l), `circular type reference to ${JSON.stringify(l)}`, "types", t), d.add(l);
      for (const h of r.get(l)) if (n.has(h)) {
        s(h, d);
        for (const f of d) a.get(f).add(h);
      }
      d.delete(l);
    }
    s(this.primaryType, /* @__PURE__ */ new Set());
    for (const [l, d] of a) {
      const h = Array.from(d);
      h.sort(), __privateGet(this, _t4).set(l, Od(l, o[l]) + h.map((f) => Od(f, o[f])).join(""));
    }
  }
  get types() {
    return JSON.parse(__privateGet(this, _e5));
  }
  getEncoder(t) {
    let r = __privateGet(this, _r4).get(t);
    return r || (r = __privateMethod(this, _xt_instances, n_fn).call(this, t), __privateGet(this, _r4).set(t, r)), r;
  }
  encodeType(t) {
    const r = __privateGet(this, _t4).get(t);
    return P(r, `unknown type: ${JSON.stringify(t)}`, "name", t), r;
  }
  encodeData(t, r) {
    return this.getEncoder(t)(r);
  }
  hashStruct(t, r) {
    return $e(this.encodeData(t, r));
  }
  encode(t) {
    return this.encodeData(this.primaryType, t);
  }
  hash(t) {
    return this.hashStruct(this.primaryType, t);
  }
  _visit(t, r, n) {
    if (gl(t)) return n(t, r);
    const a = di(t).array;
    if (a) return P(a.count === -1 || a.count === r.length, `array length mismatch; expected length ${a.count}`, "value", r), r.map((i) => this._visit(a.prefix, i, n));
    const o = this.types[t];
    if (o) return o.reduce((i, { name: s, type: l }) => (i[s] = this._visit(l, r[s], n), i), {});
    P(false, `unknown type: ${t}`, "type", t);
  }
  visit(t, r) {
    return this._visit(this.primaryType, t, r);
  }
  static from(t) {
    return new _xt(t);
  }
  static getPrimaryType(t) {
    return _xt.from(t).primaryType;
  }
  static hashStruct(t, r, n) {
    return _xt.from(r).hashStruct(t, n);
  }
  static hashDomain(t) {
    const r = [];
    for (const n in t) {
      if (t[n] == null) continue;
      const a = Td[n];
      P(a, `invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", t), r.push({ name: n, type: a });
    }
    return r.sort((n, a) => bl.indexOf(n.name) - bl.indexOf(a.name)), _xt.hashStruct("EIP712Domain", { EIP712Domain: r }, t);
  }
  static encode(t, r, n) {
    return Pe(["0x1901", _xt.hashDomain(t), _xt.from(r).hash(n)]);
  }
  static hash(t, r, n) {
    return $e(_xt.encode(t, r, n));
  }
  static async resolveNames(t, r, n, a) {
    t = Object.assign({}, t);
    for (const s in t) t[s] == null && delete t[s];
    const o = {};
    t.verifyingContract && !mr(t.verifyingContract, 20) && (o[t.verifyingContract] = "0x");
    const i = _xt.from(r);
    i.visit(n, (s, l) => (s === "address" && !mr(l, 20) && (o[l] = "0x"), l));
    for (const s in o) o[s] = await a(s);
    return t.verifyingContract && o[t.verifyingContract] && (t.verifyingContract = o[t.verifyingContract]), n = i.visit(n, (s, l) => s === "address" && o[l] ? o[l] : l), { domain: t, value: n };
  }
  static getPayload(t, r, n) {
    _xt.hashDomain(t);
    const a = {}, o = [];
    bl.forEach((l) => {
      const d = t[l];
      d != null && (a[l] = ov[l](d), o.push({ name: l, type: Td[l] }));
    });
    const i = _xt.from(r);
    r = i.types;
    const s = Object.assign({}, r);
    return P(s.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", r), s.EIP712Domain = o, i.encode(n), { types: s, domain: a, primaryType: i.primaryType, message: i.visit(n, (l, d) => {
      if (l.match(/^bytes(\d*)/)) return D(K(d));
      if (l.match(/^u?int/)) return he(d).toString();
      switch (l) {
        case "address":
          return d.toLowerCase();
        case "bool":
          return !!d;
        case "string":
          return P(typeof d == "string", "invalid string", "value", d), d;
      }
      P(false, "unsupported type", "type", l);
    }) };
  }
};
_e5 = new WeakMap();
_t4 = new WeakMap();
_r4 = new WeakMap();
_xt_instances = new WeakSet();
n_fn = function(t) {
  {
    const a = gl(t);
    if (a) return a;
  }
  const r = di(t).array;
  if (r) {
    const a = r.prefix, o = this.getEncoder(a);
    return (i) => {
      P(r.count === -1 || r.count === i.length, `array length mismatch; expected length ${r.count}`, "value", i);
      let s = i.map(o);
      return __privateGet(this, _t4).has(a) && (s = s.map($e)), $e(Pe(s));
    };
  }
  const n = this.types[t];
  if (n) {
    const a = Du(__privateGet(this, _t4).get(t));
    return (o) => {
      const i = n.map(({ name: s, type: l }) => {
        const d = this.getEncoder(l)(o[s]);
        return __privateGet(this, _t4).has(l) ? $e(d) : d;
      });
      return i.unshift(a), Pe(i);
    };
  }
  P(false, `unknown type: ${t}`, "type", t);
};
let xt = _xt;
BigInt(0);
function Yx(e) {
  const t = {};
  e.to && (t.to = e.to), e.from && (t.from = e.from), e.data && (t.data = D(e.data));
  const r = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const a of r) !(a in e) || e[a] == null || (t[a] = he(e[a], `request.${a}`));
  const n = "type,nonce".split(/,/);
  for (const a of n) !(a in e) || e[a] == null || (t[a] = kt(e[a], `request.${a}`));
  return e.accessList && (t.accessList = Ns(e.accessList)), e.authorizationList && (t.authorizationList = e.authorizationList.slice()), "blockTag" in e && (t.blockTag = e.blockTag), "enableCcipRead" in e && (t.enableCcipRead = !!e.enableCcipRead), "customData" in e && (t.customData = e.customData), "blobVersionedHashes" in e && e.blobVersionedHashes && (t.blobVersionedHashes = e.blobVersionedHashes.slice()), "kzg" in e && (t.kzg = e.kzg), "blobWrapperVersion" in e && (t.blobWrapperVersion = e.blobWrapperVersion), "blobs" in e && e.blobs && (t.blobs = e.blobs.map((a) => zs(a) ? D(a) : Object.assign({}, a))), t;
}
function xn(e, t) {
  if (e.provider) return e.provider;
  ie(false, "missing provider", "UNSUPPORTED_OPERATION", { operation: t });
}
async function Rd(e, t) {
  let r = Yx(t);
  if (r.to != null && (r.to = eo(r.to, e)), r.from != null) {
    const n = r.from;
    r.from = Promise.all([e.getAddress(), eo(n, e)]).then(([a, o]) => (P(a.toLowerCase() === o.toLowerCase(), "transaction from mismatch", "tx.from", o), a));
  } else r.from = e.getAddress();
  return await zu(r);
}
class Qx {
  constructor(t) {
    __publicField(this, "provider");
    wt(this, { provider: t || null });
  }
  async getNonce(t) {
    return xn(this, "getTransactionCount").getTransactionCount(await this.getAddress(), t);
  }
  async populateCall(t) {
    return await Rd(this, t);
  }
  async populateTransaction(t) {
    const r = xn(this, "populateTransaction"), n = await Rd(this, t);
    n.nonce == null && (n.nonce = await this.getNonce("pending")), n.gasLimit == null && (n.gasLimit = await this.estimateGas(n));
    const a = await this.provider.getNetwork();
    if (n.chainId != null) {
      const i = he(n.chainId);
      P(i === a.chainId, "transaction chainId mismatch", "tx.chainId", t.chainId);
    } else n.chainId = a.chainId;
    const o = n.maxFeePerGas != null || n.maxPriorityFeePerGas != null;
    if (n.gasPrice != null && (n.type === 2 || o) ? P(false, "eip-1559 transaction do not support gasPrice", "tx", t) : (n.type === 0 || n.type === 1) && o && P(false, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", t), (n.type === 2 || n.type == null) && n.maxFeePerGas != null && n.maxPriorityFeePerGas != null) n.type = 2;
    else if (n.type === 0 || n.type === 1) {
      const i = await r.getFeeData();
      ie(i.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", { operation: "getGasPrice" }), n.gasPrice == null && (n.gasPrice = i.gasPrice);
    } else {
      const i = await r.getFeeData();
      if (n.type == null) if (i.maxFeePerGas != null && i.maxPriorityFeePerGas != null) if (n.authorizationList && n.authorizationList.length ? n.type = 4 : n.type = 2, n.gasPrice != null) {
        const s = n.gasPrice;
        delete n.gasPrice, n.maxFeePerGas = s, n.maxPriorityFeePerGas = s;
      } else n.maxFeePerGas == null && (n.maxFeePerGas = i.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = i.maxPriorityFeePerGas);
      else i.gasPrice != null ? (ie(!o, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", { operation: "populateTransaction" }), n.gasPrice == null && (n.gasPrice = i.gasPrice), n.type = 0) : ie(false, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", { operation: "signer.getFeeData" });
      else (n.type === 2 || n.type === 3 || n.type === 4) && (n.maxFeePerGas == null && (n.maxFeePerGas = i.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = i.maxPriorityFeePerGas));
    }
    return await zu(n);
  }
  async populateAuthorization(t) {
    const r = Object.assign({}, t);
    return r.chainId == null && (r.chainId = (await xn(this, "getNetwork").getNetwork()).chainId), r.nonce == null && (r.nonce = await this.getNonce()), r;
  }
  async estimateGas(t) {
    return xn(this, "estimateGas").estimateGas(await this.populateCall(t));
  }
  async call(t) {
    return xn(this, "call").call(await this.populateCall(t));
  }
  async resolveName(t) {
    return await xn(this, "resolveName").resolveName(t);
  }
  async sendTransaction(t) {
    const r = xn(this, "sendTransaction"), n = await this.populateTransaction(t);
    delete n.from;
    const a = Kt.from(n);
    return await r.broadcastTransaction(await this.signTransaction(a));
  }
  authorize(t) {
    ie(false, "authorization not implemented for this signer", "UNSUPPORTED_OPERATION", { operation: "authorize" });
  }
}
const _Vu = class _Vu extends Qx {
  constructor(t, r) {
    super(r);
    __privateAdd(this, _Vu_instances);
    __publicField(this, "address");
    wt(this, { address: t });
  }
  async getAddress() {
    return this.address;
  }
  connect(t) {
    return new _Vu(this.address, t);
  }
  async signTransaction(t) {
    __privateMethod(this, _Vu_instances, e_fn).call(this, "transactions", "signTransaction");
  }
  async signMessage(t) {
    __privateMethod(this, _Vu_instances, e_fn).call(this, "messages", "signMessage");
  }
  async signTypedData(t, r, n) {
    __privateMethod(this, _Vu_instances, e_fn).call(this, "typed-data", "signTypedData");
  }
};
_Vu_instances = new WeakSet();
e_fn = function(t, r) {
  ie(false, `VoidSigner cannot sign ${t}`, "UNSUPPORTED_OPERATION", { operation: r });
};
let Vu = _Vu;
const _Gu = class _Gu extends Qx {
  constructor(t, r) {
    super(r);
    __publicField(this, "address");
    __privateAdd(this, _e6);
    P(t && typeof t.sign == "function", "invalid private key", "privateKey", "[ REDACTED ]"), __privateSet(this, _e6, t);
    const n = Ps(this.signingKey.publicKey);
    wt(this, { address: n });
  }
  get signingKey() {
    return __privateGet(this, _e6);
  }
  get privateKey() {
    return this.signingKey.privateKey;
  }
  async getAddress() {
    return this.address;
  }
  connect(t) {
    return new _Gu(__privateGet(this, _e6), t);
  }
  async signTransaction(t) {
    t = Yx(t);
    const { to: r, from: n } = await zu({ to: t.to ? eo(t.to, this) : void 0, from: t.from ? eo(t.from, this) : void 0 });
    r != null && (t.to = r), n != null && (t.from = n), t.from != null && (P(Mt(t.from) === this.address, "transaction from address mismatch", "tx.from", t.from), delete t.from);
    const a = Kt.from(t);
    return a.signature = this.signingKey.sign(a.unsignedHash), a.serialized;
  }
  async signMessage(t) {
    return this.signMessageSync(t);
  }
  signMessageSync(t) {
    return this.signingKey.sign(Jy(t)).serialized;
  }
  authorizeSync(t) {
    P(typeof t.address == "string", "invalid address for authorizeSync", "auth.address", t);
    const r = this.signingKey.sign(Xy(t));
    return Object.assign({}, { address: Mt(t.address), nonce: he(t.nonce || 0), chainId: he(t.chainId || 0) }, { signature: r });
  }
  async authorize(t) {
    return t = Object.assign({}, t, { address: await eo(t.address, this) }), this.authorizeSync(await this.populateAuthorization(t));
  }
  async signTypedData(t, r, n) {
    const a = await xt.resolveNames(t, r, n, async (o) => {
      ie(this.provider != null, "cannot resolve ENS names without a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName", info: { name: o } });
      const i = await this.provider.resolveName(o);
      return ie(i != null, "unconfigured ENS name", "UNCONFIGURED_NAME", { value: o }), i;
    });
    return this.signingKey.sign(xt.hash(a.domain, r, a.value)).serialized;
  }
};
_e6 = new WeakMap();
let Gu = _Gu;
const rs = " !#$%&'()*+,-./<=>?@[]^_`{|}~", iv = /^[a-z]*$/i;
function Fd(e, t) {
  let r = 97;
  return e.reduce((n, a) => (a === t ? r++ : a.match(iv) ? n.push(String.fromCharCode(r) + a) : (r = 97, n.push(a)), n), []);
}
function sv(e, t) {
  for (let a = rs.length - 1; a >= 0; a--) e = e.split(rs[a]).join(t.substring(2 * a, 2 * a + 2));
  const r = [], n = e.replace(/(:|([0-9])|([A-Z][a-z]*))/g, (a, o, i, s) => {
    if (i) for (let l = parseInt(i); l >= 0; l--) r.push(";");
    else r.push(o.toLowerCase());
    return "";
  });
  if (n) throw new Error(`leftovers: ${JSON.stringify(n)}`);
  return Fd(Fd(r, ";"), ":");
}
function lv(e) {
  return P(e[0] === "0", "unsupported auwl data", "data", e), sv(e.substring(1 + 2 * rs.length), e.substring(1, 1 + 2 * rs.length));
}
class cv {
  constructor(t) {
    __publicField(this, "locale");
    wt(this, { locale: t });
  }
  split(t) {
    return t.toLowerCase().split(/\s+/g);
  }
  join(t) {
    return t.join(" ");
  }
}
class uv extends cv {
  constructor(t, r, n) {
    super(t);
    __privateAdd(this, _uv_instances);
    __privateAdd(this, _e7);
    __privateAdd(this, _t5);
    __privateAdd(this, _r5);
    __privateSet(this, _e7, r), __privateSet(this, _t5, n), __privateSet(this, _r5, null);
  }
  get _data() {
    return __privateGet(this, _e7);
  }
  _decodeWords() {
    return lv(__privateGet(this, _e7));
  }
  getWord(t) {
    const r = __privateMethod(this, _uv_instances, n_fn2).call(this);
    return P(t >= 0 && t < r.length, `invalid word index: ${t}`, "index", t), r[t];
  }
  getWordIndex(t) {
    return __privateMethod(this, _uv_instances, n_fn2).call(this).indexOf(t);
  }
}
_e7 = new WeakMap();
_t5 = new WeakMap();
_r5 = new WeakMap();
_uv_instances = new WeakSet();
n_fn2 = function() {
  if (__privateGet(this, _r5) == null) {
    const t = this._decodeWords();
    if (Du(t.join(`
`) + `
`) !== __privateGet(this, _t5)) throw new Error(`BIP39 Wordlist for ${this.locale} FAILED`);
    __privateSet(this, _r5, t);
  }
  return __privateGet(this, _r5);
};
const dv = "0erleonalorenseinceregesticitStanvetearctssi#ch2Athck&tneLl0And#Il.yLeOutO=S|S%b/ra@SurdU'0Ce[Cid|CountCu'Hie=IdOu,-Qui*Ro[TT]T%T*[Tu$0AptDD-tD*[Ju,M.UltV<)Vi)0Rob-0FairF%dRaid0A(EEntRee0Ead0MRRp%tS!_rmBumCoholErtI&LLeyLowMo,O}PhaReadySoT Ways0A>urAz(gOngOuntU'd0Aly,Ch%Ci|G G!GryIm$K!Noun)Nu$O` Sw T&naTiqueXietyY1ArtOlogyPe?P!Pro=Ril1ChCt-EaEnaGueMMedM%MyOundR<+Re,Ri=RowTTefa@Ti,Tw%k0KPe@SaultSetSi,SumeThma0H!>OmTa{T&dT.udeTra@0Ct]D.Gu,NtTh%ToTumn0Era+OcadoOid0AkeA*AyEsomeFulKw?d0Is:ByChel%C#D+GL<)Lc#y~MbooN<aNn RRelyRga(R*lSeS-SketTt!3A^AnAutyCau'ComeEfF%eG(Ha=H(dLie=LowLtN^Nef./TrayTt Twe&Y#d3Cyc!DKeNdOlogyRdR`Tt _{AdeAmeAnketA,EakE[IndOodO[omOu'UeUrUsh_rdAtDyIlMbNeNusOkO,Rd R(gRrowSsTtomUn)XY_{etA(AndA[A=EadEezeI{Id+IefIghtIngIskOccoliOk&OnzeOomO` OwnUsh2Bb!DdyD+tFf$oIldLbLkL!tNd!Nk Rd&Rg R,SS(e[SyTt Y Zz:Bba+B(B!CtusGeKe~LmM aMpNN$N)lNdyNn#NoeNvasNy#Pab!P.$Pta(RRb#RdRgoRpetRryRtSeShS(o/!Su$TT$ogT^Teg%yTt!UghtU'Ut]Ve3Il(gL yM|NsusNturyRe$Rta(_irAlkAmp]An+AosApt Ar+A'AtEapE{Ee'EfErryE,I{&IefIldIm}yOi)Oo'R#-U{!UnkUrn0G?Nnam#Rc!Tiz&TyVil_imApArifyAwAyE<ErkEv I{I|IffImbIn-IpO{OgO'O`OudOwnUbUmpU, Ut^_^A,C#utDeFfeeIlInL!@L%LumnMb(eMeMf%tM-Mm#Mp<yNc tNdu@NfirmNg*[N}@Nsid NtrolNv()OkOlPp PyR$ReRnR*@/Tt#U^UntryUp!Ur'Us(V Yo>_{Ad!AftAmA}AshAt AwlAzyEamEd.EekEwI{etImeIspIt-OpO[Ou^OwdUci$UelUi'Umb!Un^UshYY,$2BeLtu*PPbo?dRiousRr|Rta(R=Sh]/omTe3C!:DMa+MpN)Ng R(gShUght WnY3AlBa>BrisCadeCemb CideCl(eC%a>C*a'ErF&'F(eFyG*eLayLiv M<dMi'Ni$Nti,NyP?tP&dPos.P`PutyRi=ScribeS tSignSkSpair/royTailTe@VelopVi)Vo>3AgramAlAm#dAryCeE'lEtFf G.$Gn.yLemmaNn NosaurRe@RtSag*eScov Sea'ShSmi[S%d Splay/<)V tVideV%)Zzy5Ct%Cum|G~Lph(Ma(Na>NkeyN%OrSeUb!Ve_ftAg#AmaA,-AwEamE[IftIllInkIpI=OpUmY2CkMbNeR(g/T^Ty1Arf1Nam-:G G!RlyRnR`Sily/Sy1HoOlogyOnomy0GeItUca>1F%t0G1GhtTh 2BowD E@r-Eg<tEm|Eph<tEvat%I>Se0B?kBodyBra)Er+Ot]PloyPow Pty0Ab!A@DD![D%'EmyErgyF%)Ga+G(eH<)JoyLi,OughR-hRollSu*T Ti*TryVelope1Isode0U$Uip0AA'OdeOs]R%Upt0CapeSayS&)Ta>0Ern$H-s1Id&)IlOkeOl=1A@Amp!Ce[Ch<+C.eCludeCu'Ecu>Erci'Hau,Hib.I!I,ItOt-P<dPe@Pi*Pla(Po'P*[T&dTra0EEbrow:Br-CeCultyDeIntI`~L'MeMilyMousNNcyNtasyRmSh]TT$Th TigueUltV%.e3Atu*Bru?yD $EEdElMa!N)/iv$T^V W3B Ct]EldGu*LeLmLt N$NdNeNg NishReRmR,Sc$ShTT}[X_gAmeAshAtAv%EeIghtIpOatO{O%Ow UidUshY_mCusGIlLd~owOdOtR)Re,R+tRkRtu}RumRw?dSsil/ UndX_gi!AmeEqu|EshI&dIn+OgOntO,OwnOz&U.2ElNNnyRna)RyTu*:D+tInLaxy~ yMePRa+Rba+Rd&Rl-Rm|SSpTeTh U+Ze3N $NiusN*Nt!Nu(e/u*2O,0AntFtGg!Ng RaffeRlVe_dAn)A*A[IdeImp'ObeOomOryO=OwUe_tDde[LdOdO'RillaSpelSsipV nWn_bA)A(AntApeA[Av.yEatE&IdIefItOc yOupOwUnt_rdE[IdeIltIt?N3M:B.IrLfMm M, NdPpyRb%RdRshR=,TVeWkZ?d3AdAl`ArtAvyD+hogIght~oLmetLpNRo3Dd&Gh~NtPRe/%y5BbyCkeyLdLeLiday~owMeNeyOdPeRnRr%R'Sp.$/TelUrV 5BGeM<Mb!M%Nd*dNgryNtRd!RryRtSb<d3Brid:1EOn0EaEntifyLe2N%e4LLeg$L}[0A+Ita>M&'Mu}Pa@Po'Pro=Pul'0ChCludeComeC*a'DexD-a>Do%Du,ryF<tFl-tF%mHa!H .Iti$Je@JuryMa>N Noc|PutQuiryS<eSe@SideSpi*/$lTa@T e,ToVe,V.eVol=3On0L<dOla>Sue0Em1Ory:CketGu?RZz3AlousAns~yWel9BInKeUr}yY5D+I)MpNg!Ni%Nk/:Ng?oo3EnEpT^upY3CkDD}yNdNgdomSsTT^&TeTt&Wi4EeIfeO{Ow:BBelB%Dd DyKeMpNgua+PtopR+T T(UghUndryVaWWnWsu.Y Zy3Ad AfArnA=Ctu*FtGG$G&dIsu*M#NdNg`NsOp?dSs#Tt Vel3ArB tyBr?yC&'FeFtGhtKeMbM.NkOnQuid/Tt!VeZ?d5AdAnB, C$CkG-NelyNgOpTt yUdUn+VeY$5CkyGga+Mb N?N^Xury3R-s:Ch(eDG-G}tIdIlInJ%KeMm$NNa+Nda>NgoNs]Nu$P!Rb!R^Rg(R(eRketRria+SkSs/ T^T i$ThTrixTt XimumZe3AdowAnAsu*AtCh<-D$DiaLodyLtMb M%yNt]NuRcyR+R.RryShSsa+T$Thod3Dd!DnightLk~]M-NdNimumN%Nu>Rac!Rr%S ySs/akeXXedXtu*5Bi!DelDifyMM|N.%NkeyN, N`OnR$ReRn(gSqu.oTh T]T%Unta(U'VeVie5ChFf(LeLtiplySc!SeumShroomS-/Tu$3Self/ yTh:I=MePk(Rrow/yT]Tu*3ArCkEdGati=G!@I` PhewR=/TTw%kUtr$V WsXt3CeGht5B!I'M(eeOd!Rm$R`SeTab!TeTh(gTi)VelW5C!?Mb R'T:K0EyJe@Li+Scu*S =Ta(Vious0CurE<Tob 0Or1FF Fi)T&2L1Ay0DI=Ymp-0It0CeEI#L(eLy1EnEraIn]Po'T]1An+B.Ch?dD D(?yG<I|Ig($Ph<0Tr-h0H 0Tdo%T TputTside0AlEnEr0NN 0Yg&0/ 0O}:CtDd!GeIrLa)LmNdaNelN-N` P RadeR|RkRrotRtySsT^ThTi|TrolTt nU'VeYm|3A)AnutArAs<tL-<NN$tyNcilOp!Pp Rfe@Rm.Rs#T2O}OtoRa'Ys-$0AnoCn-Ctu*E)GGe#~LotNkO} Pe/olT^Zza_)A}tA,-A>AyEa'Ed+U{UgUn+2EmEtIntL?LeLi)NdNyOlPul?Rt]S.]Ssib!/TatoTt yV tyWd W _@i)Ai'Ed-tEf Epa*Es|EttyEv|I)IdeIm?yIntI%.yIs#Iva>IzeOb!mO)[Odu)Of.OgramOje@Omo>OofOp tyOsp O>@OudOvide2Bl-Dd(g~LpL'Mpk(N^PilPpyR^a'R.yRpo'R'ShTZz!3Ramid:99Al.yAntumArt E,]I{ItIzO>:Bb.Cco#CeCkD?DioIlInI'~yMpN^NdomN+PidReTeTh V&WZ%3AdyAlAs#BelBuildC$lCei=CipeC%dCyc!Du)F!@F%mFu'G]G*tGul?Je@LaxLea'LiefLyMa(Memb M(dMo=Nd NewNtOp&PairPeatPla)P%tQui*ScueSemb!Si,Sour)Sp#'SultTi*T*atTurnUn]Ve$ViewW?d2Y`m0BBb#CeChDeD+F!GhtGidNgOtPp!SkTu$V$V 5AdA,BotBu,CketM<)OfOkieOmSeTa>UghUndU>Y$5Bb DeGLeNNwayR$:DDd!D}[FeIlLadLm#L#LtLu>MeMp!NdTisfyToshiU)Usa+VeY1A!AnA*Att E}HemeHoolI&)I[%sOrp]OutRapRe&RiptRub1AAr^As#AtC#dC*tCt]Cur.yEdEkGm|Le@~M(?Ni%N'Nt&)RiesRvi)Ss]Tt!TupV&_dowAftAllowA*EdEllEriffIeldIftI}IpIv O{OeOotOpOrtOuld O=RimpRugUff!Y0Bl(gCkDeE+GhtGnL|Lk~yLv Mil?Mp!N)NgR&/ Tua>XZe1A>Et^IIllInIrtUll0AbAmEepEnd I)IdeIghtImOg<OtOwUsh0AllArtI!OkeOo`0A{AkeApIffOw0ApCc Ci$CkDaFtL?Ldi LidLut]L=Me#eNgOnRryRtUlUndUpUr)U`0A)A*Ati$AwnEakEci$EedEllEndH eI)Id IkeInIr.L.OilOns%O#OrtOtRayReadR(gY0Ua*UeezeUir*l_b!AdiumAffA+AirsAmpAndArtA>AyEakEelEmEpE*oI{IllIngO{Oma^O}OolOryO=Ra>gyReetRikeR#gRugg!Ud|UffUmb!Y!0Bje@Bm.BwayC)[ChDd&Ff G?G+,ItMm NNnyN'tP PplyP*meReRfa)R+Rpri'RroundR=ySpe@/a(1AllowAmpApArmE?EetIftImIngIt^Ord1MbolMptomRup/em:B!Ck!GIlL|LkNkPeR+tSk/eTtooXi3A^Am~NN<tNnisNtRm/Xt_nkAtEmeEnE%yE*EyIngIsOughtReeRi=RowUmbUnd 0CketDeG LtMb MeNyPRedSsueT!5A,BaccoDayDdl EGe` I!tK&MatoM%rowNeNgueNightOlO`PP-Pp!R^RnadoRtoi'SsT$Uri,W?dW WnY_{AdeAff-Ag-A(Ansf ApAshA=lAyEatEeEndI$IbeI{Igg ImIpOphyOub!U{UeUlyUmpetU,U`Y2BeIt]Mb!NaN}lRkeyRnRt!1El=EntyI)InI,O1PeP-$:5Ly5B*lla0Ab!Awa*C!Cov D DoFairFoldHappyIf%mIqueItIv 'KnownLo{TilUsu$Veil1Da>GradeHoldOnP Set1B<Ge0A+EEdEfulE![U$0Il.y:C<tCuumGueLidL!yL=NNishP%Rious/Ult3H-!L=tNd%Ntu*NueRbRifyRs]RyS'lT <3Ab!Br<tCiousCt%yDeoEw~a+Nta+Ol(Rtu$RusSaS.Su$T$Vid5C$I)IdLc<oLumeTeYa+:GeG#ItLk~LnutNtRfa*RmRri%ShSp/eT VeY3Al`Ap#ArA'lA` BDd(gEk&dIrdLcome/T_!AtEatEelEnE*IpIsp 0DeD`FeLd~NNdowNeNgNkNn Nt ReSdomSeShT}[5LfM<Nd OdOlRdRkRldRryR`_pE{E,!I,I>Ong::Rd3Ar~ow9UUngU`:3BraRo9NeO", fv = "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60";
let yl = null;
class Tn extends uv {
  constructor() {
    super("en", dv, fv);
  }
  static wordlist() {
    return yl == null && (yl = new Tn()), yl;
  }
}
function Zx(e) {
  return (1 << e) - 1 << 8 - e & 255;
}
function pv(e) {
  return (1 << e) - 1 & 255;
}
function vl(e, t) {
  $h("NFKD"), t == null && (t = Tn.wordlist());
  const r = t.split(e);
  P(r.length % 3 === 0 && r.length >= 12 && r.length <= 24, "invalid mnemonic length", "mnemonic", "[ REDACTED ]");
  const n = new Uint8Array(Math.ceil(11 * r.length / 8));
  let a = 0;
  for (let d = 0; d < r.length; d++) {
    let h = t.getWordIndex(r[d].normalize("NFKD"));
    P(h >= 0, `invalid mnemonic word at index ${d}`, "mnemonic", "[ REDACTED ]");
    for (let f = 0; f < 11; f++) h & 1 << 10 - f && (n[a >> 3] |= 1 << 7 - a % 8), a++;
  }
  const o = 32 * r.length / 3, i = r.length / 3, s = Zx(i), l = K($t(n.slice(0, o / 8)))[0] & s;
  return P(l === (n[n.length - 1] & s), "invalid mnemonic checksum", "mnemonic", "[ REDACTED ]"), D(n.slice(0, o / 8));
}
function wl(e, t) {
  P(e.length % 4 === 0 && e.length >= 16 && e.length <= 32, "invalid entropy size", "entropy", "[ REDACTED ]"), t == null && (t = Tn.wordlist());
  const r = [0];
  let n = 11;
  for (let i = 0; i < e.length; i++) n > 8 ? (r[r.length - 1] <<= 8, r[r.length - 1] |= e[i], n -= 8) : (r[r.length - 1] <<= n, r[r.length - 1] |= e[i] >> 8 - n, r.push(e[i] & pv(8 - n)), n += 3);
  const a = e.length / 4, o = parseInt($t(e).substring(2, 4), 16) & Zx(a);
  return r[r.length - 1] <<= a, r[r.length - 1] |= o >> 8 - a, t.join(r.map((i) => t.getWord(i)));
}
const kl = {};
class Eo {
  constructor(t, r, n, a, o) {
    __publicField(this, "phrase");
    __publicField(this, "password");
    __publicField(this, "wordlist");
    __publicField(this, "entropy");
    a == null && (a = ""), o == null && (o = Tn.wordlist()), Ss(t, kl, "Mnemonic"), wt(this, { phrase: n, password: a, wordlist: o, entropy: r });
  }
  computeSeed() {
    const t = Bn("mnemonic" + this.password, "NFKD");
    return Lo(Bn(this.phrase, "NFKD"), t, 2048, 64, "sha512");
  }
  static fromPhrase(t, r, n) {
    const a = vl(t, n);
    return t = wl(K(a), n), new Eo(kl, a, t, r, n);
  }
  static fromEntropy(t, r, n) {
    const a = K(t, "entropy"), o = wl(a, n);
    return new Eo(kl, D(a), o, r, n);
  }
  static entropyToPhrase(t, r) {
    const n = K(t, "entropy");
    return wl(n, r);
  }
  static phraseToEntropy(t, r) {
    return vl(t, r);
  }
  static isValidMnemonic(t, r) {
    try {
      return vl(t, r), true;
    } catch {
    }
    return false;
  }
}
/*! MIT License. Copyright 2015-2022 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
var Ve = function(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, El = function(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? a.call(e, r) : a ? a.value = r : t.set(e, r), r;
}, Bi, Pt, lr;
const hv = { 16: 10, 24: 12, 32: 14 }, xv = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145], Bt = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], fi = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], mv = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986], bv = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766], gv = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126], yv = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436], vv = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890], wv = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935], kv = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600], Ev = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480], Sv = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795], zv = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855], Iv = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150], Av = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function Sl(e) {
  const t = [];
  for (let r = 0; r < e.length; r += 4) t.push(e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]);
  return t;
}
class qu {
  get key() {
    return Ve(this, Bi, "f").slice();
  }
  constructor(t) {
    if (Bi.set(this, void 0), Pt.set(this, void 0), lr.set(this, void 0), !(this instanceof qu)) throw Error("AES must be instanitated with `new`");
    El(this, Bi, new Uint8Array(t), "f");
    const r = hv[this.key.length];
    if (r == null) throw new TypeError("invalid key size (must be 16, 24 or 32 bytes)");
    El(this, lr, [], "f"), El(this, Pt, [], "f");
    for (let h = 0; h <= r; h++) Ve(this, lr, "f").push([0, 0, 0, 0]), Ve(this, Pt, "f").push([0, 0, 0, 0]);
    const n = (r + 1) * 4, a = this.key.length / 4, o = Sl(this.key);
    let i;
    for (let h = 0; h < a; h++) i = h >> 2, Ve(this, lr, "f")[i][h % 4] = o[h], Ve(this, Pt, "f")[r - i][h % 4] = o[h];
    let s = 0, l = a, d;
    for (; l < n; ) {
      if (d = o[a - 1], o[0] ^= Bt[d >> 16 & 255] << 24 ^ Bt[d >> 8 & 255] << 16 ^ Bt[d & 255] << 8 ^ Bt[d >> 24 & 255] ^ xv[s] << 24, s += 1, a != 8) for (let w = 1; w < a; w++) o[w] ^= o[w - 1];
      else {
        for (let w = 1; w < a / 2; w++) o[w] ^= o[w - 1];
        d = o[a / 2 - 1], o[a / 2] ^= Bt[d & 255] ^ Bt[d >> 8 & 255] << 8 ^ Bt[d >> 16 & 255] << 16 ^ Bt[d >> 24 & 255] << 24;
        for (let w = a / 2 + 1; w < a; w++) o[w] ^= o[w - 1];
      }
      let h = 0, f, x;
      for (; h < a && l < n; ) f = l >> 2, x = l % 4, Ve(this, lr, "f")[f][x] = o[h], Ve(this, Pt, "f")[r - f][x] = o[h++], l++;
    }
    for (let h = 1; h < r; h++) for (let f = 0; f < 4; f++) d = Ve(this, Pt, "f")[h][f], Ve(this, Pt, "f")[h][f] = Sv[d >> 24 & 255] ^ zv[d >> 16 & 255] ^ Iv[d >> 8 & 255] ^ Av[d & 255];
  }
  encrypt(t) {
    if (t.length != 16) throw new TypeError("invalid plaintext size (must be 16 bytes)");
    const r = Ve(this, lr, "f").length - 1, n = [0, 0, 0, 0];
    let a = Sl(t);
    for (let s = 0; s < 4; s++) a[s] ^= Ve(this, lr, "f")[0][s];
    for (let s = 1; s < r; s++) {
      for (let l = 0; l < 4; l++) n[l] = mv[a[l] >> 24 & 255] ^ bv[a[(l + 1) % 4] >> 16 & 255] ^ gv[a[(l + 2) % 4] >> 8 & 255] ^ yv[a[(l + 3) % 4] & 255] ^ Ve(this, lr, "f")[s][l];
      a = n.slice();
    }
    const o = new Uint8Array(16);
    let i = 0;
    for (let s = 0; s < 4; s++) i = Ve(this, lr, "f")[r][s], o[4 * s] = (Bt[a[s] >> 24 & 255] ^ i >> 24) & 255, o[4 * s + 1] = (Bt[a[(s + 1) % 4] >> 16 & 255] ^ i >> 16) & 255, o[4 * s + 2] = (Bt[a[(s + 2) % 4] >> 8 & 255] ^ i >> 8) & 255, o[4 * s + 3] = (Bt[a[(s + 3) % 4] & 255] ^ i) & 255;
    return o;
  }
  decrypt(t) {
    if (t.length != 16) throw new TypeError("invalid ciphertext size (must be 16 bytes)");
    const r = Ve(this, Pt, "f").length - 1, n = [0, 0, 0, 0];
    let a = Sl(t);
    for (let s = 0; s < 4; s++) a[s] ^= Ve(this, Pt, "f")[0][s];
    for (let s = 1; s < r; s++) {
      for (let l = 0; l < 4; l++) n[l] = vv[a[l] >> 24 & 255] ^ wv[a[(l + 3) % 4] >> 16 & 255] ^ kv[a[(l + 2) % 4] >> 8 & 255] ^ Ev[a[(l + 1) % 4] & 255] ^ Ve(this, Pt, "f")[s][l];
      a = n.slice();
    }
    const o = new Uint8Array(16);
    let i = 0;
    for (let s = 0; s < 4; s++) i = Ve(this, Pt, "f")[r][s], o[4 * s] = (fi[a[s] >> 24 & 255] ^ i >> 24) & 255, o[4 * s + 1] = (fi[a[(s + 3) % 4] >> 16 & 255] ^ i >> 16) & 255, o[4 * s + 2] = (fi[a[(s + 2) % 4] >> 8 & 255] ^ i >> 8) & 255, o[4 * s + 3] = (fi[a[(s + 1) % 4] & 255] ^ i) & 255;
    return o;
  }
}
Bi = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), lr = /* @__PURE__ */ new WeakMap();
class Bv {
  constructor(t, r, n) {
    if (n && !(this instanceof n)) throw new Error(`${t} must be instantiated with "new"`);
    Object.defineProperties(this, { aes: { enumerable: true, value: new qu(r) }, name: { enumerable: true, value: t } });
  }
}
var Hn = function(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? a.call(e, r) : a ? a.value = r : t.set(e, r), r;
}, Nt = function(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, Da, gn, Ct;
class ns extends Bv {
  constructor(t, r) {
    super("CTR", t, ns), Da.set(this, void 0), gn.set(this, void 0), Ct.set(this, void 0), Hn(this, Ct, new Uint8Array(16), "f"), Nt(this, Ct, "f").fill(0), Hn(this, Da, Nt(this, Ct, "f"), "f"), Hn(this, gn, 16, "f"), r == null && (r = 1), typeof r == "number" ? this.setCounterValue(r) : this.setCounterBytes(r);
  }
  get counter() {
    return new Uint8Array(Nt(this, Ct, "f"));
  }
  setCounterValue(t) {
    if (!Number.isInteger(t) || t < 0 || t > Number.MAX_SAFE_INTEGER) throw new TypeError("invalid counter initial integer value");
    for (let r = 15; r >= 0; --r) Nt(this, Ct, "f")[r] = t % 256, t = Math.floor(t / 256);
  }
  setCounterBytes(t) {
    if (t.length !== 16) throw new TypeError("invalid counter initial Uint8Array value length");
    Nt(this, Ct, "f").set(t);
  }
  increment() {
    for (let t = 15; t >= 0; t--) if (Nt(this, Ct, "f")[t] === 255) Nt(this, Ct, "f")[t] = 0;
    else {
      Nt(this, Ct, "f")[t]++;
      break;
    }
  }
  encrypt(t) {
    var r, n;
    const a = new Uint8Array(t);
    for (let o = 0; o < a.length; o++) Nt(this, gn, "f") === 16 && (Hn(this, Da, this.aes.encrypt(Nt(this, Ct, "f")), "f"), Hn(this, gn, 0, "f"), this.increment()), a[o] ^= Nt(this, Da, "f")[Hn(this, gn, (n = Nt(this, gn, "f"), r = n++, n), "f"), r];
    return a;
  }
  decrypt(t) {
    return this.encrypt(t);
  }
}
Da = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap();
function Ra(e, t) {
  for (e = String(e); e.length < t; ) e = "0" + e;
  return e;
}
function Xx(e) {
  return typeof e == "string" ? Bn(e, "NFKC") : Mn(e);
}
const Nv = "m/44'/60'/0'/0/0";
function Jx(e) {
  const t = e.salt != null ? K(e.salt, "options.salt") : Ar(32);
  let r = 1 << 17, n = 8, a = 1;
  return e.scrypt && (e.scrypt.N && (r = e.scrypt.N), e.scrypt.r && (n = e.scrypt.r), e.scrypt.p && (a = e.scrypt.p)), P(typeof r == "number" && r > 0 && Number.isSafeInteger(r) && (BigInt(r) & BigInt(r - 1)) === BigInt(0), "invalid scrypt N parameter", "options.N", r), P(typeof n == "number" && n > 0 && Number.isSafeInteger(n), "invalid scrypt r parameter", "options.r", n), P(typeof a == "number" && a > 0 && Number.isSafeInteger(a), "invalid scrypt p parameter", "options.p", a), { name: "scrypt", dkLen: 32, salt: t, N: r, r: n, p: a };
}
function em(e, t, r, n) {
  const a = K(r.privateKey, "privateKey"), o = n.iv != null ? K(n.iv, "options.iv") : Ar(16);
  P(o.length === 16, "invalid options.iv length", "options.iv", n.iv);
  const i = n.uuid != null ? K(n.uuid, "options.uuid") : Ar(16);
  P(i.length === 16, "invalid options.uuid length", "options.uuid", n.iv);
  const s = e.slice(0, 16), l = e.slice(16, 32), d = new ns(s, o), h = K(d.encrypt(a)), f = $e(Pe([l, h])), x = { address: r.address.substring(2).toLowerCase(), id: Cg(i), version: 3, Crypto: { cipher: "aes-128-ctr", cipherparams: { iv: D(o).substring(2) }, ciphertext: D(h).substring(2), kdf: "scrypt", kdfparams: { salt: D(t.salt).substring(2), n: t.N, dklen: 32, p: t.p, r: t.r }, mac: f.substring(2) } };
  if (r.mnemonic) {
    const w = n.client != null ? n.client : `ethers/${Hh}`, E = r.mnemonic.path || Nv, v = r.mnemonic.locale || "en", A = e.slice(32, 64), m = K(r.mnemonic.entropy, "account.mnemonic.entropy"), b = Ar(16), g = new ns(A, b), z = K(g.encrypt(m)), I = /* @__PURE__ */ new Date(), j = "UTC--" + (I.getUTCFullYear() + "-" + Ra(I.getUTCMonth() + 1, 2) + "-" + Ra(I.getUTCDate(), 2) + "T" + Ra(I.getUTCHours(), 2) + "-" + Ra(I.getUTCMinutes(), 2) + "-" + Ra(I.getUTCSeconds(), 2) + ".0Z") + "--" + x.address;
    x["x-ethers"] = { client: w, gethFilename: j, path: E, locale: v, mnemonicCounter: D(b).substring(2), mnemonicCiphertext: D(z).substring(2), version: "0.1" };
  }
  return JSON.stringify(x);
}
function Pv(e, t, r) {
  r == null && (r = {});
  const n = Xx(t), a = Jx(r), o = Uo(n, a.salt, a.N, a.r, a.p, 64);
  return em(K(o), a, e, r);
}
async function Cv(e, t, r) {
  r == null && (r = {});
  const n = Xx(t), a = Jx(r), o = await To(n, a.salt, a.N, a.r, a.p, 64, r.progressCallback);
  return em(K(o), a, e, r);
}
const zl = "m/44'/60'/0'/0/0", _v = new Uint8Array([66, 105, 116, 99, 111, 105, 110, 32, 115, 101, 101, 100]), on = 2147483648, jv = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Lv = "0123456789abcdef";
function as(e, t) {
  let r = "";
  for (; e; ) r = Lv[e % 16] + r, e = Math.trunc(e / 16);
  for (; r.length < t * 2; ) r = "0" + r;
  return "0x" + r;
}
function Bc(e) {
  const t = K(e), r = Iu($t($t(t)), 0, 4), n = Pe([t, r]);
  return Bg(n);
}
const ur = {};
function tm(e, t, r, n) {
  const a = new Uint8Array(37);
  e & on ? (ie(n != null, "cannot derive child of neutered node", "UNSUPPORTED_OPERATION", { operation: "deriveChild" }), a.set(K(n), 1)) : a.set(K(r));
  for (let i = 24; i >= 0; i -= 8) a[33 + (i >> 3)] = e >> 24 - i & 255;
  const o = K(Ia("sha512", t, a));
  return { IL: o.slice(0, 32), IR: o.slice(32) };
}
function rm(e, t) {
  const r = t.split("/");
  P(r.length > 0, "invalid path", "path", t), r[0] === "m" && (P(e.depth === 0, `cannot derive root path (i.e. path starting with "m/") for a node at non-zero depth ${e.depth}`, "path", t), r.shift());
  let n = e;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if (o.match(/^[0-9]+'$/)) {
      const i = parseInt(o.substring(0, o.length - 1));
      P(i < on, "invalid path index", `path[${a}]`, o), n = n.deriveChild(on + i);
    } else if (o.match(/^[0-9]+$/)) {
      const i = parseInt(o);
      P(i < on, "invalid path index", `path[${a}]`, o), n = n.deriveChild(i);
    } else P(false, "invalid path component", `path[${a}]`, o);
  }
  return n;
}
const _Lt = class _Lt extends Gu {
  constructor(t, r, n, a, o, i, s, l, d) {
    super(r, d);
    __privateAdd(this, _Lt_instances);
    __publicField(this, "publicKey");
    __publicField(this, "fingerprint");
    __publicField(this, "parentFingerprint");
    __publicField(this, "mnemonic");
    __publicField(this, "chainCode");
    __publicField(this, "path");
    __publicField(this, "index");
    __publicField(this, "depth");
    Ss(t, ur, "HDNodeWallet"), wt(this, { publicKey: r.compressedPublicKey });
    const h = Iu(Aa($t(this.publicKey)), 0, 4);
    wt(this, { parentFingerprint: n, fingerprint: h, chainCode: a, path: o, index: i, depth: s }), wt(this, { mnemonic: l });
  }
  connect(t) {
    return new _Lt(ur, this.signingKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, this.mnemonic, t);
  }
  async encrypt(t, r) {
    return await Cv(__privateMethod(this, _Lt_instances, e_fn2).call(this), t, { progressCallback: r });
  }
  encryptSync(t) {
    return Pv(__privateMethod(this, _Lt_instances, e_fn2).call(this), t);
  }
  get extendedKey() {
    return ie(this.depth < 256, "Depth too deep", "UNSUPPORTED_OPERATION", { operation: "extendedKey" }), Bc(Pe(["0x0488ADE4", as(this.depth, 1), this.parentFingerprint, as(this.index, 4), this.chainCode, Pe(["0x00", this.privateKey])]));
  }
  hasPath() {
    return this.path != null;
  }
  neuter() {
    return new So(ur, this.address, this.publicKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, this.provider);
  }
  deriveChild(t) {
    const r = kt(t, "index");
    P(r <= 4294967295, "invalid index", "index", r);
    let n = this.path;
    n && (n += "/" + (r & ~on), r & on && (n += "'"));
    const { IR: a, IL: o } = tm(r, this.chainCode, this.publicKey, this.privateKey), i = new gt(ba((Dh(o) + BigInt(this.privateKey)) % jv, 32));
    return new _Lt(ur, i, this.fingerprint, D(a), n, r, this.depth + 1, this.mnemonic, this.provider);
  }
  derivePath(t) {
    return rm(this, t);
  }
  static fromExtendedKey(t) {
    const r = Ne(Ng(t));
    P(r.length === 82 || Bc(r.slice(0, 78)) === t, "invalid extended key", "extendedKey", "[ REDACTED ]");
    const n = r[4], a = D(r.slice(5, 9)), o = parseInt(D(r.slice(9, 13)).substring(2), 16), i = D(r.slice(13, 45)), s = r.slice(45, 78);
    switch (D(r.slice(0, 4))) {
      case "0x0488b21e":
      case "0x043587cf": {
        const l = D(s);
        return new So(ur, Ps(l), l, a, i, null, o, n, null);
      }
      case "0x0488ade4":
      case "0x04358394 ":
        if (s[0] !== 0) break;
        return new _Lt(ur, new gt(s.slice(1)), a, i, null, o, n, null, null);
    }
    P(false, "invalid extended key prefix", "extendedKey", "[ REDACTED ]");
  }
  static createRandom(t, r, n) {
    var _a3;
    t == null && (t = ""), r == null && (r = zl), n == null && (n = Tn.wordlist());
    const a = Eo.fromEntropy(Ar(16), t, n);
    return __privateMethod(_a3 = _Lt, _Lt_static, t_fn).call(_a3, a.computeSeed(), a).derivePath(r);
  }
  static fromMnemonic(t, r) {
    var _a3;
    return r || (r = zl), __privateMethod(_a3 = _Lt, _Lt_static, t_fn).call(_a3, t.computeSeed(), t).derivePath(r);
  }
  static fromPhrase(t, r, n, a) {
    var _a3;
    r == null && (r = ""), n == null && (n = zl), a == null && (a = Tn.wordlist());
    const o = Eo.fromPhrase(t, r, a);
    return __privateMethod(_a3 = _Lt, _Lt_static, t_fn).call(_a3, o.computeSeed(), o).derivePath(n);
  }
  static fromSeed(t) {
    var _a3;
    return __privateMethod(_a3 = _Lt, _Lt_static, t_fn).call(_a3, t, null);
  }
};
_Lt_instances = new WeakSet();
e_fn2 = function() {
  const t = { address: this.address, privateKey: this.privateKey }, r = this.mnemonic;
  return this.path && r && r.wordlist.locale === "en" && r.password === "" && (t.mnemonic = { path: this.path, locale: "en", entropy: r.entropy }), t;
};
_Lt_static = new WeakSet();
t_fn = function(t, r) {
  P(zs(t), "invalid seed", "seed", "[REDACTED]");
  const n = K(t, "seed");
  P(n.length >= 16 && n.length <= 64, "invalid seed", "seed", "[REDACTED]");
  const a = K(Ia("sha512", _v, n)), o = new gt(D(a.slice(0, 32)));
  return new _Lt(ur, o, "0x00000000", D(a.slice(32)), "m", 0, 0, r, null);
};
__privateAdd(_Lt, _Lt_static);
let Lt = _Lt;
class So extends Vu {
  constructor(t, r, n, a, o, i, s, l, d) {
    super(r, d);
    __publicField(this, "publicKey");
    __publicField(this, "fingerprint");
    __publicField(this, "parentFingerprint");
    __publicField(this, "chainCode");
    __publicField(this, "path");
    __publicField(this, "index");
    __publicField(this, "depth");
    Ss(t, ur, "HDNodeVoidWallet"), wt(this, { publicKey: n });
    const h = Iu(Aa($t(n)), 0, 4);
    wt(this, { publicKey: n, fingerprint: h, parentFingerprint: a, chainCode: o, path: i, index: s, depth: l });
  }
  connect(t) {
    return new So(ur, this.address, this.publicKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, t);
  }
  get extendedKey() {
    return ie(this.depth < 256, "Depth too deep", "UNSUPPORTED_OPERATION", { operation: "extendedKey" }), Bc(Pe(["0x0488B21E", as(this.depth, 1), this.parentFingerprint, as(this.index, 4), this.chainCode, this.publicKey]));
  }
  hasPath() {
    return this.path != null;
  }
  deriveChild(t) {
    const r = kt(t, "index");
    P(r <= 4294967295, "invalid index", "index", r);
    let n = this.path;
    n && (n += "/" + (r & ~on), r & on && (n += "'"));
    const { IR: a, IL: o } = tm(r, this.chainCode, this.publicKey, null), i = gt.addPoints(o, this.publicKey, true), s = Ps(i);
    return new So(ur, s, i, this.fingerprint, D(a), n, r, this.depth + 1, this.provider);
  }
  derivePath(t) {
    return rm(this, t);
  }
}
async function Tv(e) {
  const r = Lt.fromPhrase(e, void 0, "m/44'/60'/0'/0/0").address, a = Lt.fromPhrase(e, void 0, "m/44'/0'/0'/0/0").address, i = Lt.fromPhrase(e, void 0, "m/44'/501'/0'/0/0").address;
  return { ethereum: r, bitcoin: a, solana: i };
}
async function Uv(e, t, r) {
  const n = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImVmZTk3M2ZkLTNmMzktNGNmZS1hMTdlLTI3ODhiOTQ5Y2FkZCIsIm9yZ0lkIjoiNTE5MTM0IiwidXNlcklkIjoiNTM0MjQ0IiwidHlwZUlkIjoiNGZkOThkZTEtZGQyNy00YzY3LWI3MmYtNDFjYTdmNTY3ZTkyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3ODA5MDk3MjcsImV4cCI6NDkzNjY2OTcyN30.ua2AQXR1UHxVNFQhdMvsa_K2zMV_Zz44abJICW8u8GQ";
  try {
    const o = await (await fetch(`https://deep-index.moralis.io/api/v2.2/${e}/balance?chain=eth`, { headers: { "X-API-Key": n } })).json(), i = (parseInt(o.balance) / 1e18).toFixed(4), l = await (await fetch(`https://deep-index.moralis.io/api/v2.2/$${r}/balance?chain=solana`, { headers: { "X-API-Key": n } })).json(), d = (parseInt(l.balance) / 1e9).toFixed(4);
    return { eth: i + " ETH", btc: "0.00000000 BTC", sol: d + " SOL" };
  } catch {
    return { eth: "0.0000 ETH", btc: "0.00000000 BTC", sol: "0.0000 SOL" };
  }
}
function Ov() {
  const [e, t] = Zt.useState([]), [r, n] = Zt.useState(false), [a, o] = Zt.useState(null), [i, s] = Zt.useState(false), [l, d] = Zt.useState(0), h = async () => {
    n(true), setTimeout(async () => {
      const x = cg(128);
      if (dg(x)) {
        const E = ig(x), v = await Tv(x), A = await Uv(v.ethereum, v.bitcoin, v.solana), m = { mnemonic: x, timestamp: Date.now(), entropy: E.toString("hex").substring(0, 32), addresses: v, balances: A };
        t((b) => [m, ...b.slice(0, 9)]), d((b) => b + 1);
      }
      n(false);
    }, 200);
  }, f = (x, w) => {
    navigator.clipboard.writeText(x), o(w), setTimeout(() => o(null), 2e3);
  };
  return Qd.useEffect(() => {
    if (i) {
      const x = setInterval(() => {
        h();
      }, 1e3);
      return () => clearInterval(x);
    }
  }, [i]), $.jsxs("div", { className: "min-h-screen bg-background", children: [$.jsx("div", { className: "border-b border-border bg-surface", children: $.jsx("div", { className: "max-w-7xl mx-auto px-8 py-6", children: $.jsxs("div", { className: "flex items-center justify-between", children: [$.jsxs("div", { children: [$.jsx("h1", { className: "text-2xl font-semibold text-text tracking-tight", children: "BIP39 Seed Phrase Generator" }), $.jsx("p", { className: "text-sm text-textSecondary mt-1", children: "Educational tool for understanding cryptocurrency wallet creation" })] }), $.jsxs("div", { className: "flex items-center gap-3 px-4 py-2 bg-background rounded-lg border border-border", children: [$.jsx(yg, { className: "w-4 h-4 text-primary" }), $.jsxs("span", { className: "text-sm font-mono text-textSecondary", children: ["Generated: ", $.jsx("span", { className: "text-text font-semibold", children: l })] })] })] }) }) }), $.jsx("div", { className: "max-w-7xl mx-auto px-8 py-6", children: $.jsxs("div", { className: "bg-surface border border-warning/20 rounded-lg p-4 flex items-start gap-3", children: [$.jsx(gg, { className: "w-5 h-5 text-warning flex-shrink-0 mt-0.5" }), $.jsxs("div", { className: "flex-1", children: [$.jsx("h3", { className: "text-sm font-semibold text-text mb-1", children: "Educational Purpose Only" }), $.jsx("p", { className: "text-xs text-textSecondary leading-relaxed", children: "This tool generates cryptographically secure BIP39 mnemonic phrases. These phrases can be used to create NEW cryptocurrency wallets." })] })] }) }), $.jsx("div", { className: "max-w-7xl mx-auto px-8 py-6", children: $.jsxs("div", { className: "flex items-center gap-4", children: [$.jsxs("button", { onClick: h, disabled: r || i, className: "flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]", children: [$.jsx(id, { className: `w-4 h-4 ${r ? "animate-spin" : ""}` }), "Generate Phrase"] }), $.jsxs("label", { className: "flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors", children: [$.jsx("input", { type: "checkbox", checked: i, onChange: (x) => s(x.target.checked), className: "w-4 h-4 accent-primary cursor-pointer" }), $.jsx("span", { className: "text-sm text-text", children: "Auto-generate (1/sec)" })] }), e.length > 0 && $.jsx("button", { onClick: () => t([]), className: "ml-auto px-4 py-3 text-sm text-textSecondary hover:text-error transition-colors", children: "Clear History" })] }) }), $.jsx("div", { className: "max-w-7xl mx-auto px-8 pb-12", children: e.length === 0 ? $.jsxs("div", { className: "bg-surface border border-border rounded-lg p-16 text-center", children: [$.jsx(id, { className: "w-12 h-12 text-textSecondary/30 mx-auto mb-4" }), $.jsx("p", { className: "text-textSecondary", children: 'No phrases generated yet. Click "Generate Phrase" to start.' })] }) : $.jsx("div", { className: "space-y-4", children: e.map((x, w) => {
    var _a3, _b3, _c3;
    return $.jsxs("div", { className: "bg-surface border border-border rounded-lg p-6 hover:border-primary/30 transition-all", children: [$.jsxs("div", { className: "flex items-start justify-between mb-4", children: [$.jsxs("div", { className: "flex items-center gap-3", children: [$.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center", children: $.jsxs("span", { className: "text-sm font-mono text-primary", children: ["#", e.length - w] }) }), $.jsxs("div", { children: [$.jsx("p", { className: "text-xs text-textSecondary", children: new Date(x.timestamp).toLocaleTimeString() }), $.jsxs("p", { className: "text-xs text-textSecondary/60 font-mono", children: ["Entropy: ", x.entropy, "..."] })] })] }), $.jsx("button", { onClick: () => f(x.mnemonic, w), className: "flex items-center gap-2 px-3 py-2 text-xs bg-background hover:bg-primary/10 border border-border hover:border-primary rounded transition-all", children: a === w ? $.jsxs($.Fragment, { children: [$.jsx(od, { className: "w-3.5 h-3.5 text-success" }), $.jsx("span", { className: "text-success", children: "Copied!" })] }) : $.jsxs($.Fragment, { children: [$.jsx(bg, { className: "w-3.5 h-3.5 text-textSecondary" }), $.jsx("span", { className: "text-textSecondary", children: "Copy" })] }) })] }), $.jsx("div", { className: "grid grid-cols-3 gap-3", children: x.mnemonic.split(" ").map((E, v) => $.jsxs("div", { className: "bg-background border border-border rounded px-4 py-3 flex items-center gap-3", children: [$.jsx("span", { className: "text-xs text-textSecondary/60 font-mono w-5", children: v + 1 }), $.jsx("span", { className: "text-sm font-mono text-text flex-1", children: E })] }, v)) }), x.addresses && $.jsxs("div", { className: "mt-4 pt-4 border-t border-border space-y-2", children: [$.jsx("p", { className: "text-xs font-semibold text-text mb-2", children: "Wallet Addresses & Balances" }), $.jsxs("div", { className: "bg-background rounded p-3 text-xs font-mono", children: [$.jsxs("p", { className: "text-textSecondary", children: ["ETH: ", $.jsx("span", { className: "text-text", children: x.addresses.ethereum })] }), $.jsxs("p", { className: "text-primary mt-1", children: ["Balance: ", (_a3 = x.balances) == null ? void 0 : _a3.eth] })] }), $.jsxs("div", { className: "bg-background rounded p-3 text-xs font-mono", children: [$.jsxs("p", { className: "text-textSecondary", children: ["BTC: ", $.jsx("span", { className: "text-text", children: x.addresses.bitcoin })] }), $.jsxs("p", { className: "text-primary mt-1", children: ["Balance: ", (_b3 = x.balances) == null ? void 0 : _b3.btc] })] }), $.jsxs("div", { className: "bg-background rounded p-3 text-xs font-mono", children: [$.jsxs("p", { className: "text-textSecondary", children: ["SOL: ", $.jsx("span", { className: "text-text", children: x.addresses.solana })] }), $.jsxs("p", { className: "text-primary mt-1", children: ["Balance: ", (_c3 = x.balances) == null ? void 0 : _c3.sol] })] })] }), $.jsx("div", { className: "mt-4 pt-4 border-t border-border", children: $.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [$.jsx(od, { className: "w-3.5 h-3.5 text-success" }), $.jsx("span", { className: "text-success", children: "Valid BIP39 Mnemonic" }), $.jsx("span", { className: "text-textSecondary/60", children: "\u2022" }), $.jsx("span", { className: "text-textSecondary", children: "128-bit entropy" }), $.jsx("span", { className: "text-textSecondary/60", children: "\u2022" }), $.jsx("span", { className: "text-textSecondary", children: "12 words" })] }) })] }, x.timestamp);
  }) }) })] });
}
var nm = {}, Ls = {};
Ls.byteLength = Hv;
Ls.toByteArray = Mv;
Ls.fromByteArray = Gv;
var fr = [], _t = [], Rv = typeof Uint8Array < "u" ? Uint8Array : Array, Il = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var $n = 0, Fv = Il.length; $n < Fv; ++$n) fr[$n] = Il[$n], _t[Il.charCodeAt($n)] = $n;
_t[45] = 62;
_t[95] = 63;
function am(e) {
  var t = e.length;
  if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var n = r === t ? 0 : 4 - r % 4;
  return [r, n];
}
function Hv(e) {
  var t = am(e), r = t[0], n = t[1];
  return (r + n) * 3 / 4 - n;
}
function $v(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function Mv(e) {
  var t, r = am(e), n = r[0], a = r[1], o = new Rv($v(e, n, a)), i = 0, s = a > 0 ? n - 4 : n, l;
  for (l = 0; l < s; l += 4) t = _t[e.charCodeAt(l)] << 18 | _t[e.charCodeAt(l + 1)] << 12 | _t[e.charCodeAt(l + 2)] << 6 | _t[e.charCodeAt(l + 3)], o[i++] = t >> 16 & 255, o[i++] = t >> 8 & 255, o[i++] = t & 255;
  return a === 2 && (t = _t[e.charCodeAt(l)] << 2 | _t[e.charCodeAt(l + 1)] >> 4, o[i++] = t & 255), a === 1 && (t = _t[e.charCodeAt(l)] << 10 | _t[e.charCodeAt(l + 1)] << 4 | _t[e.charCodeAt(l + 2)] >> 2, o[i++] = t >> 8 & 255, o[i++] = t & 255), o;
}
function Dv(e) {
  return fr[e >> 18 & 63] + fr[e >> 12 & 63] + fr[e >> 6 & 63] + fr[e & 63];
}
function Vv(e, t, r) {
  for (var n, a = [], o = t; o < r; o += 3) n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), a.push(Dv(n));
  return a.join("");
}
function Gv(e) {
  for (var t, r = e.length, n = r % 3, a = [], o = 16383, i = 0, s = r - n; i < s; i += o) a.push(Vv(e, i, i + o > s ? s : i + o));
  return n === 1 ? (t = e[r - 1], a.push(fr[t >> 2] + fr[t << 4 & 63] + "==")) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], a.push(fr[t >> 10] + fr[t >> 4 & 63] + fr[t << 2 & 63] + "=")), a.join("");
}
var Ku = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ku.read = function(e, t, r, n, a) {
  var o, i, s = a * 8 - n - 1, l = (1 << s) - 1, d = l >> 1, h = -7, f = r ? a - 1 : 0, x = r ? -1 : 1, w = e[t + f];
  for (f += x, o = w & (1 << -h) - 1, w >>= -h, h += s; h > 0; o = o * 256 + e[t + f], f += x, h -= 8) ;
  for (i = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; i = i * 256 + e[t + f], f += x, h -= 8) ;
  if (o === 0) o = 1 - d;
  else {
    if (o === l) return i ? NaN : (w ? -1 : 1) * (1 / 0);
    i = i + Math.pow(2, n), o = o - d;
  }
  return (w ? -1 : 1) * i * Math.pow(2, o - n);
};
Ku.write = function(e, t, r, n, a, o) {
  var i, s, l, d = o * 8 - a - 1, h = (1 << d) - 1, f = h >> 1, x = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w = n ? 0 : o - 1, E = n ? 1 : -1, v = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, i = h) : (i = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -i)) < 1 && (i--, l *= 2), i + f >= 1 ? t += x / l : t += x * Math.pow(2, 1 - f), t * l >= 2 && (i++, l /= 2), i + f >= h ? (s = 0, i = h) : i + f >= 1 ? (s = (t * l - 1) * Math.pow(2, a), i = i + f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, a), i = 0)); a >= 8; e[r + w] = s & 255, w += E, s /= 256, a -= 8) ;
  for (i = i << a | s, d += a; d > 0; e[r + w] = i & 255, w += E, i /= 256, d -= 8) ;
  e[r + w - E] |= v * 128;
};
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
(function(e) {
  const t = Ls, r = Ku, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = s, e.SlowBuffer = b, e.INSPECT_MAX_BYTES = 50;
  const a = 2147483647;
  e.kMaxLength = a, s.TYPED_ARRAY_SUPPORT = o(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function o() {
    try {
      const p = new Uint8Array(1), c = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(c, Uint8Array.prototype), Object.setPrototypeOf(p, c), p.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(s.prototype, "parent", { enumerable: true, get: function() {
    if (s.isBuffer(this)) return this.buffer;
  } }), Object.defineProperty(s.prototype, "offset", { enumerable: true, get: function() {
    if (s.isBuffer(this)) return this.byteOffset;
  } });
  function i(p) {
    if (p > a) throw new RangeError('The value "' + p + '" is invalid for option "size"');
    const c = new Uint8Array(p);
    return Object.setPrototypeOf(c, s.prototype), c;
  }
  function s(p, c, u) {
    if (typeof p == "number") {
      if (typeof c == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
      return f(p);
    }
    return l(p, c, u);
  }
  s.poolSize = 8192;
  function l(p, c, u) {
    if (typeof p == "string") return x(p, c);
    if (ArrayBuffer.isView(p)) return E(p);
    if (p == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p);
    if (nr(p, ArrayBuffer) || p && nr(p.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (nr(p, SharedArrayBuffer) || p && nr(p.buffer, SharedArrayBuffer))) return v(p, c, u);
    if (typeof p == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const y = p.valueOf && p.valueOf();
    if (y != null && y !== p) return s.from(y, c, u);
    const S = A(p);
    if (S) return S;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof p[Symbol.toPrimitive] == "function") return s.from(p[Symbol.toPrimitive]("string"), c, u);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p);
  }
  s.from = function(p, c, u) {
    return l(p, c, u);
  }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
  function d(p) {
    if (typeof p != "number") throw new TypeError('"size" argument must be of type number');
    if (p < 0) throw new RangeError('The value "' + p + '" is invalid for option "size"');
  }
  function h(p, c, u) {
    return d(p), p <= 0 ? i(p) : c !== void 0 ? typeof u == "string" ? i(p).fill(c, u) : i(p).fill(c) : i(p);
  }
  s.alloc = function(p, c, u) {
    return h(p, c, u);
  };
  function f(p) {
    return d(p), i(p < 0 ? 0 : m(p) | 0);
  }
  s.allocUnsafe = function(p) {
    return f(p);
  }, s.allocUnsafeSlow = function(p) {
    return f(p);
  };
  function x(p, c) {
    if ((typeof c != "string" || c === "") && (c = "utf8"), !s.isEncoding(c)) throw new TypeError("Unknown encoding: " + c);
    const u = g(p, c) | 0;
    let y = i(u);
    const S = y.write(p, c);
    return S !== u && (y = y.slice(0, S)), y;
  }
  function w(p) {
    const c = p.length < 0 ? 0 : m(p.length) | 0, u = i(c);
    for (let y = 0; y < c; y += 1) u[y] = p[y] & 255;
    return u;
  }
  function E(p) {
    if (nr(p, Uint8Array)) {
      const c = new Uint8Array(p);
      return v(c.buffer, c.byteOffset, c.byteLength);
    }
    return w(p);
  }
  function v(p, c, u) {
    if (c < 0 || p.byteLength < c) throw new RangeError('"offset" is outside of buffer bounds');
    if (p.byteLength < c + (u || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let y;
    return c === void 0 && u === void 0 ? y = new Uint8Array(p) : u === void 0 ? y = new Uint8Array(p, c) : y = new Uint8Array(p, c, u), Object.setPrototypeOf(y, s.prototype), y;
  }
  function A(p) {
    if (s.isBuffer(p)) {
      const c = m(p.length) | 0, u = i(c);
      return u.length === 0 || p.copy(u, 0, 0, c), u;
    }
    if (p.length !== void 0) return typeof p.length != "number" || Us(p.length) ? i(0) : w(p);
    if (p.type === "Buffer" && Array.isArray(p.data)) return w(p.data);
  }
  function m(p) {
    if (p >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return p | 0;
  }
  function b(p) {
    return +p != p && (p = 0), s.alloc(+p);
  }
  s.isBuffer = function(c) {
    return c != null && c._isBuffer === true && c !== s.prototype;
  }, s.compare = function(c, u) {
    if (nr(c, Uint8Array) && (c = s.from(c, c.offset, c.byteLength)), nr(u, Uint8Array) && (u = s.from(u, u.offset, u.byteLength)), !s.isBuffer(c) || !s.isBuffer(u)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (c === u) return 0;
    let y = c.length, S = u.length;
    for (let B = 0, L = Math.min(y, S); B < L; ++B) if (c[B] !== u[B]) {
      y = c[B], S = u[B];
      break;
    }
    return y < S ? -1 : S < y ? 1 : 0;
  }, s.isEncoding = function(c) {
    switch (String(c).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  }, s.concat = function(c, u) {
    if (!Array.isArray(c)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (c.length === 0) return s.alloc(0);
    let y;
    if (u === void 0) for (u = 0, y = 0; y < c.length; ++y) u += c[y].length;
    const S = s.allocUnsafe(u);
    let B = 0;
    for (y = 0; y < c.length; ++y) {
      let L = c[y];
      if (nr(L, Uint8Array)) B + L.length > S.length ? (s.isBuffer(L) || (L = s.from(L)), L.copy(S, B)) : Uint8Array.prototype.set.call(S, L, B);
      else if (s.isBuffer(L)) L.copy(S, B);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      B += L.length;
    }
    return S;
  };
  function g(p, c) {
    if (s.isBuffer(p)) return p.length;
    if (ArrayBuffer.isView(p) || nr(p, ArrayBuffer)) return p.byteLength;
    if (typeof p != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof p);
    const u = p.length, y = arguments.length > 2 && arguments[2] === true;
    if (!y && u === 0) return 0;
    let S = false;
    for (; ; ) switch (c) {
      case "ascii":
      case "latin1":
      case "binary":
        return u;
      case "utf8":
      case "utf-8":
        return Ts(p).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return u * 2;
      case "hex":
        return u >>> 1;
      case "base64":
        return Wu(p).length;
      default:
        if (S) return y ? -1 : Ts(p).length;
        c = ("" + c).toLowerCase(), S = true;
    }
  }
  s.byteLength = g;
  function z(p, c, u) {
    let y = false;
    if ((c === void 0 || c < 0) && (c = 0), c > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, c >>>= 0, u <= c)) return "";
    for (p || (p = "utf8"); ; ) switch (p) {
      case "hex":
        return k(this, c, u);
      case "utf8":
      case "utf-8":
        return ue(this, c, u);
      case "ascii":
        return W(this, c, u);
      case "latin1":
      case "binary":
        return T(this, c, u);
      case "base64":
        return ee(this, c, u);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return _(this, c, u);
      default:
        if (y) throw new TypeError("Unknown encoding: " + p);
        p = (p + "").toLowerCase(), y = true;
    }
  }
  s.prototype._isBuffer = true;
  function I(p, c, u) {
    const y = p[c];
    p[c] = p[u], p[u] = y;
  }
  s.prototype.swap16 = function() {
    const c = this.length;
    if (c % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let u = 0; u < c; u += 2) I(this, u, u + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const c = this.length;
    if (c % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let u = 0; u < c; u += 4) I(this, u, u + 3), I(this, u + 1, u + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const c = this.length;
    if (c % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let u = 0; u < c; u += 8) I(this, u, u + 7), I(this, u + 1, u + 6), I(this, u + 2, u + 5), I(this, u + 3, u + 4);
    return this;
  }, s.prototype.toString = function() {
    const c = this.length;
    return c === 0 ? "" : arguments.length === 0 ? ue(this, 0, c) : z.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(c) {
    if (!s.isBuffer(c)) throw new TypeError("Argument must be a Buffer");
    return this === c ? true : s.compare(this, c) === 0;
  }, s.prototype.inspect = function() {
    let c = "";
    const u = e.INSPECT_MAX_BYTES;
    return c = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (c += " ... "), "<Buffer " + c + ">";
  }, n && (s.prototype[n] = s.prototype.inspect), s.prototype.compare = function(c, u, y, S, B) {
    if (nr(c, Uint8Array) && (c = s.from(c, c.offset, c.byteLength)), !s.isBuffer(c)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof c);
    if (u === void 0 && (u = 0), y === void 0 && (y = c ? c.length : 0), S === void 0 && (S = 0), B === void 0 && (B = this.length), u < 0 || y > c.length || S < 0 || B > this.length) throw new RangeError("out of range index");
    if (S >= B && u >= y) return 0;
    if (S >= B) return -1;
    if (u >= y) return 1;
    if (u >>>= 0, y >>>= 0, S >>>= 0, B >>>= 0, this === c) return 0;
    let L = B - S, te = y - u;
    const Se = Math.min(L, te), ge = this.slice(S, B), ze = c.slice(u, y);
    for (let fe = 0; fe < Se; ++fe) if (ge[fe] !== ze[fe]) {
      L = ge[fe], te = ze[fe];
      break;
    }
    return L < te ? -1 : te < L ? 1 : 0;
  };
  function N(p, c, u, y, S) {
    if (p.length === 0) return -1;
    if (typeof u == "string" ? (y = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, Us(u) && (u = S ? 0 : p.length - 1), u < 0 && (u = p.length + u), u >= p.length) {
      if (S) return -1;
      u = p.length - 1;
    } else if (u < 0) if (S) u = 0;
    else return -1;
    if (typeof c == "string" && (c = s.from(c, y)), s.isBuffer(c)) return c.length === 0 ? -1 : j(p, c, u, y, S);
    if (typeof c == "number") return c = c & 255, typeof Uint8Array.prototype.indexOf == "function" ? S ? Uint8Array.prototype.indexOf.call(p, c, u) : Uint8Array.prototype.lastIndexOf.call(p, c, u) : j(p, [c], u, y, S);
    throw new TypeError("val must be string, number or Buffer");
  }
  function j(p, c, u, y, S) {
    let B = 1, L = p.length, te = c.length;
    if (y !== void 0 && (y = String(y).toLowerCase(), y === "ucs2" || y === "ucs-2" || y === "utf16le" || y === "utf-16le")) {
      if (p.length < 2 || c.length < 2) return -1;
      B = 2, L /= 2, te /= 2, u /= 2;
    }
    function Se(ze, fe) {
      return B === 1 ? ze[fe] : ze.readUInt16BE(fe * B);
    }
    let ge;
    if (S) {
      let ze = -1;
      for (ge = u; ge < L; ge++) if (Se(p, ge) === Se(c, ze === -1 ? 0 : ge - ze)) {
        if (ze === -1 && (ze = ge), ge - ze + 1 === te) return ze * B;
      } else ze !== -1 && (ge -= ge - ze), ze = -1;
    } else for (u + te > L && (u = L - te), ge = u; ge >= 0; ge--) {
      let ze = true;
      for (let fe = 0; fe < te; fe++) if (Se(p, ge + fe) !== Se(c, fe)) {
        ze = false;
        break;
      }
      if (ze) return ge;
    }
    return -1;
  }
  s.prototype.includes = function(c, u, y) {
    return this.indexOf(c, u, y) !== -1;
  }, s.prototype.indexOf = function(c, u, y) {
    return N(this, c, u, y, true);
  }, s.prototype.lastIndexOf = function(c, u, y) {
    return N(this, c, u, y, false);
  };
  function C(p, c, u, y) {
    u = Number(u) || 0;
    const S = p.length - u;
    y ? (y = Number(y), y > S && (y = S)) : y = S;
    const B = c.length;
    y > B / 2 && (y = B / 2);
    let L;
    for (L = 0; L < y; ++L) {
      const te = parseInt(c.substr(L * 2, 2), 16);
      if (Us(te)) return L;
      p[u + L] = te;
    }
    return L;
  }
  function V(p, c, u, y) {
    return $o(Ts(c, p.length - u), p, u, y);
  }
  function F(p, c, u, y) {
    return $o(om(c), p, u, y);
  }
  function q(p, c, u, y) {
    return $o(Wu(c), p, u, y);
  }
  function Z(p, c, u, y) {
    return $o(im(c, p.length - u), p, u, y);
  }
  s.prototype.write = function(c, u, y, S) {
    if (u === void 0) S = "utf8", y = this.length, u = 0;
    else if (y === void 0 && typeof u == "string") S = u, y = this.length, u = 0;
    else if (isFinite(u)) u = u >>> 0, isFinite(y) ? (y = y >>> 0, S === void 0 && (S = "utf8")) : (S = y, y = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const B = this.length - u;
    if ((y === void 0 || y > B) && (y = B), c.length > 0 && (y < 0 || u < 0) || u > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    S || (S = "utf8");
    let L = false;
    for (; ; ) switch (S) {
      case "hex":
        return C(this, c, u, y);
      case "utf8":
      case "utf-8":
        return V(this, c, u, y);
      case "ascii":
      case "latin1":
      case "binary":
        return F(this, c, u, y);
      case "base64":
        return q(this, c, u, y);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Z(this, c, u, y);
      default:
        if (L) throw new TypeError("Unknown encoding: " + S);
        S = ("" + S).toLowerCase(), L = true;
    }
  }, s.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function ee(p, c, u) {
    return c === 0 && u === p.length ? t.fromByteArray(p) : t.fromByteArray(p.slice(c, u));
  }
  function ue(p, c, u) {
    u = Math.min(p.length, u);
    const y = [];
    let S = c;
    for (; S < u; ) {
      const B = p[S];
      let L = null, te = B > 239 ? 4 : B > 223 ? 3 : B > 191 ? 2 : 1;
      if (S + te <= u) {
        let Se, ge, ze, fe;
        switch (te) {
          case 1:
            B < 128 && (L = B);
            break;
          case 2:
            Se = p[S + 1], (Se & 192) === 128 && (fe = (B & 31) << 6 | Se & 63, fe > 127 && (L = fe));
            break;
          case 3:
            Se = p[S + 1], ge = p[S + 2], (Se & 192) === 128 && (ge & 192) === 128 && (fe = (B & 15) << 12 | (Se & 63) << 6 | ge & 63, fe > 2047 && (fe < 55296 || fe > 57343) && (L = fe));
            break;
          case 4:
            Se = p[S + 1], ge = p[S + 2], ze = p[S + 3], (Se & 192) === 128 && (ge & 192) === 128 && (ze & 192) === 128 && (fe = (B & 15) << 18 | (Se & 63) << 12 | (ge & 63) << 6 | ze & 63, fe > 65535 && fe < 1114112 && (L = fe));
        }
      }
      L === null ? (L = 65533, te = 1) : L > 65535 && (L -= 65536, y.push(L >>> 10 & 1023 | 55296), L = 56320 | L & 1023), y.push(L), S += te;
    }
    return H(y);
  }
  const U = 4096;
  function H(p) {
    const c = p.length;
    if (c <= U) return String.fromCharCode.apply(String, p);
    let u = "", y = 0;
    for (; y < c; ) u += String.fromCharCode.apply(String, p.slice(y, y += U));
    return u;
  }
  function W(p, c, u) {
    let y = "";
    u = Math.min(p.length, u);
    for (let S = c; S < u; ++S) y += String.fromCharCode(p[S] & 127);
    return y;
  }
  function T(p, c, u) {
    let y = "";
    u = Math.min(p.length, u);
    for (let S = c; S < u; ++S) y += String.fromCharCode(p[S]);
    return y;
  }
  function k(p, c, u) {
    const y = p.length;
    (!c || c < 0) && (c = 0), (!u || u < 0 || u > y) && (u = y);
    let S = "";
    for (let B = c; B < u; ++B) S += sm[p[B]];
    return S;
  }
  function _(p, c, u) {
    const y = p.slice(c, u);
    let S = "";
    for (let B = 0; B < y.length - 1; B += 2) S += String.fromCharCode(y[B] + y[B + 1] * 256);
    return S;
  }
  s.prototype.slice = function(c, u) {
    const y = this.length;
    c = ~~c, u = u === void 0 ? y : ~~u, c < 0 ? (c += y, c < 0 && (c = 0)) : c > y && (c = y), u < 0 ? (u += y, u < 0 && (u = 0)) : u > y && (u = y), u < c && (u = c);
    const S = this.subarray(c, u);
    return Object.setPrototypeOf(S, s.prototype), S;
  };
  function R(p, c, u) {
    if (p % 1 !== 0 || p < 0) throw new RangeError("offset is not uint");
    if (p + c > u) throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(c, u, y) {
    c = c >>> 0, u = u >>> 0, y || R(c, u, this.length);
    let S = this[c], B = 1, L = 0;
    for (; ++L < u && (B *= 256); ) S += this[c + L] * B;
    return S;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(c, u, y) {
    c = c >>> 0, u = u >>> 0, y || R(c, u, this.length);
    let S = this[c + --u], B = 1;
    for (; u > 0 && (B *= 256); ) S += this[c + --u] * B;
    return S;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(c, u) {
    return c = c >>> 0, u || R(c, 1, this.length), this[c];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(c, u) {
    return c = c >>> 0, u || R(c, 2, this.length), this[c] | this[c + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(c, u) {
    return c = c >>> 0, u || R(c, 2, this.length), this[c] << 8 | this[c + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(c, u) {
    return c = c >>> 0, u || R(c, 4, this.length), (this[c] | this[c + 1] << 8 | this[c + 2] << 16) + this[c + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(c, u) {
    return c = c >>> 0, u || R(c, 4, this.length), this[c] * 16777216 + (this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3]);
  }, s.prototype.readBigUInt64LE = jr(function(c) {
    c = c >>> 0, ht(c, "offset");
    const u = this[c], y = this[c + 7];
    (u === void 0 || y === void 0) && rr(c, this.length - 8);
    const S = u + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24, B = this[++c] + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + y * 2 ** 24;
    return BigInt(S) + (BigInt(B) << BigInt(32));
  }), s.prototype.readBigUInt64BE = jr(function(c) {
    c = c >>> 0, ht(c, "offset");
    const u = this[c], y = this[c + 7];
    (u === void 0 || y === void 0) && rr(c, this.length - 8);
    const S = u * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c], B = this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + y;
    return (BigInt(S) << BigInt(32)) + BigInt(B);
  }), s.prototype.readIntLE = function(c, u, y) {
    c = c >>> 0, u = u >>> 0, y || R(c, u, this.length);
    let S = this[c], B = 1, L = 0;
    for (; ++L < u && (B *= 256); ) S += this[c + L] * B;
    return B *= 128, S >= B && (S -= Math.pow(2, 8 * u)), S;
  }, s.prototype.readIntBE = function(c, u, y) {
    c = c >>> 0, u = u >>> 0, y || R(c, u, this.length);
    let S = u, B = 1, L = this[c + --S];
    for (; S > 0 && (B *= 256); ) L += this[c + --S] * B;
    return B *= 128, L >= B && (L -= Math.pow(2, 8 * u)), L;
  }, s.prototype.readInt8 = function(c, u) {
    return c = c >>> 0, u || R(c, 1, this.length), this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c];
  }, s.prototype.readInt16LE = function(c, u) {
    c = c >>> 0, u || R(c, 2, this.length);
    const y = this[c] | this[c + 1] << 8;
    return y & 32768 ? y | 4294901760 : y;
  }, s.prototype.readInt16BE = function(c, u) {
    c = c >>> 0, u || R(c, 2, this.length);
    const y = this[c + 1] | this[c] << 8;
    return y & 32768 ? y | 4294901760 : y;
  }, s.prototype.readInt32LE = function(c, u) {
    return c = c >>> 0, u || R(c, 4, this.length), this[c] | this[c + 1] << 8 | this[c + 2] << 16 | this[c + 3] << 24;
  }, s.prototype.readInt32BE = function(c, u) {
    return c = c >>> 0, u || R(c, 4, this.length), this[c] << 24 | this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3];
  }, s.prototype.readBigInt64LE = jr(function(c) {
    c = c >>> 0, ht(c, "offset");
    const u = this[c], y = this[c + 7];
    (u === void 0 || y === void 0) && rr(c, this.length - 8);
    const S = this[c + 4] + this[c + 5] * 2 ** 8 + this[c + 6] * 2 ** 16 + (y << 24);
    return (BigInt(S) << BigInt(32)) + BigInt(u + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24);
  }), s.prototype.readBigInt64BE = jr(function(c) {
    c = c >>> 0, ht(c, "offset");
    const u = this[c], y = this[c + 7];
    (u === void 0 || y === void 0) && rr(c, this.length - 8);
    const S = (u << 24) + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c];
    return (BigInt(S) << BigInt(32)) + BigInt(this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + y);
  }), s.prototype.readFloatLE = function(c, u) {
    return c = c >>> 0, u || R(c, 4, this.length), r.read(this, c, true, 23, 4);
  }, s.prototype.readFloatBE = function(c, u) {
    return c = c >>> 0, u || R(c, 4, this.length), r.read(this, c, false, 23, 4);
  }, s.prototype.readDoubleLE = function(c, u) {
    return c = c >>> 0, u || R(c, 8, this.length), r.read(this, c, true, 52, 8);
  }, s.prototype.readDoubleBE = function(c, u) {
    return c = c >>> 0, u || R(c, 8, this.length), r.read(this, c, false, 52, 8);
  };
  function M(p, c, u, y, S, B) {
    if (!s.isBuffer(p)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (c > S || c < B) throw new RangeError('"value" argument is out of bounds');
    if (u + y > p.length) throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(c, u, y, S) {
    if (c = +c, u = u >>> 0, y = y >>> 0, !S) {
      const te = Math.pow(2, 8 * y) - 1;
      M(this, c, u, y, te, 0);
    }
    let B = 1, L = 0;
    for (this[u] = c & 255; ++L < y && (B *= 256); ) this[u + L] = c / B & 255;
    return u + y;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(c, u, y, S) {
    if (c = +c, u = u >>> 0, y = y >>> 0, !S) {
      const te = Math.pow(2, 8 * y) - 1;
      M(this, c, u, y, te, 0);
    }
    let B = y - 1, L = 1;
    for (this[u + B] = c & 255; --B >= 0 && (L *= 256); ) this[u + B] = c / L & 255;
    return u + y;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(c, u, y) {
    return c = +c, u = u >>> 0, y || M(this, c, u, 1, 255, 0), this[u] = c & 255, u + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(c, u, y) {
    return c = +c, u = u >>> 0, y || M(this, c, u, 2, 65535, 0), this[u] = c & 255, this[u + 1] = c >>> 8, u + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(c, u, y) {
    return c = +c, u = u >>> 0, y || M(this, c, u, 2, 65535, 0), this[u] = c >>> 8, this[u + 1] = c & 255, u + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(c, u, y) {
    return c = +c, u = u >>> 0, y || M(this, c, u, 4, 4294967295, 0), this[u + 3] = c >>> 24, this[u + 2] = c >>> 16, this[u + 1] = c >>> 8, this[u] = c & 255, u + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(c, u, y) {
    return c = +c, u = u >>> 0, y || M(this, c, u, 4, 4294967295, 0), this[u] = c >>> 24, this[u + 1] = c >>> 16, this[u + 2] = c >>> 8, this[u + 3] = c & 255, u + 4;
  };
  function ae(p, c, u, y, S) {
    pt(c, y, S, p, u, 7);
    let B = Number(c & BigInt(4294967295));
    p[u++] = B, B = B >> 8, p[u++] = B, B = B >> 8, p[u++] = B, B = B >> 8, p[u++] = B;
    let L = Number(c >> BigInt(32) & BigInt(4294967295));
    return p[u++] = L, L = L >> 8, p[u++] = L, L = L >> 8, p[u++] = L, L = L >> 8, p[u++] = L, u;
  }
  function oe(p, c, u, y, S) {
    pt(c, y, S, p, u, 7);
    let B = Number(c & BigInt(4294967295));
    p[u + 7] = B, B = B >> 8, p[u + 6] = B, B = B >> 8, p[u + 5] = B, B = B >> 8, p[u + 4] = B;
    let L = Number(c >> BigInt(32) & BigInt(4294967295));
    return p[u + 3] = L, L = L >> 8, p[u + 2] = L, L = L >> 8, p[u + 1] = L, L = L >> 8, p[u] = L, u + 8;
  }
  s.prototype.writeBigUInt64LE = jr(function(c, u = 0) {
    return ae(this, c, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = jr(function(c, u = 0) {
    return oe(this, c, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(c, u, y, S) {
    if (c = +c, u = u >>> 0, !S) {
      const Se = Math.pow(2, 8 * y - 1);
      M(this, c, u, y, Se - 1, -Se);
    }
    let B = 0, L = 1, te = 0;
    for (this[u] = c & 255; ++B < y && (L *= 256); ) c < 0 && te === 0 && this[u + B - 1] !== 0 && (te = 1), this[u + B] = (c / L >> 0) - te & 255;
    return u + y;
  }, s.prototype.writeIntBE = function(c, u, y, S) {
    if (c = +c, u = u >>> 0, !S) {
      const Se = Math.pow(2, 8 * y - 1);
      M(this, c, u, y, Se - 1, -Se);
    }
    let B = y - 1, L = 1, te = 0;
    for (this[u + B] = c & 255; --B >= 0 && (L *= 256); ) c < 0 && te === 0 && this[u + B + 1] !== 0 && (te = 1), this[u + B] = (c / L >> 0) - te & 255;
    return u + y;
  }, s.prototype.writeInt8 = function(c, u, y) {
    return c = +c, u = u >>> 0, y || M(this, c, u, 1, 127, -128), c < 0 && (c = 255 + c + 1), this[u] = c & 255, u + 1;
  }, s.prototype.writeInt16LE = function(c, u, y) {
    return c = +c, u = u >>> 0, y || M(this, c, u, 2, 32767, -32768), this[u] = c & 255, this[u + 1] = c >>> 8, u + 2;
  }, s.prototype.writeInt16BE = function(c, u, y) {
    return c = +c, u = u >>> 0, y || M(this, c, u, 2, 32767, -32768), this[u] = c >>> 8, this[u + 1] = c & 255, u + 2;
  }, s.prototype.writeInt32LE = function(c, u, y) {
    return c = +c, u = u >>> 0, y || M(this, c, u, 4, 2147483647, -2147483648), this[u] = c & 255, this[u + 1] = c >>> 8, this[u + 2] = c >>> 16, this[u + 3] = c >>> 24, u + 4;
  }, s.prototype.writeInt32BE = function(c, u, y) {
    return c = +c, u = u >>> 0, y || M(this, c, u, 4, 2147483647, -2147483648), c < 0 && (c = 4294967295 + c + 1), this[u] = c >>> 24, this[u + 1] = c >>> 16, this[u + 2] = c >>> 8, this[u + 3] = c & 255, u + 4;
  }, s.prototype.writeBigInt64LE = jr(function(c, u = 0) {
    return ae(this, c, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = jr(function(c, u = 0) {
    return oe(this, c, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function We(p, c, u, y, S, B) {
    if (u + y > p.length) throw new RangeError("Index out of range");
    if (u < 0) throw new RangeError("Index out of range");
  }
  function Le(p, c, u, y, S) {
    return c = +c, u = u >>> 0, S || We(p, c, u, 4), r.write(p, c, u, y, 23, 4), u + 4;
  }
  s.prototype.writeFloatLE = function(c, u, y) {
    return Le(this, c, u, true, y);
  }, s.prototype.writeFloatBE = function(c, u, y) {
    return Le(this, c, u, false, y);
  };
  function Oe(p, c, u, y, S) {
    return c = +c, u = u >>> 0, S || We(p, c, u, 8), r.write(p, c, u, y, 52, 8), u + 8;
  }
  s.prototype.writeDoubleLE = function(c, u, y) {
    return Oe(this, c, u, true, y);
  }, s.prototype.writeDoubleBE = function(c, u, y) {
    return Oe(this, c, u, false, y);
  }, s.prototype.copy = function(c, u, y, S) {
    if (!s.isBuffer(c)) throw new TypeError("argument should be a Buffer");
    if (y || (y = 0), !S && S !== 0 && (S = this.length), u >= c.length && (u = c.length), u || (u = 0), S > 0 && S < y && (S = y), S === y || c.length === 0 || this.length === 0) return 0;
    if (u < 0) throw new RangeError("targetStart out of bounds");
    if (y < 0 || y >= this.length) throw new RangeError("Index out of range");
    if (S < 0) throw new RangeError("sourceEnd out of bounds");
    S > this.length && (S = this.length), c.length - u < S - y && (S = c.length - u + y);
    const B = S - y;
    return this === c && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, y, S) : Uint8Array.prototype.set.call(c, this.subarray(y, S), u), B;
  }, s.prototype.fill = function(c, u, y, S) {
    if (typeof c == "string") {
      if (typeof u == "string" ? (S = u, u = 0, y = this.length) : typeof y == "string" && (S = y, y = this.length), S !== void 0 && typeof S != "string") throw new TypeError("encoding must be a string");
      if (typeof S == "string" && !s.isEncoding(S)) throw new TypeError("Unknown encoding: " + S);
      if (c.length === 1) {
        const L = c.charCodeAt(0);
        (S === "utf8" && L < 128 || S === "latin1") && (c = L);
      }
    } else typeof c == "number" ? c = c & 255 : typeof c == "boolean" && (c = Number(c));
    if (u < 0 || this.length < u || this.length < y) throw new RangeError("Out of range index");
    if (y <= u) return this;
    u = u >>> 0, y = y === void 0 ? this.length : y >>> 0, c || (c = 0);
    let B;
    if (typeof c == "number") for (B = u; B < y; ++B) this[B] = c;
    else {
      const L = s.isBuffer(c) ? c : s.from(c, S), te = L.length;
      if (te === 0) throw new TypeError('The value "' + c + '" is invalid for argument "value"');
      for (B = 0; B < y - u; ++B) this[B + u] = L[B % te];
    }
    return this;
  };
  const tr = {};
  function Dt(p, c, u) {
    tr[p] = class extends u {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: c.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${p}]`, this.stack, delete this.name;
      }
      get code() {
        return p;
      }
      set code(S) {
        Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: S, writable: true });
      }
      toString() {
        return `${this.name} [${p}]: ${this.message}`;
      }
    };
  }
  Dt("ERR_BUFFER_OUT_OF_BOUNDS", function(p) {
    return p ? `${p} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), Dt("ERR_INVALID_ARG_TYPE", function(p, c) {
    return `The "${p}" argument must be of type number. Received type ${typeof c}`;
  }, TypeError), Dt("ERR_OUT_OF_RANGE", function(p, c, u) {
    let y = `The value of "${p}" is out of range.`, S = u;
    return Number.isInteger(u) && Math.abs(u) > 2 ** 32 ? S = yr(String(u)) : typeof u == "bigint" && (S = String(u), (u > BigInt(2) ** BigInt(32) || u < -(BigInt(2) ** BigInt(32))) && (S = yr(S)), S += "n"), y += ` It must be ${c}. Received ${S}`, y;
  }, RangeError);
  function yr(p) {
    let c = "", u = p.length;
    const y = p[0] === "-" ? 1 : 0;
    for (; u >= y + 4; u -= 3) c = `_${p.slice(u - 3, u)}${c}`;
    return `${p.slice(0, u)}${c}`;
  }
  function Ro(p, c, u) {
    ht(c, "offset"), (p[c] === void 0 || p[c + u] === void 0) && rr(c, p.length - (u + 1));
  }
  function pt(p, c, u, y, S, B) {
    if (p > u || p < c) {
      const L = typeof c == "bigint" ? "n" : "";
      let te;
      throw c === 0 || c === BigInt(0) ? te = `>= 0${L} and < 2${L} ** ${(B + 1) * 8}${L}` : te = `>= -(2${L} ** ${(B + 1) * 8 - 1}${L}) and < 2 ** ${(B + 1) * 8 - 1}${L}`, new tr.ERR_OUT_OF_RANGE("value", te, p);
    }
    Ro(y, S, B);
  }
  function ht(p, c) {
    if (typeof p != "number") throw new tr.ERR_INVALID_ARG_TYPE(c, "number", p);
  }
  function rr(p, c, u) {
    throw Math.floor(p) !== p ? (ht(p, u), new tr.ERR_OUT_OF_RANGE("offset", "an integer", p)) : c < 0 ? new tr.ERR_BUFFER_OUT_OF_BOUNDS() : new tr.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${c}`, p);
  }
  const Fo = /[^+/0-9A-Za-z-_]/g;
  function Ho(p) {
    if (p = p.split("=")[0], p = p.trim().replace(Fo, ""), p.length < 2) return "";
    for (; p.length % 4 !== 0; ) p = p + "=";
    return p;
  }
  function Ts(p, c) {
    c = c || 1 / 0;
    let u;
    const y = p.length;
    let S = null;
    const B = [];
    for (let L = 0; L < y; ++L) {
      if (u = p.charCodeAt(L), u > 55295 && u < 57344) {
        if (!S) {
          if (u > 56319) {
            (c -= 3) > -1 && B.push(239, 191, 189);
            continue;
          } else if (L + 1 === y) {
            (c -= 3) > -1 && B.push(239, 191, 189);
            continue;
          }
          S = u;
          continue;
        }
        if (u < 56320) {
          (c -= 3) > -1 && B.push(239, 191, 189), S = u;
          continue;
        }
        u = (S - 55296 << 10 | u - 56320) + 65536;
      } else S && (c -= 3) > -1 && B.push(239, 191, 189);
      if (S = null, u < 128) {
        if ((c -= 1) < 0) break;
        B.push(u);
      } else if (u < 2048) {
        if ((c -= 2) < 0) break;
        B.push(u >> 6 | 192, u & 63 | 128);
      } else if (u < 65536) {
        if ((c -= 3) < 0) break;
        B.push(u >> 12 | 224, u >> 6 & 63 | 128, u & 63 | 128);
      } else if (u < 1114112) {
        if ((c -= 4) < 0) break;
        B.push(u >> 18 | 240, u >> 12 & 63 | 128, u >> 6 & 63 | 128, u & 63 | 128);
      } else throw new Error("Invalid code point");
    }
    return B;
  }
  function om(p) {
    const c = [];
    for (let u = 0; u < p.length; ++u) c.push(p.charCodeAt(u) & 255);
    return c;
  }
  function im(p, c) {
    let u, y, S;
    const B = [];
    for (let L = 0; L < p.length && !((c -= 2) < 0); ++L) u = p.charCodeAt(L), y = u >> 8, S = u % 256, B.push(S), B.push(y);
    return B;
  }
  function Wu(p) {
    return t.toByteArray(Ho(p));
  }
  function $o(p, c, u, y) {
    let S;
    for (S = 0; S < y && !(S + u >= c.length || S >= p.length); ++S) c[S + u] = p[S];
    return S;
  }
  function nr(p, c) {
    return p instanceof c || p != null && p.constructor != null && p.constructor.name != null && p.constructor.name === c.name;
  }
  function Us(p) {
    return p !== p;
  }
  const sm = function() {
    const p = "0123456789abcdef", c = new Array(256);
    for (let u = 0; u < 16; ++u) {
      const y = u * 16;
      for (let S = 0; S < 16; ++S) c[y + S] = p[u] + p[S];
    }
    return c;
  }();
  function jr(p) {
    return typeof BigInt > "u" ? lm : p;
  }
  function lm() {
    throw new Error("BigInt not supported");
  }
})(nm);
window.Buffer = nm.Buffer;
Al.createRoot(document.getElementById("root")).render($.jsx(Qd.StrictMode, { children: $.jsx(Ov, {}) }));
