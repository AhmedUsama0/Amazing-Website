$(document).ready(function () {
    $(window).scroll(function () {
        window.console.log($(".navbar").height());
        window.console.log($(window).scrollTop());
        var navbar = $(".navbar");
        if ($(window).scrollTop() >= 200) {
            navbar.addClass("scrolled");
            navbar.addClass("fixed-top")
            navbar.removeClass("bg-dark");
        }

        else {
            navbar.removeClass("scrolled");
            navbar.removeClass("fixed-top")
            navbar.addClass("navbar-dark")
            navbar.addClass("bg-dark");
        }
    });

    //Deal With Tabs
    $(".tabs-section li").click(function(){
        //this code add selected class to the element u click on and remove the class from siblings
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    $(".t1").click(function(){
        $(".tab-one").fadeIn(1500);
        $(".tab-two").hide();
        $(".tab-three").hide();
    })

    $(".t2").click(function(){
        $(".tab-two").fadeIn(1500);
        $(".tab-one").hide();
        $(".tab-three").hide();
    })

    $(".t3").click(function(){
        $(".tab-three").fadeIn(1500);
        $(".tab-two").hide();
        $(".tab-one").hide();
    })




});