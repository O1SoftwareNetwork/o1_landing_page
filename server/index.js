const express = require('express')
const app = express()
const db = require('./db/postgres');
const port = 3000

//todo1 : testimonials - db (done)
//todo2 : projects - db (done)
//todo3 : Project's details - db (done)
//todo4 : use github api to get projects info

//status 0 - deleted
//status 1 - active
//status 2 - passive
//status 3 - pending

function statusIntToText(statusInt) {
  let result = '';
  switch (statusInt) {
    case 0:
      result = 'deleted'
      break;
    case 1:
      result = 'active'
      break;
    case 2:
      result = 'passive'
      break;
    case 3:
      result = 'pending'
      break;
    default:
      result = 'unknown'
      break;
  }
  return result;
}

app.get('/', (req, res) => {
  res.send('ok');
});


app.get('/testimonials', async (req, res) => {

  const query = `select 
        t.id, t.text, t.topic, t.email, p.title "projectTitle"
        from testimonials t
    inner join projects p on ( t.projectid = p.id )`;

  let testimonials = await db.runQuery(query, []);

  res.send(testimonials);
});

app.get('/projects', async (req, res) => {
  const query = `select * from projects`;
  let projects = await db.runQuery(query, []);

  for (let i = 0; i < projects.length; i++) {
    let item = projects[i];
    projects[i].statusText =  statusIntToText(item.status);
  }
  res.send(projects);
});

app.get('/projects/:id',async (req, res) =>{
  let projectId = req.params.id;
  const query = `select * from projects where id=$1`;
  let projects = await db.runQuery(query, [projectId]);
  res.send(projects[0]);
});



app.get('/tim', (req, res) => {
  res.send('this is tim');
});

app.get('/guest-user', (req, res) => {
  res.send('this is a guest user');
});

app.get('/Tiffany', (req, res) => {
  res.send('this is tiffany');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
