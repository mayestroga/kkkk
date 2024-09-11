let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const carousel = document.querySelector('.carousel');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function updateCarousel() {
    const imageWidth = images[0].clientWidth;
    const newTransform = -currentIndex * (imageWidth + 32); // 32 is the gap between images (2rem)
    carousel.style.transform = `translateX(${newTransform}px)`;
}

rightButton.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1; 
    }
    updateCarousel();
});


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
    });

    // Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

// Add event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object to gather the form data
    var formData = new FormData(this);

    // Send the form data using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function(response) {
            // Handle successful response
            alert('Message sent successfully!');
            console.log('Success:', response);
        }, function(error) {
            // Handle error
            alert('Failed to send message.');
            console.log('Error:', error);
        });
});


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

