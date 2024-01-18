const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')
app.set('views', 'src/views')

app.use(`/assets`, express.static(`src/assets`));
app.use(express.urlencoded({ extended:false }));

app.get('/', home);
app.get('/addProject', addProject);
app.get('/detilProject/:id', detilProject);
app.get('/contactMe', contactMe);
app.get('/testi-OOP', testiOOP);
app.get('/testimonial_HoF', testiHoF);
app.get('/testimonial_JSON', testiJson);
app.post('/addProject', postProject);
app.get('/deleteProject/:id', deleteProject);
app.get('/editProject/:id', editProject)
app.post('/editProject', postEditProject)

const data = [];

function home(req, res) {res.render(`index`);}
function addProject(req, res) {res.render(`addProject`, { data });}
function detilProject(req, res) {
  const {id} = req.params;
  const dataDetil = data[id]
  res.render(`detilProject`, { data: dataDetil });
}
function contactMe(req, res) {res.render(`contactMe`);}
function testiOOP(req, res) {res.render(`testi-OOP`);}
function testiHoF(req, res) {res.render(`testimonial_HoF`);}
function testiJson(req, res) {res.render(`testimonial_JSON`);}
function postProject(req, res) {
  const { nameProject, startDate, endDate, description, nodejs, reactjs, angular, vuejs, inputGambar } = req.body;

  const calStartDate = new Date(startDate);
  const calEndDate = new Date(endDate);

  calStartDate.setUTCHours(0, 0, 0, 0);
  calEndDate.setUTCHours(0, 0, 0, 0);

  const oneDay = 24 * 60 * 60 * 1000;
  const selisih = Math.abs(calEndDate - calStartDate);
  const duration = Math.round(selisih / oneDay);

  data.unshift({ nameProject, duration, startDate, endDate, description, nodejs, reactjs, angular, vuejs, inputGambar });

  res.redirect('/addProject');
}
function deleteProject(req, res) {
  const { id } = req.params
  data.splice( id, 1 );

  res.redirect('/addProject')
}
function editProject(req, res) {
  const{ id } = req.params;
  const dataEdit = data[id]; 
  
  data.splice( id, 1);  

  res.render('editProject', { data: dataEdit })
}
function postEditProject(req, res) {
  const { nameProject, startDate, endDate, description, nodejs, reactjs, angular, vuejs, inputGambar } = req.body;

  data.unshift({ nameProject, duration, startDate, endDate, description, nodejs, reactjs, angular, vuejs, inputGambar });

  res.redirect('/addProject');
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})