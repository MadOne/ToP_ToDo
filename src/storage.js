import ToDoList from "./ToDoList";
import ToDoItem from "./toDoItem";
import ToDoLists from "./toDoLists";

export default class Storage {
	constructor(myToDoListsObject) {
		this.myToDoListsObject = myToDoListsObject;
	}
	serialize() {
		let mybackup = JSON.stringify(this.myToDoListsObject, (key, value) => {
			if (value && typeof value === "object") {
				value.__type = value.constructor.name;
			}

			return value;
		});
		localStorage.setItem("backup", mybackup);
		//console.log("values stored");
		//console.log(mybackup);
	}

	deserialize() {
		const classes = {
			Object,
			ToDoLists,
			ToDoList,
			ToDoItem,
		};
		const myJsonString = localStorage.getItem("backup");
		//console.log(myJsonString);

		this.myToDoListsObject = JSON.parse(myJsonString, (key, value) => {
			if (value && typeof value === "object" && value.__type) {
				const DynamicClass = classes[value.__type];
				value = Object.assign(new DynamicClass(), value);
				delete value.__type;
			}
			return value;
		});
		console.log(this.myToDoListsObject);

		if (this.myToDoListsObject == null) {
			this.myToDoListsObject = new ToDoLists();
			let myFirstToDoList = new ToDoList("My first ToDo List");
			this.myToDoListsObject.addItem(myFirstToDoList);
			console.log("executed!");
		}
		console.log("executed");
		console.log(this.myToDoListsObject);
		return this.myToDoListsObject;
	}
}
