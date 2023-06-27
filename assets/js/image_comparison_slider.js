function startComparing() {
    let overlays = document.getElementsByClassName("comparison-overlay");
    for (let i = 0; i < overlays.length; i++) {
        compareImages(overlays[i]);
    }

    function compareImages(img) {
        let sliderClicked = 0;

        let imageWidth = img.offsetWidth;
        let imageHeight = img.offsetHeight;

        img.style.width = (imageWidth / 2) + "px";

        let slider = document.createElement("DIV");
        slider.setAttribute("class", "image-comparison-slider");
        slider.innerHTML = "↔"
        img.parentElement.insertBefore(slider, img);

        slider.style.top = (imageHeight / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (imageWidth / 2) - (slider.offsetWidth / 2) + "px";

        slider.addEventListener("mousedown", sliderBegin);
        window.addEventListener("mouseup", sliderStop);
        slider.addEventListener("touchstart", sliderBegin);
        window.addEventListener("touchend", sliderStop);

        function sliderBegin(event) {
            event.preventDefault();
            sliderClicked = 1;

            window.addEventListener("mousemove", sliderMove);
            window.addEventListener("touchmove", sliderMove);
        }

        function sliderStop() {
            sliderClicked = 0;
        }

        function sliderMove(event) {
            let sliderPosition;

            if (sliderClicked == 0) return false;
            sliderPosition = getCursorPosition(event);
            if (sliderPosition < 0) sliderPosition = 0;
            if (sliderPosition > imageWidth) sliderPosition = imageWidth;

            slide(sliderPosition);
        }

        function getCursorPosition(event) {
            let cursorPositionX = 0;

            event = (event.changedTouches) ? event.changedTouches[0] : event;
            let imagePositionX = img.getBoundingClientRect();

            cursorPositionX = event.pageX - imagePositionX.left;
            cursorPositionX = cursorPositionX - window.pageXOffset;
            return cursorPositionX;
        }

        function slide(cursorPositionX) {
            img.style.width = cursorPositionX + "px";
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}

startComparing();