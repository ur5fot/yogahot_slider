document.addEventListener('DOMContentLoaded', yogahotSlider);
function yogahotSlider() {
    var slider = document.getElementById('slider'); // id слайдера
    var sliderLine = slider.querySelector('.slider-line');
    var thumb = slider.querySelector('.thumb');
    var sliderContainer = slider.querySelector('.slider-content');
    var sliderContent = sliderContainer.querySelectorAll('div');

    //for (var i = 1; i < sliderContent.length; i++) {
    //    sliderContainer.removeChild(sliderContent[i]);
    //}

    sliderContainer.innerHTML = sliderContent[0].innerHTML;

    thumb.onmousedown = function (e) {
        var thumbC = parseFloat(getComputedStyle(thumb).left);
        var thumbX = thumb.getBoundingClientRect().left;
        var step = Math.round((sliderLine.offsetWidth - thumb.offsetWidth ) / (sliderContent.length -1));
        var mouseX =0;

        document.onmousemove = function (e) {
            var min = Math.min((e.pageX - thumbX + thumbC), sliderLine.offsetWidth - thumb.offsetWidth);
             mouseX = Math.round(Math.max(min, 0));
            console.log(Math.round(mouseX / step) * step);
            thumb.style.left = Math.round(mouseX / step) * step + 'px';
            sliderContainer.innerHTML = sliderContent[Math.round(mouseX / step)].innerHTML;
        };

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

}


