const input = document.querySelector(".new-activity input");
const btnAdd = document.querySelector(".btn-add");
const activities = document.querySelector(".activities");

showActivities();

input.addEventListener('keyup', () => {
    let userData = input.value;
    if(userData.trim() != 0){
        btnAdd.classList.add("active");
    }else{
        btnAdd.classList.remove("active");
    }

});

btnAdd.addEventListener('click', () => {
    let userData = input.value;
    let getLocalStorage = localStorage.getItem("Todo List");

    if (getLocalStorage == null){
        todoArr = [];
    }else{
        todoArr = JSON.parse(getLocalStorage);
    }

    todoArr.push(userData);
    localStorage.setItem("Todo List", JSON.stringify(todoArr));
    showActivities();
    input.value="";
    btnAdd.classList.remove("active");
});

function showActivities(){
    let getLocalStorage = localStorage.getItem("Todo List");

    if (getLocalStorage == null){
        todoArr = [];
    }else{
        todoArr = JSON.parse(getLocalStorage);
    }

    let newActivity = '';
    todoArr.forEach((element, index) => {
        newActivity += `<li>${element}<i class="fa-solid fa-trash-can" onClick="deleteActivity(${index});"></i></li>`;
    });

    activities.innerHTML = newActivity;
}

function deleteActivity(index){
    let getLocalStorage = localStorage.getItem("Todo List");
    todoArr = JSON.parse(getLocalStorage);
    todoArr.splice(index, 1);
    localStorage.setItem("Todo List", JSON.stringify(todoArr));
    showActivities();
}