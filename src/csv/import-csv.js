import { parse } from "csv-parse"
import fs from "node:fs"

const parser = fs
    .createReadStream('./src/csv/tasks-csv.csv')
    .pipe(
        parse({ columns: true })
    )

for await ( const row of parser ) {

    fetch('http://localhost:3334/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(row)
    })

}