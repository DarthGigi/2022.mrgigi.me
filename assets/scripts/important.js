/* Saving the scroll position of the page in local storage and then restoring it when the page is
reloaded. */
document.addEventListener("DOMContentLoaded", function (event) {
  var scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function (e) {
  localStorage.setItem("scrollpos", window.scrollY);
};

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
