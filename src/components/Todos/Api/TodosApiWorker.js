import axios from "axios";

class TodosApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/todos"
        });
    }

    async getAllTodos() {
        return await this.#axios.get("/getAll");
    }

    async addNewTodo(todo) {
        return await this.#axios.post("/addNew", todo);
    }
}

export default TodosApiWorker;