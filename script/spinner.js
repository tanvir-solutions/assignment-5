const spinner = (status) => {
    const spinnerContainer = document.getElementById("spinner");
    const card = document.getElementById("all-card-container");

    if (status === true) {
        spinnerContainer.classList.remove("hidden");
        card.classList.add("hidden");
    } else {
        spinnerContainer.classList.add("hidden");
        card.classList.remove("hidden");
    }
};