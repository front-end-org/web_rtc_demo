/// 拍照功能
/// 核心API - drawImage
/// 定义 void ctx.drawImage(image, dx, dy, dWidth, dHeight);
/// image可以是一幅图片或HTMLVideoElement标签
/// dx,dy 图片的起点x,y坐标
/// dWidth,dHeight 图片的宽度和高度
function takePhoto() {
    console.log('takePhoto');
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    canvas.width = 640;
    canvas.height = 480;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
}

function savePhoto() {
    console.log('savePhoto');
    download(canvas.toDataURL('image/jpeg', ));
}

function download(url) {
    var oA = document.createElement('a');// 创建一个<a>标签
    oA.download = 'photo';// 设置下载的文件名,默认是'下载'
    oA.href = url;
    document
    oA.click();// 模拟点击<a>标签
    oA.remove();
}