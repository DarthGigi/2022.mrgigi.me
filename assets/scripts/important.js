/* Saving the scroll position of the page in local storage and then restoring it when the page is
reloaded. */
document.addEventListener('DOMContentLoaded', function (event) {
    var scrollpos = localStorage.getItem('scrollpos')
    if (scrollpos) window.scrollTo(0, scrollpos)
})

window.onbeforeunload = function (e) {
    localStorage.setItem('scrollpos', window.scrollY)
}

/* This is a redirect to my custom domain. */
if (
    window.location.hostname == 'gigi-personal-website.web.app' ||
    window.location.hostname == 'gigi-personal-website.firebaseapp.com'
) {
    window.location.href = 'https://mrgigi.me'
}
