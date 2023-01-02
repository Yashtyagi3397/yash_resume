$(document).ready(function(){
    $("#main-nav a").click(function(){
        $("section").removeClass("show");
        var target = $(this).attr("href");
        $(target).addClass("show");
    });
    $(".type-effect").typed({
        strings : ["Full Stack Developer","Data Scientist","designer"],
        typeSpeed : 100,
        loop: true,
        backSpeed : 60, 
    })
});