const toggleHeader = (window)=> {

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header-fixed").style.top = "0";
    } else if (currentScrollPos > 16*5) {
        document.getElementById("header-fixed").style.top = "-6rem";
    }
    prevScrollpos = currentScrollPos;
    }

}

export default toggleHeader