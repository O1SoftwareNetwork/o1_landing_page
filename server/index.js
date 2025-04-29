const express = require('express')
const app = express()
const db = require('./db/postgres');
const port = 3000

//todo1 : testimonials - db (done)
//todo2 : projects - db 
//todo3 : Project's details - db
//todo4 : use github api to get projects info


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



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
