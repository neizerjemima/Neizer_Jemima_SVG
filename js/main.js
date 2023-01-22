console.log('JavaScript is running!');


let Drum = document.querySelector('#Drum');
let Trumphet = document.querySelector('#Trumphet');
let Flute = document.querySelector('#Flute');
let Shakes = document.querySelector('#Shakes');
let Triangle = document.querySelector('#Triangle');
let pipe = document.querySelector('#pipe');
let Saxophone = document.querySelector('#Saxophone');
let Harp = document.querySelector('#Harp');
let Banjo = document.querySelector('#Banjo');
let Microphone = document.querySelector('#Microphone');


function logThisId() {
    console.log('clicked on this element:', this.id);
}
function Trumphets() {
    console.log('clicked on this element:', this.id);
}
function Flutes() {
    console.log('clicked on this element:', this.id);
}
function Shake() {
    console.log('clicked on this element:', this.id);
}
function Triangl() {
    console.log('clicked on this element:', this.id);
}
function pipes() {
    console.log('clicked on this element:', this.id);
}
function Saxophones() {
    console.log('clicked on this element:', this.id);
}
function Harps() {
    console.log('clicked on this element:', this.id);
}
function Banjos() {
    console.log('clicked on this element:', this.id);
}
function Microphones() {
    console.log('clicked on this element:', this.id);
}


Drum.addEventListener('click', logThisId);
Trumphet.addEventListener('click', Trumphets);
Flute.addEventListener('click', Flutes);
Shakes.addEventListener('click', Shake);
Triangle.addEventListener('click', Triangl);
pipe.addEventListener('click', pipes);
Saxophone.addEventListener('click', Saxophones);
Harp.addEventListener('click', Harps);
Banjo.addEventListener('click', Banjos);
Microphone.addEventListener('click', Microphones);