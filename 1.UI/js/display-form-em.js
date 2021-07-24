function display_dialog() {
    document.getElementById("form-dialog").style.display = "block";
    document.getElementById("form-dialog").style.transition = "all, 0.5s";
}

function exit() {
    document.getElementById("form-dialog").style.display = "none";
}