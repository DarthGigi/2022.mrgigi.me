/**
 * If the mobile header is not hidden, and the scroll position is greater than 150, add the pt-4 class
 * to the mobile header and add the bg-gray-300 and dark:bg-gray-800 classes to the mobile header div
 */
window.addEventListener("scroll", detectScroll);
function detectScroll() {
  let scrollPosition = window.scrollY;
  const mobileHeader = document.getElementById("mobileHeader");
  const mobileHeaderDiv = document.getElementById("mobileHeaderDiv");
  if (scrollPosition > 150) {
    mobileHeader.classList.add("pt-4");
    mobileHeaderDiv.classList.add("bg-gray-300", "dark:bg-gray-800");
  } else {
    mobileHeader.classList.remove("pt-4");
    mobileHeaderDiv.classList.remove("bg-gray-300", "dark:bg-gray-800");
  }
  const desktopHeader = document.getElementById("desktopHeader");
  const desktopHeaderDiv = document.getElementById("desktopHeaderDiv");
  if (scrollPosition > 150) {
    desktopHeader.classList.add("pt-4");
    desktopHeaderDiv.classList.add("bg-gray-300", "dark:bg-gray-800");
  } else {
    desktopHeader.classList.remove("pt-4");
    desktopHeaderDiv.classList.remove("bg-gray-300", "dark:bg-gray-800");
  }
}
/* Checking if the parent element has the class of dark. If it does, it will change the icon to the moon
icon. If it doesn't, it will change the icon to the sun icon. */
const element = document.getElementById("parent");
if (element.classList.contains("dark")) {
  document.getElementById("darkModeToggle").innerHTML = '<svg class="motion-safe:animate-pulse-slow h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>';
} else {
  document.getElementById("darkModeToggle").innerHTML = '<svg class="motion-safe:animate-spin-slow h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>';
}
/**
 * It scrolls the page to the element with the id of 'intro'
 */
function scrollIntro() {
  const element = document.getElementById("intro");
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

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
  document.getElementById("rollImg").classList.add("motion-safe:transform", "motion-safe:-translate-x-28");
  document.getElementById("rollImg2").classList.add("motion-safe:animate-roll");
  document.getElementById("walter").classList.add("motion-safe:!opacity-100");
  setTimeout(() => {
    document.getElementById("rollImg").classList.remove("motion-safe:transform", "motion-safe:-translate-x-28");
    document.getElementById("rollImg2").classList.add("motion-safe:animate-rollback");
    document.getElementById("rollImg2").classList.remove("motion-safe:animate-roll");
    document.getElementById("walter").classList.remove("motion-safe:!opacity-100");
  }, 6000);
  setTimeout(() => {
    document.getElementById("rollImg2").classList.remove("motion-safe:animate-rollback");
  }, 7000);
  document.getElementById("rollImg2").classList.remove("motion-safe:animate-rollback");
}
/**
 * It toggles the dark class on the body element, and changes the icon in the dark mode toggle button
 */
function toggleDarkMode() {
  element.classList.toggle("dark");
  if (element.classList.contains("dark")) {
    document.getElementById("darkModeToggle").innerHTML = '<svg class="motion-safe:animate-pulse-slow h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>';
    localStorage.theme = "dark";
  } else {
    document.getElementById("darkModeToggle").innerHTML = '<svg class="motion-safe:animate-spin-slow h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>';
    localStorage.theme = "light";
  }
}

const form = document.getElementById("emailForm");

form.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();

  // check if the user has sent a message in the last hour
  if (localStorage.getItem("lastMessageSent") !== null) {
    const lastMessageSent = localStorage.getItem("lastMessageSent");
    const timeSinceLastMessageSent = Date.now() - lastMessageSent;
    if (timeSinceLastMessageSent < 3600000) {
      document.getElementById("submitButton").innerText = "You have already sent a message in the last hour. Please wait before sending another one.";
      document.getElementById("submitButton").classList.add("!bg-red-500");
      document.getElementById("submitButton").disabled = true;
      return;
    }
  }

  // 👇️ Send data to server
  const data = new FormData(event.target);
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      document.getElementById("submitButton").innerText = "Message has been sent ✅!";
      document.getElementById("submitButton").classList.add("!bg-green-500");
      setTimeout(() => {
        document.getElementById("submitButton").classList.remove("!bg-green-500");
        document.getElementById("submitButton").innerText = "Send message";
      }, 3000);
      // save data to localStorage so that the same person can't send another message for 5 minutes
      localStorage.setItem("lastMessageSent", Date.now());
    } else {
      document.getElementById("submitButton").innerText = "Oops! There was a problem 😞.";
      document.getElementById("submitButton").classList.add("!bg-red-500");
      setTimeout(() => {
        document.getElementById("submitButton").classList.remove("!bg-red-500");
        document.getElementById("submitButton").innerText = "Send message";
      }, 3000);
    }
  };
  xhr.send(data);

  // 👇️ Reset form here
  form.reset();
});

// check if the user has sent a message in the last hour
if (localStorage.getItem("lastMessageSent") !== null) {
  const lastMessageSent = localStorage.getItem("lastMessageSent");
  const oneHourAgo = Date.now() - 3600000;
  if (lastMessageSent > oneHourAgo) {
    document.getElementById("submitButton").innerText = "You have already sent a message in the last hour. Please wait before sending another one.";
    document.getElementById("submitButton").classList.add("!bg-red-500");
    document.getElementById("submitButton").disabled = true;
  }
}
