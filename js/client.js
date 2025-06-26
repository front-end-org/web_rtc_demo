'use strict';
const mediaStreamContrains = {
    video: true
}

const localVideo = document.getElementById('video');

function gotLocalMediaStream(mediaStream) {
    localVideo.srcObject = mediaStream;
}

function handleLocalMediaStreamError(error) {
    console.error('navigator.getUserMedia error: ', error);
}

// 核心API - getUserMedia
navigator.mediaDevices.getUserMedia(mediaStreamContrains).then(
    gotLocalMediaStream
).catch(
    handleLocalMediaStreamError
);