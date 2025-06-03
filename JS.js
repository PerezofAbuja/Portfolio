//welcome note section
const text = "WELCOME TO PEREZ'S PERSONAL PORTFOLIO";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    window.onload = typeWriter;

    // Add smooth fade-in animation
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("about");
    aboutSection.style.opacity = "0";
    aboutSection.style.transition = "opacity 1.5s ease-in-out";
    
    setTimeout(() => {
        aboutSection.style.opacity = "1";
    }, 500);
});


    // Back to Top Button Functionality
document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

const testimonials = [
    { text: "Perez built an amazing website for my business!", author: "John Doe" },
    { text: "Superb work! The website is exactly what I envisioned.", author: "Jane Smith" },
    { text: "Fantastic service, highly professional!", author: "Michael Lee" }
];

let index = 0; // Track current testimonial
const testimonialText = document.getElementById("testimonial-text");
const testimonialAuthor = document.getElementById("testimonial-author");

function updateTestimonial() {
    index = (index + 1) % testimonials.length; // Loop through array
    testimonialText.textContent = `"${testimonials[index].text}"`;
    testimonialAuthor.textContent = `- ${testimonials[index].author}`;
}

// Change testimonial every 5 seconds
setInterval(updateTestimonial, 5000);


//navigate to my github page
document.getElementById('')