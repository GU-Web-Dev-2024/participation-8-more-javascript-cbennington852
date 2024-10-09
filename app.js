//like main in C++
"use strict";

//import modules
import {addTask,clearInput} from "./todo";
import {loadTasks,saveTasks} from "./storage";

//imports all, but must specifcy file name while calling
//import * as storage from "./storage";

//setup DOM refferences
const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

//load tasks from local storage
const tasks = loadTasks();

//add event listener for new task
addTaskButton.addEventListener("click", ()=>{
   const task = newTaskInput.value.trim(); //remove whitespace / get text
    
});