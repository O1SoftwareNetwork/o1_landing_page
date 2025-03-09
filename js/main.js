// const testimonials = [
//     { testimonial_name: "John Doe", testimonial: "Great experience! Highly recommend!", testimonial_image: "testimonials__person-image"},
//     { testimonial_name: "Tiffany ", testimonial: "Lovely!", testimonial_image: "testimonials__person-image"},
//     { testimonial_name: "Brandon", testimonial: "Can't wait to come back", testimonial_image: "testimonials__person-image"}, 
//     { testimonial_name: "T", testimonial: "I really enjoyed the workshop!", testimonial_image: "testimonials__person-image"},
// ];

// let index = 0;

// const testimonialName = document.getElementById("testimonial_name");
// const testimonialReview = document.getElementById("testimonial_review");
// const srcImage = document.getElementById("testimonial_image");

// const rightButtonTestimonial = document.getElementById("testimonial_right");
// const leftButtonTestimonial = document.getElementById("testimonial_left");

// function updateTestimonial () {
//     testimonialName.textContent = testimonials[index].testimonial_name;
//     testimonialReview.textContent = testimonials[index].testimonial;
//     srcImage.src = testimonials[index].testimonial_image;
// }

// rightButtonTestimonial.addEventListener("click", () => {
//     index = (index + 1) % testimonials.length;
//     updateTestimonial();
// });

// leftButtonTestimonial.addEventListener("click", () => {
//     index = (index - 1 + testimonials.length) % testimonials.length;
//     updateTestimonial();
// });

const indexes = {
    current: 0,
    previous: null,
    next: null
}

const reviews = [
    {
        name: "Jim Peterson",
        review: "This is the review card created by Jim Peterson"
    },
    {
        name: "Brandon",
        review: "This is the review card created by Brandon"
    },
    {
        name: "Tiffany",
        review: "This is the review card created by Tiffany"
    },
    {
        name: "Tee",
        review: "This is the review card created by Tee"
    },
    {
        name: "Jean",
        review: "This is the review card created by Jean"
    }
];

function updateIndexes(cur) {
    indexes.current = cur;
    indexes.previous = (cur - 1 + reviews.length) % reviews.length;
    indexes.next = (cur + 1) % reviews.length;
}

function renderCards(direction = "init") {

    if (direction === "prev") 
        updateIndexes((indexes.current + 1) % reviews.length);
    else if (direction === "next")
        updateIndexes((indexes.current - 1 + reviews.length) % reviews.length);
    else
        updateIndexes(0);

    renderCard(reviews[indexes.previous], "previous-card");
    renderCard(reviews[indexes.current], "current-card");
    renderCard(reviews[indexes.next], "next-card");
}

function renderCard(review, elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = "";

    const header = document.createElement("h2");
    const paragraph = document.createElement("p");

    header.innerText = review.name;
    paragraph.innerText = review.review;

    element.appendChild(header);
    element.appendChild(paragraph);
}

const leftButton = document.getElementById("card-container__left-button");
const rightButton = document.getElementById("card-container__right-button");

leftButton.addEventListener("click", () => {
    renderCards("prev");
});

rightButton.addEventListener("click", () => {
    renderCards("next");
});

renderCards();