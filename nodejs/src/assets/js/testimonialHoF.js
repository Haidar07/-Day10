const testimonials = [
{
    image:`https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    content:'Hello ngab, saya itu Fullstack developer lhoo!!!',
    author:'-Haidarjf07',
    rating:5
},{
    image:`https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    content:'Hay gesss, saya frontEnd Dev lhoo!!!',
    author:'-Zhakayak',
    rating:4
},{
    image:`https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    content:'Hi, saya backEnd Dev nih, senggol dong!!!',
    author:'-Letum',
    rating:3
},{
    image:`https://images.unsplash.com/photo-1622612017516-54223966d2cd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    content:'Hi, saya kang kuli muda nih boy, gg nggk ???',
    author:'-KuliMan',
    rating:2
},{
    image:`https://images.unsplash.com/photo-1590600424262-38d39f98b898?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    content:'Hi, saya kang sopir pesawat, mau jalan-jalan nggk???',
    author:'-PilotMan',
    rating:1
},{
    image:`https://images.unsplash.com/photo-1687317585643-366e4c18d9ce?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    content:'Hi, saya kang supir kereta, terus maju kedepan!!!',
    author:'-Baeldung',
    rating:3
},{
    image:`https://images.unsplash.com/photo-1526584720376-57b19fffff13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    content:'Hi, saya kang sulap nih coy, Fire Ball!!!',
    author:'-Orion',
    rating:5
}

]

function allStar() {
  const semuaBintang =  testimonials.map(allstar => {
    return `<div class="card_testimonial">
            <img src="${allstar.image}">
            <p>"${allstar.content}."</p>
            <p id="name">~ ${allstar.author}</p>
            </div>`;                                        
    })
    document.getElementById('mantap').innerHTML = semuaBintang.join(" ");
    
}

function filteredTestimonials(rating) {
const hasilFilterDanMap = testimonials.filter(value => value.rating === rating).map(value => {
    return `<div class="card_testimonial">
            <img src="${value.image}">
            <p>"${value.content}."</p>
            <p id="name">~ ${value.author}</p>
            </div>`;
    })

    document.getElementById('mantap').innerHTML = hasilFilterDanMap.join(" ")
                                                                                                      
}

allStar();