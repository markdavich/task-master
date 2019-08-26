import { CONSTANTS } from '../Constants/constants.js'

export default class ToDoItem {
  constructor(list, data) {
    this.listIndex = list.index
    this.index = list.toDoItems.length
    this.title = data.title
    this.done = data.done
  }

  listName() {
    return `list${this.listIndex}`
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
    return `onclick = "${CONSTANTS.CONTROLLER}.${CONSTANTS.REMOVE_ITEM}(${this.listIndex}, ${this.index})"`
  }

  getChecked() {
    return this.done ? 'checked' : ''
  }

  getDoneClick() {
    return `onchange = "${CONSTANTS.CONTROLLER}.${CONSTANTS.DONE_CLICK}(event, ${this.listIndex}, ${this.index})"`
  }

  getStyle() {
    return this.done ? 'checked' : ''
  }

  getTemplate() {
    return `
      <div class="input-group mb-3" name="${this.listItemName()}">
          <div class="input-group-prepend">
              <div class="input-group-text">
                  <input ${this.getDoneClick()} type="checkbox" name="${this.checkBoxName()}" ${this.getChecked()}>
              </div>
          </div>
          <input type="text" class="form-control ${this.getStyle()}" value="${this.title}" readonly>
          <div class="input-group-append">
              <button ${this.deleteClick()} type="button" class="btn btn-danger">X</button>
          </div>
      </div>
    `
  }

  static item(title, done) {
    return {
      title: title,
      done: done
    }
  }
}