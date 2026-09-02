
const Tasks = [];

function Task (Name , done){

    this.Name = Name;
    this.done = done;

}

function Add (){

// here i want to ask the user what is the name of the task ?, i be sure that this name will not be as long as much to make some harm

var task_name;
const FirstList = document.querySelector("#First_List");
var command = `" <div class = "Task">
    <div>
    <input type = "checkbox" class = "Checkit"><label class = "Label">${task_name}</label>
    </div>
    <div>
    <span><button class = "updateName">🛠</button></span>
    <span><button class = "deletetask">X</button></span>
    </div>
    </div><br><br> "`

FirstList.innerHTML += command;

}

const addbutton = document.querySelectorAll(".add");
