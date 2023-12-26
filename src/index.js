import ToDoList from "./ToDoList";
import ToDoItem from "./toDoItem";
import ToDoLists from "./toDoLists";
import Storage from "./storage";
import Ui from "./ui";

let mylists = new ToDoLists();

let mystorage = new Storage(mylists);
mylists = mystorage.deserialize();
let myui = new Ui(mylists);
myui.linkDom();
myui.createMenu();
myui.loadList(0);

document.body.addEventListener("click", function (evt) {
	let mysplit = evt.target.id.split("_");
	if (mysplit.length == 3) {
		if (mysplit[0] == "link") {
			if (mysplit[1] == "lists") {
				//console.log(`display List ${mysplit[2]}`);
				myui.loadList(mysplit[2]);
			}
			if (mysplit[1] == "detail") {
				myui.loadListDetail(mysplit[2]);
			}
		}
	}
	if (evt.target.id == "btnNewToDo") {
		let mylist = mylists.item[myui.activeListId];
		let myTb = document.querySelector("#tbNewToDo");
		let myItem = new ToDoItem(myTb.value, "", "", "", "");
		console.log(mylist);
		mylist.append(myItem);
		console.log(mylist);
		myui.loadList(myui.activeListId);
		mystorage.serialize();
	}

	if (evt.target.id == "LinkBtnDetailCancel") {
		myui.loadList(myui.activeListId);
	}
	if (evt.target.id == "btnNewToDoList") {
		let myTb = document.querySelector("#tbNewToDoList");
		let myNewToDoList = new ToDoList(myTb.value);
		mylists.addItem(myNewToDoList);
		myui.createMenu();
		myui.loadList(myui.activeListId);
		mystorage.serialize();
	}

	if (mysplit.length == 2) {
		if (mysplit[0] == "linkBtnDetailSave") {
			let myItem = mylists.item[myui.activeListId].item[mysplit[1]];
			let myTitle = document.querySelector("#inputTitle");
			let myDescription = document.querySelector("#inputDescription");
			let myDueDate = document.querySelector("#inputDueDate");
			let myPriority = document.querySelector("#inputPriority");
			let myNotes = document.querySelector("#inputNotes");
			let myDone = document.querySelector("#inputDone");
			myItem.update(
				myTitle.value,
				myDescription.value,
				myDueDate.value,
				myPriority.value,
				myNotes.value,
				myDone.value
			);
			console.log(myDone.value);
			myui.loadList(myui.activeListId);
			mystorage.serialize();
		}
	}
});
