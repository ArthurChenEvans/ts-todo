var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield query.getAllTodo();
    console.log(result.rows);
    res.render('index', { rows: result.rows });
}));
app.post('/todos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield query.addTodo(req.body['todo-description']);
    res.redirect('/');
}));
app.post('/todos/todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield query.deleteTodo(Number(req.params.id));
    res.redirect('/');
}));
app.listen(3000, () => console.log(`Listening on port ${3000}`));
