"use strict";

const lightBulbContainer = document.querySelector("#lightBulb");
const lightContainer = document.querySelector("#light");
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

/*************************************************************************
**********************   LOTTIE ANIMATION INIT ***************************
 *************************************************************************/
const lightbulb = lottie.loadAnimation({
    container: lightBulbContainer,
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: 'animations/lightbulb_transparent.json'
});

const light = lottie.loadAnimation({
    container: lightContainer,
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: 'animations/light_dark.json'
});

const toggleExample = lottie.loadAnimation({
    container: toggleExampleContainer,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle-example.json"
});

const toggle1 = lottie.loadAnimation({
    container: toggle1Container,
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



// Global variables
const globalActiveToggles = [];
const globalState = {
    color: "0,0,0",
    lightAnimationStartFrame: 1,
    lightBulbAnimationStartFrame: 1
};

// Init endFrame variables
let endFrameLight = 2;
let endFrameLightBulb = 2;


/********************************************************************
************************ ANIMATION STATS **************************
 ********************************************************************/
const toggleAndreasState = {
    animation: toggleAndreas,
    container: toggleAndreasContainer,
    on: true,
    startFrame: 0,
    intermediateFrame: 25,
    endFrame: 50,
    color: "100,0,0",
    name: "toggleAndreas"
};

const toggleExampleState = {
    animation: toggleExample,
    container: toggleExampleContainer,
    on: false,
    startFrame: 0,
    endFrame: 51,
    speed: 2.5,
    color: "80,180,0",
    name: "toggleExample"
};

const toggle1State = {
    animation: toggle1,
    container: toggle1Container,
    on: false,
    startFrame: 0,
    endFrame: 51,
    speed: 2.5,
    color: "23,65,180",
    name: "toggle1"
};


/************************************************************
* ***************************LOGIC***************************
 *************************************************************/

//Init Light and lightBulb.
light.addEventListener("DOMLoaded", function () {
        recalculateAndRender();
});

// Init toggles.
flipSwitch(toggleAndreasState);
flipSwitch(toggleExampleState);
flipSwitch(toggle1State);


function flipSwitch(state) {
    // Check in animation is ready.
    state.animation.addEventListener("data_ready", function () {
        // listen for click event.
        state.container.addEventListener("click", function () {
            state.animation.setSpeed(state.speed || 1);

            // Check in animation contains intermediate frame.
            // change state of toggle. play animation, add or remove from globalActiveToggles array, update state.
            if (state.intermediateFrame) {
                if (state.on) {
                    state.animation.playSegments([state.startFrame, state.intermediateFrame]);
                    removeFromActiveToggles(state);
                    state.on = false;
                } else {
                    state.animation.playSegments([state.intermediateFrame, state.endFrame]);
                    addToActiveToggles(state);
                    state.on = true;
                }
            } else {
                if (state.on) {
                    state.animation.playSegments([state.endFrame, state.startFrame]);
                    removeFromActiveToggles(state);
                    state.on = false;
                } else {
                    state.animation.playSegments([state.startFrame, state.endFrame]);
                    addToActiveToggles(state);
                    state.on = true;
                }
            }
            recalculateAndRender();
        }); // click listener.
    }); // DOMLoaded listener.
}

// add state object to globalActiveToggles array
function addToActiveToggles(state) {
    globalActiveToggles.push(state);
}

// remove state object from globalActiveToggles array
function removeFromActiveToggles(state) {
    globalActiveToggles.map((value, index) => {
        if(value.name === state.name){
            globalActiveToggles.splice(index, 1);
        }
    })
}

// Calculate mixing of colors.
function addColor(color1, color2){
    // Split string and parse to Integers.
    let rgb1Array = color1.split(",").map((value) => parseInt(value, 10) );
    let rgb2Array = color2.split(",").map((value) => parseInt(value, 10) );

    // Init array to store results
    let newColorArray = [];

    //Loop Through RGB, check if numbers are higher than 255, add together values r+r, g+g ,b+b
    for(let i = 0; i <= 2 ;i++ ){
        if(rgb1Array[i] <= 255 && rgb2Array <= 255 || (rgb1Array[i] + rgb2Array[i]) <= 255){
            newColorArray[i] = rgb1Array[i] + rgb2Array[i];
        }else{
            newColorArray[i] = 255;
        }
    }
    // Convert values back to String values.
    newColorArray = newColorArray.map((value) => value.toString());

    // Join array of Strings back to one String value.
    globalState.color = newColorArray.join();
}

function recalculateAndRender() {
    // reset color for re-rendering
    globalState.color = "45,45,45";

    //Remix colors.
    globalActiveToggles.map((toggle) => {
        addColor(toggle.color, globalState.color);
    });

    // set gradient reference from DOM.
    // TODO: move.
    let gradient = document.querySelector("#light").childNodes[0].childNodes[0].childNodes[1];

    // Update colors in gradient
    gradient.childNodes[0].setAttribute("stop-color", `rgb(${globalState.color})`);
    gradient.childNodes[1].setAttribute("stop-color", `rgb(${globalState.color})`);
    gradient.childNodes[2].setAttribute("stop-color", `rgb(${globalState.color})`);

    animateLightAndLightBulb();

   // console.log("new global color" + globalState.color);
   // console.log(" ");
}

function animateLightAndLightBulb() {
    // Calculate current progression: Reduce rgb values to one number.
    let progressReducedValue = calcProgression();

    // set startFrame from global state. 0 on init. Else: EndFrame.
    let startFrameLight = globalState.lightAnimationStartFrame;
    let startFrameLightBulb = globalState.lightBulbAnimationStartFrame;


    // Find direction of animation (forward or backward), calc new endFrame.
    if(startFrameLight < progressReducedValue){
        endFrameLight = Math.floor(progressReducedValue / 25);
        endFrameLightBulb = Math.floor(progressReducedValue / 7);
    }else{
        endFrameLight = Math.floor(progressReducedValue / 25 );
        endFrameLightBulb = Math.floor(progressReducedValue / 7);
    }

    // Make sure animation never exceeds the max amount of frames in animation.
   // endFrameLightBulb = (endFrameLightBulb >= 100) ? 100 : endFrameLightBulb;
   // endFrameLight = (endFrameLight >= 100) ? 100 : endFrameLight;

    // set valid endFrames if value is outside animation length.
    if(endFrameLightBulb >= 100){
        endFrameLightBulb = 100;
    }

    if(endFrameLightBulb <= 0){
        endFrameLightBulb = 2;
    }

    if(endFrameLight >= 100){
        endFrameLight = 100;
    }
    if(endFrameLight <= 0){
        endFrameLight = 2;
    }

    console.log("startFrameLight" + startFrameLight);
    console.log("startFrameLightBulb" + startFrameLightBulb);
    console.log("endFrameLight" + endFrameLight);
    console.log("endFrameLightBulb" + endFrameLightBulb);
    console.log(globalState.color);

    // Check if start and end frame are the same, if they are do not animate.
    if(startFrameLightBulb !== endFrameLightBulb){
        lightbulb.playSegments([startFrameLightBulb, endFrameLightBulb]);
        lightbulb.setSpeed(3);
        light.playSegments([startFrameLight, endFrameLight]);
    }
    // Update current frame of animation to globalState object.
    globalState.lightAnimationStartFrame = endFrameLight;
    globalState.lightBulbAnimationStartFrame = endFrameLightBulb;
}

// Calculate rgb total value from rgb formatted string.
function calcProgression() {
    return globalState.color
        .split(',')
        .map((value) => parseInt(value,10))
        .reduce((total, num) => total + num);
}