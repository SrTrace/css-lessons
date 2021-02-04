// Нужно, чтобы по нажатию на вкладку отображался конкретный текст для нужной вкладки.
//  При этом остальной текст должен быть скрыт.
// Нужно предусмотреть, что текст на вкладках может меняться, и что вкладки могут добавляться и удаляться.
//  При этом нужно, чтобы функция, написанная в джаваскрипте, из-за таких правок не переставала работать.

let tabsTitleItem = document.querySelectorAll('.tabs-title');
let tabsContentItem = document.querySelectorAll('.tabs-content-item');

tabsTitleItem.forEach( function(elem) {
    elem.addEventListener("click", activeTabsItem);
});

function activeTabsItem() {
    tabsTitleItem.forEach( function(elem) {
        elem.classList.remove('active');
    })
    this.classList.add('active');
    let tabName = this.dataset.tabsName;
    getActiveContent(tabName);
}

function getActiveContent(tabName) {
    tabsContentItem.forEach( function(elem){
        if (elem.classList.contains(tabName)) {
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    });
}

