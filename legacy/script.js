/* ==========================================================================
   THE HIMALAYAN RAMBLE — shared behavior
   Nav (desktop dropdown/flyout + mobile accordion), scroll reveal,
   contact form validation, footer year, active-link marking.
   ========================================================================== */
(function () {
  "use strict";

  // Progressive-enhancement flag — CSS only hides [data-reveal] content
  // when this class is present, so a JS failure never hides real content.
  document.documentElement.classList.add("js");

  document.addEventListener("DOMContentLoaded", function () {
    initFooterYear();
    initActiveNav();
    initDesktopDropdown();
    initMobileNav();
    initScrollReveal();
    initContactForm();
    initHeaderScroll();
    initDestinationPrefill();
    initTopographyBackground();
  });

  /* ---------------------------------------------------------------------
     Footer year
     --------------------------------------------------------------------- */
  function initFooterYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------------------------------------------------------------------
     Mark the current page's nav link as aria-current
     --------------------------------------------------------------------- */
  function initActiveNav() {
    var path = window.location.pathname.replace(/\/index\.html$/, "/");
    document.querySelectorAll("a[data-nav-link]").forEach(function (link) {
      var linkPath = link.pathname.replace(/\/index\.html$/, "/");
      if (linkPath === path) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* ---------------------------------------------------------------------
     Desktop "Blog" dropdown + "Himachal Pradesh" flyout
     Click-to-toggle (keyboard + touch safe) with outside-click / Escape
     to close. Works alongside the mobile accordion below, which is a
     separate DOM tree only shown under 900px.
     --------------------------------------------------------------------- */
  function initDesktopDropdown() {
    var host = document.querySelector("[data-dropdown-host]");
    if (!host) return;
    var toggle = host.querySelector("[data-dropdown-toggle]");
    var panel = host.querySelector("[data-dropdown-panel]");
    if (!toggle || !panel) return;

    function close() {
      host.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      closeAllRows();
    }
    function open() {
      host.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }
    function closeAllRows() {
      panel.querySelectorAll(".dropdown-row.is-open").forEach(function (row) {
        row.classList.remove("is-open");
        var btn = row.querySelector("button");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (host.classList.contains("is-open")) {
        close();
      } else {
        open();
      }
    });

    // Hover intent for mouse users: open on approach, close only after the
    // pointer has left both the trigger and the panel (they aren't visually
    // adjacent, since the panel is centered under the whole header).
    if (window.matchMedia("(hover: hover)").matches) {
      var closeTimer = null;
      var cancelClose = function () {
        clearTimeout(closeTimer);
      };
      var scheduleClose = function () {
        cancelClose();
        closeTimer = setTimeout(close, 260);
      };
      host.addEventListener("mouseenter", function () {
        cancelClose();
        open();
      });
      host.addEventListener("mouseleave", scheduleClose);
      panel.addEventListener("mouseenter", cancelClose);
      panel.addEventListener("mouseleave", scheduleClose);
    }

    panel.querySelectorAll(".dropdown-row").forEach(function (row) {
      var rowBtn = row.querySelector("button");
      if (!rowBtn) return;
      rowBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        var wasOpen = row.classList.contains("is-open");
        closeAllRows();
        if (!wasOpen) {
          row.classList.add("is-open");
          rowBtn.setAttribute("aria-expanded", "true");
        }
      });
      // Hover intent for mouse users, without breaking touch/keyboard
      row.addEventListener("mouseenter", function () {
        if (window.matchMedia("(hover: hover)").matches) {
          closeAllRows();
          row.classList.add("is-open");
          rowBtn.setAttribute("aria-expanded", "true");
        }
      });
    });

    document.addEventListener("click", function (e) {
      if (!host.contains(e.target)) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        close();
        toggle.focus();
      }
    });
  }

  /* ---------------------------------------------------------------------
     Mobile full-screen nav with accordion regions
     --------------------------------------------------------------------- */
  function initMobileNav() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var nav = document.querySelector("[data-mobile-nav]");
    if (!toggle || !nav) return;

    function closeMenu() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    function openMenu() {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    toggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) closeMenu();
      else openMenu();
    });

    nav.querySelectorAll("[data-accordion-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var targetId = btn.getAttribute("aria-controls");
        var target = document.getElementById(targetId);
        var isOpen = btn.classList.contains("is-open");
        btn.classList.toggle("is-open", !isOpen);
        btn.setAttribute("aria-expanded", String(!isOpen));
        if (target) target.classList.toggle("is-open", !isOpen);
      });
    });

    // Close mobile nav automatically if resized past the mobile breakpoint
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) closeMenu();
    });

    // Close on link click
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  /* ---------------------------------------------------------------------
     Header scroll behavior — solid past the hero, hides on scroll down,
     reappears on scroll up. Never hides while a dropdown or the mobile
     nav is open, so nothing goes orphaned mid-interaction.
     --------------------------------------------------------------------- */
  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var SCROLLED_AT = 40;
    var HIDE_AFTER = 120;
    var lastY = window.scrollY;
    var ticking = false;

    function update() {
      var y = window.scrollY;
      header.classList.toggle("site-header--scrolled", y > SCROLLED_AT);

      var dropdownOpen = document.querySelector(".has-dropdown.is-open");
      var mobileNavOpen = document.querySelector("[data-mobile-nav].is-open");

      if (!dropdownOpen && !mobileNavOpen) {
        if (y > lastY && y > HIDE_AFTER) {
          header.classList.add("is-hidden");
        } else {
          header.classList.remove("is-hidden");
        }
      }
      lastY = y;
      ticking = false;
    }

    update();
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ---------------------------------------------------------------------
     Scroll reveal — IntersectionObserver, staggered within a shared
     [data-reveal-group], instant fallback if IO isn't available.
     --------------------------------------------------------------------- */
  function initScrollReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var groups = {};
    items.forEach(function (el) {
      var g = el.getAttribute("data-reveal-group") || "default";
      groups[g] = groups[g] || [];
      groups[g].push(el);
    });

    var io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var group = groups[el.getAttribute("data-reveal-group") || "default"];
          var index = group.indexOf(el);
          var delay = Math.min(index * 70, 420);
          setTimeout(function () { el.classList.add("is-visible"); }, delay);
          obs.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------------------
     Contact form — client-side validation + visible success state.
     No backend is wired yet: submission stops at validation and shows
     a success panel. Swap the TODO block below for a real integration
     (e.g. Formspree/EmailJS) when ready — see the comment inline.
     --------------------------------------------------------------------- */
  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;
    var success = document.querySelector("[data-form-success]");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      form.querySelectorAll("[data-required]").forEach(function (field) {
        var wrapper = field.closest(".field");
        var value = field.value.trim();
        var ok = value.length > 0;

        if (ok && field.type === "email") {
          ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        }
        if (ok && field.hasAttribute("data-phone")) {
          ok = /^[0-9+\-\s()]{7,15}$/.test(value);
        }

        if (wrapper) wrapper.classList.toggle("has-error", !ok);
        if (!ok) valid = false;
      });

      if (!valid) {
        var firstError = form.querySelector(".has-error input, .has-error select, .has-error textarea");
        if (firstError) firstError.focus();
        return;
      }

      // TODO: replace this block with a real submission, e.g.:
      // fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { Accept: "application/json" },
      //   body: new FormData(form),
      // });
      form.classList.add("is-submitted");
      if (success) {
        success.classList.add("is-visible");
        success.setAttribute("tabindex", "-1");
        success.focus();
      }
    });

    form.querySelectorAll("[data-required]").forEach(function (field) {
      field.addEventListener("input", function () {
        var wrapper = field.closest(".field");
        if (wrapper) wrapper.classList.remove("has-error");
      });
    });
  }

  /* ---------------------------------------------------------------------
     Pre-fill the destination <select> on the contact page from a
     ?destination= query param, used by "Plan Your [Place] Trip" CTAs.
     --------------------------------------------------------------------- */
  function initDestinationPrefill() {
    var select = document.querySelector("[data-destination-select]");
    if (!select) return;
    var params = new URLSearchParams(window.location.search);
    var wanted = params.get("destination");
    if (!wanted) return;
    var match = Array.prototype.find.call(select.options, function (opt) {
      return opt.value.toLowerCase() === wanted.toLowerCase();
    });
    if (match) select.value = match.value;
  }

  /* ---------------------------------------------------------------------
     Topography background — animated contour-line terrain behind every
     CTA band. Ported from reactbits.dev's "Topography" component (WebGL2
     + GLSL, originally built on the `ogl` library) to raw WebGL2 with no
     external dependency, no React, no build step — the shader itself is
     unchanged, only the mount/render harness is rewritten. Skips entirely
     under prefers-reduced-motion or if WebGL2 isn't available; the flat
     --ink background underneath is the fallback either way.
     --------------------------------------------------------------------- */
  function initTopographyBackground() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var sections = document.querySelectorAll(".cta-band");
    if (!sections.length) return;

    sections.forEach(function (section) {
      var bg = document.createElement("div");
      bg.className = "cta-band__bg";
      bg.setAttribute("aria-hidden", "true");
      section.insertBefore(bg, section.firstChild);
      mountTopography(bg, section);
    });
  }

  function mountTopography(container, eventTarget) {
    var canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    var gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: true
    });
    if (!gl) return;

    var vertexSrc =
      "#version 300 es\n" +
      "in vec2 position;\n" +
      "void main() {\n" +
      "  gl_Position = vec4(position, 0.0, 1.0);\n" +
      "}\n";

    var fragmentSrc = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uMorphAmount;
