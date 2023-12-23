export default class ToDoList {
	constructor(name) {
		this.name = name;
		this.items = [];
	}

	append(item) {
		this.items.push(item);
	}

	remove(item) {
		this.items.pop(item);
	}

	getItem(id) {
		return this.items[id];
	}

	length() {
		return this.items.length;
	}
}
