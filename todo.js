"use strict"; /**/

//function to add a task
function addTask(task,task_list) {
    //make new list index
    const list = document.createElement("li");
    //set new li text content
    li.textContent = task;
    //add to the list
    task_list.appendChild(task);
}

//function to clear input field
function clearInput (inputFeild) {
    inputFeild.value = "";
}

//alternate method to export -- can choose which to export and input
export function sayHello(){
    alert("hello");

}

//exporting functions as modules
export {addTask,clearInput};
