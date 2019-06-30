const menu = $(".overlay")
$(".hamMenu").on("click", function () {

    if (menu.css("width") == "0px") {
        menu.css("width", "256px")
    } else {
        menu.css("width", "0px")
    }

})