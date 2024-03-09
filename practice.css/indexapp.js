const v2Btn = document.querySelector('#verson2')

v2Btn.onclick = function() {
    console.log('hi there you clicked me ')
    console.log('what you want')

}

document.querySelector('h2').onclick = function(){
    console.log("you clicked for h2")
}

            // Add event btn 
const eventBtn = document.querySelector(".event");

eventBtn.addEventListener('click',clickFunc);
eventBtn.addEventListener("mouseover",hoverHere);

function clickFunc(){
    document.querySelector("#addevent").innerHTML += "you clicked <br>";
}

function hoverHere(){
    document.querySelector("#addevent").innerHTML += "hover here <br>";
}   