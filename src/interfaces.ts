interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo): string {
  return `${todo.title}: ${todo.text}`;
}

let myTodo: Todo = {
  title: "Learn TS",
  text: "Learn some more TypeScript"
};

showTodo(myTodo); // Learn TS: Learn some more TypeScript
