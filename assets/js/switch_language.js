const LANG_SWITCH = document.querySelector("#language-toggle");
let lang = window.location.pathname;

if (lang === "/") {
    window.location.assign(document.URL + "en/")
    LANG_SWITCH.checked = false;
}

function switchLang() {
    const currentLocation = window.location.hash;
    const referenceMenuItem = document.querySelector("#sidebar-list a[href='" + currentLocation + "']");
    const newLocation = referenceMenuItem?.getAttribute("alternate-ref") ?? "";
    const cleanedNewLocation = newLocation === "#" ? "" : newLocation;
    let newUrl = (currentLocation === "/" || currentLocation === "") ? window.location.href : window.location.href.replace(currentLocation, cleanedNewLocation);
    let redir = LANG_SWITCH.checked && lang !== "/en/" || !LANG_SWITCH.checked && lang !== "/et/";

    if (redir && lang === "/et/") {
        newUrl = newUrl.replace(lang, "/en/");
        window.location.assign(newUrl);
        LANG_SWITCH.checked = true;

    } else if (redir && lang === "/en/") {
        newUrl = newUrl.replace(lang, "/et/");
        window.location.assign(newUrl);
        LANG_SWITCH.checked = false;
    }
};
