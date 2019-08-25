import { CONSTANTS } from '../Constants/constants.js'

export default class ToDoItem {
  constructor(list, itemDescription) {
    this.list = list
    this.index = list.toDoItems.length
    this.title = itemDescription
  }

  listName() {
    return `list${this.list.index}`
  }

  prependListName(str) {
    return this.listName() + str
  }

  listItemName() {
    return this.prependListName(`Item${this.index}`)
  }

  checkBoxName() {
    return this.prependListName(`Done${this.index}`)
  }

  deleteClick() {
    return `onclick = "${CONSTANTS.CONTROLLER}.${CONSTANTS.REMOVE_ITEM}(${this.list.index}, ${this.index})"`
  }

  getTemplate() {
    return `
      <div class="input-group mb-3" name="${this.listItemName()}">
          <div class="input-group-prepend">
              <div class="input-group-text">
                  <input type="checkbox" name="${this.checkBoxName()}">
              </div>
          </div>
          <input type="text" class="form-control" placeholder="${this.title}" readonly>
          <div class="input-group-append">
              <button ${this.deleteClick()} type="button" class="btn btn-danger">X</button>
          </div>
      </div>
    `
  }
}