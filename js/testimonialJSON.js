function getData () {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.npoint.io/81f7633b4f570b98d83d', true)
    xhr.onload = () => {
      if (xhr.status === 200) {
        const responsData = JSON.parse(xhr.responseText)
      resolve(responsData);  
      }else{
        reject("Error loading data !!!");
      }   
    }
    xhr.onerror = () => {
        reject("Network errror !");
    }
    xhr.send()
  })
}

async function allStar() {
    const testimonials = await getData()
    const semuaBintang =  testimonials.map(allstar => {
    return `<div class="card_testimonial">
            <img src="${allstar.image}">
            <p>"${allstar.content}."</p>
            <p id="name">~ ${allstar.author}</p>
            </div>`;                                        
    })
    document.getElementById('mantap').innerHTML = semuaBintang.join(" ");
    
}

async function filteredTestimonials(rating) {
    const testimonials = await getData();
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
