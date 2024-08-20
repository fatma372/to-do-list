//to do list:
let form=document.getElementById("form");
let list=document.getElementById("list");
let task=document.getElementById("task");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    //new li
    let li = document.createElement('li');
    li.textContent=task.value;

    //new delete btn
    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.classList.add("delete-btn");

    //check button:
    let checkBtn=document.createElement("button");
    checkBtn.textContent="Check";
    checkBtn.classList.add("check-btn");
  

    if(task.value!=''){
        list.appendChild(li);
        li.appendChild(deleteBtn);
        li.appendChild(checkBtn);
        task.value='';
    }

    deleteBtn.addEventListener('click', function() {
        list.removeChild(li);
    });

    checkBtn.addEventListener('click', function() {
        li.classList.toggle("checked");
    });
  
});

