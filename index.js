
let popup=document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('click', function() {
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});


const icons = document.querySelectorAll('.clickable-icon');

    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            const url = this.getAttribute('href');
            window.location.href = url;
        });
    });


    const navbar = document.querySelector('.navbar');
    const section1 = document.querySelector('#page1'); // Adjust based on your content structure
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > section1.offsetTop) {
            navbar.style.backgroundColor = '#B2C8BA'; // Change to your desired background color
        } else {
            navbar.style.backgroundColor = 'transparent'; // Reset to transparent background
        }
    });
    

    document.addEventListener('DOMContentLoaded', function() {
        const whiteSection = document.querySelector('#page1');
        const blackSection = document.querySelector('#page2');
    
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
    
            // Calculate the transition point
            const transitionPoint = whiteSection.offsetHeight - 100;
    
            // Update background colors based on scroll position
            if (scrollPosition >= transitionPoint) {
                whiteSection.style.backgroundColor = 'transparent';
                blackSection.style.backgroundColor = 'black';
            } else {
                whiteSection.style.backgroundColor = 'white';
                blackSection.style.backgroundColor = 'transparent';
            }
        });
    });
    
    

    $(document).ready(function () {
        // Smooth scrolling for navigation links and buttons
        $(".nav-links a, .scroll-button, .button-container a").on("click", function (event) {
          if (this.hash !== "") {
            event.preventDefault();
      
            var hash = this.hash;
      
            $("html, body").animate(
              {
                scrollTop: $(hash).offset().top,
              },
              800, // Scroll speed in milliseconds
              function () {
                window.location.hash = hash;
              }
            );
          }
        });
      });
      
// Toggle the mobile menu when clicking the menu icon
const navLinks = document.querySelector('.nav-links');
const navLinksToggle = document.querySelector('.menu-icon');

navLinksToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        // Smoothly open the menu
        navLinks.style.maxHeight = '100%';
    } else {
        // Smoothly close the menu
        navLinks.style.maxHeight = null;
    }
});



