// #### Технические требования:
//     - Добавить вверху страницы горизонтальное меню со ссылкой на все разделы страницы.
// - При клике на ссылку - плавно прокручивать страницу вниз до выбранного места.
// - Если прокрутить страницу больше чем на 1 экран вниз, справа внизу должна
// появляться кнопка "Наверх" с фиксированным позиционариванием.
//     При клике на нее - плавно прокрутить страницу в самый верх.
// - Добавить под одной из секций кнопку, которая будет выполнять
// функцию `slideToggle()` (прятать и показывать по клику) для данной секции.

(function ($) {
    $(document).ready(function () {
        $("a").click(function () {
            return false;
        });

        $("nav a").click(function () {
            let clickedLink = $(this).attr("href").slice(1);
            let elem = document.querySelector("." + clickedLink);
            elem.scrollIntoView({behavior: 'smooth', block: 'start'});
        });

        // button to Top after 1 screen scroll
        let screenHeight = $(window).height();
        $(window).scroll(function () {
            if ($(this).scrollTop() > screenHeight) {
                $(".topBtn").fadeIn();
            } else {
                $(".topBtn").fadeOut();
            }
        });
        $(".topBtn").click(function () {
            $("html, body").animate({scrollTop: 0}, 800);
        });
        // icon for searching
        $(".searchWrap").click(function () {
            $(".fieldSearch").toggle(function () {
                $(".fieldSearch").attr("display", "block");
            });
        });
        // slideToggle for topRated block
        $(".topRated").append('<span class="closeSectionBtn">X</span>');
        $(".closeSectionBtn").click(function () {
            $(this).parents(".topRated").fadeOut();
        });
    });
})(jQuery);