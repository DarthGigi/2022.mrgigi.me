if (location.hostname === "mrgigi-me-idarthgigi.vercel.app" || location.hostname === "mrgigi-me.vercel.app" || location.hostname === "mrgigi-me-git-main-idarthgigi.vercel.app" || location.hostname === "www.mrgigi.me") {
  location.hostname = "mrgigi.me";
}

function colorscheme() {
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    if (!document.getElementById("parent").classList.contains("dark")) {
      document.getElementById("parent").classList.add("dark");
    }
  } else {
    document.getElementById("parent").classList.remove("dark");
  }
}

// detect when the user changes their OS theme
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  localStorage.removeItem("theme");
  colorscheme();
});

colorscheme();

/* Save the scrollposition in sessionstorage on per page basis */
window.addEventListener("scroll", function () {
  sessionStorage.setItem(window.location.href + " scrollposition", window.scrollY);
});

/* Restore the scrollposition on pageload */
window.addEventListener("load", function () {
  if (sessionStorage.getItem(window.location.href) !== null) {
    window.scrollTo(0, sessionStorage.getItem(window.location.href));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if (!window.matchMedia("(prefers-reduced-motion)").matches) {
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }

            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });

      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  }
});

if (navigator.userAgent.match(/Android/i)) {
  window.location.href = "https://www.apple.com/shop/buy-iphone";
}
