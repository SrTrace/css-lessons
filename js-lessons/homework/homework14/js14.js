// Нужно, чтобы по нажатию на вкладку отображался конкретный текст для нужной вкладки.
//  При этом остальной текст должен быть скрыт.
// Нужно предусмотреть, что текст на вкладках может меняться, и что вкладки могут добавляться и удаляться.
//  При этом нужно, чтобы функция, написанная в джаваскрипте, из-за таких правок не переставала работать.
// Переделать домашнее задание 9 (табы), используя jQuery

$(document).ready(function () {
    let activeTab;
    $(".tabs-title").click(function () {
        $(".tabs-title").removeClass("active");
        $(this).addClass("active");
        activeTab = $(".active").attr("data-tabs-name");
        $(".tabs-content-item").removeClass("active");
        $("."+ activeTab).toggleClass("active");
    });
});

