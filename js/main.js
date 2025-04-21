/**
 * METHOD ONE METHOD ONE METHOD ONE METHOD ONE METHOD ONE METHOD ONE METHOD ONE METHOD ONE 
 * MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE 
 */
class TestimonialSlider {
    constructor(testimonials) {
        this.testimonials = testimonials;
        this.index = 0;

        this.testimonialElement = document.getElementById("testimonial");

        // Mobile
        this.touchStartX = 0;

        // Desktop
        this.isDragging = false;
        this.mouseStartX = 0;
        
        this.testimonialElement.addEventListener("touchstart", (event) => this.touchStart(event));
        this.testimonialElement.addEventListener("touchend", (event) => this.touchEnd(event));

        this.testimonialElement.addEventListener("mousedown", (event) => this.mouseStart(event));
        this.testimonialElement.addEventListener("mousemove", (event) => this.mouseMove(event));
        this.testimonialElement.addEventListener("mouseup", (event) => this.mouseEnd(event));
        this.testimonialElement.addEventListener("mouseleave", (event) => this.mouseLeave(event));
    
        this.updateTestimonial();
    }

    updateTestimonial () {
        const currentTestimonial = this.testimonials[this.index];
        this.testimonialElement.innerHTML = `
            <div class="testimonials__component">
                <div class="testimonials__person-name">
                    <span id="testimonial_name">${currentTestimonial.testimonial_name}</span>
                </div>
            </div>
            <p id="testimonial_review" class="testimonials__review">${currentTestimonial.testimonial}</p>
        `;
    }

    touchStart(event) {
       this.touchStartX = event.touches[0].clientX
    }

    touchEnd(event) {
        const touchEndX = event.changedTouches[0].clientX
        const touchDiff = this.touchStartX - touchEndX;

        if (touchDiff > 50) {
            this.nextTestimonial();
        }
        else if (touchDiff < 50) {
            this.prevTestimonial();
        }
    }

    mouseStart(event) {
        this.isDragging = true;
        this.mouseStartX = event.clientX;
    }

    mouseMove(event) {
        if (this.isDragging) {
            console.log(event.clientX);
        }
    }

    mouseEnd(event) {
        if (!this.isDragging) return;
        const mouseEndX = event.clientX
        const mouseDiff = this.mouseStartX - mouseEndX;
        
        if (Math.abs(mouseDiff) > 50) {
            this.isDragging = false;
            if (mouseDiff > 0) {
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
    { testimonial_name: "John Doe", testimonial: "Great experience! Highly recommend! Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti felis netus mattis nascetur;  tempus suspendisse. Taciti felis netus mattis nascetur;  tempus suspendisse. Taciti felis netus mattis nascetur;  tempus suspendisse."},
    { testimonial_name: "Tiffany ", testimonial: "Lovely! Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti felis netus mattis nascetur;  tempus suspendisse. Taciti felis netus mattis nascetur;  tempus suspendisse. Taciti felis netus mattis nascetur;  tempus suspendisse."},
    { testimonial_name: "Brandon", testimonial: "Can't wait to come back! Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti felis netus mattis nascetur;  tempus suspendisse. Taciti felis netus mattis nascetur;  tempus suspendisse. Taciti felis netus mattis nascetur;  tempus suspendisse."}, 
    { testimonial_name: "T", testimonial: "I really enjoyed the workshop! Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti felis netus mattis nascetur;  tempus suspendisse. Taciti felis netus mattis nascetur;  tempus suspendisse. Taciti felis netus mattis nascetur;  tempus suspendisse."},
];

const testimonialSlider = new TestimonialSlider(testimonials);

/**
 * METHOD TWO METHOD TWO METHOD TWO METHOD TWO METHOD TWO METHOD TWO METHOD TWO METHOD TWO METHOD TWO METHOD TWO 
 * DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP DESKTOP 
 */

class TestimonialCarousel {
    constructor(reviews) {
        this.reviews = reviews;
        this.indexes = { current: 0, previous: null, next: null };
        this.testimonialContainer = document.getElementById("card-container");

        this.render();
    }
    
    updateIndexes(cur) {
        this.indexes.current = cur;
        this.indexes.previous = (cur + 1) % reviews.length;
        this.indexes.next = (cur - 1 + reviews.length) % reviews.length; 
    }

    render() {
        this.updateIndexes(this.indexes.current);

        this.testimonialContainer.innerHTML = "";
        
        this.testimonialContainer.appendChild(this.createCard(this.reviews[this.indexes.previous], "previous-card"));
        this.testimonialContainer.appendChild(this.createCard(this.reviews[this.indexes.current], "current-card"));
        this.testimonialContainer.appendChild(this.createCard(this.reviews[this.indexes.next], "next-card"));
    }

    createCard(review, className) {
        const card = document.createElement("div");
        card.className = `card card-container__${className}`;
        card.id = className;

        const header = document.createElement("h2");
        const subHeader = document.createElement("h3");
        const paragraph = document.createElement("p");

        header.innerText = review.name;
        subHeader.innerText = review.title;
        paragraph.innerText = review.review;

        card.appendChild(header);
        card.appendChild(subHeader);
        card.appendChild(paragraph);

        card.addEventListener("click", () => this.handleClick(className));

        return card;
    }

    handleClick(direction) {
        if (direction === "previous-card") {
            this.indexes.current = (this.indexes.current - 1 + reviews.length) % reviews.length;
        } else if (direction === "next-card") {
            this.indexes.current = (this.indexes.current + 1) % reviews.length; 
        }
        
        this.render();
    }
}

const reviews = [
    {
        name: "Jim Peterson",
        title: "This is title of review.",
        review: "This is the review card created by Jim Peterson"
    },
    {
        name: "Brandon",
        title: "This is title of review.",
        review: "This is the review card created by Brandon"
    },
    {
        name: "Tiffany",
        title: "This is title of review.",
        review: "This is the review card created by Tiffany"
    },
    {
        name: "Tee",
        title: "This is title of review.",
        review: "This is the review card created by Tee"
    },
    {
        name: "Jean",
        title: "This is title of review.",
        review: "This is the review card created by Jean"
    }
];

const testimonialCarousel = new TestimonialCarousel(reviews);