uniform float uBands;
uniform float uThickness;
uniform float uScale;
uniform float uPixelSize;
uniform float uGlow;
uniform float uColorMode;
uniform float uContrast;
uniform float uBrightness;
uniform float uFillBands;
uniform float uOpacity;
uniform vec3 uLow;
uniform vec3 uMid;
uniform vec3 uHigh;
uniform vec2 uMouse;
uniform float uMouseEnabled;
uniform float uMouseRadius;
uniform float uMouseStrength;
uniform float uMouseActive;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec4 uCtrlA;
uniform vec4 uCtrlB;
uniform vec4 uCtrlC;
uniform vec4 uCtrlD;
out vec4 fragColor;

float bez(float t, vec4 c) {
  float w = 6.2831853 * t;
  return 0.5 * (c.x * sin(w) + c.y * cos(w) + c.z * sin(2.0 * w) + c.w * cos(2.0 * w));
}

float field(vec2 uv) {
  vec2 a = vec2(bez(uv.x, uCtrlA), bez(uv.x, uCtrlB));
  vec2 b = vec2(bez(uv.y, uCtrlC), bez(uv.y, uCtrlD));
  return distance(a, b);
}

vec3 elevationColor(float e) {
  vec3 c = mix(uLow, uMid, smoothstep(0.0, 0.5, e));
  c = mix(c, uHigh, smoothstep(0.5, 1.0, e));
  return c;
}

