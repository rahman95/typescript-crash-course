interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo): string {
  return `${todo.title}: ${todo.text}`;
}

function showAllTodos(todos: Todo[]): string[] {
  return todos.map(todo => showTodo(todo));
}

let myTodo: Todo = {
  title: "Learn TS",
  text: "Learn some more TypeScript"
};

let allMyTodos: Todo[] = [
  {
    title: "Learn Terraform",
    text: "Dive into Terraform learning"
  },
  {
    title: "Learn AWS",
    text: "Dive into AWS services"
  },
  myTodo
];

showTodo(myTodo); // Learn TS: Learn some more TypeScript

showAllTodos(allMyTodos); // ['Learn Terraform: Dive into Terraform learning', 'Learn AWS: Dive into AWS services', 'Learn TS: Learn some more TypeScript']
