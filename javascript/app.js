let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let deleteBtn = document.getElementById("deleteBtn");
let selectedTask= null;


// add task

addBtn.addEventListener("click",()=>{
    let task = taskInput.value;
    if(task === ""){
        alert("Please enter task");
        return;
    }

    // Create li
    
    const li = document.createElement("li");
    li.className = "list-item";

    let taskText=document.createElement("span");
    taskText.innerText=task;

    li.addEventListener("click",()=>{
        if (selectedTask){
            selectedTask.classList.remove("selected");
        
        }
        li.classList.add("selected");
        selectedTask=li;
    });



    // complete button

let completeBtn = document.createElement("button");
completeBtn.innerText = "Done";
completeBtn.className = "btn btn-primary btn-sm completebutton";

completeBtn.addEventListener("click", () => {
    taskText.classList.toggle("completed");
});



// Edit Button
let editBtn = document.createElement("button");
editBtn.innerText="Edit"
editBtn.className= "btn btn-secondary btn-sm editbutton";
editBtn.addEventListener("click",()=>{
    let newTask=prompt("edit your task:",taskText.innerText);
    if (newTask) {
    taskText.innerText = newTask;
}

});

// appendChild
// 
    li.appendChild(taskText);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);

    taskList.appendChild(li);
    taskInput.value = "";
});


// Delete Button
    deleteBtn.addEventListener("click",()=>{
        if(!selectedTask){
            alert("please select a task");
            return;
            }
        selectedTask.remove();
        selectedTask=null;
        });



