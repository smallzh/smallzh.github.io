document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(m => {
            m.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    console.log('新增元素:', node);
                }
            });
        });
    });

    // 确保 body 存在
    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
    } else {
        console.error('document.body 不存在！');
    }
});