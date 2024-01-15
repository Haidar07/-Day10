const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')
app.set('views', 'src/views')

app.use(`/assets`, express.static(`src/assets`));

app.get('/', home);
app.get('/addProject', addProject);
app.get('/detilProject/:id', detilProject);
app.get('/contactMe', contactMe);
app.get('/testi-OOP', testiOOP);
app.get('/testimonial_HoF', testiHoF);
app.get('/testimonial_JSON', testiJson);

function home(req, res) {res.render(`index`);}
function addProject(req, res) {res.render(`addProject`);}
function detilProject(req, res) {
  const {id} = req.params;
  console.log(id);

  res.render(`detilProject`, { id });
}
function contactMe(req, res) {res.render(`contactMe`);}
function testiOOP(req, res) {res.render(`testi-OOP`);}
function testiHoF(req, res) {res.render(`testimonial_HoF`);}
function testiJson(req, res) {res.render(`testimonial_JSON`);}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})