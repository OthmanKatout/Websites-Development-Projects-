
const Tasks1 = [];
const Tasks2 = [];
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
<button id = "dConfirm">X</button>
</span>
</div>`;

TaskList.insertAdjacentHTML('afterbegin' , givemename);

const ConfirmName = document.querySelector("#Confirm");
ConfirmName.addEventListener('click' , AddTask);

const dConfirmName = document.querySelector("#dConfirm");
dConfirmName.addEventListener('click' , deletepop);

}

function deletepop(){
const eraseit = document.querySelector("#todeletelater");
eraseit.remove();
}

function AddTask(){

    const text = document.querySelector("#input_text");
    const strtext = text.value.slice(0 , 27);
    const eraseit = document.querySelector("#todeletelater");
    eraseit.remove();
    Tasks1.push(new Task(strtext, false , cnt ));
    // call the function that render the new additions
       
    TaskList.insertAdjacentHTML('beforeend',
    `<div id = "task${cnt}">
    <div class = "Task"">
    <div>
    <input type = "checkbox" class = "Checkit${cnt}"><label class = "Label">${strtext}</label>
    </div>
    <div>
    <span><button class = "deletetask" id = "deletetas_${cnt}">X</button></span>
    </div>
    </div>
    <br><br>
    </div>`);
    const str = ".Checkit" + cnt;
    const checkbox = document.querySelector(str);
    checkbox.addEventListener('change' , toggleit);
    const str2 = "#deletetas_" + cnt;
    const removetask = document.querySelector(str2);
    removetask.addEventListener('click' , remtask);

    const str1 = "#deletetas_" + cnt;
    const updttask = document.querySelector(str1);
    updttask.addEventListener('click' , updtask);
    cnt ++; 

}

function remtask (event){

const num = Number(event.target.id.slice(10));
const idanme = "#task" + num;

const diiv = document.querySelector(idanme);
diiv.remove();

}

function toggleit (event){



const num = Number(event.target.className.slice(7 , event.target.className.length));

if(event.target.checked){

for(let i = 0 ; i < Tasks1.length ; i ++){
    if(Tasks1[i].N_O == num){
    Tasks1[i].done = true; 
    Tasks2.push(new Task (Tasks1[i].Name , Tasks1[i].done , Tasks1[i].N_O));
    const Second_List = document.querySelector("#Second_List");
    const str = "task" + num;
    const rem = document.querySelector("#" + str);
    rem.remove();
    Second_List.insertAdjacentHTML('beforeend' , `
    <div id = "task${num}">
    <div class = "Task">
    <div>
    <input type = "checkbox" class = "Checkit${num}" checked><label class = "Label">${Tasks1[i].Name}</label>
    </div>
    <div>
    <span><button class = "deletetask" id = "deletetas_${num}">X</button></span>
    </div>
    </div>
    <br><br>
    </div>`);
    Tasks1.splice(i , 1);
    const str2 = ".Checkit" + num;
    const why = document.querySelector(str2);
    why.addEventListener('change' , toggleit);
    const str22 = "#deletetas_" + num;
    const removetask = document.querySelector(str22);
    removetask.addEventListener('click' , remtask);
    }
}

}
else if(!event.target.checked){

for(let i = 0 ; i < Tasks2.length ; i ++){

    if(Tasks2[i].N_O == num){
    Tasks2[i].done = false; 
    Tasks1.push(new Task (Tasks2[i].Name , Tasks2[i].done , Tasks2[i].N_O));
    const First_List = document.querySelector("#First_List");
    const str = "task" + num;
    const rem = document.querySelector("#" + str);   
    rem.remove();
    First_List.insertAdjacentHTML('beforeend',`
    <div id = "task${num}">
    <div class = "Task">
    <div>
    <input type = "checkbox" class = "Checkit${num}"><label class = "Label">${Tasks2[i].Name}</label>
    </div>
    <div>
    <span><button class = "deletetask" id = "deletetas_${num}">X</button></span>
    </div>
    </div>
    <br><br>
    </div>`);
    Tasks2.splice(i , 1);
    const str2 = ".Checkit" + num;
    const why = document.querySelector(str2);
    why.addEventListener('change' , toggleit);
    const str22 = "#deletetas_" + num;
    const removetask = document.querySelector(str22);
    removetask.addEventListener('click' , remtask);
    }
}

}

}

function deleteAll (){

for(let i = Tasks1.length - 1 ;i >= 0 ;i --){
    const idname = "#task" + Tasks1[i].N_O;
    const curr = document.querySelector(idname)
    curr.remove();
    Tasks1.pop();
}

}

function deleteAll2 (){

for(let i = Tasks2.length - 1 ;i >= 0 ;i --){
    const idname = "#task" + Tasks2[i].N_O;
    const curr = document.querySelector(idname)
    curr.remove();
    Tasks2.pop();
}

}


const AddButton = document.querySelector(".add");
AddButton.addEventListener('click' , pop_it_up);
const DeleteAll = document.querySelector(".trash");
DeleteAll.addEventListener('click' , deleteAll);
const DeleteAll2 = document.querySelector(".trash2");
DeleteAll2.addEventListener('click' , deleteAll2);