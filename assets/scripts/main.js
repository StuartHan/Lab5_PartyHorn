// main.js

// TODO
var button = document.getElementById("honk-btn");
button.type = "button"; // disable submit

// 1:   VOLUME: volume-number
var volumeNumber = document.getElementById("volume-number");
// 1.1: Listen volume-number -> change volume
volumeNumber.addEventListener("input", changeVolume_Number);
function changeVolume_Number() {
    let volume = volumeNumber.value / 100; // volome range: 0~1
    document.getElementById("horn-sound").volume = volume;
}

// 1.2: Listen volume-number -> change volume-slider
volumeNumber.addEventListener("input", changeSlider_Number);
function changeSlider_Number() {
    let volume = volumeNumber.value;
    document.getElementById("volume-slider").value = volume;
}

// 1.3: Listen volume-number -> change icon
volumeNumber.addEventListener("input", changeIcon_Number);
function changeIcon_Number() {
    button.disabled = false; // 4.1: Enable / disable button
    let volume = volumeNumber.value;
    let image  = document.getElementById("volume-image");
    // 67~100: icon 3
    if (volume > 66) {
        image.src = "./assets/media/icons/volume-level-3.svg";
    }
    // 34~66: icon 2
    else if (volume > 33) {
        image.src = "./assets/media/icons/volume-level-2.svg";
    }
    // 1~33: icon 1
    else if (volume > 0) {
        image.src = "./assets/media/icons/volume-level-1.svg";
    }
    // 0:    icon 0
    else {
        image.src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true; // 4.1: Enable / disable button
    }
}


// 2:   VOLUME: volume-slider
var volumeSlider = document.getElementById("volume-slider");
// 2.1: Listen volume-slider -> change volume
volumeSlider.addEventListener("input", changeVolume_Slider);
function changeVolume_Slider() {
    let volume = volumeSlider.value / 100;
    document.getElementById("horn-sound").volume = volume;
}

// 2.2: Listen volume-slider -> change volume-number
volumeSlider.addEventListener("input", changeNumber_Slider);
function changeNumber_Slider() {
    let volume = volumeSlider.value;
    document.getElementById("volume-number").value = volume;
}

// 2.3: Listen volume-slider -> change icon
volumeSlider.addEventListener("input", changeIcon_Slider);
function changeIcon_Slider() {
    button.disabled = false; // 4.1: Enable / disable button
    let volume = volumeSlider.value;
    let image  = document.getElementById("volume-image");
    // 67~100: icon 3
    if (volume > 66) {
        image.src = "./assets/media/icons/volume-level-3.svg";
    }
    // 34~66: icon 2
    else if (volume > 33) {
        image.src = "./assets/media/icons/volume-level-2.svg";
    }
    // 1~33: icon 1
    else if (volume > 0) {
        image.src = "./assets/media/icons/volume-level-1.svg";
    }
    // 0:    icon 0
    else {
        image.src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true; // 4.1: Enable / disable button
    }
}


// 3:   DIFFERENT HORNS: listen audio-selection -> radio-sound desides audio and image
var hornType = document.getElementById("audio-selection"); // determine if radio is changed
hornType.addEventListener("input", changeImgAndAud);       // add listener to var above
var radioSounds = document.getElementsByName("radio-sound"); // determine which radio is selected

function changeImgAndAud() {
    let audio = document.getElementById("horn-sound");
    let image = document.getElementById("sound-image");
    // Air Horn is selected
    if (radioSounds[0].checked) {
        audio.src = "./assets/media/audio/air-horn.mp3";
        image.src = "./assets/media/images/air-horn.svg";
    }
    // Car Horn is selected
    else if (radioSounds[1].checked) {
        audio.src = "./assets/media/audio/car-horn.mp3";
        image.src = "./assets/media/images/car.svg";
    }
    // Party Horn is selected
    else {
        audio.src = "./assets/media/audio/party-horn.mp3";
        image.src = "./assets/media/images/party-horn.svg";
    }
}


// 4:   PLAY AUDIO
var audio = document.getElementById("horn-sound");
// 4.2: Listen button -> play audio
button.addEventListener("click", playAudio);
function playAudio() {
    audio.volume = volumeNumber.value / 100;
    audio.play();
    // if number / slider changes when audio is playing, change volume
    volumeNumber.addEventListener("input", changeVolume_Number);
    volumeSlider.addEventListener("input", changeNumber_Slider);
}