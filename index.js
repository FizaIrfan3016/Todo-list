#! /usr/bin/env node 
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want add more todos?",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addmore;
    console.log(todos);
}
