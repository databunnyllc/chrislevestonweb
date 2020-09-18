<<<<<<< HEAD

=======
$(function() {
    // Getting the notification area in the jumbotron.
const notificationArea = document.getElementsByClassName("notification-area")[0];

// Getting the navigation elements.
const navigationElements = document.querySelectorAll(".navbar-nav a");

// Notification Strings
let htmlEmailString = "Take a look at my latest html email designs.";
let websitesString = "View my website projects that I developed.";
let skillsString = "Take a look at my current skills.";
let contactString = "Contact Me";


/* ********* JQuery Functions for events. *************** */

// Basic JQuery Events for when the mouseover the nav elements.
$(navigationElements).eq(0).on('mouseover', () => {
    $(notificationArea).text(htmlEmailString);
});
$(navigationElements).eq(1).on('mouseover', () => {
    $(notificationArea).text(websitesString);
});
$(navigationElements).eq(2).on('mouseover',() => {
    $(notificationArea).text(skillsString);
});
$(navigationElements).eq(3).on('mouseover', () => {
    $(notificationArea).text(contactString);
})
// For loop to get all nav elements to go blank when mouseout.
for(let i = 0; i < navigationElements.length; ++i) {
    $(navigationElements).eq(i).on('mouseout', () => {
        $(notificationArea).text("");
    })
}

});
>>>>>>> development
