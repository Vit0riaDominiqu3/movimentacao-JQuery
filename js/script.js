$("#btnBaixo").click(
    function () {
        $("#area").animate({ top: "300px", }, { duration: 200 })
    }
)
$("#btnCima").click(
    function () {
        $("#area").animate({ top: "200px" }, { duration: 200 })
    }
)
$("#btnDireita").click(
    function () {
        $("#area").animate({ left: "1000px" }) /*{ duration: 1000, complete: () => { alert("Fim da movimentação") } })*/
    }
)
$("#btnEsquerda").click(
    function () {
        $("#area").animate({ left: "450px" }, { duration: 200 })
    }
)