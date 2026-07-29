import { randomUUID } from "node:crypto"
import { Database } from "./database.js";

const database = new Database();

export const routes = [
    {
        method: 'POST',
        path: '/tasks',
        handler: (req, res) => {
            const { title, description } = req.body;

            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at: null,
                created_at: new Date().toISOString(),
                updated_at: null,
            }

            database.insert('tasks', task)

            return res.writeHead(201).end();
        }
    },
    {
        method: 'GET',
        path: '',
        handler: (req, res) => {

            return res.end()
        }
    },
    {
        method: 'PUT',
        path: '',
        handler: (req, res) => {

            return res.end()
        }
    },
    {
        method: 'DELETE',
        path: '',
        handler: (req, res) => {

            return res.end()
        }
    },
    {
        method: 'PATCH',
        path: '',
        handler: (req, res) => {

            return res.end()
        }
    },
]