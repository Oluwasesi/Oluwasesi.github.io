let menuIcon = document.querySelector('#menu-icon');
let navigation = document.querySelector('.navigation');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navigation.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', function() {

  var menuIcon = document.getElementById('menu-icon');
 
  var mainNav = document.querySelector('.main-nav');

  menuIcon.addEventListener('click', function() {
      mainNav.classList.toggle('active');
  });
});



// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav li a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop = 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav li a[href*=' + id + ']').classList.add('active');
      })
    }
  });
}



// function SendMail() {
//   var params = {
//     from_name : document.getElementById("fullName").value,
//     phone_number : document.getElementById("phone_number").value,
//     email_id : document.getElementById("email_id").value,
//     message : document.getElementById("message").value
//   }
//   emailjs.send("service_bwaxsqx", "template_y1fgyf2", params).then(function (res) {
//     alert("Success! " + res.status);
//   }) 
// }

// read more button
document
  .getElementById("read-more-button").addEventListener("click", function (event) {
    event.preventDefault()
    var additionalContent = document.getElementById("additional-content");
    if (additionalContent.style.display === "none") {
      additionalContent.style.display = "block";
      this.innerText = 'Read Less';
    } else {
      additionalContent.style.display = "none";
      this.innerText = 'Read More';
    }
  });


// copyright date
    document.addEventListener('DOMContentLoaded', function () {
        var currentYear = new Date().getFullYear();
        document.getElementById('copyright-year').textContent = currentYear;
    });









// function validate() {
//   // alert('form submitted')
//   const fullName = document.myForm.fullName.value;
//   const email = document.myForm.email.value;
//   const phone = document.myForm.phone.value;
//   const email_subject = document.myForm.email_subject.value;

//   const name_err = document.querySelector(".name-err");
//   const email_err = document.querySelector(".email-err");
//   const phone_err = document.querySelector(".phone-err");
//   const subject_err = document.querySelector(".subject-err");
//   name_err.textContent = "";
//   email_err.textContent = "";
//   phone_err.textContent = "";
//   subject_err.textContent = "";

//   if (fullName.trim() == "") {
//     name_err.textContent = "Name field is required";
//     return false;
//   }
//   if (email == "") {
//     email_err.textContent = "Email field is required";
//     return false;
//   }
//   if (phone == "") {
//     name_err.textContent = "Phone field is required";
//     return false;
//   }
//   if (email_subject == "") {
//     name_err.textContent = "Email subject field is required";
//     return false;
//   }
// }
