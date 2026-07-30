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
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const { title, description } = req.body

            const updated = database.update('tasks', id, {
                title,
                description,
                updated_at: new Date().toISOString()
            })

            if (!updated) {
                return res.writeHead(404, 'Not Found').end()
            }

            return res.writeHead(204).end()
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params

            const deleted = database.delete('tasks', id)

            if (!deleted) {
                return res.writeHead(404, 'Not Found').end()
            }

            return res.writeHead(204).end()
        }
    },
    {
        method: 'PATCH',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params
            
            const task = database.select('tasks').find(t => t.id === id)

            if (!task) {
                return res.writeHead(404, 'Not Found').end()
            }

            const completed_at = task.completed_at
                ? null
                : new Date().toISOString()

            database.update('tasks', id, {
                completed_at,
            })

            return res.end()
        }
    },
]