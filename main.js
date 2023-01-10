// <!-- scroll mouse to element -->
(function (e) {
  e.fn.visible = function (t, n, r) {
    var i = e(this).eq(0),
      s = i.get(0),
      o = e(window),
      u = o.scrollTop(),
      a = u + o.height(),
      f = o.scrollLeft(),
      l = f + o.width(),
      c = i.offset().top,
      h = c + i.height(),
      p = i.offset().left,
      d = p + i.width(),
      v = t === true ? h : c,
      m = t === true ? c : h,
      g = t === true ? d : p,
      y = t === true ? p : d,
      b = n === true ? s.offsetWidth * s.offsetHeight : true,
      r = r ? r : "both";
    if (r === "both") return !!b && m <= a && v >= u && y <= l && g >= f;
    else if (r === "vertical") return !!b && m <= a && v >= u;
    else if (r === "horizontal") return !!b && y <= l && g >= f;
  };
})(jQuery);

jQuery(window).scroll(function (event) {
  // event 1
  jQuery(".blog-container-image").each(function (i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("animate__fadeInUp");
    }
  });

  jQuery(".site-branding-title").each(function (i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("animate__fadeIn");
    } else {
      el.removeClass("animate__fadeIn");
    }
  });
});

// owlCarousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});
