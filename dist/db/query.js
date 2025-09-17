var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { pool } from './db';
export const getTodo = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const row = yield pool.query("SELECT * FROM todo WHERE id = $1", [id]);
            return row;
        }
        catch (err) {
            throw new Error(err.message);
        }
    });
};
export const getAllTodo = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rows = yield pool.query("SELECT * FROM todo");
            return rows;
        }
        catch (err) {
            throw new Error(err.message);
        }
    });
};
export const addTodo = function (description) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const row = yield pool.query("INSERT INTO todo (description) VALUES ($1);", [description]);
            return row;
        }
        catch (err) {
            throw new Error(err.message);
        }
    });
};
export const updateTodo = function (description) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const row = yield pool.query("UPDATE todo SET description = $1", [description]);
            return row;
        }
        catch (err) {
            throw new Error(err.message);
        }
    });
};
export const deleteTodo = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pool.query("DELETE FROM todo WHERE id = $1", [id]);
        }
        catch (err) {
            throw new Error(err.message);
        }
    });
};
