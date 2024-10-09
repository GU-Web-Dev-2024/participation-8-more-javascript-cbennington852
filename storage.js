"use strict";

/*
 Local storage Description:
 */

//function to save task to local storage
function saveTasks(tasks) {
    localStorage.set("tasks", JSON.stringify(tasks));
}

//function to load tasks from local storage
function  loadTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
    //if is not null, then return empty list, else parse
}

//exports
export {loadTasks,saveTasks};