var localVideo = document.getElementById('video');
var btnRecPlay = document.getElementById('recPlay');
var btnRecDownload = document.getElementById('recDownload');
var recvideo = document.getElementById('recvideo');
var buffer;

/**
 * 在开启录制时，可以设置一个毫秒级的时间片，
 * 这样录制的媒体数据会按照你设置的值分割成一个个单独的区块，
 * 否则默认的方式是录制一个非常大的整块内容。
 * 分成一块一块的区块会提高效率和可靠性，
 * 如果是一整块数据，随着时间的推移，数据块越来越大，读写效率就会变差，而且增加了写入文件的失败率。
 */
function startRecord() {
    buffer = [];
    // 设置录制格式
    var options = {
        mimeType: 'video/webm;codecs=vp8'
    }

    try {
        // stream，通过 getUserMedia 获取的本地视频流或通过 RTCPeerConnection 获取的远程视频流。
        mediaRecorder = new MediaRecorder(localVideo.srcObject, options);
    } catch (e) {
        console.error('创建MediaRecorder失败:', e);
    }
    // 当有音视频数据来了之后触发该事件
    mediaRecorder.ondataavailable = (e) => {
        if (e && e.data && e.data.size > 0) {
            // 将数据压入到blob中
            buffer.push(e.data)
        }
    }
    // 开始录制
    mediaRecorder.start(10);
}

function recPlay() {
    var src = getVideoUrl();
    recvideo.src = src;
    recvideo.srcObject = null;
    recvideo.controls = true;
    recvideo.play();
}

function recDownload() {
    var url = getVideoUrl();

    var a = document.createElement('a');
    a.href = url;
    a.style.display = 'none';
    a.download = 'aaa.webm';
    a.click();
}

function getVideoUrl() {
    var blob = new Blob(buffer, { type: 'video/webm' });
    var url = window.URL.createObjectURL(blob);
    return url;
}