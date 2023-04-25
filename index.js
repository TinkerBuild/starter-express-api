const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pool = new Pool({
  user: 'xvchzlfr',
  host: 'john.db.elephantsql.com',
  database: 'xvchzlfr',
  password: 'uMRor5vOsOfWzCkI9XF-JdQFCUvJkmVn',
  port: 5432,
});

app.get('/api/users', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM users_table');
    res.json(rows);
  });
  
  app.post('/api/users', async (req, res) => {
    const { username, email } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO users_table (username, email) VALUES ($1, $2) RETURNING *',
      [username, email]
    );
    res.json(rows[0]);
  });
  
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });

// const express = require('express')
// const app = express()
// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yolo123333 444344wwrrrww!')
// })
// app.listen(process.env.PORT || 3000)