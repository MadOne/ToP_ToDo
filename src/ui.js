export default class Ui {
	constructor(lists) {
		this.Menu = "";
		this.lists = lists;
		this.content = "";
		this.activeList = "";
		this.activeListId = "";
	}

	createMenu() {
		this.Menu.innerHTML = "";
		for (let i = 0; i < this.lists.getLength(); i++) {
			let li = document.createElement("li");
			let a = document.createElement("a");

			a.innerHTML = this.lists.item[i].name;
			a.id = `link_lists_${i}`;
			a.href = "#";
			li.appendChild(a);
			this.Menu.appendChild(li);
		}
	}
	createList() {}

	//get activeList() {
	//	return this._activeList;
	//}

	//set activeList(i) {
	//	this._activeList = this.lists.item[i];
	//}

	loadList(i) {
		this.activeList = this.lists.item[i];
		this.activeListId = i;
		this.content.innerHTML = "";
		let myH1 = document.createElement("h1");
		myH1.innerHTML = this.activeList.name;
		this.content.appendChild(myH1);
		let myTextBox = document.createElement("input");
		myTextBox.id = "tbNewToDo";
		let myButton = document.createElement("button");
		myButton.id = "btnNewToDo";
		myButton.innerHTML = "Add";
		this.content.appendChild(myTextBox);
		this.content.appendChild(myButton);
		let myUl = document.createElement("ul");
		this.content.appendChild(myUl);
		for (let i = 0; i < this.activeList.length(); i++) {
			let myLi = document.createElement("li");
			myLi.innerHTML = `<a href="#" id="link_detail_${i}">${this.activeList.item[i].title}<a>`;
			this.content.appendChild(myLi);
			//console.log(activeList.item[i].title);
		}
	}

	loadListDetail(i) {
		let myItem = this.activeList.item[i];
		this.content.innerHTML = "";
		let myH1 = document.createElement("h1");
		myH1.innerHTML = myItem.title;
		this.content.appendChild(myH1);
		let myDiv = document.createElement("div");
		myDiv.innerHTML = `
        <table>
            <tr><td>Title:</td>
                <td><input type="text" id="inputTitle" value="${myItem.title}"></td>
            </tr>
            <tr><td>Description:</td>
                <td><input type="text" id="inputDescription" value="${myItem.description}"></td>
            </tr>
            <tr><td>Due Date:</td>
                <td><input type="text" id="inputDueDate" value="${myItem.dueDate}"></td>
            </tr>
            <tr><td>Priority:</td>
                <td><input type="text" id="inputPriority" value="${myItem.priority}"></td>
            </tr>
            <tr><td>Notes:</td>
                <td><input type="text" id="inputNotes" value="${myItem.notes}"></td>
            </tr>
        </table>
        <button id="LinkBtnDetailCancel">Cancel</button><button id="linkBtnDetailSave_${i}">Save</button>`;
		this.content.appendChild(myDiv);
	}

	linkDom() {
		this.Menu = document.querySelector(".myMenuList");
		this.content = document.querySelector(".myContent");
	}
}
