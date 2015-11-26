document.addEventListener('DOMContentLoaded', yogahotSlider);
function yogahotSlider() {
    var slider = document.getElementById('slider'); // id слайдера
    var sliderLine = slider.querySelector('.slider-line');
    var thumb = slider.querySelector('.thumb');
    var sliderContainer = slider.querySelector('.slider-content');
    var sliderContent = sliderContainer.querySelectorAll('div');

    sliderContainer.innerHTML = sliderContent[0].innerHTML;
    var mouseX =0;

    thumb.onmousedown = function () {
        var thumbC = parseFloat(getComputedStyle(thumb).left);
        var thumbX = thumb.getBoundingClientRect().left;
        var step = Math.round((sliderLine.offsetWidth - thumb.offsetWidth ) / (sliderContent.length -1));

        document.onmousemove = function (e) {
            var min = Math.min((e.pageX - thumbX + thumbC), sliderLine.offsetWidth - thumb.offsetWidth);
             mouseX = Math.round(Math.max(min, 0));
            thumb.style.left = Math.round(mouseX / step) * step + 'px';
            sliderContainer.innerHTML = sliderContent[Math.round(mouseX / step)].innerHTML;
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            } else {
                document.selection.empty();
            }
        };

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    };
    sliderLine.addEventListener('click', function(e){
        var thumbC = parseFloat(getComputedStyle(thumb).left);
        var thumbX = thumb.getBoundingClientRect().left;
        var step = Math.round((sliderLine.offsetWidth - thumb.offsetWidth ) / (sliderContent.length -1));
        var min = Math.min((e.pageX - thumbX + thumbC), sliderLine.offsetWidth - thumb.offsetWidth);
        mouseX = Math.round(Math.max(min, 0));
        thumb.style.left = Math.round(mouseX / step) * step + 'px';
        sliderContainer.innerHTML = sliderContent[Math.round(mouseX / step)].innerHTML;

    });
    thumb.addEventListener('touchstart',
        function touchstart() {
            var thumbC = parseFloat(getComputedStyle(thumb).left);
            var thumbX = thumb.getBoundingClientRect().left;
            var step = Math.round((sliderLine.offsetWidth - thumb.offsetWidth ) / (sliderContent.length - 1));
            var mouseX = 0;
            document.addEventListener('touchmove',
                function touchmove(event) {
                    var e = event.targetTouches[0];
                    var min = Math.min((e.pageX - thumbX + thumbC), sliderLine.offsetWidth - thumb.offsetWidth);
                    mouseX = Math.round(Math.max(min, 0));
                    thumb.style.left = Math.round(mouseX / step) * step + 'px';
                    sliderContainer.innerHTML = sliderContent[Math.round(mouseX / step)].innerHTML;
                }
            , false);
        }, false)
}



