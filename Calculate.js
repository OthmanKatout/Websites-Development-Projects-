
const Buttons = document.querySelectorAll(".button");
const operations = document.querySelectorAll(".op");
const equall = document.querySelector(".eq");
const del = document.querySelectorAll(".delete");
const Result = document.querySelector("#Result_Place");

var Screen = "";

function Display (){
    Result.textContent = Screen;
}


function Concate (New_Char){

    if(New_Char.target.textContent == "x" || New_Char.target.textContent == "=")Screen += " ";

    if(Screen.length && Screen.at(-1) == "=")Screen += " ";

    if(New_Char.target.textContent == "x²")Screen +='^2';
    else Screen += New_Char.target.textContent;
    
    if(New_Char.target.textContent == "x")Screen += " ";
    Display();
}


function Deleteit (Command){

    if(Command.target.textContent == "CE" && Screen.length){
        
        while(Screen.at(-1) == " ")Screen = Screen.substring(0 , Screen.length - 1);
        Screen = Screen.substring(0 , Screen.length - 1);

    }
    else Screen = "";

    Display();

}

function Calculate_Answer (){

try{

let Formated = Screen.replaceAll("^2" , "**2").replaceAll("÷" , "/").replaceAll("x","*").replaceAll("X","*").replaceAll(" ","");

let res = eval(Formated).toFixed(2);
if(res.toString().length > 7)Screen = "Error";
else Screen = res.toString();
Display();
if(Screen == "Error")Screen = "";
}
catch(error){
Screen = "Error";
Display();
Screen = "";
}

}


for(let B of Buttons){
    B.addEventListener('click' , Concate);
}

for(let o of operations){
    o.addEventListener('click' , Concate);
}

equall.addEventListener('click' , Calculate_Answer);

for(let d of del){
    d.addEventListener('click' , Deleteit);// new Thing
}

