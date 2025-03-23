/**
 * METHOD ONE METHOD ONE METHOD ONE METHOD ONE METHOD ONE METHOD ONE METHOD ONE METHOD ONE 
 * MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE 
 */

// Remove the buttons from the HTML Testimonial Slider

class TestimonialSlider {
    constructor(testimonials) {
        this.testimonials = testimonials;
        this.index = 0;

        this.testimonialElement = document.querySelector(".testimonial");

        // Mobile
        this.touchStartX = 0;

        // Desktop
        this.isDragging = false;
        this.mouseStartX = 0;
        
        // Create the swipe event listeners
        // Create two event listeners
        // touchstart (event)
        // touchStart (Execute the touchStart method and pass in the event)
        this.testimonialElement.addEventListener("touchstart", (event) => this.touchStart(event));
        this.testimonialElement.addEventListener("touchend", (event) => this.touchEnd(event));

        // Create the swipe simulation event listeners
        // Create four event listeners
        // mousedown (event)
            // Execute the mouseStart and pass in the event object
        this.testimonialElement.addEventListener("mousedown", (event) => this.mouseStart(event));
        // mousemove (event)
            // Execute the mouseMove method and pass in the event object
        this.testimonialElement.addEventListener("mousemove", (event) => this.mouseMove(event));
        // mouseup (event)
            // Execute the mouseEnd method and pass in the event object
        this.testimonialElement.addEventListener("mouseup", (event) => this.mouseEnd(event));
        // mouseleave (event)
            // Execute the mouseLeave method and pass in the event object
        this.testimonialElement.addEventListener("mouseleave", (event) => this.mouseLeave(event));
    
        this.updateTestimonial();
    }

    // "Strings"
    // 'Strings'
    // `My name is ${testimonial.testimonial_name}`

    updateTestimonial () {
        const currentTestimonial = this.testimonials[this.index];
        // Instead of setting the testimonial_name, testimonial, and testimonial_image individually
        // we'll set the innerHTML of the testimonial element using a template literal and injecting
        // JavaScript variables from the testimonial object
        // (Remember to include the classes and ids)

        this.testimonialElement.innerHTML = `${this.testimonialName.innerHTML.replace(currentTestimonial.testimonial_name)}`

        // this.testimonialName.textContent = currentTestimonial.testimonial_name;
        // this.testimonialReview.textContent = currentTestimonial.testimonial;
        // this.srcImage.src = currentTestimonial.testimonial_image;
    }

    touchStart(event) {
       this.touchStartX = event.touches[0].clientX; 
    }

    // Pass the event into the method
    touchEnd() {
        // Create a variable to determine where the finger was positioned when the touch ended
        const touchEndX = event.changedTouches[0].clientX;
        // Create a variable to determine the difference between the starting and ending position
        const touchDiff = this.touchStartX - touchEndX;
        // Create a comnditional statement
        // If the difference is greater than 50
            // Next Testimonial
        // If the difference is less than -50
            // Previous Testimonial
        if(touchDiff > 50) {
            this.nextTestimonial();
        }
        else if (touchDiff < -50) {
            this.prevTestimonial();
        }
    }

    // Pass the event into the method
    mouseStart(event) {
        this.isDragging = true;
        // Set the starting position
        this.mouseStartX = event.clientX;
    }

    // Pass the event into the method
    mouseMove(event) {
        // Log the position of the mouse to the console
        if(this.isDragging) {
            console.log(event.clientX);
        }
    }

    // Pass the event into the method
    mouseEnd() {
        // Check to see if the user is moving their mouse with dragging variable
        // If it's false just return
        if(!this.isDragging) return;

        // Create a variable to to store the position of the mouse when the user stopped clicking
        const mouseEndX = event.clientX;
        // Create a variable finding the differenc between the start and end position
        const mouseDiff = this.mouseStartX - mouseEndX;
        // If the difference is greater than 50 with Math absolute
        // Set the dragging to false
        // If the difference is greater than 0
            // Next Testimonial
        // If not
            // Previous Testimonial
        if(Math.abs(mouseDiff) > 50) {
            this.isDragging = false;
            if(mouseDiff > 0) {
                this.nextTestimonial();
            }
            else {
                this.prevTestimonial();
            }
        }
    }

    mouseLeave() {
        this.isDragging = false;
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
    { testimonial_name: "Jean", testimonial: "Can't wait to come back", testimonial_image: "Images/profiles/profile-3.jpg"}, 
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

        this.previousCard = document.getElementById("previous-card");
        this.currentCard = document.getElementById("current-card");
        this.nextCard = document.getElementById("next-card");

        this.render();
    }
    
    updateIndexes(cur) {
        this.indexes.current = cur;
        this.indexes.previous = (cur + 1) % reviews.length;
        this.indexes.next = (cur - 1 + reviews.length) % reviews.length; 
    }

    render() {
        this.updateIndexes(this.indexes.current);
        this.renderCard(this.reviews[this.indexes.previous], this.previousCard);
        this.renderCard(this.reviews[this.indexes.current], this.currentCard);
        this.renderCard(this.reviews[this.indexes.next], this.nextCard);

        this.previousCard.replaceWith(this.previousCard.cloneNode(true));
        this.nextCard.replaceWith(this.nextCard.cloneNode(true));

        this.previousCard = document.getElementById("previous-card");
        this.nextCard = document.getElementById("next-card");

        this.previousCard.addEventListener("click", () => this.navigate("prev"));
        this.nextCard.addEventListener("click", () => this.navigate("next"));
    }

    renderCard(review, element) {
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