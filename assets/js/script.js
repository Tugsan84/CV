const header = document.querySelector("header");
const placeholder = document.getElementById("header-placeholder");
let initialOffset = header.offsetTop;

function updateHeader() {
    // scrollY header'ýn baþladýðý noktayý geçtiyse
    if (window.scrollY > initialOffset) {
        header.classList.add("fixed");
        placeholder.style.height = header.offsetHeight + "px";
    } else {
        header.classList.remove("fixed");
        placeholder.style.height = "0px";
    }
}

// scroll ve resize event
window.addEventListener("scroll", updateHeader);
window.addEventListener("resize", () => {
    // resize sonrasý header baþlangýcýný yeniden hesapla
    initialOffset = header.offsetTop;
    updateHeader();
});
