/**
 * METHOD ONE METHOD ONE METHOD ONE METHOD ONE METHOD ONE METHOD ONE METHOD ONE METHOD ONE 
 * MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE 
 */

class TestimonialSlider {
    constructor(testimonials) {
        this.testimonials = testimonials;
        this.index = 0;

        this.testimonialName = document.getElementById("testimonial_name");
        this.testimonialReview = document.getElementById("testimonial_review");
        this.srcImage = document.getElementById("testimonial_image");
        this.leftButton = document.getElementById("testimonial__left-button");
        this.rightButton = document.getElementById("testimonial__right-button");

        this.leftButton.addEventListener("click", () => this.prevTestimonial());
        this.rightButton.addEventListener("click", () => this.nextTestimonial());
    
        this.updateTestimonial();
    }

    updateTestimonial () {
        const currentTestimonial = this.testimonials[this.index];
        this.testimonialName.textContent = currentTestimonial.testimonial_name;
        this.testimonialReview.textContent = currentTestimonial.testimonial;
        this.srcImage.src = currentTestimonial.testimonial_image;
    }

    nextTestimonial() {
        this.index = (this.index + 1) % this.testimonials.length;
        this.updateTestimonial();
    }

    prevTestimonial() {
        this.index = (this.index - 1 + this.testimonials.length) % this.testimonials.length;
        this.updateTestimonial();
    }
}

const testimonials = [
    { testimonial_name: "John Doe", testimonial: "Great experience! Highly recommend!", testimonial_image: "Images/profiles/profile-1.png"},
    { testimonial_name: "Tiffany ", testimonial: "Lovely!", testimonial_image: "Images/profiles/profile-2.png"},
    { testimonial_name: "Brandon", testimonial: "Can't wait to come back", testimonial_image: "Images/profiles/profile-3.jpg"}, 
    { testimonial_name: "T", testimonial: "I really enjoyed the workshop!", testimonial_image: "Images/profiles/profile-4.webp"},
];

const testimonialSlider = new TestimonialSlider(testimonials);

/**
 * METHOD TWO METHOD TWO METHOD TWO METHOD TWO METHOD TWO METHOD TWO METHOD TWO METHOD TWO METHOD TWO METHOD TWO 
 * DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP 
 */

class TestimonialCarousel {
    constructor(reviews) {
        this.reviews = reviews;
        this.indexes = {
            current: 0,
            previous: null,
            next: null
        }

        this.leftButton = document.getElementById("card-container__left-button");
        this.rightButton = document.getElementById("card-container__right-button");
        
        this.leftButton.addEventListener("click", () => this.navigate("prev"));
        this.rightButton.addEventListener("click", () => this.navigate("next"));

        this.render();
    }
    
    updateIndexes(cur) {
        this.indexes.current = cur;
        this.indexes.previous = (cur + 1) % reviews.length;
        this.indexes.next = (cur - 1 + reviews.length) % reviews.length; 
    }

    render() {
        this.updateIndexes(this.indexes.current);
        this.renderCard(this.reviews[this.indexes.previous], "previous-card");
        this.renderCard(this.reviews[this.indexes.current], "current-card");
        this.renderCard(this.reviews[this.indexes.next], "next-card");
    }

    renderCard(review, elementId) {
        const element = document.getElementById(elementId);
        element.innerHTML = "";
    
        const header = document.createElement("h2");
        const paragraph = document.createElement("p");
    
        header.innerText = review.name;
        paragraph.innerText = review.review;
    
        element.appendChild(header);
        element.appendChild(paragraph);
    }

    navigate(direction) {
        if (direction === "prev") 
            this.indexes.current = (this.indexes.current - 1 + this.reviews.length) % this.reviews.length;
        else if (direction === "next")
            this.indexes.current = (this.indexes.current + 1) % this.reviews.length; 

        this.render();
    }
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

const testimonialCarousel = new TestimonialCarousel(reviews);