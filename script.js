// To Do List  
let form = document.getElementById("form");  
let list = document.getElementById("list");  
let task = document.getElementById("task");  

// add all tasks to local storage  
function saveTasks() {  
    const tasks = [];  
    const items = list.getElementsByTagName('li');  
    for (let item of items) {  
        const isChecked = item.classList.contains("checked"); // Check if the item is checked  
        tasks.push({ text: item.textContent.replace('DeleteCheck', '').trim(), checked: isChecked });   
    }  
    localStorage.setItem('tasks', JSON.stringify(tasks));  
}  

// Load tasks from local storage to page  
function loadTasks() {  
    const tasks = JSON.parse(localStorage.getItem('tasks'));  
    if (tasks) {  
        tasks.forEach(function(taskObject) {  
            addTaskToList(taskObject.text, taskObject.checked);  
        });  
    }  
}  

// Create a new task and add it to the list  
function addTaskToList(taskValue, isChecked = false) {  
    let li = document.createElement('li');  
    li.textContent = taskValue;  
    if (isChecked) {  
        li.classList.add("checked"); // Add checked class if the task is marked as checked  
    }  

    // Delete button  
    let deleteBtn = document.createElement("button");  
    deleteBtn.textContent = "Delete";  
    deleteBtn.classList.add("delete-btn");  

    // Check button  
    let checkBtn = document.createElement("button");  
    checkBtn.textContent = "Check";  
    checkBtn.classList.add("check-btn");  

    list.appendChild(li);  
    li.appendChild(deleteBtn);  
    li.appendChild(checkBtn);  

    deleteBtn.addEventListener('click', function() {  
        list.removeChild(li);  
        saveTasks(); // Update local storage after deletion  
    });  

    checkBtn.addEventListener('click', function() {  
        li.classList.toggle("checked");  
        saveTasks(); // Update local storage when toggling check status  
    });  
}  

// Get tasks from local storage to page  
loadTasks();  

form.addEventListener('submit', function(event) {  
    event.preventDefault();  

    if (task.value !== '') {  
        addTaskToList(task.value);  
        saveTasks(); // Save to local storage after adding a new task  
        task.value = '';  
    }  
});


//=======before adding tasks to local storage============
// //to do list:
// let form=document.getElementById("form");
// let list=document.getElementById("list");
// let task=document.getElementById("task");

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     //new li
//     let li = document.createElement('li');
//     li.textContent=task.value;

//     //new delete btn
//     let deleteBtn=document.createElement("button");
//     deleteBtn.textContent="Delete";
//     deleteBtn.classList.add("delete-btn");

//     //check button:
//     let checkBtn=document.createElement("button");
//     checkBtn.textContent="Check";
//     checkBtn.classList.add("check-btn");

//     if(task.value!=''){
//         list.appendChild(li);
//         li.appendChild(deleteBtn);
//         li.appendChild(checkBtn);
//         task.value='';
//     }

//     deleteBtn.addEventListener('click', function() {
//         list.removeChild(li);
//     });

//     checkBtn.addEventListener('click', function() {
//         li.classList.toggle("checked");
//     });
  
// });

