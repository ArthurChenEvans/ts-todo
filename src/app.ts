import express from 'express';
import path from 'path';
import * as query from '../src/db/query';

const app = express();
const __dirname = import.meta.dirname;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../dist/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', async (req, res) => {
    const result = await query.getAllTodo();
    res.render('index', { rows: result.rows });
});

app.post('/todos', async (req, res) => {
    await query.addTodo(req.body['todo-description']);
    res.redirect('/');
})

app.post('/todos/todo/:id', async (req, res) => {
    console.log(req.body['isDelete']);

    if(req.body['isDelete'] === 'true') {
        await query.deleteTodo(Number(req.params.id));
        return res.redirect('/');
    }

    await query.updateTodo(req.body[`todo-${req.params.id}`], Number(req.params.id));
    res.redirect('/');
})

app.listen(3000, () => console.log(`Listening on port ${3000}`));