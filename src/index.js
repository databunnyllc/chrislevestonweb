// Getting the notification area in the jumbotron.
const notificationArea = document.getElementsByClassName("notification-area")[0];

// Getting the navigation elements.
const navigationElements = document.querySelectorAll(".navbar-nav a");

// Notification Strings
let htmlEmailString = "Take a look at my latest html email designs.";
let websitesString = "View my website projects that I developed.";
let skillsString = "Take a look at my current skills.";
let contactString = "Contact Me";


/* ********* Functions for events. *************** */


// Function for showing now message on navigation element when mouseout.
const showNoMessage = () => {
    notificationArea.textContent = " ";
}
// Functions for showing the different string messages.
const showMessage1 = () => {
    notificationArea.textContent = htmlEmailString;
}
const showMessage2 = () => {
    notificationArea.textContent = websitesString;
}
const showMessage3 = () => {
    notificationArea.textContent = skillsString;
}
const showMessage4 = () => {
    notificationArea.textContent = contactString;
}


// A for loop to get all the navigation elements.
for(let i = 0; i < navigationElements.length; ++i) { 
    // Event for when the mouse leaves each element in the navigation.
    navigationElements[i].addEventListener("mouseout", showNoMessage, false);
}
// Events of when mouseover on individual nav elemenst.
navigationElements[0].addEventListener("mouseover", showMessage1, false);
navigationElements[1].addEventListener("mouseover", showMessage2, false);
navigationElements[2].addEventListener("mouseover", showMessage3, false);
navigationElements[3].addEventListener("mouseover", showMessage4, false);