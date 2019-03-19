
function action(next) {

    var wrapper = document.querySelector('.wrapper');
    var widthPage = document.querySelector('.page').clientWidth;
    var currentScroll = wrapper.scrollLeft;
    if (next) {
        wrapper.scrollBy(currentScroll + widthPage, 0);
    } else {
        wrapper.scrollBy(currentScroll - widthPage, 0);
    }

}