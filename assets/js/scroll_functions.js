const MAIN = document.querySelector("main");
const SIDEBAR = document.getElementById("sidebar");
const BACK_TO_TOP_BUTTON = document.getElementById("go-to-top");
const SHOW_SIDEBAR_BUTTON = document.getElementById("showSidebar");
const PROGRESS_BAR = document.getElementById("progress-bar");

const initialSidebarHeight = window.getComputedStyle(SIDEBAR).height;

window.addEventListener("load", addScrollListener, false);
window.removeEventListener("unload", addScrollListener);

function addScrollListener() {
    window.addEventListener("scroll", () => showScrollProgress(), true);
    return window.removeEventListener("scroll", showScrollProgress);
}


function showBackToTopButton() {
    BACK_TO_TOP_BUTTON.style.display = "block";
}

function hideBackToTopButton() {
    BACK_TO_TOP_BUTTON.style.display = "none";
}

function showScrollProgress() {
    let windowToScroll = MAIN.scrollTop;
    let scrolledHeight = MAIN.scrollHeight - MAIN.clientHeight;
    let scrolledPercent = (windowToScroll / scrolledHeight) * 100;
    //const sidebarHeight = SIDEBAR

    if (scrolledPercent > 1) {
        showBackToTopButton();
    } else {
        hideBackToTopButton();
    }

    if (scrolledPercent > 3) {
        adjustSidebarHeightAndPosition();
    } else {
        resetSidebarHeightAndPosition()
    }

    PROGRESS_BAR.style.width = scrolledPercent + "%";
}

function goBackToTop() {
    MAIN.scrollTop = 0;
}

function showSidebar() {
    SIDEBAR.classList.toggle("visible");
    if (SHOW_SIDEBAR_BUTTON.innerHTML == "≡") {
        SHOW_SIDEBAR_BUTTON.innerHTML = "X";
    } else {
        SHOW_SIDEBAR_BUTTON.innerHTML = "≡";
    }

}

function adjustSidebarHeightAndPosition() {
    SIDEBAR.style.top = "125px";
}

function resetSidebarHeightAndPosition() {
    SIDEBAR.style.top = "125px";
    SIDEBAR.style.height = initialSidebarHeight;
}
