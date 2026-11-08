"use strict";

function debounce(func, delay) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(context, args);
    }, delay);
  };
}
;
function fixVh() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}
fixVh();
window.addEventListener('resize', debounce(function () {
  fixVh();
}, 200));
;
function showOverlay() {
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
  requestAnimationFrame(function () {
    return overlay.classList.add("overlay--active");
  });
}
function hideOverlay() {
  var overlay = document.querySelector(".overlay");
  overlay.classList.remove("overlay--active");
  setTimeout(function () {
    return overlay.removeAttribute("style");
  }, 300);
}
function updateOverlayState() {
  if (isOpenSiteMenu || isOpenSearchMenu) {
    showOverlay();
  } else {
    hideOverlay();
  }
}
;
var burgerButton = document.querySelector(".burger-button");
var isOpenSiteMenu = false;
if (burgerButton) {
  var openSiteMenu = function openSiteMenu() {
    isOpenSiteMenu = true;
    updateOverlayState();
    if (isOpenSearchMenu) {
      closeSearchFromSiteMenu();
    }
    siteNavigation.style.display = "block";
    setTimeout(function () {
      siteNavigation.classList.add("site-header__site-navigation--active");
    }, 10);
  };
  var closeSiteMenu = function closeSiteMenu() {
    isOpenSiteMenu = false;
    updateOverlayState();
    siteNavigation.classList.remove("site-header__site-navigation--active");
    setTimeout(function () {
      siteNavigation.removeAttribute("style");
    }, 300);
  };
  var changeMenuView = function changeMenuView(width) {
    if (!width) {
      burgerButton.classList.remove("burger-button--active");
      siteNavigation.removeAttribute("style");
      closeSiteMenu(); // вызовет updateOverlayState()
    }
  };
  var closeSearchFromSiteMenu = function closeSearchFromSiteMenu() {
    console.log("Закрылся поиск из меню сайта");
    isOpenSearchMenu = false;
    searchInput.value = "";
    searchInput.blur();
    searchModal.classList.remove("search-window--active");
    openSearchButton.classList.remove("search-button--active");
    setTimeout(function () {
      searchModal.removeAttribute("style");
      // scrollController.enabledScroll(".fixed-block");

      resultsList.innerHTML = "";
    }, 300);
    window.removeEventListener("keydown", closeSearchWindow);
    searchModal.removeEventListener("click", closeSearchWindow);
  };
  var siteNavigation = document.querySelector(".site-header__site-navigation");
  var siteMenuWidth = window.matchMedia("(max-width: 768px)");
  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("burger-button--active");
    if (burgerButton.classList.contains("burger-button--active")) {
      openSiteMenu();
    } else {
      closeSiteMenu();
    }
  });
  siteMenuWidth.onchange = function (e) {
    changeMenuView(e.matches);
  };
}
;
var tableContents = document.querySelector(".table-of-contents");
if (tableContents) {
  var tableContentsButton = tableContents.querySelector(".table-of-contents__button");
  var tableContentsNavigation = tableContents.querySelector(".table-of-contents__navigation");
  tableContentsButton.addEventListener("click", function () {
    tableContentsButton.classList.toggle("table-of-contents__button--active");
    tableContentsNavigation.classList.toggle("table-of-contents__navigation--active");
  });
}
;
var dropdown = document.querySelector(".dropdown");
if (dropdown) {
  var openDropdown = function openDropdown() {
    dropdownButton.classList.toggle("dropdown__button--active");
    dropdownContent.classList.toggle("dropdown__content--active");
    dropdownButton.setAttribute("aria-expanded", "true");
    if (dropdownButton.classList.contains("dropdown__button--active")) {
      dropdownButton.setAttribute("aria-expanded", "false");
    }
  };
  var dropdownButton = dropdown.querySelector(".dropdown__button");
  var dropdownContent = dropdown.querySelector(".dropdown__content");
  dropdownButton.addEventListener("click", openDropdown);
}
;
var downloadPreviewForm = document.querySelector(".download-preview-form");
if (downloadPreviewForm) {
  var resetDownloadForm = function resetDownloadForm() {
    setTimeout(function () {
      isVideoId = false;
      quality = "undefined";
      downloadLink.removeAttribute("href");
      downloadPreviewForm.reset();
      downloadLink.removeEventListener("click", resetDownloadForm);
    }, 300);
  };
  var escapeHtml = function escapeHtml(html) {
    var escapeChars = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return html.replace(/[&<>"']/g, function (match) {
      return escapeChars[match];
    });
  };
  var videoId = document.querySelector("#id-video");
  var qualitySelector = document.querySelector("#quality-image");
  var downloadLink = document.querySelector(".download-preview-form__download-link");
  var isVideoId = false;
  var quality = "undefined";
  var link;
  downloadPreviewForm.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  });
  videoId.addEventListener("change", function () {
    videoId.value = escapeHtml(videoId.value);
    if (videoId.value.length > 0) {
      isVideoId = true;
    }
    if (isVideoId != false && quality != "undefined") {
      link = "https://i.ytimg.com/vi/".concat(videoId.value, "/").concat(quality, ".jpg");
      downloadLink.setAttribute("href", link);
      downloadLink.addEventListener("click", resetDownloadForm);
    }
  });
  qualitySelector.addEventListener("change", function () {
    quality = qualitySelector.value;
    if (isVideoId != false && quality != "undefined") {
      link = "https://i.ytimg.com/vi/".concat(videoId.value, "/").concat(quality, ".jpg");
      downloadLink.setAttribute("href", link);
      downloadLink.addEventListener("click", resetDownloadForm);
    }
  });
  ;
  ;
}
;
var yearContainer = document.querySelector(".site-footer__year");
if (yearContainer) {
  yearContainer.textContent = new Date().getFullYear();
}
;
/*!
  * Simple-Jekyll-Search
  * Copyright 2015-2020, Christian Fei
  * Licensed under the MIT License.
  */
