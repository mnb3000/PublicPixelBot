'use strict';
!function(modules) {
  /**
   * @param {number} moduleId
   * @return {?}
   */
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i : moduleId,
      l : false,
      exports : {}
    };
    return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = true, module.exports;
  }
  /** @type {function(number, !Array, ?): undefined} */
  var oldWebpackJsonp = window.webpackJsonp;
  /**
   * @param {number} chunkIds
   * @param {!Array} moreModules
   * @param {?} startupModules
   * @return {undefined}
   */
  window.webpackJsonp = function(chunkIds, moreModules, startupModules) {
    var moduleId;
    var chunkId;
    /** @type {number} */
    var i = 0;
    /** @type {!Array} */
    var _sizeAnimateTimeStamps = [];
    for (; i < chunkIds.length; i++) {
      chunkId = chunkIds[i];
      if (suggest_values[chunkId]) {
        _sizeAnimateTimeStamps.push(suggest_values[chunkId][0]);
      }
      /** @type {number} */
      suggest_values[chunkId] = 0;
    }
    for (moduleId in moreModules) {
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        modules[moduleId] = moreModules[moduleId];
      }
    }
    if (oldWebpackJsonp) {
      oldWebpackJsonp(chunkIds, moreModules, startupModules);
    }
    for (; _sizeAnimateTimeStamps.length;) {
      _sizeAnimateTimeStamps.shift()();
    }
  };
  var installedModules = {};
  var suggest_values = {
    3 : 0
  };
  /**
   * @param {string} type
   * @return {?}
   */
  __webpack_require__.e = function(type) {
    /**
     * @return {undefined}
     */
    function onScriptComplete() {
      /** @type {null} */
      script.onerror = script.onload = null;
      clearTimeout(timeout);
      var resolver = suggest_values[type];
      if (0 !== resolver) {
        if (resolver) {
          resolver[1](new Error("Loading chunk " + type + " failed."));
        }
        suggest_values[type] = void 0;
      }
    }
    var parsers = suggest_values[type];
    if (0 === parsers) {
      return new Promise(function(e) {
        e();
      });
    }
    if (parsers) {
      return parsers[2];
    }
    /** @type {!Promise} */
    var p = new Promise(function(inherit, uppercase) {
      /** @type {!Array} */
      parsers = suggest_values[type] = [inherit, uppercase];
    });
    /** @type {!Promise} */
    parsers[2] = p;
    /** @type {!Element} */
    var el_head = document.getElementsByTagName("head")[0];
    /** @type {!Element} */
    var script = document.createElement("script");
    /** @type {string} */
    script.type = "text/javascript";
    /** @type {string} */
    script.charset = "utf-8";
    /** @type {boolean} */
    script.async = true;
    /** @type {number} */
    script.timeout = 12e4;
    if (__webpack_require__.nc) {
      script.setAttribute("nonce", __webpack_require__.nc);
    }
    /** @type {string} */
    script.src = __webpack_require__.p + "static/js/" + ({}[type] || type) + "." + {
      0 : "0dcce705",
      1 : "61fbd3ae",
      2 : "271c9e91"
    }[type] + ".chunk.js";
    /** @type {number} */
    var timeout = setTimeout(onScriptComplete, 12e4);
    return script.onerror = script.onload = onScriptComplete, el_head.appendChild(script), p;
  };
  /** @type {!Array} */
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  /**
   * @param {string} e
   * @param {string} name
   * @param {!Function} n
   * @return {undefined}
   */
  __webpack_require__.d = function(e, name, n) {
    if (!__webpack_require__.o(e, name)) {
      Object.defineProperty(e, name, {
        configurable : false,
        enumerable : true,
        get : n
      });
    }
  };
  /**
   * @param {!Object} module
   * @return {?}
   */
  __webpack_require__.n = function(module) {
    /** @type {function(): ?} */
    var n = module && module.__esModule ? function() {
      return module.default;
    } : function() {
      return module;
    };
    return __webpack_require__.d(n, "a", n), n;
  };
  /**
   * @param {string} e
   * @param {string} input
   * @return {?}
   */
  __webpack_require__.o = function(e, input) {
    return Object.prototype.hasOwnProperty.call(e, input);
  };
  /** @type {string} */
  __webpack_require__.p = "./";
  /**
   * @param {?} err
   * @return {?}
   */
  __webpack_require__.oe = function(err) {
    throw console.error(err), err;
  };
  __webpack_require__(__webpack_require__.s = 50);
}([function(module, canCreateDiscussions, factory) {
  module.exports = factory(56);
}, function(canCreateDiscussions, self, $) {
  /**
   * @return {?}
   */
  function Display() {
    return ["#ffffff", "#c5d2e0", "#999999", "#333333", "#000000", "#94E044", "#4bb34b", "#5CBF0D", "#FDCB5D", "#FFA75F", "#ffa000", "#FF727D", "#fe0100", "#DB2735", "#CD3EE7", "#A32AB9", "#70B6F7", "#488dcf", "#1893E1"];
  }
  /**
   * @param {?} name
   * @param {string} x
   * @param {?} data
   * @param {!Object} value
   * @return {?}
   */
  function init(name, x, data, value) {
    var o = void 0;
    var i = void 0;
    var key = void 0;
    var p = void 0;
    var to = void 0;
    return isNaN(x = Math.abs(x)) && (x = 2), void 0 === data && (data = ","), void 0 === value && (value = "."), o = parseInt(name = (+name || 0).toFixed(x), 10) + "", (i = o.length) > 3 ? i = i % 3 : i = 0, to = i ? o.substr(0, i) + value : "", key = o.substr(i).replace(/(\d{3})(?=\d)/g, "$1" + value), p = x ? data + Math.abs(name - o).toFixed(x).replace(/-/, 0).slice(2) : "", to + key + p;
  }
  /**
   * @return {undefined}
   */
  function m() {
    /** @type {number} */
    var j = parseInt(clonedI.a.getStartParams().groupId, 10);
    var buffers = {
      def : "UA-97665079-1"
    };
    /** @type {string} */
    var buffer = buffers.def;
    if (void 0 !== buffers[j]) {
      buffer = buffers[j];
    }
    meta.GA.create(buffer, clonedI.a.getStartParams().viewerId);
    meta.GA.pageview();
  }
  /**
   * @return {?}
   */
  function f() {
    return activeActivity - Date.now();
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function instance(name) {
    return activeActivity = name;
  }
  /**
   * @return {?}
   */
  function q() {
    return f() <= 0;
  }
  /**
   * @param {string} name
   * @return {undefined}
   */
  function handler(name) {
    /** @type {(Element|null)} */
    var rootRequire = document.getElementById("root");
    if (window.reactMounted) {
      Object(data.unmountComponentAtNode)(rootRequire);
    }
    /** @type {boolean} */
    window.reactMounted = true;
    document.body.parentNode.classList.remove("h");
    Object(data.render)(name, rootRequire);
  }
  /**
   * @param {string} value
   * @return {undefined}
   */
  function e(value) {
  }
  /**
   * @param {string} b
   * @param {string} a
   * @param {string} c
   * @return {?}
   */
  function l(b, a, c) {
    return a < b ? b : a > c ? c : a;
  }
  /**
   * @param {string} type
   * @return {?}
   */
  function action(type) {
    return Math.abs(type);
  }
  /** @type {function(): ?} */
  self.c = Display;
  /** @type {function(?, string, ?, !Object): ?} */
  self.i = init;
  /** @type {function(): undefined} */
  self.d = m;
  /** @type {function(): ?} */
  self.f = f;
  /** @type {function(string): ?} */
  self.j = instance;
  /** @type {function(): ?} */
  self.g = q;
  /** @type {function(string): undefined} */
  self.h = handler;
  /** @type {function(string): undefined} */
  self.e = e;
  /** @type {function(string, string, string): ?} */
  self.b = l;
  /** @type {function(string): ?} */
  self.a = action;
  var meta = $(18);
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = ($.n(meta), $(6));
  var clonedI = $.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var data = $(97);
  /** @type {number} */
  var activeActivity = ($.n(data), 15103008e5);
}, function(canCreateDiscussions, handler, __webpack_require__) {
  /**
   * @param {!AudioNode} w
   * @param {!Function} t
   * @return {undefined}
   */
  function createElement(w, t) {
    if (!(w instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var ctx = __webpack_require__(103);
  var descriptor = __webpack_require__(19);
  var interceptor = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var language = function() {
    /**
     * @return {undefined}
     */
    function value() {
      createElement(this, value);
    }
    return interceptor(value, null, [{
      key : "init",
      value : function(name) {
        return new Promise(function(r, rejected) {
          if (-1 === ["en", "ua", "ru", "by"].indexOf(name)) {
            /** @type {string} */
            name = "ru";
          }
          var messages = {
            ru : Object(descriptor.default)()
          };
          /** @type {string} */
          value.lang = name;
          if (messages.hasOwnProperty(name)) {
            value.initI18n(name, messages).then(r).catch(rejected);
          } else {
            __webpack_require__(113)("./" + name).then(function(n) {
              if ("ua" === name) {
                /** @type {string} */
                name = "uk";
              }
              messages[name] = n.default();
              value.initI18n(name, messages).then(r).catch(rejected);
            }).catch(rejected);
          }
        });
      }
    }, {
      key : "initI18n",
      value : function(name, id) {
        return new Promise(function(saveNotifs, func) {
          try {
            ctx.a.init({
              lng : name,
              resources : id,
              fallbackLng : "ru"
            }, function(ldata) {
              if (ldata) {
                func(ldata);
              } else {
                /** @type {string} */
                value.lang = name;
                saveNotifs();
              }
            });
          } catch (toFloat) {
            func(toFloat);
          }
        });
      }
    }, {
      key : "t",
      value : function(name, data) {
        return ctx.a.t(name, data);
      }
    }]), value;
  }();
  /** @type {string} */
  language.lang = "ru";
  handler.a = language;
}, function(canCreateDiscussions, value, n) {
  var p = n(57);
  var clonedI = (n(24), n(63));
  n.d(value, "a", function() {
    return p.a;
  });
  n.d(value, "b", function() {
    return clonedI.a;
  });
}, function(canCreateDiscussions, value, _) {
  _.d(value, "s", function() {
    return n;
  });
  _.d(value, "t", function() {
    return o;
  });
  _.d(value, "x", function() {
    return i;
  });
  _.d(value, "v", function() {
    return a;
  });
  _.d(value, "w", function() {
    return u;
  });
  _.d(value, "y", function() {
    return s;
  });
  _.d(value, "z", function() {
    return l;
  });
  _.d(value, "q", function() {
    return c;
  });
  _.d(value, "g", function() {
    return f;
  });
  _.d(value, "p", function() {
    return p;
  });
  _.d(value, "l", function() {
    return d;
  });
  _.d(value, "m", function() {
    return h;
  });
  _.d(value, "h", function() {
    return m;
  });
  _.d(value, "a", function() {
    return y;
  });
  _.d(value, "u", function() {
    return g;
  });
  _.d(value, "o", function() {
    return v;
  });
  _.d(value, "i", function() {
    return b;
  });
  _.d(value, "j", function() {
    return w;
  });
  _.d(value, "n", function() {
    return t;
  });
  _.d(value, "k", function() {
    return k;
  });
  _.d(value, "d", function() {
    return x;
  });
  _.d(value, "b", function() {
    return O;
  });
  _.d(value, "e", function() {
    return E;
  });
  _.d(value, "f", function() {
    return P;
  });
  _.d(value, "c", function() {
    return C;
  });
  _.d(value, "r", function() {
    return T;
  });
  /** @type {string} */
  var n = "UPDATE_USER_CAN_DRAW";
  /** @type {string} */
  var o = "UPDATE_USER_TTL";
  /** @type {string} */
  var i = "WS_ONLINE";
  /** @type {string} */
  var a = "WS_CONNECTING";
  /** @type {string} */
  var u = "WS_ERROR";
  /** @type {string} */
  var s = "WS_UPDATE";
  /** @type {string} */
  var l = "WS_UPDATE_DROP";
  /** @type {string} */
  var c = "UPDATE_ONLINE";
  /** @type {string} */
  var f = "SET_AUTH_TOKEN";
  /** @type {string} */
  var p = "UPDATE_GROUP";
  /** @type {string} */
  var d = "SET_POINTS";
  /** @type {string} */
  var h = "SET_UNSUBSCRIBE";
  /** @type {string} */
  var m = "SET_CAN_POST";
  /** @type {string} */
  var y = "ALERT_USERS";
  /** @type {string} */
  var g = "USER_SET_HAS_TTL";
  /** @type {string} */
  var v = "SET_USER_KEY";
  /** @type {string} */
  var b = "SET_DEFAULT_TTL";
  /** @type {string} */
  var w = "SET_IMAGE";
  /** @type {string} */
  var t = "SET_UPDATES";
  /** @type {string} */
  var k = "SET_LOADER";
  /** @type {string} */
  var x = "BUY_OPEN";
  /** @type {string} */
  var O = "BUY_CLOSE";
  /** @type {string} */
  var E = "BUY_SELECT";
  /** @type {string} */
  var P = "BUY_WAIT";
  /** @type {string} */
  var C = "BUY_IDLE";
  /** @type {string} */
  var T = "UPDATE_RATING";
}, function(canCreateDiscussions, B, n) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} rows
   * @return {?}
   */
  function parser(rows) {
    if (Array.isArray(rows)) {
      /** @type {number} */
      var i = 0;
      /** @type {!Array} */
      var result = Array(rows.length);
      for (; i < rows.length; i++) {
        result[i] = rows[i];
      }
      return result;
    }
    return Array.from(rows);
  }
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var _extends = Object.assign || function(name) {
    /** @type {number} */
    var index = 1;
    for (; index < arguments.length; index++) {
      var options = arguments[index];
      var option;
      for (option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option)) {
          name[option] = options[option];
        }
      }
    }
    return name;
  };
  var consoleLogger = {
    type : "logger",
    log : function(name) {
      this.output("log", name);
    },
    warn : function(name) {
      this.output("warn", name);
    },
    error : function(name) {
      this.output("error", name);
    },
    output : function(type, data) {
      var _console2;
      if (console && console[type]) {
        (_console2 = console)[type].apply(_console2, parser(data));
      }
    }
  };
  var A = function() {
    /**
     * @param {undefined} name
     * @return {undefined}
     */
    function Logger(name) {
      var offset = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      _classCallCheck(this, Logger);
      this.init(name, offset);
    }
    return Logger.prototype.init = function(name) {
      var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      this.prefix = options.prefix || "i18next:";
      this.logger = name || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }, Logger.prototype.setDebug = function(bool) {
      /** @type {string} */
      this.debug = bool;
    }, Logger.prototype.log = function() {
      /** @type {number} */
      var _len8 = arguments.length;
      /** @type {!Array} */
      var args = Array(_len8);
      /** @type {number} */
      var _key8 = 0;
      for (; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      return this.forward(args, "log", "", true);
    }, Logger.prototype.warn = function() {
      /** @type {number} */
      var _len8 = arguments.length;
      /** @type {!Array} */
      var args = Array(_len8);
      /** @type {number} */
      var _key8 = 0;
      for (; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      return this.forward(args, "warn", "", true);
    }, Logger.prototype.error = function() {
      /** @type {number} */
      var _len8 = arguments.length;
      /** @type {!Array} */
      var args = Array(_len8);
      /** @type {number} */
      var _key8 = 0;
      for (; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      return this.forward(args, "error", "");
    }, Logger.prototype.deprecate = function() {
      /** @type {number} */
      var _len8 = arguments.length;
      /** @type {!Array} */
      var args = Array(_len8);
      /** @type {number} */
      var _key8 = 0;
      for (; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
    }, Logger.prototype.forward = function(args, lvl, prefix, debugOnly) {
      return debugOnly && !this.debug ? null : ("string" === typeof args[0] && (args[0] = "" + prefix + this.prefix + " " + args[0]), this.logger[lvl](args));
    }, Logger.prototype.create = function(name) {
      return new Logger(this.logger, _extends({
        prefix : this.prefix + ":" + name + ":"
      }, this.options));
    }, Logger;
  }();
  B.a = new A;
}, function(module, canCreateDiscussions, factory) {
  module.exports = factory(85);
}, function(canCreateDiscussions, p, n) {
  /**
   * @param {!AudioNode} x
   * @param {!Function} y
   * @return {undefined}
   */
  function print(x, y) {
    if (!(x instanceof y)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var opacity = function() {
    /**
     * @return {undefined}
     */
    function t() {
      print(this, t);
      this.observers = {};
    }
    return t.prototype.on = function(type, data) {
      var HttpRequestObserver = this;
      type.split(" ").forEach(function(i) {
        HttpRequestObserver.observers[i] = HttpRequestObserver.observers[i] || [];
        HttpRequestObserver.observers[i].push(data);
      });
    }, t.prototype.off = function(event, selector) {
      var _this = this;
      if (this.observers[event]) {
        this.observers[event].forEach(function() {
          if (selector) {
            var r = _this.observers[event].indexOf(selector);
            if (r > -1) {
              _this.observers[event].splice(r, 1);
            }
          } else {
            delete _this.observers[event];
          }
        });
      }
    }, t.prototype.emit = function(event) {
      /** @type {number} */
      var length = arguments.length;
      /** @type {!Array} */
      var args = Array(length > 1 ? length - 1 : 0);
      /** @type {number} */
      var i = 1;
      for (; i < length; i++) {
        args[i - 1] = arguments[i];
      }
      if (this.observers[event]) {
        [].concat(this.observers[event]).forEach(function(fToRetry) {
          fToRetry.apply(void 0, args);
        });
      }
      if (this.observers["*"]) {
        [].concat(this.observers["*"]).forEach(function(observer) {
          var _ref;
          observer.apply(observer, (_ref = [event]).concat.apply(_ref, args));
        });
      }
    }, t;
  }();
  p.a = opacity;
}, function(canCreateDiscussions, state, createObject) {
  /**
   * @param {string} name
   * @return {?}
   */
  function c(name) {
    return {
      type : p.k,
      loader : name
    };
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function index(name) {
    return {
      type : p.i,
      ttl : name
    };
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function d(name) {
    return {
      type : SET_TRAY_USERNAME,
      signature : name
    };
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function config(name) {
    return {
      type : SET_CHATS_RECOVERED,
      id : parseInt(name, 10)
    };
  }
  /**
   * @return {?}
   */
  function data() {
    return function(callback) {
      try {
        var m = localStorage.getItem("DROP_FIRST_TIME_VK12");
        callback(m ? {
          type : SET_OPERATOR_CHATS_ABANDONED,
          value : false
        } : {
          type : SET_OPERATOR_CHATS_ABANDONED,
          value : true
        });
      } catch (artistTrack) {
        Object(self.e)(artistTrack);
        callback({
          type : SET_OPERATOR_CHATS_ABANDONED,
          value : false
        });
      }
    };
  }
  /**
   * @return {?}
   */
  function proxy() {
    return function(test) {
      test({
        type : SET_OPERATOR_CHATS_ABANDONED,
        value : false
      });
      try {
        localStorage.setItem("DROP_FIRST_TIME_VK12", 1);
      } catch (e) {
        Object(self.e)(e);
      }
    };
  }
  /**
   * @return {?}
   */
  function type() {
    return function(callback) {
      try {
        var m = localStorage.getItem("DROP_HEADER_VK12");
        callback(m ? {
          type : TOK_PIPE,
          value : false
        } : {
          type : TOK_PIPE,
          value : true
        });
      } catch (artistTrack) {
        Object(self.e)(artistTrack);
        callback({
          type : TOK_PIPE,
          value : false
        });
      }
    };
  }
  /**
   * @return {?}
   */
  function callback() {
    return function(process) {
      process({
        type : TOK_PIPE,
        value : false
      });
      try {
        localStorage.setItem("DROP_HEADER_VK12", 1);
      } catch (e) {
        Object(self.e)(e);
      }
    };
  }
  /**
   * @return {?}
   */
  function fn() {
    return function(callback, getState) {
      if (Object(self.g)()) {
        var error = getState().group.good;
        callback(error ? {
          type : p.s,
          can_draw : true
        } : {
          type : p.s,
          can_draw : false
        });
      }
      if (Object(self.f)() > 0) {
        setTimeout(function() {
          return callback(fn());
        }, Object(self.f)());
      } else {
        setTimeout(function() {
          return callback(fn());
        }, 1E3);
      }
    };
  }
  /** @type {function(string): ?} */
  state.g = c;
  /** @type {function(string): ?} */
  state.i = index;
  /** @type {function(string): ?} */
  state.h = d;
  /** @type {function(string): ?} */
  state.j = config;
  /** @type {function(): ?} */
  state.d = data;
  /** @type {function(): ?} */
  state.f = proxy;
  /** @type {function(): ?} */
  state.e = type;
  /** @type {function(): ?} */
  state.c = callback;
  /** @type {function(): ?} */
  state.a = fn;
  var p = createObject(4);
  var self = createObject(1);
  /** @type {string} */
  var SET_TRAY_USERNAME = "user.SET_SIGNATURE";
  /** @type {string} */
  var SET_CHATS_RECOVERED = "user.SET_USER_ID";
  /** @type {string} */
  var SET_OPERATOR_CHATS_ABANDONED = "user.SET_FIRST_TIME";
  /** @type {string} */
  var TOK_PIPE = "user.SET_HEADER";
  var val = {
    can_draw : true,
    wait : 0,
    online : 1,
    admin : false,
    points : 0,
    unsubscribe : false,
    can_post : false,
    alert : null,
    has_ttl : true,
    default_ttl : 1,
    image : null,
    updates : [],
    k : "",
    loader : true,
    signature : 1,
    id : null,
    first_time : false,
    show_header : false
  };
  /**
   * @return {?}
   */
  var init = function() {
    var value = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : val;
    var data = arguments[1];
    switch(data.type) {
      case p.t:
        return Object.assign({}, value, {
          wait : data.ttl || 0
        });
      case p.s:
        return Object.assign({}, value, {
          can_draw : data.can_draw
        });
      case p.q:
        return Object.assign({}, value, {
          online : data.value
        });
      case p.g:
        return Object.assign({}, value, {
          admin : data.token
        });
      case p.l:
        return Object.assign({}, value, {
          points : data.points
        });
      case p.m:
        return Object.assign({}, value, {
          unsubscribe : true
        });
      case p.h:
        return Object.assign({}, value, {
          can_post : data.can
        });
      case p.a:
        return Object.assign({}, value, {
          alert : data.data
        });
      case p.u:
        return Object.assign({}, value, {
          has_ttl : data.has
        });
      case p.o:
        return Object.assign({}, value, {
          k : data.k
        });
      case p.i:
        return Object.assign({}, value, {
          default_ttl : data.ttl
        });
      case p.j:
        return Object.assign({}, value, {
          image : data.image
        });
      case p.n:
        return Object.assign({}, value, {
          updates : data.updates
        });
      case p.k:
        return Object.assign({}, value, {
          loader : data.loader
        });
      case SET_TRAY_USERNAME:
        return Object.assign({}, value, {
          signature : data.signature
        });
      case SET_CHATS_RECOVERED:
        return Object.assign({}, value, {
          id : data.id
        });
      case SET_OPERATOR_CHATS_ABANDONED:
        return Object.assign({}, value, {
          first_time : data.value
        });
      case TOK_PIPE:
        return Object.assign({}, value, {
          show_header : data.value
        });
      default:
        return value;
    }
  };
  /** @type {function(): ?} */
  state.b = init;
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {?} it
   * @return {?}
   */
  function toObject(it) {
    if (null === it || void 0 === it) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(it);
  }
  /** @type {function(!Object): !Array<?>} */
  var ownSymbols = Object.getOwnPropertySymbols;
  /** @type {function(this:Object, *): boolean} */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /** @type {function(this:Object, string): boolean} */
  var fn = Object.prototype.propertyIsEnumerable;
  /** @type {!Function} */
  mixin.exports = function() {
    try {
      if (!Object.assign) {
        return false;
      }
      /** @type {!String} */
      var test1 = new String("abc");
      if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) {
        return false;
      }
      var map = {};
      /** @type {number} */
      var i = 0;
      for (; i < 10; i++) {
        /** @type {number} */
        map["_" + String.fromCharCode(i)] = i;
      }
      if ("0123456789" !== Object.getOwnPropertyNames(map).map(function(oldOrient) {
        return map[oldOrient];
      }).join("")) {
        return false;
      }
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(gid) {
        /** @type {string} */
        b[gid] = gid;
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, b)).join("");
    } catch (e) {
      return false;
    }
  }() ? Object.assign : function(name, data) {
    var obj;
    var keys;
    var src = toObject(name);
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      /** @type {!Object} */
      obj = Object(arguments[i]);
      var key;
      for (key in obj) {
        if (hasOwnProperty.call(obj, key)) {
          src[key] = obj[key];
        }
      }
      if (ownSymbols) {
        /** @type {!Array<?>} */
        keys = ownSymbols(obj);
        /** @type {number} */
        var i = 0;
        for (; i < keys.length; i++) {
          if (fn.call(obj, keys[i])) {
            src[keys[i]] = obj[keys[i]];
          }
        }
      }
    }
    return src;
  };
}, function(canCreateDiscussions, state, n) {
  /**
   * @param {string} title
   * @return {?}
   */
  function e(title) {
    return null == title ? "" : "" + title;
  }
  /**
   * @param {string} name
   * @param {!Function} data
   * @param {!Object} obj
   * @return {undefined}
   */
  function form(name, data, obj) {
    name.forEach(function(k) {
      if (data[k]) {
        obj[k] = data[k];
      }
    });
  }
  /**
   * @param {!Object} e
   * @param {string} input
   * @param {!Function} value
   * @return {?}
   */
  function g(e, input, value) {
    /**
     * @param {string} selector
     * @return {?}
     */
    function lookup(selector) {
      return selector && selector.indexOf("###") > -1 ? selector.replace(/###/g, ".") : selector;
    }
    /**
     * @return {?}
     */
    function processValue() {
      return !e || "string" === typeof e;
    }
    /** @type {!Array} */
    var _sizeAnimateTimeStamps = "string" !== typeof input ? [].concat(input) : input.split(".");
    for (; _sizeAnimateTimeStamps.length > 1;) {
      if (processValue()) {
        return {};
      }
      var key = lookup(_sizeAnimateTimeStamps.shift());
      if (!e[key] && value) {
        e[key] = new value;
      }
      e = e[key];
    }
    return processValue() ? {} : {
      obj : e,
      k : lookup(_sizeAnimateTimeStamps.shift())
    };
  }
  /**
   * @param {string} name
   * @param {!Function} key
   * @param {(number|string)} data
   * @return {undefined}
   */
  function start(name, key, data) {
    var item = g(name, key, Object);
    /** @type {(number|string)} */
    item.obj[item.k] = data;
  }
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} r
   * @param {?} format
   * @return {undefined}
   */
  function f(x, y, r, format) {
    var a = g(x, y, Object);
    var result = a.obj;
    var key = a.k;
    result[key] = result[key] || [];
    if (format) {
      result[key] = result[key].concat(r);
    }
    if (!format) {
      result[key].push(r);
    }
  }
  /**
   * @param {string} b
   * @param {string} a
   * @return {?}
   */
  function m(b, a) {
    var r = g(b, a);
    var o = r.obj;
    var k = r.k;
    if (o) {
      return o[k];
    }
  }
  /**
   * @param {!Object} obj
   * @param {string} target
   * @param {string} name
   * @return {?}
   */
  function copy(obj, target, name) {
    var prop;
    for (prop in target) {
      if (prop in obj) {
        if ("string" === typeof obj[prop] || obj[prop] instanceof String || "string" === typeof target[prop] || target[prop] instanceof String) {
          if (name) {
            obj[prop] = target[prop];
          }
        } else {
          copy(obj[prop], target[prop], name);
        }
      } else {
        obj[prop] = target[prop];
      }
    }
    return obj;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function c(name) {
    return name.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function d(value) {
    return "string" === typeof value ? value.replace(/[&<>"'\/]/g, function(s) {
      return entityMap[s];
    }) : value;
  }
  /** @type {function(string): ?} */
  state.e = e;
  /** @type {function(string, !Function, !Object): undefined} */
  state.a = form;
  /** @type {function(string, !Function, (number|string)): undefined} */
  state.h = start;
  /** @type {function(number, number, number, ?): undefined} */
  state.f = f;
  /** @type {function(string, string): ?} */
  state.d = m;
  /** @type {function(!Object, string, string): ?} */
  state.b = copy;
  /** @type {function(string): ?} */
  state.g = c;
  /** @type {function(string): ?} */
  state.c = d;
  var entityMap = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&#39;",
    "/" : "&#x2F;"
  };
}, function(canCreateDiscussions, exports, $) {
  /**
   * @return {?}
   */
  function push() {
    return function(expect) {
      o.a.request("v1/admin", {}, "GET").then(function(p) {
        var page = p.pid;
        var path = p.percent;
        var url = p.image;
        var c = p.has_lock;
        expect(page ? _(path, url) : _(null, null));
        expect(get(c));
        setTimeout(function() {
          return expect(push());
        }, 1E4 * Math.random() + 1E4);
      }).catch(function(mmCoreSplitViewBlock) {
        Object(self.e)(mmCoreSplitViewBlock);
        setTimeout(function() {
          return expect(push());
        }, 1E4 * Math.random() + 1E4);
      });
    };
  }
  /**
   * @return {?}
   */
  function remove() {
    return function(parse) {
      parse(callback(true));
      o.a.request("v1/admin/rollback").then(function(value) {
        parse(callback(false));
        parse(resolve(value));
      }).catch(function(data) {
        parse(callback(false));
        alert(JSON.stringify(data));
      });
    };
  }
  /**
   * @param {string} newSource
   * @return {?}
   */
  function test(newSource) {
    return function(parse) {
      /** @type {number} */
      var default_favicon = Date.now();
      /** @type {string} */
      var oldFont = default_favicon.toString().substr(-2, 2);
      if (prompt("\u0414\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u043e\u0442\u043a\u0430\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0438\u0444\u0440\u0443: " + oldFont) === oldFont) {
        parse(callback(true));
        o.a.request("v1/admin", {
          file : newSource
        }, "POST").then(function(c) {
          var b = c.pid;
          var p = c.percent;
          var key = c.image;
          var x = c.has_lock;
          parse(b ? _(p, key) : _(null, null));
          parse(get(x));
          parse(callback(false));
          parse(resolve([]));
        }).catch(function(data) {
          parse(callback(false));
          alert(JSON.stringify(data));
        });
      }
    };
  }
  /**
   * @return {?}
   */
  function a() {
    return function(parse) {
      parse(callback(false));
      parse(resolve([]));
    };
  }
  /**
   * @param {string} m
   * @param {!Object} url
   * @return {?}
   */
  function _(m, url) {
    return m ? {
      type : GET_USER_PROFILE_SUCCESS,
      process : {
        text : m,
        url : url
      }
    } : {
      type : GET_USER_PROFILE_SUCCESS,
      process : null
    };
  }
  /**
   * @param {number} style
   * @return {?}
   */
  function get(style) {
    return {
      type : MOVE_CARDS,
      lock : style
    };
  }
  /**
   * @param {boolean} isRefresh
   * @return {?}
   */
  function callback(isRefresh) {
    return {
      type : GET_FEED_FAILURE,
      load_images : isRefresh
    };
  }
  /**
   * @param {!Array} data
   * @return {?}
   */
  function resolve(data) {
    return {
      type : GET_USER_PROFILE_FAILURE,
      images : data
    };
  }
  /**
   * @return {?}
   */
  function fetch() {
    return function(f) {
      o.a.request("v1/admin/drop-lock", {}, "PATCH").then(function(props) {
        var page = props.pid;
        var path = props.percent;
        var url = props.image;
        var value = props.has_lock;
        f(page ? _(path, url) : _(null, null));
        f(get(value));
      }).catch(function(e) {
        Object(self.e)(e);
      });
    };
  }
  /**
   * @param {number} group
   * @return {?}
   */
  function format(group) {
    return {
      type : REMOVE_DATA_SUCCESSFUL,
      id : parseInt(group, 10)
    };
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function helpers(name) {
    return {
      type : MOVE_POINTS,
      value : name
    };
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function c(name) {
    return {
      type : presence.p,
      update : {
        mega : name
      }
    };
  }
  /** @type {function(): ?} */
  exports.a = push;
  /** @type {function(): ?} */
  exports.i = remove;
  /** @type {function(string): ?} */
  exports.e = test;
  /** @type {function(): ?} */
  exports.d = a;
  /** @type {function(): ?} */
  exports.c = fetch;
  /** @type {function(number): ?} */
  exports.f = format;
  /** @type {function(string): ?} */
  exports.h = helpers;
  /** @type {function(string): ?} */
  exports.g = c;
  var presence = $(4);
  var o = $(12);
  var self = $(1);
  /** @type {string} */
  var GET_USER_PROFILE_SUCCESS = "g.SET_PROCESS";
  /** @type {string} */
  var GET_FEED_FAILURE = "g.SET_LOAD_IMAGES";
  /** @type {string} */
  var GET_USER_PROFILE_FAILURE = "g.SET_IMAGES";
  /** @type {string} */
  var MOVE_CARDS = "g.SET_GREAT_LOCK";
  /** @type {string} */
  var REMOVE_DATA_SUCCESSFUL = "g.SET_GROUP_ID";
  /** @type {string} */
  var MOVE_POINTS = "g.SET_WAIT_CHAT";
  var config = {
    mega : false,
    token : null,
    token_scope : null,
    auto_cover : false,
    good : false,
    process : null,
    great_lock : false,
    images : [],
    load_images : false,
    chat : "",
    chat_url : "",
    show_chat_url : false,
    id : null,
    wait_chat : false,
    chat_ts : 0
  };
  /**
   * @return {?}
   */
  var next = function() {
    var results = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : config;
    var action = arguments[1];
    switch(action.type) {
      case presence.p:
        return Object.assign({}, results, action.update);
      case MOVE_CARDS:
        return Object.assign({}, results, {
          great_lock : action.lock
        });
      case GET_USER_PROFILE_SUCCESS:
        return Object.assign({}, results, {
          process : action.process
        });
      case GET_USER_PROFILE_FAILURE:
        return Object.assign({}, results, {
          images : action.images
        });
      case GET_FEED_FAILURE:
        return Object.assign({}, results, {
          load_images : action.load_images
        });
      case REMOVE_DATA_SUCCESSFUL:
        return Object.assign({}, results, {
          id : action.id
        });
      case MOVE_POINTS:
        return Object.assign({}, results, {
          wait_chat : action.value
        });
      default:
        return results;
    }
  };
  /** @type {function(): ?} */
  exports.b = next;
}, function(canCreateDiscussions, at, __webpack_require__) {
  /**
   * @param {!AudioNode} err
   * @param {!Function} message
   * @return {undefined}
   */
  function reject(err, message) {
    if (!(err instanceof message)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(21);
  /** @type {function(?): ?} */
  var atob = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__), "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(strip1) {
    return typeof strip1;
  } : function(obj) {
    return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  });
  var baseAssignValue = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var err = function() {
    /**
     * @return {undefined}
     */
    function result() {
      reject(this, result);
    }
    return baseAssignValue(result, null, [{
      key : "__call",
      value : function(name, data) {
        var method = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET";
        /** @type {string} */
        var url = "/api/" + name;
        var options = {
          method : method || "GET",
          cache : "no-cache",
          redirect : "error",
          headers : {
            "X-vk-sign" : result.vkSign
          }
        };
        return "GET" !== method.toString().toUpperCase() ? (data instanceof FormData || (options.headers["Content-Type"] = "application/json"), options.body = data instanceof FormData ? data : JSON.stringify(data)) : url = url + ("?" + result.stringify(data)), new Promise(function(e, next) {
          try {
            fetch(url, options).then(e).catch(next);
          } catch (disconnectError) {
            next(disconnectError);
          }
        });
      }
    }, {
      key : "request",
      value : function(name, args) {
        var id = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET";
        var steps = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20;
        return new Promise(function(complete, callback) {
          try {
            result.__call(name, args, id).then(function(resp) {
              var type = resp.headers.get("Content-Type");
              if (type && -1 !== type.indexOf("application/json")) {
                resp.json().then(function(xhr) {
                  if (void 0 !== xhr.response) {
                    complete(xhr.response);
                  } else {
                    callback(void 0 !== xhr.error && xhr.error && void 0 !== xhr.error.message ? xhr.error : xhr);
                  }
                });
              } else {
                if (!(steps > 0)) {
                  throw new Error(id + " " + name + " response " + resp.status + " Content-Type: " + type);
                }
                setTimeout(function() {
                  result.request(name, args, id, steps - 1).then(complete).catch(callback);
                }, 1E3 * Math.random());
              }
            }).catch(function(layerView) {
              if (layerView && "Failed to fetch" === layerView.message && steps > 0) {
                setTimeout(function() {
                  result.request(name, args, id, steps - 1).then(complete).catch(callback);
                }, 1E3 * Math.random());
              } else {
                callback(layerView);
              }
            });
          } catch (cached_wifi_network_list) {
            if (steps > 0) {
              setTimeout(function() {
                result.request(name, args, id, steps - 1).then(complete).catch(callback);
              }, 1E3 * Math.random());
            } else {
              callback(cached_wifi_network_list);
            }
          }
        });
      }
    }, {
      key : "stringify",
      value : function(name) {
        var esri = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        /** @type {!Array} */
        var attributes = [];
        var n;
        for (n in name) {
          (function(n) {
            if (name.hasOwnProperty(n)) {
              var a = name[n];
              if (void 0 === a) {
                return "continue";
              }
              if ("function" === typeof a.forEach) {
                a.forEach(function(withFldValue) {
                  return attributes.push({
                    k : (s ? s + "[" + n + "]" : n) + "[]",
                    v : withFldValue
                  });
                });
              } else {
                if ("object" === ("undefined" === typeof a ? "undefined" : atob(a))) {
                  var _ref_a = result.stringify(a, true, s ? s + "[" + n + "]" : n);
                  _ref_a.forEach(function(i) {
                    return attributes.push(i);
                  });
                } else {
                  attributes.push({
                    k : s ? s + "[" + n + "]" : n,
                    v : a
                  });
                }
              }
            }
          })(n);
        }
        return esri ? attributes : attributes.map(function(object) {
          return object.k + "=" + encodeURIComponent(object.v);
        }).join("&");
      }
    }]), result;
  }();
  /** @type {string} */
  err.vkSign = "";
  at.a = err;
}, function(canCreateDiscussions, exports, $) {
  /**
   * @param {string} template
   * @param {!Object} value
   * @param {number} name
   * @param {?} self
   * @return {?}
   */
  function init(template, value, name, self) {
    return function(put, a) {
      var m = a();
      var params = m.user;
      var data = m.group;
      var prop = new html.a(template, value, name, params.id, data.id, params.signature);
      if (self) {
        self.pushMyDot(template, value, Object(options.c)(name)[name].replace("#", ""));
        self.sendPixel(prop);
        if (!data.good) {
          put(update(params.default_ttl));
          events.GA.event("pixel-" + name, params.id, data.id);
        }
      }
    };
  }
  /**
   * @param {number} options
   * @return {?}
   */
  function notify(options) {
    return function(dispatch) {
      clearTimeout(_takingTooLongTimeout);
      if (options <= 0) {
        dispatch({
          type : h.s,
          can_draw : true
        });
        dispatch({
          type : h.t,
          ttl : 0
        });
      } else {
        dispatch({
          type : h.t,
          ttl : options
        });
        /** @type {number} */
        _takingTooLongTimeout = setTimeout(function() {
          dispatch(notify(options - 1));
        }, 1E3);
      }
    };
  }
  /**
   * @param {string} options
   * @return {?}
   */
  function update(options) {
    return function(dispatch, fn) {
      if (null === options) {
        var o = fn();
        var self = o.user;
        var ag = o.group;
        return false === self.can_draw || ag.good ? void 0 : void dispatch(update(self.default_ttl));
      }
      dispatch({
        type : h.s,
        can_draw : false
      });
      dispatch({
        type : h.t,
        ttl : options
      });
      clearTimeout(_takingTooLongTimeout);
      /** @type {number} */
      _takingTooLongTimeout = setTimeout(function() {
        dispatch(notify(options - 1));
      }, 1E3);
    };
  }
  /**
   * @param {string} name
   * @param {!Function} value
   * @return {?}
   */
  function value(name, value) {
    return function(callback) {
      if (name) {
        callback({
          type : h.j,
          image : name
        });
      }
      if (value) {
        value();
      }
    };
  }
  /**
   * @return {?}
   */
  function push() {
    return function(dispatch) {
      clonedI.a.request("v1/group", {}, "GET").then(function(config) {
        dispatch({
          type : h.g,
          token : "1"
        });
        req.a.callWithToken("photos.getOwnerCoverPhotoUploadServer", {
          v : " 5.62",
          access_token : config.token,
          group_id : config.id
        }).then(function(studentWork) {
          if (!studentWork.response) {
            dispatch({
              type : h.p,
              update : {
                token : null,
                token_scope : null
              }
            });
          }
        });
        dispatch({
          type : h.p,
          update : config
        });
        if (config.good) {
          dispatch(Object(self.a)());
        }
      }).catch(function(e) {
        Object(options.e)(e);
      });
    };
  }
  /**
   * @return {?}
   */
  function trace() {
    return Date.now() - j > 12E4;
  }
  /**
   * @return {undefined}
   */
  function error() {
    /** @type {number} */
    j = Date.now();
  }
  /**
   * @return {?}
   */
  function authenticate() {
    return function(dispatch, exec) {
      if (!trace()) {
        return alert("\u041d\u0435\u043b\u044c\u0437\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u043e\u0431\u043b\u043e\u0436\u043a\u0443 \u0447\u0430\u0449\u0435 \u0447\u0435\u043c 1 \u0440\u0430\u0437 \u0432 2 \u043c\u0438\u043d\u0443\u0442\u044b!");
      }
      var command = exec();
      var data = command.group;
      if (data.token && data.token_scope) {
        error();
        dispatch(add({
          upload_cover : true
        }));
      } else {
        req.a.requestToken(4, function(canCreateDiscussions, textClass) {
          error();
          dispatch(add({
            vk_token : textClass,
            vk_token_scope : canCreateDiscussions,
            upload_cover : true
          }));
          dispatch({
            type : h.p,
            update : {
              token : textClass,
              token_scope : canCreateDiscussions
            }
          });
        });
      }
    };
  }
  /**
   * @param {?} name
   * @return {?}
   */
  function compile(name) {
    return function(success, $animator) {
      if (N) {
        return false;
      }
      if (N = true, true === name) {
        var alarm = $animator();
        var data = alarm.group;
        if (data.token && data.token_scope) {
          success(add({
            auto_cover : true,
            upload_cover : trace()
          }, true));
          if (trace()) {
            error();
          }
        } else {
          req.a.requestToken(4).then(function(current) {
            var scope = current.scope;
            var tmp = current.token;
            success(add({
              auto_cover : true,
              vk_token : tmp,
              vk_token_scope : scope,
              upload_cover : trace()
            }, true));
            if (trace) {
              error();
            }
          });
        }
      }
      if (false === name) {
        success(add({
          auto_cover : false
        }, true));
      }
      success({
        type : h.p,
        update : {
          auto_cover : name
        }
      });
    };
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function setup(name) {
    return function(setup) {
      setup(add({
        show_chat_url : name
      }, true));
      setup({
        type : h.p,
        update : {
          show_chat_url : name
        }
      });
    };
  }
  /**
   * @return {?}
   */
  function remove() {
    return function(success) {
      success(Object(self.h)(true));
      insert(req.a.getStartParams().groupId).then(function(fieldNames) {
        req.a.api("messages.createChatForCoordination", {
          title : fieldNames + " \u2013 \u043f\u0438\u043a\u0441\u0435\u043b\u0438"
        }).then(function(data) {
          if (data) {
            var links = data.link;
            success(add({
              show_chat_url : true,
              chat_url : links
            }, true));
            success({
              type : h.p,
              update : {
                show_chat_url : true,
                chat_url : links
              }
            });
            success(Object(self.h)(false));
          } else {
            alert(JSON.stringify(data));
            success(Object(self.h)(false));
          }
        }).catch(alert);
      }).catch(function(bbls) {
        success(Object(self.h)(false));
        alert(bbls);
      });
    };
  }
  /**
   * @param {?} data
   * @return {?}
   */
  function add(data) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return function(mix) {
      if (!t) {
        mix({
          type : h.p,
          update : {
            wait : true
          }
        });
      }
      clonedI.a.request("v1/group", data, "POST").then(function(canCreateDiscussions) {
        /** @type {boolean} */
        N = false;
        mix({
          type : h.p,
          update : {
            wait : false
          }
        });
      }).catch(function(aBody) {
        Object(options.e)(aBody);
        /** @type {string} */
        var msg = "Unknown error";
        try {
          msg = aBody.error.message;
        } catch (e) {
        }
        alert("\u041d\u0435 \u0443\u0434\u0430\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043e\u0431\u043b\u043e\u0436\u043a\u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 " + msg);
        mix({
          type : h.p,
          update : {
            wait : false
          }
        });
        /** @type {boolean} */
        N = false;
      });
    };
  }
  /**
   * @param {string} e
   * @param {number} t
   * @param {!Object} val
   * @param {string} action
   * @param {!Object} file
   * @param {number} format
   * @param {string} dateType
   * @param {string} useLangNumbers
   * @return {?}
   */
  function print(e, t, val, action, file, format, dateType, useLangNumbers) {
    return function(dispatch) {
      dispatch({
        type : h.a,
        data : {
          x : e,
          y : t,
          name : action,
          photo : file,
          sex : format,
          id : val,
          groupName : dateType,
          groupUrl : useLangNumbers
        }
      });
      clearTimeout(paintNodesTimeout);
      /** @type {number} */
      paintNodesTimeout = setTimeout(function() {
        dispatch({
          type : h.a,
          data : null
        });
      }, 6E3);
    };
  }
  /**
   * @param {string} name
   * @param {!Function} value
   * @param {!Object} key
   * @param {string} url
   * @return {?}
   */
  function apply(name, value, key, url) {
    return function(dispatch) {
      if (key && key !== req.a.getStartParams().viewerId) {
        set(key).then(function(user) {
          getData(url).then(function(r) {
            /** @type {string} */
            var y = user.first_name + " " + user.last_name;
            dispatch(print(name, value, key, y, user.photo_100, user.sex, r.name, "https://vk.com/" + r.screen_name));
          }).catch(function(e) {
            return Object(options.e)(e);
          });
        }).catch(function(e) {
          return Object(options.e)(e);
        });
      }
    };
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function loadFile(name) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return new Promise(function(callback, errback) {
      /** @type {!Image} */
      var sclimage = new Image;
      /**
       * @return {?}
       */
      sclimage.onload = function() {
        return callback(sclimage);
      };
      /**
       * @param {?} e
       * @return {undefined}
       */
      sclimage.onerror = function(e) {
        if (t) {
          errback(e);
        } else {
          setTimeout(function() {
            loadFile(name, true).then(callback).catch(errback);
          }, 1E3 * Math.random() + 1E3);
        }
      };
      /** @type {string} */
      sclimage.src = name;
    });
  }
  /**
   * @param {string} i
   * @return {?}
   */
  function insert(i) {
    var depth = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return new Promise(function(n, next) {
      req.a.api("groups.getById", {
        group_id : i,
        v : "5.68"
      }).then(function(data) {
        if (data && data.length) {
          var propertyA = data.pop();
          var a = propertyA.name;
          n(a);
        } else {
          if (depth < 2) {
            setTimeout(function() {
              insert(i, depth + 1).then(n).catch(next);
            }, 1E3);
          } else {
            next(JSON.stringify(data));
          }
        }
      }).catch(next);
    });
  }
  /**
   * @param {string} id
   * @return {?}
   */
  function set(id) {
    return new Promise(function(parseInt, next) {
      if (parsedTransaction[id]) {
        setTimeout(function() {
          return parseInt(parsedTransaction[id]);
        }, 1);
      } else {
        req.a.api("users.get", {
          user_ids : id,
          fields : "photo_100,sex",
          v : "5.62"
        }).then(function(a) {
          if (a && a.length) {
            parsedTransaction[id] = a.pop();
            parseInt(parsedTransaction[id]);
          } else {
            next(JSON.stringify(a));
          }
        }).catch(next);
      }
    });
  }
  /**
   * @param {string} url
   * @return {?}
   */
  function getData(url) {
    return new Promise(function(expect, next) {
      if (sizes[url]) {
        setTimeout(function() {
          return expect(sizes[url]);
        }, 1);
      } else {
        req.a.api("groups.getById", {
          group_id : url,
          v : "5.68"
        }).then(function(a) {
          if (a && a.length) {
            sizes[url] = a.pop();
            expect(sizes[url]);
          } else {
            next(JSON.stringify(a));
          }
        }).catch(next);
      }
    });
  }
  /** @type {function(string, !Object, number, ?): ?} */
  exports.f = init;
  /** @type {function(string): ?} */
  exports.e = update;
  /** @type {function(string, !Function): ?} */
  exports.g = value;
  /** @type {function(): ?} */
  exports.c = push;
  /** @type {function(): ?} */
  exports.i = authenticate;
  /** @type {function(?): ?} */
  exports.h = compile;
  /** @type {function(string): ?} */
  exports.j = setup;
  /** @type {function(): ?} */
  exports.b = remove;
  /** @type {function(string, !Function, !Object, string): ?} */
  exports.a = apply;
  /** @type {function(string): ?} */
  exports.d = loadFile;
  var clonedI = $(12);
  var h = $(4);
  var events = $(18);
  var options = ($.n(events), $(1));
  var self = $(11);
  var args = $(6);
  var req = $.n(args);
  var html = $(125);
  /** @type {null} */
  var _takingTooLongTimeout = null;
  /** @type {number} */
  var j = 0;
  /** @type {boolean} */
  var N = false;
  /** @type {null} */
  var paintNodesTimeout = null;
  var parsedTransaction = {};
  var sizes = {};
}, function(module, canCreateDiscussions) {
  var g;
  g = function() {
    return this;
  }();
  try {
    g = g || Function("return this")() || (0, eval)("this");
  } catch (e) {
    if ("object" === typeof window) {
      /** @type {!Window} */
      g = window;
    }
  }
  module.exports = g;
}, function(canCreateDiscussions, at, n) {
  /**
   * @param {string} name
   * @return {undefined}
   */
  function err(name) {
    if ("undefined" !== typeof console && "function" === typeof console.error) {
      console.error(name);
    }
    try {
      throw new Error(name);
    } catch (e) {
    }
  }
  /** @type {function(string): undefined} */
  at.a = err;
}, function(canCreateDiscussions, value, n) {
  var h = n(25);
  var p = n(77);
  var o = n(78);
  var s = n(79);
  var m = n(28);
  n(27);
  n.d(value, "e", function() {
    return h.b;
  });
  n.d(value, "c", function() {
    return p.a;
  });
  n.d(value, "b", function() {
    return o.a;
  });
  n.d(value, "a", function() {
    return s.a;
  });
  n.d(value, "d", function() {
    return m.a;
  });
}, function(canCreateDiscussions, encoded, $) {
  /**
   * @param {string} name
   * @return {?}
   */
  function value(name) {
    if (!Object(self.a)(name) || Object(e.a)(name) != partname) {
      return false;
    }
    var proto = Object(schema.a)(name);
    if (null === proto) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var e = $(66);
  var schema = $(71);
  var self = $(73);
  /** @type {string} */
  var partname = "[object Object]";
  var funcProto = Function.prototype;
  var ObjProto = Object.prototype;
  /** @type {function(this:!Function): string} */
  var funcToString = funcProto.toString;
  /** @type {function(this:Object, *): boolean} */
  var hasOwnProperty = ObjProto.hasOwnProperty;
  /** @type {string} */
  var objectCtorString = funcToString.call(Object);
  /** @type {function(string): ?} */
  encoded.a = value;
}, function(canCreateDiscussions, exports, require) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  exports.DefaultEnvironmentManager = exports.ImageSender = exports.GoogleAnalytics = exports.Builder = exports.GA = void 0;
  var _aliapp = require(94);
  var _aliapp2 = _interopRequireDefault(_aliapp);
  var _browser = require(32);
  var _browser2 = _interopRequireDefault(_browser);
  var _thirdapp = require(33);
  var _thirdapp2 = _interopRequireDefault(_thirdapp);
  var _params = require(34);
  var _params2 = _interopRequireDefault(_params);
  var _deepAssign = require(35);
  var _deepAssign2 = _interopRequireDefault(_deepAssign);
  exports.GA = _aliapp2.default;
  exports.Builder = _browser2.default;
  exports.GoogleAnalytics = _thirdapp2.default;
  exports.ImageSender = _params2.default;
  exports.DefaultEnvironmentManager = _deepAssign2.default;
}, function(canCreateDiscussions, exports, n) {
  /**
   * @return {?}
   */
  function Tetromino() {
    return {
      translation : {
        hour_0 : "\u0447\u0430\u0441",
        hour_1 : "\u0447\u0430\u0441\u0430",
        hour_2 : "\u0447\u0430\u0441\u043e\u0432",
        minutes_0 : "\u043c\u0438\u043d\u0443\u0442\u0430",
        minutes_1 : "\u043c\u0438\u043d\u0443\u0442\u044b",
        minutes_2 : "\u043c\u0438\u043d\u0443\u0442",
        time_to_end : "\u0414\u043e \u043a\u043e\u043d\u0446\u0430 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c:",
        attention : "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",
        download_canvas : "\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0445\u043e\u043b\u0441\u0442",
        add_to_community : "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e",
        install_game_in_community : "\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u00abPixel Battle\u00bb \u0432 \u0441\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e",
        thanks_for_game : "\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u043c \u0437\u0430 \u0443\u0447\u0430\u0441\u0442\u0438\u0435!",
        game_over : "Pixel Battle \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0441\u044f.",
        zoom : "\u041c\u0430\u0441\u0448\u0442\u0430\u0431",
        dot : "\u0422\u043e\u0447\u043a\u0430",
        online : "\u041e\u043d\u043b\u0430\u0439\u043d",
        draw_you_dot_male : "\u0437\u0430\u043a\u0440\u0430\u0441\u0438\u043b \u0432\u0430\u0448\u0443 \u0442\u043e\u0447\u043a\u0443",
        draw_you_dot_female : "\u0437\u0430\u043a\u0440\u0430\u0441\u0438\u043b\u0430 \u0432\u0430\u0448\u0443 \u0442\u043e\u0447\u043a\u0443",
        from_group : "\u0438\u0437 \u0433\u0440\u0443\u043f\u043f\u044b",
        unlock : "\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
        cover_updating_locked : "\u0410\u0432\u0442\u043e\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u043b\u043e\u0436\u0435\u043a \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043e",
        cover_updating_percent : " \u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u043b\u043e\u0436\u0435\u043a {{percent}}%",
        you_admin : "\u0412\u044b \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440, \u0443 \u0432\u0430\u0441 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u0438",
        rollback_covers : "\u041e\u0442\u043a\u0430\u0442\u0438\u0442\u044c \u043e\u0431\u043b\u043e\u0436\u043a\u0438",
        select_cover_help : "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0431\u043b\u043e\u0436\u043a\u0443 \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0430\u0434\u043e \u0432\u0441\u0435 \u043e\u0442\u043a\u0430\u0442\u0438\u0442\u044c, \u043a\u043b\u0438\u043a\u043d\u0438 \u043f\u043e \u043e\u0431\u043b\u043e\u0436\u0436\u043a\u0435 \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c",
        wait_with_dots : "\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...",
        rollback : "\u041e\u0442\u043a\u0430\u0442\u0438\u0442\u044c",
        reconnecting : "\u041f\u0435\u0440\u0435\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435...",
        wait_for : "\u0416\u0434\u0435\u043c \u0435\u0449\u0435 {{m}}:{{s}}",
        cancel : "\u041e\u0442\u043c\u0435\u043d\u0430",
        put_point : "\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0447\u043a\u0443",
        continue : "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",
        pixel_battle : "PIXEL BATTLE",
        description : "\u041c\u044b \u043f\u0440\u0430\u0437\u0434\u043d\u0443\u0435\u043c \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u2014 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 12 \u043b\u0435\u0442. \u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u044b \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043f\u043e\u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0430. \n\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u044f\u0441\u044c \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c \u0438 \u0441\u0440\u0430\u0436\u0430\u044f\u0441\u044c \u0437\u0430 \u043f\u0438\u043a\u0441\u0435\u043b\u0438, \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 \u0441\u0442\u0430\u043d\u0443\u0442 \u0430\u0432\u0442\u043e\u0440\u0430\u043c\u0438 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0433\u043e \u0430\u0440\u0442\u0435\u0444\u0430\u043a\u0442\u0430 \u044d\u043f\u043e\u0445\u0438."
      }
    };
  }
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  /** @type {function(): ?} */
  exports.default = Tetromino;
}, function(module, canCreateDiscussions, rangeFinder) {
  /**
   * @return {undefined}
   */
  function noop() {
  }
  /**
   * @param {!Object} promise
   * @return {?}
   */
  function getThen(promise) {
    try {
      return promise.then;
    } catch (e) {
      return r = e, t;
    }
  }
  /**
   * @param {?} callback
   * @param {?} win
   * @return {?}
   */
  function prompt(callback, win) {
    try {
      return callback(win);
    } catch (e) {
      return r = e, t;
    }
  }
  /**
   * @param {!Function} callback
   * @param {!Function} id
   * @param {!Function} el
   * @return {?}
   */
  function remove(callback, id, el) {
    try {
      callback(id, el);
    } catch (e) {
      return r = e, t;
    }
  }
  /**
   * @param {!Function} name
   * @return {undefined}
   */
  function Promise(name) {
    if ("object" !== typeof this) {
      throw new TypeError("Promises must be constructed via new");
    }
    if ("function" !== typeof name) {
      throw new TypeError("Promise constructor's argument is not a function");
    }
    /** @type {number} */
    this._75 = 0;
    /** @type {number} */
    this._83 = 0;
    /** @type {null} */
    this._18 = null;
    /** @type {null} */
    this._38 = null;
    if (name !== noop) {
      fn(name, this);
    }
  }
  /**
   * @param {string} that
   * @param {!Function} value
   * @param {!Function} onRejected
   * @return {?}
   */
  function then(that, value, onRejected) {
    return new that.constructor(function(o, fallback) {
      var res = new Promise(noop);
      res.then(o, fallback);
      handle(that, new Handler(value, onRejected, res));
    });
  }
  /**
   * @param {string} value
   * @param {string} result
   * @return {?}
   */
  function handle(value, result) {
    for (; 3 === value._83;) {
      value = value._18;
    }
    if (Promise._47 && Promise._47(value), 0 === value._83) {
      return 0 === value._75 ? (value._75 = 1, void(value._38 = result)) : 1 === value._75 ? (value._75 = 2, void(value._38 = [value._38, result])) : void value._38.push(result);
    }
    next(value, result);
  }
  /**
   * @param {string} self
   * @param {?} deferred
   * @return {undefined}
   */
  function next(self, deferred) {
    end(function() {
      var title = 1 === self._83 ? deferred.onFulfilled : deferred.onRejected;
      if (null === title) {
        return void(1 === self._83 ? resolve(deferred.promise, self._18) : reject(deferred.promise, self._18));
      }
      var result = prompt(title, self._18);
      if (result === t) {
        reject(deferred.promise, r);
      } else {
        resolve(deferred.promise, result);
      }
    });
  }
  /**
   * @param {!Object} self
   * @param {!Object} value
   * @return {?}
   */
  function resolve(self, value) {
    if (value === self) {
      return reject(self, new TypeError("A promise cannot be resolved with itself."));
    }
    if (value && ("object" === typeof value || "function" === typeof value)) {
      var then = getThen(value);
      if (then === t) {
        return reject(self, r);
      }
      if (then === self.then && value instanceof Promise) {
        return self._83 = 3, self._18 = value, void cb(self);
      }
      if ("function" === typeof then) {
        return void fn(then.bind(value), self);
      }
    }
    /** @type {number} */
    self._83 = 1;
    /** @type {!Object} */
    self._18 = value;
    cb(self);
  }
  /**
   * @param {!Object} result
   * @param {?} err
   * @return {undefined}
   */
  function reject(result, err) {
    /** @type {number} */
    result._83 = 2;
    result._18 = err;
    if (Promise._71) {
      Promise._71(result, err);
    }
    cb(result);
  }
  /**
   * @param {!Function} context
   * @return {undefined}
   */
  function cb(context) {
    if (1 === context._75 && (handle(context, context._38), context._38 = null), 2 === context._75) {
      /** @type {number} */
      var i = 0;
      for (; i < context._38.length; i++) {
        handle(context, context._38[i]);
      }
      /** @type {null} */
      context._38 = null;
    }
  }
  /**
   * @param {!Function} callback
   * @param {!Function} parser
   * @param {!Function} p
   * @return {undefined}
   */
  function Handler(callback, parser, p) {
    /** @type {(!Function|null)} */
    this.onFulfilled = "function" === typeof callback ? callback : null;
    /** @type {(!Function|null)} */
    this.onRejected = "function" === typeof parser ? parser : null;
    /** @type {!Function} */
    this.promise = p;
  }
  /**
   * @param {!Function} prop
   * @param {!Object} arg
   * @return {undefined}
   */
  function fn(prop, arg) {
    /** @type {boolean} */
    var computedAttr = false;
    var current = remove(prop, function(link) {
      if (!computedAttr) {
        /** @type {boolean} */
        computedAttr = true;
        resolve(arg, link);
      }
    }, function(val) {
      if (!computedAttr) {
        /** @type {boolean} */
        computedAttr = true;
        reject(arg, val);
      }
    });
    if (!(computedAttr || current !== t)) {
      /** @type {boolean} */
      computedAttr = true;
      reject(arg, r);
    }
  }
  var end = rangeFinder(53);
  /** @type {null} */
  var r = null;
  var t = {};
  /** @type {function(!Function): undefined} */
  module.exports = Promise;
  /** @type {null} */
  Promise._47 = null;
  /** @type {null} */
  Promise._71 = null;
  /** @type {function(): undefined} */
  Promise._44 = noop;
  /**
   * @param {!Function} value
   * @param {!Function} onRejected
   * @return {?}
   */
  Promise.prototype.then = function(value, onRejected) {
    if (this.constructor !== Promise) {
      return then(this, value, onRejected);
    }
    var prom = new Promise(noop);
    return handle(this, new Handler(value, onRejected, prom)), prom;
  };
}, function(canCreateDiscussions, isSlidingUp) {
  !function(self) {
    /**
     * @param {string} name
     * @return {?}
     */
    function normalizeName(name) {
      if ("string" !== typeof name && (name = String(name)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError("Invalid character in header field name");
      }
      return name.toLowerCase();
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function normalizeValue(value) {
      return "string" !== typeof value && (value = String(value)), value;
    }
    /**
     * @param {!Array} items
     * @return {?}
     */
    function each(items) {
      var iterable = {
        next : function() {
          var _eof = items.shift();
          return {
            done : void 0 === _eof,
            value : _eof
          };
        }
      };
      return support.iterable && (iterable[Symbol.iterator] = function() {
        return iterable;
      }), iterable;
    }
    /**
     * @param {!Object} headers
     * @return {undefined}
     */
    function Headers(headers) {
      this.map = {};
      if (headers instanceof Headers) {
        headers.forEach(function(value, s) {
          this.append(s, value);
        }, this);
      } else {
        if (Array.isArray(headers)) {
          headers.forEach(function(header) {
            this.append(header[0], header[1]);
          }, this);
        } else {
          if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
      }
    }
    /**
     * @param {?} body
     * @return {?}
     */
    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError("Already read"));
      }
      /** @type {boolean} */
      body.bodyUsed = true;
    }
    /**
     * @param {!Object} reader
     * @return {?}
     */
    function fileReaderReady(reader) {
      return new Promise(function(cb, callback) {
        /**
         * @return {undefined}
         */
        reader.onload = function() {
          cb(reader.result);
        };
        /**
         * @return {undefined}
         */
        reader.onerror = function() {
          callback(reader.error);
        };
      });
    }
    /**
     * @param {?} blob
     * @return {?}
     */
    function done(blob) {
      /** @type {!FileReader} */
      var reader = new FileReader;
      var promise = fileReaderReady(reader);
      return reader.readAsArrayBuffer(blob), promise;
    }
    /**
     * @param {?} blob
     * @return {?}
     */
    function readBlobAsText(blob) {
      /** @type {!FileReader} */
      var reader = new FileReader;
      var promise = fileReaderReady(reader);
      return reader.readAsText(blob), promise;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    function readArrayBufferAsText(data) {
      /** @type {!Uint8Array} */
      var buf = new Uint8Array(data);
      /** @type {!Array} */
      var n = new Array(buf.length);
      /** @type {number} */
      var i = 0;
      for (; i < buf.length; i++) {
        /** @type {string} */
        n[i] = String.fromCharCode(buf[i]);
      }
      return n.join("");
    }
    /**
     * @param {!Object} buffer
     * @return {?}
     */
    function bufferClone(buffer) {
      if (buffer.slice) {
        return buffer.slice(0);
      }
      /** @type {!Uint8Array} */
      var tmp = new Uint8Array(buffer.byteLength);
      return tmp.set(new Uint8Array(buffer)), tmp.buffer;
    }
    /**
     * @return {?}
     */
    function Body() {
      return this.bodyUsed = false, this._initBody = function(body) {
        if (this._bodyInit = body, body) {
          if ("string" === typeof body) {
            /** @type {string} */
            this._bodyText = body;
          } else {
            if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              /** @type {string} */
              this._bodyBlob = body;
            } else {
              if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                /** @type {string} */
                this._bodyFormData = body;
              } else {
                if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                  this._bodyText = body.toString();
                } else {
                  if (support.arrayBuffer && support.blob && isDataView(body)) {
                    this._bodyArrayBuffer = bufferClone(body.buffer);
                    /** @type {!Blob} */
                    this._bodyInit = new Blob([this._bodyArrayBuffer]);
                  } else {
                    if (!support.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(body) && !isArrayBufferView(body)) {
                      throw new Error("unsupported BodyInit type");
                    }
                    this._bodyArrayBuffer = bufferClone(body);
                  }
                }
              }
            }
          }
        } else {
          /** @type {string} */
          this._bodyText = "";
        }
        if (!this.headers.get("content-type")) {
          if ("string" === typeof body) {
            this.headers.set("content-type", "text/plain;charset=UTF-8");
          } else {
            if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            } else {
              if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          }
        }
      }, support.blob && (this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }
        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        }
        if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        }
        if (this._bodyFormData) {
          throw new Error("could not read FormData body as blob");
        }
        return Promise.resolve(new Blob([this._bodyText]));
      }, this.arrayBuffer = function() {
        return this._bodyArrayBuffer ? consumed(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(done);
      }), this.text = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }
        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob);
        }
        if (this._bodyArrayBuffer) {
          return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        }
        if (this._bodyFormData) {
          throw new Error("could not read FormData body as text");
        }
        return Promise.resolve(this._bodyText);
      }, support.formData && (this.formData = function() {
        return this.text().then(text2formData);
      }), this.json = function() {
        return this.text().then(JSON.parse);
      }, this;
    }
    /**
     * @param {string} method
     * @return {?}
     */
    function normalizeMethod(method) {
      var looseWord = method.toUpperCase();
      return methods.indexOf(looseWord) > -1 ? looseWord : method;
    }
    /**
     * @param {!Object} input
     * @param {!Object} options
     * @return {undefined}
     */
    function Request(input, options) {
      options = options || {};
      var body = options.body;
      if (input instanceof Request) {
        if (input.bodyUsed) {
          throw new TypeError("Already read");
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        if (!(body || null == input._bodyInit)) {
          body = input._bodyInit;
          /** @type {boolean} */
          input.bodyUsed = true;
        }
      } else {
        /** @type {string} */
        this.url = String(input);
      }
      if (this.credentials = options.credentials || this.credentials || "omit", !options.headers && this.headers || (this.headers = new Headers(options.headers)), this.method = normalizeMethod(options.method || this.method || "GET"), this.mode = options.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && body) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
      }
      this._initBody(body);
    }
    /**
     * @param {!Object} body
     * @return {?}
     */
    function text2formData(body) {
      /** @type {!FormData} */
      var form = new FormData;
      return body.trim().split("&").forEach(function(clusterShardData) {
        if (clusterShardData) {
          var headersAndBody = clusterShardData.split("=");
          var url = headersAndBody.shift().replace(/\+/g, " ");
          var filePath = headersAndBody.join("=").replace(/\+/g, " ");
          form.append(decodeURIComponent(url), decodeURIComponent(filePath));
        }
      }), form;
    }
    /**
     * @param {string} dates
     * @return {?}
     */
    function headers(dates) {
      var headers = new Headers;
      return dates.split(/\r?\n/).forEach(function(clusterShardData) {
        var headersAndBody = clusterShardData.split(":");
        var key = headersAndBody.shift().trim();
        if (key) {
          var value = headersAndBody.join(":").trim();
          headers.append(key, value);
        }
      }), headers;
    }
    /**
     * @param {string} bodyInit
     * @param {!Object} options
     * @return {undefined}
     */
    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }
      /** @type {string} */
      this.type = "default";
      this.status = "status" in options ? options.status : 200;
      /** @type {boolean} */
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = "statusText" in options ? options.statusText : "OK";
      this.headers = new Headers(options.headers);
      this.url = options.url || "";
      this._initBody(bodyInit);
    }
    if (!self.fetch) {
      var support = {
        searchParams : "URLSearchParams" in self,
        iterable : "Symbol" in self && "iterator" in Symbol,
        blob : "FileReader" in self && "Blob" in self && function() {
          try {
            return new Blob, true;
          } catch (e) {
            return false;
          }
        }(),
        formData : "FormData" in self,
        arrayBuffer : "ArrayBuffer" in self
      };
      if (support.arrayBuffer) {
        /** @type {!Array} */
        var orderedPaneIds = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"];
        /**
         * @param {string} obj
         * @return {?}
         */
        var isDataView = function(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        };
        /** @type {function(*): boolean} */
        var isArrayBufferView = ArrayBuffer.isView || function(id) {
          return id && orderedPaneIds.indexOf(Object.prototype.toString.call(id)) > -1;
        };
      }
      /**
       * @param {string} name
       * @param {string} value
       * @return {undefined}
       */
      Headers.prototype.append = function(name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + "," + value : value;
      };
      /**
       * @param {string} name
       * @return {undefined}
       */
      Headers.prototype.delete = function(name) {
        delete this.map[normalizeName(name)];
      };
      /**
       * @param {!Object} name
       * @return {?}
       */
      Headers.prototype.get = function(name) {
        return name = normalizeName(name), this.has(name) ? this.map[name] : null;
      };
      /**
       * @param {boolean} name
       * @return {?}
       */
      Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };
      /**
       * @param {!Object} name
       * @param {string} value
       * @return {undefined}
       */
      Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };
      /**
       * @param {!Function} callback
       * @param {!Function} bind
       * @return {undefined}
       */
      Headers.prototype.forEach = function(callback, bind) {
        var i;
        for (i in this.map) {
          if (this.map.hasOwnProperty(i)) {
            callback.call(bind, this.map[i], i, this);
          }
        }
      };
      /**
       * @return {?}
       */
      Headers.prototype.keys = function() {
        /** @type {!Array} */
        var items = [];
        return this.forEach(function(canCreateDiscussions, sSeparator) {
          items.push(sSeparator);
        }), each(items);
      };
      /**
       * @return {?}
       */
      Headers.prototype.values = function() {
        /** @type {!Array} */
        var items = [];
        return this.forEach(function(sSeparator) {
          items.push(sSeparator);
        }), each(items);
      };
      /**
       * @return {?}
       */
      Headers.prototype.entries = function() {
        /** @type {!Array} */
        var items = [];
        return this.forEach(function(name, i) {
          items.push([i, name]);
        }), each(items);
      };
      if (support.iterable) {
        /** @type {function(): ?} */
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      /** @type {!Array} */
      var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      /**
       * @return {?}
       */
      Request.prototype.clone = function() {
        return new Request(this, {
          body : this._bodyInit
        });
      };
      Body.call(Request.prototype);
      Body.call(Response.prototype);
      /**
       * @return {?}
       */
      Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
          status : this.status,
          statusText : this.statusText,
          headers : new Headers(this.headers),
          url : this.url
        });
      };
      /**
       * @return {?}
       */
      Response.error = function() {
        var response = new Response(null, {
          status : 0,
          statusText : ""
        });
        return response.type = "error", response;
      };
      /** @type {!Array} */
      var NOT_VISIBLE_TRIGGER_TYPES = [301, 302, 303, 307, 308];
      /**
       * @param {string} name
       * @param {string} type
       * @return {?}
       */
      Response.redirect = function(name, type) {
        if (-1 === NOT_VISIBLE_TRIGGER_TYPES.indexOf(type)) {
          throw new RangeError("Invalid status code");
        }
        return new Response(null, {
          status : type,
          headers : {
            location : name
          }
        });
      };
      /** @type {function(!Object): undefined} */
      self.Headers = Headers;
      /** @type {function(!Object, !Object): undefined} */
      self.Request = Request;
      /** @type {function(string, !Object): undefined} */
      self.Response = Response;
      /**
       * @param {?} method
       * @param {boolean} url
       * @return {?}
       */
      self.fetch = function(method, url) {
        return new Promise(function(resolve, reject) {
          var request = new Request(method, url);
          /** @type {!XMLHttpRequest} */
          var xhr = new XMLHttpRequest;
          /**
           * @return {undefined}
           */
          xhr.onload = function() {
            var options = {
              status : xhr.status,
              statusText : xhr.statusText,
              headers : headers(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            /** @type {(Object|null|string)} */
            var tres = "response" in xhr ? xhr.response : xhr.responseText;
            resolve(new Response(tres, options));
          };
          /**
           * @return {undefined}
           */
          xhr.onerror = function() {
            reject(new TypeError("Network request failed"));
          };
          /**
           * @return {undefined}
           */
          xhr.ontimeout = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.open(request.method, request.url, true);
          if ("include" === request.credentials) {
            /** @type {boolean} */
            xhr.withCredentials = true;
          }
          if ("responseType" in xhr && support.blob) {
            /** @type {string} */
            xhr.responseType = "blob";
          }
          request.headers.forEach(function(type, i) {
            xhr.setRequestHeader(i, type);
          });
          xhr.send("undefined" === typeof request._bodyInit ? null : request._bodyInit);
        });
      };
      /** @type {boolean} */
      self.fetch.polyfill = true;
    }
  }("undefined" !== typeof self ? self : this);
}, function(mixin, canCreateDiscussions, saveNotifs) {
  mixin.exports = saveNotifs(58)();
}, function(canCreateDiscussions, value, n) {
  n.d(value, "b", function() {
    return i;
  });
  n.d(value, "a", function() {
    return a;
  });
  var m = n(22);
  var e = n.n(m);
  var i = e.a.shape({
    trySubscribe : e.a.func.isRequired,
    tryUnsubscribe : e.a.func.isRequired,
    notifyNestedSubs : e.a.func.isRequired,
    isSubscribed : e.a.func.isRequired
  });
  var a = e.a.shape({
    subscribe : e.a.func.isRequired,
    dispatch : e.a.func.isRequired,
    getState : e.a.func.isRequired
  });
}, function(canCreateDiscussions, exports, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} call
   * @param {string} value
   * @return {?}
   */
  function _possibleConstructorReturn(call, value) {
    if (!call) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" !== typeof value && "function" !== typeof value ? call : value;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!Object} obj
   * @param {!Array} keys
   * @return {?}
   */
  function _objectWithoutProperties(obj, keys) {
    var target = {};
    var key;
    for (key in obj) {
      if (!(keys.indexOf(key) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          target[key] = obj[key];
        }
      }
    }
    return target;
  }
  /**
   * @return {undefined}
   */
  function noop() {
  }
  /**
   * @param {?} sourceSelector
   * @param {!Object} store
   * @return {?}
   */
  function makeSelectorStateful(sourceSelector, store) {
    var selector = {
      run : function(name) {
        try {
          var nextProps = sourceSelector(store.getState(), name);
          if (nextProps !== selector.props || selector.error) {
            /** @type {boolean} */
            selector.shouldComponentUpdate = true;
            selector.props = nextProps;
            /** @type {null} */
            selector.error = null;
          }
        } catch (error) {
          /** @type {boolean} */
          selector.shouldComponentUpdate = true;
          selector.error = error;
        }
      }
    };
    return selector;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function connectAdvanced(name) {
    var _contextTypes;
    var _childContextTypes;
    var _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var _ref$getDisplayName = _ref.getDisplayName;
    var getDisplayName = void 0 === _ref$getDisplayName ? function(name) {
      return "ConnectAdvanced(" + name + ")";
    } : _ref$getDisplayName;
    var method = _ref.methodName;
    var methodName = void 0 === method ? "connectAdvanced" : method;
    var _ref$renderCountProp = _ref.renderCountProp;
    var renderCountProp = void 0 === _ref$renderCountProp ? void 0 : _ref$renderCountProp;
    var _ = _ref.shouldHandleStateChanges;
    var resContentLength = void 0 === _ || _;
    var _ref$storeKey = _ref.storeKey;
    var storeKey = void 0 === _ref$storeKey ? "store" : _ref$storeKey;
    var _ref$withRef = _ref.withRef;
    var withRef = void 0 !== _ref$withRef && _ref$withRef;
    var state = _objectWithoutProperties(_ref, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);
    /** @type {string} */
    var subscriptionKey = storeKey + "Subscription";
    /** @type {number} */
    var version = hotReloadingVersion++;
    var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.a, _contextTypes[subscriptionKey] = _PropTypes.b, _contextTypes);
    var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.b, _childContextTypes);
    return function(WrappedComponent) {
      invariant()("function" == typeof WrappedComponent, "You must pass a component to the function returned by " + methodName + ". Instead received " + JSON.stringify(WrappedComponent));
      var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
      var displayName = getDisplayName(wrappedComponentName);
      /** @type {!Object} */
      var selectorFactoryOptions = _extends({}, state, {
        getDisplayName : getDisplayName,
        methodName : methodName,
        renderCountProp : renderCountProp,
        shouldHandleStateChanges : resContentLength,
        storeKey : storeKey,
        withRef : withRef,
        displayName : displayName,
        wrappedComponentName : wrappedComponentName,
        WrappedComponent : WrappedComponent
      });
      var Connect = function(_Component) {
        /**
         * @param {?} props
         * @param {?} context
         * @return {?}
         */
        function Connect(props, context) {
          _classCallCheck(this, Connect);
          var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
          return _this.version = version, _this.state = {}, _this.renderCount = 0, _this.store = props[storeKey] || context[storeKey], _this.propsMode = Boolean(props[storeKey]), _this.setWrappedInstance = _this.setWrappedInstance.bind(_this), invariant()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of "' + displayName + '". Either wrap the root component in a <Provider>, or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'), _this.initSelector(),
            _this.initSubscription(), _this;
        }
        return _inherits(Connect, _Component), Connect.prototype.getChildContext = function() {
          var _ref2;
          var subscription = this.propsMode ? null : this.subscription;
          return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
        }, Connect.prototype.componentDidMount = function() {
          if (resContentLength) {
            this.subscription.trySubscribe();
            this.selector.run(this.props);
            if (this.selector.shouldComponentUpdate) {
              this.forceUpdate();
            }
          }
        }, Connect.prototype.componentWillReceiveProps = function(value) {
          this.selector.run(value);
        }, Connect.prototype.shouldComponentUpdate = function() {
          return this.selector.shouldComponentUpdate;
        }, Connect.prototype.componentWillUnmount = function() {
          if (this.subscription) {
            this.subscription.tryUnsubscribe();
          }
          /** @type {null} */
          this.subscription = null;
          /** @type {function(): undefined} */
          this.notifyNestedSubs = noop;
          /** @type {null} */
          this.store = null;
          /** @type {function(): undefined} */
          this.selector.run = noop;
          /** @type {boolean} */
          this.selector.shouldComponentUpdate = false;
        }, Connect.prototype.getWrappedInstance = function() {
          return invariant()(withRef, "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " + methodName + "() call."), this.wrappedInstance;
        }, Connect.prototype.setWrappedInstance = function(name) {
          /** @type {string} */
          this.wrappedInstance = name;
        }, Connect.prototype.initSelector = function() {
          var sourceSelector = name(this.store.dispatch, selectorFactoryOptions);
          this.selector = makeSelectorStateful(sourceSelector, this.store);
          this.selector.run(this.props);
        }, Connect.prototype.initSubscription = function() {
          if (resContentLength) {
            var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
            this.subscription = new _Subscription2.a(this.store, parentSub, this.onStateChange.bind(this));
            this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
          }
        }, Connect.prototype.onStateChange = function() {
          this.selector.run(this.props);
          if (this.selector.shouldComponentUpdate) {
            this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
            this.setState(stateChange);
          } else {
            this.notifyNestedSubs();
          }
        }, Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
          this.componentDidUpdate = void 0;
          this.notifyNestedSubs();
        }, Connect.prototype.isSubscribed = function() {
          return Boolean(this.subscription) && this.subscription.isSubscribed();
        }, Connect.prototype.addExtraProps = function(props) {
          if (!withRef && !renderCountProp && (!this.propsMode || !this.subscription)) {
            return props;
          }
          /** @type {!Object} */
          var withExtras = _extends({}, props);
          return withRef && (withExtras.ref = this.setWrappedInstance), renderCountProp && (withExtras[renderCountProp] = this.renderCount++), this.propsMode && this.subscription && (withExtras[subscriptionKey] = this.subscription), withExtras;
        }, Connect.prototype.render = function() {
          var selector = this.selector;
          if (selector.shouldComponentUpdate = false, selector.error) {
            throw selector.error;
          }
          return Object(options.createElement)(WrappedComponent, this.addExtraProps(selector.props));
        }, Connect;
      }(options.Component);
      return Connect.WrappedComponent = WrappedComponent, Connect.displayName = displayName, Connect.childContextTypes = childContextTypes, Connect.contextTypes = contextTypes, Connect.propTypes = contextTypes, __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery___default()(Connect, WrappedComponent);
    };
  }
  /** @type {function(string): ?} */
  exports.a = connectAdvanced;
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(60);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__);
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(61);
  var invariant = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var options = __webpack_require__(0);
  var _Subscription2 = (__webpack_require__.n(options), __webpack_require__(62));
  var _PropTypes = __webpack_require__(23);
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var _extends = Object.assign || function(name) {
    /** @type {number} */
    var index = 1;
    for (; index < arguments.length; index++) {
      var options = arguments[index];
      var option;
      for (option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option)) {
          name[option] = options[option];
        }
      }
    }
    return name;
  };
  /** @type {number} */
  var hotReloadingVersion = 0;
  var stateChange = {};
}, function(canCreateDiscussions, a, mod) {
  /**
   * @param {(Array|boolean|string)} action
   * @param {!Object} t
   * @param {!Object} value
   * @return {?}
   */
  function f(action, t, value) {
    /**
     * @return {undefined}
     */
    function onError() {
      if (temp === s) {
        temp = s.slice();
      }
    }
    /**
     * @return {?}
     */
    function $() {
      return a;
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function subscribe(name) {
      if ("function" !== typeof name) {
        throw new Error("Expected listener to be a function.");
      }
      /** @type {boolean} */
      var t = true;
      return onError(), temp.push(name), function() {
        if (t) {
          /** @type {boolean} */
          t = false;
          onError();
          var start = temp.indexOf(name);
          temp.splice(start, 1);
        }
      };
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function test(name) {
      if (!Object(self.a)(name)) {
        throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
      }
      if ("undefined" === typeof name.type) {
        throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      }
      if (v) {
        throw new Error("Reducers may not dispatch actions.");
      }
      try {
        /** @type {boolean} */
        v = true;
        a = fn(a, name);
      } finally {
        /** @type {boolean} */
        v = false;
      }
      var t = s = temp;
      /** @type {number} */
      var k = 0;
      for (; k < t.length; k++) {
        (0, t[k])();
      }
      return name;
    }
    /**
     * @param {!Function} prop
     * @return {undefined}
     */
    function f(prop) {
      if ("function" !== typeof prop) {
        throw new Error("Expected the nextReducer to be a function.");
      }
      /** @type {!Function} */
      fn = prop;
      test({
        type : ActionTypes.INIT
      });
    }
    /**
     * @return {?}
     */
    function onmessage() {
      var changes;
      /** @type {function(string): ?} */
      var outerSubscribe = subscribe;
      return changes = {
        subscribe : function(name) {
          /**
           * @return {undefined}
           */
          function connect() {
            if (name.next) {
              name.next($());
            }
          }
          if ("object" !== typeof name) {
            throw new TypeError("Expected the observer to be an object.");
          }
          return connect(), {
            unsubscribe : outerSubscribe(connect)
          };
        }
      }, changes[result.a] = function() {
        return this;
      }, changes;
    }
    var _ref2;
    if ("function" === typeof t && "undefined" === typeof value && (value = t, t = void 0), "undefined" !== typeof value) {
      if ("function" !== typeof value) {
        throw new Error("Expected the enhancer to be a function.");
      }
      return value(f)(action, t);
    }
    if ("function" !== typeof action) {
      throw new Error("Expected the reducer to be a function.");
    }
    /** @type {(Array|boolean|string)} */
    var fn = action;
    /** @type {!Object} */
    var a = t;
    /** @type {!Array} */
    var s = [];
    var temp = s;
    /** @type {boolean} */
    var v = false;
    return test({
      type : ActionTypes.INIT
    }), _ref2 = {
      dispatch : test,
      subscribe : subscribe,
      getState : $,
      replaceReducer : f
    }, _ref2[result.a] = onmessage, _ref2;
  }
  mod.d(a, "a", function() {
    return ActionTypes;
  });
  /** @type {function((Array|boolean|string), !Object, !Object): ?} */
  a.b = f;
  var self = mod(17);
  var result = mod(74);
  var ActionTypes = {
    INIT : "@@redux/INIT"
  };
}, function(canCreateDiscussions, p, require) {
  var configuration = require(67);
  var opacity = configuration.a.Symbol;
  p.a = opacity;
}, function(canCreateDiscussions, isSlidingUp, n) {
}, function(canCreateDiscussions, classes, n) {
  /**
   * @return {?}
   */
  function Class() {
    /** @type {number} */
    var _len8 = arguments.length;
    /** @type {!Array} */
    var args = Array(_len8);
    /** @type {number} */
    var _key8 = 0;
    for (; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    return 0 === args.length ? function(value) {
      return value;
    } : 1 === args.length ? args[0] : args.reduce(function(gstime, CropAreaRectangle) {
      return function() {
        return gstime(CropAreaRectangle.apply(void 0, arguments));
      };
    });
  }
  /** @type {function(): ?} */
  classes.a = Class;
}, function(canCreateDiscussions, handler, saveNotifs) {
  /**
   * @param {string} name
   * @return {?}
   */
  function value(name) {
    return function(params, accessor) {
      /**
       * @return {?}
       */
      function mapStateToProps() {
        return key;
      }
      var key = name(params, accessor);
      return mapStateToProps.dependsOnOwnProps = false, mapStateToProps;
    };
  }
  /**
   * @param {?} mapToProps
   * @return {?}
   */
  function getDependsOnOwnProps(mapToProps) {
    return null !== mapToProps.dependsOnOwnProps && void 0 !== mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : 1 !== mapToProps.length;
  }
  /**
   * @param {(RegExp|string)} mapToProps
   * @param {string} x2
   * @return {?}
   */
  function b(mapToProps, x2) {
    return function(canCreateDiscussions, originalTenantNetwork) {
      /** @type {function(?, ?): ?} */
      var proxy = (originalTenantNetwork.displayName, function(stateOrDispatch, ownProps) {
        return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
      });
      return proxy.dependsOnOwnProps = true, proxy.mapToProps = function(stateOrDispatch, ownProps) {
        /** @type {(RegExp|string)} */
        proxy.mapToProps = mapToProps;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
        var props = proxy(stateOrDispatch, ownProps);
        return "function" === typeof props && (proxy.mapToProps = props, proxy.dependsOnOwnProps = getDependsOnOwnProps(props), props = proxy(stateOrDispatch, ownProps)), props;
      }, proxy;
    };
  }
  /** @type {function(string): ?} */
  handler.a = value;
  /** @type {function((RegExp|string), string): ?} */
  handler.b = b;
  saveNotifs(30);
}, function(canCreateDiscussions, isSlidingUp, saveNotifs) {
  saveNotifs(17);
  saveNotifs(15);
}, function(canCreateDiscussions, C, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} call
   * @param {string} value
   * @return {?}
   */
  function _possibleConstructorReturn(call, value) {
    if (!call) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" !== typeof value && "function" !== typeof value ? call : value;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(93);
  var frame = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__), __webpack_require__(1));
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var sx = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "renderColors",
      value : function(name) {
        var subgroupObj = this;
        return Object(frame.c)().map(function(iconBoundsColor, b) {
          var id = b + 1;
          return row.a.createElement("span", {
            key : b,
            onClick : function(name) {
              return subgroupObj.props.onChangeColor(id);
            },
            style : {
              backgroundColor : iconBoundsColor
            },
            className : "color color--" + id + (id === name ? " active" : "")
          });
        });
      }
    }, {
      key : "render",
      value : function() {
        var _props = this.props;
        var start = _props.selectedColorId;
        var data = _props.before;
        return start = parseInt(start, 10), row.a.createElement("div", {
          className : "ColorPicker"
        }, row.a.createElement("div", {
          className : "ColorPicker__wrapper"
        }, data, this.renderColors(start)));
      }
    }]), Agent;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  C.a = sx;
}, function(canCreateDiscussions, t, __webpack_require__) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }
  /**
   * @param {!AudioNode} w
   * @param {!Function} t
   * @return {undefined}
   */
  function debug(w, t) {
    if (!(w instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var installNativeEvent$2 = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _prepareStyleProperties = __webpack_require__(33);
  var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
  var _deepAssign = __webpack_require__(34);
  var _deepAssign2 = _interopRequireDefault(_deepAssign);
  var _normalizeDataUri = __webpack_require__(35);
  var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
  var offsetFromCenter = function() {
    /**
     * @return {undefined}
     */
    function n() {
      debug(this, n);
    }
    return installNativeEvent$2(n, null, [{
      key : "getGA",
      value : function(name) {
        var history = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == history) {
          history = this._getClientId();
        }
        var maxRetryTimeMs = new _deepAssign2.default(new Image);
        var opts = new _normalizeDataUri2.default(name, history);
        return new _prepareStyleProperties2.default(maxRetryTimeMs, opts);
      }
    }, {
      key : "_getClientId",
      value : function() {
        try {
          var e = this._getCookie("_gac");
          return void 0 === e ? (e = this._createRandomClientId(), this._setCookie("_gac", e, {
            expires : 63072E3
          })) : this._setCookie("_gac", e, {
            expires : 63072E3
          }), e;
        } catch (e) {
          return this._createRandomClientId();
        }
      }
    }, {
      key : "_createRandomClientId",
      value : function() {
        return "GAC" + Math.round(999999 * Math.random()) + "." + Math.round((new Date).getTime() / 1E3);
      }
    }, {
      key : "_getCookie",
      value : function(name) {
        /** @type {(Array<string>|null)} */
        var cookie = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return cookie ? decodeURIComponent(cookie[1]) : void 0;
      }
    }, {
      key : "_setCookie",
      value : function(name, data, obj) {
        obj = obj || {};
        var expires = obj.expires;
        if ("number" == typeof expires && expires) {
          /** @type {!Date} */
          var d = new Date;
          d.setTime(d.getTime() + 1E3 * expires);
          /** @type {!Date} */
          expires = obj.expires = d;
        }
        if (expires && expires.toUTCString) {
          obj.expires = expires.toUTCString();
        }
        /** @type {string} */
        data = encodeURIComponent(data);
        /** @type {string} */
        var result = name + "=" + data;
        var prop;
        for (prop in obj) {
          /** @type {string} */
          result = result + ("; " + prop);
          var val = obj[prop];
          if (true !== val) {
            /** @type {string} */
            result = result + ("=" + val);
          }
        }
        /** @type {string} */
        document.cookie = result;
      }
    }]), n;
  }();
  t.default = offsetFromCenter;
}, function(canCreateDiscussions, t, n) {
  /**
   * @param {!AudioNode} that
   * @param {!Function} size
   * @return {undefined}
   */
  function get(that, size) {
    if (!(that instanceof size)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var installNativeEvent$2 = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var offsetFromCenter = function() {
    /**
     * @param {string} node
     * @param {number} name
     * @return {undefined}
     */
    function n(node, name) {
      get(this, n);
      /** @type {string} */
      this._sender = node;
      /** @type {number} */
      this._environmentManager = name;
    }
    return installNativeEvent$2(n, [{
      key : "pageview",
      value : function() {
        var uid = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
        var p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        var s = this._getEnvironment();
        if (void 0 === uid) {
          uid = this._environmentManager.getPath();
        }
        if (void 0 === p) {
          p = this._environmentManager.getPageTitle();
        }
        s.set("t", "pageview");
        s.set("dp", uid);
        s.set("dt", p);
        this._send(s.getData());
      }
    }, {
      key : "event",
      value : function(name, data) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
        var value = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        var self = this._getEnvironment();
        self.set("t", "event");
        self.set("ec", name);
        self.set("ea", data);
        self.set("el", n);
        self.set("ev", void 0 !== value ? parseInt(value) : value);
        this._send(self.getData());
      }
    }, {
      key : "_getEnvironment",
      value : function() {
        return this._environmentManager.getEnvironment();
      }
    }, {
      key : "_send",
      value : function(name) {
        this._sender.send(name);
      }
    }]), n;
  }();
  t.default = offsetFromCenter;
}, function(canCreateDiscussions, t, __webpack_require__) {
  /**
   * @param {!AudioNode} error
   * @param {!Function} t
   * @return {undefined}
   */
  function error(error, t) {
    if (!(error instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} srv
   * @param {string} parent
   * @return {?}
   */
  function test(srv, parent) {
    if (!srv) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !parent || "object" !== typeof parent && "function" !== typeof parent ? srv : parent;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _deepAssign = __webpack_require__(95);
  var _deepAssign2 = function(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }(_deepAssign);
  var offsetFromCenter = function(_EventEmitter) {
    /**
     * @param {string} theImage
     * @return {?}
     */
    function e(theImage) {
      error(this, e);
      var self = test(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
      return self._image = theImage, self._image.onload = function() {
        self._next();
      }, self._image.onerror = function() {
        self._next();
      }, self._lock = false, self._queue = [], self._z = (new Date).getTime(), self._image.width = 1, self._image.height = 1, self;
    }
    return _inherits(e, _EventEmitter), _createClass(e, [{
      key : "send",
      value : function(name) {
        /** @type {string} */
        var id = this.src + "?";
        var style;
        for (style in name) {
          if (name.hasOwnProperty(style)) {
            /** @type {string} */
            id = id + (style + "=" + name[style] + "&");
          }
        }
        /** @type {string} */
        id = id + ("z=" + this._getZ());
        this._upload(id);
      }
    }, {
      key : "_getZ",
      value : function() {
        return this._z++;
      }
    }, {
      key : "_next",
      value : function() {
        /** @type {boolean} */
        this._lock = false;
        var id = this._queue.shift();
        if (id) {
          this._upload(id);
        }
      }
    }, {
      key : "_upload",
      value : function(name) {
        if (this._lock) {
          this._queue.push(name);
        } else {
          /** @type {boolean} */
          this._lock = true;
          /** @type {string} */
          this._image.src = name;
        }
      }
    }]), e;
  }(_deepAssign2.default);
  t.default = offsetFromCenter;
}, function(canCreateDiscussions, t, __webpack_require__) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} actionType
   * @param {string} action
   * @return {?}
   */
  function apply(actionType, action) {
    if (!actionType) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !action || "object" !== typeof action && "function" !== typeof action ? actionType : action;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _prepareStyleProperties = __webpack_require__(96);
  var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
  var _deepAssign = __webpack_require__(36);
  var _deepAssign2 = _interopRequireDefault(_deepAssign);
  var offsetFromCenter = function(_EventEmitter) {
    /**
     * @param {?} obj
     * @param {?} n
     * @return {?}
     */
    function Agent(obj, n) {
      var ds = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "app";
      var endpoint = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      _classCallCheck(this, Agent);
      var self = apply(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, obj, n));
      self._d = {
        v : 1,
        cid : encodeURIComponent(self.clientId),
        tid : encodeURIComponent(self.counterId),
        ds : ds,
        ua : encodeURIComponent(self.getUserAgent()),
        dr : encodeURIComponent(self.getReferrer())
      };
      self._location = endpoint || window.location;
      var relayInternals = self._getUtms(self._location);
      if (relayInternals) {
        var key;
        for (key in relayInternals) {
          if (relayInternals.hasOwnProperty(key)) {
            self._d[key] = relayInternals[key];
          }
        }
      }
      return self;
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "getEnvironment",
      value : function() {
        return _deepAssign2.default.fromData(this._d);
      }
    }, {
      key : "getPath",
      value : function() {
        try {
          return this._location.pathname;
        } catch (e) {
          return "/";
        }
      }
    }, {
      key : "getPageTitle",
      value : function() {
        return document.title;
      }
    }, {
      key : "getUserAgent",
      value : function() {
        try {
          return window.navigator.userAgent;
        } catch (e) {
          return "Unknown";
        }
      }
    }, {
      key : "getReferrer",
      value : function() {
        try {
          return document.referrer;
        } catch (e) {
          return "/";
        }
      }
    }, {
      key : "_getUtms",
      value : function(name) {
        var form = {};
        return name.search.replace("?", "").split("&").forEach(function(inTheme) {
          if (0 === inTheme.indexOf("hash=")) {
            decodeURIComponent(inTheme.replace("hash=", "")).split("&").forEach(function(clusterShardData) {
              /** @type {!Array<string>} */
              var _sizeAnimateTimeStamps = clusterShardData.split("=");
              /** @type {string} */
              var asciiBuffer = _sizeAnimateTimeStamps.shift();
              /** @type {string} */
              var value = _sizeAnimateTimeStamps.shift();
              if (void 0 !== value) {
                if (0 === asciiBuffer.indexOf("amp;")) {
                  /** @type {string} */
                  asciiBuffer = asciiBuffer.replace(/amp;/g, "");
                }
                if ("utm_source" === asciiBuffer) {
                  /** @type {string} */
                  form.cs = value;
                }
                if ("utm_campaign" === asciiBuffer) {
                  /** @type {string} */
                  form.cn = value;
                }
                if ("utm_medium" === asciiBuffer) {
                  /** @type {string} */
                  form.cm = value;
                }
                if ("utm_term" === asciiBuffer) {
                  /** @type {string} */
                  form.ck = value;
                }
                if ("utm_content" === asciiBuffer) {
                  /** @type {string} */
                  form.cc = value;
                }
              }
            });
          }
        }), form;
      }
    }]), Agent;
  }(_prepareStyleProperties2.default);
  t.default = offsetFromCenter;
}, function(canCreateDiscussions, t, n) {
  /**
   * @param {!AudioNode} that
   * @param {!Function} size
   * @return {undefined}
   */
  function allocUnsafe(that, size) {
    if (!(that instanceof size)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var _applyDecoratedDescriptor = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var offsetFromCenter = function() {
    /**
     * @return {undefined}
     */
    function _obj() {
      allocUnsafe(this, _obj);
      this._d = {};
    }
    return _applyDecoratedDescriptor(_obj, null, [{
      key : "fromData",
      value : function(name) {
        var _this10 = new _obj;
        return Object.keys(name).forEach(function(key) {
          if (name.hasOwnProperty(key)) {
            _this10.set(key, name[key]);
          }
        }), _this10;
      }
    }]), _applyDecoratedDescriptor(_obj, [{
      key : "set",
      value : function(name, data) {
        if (void 0 !== data) {
          this._d[name] = data;
        }
      }
    }, {
      key : "getData",
      value : function() {
        var child = this;
        var closedFrames = {};
        return Object.keys(this._d).forEach(function(key) {
          if (child._d.hasOwnProperty(key) && void 0 !== child._d[key]) {
            closedFrames[key] = child._encode(child._d[key]);
          }
        }), closedFrames;
      }
    }, {
      key : "_encode",
      value : function(name) {
        return encodeURIComponent(name);
      }
    }]), _obj;
  }();
  t.default = offsetFromCenter;
}, function(canCreateDiscussions, C, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} call
   * @param {string} value
   * @return {?}
   */
  function _possibleConstructorReturn(call, value) {
    if (!call) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" !== typeof value && "function" !== typeof value ? call : value;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var deps = __webpack_require__(1);
  var c = __webpack_require__(101);
  var defaultOptions = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(114);
  var _createClass = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__), function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }());
  var sx = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "numberFormat",
      value : function(name) {
        return Object(deps.i)(name, 0, "", " ");
      }
    }, {
      key : "render",
      value : function() {
        var that = this;
        var options = this.props;
        var openOpts = options.open;
        var v = options.online;
        var i = options.x;
        var endX = options.y;
        var zoom = options.zoom;
        var zmin = options.minZoom;
        var ub = options.maxZoom;
        /** @type {string} */
        var langClass = Math.random() > .5 ? "Ttl__wait" : "Header__close";
        return row.a.createElement("div", {
          className : "Statistic" + (openOpts ? " open" : " close")
        }, row.a.createElement("div", {
          className : "Statistic__wrapper"
        }, row.a.createElement("div", {
          className : langClass,
          style : {
            display : "none"
          }
        }), row.a.createElement("div", {
          className : "Statistic__line"
        }, row.a.createElement("div", {
          className : "label"
        }, defaultOptions.a.t("online")), row.a.createElement("div", {
          className : "value"
        }, this.numberFormat(v))), row.a.createElement("div", {
          className : "Statistic__line"
        }, row.a.createElement("div", {
          className : "label"
        }, defaultOptions.a.t("dot")), row.a.createElement("div", {
          className : "value"
        }, "(", Math.round(i), ", ", Math.round(endX), ")")), row.a.createElement("div", {
          className : "Statistic__line"
        }, row.a.createElement("div", {
          className : "label"
        }, defaultOptions.a.t("zoom")), row.a.createElement("div", {
          className : "value l0"
        }, row.a.createElement(c.a, {
          value : zoom,
          min : zmin,
          max : ub,
          onChange : function(name) {
            return that.props.onChangeZoom(name);
          }
        })))), row.a.createElement("div", {
          onClick : function(name) {
            return openOpts ? that.props.onClose() : that.props.onOpen();
          },
          className : "Statistic__label" + (openOpts ? " open" : " close")
        }));
      }
    }]), Agent;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  C.a = sx;
}, function(canCreateDiscussions, $scope, n) {
  $scope.a = {
    processors : {},
    addPostProcessor : function(module) {
      /** @type {!Object} */
      this.processors[module.name] = module;
    },
    handle : function(ch, result, n, options, next) {
      var _this = this;
      return ch.forEach(function(processor) {
        if (_this.processors[processor]) {
          result = _this.processors[processor].process(result, n, options, next);
        }
      }), result;
    }
  };
}, function(canCreateDiscussions, z, __webpack_require__) {
  /**
   * @param {!AudioNode} t
   * @param {!Function} x
   * @return {undefined}
   */
  function r(t, x) {
    if (!(t instanceof x)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} value
   * @param {string} fn
   * @return {?}
   */
  function $(value, fn) {
    if (!value) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !fn || "object" !== typeof fn && "function" !== typeof fn ? value : fn;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!Object} server
   * @return {?}
   */
  function filter(server) {
    return {
      rating : server.rating.list
    };
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var window = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(117);
  var e = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__), __webpack_require__(1));
  var defaultOptions = __webpack_require__(2);
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var data = function(e) {
    /**
     * @param {?} vars
     * @return {?}
     */
    function t(vars) {
      r(this, t);
      var _this = $(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, vars));
      return _this.interval = setInterval(function() {
        return _this.setState({
          ttl : Date.now()
        });
      }, 1E3), _this;
    }
    return _inherits(t, e), _createClass(t, [{
      key : "getNumEnding",
      value : function(name, value) {
        var field = void 0;
        if ((name = name % 100) >= 11 && name <= 19) {
          field = value[2];
        } else {
          switch(name % 10) {
            case 1:
              field = value[0];
              break;
            case 2:
            case 3:
            case 4:
              field = value[1];
              break;
            default:
              field = value[2];
          }
        }
        return field;
      }
    }, {
      key : "getEndText",
      value : function() {
        var candidatesWidth = Object(e.f)();
        if (candidatesWidth <= 0) {
          return void clearTimeout(this.interval);
        }
        /** @type {number} */
        candidatesWidth = Math.floor(candidatesWidth / 1E3);
        /** @type {number} */
        var t = Math.floor(candidatesWidth / 3600);
        /** @type {number} */
        var n = Math.max(Math.round((candidatesWidth - 60 * t * 60) / 60), 0);
        return t + " " + this.getNumEnding(t, [defaultOptions.a.t("hour_0"), defaultOptions.a.t("hour_1"), defaultOptions.a.t("hour_2")]) + " " + (n < 10 ? "0" + n : n) + " " + this.getNumEnding(n, [defaultOptions.a.t("minutes_0"), defaultOptions.a.t("minutes_1"), defaultOptions.a.t("minutes_2")]);
      }
    }, {
      key : "render",
      value : function() {
        var props = this.props;
        var tA2x = props.x;
        var n = props.y;
        var path = props.rating;
        var filterText = Object(e.g)();
        return row.a.createElement("div", {
          style : {
            transform : "translate(" + tA2x + "px, " + n + "px)"
          },
          className : "Rating"
        }, filterText ? null : row.a.createElement("div", {
          className : "Rating__wrapper"
        }, row.a.createElement("span", null, defaultOptions.a.t("attention")), row.a.createElement("br", null), row.a.createElement("span", null, defaultOptions.a.t("time_to_end")), row.a.createElement("span", {
          className : "header ttl"
        }, this.getEndText())), path.length && row.a.createElement("div", {
          className : "Rating__wrapper"
        }, row.a.createElement("span", {
          className : "header"
        }, "\u0422\u041e\u041f \u0421\u041e\u041e\u0411\u0429\u0415\u0421\u0422\u0412"), path.map(function(ast, index) {
          return row.a.createElement("div", {
            className : "Rating__item",
            key : index
          }, row.a.createElement("span", {
            className : "number"
          }, index + 1), row.a.createElement("span", {
            className : "name"
          }, ast.name), row.a.createElement("span", {
            className : "value"
          }, ast.c));
        })));
      }
    }]), t;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  z.a = Object(window.b)(filter, {})(data);
}, function(canCreateDiscussions, defaultTagAttributes, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} call
   * @param {string} value
   * @return {?}
   */
  function _possibleConstructorReturn(call, value) {
    if (!call) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" !== typeof value && "function" !== typeof value ? call : value;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!Object} req
   * @return {?}
   */
  function verify(req) {
    return {
      alert : req.user.alert
    };
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var window = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(118);
  var self = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__), __webpack_require__(2));
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var nodeA = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "getGroup",
      value : function(name, type) {
        return name.length > 50 && (name = name.substr(0, 47) + "..."), row.a.createElement("a", {
          href : type,
          target : "_blank"
        }, name);
      }
    }, {
      key : "render",
      value : function() {
        var result = this.props.alert;
        if (result) {
          var category = result.name;
          var url = result.photo;
          var courseSections = result.sex;
          var dir = result.id;
          var groupName = result.groupName;
          var value = result.groupUrl;
          return row.a.createElement("div", {
            className : "Alert"
          }, row.a.createElement("div", {
            className : "Alert__w"
          }, row.a.createElement("img", {
            alt : "",
            src : url
          }), 2 === courseSections ? row.a.createElement("span", null, row.a.createElement("a", {
            href : "https://vk.com/id" + dir,
            target : "_blank"
          }, category), " ", self.a.t("from_group"), " ", this.getGroup(groupName, value), " ", self.a.t("draw_you_dot_male")) : row.a.createElement("span", null, row.a.createElement("a", {
            href : "https://vk.com/id" + dir,
            target : "_blank"
          }, category), " ", self.a.t("from_group"), " ", this.getGroup(groupName, value), " ", self.a.t("draw_you_dot_female"))));
        }
        return null;
      }
    }]), Agent;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  defaultTagAttributes.a = Object(window.b)(verify, {})(nodeA);
}, function(canCreateDiscussions, defaultTagAttributes, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} call
   * @param {string} value
   * @return {?}
   */
  function _possibleConstructorReturn(call, value) {
    if (!call) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" !== typeof value && "function" !== typeof value ? call : value;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!Object} job
   * @return {?}
   */
  function save(job) {
    return {
      ttl : job.user.wait,
      can_post : job.user.can_post
    };
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var window = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(119);
  var thread = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__), __webpack_require__(2));
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var nodeA = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "u",
      value : function(name) {
        return name < 10 ? "0" + name : name;
      }
    }, {
      key : "getText",
      value : function(type) {
        if (type && type > 0) {
          /** @type {number} */
          var n = (type - type % 60) / 60;
          /** @type {number} */
          var character = type % 60;
          return thread.a.t("wait_for", {
            m : this.u(n),
            s : this.u(character)
          });
        }
        var sec = this.props.defaultTtl || 10;
        /** @type {number} */
        var n = (sec - sec % 60) / 60;
        /** @type {number} */
        var character = sec % 60;
        return thread.a.t("wait_for", {
          m : this.u(n),
          s : this.u(character)
        });
      }
    }, {
      key : "render",
      value : function() {
        var self = this.props;
        var props = self.ttl;
        var title = self.offline;
        return row.a.createElement("div", {
          className : "Ttl"
        }, row.a.createElement("div", {
          className : "Ttl__wait"
        }, title ? thread.a.t("reconnecting") : this.getText(props)));
      }
    }]), Agent;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  defaultTagAttributes.a = Object(window.b)(save, {})(nodeA);
}, function(canCreateDiscussions, C, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} call
   * @param {string} value
   * @return {?}
   */
  function _possibleConstructorReturn(call, value) {
    if (!call) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" !== typeof value && "function" !== typeof value ? call : value;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(122);
  var _createClass = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__), function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }());
  var sx = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "render",
      value : function() {
        var props = this.props;
        var dragX = props.x;
        var dragY = props.y;
        var summarySize = props.zoom;
        var color = props.color;
        var label = props.mobile;
        return row.a.createElement("div", {
          style : {
            left : dragX + "px",
            top : dragY + "px",
            width : summarySize + "px",
            height : summarySize + "px",
            backgroundColor : color
          },
          className : "Cursor" + (label ? " mobile" : "") + ("#000000" === color || "#333333" === color ? " black" : "")
        }, summarySize < 5 ? row.a.createElement("div", {
          className : "Cursor__help",
          style : {
            backgroundColor : color
          }
        }) : null);
      }
    }]), Agent;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  C.a = sx;
}, function(mixin, canCreateDiscussions, factory) {
  mixin.exports = function(e) {
    /**
     * @param {string} i
     * @return {?}
     */
    function t(i) {
      if (n[i]) {
        return n[i].exports;
      }
      var module = n[i] = {
        i : i,
        l : false,
        exports : {}
      };
      return e[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
    }
    var n = {};
    return t.m = e, t.c = n, t.d = function(e, n, val) {
      if (!t.o(e, n)) {
        Object.defineProperty(e, n, {
          enumerable : true,
          get : val
        });
      }
    }, t.r = function(name) {
      if ("undefined" != typeof Symbol && Symbol.toStringTag) {
        Object.defineProperty(name, Symbol.toStringTag, {
          value : "Module"
        });
      }
      Object.defineProperty(name, "__esModule", {
        value : true
      });
    }, t.t = function(name, data) {
      if (1 & data && (name = t(name)), 8 & data) {
        return name;
      }
      if (4 & data && "object" == typeof name && name && name.__esModule) {
        return name;
      }
      /** @type {!Object} */
      var d = Object.create(null);
      if (t.r(d), Object.defineProperty(d, "default", {
        enumerable : true,
        value : name
      }), 2 & data && "string" != typeof name) {
        var s;
        for (s in name) {
          t.d(d, s, function(nameProp) {
            return name[nameProp];
          }.bind(null, s));
        }
      }
      return d;
    }, t.n = function(module) {
      /** @type {function(): ?} */
      var n = module && module.__esModule ? function() {
        return module.default;
      } : function() {
        return module;
      };
      return t.d(n, "a", n), n;
    }, t.o = function(e, input) {
      return Object.prototype.hasOwnProperty.call(e, input);
    }, t.p = "", t(t.s = 4);
  }([function(module, canCreateDiscussions) {
    module.exports = factory(0);
  }, function(mixin, canCreateDiscussions, saveNotifs) {
    mixin.exports = saveNotifs(6)();
  }, function(canCreateDiscussions, data, n) {
    Object.defineProperty(data, "__esModule", {
      value : true
    });
    /**
     * @param {!Object} val
     * @return {?}
     */
    data.isMobile = function(val) {
      return void 0 !== val.mobile ? val.mobile : !(!window || void 0 === window._hsMobileUI) && window._hsMobileUI;
    };
    /**
     * @param {!Object} obj
     * @return {?}
     */
    data.createClassName = function(obj) {
      /** @type {!Array} */
      var t = [];
      var prop;
      for (prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop]) {
          t.push(prop);
        }
      }
      return t.join(" ");
    };
  }, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!Object} obj
     * @param {string} key
     * @param {number} value
     * @return {?}
     */
    function _defineProperty(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[key] = value, obj;
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function t(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(p, n, a) {
        return n && t(p.prototype, n), a && t(p, a), p;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _propTypes2 = _interopRequireDefault(__webpack_require__(1));
    var dsProperties = __webpack_require__(2);
    var _deepAssign2 = _interopRequireDefault(__webpack_require__(8));
    var Link = function(canCreateDiscussions) {
      /**
       * @return {?}
       */
      function Agent() {
        return function(impromptuInstance, Impromptu) {
          if (!(impromptuInstance instanceof Impromptu)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Agent), function(EMSarray, a) {
          if (!EMSarray) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return !a || "object" != typeof a && "function" != typeof a ? EMSarray : a;
        }(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
      }
      return function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : subClass,
            enumerable : false,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(subClass, superClass);
          } else {
            /** @type {!Object} */
            subClass.__proto__ = superClass;
          }
        }
      }(Agent, _prepareStyleProperties.Component), _createClass(Agent, [{
        key : "render",
        value : function() {
          var _extends3;
          var _TOOL2MODE;
          var _extends5;
          var _assign5;
          var props = this.props;
          var val = props.color;
          var className = props.className;
          var langClass = (0, dsProperties.createClassName)((_defineProperty(_extends3 = {}, _deepAssign2.default.WaitDots, true), _defineProperty(_extends3, _deepAssign2.default["WaitDots--blue"], "blue" === val), _defineProperty(_extends3, className, className), _extends3));
          return _prepareStyleProperties2.default.createElement("span", {
            className : langClass
          }, _prepareStyleProperties2.default.createElement("span", {
            className : (0, dsProperties.createClassName)((_TOOL2MODE = {}, _defineProperty(_TOOL2MODE, _deepAssign2.default.dot, 1), _defineProperty(_TOOL2MODE, _deepAssign2.default.dot1, 1), _TOOL2MODE))
          }), _prepareStyleProperties2.default.createElement("span", {
            className : (0, dsProperties.createClassName)((_extends5 = {}, _defineProperty(_extends5, _deepAssign2.default.dot, 1), _defineProperty(_extends5, _deepAssign2.default.dot2, 1), _extends5))
          }), _prepareStyleProperties2.default.createElement("span", {
            className : (0, dsProperties.createClassName)((_assign5 = {}, _defineProperty(_assign5, _deepAssign2.default.dot, 1), _defineProperty(_assign5, _deepAssign2.default.dot3, 1), _assign5))
          }));
        }
      }]), Agent;
    }();
    exports.default = Link;
    Link.propTypes = {
      color : _propTypes2.default.oneOf(["blue", "white", ""]),
      className : _propTypes2.default.string
    };
  }, function(canCreateDiscussions, BeautifulProperties, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    Object.defineProperty(BeautifulProperties, "__esModule", {
      value : true
    });
    var _AuthenticationDetails = __webpack_require__(5);
    Object.defineProperty(BeautifulProperties, "Button", {
      enumerable : true,
      get : function() {
        return _interopRequireDefault(_AuthenticationDetails).default;
      }
    });
    var _CognitoUserPool = __webpack_require__(12);
    Object.defineProperty(BeautifulProperties, "Link", {
      enumerable : true,
      get : function() {
        return _interopRequireDefault(_CognitoUserPool).default;
      }
    });
    var _Calendar = __webpack_require__(3);
    Object.defineProperty(BeautifulProperties, "WaitDots", {
      enumerable : true,
      get : function() {
        return _interopRequireDefault(_Calendar).default;
      }
    });
    var _Ticker = __webpack_require__(15);
    Object.defineProperty(BeautifulProperties, "Input", {
      enumerable : true,
      get : function() {
        return _interopRequireDefault(_Ticker).default;
      }
    });
    var _Mapper = __webpack_require__(18);
    Object.defineProperty(BeautifulProperties, "Checkbox", {
      enumerable : true,
      get : function() {
        return _interopRequireDefault(_Mapper).default;
      }
    });
    var _CognitoAccessToken = __webpack_require__(21);
    Object.defineProperty(BeautifulProperties, "Radio", {
      enumerable : true,
      get : function() {
        return _interopRequireDefault(_CognitoAccessToken).default;
      }
    });
    var _CognitoIdToken = __webpack_require__(24);
    Object.defineProperty(BeautifulProperties, "TimeView", {
      enumerable : true,
      get : function() {
        return _interopRequireDefault(_CognitoIdToken).default;
      }
    });
    var _CognitoRefreshToken = __webpack_require__(25);
    Object.defineProperty(BeautifulProperties, "Arrow", {
      enumerable : true,
      get : function() {
        return _interopRequireDefault(_CognitoRefreshToken).default;
      }
    });
  }, function(canCreateDiscussions, res, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!Object} obj
     * @param {string} key
     * @param {string} value
     * @return {?}
     */
    function callback(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[key] = value, obj;
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    Object.defineProperty(res, "__esModule", {
      value : true
    });
    /** @type {function(!Object, ...(Object|null)): !Object} */
    var _extends = Object.assign || function(name) {
      /** @type {number} */
      var index = 1;
      for (; index < arguments.length; index++) {
        var options = arguments[index];
        var option;
        for (option in options) {
          if (Object.prototype.hasOwnProperty.call(options, option)) {
            name[option] = options[option];
          }
        }
      }
      return name;
    };
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function t(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(p, n, a) {
        return n && t(p.prototype, n), a && t(p, a), p;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _propTypes2 = _interopRequireDefault(__webpack_require__(1));
    var _CalendarDay2 = _interopRequireDefault(__webpack_require__(3));
    var self = _interopRequireDefault(__webpack_require__(10));
    var _tags = __webpack_require__(2);
    var exports = function(canCreateDiscussions) {
      /**
       * @return {?}
       */
      function Sankey() {
        var _Object$getPrototypeO;
        var _ret;
        var _this;
        !function(impromptuInstance, Impromptu) {
          if (!(impromptuInstance instanceof Impromptu)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Sankey);
        /** @type {number} */
        var _len8 = arguments.length;
        /** @type {!Array} */
        var args = Array(_len8);
        /** @type {number} */
        var _key8 = 0;
        for (; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }
        return _ret = _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Sankey.__proto__ || Object.getPrototypeOf(Sankey)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this.minWidth = null, _this.node = null, _this.catchRef = function(type) {
          /** @type {string} */
          _this.node = type;
        }, _possibleConstructorReturn(_this, _ret);
      }
      return function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : subClass,
            enumerable : false,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(subClass, superClass);
          } else {
            /** @type {!Object} */
            subClass.__proto__ = superClass;
          }
        }
      }(Sankey, _prepareStyleProperties.Component), _createClass(Sankey, [{
        key : "componentDidMount",
        value : function() {
          this.updateMinWith();
        }
      }, {
        key : "componentDidUpdate",
        value : function() {
          this.updateMinWith();
        }
      }, {
        key : "updateMinWith",
        value : function() {
          if (this.node) {
            if (!this.props.loading) {
              this.minWidth = this.node.offsetWidth;
            }
          } else {
            /** @type {null} */
            this.minWidth = null;
          }
        }
      }, {
        key : "render",
        value : function() {
          var error;
          var options = this.props;
          var name = options.type;
          var parent = options.component;
          var value = options.className;
          var group = options.children;
          var type = options.loading;
          var readOnlyFn = options.fixedWidth;
          var item = function(locals, t) {
            var data = {};
            var i;
            for (i in locals) {
              if (!(t.indexOf(i) >= 0)) {
                if (Object.prototype.hasOwnProperty.call(locals, i)) {
                  data[i] = locals[i];
                }
              }
            }
            return data;
          }(options, ["type", "component", "className", "children", "loading", "fixedWidth"]);
          var current = parent || (this.props.href ? "a" : "button");
          var langClass = (0, _tags.createClassName)((callback(error = {}, self.default.Button, true), callback(error, value || "", true), callback(error, self.default["Button--loading"], type), callback(error, self.default["Button--mobile"], (0, _tags.isMobile)(this.props)), callback(error, name ? self.default["Button--" + name] : "", !!name), error));
          return type && (item.style || (item.style = {}), false !== readOnlyFn && (item.style.minWidth = this.minWidth + "px")), _prepareStyleProperties2.default.createElement(current, _extends({
            ref : this.catchRef,
            className : langClass
          }, item), type ? _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            color : "secondary" === name || "transparent" === name ? "blue" : ""
          }) : group);
        }
      }]), Sankey;
    }();
    res.default = exports;
    exports.propTypes = {
      children : _propTypes2.default.any,
      onClick : _propTypes2.default.func,
      type : _propTypes2.default.oneOf(["default", "secondary", "transparent", ""]),
      mobile : _propTypes2.default.bool,
      className : _propTypes2.default.string,
      href : _propTypes2.default.string,
      target : _propTypes2.default.string,
      loading : _propTypes2.default.bool,
      fixedWidth : _propTypes2.default.bool,
      component : _propTypes2.default.string
    };
    exports.defaultProps = {
      type : "default",
      fixedWidth : true
    };
  }, function(mixin, canCreateDiscussions, floor) {
    /**
     * @return {undefined}
     */
    function emptyFunction() {
    }
    var startYNew = floor(7);
    /**
     * @return {?}
     */
    mixin.exports = function() {
      /**
       * @param {string} name
       * @param {!Function} value
       * @param {!Object} data
       * @param {!Object} prop
       * @param {!Object} index
       * @param {!Object} store
       * @return {undefined}
       */
      function check(name, value, data, prop, index, store) {
        if (store !== startYNew) {
          /** @type {!Error} */
          var backtrace = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw backtrace.name = "Invariant Violation", backtrace;
        }
      }
      /**
       * @return {?}
       */
      function getShim() {
        return check;
      }
      /** @type {function(string, !Function, !Object, !Object, !Object, !Object): undefined} */
      check.isRequired = check;
      var ReactPropTypes = {
        array : check,
        bool : check,
        func : check,
        number : check,
        object : check,
        string : check,
        symbol : check,
        any : check,
        arrayOf : getShim,
        element : check,
        instanceOf : getShim,
        node : check,
        objectOf : getShim,
        oneOf : getShim,
        oneOfType : getShim,
        shape : getShim,
        exact : getShim
      };
      return ReactPropTypes.checkPropTypes = emptyFunction, ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
    };
  }, function(mixin, canCreateDiscussions, n) {
    /** @type {string} */
    mixin.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, function(mixin, canCreateDiscussions, n) {
    mixin.exports = {
      WaitDots : "WaitDots__1MqZT",
      dot : "dot__1c85W",
      "dot-animation" : "dot-animation__1-jpn",
      dot1 : "dot1__2J_hO",
      dot2 : "dot2__6vIvo",
      dot3 : "dot3__1QwAn",
      "WaitDots--blue" : "WaitDots--blue__2IvQp"
    };
  }, , function(module, canCreateDiscussions, n) {
    module.exports = {
      Button : "Button__27A_5",
      "Button--mobile" : "Button--mobile__zvJbI",
      "Button--default" : "Button--default__3Xagt",
      secondary : "secondary__26O0b",
      "Button--transparent" : "Button--transparent__1AXJe",
      "Button--loading" : "Button--loading__2mJ-2",
      "Button--secondary" : "Button--secondary__29JKy"
    };
  }, , function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!Object} obj
     * @param {string} key
     * @param {number} value
     * @return {?}
     */
    function callback(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[key] = value, obj;
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    /** @type {function(!Object, ...(Object|null)): !Object} */
    var _extends = Object.assign || function(name) {
      /** @type {number} */
      var index = 1;
      for (; index < arguments.length; index++) {
        var options = arguments[index];
        var option;
        for (option in options) {
          if (Object.prototype.hasOwnProperty.call(options, option)) {
            name[option] = options[option];
          }
        }
      }
      return name;
    };
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function t(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(p, n, a) {
        return n && t(p.prototype, n), a && t(p, a), p;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _propTypes2 = _interopRequireDefault(__webpack_require__(1));
    var _tags = __webpack_require__(2);
    var _this = _interopRequireDefault(__webpack_require__(13));
    var ReactSwipe = function(canCreateDiscussions) {
      /**
       * @return {?}
       */
      function Agent() {
        return function(impromptuInstance, Impromptu) {
          if (!(impromptuInstance instanceof Impromptu)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Agent), function(EMSarray, a) {
          if (!EMSarray) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return !a || "object" != typeof a && "function" != typeof a ? EMSarray : a;
        }(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
      }
      return function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : subClass,
            enumerable : false,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(subClass, superClass);
          } else {
            /** @type {!Object} */
            subClass.__proto__ = superClass;
          }
        }
      }(Agent, _prepareStyleProperties.Component), _createClass(Agent, [{
        key : "render",
        value : function() {
          var error;
          var data = this.props;
          var name = data.type;
          var com = data.component;
          var state = data.className;
          var confWidth = data.children;
          var item = function(r, t) {
            var result = {};
            var i;
            for (i in r) {
              if (!(t.indexOf(i) >= 0)) {
                if (Object.prototype.hasOwnProperty.call(r, i)) {
                  result[i] = r[i];
                }
              }
            }
            return result;
          }(data, ["type", "component", "className", "children"]);
          var TabTemplate = com;
          var langClass = (0, _tags.createClassName)((callback(error = {}, _this.default.Link, 1), callback(error, name ? _this.default["Link--" + name] : "", !!name), callback(error, state, state), callback(error, _this.default["Link--mobile"], (0, _tags.isMobile)(this.props)), error));
          return _prepareStyleProperties2.default.createElement(TabTemplate, _extends({
            className : langClass
          }, item), confWidth);
        }
      }]), Agent;
    }();
    exports.default = ReactSwipe;
    ReactSwipe.propTypes = {
      type : _propTypes2.default.oneOf(["medium", "bold", ""]),
      component : _propTypes2.default.string,
      className : _propTypes2.default.string,
      children : _propTypes2.default.any,
      mobile : _propTypes2.default.bool
    };
    ReactSwipe.defaultProps = {
      component : "a"
    };
  }, function(mixin, canCreateDiscussions, n) {
    mixin.exports = {
      Link : "Link__LmySN",
      "Link--mobile" : "Link--mobile__1mpkn",
      "Link--medium" : "Link--medium__nr-Jx",
      "Link--bold" : "Link--bold__ouM7D"
    };
  }, , function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!Object} obj
     * @param {string} key
     * @param {string} value
     * @return {?}
     */
    function debug(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[key] = value, obj;
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    /** @type {function(!Object, ...(Object|null)): !Object} */
    var _extends = Object.assign || function(name) {
      /** @type {number} */
      var index = 1;
      for (; index < arguments.length; index++) {
        var options = arguments[index];
        var option;
        for (option in options) {
          if (Object.prototype.hasOwnProperty.call(options, option)) {
            name[option] = options[option];
          }
        }
      }
      return name;
    };
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function t(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(p, n, a) {
        return n && t(p.prototype, n), a && t(p, a), p;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _propTypes2 = _interopRequireDefault(__webpack_require__(1));
    var _tags = __webpack_require__(2);
    var _deepAssign2 = _interopRequireDefault(__webpack_require__(16));
    var DefaultLink = function(canCreateDiscussions) {
      /**
       * @return {?}
       */
      function Agent() {
        return function(impromptuInstance, Impromptu) {
          if (!(impromptuInstance instanceof Impromptu)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Agent), function(EMSarray, a) {
          if (!EMSarray) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return !a || "object" != typeof a && "function" != typeof a ? EMSarray : a;
        }(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
      }
      return function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : subClass,
            enumerable : false,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(subClass, superClass);
          } else {
            /** @type {!Object} */
            subClass.__proto__ = superClass;
          }
        }
      }(Agent, _prepareStyleProperties.Component), _createClass(Agent, [{
        key : "render",
        value : function() {
          var err;
          var _props = this.props;
          var className = _props.className;
          var options = function(obj, t) {
            var result = {};
            var i;
            for (i in obj) {
              if (!(t.indexOf(i) >= 0)) {
                if (Object.prototype.hasOwnProperty.call(obj, i)) {
                  result[i] = obj[i];
                }
              }
            }
            return result;
          }(_props, ["className"]);
          var langClass = (0, _tags.createClassName)((debug(err = {}, _deepAssign2.default.Input, true), debug(err, _deepAssign2.default["Input--mobile"], (0, _tags.isMobile)(this.props)), debug(err, className, className), err));
          return _prepareStyleProperties2.default.createElement("input", _extends({
            className : langClass
          }, options));
        }
      }]), Agent;
    }();
    exports.default = DefaultLink;
    DefaultLink.propTypes = {
      className : _propTypes2.default.string,
      mobile : _propTypes2.default.bool
    };
  }, function(mixin, canCreateDiscussions, n) {
    mixin.exports = {
      Input : "Input__2WBTq",
      "Input--mobile" : "Input--mobile__1d2SG"
    };
  }, , function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!Object} obj
     * @param {string} key
     * @param {string} value
     * @return {?}
     */
    function next(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[key] = value, obj;
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    /** @type {function(!Object, ...(Object|null)): !Object} */
    var assign = Object.assign || function(name) {
      /** @type {number} */
      var index = 1;
      for (; index < arguments.length; index++) {
        var options = arguments[index];
        var option;
        for (option in options) {
          if (Object.prototype.hasOwnProperty.call(options, option)) {
            name[option] = options[option];
          }
        }
      }
      return name;
    };
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function t(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(p, n, a) {
        return n && t(p.prototype, n), a && t(p, a), p;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _propTypes2 = _interopRequireDefault(__webpack_require__(1));
    var _deepAssign2 = _interopRequireDefault(__webpack_require__(19));
    var _tags = __webpack_require__(2);
    var ReactSwipe = function(canCreateDiscussions) {
      /**
       * @return {?}
       */
      function Agent() {
        return function(impromptuInstance, Impromptu) {
          if (!(impromptuInstance instanceof Impromptu)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Agent), function(EMSarray, a) {
          if (!EMSarray) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return !a || "object" != typeof a && "function" != typeof a ? EMSarray : a;
        }(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
      }
      return function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : subClass,
            enumerable : false,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(subClass, superClass);
          } else {
            /** @type {!Object} */
            subClass.__proto__ = superClass;
          }
        }
      }(Agent, _prepareStyleProperties.Component), _createClass(Agent, [{
        key : "render",
        value : function() {
          var error;
          var msg = this.props;
          var state = msg.className;
          var unread = msg.children;
          var x = function(data, t) {
            var self = {};
            var i;
            for (i in data) {
              if (!(t.indexOf(i) >= 0)) {
                if (Object.prototype.hasOwnProperty.call(data, i)) {
                  self[i] = data[i];
                }
              }
            }
            return self;
          }(msg, ["className", "children"]);
          var langClass = (0, _tags.createClassName)((next(error = {}, _deepAssign2.default.Checkbox, true), next(error, state ? " " + state : "", true), next(error, _deepAssign2.default["Checkbox--mobile"], (0, _tags.isMobile)(this.props)), error));
          /** @type {!Object} */
          var item = assign({}, x);
          return delete item.className, _prepareStyleProperties2.default.createElement("label", {
            className : langClass
          }, _prepareStyleProperties2.default.createElement("input", assign({
            type : "checkbox",
            className : _deepAssign2.default.Checkbox__input
          }, item)), unread ? _prepareStyleProperties2.default.createElement("span", {
            className : _deepAssign2.default.Checkbox__text
          }, unread) : null);
        }
      }]), Agent;
    }();
    exports.default = ReactSwipe;
    ReactSwipe.propTypes = {
      checked : _propTypes2.default.bool,
      onChange : _propTypes2.default.func,
      className : _propTypes2.default.string,
      mobile : _propTypes2.default.bool
    };
  }, function(module, canCreateDiscussions, n) {
    module.exports = {
      Checkbox : "Checkbox__XIBW0",
      "Checkbox--mobile" : "Checkbox--mobile__3oHef",
      Checkbox__input : "Checkbox__input__1Peh4",
      Checkbox__text : "Checkbox__text__2_ftt"
    };
  }, , function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!Object} obj
     * @param {string} key
     * @param {string} value
     * @return {?}
     */
    function done(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[key] = value, obj;
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    /** @type {function(!Object, ...(Object|null)): !Object} */
    var _extends = Object.assign || function(name) {
      /** @type {number} */
      var index = 1;
      for (; index < arguments.length; index++) {
        var options = arguments[index];
        var option;
        for (option in options) {
          if (Object.prototype.hasOwnProperty.call(options, option)) {
            name[option] = options[option];
          }
        }
      }
      return name;
    };
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function t(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(p, n, a) {
        return n && t(p.prototype, n), a && t(p, a), p;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _propTypes2 = _interopRequireDefault(__webpack_require__(1));
    var _tags = __webpack_require__(2);
    var _deepAssign2 = _interopRequireDefault(__webpack_require__(22));
    var DefaultLink = function(canCreateDiscussions) {
      /**
       * @return {?}
       */
      function Agent() {
        return function(impromptuInstance, Impromptu) {
          if (!(impromptuInstance instanceof Impromptu)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Agent), function(EMSarray, a) {
          if (!EMSarray) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return !a || "object" != typeof a && "function" != typeof a ? EMSarray : a;
        }(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
      }
      return function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : subClass,
            enumerable : false,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(subClass, superClass);
          } else {
            /** @type {!Object} */
            subClass.__proto__ = superClass;
          }
        }
      }(Agent, _prepareStyleProperties.Component), _createClass(Agent, [{
        key : "render",
        value : function() {
          var error;
          var _props = this.props;
          var height = _props.className;
          var children = _props.children;
          var options = function(obj, t) {
            var result = {};
            var i;
            for (i in obj) {
              if (!(t.indexOf(i) >= 0)) {
                if (Object.prototype.hasOwnProperty.call(obj, i)) {
                  result[i] = obj[i];
                }
              }
            }
            return result;
          }(_props, ["className", "children"]);
          var langClass = (0, _tags.createClassName)((done(error = {}, _deepAssign2.default.Radio, true), done(error, height, height), done(error, _deepAssign2.default["Radio--mobile"], (0, _tags.isMobile)(this.props)), error));
          return _prepareStyleProperties2.default.createElement("label", {
            className : langClass
          }, _prepareStyleProperties2.default.createElement("input", _extends({
            type : "radio",
            className : _deepAssign2.default.Radio__input
          }, options)), _prepareStyleProperties2.default.createElement("span", {
            className : _deepAssign2.default.Radio__text
          }, children));
        }
      }]), Agent;
    }();
    exports.default = DefaultLink;
    DefaultLink.propTypes = {
      className : _propTypes2.default.string,
      mobile : _propTypes2.default.bool
    };
  }, function(mixin, canCreateDiscussions, n) {
    mixin.exports = {
      Radio : "Radio__1q743",
      "Radio--mobile" : "Radio--mobile__1XHb9",
      Radio__input : "Radio__input__3pndl",
      Radio__text : "Radio__text__32mDr"
    };
  }, , function(canCreateDiscussions, properties, dselect) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function s(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    Object.defineProperty(properties, "__esModule", {
      value : true
    });
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function t(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(p, n, a) {
        return n && t(p.prototype, n), a && t(p, a), p;
      };
    }();
    var a = dselect(0);
    var formats = (s(a), s(dselect(1)));
    /** @type {!Array} */
    var tiledImageBRs = ["\u044f\u043d\u0432", "\u0444\u0435\u0432", "\u043c\u0430\u0440", "\u0430\u043f\u0440", "\u043c\u0430\u0439", "\u0438\u044e\u043d", "\u0438\u044e\u043b", "\u0430\u0432\u0433", "\u0441\u0435\u043d", "\u043e\u043a\u0442", "\u043d\u043e\u044f", "\u0434\u0435\u043a"];
    var obj = function(canCreateDiscussions) {
      /**
       * @return {?}
       */
      function Agent() {
        return function(impromptuInstance, Impromptu) {
          if (!(impromptuInstance instanceof Impromptu)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Agent), function(EMSarray, a) {
          if (!EMSarray) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return !a || "object" != typeof a && "function" != typeof a ? EMSarray : a;
        }(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
      }
      return function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : subClass,
            enumerable : false,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(subClass, superClass);
          } else {
            /** @type {!Object} */
            subClass.__proto__ = superClass;
          }
        }
      }(Agent, a.Component), _createClass(Agent, [{
        key : "render",
        value : function() {
          var date = this.props.timestamp;
          /** @type {!Date} */
          var currentdate = new Date(1E3 * date);
          /** @type {number} */
          var lClass = currentdate.getFullYear();
          var dupeNameCount = tiledImageBRs[currentdate.getMonth()];
          /** @type {number} */
          var groupNamePrefix = currentdate.getDate();
          /** @type {number} */
          var i = currentdate.getHours();
          /** @type {number} */
          var pPostFix = currentdate.getMinutes();
          return lClass === (new Date).getFullYear() ? groupNamePrefix + " " + dupeNameCount + " " + i + ":" + pPostFix : groupNamePrefix + " " + dupeNameCount + " " + lClass + " " + i + ":" + pPostFix;
        }
      }]), Agent;
    }();
    properties.default = obj;
    obj.propTypes = {
      timestamp : formats.default.number,
      lang : formats.default.string
    };
    obj.defaultProps = {
      lang : "ru"
    };
  }, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function t(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(p, n, a) {
        return n && t(p.prototype, n), a && t(p, a), p;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _propTypes2 = _interopRequireDefault(__webpack_require__(1));
    var EventCalendar = function(canCreateDiscussions) {
      /**
       * @return {?}
       */
      function Agent() {
        return function(impromptuInstance, Impromptu) {
          if (!(impromptuInstance instanceof Impromptu)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Agent), function(EMSarray, a) {
          if (!EMSarray) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return !a || "object" != typeof a && "function" != typeof a ? EMSarray : a;
        }(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
      }
      return function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : subClass,
            enumerable : false,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(subClass, superClass);
          } else {
            /** @type {!Object} */
            subClass.__proto__ = superClass;
          }
        }
      }(Agent, _prepareStyleProperties.Component), _createClass(Agent, [{
        key : "render",
        value : function() {
          return "down" === this.props.type ? _prepareStyleProperties2.default.createElement("svg", {
            width : "8",
            height : "4",
            xmlns : "http://www.w3.org/2000/svg"
          }, _prepareStyleProperties2.default.createElement("path", {
            d : "M.8.7L4 3.3 7.2.7",
            stroke : this.props.color,
            strokeWidth : "1.3",
            fill : "none",
            fillRule : "evenodd",
            strokeLinecap : "round",
            strokeLinejoin : "round"
          })) : "up" === this.props.type ? _prepareStyleProperties2.default.createElement("svg", {
            width : "8",
            height : "4",
            xmlns : "http://www.w3.org/2000/svg"
          }, _prepareStyleProperties2.default.createElement("path", {
            d : "M.8 3.3L4 .7l3.2 2.6",
            stroke : this.props.color,
            strokeWidth : "1.3",
            fill : "none",
            fillRule : "evenodd",
            strokeLinecap : "round",
            strokeLinejoin : "round"
          })) : "left" === this.props.type ? _prepareStyleProperties2.default.createElement("svg", {
            width : "4",
            height : "8",
            xmlns : "http://www.w3.org/2000/svg"
          }, _prepareStyleProperties2.default.createElement("path", {
            d : "M3.3 7.2L.7 4 3.3.8",
            stroke : this.props.color,
            strokeWidth : "1.3",
            fill : "none",
            fillRule : "evenodd",
            strokeLinecap : "round",
            strokeLinejoin : "round"
          })) : _prepareStyleProperties2.default.createElement("svg", {
            width : "4",
            height : "8",
            xmlns : "http://www.w3.org/2000/svg"
          }, _prepareStyleProperties2.default.createElement("path", {
            d : "M.7 7.2L3.3 4 .7.8",
            stroke : this.props.color,
            strokeWidth : "1.3",
            fill : "none",
            fillRule : "evenodd",
            strokeLinecap : "round",
            strokeLinejoin : "round"
          }));
        }
      }]), Agent;
    }();
    exports.default = EventCalendar;
    EventCalendar.propTypes = {
      color : _propTypes2.default.string,
      direction : _propTypes2.default.oneOf(["down", "up", "left", "right"])
    };
    EventCalendar.defaultProps = {
      color : "#92A0B1",
      direction : "down"
    };
  }]);
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, t, __webpack_require__) {
  /**
   * @return {?}
   */
  function f() {
    return function(resolve) {
      c.a.request("v1/pixel", {}, "GET").then(function(action) {
        resolve(init(action.rating));
      }).catch(options.e);
      setTimeout(function() {
        return resolve(f());
      }, 6E5);
    };
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function init(data) {
    return function(setup, $) {
      var ts = data.ts;
      var o = data.data;
      var _ts = $().rating.ts;
      if (!(ts <= _ts)) {
        var values = o.map(function(domFixtures) {
          return domFixtures.g;
        });
        var tags = {};
        o.forEach(function(r) {
          return tags[r.g] = r.c;
        });
        if (values.length) {
          getData(values).then(function(wrappersTemplates) {
            /** @type {!Array} */
            var history = [];
            wrappersTemplates.forEach(function(parameters) {
              var mimeType = parameters.name;
              history.push({
                name : mimeType,
                c : tags[parameters.id]
              });
            });
            history.sort(function(c, cell) {
              return c.c > cell.c ? -1 : c.c < cell.c ? 1 : 0;
            });
            setup({
              type : a.r,
              update : {
                ts : ts,
                source : tags,
                list : history
              }
            });
          }).catch(function(e) {
            Object(options.e)(e);
          });
        }
      }
    };
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function getData(value) {
    return new Promise(function(xsend, next) {
      self.a.api("groups.getById", {
        group_ids : value.join(","),
        v : "5.62"
      }).then(function(message) {
        if (message && message.length) {
          xsend(message);
        } else {
          next(JSON.stringify(message));
        }
      }).catch(next);
    });
  }
  /** @type {function(): ?} */
  t.b = f;
  var a = __webpack_require__(4);
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(6);
  var self = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var options = __webpack_require__(1);
  var c = __webpack_require__(12);
  var data = {
    list : [],
    source : {},
    ts : 0
  };
  /**
   * @return {?}
   */
  var fn = function() {
    var results = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : data;
    var page = arguments[1];
    switch(page.type) {
      case a.r:
        return Object.assign({}, results, page.update);
      default:
        return results;
    }
  };
  /** @type {function(): ?} */
  t.a = fn;
}, , , , function(module, canCreateDiscussions, factory) {
  factory(51);
  module.exports = factory(55);
}, function(canCreateDiscussions, isSlidingUp, require) {
  if ("undefined" === typeof Promise) {
    require(52).enable();
    window.Promise = require(54);
  }
  require(21);
  Object.assign = require(9);
}, function(canCreateDiscussions, exports, floor) {
  /**
   * @return {undefined}
   */
  function disable() {
    /** @type {boolean} */
    l = false;
    /** @type {null} */
    startYNew._47 = null;
    /** @type {null} */
    startYNew._71 = null;
  }
  /**
   * @param {number} options
   * @return {undefined}
   */
  function enable(options) {
    /**
     * @param {?} id
     * @return {undefined}
     */
    function onUnhandled(id) {
      if (options.allRejections || error(rejections[id].error, options.whitelist || res)) {
        /** @type {number} */
        rejections[id].displayId = displayId++;
        if (options.onUnhandled) {
          /** @type {boolean} */
          rejections[id].logged = true;
          options.onUnhandled(rejections[id].displayId, rejections[id].error);
        } else {
          /** @type {boolean} */
          rejections[id].logged = true;
          errorHandler(rejections[id].displayId, rejections[id].error);
        }
      }
    }
    /**
     * @param {?} id
     * @return {undefined}
     */
    function onHandled(id) {
      if (rejections[id].logged) {
        if (options.onHandled) {
          options.onHandled(rejections[id].displayId, rejections[id].error);
        } else {
          if (!rejections[id].onUnhandled) {
            console.warn("Promise Rejection Handled (id: " + rejections[id].displayId + "):");
            console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' + rejections[id].displayId + ".");
          }
        }
      }
    }
    options = options || {};
    if (l) {
      disable();
    }
    /** @type {boolean} */
    l = true;
    /** @type {number} */
    var error_number = 0;
    /** @type {number} */
    var displayId = 0;
    var rejections = {};
    /**
     * @param {string} promise
     * @return {undefined}
     */
    startYNew._47 = function(promise) {
      if (2 === promise._83 && rejections[promise._56]) {
        if (rejections[promise._56].logged) {
          onHandled(promise._56);
        } else {
          clearTimeout(rejections[promise._56].timeout);
        }
        delete rejections[promise._56];
      }
    };
    /**
     * @param {!Object} promise
     * @param {!Object} err
     * @return {undefined}
     */
    startYNew._71 = function(promise, err) {
      if (0 === promise._75) {
        /** @type {number} */
        promise._56 = error_number++;
        rejections[promise._56] = {
          displayId : null,
          error : err,
          timeout : setTimeout(onUnhandled.bind(null, promise._56), error(err, res) ? 100 : 2E3),
          logged : false
        };
      }
    };
  }
  /**
   * @param {string} callback
   * @param {!Object} error
   * @return {undefined}
   */
  function errorHandler(callback, error) {
    console.warn("Possible Unhandled Promise Rejection (id: " + callback + "):");
    ((error && (error.stack || error)) + "").split("\n").forEach(function(expectedAction) {
      console.warn("  " + expectedAction);
    });
  }
  /**
   * @param {!Object} text
   * @param {!Array} result
   * @return {?}
   */
  function error(text, result) {
    return result.some(function(StringValue) {
      return text instanceof StringValue;
    });
  }
  var startYNew = floor(20);
  /** @type {!Array} */
  var res = [ReferenceError, TypeError, RangeError];
  /** @type {boolean} */
  var l = false;
  /** @type {function(): undefined} */
  exports.disable = disable;
  /** @type {function(number): undefined} */
  exports.enable = enable;
}, function(module, gen34_options, moment) {
  (function(global) {
    /**
     * @param {string} name
     * @return {undefined}
     */
    function rawAsap(name) {
      if (!a.length) {
        requestFlush();
        /** @type {boolean} */
        u = true;
      }
      /** @type {string} */
      a[a.length] = name;
    }
    /**
     * @return {undefined}
     */
    function flush() {
      for (; b < a.length;) {
        var name = b;
        if (b = b + 1, a[name].call(), b > thresh) {
          /** @type {number} */
          var j = 0;
          /** @type {number} */
          var z = a.length - b;
          for (; j < z; j++) {
            a[j] = a[j + b];
          }
          a.length -= b;
          /** @type {number} */
          b = 0;
        }
      }
      /** @type {number} */
      a.length = 0;
      /** @type {number} */
      b = 0;
      /** @type {boolean} */
      u = false;
    }
    /**
     * @param {!Function} callback
     * @return {?}
     */
    function makeRequestCallFromTimer(callback) {
      return function() {
        /**
         * @return {undefined}
         */
        function handleTimer() {
          clearTimeout(timeoutHandle);
          clearInterval(intervalHandle);
          callback();
        }
        /** @type {number} */
        var timeoutHandle = setTimeout(handleTimer, 0);
        /** @type {number} */
        var intervalHandle = setInterval(handleTimer, 50);
      };
    }
    /** @type {function(string): undefined} */
    module.exports = rawAsap;
    var requestFlush;
    /** @type {!Array} */
    var a = [];
    /** @type {boolean} */
    var u = false;
    /** @type {number} */
    var b = 0;
    /** @type {number} */
    var thresh = 1024;
    var scope = "undefined" !== typeof global ? global : self;
    var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
    requestFlush = "function" === typeof BrowserMutationObserver ? function(callback) {
      /** @type {number} */
      var v = 1;
      var observer = new BrowserMutationObserver(callback);
      /** @type {!Text} */
      var textNode = document.createTextNode("");
      return observer.observe(textNode, {
        characterData : true
      }), function() {
        /** @type {number} */
        v = -v;
        /** @type {number} */
        textNode.data = v;
      };
    }(flush) : makeRequestCallFromTimer(flush);
    rawAsap.requestFlush = requestFlush;
    /** @type {function(!Function): ?} */
    rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
  }).call(gen34_options, moment(14));
}, function(module, canCreateDiscussions, require) {
  /**
   * @param {string} value
   * @return {?}
   */
  function valuePromise(value) {
    var mockLocation = new Promise(Promise._44);
    return mockLocation._83 = 1, mockLocation._18 = value, mockLocation;
  }
  var Promise = require(20);
  module.exports = Promise;
  var FALSE = valuePromise(true);
  var NULL = valuePromise(false);
  var UNDEFINED = valuePromise(null);
  var TRUE = valuePromise(void 0);
  var ZERO = valuePromise(0);
  var EMPTYSTRING = valuePromise("");
  /**
   * @param {?} value
   * @return {?}
   */
  Promise.resolve = function(value) {
    if (value instanceof Promise) {
      return value;
    }
    if (null === value) {
      return UNDEFINED;
    }
    if (void 0 === value) {
      return TRUE;
    }
    if (true === value) {
      return FALSE;
    }
    if (false === value) {
      return NULL;
    }
    if (0 === value) {
      return ZERO;
    }
    if ("" === value) {
      return EMPTYSTRING;
    }
    if ("object" === typeof value || "function" === typeof value) {
      try {
        var callback = value.then;
        if ("function" === typeof callback) {
          return new Promise(callback.bind(value));
        }
      } catch (formatedList) {
        return new Promise(function(canCreateDiscussions, resolve) {
          resolve(formatedList);
        });
      }
    }
    return valuePromise(value);
  };
  /**
   * @param {?} context
   * @return {?}
   */
  Promise.all = function(context) {
    /** @type {!Array<?>} */
    var list = Array.prototype.slice.call(context);
    return new Promise(function(resolve, reject) {
      /**
       * @param {number} id
       * @param {!Object} val
       * @return {?}
       */
      function resolve(id, val) {
        if (val && ("object" === typeof val || "function" === typeof val)) {
          if (val instanceof Promise && val.then === Promise.prototype.then) {
            for (; 3 === val._83;) {
              val = val._18;
            }
            return 1 === val._83 ? resolve(id, val._18) : (2 === val._83 && reject(val._18), void val.then(function(y) {
              resolve(id, y);
            }, reject));
          }
          var then = val.then;
          if ("function" === typeof then) {
            return void(new Promise(then.bind(val))).then(function(y) {
              resolve(id, y);
            }, reject);
          }
        }
        /** @type {!Object} */
        list[id] = val;
        if (0 === --asyncValueIndex) {
          resolve(list);
        }
      }
      if (0 === list.length) {
        return resolve([]);
      }
      /** @type {number} */
      var asyncValueIndex = list.length;
      /** @type {number} */
      var i = 0;
      for (; i < list.length; i++) {
        resolve(i, list[i]);
      }
    });
  };
  /**
   * @param {!Error} reason
   * @return {?}
   */
  Promise.reject = function(reason) {
    return new Promise(function(canCreateDiscussions, reject$2) {
      reject$2(reason);
    });
  };
  /**
   * @param {!Array} answerPs
   * @return {?}
   */
  Promise.race = function(answerPs) {
    return new Promise(function(t, throwException) {
      answerPs.forEach(function(e) {
        Promise.resolve(e).then(t, throwException);
      });
    });
  };
  /**
   * @param {!Function} fn
   * @return {?}
   */
  Promise.prototype.catch = function(fn) {
    return this.then(null, fn);
  };
}, function(canCreateDiscussions, BeautifulProperties, $) {
  /**
   * @param {string} widget
   * @param {string} name
   * @return {undefined}
   */
  function callback(widget, name) {
    if (-1 === window.location.pathname.indexOf("mobile")) {
      Object(self.h)(s.a.createElement(_tr.a, {
        store : widget
      }, s.a.createElement(clonedI.a, {
        channel : name
      })));
    } else {
      render(widget, name);
    }
  }
  /**
   * @param {string} name
   * @param {string} title
   * @return {undefined}
   */
  function render(name, title) {
    if (0 === window.innerHeight || 0 === window.innerWidth) {
      setTimeout(function() {
        return render(name, title);
      }, 200);
    } else {
      Object(self.h)(s.a.createElement(_tr.a, {
        store : name
      }, s.a.createElement(c.a, {
        channel : title
      })));
    }
  }
  /**
   * @param {string} data
   * @return {undefined}
   */
  function i(data) {
    alert("\u0423\u043f\u0441, \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 (( " + (data ? data.message : ""));
    Object(self.e)(data);
  }
  Object.defineProperty(BeautifulProperties, "__esModule", {
    value : true
  });
  var a = $(0);
  var s = $.n(a);
  var _tr = $(3);
  var clonedI = $(84);
  var c = $(127);
  var tree = $(131);
  var query = $(6);
  var finder = $.n(query);
  var h = $(12);
  var m = $(2);
  var frame = $(11);
  var e = $(13);
  var options = $(8);
  var self = $(1);
  var obj = $(132);
  var presence = $(4);
  var opt = $(46);
  (function() {
    return new Promise(function(e, rejected) {
      finder.a.init().then(function(p) {
        return m.a.init(p.getLangCode());
      }).then(function() {
        h.a.vkSign = finder.a.startSearch;
        var data = {
          userId : finder.a.getStartParams().viewerId,
          groupId : finder.a.getStartParams().groupId,
          server : "",
          image : "",
          deadline : 0
        };
        h.a.request("v1/start", {
          tag : finder.a.getStartParams().hash
        }, "GET").then(function(options) {
          data.server = options.server;
          data.image = options.image;
          data.deadline = options.deadline;
          data.good = options.good;
          e(data);
        }).catch(rejected);
      }).catch(rejected);
    });
  })().then(function(params) {
    var name = params.userId;
    var id = params.groupId;
    var port = params.server;
    var url = params.image;
    var memId = params.deadline;
    var state = params.good;
    var req = new tree.a(obj.a, name);
    Object(self.j)(memId);
    Object(self.d)();
    obj.a.dispatch(Object(options.g)(true));
    obj.a.dispatch(Object(options.d)());
    obj.a.dispatch(Object(options.e)());
    obj.a.dispatch(Object(options.a)());
    obj.a.dispatch(Object(options.j)(name));
    obj.a.dispatch(Object(frame.f)(id));
    obj.a.dispatch({
      type : presence.p,
      update : {
        good : !!state
      }
    });
    obj.a.dispatch(Object(opt.b)());
    callback(obj.a, req);
    if (-1 === window.location.pathname.indexOf("mobile") && finder.a.getStartParams().isAdmin()) {
      obj.a.dispatch(Object(e.c)());
    }
    req.run(port, function() {
      Object(e.d)(url).then(function(eater) {
        obj.a.dispatch(Object(e.g)(eater, function() {
          obj.a.dispatch(Object(options.g)(false));
        }));
      }).catch(function(f) {
        i(f);
      });
    });
  }).catch(function(f) {
    return i(f);
  });
}, function(module, canCreateDiscussions, require) {
  /**
   * @param {!Object} error
   * @param {?} condition
   * @param {string} f
   * @param {?} e
   * @param {?} d
   * @param {?} a
   * @param {?} b
   * @param {?} c
   * @return {undefined}
   */
  function invariant(error, condition, f, e, d, a, b, c) {
    if (!error) {
      if (error = void 0, void 0 === condition) {
        /** @type {!Error} */
        error = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      } else {
        /** @type {!Array} */
        var expected = [f, e, d, a, b, c];
        /** @type {number} */
        var count = 0;
        /** @type {!Error} */
        error = Error(condition.replace(/%s/g, function() {
          return expected[count++];
        }));
        /** @type {string} */
        error.name = "Invariant Violation";
      }
      throw error.framesToPop = 1, error;
    }
  }
  /**
   * @param {string} _x61
   * @return {undefined}
   */
  function get(_x61) {
    /** @type {number} */
    var ncells = arguments.length - 1;
    /** @type {string} */
    var collect = "https://reactjs.org/docs/error-decoder.html?invariant=" + _x61;
    /** @type {number} */
    var index = 0;
    for (; index < ncells; index++) {
      /** @type {string} */
      collect = collect + ("&args[]=" + encodeURIComponent(arguments[index + 1]));
    }
    invariant(false, "Minified React error #" + _x61 + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", collect);
  }
  /**
   * @param {!Object} props
   * @param {!Object} context
   * @param {?} updater
   * @return {undefined}
   */
  function ReactComponent(props, context, updater) {
    /** @type {!Object} */
    this.props = props;
    /** @type {!Object} */
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
  }
  /**
   * @return {undefined}
   */
  function ComponentDummy() {
  }
  /**
   * @param {!Object} props
   * @param {!Object} context
   * @param {?} updater
   * @return {undefined}
   */
  function ReactPureComponent(props, context, updater) {
    /** @type {!Object} */
    this.props = props;
    /** @type {!Object} */
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
  }
  /**
   * @param {(!Function|string)} type
   * @param {!Object} data
   * @param {!Object} value
   * @return {?}
   */
  function render(type, data, value) {
    var i = void 0;
    var props = {};
    /** @type {null} */
    var previewKey = null;
    /** @type {null} */
    var ref = null;
    if (null != data) {
      for (i in void 0 !== data.ref && (ref = data.ref), void 0 !== data.key && (previewKey = "" + data.key), data) {
        if (has.call(data, i) && !RESERVED_PROPS.hasOwnProperty(i)) {
          props[i] = data[i];
        }
      }
    }
    /** @type {number} */
    var values = arguments.length - 2;
    if (1 === values) {
      /** @type {!Object} */
      props.children = value;
    } else {
      if (1 < values) {
        /** @type {!Array} */
        var content = Array(values);
        /** @type {number} */
        var i = 0;
        for (; i < values; i++) {
          content[i] = arguments[i + 2];
        }
        /** @type {!Array} */
        props.children = content;
      }
    }
    if (type && type.defaultProps) {
      for (i in values = type.defaultProps) {
        if (void 0 === props[i]) {
          props[i] = values[i];
        }
      }
    }
    return {
      $$typeof : REACT_ELEMENT_TYPE,
      type : type,
      key : previewKey,
      ref : ref,
      props : props,
      _owner : ReactCurrentOwner.current
    };
  }
  /**
   * @param {!Object} data
   * @param {string} t
   * @return {?}
   */
  function clone(data, t) {
    return {
      $$typeof : REACT_ELEMENT_TYPE,
      type : data.type,
      key : t,
      ref : data.ref,
      props : data.props,
      _owner : data._owner
    };
  }
  /**
   * @param {!Object} object
   * @return {?}
   */
  function isValidElement(object) {
    return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  /**
   * @param {string} s2
   * @return {?}
   */
  function f(s2) {
    var subwikiListsCache = {
      "=" : "=0",
      ":" : "=2"
    };
    return "$" + ("" + s2).replace(/[=:]/g, function(wikiId) {
      return subwikiListsCache[wikiId];
    });
  }
  /**
   * @param {string} o
   * @param {string} f
   * @param {string} value
   * @param {!Object} context
   * @return {?}
   */
  function add(o, f, value, context) {
    if (deadPool.length) {
      var p = deadPool.pop();
      return p.result = o, p.keyPrefix = f, p.func = value, p.context = context, p.count = 0, p;
    }
    return {
      result : o,
      keyPrefix : f,
      func : value,
      context : context,
      count : 0
    };
  }
  /**
   * @param {!Object} b
   * @return {undefined}
   */
  function append(b) {
    /** @type {null} */
    b.result = null;
    /** @type {null} */
    b.keyPrefix = null;
    /** @type {null} */
    b.func = null;
    /** @type {null} */
    b.context = null;
    /** @type {number} */
    b.count = 0;
    if (10 > deadPool.length) {
      deadPool.push(b);
    }
  }
  /**
   * @param {!Object} obj
   * @param {!Object} name
   * @param {string} callback
   * @param {!Object} offset
   * @return {?}
   */
  function serialize(obj, name, callback, offset) {
    /** @type {string} */
    var type = typeof obj;
    if (!("undefined" !== type && "boolean" !== type)) {
      /** @type {null} */
      obj = null;
    }
    /** @type {boolean} */
    var result = false;
    if (null === obj) {
      /** @type {boolean} */
      result = true;
    } else {
      switch(type) {
        case "string":
        case "number":
          /** @type {boolean} */
          result = true;
          break;
        case "object":
          switch(obj.$$typeof) {
            case REACT_ELEMENT_TYPE:
            case count_exact:
              /** @type {boolean} */
              result = true;
          }
      }
    }
    if (result) {
      return callback(offset, obj, "" === name ? "." + cb(obj, 0) : name), 1;
    }
    if (result = 0, name = "" === name ? "." : name + ":", Array.isArray(obj)) {
      /** @type {number} */
      var i = 0;
      for (; i < obj.length; i++) {
        type = obj[i];
        /** @type {string} */
        var path = name + cb(type, i);
        result = result + serialize(type, path, callback, offset);
      }
    } else {
      if (null === obj || "object" !== typeof obj ? path = null : (path = key && obj[key] || obj["@@iterator"], path = "function" === typeof path ? path : null), "function" === typeof path) {
        obj = path.call(obj);
        /** @type {number} */
        i = 0;
        for (; !(type = obj.next()).done;) {
          type = type.value;
          /** @type {string} */
          path = name + cb(type, i++);
          result = result + serialize(type, path, callback, offset);
        }
      } else {
        if ("object" === type) {
          /** @type {string} */
          callback = "" + obj;
          get("31", "[object Object]" === callback ? "object with keys {" + Object.keys(obj).join(", ") + "}" : callback, "");
        }
      }
    }
    return result;
  }
  /**
   * @param {string} object
   * @param {!Function} callback
   * @param {!Object} offset
   * @return {?}
   */
  function error(object, callback, offset) {
    return null == object ? 0 : serialize(object, "", callback, offset);
  }
  /**
   * @param {!Object} a
   * @param {number} v
   * @return {?}
   */
  function cb(a, v) {
    return "object" === typeof a && null !== a && null != a.key ? f(a.key) : v.toString(36);
  }
  /**
   * @param {!Object} spec
   * @param {?} date
   * @return {undefined}
   */
  function search(spec, date) {
    spec.func.call(spec.context, date, spec.count++);
  }
  /**
   * @param {!Object} obj
   * @param {string} item
   * @param {string} key
   * @return {undefined}
   */
  function load(obj, item, key) {
    var r = obj.result;
    var prefix = obj.keyPrefix;
    obj = obj.func.call(obj.context, item, obj.count++);
    if (Array.isArray(obj)) {
      debug(obj, r, key, function(dataId) {
        return dataId;
      });
    } else {
      if (null != obj) {
        if (isValidElement(obj)) {
          obj = clone(obj, prefix + (!obj.key || item && item.key === obj.key ? "" : ("" + obj.key).replace(REGEX_ESCAPE_EXPR, "$&/") + "/") + key);
        }
        r.push(obj);
      }
    }
  }
  /**
   * @param {!Function} type
   * @param {!Array} value
   * @param {string} title
   * @param {!Function} text
   * @param {!Object} data
   * @return {undefined}
   */
  function debug(type, value, title, text, data) {
    /** @type {string} */
    var i = "";
    if (null != title) {
      /** @type {string} */
      i = ("" + title).replace(REGEX_ESCAPE_EXPR, "$&/") + "/";
    }
    value = add(value, i, text, data);
    error(type, load, value);
    append(value);
  }
  /**
   * @param {!Object} message
   * @param {undefined} context
   * @return {?}
   */
  function destroyDebuggerForContext(message, context) {
    /** @type {null} */
    var instance = ReactCurrentOwner.currentDispatcher;
    return null === instance && get("277"), instance.readContext(message, context);
  }
  var assign = require(9);
  /** @type {(boolean|function(string): (?|undefined))} */
  var k = "function" === typeof Symbol && Symbol.for;
  var REACT_ELEMENT_TYPE = k ? Symbol.for("react.element") : 60103;
  var count_exact = k ? Symbol.for("react.portal") : 60106;
  var Fragment = k ? Symbol.for("react.fragment") : 60107;
  var a = k ? Symbol.for("react.strict_mode") : 60108;
  var v = k ? Symbol.for("react.profiler") : 60114;
  var TYPE_SYMBOL = k ? Symbol.for("react.provider") : 60109;
  var zsign = k ? Symbol.for("react.context") : 60110;
  var elementsToRemove = k ? Symbol.for("react.async_mode") : 60111;
  var d = k ? Symbol.for("react.forward_ref") : 60112;
  if (k) {
    Symbol.for("react.placeholder");
  }
  var key = "function" === typeof Symbol && Symbol.iterator;
  var ReactNoopUpdateQueue = {
    isMounted : function() {
      return false;
    },
    enqueueForceUpdate : function() {
    },
    enqueueReplaceState : function() {
    },
    enqueueSetState : function() {
    }
  };
  var emptyObject = {};
  ReactComponent.prototype.isReactComponent = {};
  /**
   * @param {!Object} callback
   * @param {undefined} now
   * @return {undefined}
   */
  ReactComponent.prototype.setState = function(callback, now) {
    if ("object" !== typeof callback && "function" !== typeof callback && null != callback) {
      get("85");
    }
    this.updater.enqueueSetState(this, callback, now, "setState");
  };
  /**
   * @param {!Object} callback
   * @return {undefined}
   */
  ReactComponent.prototype.forceUpdate = function(callback) {
    this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
  };
  ComponentDummy.prototype = ReactComponent.prototype;
  var event = ReactPureComponent.prototype = new ComponentDummy;
  /** @type {function(!Object, !Object, ?): undefined} */
  event.constructor = ReactPureComponent;
  assign(event, ReactComponent.prototype);
  /** @type {boolean} */
  event.isPureReactComponent = true;
  var ReactCurrentOwner = {
    current : null,
    currentDispatcher : null
  };
  /** @type {function(this:Object, *): boolean} */
  var has = Object.prototype.hasOwnProperty;
  var RESERVED_PROPS = {
    key : true,
    ref : true,
    __self : true,
    __source : true
  };
  /** @type {!RegExp} */
  var REGEX_ESCAPE_EXPR = /\/+/g;
  /** @type {!Array} */
  var deadPool = [];
  var xmlJSON = {
    Children : {
      map : function(array, html, args) {
        if (null == array) {
          return array;
        }
        /** @type {!Array} */
        var video = [];
        return debug(array, video, null, html, args), video;
      },
      forEach : function(self, value, data) {
        if (null == self) {
          return self;
        }
        value = add(null, null, value, data);
        error(self, search, value);
        append(value);
      },
      count : function(f) {
        return error(f, function() {
          return null;
        }, null);
      },
      toArray : function(key) {
        /** @type {!Array} */
        var value = [];
        return debug(key, value, null, function(i) {
          return i;
        }), value;
      },
      only : function(obj) {
        return isValidElement(obj) || get("143"), obj;
      }
    },
    createRef : function() {
      return {
        current : null
      };
    },
    Component : ReactComponent,
    PureComponent : ReactPureComponent,
    createContext : function(context, name) {
      return void 0 === name && (name = null), context = {
        $$typeof : zsign,
        _calculateChangedBits : name,
        _currentValue : context,
        _currentValue2 : context,
        Provider : null,
        Consumer : null,
        unstable_read : null
      }, context.Provider = {
        $$typeof : TYPE_SYMBOL,
        _context : context
      }, context.Consumer = context, context.unstable_read = destroyDebuggerForContext.bind(null, context), context;
    },
    forwardRef : function(forwardRefFn) {
      return {
        $$typeof : d,
        render : forwardRefFn
      };
    },
    Fragment : Fragment,
    StrictMode : a,
    unstable_AsyncMode : elementsToRemove,
    unstable_Profiler : v,
    createElement : render,
    cloneElement : function(element, props, children) {
      if (null === element || void 0 === element) {
        get("267", element);
      }
      var index = void 0;
      var data = assign({}, element.props);
      var a = element.key;
      var ref = element.ref;
      var owner = element._owner;
      if (null != props) {
        if (void 0 !== props.ref) {
          ref = props.ref;
          /** @type {null} */
          owner = ReactCurrentOwner.current;
        }
        if (void 0 !== props.key) {
          /** @type {string} */
          a = "" + props.key;
        }
        var arr = void 0;
        if (element.type && element.type.defaultProps) {
          arr = element.type.defaultProps;
        }
        for (index in props) {
          if (has.call(props, index) && !RESERVED_PROPS.hasOwnProperty(index)) {
            data[index] = void 0 === props[index] && void 0 !== arr ? arr[index] : props[index];
          }
        }
      }
      if (1 === (index = arguments.length - 2)) {
        /** @type {!Array} */
        data.children = children;
      } else {
        if (1 < index) {
          /** @type {!Array} */
          arr = Array(index);
          /** @type {number} */
          var i = 0;
          for (; i < index; i++) {
            arr[i] = arguments[i + 2];
          }
          /** @type {!Array} */
          data.children = arr;
        }
      }
      return {
        $$typeof : REACT_ELEMENT_TYPE,
        type : element.type,
        key : a,
        ref : ref,
        props : data,
        _owner : owner
      };
    },
    createFactory : function(name) {
      var func = render.bind(null, name);
      return func.type = name, func;
    },
    isValidElement : isValidElement,
    version : "16.5.2",
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED : {
      ReactCurrentOwner : ReactCurrentOwner,
      assign : assign
    }
  };
  var xml = {
    default : xmlJSON
  };
  var DayPicker = xml && xmlJSON || xml;
  module.exports = DayPicker.default || DayPicker;
}, function(canCreateDiscussions, defaultTagAttributes, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} call
   * @param {string} value
   * @return {?}
   */
  function _possibleConstructorReturn(call, value) {
    if (!call) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" !== typeof value && "function" !== typeof value ? call : value;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__), __webpack_require__(22));
  var self = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__);
  var c = __webpack_require__(23);
  __webpack_require__(15);
  defaultTagAttributes.a = function() {
    var colors;
    var item = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "store";
    var start = arguments[1];
    var i = start || item + "Subscription";
    var Provider = function(_Component) {
      /**
       * @param {!Object} props
       * @param {?} context
       * @return {?}
       */
      function Provider(props, context) {
        _classCallCheck(this, Provider);
        var obj = _possibleConstructorReturn(this, _Component.call(this, props, context));
        return obj[item] = props.store, obj;
      }
      return _inherits(Provider, _Component), Provider.prototype.getChildContext = function() {
        var newItemList;
        return newItemList = {}, newItemList[item] = this[item], newItemList[i] = null, newItemList;
      }, Provider.prototype.render = function() {
        return __WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Children.only(this.props.children);
      }, Provider;
    }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
    return Provider.propTypes = {
      store : c.a.isRequired,
      children : self.a.element.isRequired
    }, Provider.childContextTypes = (colors = {}, colors[item] = c.a.isRequired, colors[i] = c.b, colors), Provider;
  }();
}, function(mixin, canCreateDiscussions, floor) {
  /**
   * @return {undefined}
   */
  function emptyFunction() {
  }
  var startYNew = floor(59);
  /**
   * @return {?}
   */
  mixin.exports = function() {
    /**
     * @param {string} name
     * @param {!Function} value
     * @param {!Object} data
     * @param {!Object} prop
     * @param {!Object} index
     * @param {!Object} store
     * @return {undefined}
     */
    function check(name, value, data, prop, index, store) {
      if (store !== startYNew) {
        /** @type {!Error} */
        var backtrace = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw backtrace.name = "Invariant Violation", backtrace;
      }
    }
    /**
     * @return {?}
     */
    function getShim() {
      return check;
    }
    /** @type {function(string, !Function, !Object, !Object, !Object, !Object): undefined} */
    check.isRequired = check;
    var ReactPropTypes = {
      array : check,
      bool : check,
      func : check,
      number : check,
      object : check,
      string : check,
      symbol : check,
      any : check,
      arrayOf : getShim,
      element : check,
      instanceOf : getShim,
      node : check,
      objectOf : getShim,
      oneOf : getShim,
      oneOfType : getShim,
      shape : getShim,
      exact : getShim
    };
    return ReactPropTypes.checkPropTypes = emptyFunction, ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
  };
}, function(mixin, canCreateDiscussions, n) {
  /** @type {string} */
  mixin.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, function(candidate, canCreateDiscussions, n) {
  /**
   * @param {string} name
   * @param {!Function} obj
   * @param {string} data
   * @return {?}
   */
  function set(name, obj, data) {
    if ("string" !== typeof obj) {
      if (previousPanel) {
        /** @type {(Object|null)} */
        var p = getProto(obj);
        if (p && p !== previousPanel) {
          set(name, p, data);
        }
      }
      /** @type {!Array<string>} */
      var names = ownNames(obj);
      if (ownSymbols) {
        /** @type {!Array<?>} */
        names = names.concat(ownSymbols(obj));
      }
      /** @type {number} */
      var i = 0;
      for (; i < names.length; ++i) {
        var key = names[i];
        if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!data || !data[key])) {
          /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
          var desc = getDesc(obj, key);
          try {
            defineProperty(name, key, desc);
          } catch (e) {
          }
        }
      }
      return name;
    }
    return name;
  }
  var REACT_STATICS = {
    childContextTypes : true,
    contextTypes : true,
    defaultProps : true,
    displayName : true,
    getDefaultProps : true,
    getDerivedStateFromProps : true,
    mixins : true,
    propTypes : true,
    type : true
  };
  var KNOWN_STATICS = {
    name : true,
    length : true,
    prototype : true,
    caller : true,
    callee : true,
    arguments : true,
    arity : true
  };
  /** @type {function(!Object, string, !Object): !Object} */
  var defineProperty = Object.defineProperty;
  /** @type {function(!Object): !Array<string>} */
  var ownNames = Object.getOwnPropertyNames;
  /** @type {function(!Object): !Array<?>} */
  var ownSymbols = Object.getOwnPropertySymbols;
  /** @type {function(T, string): (ObjectPropertyDescriptor<T>|undefined)} */
  var getDesc = Object.getOwnPropertyDescriptor;
  /** @type {function(!Object): (Object|null)} */
  var getProto = Object.getPrototypeOf;
  /** @type {(Object|null)} */
  var previousPanel = getProto && getProto(Object);
  /** @type {function(string, !Function, string): ?} */
  candidate.exports = set;
}, function(task, canCreateDiscussions, n) {
  /**
   * @param {string} name
   * @param {?} data
   * @param {!Object} n
   * @param {!Object} k
   * @param {!Object} a
   * @param {!Object} b
   * @param {?} e
   * @param {?} f
   * @return {undefined}
   */
  var r = function(name, data, n, k, a, b, e, f) {
    if (!name) {
      var error;
      if (void 0 === data) {
        /** @type {!Error} */
        error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      } else {
        /** @type {!Array} */
        var arr = [n, k, a, b, e, f];
        /** @type {number} */
        var L = 0;
        /** @type {!Error} */
        error = new Error(data.replace(/%s/g, function() {
          return arr[L++];
        }));
        /** @type {string} */
        error.name = "Invariant Violation";
      }
      throw error.framesToPop = 1, error;
    }
  };
  /** @type {function(string, ?, !Object, !Object, !Object, !Object, ?, ?): undefined} */
  task.exports = r;
}, function(canCreateDiscussions, n, value) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @return {?}
   */
  function createListenerCollection() {
    /** @type {!Array} */
    var e = [];
    /** @type {!Array} */
    var result = [];
    return {
      clear : function() {
        /** @type {null} */
        result = undefined;
        /** @type {null} */
        e = undefined;
      },
      notify : function() {
        var releases = e = result;
        /** @type {number} */
        var i = 0;
        for (; i < releases.length; i++) {
          releases[i]();
        }
      },
      get : function() {
        return result;
      },
      subscribe : function(name) {
        /** @type {boolean} */
        var d = true;
        return result === e && (result = e.slice()), result.push(name), function() {
          if (d && e !== undefined) {
            /** @type {boolean} */
            d = false;
            if (result === e) {
              result = e.slice();
            }
            result.splice(result.indexOf(name), 1);
          }
        };
      }
    };
  }
  value.d(n, "a", function() {
    return u;
  });
  /** @type {null} */
  var undefined = null;
  var nullListeners = {
    notify : function() {
    }
  };
  var u = function() {
    /**
     * @param {!Storage} store
     * @param {?} parentSub
     * @param {!Function} onStateChange
     * @return {undefined}
     */
    function Subscription(store, parentSub, onStateChange) {
      _classCallCheck(this, Subscription);
      /** @type {!Storage} */
      this.store = store;
      this.parentSub = parentSub;
      /** @type {!Function} */
      this.onStateChange = onStateChange;
      /** @type {null} */
      this.unsubscribe = null;
      this.listeners = nullListeners;
    }
    return Subscription.prototype.addNestedSub = function(type) {
      return this.trySubscribe(), this.listeners.subscribe(type);
    }, Subscription.prototype.notifyNestedSubs = function() {
      this.listeners.notify();
    }, Subscription.prototype.isSubscribed = function() {
      return Boolean(this.unsubscribe);
    }, Subscription.prototype.trySubscribe = function() {
      if (!this.unsubscribe) {
        this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
        this.listeners = createListenerCollection();
      }
    }, Subscription.prototype.tryUnsubscribe = function() {
      if (this.unsubscribe) {
        this.unsubscribe();
        /** @type {null} */
        this.unsubscribe = null;
        this.listeners.clear();
        this.listeners = nullListeners;
      }
    }, Subscription;
  }();
}, function(canCreateDiscussions, defaultTagAttributes, __webpack_require__) {
  /**
   * @param {!Object} obj
   * @param {!Array} keys
   * @return {?}
   */
  function _objectWithoutProperties(obj, keys) {
    var target = {};
    var key;
    for (key in obj) {
      if (!(keys.indexOf(key) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          target[key] = obj[key];
        }
      }
    }
    return target;
  }
  /**
   * @param {?} arg
   * @param {!NodeList} factories
   * @param {string} name
   * @return {?}
   */
  function match(arg, factories, name) {
    /** @type {number} */
    var i = factories.length - 1;
    for (; i >= 0; i--) {
      var match = factories[i](arg);
      if (match) {
        return match;
      }
    }
    return function(canCreateDiscussions, options) {
      throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
    };
  }
  /**
   * @param {?} pathFrom
   * @param {?} railTo
   * @return {?}
   */
  function tryIntersect(pathFrom, railTo) {
    return pathFrom === railTo;
  }
  var __WEBPACK_LABELED_MODULE__3 = __webpack_require__(24);
  var events = __webpack_require__(64);
  var s = __webpack_require__(65);
  var clonedI = __webpack_require__(80);
  var c = __webpack_require__(81);
  var event = __webpack_require__(82);
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var _extends = Object.assign || function(name) {
    /** @type {number} */
    var index = 1;
    for (; index < arguments.length; index++) {
      var options = arguments[index];
      var option;
      for (option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option)) {
          name[option] = options[option];
        }
      }
    }
    return name;
  };
  defaultTagAttributes.a = function() {
    var _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var callback = _ref.connectHOC;
    var f = void 0 === callback ? __WEBPACK_LABELED_MODULE__3.a : callback;
    var _ref$mapStateToPropsF = _ref.mapStateToPropsFactories;
    var mapStateToPropsFactories = void 0 === _ref$mapStateToPropsF ? clonedI.a : _ref$mapStateToPropsF;
    var _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories;
    var mapDispatchToPropsFactories = void 0 === _ref$mapDispatchToPro ? s.a : _ref$mapDispatchToPro;
    var _ref$mergePropsFactor = _ref.mergePropsFactories;
    var mergePropsFactories = void 0 === _ref$mergePropsFactor ? c.a : _ref$mergePropsFactor;
    var undefined = _ref.selectorFactory;
    var w = void 0 === undefined ? event.a : undefined;
    return function(mapStateToProps, mapDispatchToProps, mergeProps) {
      var _ref2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      var _ref2$pure = _ref2.pure;
      var pure = void 0 === _ref2$pure || _ref2$pure;
      var key = _ref2.areStatesEqual;
      var newElKey = void 0 === key ? tryIntersect : key;
      var _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual;
      var areOwnPropsEqual = void 0 === _ref2$areOwnPropsEqua ? events.a : _ref2$areOwnPropsEqua;
      var b = _ref2.areStatePropsEqual;
      var p1 = void 0 === b ? events.a : b;
      var _ref2$areMergedPropsE = _ref2.areMergedPropsEqual;
      var areMergedPropsEqual = void 0 === _ref2$areMergedPropsE ? events.a : _ref2$areMergedPropsE;
      var options = _objectWithoutProperties(_ref2, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);
      var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, "mapStateToProps");
      var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, "mapDispatchToProps");
      var initMergeProps = match(mergeProps, mergePropsFactories, "mergeProps");
      return f(w, _extends({
        methodName : "connect",
        getDisplayName : function(name) {
          return "Connect(" + name + ")";
        },
        shouldHandleStateChanges : Boolean(mapStateToProps),
        initMapStateToProps : initMapStateToProps,
        initMapDispatchToProps : initMapDispatchToProps,
        initMergeProps : initMergeProps,
        pure : pure,
        areStatesEqual : newElKey,
        areOwnPropsEqual : areOwnPropsEqual,
        areStatePropsEqual : p1,
        areMergedPropsEqual : areMergedPropsEqual
      }, options));
    };
  }();
}, function(canCreateDiscussions, bridge, n) {
  /**
   * @param {?} a
   * @param {?} b
   * @return {?}
   */
  function add(a, b) {
    return a === b ? 0 !== a || 0 !== b || 1 / a === 1 / b : a !== a && b !== b;
  }
  /**
   * @param {string} name
   * @param {string} obj
   * @return {?}
   */
  function action(name, obj) {
    if (add(name, obj)) {
      return true;
    }
    if ("object" !== typeof name || null === name || "object" !== typeof obj || null === obj) {
      return false;
    }
    /** @type {!Array<string>} */
    var names = Object.keys(name);
    /** @type {!Array<string>} */
    var otherNames = Object.keys(obj);
    if (names.length !== otherNames.length) {
      return false;
    }
    /** @type {number} */
    var i = 0;
    for (; i < names.length; i++) {
      if (!hasOwn.call(obj, names[i]) || !add(name[names[i]], obj[names[i]])) {
        return false;
      }
    }
    return true;
  }
  /** @type {function(string, string): ?} */
  bridge.a = action;
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = Object.prototype.hasOwnProperty;
}, function(canCreateDiscussions, exports, $) {
  /**
   * @param {?} value
   * @return {?}
   */
  function forEach(value) {
    return "function" === typeof value ? Object(self.b)(value, "mapDispatchToProps") : void 0;
  }
  /**
   * @param {boolean} mapDispatchToProps
   * @return {?}
   */
  function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
    return mapDispatchToProps ? void 0 : Object(self.a)(function(dispatch) {
      return {
        dispatch : dispatch
      };
    });
  }
  /**
   * @param {boolean} value
   * @return {?}
   */
  function isObject(value) {
    return value && "object" === typeof value ? Object(self.a)(function(mmCoreSplitViewBlock) {
      return Object(opt.b)(value, mmCoreSplitViewBlock);
    }) : void 0;
  }
  var opt = $(16);
  var self = $(29);
  /** @type {!Array} */
  exports.a = [forEach, whenMapDispatchToPropsIsMissing, isObject];
}, function(canCreateDiscussions, source, $) {
  /**
   * @param {?} name
   * @return {?}
   */
  function encode(name) {
    return null == name ? void 0 === name ? args : autoExpandedName : symToStringTag && symToStringTag in Object(name) ? Object(self.a)(name) : Object(e.a)(name);
  }
  var x = $(26);
  var self = $(69);
  var e = $(70);
  /** @type {string} */
  var autoExpandedName = "[object Null]";
  /** @type {string} */
  var args = "[object Undefined]";
  var symToStringTag = x.a ? x.a.toStringTag : void 0;
  /** @type {function(?): ?} */
  source.a = encode;
}, function(canCreateDiscussions, C, getArgument) {
  var desc = getArgument(68);
  /** @type {(Window|boolean)} */
  var freeSelf = "object" == typeof self && self && self.Object === Object && self;
  var sx = desc.a || freeSelf || Function("return this")();
  C.a = sx;
}, function(canCreateDiscussions, result, moment) {
  (function(global) {
    var n = "object" == typeof global && global && global.Object === Object && global;
    result.a = n;
  }).call(result, moment(14));
}, function(canCreateDiscussions, encoded, Clazz_doubleToInt) {
  /**
   * @param {string} name
   * @return {?}
   */
  function value(name) {
    /** @type {boolean} */
    var groupKey = hasOwn.call(name, key);
    var value = name[key];
    try {
      name[key] = void 0;
      /** @type {boolean} */
      var ba = true;
    } catch (e) {
    }
    /** @type {string} */
    var b = objectToString$2.call(name);
    return ba && (groupKey ? name[key] = value : delete name[key]), b;
  }
  var x = Clazz_doubleToInt(26);
  var objectProto$7 = Object.prototype;
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = objectProto$7.hasOwnProperty;
  /** @type {function(this:*): string} */
  var objectToString$2 = objectProto$7.toString;
  var key = x.a ? x.a.toStringTag : void 0;
  /** @type {function(string): ?} */
  encoded.a = value;
}, function(canCreateDiscussions, encoded, n) {
  /**
   * @param {string} name
   * @return {?}
   */
  function value(name) {
    return objectToString$2.call(name);
  }
  var objectProto$7 = Object.prototype;
  /** @type {function(this:*): string} */
  var objectToString$2 = objectProto$7.toString;
  /** @type {function(string): ?} */
  encoded.a = value;
}, function(canCreateDiscussions, neighbor, $) {
  var self = $(72);
  var node = Object(self.a)(Object.getPrototypeOf, Object);
  neighbor.a = node;
}, function(canCreateDiscussions, global, n) {
  /**
   * @param {string} name
   * @param {!Function} callback
   * @return {?}
   */
  function define(name, callback) {
    return function(o) {
      return name(callback(o));
    };
  }
  /** @type {function(string, !Function): ?} */
  global.a = define;
}, function(canCreateDiscussions, encoded, n) {
  /**
   * @param {string} name
   * @return {?}
   */
  function value(name) {
    return null != name && "object" == typeof name;
  }
  /** @type {function(string): ?} */
  encoded.a = value;
}, function(html, slot, require) {
  (function(fromCenter, autoResize) {
    var c_export;
    var pkg = require(76);
    c_export = "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof fromCenter ? fromCenter : autoResize;
    var a = Object(pkg.a)(c_export);
    slot.a = a;
  }).call(slot, require(14), require(75)(html));
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {string} name
   * @return {?}
   */
  mixin.exports = function(name) {
    if (!name.webpackPolyfill) {
      /** @type {!Object} */
      var module = Object.create(name);
      if (!module.children) {
        /** @type {!Array} */
        module.children = [];
      }
      Object.defineProperty(module, "loaded", {
        enumerable : true,
        get : function() {
          return module.l;
        }
      });
      Object.defineProperty(module, "id", {
        enumerable : true,
        get : function() {
          return module.i;
        }
      });
      Object.defineProperty(module, "exports", {
        enumerable : true
      });
      /** @type {number} */
      module.webpackPolyfill = 1;
    }
    return module;
  };
}, function(canCreateDiscussions, defaultTagAttributes, n) {
  /**
   * @param {string} name
   * @return {?}
   */
  function symbolObservablePonyfill(name) {
    var result;
    var _Symbol = name.Symbol;
    return "function" === typeof _Symbol ? _Symbol.observable ? result = _Symbol.observable : (result = _Symbol("observable"), _Symbol.observable = result) : result = "@@observable", result;
  }
  /** @type {function(string): ?} */
  defaultTagAttributes.a = symbolObservablePonyfill;
}, function(canCreateDiscussions, fn, $) {
  /**
   * @param {string} _
   * @param {!Object} t
   * @return {?}
   */
  function callback(_, t) {
    var r = t && t.type;
    return "Given action " + (r && '"' + r.toString() + '"' || "an action") + ', reducer "' + _ + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
  }
  /**
   * @param {!Object} reducers
   * @return {undefined}
   */
  function combineReducers(reducers) {
    Object.keys(reducers).forEach(function(key) {
      var reducer = reducers[key];
      if ("undefined" === typeof reducer(void 0, {
        type : self.a.INIT
      })) {
        throw new Error('Reducer "' + key + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
      }
      if ("undefined" === typeof reducer(void 0, {
        type : "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
      })) {
        throw new Error('Reducer "' + key + "\" returned undefined when probed with a random type. Don't try to handle " + self.a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
      }
    });
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function factory(name) {
    /** @type {!Array<string>} */
    var okeys = Object.keys(name);
    var reducers = {};
    /** @type {number} */
    var i = 0;
    for (; i < okeys.length; i++) {
      /** @type {string} */
      var key = okeys[i];
      if ("function" === typeof name[key]) {
        reducers[key] = name[key];
      }
    }
    /** @type {!Array<string>} */
    var reducerKeys = Object.keys(reducers);
    var s = void 0;
    try {
      combineReducers(reducers);
    } catch (seocounter_meta) {
      s = seocounter_meta;
    }
    return function() {
      var resMap = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var expr = arguments[1];
      if (s) {
        throw s;
      }
      /** @type {boolean} */
      var anyChildChanged = false;
      var params_mapping = {};
      /** @type {number} */
      var i = 0;
      for (; i < reducerKeys.length; i++) {
        /** @type {string} */
        var key = reducerKeys[i];
        var fn = reducers[key];
        var child = resMap[key];
        var ret = fn(child, expr);
        if ("undefined" === typeof ret) {
          var res = callback(key, expr);
          throw new Error(res);
        }
        params_mapping[key] = ret;
        /** @type {boolean} */
        anyChildChanged = anyChildChanged || ret !== child;
      }
      return anyChildChanged ? params_mapping : resMap;
    };
  }
  /** @type {function(string): ?} */
  fn.a = factory;
  var self = $(25);
  $(17);
  $(27);
}, function(canCreateDiscussions, bridge, n) {
  /**
   * @param {(!Function|string)} target
   * @param {!Function} cb
   * @return {?}
   */
  function callback(target, cb) {
    return function() {
      return cb(target.apply(void 0, arguments));
    };
  }
  /**
   * @param {string} type
   * @param {!Function} data
   * @return {?}
   */
  function action(type, data) {
    if ("function" === typeof type) {
      return callback(type, data);
    }
    if ("object" !== typeof type || null === type) {
      throw new Error("bindActionCreators expected an object or a function, instead received " + (null === type ? "null" : typeof type) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    }
    /** @type {!Array<string>} */
    var s = Object.keys(type);
    var result = {};
    /** @type {number} */
    var i = 0;
    for (; i < s.length; i++) {
      /** @type {string} */
      var key = s[i];
      var obj = type[key];
      if ("function" === typeof obj) {
        result[key] = callback(obj, data);
      }
    }
    return result;
  }
  /** @type {function(string, !Function): ?} */
  bridge.a = action;
}, function(canCreateDiscussions, $rootScope, dselect) {
  /**
   * @return {?}
   */
  function prop() {
    /** @type {number} */
    var _len8 = arguments.length;
    /** @type {!Array} */
    var args = Array(_len8);
    /** @type {number} */
    var _key8 = 0;
    for (; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    return function(fn) {
      return function(r1, key, that) {
        var o = fn(r1, key, that);
        var callback = o.dispatch;
        /** @type {!Array} */
        var chain = [];
        var middlewareAPI = {
          getState : o.getState,
          dispatch : function(name) {
            return callback(name);
          }
        };
        return chain = args.map(function(middleware) {
          return middleware(middlewareAPI);
        }), callback = a.a.apply(void 0, chain)(o.dispatch), _extends({}, o, {
          dispatch : callback
        });
      };
    };
  }
  /** @type {function(): ?} */
  $rootScope.a = prop;
  var a = dselect(28);
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var _extends = Object.assign || function(name) {
    /** @type {number} */
    var index = 1;
    for (; index < arguments.length; index++) {
      var options = arguments[index];
      var option;
      for (option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option)) {
          name[option] = options[option];
        }
      }
    }
    return name;
  };
}, function(canCreateDiscussions, exports, $) {
  /**
   * @param {?} value
   * @return {?}
   */
  function forEach(value) {
    return "function" === typeof value ? Object(self.b)(value, "mapStateToProps") : void 0;
  }
  /**
   * @param {boolean} mapDispatchToProps
   * @return {?}
   */
  function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
    return mapDispatchToProps ? void 0 : Object(self.a)(function() {
      return {};
    });
  }
  var self = $(29);
  /** @type {!Array} */
  exports.a = [forEach, whenMapDispatchToPropsIsMissing];
}, function(canCreateDiscussions, p, saveNotifs) {
  /**
   * @param {?} g
   * @param {?} b
   * @param {?} r
   * @return {?}
   */
  function makeColorMaterial(g, b, r) {
    return updateNodeColor({}, r, g, b);
  }
  /**
   * @param {?} e
   * @return {?}
   */
  function fn(e) {
    return function(canCreateDiscussions, _ref) {
      var r = (_ref.displayName, _ref.pure);
      var t = _ref.areMergedPropsEqual;
      /** @type {boolean} */
      var xc = false;
      var a = void 0;
      return function(val, m, n) {
        var value = e(val, m, n);
        return xc ? r && t(value, a) || (a = value) : (xc = true, a = value), a;
      };
    };
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function formatError(value) {
    return "function" === typeof value ? fn(value) : void 0;
  }
  /**
   * @param {boolean} canCreateDiscussions
   * @return {?}
   */
  function prefetchGroupsInfo(canCreateDiscussions) {
    return canCreateDiscussions ? void 0 : function() {
      return makeColorMaterial;
    };
  }
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var updateNodeColor = (saveNotifs(30), Object.assign || function(name) {
    /** @type {number} */
    var index = 1;
    for (; index < arguments.length; index++) {
      var options = arguments[index];
      var option;
      for (option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option)) {
          name[option] = options[option];
        }
      }
    }
    return name;
  });
  /** @type {!Array} */
  p.a = [formatError, prefetchGroupsInfo];
}, function(canCreateDiscussions, exports, saveNotifs) {
  /**
   * @param {!Function} obj
   * @param {!Array} keys
   * @return {?}
   */
  function _objectWithoutProperties(obj, keys) {
    var target = {};
    var key;
    for (key in obj) {
      if (!(keys.indexOf(key) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          target[key] = obj[key];
        }
      }
    }
    return target;
  }
  /**
   * @param {?} mapDispatchToProps
   * @param {?} mergeProps
   * @param {?} dispatch
   * @param {string} name
   * @return {?}
   */
  function impureFinalPropsSelectorFactory(mapDispatchToProps, mergeProps, dispatch, name) {
    return function(store, props) {
      return dispatch(mapDispatchToProps(store, props), mergeProps(name, props), props);
    };
  }
  /**
   * @param {?} mapDispatchToProps
   * @param {?} mapStateToProps
   * @param {?} mergeProps
   * @param {string} state
   * @param {?} _ref
   * @return {?}
   */
  function pureFinalPropsSelectorFactory(mapDispatchToProps, mapStateToProps, mergeProps, state, _ref) {
    /**
     * @param {?} firstState
     * @param {!Object} firstOwnProps
     * @return {?}
     */
    function handleFirstCall(firstState, firstOwnProps) {
      return h = firstState, p = firstOwnProps, value = mapDispatchToProps(h, p), stateProps = mapStateToProps(state, p), result = mergeProps(value, stateProps, p), hasRunAtLeastOnce = true, result;
    }
    /**
     * @return {?}
     */
    function handleNewPropsAndNewState() {
      return value = mapDispatchToProps(h, p), mapStateToProps.dependsOnOwnProps && (stateProps = mapStateToProps(state, p)), result = mergeProps(value, stateProps, p);
    }
    /**
     * @return {?}
     */
    function handleNewProps() {
      return mapDispatchToProps.dependsOnOwnProps && (value = mapDispatchToProps(h, p)), mapStateToProps.dependsOnOwnProps && (stateProps = mapStateToProps(state, p)), result = mergeProps(value, stateProps, p);
    }
    /**
     * @return {?}
     */
    function handler() {
      var i = mapDispatchToProps(h, p);
      /** @type {boolean} */
      var remaining = !item(i, value);
      return value = i, remaining && (result = mergeProps(value, stateProps, p)), result;
    }
    /**
     * @param {?} nextState
     * @param {string} value
     * @return {?}
     */
    function handleSubsequentCalls(nextState, value) {
      /** @type {boolean} */
      var IFollowThem = !areOwnPropsEqual(value, p);
      /** @type {boolean} */
      var theyFollowMe = !areStatesEqual(nextState, h);
      return h = nextState, p = value, IFollowThem && theyFollowMe ? handleNewPropsAndNewState() : IFollowThem ? handleNewProps() : theyFollowMe ? handler() : result;
    }
    var areStatesEqual = _ref.areStatesEqual;
    var areOwnPropsEqual = _ref.areOwnPropsEqual;
    var item = _ref.areStatePropsEqual;
    /** @type {boolean} */
    var hasRunAtLeastOnce = false;
    var h = void 0;
    var p = void 0;
    var value = void 0;
    var stateProps = void 0;
    var result = void 0;
    return function(nextState, nextOwnProps) {
      return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
    };
  }
  /**
   * @param {string} name
   * @param {!Function} data
   * @return {?}
   */
  function finalPropsSelectorFactory(name, data) {
    var initMapStateToProps = data.initMapStateToProps;
    var require = data.initMapDispatchToProps;
    var initMergeProps = data.initMergeProps;
    var options = _objectWithoutProperties(data, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);
    var mapDispatchToProps = initMapStateToProps(name, options);
    var component = require(name, options);
    var mergeProps = initMergeProps(name, options);
    return (options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory)(mapDispatchToProps, component, mergeProps, name, options);
  }
  /** @type {function(string, !Function): ?} */
  exports.a = finalPropsSelectorFactory;
  saveNotifs(83);
}, function(canCreateDiscussions, isSlidingUp, saveNotifs) {
  saveNotifs(15);
}, function(canCreateDiscussions, defaultTagAttributes, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function register(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} value
   * @param {string} fn
   * @return {?}
   */
  function $(value, fn) {
    if (!value) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !fn || "object" !== typeof fn && "function" !== typeof fn ? value : fn;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!Object} self
   * @return {?}
   */
  function init(self) {
    return {
      can_draw : self.user.can_draw,
      online : self.user.online,
      channel_online : self.channel.online,
      admin : self.user.admin,
      image : self.user.image,
      first_time : self.user.first_time,
      show_header : self.user.show_header,
      group_wait : self.group.wait,
      updates : self.user.updates,
      default_ttl : self.user.default_ttl,
      loader : self.user.loader,
      cover_auto : self.group.auto_cover,
      groupId : self.group.id,
      chat : self.group.chat,
      chat_url : self.group.chat_url,
      show_chat_url : self.group.show_chat_url,
      wait_chat : self.group.wait_chat,
      good : self.group.good,
      mega : self.group.mega
    };
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(6);
  var s = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__);
  var __WEBPACK_LABELED_MODULE__3 = __webpack_require__(31);
  var _CommentBox = __webpack_require__(37);
  var _srcReactMotion = __webpack_require__(115);
  var _FilterableProductTable = __webpack_require__(39);
  var _kodo = __webpack_require__(40);
  var _Item2 = __webpack_require__(41);
  var b = __webpack_require__(120);
  var window = __webpack_require__(3);
  var _DraggableCore2 = __webpack_require__(42);
  var _todo2 = __webpack_require__(123);
  var defaultOptions = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__ = __webpack_require__(43);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__), __webpack_require__(44));
  var button = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__), __webpack_require__(13));
  var data = __webpack_require__(1);
  var d = __webpack_require__(8);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__ = __webpack_require__(126);
  var __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__), __webpack_require__(45));
  var _createClass = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__foundation_util_box__), function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }());
  var nodeA = function(_EventEmitter) {
    /**
     * @param {?} attrs
     * @param {?} options
     * @return {?}
     */
    function init(attrs, options) {
      register(this, init);
      var self = $(this, (init.__proto__ || Object.getPrototypeOf(init)).call(this, attrs, options));
      return self.canvas = null, self.ctx = null, self.init = false, self.original = null, self.originalCtx = null, self.topPadding = 150, self.leftPadding = 40, self.rightPadding = 365, self.bottomPadding = 300, self.x = 0, self.y = 0, self.mousePressed = false, self.w = 1590, self.h = 400, self.frameW = 1E3, self.frameH = 570, self.minZoom = 1, self.maxZoom = 50, self.canvasCreated = false, self.state = {
        color_id : 5,
        zoom : 2,
        zoomR : 2,
        grid : false,
        open_statistic : true,
        pointX : 0,
        pointY : 0,
        pixelSelected : false,
        showCursor : true
      }, self.onPixel = function(options) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        try {
          self.drawPixel(options.x, options.y, Object(data.c)()[options.color]);
          if (options.flush) {
            self.props.alertBadUser(options.x, options.y, options.user_id, options.group_id);
          }
          self.afterRender();
        } catch (n) {
          Object(data.e)(n);
          if (!t) {
            setTimeout(function() {
              self.onPixel(options, true);
            }, 500);
          }
        }
      }, self.state.color_id = Math.round(Math.random() * Object(data.c)().length - 2) + 2, self.x = -1 * Math.round(Math.random() * (self.w * self.state.zoom - self.frameW)), self.y = -1 * Math.round(Math.random() * (self.h * self.state.zoom - self.frameH)), self.original = document.createElement("canvas"), self.original.width = self.w, self.original.height = self.h, self.originalCtx = self.original.getContext("2d"), window.addEventListener("mouseup", function(event) {
        return self.onMouseUp(event);
      }), s.a.resize(self.frameW, self.frameH).then(function() {
      }), self;
    }
    return _inherits(init, _EventEmitter), _createClass(init, [{
      key : "componentWillUnmount",
      value : function() {
        this.props.channel.removeOnPixel(this.onPixel);
      }
    }, {
      key : "componentDidUpdate",
      value : function() {
        var self = this;
        if (this.canvas && !this.init) {
          /** @type {boolean} */
          this.init = true;
          this.ctx = this.canvas.getContext("2d");
          /** @type {boolean} */
          this.ctx.mozImageSmoothingEnabled = false;
          /** @type {boolean} */
          this.ctx.webkitImageSmoothingEnabled = false;
          /** @type {boolean} */
          this.ctx.msImageSmoothingEnabled = false;
          /** @type {boolean} */
          this.ctx.imageSmoothingEnabled = false;
          this.ctx.save();
          this.canvas.addEventListener("mousewheel", function(event) {
            event.stopPropagation();
            event.preventDefault();
            /** @type {number} */
            var collabId = -1 * event.deltaY / 50;
            var path = self.state.zoomR + collabId;
            if ((path = Object(data.b)(self.minZoom, path, self.maxZoom)) !== self.state.zoomR) {
              self.setZoomForPoint(path, event.clientX, event.clientY);
            }
          });
          this.createCanvas(this.props.image);
        } else {
          this.afterRender();
        }
      }
    }, {
      key : "setZoomForPoint",
      value : function(type, x, v) {
        /** @type {number} */
        var scale = Math.round(type);
        /** @type {number} */
        var fluxIn = scale * this.w;
        /** @type {number} */
        var dx = scale * this.h;
        /** @type {number} */
        var fluxOut = this.state.zoom * this.w;
        /** @type {number} */
        var dy = this.state.zoom * this.h;
        /** @type {number} */
        var dt = (x - this.x) / (this.w * this.state.zoom);
        /** @type {number} */
        var tRotateMix = (v - this.y) / (this.h * this.state.zoom);
        if (fluxIn > fluxOut) {
          this.x -= (fluxIn - fluxOut) * dt;
        } else {
          this.x += (fluxOut - fluxIn) * dt;
        }
        if (dx > dy) {
          this.y -= (dx - dy) * tRotateMix;
        } else {
          this.y += (dy - dx) * tRotateMix;
        }
        this.setState({
          zoom : scale,
          zoomR : type
        });
      }
    }, {
      key : "createCanvas",
      value : function() {
        var mainWin = this;
        if (this.props.image && !this.canvasCreated) {
          this.originalCtx.drawImage(this.props.image, 0, 0);
          this.props.updates.forEach(function(screen) {
            mainWin.drawPixel(screen.x, screen.y, "#" + screen.color);
          });
          this.props.channel.onPixel(this.onPixel);
          /** @type {boolean} */
          this.canvasCreated = true;
          this.afterRender();
        }
      }
    }, {
      key : "afterRender",
      value : function() {
        if (this.ctx && this.canvasCreated) {
          /** @type {string} */
          this.ctx.fillStyle = "#BCBCBC";
          this.ctx.fillRect(0, 0, this.frameW, this.frameH);
          this.ctx.drawImage(this.original, Math.round(this.x), Math.round(this.y), Math.round(this.w * this.state.zoom), Math.round(this.h * this.state.zoom));
        }
      }
    }, {
      key : "getPointInOrigin",
      value : function(name) {
        /** @type {number} */
        var sizeScale = (name.clientX - this.x) / (this.w * this.state.zoom);
        /** @type {number} */
        var ratio_width = (name.clientY - this.y) / (this.h * this.state.zoom);
        return {
          cx : Math.min(this.w - 1, Math.max(0, Math.round(this.w * sizeScale - .5))),
          cy : Math.min(this.h - 1, Math.max(0, Math.round(this.h * ratio_width - .5)))
        };
      }
    }, {
      key : "onMove",
      value : function(name) {
        var cbox = this.getPointInOrigin(name);
        if (!this.mousePressed) {
          return void(false === this.state.pixelSelected && this.setState({
            pointX : cbox.cx,
            pointY : cbox.cy,
            showCursor : true
          }));
        }
        /** @type {number} */
        var posX = name.clientX - this.startX;
        /** @type {number} */
        var posY = name.clientY - this.startY;
        if (posX !== this.x || posY !== this.y) {
          /** @type {number} */
          var h = this.h * this.state.zoom;
          /** @type {number} */
          var offset = this.w * this.state.zoom;
          var x = posX + this.startOriginX;
          var y = posY + this.startOriginY;
          /** @type {number} */
          var distance = this.frameH - (h + y);
          /** @type {number} */
          var delta = this.frameW - (offset + x);
          if (distance > 0 || y > 0) {
            /** @type {boolean} */
            var c = y > 0 && (y > this.topPadding && y <= this.y || y < this.topPadding) || y < 0;
            /** @type {boolean} */
            var show_decimals = distance > 0 && (distance > this.bottomPadding && y >= this.y || !(distance > this.bottomPadding)) || distance < 0;
            if (c && show_decimals) {
              this.y = y;
            } else {
              if (distance > 0 && distance > this.bottomPadding && y < this.y) {
                /** @type {number} */
                this.y = this.frameH - h - this.bottomPadding;
              }
              if (y > 0 && y > this.bottomPadding && y > this.y) {
                this.y = this.topPadding;
              }
            }
          } else {
            this.y = y;
          }
          if (x > 0 || delta > 0) {
            /** @type {boolean} */
            var ADVANCED_SEARCH_TYPEAHEAD = x > 0 && (x > this.leftPadding && x <= this.x || x < this.leftPadding);
            /** @type {boolean} */
            ADVANCED_SEARCH_TYPEAHEAD = ADVANCED_SEARCH_TYPEAHEAD || x < 0;
            /** @type {boolean} */
            var polar = delta > 0 && (delta > this.rightPadding && x >= this.x || delta < this.rightPadding);
            /** @type {boolean} */
            polar = polar || delta < 0;
            if (ADVANCED_SEARCH_TYPEAHEAD && polar) {
              this.x = x;
            } else {
              if (x > 0 && x > this.leftPadding && x > this.x) {
                this.x = this.leftPadding;
              }
              if (delta > 0 && delta > this.rightPadding && x < this.x) {
                /** @type {number} */
                this.x = this.frameW - offset - this.rightPadding;
              }
            }
          } else {
            this.x = x;
          }
          if (Object(data.a)(name.clientX - this.startX) + Object(data.a)(name.clientY - this.startY) > 10) {
            /** @type {boolean} */
            this.lockClick = true;
          }
          if (false === this.state.pixelSelected) {
            this.setState({
              pointX : cbox.cx,
              pointY : cbox.cy,
              showCursor : true
            });
          } else {
            this.setState({
              x : this.x,
              y : this.y
            });
          }
        }
      }
    }, {
      key : "onMouseUp",
      value : function(name) {
        /** @type {boolean} */
        this.mousePressed = false;
      }
    }, {
      key : "onMouseDown",
      value : function(name) {
        /** @type {boolean} */
        this.mousePressed = true;
        this.startX = name.clientX;
        this.startY = name.clientY;
        this.startOriginX = this.x;
        this.startOriginY = this.y;
        /** @type {boolean} */
        this.lockClick = false;
      }
    }, {
      key : "onClick",
      value : function(name) {
        var that = this;
        if (name.isTrusted && !this.lockClick && this.props.can_draw) {
          var cbox = this.getPointInOrigin(name);
          if (this.setState({
            pointX : cbox.cx,
            pointY : cbox.cy,
            pixelSelected : true
          }), this.props.good) {
            if (this.props.mega) {
              var m = this.state;
              var x = m.pointX;
              var y = m.pointY;
              var moduleDefinitions = Object(data.c)();
              if (x > 0) {
                setTimeout(function() {
                  that.drawPixel(x - 1, y, moduleDefinitions[that.state.color_id - 1]);
                  that.props.setPixel(x - 1, y, that.state.color_id - 1, that.props.channel);
                }, 9E3 * Math.random() + 100);
              }
              if (x < this.w - 1) {
                setTimeout(function() {
                  that.drawPixel(x + 1, y, moduleDefinitions[that.state.color_id - 1]);
                  that.props.setPixel(x + 1, y, that.state.color_id - 1, that.props.channel);
                }, 9E3 * Math.random() + 100);
              }
              if (y > 0) {
                setTimeout(function() {
                  that.drawPixel(x, y - 1, moduleDefinitions[that.state.color_id - 1]);
                  that.props.setPixel(x, y - 1, that.state.color_id - 1, that.props.channel);
                }, 9E3 * Math.random() + 100);
              }
              if (y < this.h - 1) {
                setTimeout(function() {
                  that.drawPixel(x, y + 1, moduleDefinitions[that.state.color_id - 1]);
                  that.props.setPixel(x, y + 1, that.state.color_id - 1, that.props.channel);
                }, 9E3 * Math.random() + 100);
              }
              if (y > 0 && x > 0) {
                setTimeout(function() {
                  that.drawPixel(x - 1, y - 1, moduleDefinitions[that.state.color_id - 1]);
                  that.props.setPixel(x - 1, y - 1, that.state.color_id - 1, that.props.channel);
                }, 9E3 * Math.random() + 100);
              }
              if (y < this.h - 1 && x < this.w - 1) {
                setTimeout(function() {
                  that.drawPixel(x + 1, y + 1, moduleDefinitions[that.state.color_id - 1]);
                  that.props.setPixel(x + 1, y + 1, that.state.color_id - 1, that.props.channel);
                }, 9E3 * Math.random() + 100);
              }
              if (y > 0 && x < this.w - 1) {
                setTimeout(function() {
                  that.drawPixel(x + 1, y - 1, moduleDefinitions[that.state.color_id - 1]);
                  that.props.setPixel(x + 1, y - 1, that.state.color_id - 1, that.props.channel);
                }, 9E3 * Math.random() + 100);
              }
              if (y < this.h - 1 && x > 0) {
                setTimeout(function() {
                  that.drawPixel(x - 1, y + 1, moduleDefinitions[that.state.color_id - 1]);
                  that.props.setPixel(x - 1, y + 1, that.state.color_id - 1, that.props.channel);
                }, 9E3 * Math.random() + 100);
              }
              this.setState({
                pixelSelected : false,
                showCursor : false
              });
              this.createPixel(name);
            } else {
              this.setState({
                pixelSelected : false,
                showCursor : false
              });
              this.createPixel(name);
            }
          }
        }
      }
    }, {
      key : "getCursorX",
      value : function() {
        return this.state.pointX * this.state.zoom + this.x;
      }
    }, {
      key : "getCursorY",
      value : function() {
        return this.state.pointY * this.state.zoom + this.y;
      }
    }, {
      key : "createPixel",
      value : function(name) {
        if (name.isTrusted) {
          var e = this.state;
          var x = e.pointX;
          var i = e.pointY;
          var o = Object(data.c)();
          this.drawPixel(x, i, o[this.state.color_id - 1]);
          this.props.setPixel(x, i, this.state.color_id - 1, this.props.channel);
          this.setState({
            pixelSelected : false,
            showCursor : false
          });
        }
      }
    }, {
      key : "drawPixel",
      value : function(name, x, value) {
        /** @type {string} */
        this.originalCtx.fillStyle = value;
        this.originalCtx.fillRect(name, x, 1, 1);
      }
    }, {
      key : "onChangeColor",
      value : function(name) {
        this.setState({
          color_id : name
        });
      }
    }, {
      key : "dropFirstLoader",
      value : function() {
        this.props.setFirstTime();
      }
    }, {
      key : "renderBottomBar",
      value : function() {
        var $scope = this;
        return this.props.channel_online ? this.props.can_draw ? this.state.pixelSelected ? row.a.createElement("div", {
          className : "App__confirm"
        }, row.a.createElement("button", {
          onClick : function(name) {
            return $scope.createPixel(name);
          },
          className : "blue"
        }, defaultOptions.a.t("put_point")), row.a.createElement("button", {
          onClick : function() {
            return $scope.setState({
              pixelSelected : false
            });
          },
          className : "red"
        }, defaultOptions.a.t("cancel"))) : row.a.createElement(__WEBPACK_LABELED_MODULE__3.a, {
          onChangeColor : function(color) {
            return $scope.onChangeColor(color);
          },
          selectedColorId : this.state.color_id
        }) : Object(data.g)() ? void 0 : row.a.createElement(_Item2.a, {
          defaultTtl : this.props.default_ttl
        }) : row.a.createElement(_Item2.a, {
          offline : true
        });
      }
    }, {
      key : "render",
      value : function() {
        var _this = this;
        var that = this.props;
        var malakh = that.show_header;
        var input = that.can_draw;
        var doc = that.admin;
        var title = that.group_wait;
        var active = that.loader;
        var text = that.chat;
        var id = that.groupId;
        var horizontal = that.first_time;
        var sizeValidators = {
          width : this.frameW + "px",
          height : this.frameH + "px"
        };
        return active || horizontal ? row.a.createElement("div", {
          className : "App App--loading",
          style : sizeValidators
        }, row.a.createElement("div", {
          className : "App__advance"
        }, row.a.createElement("div", {
          className : "App__logo"
        }), row.a.createElement("div", {
          className : "sub-header"
        }, defaultOptions.a.t("pixel_battle")), row.a.createElement("div", {
          className : "header"
        }, defaultOptions.a.t("description")), active ? row.a.createElement("div", {
          className : "progress-bar"
        }, row.a.createElement("div", {
          className : "progress-bar-fill"
        })) : null, !active && horizontal && row.a.createElement(__WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__.Button, {
          onClick : function(name) {
            return _this.dropFirstLoader(name);
          }
        }, defaultOptions.a.t("continue")))) : row.a.createElement("div", {
          className : "App",
          style : sizeValidators
        }, row.a.createElement(_srcReactMotion.a, null), malakh || Object(data.g)() ? row.a.createElement(b.a, {
          onClose : function() {
            return _this.props.dropHeader();
          },
          end : Object(data.g)(),
          groupId : id,
          chat : text
        }) : null, row.a.createElement("canvas", {
          onMouseDown : function(evt) {
            return _this.onMouseDown(evt);
          },
          onMouseUp : function(event) {
            return _this.onMouseUp(event);
          },
          onMouseMove : function(event) {
            return _this.onMove(event);
          },
          onClick : function(name) {
            return _this.onClick(name);
          },
          width : this.frameW,
          height : this.frameH,
          className : input ? "drawer" : "lock",
          ref : function(name) {
            return _this.canvas = name;
          }
        }), input && this.state.showCursor ? row.a.createElement(_DraggableCore2.a, {
          x : this.getCursorX(),
          y : this.getCursorY(),
          color : Object(data.c)()[this.state.color_id - 1],
          zoom : this.state.zoom
        }) : null, row.a.createElement("div", {
          className : "App__statistic " + (doc ? "upper" : "")
        }, row.a.createElement(_CommentBox.a, {
          online : this.props.online,
          zoom : this.state.zoom,
          grid : this.state.grid,
          open : this.state.open_statistic,
          minZoom : this.minZoom,
          maxZoom : this.maxZoom,
          onClose : function() {
            return _this.setState({
              open_statistic : false
            });
          },
          onOpen : function() {
            return _this.setState({
              open_statistic : true
            });
          },
          x : this.state.pointX + 1,
          y : this.state.pointY + 1,
          onChangeGrid : function(_grid) {
            return _this.setState({
              grid : _grid
            });
          },
          onChangeZoom : function(t) {
            return _this.setZoomForPoint(t, _this.frameW / 2, _this.frameH / 2);
          }
        })), row.a.createElement("div", {
          className : "App__color"
        }, this.renderBottomBar()), doc && row.a.createElement("div", {
          className : "App__admin " + (Object(data.g)() && !this.props.good ? " bottom" : "")
        }, row.a.createElement("button", {
          onClick : function() {
            return !title && _this.props.updateCover();
          },
          className : "Button primary"
        }, title ? "\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435.." : "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043e\u0431\u043b\u043e\u0436\u043a\u0443"), row.a.createElement("span", {
          className : "App__admin-label",
          onClick : function(name) {
            return _this.props.updateAutoCover(!_this.props.cover_auto);
          }
        }, "\u0410\u0432\u0442\u043e\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u043b\u043e\u0436\u043a\u0438"), row.a.createElement(_todo2.a, {
          onChange : function(name) {
            return _this.props.updateAutoCover(name);
          },
          title : "\u0410\u0432\u0442\u043e\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u043b\u043e\u0436\u043a\u0438",
          checked : this.props.cover_auto
        })), row.a.createElement(_kodo.a, null), row.a.createElement(_FilterableProductTable.a, {
          x : this.w * this.state.zoom + this.x + 20,
          y : this.y
        }));
      }
    }]), init;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  defaultTagAttributes.a = Object(window.b)(init, {
    setPixel : button.f,
    updateCover : button.i,
    updateAutoCover : button.h,
    updateShowChatUrl : button.j,
    createChatUrl : button.b,
    alertBadUser : button.a,
    setFirstTime : d.f,
    setLoader : d.g,
    dropHeader : d.c
  })(nodeA);
}, function(canCreateDiscussions, el, __webpack_require__) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }
  /**
   * @param {!AudioNode} readableStream
   * @param {!Function} options
   * @return {undefined}
   */
  function store(readableStream, options) {
    if (!(readableStream instanceof options)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(el, "__esModule", {
    value : true
  });
  var incrementAndSave = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _qs = __webpack_require__(86);
  var _qs2 = _interopRequireDefault(_qs);
  var _normalizeDataUri = __webpack_require__(89);
  var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
  var _UiIcon = __webpack_require__(91);
  var _UiIcon2 = _interopRequireDefault(_UiIcon);
  var _deepAssign = __webpack_require__(92);
  var _deepAssign2 = _interopRequireDefault(_deepAssign);
  var self = function() {
    /**
     * @return {undefined}
     */
    function self() {
      store(this, self);
    }
    return incrementAndSave(self, null, [{
      key : "getStartParams",
      value : function() {
        return null === self.startParams && (self.startParams = _normalizeDataUri2.default.fromQueryParams(_qs2.default.parse(window.location.search)), self.startSearch = window.location.search), self.startParams;
      }
    }, {
      key : "init",
      value : function() {
        var t = this;
        return new Promise(function(saveNotifs, func) {
          var o = window.VK;
          if (o) {
            try {
              o.init(function() {
                return saveNotifs(t.getStartParams());
              }, function(e) {
                return func(e || new _deepAssign2.default("Unknown error", 2));
              }, self.apiVersion);
            } catch (_x17) {
              func(_x17);
            }
          } else {
            func(new _deepAssign2.default("Javascript SDK not found, see this vk.com/dev/Javascript_SDK", 1));
          }
        });
      }
    }, {
      key : "resize",
      value : function(name, callback) {
        return new Promise(function(next) {
          var self = window.VK;
          /** @type {null} */
          var _takingTooLongTimeout = null;
          /**
           * @param {!Object} s
           * @param {string} o
           * @return {undefined}
           */
          var hook = function callback(s, o) {
            self.removeCallback("onWindowResized", callback);
            next({
              width : s,
              height : o
            });
            clearTimeout(_takingTooLongTimeout);
          };
          self.addCallback("onWindowResized", hook);
          self.callMethod("resizeWindow", name, callback);
          /** @type {number} */
          _takingTooLongTimeout = setTimeout(function() {
            return hook(name, callback);
          }, 1E3);
        });
      }
    }, {
      key : "setLocation",
      value : function(name) {
        var parameters = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        window.VK.callMethod("setLocation", name, parameters);
      }
    }, {
      key : "shareBox",
      value : function(name, type, callback) {
        window.VK.callMethod("shareBox", name, type, callback);
      }
    }, {
      key : "addCallback",
      value : function(type, key) {
        window.VK.addCallback(type, key);
      }
    }, {
      key : "removeCallback",
      value : function() {
        var callbacks = window.VK;
        callbacks.removeCallback.apply(callbacks, arguments);
      }
    }, {
      key : "getWindowHeightAndOffset",
      value : function(name) {
        var self = window.VK;
        /**
         * @param {?} b
         * @param {?} type
         * @param {?} params
         * @return {undefined}
         */
        var hook = function fn(b, type, params) {
          self.removeCallback("onScrollTop", fn);
          name(b, type, params);
        };
        self.addCallback("onScrollTop", hook);
        self.callMethod("scrollTop");
      }
    }, {
      key : "api",
      value : function(name, data) {
        var next = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return new Promise(function(callback, errback) {
          var a = window.VK;
          if (void 0 === data.v) {
            data.v = self.apiVersion;
          }
          a.api(name, data, function(e) {
            if (void 0 !== e.response) {
              callback(next ? e : e.response);
            } else {
              if (void 0 !== e.error) {
                if (6 === e.error.error_code) {
                  setTimeout(function() {
                    self.api(name, data, next).then(callback).catch(errback);
                  }, 999);
                } else {
                  errback(new Error(JSON.stringify(e.error)));
                }
              } else {
                errback(new Error(JSON.stringify(e)));
              }
            }
          });
        });
      }
    }, {
      key : "requestToken",
      value : function(name) {
        return new Promise(function(cb, saveNotifs) {
          var map = window.VK;
          var callback = void 0;
          var setdirty = void 0;
          /**
           * @param {string} provider
           * @param {string} refreshToken
           * @return {undefined}
           */
          callback = function(provider, refreshToken) {
            map.removeCallback("onGroupSettingsChanged", callback);
            map.removeCallback("onGroupSettingsCancel", setdirty);
            cb({
              scope : provider,
              token : refreshToken
            });
          };
          /**
           * @return {undefined}
           */
          setdirty = function() {
            map.removeCallback("onGroupSettingsChanged", callback);
            map.removeCallback("onGroupSettingsCancel", setdirty);
            saveNotifs();
          };
          map.addCallback("onGroupSettingsChanged", callback);
          map.addCallback("onGroupSettingsCancel", setdirty);
          map.callMethod("showGroupSettingsBox", name);
        });
      }
    }, {
      key : "showSettingsBox",
      value : function(name) {
        return new Promise(function(func, callback) {
          if (_UiIcon2.default.hasScope(self.getStartParams().apiSettings, name)) {
            func();
          } else {
            var map = window.VK;
            /**
             * @return {undefined}
             */
            var fn = function() {
            };
            /**
             * @param {?} tx
             * @return {undefined}
             */
            var setdirty = function callback(tx) {
              self.getStartParams().apiSettings = tx;
              map.removeCallback("onSettingsChanged", callback);
              map.removeCallback("onWindowFocus", fn);
              func(tx);
            };
            /**
             * @return {undefined}
             */
            fn = function() {
              map.removeCallback("onSettingsChanged", setdirty);
              map.removeCallback("onWindowFocus", fn);
              callback({
                code : 403,
                message : "User not allow access to " + name,
                showSettingsBox : true
              });
            };
            map.addCallback("onSettingsChanged", setdirty);
            map.addCallback("onWindowFocus", fn);
            /** @type {number} */
            var now = (new Date).getTime();
            if (now - self.lastLimitedAction > self.limitActionInterval) {
              /** @type {number} */
              self.lastLimitedAction = now;
              map.callMethod("showSettingsBox", name);
            } else {
              setTimeout(function() {
                return map.callMethod("showSettingsBox", name);
              }, self.limitActionInterval);
            }
          }
        });
      }
    }, {
      key : "setScroll",
      value : function(name) {
        window.VK.callMethod("scrollWindow", name, 100);
      }
    }, {
      key : "allowGroupMessage",
      value : function() {
        return new Promise(function(saveNotifs, cbAsync) {
          var map = window.VK;
          var callback = void 0;
          var setdirty = void 0;
          /**
           * @return {undefined}
           */
          callback = function() {
            map.removeCallback("onAllowMessagesFromCommunity", setdirty);
            map.removeCallback("onAllowMessagesFromCommunityCancel", callback);
            cbAsync(null);
          };
          /**
           * @return {undefined}
           */
          setdirty = function() {
            map.removeCallback("onAllowMessagesFromCommunity", setdirty);
            map.removeCallback("onAllowMessagesFromCommunityCancel", callback);
            saveNotifs();
          };
          map.addCallback("onAllowMessagesFromCommunity", setdirty);
          map.addCallback("onAllowMessagesFromCommunityCancel", callback);
          map.callMethod("showAllowMessagesFromCommunityBox");
        });
      }
    }, {
      key : "scrollTop",
      value : function(name) {
        var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
        var self = window.VK;
        /**
         * @param {?} b
         * @param {?} type
         * @param {number} i
         * @return {undefined}
         */
        var hook = function fn(b, type, i) {
          self.removeCallback("onScrollTop", fn);
          self.callMethod("scrollWindow", i - 57, params);
          if (name) {
            name(b, type, i);
          }
        };
        self.addCallback("onScrollTop", hook);
        self.callMethod("scrollTop");
      }
    }, {
      key : "getScrollPosition",
      value : function(name) {
        var self = window.VK;
        /**
         * @param {?} b
         * @param {?} type
         * @param {?} params
         * @return {undefined}
         */
        var hook = function fn(b, type, params) {
          self.removeCallback("onScrollTop", fn);
          name(b, type, params);
        };
        self.addCallback("onScrollTop", hook);
        self.callMethod("scrollTop");
      }
    }, {
      key : "callWithToken",
      value : function(name, obj) {
        /** @type {number} */
        var WORLD_BB_OFFSET = self.callbackIds++;
        /** @type {string} */
        var o = "VkApiCallback" + WORLD_BB_OFFSET;
        /** @type {string} */
        obj.callback = o;
        var i = "https://api.vk.com/method/" + name + "?" + _qs2.default.stringify(obj);
        return new Promise(function(saveNotifs) {
          /** @type {!Element} */
          var el = document.createElement("script");
          /**
           * @param {?} notifications
           * @return {undefined}
           */
          window[o] = function(notifications) {
            saveNotifs(notifications);
            try {
              document.body.removeChild(el);
            } catch (e) {
            }
          };
          /** @type {string} */
          el.type = "text/javascript";
          /** @type {boolean} */
          el.async = true;
          el.src = i;
          /** @type {string} */
          el.id = o;
          document.body.appendChild(el);
        });
      }
    }, {
      key : "callToCode",
      value : function(name) {
        var vertical = name[0];
        var compiledContracts = name[1] || {};
        return "r.push(API." + vertical + "( " + JSON.stringify(compiledContracts) + " ))";
      }
    }, {
      key : "apiExecute",
      value : function(name, callback, value) {
        /** @type {!Array} */
        var o = ["var r = []"];
        /** @type {!Array<?>} */
        o = o.concat(name.map(self.callToCode));
        o.push("return r");
        self.api("execute", {
          code : o.join(";") + ";",
          v : "5.62"
        }, function(data) {
          if (data.response) {
            var signatures = data.response;
            var o = data.execute_errors;
            /** @type {number} */
            var p = 0;
            signatures.forEach(function(nextResponse, key) {
              var a = name[key];
              if (a.length >= 3 && "function" === typeof a[2]) {
                var next = a[2];
                if (false !== nextResponse) {
                  next({
                    response : nextResponse
                  });
                } else {
                  var result = o ? o[p] : {
                    error_code : 0,
                    error_message : "Execute error"
                  };
                  if (void 0 !== result) {
                    p++;
                    next({
                      error : result
                    });
                  }
                }
              }
            });
            if (value) {
              value();
            }
          } else {
            if (callback) {
              callback(data.error || data);
            }
          }
        });
      }
    }, {
      key : "getLinkToApp",
      value : function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        /** @type {string} */
        var optionHelp = "https://vk.com/app" + self.getStartParams().apiId;
        return self.getStartParams().groupId ? optionHelp = optionHelp + ("_-" + self.getStartParams().groupId) : n && (optionHelp = optionHelp + ("_-" + Math.abs(n))), optionHelp;
      }
    }, {
      key : "mobileShare",
      value : function(name, type, callback) {
        window.VK.callMethod("shareBox", name, type, callback);
      }
    }, {
      key : "desktopShare",
      value : function(name, data, prop) {
        var options = {
          title : prop,
          image : data,
          noparse : "1"
        };
        /** @type {number} */
        var i = Math.max(0, (window.screen.width - 650) / 2);
        /** @type {number} */
        var a = Math.max(0, (window.screen.height - 610) / 2);
        /** @type {string} */
        var unexpandedFeatureDirectoryPaths = "https://vk.com/share.php?url=" + encodeURIComponent(name);
        /** @type {string} */
        var settings = "width=650,height=610,left=" + i + ",top=" + a + ",menubar=0,toolbar=0,location=0,status=0";
        /** @type {boolean} */
        var win = false;
        try {
          /** @type {string} */
          var domainText = "";
          /** @type {string} */
          var storageDnsSuffix = "";
          try {
            /** @type {string} */
            domainText = document.domain;
            /** @type {string} */
            storageDnsSuffix = window.location.host;
          } catch (e) {
          }
          if (domainText !== storageDnsSuffix) {
            /** @type {string} */
            var instanceFillValue = window.navigator.userAgent.toLowerCase();
            if (!/opera/i.test(instanceFillValue) && /msie/i.test(instanceFillValue)) {
              self._inlineShare(win, unexpandedFeatureDirectoryPaths, options);
            }
          }
          /** @type {(Window|null)} */
          win = window.open("", "_blank", settings);
          /** @type {string} */
          var writeStr = '<form accept-charset="UTF-8" action="' + unexpandedFeatureDirectoryPaths + '" method="POST" id="share_form">';
          var name;
          for (name in options) {
            /** @type {string} */
            writeStr = writeStr + ('<input type="hidden" name="' + name + '" value="' + options[name].toString().replace(/"/g, "&myquot;").replace(/&quot/gi, "&myquot") + '" />');
          }
          /** @type {string} */
          writeStr = writeStr + "</form>";
          /** @type {string} */
          writeStr = writeStr + '<script type="text/javascript">document.getElementById("share_form").submit()\x3c/script>';
          /** @type {string} */
          writeStr = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"><head><meta http-equiv="content-type" content="text/html; charset=windows-1251" /></head><body>' + writeStr + "</body></html>";
          win.document.write(writeStr);
          win.focus();
        } catch (t) {
          self._inlineShare(win, unexpandedFeatureDirectoryPaths, options, "_blank", settings);
        }
      }
    }, {
      key : "_inlineShare",
      value : function(name, data, source, id, options) {
        try {
          if (name) {
            name.close();
          }
          /** @type {string} */
          data = data + "?";
          var key;
          for (key in source) {
            /** @type {string} */
            data = data + (encodeURIComponent(key) + "=" + encodeURIComponent(source[key]) + "&");
          }
          /** @type {(Window|null)} */
          name = window.open(data, id, options);
          name.focus();
        } catch (controlFlowAction) {
          alert("Sharing error: " + controlFlowAction.message);
        }
      }
    }, {
      key : "setWidget",
      value : function(name, callback) {
        return new Promise(function(ok, func) {
          /**
           * @return {undefined}
           */
          var start = function() {
          };
          /**
           * @param {string} k
           * @return {undefined}
           */
          var fn = function(k) {
            start();
            func("\u0427\u0442\u043e-\u0442\u043e \u0441\u043b\u043e\u043c\u0430\u043b\u043e\u0441\u044c, \u043f\u0440\u0438\u0448\u043b\u0438\u0442\u0435 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u044d\u0442\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0438 \u0438 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0432\u0430\u0448\u0443 \u0433\u0440\u0443\u043f\u043f\u0443 \u043d\u0430\u043c vk.com/hs. " + k);
          };
          /**
           * @return {undefined}
           */
          var callback = function() {
            start();
            ok(false);
          };
          /**
           * @return {undefined}
           */
          var spy2 = function() {
            start();
            ok(true);
          };
          if (start = function() {
            /** @type {number} */
            self.setWidgetLock = Date.now();
            self.removeCallback("onAppWidgetPreviewFail", fn);
            self.removeCallback("onAppWidgetPreviewCancel", callback);
            self.removeCallback("onAppWidgetPreviewSuccess", spy2);
          }, self.addCallback("onAppWidgetPreviewFail", fn), self.addCallback("onAppWidgetPreviewCancel", callback), self.addCallback("onAppWidgetPreviewSuccess", spy2), Date.now() - self.setWidgetLock < 3E3) {
            func("\u0412\u044b \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0447\u0430\u0441\u0442\u043e, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 5 \u0441\u0435\u043a\u0443\u043d\u0434 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430");
          } else {
            window.VK.callMethod("showAppWidgetPreviewBox", name, callback);
          }
        });
      }
    }]), self;
  }();
  /** @type {null} */
  self.startParams = null;
  /** @type {string} */
  self.startSearch = "";
  /** @type {number} */
  self.limitActionInterval = 3E3;
  /** @type {string} */
  self.apiVersion = "5.78";
  /** @type {number} */
  self.lastLimitedAction = 0;
  /** @type {number} */
  self.callbackIds = 10;
  /** @type {number} */
  self.setWidgetLock = 0;
  el.default = self;
}, function(canCreateDiscussions, self, __webpack_require__) {
  /**
   * @param {!Array} opts
   * @return {?}
   */
  function encoderForArrayFormat(opts) {
    switch(opts.arrayFormat) {
      case "index":
        return function(username, password, browser) {
          return null === password ? [encode(username, opts), "[", browser, "]"].join("") : [encode(username, opts), "[", encode(browser, opts), "]=", encode(password, opts)].join("");
        };
      case "bracket":
        return function(text, string) {
          return null === string ? encode(text, opts) : [encode(text, opts), "[]=", encode(string, opts)].join("");
        };
      default:
        return function(text, string) {
          return null === string ? encode(text, opts) : [encode(text, opts), "=", encode(string, opts)].join("");
        };
    }
  }
  /**
   * @param {(Array|HTMLCollection|Node|NodeList|Window|string)} opts
   * @return {?}
   */
  function parserForArrayFormat(opts) {
    var m;
    switch(opts.arrayFormat) {
      case "index":
        return function(i, newStyle, styles) {
          if (m = /\[(\d*)\]$/.exec(i), i = i.replace(/\[\d*\]$/, ""), !m) {
            return void(styles[i] = newStyle);
          }
          if (void 0 === styles[i]) {
            styles[i] = {};
          }
          styles[i][m[1]] = newStyle;
        };
      case "bracket":
        return function(name, value, result) {
          return m = /(\[\])$/.exec(name), name = name.replace(/\[\]$/, ""), m ? void 0 === result[name] ? void(result[name] = [value]) : void(result[name] = [].concat(result[name], value)) : void(result[name] = value);
        };
      default:
        return function(name, value, result) {
          if (void 0 === result[name]) {
            return void(result[name] = value);
          }
          /** @type {!Array<?>} */
          result[name] = [].concat(result[name], value);
        };
    }
  }
  /**
   * @param {string} value
   * @param {!Object} opts
   * @return {?}
   */
  function encode(value, opts) {
    return opts.encode ? opts.strict ? strictUriEncode(value) : encodeURIComponent(value) : value;
  }
  /**
   * @param {?} input
   * @return {?}
   */
  function keysSorter(input) {
    return Array.isArray(input) ? input.sort() : "object" === typeof input ? keysSorter(Object.keys(input)).sort(function(a, b) {
      return Number(a) - Number(b);
    }).map(function(_input) {
      return input[_input];
    }) : input;
  }
  /**
   * @param {string} selector
   * @return {?}
   */
  function $(selector) {
    var index = selector.indexOf("?");
    return -1 === index ? "" : selector.slice(index + 1);
  }
  /**
   * @param {string} source
   * @param {?} opts
   * @return {?}
   */
  function parse(source, opts) {
    opts = objectAssign({
      arrayFormat : "none"
    }, opts);
    var formatter = parserForArrayFormat(opts);
    /** @type {!Object} */
    var fields = Object.create(null);
    return "string" !== typeof source ? fields : (source = source.trim().replace(/^[?#&]/, "")) ? (source.split("&").forEach(function(commaParam) {
      /** @type {!Array<string>} */
      var headersAndBody = commaParam.replace(/\+/g, " ").split("=");
      /** @type {string} */
      var _tmpValue = headersAndBody.shift();
      /** @type {(string|undefined)} */
      var value = headersAndBody.length > 0 ? headersAndBody.join("=") : void 0;
      value = void 0 === value ? null : baseIsEqual(value);
      formatter(baseIsEqual(_tmpValue), value, fields);
    }), Object.keys(fields).sort().reduce(function(result, key) {
      var val = fields[key];
      return Boolean(val) && "object" === typeof val && !Array.isArray(val) ? result[key] = keysSorter(val) : result[key] = val, result;
    }, Object.create(null))) : fields;
  }
  var strictUriEncode = __webpack_require__(87);
  var objectAssign = __webpack_require__(9);
  var baseIsEqual = __webpack_require__(88);
  /** @type {function(string): ?} */
  self.extract = $;
  /** @type {function(string, ?): ?} */
  self.parse = parse;
  /**
   * @param {string} obj
   * @param {?} opts
   * @return {?}
   */
  self.stringify = function(obj, opts) {
    opts = objectAssign({
      encode : true,
      strict : true,
      arrayFormat : "none"
    }, opts);
    if (false === opts.sort) {
      /**
       * @return {undefined}
       */
      opts.sort = function() {
      };
    }
    var formatter = encoderForArrayFormat(opts);
    return obj ? Object.keys(obj).sort(opts.sort).map(function(key) {
      var value = obj[key];
      if (void 0 === value) {
        return "";
      }
      if (null === value) {
        return encode(key, opts);
      }
      if (Array.isArray(value)) {
        /** @type {!Array} */
        var result = [];
        return value.slice().forEach(function(val2) {
          if (void 0 !== val2) {
            result.push(formatter(key, val2, result.length));
          }
        }), result.join("&");
      }
      return encode(key, opts) + "=" + encode(value, opts);
    }).filter(function(inRevIdx) {
      return inRevIdx.length > 0;
    }).join("&") : "";
  };
  /**
   * @param {string} data
   * @param {?} options
   * @return {?}
   */
  self.parseUrl = function(data, options) {
    return {
      url : data.split("?")[0] || "",
      query : parse($(data), options)
    };
  };
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {string} name
   * @return {?}
   */
  mixin.exports = function(name) {
    return encodeURIComponent(name).replace(/[!'()*]/g, function(strUtf8) {
      return "%" + strUtf8.charCodeAt(0).toString(16).toUpperCase();
    });
  };
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {!Array} s
   * @param {number} n
   * @return {?}
   */
  function fn(s, n) {
    try {
      return decodeURIComponent(s.join(""));
    } catch (e) {
    }
    if (1 === s.length) {
      return s;
    }
    n = n || 1;
    var m = s.slice(0, n);
    var text = s.slice(n);
    return Array.prototype.concat.call([], fn(m), fn(text));
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function f(value) {
    try {
      return decodeURIComponent(value);
    } catch (o) {
      var children = value.match(n);
      /** @type {number} */
      var i = 1;
      for (; i < children.length; i++) {
        value = fn(children, i).join("");
        children = value.match(n);
      }
      return value;
    }
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function format(value) {
    var d = {
      "%FE%FF" : "\ufffd\ufffd",
      "%FF%FE" : "\ufffd\ufffd"
    };
    /** @type {(Array<string>|null)} */
    var key = regx.exec(value);
    for (; key;) {
      try {
        /** @type {string} */
        d[key[0]] = decodeURIComponent(key[0]);
      } catch (e) {
        var k = f(key[0]);
        if (k !== key[0]) {
          d[key[0]] = k;
        }
      }
      /** @type {(Array<string>|null)} */
      key = regx.exec(value);
    }
    /** @type {string} */
    d["%C2"] = "\ufffd";
    /** @type {!Array<string>} */
    var item = Object.keys(d);
    /** @type {number} */
    var i = 0;
    for (; i < item.length; i++) {
      /** @type {string} */
      var name = item[i];
      value = value.replace(new RegExp(name, "g"), d[name]);
    }
    return value;
  }
  /** @type {!RegExp} */
  var n = new RegExp("%[a-f0-9]{2}", "gi");
  /** @type {!RegExp} */
  var regx = new RegExp("(%[a-f0-9]{2})+", "gi");
  /**
   * @param {string} name
   * @return {?}
   */
  mixin.exports = function(name) {
    if ("string" !== typeof name) {
      throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof name + "`");
    }
    try {
      return name = name.replace(/\+/g, " "), decodeURIComponent(name);
    } catch (t) {
      return format(name);
    }
  };
}, function(canCreateDiscussions, t, __webpack_require__) {
  /**
   * @param {!AudioNode} that
   * @param {!Function} size
   * @return {undefined}
   */
  function get(that, size) {
    if (!(that instanceof size)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var installNativeEvent$2 = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _deepAssign = __webpack_require__(90);
  var _deepAssign2 = function(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }(_deepAssign);
  var offsetFromCenter = function() {
    /**
     * @return {undefined}
     */
    function n() {
      get(this, n);
    }
    return installNativeEvent$2(n, null, [{
      key : "fromQueryParams",
      value : function(name) {
        /**
         * @param {string} value
         * @return {?}
         */
        function toCamelCase(value) {
          return value.replace(/(_\w)/g, function(ctcp) {
            return ctcp[1].toUpperCase();
          });
        }
        /**
         * @param {?} result
         * @param {string} arr
         * @param {string} name
         * @param {string} value
         * @param {?} template
         * @return {undefined}
         */
        function format(result, arr, name, value, template) {
          var t = template;
          if (void 0 !== arr[name]) {
            t = arr[name];
          }
          if (value === type) {
            t = t.toString();
          } else {
            if (value === e) {
              /** @type {number} */
              t = parseInt(t, 10);
            } else {
              if (value === expected) {
                /** @type {boolean} */
                t = !!t;
              } else {
                if (value === C) {
                  /** @type {*} */
                  t = t ? JSON.parse(t) : null;
                }
              }
            }
          }
          result[toCamelCase(name)] = t;
        }
        /** @type {string} */
        var e = "integer";
        /** @type {string} */
        var type = "string";
        /** @type {string} */
        var expected = "boolean";
        /** @type {string} */
        var C = "json_to_object";
        var input = new _deepAssign2.default;
        return format(input, name, "api_url", type, ""), format(input, name, "api_id", e, 0), format(input, name, "api_settings", e, 0), format(input, name, "viewer_id", e, 0), format(input, name, "viewer_type", e, 0), format(input, name, "access_token", type, ""), format(input, name, "user_id", e, 0), format(input, name, "group_id", e, 0), format(input, name, "is_app_user", expected, false), format(input, name, "auth_key", type, ""), format(input, name, "language", e, 0), format(input, name, "parent_language",
          e, 0), format(input, name, "is_secure", expected, true), format(input, name, "api_result", C, ""), format(input, name, "referrer", type, "unknown"), format(input, name, "hash", type, ""), input;
      }
    }]), n;
  }();
  t.default = offsetFromCenter;
}, function(canCreateDiscussions, exports, n) {
  /**
   * @param {!AudioNode} error
   * @param {!Function} t
   * @return {undefined}
   */
  function error(error, t) {
    if (!(error instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var SuggestList = function() {
    /**
     * @return {undefined}
     */
    function e() {
      error(this, e);
    }
    return _createClass(e, [{
      key : "isInGroup",
      value : function() {
        return this.groupId > 0;
      }
    }, {
      key : "isInUser",
      value : function() {
        return this.userId > 0;
      }
    }, {
      key : "isAdmin",
      value : function() {
        return this.isInGroup() && this.viewerType === e.VIEWER_TYPE_GROUP_ADMIN;
      }
    }, {
      key : "isModerator",
      value : function() {
        return this.isInGroup() && this.viewerType === e.VIEWER_TYPE_GROUP_MODERATOR;
      }
    }, {
      key : "isEditor",
      value : function() {
        return this.isInGroup() && this.viewerType === e.VIEWER_TYPE_GROUP_EDITOR;
      }
    }, {
      key : "isMember",
      value : function() {
        return this.isInGroup() && this.viewerType === e.VIEWER_TYPE_GROUP_MEMBER;
      }
    }, {
      key : "isNobody",
      value : function() {
        return this.isInGroup() && this.viewerType === e.VIEWER_TYPE_GROUP_NOBODY || this.isInUser() && this.viewerType === e.VIEWER_TYPE_USER_NOBODY;
      }
    }, {
      key : "isMyPage",
      value : function() {
        return this.isInUser() && this.viewerType === e.VIEWER_TYPE_USER_OWNER;
      }
    }, {
      key : "isMyFriend",
      value : function() {
        return this.isInUser() && this.viewerType === e.VIEWER_TYPE_USER_FRIEND;
      }
    }, {
      key : "getOfficialLanguage",
      value : function() {
        var la = this.language;
        var n = this.parentLanguage;
        return -1 === [e.LANG_BEL, e.LANG_ENG, e.LANG_UKR, e.LANG_RUS, 97].indexOf(la) ? n : la;
      }
    }, {
      key : "getLangCode",
      value : function() {
        var lastHoverItem = this.getOfficialLanguage();
        return lastHoverItem === e.LANG_RUS ? "ru" : lastHoverItem === e.LANG_BEL ? "by" : lastHoverItem === e.LANG_UKR ? "ua" : lastHoverItem === e.LANG_ENG ? "en" : "ru";
      }
    }, {
      key : "apiId",
      get : function() {
        return this._apiId;
      },
      set : function(str) {
        /** @type {!Object} */
        this._apiId = str;
      }
    }, {
      key : "apiUrl",
      get : function() {
        return this._apiUrl;
      },
      set : function(str) {
        /** @type {!Object} */
        this._apiUrl = str;
      }
    }, {
      key : "apiSettings",
      get : function() {
        return this._apiSettings;
      },
      set : function(str) {
        /** @type {!Object} */
        this._apiSettings = str;
      }
    }, {
      key : "viewerId",
      get : function() {
        return this._viewerId;
      },
      set : function(str) {
        /** @type {string} */
        this._viewerId = str;
      }
    }, {
      key : "viewerType",
      get : function() {
        return this._viewerType;
      },
      set : function(str) {
        /** @type {!Object} */
        this._viewerType = str;
      }
    }, {
      key : "accessToken",
      get : function() {
        return this._accessToken;
      },
      set : function(str) {
        /** @type {string} */
        this._accessToken = str;
      }
    }, {
      key : "userId",
      get : function() {
        return this._userId;
      },
      set : function(str) {
        /** @type {string} */
        this._userId = str;
      }
    }, {
      key : "groupId",
      get : function() {
        return this._groupId;
      },
      set : function(obj) {
        /** @type {number} */
        this._groupId = parseInt(obj, 10);
      }
    }, {
      key : "isAppUser",
      get : function() {
        return this._isAppUser;
      },
      set : function(str) {
        /** @type {!Object} */
        this._isAppUser = str;
      }
    }, {
      key : "authKey",
      get : function() {
        return this._authKey;
      },
      set : function(str) {
        /** @type {!Object} */
        this._authKey = str;
      }
    }, {
      key : "language",
      get : function() {
        return this._language;
      },
      set : function(str) {
        /** @type {string} */
        this._language = str;
      }
    }, {
      key : "parentLanguage",
      get : function() {
        return this._parentLanguage;
      },
      set : function(str) {
        /** @type {!Object} */
        this._parentLanguage = str;
      }
    }, {
      key : "isSecure",
      get : function() {
        return this._isSecure;
      },
      set : function(str) {
        /** @type {!Object} */
        this._isSecure = str;
      }
    }, {
      key : "apiResult",
      get : function() {
        return this._apiResult;
      },
      set : function(str) {
        /** @type {!Object} */
        this._apiResult = str;
      }
    }, {
      key : "referrer",
      get : function() {
        return this._referrer;
      },
      set : function(str) {
        /** @type {!Object} */
        this._referrer = str;
      }
    }, {
      key : "hash",
      get : function() {
        return this._hash;
      },
      set : function(str) {
        this._hash = str;
      }
    }]), e;
  }();
  /** @type {number} */
  SuggestList.LANG_RUS = 0;
  /** @type {number} */
  SuggestList.LANG_UKR = 1;
  /** @type {number} */
  SuggestList.LANG_BEL = 2;
  /** @type {number} */
  SuggestList.LANG_ENG = 3;
  /** @type {number} */
  SuggestList.VIEWER_TYPE_GROUP_ADMIN = 4;
  /** @type {number} */
  SuggestList.VIEWER_TYPE_GROUP_EDITOR = 3;
  /** @type {number} */
  SuggestList.VIEWER_TYPE_GROUP_MODERATOR = 2;
  /** @type {number} */
  SuggestList.VIEWER_TYPE_GROUP_MEMBER = 1;
  /** @type {number} */
  SuggestList.VIEWER_TYPE_GROUP_NOBODY = 0;
  /** @type {number} */
  SuggestList.VIEWER_TYPE_USER_OWNER = 2;
  /** @type {number} */
  SuggestList.VIEWER_TYPE_USER_FRIEND = 1;
  /** @type {number} */
  SuggestList.VIEWER_TYPE_USER_NOBODY = 0;
  exports.default = SuggestList;
}, function(canCreateDiscussions, exports, n) {
  /**
   * @param {!AudioNode} that
   * @param {!Function} size
   * @return {undefined}
   */
  function get(that, size) {
    if (!(that instanceof size)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  var installNativeEvent$2 = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var $scope = function() {
    /**
     * @return {undefined}
     */
    function n() {
      get(this, n);
    }
    return installNativeEvent$2(n, null, [{
      key : "superScope",
      value : function(name) {
        /** @type {number} */
        var _currentModifierKeys = 0;
        return name.forEach(function(modifierKeyValue) {
          return _currentModifierKeys = _currentModifierKeys | modifierKeyValue;
        }), _currentModifierKeys;
      }
    }, {
      key : "hasScope",
      value : function(name, value) {
        return (name & value) === value;
      }
    }]), n;
  }();
  /** @type {number} */
  $scope.NOTIFY = 1;
  /** @type {number} */
  $scope.FRIENDS = 2;
  /** @type {number} */
  $scope.PHOTOS = 8;
  /** @type {number} */
  $scope.AUDIO = 8;
  /** @type {number} */
  $scope.VIDEO = 16;
  /** @type {number} */
  $scope.PAGES = 128;
  /** @type {number} */
  $scope.RIGHT_LINK = 256;
  /** @type {number} */
  $scope.STATUS = 1024;
  /** @type {number} */
  $scope.NOTES = 2048;
  /** @type {number} */
  $scope.MESSAGES = 4096;
  /** @type {number} */
  $scope.WALL = 8192;
  /** @type {number} */
  $scope.AND = 32768;
  /** @type {number} */
  $scope.OFFLINE = 65536;
  /** @type {number} */
  $scope.DOCS = 131072;
  /** @type {number} */
  $scope.GROUPS = 262144;
  /** @type {number} */
  $scope.NOTIFICATIONS = 524288;
  /** @type {number} */
  $scope.STATS = 1048576;
  /** @type {number} */
  $scope.EMAIL = 4194304;
  /** @type {number} */
  $scope.MARKET = 134217728;
  exports.default = $scope;
}, function(canCreateDiscussions, exports, n) {
  /**
   * @param {!AudioNode} t
   * @param {!Function} x
   * @return {undefined}
   */
  function r(t, x) {
    if (!(t instanceof x)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} actionType
   * @param {string} action
   * @return {?}
   */
  function apply(actionType, action) {
    if (!actionType) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !action || "object" !== typeof action && "function" !== typeof action ? actionType : action;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  var DetailedError = function(_Error) {
    /**
     * @param {?} args
     * @param {?} n
     * @return {?}
     */
    function t(args, n) {
      var forwardPosition = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      r(this, t);
      var valResult = apply(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, args, n));
      return valResult.stringCode = forwardPosition, valResult;
    }
    return _inherits(t, _Error), t;
  }(Error);
  exports.default = DetailedError;
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, t, __webpack_require__) {
  /**
   * @param {!AudioNode} error
   * @param {!Function} t
   * @return {undefined}
   */
  function error(error, t) {
    if (!(error instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _deepAssign = __webpack_require__(32);
  var _deepAssign2 = function(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }(_deepAssign);
  var offsetFromCenter = function() {
    /**
     * @return {undefined}
     */
    function e() {
      error(this, e);
    }
    return _createClass(e, null, [{
      key : "create",
      value : function(name) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        e._ga = _deepAssign2.default.getGA(name, n);
      }
    }, {
      key : "pageview",
      value : function() {
        var category = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
        var beaconCallback = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        if (!e._ga) {
          throw "Google Analytics not created";
        }
        e._ga.pageview(category, beaconCallback);
      }
    }, {
      key : "event",
      value : function(name, data) {
        var props = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
        var downloadSize = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        if (!e._ga) {
          throw "Google Analytics not created";
        }
        e._ga.event(name, data, props, downloadSize);
      }
    }]), e;
  }();
  t.default = offsetFromCenter;
}, function(canCreateDiscussions, t, n) {
  /**
   * @param {!AudioNode} that
   * @param {!Function} size
   * @return {undefined}
   */
  function get(that, size) {
    if (!(that instanceof size)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var installNativeEvent$2 = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var offsetFromCenter = function() {
    /**
     * @return {undefined}
     */
    function n() {
      get(this, n);
    }
    return installNativeEvent$2(n, [{
      key : "send",
      value : function() {
        throw "not implemented";
      }
    }, {
      key : "src",
      get : function() {
        return "https://www.google-analytics.com/collect";
      }
    }]), n;
  }();
  t.default = offsetFromCenter;
}, function(canCreateDiscussions, t, __webpack_require__) {
  /**
   * @param {!AudioNode} that
   * @param {!Function} size
   * @return {undefined}
   */
  function allocUnsafe(that, size) {
    if (!(that instanceof size)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _deepAssign = __webpack_require__(36);
  var _deepAssign2 = function(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }(_deepAssign);
  var offsetFromCenter = function() {
    /**
     * @param {?} id
     * @param {?} r
     * @return {undefined}
     */
    function e(id, r) {
      allocUnsafe(this, e);
      this._counterId = id;
      this._clientId = r;
    }
    return _createClass(e, [{
      key : "getEnvironment",
      value : function() {
        return new _deepAssign2.default;
      }
    }, {
      key : "getPath",
      value : function() {
        return "/";
      }
    }, {
      key : "getPageTitle",
      value : function() {
      }
    }, {
      key : "counterId",
      get : function() {
        return this._counterId;
      }
    }, {
      key : "clientId",
      get : function() {
        return this._clientId;
      }
    }]), e;
  }();
  t.default = offsetFromCenter;
}, function(module, canCreateDiscussions, factory) {
  /**
   * @return {undefined}
   */
  function r() {
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (e) {
        console.error(e);
      }
    }
  }
  r();
  module.exports = factory(98);
}, function(module, canCreateDiscussions, __webpack_require__) {
  /**
   * @param {!Object} err
   * @param {?} p
   * @param {string} n
   * @param {?} k
   * @param {?} a
   * @param {?} b
   * @param {?} c
   * @param {?} f
   * @return {undefined}
   */
  function r(err, p, n, k, a, b, c, f) {
    if (!err) {
      if (err = void 0, void 0 === p) {
        /** @type {!Error} */
        err = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      } else {
        /** @type {!Array} */
        var arr = [n, k, a, b, c, f];
        /** @type {number} */
        var L = 0;
        /** @type {!Error} */
        err = Error(p.replace(/%s/g, function() {
          return arr[L++];
        }));
        /** @type {string} */
        err.name = "Invariant Violation";
      }
      throw err.framesToPop = 1, err;
    }
  }
  /**
   * @param {string} s
   * @return {undefined}
   */
  function get(s) {
    /** @type {number} */
    var ncells = arguments.length - 1;
    /** @type {string} */
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + s;
    /** @type {number} */
    var index = 0;
    for (; index < ncells; index++) {
      /** @type {string} */
      e = e + ("&args[]=" + encodeURIComponent(arguments[index + 1]));
    }
    r(false, "Minified React error #" + s + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e);
  }
  /**
   * @param {?} types
   * @param {!Function} handler
   * @param {?} done
   * @param {?} s
   * @param {?} p
   * @param {?} f
   * @param {?} val
   * @param {?} type
   * @param {?} dict
   * @return {undefined}
   */
  function type(types, handler, done, s, p, f, val, type, dict) {
    /** @type {!Array<?>} */
    var _arguments = Array.prototype.slice.call(arguments, 3);
    try {
      handler.apply(done, _arguments);
    } catch (xhr) {
      this.onError(xhr);
    }
  }
  /**
   * @param {?} v
   * @param {?} minlist
   * @param {?} n
   * @param {?} def
   * @param {?} format
   * @param {?} table
   * @param {?} sdata
   * @param {?} s
   * @param {?} sfrom
   * @return {undefined}
   */
  function $fz(v, minlist, n, def, format, table, sdata, s, sfrom) {
    /** @type {boolean} */
    res = false;
    /** @type {null} */
    active = null;
    type.apply(events, arguments);
  }
  /**
   * @param {string} fn
   * @param {?} type
   * @param {!Object} data
   * @param {!Object} index
   * @param {?} path
   * @param {?} doc
   * @param {?} context
   * @param {?} url
   * @param {?} id
   * @return {undefined}
   */
  function getNode(fn, type, data, index, path, doc, context, url, id) {
    if ($fz.apply(this, arguments), res) {
      if (res) {
        var activity = active;
        /** @type {boolean} */
        res = false;
        /** @type {null} */
        active = null;
      } else {
        get("198");
        activity = void 0;
      }
      if (!$b) {
        /** @type {boolean} */
        $b = true;
        regexp = activity;
      }
    }
  }
  /**
   * @return {undefined}
   */
  function recomputePluginOrdering() {
    if (EventPluginOrder) {
      var name;
      for (name in arr) {
        var r = arr[name];
        var type = EventPluginOrder.indexOf(name);
        if (-1 < type || get("96", name), !values[type]) {
          if (!r.extractEvents) {
            get("97", name);
          }
          values[type] = r;
          type = r.eventTypes;
          var eventType;
          for (eventType in type) {
            var phaseName = void 0;
            var dispatchConfig = type[eventType];
            var PluginModule = r;
            /** @type {string} */
            var eventName = eventType;
            if (lstnrs.hasOwnProperty(eventName)) {
              get("99", eventName);
            }
            lstnrs[eventName] = dispatchConfig;
            var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
            if (phasedRegistrationNames) {
              for (phaseName in phasedRegistrationNames) {
                if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
                  publishRegistrationName(phasedRegistrationNames[phaseName], PluginModule, eventName);
                }
              }
              /** @type {boolean} */
              phaseName = true;
            } else {
              if (dispatchConfig.registrationName) {
                publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
                /** @type {boolean} */
                phaseName = true;
              } else {
                /** @type {boolean} */
                phaseName = false;
              }
            }
            if (!phaseName) {
              get("98", eventType, name);
            }
          }
        }
      }
    }
  }
  /**
   * @param {?} registrationName
   * @param {!Object} PluginModule
   * @param {string} eventName
   * @return {undefined}
   */
  function publishRegistrationName(registrationName, PluginModule, eventName) {
    if (props[registrationName]) {
      get("100", registrationName);
    }
    /** @type {!Object} */
    props[registrationName] = PluginModule;
    _this[registrationName] = PluginModule.eventTypes[eventName].dependencies;
  }
  /**
   * @param {!Object} event
   * @param {string} url
   * @param {?} listener
   * @param {?} inst
   * @return {undefined}
   */
  function executeDispatch(event, url, listener, inst) {
    url = event.type || "unknown-event";
    event.currentTarget = warning(inst);
    getNode(url, listener, void 0, event);
    /** @type {null} */
    event.currentTarget = null;
  }
  /**
   * @param {string} array
   * @param {string} data
   * @return {?}
   */
  function cb(array, data) {
    return null == data && get("30"), null == array ? data : Array.isArray(array) ? Array.isArray(data) ? (array.push.apply(array, data), array) : (array.push(data), array) : Array.isArray(data) ? [array].concat(data) : [array, data];
  }
  /**
   * @param {!Object} obj
   * @param {!Function} type
   * @param {undefined} fn
   * @return {undefined}
   */
  function _(obj, type, fn) {
    if (Array.isArray(obj)) {
      obj.forEach(type, fn);
    } else {
      if (obj) {
        type.call(fn, obj);
      }
    }
  }
  /**
   * @param {!Object} event
   * @param {string} eventName
   * @return {undefined}
   */
  function addEvent(event, eventName) {
    if (event) {
      var dispatchListeners = event._dispatchListeners;
      var dispatchInstances = event._dispatchInstances;
      if (Array.isArray(dispatchListeners)) {
        /** @type {number} */
        var i = 0;
        for (; i < dispatchListeners.length && !event.isPropagationStopped(); i++) {
          executeDispatch(event, eventName, dispatchListeners[i], dispatchInstances[i]);
        }
      } else {
        if (dispatchListeners) {
          executeDispatch(event, eventName, dispatchListeners, dispatchInstances);
        }
      }
      /** @type {null} */
      event._dispatchListeners = null;
      /** @type {null} */
      event._dispatchInstances = null;
      if (!event.isPersistent()) {
        event.constructor.release(event);
      }
    }
  }
  /**
   * @param {!Object} event
   * @return {?}
   */
  function event(event) {
    return addEvent(event, true);
  }
  /**
   * @param {!Object} event
   * @return {?}
   */
  function label(event) {
    return addEvent(event, false);
  }
  /**
   * @param {string} node
   * @param {?} name
   * @return {?}
   */
  function onClick(node, name) {
    var object = node.stateNode;
    if (!object) {
      return null;
    }
    var value = stringify(object);
    if (!value) {
      return null;
    }
    object = value[name];
    e: {
      switch(name) {
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
          if (!(value = !value.disabled)) {
            node = node.type;
            /** @type {boolean} */
            value = !("button" === node || "input" === node || "select" === node || "textarea" === node);
          }
          /** @type {boolean} */
          node = !value;
          break e;
        default:
          /** @type {boolean} */
          node = false;
      }
    }
    return node ? null : (object && "function" !== typeof object && get("231", name, typeof object), object);
  }
  /**
   * @param {!Object} val
   * @param {string} type
   * @return {undefined}
   */
  function sort(val, type) {
    if (null !== val && (ret = cb(ret, val)), val = ret, ret = null, val && (type ? _(val, event) : _(val, label), ret && get("95"), $b)) {
      throw type = regexp, $b = false, regexp = null, type;
    }
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function v(obj) {
    if (obj[id]) {
      return obj[id];
    }
    for (; !obj[id];) {
      if (!obj.parentNode) {
        return null;
      }
      obj = obj.parentNode;
    }
    return obj = obj[id], 7 === obj.tag || 8 === obj.tag ? obj : null;
  }
  /**
   * @param {!Object} o
   * @return {?}
   */
  function PropertyDescription(o) {
    return o = o[id], !o || 7 !== o.tag && 8 !== o.tag ? null : o;
  }
  /**
   * @param {?} node
   * @return {?}
   */
  function getProperty(node) {
    if (7 === node.tag || 8 === node.tag) {
      return node.stateNode;
    }
    get("33");
  }
  /**
   * @param {!Object} values
   * @return {?}
   */
  function findOrCreate(values) {
    return values[fieldName] || null;
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function jQuery(node) {
    do {
      node = node.return;
    } while (node && 7 !== node.tag);
    return node || null;
  }
  /**
   * @param {string} el
   * @param {string} listener
   * @param {!Object} event
   * @return {undefined}
   */
  function click(el, listener, event) {
    if (listener = onClick(el, event.dispatchConfig.phasedRegistrationNames[listener])) {
      event._dispatchListeners = cb(event._dispatchListeners, listener);
      event._dispatchInstances = cb(event._dispatchInstances, el);
    }
  }
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  function addMessage(event) {
    if (event && event.dispatchConfig.phasedRegistrationNames) {
      var e = event._targetInst;
      /** @type {!Array} */
      var c = [];
      for (; e;) {
        c.push(e);
        e = jQuery(e);
      }
      /** @type {number} */
      e = c.length;
      for (; 0 < e--;) {
        click(c[e], "captured", event);
      }
      /** @type {number} */
      e = 0;
      for (; e < c.length; e++) {
        click(c[e], "bubbled", event);
      }
    }
  }
  /**
   * @param {boolean} inst
   * @param {string} args
   * @param {!Object} event
   * @return {undefined}
   */
  function accumulateDispatches(inst, args, event) {
    if (inst && event && event.dispatchConfig.registrationName && (args = onClick(inst, event.dispatchConfig.registrationName))) {
      event._dispatchListeners = cb(event._dispatchListeners, args);
      event._dispatchInstances = cb(event._dispatchInstances, inst);
    }
  }
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  function accumulateDirectDispatchesSingle(event) {
    if (event && event.dispatchConfig.registrationName) {
      accumulateDispatches(event._targetInst, null, event);
    }
  }
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  function check(type) {
    _(type, addMessage);
  }
  /**
   * @param {string} styleProp
   * @param {string} eventName
   * @return {?}
   */
  function _prefixedEvent(styleProp, eventName) {
    var prefixes = {};
    return prefixes[styleProp.toLowerCase()] = eventName.toLowerCase(), prefixes["Webkit" + styleProp] = "webkit" + eventName, prefixes["Moz" + styleProp] = "moz" + eventName, prefixes;
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function on(value) {
    if (dict[value]) {
      return dict[value];
    }
    if (!EVENT_NAME_MAP[value]) {
      return value;
    }
    var name;
    var names = EVENT_NAME_MAP[value];
    for (name in names) {
      if (names.hasOwnProperty(name) && name in elem) {
        return dict[value] = names[name];
      }
    }
    return value;
  }
  /**
   * @return {?}
   */
  function calc() {
    if (count) {
      return count;
    }
    var key;
    var start;
    var t = l;
    var val = t.length;
    var o = "value" in cursor ? cursor.value : cursor.textContent;
    var i = o.length;
    /** @type {number} */
    key = 0;
    for (; key < val && t[key] === o[key]; key++) {
    }
    /** @type {number} */
    var pos = val - key;
    /** @type {number} */
    start = 1;
    for (; start <= pos && t[val - start] === o[i - start]; start++) {
    }
    return count = o.slice(key, 1 < start ? 1 - start : void 0);
  }
  /**
   * @return {?}
   */
  function returnTrue() {
    return true;
  }
  /**
   * @return {?}
   */
  function returnFalse() {
    return false;
  }
  /**
   * @param {!Object} name
   * @param {?} value
   * @param {!Object} data
   * @param {!Object} source
   * @return {?}
   */
  function Event(name, value, data, source) {
    /** @type {!Object} */
    this.dispatchConfig = name;
    this._targetInst = value;
    /** @type {!Object} */
    this.nativeEvent = data;
    name = this.constructor.Interface;
    var key;
    for (key in name) {
      if (name.hasOwnProperty(key)) {
        if (value = name[key]) {
          this[key] = value(data);
        } else {
          if ("target" === key) {
            /** @type {!Object} */
            this.target = source;
          } else {
            this[key] = data[key];
          }
        }
      }
    }
    return this.isDefaultPrevented = (null != data.defaultPrevented ? data.defaultPrevented : false === data.returnValue) ? returnTrue : returnFalse, this.isPropagationStopped = returnFalse, this;
  }
  /**
   * @param {string} e
   * @param {!Object} obj
   * @param {!Object} callback
   * @param {!Object} target
   * @return {?}
   */
  function kill(e, obj, callback, target) {
    if (this.eventPool.length) {
      var t = this.eventPool.pop();
      return this.call(t, e, obj, callback, target), t;
    }
    return new this(e, obj, callback, target);
  }
  /**
   * @param {!Function} info
   * @return {undefined}
   */
  function release(info) {
    if (!(info instanceof this)) {
      get("279");
    }
    info.destructor();
    if (10 > this.eventPool.length) {
      this.eventPool.push(info);
    }
  }
  /**
   * @param {!Object} child
   * @return {undefined}
   */
  function inherits(child) {
    /** @type {!Array} */
    child.eventPool = [];
    /** @type {function(string, !Object, !Object, !Object): ?} */
    child.getPooled = kill;
    /** @type {function(!Function): undefined} */
    child.release = release;
  }
  /**
   * @param {string} type
   * @param {!Object} event
   * @return {?}
   */
  function hide(type, event) {
    switch(type) {
      case "keyup":
        return -1 !== skillHotKey.indexOf(event.keyCode);
      case "keydown":
        return 229 !== event.keyCode;
      case "keypress":
      case "mousedown":
      case "blur":
        return true;
      default:
        return false;
    }
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function apply(value) {
    return value = value.detail, "object" === typeof value && "data" in value ? value.data : null;
  }
  /**
   * @param {string} params
   * @param {!Object} event
   * @return {?}
   */
  function build(params, event) {
    switch(params) {
      case "compositionend":
        return apply(event);
      case "keypress":
        return 32 !== event.which ? null : (projectionStream = true, path);
      case "textInput":
        return params = event.data, params === path && projectionStream ? null : params;
      default:
        return null;
    }
  }
  /**
   * @param {string} key
   * @param {!Object} event
   * @return {?}
   */
  function getKey(key, event) {
    if (use_local_cache) {
      return "compositionend" === key || !modifier && hide(key, event) ? (key = calc(), count = l = cursor = null, use_local_cache = false, key) : null;
    }
    switch(key) {
      case "paste":
        return null;
      case "keypress":
        if (!(event.ctrlKey || event.altKey || event.metaKey) || event.ctrlKey && event.altKey) {
          if (event.char && 1 < event.char.length) {
            return event.char;
          }
          if (event.which) {
            return String.fromCharCode(event.which);
          }
        }
        return null;
      case "compositionend":
        return elementEvent && "ko" !== event.locale ? null : event.data;
      default:
        return null;
    }
  }
  /**
   * @param {!Object} node
   * @return {undefined}
   */
  function reduce(node) {
    if (node = markNodeAsRequired(node)) {
      if ("function" !== typeof callback) {
        get("280");
      }
      var body = stringify(node.stateNode);
      callback(node.stateNode, node.type, body);
    }
  }
  /**
   * @param {string} i
   * @return {undefined}
   */
  function action(i) {
    if (viewIndex) {
      if (failed) {
        failed.push(i);
      } else {
        /** @type {!Array} */
        failed = [i];
      }
    } else {
      /** @type {string} */
      viewIndex = i;
    }
  }
  /**
   * @return {undefined}
   */
  function emitEvent() {
    if (viewIndex) {
      var k = viewIndex;
      var out = failed;
      if (failed = viewIndex = null, reduce(k), out) {
        /** @type {number} */
        k = 0;
        for (; k < out.length; k++) {
          reduce(out[k]);
        }
      }
    }
  }
  /**
   * @param {!Function} e
   * @param {!Object} a
   * @return {?}
   */
  function div(e, a) {
    return e(a);
  }
  /**
   * @param {!Function} callback
   * @param {?} type
   * @param {?} next
   * @return {?}
   */
  function handler(callback, type, next) {
    return callback(type, next);
  }
  /**
   * @return {undefined}
   */
  function enter() {
  }
  /**
   * @param {!Function} t
   * @param {!Object} context
   * @return {?}
   */
  function emit(t, context) {
    if (mo) {
      return t(context);
    }
    /** @type {boolean} */
    mo = true;
    try {
      return div(t, context);
    } finally {
      /** @type {boolean} */
      mo = false;
      if (null !== viewIndex || null !== failed) {
        enter();
        emitEvent();
      }
    }
  }
  /**
   * @param {string} elem
   * @return {?}
   */
  function shouldUseChangeEvent(elem) {
    var tagName = elem && elem.nodeName && elem.nodeName.toLowerCase();
    return "input" === tagName ? !!$inputTypes[elem.type] : "textarea" === tagName;
  }
  /**
   * @param {!Object} e
   * @return {?}
   */
  function getEventTarget(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function require(name) {
    if (!val) {
      return false;
    }
    /** @type {string} */
    name = "on" + name;
    /** @type {boolean} */
    var ret = name in document;
    return ret || (ret = document.createElement("div"), ret.setAttribute(name, "return;"), ret = "function" === typeof ret[name]), ret;
  }
  /**
   * @param {string} element
   * @return {?}
   */
  function isCheckbox(element) {
    var type = element.type;
    return (element = element.nodeName) && "input" === element.toLowerCase() && ("checkbox" === type || "radio" === type);
  }
  /**
   * @param {!Object} el
   * @return {?}
   */
  function constructor(el) {
    /** @type {string} */
    var prop = isCheckbox(el) ? "checked" : "value";
    /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
    var descriptor = Object.getOwnPropertyDescriptor(el.constructor.prototype, prop);
    var result = "" + el[prop];
    if (!el.hasOwnProperty(prop) && "undefined" !== typeof descriptor && "function" === typeof descriptor.get && "function" === typeof descriptor.set) {
      var retriever = descriptor.get;
      var fn = descriptor.set;
      return Object.defineProperty(el, prop, {
        configurable : true,
        get : function() {
          return retriever.call(this);
        },
        set : function(str) {
          /** @type {string} */
          result = "" + str;
          fn.call(this, str);
        }
      }), Object.defineProperty(el, prop, {
        enumerable : descriptor.enumerable
      }), {
        getValue : function() {
          return result;
        },
        setValue : function(y) {
          /** @type {string} */
          result = "" + y;
        },
        stopTracking : function() {
          /** @type {null} */
          el._valueTracker = null;
          delete el[prop];
        }
      };
    }
  }
  /**
   * @param {!Object} arg
   * @return {undefined}
   */
  function clone(arg) {
    if (!arg._valueTracker) {
      arg._valueTracker = constructor(arg);
    }
  }
  /**
   * @param {!Object} el
   * @return {?}
   */
  function getValue(el) {
    if (!el) {
      return false;
    }
    var w = el._valueTracker;
    if (!w) {
      return true;
    }
    var head = w.getValue();
    /** @type {string} */
    var p = "";
    return el && (p = isCheckbox(el) ? el.checked ? "true" : "false" : el.value), (el = p) !== head && (w.setValue(el), true);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isString(obj) {
    return null === obj || "object" !== typeof obj ? null : (obj = key && obj[key] || obj["@@iterator"], "function" === typeof obj ? obj : null);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function forEach(obj) {
    if (null == obj) {
      return null;
    }
    if ("function" === typeof obj) {
      return obj.displayName || obj.name || null;
    }
    if ("string" === typeof obj) {
      return obj;
    }
    switch(obj) {
      case Boolean:
        return "AsyncMode";
      case undefined:
        return "Fragment";
      case Infinity:
        return "Portal";
      case master:
        return "Profiler";
      case three:
        return "StrictMode";
      case scanVmodels:
        return "Placeholder";
    }
    if ("object" === typeof obj) {
      switch(obj.$$typeof) {
        case array:
          return "Context.Consumer";
        case object:
          return "Context.Provider";
        case boolean:
          var value = obj.render;
          return value = value.displayName || value.name || "", obj.displayName || ("" !== value ? "ForwardRef(" + value + ")" : "ForwardRef");
      }
      if ("function" === typeof obj.then && (obj = 1 === obj._reactStatus ? obj._reactResult : null)) {
        return forEach(obj);
      }
    }
    return null;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function clean(value) {
    /** @type {string} */
    var storage = "";
    do {
      e: {
        switch(value.tag) {
          case 4:
          case 0:
          case 1:
          case 2:
          case 3:
          case 7:
          case 10:
            var error = value._debugOwner;
            var source = value._debugSource;
            var api = forEach(value.type);
            /** @type {null} */
            var baseUrl = null;
            if (error) {
              baseUrl = forEach(error.type);
            }
            error = api;
            /** @type {string} */
            api = "";
            if (source) {
              /** @type {string} */
              api = " (at " + source.fileName.replace(inputRegExp, "") + ":" + source.lineNumber + ")";
            } else {
              if (baseUrl) {
                /** @type {string} */
                api = " (created by " + baseUrl + ")";
              }
            }
            /** @type {string} */
            baseUrl = "\n    in " + (error || "Unknown") + api;
            break e;
          default:
            /** @type {string} */
            baseUrl = "";
        }
      }
      /** @type {string} */
      storage = storage + baseUrl;
      value = value.return;
    } while (value);
    return storage;
  }
  /**
   * @param {string} key
   * @return {?}
   */
  function split(key) {
    return !!hasOwnProperty.call(formattedConfig, key) || !hasOwnProperty.call(eddy, key) && (VALID_IDENTIFIER_EXPR.test(key) ? formattedConfig[key] = true : (eddy[key] = true, false));
  }
  /**
   * @param {string} name
   * @param {number} v
   * @param {!Object} n
   * @param {boolean} context
   * @return {?}
   */
  function off(name, v, n, context) {
    if (null !== n && 0 === n.type) {
      return false;
    }
    switch(typeof v) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return !context && (null !== n ? !n.acceptsBooleans : "data-" !== (name = name.toLowerCase().slice(0, 5)) && "aria-" !== name);
      default:
        return false;
    }
  }
  /**
   * @param {string} type
   * @param {number} val
   * @param {!Object} callback
   * @param {boolean} context
   * @return {?}
   */
  function serialize(type, val, callback, context) {
    if (null === val || "undefined" === typeof val || off(type, val, callback, context)) {
      return true;
    }
    if (context) {
      return false;
    }
    if (null !== callback) {
      switch(callback.type) {
        case 3:
          return !val;
        case 4:
          return false === val;
        case 5:
          return isNaN(val);
        case 6:
          return isNaN(val) || 1 > val;
      }
    }
    return false;
  }
  /**
   * @param {string} s
   * @param {number} t
   * @param {?} xgh2
   * @param {string} xgh3
   * @param {boolean} xgh4
   * @return {undefined}
   */
  function Date(s, t, xgh2, xgh3, xgh4) {
    /** @type {boolean} */
    this.acceptsBooleans = 2 === t || 3 === t || 4 === t;
    /** @type {string} */
    this.attributeName = xgh3;
    /** @type {boolean} */
    this.attributeNamespace = xgh4;
    this.mustUseProperty = xgh2;
    /** @type {string} */
    this.propertyName = s;
    /** @type {number} */
    this.type = t;
  }
  /**
   * @param {!Object} text
   * @return {?}
   */
  function link(text) {
    return text[1].toUpperCase();
  }
  /**
   * @param {!Object} node
   * @param {string} name
   * @param {?} value
   * @param {boolean} key
   * @return {undefined}
   */
  function setPropValue(node, name, value, key) {
    var item = result.hasOwnProperty(name) ? result[name] : null;
    if (!(null !== item ? 0 === item.type : !key && (2 < name.length && ("o" === name[0] || "O" === name[0]) && ("n" === name[1] || "N" === name[1])))) {
      if (serialize(name, value, item, key)) {
        /** @type {null} */
        value = null;
      }
      if (key || null === item) {
        if (split(name)) {
          if (null === value) {
            node.removeAttribute(name);
          } else {
            node.setAttribute(name, "" + value);
          }
        }
      } else {
        if (item.mustUseProperty) {
          node[item.propertyName] = null === value ? 3 !== item.type && "" : value;
        } else {
          name = item.attributeName;
          key = item.attributeNamespace;
          if (null === value) {
            node.removeAttribute(name);
          } else {
            item = item.type;
            /** @type {string} */
            value = 3 === item || 4 === item && true === value ? "" : "" + value;
            if (key) {
              node.setAttributeNS(key, name, value);
            } else {
              node.setAttribute(name, value);
            }
          }
        }
      }
    }
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function value(value) {
    switch(typeof value) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return value;
      default:
        return "";
    }
  }
  /**
   * @param {?} node
   * @param {!Object} options
   * @return {?}
   */
  function concat(node, options) {
    var checked = options.checked;
    return assign({}, options, {
      defaultChecked : void 0,
      defaultValue : void 0,
      value : void 0,
      checked : null != checked ? checked : node._wrapperState.initialChecked
    });
  }
  /**
   * @param {?} node
   * @param {!Object} elem
   * @return {undefined}
   */
  function fixNode(node, elem) {
    var dataValue = null == elem.defaultValue ? "" : elem.defaultValue;
    var r = null != elem.checked ? elem.checked : elem.defaultChecked;
    dataValue = value(null != elem.value ? elem.value : dataValue);
    node._wrapperState = {
      initialChecked : r,
      initialValue : dataValue,
      controlled : "checkbox" === elem.type || "radio" === elem.type ? null != elem.checked : null != elem.value
    };
  }
  /**
   * @param {!Object} elem
   * @param {!Object} val
   * @return {undefined}
   */
  function setProp(elem, val) {
    if (null != (val = val.checked)) {
      setPropValue(elem, "checked", val, false);
    }
  }
  /**
   * @param {!Object} node
   * @param {!Object} el
   * @return {?}
   */
  function setAttr(node, el) {
    setProp(node, el);
    var val = value(el.value);
    var type = el.type;
    if (null != val) {
      if ("number" === type) {
        if (0 === val && "" === node.value || node.value != val) {
          /** @type {string} */
          node.value = "" + val;
        }
      } else {
        if (node.value !== "" + val) {
          /** @type {string} */
          node.value = "" + val;
        }
      }
    } else {
      if ("submit" === type || "reset" === type) {
        return void node.removeAttribute("value");
      }
    }
    if (el.hasOwnProperty("value")) {
      addAttribute(node, el.type, val);
    } else {
      if (el.hasOwnProperty("defaultValue")) {
        addAttribute(node, el.type, value(el.defaultValue));
      }
    }
    if (null == el.checked && null != el.defaultChecked) {
      /** @type {boolean} */
      node.defaultChecked = !!el.defaultChecked;
    }
  }
  /**
   * @param {!Object} item
   * @param {(Object|string)} value
   * @param {string} id
   * @return {undefined}
   */
  function reset(item, value, id) {
    if (value.hasOwnProperty("value") || value.hasOwnProperty("defaultValue")) {
      var name = value.type;
      if (!("submit" !== name && "reset" !== name || void 0 !== value.value && null !== value.value)) {
        return;
      }
      /** @type {string} */
      value = "" + item._wrapperState.initialValue;
      if (!(id || value === item.value)) {
        /** @type {(Object|string)} */
        item.value = value;
      }
      /** @type {(Object|string)} */
      item.defaultValue = value;
    }
    id = item.name;
    if ("" !== id) {
      /** @type {string} */
      item.name = "";
    }
    /** @type {boolean} */
    item.defaultChecked = !item.defaultChecked;
    /** @type {boolean} */
    item.defaultChecked = !!item._wrapperState.initialChecked;
    if ("" !== id) {
      /** @type {string} */
      item.name = id;
    }
  }
  /**
   * @param {!Object} node
   * @param {string} type
   * @param {string} value
   * @return {undefined}
   */
  function addAttribute(node, type, value) {
    if (!("number" === type && node.ownerDocument.activeElement === node)) {
      if (null == value) {
        /** @type {string} */
        node.defaultValue = "" + node._wrapperState.initialValue;
      } else {
        if (node.defaultValue !== "" + value) {
          /** @type {string} */
          node.defaultValue = "" + value;
        }
      }
    }
  }
  /**
   * @param {?} event
   * @param {!Object} context
   * @param {string} options
   * @return {?}
   */
  function fire(event, context, options) {
    return event = Event.getPooled(args.change, event, context, options), event.type = "change", action(options), check(event), event;
  }
  /**
   * @param {!Object} val
   * @return {undefined}
   */
  function frame(val) {
    sort(val, false);
  }
  /**
   * @param {?} param
   * @return {?}
   */
  function isDefined(param) {
    if (getValue(getProperty(param))) {
      return param;
    }
  }
  /**
   * @param {string} _
   * @param {boolean} s
   * @return {?}
   */
  function bv_trim(_, s) {
    if ("change" === _) {
      return s;
    }
  }
  /**
   * @return {undefined}
   */
  function stopWatchingForValueChange() {
    if (capturedNode) {
      capturedNode.detachEvent("onpropertychange", wrappedCallback);
      /** @type {null} */
      name = capturedNode = null;
    }
  }
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  function wrappedCallback(event) {
    if ("value" === event.propertyName && isDefined(name)) {
      event = fire(name, event, getEventTarget(event));
      emit(frame, event);
    }
  }
  /**
   * @param {string} type
   * @param {!Object} engine
   * @param {string} namespace
   * @return {undefined}
   */
  function bindEvents(type, engine, namespace) {
    if ("focus" === type) {
      stopWatchingForValueChange();
      /** @type {!Object} */
      capturedNode = engine;
      /** @type {string} */
      name = namespace;
      capturedNode.attachEvent("onpropertychange", wrappedCallback);
    } else {
      if ("blur" === type) {
        stopWatchingForValueChange();
      }
    }
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function initEvents(value) {
    if ("selectionchange" === value || "keyup" === value || "keydown" === value) {
      return isDefined(name);
    }
  }
  /**
   * @param {string} key
   * @param {?} val
   * @return {?}
   */
  function checkAttribute(key, val) {
    if ("click" === key) {
      return isDefined(val);
    }
  }
  /**
   * @param {string} id
   * @param {?} target
   * @return {?}
   */
  function prop(id, target) {
    if ("input" === id || "change" === id) {
      return isDefined(target);
    }
  }
  /**
   * @param {?} key
   * @return {?}
   */
  function normalizeCommandKeys(key) {
    var event = this.nativeEvent;
    return event.getModifierState ? event.getModifierState(key) : !!(key = keymap[key]) && !!event[key];
  }
  /**
   * @return {?}
   */
  function movementCost() {
    return normalizeCommandKeys;
  }
  /**
   * @param {?} a
   * @param {?} b
   * @return {?}
   */
  function match(a, b) {
    return a === b ? 0 !== a || 0 !== b || 1 / a === 1 / b : a !== a && b !== b;
  }
  /**
   * @param {(Object|string)} item
   * @param {!Object} args
   * @return {?}
   */
  function warn(item, args) {
    if (match(item, args)) {
      return true;
    }
    if ("object" !== typeof item || null === item || "object" !== typeof args || null === args) {
      return false;
    }
    /** @type {!Array<string>} */
    var names = Object.keys(item);
    /** @type {!Array<string>} */
    var i = Object.keys(args);
    if (names.length !== i.length) {
      return false;
    }
    /** @type {number} */
    i = 0;
    for (; i < names.length; i++) {
      if (!hasOwn.call(args, names[i]) || !match(item[names[i]], args[names[i]])) {
        return false;
      }
    }
    return true;
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function push(obj) {
    /** @type {!Object} */
    var node = obj;
    if (obj.alternate) {
      for (; node.return;) {
        node = node.return;
      }
    } else {
      if (0 !== (2 & node.effectTag)) {
        return 1;
      }
      for (; node.return;) {
        if (node = node.return, 0 !== (2 & node.effectTag)) {
          return 1;
        }
      }
    }
    return 5 === node.tag ? 2 : 3;
  }
  /**
   * @param {!Object} d
   * @return {undefined}
   */
  function j(d) {
    if (2 !== push(d)) {
      get("188");
    }
  }
  /**
   * @param {?} x
   * @return {?}
   */
  function put(x) {
    var n = x.alternate;
    if (!n) {
      return n = push(x), 3 === n && get("188"), 1 === n ? null : x;
    }
    var item = x;
    var node = n;
    for (;;) {
      var a = item.return;
      var p = a ? a.alternate : null;
      if (!a || !p) {
        break;
      }
      if (a.child === p.child) {
        var child = a.child;
        for (; child;) {
          if (child === item) {
            return j(a), x;
          }
          if (child === node) {
            return j(a), n;
          }
          child = child.sibling;
        }
        get("188");
      }
      if (item.return !== node.return) {
        item = a;
        node = p;
      } else {
        /** @type {boolean} */
        child = false;
        var next = a.child;
        for (; next;) {
          if (next === item) {
            /** @type {boolean} */
            child = true;
            item = a;
            node = p;
            break;
          }
          if (next === node) {
            /** @type {boolean} */
            child = true;
            node = a;
            item = p;
            break;
          }
          next = next.sibling;
        }
        if (!child) {
          next = p.child;
          for (; next;) {
            if (next === item) {
              /** @type {boolean} */
              child = true;
              item = p;
              node = a;
              break;
            }
            if (next === node) {
              /** @type {boolean} */
              child = true;
              node = p;
              item = a;
              break;
            }
            next = next.sibling;
          }
          if (!child) {
            get("189");
          }
        }
      }
      if (item.alternate !== node) {
        get("190");
      }
    }
    return 5 !== item.tag && get("188"), item.stateNode.current === item ? x : n;
  }
  /**
   * @param {!Array} root
   * @return {?}
   */
  function findDOMNode(root) {
    if (!(root = put(root))) {
      return null;
    }
    /** @type {!Array} */
    var node = root;
    for (;;) {
      if (7 === node.tag || 8 === node.tag) {
        return node;
      }
      if (node.child) {
        node.child.return = node;
        node = node.child;
      } else {
        if (node === root) {
          break;
        }
        for (; !node.sibling;) {
          if (!node.return || node.return === root) {
            return null;
          }
          node = node.return;
        }
        node.sibling.return = node.return;
        node = node.sibling;
      }
    }
    return null;
  }
  /**
   * @param {number} e
   * @return {?}
   */
  function test(e) {
    var c = e.keyCode;
    return "charCode" in e ? 0 === (e = e.charCode) && 13 === c && (e = 13) : e = c, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
  }
  /**
   * @param {string} type
   * @param {number} item
   * @return {undefined}
   */
  function _capture(type, item) {
    var name = type[0];
    type = type[1];
    /** @type {string} */
    var key = "on" + (type[0].toUpperCase() + type.slice(1));
    item = {
      phasedRegistrationNames : {
        bubbled : key,
        captured : key + "Capture"
      },
      dependencies : [name],
      isInteractive : item
    };
    /** @type {number} */
    msgTypeCache[type] = item;
    /** @type {number} */
    memo[name] = item;
  }
  /**
   * @param {!Object} bookKeeping
   * @return {undefined}
   */
  function tick(bookKeeping) {
    var a = bookKeeping.targetInst;
    var i = a;
    do {
      if (!i) {
        bookKeeping.ancestors.push(i);
        break;
      }
      var node;
      node = i;
      for (; node.return;) {
        node = node.return;
      }
      if (!(node = 5 !== node.tag ? null : node.stateNode.containerInfo)) {
        break;
      }
      bookKeeping.ancestors.push(i);
      i = v(node);
    } while (i);
    /** @type {number} */
    i = 0;
    for (; i < bookKeeping.ancestors.length; i++) {
      a = bookKeeping.ancestors[i];
      var nativeEventTarget = getEventTarget(bookKeeping.nativeEvent);
      node = bookKeeping.topLevelType;
      var b = bookKeeping.nativeEvent;
      /** @type {null} */
      var ret = null;
      /** @type {number} */
      var j = 0;
      for (; j < values.length; j++) {
        var d = values[j];
        if (d && (d = d.extractEvents(node, a, b, nativeEventTarget))) {
          ret = cb(ret, d);
        }
      }
      sort(ret, false);
    }
  }
  /**
   * @param {string} e
   * @param {!Object} t
   * @return {?}
   */
  function trigger(e, t) {
    if (!t) {
      return null;
    }
    var n = (Error(e) ? move : display).bind(null, e);
    t.addEventListener(e, n, false);
  }
  /**
   * @param {string} e
   * @param {!Object} o
   * @return {?}
   */
  function addEventListener(e, o) {
    if (!o) {
      return null;
    }
    var n = (Error(e) ? move : display).bind(null, e);
    o.addEventListener(e, n, true);
  }
  /**
   * @param {?} type
   * @param {?} next
   * @return {undefined}
   */
  function move(type, next) {
    handler(display, type, next);
  }
  /**
   * @param {!Object} value
   * @param {!Object} e
   * @return {undefined}
   */
  function display(value, e) {
    if (mi) {
      var props = getEventTarget(e);
      if (props = v(props), null === props || "number" !== typeof props.tag || 2 === push(props) || (props = null), deadPool.length) {
        var p = deadPool.pop();
        /** @type {!Object} */
        p.topLevelType = value;
        /** @type {!Object} */
        p.nativeEvent = e;
        p.targetInst = props;
        value = p;
      } else {
        value = {
          topLevelType : value,
          nativeEvent : e,
          targetInst : props,
          ancestors : []
        };
      }
      try {
        emit(tick, value);
      } finally {
        /** @type {null} */
        value.topLevelType = null;
        /** @type {null} */
        value.nativeEvent = null;
        /** @type {null} */
        value.targetInst = null;
        /** @type {number} */
        value.ancestors.length = 0;
        if (10 > deadPool.length) {
          deadPool.push(value);
        }
      }
    }
  }
  /**
   * @param {!Object} object
   * @return {?}
   */
  function __hasOwn(object) {
    return Object.prototype.hasOwnProperty.call(object, topListenersIDKey) || (object[topListenersIDKey] = reactTopListenersCounter++, reversed[object[topListenersIDKey]] = {}), reversed[object[topListenersIDKey]];
  }
  /**
   * @param {!Object} doc
   * @return {?}
   */
  function getActiveElement(doc) {
    if ("undefined" === typeof(doc = doc || ("undefined" !== typeof document ? document : void 0))) {
      return null;
    }
    try {
      return doc.activeElement || doc.body;
    } catch (t) {
      return doc.body;
    }
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function nextIncrementalItem(node) {
    for (; node && node.firstChild;) {
      node = node.firstChild;
    }
    return node;
  }
  /**
   * @param {string} start
   * @param {string} offset
   * @return {?}
   */
  function process(start, offset) {
    var node = nextIncrementalItem(start);
    /** @type {number} */
    start = 0;
    var end;
    for (; node;) {
      if (3 === node.nodeType) {
        if (end = start + node.textContent.length, start <= offset && end >= offset) {
          return {
            node : node,
            offset : offset - start
          };
        }
        start = end;
      }
      e: {
        for (; node;) {
          if (node.nextSibling) {
            node = node.nextSibling;
            break e;
          }
          node = node.parentNode;
        }
        node = void 0;
      }
      node = nextIncrementalItem(node);
    }
  }
  /**
   * @param {!HTMLElement} b
   * @param {!HTMLElement} a
   * @return {?}
   */
  function contains(b, a) {
    return !(!b || !a) && (b === a || (!b || 3 !== b.nodeType) && (a && 3 === a.nodeType ? contains(b, a.parentNode) : "contains" in b ? b.contains(a) : !!b.compareDocumentPosition && !!(16 & b.compareDocumentPosition(a))));
  }
  /**
   * @return {?}
   */
  function getTestsCtx() {
    /** @type {!Window} */
    var defaultView = window;
    var element = getActiveElement();
    for (; element instanceof defaultView.HTMLIFrameElement;) {
      try {
        defaultView = element.contentDocument.defaultView;
      } catch (e) {
        break;
      }
      element = getActiveElement(defaultView.document);
    }
    return element;
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function handleKeyEvent(node) {
    var tagName = node && node.nodeName && node.nodeName.toLowerCase();
    return tagName && ("input" === tagName && ("text" === node.type || "search" === node.type || "tel" === node.type || "url" === node.type || "password" === node.type) || "textarea" === tagName || "true" === node.contentEditable);
  }
  /**
   * @param {?} event
   * @param {!Element} nativeEventTarget
   * @return {?}
   */
  function getSelection(event, nativeEventTarget) {
    var selection = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
    return img_tween || null == s || s !== getActiveElement(selection) ? null : (selection = s, "selectionStart" in selection && handleKeyEvent(selection) ? selection = {
      start : selection.selectionStart,
      end : selection.selectionEnd
    } : (selection = (selection.ownerDocument && selection.ownerDocument.defaultView || window).getSelection(), selection = {
      anchorNode : selection.anchorNode,
      anchorOffset : selection.anchorOffset,
      focusNode : selection.focusNode,
      focusOffset : selection.focusOffset
    }), tooltip && warn(tooltip, selection) ? null : (tooltip = selection, event = Event.getPooled(panel.select, params, event, nativeEventTarget), event.type = "select", event.target = s, check(event), event));
  }
  /**
   * @param {!Function} object
   * @return {?}
   */
  function toArray(object) {
    /** @type {string} */
    var result = "";
    return React.Children.forEach(object, function(overrideSubItems) {
      if (null != overrideSubItems) {
        result = result + overrideSubItems;
      }
    }), result;
  }
  /**
   * @param {?} data
   * @param {!Object} value
   * @return {?}
   */
  function merge(data, value) {
    return data = assign({
      children : void 0
    }, value), (value = toArray(value.children)) && (data.children = value), data;
  }
  /**
   * @param {!Object} o
   * @param {?} params
   * @param {string} i
   * @param {number} m
   * @return {?}
   */
  function text(o, params, i, m) {
    if (o = o.options, params) {
      params = {};
      /** @type {number} */
      var j = 0;
      for (; j < i.length; j++) {
        /** @type {boolean} */
        params["$" + i[j]] = true;
      }
      /** @type {number} */
      i = 0;
      for (; i < o.length; i++) {
        /** @type {boolean} */
        j = params.hasOwnProperty("$" + o[i].value);
        if (o[i].selected !== j) {
          /** @type {boolean} */
          o[i].selected = j;
        }
        if (j && m) {
          /** @type {boolean} */
          o[i].defaultSelected = true;
        }
      }
    } else {
      /** @type {string} */
      i = "" + value(i);
      /** @type {null} */
      params = null;
      /** @type {number} */
      j = 0;
      for (; j < o.length; j++) {
        if (o[j].value === i) {
          return o[j].selected = true, void(m && (o[j].defaultSelected = true));
        }
        if (!(null !== params || o[j].disabled)) {
          params = o[j];
        }
      }
      if (null !== params) {
        /** @type {boolean} */
        params.selected = true;
      }
    }
  }
  /**
   * @param {?} item
   * @param {!Object} props
   * @return {?}
   */
  function prepare(item, props) {
    return null != props.dangerouslySetInnerHTML && get("91"), assign({}, props, {
      value : void 0,
      defaultValue : void 0,
      children : "" + item._wrapperState.initialValue
    });
  }
  /**
   * @param {?} node
   * @param {!Object} options
   * @return {undefined}
   */
  function exec(node, options) {
    var key = options.value;
    if (null == key) {
      key = options.defaultValue;
      options = options.children;
      if (null != options) {
        if (null != key) {
          get("92");
        }
        if (Array.isArray(options)) {
          if (!(1 >= options.length)) {
            get("93");
          }
          options = options[0];
        }
        /** @type {!Object} */
        key = options;
      }
      if (null == key) {
        /** @type {string} */
        key = "";
      }
    }
    node._wrapperState = {
      initialValue : value(key)
    };
  }
  /**
   * @param {!Object} args
   * @param {!Object} node
   * @return {undefined}
   */
  function hash(args, node) {
    var val = value(node.value);
    var filename = value(node.defaultValue);
    if (null != val) {
      /** @type {string} */
      val = "" + val;
      if (val !== args.value) {
        /** @type {string} */
        args.value = val;
      }
      if (null == node.defaultValue && args.defaultValue !== val) {
        /** @type {string} */
        args.defaultValue = val;
      }
    }
    if (null != filename) {
      /** @type {string} */
      args.defaultValue = "" + filename;
    }
  }
  /**
   * @param {!Object} item
   * @return {undefined}
   */
  function readFile(item) {
    var value = item.textContent;
    if (value === item._wrapperState.initialValue) {
      item.value = value;
    }
  }
  /**
   * @param {string} type
   * @return {?}
   */
  function factory(type) {
    switch(type) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  /**
   * @param {string} val
   * @param {string} data
   * @return {?}
   */
  function fn(val, data) {
    return null == val || "http://www.w3.org/1999/xhtml" === val ? factory(data) : "http://www.w3.org/2000/svg" === val && "foreignObject" === data ? "http://www.w3.org/1999/xhtml" : val;
  }
  /**
   * @param {!Node} e
   * @param {string} value
   * @return {?}
   */
  function set(e, value) {
    if (value) {
      var node = e.firstChild;
      if (node && node === e.lastChild && 3 === node.nodeType) {
        return void(node.nodeValue = value);
      }
    }
    /** @type {string} */
    e.textContent = value;
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {undefined}
   */
  function f(a, b) {
    a = a.style;
    var key;
    for (key in b) {
      if (b.hasOwnProperty(key)) {
        /** @type {boolean} */
        var isPTV = 0 === key.indexOf("--");
        /** @type {string} */
        var name = key;
        var value = b[key];
        /** @type {string} */
        name = null == value || "boolean" === typeof value || "" === value ? "" : isPTV || "number" !== typeof value || 0 === value || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name] ? ("" + value).trim() : value + "px";
        if ("float" === key) {
          /** @type {string} */
          key = "cssFloat";
        }
        if (isPTV) {
          a.setProperty(key, name);
        } else {
          /** @type {string} */
          a[key] = name;
        }
      }
    }
  }
  /**
   * @param {string} value
   * @param {!Object} props
   * @return {undefined}
   */
  function h(value, props) {
    if (props) {
      if (b[value] && (null != props.children || null != props.dangerouslySetInnerHTML)) {
        get("137", value, "");
      }
      if (null != props.dangerouslySetInnerHTML) {
        if (null != props.children) {
          get("60");
        }
        if (!("object" === typeof props.dangerouslySetInnerHTML && "__html" in props.dangerouslySetInnerHTML)) {
          get("61");
        }
      }
      if (null != props.style && "object" !== typeof props.style) {
        get("62", "");
      }
    }
  }
  /**
   * @param {string} type
   * @param {!Object} val
   * @return {?}
   */
  function createNode(type, val) {
    if (-1 === type.indexOf("-")) {
      return "string" === typeof val.is;
    }
    switch(type) {
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
  /**
   * @param {!Object} obj
   * @param {string} property
   * @return {undefined}
   */
  function bind(obj, property) {
    obj = 9 === obj.nodeType || 11 === obj.nodeType ? obj : obj.ownerDocument;
    var n = __hasOwn(obj);
    property = _this[property];
    /** @type {number} */
    var _i = 0;
    for (; _i < property.length; _i++) {
      var type = property[_i];
      if (!n.hasOwnProperty(type) || !n[type]) {
        switch(type) {
          case "scroll":
            addEventListener("scroll", obj);
            break;
          case "focus":
          case "blur":
            addEventListener("focus", obj);
            addEventListener("blur", obj);
            /** @type {boolean} */
            n.blur = true;
            /** @type {boolean} */
            n.focus = true;
            break;
          case "cancel":
          case "close":
            if (require(type)) {
              addEventListener(type, obj);
            }
            break;
          case "invalid":
          case "submit":
          case "reset":
            break;
          default:
            if (-1 === nodes.indexOf(type)) {
              trigger(type, obj);
            }
        }
        /** @type {boolean} */
        n[type] = true;
      }
    }
  }
  /**
   * @return {undefined}
   */
  function param() {
  }
  /**
   * @param {?} type
   * @param {!Object} attrs
   * @return {?}
   */
  function initialize(type, attrs) {
    switch(type) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!attrs.autoFocus;
    }
    return false;
  }
  /**
   * @param {string} val
   * @param {!Object} props
   * @return {?}
   */
  function filter(val, props) {
    return "textarea" === val || "option" === val || "noscript" === val || "string" === typeof props.children || "number" === typeof props.children || "object" === typeof props.dangerouslySetInnerHTML && null !== props.dangerouslySetInnerHTML && null != props.dangerouslySetInnerHTML.__html;
  }
  /**
   * @param {!Object} result
   * @return {?}
   */
  function abs(result) {
    result = result.nextSibling;
    for (; result && 1 !== result.nodeType && 3 !== result.nodeType;) {
      result = result.nextSibling;
    }
    return result;
  }
  /**
   * @param {!Object} item
   * @return {?}
   */
  function iterate(item) {
    item = item.firstChild;
    for (; item && 1 !== item.nodeType && 3 !== item.nodeType;) {
      item = item.nextSibling;
    }
    return item;
  }
  /**
   * @param {!Object} obj
   * @return {undefined}
   */
  function resolve(obj) {
    if (!(0 > i)) {
      obj.current = fields[i];
      /** @type {null} */
      fields[i] = null;
      i--;
    }
  }
  /**
   * @param {!Object} obj
   * @param {string} val
   * @return {undefined}
   */
  function error(obj, val) {
    i++;
    fields[i] = obj.current;
    /** @type {string} */
    obj.current = val;
  }
  /**
   * @param {!Object} node
   * @param {string} value
   * @return {?}
   */
  function $(node, value) {
    var contextTypes = node.type.contextTypes;
    if (!contextTypes) {
      return page;
    }
    var raw = node.stateNode;
    if (raw && raw.__reactInternalMemoizedUnmaskedChildContext === value) {
      return raw.__reactInternalMemoizedMaskedChildContext;
    }
    var key;
    var styles = {};
    for (key in contextTypes) {
      styles[key] = value[key];
    }
    return raw && (node = node.stateNode, node.__reactInternalMemoizedUnmaskedChildContext = value, node.__reactInternalMemoizedMaskedChildContext = styles), styles;
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function isNaN(value) {
    return null !== (value = value.childContextTypes) && void 0 !== value;
  }
  /**
   * @param {!Object} el
   * @return {undefined}
   */
  function createElement(el) {
    resolve(response, el);
    resolve(self, el);
  }
  /**
   * @param {!Object} fn
   * @return {undefined}
   */
  function select(fn) {
    resolve(response, fn);
    resolve(self, fn);
  }
  /**
   * @param {!Object} o
   * @param {string} f
   * @param {string} name
   * @return {undefined}
   */
  function addListener(o, f, name) {
    if (self.current !== page) {
      get("168");
    }
    error(self, f, o);
    error(response, name, o);
  }
  /**
   * @param {string} obj
   * @param {!Object} options
   * @param {?} value
   * @return {?}
   */
  function replace(obj, options, value) {
    var instance = obj.stateNode;
    if (obj = options.childContextTypes, "function" !== typeof instance.getChildContext) {
      return value;
    }
    instance = instance.getChildContext();
    var prop;
    for (prop in instance) {
      if (!(prop in obj)) {
        get("108", forEach(options) || "Unknown", prop);
      }
    }
    return assign({}, value, instance);
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function sync(node) {
    var type = node.stateNode;
    return type = type && type.__reactInternalMemoizedMergedChildContext || page, index = self.current, error(self, type, node), error(response, response.current, node), true;
  }
  /**
   * @param {boolean} node
   * @param {string} value
   * @param {string} type
   * @return {undefined}
   */
  function traverse(node, value, type) {
    var publicInst = node.stateNode;
    if (!publicInst) {
      get("169");
    }
    if (type) {
      value = replace(node, value, index);
      /** @type {string} */
      publicInst.__reactInternalMemoizedMergedChildContext = value;
      resolve(response, node);
      resolve(self, node);
      error(self, value, node);
    } else {
      resolve(response, node);
    }
    error(response, type, node);
  }
  /**
   * @param {!Function} predicate
   * @return {?}
   */
  function makeFilterFn(predicate) {
    return function(value) {
      try {
        return predicate(value);
      } catch (e) {
      }
    };
  }
  /**
   * @param {?} callback
   * @return {?}
   */
  function use(callback) {
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      return false;
    }
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled || !t.supportsFiber) {
      return true;
    }
    try {
      var i = t.inject(callback);
      keys = makeFilterFn(function(droneId) {
        return t.onCommitFiberRoot(i, droneId);
      });
      doc = makeFilterFn(function(droneId) {
        return t.onCommitFiberUnmount(i, droneId);
      });
    } catch (e) {
    }
    return true;
  }
  /**
   * @param {string} value
   * @param {?} currency
   * @param {string} name
   * @param {number} type
   * @return {undefined}
   */
  function Node(value, currency, name, type) {
    /** @type {string} */
    this.tag = value;
    /** @type {string} */
    this.key = name;
    /** @type {null} */
    this.sibling = this.child = this.return = this.stateNode = this.type = null;
    /** @type {number} */
    this.index = 0;
    /** @type {null} */
    this.ref = null;
    this.pendingProps = currency;
    /** @type {null} */
    this.firstContextDependency = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    /** @type {number} */
    this.mode = type;
    /** @type {number} */
    this.effectTag = 0;
    /** @type {null} */
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    /** @type {number} */
    this.childExpirationTime = this.expirationTime = 0;
    /** @type {null} */
    this.alternate = null;
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function pick(obj) {
    return !(!(obj = obj.prototype) || !obj.isReactComponent);
  }
  /**
   * @param {!Object} data
   * @param {!Function} type
   * @param {!Function} text
   * @return {?}
   */
  function parse(data, type, text) {
    var node = data.alternate;
    return null === node ? (node = new Node(data.tag, type, data.key, data.mode), node.type = data.type, node.stateNode = data.stateNode, node.alternate = data, data.alternate = node) : (node.pendingProps = type, node.effectTag = 0, node.nextEffect = null, node.firstEffect = null, node.lastEffect = null), node.childExpirationTime = data.childExpirationTime, node.expirationTime = type !== data.pendingProps ? text : data.expirationTime, node.child = data.child, node.memoizedProps = data.memoizedProps,
      node.memoizedState = data.memoizedState, node.updateQueue = data.updateQueue, node.firstContextDependency = data.firstContextDependency, node.sibling = data.sibling, node.index = data.index, node.ref = data.ref, node;
  }
  /**
   * @param {!Object} options
   * @param {number} data
   * @param {!Object} v
   * @return {?}
   */
  function extend(options, data, v) {
    var value = options.type;
    var end = options.key;
    options = options.props;
    var entity = void 0;
    if ("function" === typeof value) {
      /** @type {number} */
      entity = pick(value) ? 2 : 4;
    } else {
      if ("string" === typeof value) {
        /** @type {number} */
        entity = 7;
      } else {
        e: {
          switch(value) {
            case undefined:
              return format(options.children, data, v, end);
            case Boolean:
              /** @type {number} */
              entity = 10;
              /** @type {number} */
              data = data | 3;
              break;
            case three:
              /** @type {number} */
              entity = 10;
              /** @type {number} */
              data = data | 2;
              break;
            case master:
              return value = new Node(15, options, end, 4 | data), value.type = master, value.expirationTime = v, value;
            case scanVmodels:
              /** @type {number} */
              entity = 16;
              break;
            default:
              if ("object" === typeof value && null !== value) {
                switch(value.$$typeof) {
                  case object:
                    /** @type {number} */
                    entity = 12;
                    break e;
                  case array:
                    /** @type {number} */
                    entity = 11;
                    break e;
                  case boolean:
                    /** @type {number} */
                    entity = 13;
                    break e;
                  default:
                    if ("function" === typeof value.then) {
                      /** @type {number} */
                      entity = 4;
                      break e;
                    }
                }
              }
              get("130", null == value ? value : typeof value, "");
          }
        }
      }
    }
    return data = new Node(entity, options, end, data), data.type = value, data.expirationTime = v, data;
  }
  /**
   * @param {!Object} node
   * @param {number} data
   * @param {!Object} source
   * @param {!Object} name
   * @return {?}
   */
  function format(node, data, source, name) {
    return node = new Node(9, node, name, data), node.expirationTime = source, node;
  }
  /**
   * @param {!Object} value
   * @param {number} namespace
   * @param {!Object} path
   * @return {?}
   */
  function write(value, namespace, path) {
    return value = new Node(8, value, null, namespace), value.expirationTime = path, value;
  }
  /**
   * @param {!Object} self
   * @param {number} value
   * @param {!Object} result
   * @return {?}
   */
  function wrap(self, value, result) {
    return value = new Node(6, null !== self.children ? self.children : [], self.key, value), value.expirationTime = result, value.stateNode = {
      containerInfo : self.containerInfo,
      pendingChildren : null,
      implementation : self.implementation
    }, value;
  }
  /**
   * @param {!Object} s
   * @param {boolean} n
   * @return {undefined}
   */
  function search(s, n) {
    /** @type {boolean} */
    s.didError = false;
    var i = s.earliestPendingTime;
    if (0 === i) {
      s.earliestPendingTime = s.latestPendingTime = n;
    } else {
      if (i > n) {
        /** @type {boolean} */
        s.earliestPendingTime = n;
      } else {
        if (s.latestPendingTime < n) {
          /** @type {boolean} */
          s.latestPendingTime = n;
        }
      }
    }
    equal(n, s);
  }
  /**
   * @param {number} i
   * @param {!Object} data
   * @return {undefined}
   */
  function equal(i, data) {
    var j = data.earliestSuspendedTime;
    var l = data.latestSuspendedTime;
    var c = data.earliestPendingTime;
    var wd = data.latestPingedTime;
    c = 0 !== c ? c : wd;
    if (0 === c && (0 === i || l > i)) {
      c = l;
    }
    i = c;
    if (0 !== i && 0 !== j && j < i) {
      i = j;
    }
    data.nextExpirationTimeToWorkOn = c;
    /** @type {number} */
    data.expirationTime = i;
  }
  /**
   * @param {?} text
   * @return {?}
   */
  function parseInt(text) {
    return {
      baseState : text,
      firstUpdate : null,
      lastUpdate : null,
      firstCapturedUpdate : null,
      lastCapturedUpdate : null,
      firstEffect : null,
      lastEffect : null,
      firstCapturedEffect : null,
      lastCapturedEffect : null
    };
  }
  /**
   * @param {!Object} action
   * @return {?}
   */
  function join(action) {
    return {
      baseState : action.baseState,
      firstUpdate : action.firstUpdate,
      lastUpdate : action.lastUpdate,
      firstCapturedUpdate : null,
      lastCapturedUpdate : null,
      firstEffect : null,
      lastEffect : null,
      firstCapturedEffect : null,
      lastCapturedEffect : null
    };
  }
  /**
   * @param {!Object} str
   * @return {?}
   */
  function encodeURIComponent(str) {
    return {
      expirationTime : str,
      tag : 0,
      payload : null,
      callback : null,
      next : null,
      nextEffect : null
    };
  }
  /**
   * @param {!Object} data
   * @param {number} context
   * @return {undefined}
   */
  function reject(data, context) {
    if (null === data.lastUpdate) {
      data.firstUpdate = data.lastUpdate = context;
    } else {
      /** @type {number} */
      data.lastUpdate.next = context;
      /** @type {number} */
      data.lastUpdate = context;
    }
  }
  /**
   * @param {!Object} obj
   * @param {number} value
   * @return {undefined}
   */
  function map(obj, value) {
    var self = obj.alternate;
    if (null === self) {
      var key = obj.updateQueue;
      /** @type {null} */
      var input = null;
      if (null === key) {
        key = obj.updateQueue = parseInt(obj.memoizedState);
      }
    } else {
      key = obj.updateQueue;
      input = self.updateQueue;
      if (null === key) {
        if (null === input) {
          key = obj.updateQueue = parseInt(obj.memoizedState);
          input = self.updateQueue = parseInt(self.memoizedState);
        } else {
          key = obj.updateQueue = join(input);
        }
      } else {
        if (null === input) {
          input = self.updateQueue = join(key);
        }
      }
    }
    if (null === input || key === input) {
      reject(key, value);
    } else {
      if (null === key.lastUpdate || null === input.lastUpdate) {
        reject(key, value);
        reject(input, value);
      } else {
        reject(key, value);
        /** @type {number} */
        input.lastUpdate = value;
      }
    }
  }
  /**
   * @param {!Object} context
   * @param {(Array|string)} name
   * @return {undefined}
   */
  function before(context, name) {
    var n = context.updateQueue;
    n = null === n ? context.updateQueue = parseInt(context.memoizedState) : make_node(context, n);
    if (null === n.lastCapturedUpdate) {
      n.firstCapturedUpdate = n.lastCapturedUpdate = name;
    } else {
      /** @type {(Array|string)} */
      n.lastCapturedUpdate.next = name;
      /** @type {(Array|string)} */
      n.lastCapturedUpdate = name;
    }
  }
  /**
   * @param {!Object} self
   * @param {!Object} name
   * @return {?}
   */
  function make_node(self, name) {
    var $scope = self.alternate;
    return null !== $scope && name === $scope.updateQueue && (name = self.updateQueue = join(name)), name;
  }
  /**
   * @param {!Object} val
   * @param {!Object} required
   * @param {!Object} t
   * @param {?} data
   * @param {string} value
   * @param {!Object} scope
   * @return {?}
   */
  function validate(val, required, t, data, value, scope) {
    switch(t.tag) {
      case 1:
        return val = t.payload, "function" === typeof val ? val.call(scope, data, value) : val;
      case 3:
        /** @type {number} */
        val.effectTag = -1025 & val.effectTag | 64;
      case 0:
        if (val = t.payload, null === (value = "function" === typeof val ? val.call(scope, data, value) : val) || void 0 === value) {
          break;
        }
        return assign({}, data, value);
      case 2:
        /** @type {boolean} */
        results = true;
    }
    return data;
  }
  /**
   * @param {!Object} options
   * @param {!Object} self
   * @param {!Function} key
   * @param {!Object} parent
   * @param {number} target
   * @return {undefined}
   */
  function remove(options, self, key, parent, target) {
    /** @type {boolean} */
    results = false;
    self = make_node(options, self);
    var x = self.baseState;
    /** @type {null} */
    var original = null;
    /** @type {number} */
    var min = 0;
    var obj = self.firstUpdate;
    var value = x;
    for (; null !== obj;) {
      var current = obj.expirationTime;
      if (current > target) {
        if (null === original) {
          original = obj;
          x = value;
        }
        if (0 === min || min > current) {
          min = current;
        }
      } else {
        value = validate(options, self, obj, value, key, parent);
        if (null !== obj.callback) {
          options.effectTag |= 32;
          /** @type {null} */
          obj.nextEffect = null;
          if (null === self.lastEffect) {
            self.firstEffect = self.lastEffect = obj;
          } else {
            self.lastEffect.nextEffect = obj;
            self.lastEffect = obj;
          }
        }
      }
      obj = obj.next;
    }
    /** @type {null} */
    current = null;
    obj = self.firstCapturedUpdate;
    for (; null !== obj;) {
      var value = obj.expirationTime;
      if (value > target) {
        if (null === current) {
          current = obj;
          if (null === original) {
            x = value;
          }
        }
        if (0 === min || min > value) {
          min = value;
        }
      } else {
        value = validate(options, self, obj, value, key, parent);
        if (null !== obj.callback) {
          options.effectTag |= 32;
          /** @type {null} */
          obj.nextEffect = null;
          if (null === self.lastCapturedEffect) {
            self.firstCapturedEffect = self.lastCapturedEffect = obj;
          } else {
            self.lastCapturedEffect.nextEffect = obj;
            self.lastCapturedEffect = obj;
          }
        }
      }
      obj = obj.next;
    }
    if (null === original) {
      /** @type {null} */
      self.lastUpdate = null;
    }
    if (null === current) {
      /** @type {null} */
      self.lastCapturedUpdate = null;
    } else {
      options.effectTag |= 32;
    }
    if (null === original && null === current) {
      x = value;
    }
    self.baseState = x;
    /** @type {null} */
    self.firstUpdate = original;
    /** @type {null} */
    self.firstCapturedUpdate = current;
    /** @type {number} */
    options.expirationTime = min;
    options.memoizedState = value;
  }
  /**
   * @param {?} n
   * @param {!Object} a
   * @param {?} b
   * @return {undefined}
   */
  function append(n, a, b) {
    if (null !== a.firstCapturedUpdate) {
      if (null !== a.lastUpdate) {
        a.lastUpdate.next = a.firstCapturedUpdate;
        a.lastUpdate = a.lastCapturedUpdate;
      }
      /** @type {null} */
      a.firstCapturedUpdate = a.lastCapturedUpdate = null;
    }
    compareFunction(a.firstEffect, b);
    /** @type {null} */
    a.firstEffect = a.lastEffect = null;
    compareFunction(a.firstCapturedEffect, b);
    /** @type {null} */
    a.firstCapturedEffect = a.lastCapturedEffect = null;
  }
  /**
   * @param {!Object} current
   * @param {?} a
   * @return {undefined}
   */
  function compareFunction(current, a) {
    for (; null !== current;) {
      var parent = current.callback;
      if (null !== parent) {
        /** @type {null} */
        current.callback = null;
        var selector = a;
        if ("function" !== typeof parent) {
          get("191", parent);
        }
        parent.call(selector);
      }
      current = current.nextEffect;
    }
  }
  /**
   * @param {!Object} result
   * @param {!Object} data
   * @return {?}
   */
  function unpack(result, data) {
    return {
      value : result,
      source : data,
      stack : clean(data)
    };
  }
  /**
   * @param {!Object} data
   * @param {!Object} value
   * @return {undefined}
   */
  function doIt(data, value) {
    var that = data.type._context;
    error(info, that._currentValue, data);
    /** @type {!Object} */
    that._currentValue = value;
  }
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function scale(data) {
    /** @type {null} */
    var value = info.current;
    resolve(info, data);
    /** @type {null} */
    data.type._context._currentValue = value;
  }
  /**
   * @param {!Object} time
   * @return {undefined}
   */
  function toString(time) {
    /** @type {!Object} */
    Pot = time;
    /** @type {null} */
    mappedName = proto = null;
    /** @type {null} */
    time.firstContextDependency = null;
  }
  /**
   * @param {!Object} name
   * @param {number} obj
   * @return {?}
   */
  function recurse(name, obj) {
    return mappedName !== name && false !== obj && 0 !== obj && ("number" === typeof obj && 1073741823 !== obj || (mappedName = name, obj = 1073741823), obj = {
      context : name,
      observedBits : obj,
      next : null
    }, null === proto ? (null === Pot && get("277"), Pot.firstContextDependency = proto = obj) : proto = proto.next = obj), name._currentValue;
  }
  /**
   * @param {?} type
   * @return {?}
   */
  function translate(type) {
    return type === date && get("174"), type;
  }
  /**
   * @param {!Function} type
   * @param {!Object} val
   * @return {undefined}
   */
  function first(type, val) {
    error(request, val, type);
    error(o, type, type);
    error(options, date, type);
    var n = val.nodeType;
    switch(n) {
      case 9:
      case 11:
        val = (val = val.documentElement) ? val.namespaceURI : fn(null, "");
        break;
      default:
        n = 8 === n ? val.parentNode : val;
        val = n.namespaceURI || null;
        n = n.tagName;
        val = fn(val, n);
    }
    resolve(options, type);
    error(options, val, type);
  }
  /**
   * @param {!Object} d
   * @return {undefined}
   */
  function y(d) {
    resolve(options, d);
    resolve(o, d);
    resolve(request, d);
  }
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function checkAuthUserReplied(data) {
    translate(request.current);
    var value = translate(options.current);
    var val = fn(value, data.type);
    if (value !== val) {
      error(o, data, data);
      error(options, val, data);
    }
  }
  /**
   * @param {!Object} code
   * @return {undefined}
   */
  function is(code) {
    if (o.current === code) {
      resolve(options, code);
      resolve(o, code);
    }
  }
  /**
   * @param {!Object} x
   * @param {boolean} t
   * @param {!Array} a
   * @param {string} f
   * @return {undefined}
   */
  function setTimeout(x, t, a, f) {
    t = x.memoizedState;
    a = a(f, t);
    a = null === a || void 0 === a ? t : assign({}, t, a);
    /** @type {!Array} */
    x.memoizedState = a;
    if (null !== (f = x.updateQueue) && 0 === x.expirationTime) {
      /** @type {!Array} */
      f.baseState = a;
    }
  }
  /**
   * @param {(Object|string)} obj
   * @param {!Function} ast
   * @param {(Object|string)} file
   * @param {!Object} options
   * @param {(Object|string)} name
   * @param {!Object} data
   * @param {boolean} context
   * @return {?}
   */
  function logger(obj, ast, file, options, name, data, context) {
    return obj = obj.stateNode, "function" === typeof obj.shouldComponentUpdate ? obj.shouldComponentUpdate(options, data, context) : !ast.prototype || !ast.prototype.isPureReactComponent || (!warn(file, options) || !warn(name, data));
  }
  /**
   * @param {(Object|string)} value
   * @param {!Object} component
   * @param {boolean} props
   * @param {boolean} context
   * @return {undefined}
   */
  function register(value, component, props, context) {
    value = component.state;
    if ("function" === typeof component.componentWillReceiveProps) {
      component.componentWillReceiveProps(props, context);
    }
    if ("function" === typeof component.UNSAFE_componentWillReceiveProps) {
      component.UNSAFE_componentWillReceiveProps(props, context);
    }
    if (component.state !== value) {
      url.enqueueReplaceState(component, component.state, null);
    }
  }
  /**
   * @param {!Object} data
   * @param {boolean} value
   * @param {!Object} res
   * @param {number} _
   * @return {undefined}
   */
  function next(data, value, res, _) {
    var options = data.stateNode;
    var n = isNaN(value) ? index : self.current;
    /** @type {!Object} */
    options.props = res;
    options.state = data.memoizedState;
    options.refs = refs;
    options.context = $(data, n);
    n = data.updateQueue;
    if (null !== n) {
      remove(data, n, res, options, _);
      options.state = data.memoizedState;
    }
    n = value.getDerivedStateFromProps;
    if ("function" === typeof n) {
      setTimeout(data, value, n, res);
      options.state = data.memoizedState;
    }
    if (!("function" === typeof value.getDerivedStateFromProps || "function" === typeof options.getSnapshotBeforeUpdate || "function" !== typeof options.UNSAFE_componentWillMount && "function" !== typeof options.componentWillMount)) {
      value = options.state;
      if ("function" === typeof options.componentWillMount) {
        options.componentWillMount();
      }
      if ("function" === typeof options.UNSAFE_componentWillMount) {
        options.UNSAFE_componentWillMount();
      }
      if (value !== options.state) {
        url.enqueueReplaceState(options, options.state, null);
      }
      if (null !== (n = data.updateQueue)) {
        remove(data, n, res, options, _);
        options.state = data.memoizedState;
      }
    }
    if ("function" === typeof options.componentDidMount) {
      data.effectTag |= 4;
    }
  }
  /**
   * @param {string} x
   * @param {!Object} o
   * @param {!Object} node
   * @return {?}
   */
  function copy(x, o, node) {
    if (null !== (x = node.ref) && "function" !== typeof x && "object" !== typeof x) {
      if (node._owner) {
        node = node._owner;
        var scope = void 0;
        if (node) {
          if (2 !== node.tag && 3 !== node.tag) {
            get("110");
          }
          scope = node.stateNode;
        }
        if (!scope) {
          get("147", x);
        }
        /** @type {string} */
        var p = "" + x;
        return null !== o && null !== o.ref && "function" === typeof o.ref && o.ref._stringRef === p ? o.ref : (o = function(url) {
          var data = scope.refs;
          if (data === refs) {
            data = scope.refs = {};
          }
          if (null === url) {
            delete data[p];
          } else {
            /** @type {!Object} */
            data[p] = url;
          }
        }, o._stringRef = p, o);
      }
      if ("string" !== typeof x) {
        get("284");
      }
      if (!node._owner) {
        get("254", x);
      }
    }
    return x;
  }
  /**
   * @param {!Object} name
   * @param {!Object} val
   * @return {undefined}
   */
  function assert(name, val) {
    if ("textarea" !== name.type) {
      get("31", "[object Object]" === Object.prototype.toString.call(val) ? "object with keys {" + Object.keys(val).join(", ") + "}" : val, "");
    }
  }
  /**
   * @param {boolean} callback
   * @return {?}
   */
  function init(callback) {
    /**
     * @param {!Object} config
     * @param {string} value
     * @return {undefined}
     */
    function push(config, value) {
      if (callback) {
        var title = config.lastEffect;
        if (null !== title) {
          /** @type {string} */
          title.nextEffect = value;
          /** @type {string} */
          config.lastEffect = value;
        } else {
          config.firstEffect = config.lastEffect = value;
        }
        /** @type {null} */
        value.nextEffect = null;
        /** @type {number} */
        value.effectTag = 8;
      }
    }
    /**
     * @param {!Object} str
     * @param {string} next
     * @return {?}
     */
    function done(str, next) {
      if (!callback) {
        return null;
      }
      for (; null !== next;) {
        push(str, next);
        next = next.sibling;
      }
      return null;
    }
    /**
     * @param {!Object} t
     * @param {string} node
     * @return {?}
     */
    function E(t, node) {
      /** @type {!Map} */
      t = new Map;
      for (; null !== node;) {
        if (null !== node.key) {
          t.set(node.key, node);
        } else {
          t.set(node.index, node);
        }
        node = node.sibling;
      }
      return t;
    }
    /**
     * @param {!Object} obj
     * @param {!Object} text
     * @param {!Object} value
     * @return {?}
     */
    function assign(obj, text, value) {
      return obj = parse(obj, text, value), obj.index = 0, obj.sibling = null, obj;
    }
    /**
     * @param {!Object} obj
     * @param {string} result
     * @param {string} index
     * @return {?}
     */
    function merge(obj, result, index) {
      return obj.index = index, callback ? null !== (index = obj.alternate) ? (index = index.index, index < result ? (obj.effectTag = 2, result) : index) : (obj.effectTag = 2, result) : result;
    }
    /**
     * @param {!Object} init
     * @return {?}
     */
    function init(init) {
      return callback && null === init.alternate && (init.effectTag = 2), init;
    }
    /**
     * @param {string} result
     * @param {!Object} value
     * @param {!Object} source
     * @param {!Object} id
     * @return {?}
     */
    function create(result, value, source, id) {
      return null === value || 8 !== value.tag ? (value = write(source, result.mode, id), value.return = result, value) : (value = assign(value, source, id), value.return = result, value);
    }
    /**
     * @param {string} v
     * @param {!Object} x
     * @param {!Object} options
     * @param {!Object} result
     * @return {?}
     */
    function handler(v, x, options, result) {
      return null !== x && x.type === options.type ? (result = assign(x, options.props, result), result.ref = copy(v, x, options), result.return = v, result) : (result = extend(options, v.mode, result), result.ref = copy(v, x, options), result.return = v, result);
    }
    /**
     * @param {string} v
     * @param {!Object} node
     * @param {!Object} self
     * @param {!Object} i
     * @return {?}
     */
    function put(v, node, self, i) {
      return null === node || 6 !== node.tag || node.stateNode.containerInfo !== self.containerInfo || node.stateNode.implementation !== self.implementation ? (node = wrap(self, v.mode, i), node.return = v, node) : (node = assign(node, self.children || [], i), node.return = v, node);
    }
    /**
     * @param {string} value
     * @param {!Object} result
     * @param {!Object} message
     * @param {!Object} id
     * @param {!Object} target
     * @return {?}
     */
    function callback(value, result, message, id, target) {
      return null === result || 9 !== result.tag ? (result = format(message, value.mode, id, target), result.return = value, result) : (result = assign(result, message, id), result.return = value, result);
    }
    /**
     * @param {string} result
     * @param {!Object} value
     * @param {!Object} options
     * @return {?}
     */
    function fn(result, value, options) {
      if ("string" === typeof value || "number" === typeof value) {
        return value = write("" + value, result.mode, options), value.return = result, value;
      }
      if ("object" === typeof value && null !== value) {
        switch(value.$$typeof) {
          case ashr:
            return options = extend(value, result.mode, options), options.ref = copy(result, null, value), options.return = result, options;
          case Infinity:
            return value = wrap(value, result.mode, options), value.return = result, value;
        }
        if (isArray(value) || isString(value)) {
          return value = format(value, result.mode, options, null), value.return = result, value;
        }
        assert(result, value);
      }
      return null;
    }
    /**
     * @param {string} options
     * @param {!Object} key
     * @param {!Object} value
     * @param {!Object} i
     * @return {?}
     */
    function set(options, key, value, i) {
      var object = null !== key ? key.key : null;
      if ("string" === typeof value || "number" === typeof value) {
        return null !== object ? null : create(options, key, "" + value, i);
      }
      if ("object" === typeof value && null !== value) {
        switch(value.$$typeof) {
          case ashr:
            return value.key === object ? value.type === undefined ? callback(options, key, value.props.children, i, object) : handler(options, key, value, i) : null;
          case Infinity:
            return value.key === object ? put(options, key, value, i) : null;
        }
        if (isArray(value) || isString(value)) {
          return null !== object ? null : callback(options, key, value, i, null);
        }
        assert(options, value);
      }
      return null;
    }
    /**
     * @param {!Object} options
     * @param {string} url
     * @param {?} key
     * @param {!Object} value
     * @param {!Object} i
     * @return {?}
     */
    function f(options, url, key, value, i) {
      if ("string" === typeof value || "number" === typeof value) {
        return options = options.get(key) || null, create(url, options, "" + value, i);
      }
      if ("object" === typeof value && null !== value) {
        switch(value.$$typeof) {
          case ashr:
            return options = options.get(null === value.key ? key : value.key) || null, value.type === undefined ? callback(url, options, value.props.children, i, value.key) : handler(url, options, value, i);
          case Infinity:
            return options = options.get(null === value.key ? key : value.key) || null, put(url, options, value, i);
        }
        if (isArray(value) || isString(value)) {
          return options = options.get(key) || null, callback(url, options, value, i, null);
        }
        assert(url, value);
      }
      return null;
    }
    /**
     * @param {string} a
     * @param {!Object} val
     * @param {!Object} args
     * @param {!Object} name
     * @return {?}
     */
    function update(a, val, args, name) {
      /** @type {null} */
      var result = null;
      /** @type {null} */
      var prev = null;
      /** @type {!Object} */
      var obj = val;
      /** @type {number} */
      var i = val = 0;
      /** @type {null} */
      var node = null;
      for (; null !== obj && i < args.length; i++) {
        if (obj.index > i) {
          node = obj;
          /** @type {null} */
          obj = null;
        } else {
          node = obj.sibling;
        }
        var ret = set(a, obj, args[i], name);
        if (null === ret) {
          if (null === obj) {
            /** @type {null} */
            obj = node;
          }
          break;
        }
        if (callback && obj && null === ret.alternate) {
          push(a, obj);
        }
        val = merge(ret, val, i);
        if (null === prev) {
          result = ret;
        } else {
          prev.sibling = ret;
        }
        prev = ret;
        /** @type {null} */
        obj = node;
      }
      if (i === args.length) {
        return done(a, obj), result;
      }
      if (null === obj) {
        for (; i < args.length; i++) {
          if (obj = fn(a, args[i], name)) {
            val = merge(obj, val, i);
            if (null === prev) {
              result = obj;
            } else {
              prev.sibling = obj;
            }
            prev = obj;
          }
        }
        return result;
      }
      obj = E(a, obj);
      for (; i < args.length; i++) {
        if (node = f(obj, a, i, args[i], name)) {
          if (callback && null !== node.alternate) {
            obj.delete(null === node.key ? i : node.key);
          }
          val = merge(node, val, i);
          if (null === prev) {
            result = node;
          } else {
            prev.sibling = node;
          }
          prev = node;
        }
      }
      return callback && obj.forEach(function(B) {
        return push(a, B);
      }), result;
    }
    /**
     * @param {string} a
     * @param {!Object} val
     * @param {!Object} e
     * @param {!Object} data
     * @return {?}
     */
    function load(a, val, e, data) {
      var str = isString(e);
      if ("function" !== typeof str) {
        get("150");
      }
      if (null == (e = str.call(e))) {
        get("151");
      }
      /** @type {null} */
      var prev = str = null;
      /** @type {!Object} */
      var node = val;
      /** @type {number} */
      var key = val = 0;
      /** @type {null} */
      var child = null;
      var result = e.next();
      for (; null !== node && !result.done; key++, result = e.next()) {
        if (node.index > key) {
          child = node;
          /** @type {null} */
          node = null;
        } else {
          child = node.sibling;
        }
        var obj = set(a, node, result.value, data);
        if (null === obj) {
          if (!node) {
            /** @type {null} */
            node = child;
          }
          break;
        }
        if (callback && node && null === obj.alternate) {
          push(a, node);
        }
        val = merge(obj, val, key);
        if (null === prev) {
          str = obj;
        } else {
          prev.sibling = obj;
        }
        prev = obj;
        /** @type {null} */
        node = child;
      }
      if (result.done) {
        return done(a, node), str;
      }
      if (null === node) {
        for (; !result.done; key++, result = e.next()) {
          if (null !== (result = fn(a, result.value, data))) {
            val = merge(result, val, key);
            if (null === prev) {
              str = result;
            } else {
              prev.sibling = result;
            }
            prev = result;
          }
        }
        return str;
      }
      node = E(a, node);
      for (; !result.done; key++, result = e.next()) {
        if (null !== (result = f(node, a, key, result.value, data))) {
          if (callback && null !== result.alternate) {
            node.delete(null === result.key ? key : result.key);
          }
          val = merge(result, val, key);
          if (null === prev) {
            str = result;
          } else {
            prev.sibling = result;
          }
          prev = result;
        }
      }
      return callback && node.forEach(function(B) {
        return push(a, B);
      }), str;
    }
    return function(data, obj, value, options) {
      /** @type {boolean} */
      var node = "object" === typeof value && null !== value && value.type === undefined && null === value.key;
      if (node) {
        value = value.props.children;
      }
      /** @type {boolean} */
      var result = "object" === typeof value && null !== value;
      if (result) {
        switch(value.$$typeof) {
          case ashr:
            e: {
              result = value.key;
              /** @type {!Object} */
              node = obj;
              for (; null !== node;) {
                if (node.key === result) {
                  if (9 === node.tag ? value.type === undefined : node.type === value.type) {
                    done(data, node.sibling);
                    obj = assign(node, value.type === undefined ? value.props.children : value.props, options);
                    obj.ref = copy(data, node, value);
                    /** @type {!Object} */
                    obj.return = data;
                    /** @type {!Object} */
                    data = obj;
                    break e;
                  }
                  done(data, node);
                  break;
                }
                push(data, node);
                node = node.sibling;
              }
              if (value.type === undefined) {
                obj = format(value.props.children, data.mode, options, value.key);
                /** @type {!Object} */
                obj.return = data;
                /** @type {!Object} */
                data = obj;
              } else {
                options = extend(value, data.mode, options);
                options.ref = copy(data, obj, value);
                /** @type {!Object} */
                options.return = data;
                /** @type {!Object} */
                data = options;
              }
            }
            return init(data);
          case Infinity:
            e: {
              node = value.key;
              for (; null !== obj;) {
                if (obj.key === node) {
                  if (6 === obj.tag && obj.stateNode.containerInfo === value.containerInfo && obj.stateNode.implementation === value.implementation) {
                    done(data, obj.sibling);
                    obj = assign(obj, value.children || [], options);
                    /** @type {!Object} */
                    obj.return = data;
                    /** @type {!Object} */
                    data = obj;
                    break e;
                  }
                  done(data, obj);
                  break;
                }
                push(data, obj);
                obj = obj.sibling;
              }
              obj = wrap(value, data.mode, options);
              /** @type {!Object} */
              obj.return = data;
              /** @type {!Object} */
              data = obj;
            }
            return init(data);
        }
      }
      if ("string" === typeof value || "number" === typeof value) {
        return value = "" + value, null !== obj && 8 === obj.tag ? (done(data, obj.sibling), obj = assign(obj, value, options), obj.return = data, data = obj) : (done(data, obj), obj = write(value, data.mode, options), obj.return = data, data = obj), init(data);
      }
      if (isArray(value)) {
        return update(data, obj, value, options);
      }
      if (isString(value)) {
        return load(data, obj, value, options);
      }
      if (result && assert(data, value), "undefined" === typeof value && !node) {
        switch(data.tag) {
          case 2:
          case 3:
          case 0:
            options = data.type;
            get("152", options.displayName || options.name || "Component");
        }
      }
      return done(data, obj);
    };
  }
  /**
   * @param {string} value
   * @param {?} element
   * @return {undefined}
   */
  function max(value, element) {
    var node = new Node(7, null, null, 0);
    /** @type {string} */
    node.type = "DELETED";
    node.stateNode = element;
    /** @type {string} */
    node.return = value;
    /** @type {number} */
    node.effectTag = 8;
    if (null !== value.lastEffect) {
      value.lastEffect.nextEffect = node;
      value.lastEffect = node;
    } else {
      value.firstEffect = value.lastEffect = node;
    }
  }
  /**
   * @param {!Object} response
   * @param {!Object} e
   * @return {?}
   */
  function listener(response, e) {
    switch(response.tag) {
      case 7:
        var type = response.type;
        return null !== (e = 1 !== e.nodeType || type.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) && (response.stateNode = e, true);
      case 8:
        return null !== (e = "" === response.pendingProps || 3 !== e.nodeType ? null : e) && (response.stateNode = e, true);
      default:
        return false;
    }
  }
  /**
   * @param {!Object} result
   * @return {?}
   */
  function step(result) {
    if (abort) {
      var value = obj;
      if (value) {
        var x = value;
        if (!listener(result, value)) {
          if (!(value = abs(x)) || !listener(result, value)) {
            return result.effectTag |= 2, abort = false, void(root = result);
          }
          max(root, x);
        }
        /** @type {!Object} */
        root = result;
        obj = iterate(value);
      } else {
        result.effectTag |= 2;
        /** @type {boolean} */
        abort = false;
        /** @type {!Object} */
        root = result;
      }
    }
  }
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  function read(value) {
    value = value.return;
    for (; null !== value && 7 !== value.tag && 5 !== value.tag;) {
      value = value.return;
    }
    /** @type {!Object} */
    root = value;
  }
  /**
   * @param {(Object|string)} node
   * @return {?}
   */
  function load(node) {
    if (node !== root) {
      return false;
    }
    if (!abort) {
      return read(node), abort = true, false;
    }
    var value = node.type;
    if (7 !== node.tag || "head" !== value && "body" !== value && !filter(value, node.memoizedProps)) {
      value = obj;
      for (; value;) {
        max(node, value);
        value = abs(value);
      }
    }
    return read(node), obj = root ? abs(node.stateNode) : null, true;
  }
  /**
   * @return {undefined}
   */
  function hasXYZ() {
    /** @type {null} */
    obj = root = null;
    /** @type {boolean} */
    abort = false;
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function loadJSON(options) {
    switch(options._reactStatus) {
      case 1:
        return options._reactResult;
      case 2:
        throw options._reactResult;
      case 0:
        throw options;
      default:
        throw options._reactStatus = 0, options.then(function(value) {
          if (0 === options._reactStatus) {
            if (options._reactStatus = 1, "object" === typeof value && null !== value) {
              var type = value.default;
              value = void 0 !== type && null !== type ? type : value;
            }
            /** @type {!Object} */
            options._reactResult = value;
          }
        }, function(mediaTemplate) {
          if (0 === options._reactStatus) {
            /** @type {number} */
            options._reactStatus = 2;
            options._reactResult = mediaTemplate;
          }
        }), options;
    }
  }
  /**
   * @param {!Object} object
   * @param {!Object} value
   * @param {!Object} options
   * @param {?} meta
   * @return {undefined}
   */
  function debug(object, value, options, meta) {
    value.child = null === object ? transform(value, null, options, meta) : compile(value, object.child, options, meta);
  }
  /**
   * @param {!Object} obj
   * @param {!Object} event
   * @param {!Object} fn
   * @param {undefined} name
   * @param {?} data
   * @return {?}
   */
  function log(obj, event, fn, name, data) {
    fn = fn.render;
    var key = event.ref;
    return response.current || event.memoizedProps !== name || key !== (null !== obj ? obj.ref : null) ? (fn = fn(name, key), debug(obj, event, fn, data), event.memoizedProps = name, event.child) : save(obj, event, data);
  }
  /**
   * @param {!Object} instance
   * @param {!Object} data
   * @return {undefined}
   */
  function setDataAndReturn(instance, data) {
    var m2 = data.ref;
    if (null === instance && null !== m2 || null !== instance && instance.ref !== m2) {
      data.effectTag |= 128;
    }
  }
  /**
   * @param {!Object} name
   * @param {!Object} t
   * @param {!Object} key
   * @param {?} method
   * @param {number} value
   * @return {?}
   */
  function method(name, t, key, method, value) {
    var i = isNaN(key) ? index : self.current;
    return i = $(t, i), toString(t, value), key = key(method, i), t.effectTag |= 1, debug(name, t, key, value), t.memoizedProps = method, t.child;
  }
  /**
   * @param {!Object} elem
   * @param {!Object} options
   * @param {!Object} e
   * @param {!Object} type
   * @param {number} data
   * @return {?}
   */
  function connect(elem, options, e, type, data) {
    if (isNaN(e)) {
      /** @type {boolean} */
      var CHIP_TRANSFORM_TEMPLATE = true;
      sync(options);
    } else {
      /** @type {boolean} */
      CHIP_TRANSFORM_TEMPLATE = false;
    }
    if (toString(options, data), null === elem) {
      if (null === options.stateNode) {
        var component = isNaN(e) ? index : self.current;
        var text = e.contextTypes;
        /** @type {boolean} */
        var value = null !== text && void 0 !== text;
        text = value ? $(options, component) : page;
        var source = new e(type, text);
        options.memoizedState = null !== source.state && void 0 !== source.state ? source.state : null;
        source.updater = url;
        options.stateNode = source;
        /** @type {!Object} */
        source._reactInternalFiber = options;
        if (value) {
          value = options.stateNode;
          value.__reactInternalMemoizedUnmaskedChildContext = component;
          value.__reactInternalMemoizedMaskedChildContext = text;
        }
        next(options, e, type, data);
        /** @type {boolean} */
        type = true;
      } else {
        component = options.stateNode;
        text = options.memoizedProps;
        component.props = text;
        var id = component.context;
        value = isNaN(e) ? index : self.current;
        value = $(options, value);
        var v = e.getDerivedStateFromProps;
        if (!((source = "function" === typeof v || "function" === typeof component.getSnapshotBeforeUpdate) || "function" !== typeof component.UNSAFE_componentWillReceiveProps && "function" !== typeof component.componentWillReceiveProps)) {
          if (text !== type || id !== value) {
            register(options, component, type, value);
          }
        }
        /** @type {boolean} */
        results = false;
        var state = options.memoizedState;
        id = component.state = state;
        var n = options.updateQueue;
        if (null !== n) {
          remove(options, n, type, component, data);
          id = options.memoizedState;
        }
        if (text !== type || state !== id || response.current || results) {
          if ("function" === typeof v) {
            setTimeout(options, e, v, type);
            id = options.memoizedState;
          }
          if (text = results || logger(options, e, text, type, state, id, value)) {
            if (!(source || "function" !== typeof component.UNSAFE_componentWillMount && "function" !== typeof component.componentWillMount)) {
              if ("function" === typeof component.componentWillMount) {
                component.componentWillMount();
              }
              if ("function" === typeof component.UNSAFE_componentWillMount) {
                component.UNSAFE_componentWillMount();
              }
            }
            if ("function" === typeof component.componentDidMount) {
              options.effectTag |= 4;
            }
          } else {
            if ("function" === typeof component.componentDidMount) {
              options.effectTag |= 4;
            }
            /** @type {!Object} */
            options.memoizedProps = type;
            options.memoizedState = id;
          }
          /** @type {!Object} */
          component.props = type;
          component.state = id;
          component.context = value;
          type = text;
        } else {
          if ("function" === typeof component.componentDidMount) {
            options.effectTag |= 4;
          }
          /** @type {boolean} */
          type = false;
        }
      }
    } else {
      component = options.stateNode;
      text = options.memoizedProps;
      component.props = text;
      id = component.context;
      value = isNaN(e) ? index : self.current;
      value = $(options, value);
      v = e.getDerivedStateFromProps;
      if (!((source = "function" === typeof v || "function" === typeof component.getSnapshotBeforeUpdate) || "function" !== typeof component.UNSAFE_componentWillReceiveProps && "function" !== typeof component.componentWillReceiveProps)) {
        if (text !== type || id !== value) {
          register(options, component, type, value);
        }
      }
      /** @type {boolean} */
      results = false;
      id = options.memoizedState;
      state = component.state = id;
      n = options.updateQueue;
      if (null !== n) {
        remove(options, n, type, component, data);
        state = options.memoizedState;
      }
      if (text !== type || id !== state || response.current || results) {
        if ("function" === typeof v) {
          setTimeout(options, e, v, type);
          state = options.memoizedState;
        }
        if (v = results || logger(options, e, text, type, id, state, value)) {
          if (!(source || "function" !== typeof component.UNSAFE_componentWillUpdate && "function" !== typeof component.componentWillUpdate)) {
            if ("function" === typeof component.componentWillUpdate) {
              component.componentWillUpdate(type, state, value);
            }
            if ("function" === typeof component.UNSAFE_componentWillUpdate) {
              component.UNSAFE_componentWillUpdate(type, state, value);
            }
          }
          if ("function" === typeof component.componentDidUpdate) {
            options.effectTag |= 4;
          }
          if ("function" === typeof component.getSnapshotBeforeUpdate) {
            options.effectTag |= 256;
          }
        } else {
          if (!("function" !== typeof component.componentDidUpdate || text === elem.memoizedProps && id === elem.memoizedState)) {
            options.effectTag |= 4;
          }
          if (!("function" !== typeof component.getSnapshotBeforeUpdate || text === elem.memoizedProps && id === elem.memoizedState)) {
            options.effectTag |= 256;
          }
          /** @type {!Object} */
          options.memoizedProps = type;
          options.memoizedState = state;
        }
        /** @type {!Object} */
        component.props = type;
        component.state = state;
        component.context = value;
        type = v;
      } else {
        if (!("function" !== typeof component.componentDidUpdate || text === elem.memoizedProps && id === elem.memoizedState)) {
          options.effectTag |= 4;
        }
        if (!("function" !== typeof component.getSnapshotBeforeUpdate || text === elem.memoizedProps && id === elem.memoizedState)) {
          options.effectTag |= 256;
        }
        /** @type {boolean} */
        type = false;
      }
    }
    return end(elem, options, e, type, CHIP_TRANSFORM_TEMPLATE, data);
  }
  /**
   * @param {!Object} e
   * @param {!Object} data
   * @param {!Function} c
   * @param {!Object} d
   * @param {!Function} str
   * @param {?} opts
   * @return {?}
   */
  function end(e, data, c, d, str, opts) {
    setDataAndReturn(e, data);
    /** @type {boolean} */
    var burst = 0 !== (64 & data.effectTag);
    if (!d && !burst) {
      return str && traverse(data, c, false), save(e, data, opts);
    }
    d = data.stateNode;
    /** @type {!Object} */
    subList.current = data;
    var offset = burst ? null : d.render();
    return data.effectTag |= 1, null !== e && burst && (debug(e, data, null, opts), data.child = null), debug(e, data, offset, opts), data.memoizedState = d.state, data.memoizedProps = d.props, str && traverse(data, c, true), data.child;
  }
  /**
   * @param {!Object} obj
   * @return {undefined}
   */
  function _isLikeFile(obj) {
    var settings = obj.stateNode;
    if (settings.pendingContext) {
      addListener(obj, settings.pendingContext, settings.pendingContext !== settings.context);
    } else {
      if (settings.context) {
        addListener(obj, settings.context, false);
      }
    }
    first(obj, settings.containerInfo);
  }
  /**
   * @param {!Object} type
   * @param {string} data
   * @return {?}
   */
  function extract(type, data) {
    if (type && type.defaultProps) {
      data = assign({}, data);
      type = type.defaultProps;
      var key;
      for (key in type) {
        if (void 0 === data[key]) {
          data[key] = type[key];
        }
      }
    }
    return data;
  }
  /**
   * @param {!Object} element
   * @param {!Object} data
   * @param {!Object} input
   * @param {number} options
   * @return {?}
   */
  function create(element, data, input, options) {
    if (null !== element) {
      get("155");
    }
    var type = data.pendingProps;
    if ("object" === typeof input && null !== input && "function" === typeof input.then) {
      input = loadJSON(input);
      /** @type {!Object} */
      var value = input;
      /** @type {number} */
      value = "function" === typeof value ? pick(value) ? 3 : 1 : void 0 !== value && null !== value && value.$$typeof ? 14 : 4;
      /** @type {number} */
      value = data.tag = value;
      var args = extract(input, type);
      switch(value) {
        case 1:
          return method(element, data, input, args, options);
        case 3:
          return connect(element, data, input, args, options);
        case 14:
          return log(element, data, input, args, options);
        default:
          get("283", input);
      }
    }
    if (value = $(data, self.current), toString(data, options), value = input(type, value), data.effectTag |= 1, "object" === typeof value && null !== value && "function" === typeof value.render && void 0 === value.$$typeof) {
      /** @type {number} */
      data.tag = 2;
      if (isNaN(input)) {
        /** @type {boolean} */
        args = true;
        sync(data);
      } else {
        /** @type {boolean} */
        args = false;
      }
      data.memoizedState = null !== value.state && void 0 !== value.state ? value.state : null;
      var start = input.getDerivedStateFromProps;
      return "function" === typeof start && setTimeout(data, input, start, type), value.updater = url, data.stateNode = value, value._reactInternalFiber = data, next(data, input, type, options), end(element, data, input, true, args, options);
    }
    return data.tag = 0, debug(element, data, value, options), data.memoizedProps = type, data.child;
  }
  /**
   * @param {!Object} options
   * @param {!Object} result
   * @param {!Object} node
   * @return {?}
   */
  function save(options, result, node) {
    if (null !== options) {
      result.firstContextDependency = options.firstContextDependency;
    }
    var courseSections = result.childExpirationTime;
    if (0 === courseSections || courseSections > node) {
      return null;
    }
    if (null !== options && result.child !== options.child && get("153"), null !== result.child) {
      options = result.child;
      node = parse(options, options.pendingProps, options.expirationTime);
      /** @type {!Object} */
      result.child = node;
      /** @type {!Object} */
      node.return = result;
      for (; null !== options.sibling;) {
        options = options.sibling;
        node = node.sibling = parse(options, options.pendingProps, options.expirationTime);
        /** @type {!Object} */
        node.return = result;
      }
      /** @type {null} */
      node.sibling = null;
    }
    return result.child;
  }
  /**
   * @param {!Object} value
   * @param {!Object} data
   * @param {number} options
   * @return {?}
   */
  function add(value, data, options) {
    var n = data.expirationTime;
    if (!response.current && (0 === n || n > options)) {
      switch(data.tag) {
        case 5:
          _isLikeFile(data);
          hasXYZ();
          break;
        case 7:
          checkAuthUserReplied(data);
          break;
        case 2:
          if (isNaN(data.type)) {
            sync(data);
          }
          break;
        case 3:
          if (isNaN(data.type._reactResult)) {
            sync(data);
          }
          break;
        case 6:
          first(data, data.stateNode.containerInfo);
          break;
        case 12:
          doIt(data, data.memoizedProps.value);
      }
      return save(value, data, options);
    }
    switch(data.expirationTime = 0, data.tag) {
      case 4:
        return create(value, data, data.type, options);
      case 0:
        return method(value, data, data.type, data.pendingProps, options);
      case 1:
        var i = data.type._reactResult;
        return n = data.pendingProps, value = method(value, data, i, extract(i, n), options), data.memoizedProps = n, value;
      case 2:
        return connect(value, data, data.type, data.pendingProps, options);
      case 3:
        return i = data.type._reactResult, n = data.pendingProps, value = connect(value, data, i, extract(i, n), options), data.memoizedProps = n, value;
      case 5:
        return _isLikeFile(data), n = data.updateQueue, null === n && get("282"), i = data.memoizedState, i = null !== i ? i.element : null, remove(data, n, data.pendingProps, null, options), n = data.memoizedState.element, n === i ? (hasXYZ(), data = save(value, data, options)) : (i = data.stateNode, (i = (null === value || null === value.child) && i.hydrate) && (obj = iterate(data.stateNode.containerInfo), root = data, i = abort = true), i ? (data.effectTag |= 2, data.child = transform(data, null,
          n, options)) : (debug(value, data, n, options), hasXYZ()), data = data.child), data;
      case 7:
        checkAuthUserReplied(data);
        if (null === value) {
          step(data);
        }
        n = data.type;
        i = data.pendingProps;
        var a = null !== value ? value.memoizedProps : null;
        var item = i.children;
        return filter(n, i) ? item = null : null !== a && filter(n, a) && (data.effectTag |= 16), setDataAndReturn(value, data), 1073741823 !== options && 1 & data.mode && i.hidden ? (data.expirationTime = 1073741823, data.memoizedProps = i, data = null) : (debug(value, data, item, options), data.memoizedProps = i, data = data.child), data;
      case 8:
        return null === value && step(data), data.memoizedProps = data.pendingProps, null;
      case 16:
        return null;
      case 6:
        return first(data, data.stateNode.containerInfo), n = data.pendingProps, null === value ? data.child = compile(data, null, n, options) : debug(value, data, n, options), data.memoizedProps = n, data.child;
      case 13:
        return log(value, data, data.type, data.pendingProps, options);
      case 14:
        return i = data.type._reactResult, n = data.pendingProps, value = log(value, data, i, extract(i, n), options), data.memoizedProps = n, value;
      case 9:
        return n = data.pendingProps, debug(value, data, n, options), data.memoizedProps = n, data.child;
      case 10:
        return n = data.pendingProps.children, debug(value, data, n, options), data.memoizedProps = n, data.child;
      case 15:
        return n = data.pendingProps, debug(value, data, n.children, options), data.memoizedProps = n, data.child;
      case 12:
        e: {
          if (n = data.type._context, i = data.pendingProps, item = data.memoizedProps, a = i.value, data.memoizedProps = i, doIt(data, a), null !== item) {
            var i = item.value;
            if (0 === (a = i === a && (0 !== i || 1 / i === 1 / a) || i !== i && a !== a ? 0 : 0 | ("function" === typeof n._calculateChangedBits ? n._calculateChangedBits(i, a) : 1073741823))) {
              if (item.children === i.children && !response.current) {
                data = save(value, data, options);
                break e;
              }
            } else {
              if (null !== (item = data.child)) {
                /** @type {!Object} */
                item.return = data;
              }
              for (; null !== item;) {
                if (null !== (i = item.firstContextDependency)) {
                  do {
                    if (i.context === n && 0 !== (i.observedBits & a)) {
                      if (2 === item.tag || 3 === item.tag) {
                        var node = encodeURIComponent(options);
                        /** @type {number} */
                        node.tag = 2;
                        map(item, node);
                      }
                      if (0 === item.expirationTime || item.expirationTime > options) {
                        /** @type {number} */
                        item.expirationTime = options;
                      }
                      node = item.alternate;
                      if (null !== node && (0 === node.expirationTime || node.expirationTime > options)) {
                        /** @type {number} */
                        node.expirationTime = options;
                      }
                      var fn = item.return;
                      for (; null !== fn;) {
                        if (node = fn.alternate, 0 === fn.childExpirationTime || fn.childExpirationTime > options) {
                          /** @type {number} */
                          fn.childExpirationTime = options;
                          if (null !== node && (0 === node.childExpirationTime || node.childExpirationTime > options)) {
                            /** @type {number} */
                            node.childExpirationTime = options;
                          }
                        } else {
                          if (null === node || !(0 === node.childExpirationTime || node.childExpirationTime > options)) {
                            break;
                          }
                          /** @type {number} */
                          node.childExpirationTime = options;
                        }
                        fn = fn.return;
                      }
                    }
                    node = item.child;
                    i = i.next;
                  } while (null !== i);
                } else {
                  node = 12 === item.tag && item.type === data.type ? null : item.child;
                }
                if (null !== node) {
                  node.return = item;
                } else {
                  node = item;
                  for (; null !== node;) {
                    if (node === data) {
                      /** @type {null} */
                      node = null;
                      break;
                    }
                    if (null !== (item = node.sibling)) {
                      item.return = node.return;
                      node = item;
                      break;
                    }
                    node = node.return;
                  }
                }
                item = node;
              }
            }
          }
          debug(value, data, i.children, options);
          data = data.child;
        }
        return data;
      case 11:
        return a = data.type, n = data.pendingProps, i = n.children, toString(data, options), a = recurse(a, n.unstable_observedBits), i = i(a), data.effectTag |= 1, debug(value, data, i, options), data.memoizedProps = n, data.child;
      default:
        get("156");
    }
  }
  /**
   * @param {?} rect
   * @return {undefined}
   */
  function trim(rect) {
    rect.effectTag |= 4;
  }
  /**
   * @param {!Object} obj
   * @param {string} value
   * @return {undefined}
   */
  function parser(obj, value) {
    var node = value.source;
    var test = value.stack;
    if (null === test && null !== node) {
      test = clean(node);
    }
    if (null !== node) {
      forEach(node.type);
    }
    value = value.value;
    if (null !== obj && 2 === obj.tag) {
      forEach(obj.type);
    }
    try {
      console.error(value);
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  function toggle(value) {
    var style = value.ref;
    if (null !== style) {
      if ("function" === typeof style) {
        try {
          style(null);
        } catch (String) {
          find(value, String);
        }
      } else {
        /** @type {null} */
        style.current = null;
      }
    }
  }
  /**
   * @param {!Object} node
   * @return {undefined}
   */
  function destroy(node) {
    switch("function" === typeof doc && doc(node), node.tag) {
      case 2:
      case 3:
        toggle(node);
        var current = node.stateNode;
        if ("function" === typeof current.componentWillUnmount) {
          try {
            current.props = node.memoizedProps;
            current.state = node.memoizedState;
            current.componentWillUnmount();
          } catch (String) {
            find(node, String);
          }
        }
        break;
      case 7:
        toggle(node);
        break;
      case 6:
        removeChild(node);
    }
  }
  /**
   * @param {!Object} table
   * @return {?}
   */
  function tableApplyDiff(table) {
    return 7 === table.tag || 5 === table.tag || 6 === table.tag;
  }
  /**
   * @param {!Object} body
   * @return {undefined}
   */
  function show(body) {
    e: {
      var value = body.return;
      for (; null !== value;) {
        if (tableApplyDiff(value)) {
          var node = value;
          break e;
        }
        value = value.return;
      }
      get("160");
      node = void 0;
    }
    var nextValue = value = void 0;
    switch(node.tag) {
      case 7:
        value = node.stateNode;
        /** @type {boolean} */
        nextValue = false;
        break;
      case 5:
      case 6:
        value = node.stateNode.containerInfo;
        /** @type {boolean} */
        nextValue = true;
        break;
      default:
        get("161");
    }
    if (16 & node.effectTag) {
      set(value, "");
      node.effectTag &= -17;
    }
    /** @type {!Object} */
    node = body;
    e: t: for (;;) {
      for (; null === node.sibling;) {
        if (null === node.return || tableApplyDiff(node.return)) {
          /** @type {null} */
          node = null;
          break e;
        }
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
      for (; 7 !== node.tag && 8 !== node.tag;) {
        if (2 & node.effectTag) {
          continue t;
        }
        if (null === node.child || 6 === node.tag) {
          continue t;
        }
        node.child.return = node;
        node = node.child;
      }
      if (!(2 & node.effectTag)) {
        node = node.stateNode;
        break e;
      }
    }
    /** @type {!Object} */
    var result = body;
    for (;;) {
      if (7 === result.tag || 8 === result.tag) {
        if (node) {
          if (nextValue) {
            var item = value;
            var logentry_div = result.stateNode;
            var obj = node;
            if (8 === item.nodeType) {
              item.parentNode.insertBefore(logentry_div, obj);
            } else {
              item.insertBefore(logentry_div, obj);
            }
          } else {
            value.insertBefore(result.stateNode, node);
          }
        } else {
          if (nextValue) {
            item = value;
            logentry_div = result.stateNode;
            if (8 === item.nodeType) {
              obj = item.parentNode;
              obj.insertBefore(logentry_div, item);
            } else {
              obj = item;
              obj.appendChild(logentry_div);
            }
            if (null === obj.onclick) {
              /** @type {function(): undefined} */
              obj.onclick = param;
            }
          } else {
            value.appendChild(result.stateNode);
          }
        }
      } else {
        if (6 !== result.tag && null !== result.child) {
          result.child.return = result;
          result = result.child;
          continue;
        }
      }
      if (result === body) {
        break;
      }
      for (; null === result.sibling;) {
        if (null === result.return || result.return === body) {
          return;
        }
        result = result.return;
      }
      result.sibling.return = result.return;
      result = result.sibling;
    }
  }
  /**
   * @param {!Object} parent
   * @return {undefined}
   */
  function removeChild(parent) {
    /** @type {!Object} */
    var node = parent;
    /** @type {boolean} */
    var inst = false;
    var r = void 0;
    var v = void 0;
    for (;;) {
      if (!inst) {
        inst = node.return;
        e: for (;;) {
          switch(null === inst && get("160"), inst.tag) {
            case 7:
              r = inst.stateNode;
              /** @type {boolean} */
              v = false;
              break e;
            case 5:
            case 6:
              r = inst.stateNode.containerInfo;
              /** @type {boolean} */
              v = true;
              break e;
          }
          inst = inst.return;
        }
        /** @type {boolean} */
        inst = true;
      }
      if (7 === node.tag || 8 === node.tag) {
        var a = node;
        var result = a;
        e: for (;;) {
          if (destroy(result), null !== result.child && 6 !== result.tag) {
            result.child.return = result;
            result = result.child;
          } else {
            if (result === a) {
              break;
            }
            for (; null === result.sibling;) {
              if (null === result.return || result.return === a) {
                break e;
              }
              result = result.return;
            }
            result.sibling.return = result.return;
            result = result.sibling;
          }
        }
        if (v) {
          a = r;
          result = node.stateNode;
          if (8 === a.nodeType) {
            a.parentNode.removeChild(result);
          } else {
            a.removeChild(result);
          }
        } else {
          r.removeChild(node.stateNode);
        }
      } else {
        if (6 === node.tag ? (r = node.stateNode.containerInfo, v = true) : destroy(node), null !== node.child) {
          node.child.return = node;
          node = node.child;
          continue;
        }
      }
      if (node === parent) {
        break;
      }
      for (; null === node.sibling;) {
        if (null === node.return || node.return === parent) {
          return;
        }
        node = node.return;
        if (6 === node.tag) {
          /** @type {boolean} */
          inst = false;
        }
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  }
  /**
   * @param {string} type
   * @param {!Object} node
   * @return {undefined}
   */
  function walk(type, node) {
    switch(node.tag) {
      case 2:
      case 3:
        break;
      case 7:
        var data = node.stateNode;
        if (null != data) {
          var el = node.memoizedProps;
          var j = null !== type ? type.memoizedProps : el;
          type = node.type;
          var y = node.updateQueue;
          if (node.updateQueue = null, null !== y) {
            data[fieldName] = el;
            if ("input" === type && "radio" === el.type && null != el.name) {
              setProp(data, el);
            }
            createNode(type, j);
            node = createNode(type, el);
            /** @type {number} */
            j = 0;
            for (; j < y.length; j = j + 2) {
              var name = y[j];
              var val = y[j + 1];
              if ("style" === name) {
                f(data, val);
              } else {
                if ("dangerouslySetInnerHTML" === name) {
                  setInstanceProperty(data, val);
                } else {
                  if ("children" === name) {
                    set(data, val);
                  } else {
                    setPropValue(data, name, val, node);
                  }
                }
              }
            }
            switch(type) {
              case "input":
                setAttr(data, el);
                break;
              case "textarea":
                hash(data, el);
                break;
              case "select":
                type = data._wrapperState.wasMultiple;
                /** @type {boolean} */
                data._wrapperState.wasMultiple = !!el.multiple;
                y = el.value;
                if (null != y) {
                  text(data, !!el.multiple, y, false);
                } else {
                  if (type !== !!el.multiple) {
                    if (null != el.defaultValue) {
                      text(data, !!el.multiple, el.defaultValue, true);
                    } else {
                      text(data, !!el.multiple, el.multiple ? [] : "", false);
                    }
                  }
                }
            }
          }
        }
        break;
      case 8:
        if (null === node.stateNode) {
          get("162");
        }
        node.stateNode.nodeValue = node.memoizedProps;
        break;
      case 5:
      case 15:
      case 16:
        break;
      default:
        get("163");
    }
  }
  /**
   * @param {!Object} template
   * @param {!Object} data
   * @param {!Object} result
   * @return {?}
   */
  function done(template, data, result) {
    result = encodeURIComponent(result);
    /** @type {number} */
    result.tag = 3;
    result.payload = {
      element : null
    };
    var language = data.value;
    return result.callback = function() {
      it(language);
      parser(template, data);
    }, result;
  }
  /**
   * @param {!Object} node
   * @param {!Object} data
   * @param {!Object} id
   * @return {?}
   */
  function has(node, data, id) {
    id = encodeURIComponent(id);
    /** @type {number} */
    id.tag = 3;
    var publicInst = node.stateNode;
    return null !== publicInst && "function" === typeof publicInst.componentDidCatch && (id.callback = function() {
      if (null === writtenAssets) {
        /** @type {!Set} */
        writtenAssets = new Set([this]);
      } else {
        writtenAssets.add(this);
      }
      var n = data.value;
      var url = data.stack;
      parser(node, data);
      this.componentDidCatch(n, {
        componentStack : null !== url ? url : ""
      });
    }), id;
  }
  /**
   * @param {!Object} e
   * @return {?}
   */
  function draw(e) {
    switch(e.tag) {
      case 2:
        if (isNaN(e.type)) {
          createElement(e);
        }
        var initX = e.effectTag;
        return 1024 & initX ? (e.effectTag = -1025 & initX | 64, e) : null;
      case 3:
        return isNaN(e.type._reactResult) && createElement(e), initX = e.effectTag, 1024 & initX ? (e.effectTag = -1025 & initX | 64, e) : null;
      case 5:
        return y(e), select(e), initX = e.effectTag, 0 !== (64 & initX) && get("285"), e.effectTag = -1025 & initX | 64, e;
      case 7:
        return is(e), null;
      case 16:
        return initX = e.effectTag, 1024 & initX ? (e.effectTag = -1025 & initX | 64, e) : null;
      case 6:
        return y(e), null;
      case 12:
        return scale(e), null;
      default:
        return null;
    }
  }
  /**
   * @return {undefined}
   */
  function createComponent() {
    if (null !== element) {
      var value = element.return;
      for (; null !== value;) {
        var a = value;
        switch(a.tag) {
          case 2:
            var childContextTypes = a.type.childContextTypes;
            if (null !== childContextTypes && void 0 !== childContextTypes) {
              createElement(a);
            }
            break;
          case 3:
            childContextTypes = a.type._reactResult.childContextTypes;
            if (null !== childContextTypes && void 0 !== childContextTypes) {
              createElement(a);
            }
            break;
          case 5:
            y(a);
            select(a);
            break;
          case 7:
            is(a);
            break;
          case 6:
            y(a);
            break;
          case 12:
            scale(a);
        }
        value = value.return;
      }
    }
    /** @type {null} */
    current = null;
    /** @type {number} */
    left = 0;
    /** @type {boolean} */
    ga = false;
    /** @type {null} */
    element = null;
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function render(node) {
    for (;;) {
      var a = node.alternate;
      var x = node.return;
      var ret = node.sibling;
      if (0 === (512 & node.effectTag)) {
        var data = a;
        /** @type {!Object} */
        a = node;
        var result = a.pendingProps;
        switch(a.tag) {
          case 0:
          case 1:
            break;
          case 2:
            if (isNaN(a.type)) {
              createElement(a);
            }
            break;
          case 3:
            if (isNaN(a.type._reactResult)) {
              createElement(a);
            }
            break;
          case 5:
            y(a);
            select(a);
            result = a.stateNode;
            if (result.pendingContext) {
              result.context = result.pendingContext;
              /** @type {null} */
              result.pendingContext = null;
            }
            if (!(null !== data && null !== data.child)) {
              load(a);
              a.effectTag &= -3;
            }
            drawHexUnit(a);
            break;
          case 7:
            is(a);
            var t = translate(request.current);
            var key = a.type;
            if (null !== data && null != a.stateNode) {
              setup(data, a, key, result, t);
              if (data.ref !== a.ref) {
                a.effectTag |= 128;
              }
            } else {
              if (result) {
                var name = translate(options.current);
                if (load(a)) {
                  result = a;
                  data = result.stateNode;
                  var node = result.type;
                  var options = result.memoizedProps;
                  var e = t;
                  switch(data[id] = result, data[fieldName] = options, key = void 0, t = node) {
                    case "iframe":
                    case "object":
                      trigger("load", data);
                      break;
                    case "video":
                    case "audio":
                      /** @type {number} */
                      node = 0;
                      for (; node < nodes.length; node++) {
                        trigger(nodes[node], data);
                      }
                      break;
                    case "source":
                      trigger("error", data);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      trigger("error", data);
                      trigger("load", data);
                      break;
                    case "form":
                      trigger("reset", data);
                      trigger("submit", data);
                      break;
                    case "details":
                      trigger("toggle", data);
                      break;
                    case "input":
                      fixNode(data, options);
                      trigger("invalid", data);
                      bind(e, "onChange");
                      break;
                    case "select":
                      data._wrapperState = {
                        wasMultiple : !!options.multiple
                      };
                      trigger("invalid", data);
                      bind(e, "onChange");
                      break;
                    case "textarea":
                      exec(data, options);
                      trigger("invalid", data);
                      bind(e, "onChange");
                  }
                  h(t, options);
                  /** @type {null} */
                  node = null;
                  for (key in options) {
                    if (options.hasOwnProperty(key)) {
                      name = options[key];
                      if ("children" === key) {
                        if ("string" === typeof name) {
                          if (data.textContent !== name) {
                            /** @type {!Array} */
                            node = ["children", name];
                          }
                        } else {
                          if ("number" === typeof name && data.textContent !== "" + name) {
                            /** @type {!Array} */
                            node = ["children", "" + name];
                          }
                        }
                      } else {
                        if (props.hasOwnProperty(key) && null != name) {
                          bind(e, key);
                        }
                      }
                    }
                  }
                  switch(t) {
                    case "input":
                      clone(data);
                      reset(data, options, true);
                      break;
                    case "textarea":
                      clone(data);
                      readFile(data, options);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      if ("function" === typeof options.onClick) {
                        /** @type {function(): undefined} */
                        data.onclick = param;
                      }
                  }
                  /** @type {null} */
                  key = node;
                  /** @type {null} */
                  result.updateQueue = key;
                  /** @type {boolean} */
                  result = null !== key;
                  if (result) {
                    trim(a);
                  }
                } else {
                  options = a;
                  data = key;
                  e = result;
                  node = 9 === t.nodeType ? t : t.ownerDocument;
                  if (name === el.html) {
                    name = factory(data);
                  }
                  if (name === el.html) {
                    if ("script" === data) {
                      data = node.createElement("div");
                      /** @type {string} */
                      data.innerHTML = "<script>\x3c/script>";
                      node = data.removeChild(data.firstChild);
                    } else {
                      if ("string" === typeof e.is) {
                        node = node.createElement(data, {
                          is : e.is
                        });
                      } else {
                        node = node.createElement(data);
                        if ("select" === data && e.multiple) {
                          /** @type {boolean} */
                          node.multiple = true;
                        }
                      }
                    }
                  } else {
                    node = node.createElementNS(name, data);
                  }
                  data = node;
                  data[id] = options;
                  data[fieldName] = result;
                  options = data;
                  e = a;
                  node = e.child;
                  e: for (; null !== node;) {
                    if (7 === node.tag || 8 === node.tag) {
                      options.appendChild(node.stateNode);
                    } else {
                      if (6 !== node.tag && null !== node.child) {
                        node.child.return = node;
                        node = node.child;
                        continue;
                      }
                    }
                    if (node === e) {
                      break;
                    }
                    for (; null === node.sibling;) {
                      if (null === node.return || node.return === e) {
                        break e;
                      }
                      node = node.return;
                    }
                    node.sibling.return = node.return;
                    node = node.sibling;
                  }
                  e = data;
                  node = key;
                  options = result;
                  var f = t;
                  var child = createNode(node, options);
                  switch(node) {
                    case "iframe":
                    case "object":
                      trigger("load", e);
                      t = options;
                      break;
                    case "video":
                    case "audio":
                      /** @type {number} */
                      t = 0;
                      for (; t < nodes.length; t++) {
                        trigger(nodes[t], e);
                      }
                      t = options;
                      break;
                    case "source":
                      trigger("error", e);
                      t = options;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      trigger("error", e);
                      trigger("load", e);
                      t = options;
                      break;
                    case "form":
                      trigger("reset", e);
                      trigger("submit", e);
                      t = options;
                      break;
                    case "details":
                      trigger("toggle", e);
                      t = options;
                      break;
                    case "input":
                      fixNode(e, options);
                      t = concat(e, options);
                      trigger("invalid", e);
                      bind(f, "onChange");
                      break;
                    case "option":
                      t = merge(e, options);
                      break;
                    case "select":
                      e._wrapperState = {
                        wasMultiple : !!options.multiple
                      };
                      t = assign({}, options, {
                        value : void 0
                      });
                      trigger("invalid", e);
                      bind(f, "onChange");
                      break;
                    case "textarea":
                      exec(e, options);
                      t = prepare(e, options);
                      trigger("invalid", e);
                      bind(f, "onChange");
                      break;
                    default:
                      t = options;
                  }
                  h(node, t);
                  name = void 0;
                  var value = node;
                  var url = e;
                  var x = t;
                  for (name in x) {
                    if (x.hasOwnProperty(name)) {
                      var val = x[name];
                      if ("style" === name) {
                        f(url, val);
                      } else {
                        if ("dangerouslySetInnerHTML" === name) {
                          if (null != (val = val ? val.__html : void 0)) {
                            setInstanceProperty(url, val);
                          }
                        } else {
                          if ("children" === name) {
                            if ("string" === typeof val) {
                              if ("textarea" !== value || "" !== val) {
                                set(url, val);
                              }
                            } else {
                              if ("number" === typeof val) {
                                set(url, "" + val);
                              }
                            }
                          } else {
                            if ("suppressContentEditableWarning" !== name && "suppressHydrationWarning" !== name && "autoFocus" !== name) {
                              if (props.hasOwnProperty(name)) {
                                if (null != val) {
                                  bind(f, name);
                                }
                              } else {
                                if (null != val) {
                                  setPropValue(url, name, val, child);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  switch(node) {
                    case "input":
                      clone(e);
                      reset(e, options, false);
                      break;
                    case "textarea":
                      clone(e);
                      readFile(e, options);
                      break;
                    case "option":
                      if (null != options.value) {
                        e.setAttribute("value", "" + value(options.value));
                      }
                      break;
                    case "select":
                      t = e;
                      /** @type {boolean} */
                      t.multiple = !!options.multiple;
                      e = options.value;
                      if (null != e) {
                        text(t, !!options.multiple, e, false);
                      } else {
                        if (null != options.defaultValue) {
                          text(t, !!options.multiple, options.defaultValue, true);
                        }
                      }
                      break;
                    default:
                      if ("function" === typeof t.onClick) {
                        /** @type {function(): undefined} */
                        e.onclick = param;
                      }
                  }
                  if (result = initialize(key, result)) {
                    trim(a);
                  }
                  a.stateNode = data;
                }
                if (null !== a.ref) {
                  a.effectTag |= 128;
                }
              } else {
                if (null === a.stateNode) {
                  get("166");
                }
              }
            }
            break;
          case 8:
            if (data && null != a.stateNode) {
              c(data, a, data.memoizedProps, result);
            } else {
              if ("string" !== typeof result) {
                if (null === a.stateNode) {
                  get("166");
                }
              }
              data = translate(request.current);
              translate(options.current);
              if (load(a)) {
                result = a;
                key = result.stateNode;
                data = result.memoizedProps;
                key[id] = result;
                if (result = key.nodeValue !== data) {
                  trim(a);
                }
              } else {
                key = a;
                result = (9 === data.nodeType ? data : data.ownerDocument).createTextNode(result);
                result[id] = key;
                a.stateNode = result;
              }
            }
            break;
          case 13:
          case 14:
          case 16:
          case 9:
          case 10:
          case 15:
            break;
          case 6:
            y(a);
            drawHexUnit(a);
            break;
          case 12:
            scale(a);
            break;
          case 11:
            break;
          case 4:
            get("167");
          default:
            get("156");
        }
        if (a = element = null, result = node, 1073741823 === left || 1073741823 !== result.childExpirationTime) {
          /** @type {number} */
          key = 0;
          data = result.child;
          for (; null !== data;) {
            t = data.expirationTime;
            options = data.childExpirationTime;
            if (0 === key || 0 !== t && t < key) {
              key = t;
            }
            if (0 === key || 0 !== options && options < key) {
              key = options;
            }
            data = data.sibling;
          }
          result.childExpirationTime = key;
        }
        if (null !== a) {
          return a;
        }
        if (null !== x && 0 === (512 & x.effectTag)) {
          if (null === x.firstEffect) {
            x.firstEffect = node.firstEffect;
          }
          if (null !== node.lastEffect) {
            if (null !== x.lastEffect) {
              x.lastEffect.nextEffect = node.firstEffect;
            }
            x.lastEffect = node.lastEffect;
          }
          if (1 < node.effectTag) {
            if (null !== x.lastEffect) {
              /** @type {!Object} */
              x.lastEffect.nextEffect = node;
            } else {
              /** @type {!Object} */
              x.firstEffect = node;
            }
            /** @type {!Object} */
            x.lastEffect = node;
          }
        }
      } else {
        if (null !== (node = draw(node, left))) {
          return node.effectTag &= 511, node;
        }
        if (null !== x) {
          /** @type {null} */
          x.firstEffect = x.lastEffect = null;
          x.effectTag |= 512;
        }
      }
      if (null !== ret) {
        return ret;
      }
      if (null === x) {
        break;
      }
      node = x;
    }
    return null;
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function addElement(obj) {
    var result = add(obj.alternate, obj, left);
    return null === result && (result = render(obj)), minimapMarker.current = null, result;
  }
  /**
   * @param {!Object} self
   * @param {string} v
   * @param {number} pos
   * @return {?}
   */
  function success(self, v, pos) {
    if (isBlockComment) {
      get("243");
    }
    /** @type {boolean} */
    isBlockComment = true;
    minimapMarker.currentDispatcher = vehicle;
    var p = self.nextExpirationTimeToWorkOn;
    if (!(p === left && self === current && null !== element)) {
      createComponent();
      /** @type {!Object} */
      current = self;
      left = p;
      element = parse(current.current, null, left);
      /** @type {number} */
      self.pendingCommitExpirationTime = 0;
    }
    /** @type {boolean} */
    var i = false;
    for (;;) {
      try {
        if (v) {
          for (; null !== element && !pushInt();) {
            element = addElement(element);
          }
        } else {
          for (; null !== element;) {
            element = addElement(element);
          }
        }
      } catch (language) {
        if (null === element) {
          /** @type {boolean} */
          i = true;
          it(language);
        } else {
          if (null === element) {
            get("271");
          }
          var s = element;
          var target = s.return;
          if (null !== target) {
            e: {
              var node = target;
              var x = s;
              var a = language;
              target = left;
              x.effectTag |= 512;
              /** @type {null} */
              x.firstEffect = x.lastEffect = null;
              /** @type {boolean} */
              ga = true;
              a = unpack(a, x);
              do {
                switch(node.tag) {
                  case 5:
                    node.effectTag |= 1024;
                    node.expirationTime = target;
                    target = done(node, a, target);
                    before(node, target);
                    break e;
                  case 2:
                  case 3:
                    x = a;
                    var assetPath = node.stateNode;
                    if (0 === (64 & node.effectTag) && null !== assetPath && "function" === typeof assetPath.componentDidCatch && (null === writtenAssets || !writtenAssets.has(assetPath))) {
                      node.effectTag |= 1024;
                      node.expirationTime = target;
                      target = has(node, x, target);
                      before(node, target);
                      break e;
                    }
                }
                node = node.return;
              } while (null !== node);
            }
            element = render(s);
            continue;
          }
          /** @type {boolean} */
          i = true;
          it(language);
        }
      }
      break;
    }
    if (isBlockComment = false, mappedName = proto = Pot = minimapMarker.currentDispatcher = null, i) {
      /** @type {null} */
      current = null;
      /** @type {null} */
      self.finishedWork = null;
    } else {
      if (null !== element) {
        /** @type {null} */
        self.finishedWork = null;
      } else {
        if (v = self.current.alternate, null === v && get("281"), current = null, ga) {
          if (i = self.latestPendingTime, s = self.latestSuspendedTime, target = self.latestPingedTime, 0 !== i && i > p || 0 !== s && s > p || 0 !== target && target > p) {
            return self.didError = false, pos = self.latestPingedTime, 0 !== pos && pos <= p && (self.latestPingedTime = 0), pos = self.earliestPendingTime, v = self.latestPendingTime, pos === p ? self.earliestPendingTime = v === p ? self.latestPendingTime = 0 : v : v === p && (self.latestPendingTime = pos), pos = self.earliestSuspendedTime, v = self.latestSuspendedTime, 0 === pos ? self.earliestSuspendedTime = self.latestSuspendedTime = p : pos > p ? self.earliestSuspendedTime = p : v < p && (self.latestSuspendedTime =
              p), equal(p, self), void(self.expirationTime = self.expirationTime);
          }
          if (!self.didError && !pos) {
            return self.didError = true, self.nextExpirationTimeToWorkOn = p, p = self.expirationTime = 1, void(self.expirationTime = p);
          }
        }
        self.pendingCommitExpirationTime = p;
        /** @type {string} */
        self.finishedWork = v;
      }
    }
  }
  /**
   * @param {!Object} value
   * @param {!Object} c
   * @return {?}
   */
  function find(value, c) {
    var node;
    e: {
      if (isBlockComment && !fromContext) {
        get("263");
      }
      node = value.return;
      for (; null !== node;) {
        switch(node.tag) {
          case 2:
          case 3:
            var assetPath = node.stateNode;
            if ("function" === typeof node.type.getDerivedStateFromCatch || "function" === typeof assetPath.componentDidCatch && (null === writtenAssets || !writtenAssets.has(assetPath))) {
              value = unpack(c, value);
              value = has(node, value, 1);
              map(node, value);
              convert(node, 1);
              node = void 0;
              break e;
            }
            break;
          case 5:
            value = unpack(c, value);
            value = done(node, value, 1);
            map(node, value);
            convert(node, 1);
            node = void 0;
            break e;
        }
        node = node.return;
      }
      if (5 === value.tag) {
        node = unpack(c, value);
        node = done(value, node, 1);
        map(value, node);
        convert(value, 1);
      }
      node = void 0;
    }
    return node;
  }
  /**
   * @param {number} val
   * @param {!Object} target
   * @return {?}
   */
  function iterator(val, target) {
    return 0 !== searchScope ? val = searchScope : isBlockComment ? val = fromContext ? 1 : left : 1 & target.mode ? (val = height ? 2 + 10 * (1 + ((val - 2 + 15) / 10 | 0)) : 2 + 25 * (1 + ((val - 2 + 500) / 25 | 0)), null !== current && val === left && (val = val + 1)) : val = 1, height && (0 === data || val > data) && (data = val), val;
  }
  /**
   * @param {!Object} node
   * @param {!Object} value
   * @return {undefined}
   */
  function convert(node, value) {
    e: {
      if (0 === node.expirationTime || node.expirationTime > value) {
        /** @type {!Object} */
        node.expirationTime = value;
      }
      var data = node.alternate;
      if (null !== data && (0 === data.expirationTime || data.expirationTime > value)) {
        /** @type {!Object} */
        data.expirationTime = value;
      }
      var x = node.return;
      if (null === x && 5 === node.tag) {
        node = node.stateNode;
      } else {
        for (; null !== x;) {
          if (data = x.alternate, (0 === x.childExpirationTime || x.childExpirationTime > value) && (x.childExpirationTime = value), null !== data && (0 === data.childExpirationTime || data.childExpirationTime > value) && (data.childExpirationTime = value), null === x.return && 5 === x.tag) {
            node = x.stateNode;
            break e;
          }
          x = x.return;
        }
        /** @type {null} */
        node = null;
      }
    }
    if (null !== node) {
      if (!isBlockComment && 0 !== left && value < left) {
        createComponent();
      }
      search(node, value);
      if (!(isBlockComment && !fromContext && current === node)) {
        /** @type {!Object} */
        value = node;
        node = node.expirationTime;
        if (null === value.nextScheduledRoot) {
          /** @type {!Object} */
          value.expirationTime = node;
          if (null === config) {
            items = config = value;
            /** @type {!Object} */
            value.nextScheduledRoot = value;
          } else {
            config = config.nextScheduledRoot = value;
            config.nextScheduledRoot = items;
          }
        } else {
          if (0 === (data = value.expirationTime) || node < data) {
            /** @type {!Object} */
            value.expirationTime = node;
          }
        }
        if (!verbose) {
          if (lvl) {
            if (Ia) {
              /** @type {!Object} */
              code = value;
              /** @type {number} */
              a = 1;
              decode(value, 1, true);
            }
          } else {
            if (1 === node) {
              getTime(1, null);
            } else {
              formatNumber(value, node);
            }
          }
        }
      }
      if (formattedBestGrade > formattedGradebookGrade) {
        /** @type {number} */
        formattedBestGrade = 0;
        get("185");
      }
    }
  }
  /**
   * @param {?} e
   * @param {?} t
   * @param {?} n
   * @param {?} node
   * @param {?} text
   * @return {?}
   */
  function u(e, t, n, node, text) {
    var possibleSearchScope = searchScope;
    /** @type {number} */
    searchScope = 1;
    try {
      return e(t, n, node, text);
    } finally {
      searchScope = possibleSearchScope;
    }
  }
  /**
   * @return {undefined}
   */
  function indexOf() {
    /** @type {number} */
    d = 2 + ((queue.unstable_now() - ms) / 10 | 0);
  }
  /**
   * @param {number} x
   * @param {number} t
   * @return {undefined}
   */
  function formatNumber(x, t) {
    if (0 !== borrowTimeLow) {
      if (t > borrowTimeLow) {
        return;
      }
      if (null !== cmd) {
        queue.unstable_cancelScheduledWork(cmd);
      }
    }
    /** @type {number} */
    borrowTimeLow = t;
    /** @type {number} */
    x = queue.unstable_now() - ms;
    cmd = queue.unstable_scheduleWork(message, {
      timeout : 10 * (t - 2) - x
    });
  }
  /**
   * @return {?}
   */
  function tryReq() {
    return verbose ? asdf : (getPlayer(), 0 !== a && 1073741823 !== a || (indexOf(), asdf = d), asdf);
  }
  /**
   * @return {undefined}
   */
  function getPlayer() {
    /** @type {number} */
    var count = 0;
    /** @type {null} */
    var datas = null;
    if (null !== config) {
      var result = config;
      var data = items;
      for (; null !== data;) {
        var i = data.expirationTime;
        if (0 === i) {
          if ((null === result || null === config) && get("244"), data === data.nextScheduledRoot) {
            /** @type {null} */
            items = config = data.nextScheduledRoot = null;
            break;
          }
          if (data === items) {
            items = i = data.nextScheduledRoot;
            config.nextScheduledRoot = i;
            /** @type {null} */
            data.nextScheduledRoot = null;
          } else {
            if (data === config) {
              config = result;
              config.nextScheduledRoot = items;
              /** @type {null} */
              data.nextScheduledRoot = null;
              break;
            }
            result.nextScheduledRoot = data.nextScheduledRoot;
            /** @type {null} */
            data.nextScheduledRoot = null;
          }
          data = result.nextScheduledRoot;
        } else {
          if ((0 === count || i < count) && (count = i, datas = data), data === config) {
            break;
          }
          if (1 === count) {
            break;
          }
          result = data;
          data = data.nextScheduledRoot;
        }
      }
    }
    code = datas;
    a = count;
  }
  /**
   * @param {undefined} body
   * @return {undefined}
   */
  function message(body) {
    if (body.didTimeout && null !== items) {
      indexOf();
      var data = items;
      do {
        var startDate = data.expirationTime;
        if (0 !== startDate && d >= startDate) {
          data.nextExpirationTimeToWorkOn = d;
        }
        data = data.nextScheduledRoot;
      } while (data !== items);
    }
    getTime(0, body);
  }
  /**
   * @param {number} t
   * @param {number} i
   * @return {undefined}
   */
  function getTime(t, i) {
    if (sectionClosest = i, getPlayer(), null !== sectionClosest) {
      indexOf();
      asdf = d;
      for (; null !== code && 0 !== a && (0 === t || t >= a) && (!disablePastDates || d >= a);) {
        decode(code, a, d >= a);
        getPlayer();
        indexOf();
        asdf = d;
      }
    } else {
      for (; null !== code && 0 !== a && (0 === t || t >= a);) {
        decode(code, a, true);
        getPlayer();
      }
    }
    if (null !== sectionClosest && (borrowTimeLow = 0, cmd = null), 0 !== a && formatNumber(code, a), sectionClosest = null, disablePastDates = false, formattedBestGrade = 0, opt = null, null !== p) {
      t = p;
      /** @type {null} */
      p = null;
      /** @type {number} */
      i = 0;
      for (; i < t.length; i++) {
        var tween = t[i];
        try {
          tween._onComplete();
        } catch (numInternals) {
          if (!ja) {
            /** @type {boolean} */
            ja = true;
            n = numInternals;
          }
        }
      }
    }
    if (ja) {
      throw t = n, n = null, ja = false, t;
    }
  }
  /**
   * @param {!Object} x
   * @param {number} callback
   * @param {string} text
   * @return {undefined}
   */
  function decode(x, callback, text) {
    if (verbose && get("245"), verbose = true, null === sectionClosest || text) {
      var a = x.finishedWork;
      if (null !== a) {
        update(x, a, callback);
      } else {
        /** @type {null} */
        x.finishedWork = null;
        success(x, false, text);
        if (null !== (a = x.finishedWork)) {
          update(x, a, callback);
        }
      }
    } else {
      a = x.finishedWork;
      if (null !== a) {
        update(x, a, callback);
      } else {
        /** @type {null} */
        x.finishedWork = null;
        success(x, true, text);
        if (null !== (a = x.finishedWork)) {
          if (pushInt()) {
            /** @type {null} */
            x.finishedWork = a;
          } else {
            update(x, a, callback);
          }
        }
      }
    }
    /** @type {boolean} */
    verbose = false;
  }
  /**
   * @param {!Object} options
   * @param {number} item
   * @param {string} end
   * @return {?}
   */
  function update(options, item, end) {
    var n = options.firstBatch;
    if (null !== n && n._expirationTime <= end && (null === p ? p = [n] : p.push(n), n._defer)) {
      return options.finishedWork = item, void(options.expirationTime = 0);
    }
    /** @type {null} */
    options.finishedWork = null;
    if (options === opt) {
      formattedBestGrade++;
    } else {
      /** @type {!Object} */
      opt = options;
      /** @type {number} */
      formattedBestGrade = 0;
    }
    /** @type {boolean} */
    fromContext = isBlockComment = true;
    if (options.current === item) {
      get("177");
    }
    end = options.pendingCommitExpirationTime;
    if (0 === end) {
      get("261");
    }
    /** @type {number} */
    options.pendingCommitExpirationTime = 0;
    n = item.expirationTime;
    var element = item.childExpirationTime;
    if (n = 0 === n || 0 !== element && element < n ? element : n, options.didError = false, 0 === n ? (options.earliestPendingTime = 0, options.latestPendingTime = 0, options.earliestSuspendedTime = 0, options.latestSuspendedTime = 0, options.latestPingedTime = 0) : (element = options.latestPendingTime, 0 !== element && (element < n ? options.earliestPendingTime = options.latestPendingTime = 0 : options.earliestPendingTime < n && (options.earliestPendingTime = options.latestPendingTime)), element =
      options.earliestSuspendedTime, 0 === element ? search(options, n) : n > options.latestSuspendedTime ? (options.earliestSuspendedTime = 0, options.latestSuspendedTime = 0, options.latestPingedTime = 0, search(options, n)) : n < element && search(options, n)), equal(0, options), minimapMarker.current = null, 1 < item.effectTag ? null !== item.lastEffect ? (item.lastEffect.nextEffect = item, n = item.firstEffect) : n = item : n = item.firstEffect, maxindent = mi, element = getTestsCtx(), handleKeyEvent(element)) {
      if ("selectionStart" in element) {
        var target = {
          start : element.selectionStart,
          end : element.selectionEnd
        };
      } else {
        e: {
          target = (target = element.ownerDocument) && target.defaultView || window;
          var result = target.getSelection && target.getSelection();
          if (result && 0 !== result.rangeCount) {
            target = result.anchorNode;
            var obj = result.anchorOffset;
            var node = result.focusNode;
            result = result.focusOffset;
            try {
              target.nodeType;
              node.nodeType;
            } catch (e) {
              /** @type {null} */
              target = null;
              break e;
            }
            /** @type {number} */
            var s = 0;
            /** @type {number} */
            var key = -1;
            /** @type {number} */
            var e = -1;
            /** @type {number} */
            var d = 0;
            /** @type {number} */
            var num = 0;
            var item = element;
            /** @type {null} */
            var current = null;
            t: for (;;) {
              var t;
              for (; item !== target || 0 !== obj && 3 !== item.nodeType || (key = s + obj), item !== node || 0 !== result && 3 !== item.nodeType || (e = s + result), 3 === item.nodeType && (s = s + item.nodeValue.length), null !== (t = item.firstChild);) {
                current = item;
                item = t;
              }
              for (;;) {
                if (item === element) {
                  break t;
                }
                if (current === target && ++d === obj && (key = s), current === node && ++num === result && (e = s), null !== (t = item.nextSibling)) {
                  break;
                }
                item = current;
                current = item.parentNode;
              }
              item = t;
            }
            /** @type {(null|{end: ?, start: ?})} */
            target = -1 === key || -1 === e ? null : {
              start : key,
              end : e
            };
          } else {
            /** @type {null} */
            target = null;
          }
        }
      }
      /** @type {({end: ?, start: ?}|{end: number, start: number})} */
      target = target || {
        start : 0,
        end : 0
      };
    } else {
      /** @type {null} */
      target = null;
    }
    ContainerInstance = {
      focusedElem : element,
      selectionRange : target
    };
    /** @type {boolean} */
    mi = false;
    node = n;
    for (; null !== node;) {
      /** @type {boolean} */
      element = false;
      target = void 0;
      try {
        for (; null !== node;) {
          if (256 & node.effectTag) {
            var r = node.alternate;
            e: {
              switch(obj = node, obj.tag) {
                case 2:
                case 3:
                  if (256 & obj.effectTag && null !== r) {
                    var b = r.memoizedProps;
                    var data = r.memoizedState;
                    var result = obj.stateNode;
                    result.props = obj.memoizedProps;
                    result.state = obj.memoizedState;
                    var originalB = result.getSnapshotBeforeUpdate(b, data);
                    result.__reactInternalSnapshotBeforeUpdate = originalB;
                  }
                  break e;
                case 5:
                case 7:
                case 8:
                case 6:
                  break e;
                default:
                  get("163");
              }
            }
          }
          node = node.nextEffect;
        }
      } catch (rampart) {
        /** @type {boolean} */
        element = true;
        target = rampart;
      }
      if (element) {
        if (null === node) {
          get("178");
        }
        find(node, target);
        if (null !== node) {
          node = node.nextEffect;
        }
      }
    }
    node = n;
    for (; null !== node;) {
      /** @type {boolean} */
      r = false;
      b = void 0;
      try {
        for (; null !== node;) {
          var a = node.effectTag;
          if (16 & a && set(node.stateNode, ""), 128 & a) {
            var s = node.alternate;
            if (null !== s) {
              var c = s.ref;
              if (null !== c) {
                if ("function" === typeof c) {
                  c(null);
                } else {
                  /** @type {null} */
                  c.current = null;
                }
              }
            }
          }
          switch(14 & a) {
            case 2:
              show(node);
              node.effectTag &= -3;
              break;
            case 6:
              show(node);
              node.effectTag &= -3;
              walk(node.alternate, node);
              break;
            case 4:
              walk(node.alternate, node);
              break;
            case 8:
              data = node;
              removeChild(data);
              /** @type {null} */
              data.return = null;
              /** @type {null} */
              data.child = null;
              if (data.alternate) {
                /** @type {null} */
                data.alternate.child = null;
                /** @type {null} */
                data.alternate.return = null;
              }
          }
          node = node.nextEffect;
        }
      } catch (vfrac) {
        /** @type {boolean} */
        r = true;
        b = vfrac;
      }
      if (r) {
        if (null === node) {
          get("178");
        }
        find(node, b);
        if (null !== node) {
          node = node.nextEffect;
        }
      }
    }
    if (c = ContainerInstance, s = getTestsCtx(), a = c.focusedElem, b = c.selectionRange, s !== a && a && a.ownerDocument && contains(a.ownerDocument.documentElement, a)) {
      if (null !== b && handleKeyEvent(a)) {
        s = b.start;
        c = b.end;
        if (void 0 === c) {
          c = s;
        }
        if ("selectionStart" in a) {
          a.selectionStart = s;
          /** @type {number} */
          a.selectionEnd = Math.min(c, a.value.length);
        } else {
          r = a.ownerDocument || document;
          s = (r && r.defaultView || window).getSelection();
          data = a.textContent.length;
          /** @type {number} */
          c = Math.min(b.start, data);
          /** @type {number} */
          b = void 0 === b.end ? c : Math.min(b.end, data);
          if (!s.extend && c > b) {
            /** @type {number} */
            data = b;
            /** @type {number} */
            b = c;
            /** @type {number} */
            c = data;
          }
          data = process(a, c);
          result = process(a, b);
          if (data && result && (1 !== s.rangeCount || s.anchorNode !== data.node || s.anchorOffset !== data.offset || s.focusNode !== result.node || s.focusOffset !== result.offset)) {
            r = r.createRange();
            r.setStart(data.node, data.offset);
            s.removeAllRanges();
            if (c > b) {
              s.addRange(r);
              s.extend(result.node, result.offset);
            } else {
              r.setEnd(result.node, result.offset);
              s.addRange(r);
            }
          }
        }
      }
      /** @type {!Array} */
      s = [];
      c = a;
      for (; c = c.parentNode;) {
        if (1 === c.nodeType) {
          s.push({
            element : c,
            left : c.scrollLeft,
            top : c.scrollTop
          });
        }
      }
      if ("function" === typeof a.focus) {
        a.focus();
      }
      /** @type {number} */
      a = 0;
      for (; a < s.length; a++) {
        c = s[a];
        c.element.scrollLeft = c.left;
        c.element.scrollTop = c.top;
      }
    }
    /** @type {null} */
    ContainerInstance = null;
    /** @type {boolean} */
    mi = !!maxindent;
    /** @type {null} */
    maxindent = null;
    /** @type {number} */
    options.current = item;
    node = n;
    for (; null !== node;) {
      /** @type {boolean} */
      n = false;
      a = void 0;
      try {
        /** @type {string} */
        s = end;
        for (; null !== node;) {
          var items = node.effectTag;
          if (36 & items) {
            var alternate = node.alternate;
            switch(c = node, r = s, c.tag) {
              case 2:
              case 3:
                var _this = c.stateNode;
                if (4 & c.effectTag) {
                  if (null === alternate) {
                    _this.props = c.memoizedProps;
                    _this.state = c.memoizedState;
                    _this.componentDidMount();
                  } else {
                    var props = alternate.memoizedProps;
                    var state = alternate.memoizedState;
                    _this.props = c.memoizedProps;
                    _this.state = c.memoizedState;
                    _this.componentDidUpdate(props, state, _this.__reactInternalSnapshotBeforeUpdate);
                  }
                }
                var b = c.updateQueue;
                if (null !== b) {
                  _this.props = c.memoizedProps;
                  _this.state = c.memoizedState;
                  append(c, b, _this, r);
                }
                break;
              case 5:
                var cl = c.updateQueue;
                if (null !== cl) {
                  if (b = null, null !== c.child) {
                    switch(c.child.tag) {
                      case 7:
                        b = c.child.stateNode;
                        break;
                      case 2:
                      case 3:
                        b = c.child.stateNode;
                    }
                  }
                  append(c, cl, b, r);
                }
                break;
              case 7:
                var d = c.stateNode;
                if (null === alternate && 4 & c.effectTag && initialize(c.type, c.memoizedProps)) {
                  d.focus();
                }
                break;
              case 8:
              case 6:
              case 15:
              case 16:
                break;
              default:
                get("163");
            }
          }
          if (128 & items) {
            var style = node.ref;
            if (null !== style) {
              var size = node.stateNode;
              switch(node.tag) {
                case 7:
                  var height = size;
                  break;
                default:
                  height = size;
              }
              if ("function" === typeof style) {
                style(height);
              } else {
                style.current = height;
              }
            }
          }
          var embeddedNode = node.nextEffect;
          /** @type {null} */
          node.nextEffect = null;
          node = embeddedNode;
        }
      } catch (nativeObjectObject) {
        /** @type {boolean} */
        n = true;
        a = nativeObjectObject;
      }
      if (n) {
        if (null === node) {
          get("178");
        }
        find(node, a);
        if (null !== node) {
          node = node.nextEffect;
        }
      }
    }
    /** @type {boolean} */
    isBlockComment = fromContext = false;
    if ("function" === typeof keys) {
      keys(item.stateNode);
    }
    items = item.expirationTime;
    item = item.childExpirationTime;
    item = 0 === items || 0 !== item && item < items ? item : items;
    if (0 === item) {
      /** @type {null} */
      writtenAssets = null;
    }
    /** @type {number} */
    options.expirationTime = item;
    /** @type {null} */
    options.finishedWork = null;
  }
  /**
   * @return {?}
   */
  function pushInt() {
    return !!disablePastDates || !(null === sectionClosest || sectionClosest.timeRemaining() > sectionOffsetTop) && (disablePastDates = true);
  }
  /**
   * @param {string} name
   * @return {undefined}
   */
  function it(name) {
    if (null === code) {
      get("246");
    }
    /** @type {number} */
    code.expirationTime = 0;
    if (!ja) {
      /** @type {boolean} */
      ja = true;
      /** @type {string} */
      n = name;
    }
  }
  /**
   * @param {!Function} prop
   * @param {!Object} context
   * @return {?}
   */
  function tracker(prop, context) {
    var i = lvl;
    /** @type {boolean} */
    lvl = true;
    try {
      return prop(context);
    } finally {
      if (!((lvl = i) || verbose)) {
        getTime(1, null);
      }
    }
  }
  /**
   * @param {!Function} container
   * @param {?} width
   * @return {?}
   */
  function hasNonRootReactChild(container, width) {
    if (lvl && !Ia) {
      /** @type {boolean} */
      Ia = true;
      try {
        return container(width);
      } finally {
        /** @type {boolean} */
        Ia = false;
      }
    }
    return container(width);
  }
  /**
   * @param {!Function} callback
   * @param {?} type
   * @param {?} next
   * @return {?}
   */
  function submit(callback, type, next) {
    if (height) {
      return callback(type, next);
    }
    if (!(lvl || verbose || 0 === data)) {
      getTime(data, null);
      /** @type {number} */
      data = 0;
    }
    var destHeight = height;
    var i = lvl;
    /** @type {boolean} */
    lvl = height = true;
    try {
      return callback(type, next);
    } finally {
      height = destHeight;
      if (!((lvl = i) || verbose)) {
        getTime(1, null);
      }
    }
  }
  /**
   * @param {(Object|string)} context
   * @return {?}
   */
  function normalize(context) {
    if (!context) {
      return page;
    }
    context = context._reactInternalFiber;
    e: {
      if (2 !== push(context) || 2 !== context.tag && 3 !== context.tag) {
        get("170");
      }
      /** @type {(Object|string)} */
      var value = context;
      do {
        switch(value.tag) {
          case 5:
            value = value.stateNode.context;
            break e;
          case 2:
            if (isNaN(value.type)) {
              value = value.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
            break;
          case 3:
            if (isNaN(value.type._reactResult)) {
              value = value.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        value = value.return;
      } while (null !== value);
      get("171");
      value = void 0;
    }
    if (2 === context.tag) {
      var search = context.type;
      if (isNaN(search)) {
        return replace(context, search, value);
      }
    } else {
      if (3 === context.tag && (search = context.type._reactResult, isNaN(search))) {
        return replace(context, search, value);
      }
    }
    return value;
  }
  /**
   * @param {!Object} e
   * @param {!Object} data
   * @param {!Object} a
   * @param {?} item
   * @param {!Object} result
   * @return {?}
   */
  function func(e, data, a, item, result) {
    var b = data.current;
    return a = normalize(a), null === data.context ? data.context = a : data.pendingContext = a, data = result, result = encodeURIComponent(item), result.payload = {
      element : e
    }, data = void 0 === data ? null : data, null !== data && (result.callback = data), map(b, result), convert(b, item), item;
  }
  /**
   * @param {!Object} t
   * @param {!Object} value
   * @param {!Object} o
   * @param {!Object} n
   * @return {?}
   */
  function each(t, value, o, n) {
    var i = value.current;
    return i = iterator(tryReq(), i), func(t, value, o, i, n);
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function _run(value) {
    if (value = value.current, !value.child) {
      return null;
    }
    switch(value.child.tag) {
      case 7:
      default:
        return value.child.stateNode;
    }
  }
  /**
   * @param {!Array} type
   * @param {!Object} data
   * @param {!Object} linkedEntities
   * @return {?}
   */
  function loaded(type, data, linkedEntities) {
    var title = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof : Infinity,
      key : null == title ? null : "" + title,
      children : type,
      containerInfo : data,
      implementation : linkedEntities
    };
  }
  /**
   * @param {string} el
   * @return {undefined}
   */
  function Timer(el) {
    /** @type {number} */
    var binFrequencyEnd = 2 + 25 * (1 + ((tryReq() - 2 + 500) / 25 | 0));
    if (binFrequencyEnd <= previousEnd) {
      binFrequencyEnd = previousEnd + 1;
    }
    this._expirationTime = previousEnd = binFrequencyEnd;
    /** @type {string} */
    this._root = el;
    /** @type {null} */
    this._callbacks = this._next = null;
    /** @type {boolean} */
    this._hasChildren = this._didComplete = false;
    /** @type {null} */
    this._children = null;
    /** @type {boolean} */
    this._defer = true;
  }
  /**
   * @return {undefined}
   */
  function Buffer() {
    /** @type {null} */
    this._callbacks = null;
    /** @type {boolean} */
    this._didCommit = false;
    this._onCommit = this._onCommit.bind(this);
  }
  /**
   * @param {(Object|string)} options
   * @param {string} node
   * @param {?} value
   * @return {undefined}
   */
  function Tree(options, node, value) {
    node = new Node(5, null, null, node ? 3 : 0);
    options = {
      current : node,
      containerInfo : options,
      pendingChildren : null,
      earliestPendingTime : 0,
      latestPendingTime : 0,
      earliestSuspendedTime : 0,
      latestSuspendedTime : 0,
      latestPingedTime : 0,
      didError : false,
      pendingCommitExpirationTime : 0,
      finishedWork : null,
      timeoutHandle : -1,
      context : null,
      pendingContext : null,
      hydrate : value,
      nextExpirationTimeToWorkOn : 0,
      expirationTime : 0,
      firstBatch : null,
      nextScheduledRoot : null
    };
    this._internalRoot = node.stateNode = options;
  }
  /**
   * @param {!Object} object
   * @return {?}
   */
  function isEmpty(object) {
    return !(!object || 1 !== object.nodeType && 9 !== object.nodeType && 11 !== object.nodeType && (8 !== object.nodeType || " react-mount-point-unstable " !== object.nodeValue));
  }
  /**
   * @param {!Object} node
   * @param {!Object} el
   * @return {?}
   */
  function updateView(node, el) {
    if (el || (el = node ? 9 === node.nodeType ? node.documentElement : node.firstChild : null, el = !(!el || 1 !== el.nodeType || !el.hasAttribute("data-reactroot"))), !el) {
      var nextNode;
      for (; nextNode = node.lastChild;) {
        node.removeChild(nextNode);
      }
    }
    return new Tree(node, false, el);
  }
  /**
   * @param {!Object} folder
   * @param {string} callback
   * @param {string} element
   * @param {string} name
   * @param {boolean} node
   * @return {?}
   */
  function run(folder, callback, element, name, node) {
    if (!isEmpty(element)) {
      get("200");
    }
    var parent = element._reactRootContainer;
    if (parent) {
      if ("function" === typeof node) {
        /** @type {boolean} */
        var current = node;
        /**
         * @return {undefined}
         */
        node = function() {
          var result = _run(parent._internalRoot);
          current.call(result);
        };
      }
      if (null != folder) {
        parent.legacy_renderSubtreeIntoContainer(folder, callback, node);
      } else {
        parent.render(callback, node);
      }
    } else {
      if (parent = element._reactRootContainer = updateView(element, name), "function" === typeof node) {
        /** @type {boolean} */
        var current = node;
        /**
         * @return {undefined}
         */
        node = function() {
          var result = _run(parent._internalRoot);
          current.call(result);
        };
      }
      hasNonRootReactChild(function() {
        if (null != folder) {
          parent.legacy_renderSubtreeIntoContainer(folder, callback, node);
        } else {
          parent.render(callback, node);
        }
      });
    }
    return _run(parent._internalRoot);
  }
  /**
   * @param {!Array} provider
   * @param {!Object} type
   * @return {?}
   */
  function handleError(provider, type) {
    var attachment = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    return isEmpty(type) || get("200"), loaded(provider, type, null, attachment);
  }
  var React = __webpack_require__(0);
  var assign = __webpack_require__(9);
  var queue = __webpack_require__(99);
  if (!React) {
    get("227");
  }
  /** @type {boolean} */
  var res = false;
  /** @type {null} */
  var active = null;
  /** @type {boolean} */
  var $b = false;
  /** @type {null} */
  var regexp = null;
  var events = {
    onError : function(xhr) {
      /** @type {boolean} */
      res = true;
      /** @type {string} */
      active = xhr;
    }
  };
  /** @type {null} */
  var EventPluginOrder = null;
  var arr = {};
  /** @type {!Array} */
  var values = [];
  var lstnrs = {};
  var props = {};
  var _this = {};
  /** @type {null} */
  var stringify = null;
  /** @type {null} */
  var markNodeAsRequired = null;
  /** @type {null} */
  var warning = null;
  /** @type {null} */
  var ret = null;
  var EventPluginRegistry = {
    injectEventPluginOrder : function(InjectedEventPluginOrder) {
      if (EventPluginOrder) {
        get("101");
      }
      /** @type {!Array<?>} */
      EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
      recomputePluginOrdering();
    },
    injectEventPluginsByName : function(data) {
      var a;
      /** @type {boolean} */
      var n = false;
      for (a in data) {
        if (data.hasOwnProperty(a)) {
          var b = data[a];
          if (!(arr.hasOwnProperty(a) && arr[a] === b)) {
            if (arr[a]) {
              get("102", a);
            }
            arr[a] = b;
            /** @type {boolean} */
            n = true;
          }
        }
      }
      if (n) {
        recomputePluginOrdering();
      }
    }
  };
  /** @type {string} */
  var Id = Math.random().toString(36).slice(2);
  /** @type {string} */
  var id = "__reactInternalInstance$" + Id;
  /** @type {string} */
  var fieldName = "__reactEventHandlers$" + Id;
  /** @type {boolean} */
  var val = !("undefined" === typeof window || !window.document || !window.document.createElement);
  var EVENT_NAME_MAP = {
    animationend : _prefixedEvent("Animation", "AnimationEnd"),
    animationiteration : _prefixedEvent("Animation", "AnimationIteration"),
    animationstart : _prefixedEvent("Animation", "AnimationStart"),
    transitionend : _prefixedEvent("Transition", "TransitionEnd")
  };
  var dict = {};
  var elem = {};
  if (val) {
    /** @type {!CSSStyleDeclaration} */
    elem = document.createElement("div").style;
    if (!("AnimationEvent" in window)) {
      delete EVENT_NAME_MAP.animationend.animation;
      delete EVENT_NAME_MAP.animationiteration.animation;
      delete EVENT_NAME_MAP.animationstart.animation;
    }
    if (!("TransitionEvent" in window)) {
      delete EVENT_NAME_MAP.transitionend.transition;
    }
  }
  var animEnd = on("animationend");
  var scatterChart = on("animationiteration");
  var string_object_array = on("animationstart");
  var transEnd = on("transitionend");
  /** @type {!Array<string>} */
  var nodes = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  /** @type {null} */
  var cursor = null;
  /** @type {null} */
  var l = null;
  /** @type {null} */
  var count = null;
  assign(Event.prototype, {
    preventDefault : function() {
      /** @type {boolean} */
      this.defaultPrevented = true;
      var event = this.nativeEvent;
      if (event) {
        if (event.preventDefault) {
          event.preventDefault();
        } else {
          if ("unknown" !== typeof event.returnValue) {
            /** @type {boolean} */
            event.returnValue = false;
          }
        }
        /** @type {function(): ?} */
        this.isDefaultPrevented = returnTrue;
      }
    },
    stopPropagation : function() {
      var event = this.nativeEvent;
      if (event) {
        if (event.stopPropagation) {
          event.stopPropagation();
        } else {
          if ("unknown" !== typeof event.cancelBubble) {
            /** @type {boolean} */
            event.cancelBubble = true;
          }
        }
        /** @type {function(): ?} */
        this.isPropagationStopped = returnTrue;
      }
    },
    persist : function() {
      /** @type {function(): ?} */
      this.isPersistent = returnTrue;
    },
    isPersistent : returnFalse,
    destructor : function() {
      var propName;
      var Interface = this.constructor.Interface;
      for (propName in Interface) {
        /** @type {null} */
        this[propName] = null;
      }
      /** @type {null} */
      this.nativeEvent = this._targetInst = this.dispatchConfig = null;
      /** @type {function(): ?} */
      this.isPropagationStopped = this.isDefaultPrevented = returnFalse;
      /** @type {null} */
      this._dispatchInstances = this._dispatchListeners = null;
    }
  });
  Event.Interface = {
    type : null,
    target : null,
    currentTarget : function() {
      return null;
    },
    eventPhase : null,
    bubbles : null,
    cancelable : null,
    timeStamp : function(event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented : null,
    isTrusted : null
  };
  /**
   * @param {?} id
   * @return {?}
   */
  Event.extend = function(id) {
    /**
     * @return {undefined}
     */
    function F() {
    }
    /**
     * @return {?}
     */
    function Class() {
      return Super.apply(this, arguments);
    }
    var Super = this;
    F.prototype = Super.prototype;
    var o = new F;
    return assign(o, Class.prototype), Class.prototype = o, Class.prototype.constructor = Class, Class.Interface = assign({}, Super.Interface, id), Class.extend = Super.extend, inherits(Class), Class;
  };
  inherits(Event);
  var me = Event.extend({
    data : null
  });
  var that = Event.extend({
    data : null
  });
  /** @type {!Array} */
  var skillHotKey = [9, 13, 27, 32];
  /** @type {boolean} */
  var modifier = val && "CompositionEvent" in window;
  /** @type {null} */
  var version = null;
  if (val && "documentMode" in document) {
    version = document.documentMode;
  }
  /** @type {boolean} */
  var isFloat = val && "TextEvent" in window && !version;
  var elementEvent = val && (!modifier || version && 8 < version && 11 >= version);
  /** @type {string} */
  var path = String.fromCharCode(32);
  var eventTypes = {
    beforeInput : {
      phasedRegistrationNames : {
        bubbled : "onBeforeInput",
        captured : "onBeforeInputCapture"
      },
      dependencies : ["compositionend", "keypress", "textInput", "paste"]
    },
    compositionEnd : {
      phasedRegistrationNames : {
        bubbled : "onCompositionEnd",
        captured : "onCompositionEndCapture"
      },
      dependencies : "blur compositionend keydown keypress keyup mousedown".split(" ")
    },
    compositionStart : {
      phasedRegistrationNames : {
        bubbled : "onCompositionStart",
        captured : "onCompositionStartCapture"
      },
      dependencies : "blur compositionstart keydown keypress keyup mousedown".split(" ")
    },
    compositionUpdate : {
      phasedRegistrationNames : {
        bubbled : "onCompositionUpdate",
        captured : "onCompositionUpdateCapture"
      },
      dependencies : "blur compositionupdate keydown keypress keyup mousedown".split(" ")
    }
  };
  /** @type {boolean} */
  var projectionStream = false;
  /** @type {boolean} */
  var use_local_cache = false;
  var BeforeInputEventPlugin = {
    eventTypes : eventTypes,
    extractEvents : function(value, obj, name, target) {
      var eventType = void 0;
      var tmp = void 0;
      if (modifier) {
        e: {
          switch(value) {
            case "compositionstart":
              eventType = eventTypes.compositionStart;
              break e;
            case "compositionend":
              eventType = eventTypes.compositionEnd;
              break e;
            case "compositionupdate":
              eventType = eventTypes.compositionUpdate;
              break e;
          }
          eventType = void 0;
        }
      } else {
        if (use_local_cache) {
          if (hide(value, name)) {
            eventType = eventTypes.compositionEnd;
          }
        } else {
          if ("keydown" === value && 229 === name.keyCode) {
            eventType = eventTypes.compositionStart;
          }
        }
      }
      return eventType ? (elementEvent && "ko" !== name.locale && (use_local_cache || eventType !== eventTypes.compositionStart ? eventType === eventTypes.compositionEnd && use_local_cache && (tmp = calc()) : (cursor = target, l = "value" in cursor ? cursor.value : cursor.textContent, use_local_cache = true)), eventType = me.getPooled(eventType, obj, name, target), tmp ? eventType.data = tmp : null !== (tmp = apply(name)) && (eventType.data = tmp), check(eventType), tmp = eventType) : tmp = null,
        (value = isFloat ? build(value, name) : getKey(value, name)) ? (obj = that.getPooled(eventTypes.beforeInput, obj, name, target), obj.data = value, check(obj)) : obj = null, null === tmp ? obj : null === obj ? tmp : [tmp, obj];
    }
  };
  /** @type {null} */
  var callback = null;
  /** @type {null} */
  var viewIndex = null;
  /** @type {null} */
  var failed = null;
  /** @type {boolean} */
  var mo = false;
  var $inputTypes = {
    color : true,
    date : true,
    datetime : true,
    "datetime-local" : true,
    email : true,
    month : true,
    number : true,
    password : true,
    range : true,
    search : true,
    tel : true,
    text : true,
    time : true,
    url : true,
    week : true
  };
  var moduleMap = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  /** @type {!RegExp} */
  var inputRegExp = /^(.*)[\\\/]/;
  /** @type {(boolean|function(string): (?|undefined))} */
  var contentVmodels = "function" === typeof Symbol && Symbol.for;
  var ashr = contentVmodels ? Symbol.for("react.element") : 60103;
  var Infinity = contentVmodels ? Symbol.for("react.portal") : 60106;
  var undefined = contentVmodels ? Symbol.for("react.fragment") : 60107;
  var three = contentVmodels ? Symbol.for("react.strict_mode") : 60108;
  var master = contentVmodels ? Symbol.for("react.profiler") : 60114;
  var object = contentVmodels ? Symbol.for("react.provider") : 60109;
  var array = contentVmodels ? Symbol.for("react.context") : 60110;
  var Boolean = contentVmodels ? Symbol.for("react.async_mode") : 60111;
  var boolean = contentVmodels ? Symbol.for("react.forward_ref") : 60112;
  var scanVmodels = contentVmodels ? Symbol.for("react.placeholder") : 60113;
  var key = "function" === typeof Symbol && Symbol.iterator;
  /** @type {!RegExp} */
  var VALID_IDENTIFIER_EXPR = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  /** @type {function(this:Object, *): boolean} */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var eddy = {};
  var formattedConfig = {};
  var result = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    result[i] = new Date(i, 0, false, i, null);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(s) {
    var n = s[0];
    result[n] = new Date(n, 1, false, s[1], null);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    result[i] = new Date(i, 2, false, i.toLowerCase(), null);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    result[i] = new Date(i, 2, false, i, null);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    result[i] = new Date(i, 3, false, i.toLowerCase(), null);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    result[i] = new Date(i, 3, true, i, null);
  });
  ["capture", "download"].forEach(function(i) {
    result[i] = new Date(i, 4, false, i, null);
  });
  ["cols", "rows", "size", "span"].forEach(function(i) {
    result[i] = new Date(i, 6, false, i, null);
  });
  ["rowSpan", "start"].forEach(function(i) {
    result[i] = new Date(i, 5, false, i.toLowerCase(), null);
  });
  /** @type {!RegExp} */
  var s1 = /[\-:]([a-z])/g;
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(h) {
    /** @type {string} */
    var key = h.replace(s1, link);
    result[key] = new Date(key, 1, false, h, null);
  });
  "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(h) {
    /** @type {string} */
    var key = h.replace(s1, link);
    result[key] = new Date(key, 1, false, h, "http://www.w3.org/1999/xlink");
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(h) {
    var key = h.replace(s1, link);
    result[key] = new Date(key, 1, false, h, "http://www.w3.org/XML/1998/namespace");
  });
  result.tabIndex = new Date("tabIndex", 1, false, "tabindex", null);
  var args = {
    change : {
      phasedRegistrationNames : {
        bubbled : "onChange",
        captured : "onChangeCapture"
      },
      dependencies : "blur change click focus input keydown keyup selectionchange".split(" ")
    }
  };
  /** @type {null} */
  var capturedNode = null;
  /** @type {null} */
  var name = null;
  /** @type {boolean} */
  var css = false;
  if (val) {
    css = require("input") && (!document.documentMode || 9 < document.documentMode);
  }
  var ChangeEventPlugin = {
    eventTypes : args,
    _isInputEventSupported : css,
    extractEvents : function(name, element, event, target) {
      var node = element ? getProperty(element) : window;
      var fn = void 0;
      var create_node = void 0;
      var tagName = node.nodeName && node.nodeName.toLowerCase();
      if ("select" === tagName || "input" === tagName && "file" === node.type ? fn = bv_trim : shouldUseChangeEvent(node) ? css ? fn = prop : (fn = initEvents, create_node = bindEvents) : (tagName = node.nodeName) && "input" === tagName.toLowerCase() && ("checkbox" === node.type || "radio" === node.type) && (fn = checkAttribute), fn && (fn = fn(name, element))) {
        return fire(fn, event, target);
      }
      if (create_node) {
        create_node(name, node, element);
      }
      if ("blur" === name && (name = node._wrapperState) && name.controlled && "number" === node.type) {
        addAttribute(node, "number", node.value);
      }
    }
  };
  var touchList = Event.extend({
    view : null,
    detail : null
  });
  var keymap = {
    Alt : "altKey",
    Control : "ctrlKey",
    Meta : "metaKey",
    Shift : "shiftKey"
  };
  /** @type {number} */
  var screenY = 0;
  /** @type {number} */
  var lastY = 0;
  /** @type {boolean} */
  var Go = false;
  /** @type {boolean} */
  var named = false;
  var t = touchList.extend({
    screenX : null,
    screenY : null,
    clientX : null,
    clientY : null,
    pageX : null,
    pageY : null,
    ctrlKey : null,
    shiftKey : null,
    altKey : null,
    metaKey : null,
    getModifierState : movementCost,
    button : null,
    buttons : null,
    relatedTarget : function(event) {
      return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
    },
    movementX : function(event) {
      if ("movementX" in event) {
        return event.movementX;
      }
      var y = screenY;
      return screenY = event.screenX, Go ? "mousemove" === event.type ? event.screenX - y : 0 : (Go = true, 0);
    },
    movementY : function(event) {
      if ("movementY" in event) {
        return event.movementY;
      }
      var lastScreenY = lastY;
      return lastY = event.screenY, named ? "mousemove" === event.type ? event.screenY - lastScreenY : 0 : (named = true, 0);
    }
  });
  var angle = t.extend({
    pointerId : null,
    width : null,
    height : null,
    pressure : null,
    tangentialPressure : null,
    tiltX : null,
    tiltY : null,
    twist : null,
    pointerType : null,
    isPrimary : null
  });
  var api = {
    mouseEnter : {
      registrationName : "onMouseEnter",
      dependencies : ["mouseout", "mouseover"]
    },
    mouseLeave : {
      registrationName : "onMouseLeave",
      dependencies : ["mouseout", "mouseover"]
    },
    pointerEnter : {
      registrationName : "onPointerEnter",
      dependencies : ["pointerout", "pointerover"]
    },
    pointerLeave : {
      registrationName : "onPointerLeave",
      dependencies : ["pointerout", "pointerover"]
    }
  };
  var EnterLeaveEventPlugin = {
    eventTypes : api,
    extractEvents : function(e, value, event, target) {
      /** @type {boolean} */
      var el = "mouseover" === e || "pointerover" === e;
      /** @type {boolean} */
      var node = "mouseout" === e || "pointerout" === e;
      if (el && (event.relatedTarget || event.fromElement) || !node && !el) {
        return null;
      }
      if (el = target.window === target ? target : (el = target.ownerDocument) ? el.defaultView || el.parentWindow : window, node ? (node = value, value = (value = event.relatedTarget || event.toElement) ? v(value) : null) : node = null, node === value) {
        return null;
      }
      var a = void 0;
      var load = void 0;
      var element = void 0;
      var i = void 0;
      if ("mouseout" === e || "mouseover" === e) {
        a = t;
        load = api.mouseLeave;
        element = api.mouseEnter;
        /** @type {string} */
        i = "mouse";
      } else {
        if (!("pointerout" !== e && "pointerover" !== e)) {
          a = angle;
          load = api.pointerLeave;
          element = api.pointerEnter;
          /** @type {string} */
          i = "pointer";
        }
      }
      var index = null == node ? el : getProperty(node);
      if (el = null == value ? el : getProperty(value), e = a.getPooled(load, node, event, target), e.type = i + "leave", e.target = index, e.relatedTarget = el, event = a.getPooled(element, value, event, target), event.type = i + "enter", event.target = el, event.relatedTarget = index, target = value, node && target) {
        e: {
          /** @type {boolean} */
          value = node;
          /** @type {!Object} */
          el = target;
          /** @type {number} */
          i = 0;
          /** @type {!Object} */
          a = value;
          for (; a; a = jQuery(a)) {
            i++;
          }
          /** @type {number} */
          a = 0;
          element = el;
          for (; element; element = jQuery(element)) {
            a++;
          }
          for (; 0 < i - a;) {
            value = jQuery(value);
            i--;
          }
          for (; 0 < a - i;) {
            el = jQuery(el);
            a--;
          }
          for (; i--;) {
            if (value === el || value === el.alternate) {
              break e;
            }
            value = jQuery(value);
            el = jQuery(el);
          }
          /** @type {null} */
          value = null;
        }
      } else {
        /** @type {null} */
        value = null;
      }
      /** @type {!Object} */
      el = value;
      /** @type {!Array} */
      value = [];
      for (; node && node !== el && (null === (i = node.alternate) || i !== el);) {
        value.push(node);
        node = jQuery(node);
      }
      /** @type {!Array} */
      node = [];
      for (; target && target !== el && (null === (i = target.alternate) || i !== el);) {
        node.push(target);
        target = jQuery(target);
      }
      /** @type {number} */
      target = 0;
      for (; target < value.length; target++) {
        accumulateDispatches(value[target], "bubbled", e);
      }
      /** @type {number} */
      target = node.length;
      for (; 0 < target--;) {
        accumulateDispatches(node[target], "captured", event);
      }
      return [e, event];
    }
  };
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = Object.prototype.hasOwnProperty;
  var plsql_keyword = Event.extend({
    animationName : null,
    elapsedTime : null,
    pseudoElement : null
  });
  var plsql_function = Event.extend({
    clipboardData : function(event) {
      return "clipboardData" in event ? event.clipboardData : window.clipboardData;
    }
  });
  var plsql_type = touchList.extend({
    relatedTarget : null
  });
  var keyFixTable = {
    Esc : "Escape",
    Spacebar : " ",
    Left : "ArrowLeft",
    Up : "ArrowUp",
    Right : "ArrowRight",
    Down : "ArrowDown",
    Del : "Delete",
    Win : "OS",
    Menu : "ContextMenu",
    Apps : "ContextMenu",
    Scroll : "ScrollLock",
    MozPrintableKey : "Unidentified"
  };
  var JIRA_TO_PIVOTAL_TYPES = {
    8 : "Backspace",
    9 : "Tab",
    12 : "Clear",
    13 : "Enter",
    16 : "Shift",
    17 : "Control",
    18 : "Alt",
    19 : "Pause",
    20 : "CapsLock",
    27 : "Escape",
    32 : " ",
    33 : "PageUp",
    34 : "PageDown",
    35 : "End",
    36 : "Home",
    37 : "ArrowLeft",
    38 : "ArrowUp",
    39 : "ArrowRight",
    40 : "ArrowDown",
    45 : "Insert",
    46 : "Delete",
    112 : "F1",
    113 : "F2",
    114 : "F3",
    115 : "F4",
    116 : "F5",
    117 : "F6",
    118 : "F7",
    119 : "F8",
    120 : "F9",
    121 : "F10",
    122 : "F11",
    123 : "F12",
    144 : "NumLock",
    145 : "ScrollLock",
    224 : "Meta"
  };
  var sonos_stream = touchList.extend({
    key : function(type) {
      if (type.key) {
        var valueType = keyFixTable[type.key] || type.key;
        if ("Unidentified" !== valueType) {
          return valueType;
        }
      }
      return "keypress" === type.type ? (type = test(type), 13 === type ? "Enter" : String.fromCharCode(type)) : "keydown" === type.type || "keyup" === type.type ? JIRA_TO_PIVOTAL_TYPES[type.keyCode] || "Unidentified" : "";
    },
    location : null,
    ctrlKey : null,
    shiftKey : null,
    altKey : null,
    metaKey : null,
    repeat : null,
    locale : null,
    getModifierState : movementCost,
    charCode : function(event) {
      return "keypress" === event.type ? test(event) : 0;
    },
    keyCode : function(e) {
      return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
    },
    which : function(e) {
      return "keypress" === e.type ? test(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
    }
  });
  var abortActionType = t.extend({
    dataTransfer : null
  });
  var Masses = touchList.extend({
    touches : null,
    targetTouches : null,
    changedTouches : null,
    altKey : null,
    metaKey : null,
    ctrlKey : null,
    shiftKey : null,
    getModifierState : movementCost
  });
  var Parishes = Event.extend({
    propertyName : null,
    elapsedTime : null,
    pseudoElement : null
  });
  var plsql_operator = t.extend({
    deltaX : function(event) {
      return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
    },
    deltaY : function(event) {
      return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
    },
    deltaZ : null,
    deltaMode : null
  });
  /** @type {!Array} */
  var pipelets = [["abort", "abort"], [animEnd, "animationEnd"], [scatterChart, "animationIteration"], [string_object_array, "animationStart"], ["canplay", "canPlay"], ["canplaythrough", "canPlayThrough"], ["drag", "drag"], ["dragenter", "dragEnter"], ["dragexit", "dragExit"], ["dragleave", "dragLeave"], ["dragover", "dragOver"], ["durationchange", "durationChange"], ["emptied", "emptied"], ["encrypted", "encrypted"], ["ended", "ended"], ["error", "error"], ["gotpointercapture", "gotPointerCapture"],
    ["load", "load"], ["loadeddata", "loadedData"], ["loadedmetadata", "loadedMetadata"], ["loadstart", "loadStart"], ["lostpointercapture", "lostPointerCapture"], ["mousemove", "mouseMove"], ["mouseout", "mouseOut"], ["mouseover", "mouseOver"], ["playing", "playing"], ["pointermove", "pointerMove"], ["pointerout", "pointerOut"], ["pointerover", "pointerOver"], ["progress", "progress"], ["scroll", "scroll"], ["seeking", "seeking"], ["stalled", "stalled"], ["suspend", "suspend"], ["timeupdate", "timeUpdate"],
    ["toggle", "toggle"], ["touchmove", "touchMove"], [transEnd, "transitionEnd"], ["waiting", "waiting"], ["wheel", "wheel"]];
  var msgTypeCache = {};
  var memo = {};
  [["blur", "blur"], ["cancel", "cancel"], ["click", "click"], ["close", "close"], ["contextmenu", "contextMenu"], ["copy", "copy"], ["cut", "cut"], ["auxclick", "auxClick"], ["dblclick", "doubleClick"], ["dragend", "dragEnd"], ["dragstart", "dragStart"], ["drop", "drop"], ["focus", "focus"], ["input", "input"], ["invalid", "invalid"], ["keydown", "keyDown"], ["keypress", "keyPress"], ["keyup", "keyUp"], ["mousedown", "mouseDown"], ["mouseup", "mouseUp"], ["paste", "paste"], ["pause", "pause"], ["play",
    "play"], ["pointercancel", "pointerCancel"], ["pointerdown", "pointerDown"], ["pointerup", "pointerUp"], ["ratechange", "rateChange"], ["reset", "reset"], ["seeked", "seeked"], ["submit", "submit"], ["touchcancel", "touchCancel"], ["touchend", "touchEnd"], ["touchstart", "touchStart"], ["volumechange", "volumeChange"]].forEach(function(child) {
    _capture(child, true);
  });
  pipelets.forEach(function(child) {
    _capture(child, false);
  });
  var SimpleEventPlugin = {
    eventTypes : msgTypeCache,
    isInteractiveTopLevelEventType : function(value) {
      return void 0 !== (value = memo[value]) && true === value.isInteractive;
    },
    extractEvents : function(type, name, context, nativeEventTarget) {
      var array = memo[type];
      if (!array) {
        return null;
      }
      switch(type) {
        case "keypress":
          if (0 === test(context)) {
            return null;
          }
        case "keydown":
        case "keyup":
          type = sonos_stream;
          break;
        case "blur":
        case "focus":
          type = plsql_type;
          break;
        case "click":
          if (2 === context.button) {
            return null;
          }
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          type = t;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          type = abortActionType;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          type = Masses;
          break;
        case animEnd:
        case scatterChart:
        case string_object_array:
          type = plsql_keyword;
          break;
        case transEnd:
          type = Parishes;
          break;
        case "scroll":
          type = touchList;
          break;
        case "wheel":
          type = plsql_operator;
          break;
        case "copy":
        case "cut":
        case "paste":
          type = plsql_function;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          type = angle;
          break;
        default:
          /** @type {function(!Object, ?, !Object, !Object): ?} */
          type = Event;
      }
      return name = type.getPooled(array, name, context, nativeEventTarget), check(name), name;
    }
  };
  /** @type {function(string): ?} */
  var Error = SimpleEventPlugin.isInteractiveTopLevelEventType;
  /** @type {!Array} */
  var deadPool = [];
  /** @type {boolean} */
  var mi = true;
  var reversed = {};
  /** @type {number} */
  var reactTopListenersCounter = 0;
  /** @type {string} */
  var topListenersIDKey = "_reactListenersID" + ("" + Math.random()).slice(2);
  /** @type {boolean} */
  var bi = val && "documentMode" in document && 11 >= document.documentMode;
  var panel = {
    select : {
      phasedRegistrationNames : {
        bubbled : "onSelect",
        captured : "onSelectCapture"
      },
      dependencies : "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
    }
  };
  /** @type {null} */
  var s = null;
  /** @type {null} */
  var params = null;
  /** @type {null} */
  var tooltip = null;
  /** @type {boolean} */
  var img_tween = false;
  var SelectEventPlugin = {
    eventTypes : panel,
    extractEvents : function(node, name, event, nativeEventTarget) {
      var os;
      var obj = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
      if (!(os = !obj)) {
        e: {
          obj = __hasOwn(obj);
          os = _this.onSelect;
          /** @type {number} */
          var i = 0;
          for (; i < os.length; i++) {
            var o = os[i];
            if (!obj.hasOwnProperty(o) || !obj[o]) {
              /** @type {boolean} */
              obj = false;
              break e;
            }
          }
          /** @type {boolean} */
          obj = true;
        }
        /** @type {boolean} */
        os = !obj;
      }
      if (os) {
        return null;
      }
      switch(obj = name ? getProperty(name) : window, node) {
        case "focus":
          if (shouldUseChangeEvent(obj) || "true" === obj.contentEditable) {
            s = obj;
            /** @type {number} */
            params = name;
            /** @type {null} */
            tooltip = null;
          }
          break;
        case "blur":
          /** @type {null} */
          tooltip = params = s = null;
          break;
        case "mousedown":
          /** @type {boolean} */
          img_tween = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          return img_tween = false, getSelection(event, nativeEventTarget);
        case "selectionchange":
          if (bi) {
            break;
          }
        case "keydown":
        case "keyup":
          return getSelection(event, nativeEventTarget);
      }
      return null;
    }
  };
  EventPluginRegistry.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
  /** @type {function(!Object): ?} */
  stringify = findOrCreate;
  /** @type {function(!Object): ?} */
  markNodeAsRequired = PropertyDescription;
  /** @type {function(?): ?} */
  warning = getProperty;
  EventPluginRegistry.injectEventPluginsByName({
    SimpleEventPlugin : SimpleEventPlugin,
    EnterLeaveEventPlugin : EnterLeaveEventPlugin,
    ChangeEventPlugin : ChangeEventPlugin,
    SelectEventPlugin : SelectEventPlugin,
    BeforeInputEventPlugin : BeforeInputEventPlugin
  });
  var el = {
    html : "http://www.w3.org/1999/xhtml",
    mathml : "http://www.w3.org/1998/Math/MathML",
    svg : "http://www.w3.org/2000/svg"
  };
  var parent = void 0;
  var setInstanceProperty = function(cb) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(obsOrValue, i, canCreateDiscussions, isSlidingUp) {
      MSApp.execUnsafeLocalFunction(function() {
        return cb(obsOrValue, i);
      });
    } : cb;
  }(function(target, node) {
    if (target.namespaceURI !== el.svg || "innerHTML" in target) {
      /** @type {!Object} */
      target.innerHTML = node;
    } else {
      parent = parent || document.createElement("div");
      /** @type {string} */
      parent.innerHTML = "<svg>" + node + "</svg>";
      node = parent.firstChild;
      for (; target.firstChild;) {
        target.removeChild(target.firstChild);
      }
      for (; node.firstChild;) {
        target.appendChild(node.firstChild);
      }
    }
  });
  var isUnitlessNumber = {
    animationIterationCount : true,
    borderImageOutset : true,
    borderImageSlice : true,
    borderImageWidth : true,
    boxFlex : true,
    boxFlexGroup : true,
    boxOrdinalGroup : true,
    columnCount : true,
    columns : true,
    flex : true,
    flexGrow : true,
    flexPositive : true,
    flexShrink : true,
    flexNegative : true,
    flexOrder : true,
    gridArea : true,
    gridRow : true,
    gridRowEnd : true,
    gridRowSpan : true,
    gridRowStart : true,
    gridColumn : true,
    gridColumnEnd : true,
    gridColumnSpan : true,
    gridColumnStart : true,
    fontWeight : true,
    lineClamp : true,
    lineHeight : true,
    opacity : true,
    order : true,
    orphans : true,
    tabSize : true,
    widows : true,
    zIndex : true,
    zoom : true,
    fillOpacity : true,
    floodOpacity : true,
    stopOpacity : true,
    strokeDasharray : true,
    strokeDashoffset : true,
    strokeMiterlimit : true,
    strokeOpacity : true,
    strokeWidth : true
  };
  /** @type {!Array} */
  var prefixes = ["Webkit", "ms", "Moz", "O"];
  Object.keys(isUnitlessNumber).forEach(function(prop) {
    prefixes.forEach(function(key) {
      /** @type {string} */
      key = key + prop.charAt(0).toUpperCase() + prop.substring(1);
      isUnitlessNumber[key] = isUnitlessNumber[prop];
    });
  });
  var b = assign({
    menuitem : true
  }, {
    area : true,
    base : true,
    br : true,
    col : true,
    embed : true,
    hr : true,
    img : true,
    input : true,
    keygen : true,
    link : true,
    meta : true,
    param : true,
    source : true,
    track : true,
    wbr : true
  });
  /** @type {null} */
  var maxindent = null;
  /** @type {null} */
  var ContainerInstance = null;
  new Set;
  /** @type {!Array} */
  var fields = [];
  /** @type {number} */
  var i = -1;
  var page = {};
  var self = {
    current : page
  };
  var response = {
    current : false
  };
  var index = page;
  /** @type {null} */
  var keys = null;
  /** @type {null} */
  var doc = null;
  /** @type {boolean} */
  var results = false;
  var info = {
    current : null
  };
  /** @type {null} */
  var Pot = null;
  /** @type {null} */
  var proto = null;
  /** @type {null} */
  var mappedName = null;
  var date = {};
  var options = {
    current : date
  };
  var o = {
    current : date
  };
  var request = {
    current : date
  };
  var refs = (new React.Component).refs;
  var url = {
    isMounted : function(item) {
      return !!(item = item._reactInternalFiber) && 2 === push(item);
    },
    enqueueSetState : function(key, data, callback) {
      key = key._reactInternalFiber;
      var val = tryReq();
      val = iterator(val, key);
      var r = encodeURIComponent(val);
      /** @type {!Object} */
      r.payload = data;
      if (void 0 !== callback && null !== callback) {
        /** @type {number} */
        r.callback = callback;
      }
      map(key, r);
      convert(key, val);
    },
    enqueueReplaceState : function(obj, name, callback) {
      obj = obj._reactInternalFiber;
      var val = tryReq();
      val = iterator(val, obj);
      var o = encodeURIComponent(val);
      /** @type {number} */
      o.tag = 1;
      /** @type {!Object} */
      o.payload = name;
      if (void 0 !== callback && null !== callback) {
        /** @type {number} */
        o.callback = callback;
      }
      map(obj, o);
      convert(obj, val);
    },
    enqueueForceUpdate : function(key, callback) {
      key = key._reactInternalFiber;
      var val = tryReq();
      val = iterator(val, key);
      var r = encodeURIComponent(val);
      /** @type {number} */
      r.tag = 2;
      if (void 0 !== callback && null !== callback) {
        /** @type {!Object} */
        r.callback = callback;
      }
      map(key, r);
      convert(key, val);
    }
  };
  /** @type {function(*): boolean} */
  var isArray = Array.isArray;
  var compile = init(true);
  var transform = init(false);
  /** @type {null} */
  var root = null;
  /** @type {null} */
  var obj = null;
  /** @type {boolean} */
  var abort = false;
  var subList = moduleMap.ReactCurrentOwner;
  var drawHexUnit = void 0;
  var setup = void 0;
  var c = void 0;
  /**
   * @return {undefined}
   */
  drawHexUnit = function() {
  };
  /**
   * @param {!Object} a
   * @param {?} b
   * @param {string} name
   * @param {!Object} props
   * @param {!Array} o
   * @return {undefined}
   */
  setup = function(a, b, name, props, o) {
    var result = a.memoizedProps;
    if (result !== props) {
      var i = b.stateNode;
      switch(translate(options.current), a = null, name) {
        case "input":
          result = concat(i, result);
          props = concat(i, props);
          /** @type {!Array} */
          a = [];
          break;
        case "option":
          result = merge(i, result);
          props = merge(i, props);
          /** @type {!Array} */
          a = [];
          break;
        case "select":
          result = assign({}, result, {
            value : void 0
          });
          props = assign({}, props, {
            value : void 0
          });
          /** @type {!Array} */
          a = [];
          break;
        case "textarea":
          result = prepare(i, result);
          props = prepare(i, props);
          /** @type {!Array} */
          a = [];
          break;
        default:
          if ("function" !== typeof result.onClick && "function" === typeof props.onClick) {
            /** @type {function(): undefined} */
            i.onclick = param;
          }
      }
      h(name, props);
      i = name = void 0;
      /** @type {null} */
      var data = null;
      for (name in result) {
        if (!props.hasOwnProperty(name) && result.hasOwnProperty(name) && null != result[name]) {
          if ("style" === name) {
            var v = result[name];
            for (i in v) {
              if (v.hasOwnProperty(i)) {
                if (!data) {
                  data = {};
                }
                /** @type {string} */
                data[i] = "";
              }
            }
          } else {
            if ("dangerouslySetInnerHTML" !== name && "children" !== name && "suppressContentEditableWarning" !== name && "suppressHydrationWarning" !== name && "autoFocus" !== name) {
              if (props.hasOwnProperty(name)) {
                if (!a) {
                  /** @type {!Array} */
                  a = [];
                }
              } else {
                (a = a || []).push(name, null);
              }
            }
          }
        }
      }
      for (name in props) {
        var value = props[name];
        if (v = null != result ? result[name] : void 0, props.hasOwnProperty(name) && value !== v && (null != value || null != v)) {
          if ("style" === name) {
            if (v) {
              for (i in v) {
                if (!(!v.hasOwnProperty(i) || value && value.hasOwnProperty(i))) {
                  if (!data) {
                    data = {};
                  }
                  /** @type {string} */
                  data[i] = "";
                }
              }
              for (i in value) {
                if (value.hasOwnProperty(i) && v[i] !== value[i]) {
                  if (!data) {
                    data = {};
                  }
                  data[i] = value[i];
                }
              }
            } else {
              if (!data) {
                if (!a) {
                  /** @type {!Array} */
                  a = [];
                }
                a.push(name, data);
              }
              data = value;
            }
          } else {
            if ("dangerouslySetInnerHTML" === name) {
              value = value ? value.__html : void 0;
              v = v ? v.__html : void 0;
              if (null != value && v !== value) {
                (a = a || []).push(name, "" + value);
              }
            } else {
              if ("children" === name) {
                if (!(v === value || "string" !== typeof value && "number" !== typeof value)) {
                  (a = a || []).push(name, "" + value);
                }
              } else {
                if ("suppressContentEditableWarning" !== name && "suppressHydrationWarning" !== name) {
                  if (props.hasOwnProperty(name)) {
                    if (null != value) {
                      bind(o, name);
                    }
                    if (!(a || v === value)) {
                      /** @type {!Array} */
                      a = [];
                    }
                  } else {
                    (a = a || []).push(name, value);
                  }
                }
              }
            }
          }
        }
      }
      if (data) {
        (a = a || []).push("style", data);
      }
      /** @type {!Object} */
      o = a;
      if (b.updateQueue = o) {
        trim(b);
      }
    }
  };
  /**
   * @param {?} _
   * @param {?} a
   * @param {?} f
   * @param {?} g
   * @return {undefined}
   */
  c = function(_, a, f, g) {
    if (f !== g) {
      trim(a);
    }
  };
  var vehicle = {
    readContext : recurse
  };
  var minimapMarker = moduleMap.ReactCurrentOwner;
  /** @type {number} */
  var previousEnd = 0;
  /** @type {number} */
  var searchScope = 0;
  /** @type {boolean} */
  var isBlockComment = false;
  /** @type {null} */
  var element = null;
  /** @type {null} */
  var current = null;
  /** @type {number} */
  var left = 0;
  /** @type {boolean} */
  var ga = false;
  /** @type {null} */
  var node = null;
  /** @type {boolean} */
  var fromContext = false;
  /** @type {null} */
  var writtenAssets = null;
  /** @type {null} */
  var items = null;
  /** @type {null} */
  var config = null;
  /** @type {number} */
  var borrowTimeLow = 0;
  var cmd = void 0;
  /** @type {boolean} */
  var verbose = false;
  /** @type {null} */
  var code = null;
  /** @type {number} */
  var a = 0;
  /** @type {number} */
  var data = 0;
  /** @type {boolean} */
  var disablePastDates = false;
  /** @type {boolean} */
  var ja = false;
  /** @type {null} */
  var n = null;
  /** @type {null} */
  var sectionClosest = null;
  /** @type {boolean} */
  var lvl = false;
  /** @type {boolean} */
  var Ia = false;
  /** @type {boolean} */
  var height = false;
  /** @type {null} */
  var p = null;
  var ms = queue.unstable_now();
  /** @type {number} */
  var d = 2 + (ms / 10 | 0);
  var asdf = d;
  /** @type {number} */
  var formattedGradebookGrade = 50;
  /** @type {number} */
  var formattedBestGrade = 0;
  /** @type {null} */
  var opt = null;
  /** @type {number} */
  var sectionOffsetTop = 1;
  /**
   * @param {!Object} a
   * @param {string} i
   * @param {!Object} el
   * @return {undefined}
   */
  callback = function(a, i, el) {
    switch(i) {
      case "input":
        if (setAttr(a, el), i = el.name, "radio" === el.type && null != i) {
          /** @type {!Object} */
          el = a;
          for (; el.parentNode;) {
            el = el.parentNode;
          }
          el = el.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]');
          /** @type {number} */
          i = 0;
          for (; i < el.length; i++) {
            var e = el[i];
            if (e !== a && e.form === a.form) {
              var el = findOrCreate(e);
              if (!el) {
                get("90");
              }
              getValue(e);
              setAttr(e, el);
            }
          }
        }
        break;
      case "textarea":
        hash(a, el);
        break;
      case "select":
        if (null != (i = el.value)) {
          text(a, !!el.multiple, i, false);
        }
    }
  };
  /**
   * @param {!Object} name
   * @return {?}
   */
  Timer.prototype.render = function(name) {
    if (!this._defer) {
      get("250");
    }
    /** @type {boolean} */
    this._hasChildren = true;
    /** @type {!Object} */
    this._children = name;
    var ret = this._root._internalRoot;
    var arg3 = this._expirationTime;
    var value = new Buffer;
    return func(name, ret, null, arg3, value._onCommit), value;
  };
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  Timer.prototype.then = function(callback) {
    if (this._didComplete) {
      callback();
    } else {
      var callbacks = this._callbacks;
      if (null === callbacks) {
        /** @type {!Array} */
        callbacks = this._callbacks = [];
      }
      callbacks.push(callback);
    }
  };
  /**
   * @return {undefined}
   */
  Timer.prototype.commit = function() {
    var app = this._root._internalRoot;
    var t = app.firstBatch;
    if (this._defer && null !== t || get("251"), this._hasChildren) {
      var hs_integer = this._expirationTime;
      if (t !== this) {
        if (this._hasChildren) {
          hs_integer = this._expirationTime = t._expirationTime;
          this.render(this._children);
        }
        /** @type {null} */
        var prev = null;
        var node = t;
        for (; node !== this;) {
          prev = node;
          node = node._next;
        }
        if (null === prev) {
          get("251");
        }
        prev._next = node._next;
        this._next = t;
        app.firstBatch = this;
      }
      /** @type {boolean} */
      this._defer = false;
      t = hs_integer;
      if (verbose) {
        get("253");
      }
      code = app;
      a = t;
      decode(app, t, true);
      getTime(1, null);
      t = this._next;
      /** @type {null} */
      this._next = null;
      t = app.firstBatch = t;
      if (null !== t && t._hasChildren) {
        t.render(t._children);
      }
    } else {
      /** @type {null} */
      this._next = null;
      /** @type {boolean} */
      this._defer = false;
    }
  };
  /**
   * @return {undefined}
   */
  Timer.prototype._onComplete = function() {
    if (!this._didComplete) {
      /** @type {boolean} */
      this._didComplete = true;
      var callbacks = this._callbacks;
      if (null !== callbacks) {
        /** @type {number} */
        var i = 0;
        for (; i < callbacks.length; i++) {
          (0, callbacks[i])();
        }
      }
    }
  };
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  Buffer.prototype.then = function(callback) {
    if (this._didCommit) {
      callback();
    } else {
      var callbacks = this._callbacks;
      if (null === callbacks) {
        /** @type {!Array} */
        callbacks = this._callbacks = [];
      }
      callbacks.push(callback);
    }
  };
  /**
   * @return {undefined}
   */
  Buffer.prototype._onCommit = function() {
    if (!this._didCommit) {
      /** @type {boolean} */
      this._didCommit = true;
      var callbacks = this._callbacks;
      if (null !== callbacks) {
        /** @type {number} */
        var i = 0;
        for (; i < callbacks.length; i++) {
          var callback = callbacks[i];
          if ("function" !== typeof callback) {
            get("191", callback);
          }
          callback();
        }
      }
    }
  };
  /**
   * @param {string} name
   * @param {?} value
   * @return {?}
   */
  Tree.prototype.render = function(name, value) {
    var verify = this._internalRoot;
    var r = new Buffer;
    return value = void 0 === value ? null : value, null !== value && r.then(value), each(name, verify, null, r._onCommit), r;
  };
  /**
   * @param {?} prop
   * @return {?}
   */
  Tree.prototype.unmount = function(prop) {
    var verify = this._internalRoot;
    var n = new Buffer;
    return prop = void 0 === prop ? null : prop, null !== prop && n.then(prop), each(null, verify, null, n._onCommit), n;
  };
  /**
   * @param {!Object} parent
   * @param {!Object} next
   * @param {?} prop
   * @return {?}
   */
  Tree.prototype.legacy_renderSubtreeIntoContainer = function(parent, next, prop) {
    var verify = this._internalRoot;
    var o = new Buffer;
    return prop = void 0 === prop ? null : prop, null !== prop && o.then(prop), each(next, verify, parent, o._onCommit), o;
  };
  /**
   * @return {?}
   */
  Tree.prototype.createBatch = function() {
    var next = new Timer(this);
    var popX2 = next._expirationTime;
    var t = this._internalRoot;
    var pt = t.firstBatch;
    if (null === pt) {
      t.firstBatch = next;
      /** @type {null} */
      next._next = null;
    } else {
      /** @type {null} */
      t = null;
      for (; null !== pt && pt._expirationTime <= popX2;) {
        t = pt;
        pt = pt._next;
      }
      next._next = pt;
      if (null !== t) {
        t._next = next;
      }
    }
    return next;
  };
  /** @type {function(!Function, !Object): ?} */
  div = tracker;
  /** @type {function(!Function, ?, ?): ?} */
  handler = submit;
  /**
   * @return {undefined}
   */
  enter = function() {
    if (!(verbose || 0 === data)) {
      getTime(data, null);
      /** @type {number} */
      data = 0;
    }
  };
  var xmlJSON = {
    createPortal : handleError,
    findDOMNode : function(node) {
      if (null == node) {
        return null;
      }
      if (1 === node.nodeType) {
        return node;
      }
      var element = node._reactInternalFiber;
      return void 0 === element && ("function" === typeof node.render ? get("188") : get("268", Object.keys(node))), node = findDOMNode(element), node = null === node ? null : node.stateNode;
    },
    hydrate : function(name, value, data) {
      return run(null, name, value, true, data);
    },
    render : function(name, value, path) {
      return run(null, name, value, false, path);
    },
    unstable_renderSubtreeIntoContainer : function(container, callback, id, step) {
      return (null == container || void 0 === container._reactInternalFiber) && get("38"), run(container, callback, id, false, step);
    },
    unmountComponentAtNode : function(node) {
      return isEmpty(node) || get("40"), !!node._reactRootContainer && (hasNonRootReactChild(function() {
        run(null, null, node, false, function() {
          /** @type {null} */
          node._reactRootContainer = null;
        });
      }), true);
    },
    unstable_createPortal : function() {
      return handleError.apply(void 0, arguments);
    },
    unstable_batchedUpdates : tracker,
    unstable_interactiveUpdates : submit,
    flushSync : function(e, t) {
      if (verbose) {
        get("187");
      }
      var i = lvl;
      /** @type {boolean} */
      lvl = true;
      try {
        return u(e, t);
      } finally {
        lvl = i;
        getTime(1, null);
      }
    },
    unstable_flushControlled : function(e) {
      var i = lvl;
      /** @type {boolean} */
      lvl = true;
      try {
        u(e);
      } finally {
        if (!((lvl = i) || verbose)) {
          getTime(1, null);
        }
      }
    },
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED : {
      Events : [PropertyDescription, getProperty, findOrCreate, EventPluginRegistry.injectEventPluginsByName, lstnrs, check, function(e) {
        _(e, accumulateDirectDispatchesSingle);
      }, action, emitEvent, display, sort]
    },
    unstable_createRoot : function(name, battle) {
      return isEmpty(name) || get("278"), new Tree(name, true, null != battle && true === battle.hydrate);
    }
  };
  !function(config) {
    /** @type {function(!Object): ?} */
    var optionsFunc = config.findFiberByHostInstance;
    use(assign({}, config, {
      findHostInstanceByFiber : function(node) {
        return node = findDOMNode(node), null === node ? null : node.stateNode;
      },
      findFiberByHostInstance : function(o) {
        return optionsFunc ? optionsFunc(o) : null;
      }
    }));
  }({
    findFiberByHostInstance : v,
    bundleType : 0,
    version : "16.5.2",
    rendererPackageName : "react-dom"
  });
  var xml = {
    default : xmlJSON
  };
  var DayPicker = xml && xmlJSON || xml;
  module.exports = DayPicker.default || DayPicker;
}, function(module, canCreateDiscussions, factory) {
  module.exports = factory(100);
}, function(canCreateDiscussions, BeautifulProperties, n) {
  /**
   * @return {undefined}
   */
  function notify() {
    if (!c) {
      var value = obj.timesOutAt;
      if (f) {
        cancelEntertainment();
      } else {
        /** @type {boolean} */
        f = true;
      }
      listener(handler, value);
    }
  }
  /**
   * @return {undefined}
   */
  function removeOldSlideStates() {
    var ref = obj;
    var node = obj.next;
    if (obj === node) {
      /** @type {null} */
      obj = null;
    } else {
      var previous = obj.previous;
      obj = previous.next = node;
      node.previous = previous;
    }
    /** @type {null} */
    ref.next = ref.previous = null;
    (ref = ref.callback)(deadline);
  }
  /**
   * @param {string} suppress_activity
   * @return {undefined}
   */
  function handler(suppress_activity) {
    /** @type {boolean} */
    c = true;
    /** @type {string} */
    deadline.didTimeout = suppress_activity;
    try {
      if (suppress_activity) {
        for (; null !== obj;) {
          var quality = BeautifulProperties.unstable_now();
          if (!(obj.timesOutAt <= quality)) {
            break;
          }
          do {
            removeOldSlideStates();
          } while (null !== obj && obj.timesOutAt <= quality);
        }
      } else {
        if (null !== obj) {
          do {
            removeOldSlideStates();
          } while (null !== obj && 0 < value() - BeautifulProperties.unstable_now());
        }
      }
    } finally {
      /** @type {boolean} */
      c = false;
      if (null !== obj) {
        notify(obj);
      } else {
        /** @type {boolean} */
        f = false;
      }
    }
  }
  /**
   * @param {!Function} success
   * @return {undefined}
   */
  function set(success) {
    /** @type {number} */
    result = task(function(newSubtask) {
      func(frame);
      success(newSubtask);
    });
    /** @type {number} */
    frame = raf(function() {
      done(result);
      success(BeautifulProperties.unstable_now());
    }, 100);
  }
  Object.defineProperty(BeautifulProperties, "__esModule", {
    value : true
  });
  var result;
  var frame;
  /** @type {null} */
  var obj = null;
  /** @type {boolean} */
  var c = false;
  /** @type {boolean} */
  var f = false;
  /** @type {boolean} */
  var p = "object" === typeof performance && "function" === typeof performance.now;
  var deadline = {
    timeRemaining : p ? function() {
      /** @type {number} */
      var r = value() - performance.now();
      return 0 < r ? r : 0;
    } : function() {
      /** @type {number} */
      var r = value() - Date.now();
      return 0 < r ? r : 0;
    },
    didTimeout : false
  };
  /** @type {function(new:Date, ?=, ?=, ?=, ?=, ?=, ?=, ?=): string} */
  var clock = Date;
  /** @type {(function((!Function|null|string), number=, ...*): number|undefined)} */
  var raf = "function" === typeof setTimeout ? setTimeout : void 0;
  /** @type {(function((null|number|undefined)): undefined|undefined)} */
  var func = "function" === typeof clearTimeout ? clearTimeout : void 0;
  /** @type {(function(function(number): undefined, (Element|null)=): number|undefined)} */
  var task = "function" === typeof requestAnimationFrame ? requestAnimationFrame : void 0;
  /** @type {(function(number): undefined|undefined)} */
  var done = "function" === typeof cancelAnimationFrame ? cancelAnimationFrame : void 0;
  if (p) {
    /** @type {!Performance} */
    var tsw = performance;
    /**
     * @return {?}
     */
    BeautifulProperties.unstable_now = function() {
      return tsw.now();
    };
  } else {
    /**
     * @return {?}
     */
    BeautifulProperties.unstable_now = function() {
      return clock.now();
    };
  }
  var listener;
  var cancelEntertainment;
  var value;
  if ("undefined" === typeof window) {
    /** @type {number} */
    var gKontikiTimeout = -1;
    /**
     * @param {!Function} callback
     * @return {undefined}
     */
    listener = function(callback) {
      /** @type {number} */
      gKontikiTimeout = setTimeout(callback, 0, true);
    };
    /**
     * @return {undefined}
     */
    cancelEntertainment = function() {
      clearTimeout(gKontikiTimeout);
    };
    /**
     * @return {?}
     */
    value = function() {
      return 0;
    };
  } else {
    if (window._schedMock) {
      var cache = window._schedMock;
      listener = cache[0];
      cancelEntertainment = cache[1];
      value = cache[2];
    } else {
      if ("undefined" !== typeof console) {
        if ("function" !== typeof task) {
          console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
        }
        if ("function" !== typeof done) {
          console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
        }
      }
      /** @type {null} */
      var error = null;
      /** @type {boolean} */
      var P = false;
      /** @type {number} */
      var k = -1;
      /** @type {boolean} */
      var num_to_grab = false;
      /** @type {boolean} */
      var S = false;
      /** @type {number} */
      var n = 0;
      /** @type {number} */
      var r = 33;
      /** @type {number} */
      var i = 33;
      /**
       * @return {?}
       */
      value = function() {
        return n;
      };
      /** @type {string} */
      var zeroTimeoutMessageName = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
      window.addEventListener("message", function(event) {
        if (event.source === window && event.data === zeroTimeoutMessageName) {
          /** @type {boolean} */
          P = false;
          var f = BeautifulProperties.unstable_now();
          if (event = false, 0 >= n - f) {
            if (!(-1 !== k && k <= f)) {
              return void(num_to_grab || (num_to_grab = true, set(scope)));
            }
            /** @type {boolean} */
            event = true;
          }
          if (k = -1, f = error, error = null, null !== f) {
            /** @type {boolean} */
            S = true;
            try {
              f(event);
            } finally {
              /** @type {boolean} */
              S = false;
            }
          }
        }
      }, false);
      /**
       * @param {?} index
       * @return {undefined}
       */
      var scope = function(index) {
        /** @type {boolean} */
        num_to_grab = false;
        var l = index - n + i;
        if (l < i && r < i) {
          if (8 > l) {
            /** @type {number} */
            l = 8;
          }
          i = l < r ? r : l;
        } else {
          r = l;
        }
        n = index + i;
        if (!P) {
          /** @type {boolean} */
          P = true;
          window.postMessage(zeroTimeoutMessageName, "*");
        }
      };
      /**
       * @param {string} callback
       * @param {string} type
       * @return {undefined}
       */
      listener = function(callback, type) {
        /** @type {string} */
        error = callback;
        /** @type {string} */
        k = type;
        if (S) {
          window.postMessage(zeroTimeoutMessageName, "*");
        } else {
          if (!num_to_grab) {
            /** @type {boolean} */
            num_to_grab = true;
            set(scope);
          }
        }
      };
      /**
       * @return {undefined}
       */
      cancelEntertainment = function() {
        /** @type {null} */
        error = null;
        /** @type {boolean} */
        P = false;
        /** @type {number} */
        k = -1;
      };
    }
  }
  /**
   * @param {!Object} node
   * @param {!Object} value
   * @return {?}
   */
  BeautifulProperties.unstable_scheduleWork = function(node, value) {
    var p = BeautifulProperties.unstable_now();
    if (value = void 0 !== value && null !== value && null !== value.timeout && void 0 !== value.timeout ? p + value.timeout : p + 5E3, node = {
      callback : node,
      timesOutAt : value,
      next : null,
      previous : null
    }, null === obj) {
      obj = node.next = node.previous = node;
      notify(obj);
    } else {
      /** @type {null} */
      p = null;
      var current = obj;
      do {
        if (current.timesOutAt > value) {
          p = current;
          break;
        }
        current = current.next;
      } while (current !== obj);
      if (null === p) {
        p = obj;
      } else {
        if (p === obj) {
          /** @type {!Object} */
          obj = node;
          notify(obj);
        }
      }
      value = p.previous;
      value.next = p.previous = node;
      node.next = p;
      /** @type {!Object} */
      node.previous = value;
    }
    return node;
  };
  /**
   * @param {!Object} item
   * @return {undefined}
   */
  BeautifulProperties.unstable_cancelScheduledWork = function(item) {
    var next = item.next;
    if (null !== next) {
      if (next === item) {
        /** @type {null} */
        obj = null;
      } else {
        if (item === obj) {
          obj = next;
        }
        var previous = item.previous;
        previous.next = next;
        next.previous = previous;
      }
      /** @type {null} */
      item.next = item.previous = null;
    }
  };
}, function(canCreateDiscussions, C, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} name
   * @param {string} hook
   * @return {?}
   */
  function on(name, hook) {
    if (!name) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !hook || "object" !== typeof hook && "function" !== typeof hook ? name : hook;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(102);
  var _createClass = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__), function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }());
  var sx = function(_EventEmitter) {
    /**
     * @param {?} callback
     * @return {?}
     */
    function Agent(callback) {
      _classCallCheck(this, Agent);
      var that = on(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, callback));
      return that.root = null, that.dot = null, that.onMouseUp = function() {
        window.removeEventListener("mousemove", that.onMouseMove);
        window.removeEventListener("touchmove", that.onMouseMove);
      }, that.onMouseMove = function(event) {
        if (event.stopPropagation(), event.preventDefault(), event.changedTouches) {
          var aEvent = event.changedTouches[0];
          that.setXForValue(aEvent.clientX);
        } else {
          that.setXForValue(event.clientX);
        }
      }, window.addEventListener("mouseup", that.onMouseUp), window.addEventListener("touchend", that.onMouseUp), window.addEventListener("touchcancel", that.onMouseUp), that;
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "componentWillUnmount",
      value : function() {
        window.removeEventListener("mouseup", this.onMouseUp);
        window.removeEventListener("touchend", this.onMouseUp);
        window.removeEventListener("touchcancel", this.onMouseUp);
      }
    }, {
      key : "onMouseDown",
      value : function() {
        window.addEventListener("mousemove", this.onMouseMove);
        window.addEventListener("touchmove", this.onMouseMove);
      }
    }, {
      key : "componentDidMount",
      value : function() {
        var enemy = this;
        this.dot.addEventListener("touchstart", function(event) {
          enemy.onMouseDown(event);
        });
      }
    }, {
      key : "onClick",
      value : function(name) {
        this.setXForValue(name.clientX);
      }
    }, {
      key : "setXForValue",
      value : function(name) {
        var p = this.getPosition(this.root);
        /** @type {number} */
        var offsetX = name - p.x;
        var width = this.root.clientWidth;
        /** @type {number} */
        var dx = Math.min(1, Math.max(0, offsetX / width));
        var props = this.props;
        var i = props.max;
        var x = props.min;
        var type = (i - x) * dx + x;
        this.props.onChange(type);
      }
    }, {
      key : "getPosition",
      value : function(options) {
        /** @type {number} */
        var tick_x = 0;
        /** @type {number} */
        var totalPass = 0;
        for (; options;) {
          if ("BODY" === options.tagName) {
            var length = options.scrollLeft || document.documentElement.scrollLeft;
            var offset = options.scrollTop || document.documentElement.scrollTop;
            tick_x = tick_x + (options.offsetLeft - length + options.clientLeft);
            totalPass = totalPass + (options.offsetTop - offset + options.clientTop);
          } else {
            tick_x = tick_x + (options.offsetLeft - options.scrollLeft + options.clientLeft);
            totalPass = totalPass + (options.offsetTop - options.scrollTop + options.clientTop);
          }
          options = options.offsetParent;
        }
        return {
          x : tick_x,
          y : totalPass
        };
      }
    }, {
      key : "render",
      value : function() {
        var self = this;
        var _props2 = this.props;
        var value = _props2.value;
        var max = _props2.max;
        var min = _props2.min;
        /** @type {number} */
        var position = Math.abs(max - min);
        /** @type {number} */
        var e_leftPos = Math.min(100, Math.max(0, value / position * 100));
        return row.a.createElement("div", {
          ref : function(name) {
            return self.root = name;
          },
          onClick : function(name) {
            return self.onClick(name);
          },
          className : "Slider"
        }, row.a.createElement("div", {
          className : "Slider__line"
        }), row.a.createElement("div", {
          style : {
            left : e_leftPos + "%"
          },
          onMouseDown : function(evt) {
            return self.onMouseDown(evt);
          },
          ref : function(name) {
            return self.dot = name;
          },
          className : "Slider__dot"
        }));
      }
    }]), Agent;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  C.a = sx;
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, colorTo, require) {
  var I18n = require(104);
  colorTo.a = I18n.a;
  I18n.a.changeLanguage.bind(I18n.a);
  I18n.a.cloneInstance.bind(I18n.a);
  I18n.a.createInstance.bind(I18n.a);
  I18n.a.dir.bind(I18n.a);
  I18n.a.exists.bind(I18n.a);
  I18n.a.getFixedT.bind(I18n.a);
  I18n.a.init.bind(I18n.a);
  I18n.a.loadLanguages.bind(I18n.a);
  I18n.a.loadNamespaces.bind(I18n.a);
  I18n.a.loadResources.bind(I18n.a);
  I18n.a.off.bind(I18n.a);
  I18n.a.on.bind(I18n.a);
  I18n.a.setDefaultNamespace.bind(I18n.a);
  I18n.a.t.bind(I18n.a);
  I18n.a.use.bind(I18n.a);
}, function(canCreateDiscussions, B, require) {
  /**
   * @param {!Function} obj
   * @param {!Object} defaults
   * @return {?}
   */
  function _defaults(obj, defaults) {
    /** @type {!Array<string>} */
    var keys = Object.getOwnPropertyNames(defaults);
    /** @type {number} */
    var key = 0;
    for (; key < keys.length; key++) {
      /** @type {string} */
      var i = keys[key];
      /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
      var value = Object.getOwnPropertyDescriptor(defaults, i);
      if (value && value.configurable && void 0 === obj[i]) {
        Object.defineProperty(obj, i, value);
      }
    }
    return obj;
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
  }
  /**
   * @param {!Function} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        _defaults(subClass, superClass);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function undefined() {
  }
  var config = require(5);
  var clonedI = require(7);
  var L = require(105);
  var app = require(106);
  var providers = require(107);
  var _PluralResolver2 = require(108);
  var THREE = require(109);
  var _BackendConnector2 = require(110);
  var _CacheConnector2 = require(111);
  var schema = require(112);
  var v = require(38);
  /** @type {function(!Object): ?} */
  var prevIndexTotal = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(aRoundNumber) {
    return typeof aRoundNumber;
  } : function(obj) {
    return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var _extends = Object.assign || function(name) {
    /** @type {number} */
    var index = 1;
    for (; index < arguments.length; index++) {
      var options = arguments[index];
      var option;
      for (option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option)) {
          name[option] = options[option];
        }
      }
    }
    return name;
  };
  var A = function(_Namespace) {
    /**
     * @return {?}
     */
    function I18n() {
      var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var callback = arguments[1];
      _classCallCheck(this, I18n);
      var _this = _possibleConstructorReturn(this, _Namespace.call(this));
      if (_this.options = Object(schema.b)(options), _this.services = {}, _this.logger = config.a, _this.modules = {
        external : []
      }, callback && !_this.isInitialized && !options.isClone) {
        var _ret;
        if (!_this.options.initImmediate) {
          return _ret = _this.init(options, callback), _possibleConstructorReturn(_this, _ret);
        }
        setTimeout(function() {
          _this.init(options, callback);
        }, 0);
      }
      return _this;
    }
    return _inherits(I18n, _Namespace), I18n.prototype.init = function() {
      /**
       * @param {string} definition
       * @return {?}
       */
      function createClassOnDemand(definition) {
        return definition ? "function" === typeof definition ? new definition : definition : null;
      }
      var self = this;
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var r = arguments[1];
      if ("function" === typeof n && (r = n, n = {}), this.options = _extends({}, Object(schema.a)(), this.options, Object(schema.b)(n)), this.format = this.options.interpolation.format, r || (r = undefined), !this.options.isClone) {
        if (this.modules.logger) {
          config.a.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          config.a.init(null, this.options);
        }
        var lu = new providers.a(this.options);
        this.store = new L.a(this.options.resources, this.options);
        var s = this.services;
        s.logger = config.a;
        s.resourceStore = this.store;
        s.resourceStore.on("added removed", function(canCreateDiscussions, isSlidingUp) {
          s.cacheConnector.save();
        });
        s.languageUtils = lu;
        s.pluralResolver = new _PluralResolver2.a(lu, {
          prepend : this.options.pluralSeparator,
          compatibilityJSON : this.options.compatibilityJSON,
          simplifyPluralSuffix : this.options.simplifyPluralSuffix
        });
        s.interpolator = new THREE.a(this.options);
        s.backendConnector = new _BackendConnector2.a(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on("*", function(modelFunctionName) {
          /** @type {number} */
          var length = arguments.length;
          /** @type {!Array} */
          var args = Array(length > 1 ? length - 1 : 0);
          /** @type {number} */
          var i = 1;
          for (; i < length; i++) {
            args[i - 1] = arguments[i];
          }
          self.emit.apply(self, [modelFunctionName].concat(args));
        });
        s.backendConnector.on("loaded", function(canCreateDiscussions) {
          s.cacheConnector.save();
        });
        s.cacheConnector = new _CacheConnector2.a(createClassOnDemand(this.modules.cache), s.resourceStore, s, this.options);
        s.cacheConnector.on("*", function(modelFunctionName) {
          /** @type {number} */
          var length = arguments.length;
          /** @type {!Array} */
          var args = Array(length > 1 ? length - 1 : 0);
          /** @type {number} */
          var i = 1;
          for (; i < length; i++) {
            args[i - 1] = arguments[i];
          }
          self.emit.apply(self, [modelFunctionName].concat(args));
        });
        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }
        this.translator = new app.a(this.services, this.options);
        this.translator.on("*", function(modelFunctionName) {
          /** @type {number} */
          var length = arguments.length;
          /** @type {!Array} */
          var args = Array(length > 1 ? length - 1 : 0);
          /** @type {number} */
          var i = 1;
          for (; i < length; i++) {
            args[i - 1] = arguments[i];
          }
          self.emit.apply(self, [modelFunctionName].concat(args));
        });
        this.modules.external.forEach(function(e) {
          if (e.init) {
            e.init(self);
          }
        });
      }
      ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle"].forEach(function(name) {
        /**
         * @return {?}
         */
        self[name] = function() {
          var base;
          return (base = self.store)[name].apply(base, arguments);
        };
      });
      /**
       * @return {undefined}
       */
      var load = function() {
        self.changeLanguage(self.options.lng, function(n, trOpts) {
          /** @type {boolean} */
          self.isInitialized = true;
          self.logger.log("initialized", self.options);
          self.emit("initialized", self.options);
          r(n, trOpts);
        });
      };
      return this.options.resources || !this.options.initImmediate ? load() : setTimeout(load, 0), this;
    }, I18n.prototype.loadResources = function() {
      var _this3 = this;
      var callback = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : undefined;
      if (this.options.resources) {
        callback(null);
      } else {
        if (this.language && "cimode" === this.language.toLowerCase()) {
          return callback();
        }
        /** @type {!Array} */
        var languages = [];
        /**
         * @param {string} text
         * @return {undefined}
         */
        var append = function(text) {
          if (text) {
            _this3.services.languageUtils.toResolveHierarchy(text).forEach(function(key) {
              if (languages.indexOf(key) < 0) {
                languages.push(key);
              }
            });
          }
        };
        if (this.language) {
          append(this.language);
        } else {
          this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(initialValue) {
            return append(initialValue);
          });
        }
        if (this.options.preload) {
          this.options.preload.forEach(function(initialValue) {
            return append(initialValue);
          });
        }
        this.services.cacheConnector.load(languages, this.options.ns, function() {
          _this3.services.backendConnector.load(languages, _this3.options.ns, callback);
        });
      }
    }, I18n.prototype.reloadResources = function(lngs, ns) {
      if (!lngs) {
        lngs = this.languages;
      }
      if (!ns) {
        ns = this.options.ns;
      }
      this.services.backendConnector.reload(lngs, ns);
    }, I18n.prototype.use = function(module) {
      return "backend" === module.type && (this.modules.backend = module), "cache" === module.type && (this.modules.cache = module), ("logger" === module.type || module.log && module.warn && module.error) && (this.modules.logger = module), "languageDetector" === module.type && (this.modules.languageDetector = module), "postProcessor" === module.type && v.a.addPostProcessor(module), "3rdParty" === module.type && this.modules.external.push(module), this;
    }, I18n.prototype.changeLanguage = function(lng, callback) {
      var self = this;
      /**
       * @param {?} result
       * @param {?} x
       * @return {undefined}
       */
      var done = function(result, x) {
        self.translator.changeLanguage(x);
        if (x) {
          self.emit("languageChanged", x);
          self.logger.log("languageChanged", x);
        }
        if (callback) {
          callback(result, function() {
            return self.t.apply(self, arguments);
          });
        }
      };
      /**
       * @param {string} lng
       * @return {undefined}
       */
      var changeLanguage = function(lng) {
        if (lng) {
          /** @type {string} */
          self.language = lng;
          self.languages = self.services.languageUtils.toResolveHierarchy(lng);
          if (!self.translator.language) {
            self.translator.changeLanguage(lng);
          }
          if (self.services.languageDetector) {
            self.services.languageDetector.cacheUserLanguage(lng);
          }
        }
        self.loadResources(function(t) {
          done(t, lng);
        });
      };
      if (lng || !this.services.languageDetector || this.services.languageDetector.async) {
        if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
          this.services.languageDetector.detect(changeLanguage);
        } else {
          changeLanguage(lng);
        }
      } else {
        changeLanguage(this.services.languageDetector.detect());
      }
    }, I18n.prototype.getFixedT = function(lng, ns) {
      var a = this;
      /**
       * @param {undefined} key
       * @param {undefined} i
       * @return {?}
       */
      var fixedT = function config(key, i) {
        /** @type {number} */
        var _len = arguments.length;
        /** @type {!Array} */
        var constructorArgs = Array(_len > 2 ? _len - 2 : 0);
        /** @type {number} */
        var _key = 2;
        for (; _key < _len; _key++) {
          constructorArgs[_key - 2] = arguments[_key];
        }
        /** @type {!Object} */
        var options = _extends({}, i);
        return "object" !== ("undefined" === typeof i ? "undefined" : prevIndexTotal(i)) && (options = a.options.overloadTranslationOptionHandler([key, i].concat(constructorArgs))), options.lng = options.lng || config.lng, options.lngs = options.lngs || config.lngs, options.ns = options.ns || config.ns, a.t(key, options);
      };
      return "string" === typeof lng ? fixedT.lng = lng : fixedT.lngs = lng, fixedT.ns = ns, fixedT;
    }, I18n.prototype.t = function() {
      var _whitespaceCharClass;
      return this.translator && (_whitespaceCharClass = this.translator).translate.apply(_whitespaceCharClass, arguments);
    }, I18n.prototype.exists = function() {
      var ref;
      return this.translator && (ref = this.translator).exists.apply(ref, arguments);
    }, I18n.prototype.setDefaultNamespace = function(ns) {
      /** @type {string} */
      this.options.defaultNS = ns;
    }, I18n.prototype.loadNamespaces = function(callback, cb) {
      var rr = this;
      if (!this.options.ns) {
        return cb && cb();
      }
      if ("string" === typeof callback) {
        /** @type {!Array} */
        callback = [callback];
      }
      callback.forEach(function(aircraftId) {
        if (rr.options.ns.indexOf(aircraftId) < 0) {
          rr.options.ns.push(aircraftId);
        }
      });
      this.loadResources(cb);
    }, I18n.prototype.loadLanguages = function(langs, callback) {
      if ("string" === typeof langs) {
        /** @type {!Array} */
        langs = [langs];
      }
      var preloaded = this.options.preload || [];
      var newLngs = langs.filter(function(lng) {
        return preloaded.indexOf(lng) < 0;
      });
      if (!newLngs.length) {
        return callback();
      }
      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(callback);
    }, I18n.prototype.dir = function(lng) {
      return lng || (lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), lng ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes",
        "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? "rtl" : "ltr" : "rtl";
    }, I18n.prototype.createInstance = function() {
      return new I18n(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments[1]);
    }, I18n.prototype.cloneInstance = function() {
      var rra = this;
      var opts = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : undefined;
      /** @type {!Object} */
      var options = _extends({}, this.options, opts, {
        isClone : true
      });
      var self = new I18n(options);
      return ["store", "services", "language"].forEach(function(k) {
        self[k] = rra[k];
      }), self.translator = new app.a(self.services, self.options), self.translator.on("*", function(modelFunctionName) {
        /** @type {number} */
        var length = arguments.length;
        /** @type {!Array} */
        var args = Array(length > 1 ? length - 1 : 0);
        /** @type {number} */
        var i = 1;
        for (; i < length; i++) {
          args[i - 1] = arguments[i];
        }
        self.emit.apply(self, [modelFunctionName].concat(args));
      }), self.init(options, r), self.translator.options = self.options, self;
    }, I18n;
  }(clonedI.a);
  B.a = new A;
}, function(canCreateDiscussions, C, require) {
  /**
   * @param {!Function} obj
   * @param {!Object} defaults
   * @return {?}
   */
  function _defaults(obj, defaults) {
    /** @type {!Array<string>} */
    var keys = Object.getOwnPropertyNames(defaults);
    /** @type {number} */
    var key = 0;
    for (; key < keys.length; key++) {
      /** @type {string} */
      var i = keys[key];
      /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
      var value = Object.getOwnPropertyDescriptor(defaults, i);
      if (value && value.configurable && void 0 === obj[i]) {
        Object.defineProperty(obj, i, value);
      }
    }
    return obj;
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} call
   * @param {string} value
   * @return {?}
   */
  function _possibleConstructorReturn(call, value) {
    if (!call) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" !== typeof value && "function" !== typeof value ? call : value;
  }
  /**
   * @param {!Function} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        _defaults(subClass, superClass);
      }
    }
  }
  var o = require(7);
  var _ = require(10);
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var _extends = Object.assign || function(name) {
    /** @type {number} */
    var index = 1;
    for (; index < arguments.length; index++) {
      var options = arguments[index];
      var option;
      for (option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option)) {
          name[option] = options[option];
        }
      }
    }
    return name;
  };
  var sx = function(_Namespace) {
    /**
     * @param {string} data
     * @return {?}
     */
    function ResourceStore(data) {
      var opt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        ns : ["translation"],
        defaultNS : "translation"
      };
      _classCallCheck(this, ResourceStore);
      var _this = _possibleConstructorReturn(this, _Namespace.call(this));
      return _this.data = data || {}, _this.options = opt, _this;
    }
    return _inherits(ResourceStore, _Namespace), ResourceStore.prototype.addNamespaces = function(namespace) {
      if (this.options.ns.indexOf(namespace) < 0) {
        this.options.ns.push(namespace);
      }
    }, ResourceStore.prototype.removeNamespaces = function(ns) {
      var p3 = this.options.ns.indexOf(ns);
      if (p3 > -1) {
        this.options.ns.splice(p3, 1);
      }
    }, ResourceStore.prototype.getResource = function(code, cb, key) {
      var options = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      var keySeparator = options.keySeparator || this.options.keySeparator;
      if (void 0 === keySeparator) {
        /** @type {string} */
        keySeparator = ".";
      }
      /** @type {!Array} */
      var result = [code, cb];
      return key && "string" !== typeof key && (result = result.concat(key)), key && "string" === typeof key && (result = result.concat(keySeparator ? key.split(keySeparator) : key)), code.indexOf(".") > -1 && (result = code.split(".")), _.d(this.data, result);
    }, ResourceStore.prototype.addResource = function(lng, ns, key, type) {
      var method_options = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
        silent : false
      };
      var keySeparator = this.options.keySeparator;
      if (void 0 === keySeparator) {
        /** @type {string} */
        keySeparator = ".";
      }
      /** @type {!Array} */
      var path = [lng, ns];
      if (key) {
        /** @type {!Array<?>} */
        path = path.concat(keySeparator ? key.split(keySeparator) : key);
      }
      if (lng.indexOf(".") > -1) {
        path = lng.split(".");
        /** @type {string} */
        type = ns;
        ns = path[1];
      }
      this.addNamespaces(ns);
      _.h(this.data, path, type);
      if (!method_options.silent) {
        this.emit("added", lng, ns, key, type);
      }
    }, ResourceStore.prototype.addResources = function(lng, ns, resources) {
      var method_options = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        silent : false
      };
      var m;
      for (m in resources) {
        if ("string" === typeof resources[m]) {
          this.addResource(lng, ns, m, resources[m], {
            silent : true
          });
        }
      }
      if (!method_options.silent) {
        this.emit("added", lng, ns, resources);
      }
    }, ResourceStore.prototype.addResourceBundle = function(lng, ns, value, overwrite, prefix) {
      var method_options = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
        silent : false
      };
      /** @type {!Array} */
      var path = [lng, ns];
      if (lng.indexOf(".") > -1) {
        path = lng.split(".");
        /** @type {string} */
        overwrite = value;
        /** @type {string} */
        value = ns;
        ns = path[1];
      }
      this.addNamespaces(ns);
      var state = _.d(this.data, path) || {};
      if (overwrite) {
        _.b(state, value, prefix);
      } else {
        /** @type {!Object} */
        state = _extends({}, state, value);
      }
      _.h(this.data, path, state);
      if (!method_options.silent) {
        this.emit("added", lng, ns, value);
      }
    }, ResourceStore.prototype.removeResourceBundle = function(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }
      this.removeNamespaces(ns);
      this.emit("removed", lng, ns);
    }, ResourceStore.prototype.hasResourceBundle = function(lng, ns) {
      return void 0 !== this.getResource(lng, ns);
    }, ResourceStore.prototype.getResourceBundle = function(lng, ns) {
      return ns || (ns = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? _extends({}, this.getResource(lng, ns)) : this.getResource(lng, ns);
    }, ResourceStore.prototype.toJSON = function() {
      return this.data;
    }, ResourceStore;
  }(o.a);
  C.a = sx;
}, function(canCreateDiscussions, C, require) {
  /**
   * @param {!Function} obj
   * @param {!Object} defaults
   * @return {?}
   */
  function _defaults(obj, defaults) {
    /** @type {!Array<string>} */
    var keys = Object.getOwnPropertyNames(defaults);
    /** @type {number} */
    var key = 0;
    for (; key < keys.length; key++) {
      /** @type {string} */
      var i = keys[key];
      /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
      var value = Object.getOwnPropertyDescriptor(defaults, i);
      if (value && value.configurable && void 0 === obj[i]) {
        Object.defineProperty(obj, i, value);
      }
    }
    return obj;
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} resources
   * @param {string} parent
   * @return {?}
   */
  function html(resources, parent) {
    if (!resources) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !parent || "object" !== typeof parent && "function" !== typeof parent ? resources : parent;
  }
  /**
   * @param {!Function} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        _defaults(subClass, superClass);
      }
    }
  }
  var u = require(5);
  var s = require(7);
  var r = require(38);
  var utils = require(10);
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var _extends = Object.assign || function(name) {
    /** @type {number} */
    var index = 1;
    for (; index < arguments.length; index++) {
      var options = arguments[index];
      var option;
      for (option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option)) {
          name[option] = options[option];
        }
      }
    }
    return name;
  };
  /** @type {function(!Object): ?} */
  var convertTOptions = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(opt_setup) {
    return typeof opt_setup;
  } : function(obj) {
    return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var sx = function(_Namespace) {
    /**
     * @param {undefined} display
     * @return {?}
     */
    function Translator(display) {
      var tmp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      _classCallCheck(this, Translator);
      var a = html(this, _Namespace.call(this));
      return utils.a(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector"], display, a), a.options = tmp, a.logger = u.a.create("translator"), a;
    }
    return _inherits(Translator, _Namespace), Translator.prototype.changeLanguage = function(lng) {
      if (lng) {
        /** @type {string} */
        this.language = lng;
      }
    }, Translator.prototype.exists = function(array) {
      var type = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        interpolation : {}
      };
      var result = this.resolve(array, type);
      return result && void 0 !== result.res;
    }, Translator.prototype.extractFromKey = function(i, options) {
      var type = options.nsSeparator || this.options.nsSeparator;
      if (void 0 === type) {
        /** @type {string} */
        type = ":";
      }
      var r = options.keySeparator || this.options.keySeparator || ".";
      var namespaces = options.ns || this.options.defaultNS;
      if (type && i.indexOf(type) > -1) {
        var c = i.split(type);
        if (type !== r || type === r && this.options.ns.indexOf(c[0]) > -1) {
          namespaces = c.shift();
        }
        i = c.join(r);
      }
      return "string" === typeof namespaces && (namespaces = [namespaces]), {
        key : i,
        namespaces : namespaces
      };
    }, Translator.prototype.translate = function(val, options) {
      var self = this;
      if ("object" !== ("undefined" === typeof options ? "undefined" : convertTOptions(options)) && this.options.overloadTranslationOptionHandler && (options = this.options.overloadTranslationOptionHandler(arguments)), options || (options = {}), void 0 === val || null === val || "" === val) {
        return "";
      }
      if ("number" === typeof val) {
        /** @type {string} */
        val = String(val);
      }
      if ("string" === typeof val) {
        /** @type {!Array} */
        val = [val];
      }
      var index = options.keySeparator || this.options.keySeparator || ".";
      var _extractFromKey = this.extractFromKey(val[val.length - 1], options);
      var key = _extractFromKey.key;
      var namespaces = _extractFromKey.namespaces;
      var path = namespaces[namespaces.length - 1];
      var err = options.lng || this.language;
      var l = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (err && "cimode" === err.toLowerCase()) {
        if (l) {
          var KEYPATHSEPARATOR = options.nsSeparator || this.options.nsSeparator;
          return path + KEYPATHSEPARATOR + key;
        }
        return key;
      }
      var out = this.resolve(val, options);
      var res = out && out.res;
      var value = out && out.usedKey || key;
      /** @type {string} */
      var string = Object.prototype.toString.apply(res);
      /** @type {!Array} */
      var strings_used = ["[object Number]", "[object Function]", "[object RegExp]"];
      var token = void 0 !== options.joinArrays ? options.joinArrays : this.options.joinArrays;
      /** @type {boolean} */
      var lastPopularities = "string" !== typeof res && "boolean" !== typeof res && "number" !== typeof res;
      if (res && lastPopularities && strings_used.indexOf(string) < 0 && (!token || "[object Array]" !== string)) {
        if (!options.returnObjects && !this.options.returnObjects) {
          return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(value, res, options) : "key '" + key + " (" + this.language + ")' returned an object instead of string.";
        }
        if (options.keySeparator || this.options.keySeparator) {
          /** @type {(Array|{})} */
          var copy = "[object Array]" === string ? [] : {};
          var i;
          for (i in res) {
            if (Object.prototype.hasOwnProperty.call(res, i)) {
              /** @type {string} */
              var x = "" + value + index + i;
              copy[i] = this.translate(x, _extends({}, options, {
                joinArrays : false,
                ns : namespaces
              }));
              if (copy[i] === x) {
                copy[i] = res[i];
              }
            }
          }
          /** @type {(Array|{})} */
          res = copy;
        }
      } else {
        if (token && "[object Array]" === string) {
          if (res = res.join(token)) {
            res = this.extendTranslation(res, val, options);
          }
        } else {
          /** @type {boolean} */
          var usedDefault = false;
          /** @type {boolean} */
          var usedKey = false;
          if (!(this.isValidLookup(res) || void 0 === options.defaultValue)) {
            /** @type {boolean} */
            usedDefault = true;
            res = options.defaultValue;
          }
          if (!this.isValidLookup(res)) {
            /** @type {boolean} */
            usedKey = true;
            res = key;
          }
          var type = options.defaultValue && options.defaultValue !== res && this.options.updateMissing;
          if (usedKey || usedDefault || type) {
            this.logger.log(type ? "updateKey" : "missingKey", err, path, key, type ? options.defaultValue : res);
            /** @type {!Array} */
            var lngs = [];
            var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
            if ("fallback" === this.options.saveMissingTo && fallbackLngs && fallbackLngs[0]) {
              /** @type {number} */
              var i = 0;
              for (; i < fallbackLngs.length; i++) {
                lngs.push(fallbackLngs[i]);
              }
            } else {
              if ("all" === this.options.saveMissingTo) {
                lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
              } else {
                lngs.push(options.lng || this.language);
              }
            }
            /**
             * @param {!Array} object
             * @param {string} key
             * @return {undefined}
             */
            var translate = function(object, key) {
              if (self.options.missingKeyHandler) {
                self.options.missingKeyHandler(object, path, key, type ? options.defaultValue : res, type, options);
              } else {
                if (self.backendConnector && self.backendConnector.saveMissing) {
                  self.backendConnector.saveMissing(object, path, key, type ? options.defaultValue : res, type, options);
                }
              }
              self.emit("missingKey", object, path, key, res);
            };
            if (this.options.saveMissing) {
              if (this.options.saveMissingPlurals && options.count) {
                lngs.forEach(function(p) {
                  self.pluralResolver.getPluralFormsOfKey(p, key).forEach(function(en) {
                    return translate([p], en);
                  });
                });
              } else {
                translate(lngs, key);
              }
            }
          }
          res = this.extendTranslation(res, val, options);
          if (usedKey && res === key && this.options.appendNamespaceToMissingKey) {
            /** @type {string} */
            res = path + ":" + key;
          }
          if (usedKey && this.options.parseMissingKeyHandler) {
            res = this.options.parseMissingKeyHandler(res);
          }
        }
      }
      return res;
    }, Translator.prototype.extendTranslation = function(res, key, options) {
      var _translator = this;
      if (options.interpolation) {
        this.interpolator.init(_extends({}, options, {
          interpolation : _extends({}, this.options.interpolation, options.interpolation)
        }));
      }
      var data = options.replace && "string" !== typeof options.replace ? options.replace : options;
      if (this.options.interpolation.defaultVariables) {
        /** @type {!Object} */
        data = _extends({}, this.options.interpolation.defaultVariables, data);
      }
      res = this.interpolator.interpolate(res, data, options.lng || this.language);
      if (false !== options.nest) {
        res = this.interpolator.nest(res, function() {
          return _translator.translate.apply(_translator, arguments);
        }, options);
      }
      if (options.interpolation) {
        this.interpolator.reset();
      }
      var appId = options.postProcess || this.options.postProcess;
      var obj = "string" === typeof appId ? [appId] : appId;
      return void 0 !== res && null !== res && obj && obj.length && false !== options.applyPostProcessor && (res = r.a.handle(obj, res, key, options, this)), res;
    }, Translator.prototype.resolve = function(keys) {
      var _this3 = this;
      var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var found = void 0;
      var keyInView = void 0;
      return "string" === typeof keys && (keys = [keys]), keys.forEach(function(k) {
        if (!_this3.isValidLookup(found)) {
          var _extractFromKey2 = _this3.extractFromKey(k, options);
          var key = _extractFromKey2.key;
          keyInView = key;
          var namespaces = _extractFromKey2.namespaces;
          if (_this3.options.fallbackNS) {
            namespaces = namespaces.concat(_this3.options.fallbackNS);
          }
          /** @type {boolean} */
          var n = void 0 !== options.count && "string" !== typeof options.count;
          /** @type {boolean} */
          var e = void 0 !== options.context && "string" === typeof options.context && "" !== options.context;
          var pipelets = options.lngs ? options.lngs : _this3.languageUtils.toResolveHierarchy(options.lng || _this3.language);
          namespaces.forEach(function(ns) {
            if (!_this3.isValidLookup(found)) {
              pipelets.forEach(function(code) {
                if (!_this3.isValidLookup(found)) {
                  var i = key;
                  /** @type {!Array} */
                  var result = [i];
                  var c = void 0;
                  if (n) {
                    c = _this3.pluralResolver.getSuffix(code, options.count);
                  }
                  if (n && e) {
                    result.push(i + c);
                  }
                  if (e) {
                    result.push(i = i + ("" + _this3.options.contextSeparator + options.context));
                  }
                  if (n) {
                    result.push(i = i + c);
                  }
                  var possibleKey = void 0;
                  for (; possibleKey = result.pop();) {
                    if (!_this3.isValidLookup(found)) {
                      found = _this3.getResource(code, ns, possibleKey, options);
                    }
                  }
                }
              });
            }
          });
        }
      }), {
        res : found,
        usedKey : keyInView
      };
    }, Translator.prototype.isValidLookup = function(res) {
      return void 0 !== res && !(!this.options.returnNull && null === res) && !(!this.options.returnEmptyString && "" === res);
    }, Translator.prototype.getResource = function(code, ns, key) {
      var options = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return this.resourceStore.getResource(code, ns, key, options);
    }, Translator;
  }(s.a);
  C.a = sx;
}, function(canCreateDiscussions, handler, unitToColor) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  var c = unitToColor(5);
  var a = function() {
    /**
     * @param {!Object} options
     * @return {undefined}
     */
    function LanguageUtil(options) {
      _classCallCheck(this, LanguageUtil);
      /** @type {!Object} */
      this.options = options;
      this.whitelist = this.options.whitelist || false;
      this.logger = c.a.create("languageUtils");
    }
    return LanguageUtil.prototype.getScriptPartFromCode = function(code) {
      if (!code || code.indexOf("-") < 0) {
        return null;
      }
      var t = code.split("-");
      return 2 === t.length ? null : (t.pop(), this.formatLanguageCode(t.join("-")));
    }, LanguageUtil.prototype.getLanguagePartFromCode = function(code) {
      if (!code || code.indexOf("-") < 0) {
        return code;
      }
      var p = code.split("-");
      return this.formatLanguageCode(p[0]);
    }, LanguageUtil.prototype.formatLanguageCode = function(type) {
      if ("string" === typeof type && type.indexOf("-") > -1) {
        /** @type {!Array} */
        var specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
        /** @type {!Array<string>} */
        var parts = type.split("-");
        return this.options.lowerCaseLng ? parts = parts.map(function(p_Interval) {
          return p_Interval.toLowerCase();
        }) : 2 === parts.length ? (parts[0] = parts[0].toLowerCase(), parts[1] = parts[1].toUpperCase(), specialCases.indexOf(parts[1].toLowerCase()) > -1 && (parts[1] = capitalize(parts[1].toLowerCase()))) : 3 === parts.length && (parts[0] = parts[0].toLowerCase(), 2 === parts[1].length && (parts[1] = parts[1].toUpperCase()), "sgn" !== parts[0] && 2 === parts[2].length && (parts[2] = parts[2].toUpperCase()), specialCases.indexOf(parts[1].toLowerCase()) > -1 && (parts[1] = capitalize(parts[1].toLowerCase())),
        specialCases.indexOf(parts[2].toLowerCase()) > -1 && (parts[2] = capitalize(parts[2].toLowerCase()))), parts.join("-");
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? type.toLowerCase() : type;
    }, LanguageUtil.prototype.isWhitelisted = function(code) {
      return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (code = this.getLanguagePartFromCode(code)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1;
    }, LanguageUtil.prototype.getFallbackCodes = function(fallbacks, code) {
      if (!fallbacks) {
        return [];
      }
      if ("string" === typeof fallbacks && (fallbacks = [fallbacks]), "[object Array]" === Object.prototype.toString.apply(fallbacks)) {
        return fallbacks;
      }
      if (!code) {
        return fallbacks.default || [];
      }
      var found = fallbacks[code];
      return found || (found = fallbacks[this.getScriptPartFromCode(code)]), found || (found = fallbacks[this.formatLanguageCode(code)]), found || (found = fallbacks.default), found || [];
    }, LanguageUtil.prototype.toResolveHierarchy = function(code, fallbackCode) {
      var me = this;
      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      /** @type {!Array} */
      var o = [];
      /**
       * @param {string} code
       * @return {undefined}
       */
      var addCode = function(code) {
        if (code) {
          if (me.isWhitelisted(code)) {
            o.push(code);
          } else {
            me.logger.warn("rejecting non-whitelisted language code: " + code);
          }
        }
      };
      return "string" === typeof code && code.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && addCode(this.formatLanguageCode(code)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && addCode(this.getScriptPartFromCode(code)), "currentOnly" !== this.options.load && addCode(this.getLanguagePartFromCode(code))) : "string" === typeof code && addCode(this.formatLanguageCode(code)), fallbackCodes.forEach(function(code) {
        if (o.indexOf(code) < 0) {
          addCode(me.formatLanguageCode(code));
        }
      }), o;
    }, LanguageUtil;
  }();
  handler.a = a;
}, function(canCreateDiscussions, C, unitToColor) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @return {?}
   */
  function createRules() {
    var rules = {};
    return pipelets.forEach(function(set) {
      set.lngs.forEach(function(l) {
        rules[l] = {
          numbers : set.nr,
          plurals : _rulesPluralsTypes[set.fc]
        };
      });
    }), rules;
  }
  var c = unitToColor(5);
  /** @type {!Array} */
  var pipelets = [{
    lngs : ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
    nr : [1, 2],
    fc : 1
  }, {
    lngs : ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "he", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
    nr : [1, 2],
    fc : 2
  }, {
    lngs : ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
    nr : [1],
    fc : 3
  }, {
    lngs : ["be", "bs", "dz", "hr", "ru", "sr", "uk"],
    nr : [1, 2, 5],
    fc : 4
  }, {
    lngs : ["ar"],
    nr : [0, 1, 2, 3, 11, 100],
    fc : 5
  }, {
    lngs : ["cs", "sk"],
    nr : [1, 2, 5],
    fc : 6
  }, {
    lngs : ["csb", "pl"],
    nr : [1, 2, 5],
    fc : 7
  }, {
    lngs : ["cy"],
    nr : [1, 2, 3, 8],
    fc : 8
  }, {
    lngs : ["fr"],
    nr : [1, 2],
    fc : 9
  }, {
    lngs : ["ga"],
    nr : [1, 2, 3, 7, 11],
    fc : 10
  }, {
    lngs : ["gd"],
    nr : [1, 2, 3, 20],
    fc : 11
  }, {
    lngs : ["is"],
    nr : [1, 2],
    fc : 12
  }, {
    lngs : ["jv"],
    nr : [0, 1],
    fc : 13
  }, {
    lngs : ["kw"],
    nr : [1, 2, 3, 4],
    fc : 14
  }, {
    lngs : ["lt"],
    nr : [1, 2, 10],
    fc : 15
  }, {
    lngs : ["lv"],
    nr : [1, 2, 0],
    fc : 16
  }, {
    lngs : ["mk"],
    nr : [1, 2],
    fc : 17
  }, {
    lngs : ["mnk"],
    nr : [0, 1, 2],
    fc : 18
  }, {
    lngs : ["mt"],
    nr : [1, 2, 11, 20],
    fc : 19
  }, {
    lngs : ["or"],
    nr : [2, 1],
    fc : 2
  }, {
    lngs : ["ro"],
    nr : [1, 2, 20],
    fc : 20
  }, {
    lngs : ["sl"],
    nr : [5, 1, 2, 3],
    fc : 21
  }];
  var _rulesPluralsTypes = {
    1 : function(n) {
      return Number(n > 1);
    },
    2 : function(canCreateDiscussions) {
      return Number(1 != canCreateDiscussions);
    },
    3 : function(canCreateDiscussions) {
      return 0;
    },
    4 : function(canCreateDiscussions) {
      return Number(canCreateDiscussions % 10 == 1 && canCreateDiscussions % 100 != 11 ? 0 : canCreateDiscussions % 10 >= 2 && canCreateDiscussions % 10 <= 4 && (canCreateDiscussions % 100 < 10 || canCreateDiscussions % 100 >= 20) ? 1 : 2);
    },
    5 : function(canCreateDiscussions) {
      return Number(0 === canCreateDiscussions ? 0 : 1 == canCreateDiscussions ? 1 : 2 == canCreateDiscussions ? 2 : canCreateDiscussions % 100 >= 3 && canCreateDiscussions % 100 <= 10 ? 3 : canCreateDiscussions % 100 >= 11 ? 4 : 5);
    },
    6 : function(s) {
      return Number(1 == s ? 0 : s >= 2 && s <= 4 ? 1 : 2);
    },
    7 : function(canCreateDiscussions) {
      return Number(1 == canCreateDiscussions ? 0 : canCreateDiscussions % 10 >= 2 && canCreateDiscussions % 10 <= 4 && (canCreateDiscussions % 100 < 10 || canCreateDiscussions % 100 >= 20) ? 1 : 2);
    },
    8 : function(e) {
      return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
    },
    9 : function(n) {
      return Number(n >= 2);
    },
    10 : function(canCreateDiscussions) {
      return Number(1 == canCreateDiscussions ? 0 : 2 == canCreateDiscussions ? 1 : canCreateDiscussions < 7 ? 2 : canCreateDiscussions < 11 ? 3 : 4);
    },
    11 : function(e) {
      return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3);
    },
    12 : function(canCreateDiscussions) {
      return Number(canCreateDiscussions % 10 != 1 || canCreateDiscussions % 100 == 11);
    },
    13 : function(canCreateDiscussions) {
      return Number(0 !== canCreateDiscussions);
    },
    14 : function(canCreateDiscussions) {
      return Number(1 == canCreateDiscussions ? 0 : 2 == canCreateDiscussions ? 1 : 3 == canCreateDiscussions ? 2 : 3);
    },
    15 : function(canCreateDiscussions) {
      return Number(canCreateDiscussions % 10 == 1 && canCreateDiscussions % 100 != 11 ? 0 : canCreateDiscussions % 10 >= 2 && (canCreateDiscussions % 100 < 10 || canCreateDiscussions % 100 >= 20) ? 1 : 2);
    },
    16 : function(canCreateDiscussions) {
      return Number(canCreateDiscussions % 10 == 1 && canCreateDiscussions % 100 != 11 ? 0 : 0 !== canCreateDiscussions ? 1 : 2);
    },
    17 : function(canCreateDiscussions) {
      return Number(1 == canCreateDiscussions || canCreateDiscussions % 10 == 1 ? 0 : 1);
    },
    18 : function(canCreateDiscussions) {
      return Number(0 == canCreateDiscussions ? 0 : 1 == canCreateDiscussions ? 1 : 2);
    },
    19 : function(canCreateDiscussions) {
      return Number(1 == canCreateDiscussions ? 0 : 0 === canCreateDiscussions || canCreateDiscussions % 100 > 1 && canCreateDiscussions % 100 < 11 ? 1 : canCreateDiscussions % 100 > 10 && canCreateDiscussions % 100 < 20 ? 2 : 3);
    },
    20 : function(canCreateDiscussions) {
      return Number(1 == canCreateDiscussions ? 0 : 0 === canCreateDiscussions || canCreateDiscussions % 100 > 0 && canCreateDiscussions % 100 < 20 ? 1 : 2);
    },
    21 : function(canCreateDiscussions) {
      return Number(canCreateDiscussions % 100 == 1 ? 1 : canCreateDiscussions % 100 == 2 ? 2 : canCreateDiscussions % 100 == 3 || canCreateDiscussions % 100 == 4 ? 3 : 0);
    }
  };
  var sx = function() {
    /**
     * @param {!Object} languageUtils
     * @return {undefined}
     */
    function PluralResolver(languageUtils) {
      var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      classCallCheck(this, PluralResolver);
      /** @type {!Object} */
      this.languageUtils = languageUtils;
      this.options = options;
      this.logger = c.a.create("pluralResolver");
      this.rules = createRules();
    }
    return PluralResolver.prototype.addRule = function(name, value) {
      /** @type {!Function} */
      this.rules[name] = value;
    }, PluralResolver.prototype.getRule = function(code) {
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }, PluralResolver.prototype.needsPlural = function(code) {
      var rule = this.getRule(code);
      return rule && rule.numbers.length > 1;
    }, PluralResolver.prototype.getPluralFormsOfKey = function(code, t) {
      var date = this;
      /** @type {!Array} */
      var cBufAry = [];
      var rule = this.getRule(code);
      return rule ? (rule.numbers.forEach(function(interval) {
        var i = date.getSuffix(code, interval);
        cBufAry.push("" + t + i);
      }), cBufAry) : cBufAry;
    }, PluralResolver.prototype.getSuffix = function(code, count) {
      var slider = this;
      var rule = this.getRule(code);
      if (rule) {
        var type = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var str = rule.numbers[type];
        if (this.options.simplifyPluralSuffix && 2 === rule.numbers.length && 1 === rule.numbers[0]) {
          if (2 === str) {
            /** @type {string} */
            str = "plural";
          } else {
            if (1 === str) {
              /** @type {string} */
              str = "";
            }
          }
        }
        /**
         * @return {?}
         */
        var returnSuffix = function() {
          return slider.options.prepend && str.toString() ? slider.options.prepend + str.toString() : str.toString();
        };
        return "v1" === this.options.compatibilityJSON ? 1 === str ? "" : "number" === typeof str ? "_plural_" + str.toString() : returnSuffix() : "v2" === this.options.compatibilityJSON || 2 === rule.numbers.length && 1 === rule.numbers[0] ? returnSuffix() : 2 === rule.numbers.length && 1 === rule.numbers[0] ? returnSuffix() : this.options.prepend && type.toString() ? this.options.prepend + type.toString() : type.toString();
      }
      return this.logger.warn("no plural rule found for: " + code), "";
    }, PluralResolver;
  }();
  C.a = sx;
}, function(canCreateDiscussions, C, require) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var utils = require(10);
  var o = require(5);
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var parse = Object.assign || function(name) {
    /** @type {number} */
    var index = 1;
    for (; index < arguments.length; index++) {
      var options = arguments[index];
      var option;
      for (option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option)) {
          name[option] = options[option];
        }
      }
    }
    return name;
  };
  var sx = function() {
    /**
     * @return {undefined}
     */
    function Interpolator() {
      var roles = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      _classCallCheck(this, Interpolator);
      this.logger = o.a.create("interpolator");
      this.init(roles, true);
    }
    return Interpolator.prototype.init = function() {
      var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (arguments[1]) {
        this.options = options;
        this.format = options.interpolation && options.interpolation.format || function(value) {
          return value;
        };
        this.escape = options.interpolation && options.interpolation.escape || utils.c;
      }
      if (!options.interpolation) {
        options.interpolation = {
          escapeValue : true
        };
      }
      var iOpts = options.interpolation;
      this.escapeValue = void 0 === iOpts.escapeValue || iOpts.escapeValue;
      this.prefix = iOpts.prefix ? utils.g(iOpts.prefix) : iOpts.prefixEscaped || "{{";
      this.suffix = iOpts.suffix ? utils.g(iOpts.suffix) : iOpts.suffixEscaped || "}}";
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
      this.unescapePrefix = iOpts.unescapeSuffix ? "" : iOpts.unescapePrefix || "-";
      this.unescapeSuffix = this.unescapePrefix ? "" : iOpts.unescapeSuffix || "";
      this.nestingPrefix = iOpts.nestingPrefix ? utils.g(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || utils.g("$t(");
      this.nestingSuffix = iOpts.nestingSuffix ? utils.g(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || utils.g(")");
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1E3;
      this.resetRegExp();
    }, Interpolator.prototype.reset = function() {
      if (this.options) {
        this.init(this.options);
      }
    }, Interpolator.prototype.resetRegExp = function() {
      /** @type {string} */
      var regexpStr = this.prefix + "(.+?)" + this.suffix;
      /** @type {!RegExp} */
      this.regexp = new RegExp(regexpStr, "g");
      /** @type {string} */
      var regexpUnescapeStr = "" + this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix;
      /** @type {!RegExp} */
      this.regexpUnescape = new RegExp(regexpUnescapeStr, "g");
      /** @type {string} */
      var nestingRegexpStr = this.nestingPrefix + "(.+?)" + this.nestingSuffix;
      /** @type {!RegExp} */
      this.nestingRegexp = new RegExp(nestingRegexpStr, "g");
    }, Interpolator.prototype.interpolate = function(str, value, min) {
      /**
       * @param {string} val
       * @return {?}
       */
      function replace(val) {
        return val.replace(/\$/g, "$$$$");
      }
      var _this = this;
      var match = void 0;
      var value = void 0;
      var s = void 0;
      /**
       * @param {string} key
       * @return {?}
       */
      var handleFormat = function(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          return utils.d(value, key);
        }
        var p = key.split(_this.formatSeparator);
        var filename = p.shift().trim();
        var picSize = p.join(_this.formatSeparator).trim();
        return _this.format(utils.d(value, filename), picSize, min);
      };
      this.resetRegExp();
      /** @type {number} */
      s = 0;
      for (; (match = this.regexpUnescape.exec(str)) && (value = handleFormat(match[1].trim()), str = str.replace(match[0], value), this.regexpUnescape.lastIndex = 0, !(++s >= this.maxReplaces));) {
      }
      /** @type {number} */
      s = 0;
      for (; match = this.regexp.exec(str);) {
        if (value = handleFormat(match[1].trim()), "string" !== typeof value && (value = utils.e(value)), !value) {
          if ("function" === typeof this.options.missingInterpolationHandler) {
            var type = this.options.missingInterpolationHandler(str, match);
            /** @type {string} */
            value = "string" === typeof type ? type : "";
          } else {
            this.logger.warn("missed to pass in variable " + match[1] + " for interpolating " + str);
            /** @type {string} */
            value = "";
          }
        }
        if (value = replace(this.escapeValue ? this.escape(value) : value), str = str.replace(match[0], value), this.regexp.lastIndex = 0, ++s >= this.maxReplaces) {
          break;
        }
      }
      return str;
    }, Interpolator.prototype.nest = function(str, cb) {
      /**
       * @param {string} key
       * @param {undefined} v
       * @return {?}
       */
      function translate(key, v) {
        if (key.indexOf(",") < 0) {
          return key;
        }
        var headersAndBody = key.split(",");
        key = headersAndBody.shift();
        var b = headersAndBody.join(",");
        b = this.interpolate(b, options);
        b = b.replace(/'/g, '"');
        try {
          /** @type {*} */
          options = JSON.parse(b);
          if (v) {
            /** @type {!Object} */
            options = parse({}, v, options);
          }
        } catch (err) {
          this.logger.error("failed parsing options string in nesting for key " + key, err);
        }
        return key;
      }
      var undefined = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      var arr = void 0;
      var value = void 0;
      /** @type {!Object} */
      var options = parse({}, undefined);
      /** @type {boolean} */
      options.applyPostProcessor = false;
      for (; arr = this.nestingRegexp.exec(str);) {
        if ((value = cb(translate.call(this, arr[1].trim(), options), options)) && arr[0] === str && "string" !== typeof value) {
          return value;
        }
        if ("string" !== typeof value) {
          value = utils.e(value);
        }
        if (!value) {
          this.logger.warn("missed to resolve " + arr[1] + " for nesting " + str);
          /** @type {string} */
          value = "";
        }
        str = str.replace(arr[0], value);
        /** @type {number} */
        this.regexp.lastIndex = 0;
      }
      return str;
    }, Interpolator;
  }();
  C.a = sx;
}, function(canCreateDiscussions, C, require) {
  /**
   * @param {!Function} dest
   * @param {!Object} obj
   * @return {?}
   */
  function _defaults(dest, obj) {
    /** @type {!Array<string>} */
    var props = Object.getOwnPropertyNames(obj);
    /** @type {number} */
    var i = 0;
    for (; i < props.length; i++) {
      /** @type {string} */
      var prop = props[i];
      /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
      var value = Object.getOwnPropertyDescriptor(obj, prop);
      if (value && value.configurable && void 0 === dest[prop]) {
        Object.defineProperty(dest, prop, value);
      }
    }
    return dest;
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} type
   * @param {string} action
   * @return {?}
   */
  function get(type, action) {
    if (!type) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !action || "object" !== typeof action && "function" !== typeof action ? type : action;
  }
  /**
   * @param {!Function} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        _defaults(subClass, superClass);
      }
    }
  }
  /**
   * @param {!Array} dir
   * @param {string} e
   * @return {undefined}
   */
  function remove(dir, e) {
    var n = dir.indexOf(e);
    for (; -1 !== n;) {
      dir.splice(n, 1);
      n = dir.indexOf(e);
    }
  }
  var utils = require(10);
  var o = require(5);
  var c = require(7);
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var _extends = Object.assign || function(name) {
    /** @type {number} */
    var index = 1;
    for (; index < arguments.length; index++) {
      var options = arguments[index];
      var option;
      for (option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option)) {
          name[option] = options[option];
        }
      }
    }
    return name;
  };
  var callback = function() {
    /**
     * @param {!Window} options
     * @param {number} index
     * @return {?}
     */
    function flattenElements(options, index) {
      /** @type {!Array} */
      var result = [];
      /** @type {boolean} */
      var _iteratorNormalCompletion3 = true;
      /** @type {boolean} */
      var o = false;
      var i = void 0;
      try {
        var info;
        var _iterator3 = options[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = (info = _iterator3.next()).done) && (result.push(info.value), !index || result.length !== index); _iteratorNormalCompletion3 = true) {
        }
      } catch (contactCapacity) {
        /** @type {boolean} */
        o = true;
        i = contactCapacity;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (o) {
            throw i;
          }
        }
      }
      return result;
    }
    return function(arr, options) {
      if (Array.isArray(arr)) {
        return arr;
      }
      if (Symbol.iterator in Object(arr)) {
        return flattenElements(arr, options);
      }
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  var sx = function(_Namespace) {
    /**
     * @param {!WebSocket} backend
     * @param {!Storage} options
     * @param {undefined} args
     * @return {?}
     */
    function Connector(backend, options, args) {
      var config = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      _classCallCheck(this, Connector);
      var _this = get(this, _Namespace.call(this));
      return _this.backend = backend, _this.store = options, _this.languageUtils = args.languageUtils, _this.options = config, _this.logger = o.a.create("backendConnector"), _this.state = {}, _this.queue = [], _this.backend && _this.backend.init && _this.backend.init(args, config.backend, config), _this;
    }
    return _inherits(Connector, _Namespace), Connector.prototype.queueLoad = function(languages, namespaces, callback) {
      var _this2 = this;
      /** @type {!Array} */
      var toLoad = [];
      /** @type {!Array} */
      var pending = [];
      /** @type {!Array} */
      var toLoadLanguages = [];
      /** @type {!Array} */
      var toLoadNamespaces = [];
      return languages.forEach(function(lng) {
        /** @type {boolean} */
        var n = true;
        namespaces.forEach(function(ns) {
          /** @type {string} */
          var name = lng + "|" + ns;
          if (_this2.store.hasResourceBundle(lng, ns)) {
            /** @type {number} */
            _this2.state[name] = 2;
          } else {
            if (!(_this2.state[name] < 0)) {
              if (1 === _this2.state[name]) {
                if (pending.indexOf(name) < 0) {
                  pending.push(name);
                }
              } else {
                /** @type {number} */
                _this2.state[name] = 1;
                /** @type {boolean} */
                n = false;
                if (pending.indexOf(name) < 0) {
                  pending.push(name);
                }
                if (toLoad.indexOf(name) < 0) {
                  toLoad.push(name);
                }
                if (toLoadNamespaces.indexOf(ns) < 0) {
                  toLoadNamespaces.push(ns);
                }
              }
            }
          }
        });
        if (!n) {
          toLoadLanguages.push(lng);
        }
      }), (toLoad.length || pending.length) && this.queue.push({
        pending : pending,
        loaded : {},
        errors : [],
        callback : callback
      }), {
        toLoad : toLoad,
        pending : pending,
        toLoadLanguages : toLoadLanguages,
        toLoadNamespaces : toLoadNamespaces
      };
    }, Connector.prototype.loaded = function(name, err, data) {
      var self = this;
      var individual = name.split("|");
      var result = callback(individual, 2);
      var lng = result[0];
      var n = result[1];
      if (err) {
        this.emit("failedLoading", lng, n, err);
      }
      if (data) {
        this.store.addResourceBundle(lng, n, data);
      }
      /** @type {number} */
      this.state[name] = err ? -1 : 2;
      this.queue.forEach(function(item) {
        utils.f(item.loaded, [lng], n);
        remove(item.pending, name);
        if (err) {
          item.errors.push(err);
        }
        if (!(0 !== item.pending.length || item.done)) {
          self.emit("loaded", item.loaded);
          /** @type {boolean} */
          item.done = true;
          if (item.errors.length) {
            item.callback(item.errors);
          } else {
            item.callback();
          }
        }
      });
      this.queue = this.queue.filter(function(sectionInfo) {
        return !sectionInfo.done;
      });
    }, Connector.prototype.read = function(options, key, method) {
      var start = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      var o = this;
      var ajaxInterval = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250;
      var cb = arguments[5];
      return options.length ? this.backend[method](options, key, function(st, end) {
        if (st && end && start < 5) {
          return void setTimeout(function() {
            o.read.call(o, options, key, method, start + 1, 2 * ajaxInterval, cb);
          }, ajaxInterval);
        }
        cb(st, end);
      }) : cb(null, {});
    }, Connector.prototype.load = function(languages, namespaces, callback) {
      var self = this;
      if (!this.backend) {
        return this.logger.warn("No backend was added via i18next.use. Will not load resources."), callback && callback();
      }
      /** @type {!Object} */
      var options = _extends({}, this.backend.options, this.options.backend);
      if ("string" === typeof languages) {
        languages = this.languageUtils.toResolveHierarchy(languages);
      }
      if ("string" === typeof namespaces) {
        /** @type {!Array} */
        namespaces = [namespaces];
      }
      var toLoad = this.queueLoad(languages, namespaces, callback);
      if (!toLoad.toLoad.length) {
        return toLoad.pending.length || callback(), null;
      }
      if (options.allowMultiLoading && this.backend.readMulti) {
        this.read(toLoad.toLoadLanguages, toLoad.toLoadNamespaces, "readMulti", null, null, function(callback, b) {
          if (callback) {
            self.logger.warn("loading namespaces " + toLoad.toLoadNamespaces.join(", ") + " for languages " + toLoad.toLoadLanguages.join(", ") + " via multiloading failed", callback);
          }
          if (!callback && b) {
            self.logger.log("successfully loaded namespaces " + toLoad.toLoadNamespaces.join(", ") + " for languages " + toLoad.toLoadLanguages.join(", ") + " via multiloading", b);
          }
          toLoad.toLoad.forEach(function(url) {
            var individual = url.split("|");
            var result = callback(individual, 2);
            var color = result[0];
            var n = result[1];
            var bundle = utils.d(b, [color, n]);
            if (bundle) {
              self.loaded(url, callback, bundle);
            } else {
              /** @type {string} */
              var callback = "loading namespace " + n + " for language " + color + " via multiloading failed";
              self.loaded(url, callback);
              self.logger.error(callback);
            }
          });
        });
      } else {
        toLoad.toLoad.forEach(function(data) {
          self.loadOne(data);
        });
      }
    }, Connector.prototype.reload = function(languages, options) {
      var self = this;
      if (!this.backend) {
        this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      }
      /** @type {!Object} */
      var selectorFactoryOptions = _extends({}, this.backend.options, this.options.backend);
      if ("string" === typeof languages) {
        languages = this.languageUtils.toResolveHierarchy(languages);
      }
      if ("string" === typeof options) {
        /** @type {!Array} */
        options = [options];
      }
      if (selectorFactoryOptions.allowMultiLoading && this.backend.readMulti) {
        this.read(languages, options, "readMulti", null, null, function(err, value) {
          if (err) {
            self.logger.warn("reloading namespaces " + options.join(", ") + " for languages " + languages.join(", ") + " via multiloading failed", err);
          }
          if (!err && value) {
            self.logger.log("successfully reloaded namespaces " + options.join(", ") + " for languages " + languages.join(", ") + " via multiloading", value);
          }
          languages.forEach(function(color) {
            options.forEach(function(n) {
              var data = utils.d(value, [color, n]);
              if (data) {
                self.loaded(color + "|" + n, err, data);
              } else {
                /** @type {string} */
                var callback = "reloading namespace " + n + " for language " + color + " via multiloading failed";
                self.loaded(color + "|" + n, callback);
                self.logger.error(callback);
              }
            });
          });
        });
      } else {
        languages.forEach(function(not) {
          options.forEach(function(n) {
            self.loadOne(not + "|" + n, "re");
          });
        });
      }
    }, Connector.prototype.loadOne = function(response) {
      var self = this;
      var which = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      var request = response.split("|");
      var res = callback(request, 2);
      var address = res[0];
      var id = res[1];
      this.read(address, id, "read", null, null, function(err, data) {
        if (err) {
          self.logger.warn(which + "loading namespace " + id + " for language " + address + " failed", err);
        }
        if (!err && data) {
          self.logger.log(which + "loaded namespace " + id + " for language " + address, data);
        }
        self.loaded(response, err, data);
      });
    }, Connector.prototype.saveMissing = function(start, callback, key, id, res) {
      var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      if (this.backend && this.backend.create) {
        this.backend.create(start, callback, key, id, null, _extends({}, i, {
          isUpdate : res
        }));
      }
      if (start && start[0]) {
        this.store.addResource(start[0], callback, key, id);
      }
    }, Connector;
  }(c.a);
  C.a = sx;
}, function(canCreateDiscussions, C, n) {
  /**
   * @param {!Function} dest
   * @param {!Object} obj
   * @return {?}
   */
  function _defaults(dest, obj) {
    /** @type {!Array<string>} */
    var props = Object.getOwnPropertyNames(obj);
    /** @type {number} */
    var i = 0;
    for (; i < props.length; i++) {
      /** @type {string} */
      var prop = props[i];
      /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
      var value = Object.getOwnPropertyDescriptor(obj, prop);
      if (value && value.configurable && void 0 === dest[prop]) {
        Object.defineProperty(dest, prop, value);
      }
    }
    return dest;
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} call
   * @param {string} value
   * @return {?}
   */
  function _possibleConstructorReturn(call, value) {
    if (!call) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" !== typeof value && "function" !== typeof value ? call : value;
  }
  /**
   * @param {!Function} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        _defaults(subClass, superClass);
      }
    }
  }
  var c = n(5);
  var p = n(7);
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var _extends = Object.assign || function(name) {
    /** @type {number} */
    var index = 1;
    for (; index < arguments.length; index++) {
      var options = arguments[index];
      var option;
      for (option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option)) {
          name[option] = options[option];
        }
      }
    }
    return name;
  };
  var sx = function(_Namespace) {
    /**
     * @param {boolean} cache
     * @param {!Storage} store
     * @param {!Object} type
     * @return {?}
     */
    function Connector(cache, store, type) {
      var options = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      _classCallCheck(this, Connector);
      var _this = _possibleConstructorReturn(this, _Namespace.call(this));
      return _this.cache = cache, _this.store = store, _this.services = type, _this.options = options, _this.logger = c.a.create("cacheConnector"), _this.cache && _this.cache.init && _this.cache.init(type, options.cache, options), _this;
    }
    return _inherits(Connector, _Namespace), Connector.prototype.load = function(f, platform, callback) {
      var _this2 = this;
      if (!this.cache) {
        return callback && callback();
      }
      /** @type {!Object} */
      var options = _extends({}, this.cache.options, this.options.cache);
      var languages = "string" === typeof f ? this.services.languageUtils.toResolveHierarchy(f) : f;
      if (options.enabled) {
        this.cache.load(languages, function(e, data) {
          if (e && _this2.logger.error("loading languages " + languages.join(", ") + " from cache failed", e), data) {
            var l;
            for (l in data) {
              if (Object.prototype.hasOwnProperty.call(data, l)) {
                var n;
                for (n in data[l]) {
                  if (Object.prototype.hasOwnProperty.call(data[l], n) && "i18nStamp" !== n) {
                    var bundle = data[l][n];
                    if (bundle) {
                      _this2.store.addResourceBundle(l, n, bundle);
                    }
                  }
                }
              }
            }
          }
          if (callback) {
            callback();
          }
        });
      } else {
        if (callback) {
          callback();
        }
      }
    }, Connector.prototype.save = function() {
      if (this.cache && this.options.cache && this.options.cache.enabled) {
        this.cache.save(this.store.data);
      }
    }, Connector;
  }(p.a);
  C.a = sx;
}, function(canCreateDiscussions, n, value) {
  /**
   * @return {?}
   */
  function get$1() {
    return {
      debug : false,
      initImmediate : true,
      ns : ["translation"],
      defaultNS : ["translation"],
      fallbackLng : ["dev"],
      fallbackNS : false,
      whitelist : false,
      nonExplicitWhitelist : false,
      load : "all",
      preload : false,
      simplifyPluralSuffix : true,
      keySeparator : ".",
      nsSeparator : ":",
      pluralSeparator : "_",
      contextSeparator : "_",
      saveMissing : false,
      updateMissing : false,
      saveMissingTo : "fallback",
      saveMissingPlurals : true,
      missingKeyHandler : false,
      missingInterpolationHandler : false,
      postProcess : false,
      returnNull : true,
      returnEmptyString : true,
      returnObjects : false,
      joinArrays : false,
      returnedObjectHandler : function() {
      },
      parseMissingKeyHandler : false,
      appendNamespaceToMissingKey : false,
      appendNamespaceToCIMode : false,
      overloadTranslationOptionHandler : function(args) {
        var attr = {};
        return args[1] && (attr.defaultValue = args[1]), args[2] && (attr.tDescription = args[2]), attr;
      },
      interpolation : {
        escapeValue : true,
        format : function(objects, val, p) {
          return objects;
        },
        prefix : "{{",
        suffix : "}}",
        formatSeparator : ",",
        unescapePrefix : "-",
        nestingPrefix : "$t(",
        nestingSuffix : ")",
        maxReplaces : 1E3
      }
    };
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function transformOptions(options) {
    return "string" === typeof options.ns && (options.ns = [options.ns]), "string" === typeof options.fallbackLng && (options.fallbackLng = [options.fallbackLng]), "string" === typeof options.fallbackNS && (options.fallbackNS = [options.fallbackNS]), options.whitelist && options.whitelist.indexOf("cimode") < 0 && (options.whitelist = options.whitelist.concat(["cimode"])), options;
  }
  value.d(n, "a", function() {
    return get$1;
  });
  /** @type {function(!Object): ?} */
  n.b = transformOptions;
}, function(block, canCreateDiscussions, n) {
  /**
   * @param {string} name
   * @return {?}
   */
  function exec(name) {
    var a = all[name];
    return a ? Promise.all(a.slice(1).map(n.e)).then(function() {
      return n(a[0]);
    }) : Promise.reject(new Error("Cannot find module '" + name + "'."));
  }
  var all = {
    "./by" : [47, 2],
    "./by.js" : [47, 2],
    "./en" : [48, 1],
    "./en.js" : [48, 1],
    "./ru" : [19],
    "./ru.js" : [19],
    "./ua" : [49, 0],
    "./ua.js" : [49, 0]
  };
  /**
   * @return {?}
   */
  exec.keys = function() {
    return Object.keys(all);
  };
  /** @type {number} */
  exec.id = 113;
  /** @type {function(string): ?} */
  block.exports = exec;
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, defaultTagAttributes, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} call
   * @param {string} value
   * @return {?}
   */
  function _possibleConstructorReturn(call, value) {
    if (!call) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" !== typeof value && "function" !== typeof value ? call : value;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function processResponse(data) {
    return {
      good : data.group.good,
      mega : data.group.mega,
      process : data.group.process,
      great_lock : data.group.great_lock,
      images : data.group.images,
      load_images : data.group.load_images
    };
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var window = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(116);
  var f = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__), __webpack_require__(11));
  var defaultOptions = __webpack_require__(2);
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var nodeA = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "renderCover",
      value : function(name, data) {
        var scope = this;
        return row.a.createElement("div", {
          key : data,
          className : "Good__cover"
        }, row.a.createElement("a", {
          href : name,
          target : "_blank"
        }, row.a.createElement("img", {
          alt : "",
          src : name
        })), row.a.createElement("button", {
          onClick : function() {
            return scope.props.rollback(name);
          },
          className : "Button"
        }, defaultOptions.a.t("rollback")));
      }
    }, {
      key : "renderRollback",
      value : function() {
        var $rootScope = this;
        var that = this.props;
        var active = that.load_images;
        var func = that.images;
        if (active || func.length) {
          return row.a.createElement("div", {
            className : "Good__rollback"
          }, active ? defaultOptions.a.t("wait_with_dots") : defaultOptions.a.t("select_cover_help"), row.a.createElement("button", {
            className : "Button",
            onClick : function() {
              return $rootScope.props.dropRollback();
            }
          }, defaultOptions.a.t("cancel")), func.map(function(mmCoreSplitViewBlock, playlistUri) {
            return $rootScope.renderCover(mmCoreSplitViewBlock, playlistUri);
          }));
        }
      }
    }, {
      key : "render",
      value : function() {
        var subgroupObj = this;
        return this.props.good ? row.a.createElement("div", {
          className : "Good"
        }, this.props.mega && row.a.createElement("button", {
          onClick : function() {
            return subgroupObj.props.setMega(false);
          },
          className : "Button rollback"
        }, "\u0423\u0431\u0440\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u0438"), !this.props.mega && row.a.createElement("button", {
          onClick : function() {
            return subgroupObj.props.setMega(true);
          },
          className : "Button rollback"
        }, "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u0438"), row.a.createElement("button", {
          onClick : function() {
            return subgroupObj.props.startRollback();
          },
          className : "Button rollback"
        }, defaultOptions.a.t("rollback_covers")), row.a.createElement("span", null, defaultOptions.a.t("you_admin"), " "), this.props.process ? row.a.createElement("div", null, defaultOptions.a.t("cover_updating_percent", {
          percent : this.props.process.text
        }), " ", row.a.createElement("a", {
          href : this.props.process.url,
          target : "blank"
        }, this.props.process.url)) : null, this.renderRollback(), this.props.great_lock ? row.a.createElement("div", {
          className : "Good__lock"
        }, defaultOptions.a.t("cover_updating_locked"), " ", row.a.createElement("button", {
          onClick : function() {
            return subgroupObj.props.dropGreatLock();
          },
          className : "Button"
        }, defaultOptions.a.t("unlock"))) : null) : null;
      }
    }]), Agent;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  defaultTagAttributes.a = Object(window.b)(processResponse, {
    startRollback : f.i,
    rollback : f.e,
    dropRollback : f.d,
    dropGreatLock : f.c,
    setMega : f.g
  })(nodeA);
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, defaultTagAttributes, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function processResponse(data) {
    return {
      good : data.group.good,
      process : data.group.process,
      great_lock : data.group.great_lock,
      images : data.group.images,
      load_images : data.group.load_images
    };
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var window = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(6);
  var self = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__ = __webpack_require__(121);
  var res = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__), __webpack_require__(1));
  var defaultOptions = __webpack_require__(2);
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var nodeA = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function FloatingLabel() {
      var _Object$getPrototypeO;
      var i;
      var _this;
      var _ret;
      _classCallCheck(this, FloatingLabel);
      /** @type {number} */
      var _len8 = arguments.length;
      /** @type {!Array} */
      var args = Array(_len8);
      /** @type {number} */
      var _key8 = 0;
      for (; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      return i = _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = FloatingLabel.__proto__ || Object.getPrototypeOf(FloatingLabel)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this.state = {
        open : true,
        groupName : ""
      }, _ret = i, _possibleConstructorReturn(_this, _ret);
    }
    return _inherits(FloatingLabel, _EventEmitter), _createClass(FloatingLabel, [{
      key : "onClose",
      value : function() {
        this.setState({
          open : false
        });
        if (this.props.onClose) {
          this.props.onClose();
        }
      }
    }, {
      key : "componentDidMount",
      value : function() {
        var me = this;
        var i = this.props.groupId;
        if (i) {
          self.a.api("groups.getById", {
            group_id : i,
            v : "5.68"
          }).then(function(schemaPathParts) {
            if (schemaPathParts && schemaPathParts.length) {
              var daemonLogicCase = schemaPathParts.pop();
              var phl1 = daemonLogicCase.name;
              me.setState({
                groupName : " \u00ab" + phl1 + "\u00bb"
              });
            }
          }).catch(res.e);
        }
      }
    }, {
      key : "getText",
      value : function() {
        return this.props.end ? defaultOptions.a.t("game_over") + " " + defaultOptions.a.t("thanks_for_game") : defaultOptions.a.t("install_game_in_community");
      }
    }, {
      key : "render",
      value : function() {
        var d = this;
        if (!this.state.open) {
          return null;
        }
        var children = this.props.end;
        return row.a.createElement("div", {
          className : "Header"
        }, row.a.createElement("div", {
          className : "Header__text long "
        }, this.getText()), row.a.createElement("div", {
          className : "Header__button short"
        }, children ? null : row.a.createElement("a", {
          className : "Button",
          rel : "noopener noreferrer",
          href : "https://vk.com/add_community_app?aid=5990572",
          target : "_blank"
        }, defaultOptions.a.t("add_to_community")), children ? row.a.createElement("a", {
          className : "Button primary",
          rel : "noopener noreferrer",
          href : "/data/1.png",
          target : "_blank"
        }, defaultOptions.a.t("download_canvas")) : null), children ? null : row.a.createElement("div", {
          className : "Header__close",
          onClick : function(name) {
            return d.onClose(name);
          }
        }));
      }
    }]), FloatingLabel;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  defaultTagAttributes.a = Object(window.b)(processResponse, {})(nodeA);
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, C, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} call
   * @param {string} value
   * @return {?}
   */
  function _possibleConstructorReturn(call, value) {
    if (!call) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" !== typeof value && "function" !== typeof value ? call : value;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(124);
  var _createClass = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__), function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }());
  var sx = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "render",
      value : function() {
        var remote = this;
        var value = this.props.checked;
        return row.a.createElement("div", {
          className : "Checkbox" + (value ? " checked" : ""),
          onClick : function(name) {
            return remote.props.onChange(!value);
          }
        }, row.a.createElement("div", {
          className : "Checkbox__line"
        }), row.a.createElement("div", {
          className : "Checkbox__dot"
        }));
      }
    }]), Agent;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  C.a = sx;
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, r, n) {
  /**
   * @param {!AudioNode} w
   * @param {!Function} t
   * @return {undefined}
   */
  function debug(w, t) {
    if (!(w instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var installNativeEvent$2 = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var key = function() {
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} d
     * @param {?} s
     * @param {?} num
     * @param {?} dx
     * @return {undefined}
     */
    function n(x, y, d, s, num, dx) {
      debug(this, n);
      /** @type {number} */
      this.x = parseInt(x, 10);
      /** @type {number} */
      this.y = parseInt(y, 10);
      /** @type {number} */
      this.colorId = parseInt(d, 10);
      /** @type {number} */
      this.userId = parseInt(s, 10);
      /** @type {number} */
      this.groupId = parseInt(num, 10);
      /** @type {number} */
      this.signatureType = parseInt(dx, 10);
    }
    return installNativeEvent$2(n, [{
      key : "getSign",
      value : function() {
        return 1 === this.signatureType ? this.x + this.y - this.colorId + this.groupId + 20 : 2 === this.signatureType ? this.x - this.y + this.colorId + this.groupId + 15 : 3 === this.signatureType ? this.x - 2 * this.y + this.colorId + this.groupId + 100 : 4 === this.signatureType ? this.getTag1(this.x - 2 * this.y) + this.colorId + this.userId + 105 : 5 === this.signatureType ? this.getTag2(this.x - 2 * this.y) + this.colorId + this.userId + 102 : 6 === this.signatureType ? this.getTag1(this.x -
          1 - 2 * this.y) + this.colorId + this.userId + 103 : Date.now().toString();
      }
    }, {
      key : "getTag1",
      value : function(name) {
        return window.Math.round(1E3 * window.Math.log2(window.Math.abs(name) + 1));
      }
    }, {
      key : "getTag2",
      value : function(name) {
        return window.Math.round(1E3 * window.Math.log1p(window.Math.abs(name) + 1));
      }
    }, {
      key : "toByte",
      value : function() {
        /** @type {!ArrayBuffer} */
        var arrayBuffer = new ArrayBuffer(16);
        /** @type {!Int32Array} */
        var array = new Int32Array(arrayBuffer, 0, 4);
        return array[0] = this.x, array[1] = this.y, array[2] = this.colorId, array[3] = this.getSign() % 256, arrayBuffer;
      }
    }]), n;
  }();
  r.a = key;
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, defaultTagAttributes, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function register(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} value
   * @param {string} fn
   * @return {?}
   */
  function $(value, fn) {
    if (!value) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !fn || "object" !== typeof fn && "function" !== typeof fn ? value : fn;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!Object} self
   * @return {?}
   */
  function init(self) {
    return {
      can_draw : self.user.can_draw,
      online : self.user.online,
      admin : self.user.admin,
      group_wait : self.group.wait,
      first_time : self.user.first_time,
      error : self.channel.error,
      updates : self.user.updates,
      default_ttl : self.user.default_ttl,
      image : self.user.image,
      loader : self.user.loader,
      cover_auto : self.group.auto_cover
    };
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var __WEBPACK_LABELED_MODULE__3 = __webpack_require__(31);
  var c = __webpack_require__(1);
  var _CommentBox = __webpack_require__(37);
  var _FilterableProductTable = __webpack_require__(40);
  var _srcReactMotion = __webpack_require__(39);
  var h = __webpack_require__(13);
  var window = __webpack_require__(3);
  var _kodo = __webpack_require__(41);
  var _Item2 = __webpack_require__(42);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(43);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__), __webpack_require__(44));
  var rowcaches = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__), __webpack_require__(8));
  var _todo2 = __webpack_require__(128);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(130);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__), __webpack_require__(45));
  var thread = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__), __webpack_require__(2));
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var nodeA = function(_EventEmitter) {
    /**
     * @param {?} attrs
     * @param {?} options
     * @return {?}
     */
    function init(attrs, options) {
      register(this, init);
      var self = $(this, (init.__proto__ || Object.getPrototypeOf(init)).call(this, attrs, options));
      return self.canvas = null, self.ctx = null, self.original = null, self.originalCtx = null, self.canvasCreated = false, self.x = -1590, self.y = -75, self.catchPos = false, self.topPadding = 150, self.leftPadding = 40, self.rightPadding = 365, self.bottomPadding = 200, self.w = 1590, self.h = 400, self.frameW = 825, self.frameH = 650, self.minZoom = 1, self.maxZoom = 50, self.state = {
        color_id : 5,
        zoom : 4,
        grid : false,
        open_statistic : false,
        pointX : 0,
        pointY : 0,
        cursor : false,
        end_alert : false
      }, self.onPixel = function(options) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        try {
          if (options.flush) {
            self.props.alertBadUser(options.x, options.y, options.user_id, options.group_id);
          }
          self.drawPixel(options.x, options.y, Object(c.c)()[options.color]);
          self.afterRender();
        } catch (n) {
          Object(c.e)(n);
          if (!t) {
            setTimeout(function() {
              self.onPixel(options, true);
            }, 500);
          }
        }
      }, self.state.color_id = Math.round(Math.random() * Object(c.c)().length - 2) + 2, self.y = -1 * Math.round(Math.random() * (self.h * self.state.zoom - self.frameH)), self.x = -1 * Math.round(Math.random() * (self.w * self.state.zoom - self.frameW)), self.original = document.createElement("canvas"), self.original.width = self.w, self.original.height = self.h, self.originalCtx = self.original.getContext("2d"), window.addEventListener("mouseup", function(event) {
        return self.onMouseUp(event);
      }), self.frameW = window.innerWidth, self.frameH = window.innerHeight, self;
    }
    return _inherits(init, _EventEmitter), _createClass(init, [{
      key : "componentWillUnmount",
      value : function() {
        this.props.channel.removeOnPixel(this.onPixel);
      }
    }, {
      key : "setZoomForPoint",
      value : function(type, x, v) {
        type = Object(c.b)(this.minZoom, Math.round(type), this.maxZoom);
        /** @type {number} */
        var fluxIn = type * this.w;
        /** @type {number} */
        var y = type * this.h;
        /** @type {number} */
        var fluxOut = this.state.zoom * this.w;
        /** @type {number} */
        var dy = this.state.zoom * this.h;
        /** @type {number} */
        var dt = (x - this.x) / (this.w * this.state.zoom);
        /** @type {number} */
        var alpha = (v - this.y) / (this.h * this.state.zoom);
        if (fluxIn > fluxOut) {
          this.x -= (fluxIn - fluxOut) * dt;
        } else {
          this.x += (fluxOut - fluxIn) * dt;
        }
        if (y > dy) {
          this.y -= (y - dy) * alpha;
        } else {
          this.y += (dy - y) * alpha;
        }
        this.setState({
          zoom : type
        });
      }
    }, {
      key : "componentDidUpdate",
      value : function() {
        var me = this;
        if (this.canvas && !this.init) {
          /** @type {boolean} */
          this.init = true;
          this.ctx = this.canvas.getContext("2d");
          /** @type {boolean} */
          this.ctx.mozImageSmoothingEnabled = false;
          /** @type {boolean} */
          this.ctx.webkitImageSmoothingEnabled = false;
          /** @type {boolean} */
          this.ctx.msImageSmoothingEnabled = false;
          /** @type {boolean} */
          this.ctx.imageSmoothingEnabled = false;
          this.ctx.save();
          this.canvas.addEventListener("touchstart", function(event) {
            me.onMouseDown(event);
          }, false);
          this.canvas.addEventListener("touchend", function(e) {
            me.onMouseUp(e);
          }, false);
          this.canvas.addEventListener("touchcancel", function(e) {
            me.onMouseUp(e);
          }, false);
          this.canvas.addEventListener("touchmove", function(e) {
            me.onMove(e);
          }, false);
          this.createCanvas(this.originalCtx, this.props.image);
          window.addEventListener("orientationchange", function() {
            /** @type {(Element|null)} */
            var t = document.getElementById("root");
            /** @type {string} */
            t.style.width = "1px";
            /** @type {string} */
            t.style.height = "1px";
            /** @type {string} */
            t.style.overflow = "hidden";
            /** @type {number} */
            me.frameW = window.innerWidth;
            /** @type {number} */
            me.frameH = window.innerHeight;
            /** @type {string} */
            t.style.width = "";
            /** @type {string} */
            t.style.height = "";
            /** @type {string} */
            t.style.overflow = "";
            me.setState({
              ts : Date.now()
            });
            me.setZoomForPoint(me.state.zoom, me.x, me.y);
          });
        } else {
          this.afterRender();
        }
      }
    }, {
      key : "createCanvas",
      value : function(name, x) {
        var mainWin = this;
        if (x && !this.canvasCreated) {
          name.drawImage(x, 0, 0);
          this.props.updates.forEach(function(screen) {
            mainWin.drawPixel(screen.x, screen.y, "#" + screen.color);
          });
          this.afterRender();
          this.props.channel.onPixel(this.onPixel);
          /** @type {boolean} */
          this.canvasCreated = true;
        }
      }
    }, {
      key : "afterRender",
      value : function() {
        if (this.init) {
          /** @type {string} */
          this.ctx.fillStyle = "#BCBCBC";
          this.ctx.fillRect(0, 0, this.frameW, this.frameH);
          this.ctx.drawImage(this.original, Math.round(this.x), Math.round(this.y), Math.round(this.w * this.state.zoom), Math.round(this.h * this.state.zoom));
        }
      }
    }, {
      key : "getPointInOrigin",
      value : function(name) {
        /** @type {number} */
        var sizeScale = (name.clientX - this.x) / (this.w * this.state.zoom);
        /** @type {number} */
        var ratio_width = (name.clientY - this.y) / (this.h * this.state.zoom);
        return {
          cx : Math.min(this.w - 1, Math.max(0, Math.round(this.w * sizeScale - .5))),
          cy : Math.min(this.h - 1, Math.max(0, Math.round(this.h * ratio_width - .5)))
        };
      }
    }, {
      key : "getDistFromEvent",
      value : function(name) {
        return Math.sqrt((name.touches[0].clientX - name.touches[1].clientX) * (name.touches[0].clientX - name.touches[1].clientX) + (name.touches[0].clientY - name.touches[1].clientY) * (name.touches[0].clientY - name.touches[1].clientY));
      }
    }, {
      key : "getCenterXFromE",
      value : function(name) {
        var scrollX = name.touches[0].clientX;
        var w = name.touches[1].clientX;
        /** @type {number} */
        var x = Math.min(scrollX, w);
        return x + (Math.max(scrollX, w) - x) / 2;
      }
    }, {
      key : "getCenterYFromE",
      value : function(name) {
        var scrollX = name.touches[0].clientY;
        var b = name.touches[1].clientY;
        /** @type {number} */
        var x = Math.min(scrollX, b);
        return x + (Math.max(scrollX, b) - x) / 2;
      }
    }, {
      key : "onMove",
      value : function(options) {
        if (options.preventDefault(), options.stopPropagation(), options.touches) {
          if (this.scale) {
            if (options.touches.length >= 2) {
              var depth = this.getDistFromEvent(options);
              var height = this.lastDist;
              /** @type {number} */
              var aspect = height / this.state.zoom;
              /** @type {number} */
              var ratio = depth / aspect;
              /** @type {number} */
              ratio = Math.min(this.maxZoom, Math.max(this.minZoom, ratio));
              if (Math.round(ratio) !== this.state.zoom) {
                this.setZoomForPoint(ratio, this.getCenterXFromE(options), this.getCenterYFromE(options));
                this.lastDist = depth;
              }
            }
            return true;
          }
          options = options.touches[0];
        }
        if (this.catchPos) {
          /** @type {number} */
          var posX = options.clientX - this.startX;
          /** @type {number} */
          var posY = options.clientY - this.startY;
          if (posX !== this.x || posY !== this.y) {
            /** @type {number} */
            var yvf = Math.round(this.h * this.state.zoom);
            /** @type {number} */
            var offset = this.w * this.state.zoom;
            var x = posX + this.startOriginX;
            var y = posY + this.startOriginY;
            /** @type {number} */
            var distance = this.frameH - (yvf + y);
            /** @type {number} */
            var delta = this.frameW - (offset + x);
            if (distance > 0 || y > 0) {
              /** @type {boolean} */
              var d = y > 0 && (y > this.topPadding && y <= this.y || y < this.topPadding) || y < 0;
              /** @type {boolean} */
              var forceNew = distance > 0 && (distance > this.bottomPadding && y >= this.y || !(distance > this.bottomPadding)) || distance < 0;
              if (d && forceNew) {
                this.y = y;
              } else {
                if (distance > 0 && distance > this.bottomPadding && y < this.y) {
                  /** @type {number} */
                  this.y = this.frameH - yvf - this.bottomPadding;
                }
                if (y > 0 && y > this.bottomPadding && y > this.y) {
                  this.y = this.topPadding;
                }
              }
            } else {
              this.y = y;
            }
            if (x > 0 || delta > 0) {
              /** @type {boolean} */
              var ADVANCED_SEARCH_TYPEAHEAD = x > 0 && (x > this.leftPadding && x <= this.x || x < this.leftPadding);
              /** @type {boolean} */
              ADVANCED_SEARCH_TYPEAHEAD = ADVANCED_SEARCH_TYPEAHEAD || x < 0;
              /** @type {boolean} */
              var polar = delta > 0 && (delta > this.rightPadding && x >= this.x || delta < this.rightPadding);
              /** @type {boolean} */
              polar = polar || delta < 0;
              if (ADVANCED_SEARCH_TYPEAHEAD && polar) {
                this.x = x;
              } else {
                if (x > 0 && x > this.leftPadding && x > this.x) {
                  this.x = this.leftPadding;
                }
                if (delta > 0 && delta > this.rightPadding && x < this.x) {
                  /** @type {number} */
                  this.x = this.frameW - offset - this.rightPadding;
                }
              }
            } else {
              this.x = x;
            }
            this.setState({
              x : this.x,
              y : this.y
            });
            /** @type {boolean} */
            this.lockClick = true;
          }
        }
      }
    }, {
      key : "getCursorX",
      value : function() {
        return this.state.pointX * this.state.zoom + this.x;
      }
    }, {
      key : "getCursorY",
      value : function() {
        return this.state.pointY * this.state.zoom + this.y;
      }
    }, {
      key : "onMouseDown",
      value : function(name) {
        if (name.changedTouches) {
          var touch = name.changedTouches[0];
          /** @type {boolean} */
          this.catchPos = true;
          this.startX = touch.clientX;
          this.startY = touch.clientY;
          this.startOriginX = this.x;
          this.startOriginY = this.y;
          /** @type {boolean} */
          this.lockClick = false;
          if (name.touches.length >= 2) {
            /** @type {boolean} */
            this.scale = true;
            this.lastDist = this.getDistFromEvent(name);
          }
        }
      }
    }, {
      key : "onClick",
      value : function(name) {
        if (!this.lockClick) {
          var cbox = this.getPointInOrigin(name);
          this.setState({
            pointX : cbox.cx,
            pointY : cbox.cy,
            cursor : true
          });
        }
      }
    }, {
      key : "createPixel",
      value : function(name) {
        if (name.isTrusted) {
          var t = Object(c.c)();
          this.drawPixel(this.state.pointX, this.state.pointY, t[this.state.color_id - 1]);
          this.props.setPixel(this.state.pointX, this.state.pointY, this.state.color_id - 1, this.props.channel);
          this.setState({
            cursor : false
          });
        }
      }
    }, {
      key : "drawPixel",
      value : function(name, x, value) {
        /** @type {string} */
        this.originalCtx.fillStyle = value;
        this.originalCtx.fillRect(name, x, 1, 1);
      }
    }, {
      key : "onMouseUp",
      value : function(name) {
        if (!(name.touches && 0 !== name.touches.length)) {
          /** @type {boolean} */
          this.scale = false;
          /** @type {boolean} */
          this.catchPos = false;
        }
      }
    }, {
      key : "onChangeColor",
      value : function(name) {
        this.setState({
          color_id : name
        });
      }
    }, {
      key : "dropFirstLoader",
      value : function() {
        this.props.setFirstTime();
      }
    }, {
      key : "render",
      value : function() {
        var self = this;
        var _props2 = this.props;
        var options = _props2.can_draw;
        var horizontal = _props2.first_time;
        var active = _props2.loader;
        var sizeValidators = {
          width : this.frameW + "px",
          height : this.frameH + "px"
        };
        return active || horizontal ? row.a.createElement("div", {
          className : "AppMobile AppMobile--loading",
          style : sizeValidators
        }, row.a.createElement("div", {
          className : "progress-bar-fill"
        }), row.a.createElement("div", {
          className : "AppMobile__advance"
        }, row.a.createElement("div", {
          className : "AppMobile__logo"
        }), row.a.createElement("div", {
          className : "sub-header"
        }, thread.a.t("pixel_battle")), row.a.createElement("div", {
          className : "header"
        }, thread.a.t("description")), active ? row.a.createElement("div", {
          className : "progress-bar"
        }) : null, !active && horizontal && row.a.createElement(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__.Button, {
          mobile : true,
          className : "w100",
          onClick : function(name) {
            return self.dropFirstLoader(name);
          }
        }, thread.a.t("continue")))) : row.a.createElement("div", {
          className : "AppMobile",
          style : sizeValidators
        }, row.a.createElement("canvas", {
          onMouseDown : function(evt) {
            return self.onMouseDown(evt);
          },
          onMouseUp : function(event) {
            return self.onMouseUp(event);
          },
          onMouseMove : function(event) {
            return self.onMove(event);
          },
          onClick : function(name) {
            return self.onClick(name);
          },
          width : this.frameW,
          height : this.frameH,
          className : options ? "draw" : "lock",
          ref : function(name) {
            return self.canvas = name;
          }
        }), this.state.cursor ? row.a.createElement(_Item2.a, {
          x : this.getCursorX(),
          y : this.getCursorY(),
          color : Object(c.c)()[this.state.color_id - 1],
          zoom : this.state.zoom
        }) : null, row.a.createElement("div", {
          className : "AppMobile__statistic"
        }, row.a.createElement(_CommentBox.a, {
          online : this.props.online,
          zoom : this.state.zoom,
          grid : this.state.grid,
          open : this.state.open_statistic,
          minZoom : this.minZoom,
          maxZoom : this.maxZoom,
          onClose : function() {
            return self.setState({
              open_statistic : false
            });
          },
          onOpen : function() {
            return self.setState({
              open_statistic : true
            });
          },
          x : this.state.pointX + 1,
          y : this.state.pointY + 1,
          onChangeGrid : function(_grid) {
            return self.setState({
              grid : _grid
            });
          },
          onChangeZoom : function(pipeName) {
            return self.setZoomForPoint(pipeName, self.frameW / 2, self.frameH / 2);
          }
        })), row.a.createElement("div", {
          style : {
            opacity : !options || this.state.cursor ? "0" : "1",
            zIndex : !options || this.state.cursor ? "1" : "2"
          },
          className : "AppMobile__color"
        }, row.a.createElement(__WEBPACK_LABELED_MODULE__3.a, {
          onChangeColor : function(color) {
            return self.onChangeColor(color);
          },
          before : null,
          selectedColorId : this.state.color_id
        })), row.a.createElement("div", {
          style : {
            opacity : options || Object(c.g)() ? "0" : "1",
            zIndex : options || Object(c.g)() ? "1" : "2"
          },
          className : "AppMobile__color"
        }, row.a.createElement(_kodo.a, null)), row.a.createElement("div", {
          className : "AppMobile__color",
          style : {
            display : options && this.state.cursor ? "" : "none"
          }
        }, row.a.createElement("div", {
          className : "AppMobile__confirm"
        }, row.a.createElement("button", {
          onClick : function(name) {
            return self.createPixel(name);
          },
          className : "blue"
        }, thread.a.t("put_point")), row.a.createElement("button", {
          onClick : function() {
            return self.setState({
              cursor : false
            });
          },
          className : "red"
        }, thread.a.t("cancel")))), row.a.createElement(_FilterableProductTable.a, null), row.a.createElement("div", {
          className : "AppMobile__zoomer"
        }, row.a.createElement("div", {
          onClick : function() {
            return self.setZoomForPoint(self.state.zoom + 1, self.frameW / 2, self.frameH / 2);
          },
          className : "AppMobile__zoom-up"
        }), row.a.createElement("div", {
          className : "AppMobile__zoom-sep"
        }), row.a.createElement("div", {
          onClick : function() {
            return self.setZoomForPoint(self.state.zoom - 1, self.frameW / 2, self.frameH / 2);
          },
          className : "AppMobile__zoom-down"
        })), row.a.createElement(_srcReactMotion.a, {
          x : this.w * this.state.zoom + this.x + 20,
          y : this.y
        }), !this.state.end_alert && Object(c.g)() ? row.a.createElement(_todo2.a, {
          onClose : function() {
            return self.setState({
              end_alert : true
            });
          }
        }) : null);
      }
    }]), init;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  defaultTagAttributes.a = Object(window.b)(init, {
    setPixel : h.f,
    updateCover : h.i,
    updateAutoCover : h.h,
    alertBadUser : h.a,
    setFirstTime : rowcaches.f
  })(nodeA);
}, function(canCreateDiscussions, C, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} call
   * @param {string} value
   * @return {?}
   */
  function _possibleConstructorReturn(call, value) {
    if (!call) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" !== typeof value && "function" !== typeof value ? call : value;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(0);
  var row = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(129);
  var self = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__), __webpack_require__(2));
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var sx = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "render",
      value : function() {
        var that = this;
        return row.a.createElement("div", {
          className : "UnsubscribePopup"
        }, row.a.createElement("div", {
          className : "UnsubscribePopup__wrapper"
        }, row.a.createElement("div", {
          className : "UnsubscribePopup__window"
        }, row.a.createElement("div", {
          className : "UnsubscribePopup__box"
        }, row.a.createElement("div", {
          className : "UnsubscribePopup__header"
        }, row.a.createElement("div", {
          className : "h1"
        }, self.a.t("game_over")), row.a.createElement("p", null, self.a.t("thanks_for_game")), row.a.createElement("button", {
          onClick : function() {
            return that.props.onClose();
          }
        }, self.a.t("close")))))));
      }
    }]), Agent;
  }(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__.Component);
  C.a = sx;
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, C, n) {
  /**
   * @param {!AudioNode} name
   * @param {!Function} n
   * @return {undefined}
   */
  function r(name, n) {
    if (!(name instanceof n)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var c = n(4);
  var m = n(18);
  var data = (n.n(m), n(8));
  var event = n(13);
  var p = n(1);
  var installNativeEvent$2 = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var sx = function() {
    /**
     * @param {!Storage} value
     * @param {string} dim
     * @return {undefined}
     */
    function n(value, dim) {
      r(this, n);
      /** @type {!Array} */
      this.onPixelCallbacks = [];
      /** @type {null} */
      this.store = null;
      /** @type {null} */
      this.ws = null;
      /** @type {null} */
      this.ttl = null;
      /** @type {number} */
      this.retryTime = 1E3;
      /** @type {!Array} */
      this.updatesPixel = [];
      /** @type {!Array} */
      this.myDots = [];
      /** @type {null} */
      this.forceOnlineTimer = null;
      /** @type {null} */
      this.onOnlineCallback = null;
      /** @type {!Storage} */
      this.store = value;
      /** @type {string} */
      this.userId = dim;
      /** @type {!Array} */
      this.readerPoll = [this.createFileReader(), this.createFileReader(), this.createFileReader(), this.createFileReader(), this.createFileReader(), this.createFileReader(), this.createFileReader(), this.createFileReader(), this.createFileReader(), this.createFileReader(), this.createFileReader()];
      /** @type {number} */
      this.nextFileReaderId = 0;
      /** @type {!Array} */
      this.toRead = [];
    }
    return installNativeEvent$2(n, [{
      key : "getNextFileReader",
      value : function() {
        return this.nextFileReaderId++, this.nextFileReaderId >= this.readerPoll.length && (this.nextFileReaderId = 0), this.readerPoll[this.nextFileReaderId];
      }
    }, {
      key : "createFileReader",
      value : function() {
        var container = this;
        /** @type {!FileReader} */
        var reader = new FileReader;
        return reader.onload = function() {
          /** @type {(ArrayBuffer|Blob|null|string)} */
          var buffer = reader.result;
          /** @type {number} */
          var length = buffer.byteLength / 4;
          /** @type {!Int32Array} */
          var result = new Int32Array(buffer, 0, length);
          /** @type {number} */
          var i = 0;
          for (; i < Math.floor(length / 5); i++) {
            /** @type {number} */
            var d = result[5 * i];
            /** @type {number} */
            var followers = result[1 + 5 * i];
            /** @type {number} */
            var HeadsetColor = result[2 + 5 * i];
            /** @type {number} */
            var res = result[3 + 5 * i];
            /** @type {number} */
            var group_id = result[4 + 5 * i];
            container.dispatch({
              t : 1,
              v : {
                x : d,
                y : followers,
                color : HeadsetColor,
                user_id : res,
                group_id : group_id
              }
            });
          }
          if (container.toRead.length) {
            var blobRows = container.toRead.shift();
            reader.readAsArrayBuffer(blobRows);
          }
        }, reader;
      }
    }, {
      key : "run",
      value : function(name, data) {
        var self = this;
        this.close();
        if (data) {
          /** @type {!Function} */
          this.onOnlineCallback = data;
        }
        this.store.dispatch({
          type : c.v,
          connecting : true
        });
        this.store.dispatch({
          type : c.x,
          online : false
        });
        this.store.dispatch({
          type : c.w,
          error : null
        });
        try {
          /** @type {!WebSocket} */
          this.ws = new WebSocket(name);
          /**
           * @return {undefined}
           */
          this.ws.onopen = function() {
            self.onOpen();
          };
          /**
           * @param {!Object} b
           * @return {undefined}
           */
          this.ws.onerror = function(b) {
            self.store.dispatch({
              type : c.v,
              connecting : false
            });
            self.store.dispatch({
              type : c.x,
              online : false
            });
            self.store.dispatch({
              type : c.w,
              error : b.message || "Connection error"
            });
            self.reconnect(name);
          };
          /**
           * @param {?} closeEvent
           * @return {undefined}
           */
          this.ws.onclose = function(closeEvent) {
            self.store.dispatch({
              type : c.x,
              online : false
            });
            self.reconnect(name);
          };
          /**
           * @param {!Object} event
           * @return {undefined}
           */
          this.ws.onmessage = function(event) {
            if ("string" === typeof event.data) {
              try {
                /** @type {*} */
                var plugin = JSON.parse(event.data);
                self.dispatch(plugin);
              } catch (e) {
                Object(p.e)(e);
              }
            } else {
              try {
                self.getNextFileReader().readAsArrayBuffer(event.data);
              } catch (t) {
                if (self.readerPoll.length < 100) {
                  var data = self.createFileReader();
                  data.readAsArrayBuffer(event.data);
                  self.readerPoll.push(data);
                } else {
                  self.toRead.push(event.data);
                }
              }
            }
          };
        } catch (artistTrack) {
          Object(p.e)(artistTrack);
          this.reconnect(name);
        }
      }
    }, {
      key : "onOpen",
      value : function() {
        this.store.dispatch({
          type : c.v,
          connecting : false
        });
        this.store.dispatch({
          type : c.x,
          online : true
        });
        if (this.onOnlineCallback) {
          this.onOnlineCallback();
        }
        /** @type {null} */
        this.onOnlineCallback = null;
        clearTimeout(this.forceOnlineTimer);
        /** @type {number} */
        this.retryTime = 1E3;
      }
    }, {
      key : "close",
      value : function() {
        if (this.ws) {
          try {
            this.ws.close();
          } catch (e) {
          }
        }
      }
    }, {
      key : "onPixel",
      value : function(name) {
        var canvas = this;
        this.onPixelCallbacks.push(name);
        if (this.updatesPixel.length) {
          this.updatesPixel.forEach(function(tx) {
            return canvas.pixel(tx);
          });
          /** @type {!Array} */
          this.updatesPixel = [];
        }
      }
    }, {
      key : "removeOnPixel",
      value : function(name) {
        this.onPixelCallbacks.splice(this.onPixelCallbacks.indexOf(name), 1);
      }
    }, {
      key : "dispatch",
      value : function(type) {
        switch(type.t) {
          case 1:
            var t = type.v;
            var id = t.user_id;
            var totalX = t.x;
            var r = t.y;
            var value = t.color;
            /** @type {!Object} */
            var artistTrack = Object.assign({}, type.v, {
              flush : this.overDrawDot(totalX, r, value, id)
            });
            this.pixel(artistTrack);
            break;
          case 2:
            this.online(type.v);
            break;
          case 3:
            if (parseInt(type.v.v, 10) > 10) {
              setTimeout(function() {
                alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0437\u0430\u043a\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0435\u0433\u043e \u0441\u043d\u043e\u0432\u0430");
              }, 2E4 * Math.random());
            }
            break;
          default:
            Object(p.e)("Unknown message type" + type.t);
        }
      }
    }, {
      key : "reconnect",
      value : function(name) {
        var t = this;
        clearTimeout(this.ttl);
        /** @type {number} */
        this.ttl = setTimeout(function() {
          t.run(name);
        }, this.retryTime);
        this.retryTime *= 1.3;
      }
    }, {
      key : "online",
      value : function(options) {
        var online = options.online;
        var duration = options.ttl;
        var value = options.signature;
        var wait = options.wait;
        this.store.dispatch({
          type : c.q,
          value : online
        });
        this.store.dispatch(Object(data.i)(duration));
        if (void 0 !== wait && wait > 0) {
          this.store.dispatch(Object(event.e)(Math.round(wait / 1E3) + 1));
        }
        if (void 0 !== value) {
          this.store.dispatch(Object(data.h)(value));
        }
      }
    }, {
      key : "pixel",
      value : function(name) {
        if (this.hasListeners()) {
          this.onPixelCallbacks.forEach(function(func) {
            func(name);
          });
          if (this.userId === name.user_id) {
            this.store.dispatch(Object(event.e)(null));
          }
        } else {
          this.updatesPixel.push(name);
        }
      }
    }, {
      key : "hasListeners",
      value : function() {
        return this.onPixelCallbacks.length;
      }
    }, {
      key : "getDotTag",
      value : function(name, data) {
        return name + "-" + data;
      }
    }, {
      key : "pushMyDot",
      value : function(type, id, data) {
        this.removeMyDot(type, id);
        this.myDots.push({
          tag : this.getDotTag(type, id),
          color : data
        });
        for (; this.myDots.length > 100;) {
          this.myDots.shift();
        }
      }
    }, {
      key : "removeMyDot",
      value : function(name, type) {
        var tag = this.getDotTag(name, type);
        this.myDots = this.myDots.filter(function(tok) {
          return tok.tag !== tag;
        });
      }
    }, {
      key : "overDrawDot",
      value : function(name, data, n, elem) {
        if (elem && parseInt(elem, 10) !== this.userId) {
          var i = this.getDotTag(name, data);
          return !!this.myDots.filter(function(x) {
            return x.tag === i && x.color !== n;
          }).length && (this.removeMyDot(name, data), true);
        }
      }
    }, {
      key : "sendPixel",
      value : function(name) {
        if (this.ws) {
          try {
            this.ws.send(name.toByte());
          } catch (valID) {
            Object(p.e)(valID);
            m.GA.event("js", "sendPixel", valID.toString());
          }
        }
      }
    }]), n;
  }();
  C.a = sx;
}, function(canCreateDiscussions, t, __webpack_require__) {
  var event = __webpack_require__(16);
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(133);
  var clonedI = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var __WEBPACK_LABELED_MODULE__3 = __webpack_require__(134);
  var pendingViews = {};
  /** @type {!Array} */
  var newNodeLists = [];
  /** @type {!Array} */
  var searchPipeline = [clonedI.a];
  var target = event.d.apply(void 0, [event.a.apply(void 0, searchPipeline)].concat(newNodeLists));
  var i = Object(event.e)(__WEBPACK_LABELED_MODULE__3.a, pendingViews, target);
  t.a = i;
}, function(canCreateDiscussions, exports, n) {
  /**
   * @param {?} row
   * @return {?}
   */
  function createThunkMiddleware(row) {
    return function(filter) {
      var value = filter.dispatch;
      var m = filter.getState;
      return function(profileFunction) {
        return function(fn) {
          return "function" === typeof fn ? fn(value, m, row) : profileFunction(fn);
        };
      };
    };
  }
  /** @type {boolean} */
  exports.__esModule = true;
  var thunk = createThunkMiddleware();
  /** @type {function(?): ?} */
  thunk.withExtraArgument = createThunkMiddleware;
  exports.default = thunk;
}, function(canCreateDiscussions, defaultTagAttributes, $) {
  var frame = $(16);
  var thread = $(8);
  var self = $(135);
  var t = $(11);
  var u = $(136);
  var action = $(46);
  defaultTagAttributes.a = Object(frame.c)({
    user : thread.b,
    channel : self.a,
    group : t.b,
    buy : u.a,
    rating : action.a
  });
}, function(canCreateDiscussions, global, unitToColor) {
  var c = unitToColor(4);
  var result = {
    online : false,
    connecting : false,
    error : null,
    updates : []
  };
  /**
   * @return {?}
   */
  var get = function() {
    var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : result;
    var node = arguments[1];
    switch(node.type) {
      case c.x:
        return Object.assign({}, data, {
          online : node.online || false
        });
      case c.v:
        return Object.assign({}, data, {
          connecting : node.connecting || false
        });
      case c.w:
        return Object.assign({}, data, {
          error : node.error || null
        });
      case c.y:
        return Object.assign({}, data, {
          updates : data.updates.concat(node.update)
        });
      case c.z:
        return Object.assign({}, data, {
          updates : []
        });
      default:
        return data;
    }
  };
  /** @type {function(): ?} */
  global.a = get;
}, function(canCreateDiscussions, global, NFA) {
  var m = NFA(4);
  var options = {
    open : false,
    wait : false,
    selectedIndex : 3
  };
  /**
   * @return {?}
   */
  var get = function() {
    var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : options;
    var data = arguments[1];
    switch(data.type) {
      case m.d:
        return Object.assign({}, c, {
          open : true
        });
      case m.b:
        return Object.assign({}, c, {
          open : false
        });
      case m.f:
        return Object.assign({}, c, {
          wait : true
        });
      case m.c:
        return Object.assign({}, c, {
          wait : false
        });
      case m.e:
        return Object.assign({}, c, {
          selectedIndex : data.index
        });
      default:
        return c;
    }
  };
  /** @type {function(): ?} */
  global.a = get;
}]);
