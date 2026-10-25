/* ==========================================================================
   SITE — you don't need to edit this file.
   Fills in the parts that come from your list in js/weeks.js:
   the week counter, the archive list, the phone list on the home page,
   and the previous / next links at the bottom of each week.
   ========================================================================== */
(function () {
  "use strict";
  var A = window.LIVING_ARCHIVE || { totalWeeks: 16, weeks: [] };
  var root = document.body.getAttribute("data-root") || "";
  var page = document.body.getAttribute("data-page");
  var weeks = A.weeks.filter(function (w) { return w.published !== false; }).sort(function (a, b) { return a.week - b.week; });
  var latest = weeks[weeks.length - 1];

  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function link(w) { return root + "weeks/" + w.slug + ".html"; }
  function $(id) { return document.getElementById(id); }

  // underline the current section in the top navigation
  document.querySelectorAll(".site-nav a[data-nav]").forEach(function (a) {
    if (a.getAttribute("data-nav") === page) a.setAttribute("aria-current", "page");
  });

  // looping videos: make sure they start (some browsers need a nudge);
  // visitors who prefer reduced motion get play controls instead
  var calm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("video[autoplay]").forEach(function (v) {
    v.muted = true;
    if (calm) { v.pause(); v.controls = true; return; }
    var pr = v.play(); if (pr && pr.catch) pr.catch(function () { v.controls = true; });
  });

  // footer year
  document.querySelectorAll(".year").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // home: WEEK 06 / 16 + hairline bar
  var prog = $("progress");
  if (prog) {
    var cur = latest ? latest.week : 0, bar = "";
    for (var i = 1; i <= A.totalWeeks; i++) bar += '<span class="' + (i < cur ? "done" : i === cur ? "now" : "") + '"></span>';
    prog.innerHTML =
      '<p class="meta">Week <span class="red">' + pad(cur) + "</span> / " + pad(A.totalWeeks) + "</p>" +
      '<div class="progress-bar" aria-hidden="true">' + bar + "</div>" +
      (latest ? '<a class="meta muted u" href="' + link(latest) + '">Latest — ' + esc(latest.title) + "</a>" : "");
  }

  // home (phones): simple list of entries
  var entries = $("entries-list");
  if (entries) {
    entries.innerHTML = weeks.slice().reverse().map(function (w) {
      return '<li><a href="' + link(w) + '"><span class="meta ' + (w === latest ? "red" : "muted") + '">W' + pad(w.week) + '</span><span class="t">' + esc(w.title) + "</span></a></li>";
    }).join("");
  }

  // archive page: newest first
  var list = $("archive-list");
  if (list) {
    var count = $("archive-count");
    if (count) count.textContent = "Index — " + pad(weeks.length) + " / " + pad(A.totalWeeks) + " weeks";
    list.innerHTML = weeks.slice().reverse().map(function (w) {
      return '<li><a href="' + link(w) + '">' +
        '<div class="wk"><span class="meta' + (w === latest ? " red" : "") + '">W' + pad(w.week) + '</span><span class="meta muted date-lg">' + esc(w.date) + "</span></div>" +
        '<div><span class="meta muted date-sm">' + esc(w.date) + "</span><h2>" + esc(w.title) + "</h2>" + (w.summary ? '<p class="sum">' + esc(w.summary) + "</p>" : "") + "</div>" +
        (w.cover ? '<div class="thumb"><img src="' + root + esc(w.cover) + '" alt="" loading="lazy"></div>' : "<div></div>") +
        "</a></li>";
    }).join("");
  }

  // week pages: previous / next
  var nav = $("week-nav");
  if (nav) {
    var n = parseInt(document.body.getAttribute("data-week"), 10);
    var idx = -1;
    weeks.forEach(function (w, k) { if (w.week === n) idx = k; });
    var prev = idx > 0 ? weeks[idx - 1] : null;
    var next = idx >= 0 && idx < weeks.length - 1 ? weeks[idx + 1] : null;
    nav.innerHTML =
      "<div>" + (prev ? '<a href="' + link(prev) + '"><span class="meta muted">← Previous week</span><span class="t">W' + pad(prev.week) + " " + esc(prev.title) + "</span></a>" : "") + "</div>" +
      '<div class="next">' + (next ? '<a href="' + link(next) + '"><span class="meta muted">Next week →</span><span class="t">W' + pad(next.week) + " " + esc(next.title) + "</span></a>" : "") + "</div>" +
      '<div class="index"><a class="meta muted u" href="' + root + 'archive.html">Archive index</a></div>';
  }
})();
