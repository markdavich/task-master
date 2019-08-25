import List from "../Models/List.js";

//Private
let _state = {
    lists: []
}


//Public
export default class ValuesService {
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?
    constructor() {

    }

    getListTitle(listTitle) {
        return listTitle === '' ? `New List ${_state.lists.length + 1}` : listTitle
    }

    /**
     * 
     * @param {string} listTitle The title of the list
     */
    addList(listTitle) {
        let index = _state.lists.length
        let data = {}

        data.index = index
        data.title = this.getListTitle(listTitle)
        data.toDoItems = []

        _state.lists.push(new List(data))
        this.saveLists()
    }
    removeList(index) {
        _state.lists.splice(index, 1)

        _state.lists.forEach((list, index) => {
            list.index = index
        })

        this.saveLists()
    }
    addToDoItem() {

    }
    deleteToDoItem(toDoItem) {

    }

    get Lists() {
        return _state.lists.map(list => new List(list))
    }


    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
