/* Checking if the user has a dark theme preference, and if so, it will add the dark theme to the page. */
if (localStorage.getItem('theme') === 'dark') {
    document.getElementById('parent').classList.add('dark')
} else if (localStorage.getItem('theme') === 'light') {
    document.getElementById('parent').classList.remove('dark')
} else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
) {
    document.getElementById('parent').classList.add('dark')
    localStorage.setItem('theme', 'dark')
} else {
    document.getElementById('parent').classList.remove('dark')
    localStorage.setItem('theme', 'light')
}

/* The code below is checking if the user prefers reduced motion, if not, it will play the video. */
const videos = document.querySelectorAll('video')
videos.forEach((video) => {
    // check if user prefers motion reduced, if not, play video
    if (!window.matchMedia('(prefers-reduced-motion)').matches) {
        // check if the video can be played trough the end without stuttering or buffering canplaytrough
        video.addEventListener('canplaythrough', function () {
            video.play()
        })
    }
})

/**
 * If the mobile header is not hidden, and the scroll position is greater than 150, add the pt-4 class
 * to the mobile header and add the bg-gray-300 and dark:bg-gray-800 classes to the mobile header div
 */
window.addEventListener('scroll', detectScroll)
function detectScroll() {
    let scrollPosition = window.scrollY
    const mobileHeader = document.getElementById('mobileHeader')
    const mobileHeaderDiv = document.getElementById('mobileHeaderDiv')
    if (!mobileHeader.classList.contains('hidden')) {
        if (scrollPosition > 150) {
            mobileHeader.classList.add('pt-4')
            mobileHeaderDiv.classList.add('bg-gray-300', 'dark:bg-gray-800')
        } else {
            mobileHeader.classList.remove('pt-4')
            mobileHeaderDiv.classList.remove('bg-gray-300', 'dark:bg-gray-800')
        }
    }
    const desktopHeader = document.getElementById('desktopHeader')
    const desktopHeaderDiv = document.getElementById('desktopHeaderDiv')
    if (scrollPosition > 150) {
        desktopHeader.classList.add('pt-4')
        desktopHeaderDiv.classList.add('bg-gray-300', 'dark:bg-gray-800')
    } else {
        desktopHeader.classList.remove('pt-4')
        desktopHeaderDiv.classList.remove('bg-gray-300', 'dark:bg-gray-800')
    }
}

/* Checking if the parent element has the class of dark. If it does, it will change the icon to the moon
icon. If it doesn't, it will change the icon to the sun icon. */
const element = document.getElementById('parent')
if (element.classList.contains('dark')) {
    document.getElementById('darkModeToggle').innerHTML =
        '<svg class="motion-safe:animate-pulse-slow h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>'
} else {
    document.getElementById('darkModeToggle').innerHTML =
        '<svg class="motion-safe:animate-spin-slow h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>'
}

/**
 * The function intitializePlayer() sets the object references for the video and the button, and then
 * adds an event listener to the button
 */
intitializePlayer()
function intitializePlayer() {
    //set object references
    videoLife = document.getElementById('lettherebelife')
    toggleLife = document.getElementById('toggleMuteSpace')
    //add event listener
    toggleLife.addEventListener('click', toggleMuteSpace, true)

    //set object references
    videoTech = document.getElementById('wonderfultools')
    toggleTech = document.getElementById('toggleMuteTechnology')
    //add event listener
    toggleTech.addEventListener('click', toggleMuteTechnology, true)
}

/**
 * It toggles the mute state of the videoLife element, and if the videoLife element is muted, it
 * toggles the mute state of the videoTech element
 */
function toggleMuteSpace() {
    videoTech.muted = true
    toggleTech.innerHTML =
        '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>'
    if (videoLife.muted) {
        videoLife.muted = false
        toggleLife.innerHTML =
            '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>'
    } else {
        videoLife.muted = true
        toggleLife.innerHTML =
            '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>'
    }
}

