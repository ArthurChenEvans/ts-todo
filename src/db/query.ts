import { pool } from './db';

export const getTodo = async function(id: number) {
    try {
        const row = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);
        return row;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

export const getAllTodo = async function() {
    try {
        const rows = await pool.query("SELECT * FROM todo");
        return rows;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

export const addTodo = async function(description: string) {
    try {
        const row = await pool.query("INSERT INTO todo (description) VALUES ($1);", [description]);
        return row;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

export const updateTodo = async function(description: string) {
    try {
        const row = await pool.query("UPDATE todo SET description = $1", [description]);
        return row;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

export const deleteTodo = async function(id: number) {
    try {
        await pool.query("DELETE FROM todo WHERE id = $1", [id]);
    } catch (err: any) {
        throw new Error(err.message);
    }
}