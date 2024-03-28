// Navigation menuIcon
let menuIcon = document.querySelector("#menu-icon");
let navigation = document.querySelector(".navigation");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navigation.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menu-icon");

  var mainNav = document.querySelector(".main-nav");

  menuIcon.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });
});

// To hide the floating button on the homepage

// To show the floating button when user scrolls to the bottom
window.addEventListener("scroll", function () {
  var button = document.querySelector(".floating-button");
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.clientHeight;
  var scrollTop =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  // Show the button when the user scrolls to the bottom
  if (windowHeight + scrollTop >= documentHeight) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    // let offset = (sec.offsetTop = 100);
    let offset = sec.offsetTop + 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// read more button
document
  .getElementById("read-more-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var additionalContent = document.getElementById("additional-content");
    if (additionalContent.style.display === "none") {
      additionalContent.style.display = "block";
      this.innerText = "Read Less";
    } else {
      additionalContent.style.display = "none";
      this.innerText = "Read More";
    }
  });

// refresh page back to top
window.onload = function () {
  window.scrollTo(0, 0);
};

// Function to send email using EmailJS
function SendMail() {
  // Prevent the default form submission behavior
  event.preventDefault();

  if (!validate()) {
    // If validation fails, return without sending the email
    return;
  }

  // Fetch form data
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email_id").value;
  const phoneNumber = document.getElementById("phone_number").value;
  const subject = document.getElementById("email_subject").value;
  const message = document.getElementById("message").value;

   // Check if the form is empty
   if (
    fullName.trim() === "" &&
    email.trim() === "" &&
    phoneNumber.trim() === "" &&
    subject.trim() === "" &&
    message.trim() === ""
  ) {
    // Display an alert message
    alert("Please fill in all the fields before submitting the form.");
    return; // Stop further execution
  }

  
   // Validate the form
   if (!validate()) {
    // If validation fails, focus on the first empty field and display a message
    if (fullName.value.trim() === "") {
      fullName.focus();
    } else if (email.value.trim() === "") {
      email.focus();
    } else if (phoneNumber.value.trim() === "") {
      phoneNumber.focus();
    } else if (subject.value.trim() === "") {
      subject.focus();
    } else if (message.value.trim() === "") {
      message.focus();
    }
    alert("Please fill in all the fields before submitting the form.");
    return;
  }

  // Send email using EmailJS
  emailjs
    .send("service_bwaxsqx", "template_y1fgyf2", {
      from_name: fullName,
      from_email: email,
      phone_number: phoneNumber,
      email_subject: subject,
      message: message,
    })
    .then(
      function (response) {
        console.log("Email sent successfully:", response);
        // Optionally, display a success message to the user
        alert("Form submitted successfully!");

        // Refresh the page after a short delay (adjust the delay as needed)
        setTimeout(function () {
          location.reload(); // Refresh the page
        }, 1000); // 1000 milliseconds (1 second) delay before refreshing

        // Scroll to the top of the page after the page is refreshed
        window.scrollTo(0, 0);
      },
      function (error) {
        console.log("Error sending email:", error);
        // Optionally, display an error message to the user
        alert("Error submitting form. Please try again later.");
      }
    );

  // Log the email address for testing
  console.log("Email:", email);
}

// Validate contact forms
function validate() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email_id").value;
  const phone = document.getElementById("phone_number").value;
  const email_subject = document.getElementById("email_subject").value;
  const message = document.getElementById("message").value;

  const name_err = document.querySelector(".name-err");
  const email_err = document.querySelector(".email-err");
  const phone_err = document.querySelector(".phone-err");
  const subject_err = document.querySelector(".subject-err");
  const message_err = document.querySelector(".message-err");

  name_err.textContent = "";
  email_err.textContent = "";
  phone_err.textContent = "";
  subject_err.textContent = "";
  message_err.textContent = "";

  if (fullName.trim() === "") {
    name_err.textContent = "Name field is required";
    return false;
  }
  if (email === "") {
    email_err.textContent = "Email field is required";
    return false;
  }
  // Add email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    email_err.textContent = "Please enter a valid email address";
    return false;
  }
  if (phone === "") {
    phone_err.textContent = "Phone field is required";
    return false;
  }
  if (email_subject === "") {
    subject_err.textContent = "Email subject field is required";
    return false;
  }
  if (message.trim() === "") {
    message_err.textContent = "Message field is required";
    return false;
  }

  // If all fields are filled, return true to allow form submission
  return true;
}

// copyright date
document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("copyright-year").textContent = currentYear;
});
