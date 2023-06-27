/*$(document).ready(function() {
    var containerWidth = $('#container').width();
    var personagemWidth = $('#personagem').width();
    var limiteDireita = containerWidth - personagemWidth;

    $('#personagem').animate({left: limiteDireita}, 2000, function() {
        $('#personagem').animate({left: 0}, 2000);
    });
});*/

$("#btnDireita").click(
    function () {
        $("#personagem").animate({ left: "400px" }, {duration: 3000 }) 
    }
)
$("#btnEsquerda").click(
    function () {
        $("#personagem").animate({ left: "0px" }, { duration: 2000 })
    }
)