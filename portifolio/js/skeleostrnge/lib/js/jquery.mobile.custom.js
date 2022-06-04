!(function (t, e, n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (o) {
        return n(o, t, e), o.mobile;
      })
    : n(t.jQuery, t, e);
})(this, document, function (t, e, n, o) {
  !(function (t, e, n, o) {
    function i(t) {
      for (; t && "undefined" != typeof t.originalEvent; ) t = t.originalEvent;
      return t;
    }
    function r(e, n) {
      var r = e.type,
        s,
        a,
        c,
        u,
        l,
        h,
        p,
        d,
        v;
      if (
        ((e = t.Event(e)),
        (e.type = n),
        (s = e.originalEvent),
        (a = t.event.props),
        r.search(/^(mouse|click)/) > -1 && (a = P),
        s)
      )
        for (p = a.length, u; p; ) (u = a[--p]), (e[u] = s[u]);
      if (
        (r.search(/mouse(down|up)|click/) > -1 && !e.which && (e.which = 1),
        -1 !== r.search(/^touch/) &&
          ((c = i(s)),
          (r = c.touches),
          (l = c.changedTouches),
          (h = r && r.length ? r[0] : l && l.length ? l[0] : o),
          h))
      )
        for (d = 0, v = Y.length; v > d; d++) (u = Y[d]), (e[u] = h[u]);
      return e;
    }
    function s(e) {
      for (var n = {}, o, i; e; ) {
        o = t.data(e, E);
        for (i in o) o[i] && (n[i] = n.hasVirtualBinding = !0);
        e = e.parentNode;
      }
      return n;
    }
    function a(e, n) {
      for (var o; e; ) {
        if (((o = t.data(e, E)), o && (!n || o[n]))) return e;
        e = e.parentNode;
      }
      return null;
    }
    function c() {
      F = !1;
    }
    function u() {
      F = !0;
    }
    function l() {
      (q = 0), (j.length = 0), (z = !1), u();
    }
    function h() {
      c();
    }
    function p() {
      d(),
        (I = setTimeout(function () {
          (I = 0), l();
        }, t.vmouse.resetTimerDuration));
    }
    function d() {
      I && (clearTimeout(I), (I = 0));
    }
    function v(e, n, o) {
      var i;
      return (
        ((o && o[e]) || (!o && a(n.target, e))) &&
          ((i = r(n, e)), t(n.target).trigger(i)),
        i
      );
    }
    function f(e) {
      var n = t.data(e.target, k);
      if (!(z || (q && q === n))) {
        var o = v("v" + e.type, e);
        o &&
          (o.isDefaultPrevented() && e.preventDefault(),
          o.isPropagationStopped() && e.stopPropagation(),
          o.isImmediatePropagationStopped() && e.stopImmediatePropagation());
      }
    }
    function m(e) {
      var n = i(e).touches,
        o,
        r;
      if (
        n &&
        1 === n.length &&
        ((o = e.target), (r = s(o)), r.hasVirtualBinding)
      ) {
        (q = V++), t.data(o, k, q), d(), h(), (N = !1);
        var a = i(e).touches[0];
        (x = a.pageX),
          (B = a.pageY),
          v("vmouseover", e, r),
          v("vmousedown", e, r);
      }
    }
    function g(t) {
      F || (N || v("vmousecancel", t, s(t.target)), (N = !0), p());
    }
    function b(e) {
      if (!F) {
        var n = i(e).touches[0],
          o = N,
          r = t.vmouse.moveDistanceThreshold,
          a = s(e.target);
        (N = N || Math.abs(n.pageX - x) > r || Math.abs(n.pageY - B) > r),
          N && !o && v("vmousecancel", e, a),
          v("vmousemove", e, a),
          p();
      }
    }
    function w(t) {
      if (!F) {
        u();
        var e = s(t.target),
          n;
        if ((v("vmouseup", t, e), !N)) {
          var o = v("vclick", t, e);
          o &&
            o.isDefaultPrevented() &&
            ((n = i(t).changedTouches[0]),
            j.push({ touchID: q, x: n.clientX, y: n.clientY }),
            (z = !0));
        }
        v("vmouseout", t, e), (N = !1), p();
      }
    }
    function T(e) {
      var n = t.data(e, E),
        o;
      if (n) for (o in n) if (n[o]) return !0;
      return !1;
    }
    function D() {}
    function y(e) {
      var n = e.substr(1);
      return {
        setup: function (o, i) {
          T(this) || t.data(this, E, {});
          var r = t.data(this, E);
          (r[e] = !0),
            (S[e] = (S[e] || 0) + 1),
            1 === S[e] && L.bind(n, f),
            t(this).bind(n, D),
            H &&
              ((S.touchstart = (S.touchstart || 0) + 1),
              1 === S.touchstart &&
                L.bind("touchstart", m)
                  .bind("touchend", w)
                  .bind("touchmove", b)
                  .bind("scroll", g));
        },
        teardown: function (o, i) {
          --S[e],
            S[e] || L.unbind(n, f),
            H &&
              (--S.touchstart,
              S.touchstart ||
                L.unbind("touchstart", m)
                  .unbind("touchmove", b)
                  .unbind("touchend", w)
                  .unbind("scroll", g));
          var r = t(this),
            s = t.data(this, E);
          s && (s[e] = !1), r.unbind(n, D), T(this) || r.removeData(E);
        },
      };
    }
    var E = "virtualMouseBindings",
      k = "virtualTouchID",
      X =
        "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(
          " "
        ),
      Y = "clientX clientY pageX pageY screenX screenY".split(" "),
      M = t.event.mouseHooks ? t.event.mouseHooks.props : [],
      P = t.event.props.concat(M),
      S = {},
      I = 0,
      x = 0,
      B = 0,
      N = !1,
      j = [],
      z = !1,
      F = !1,
      H = "addEventListener" in n,
      L = t(n),
      V = 1,
      q = 0,
      Q;
    t.vmouse = {
      moveDistanceThreshold: 10,
      clickDistanceThreshold: 10,
      resetTimerDuration: 1500,
    };
    for (var A = 0; A < X.length; A++) t.event.special[X[A]] = y(X[A]);
    H &&
      n.addEventListener(
        "click",
        function (e) {
          var n = j.length,
            o = e.target,
            i,
            r,
            s,
            a,
            c,
            u;
          if (n)
            for (
              i = e.clientX,
                r = e.clientY,
                Q = t.vmouse.clickDistanceThreshold,
                s = o;
              s;

            ) {
              for (a = 0; n > a; a++)
                if (
                  ((c = j[a]),
                  (u = 0),
                  (s === o && Math.abs(c.x - i) < Q && Math.abs(c.y - r) < Q) ||
                    t.data(s, k) === c.touchID)
                )
                  return e.preventDefault(), void e.stopPropagation();
              s = s.parentNode;
            }
        },
        !0
      );
  })(t, e, n),
    (function (t) {
      t.mobile = {};
    })(t),
    (function (t, e) {
      var o = { touch: "ontouchend" in n };
      (t.mobile.support = t.mobile.support || {}),
        t.extend(t.support, o),
        t.extend(t.mobile.support, o);
    })(t),
    (function (t, e, o) {
      function i(e, n, o) {
        var i = o.type;
        (o.type = n), t.event.dispatch.call(e, o), (o.type = i);
      }
      var r = t(n);
      t.each(
        "touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(
          " "
        ),
        function (e, n) {
          (t.fn[n] = function (t) {
            return t ? this.bind(n, t) : this.trigger(n);
          }),
            t.attrFn && (t.attrFn[n] = !0);
        }
      );
      var s = t.mobile.support.touch,
        a = "touchmove scroll",
        c = s ? "touchstart" : "mousedown",
        u = s ? "touchend" : "mouseup",
        l = s ? "touchmove" : "mousemove";
      (t.event.special.scrollstart = {
        enabled: !0,
        setup: function () {
          function e(t, e) {
            (r = e), i(n, r ? "scrollstart" : "scrollstop", t);
          }
          var n = this,
            o = t(n),
            r,
            s;
          o.bind(a, function (n) {
            t.event.special.scrollstart.enabled &&
              (r || e(n, !0),
              clearTimeout(s),
              (s = setTimeout(function () {
                e(n, !1);
              }, 50)));
          });
        },
      }),
        (t.event.special.tap = {
          tapholdThreshold: 750,
          setup: function () {
            var e = this,
              n = t(e);
            n.bind("vmousedown", function (o) {
              function s() {
                clearTimeout(h);
              }
              function a() {
                s(),
                  n.unbind("vclick", c).unbind("vmouseup", s),
                  r.unbind("vmousecancel", a);
              }
              function c(t) {
                a(), u === t.target && i(e, "tap", t);
              }
              if (o.which && 1 !== o.which) return !1;
              var u = o.target,
                l = o.originalEvent,
                h;
              n.bind("vmouseup", s).bind("vclick", c),
                r.bind("vmousecancel", a),
                (h = setTimeout(function () {
                  i(e, "taphold", t.Event("taphold", { target: u }));
                }, t.event.special.tap.tapholdThreshold));
            });
          },
        }),
        (t.event.special.swipe = {
          scrollSupressionThreshold: 30,
          durationThreshold: 1e3,
          horizontalDistanceThreshold: 30,
          verticalDistanceThreshold: 75,
          start: function (e) {
            var n = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
            return {
              time: new Date().getTime(),
              coords: [n.pageX, n.pageY],
              origin: t(e.target),
            };
          },
          stop: function (t) {
            var e = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
            return { time: new Date().getTime(), coords: [e.pageX, e.pageY] };
          },
          handleSwipe: function (e, n) {
            n.time - e.time < t.event.special.swipe.durationThreshold &&
              Math.abs(e.coords[0] - n.coords[0]) >
                t.event.special.swipe.horizontalDistanceThreshold &&
              Math.abs(e.coords[1] - n.coords[1]) <
                t.event.special.swipe.verticalDistanceThreshold &&
              e.origin
                .trigger("swipe")
                .trigger(
                  e.coords[0] > n.coords[0] ? "swipeleft" : "swiperight"
                );
          },
          setup: function () {
            var e = this,
              n = t(e);
            n.bind(c, function (e) {
              function i(e) {
                r &&
                  ((s = t.event.special.swipe.stop(e)),
                  Math.abs(r.coords[0] - s.coords[0]) >
                    t.event.special.swipe.scrollSupressionThreshold &&
                    e.preventDefault());
              }
              var r = t.event.special.swipe.start(e),
                s;
              n.bind(l, i).one(u, function () {
                n.unbind(l, i),
                  r && s && t.event.special.swipe.handleSwipe(r, s),
                  (r = s = o);
              });
            });
          },
        }),
        t.each(
          {
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe",
            swiperight: "swipe",
          },
          function (e, n) {
            t.event.special[e] = {
              setup: function () {
                t(this).bind(n, t.noop);
              },
            };
          }
        );
    })(t, this);
});
