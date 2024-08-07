let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let currentIndex = 0;

function changeImage() {
    const images = ['events/event1.jpg', 'events/event2.webp', 'events/BG GRADIENT.jpg']; // Add your image URLs here
    const imageElement = document.getElementById('image');
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the beginning if at the end
    imageElement.src = images[currentIndex];
}
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = element.src;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
