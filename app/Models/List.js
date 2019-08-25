import ToDoItem from "./ToDoItem.js";

export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    /**
     * @param {object} data Index, Title, and Items
     * @param {number} data.index The index of the this list (ListService._state.lists.length)
     * @param {string} data.title The title the user will see for this list
     * @param {array} data.toDoItems An array of ToDoItems @see {ToDoItems.js}
     */
    constructor(data) {
        this.index = data.index
        this.title = data.title
        this._toDo = data.toDoItems || []

        this.toDoItems = []

        this._toDo.forEach((item) => {
            let toDo = ToDoItem.item(item.title, item.done)
            this.toDoItems.push(new ToDoItem(this, toDo))
        })
    }

    listName() {
        return `list${this.index}`
    }

    newListInputName() {
        return `newList${this.index}`
    }

    toDoItemsName() {
        return `listItems${this.index}`
    }

    getToDoTemplate() {
        let template = ''
        this.toDoItems.forEach(item => {
            template += item.getTemplate()
        })
        return template
    }

    getHeader() {
        return `
            <div class="card-header">
                ${this.title}
                <button onclick="app.controllers.listController.removeList(${this.index})" type="button" class="btn btn-danger delete-list">x</button>
            </div>
        `
    }

    getTemplate(index) {
        let template = `
            <div class="col-12 col-sm-4 col-lg-4 card border-secondary mb-3" name="${this.listName()}">
                ${this.getHeader()}
                <div class="input-group mb-3">
                    <input type="text" placeholder="New List Item" class="form-control" id="${this.newListInputName()}">
                    <div class="input-group-append">
                        <button onclick="app.controllers.listController.addItem(${this.index})" type="button" class="btn btn-success">Add</button>
                    </div>
                </div>
                <div class="card-body text-secondary" name="${this.toDoItemsName()}">
                    ${this.getToDoTemplate()}
                </div>
            </div>
        `
        return template
    }
}