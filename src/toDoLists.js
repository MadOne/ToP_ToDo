export default class ToDoLists {
	constructor() {
		this.item = [];
	}

	getLength() {
		return this.item.length;
	}

	getItem(i) {
		return this.item[i];
	}

	addItem(list) {
		this.item.push(list);
	}

	removeItem(id) {
		this.item.pop(id);
	}
}
