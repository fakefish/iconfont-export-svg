function sleep(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, delay);
    });
}

function waitUntil(selector, timeout = 10000) {
    return new Promise(function (resolve, reject) {
        var start = new Date().getTime();
        var interval = setInterval(function () {
            if ($(selector).length > 0) {
                clearInterval(interval);
                resolve();
            } else if (new Date().getTime() - start > timeout) {
                clearInterval(interval);
                reject();
            }
        }, 100);
    });
}
async function exportSingle(ele) {
    $(ele).click();
    await sleep(1000);
    $('.download-btns .btn:first-child').click();
    $('.mp-e2e-dialog-close').click();

}

setTimeout(() => {
    $('body').append('<div id="start" style="position: fixed;top: 0;right:0;bottom:0;height:30px;background: green;z-index:999">点击导出svg</div>');
    $('#start').click(function () {
        let jobs = Promise.resolve();
        $('.icon-cover-unfreeze .cover-item.iconfont.icon-xiazai').each((_, ele) => {
            jobs = jobs.then(() => exportSingle(ele));
        })
    })
}, 2000)