const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./db/connection');
const response = require('./Helpers/response')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 6000;

app.listen(PORT, () => { 
    console.log(`Server is running on port:  ${PORT}`);
})

// [GET] get data todos = localhost:6000/api/todos / localhost:6000/todos

// req = request, res = response
app.get('/api/todos', (req, res, next) => {
    database.query('SELECT * FROM todo', (err, result) => {
        if (err) throw (err);
        response(res, 200, {message: 'Success get todos', data:result })
        // if (err) throw err;
        // res.json({
        //     massage: 'success',
        //     data: result
        // });
    })
}) 

// [POST] Menambahkan data baru todo = localhost:6000/api/todos / localhost:6000/todos
app.post('/api/todos', (req, res) => {
    const { title, description } = req.body;
    database.query('insert into todo (title, description) values (?, ?)', [title, description], (err, result) => {
        if (err) throw err;
        res.json({
            massage: 'success created todo',
        }, 201)
    })
})

// [PUT] mengubah data berdasarkan id = localhost:6000/api/todos1 / localhost:6000/todos/1

app.put('/api/todos/:id', (req, res) => {
    const { title, description } = req.body;
    const  id  = req.params.id;
    database.query('UPDATE todo SET title = ?, description = ? WHERE id = ?',
        [title, description, id], (err, result) => {
            if (err) {
                throw err;
            } else {
                if (result.length === 0) {
                    res.json({
                        massage: `Todo ${id} not found`
                    }, 404);
                } else {
                    res.json({
                    massage: 'Success updated todo'
                    }, 201)
                }
            }
        })
}) 

// [DELETE] menghapus data todo berdasarkan id = localhost:6000/api/todos1 / localhost:6000/todos/1

app.delete("/api/todos/:id", (req, res) => {
  const id = req.params.id;
  database.query("DELETE from todo where id = ?", [id], (err, result) => {
    if (err) {
      throw err;
    } else {
      if (result.length === 0) {
        res.json(
          {
            message: `Todo ${id} not found `,
          },
          404
        );
      } else {
        res.json(
          {
            message: "Success delete todo!",
          },
          200
        );
      }
    }
  });
});

// [SHOW] menghapus data todo berdasarkan id = localhost:6000/api/todos1 / localhost:6000/todos/1
app.get("/api/todos/:id", (req, res) => {
  const id = req.params.id;
    database.query(`SELECT * from todo where id =  ${ id }` , (err, result) => {
    if (err) {
      throw err;
    } else {
      if (result.affectedRows === 0) {
        res.json({
            message: `Todo ${id} not found `,
          },404);
      } else {
        res.json({
            message: `Success get todo ${id}`,
            data: result[0]
          },200);
      }
    }
  });
});
