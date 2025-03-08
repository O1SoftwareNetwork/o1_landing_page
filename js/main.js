const testimonials = [
    { testimonial_name: "John Doe", testimonial: "Great experience! Highly recommend!", testimonial_image: "Images/profiles/profile-1.png"},
    { testimonial_name: "Tiffany ", testimonial: "Lovely!", testimonial_image: "Images/profiles/profile-2.png"},
    { testimonial_name: "Brandon", testimonial: "Can't wait to come back", testimonial_image: "Images/profiles/profile-3.jpg"}, 
    { testimonial_name: "T", testimonial: "I really enjoyed the workshop!", testimonial_image: "Images/profiles/profile-4.webp"},
];

let index = 0;

const testimonialName = document.getElementById("testimonial_name");
const testimonialReview = document.getElementById("testimonial_review");
const srcImage = document.getElementById("testimonial_image");

const rightButtonTestimonial = document.getElementById("testimonial_right");
const leftButtonTestimonial = document.getElementById("testimonial_left");

function updateTestimonial () {
    testimonialName.textContent = testimonials[index].testimonial_name;
    testimonialReview.textContent = testimonials[index].testimonial;
    srcImage.src = testimonials[index].testimonial_image;
}

rightButtonTestimonial.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    updateTestimonial();
});

leftButtonTestimonial.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});