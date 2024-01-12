class TestimonialOop {
    #image = "";
    #content = "";
    #author = "";

    constructor(image, content, author) {
        this.#image = image;
        this.#content = content;
        this.#author = author;
    }

    set image(val) {
        this.#image = val;
    }
    set content(val) {
        this.#content = val;
    }
    set author(val) {
        this.#author = val;
    }

    get image() {
        return this.#image;
    }
    get content() {
        return this.#content;
    }
    get author() {
        return this.#author;
    }

    html(){
        return `<div class="card_testimonial">
                <img src="${this.#image}">
                <p>"${this.#content}."</p>
                <p id="name">~ ${this.#author}</p>
                </div>`
    }

}

const card1 = new TestimonialOop("https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                    "Halo, saya adalah seorang fullstack Developer !", "-Haidar Fakhri JF");
const card2 = new TestimonialOop("https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                    "Halo, saya adalah seorang web Developer!", "-Aing Maung");
const card3 = new TestimonialOop("https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                    "Halo, saya adalah seorang Cloud Engineer!", "-Anonymous");

const testimonials = [card1, card2, card3];
let testimonialsHTML = '';

for (let index = 0; index < testimonials.length; index++) {
    testimonialsHTML += testimonials[index].html();
}

document.getElementById('mantap').innerHTML = testimonialsHTML