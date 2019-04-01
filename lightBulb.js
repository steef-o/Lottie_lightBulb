"use strict";

const lightBulbContainer = document.querySelector("#lightBulb");
const lightContainer = document.querySelector("#light");
const shadowsAndHighlightsContainer = document.querySelector("#shadows_highlights");

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
const toggle10Container = document.querySelector("#toggle10");

/*************************************************************************
**********************   LOTTIE ANIMATION INIT ***************************
 *************************************************************************/
const lightbulb = lottie.loadAnimation({
    container: lightBulbContainer,
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: 'animations/lightbulb_transparent2.json'
});

const light = lottie.loadAnimation({
    container: lightContainer,
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: 'animations/light_dark.json'
});

const shadowsAndHighlights = lottie.loadAnimation({
    container: shadowsAndHighlightsContainer,
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: 'animations/shadows_highlights.json'
});

/***  TOGGLES ***/

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

const toggle1 = lottie.loadAnimation({
    container: toggle1Container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/edvardikken.json"
});

const toggle2 = lottie.loadAnimation({
    container: toggle2Container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle2.json"
});

const toggle3 = lottie.loadAnimation({
    container: toggle3Container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle3.json"
});
const toggle4= lottie.loadAnimation({
    container: toggle4Container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle4.json"
});
const toggle5 = lottie.loadAnimation({
    container: toggle5Container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle5.json"
});
const toggle6 = lottie.loadAnimation({
    container: toggle6Container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle6.json"
});

const toggle7 = lottie.loadAnimation({
    container: toggle7Container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle7.json"
});
const toggle8 = lottie.loadAnimation({
    container: toggle8Container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle8.json"
});
const toggle9 = lottie.loadAnimation({
    container: toggle9Container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle9.json"
});

const toggle10 = lottie.loadAnimation({
    container: toggle10Container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: "animations/toggle10.json"
});

/**************************** Global variables***************************/
const globalActiveToggles = [];
const globalState = {
    color: "0,0,0",
    lightAnimationStartFrame: 1,
    lightBulbAnimationStartFrame: 1
};

// Init endFrame variables
let endFrameLight = 2;
let endFrameLightBulb = 2;

// Shadows and Highlights state
let shadowAndHighlightAnimationActive = true;

/********************************************************************
************************ ANIMATION STATES **************************
 ********************************************************************/
const toggleAndreasState = {
    animation: toggleAndreas,
    container: toggleAndreasContainer,
    on: false,
    startFrame: 0,
    intermediateFrame: 25,
    endFrame: 50,
    color: "145,45,45",
    name: "toggleAndreas"
};

const toggleExampleState = {
    animation: toggleExample,
    container: toggleExampleContainer,
    on: false,
    startFrame: 0,
    endFrame: 51,
    speed: 2.5,
    color: "125,225,45",
    name: "toggleExample"
};

const toggle1State = {
    animation: toggle1,
    container: toggle1Container,
    on: false,
    startFrame: 0,
    intermediateFrame: 29,
    endFrame: 60,
    speed: 2.5,
    color: "68,110,225",
    name: "toggle1"
};


const toggle2State = {
    animation: toggle2,
    container: toggle2Container,
    on: false,
    startFrame: 0,
    intermediateFrame: 25,
    endFrame: 50,
    speed: 3.5,
    color: "43,32,159",
    name: "toggle2"
};

const toggle3State = {
    animation: toggle3,
    container: toggle3Container,
    on: false,
    startFrame: 0,
    intermediateFrame: 25,
    endFrame: 50,
    speed: 1,
    color: "56,8,167",
    name: "toggle3"
};

const toggle4State = {
    animation: toggle4,
    container: toggle4Container,
    on: false,
    startFrame: 0,
    intermediateFrame: 25,
    endFrame: 50,
    speed: 1,
    color: "136,85,20",
    name: "toggle4"
};

const toggle5State = {
    animation: toggle5,
    container: toggle5Container,
    on: false,
    startFrame: 0,
    intermediateFrame: 25,
    endFrame: 50,
    speed: 1,
    color: "186,218,85",
    name: "toggle5"
};

const toggle6State = {
    animation: toggle6,
    container: toggle6Container,
    on: false,
    startFrame: 0,
    intermediateFrame: 25,
    endFrame: 50,
    speed: 1,
    color: "251,149,209",
    name: "toggle6"
};

