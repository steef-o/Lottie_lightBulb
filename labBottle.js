"use strict";

//Get elements from dom:
const bottleContainer = document.querySelector("#bottle");
const toggleExampleContainer = document.querySelector("#toggle-example");
const toggleAndreasContainer = document.querySelector("#toggle-andreas");
const toggle1Container = document.querySelector("#toggle1");
const toggle2Container = document.querySelector("#toggle2");
const toggle3Container = document.querySelector("#toggle3");
const toggle4Container = document.querySelector("#toggle4");
const toggle5Container = document.querySelector("#toggle5");
const toggle6Container = document.querySelector("#toggle6");
const toggle7Container = document.querySelector("#toggle7");
const toggle8Container = document.querySelector("#toggle8");
const toggle9Container = document.querySelector("#toggle9");


// Init lottie animations
const bottle = lottie.loadAnimation({
    container: bottleContainer,
    renderer: 'svg',
    autoplay: true,
    loop: true,
    path: "animations/Lab-bottle.json"
});

const toggleExample = lottie.loadAnimation({
    container: toggleExampleContainer,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle-example.json"
});

const toggleAndreas = lottie.loadAnimation({
    container: toggleAndreasContainer,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle-andreas.json"
});

// Animation states
const toggleAndreasState = {
    animation: toggleAndreas,
    container: toggleAndreasContainer,
    on: true,
    startFrame: 0,
    intermediateFrame: 25,
    endFrame: 50,
    color: "cyan"
};

const toggleExampleState = {
    animation: toggleExample,
    container: toggleExampleContainer,
    on: false,
    startFrame: 0,
    endFrame: 51,
    speed: 2.5,
    color: "yellow"
};

flipSwitch(toggleAndreasState);
flipSwitch(toggleExampleState);
console.log(mix('255,255,00', '255,00,00', 50));

function flipSwitch (state){
    state.animation.addEventListener("data_ready", function() {
        state.container.addEventListener("click", function () {
            state.animation.setSpeed(state.speed || 1);

            if (state.intermediateFrame){
                if (state.on) {
                    state.animation.playSegments([state.startFrame, state.intermediateFrame]);
                    bottleContainer.classList.remove(state.color);
                    bottleContainer.classList.add("clear");
                    state.on = false;
                } else {
                    state.animation.playSegments([state.intermediateFrame, state.endFrame]);
                    bottleContainer.classList.add(state.color);
                    bottleContainer.classList.remove("clear");
                    state.on = true;
                }
            }else{
            if (state.on) {
                state.animation.playSegments([state.endFrame, state.startFrame]);
                bottleContainer.classList.remove(state.color);
                bottleContainer.classList.add("clear");
                state.on = false;
            } else {
                state.animation.playSegments([state.startFrame, state.endFrame]);
                bottleContainer.classList.add(state.color);
                bottleContainer.classList.remove("clear");
                state.on = true;
            }
            }
        }); // click listener.
    }); // ready listener.
}

// Color mixer
function mix(color_1, color_2, weight) {
    function d2h(d) { return d.toString(16); }  // convert a decimal value to hex
    function h2d(h) { return parseInt(h, 16); } // convert a hex value to decimal
    weight = (typeof(weight) !== 'undefined') ? weight : 50; // set the weight to 50%, if that argument is omitted
    var color = "#";

    for(var i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
        var v1 = h2d(color_1.substr(i, 2)), // extract the current pairs
            v2 = h2d(color_2.substr(i, 2)),

            // combine the current pairs from each source color, according to the specified weight
            val = d2h(Math.round(v2 + (v1 - v2) * (weight / 100.0)));
        while(val.length < 2) { val = '0' + val; } // prepend a '0' if val results in a single digit
        color += val; // concatenate val to our new color string
    }
    return color; // PROFIT!
};





/*
Vi trenger:

lottie init:

const toggle(gruppenummer) = lottie.loadAnimation({
    container: toggle(gruppenummer)Container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle(gruppenummer).json"
});

const toggle(gruppenummer)State = {
    animation: toggle(gruppenummer),
    container: toggle(gruppenummer)Container,
    on: false,
    startFrame: 0,
    intermediateFrame: 25, (valgfri!!)
    endFrame: 50,
    color: "magenta" (velg fra en liste)
}

++ en fil merket toggle(gruppenummer).json


************************************************
Eks: Gruppe 3
const toggle3 = lottie.loadAnimation({
    container: toggle3Container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle3.json"
})

const toggle3State = {
    animation: toggle3,
    container: toggle3Container,
    on: false,
    startFrame: 0,
    intermediateFrame: 25, (valgfri!!)
    endFrame: 50,
    color: "magenta" (velg fra en liste)
}


**********************************************
Liste over farger:

'magenta',
'crimson',
'blue',
'green',
'hotpink',
'yellow',
'cyan',
'lime',
'orange',
'plum',
'purple',
'salmon',
'seagreen'

*/
