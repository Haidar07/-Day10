const blogs = []

function addBlog (e) {
  e.preventDefault()

  const title = document.getElementById('nameProject').value
  const calculateDuration = () => {
    const startDate = new Date(document.getElementById('startDate').value)
    const endDate = new Date(document.getElementById('endDate').value)

    startDate.setHours(0, 0, 0, 0)
    endDate.setHours(0, 0, 0, 0)
    const oneDay = 24 * 60 * 60 * 1000
    const selisih = Math.abs(endDate - startDate)
    const hasil = Math.round(selisih / oneDay)

    return hasil
  }
  const duration = calculateDuration()
  const content = document.getElementById('description').value

  // bagian checkbox
  const nodejs = document.getElementById('nodejs').checked
  const reactjs = document.getElementById('reactjs').checked
  const angular = document.getElementById('angular').checked
  const vuejs = document.getElementById('vuejs').checked

  // bagian input gambar
  let image = document.getElementById('inputGambar').files
  image = URL.createObjectURL(image[0])

  // masukin setiap wadah nilai ke 1 object biar mudah
  const blog = {
    title,
    duration,
    content,
    nodejs,
    reactjs,
    angular,
    vuejs,
    image
  }

  blogs.unshift(blog)
  renderBlog()
  console.log('blog', blogs)
}

function renderBlog () {
  let html = ''

  for (let index = 0; index < blogs.length; index++) {
    html += 
       `<div class="card" style="width: 16rem;">
        <a href="detil_project.html" target="_blank">
          <img src="${blogs[index].image}" class="card-img-top" />
        </a>
        <div class="card-body">
          <h5 class="card-title">${blogs[index].title}</h5>
          <p id="durasi">Durasi pengerjaan : ${blogs[index].duration} hari</p>
          <p class="card-text">${blogs[index].content}</p>
          <div class="d-flex">
            ${blogs[index].nodejs ? `<i class="fa-brands fa-node-js"></i>` : ''}
            ${blogs[index].reactjs ? `<i class="fa-brands fa-react"></i>` : ''}
            ${blogs[index].angular ? `<i class="fa-brands fa-angular"></i>` : ''}
            ${blogs[index].vuejs ? `<i class="fa-brands fa-vuejs"></i>` : ''}
          </div>
          <div class="btn d-flex justify-content-center mt-2 gap-3">
            <button type="button" class="btn btn-primary" style="width:5rem; height:3rem;">Edit</button>
            <button type="button" class="btn btn-danger" style="width:5rem; height:3rem;">Delete</button>
          </div>
        </div>
      </div>`
        
  }
  document.getElementById('contentBlogs').innerHTML = html
}

renderBlog()

feather.replace()
