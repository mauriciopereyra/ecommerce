const toggleHeader = (window)=> {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {

    var currentScrollPos = window.pageYOffset;
    if (document.getElementById("header-fixed")){
        if ((prevScrollpos > currentScrollPos)) {
            document.getElementById("header-fixed").classList.remove("header-fixed-hidden");
        } else if (currentScrollPos > 16*7) {
            document.getElementById("header-fixed").classList.add("header-fixed-hidden");
        }
    }
    prevScrollpos = currentScrollPos;
    }

}

export const showHeader = (window) => {
    if (document.getElementById("header-fixed")){
        document.getElementById("header-fixed").classList.remove("header-fixed-hidden");
    }
}

export default toggleHeader