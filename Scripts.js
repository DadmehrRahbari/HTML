window.onload = function() {
    var btn = document.querySelector("#btn"); // corrected selector

    btn.addEventListener("click", function() {
        document.getElementById("MyPara").textContent = "The button is clicked!"; // corrected reference to MyPara
        alert("Buton is clicked !");
    });
}