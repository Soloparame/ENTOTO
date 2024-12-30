// Simple Image Carousel
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function changeImage() {
    // Hide all images
    images.forEach(image => image.style.display = 'none');
    
    // Show the current image
    images[currentImageIndex].style.display = 'block';

    // Move to the next image
    currentImageIndex = (currentImageIndex + 1) % totalImages; // Loops back to 0 after the last image
}

// Change image every 5 seconds
setInterval(changeImage, 5000);

// Initialize the carousel
changeImage();

// Form Validation for Contact Us page
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');

    if (!name || !email || !message) {
        formMessage.textContent = 'All fields are required!';
        formMessage.style.color = 'red';
        return false; // Prevent form submission
    }

    if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address!';
        formMessage.style.color = 'red';
        return false; // Prevent form submission
    }

    formMessage.textContent = 'Your message has been sent successfully!';
    formMessage.style.color = 'green';
    return true; // Allow form submission
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
