jQuery(document).ready(function ($) {
  $(".wrapper .blog-content img").addClass("img-center img-responsive"),
    $(".gform_button").addClass("btn btn-primary btn-block"),
    $(".gform_title").addClass("h2"),
    $("input").addClass("form-control"),
    $("textarea").addClass("form-control"),
    $(".gform_button").removeClass("form-control"),
    $(".gfield_checkbox").addClass("form-control"),
    $(".gfield_checkbox input").removeClass("form-control"),
    $(".validation_error").addClass("bs-callout bs-callout-danger h4"),
    $(".gform_confirmation_wrapper").addClass("bs-callout bs-callout-info h4"),
    $(".contact .gform_button").wrap(
      "<div class='col-md-offset-7 col-md-6 col-sm-offset-3 col-sm-9 gform_button_wrap'></div>"
    ),
    $(".planner .gform_button").wrap(
      "<div class='col-md-offset-7 col-md-5 col-sm-offset-7 col-sm-5 gform_button_wrap'></div>"
    ),
    $("#gform_wrapper_7 .gform_button").wrap(
      "<div class='col-md-offset-7 col-md-5 col-sm-offset-7 col-sm-5 gform_button_wrap'></div>"
    ),
    $(".gform_button_wrap").wrap("<div class='row btn-pull-up'></div>"),
    $(".back_to_top").click(function () {
      return $("html, body").animate({ scrollTop: 0 }, 600), !1;
    }),
    $(".img-thumb").hover(
      function () {
        $(this).find(".img-caption").fadeIn(700);
      },
      function () {
        $(this).find(".img-caption").fadeOut(700);
      }
    );
  var t = $(".container_masonry");
  t.imagesLoaded(function () {
    t.masonry({ itemSelector: ".item" });
  }),
    $("textarea").attr("rows", "5"),
    $("input,textarea").focus(function () {
      $(this).data("placeholder", $(this).attr("placeholder")),
        $(this).attr("placeholder", "");
    }),
    $("input,textarea").blur(function () {
      $(this).attr("placeholder", $(this).data("placeholder"));
    });
}),
  (function (t) {
    function o() {
      n.setAttribute("content", l), (s = !0);
    }
    function a() {
      n.setAttribute("content", c), (s = !1);
    }
    function e(e) {
      (u = e.accelerationIncludingGravity),
        (d = Math.abs(u.x)),
        (m = Math.abs(u.y)),
        (f = Math.abs(u.z)),
        !t.orientation &&
        (d > 7 || (((f > 6 && 8 > m) || (8 > f && m > 6)) && d > 5))
          ? s && a()
          : s || o();
    }
    if (
      /iPhone|iPad|iPod/.test(navigator.platform) &&
      navigator.userAgent.indexOf("AppleWebKit") > -1
    ) {
      var r = t.document;
      if (r.querySelector) {
        var n = r.querySelector("meta[name=viewport]"),
          i = n && n.getAttribute("content"),
          c = i + ",maximum-scale=1",
          l = i + ",maximum-scale=10",
          s = !0,
          d,
          m,
          f,
          u;
        n &&
          (t.addEventListener("orientationchange", o, !1),
          t.addEventListener("devicemotion", e, !1));
      }
    }
  })(this);
