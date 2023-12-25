export default class ToDoList {
	constructor(name) {
		this.name = name;
		this.item = [];
	}

	append(item) {
		this.item.push(item);
	}

	remove(item) {
		this.item.pop(item);
	}

	getItem(id) {
		return this.item[id];
	}

	length() {
		return this.item.length;
	}

	get name() {
		return this._name;
	}

	set name(name) {
		this._name = name;
	}
}
