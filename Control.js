
const Tasks = [];
var cnt = 0;
function Task (Name , done , N_O){

    this.Name = Name;
    this.done = done;
    this.N_O = N_O;
}

const TaskList = document.querySelector("#First_List");

function pop_it_up (){


if(document.querySelector("#todeletelater"))return;

var givemename = `<div id = "todeletelater">
<span id = "popup">What is your task name (Up to 27 Char only 😊)</span> 
<span id = "popup_text">
<input type = "text" id = "input_text">
<button id = "Confirm">✓</button>
</span>
</div>`;

TaskList.insertAdjacentHTML('afterbegin' , givemename);

const ConfirmName = document.querySelector("#Confirm");
ConfirmName.addEventListener('click' , AddTask);

}

function AddTask(){

    const text = document.querySelector("#input_text");
    const strtext = text.value.slice(0 , 27);
    const eraseit = document.querySelector("#todeletelater");
    eraseit.remove();
    Tasks.push(new Task(strtext, false , cnt ++));
    // call the function that render the new additions
    
    TaskList.innerHTML +=
     `<div class = "Task" id = "task${cnt}">
    <div>
    <input type = "checkbox" class = "Checkit"><label class = "Label">${strtext}</label>
    </div>
    <div>
    <span><button class = "updateName">🛠</button></span>
    <span><button class = "deletetask">X</button></span>
    </div>
    </div>
    <br><br>`;

}

const AddButton = document.querySelector(".add");
AddButton.addEventListener('click' , pop_it_up);

