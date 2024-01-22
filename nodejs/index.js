const express = require('express')
const app = express()
const port = 3000
const { development } = require(`./src/config/config.json`)
const { Sequelize, QueryTypes, where } = require(`sequelize`)
const moment = require('moment')
// const { SELECT } = require('sequelize/types/query-types')
const SequelizePool = new Sequelize(development)

app.set('view engine', 'hbs')
app.set('views', 'src/views')

app.use(`/assets`, express.static(`src/assets`));
app.use(express.urlencoded({ extended: false }));

app.get('/', home);
app.get('/addProject', addProject);
app.get('/detilProject/:id', detilProject);
app.get('/contactMe', contactMe);
app.get('/testi-OOP', testiOOP);
app.get('/testimonial_HoF', testiHoF);
app.get('/testimonial_JSON', testiJson);
app.post('/addProject', postProject);
app.get('/deleteProject/:id', deleteProject);
app.get('/editProjectPage/:id', editProjectPage)
app.post('/editProject/:id', postEditProject)

// const data = [];

// function home(req, res) {res.render(`index`);}
// function addProject(req, res) {res.render(`addProject`, { data });}
// function detilProject(req, res) {
//   const {id} = req.params;
//   const dataDetil = data.find(item => item.id == id)
//   res.render(`detilProject`, { data: dataDetil });
// }
function contactMe(req, res) { res.render(`contactMe`); }
function testiOOP(req, res) { res.render(`testi-OOP`); }
function testiHoF(req, res) { res.render(`testimonial_HoF`); }
function testiJson(req, res) { res.render(`testimonial_JSON`); }
// function postProject(req, res) {
//   const { nameProject, startDate, endDate, description, nodejs, reactjs, angular, vuejs, inputGambar } = req.body;

//   const calStartDate = new Date(startDate);
//   const calEndDate = new Date(endDate);

//   calStartDate.setUTCHours(0, 0, 0, 0);
//   calEndDate.setUTCHours(0, 0, 0, 0);

//   const oneDay = 24 * 60 * 60 * 1000;
//   const selisih = Math.abs(calEndDate - calStartDate);
//   const duration = Math.round(selisih / oneDay);

//   data.unshift({ nameProject, duration, startDate, endDate, description, nodejs, reactjs, angular, vuejs, inputGambar });

//   res.redirect('/addProject');
// }
// function deleteProject(req, res) {
//   const { id } = req.params
//   data.splice(id, 1);

//   res.redirect('/addProject')
// }
// function editProject(req, res) {
//   const{ id } = req.params;
//   const dataEdit = data[id]; 

//   data.splice( id, 1);  

//   res.render('editProject', { data: dataEdit })
// }
// function postEditProject(req, res) {
//   const { nameProject, startDate, endDate, description, nodejs, reactjs, angular, vuejs, inputGambar } = req.body;

//   data.unshift({ nameProject, duration, startDate, endDate, description, nodejs, reactjs, angular, vuejs, inputGambar });

//   res.redirect('/addProject');
// }

// Pemakaian Squelize
async function home(req, res) {
  try {
    const blogs = await SequelizePool.query("SELECT * FROM blogs", { type: QueryTypes.SELECT });
    console.log(blogs);
    res.render('index', { blogs })
  } catch (error) {
    throw error
  }
}

async function addProject(req, res) {
  try {
    const blogs = await SequelizePool.query("SELECT * FROM blogs", { type: QueryTypes.SELECT });
    res.render(`addProject`, { blogs })
  } catch (error) {
    throw error
  }
}

async function detilProject(req, res) {
  try {
    const { id } = req.params
    let blogs = await SequelizePool.query(`SELECT * FROM blogs WHERE id = ${id}`, { type: QueryTypes.SELECT });
    blogs = { ...blogs[0], startDate: moment(blogs[0].startDate).format('DD MMM YYYY'), endDate: moment(blogs[0].endDate).format('DD MMM YYYY') }
    res.render('detilProject', { blogs })
  } catch (error) {
    throw error
  }
}

async function postProject(req, res) {
  try {
    const { nameProject, startDate, endDate, description, nodejs, reactjs, angular, vuejs } = req.body;

    const calStartDate = new Date(startDate);
    const calEndDate = new Date(endDate);

    calStartDate.setUTCHours(0, 0, 0, 0);
    calEndDate.setUTCHours(0, 0, 0, 0);

    const oneDay = 24 * 60 * 60 * 1000;
    const selisih = Math.abs(calEndDate - calStartDate);
    const duration = Math.round(selisih / oneDay);


    const query = await SequelizePool.query(`INSERT INTO blogs (
        title, 
        content, 
        "startDate", 
        "endDate",  
        "nodeJs", 
        "reactJs", 
         angular, 
        "vueJs", 
        "createdAt", 
        "updatedAt", 
        duration

        )VALUES(

        '${nameProject}',
        '${description}', 
        '${startDate}',
        '${endDate}',
        '${nodejs}', 
        '${reactjs}', 
        '${angular}', 
        '${vuejs}', 
         NOW(), 
         NOW(), 
        '${duration}'
        
        )`);
    res.redirect('/');
  } catch (error) {
    throw error
  }
}

async function editProjectPage(req, res) {
  try {
    const { id } = req.params
    let blogs = await SequelizePool.query(`SELECT * FROM blogs WHERE id = ${id}`, { type: QueryTypes.SELECT });
    blogs = { ...blogs[0], startDate: moment(blogs[0].startDate).format('YYYY-MM-DD'), endDate: moment(blogs[0].endDate).format('YYYY-MM-DD') }
    res.render('editProjectPage', { blogs });
  } catch (error) {
    throw error
  }
}

async function postEditProject(req, res) {
  try {
    const { id } = req.params
    const { nameProject, startDate, endDate, description, nodejs, reactjs, angular, vuejs, inputGambar } = req.body;
    const calStartDate = new Date(startDate);
    const calEndDate = new Date(endDate);

    calStartDate.setUTCHours(0, 0, 0, 0);
    calEndDate.setUTCHours(0, 0, 0, 0);

    const oneDay = 24 * 60 * 60 * 1000;
    const selisih = Math.abs(calEndDate - calStartDate);
    const duration = Math.round(selisih / oneDay);
    const blogs = await SequelizePool.query(`UPDATE blogs SET 
        title       = '${nameProject}', 
        content     = '${description}', 
        "startDate" = '${startDate}',
        "endDate"   = '${endDate}',
        "nodeJs"    = '${nodejs}', 
        "reactJs"   = '${reactjs}', 
         angular    = '${angular}', 
        "vueJs"     = '${vuejs}',
        "updatedAt" =  NOW(), 
         duration   = '${duration}'

         WHERE id = ${id} 
         
      `)
    res.redirect('/');
  } catch (error) {
    throw error
  }
}

async function deleteProject(req, res) {
  try {
    const { id } = req.params
    const blogs = await SequelizePool.query(`DELETE FROM blogs WHERE id = ${id}`)
    res.redirect('/')
  } catch (error) {
    throw error
  }
}




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})