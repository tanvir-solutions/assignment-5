const activeButton = (clickedBtnId) => {
    const allBtn = document.getElementById("btn-all");
    const openBtn = document.getElementById("btn-open");
    const closeBtn = document.getElementById("btn-closed");

    // প্রথমে সব button reset করো
    allBtn.classList.remove("btn-primary");
    openBtn.classList.remove("btn-primary");
    closeBtn.classList.remove("btn-primary");

    allBtn.classList.add("btn-outline");
    openBtn.classList.add("btn-outline");
    closeBtn.classList.add("btn-outline");

    // Click করা button খুঁজে বের করো
    const clickedBtn = document.getElementById(clickedBtnId);

    // Click করা button active করো
    clickedBtn.classList.remove("btn-outline");
    clickedBtn.classList.add("btn-primary");
};