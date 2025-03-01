document.addEventListener("keydown", function (e) {
    if (e.key === "PrintScreen") {
        alert("Скриншот жасауға болмайды!");
        e.preventDefault();
    }
});

getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);