import ToDoList from "./ToDoList";
import ToDoItem from "./toDoItem";

let list1 = new ToDoList("myFirstList");
let item1 = new ToDoItem(
	"Title",
	"description",
	"dueDate",
	"priority",
	"notes"
);
list1.append(item1);

let myitem = list1.getItem(0);
console.log(myitem.title);
myitem.title = "newTitle";
console.log(myitem.title);
