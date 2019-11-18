function showTodo(todo) {
    return todo.title + ": " + todo.text;
}
function showAllTodos(todos) {
    return todos.map(function (todo) { return showTodo(todo); });
}
var myTodo = {
    title: "Learn TS",
    text: "Learn some more TypeScript"
};
var allMyTodos = [
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
//# sourceMappingURL=interfaces.js.map