/**
 * It toggles the mute state of the technology video, and if the technology video is muted, it toggles
 * the mute state of the life video
 */
function toggleMuteTechnology() {
    videoLife.muted = true
    toggleLife.innerHTML =
        '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>'
    if (videoTech.muted) {
        videoTech.muted = false
        toggleTech.innerHTML =
            '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>'
    } else {
        videoTech.muted = true
        toggleTech.innerHTML =
            '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>'
    }
}

/**
 * It scrolls the page to the element with the id of 'intro'
 */
function scrollIntro() {
    const element = document.getElementById('intro')
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}

/* Adding an event listener to the DOMContentLoaded event. When the DOMContentLoaded event is fired, it
will set a timeout of 1 second and then display an alert. */
// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     alert("👋🏻 Thanks for visiting my website! Please do note that the website is still under development and far from finished.");
//   }, 1000);
// });

// rollAnimation
/**
 * `rollAnimation()` adds the `motion-safe:transform` and `motion-safe:-translate-x-28` classes to the
 * `rollImg` element, adds the `motion-safe:animate-roll` class to the `rollImg2` element, and adds the
 * `motion-safe:!opacity-100` class to the `walter` element. After 6 seconds, it removes the
 * `motion-safe:transform` and `motion-safe:-translate-x-28` classes from the `rollImg` and `rollImg2`
 * elements, adds the `motion-safe:animate-rollback` class to the `rollImg2` element, removes the
 * `motion-safe:animate-roll` class from the `rollImg2` element, and removes the
 * `motion-safe:!opacity-100` class from the `walter` element. After 7 seconds
 */
function rollAnimation() {
    document
        .getElementById('rollImg')
        .classList.add('motion-safe:transform', 'motion-safe:-translate-x-28')
    document
        .getElementById('rollImg2')
        .classList.add('motion-safe:animate-roll')
    document.getElementById('walter').classList.add('motion-safe:!opacity-100')
    setTimeout(() => {
        document
            .getElementById('rollImg', 'rollImg2')
            .classList.remove(
                'motion-safe:transform',
                'motion-safe:-translate-x-28'
            )
        document
            .getElementById('rollImg2')
            .classList.add('motion-safe:animate-rollback')
        document
            .getElementById('rollImg2')
            .classList.remove('motion-safe:animate-roll')
        document
            .getElementById('walter')
            .classList.remove('motion-safe:!opacity-100')
    }, 6000)
    setTimeout(() => {
        document
            .getElementById('rollImg2')
            .classList.remove('motion-safe:animate-rollback')
    }, 7000)
    document
        .getElementById('rollImg2')
        .classList.remove('motion-safe:animate-rollback')
}

/**
 * It toggles the dark class on the body element, and changes the icon in the dark mode toggle button
 */
function toggleDarkMode() {
    element.classList.toggle('dark')

    if (element.classList.contains('dark')) {
        document.getElementById('darkModeToggle').innerHTML =
            '<svg class="motion-safe:animate-pulse-slow h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>'
        localStorage.theme = 'dark'
    } else {
        document.getElementById('darkModeToggle').innerHTML =
            '<svg class="motion-safe:animate-spin-slow h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>'
        localStorage.theme = 'light'
    }
}

/**
 * It toggles the class of the element with the id of 'mobileHeader' between 'hidden' and 'not hidden'
 */
function mobileNavbar() {
    const mobileNav = document.getElementById('mobileHeader')
    mobileNav.classList.toggle('hidden')
}

/* The code below is creating a function that will toggle the video between play and pause. */
document.getElementById('togglePause1').addEventListener('click', () => {
    const video = document.getElementById('coding')
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
})

/* The code below is creating a function that will toggle the video between play and pause. */
document.getElementById('togglePause2').addEventListener('click', () => {
    const video = document.getElementById('lettherebelife')
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
})

/* The code below is creating a function that will toggle the video between play and pause. */
document.getElementById('togglePause3').addEventListener('click', () => {
    const video = document.getElementById('wonderfultools')
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
})
