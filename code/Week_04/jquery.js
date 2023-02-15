$(document).ready(function(){

    $("#hide").click(function(){
        $("p").hide(1000);
    })

    $("#show").click(function(){
        $("p").show(1000);
    })

    $("#toggle").click(function(){
        $("#toggleParagarph").toggle();
    })

    $("#boxButton").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });

    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    })

   });