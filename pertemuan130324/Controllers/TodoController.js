const database = require('../db/connection');
const response = require('../Helpers/response');

// membuat getTodo = localhost:6000/api/todos
const getAllTodo = (req, res) => {
    const querySql = 'SELECT * FROM todo';
    database.query(querySql, (err, result) => {
        if (err) throw (err);
        response(res, 200, { message: 'Success get todos', data: result })
        })
}

const storeTodo = async (req, res) => { 
    const { title, description } = req.body;
    const validTittle = await validation(title) 
    const  validDescription = await validation(description)
    if (validTittle && validDescription) {
        database.query('insert into todo (title, description) values (?, ?)', [title, description], (err, result) => {
            if (err) throw (err);
            response(res, 201, { massage: 'success created todo', })
        })
    } else if (!validTittle && !validDescription) {
        response(res, 400, { message: 'title and description wajib di isi' });
    } else {
        if (!validTittle) response(res, 400, { message: 'titlewajib di isi' });
        if (!validDescription) response(res, 400, { message: 'description wajib di isi' });
            
    }
        
}

const updateTodo = (req, res) => { 
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
}

const showTodo = (req, res) => {
    const querySql = 'SELECT * FROM todo';
    database.query(querySql, (err, result) => {
        if (err) throw (err);
        response(res, 200, { message: 'Success get todos', data: result })
        })
}

const deleteTodo = (req, res) => { 
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
}

const validation = async (data) => {
    if (data.trim() == "") return false;
    return true;
 }

module.exports = {getAllTodo, storeTodo, updateTodo, showTodo, deleteTodo,}