const toggle7State = {
    animation: toggle7,
    container: toggle7Container,
    on: false,
    startFrame: 0,
    intermediateFrame: 25,
    endFrame: 50,
    speed: 1,
    color: "69,239,236",
    name: "toggle7"
};

const toggle8State = {
    animation: toggle8,
    container: toggle8Container,
    on: false,
    startFrame: 0,
    intermediateFrame: 25,
    endFrame: 50,
    speed: 1,
    color: "79,183,138",
    name: "toggle8"
};

const toggle9State = {
    animation: toggle9,
    container: toggle9Container,
    on: false,
    startFrame: 0,
    intermediateFrame: 25,
    endFrame: 50,
    speed: 1,
    color: "236,21,248",
    name: "toggle9"
};

const toggle10State = {
    animation: toggle10,
    container: toggle10Container,
    on: false,
    startFrame: 0,
    intermediateFrame: 25,
    endFrame: 50,
    speed: 1,
    color: "77,1,138",
    name: "toggle10"
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
flipSwitch(toggle2State);
flipSwitch(toggle3State);
flipSwitch(toggle4State);
flipSwitch(toggle5State);
flipSwitch(toggle6State);
flipSwitch(toggle7State);
flipSwitch(toggle8State);
flipSwitch(toggle9State);
flipSwitch(toggle10State);


function flipSwitch(state) {
    // Check if animation is ready.
    state.animation.addEventListener("data_ready", function () {
        // Set custom speed or default value.
        state.animation.setSpeed(state.speed || 1);
        // listen for click event.
        state.container.addEventListener("click", function () {
            // Check in animation contains intermediate frame.
            // change state of toggle. play animation, add or remove from globalActiveToggles array, update state.
            if (state.intermediateFrame) {
                if (state.on) {
                    state.animation.playSegments([state.intermediateFrame, state.endFrame], true);
                    removeFromActiveToggles(state);
                    state.on = false;
                } else {
                    state.animation.playSegments([state.startFrame, state.intermediateFrame],true);
                    addToActiveToggles(state);
                    state.on = true;
                }
            } else {
                if (state.on) {
                    state.animation.playSegments([state.endFrame, state.startFrame], true);
                    removeFromActiveToggles(state);
                    state.on = false;
                } else {
                    state.animation.playSegments([state.startFrame, state.endFrame], true);
                    addToActiveToggles(state);
                    state.on = true;
                }
            }
            recalculateAndRender();
        }); // click listener.
    }); // data_ready listener.
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
        if(rgb1Array[i] <= 255 && rgb2Array <= 255 || (rgb1Array[i] + rgb2Array[i]) - 45 <= 255){
            // last number is value of dim light.
            newColorArray[i] = rgb1Array[i] + rgb2Array[i] - 45;
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

    // set valid endFrames if value is outside animation length.
    endFrameLightBulb = (endFrameLightBulb >= 100) ? 100 : endFrameLightBulb;
    endFrameLightBulb = (endFrameLightBulb <= 0) ? 2 : endFrameLightBulb;
    endFrameLight = (endFrameLight >= 100) ? 100 : endFrameLight;
    endFrameLight = (endFrameLight <= 0) ? 2 : endFrameLight;

    //DEBUG
  //  console.log("startFrameLight" + startFrameLight);
  //  console.log("startFrameLightBulb" + startFrameLightBulb);
  //  console.log("endFrameLight" + endFrameLight);
  //  console.log("endFrameLightBulb" + endFrameLightBulb);

    // Check if start and end frame are the same, if they are do not animate.
    if(startFrameLightBulb !== endFrameLightBulb){
        lightbulb.playSegments([startFrameLightBulb, endFrameLightBulb],true);
        lightbulb.setSpeed(3);
        light.playSegments([startFrameLight, endFrameLight],true);

        if(startFrameLight >= 5 && shadowAndHighlightAnimationActive){
            shadowsAndHighlights.playSegments([1,4],true);
            shadowAndHighlightAnimationActive = false;
        }
        if(endFrameLight === 5){
            shadowsAndHighlights.playSegments([4,1], true);
            shadowAndHighlightAnimationActive = true;
        }
    }
    // Update current frame of animation to globalState object.
    globalState.lightAnimationStartFrame = endFrameLight;
    globalState.lightBulbAnimationStartFrame = endFrameLightBulb;
}

// Calculate rgb total value from rgb formatted string.
function calcProgression() {
    return globalState.color
        .split(',')
        .map((value) => parseInt(value, 10))
        .reduce((total, num) => total + num);
}

