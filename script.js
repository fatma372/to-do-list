// To Do List  
let form = document.getElementById("form");  
let list = document.getElementById("list");  
let task = document.getElementById("task");  

// add all tasks to local storage  
function saveTasks() {  
    const tasks = [];  
    const items = list.getElementsByTagName('li');  
    for (let item of items) {  
        //console.log(item.textContent.replace('DeleteCheck', '').trim())
        tasks.push(item.textContent.replace('DeleteCheck', '').trim()); 
    }  
    localStorage.setItem('tasks', JSON.stringify(tasks));  
}  

//load tasks from local storage to page
function loadTasks() {  
    const tasks = JSON.parse(localStorage.getItem('tasks'));  
    if (tasks) {  
        tasks.forEach(function(taskText) {  
            addTaskToList(taskText);  
        });  
    }  
}  

//create a new task and add it to the list  
function addTaskToList(taskValue) {  
    let li = document.createElement('li');  
    li.textContent = taskValue;  

    // delete button  
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
    });  
}  

// get tasks from local storage to page
loadTasks();  

form.addEventListener('submit', function(event) {  
    event.preventDefault();  

    if (task.value !== '') {  
        addTaskToList(task.value);  
        saveTasks(); // Save to local storage after adding a new task  
        task.value = '';  
    }  
});


//=======before adding tasks to local host============
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

