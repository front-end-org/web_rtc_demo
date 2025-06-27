'use strict';
var  localVideo = document.getElementById('video');

// 核心API - enumerateDevices
// 获取所有可用设备
// deviceId - 设备ID
// kind - 设备种类
// * videoinput 视频输入
// * audioinput 音频输入
// * audiooutput 音频输入
// label - 设备标签
// 注意:
// 获取到的 deviceId 和 label 可能为空,需要用户授权才能获取(授权需要使用HTTPS请求)
if (navigator.mediaDevices.enumerateDevices) {
    navigator.mediaDevices.enumerateDevices()
        .then(function (deviceInfos) {
            //打印出每一个设备的信息 
            deviceInfos.forEach(function (deviceInfo) {
                console.log('deviceId:' + deviceInfo.deviceId);
                console.log('kind:' + deviceInfo.kind);
                console.log('label:' + deviceInfo.label);
            });
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
}

// 核心API - getUserMedia
// 从设备列表中的默认设备中采集数据
if (navigator.mediaDevices.getUserMedia) {
    const mediaStreamContrains = {
        video: {
            width: 1280,
            height: 720,
            frameRate: 15,
        },
        audio: false
    }
    navigator.mediaDevices.getUserMedia(mediaStreamContrains)
        .then(function (mediaStream) {
            localVideo.srcObject = mediaStream;
        }).catch(function (error) {
            /// 未采集到数据,当前设备可能无效
            console.error('navigator.getUserMedia error: ', error);
        });
}