!function () {
  "use strict";

  var f = {
    compile: function compile(r) {
      return i.template.replace(i.pattern, function (t, e) {
        var n = i.middleware(e, r[e], i.template);
        return void 0 !== n ? n : r[e] || t;
      });
    },
    setOptions: function setOptions(t) {
      i.pattern = t.pattern || i.pattern, i.template = t.template || i.template, "function" == typeof t.middleware && (i.middleware = t.middleware);
    }
  };
  var i = {
    pattern: /\{(.*?)\}/g,
    template: "",
    middleware: function middleware() {}
  };
  var n = function n(t, e) {
      var n = e.length,
        r = t.length;
      if (n < r) return !1;
      if (r === n) return t === e;
      t: for (var i = 0, o = 0; i < r; i++) {
        for (var u = t.charCodeAt(i); o < n;) if (e.charCodeAt(o++) === u) continue t;
        return !1;
      }
      return !0;
    },
    e = new function () {
      this.matches = function (t, e) {
        return n(e.toLowerCase(), t.toLowerCase());
      };
    }(),
    r = new function () {
      this.matches = function (e, t) {
        return !!e && (e = e.trim().toLowerCase(), (t = t.trim().toLowerCase()).split(" ").filter(function (t) {
          return 0 <= e.indexOf(t);
        }).length === t.split(" ").length);
      };
    }(),
    d = {
      put: function put(t) {
        if (l(t)) return a(t);
        if (function (t) {
          return Boolean(t) && "[object Array]" === Object.prototype.toString.call(t);
        }(t)) return function (n) {
          var r = [];
          s();
          for (var _t = 0, _e = n.length; _t < _e; _t++) l(n[_t]) && r.push(a(n[_t]));
          return r;
        }(t);
        return undefined;
      },
      clear: s,
      search: function search(t) {
        return t ? function (e, n, r, i) {
          var o = [];
          for (var _t2 = 0; _t2 < e.length && o.length < i.limit; _t2++) {
            var u = function (t, e, n, r) {
              for (var _i in t) if (!function (n, r) {
                for (var _t3 = 0, _e2 = r.length; _t3 < _e2; _t3++) {
                  var i = r[_t3];
                  if (new RegExp(i).test(n)) return !0;
                }
                return !1;
              }(t[_i], r.exclude) && n.matches(t[_i], e)) return t;
            }(e[_t2], n, r, i);
            u && o.push(u);
          }
          return o;
        }(u, t, c.searchStrategy, c).sort(c.sort) : [];
      },
      setOptions: function setOptions(t) {
        c = t || {}, c.fuzzy = t.fuzzy || !1, c.limit = t.limit || 10, c.searchStrategy = t.fuzzy ? e : r, c.sort = t.sort || o, c.exclude = t.exclude || [];
      }
    };
  function o() {
    return 0;
  }
  var u = [];
  var c = {};
  function s() {
    return u.length = 0, u;
  }
  function l(t) {
    return Boolean(t) && "[object Object]" === Object.prototype.toString.call(t);
  }
  function a(t) {
    return u.push(t), u;
  }
  c.fuzzy = !1, c.limit = 10, c.searchStrategy = c.fuzzy ? e : r, c.sort = o, c.exclude = [];
  var p = {
    load: function load(t, e) {
      var n = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      n.open("GET", t, !0), n.onreadystatechange = h(n, e), n.send();
    }
  };
  function h(e, n) {
    return function () {
      if (4 === e.readyState && 200 === e.status) try {
        n(null, JSON.parse(e.responseText));
      } catch (t) {
        n(t, null);
      }
    };
  }
  var m = function y(t) {
      if (!(e = t) || !("undefined" != typeof e.required && e.required instanceof Array)) throw new Error("-- OptionsValidator: required options missing");
      var e;
      if (!(this instanceof y)) return new y(t);
      var r = t.required;
      this.getRequiredOptions = function () {
        return r;
      }, this.validate = function (e) {
        var n = [];
        return r.forEach(function (t) {
          "undefined" == typeof e[t] && n.push(t);
        }), n;
      };
    },
    w = {
      merge: function merge(t, e) {
        var n = {};
        for (var _r in t) n[_r] = t[_r], "undefined" != typeof e[_r] && (n[_r] = e[_r]);
        return n;
      },
      isJSON: function isJSON(t) {
        try {
          return t instanceof Object && JSON.parse(JSON.stringify(t)) ? !0 : !1;
        } catch (e) {
          return !1;
        }
      }
    };
  !function (t) {
    var i = {
        searchInput: null,
        resultsContainer: null,
        json: [],
        success: Function.prototype,
        searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
        templateMiddleware: Function.prototype,
        sortMiddleware: function sortMiddleware() {
          return 0;
        },
        noResultsText: "No results found",
        limit: 10,
        fuzzy: !1,
        debounceTime: null,
        exclude: []
      },
      n;
    var e = function e(t, _e3) {
      _e3 ? (clearTimeout(n), n = setTimeout(t, _e3)) : t.call();
    };
    var r = ["searchInput", "resultsContainer", "json"];
    var o = m({
      required: r
    });
    function u(t) {
      d.put(t), i.searchInput.addEventListener("input", function (t) {
        -1 === [13, 16, 20, 37, 38, 39, 40, 91].indexOf(t.which) && (c(), e(function () {
          l(t.target.value);
        }, i.debounceTime));
      });
    }
    function c() {
      i.resultsContainer.innerHTML = "";
    }
    function s(t) {
      i.resultsContainer.innerHTML += t;
    }
    function l(t) {
      var e;
      (e = t) && 0 < e.length && (c(), function (e, n) {
        var r = e.length;
        if (0 === r) return s(i.noResultsText);
        for (var _t4 = 0; _t4 < r; _t4++) e[_t4].query = n, s(f.compile(e[_t4]));
      }(d.search(t), t));
    }
    function a(t) {
      throw new Error("SimpleJekyllSearch --- " + t);
    }
    t.SimpleJekyllSearch = function (t) {
      var n;
      0 < o.validate(t).length && a("You must specify the following required options: " + r), i = w.merge(i, t), f.setOptions({
        template: i.searchResultTemplate,
        middleware: i.templateMiddleware
      }), d.setOptions({
        fuzzy: i.fuzzy,
        limit: i.limit,
        sort: i.sortMiddleware,
        exclude: i.exclude
      }), w.isJSON(i.json) ? u(i.json) : (n = i.json, p.load(n, function (t, e) {
        t && a("failed to get JSON (" + n + ")"), u(e);
      }));
      t = {
        search: l
      };
      return "function" == typeof i.success && i.success.call(t), t;
    };
  }(window);
}();
;
var sjs = SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.querySelector('.search-window__results'),
  json: '/search.json',
  // поменять после теста
  searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
  noResultsText: '<li class="search-window__not-found">Ничего не найдено 🙁</li>',
  templateMiddleware: function templateMiddleware(prop, value) {
    if (prop === 'url') {
      // запретим javascript:/data:
      if (/^(javascript:|data:)/i.test(value)) {
        return '#';
      }
    }
    return escapeHTML(value);
  }
});
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, function (m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m];
  });
}
var searchModal = document.querySelector(".search-window");
var searchForm = searchModal.querySelector(".search-window__form");
var openSearchButton = document.querySelector(".search-button");
var closeModalButton = searchModal.querySelector(".search-window__close-button");
var searchInput = searchModal.querySelector(".search-window__input");
var resultsList = searchModal.querySelector(".search-window__results");
var clearFormButton = searchModal.querySelector(".search-window__clear-button");
var isOpenSearchMenu = false;
openSearchButton.addEventListener("click", function () {
  openSearchButton.classList.toggle("search-button--active");
  if (openSearchButton.classList.contains("search-button--active")) {
    openSearchWindow();
  } else {
    closeSearchWindow();
  }
});
searchForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Отключаем отправку формы
  return false;
});
searchInput.addEventListener("input", function () {
  if (searchInput.value.length > 0) {
    clearFormButton.classList.add("search-window__clear-button--active");
  } else {
    clearFormButton.classList.remove("search-window__clear-button--active");
  }
});
clearFormButton.addEventListener("click", function () {
  searchInput.value = "";
  resultsList.innerHTML = "";
  clearFormButton.classList.remove("search-window__clear-button--active");
});
function openSearchWindow() {
  isOpenSearchMenu = true;
  updateOverlayState();
  if (isOpenSiteMenu) {
    closeSiteMenuFromSearch();
  }
  searchModal.style.display = "block";
  searchInput.focus();
  setTimeout(function () {
    searchModal.classList.add("search-window--active");
  }, 10);
  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27 && searchModal.classList.contains("search-window--active")) {
      closeSearchWindow();
    }
    if (e.keyCode === 9 && searchModal.classList.contains("search-window--active")) {
      return;
    }
  });
  searchModal.addEventListener("click", function (e) {
    if (!e.target === searchModal && searchModal.classList.contains("search-window--active") || e.target === searchModal || e.target === closeModalButton) {
      closeSearchWindow();
    }
  });
}
function closeSearchWindow() {
  isOpenSearchMenu = false;
  updateOverlayState();
  searchInput.value = "";
  searchInput.blur();
  searchModal.classList.remove("search-window--active");
  openSearchButton.classList.remove("search-button--active");
  setTimeout(function () {
    searchModal.removeAttribute("style");
    // scrollController.enabledScroll(".fixed-block");
    resultsList.innerHTML = "";
  }, 300);
  window.removeEventListener("keydown", closeSearchWindow);
  searchModal.removeEventListener("click", closeSearchWindow);
}
function closeSiteMenuFromSearch() {
  console.log("Закрылось меню сайта из поиска");
  isOpenSiteMenu = false;
  document.querySelector(".burger-button").classList.remove("burger-button--active");
  document.querySelector(".site-header__site-navigation").classList.remove("site-header__site-navigation--active");
  setTimeout(function () {
    document.querySelector(".site-header__site-navigation").removeAttribute("style");
  }, 300);
}
;