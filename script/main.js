
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $("header").addClass("red")
    }

    else {
        $("header").removeClass("red")
    }
});
$('.menu-btn').click(function(){
        $('.menu_list').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });