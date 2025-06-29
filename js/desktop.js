var deskVideo = document.getElementById('deskVideo');
// 得到桌面数据流
function getDeskStream(stream) {
    localStream = stream;
}

// 抓取桌面
function shareDesktop() {
    // 只有在 PC 下才能抓取桌面
    // 开始捕获桌面数据
    navigator.mediaDevices.getDisplayMedia({ video: true })
        .then((stream) => {
            localStream = stream;
            deskVideo.srcObject = stream;
        })
        .catch((error) => {
            console.error(error);
        });
}