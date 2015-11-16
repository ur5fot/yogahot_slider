document.addEventListener('DOMContentLoaded', yogahotSlider);
function yogahotSlider() {
    var slider = document.getElementById('slider');
    var thumb = slider.querySelector('.thumb');
    //var xx=0;
    thumb.onmousedown = function (e) {

        var x = e.pageX;
        var thumbC = parseFloat(getComputedStyle(thumb).left);
        var thumbLeft = 10;
        var thumbX = thumb.getBoundingClientRect().left;
        document.onmousemove = function (e) {
            var min = Math.min((e.pageX - thumbX + thumbC), slider.offsetWidth - thumbLeft - thumb.offsetWidth);
            thumb.style.left = Math.max(min, thumbLeft) + 'px';
        };

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

}


