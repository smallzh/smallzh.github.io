document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(m => {
            m.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    if (node.id == 'readthedocs-ea-text-nostyle-nodoctool') {
                        // 插入 广告标记
                        var htmlString = `<div class="icon">📢</div>`;
                        node.insertAdjacentHTML('afterbegin', htmlString);
                    } else {
                        // 隐藏
                        node.hidden = true;
                    }
                }
            });

        });
        //
        document.getElementById('readthedocs-ea-text-nostyle-nodoctool').addEventListener('click', function () {
            this.classList.toggle('expanded');
        });
    });

    // 确保 body 存在
    if (document.body) {
        observer.observe(document.body, {childList: true, subtree: true});
    } else {
        console.error('document.body 不存在！');
    }
});