void main() {
  vec2 res = iResolution.xy;
  vec2 uv = gl_FragCoord.xy / res;

  vec2 suv = (uv - 0.5) / max(uScale, 0.001) + 0.5;

  vec2 sampleUv = suv;
  if (uPixelSize > 1.0) {
    vec2 px = res / uPixelSize;
    sampleUv = (floor(suv * px) + 0.5) / px;
  }

  float fv = field(sampleUv);

  if (uMouseEnabled > 0.5) {
    vec2 d = uv - uMouse;
    d.x *= res.x / max(res.y, 1.0);
    float r = max(uMouseRadius, 0.001);
    float bump = exp(-dot(d, d) / (r * r)) * uMouseStrength * uMouseActive;
    fv += bump;
  }

  float f = fv * uBands;
  float frac = fract(f);
  float lineDist = min(frac, 1.0 - frac);

  float aa = fwidth(f) + 0.0001;
  float mask = 1.0 - smoothstep(uThickness - aa, uThickness + aa, lineDist);

  float glowR = uThickness + uGlow * 0.5 + aa;
  float glow = (1.0 - smoothstep(uThickness, glowR, lineDist)) * step(0.0001, uGlow);

  float elev = clamp(fv / (uMorphAmount * 2.5 + 0.001), 0.0, 1.0);

  vec3 lineCol;
  if (uColorMode < 0.5) {
    lineCol = elevationColor(elev);
  } else if (uColorMode < 1.5) {
    lineCol = uMid;
  } else {
    float parity = mod(floor(f), 2.0);
    lineCol = mix(uMid, uHigh, parity);
  }

  float coverage = clamp(mask + glow * 0.55, 0.0, 1.0);
  coverage = pow(coverage, max(uContrast, 0.001));

  vec3 outColor = lineCol;
  float outAlpha = coverage;

  if (uFillBands > 0.5) {
    vec3 fillCol = elevationColor(elev);
    float fillA = 0.1 * elev;
    outColor = mix(fillCol, lineCol, coverage);
    outAlpha = clamp(coverage + fillA, 0.0, 1.0);
  }

  if (uGrain > 0.5) {
    float g = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + iTime) * 43758.5453);
    outAlpha += (g - 0.5) * uGrainIntensity;
  }

  outColor *= uBrightness;
  outColor = clamp(outColor, 0.0, 1.0);

  float a = clamp(outAlpha, 0.0, 1.0) * uOpacity;
  fragColor = vec4(outColor * a, a);
}
`;

    function compile(type, src) {
      var shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    var vs = compile(gl.VERTEX_SHADER, vertexSrc);
    var fs = compile(gl.FRAGMENT_SHADER, fragmentSrc);
    if (!vs || !fs) return;

    var program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    // Full-screen triangle — covers the viewport with a single triangle
    // (the standard no-quad trick), clipped by the GPU automatically.
    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    var positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    var uniformNames = [
      "iTime", "iResolution", "uMorphAmount", "uBands", "uThickness", "uScale",
      "uPixelSize", "uGlow", "uColorMode", "uContrast", "uBrightness", "uFillBands",
      "uOpacity", "uLow", "uMid", "uHigh", "uMouse", "uMouseEnabled", "uMouseRadius",
      "uMouseStrength", "uMouseActive", "uGrain", "uGrainIntensity",
      "uCtrlA", "uCtrlB", "uCtrlC", "uCtrlD"
    ];
    var u = {};
    uniformNames.forEach(function (name) {
      u[name] = gl.getUniformLocation(program, name);
    });

    function hexToRgb(hex) {
      var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!m) return [1, 1, 1];
      return [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255];
    }

    // Brand-tuned config — glacier navy rising through mid-blue to a
    // sunrise-orange "peak" color, subtle enough to sit behind headline
    // type. Fixed at mount time; nothing here needs to react to props.
    var cfg = {
      low: hexToRgb("#010d1d"),
      mid: hexToRgb("#2d669e"),
      high: hexToRgb("#e8611a"),
      speed: 0.3,
      morphAmount: 1.8,
      morphSpeed: 0.05,
      bands: 7.0,
      thickness: 0.02,
      scale: 1.3,
      glow: 0.3,
      contrast: 3.0,
      brightness: 0.85,
      opacity: 0.55,
      grainIntensity: 0.05,
      mouseRadius: 0.3,
      mouseStrength: 0.35
    };

    gl.uniform1f(u.uMorphAmount, cfg.morphAmount);
    gl.uniform1f(u.uBands, cfg.bands);
    gl.uniform1f(u.uThickness, cfg.thickness);
    gl.uniform1f(u.uScale, cfg.scale);
    gl.uniform1f(u.uPixelSize, 1.0);
    gl.uniform1f(u.uGlow, cfg.glow);
    gl.uniform1f(u.uColorMode, 0.0); // elevation-based color
    gl.uniform1f(u.uContrast, cfg.contrast);
    gl.uniform1f(u.uBrightness, cfg.brightness);
    gl.uniform1f(u.uFillBands, 0.0);
    gl.uniform1f(u.uOpacity, cfg.opacity);
    gl.uniform1f(u.uGrain, 1.0);
    gl.uniform1f(u.uGrainIntensity, cfg.grainIntensity);
    gl.uniform3fv(u.uLow, cfg.low);
    gl.uniform3fv(u.uMid, cfg.mid);
    gl.uniform3fv(u.uHigh, cfg.high);
    gl.uniform1f(u.uMouseEnabled, 1.0);
    gl.uniform1f(u.uMouseRadius, cfg.mouseRadius);
    gl.uniform1f(u.uMouseStrength, cfg.mouseStrength);

    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); // premultiplied alpha

    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    function setSize() {
      var rect = container.getBoundingClientRect();
      var w = Math.max(1, Math.floor(rect.width * dpr));
      var h = Math.max(1, Math.floor(rect.height * dpr));
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(u.iResolution, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    var ro = new ResizeObserver(setSize);
    ro.observe(container);
    setSize();

    var currentMouse = [0.5, 0.5];
    var targetMouse = [0.5, 0.5];
    var mouseActive = 0;
    var mouseActiveTarget = 0;

    function onMouseMove(e) {
      var rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      targetMouse[0] = (e.clientX - rect.left) / rect.width;
      targetMouse[1] = 1.0 - (e.clientY - rect.top) / rect.height;
      mouseActiveTarget = 1;
    }
    function onMouseLeave() {
      mouseActiveTarget = 0;
    }
    (eventTarget || canvas).addEventListener("mousemove", onMouseMove);
    (eventTarget || canvas).addEventListener("mouseleave", onMouseLeave);

    var ctrlIndices = [
      [1, -2, 3, -4],
      [9, -8, 7, -6],
      [5, 2, 5, -5],
      [-1, -3, 8, 9]
    ];
    var ctrlUniforms = [u.uCtrlA, u.uCtrlB, u.uCtrlC, u.uCtrlD];
    var ctrlValues = [
      new Float32Array(4), new Float32Array(4), new Float32Array(4), new Float32Array(4)
    ];

    var raf = 0;
    var isVisible = true;
    var isPageVisible = !document.hidden;
    var t0 = performance.now();

    function loop(t) {
      var time = (t - t0) * 0.001;
      gl.uniform1f(u.iTime, time);

      for (var g = 0; g < 4; g++) {
        var arr = ctrlValues[g];
        var idx = ctrlIndices[g];
        for (var j = 0; j < 4; j++) {
          var i = idx[j];
          arr[j] = cfg.morphAmount * Math.sin(time * cfg.speed * Math.sin(i * cfg.morphSpeed) + i);
        }
        gl.uniform4fv(ctrlUniforms[g], arr);
      }

      currentMouse[0] += 0.05 * (targetMouse[0] - currentMouse[0]);
      currentMouse[1] += 0.05 * (targetMouse[1] - currentMouse[1]);
      gl.uniform2f(u.uMouse, currentMouse[0], currentMouse[1]);

      mouseActive += 0.05 * (mouseActiveTarget - mouseActive);
      gl.uniform1f(u.uMouseActive, mouseActive);

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(loop);
    }

    function tryStart() {
      if (isVisible && isPageVisible && raf === 0) raf = requestAnimationFrame(loop);
    }
    function tryStop() {
      if (raf !== 0) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }

    var io = new IntersectionObserver(
      function (entries) {
        isVisible = entries[0].isIntersecting;
        isVisible ? tryStart() : tryStop();
      },
      { threshold: 0 }
    );
    io.observe(container);

    document.addEventListener("visibilitychange", function () {
      isPageVisible = !document.hidden;
      isPageVisible ? tryStart() : tryStop();
    });

    tryStart();
  }
})();
