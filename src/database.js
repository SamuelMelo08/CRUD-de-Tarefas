import fs from 'node:fs';

const databasePath = new URL('../db.json', import.meta.url);

export class Database {
    #database = {}

    // Ler o arquivo db.json e se não existir chamar persist
    constructor() {
        fs.readFile(databasePath, 'utf8', (err, data) => {
            if (err) {
                this.#persist();
            } else {
                this.#database = JSON.parse(data);
            }
        });
    }

    // Cria o arquivo db.json e escreve as informações que estão no database
    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database) , (err) => {
            if (err) {
                console.error(err);
            }
        });
    }

    select() {

    }

    // Insere uma tarefa na tabela tasks do database
    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = data
        }

        // Salva os dados de database
        this.#persist();

        return data
    }

    update() {

    }

    delete(){
        
    }
}