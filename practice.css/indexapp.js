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


                    // background change button

const backgroundButton = document.querySelector('#change-bg-color')
const h1 = document.querySelector('.rgb-color');

backgroundButton.addEventListener('click', function(){
    const rgbColor = randomColor ();
    const bG = document.querySelector('.bg-change');
    bG.style.backgroundColor = rgbColor ;
    h1.innerText = rgbColor ;
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
   return`rgb(${r}, ${g}, ${b})`;
 }

                    //   key event

const keyEvent = document.querySelector('#keyEvent');
keyEvent.addEventListener('keydown', function(e){
    console.log(e.key)
    console.log(e.code)

})