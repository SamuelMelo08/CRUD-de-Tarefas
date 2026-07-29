import { randomUUID } from "node:crypto"
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
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
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { search } = req.query

            const users = database.select('tasks', search ? {
                title: search,
                description: search,
            } : null)

            return res.end(JSON.stringify(users))
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