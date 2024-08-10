let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let currentIndex = 0;
const media = [
    { src: 'events/TUGOPART1.mp4', caption: 'Explore TUGO, a versatile multi-services application that streamlines the Service Seeker experience. This video showcases seamless integration with Google Maps API, Email.js for communication, auto-detection API, and powerful Firebase and Node.js functionalities.' },
    { src: 'events/TUGOPART2EDITED.mp4', caption: 'In TUGO Part 2, discover the Partner side of the application, with a deep dive into Firebase integration and how it powers key features, ensuring seamless connectivity and data management across the platform.' },
    { src: 'events/TUGOPRT3.mp4', caption: 'In TUGO Part 3, discover the node.js javascruipt code and firebse and functions used.' },
    { src: 'events/WEBSITEEVENTFULL.mp4', caption: 'A website made to show the cultural events held in middle east countires it includes real time database and html css javascript code.' },
    { src: 'events/cisco1.png', caption: 'Cisco Project 1' },
    { src: 'events/cisco2.png', caption: 'Cisco Project 2' },
    { src: 'events/cisco3.png', caption: 'Cisco Project 3' },
];

function changeMedia(direction) {
    const container = document.getElementById('media-container');
    container.innerHTML = ''; // Clear the container

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % media.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + media.length) % media.length;
    }

    const file = media[currentIndex].src;
    const captionText = media[currentIndex].caption;

    if (file.endsWith('.mp4')) {
        const videoElement = document.createElement('video');
        videoElement.src = file;
        videoElement.controls = true; // Adds video controls like play/pause
        videoElement.autoplay = true; // Starts playing automatically
        videoElement.loop = false; // Video doesn't loop
        container.appendChild(videoElement);
    } else {
        const imageElement = document.createElement('img');
        imageElement.src = file;
        container.appendChild(imageElement);
    }

    // Add the caption
    const captionElement = document.createElement('div');
    captionElement.id = 'caption';
    captionElement.innerText = captionText;
    container.appendChild(captionElement);
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
