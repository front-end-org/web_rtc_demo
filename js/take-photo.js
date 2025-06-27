
var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var select = document.getElementById('select');


// 滤镜
var filterMap = {
    none: "none",
    blur: "blur(3px)",
    grayscale: "grayscale(1)",
    invert: "invert(1)",
    sepia: "sepia(1)",
};
function onSelectChange(value) {
    console.log('onchange:' + value);
    video.className = select.value;
    canvas.className = select.value;
}
/// 拍照功能
/// 核心API - drawImage
/// 定义 void ctx.drawImage(image, dx, dy, dWidth, dHeight);
/// image可以是一幅图片或HTMLVideoElement标签
/// dx,dy 图片的起点x,y坐标
/// dWidth,dHeight 图片的宽度和高度
function takePhoto() {
    console.log('takePhoto');
    var filter = filterMap[select.value];
    console.log('filter' + filter);
    canvas.width = 640;
    canvas.height = 480;
    var ctx = canvas.getContext('2d');
    /// 保存图片是保存滤镜
    ctx.filter = filter;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
}

function savePhoto() {
    console.log('savePhoto');
    download(canvas.toDataURL('image/jpeg',));
}

function download(url) {
    var oA = document.createElement('a');// 创建一个<a>标签
    oA.download = 'photo';// 设置下载的文件名,默认是'下载'
    oA.href = url;
    document
    oA.click();// 模拟点击<a>标签
    oA.remove();
}