// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo.push ({id:5 , todo: "Walk the dog"});
for (let i = 0; i < myTodo.length; i++){
  if (myTodo[i].id === 4) {
    myTodo[i].todo = "Go to gym";
  };
}

console.log(myTodo)

myTodo.pop();

let last = myTodo[myTodo.length -1];
console.log(`To-do id: ${last.id}, ${last.todo} `);


