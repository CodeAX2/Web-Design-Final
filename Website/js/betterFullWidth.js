// 100vw for some stupid reason inclused the scroll bar, which can create unwanted horizontal scrolling,
// so this script fixes elements that need to be the full width of the viewable window 


document.addEventListener("DOMContentLoaded",

    function (e) {
        fixFullWidth();
        window.onresize = fixFullWidth;
    }
);


function fixFullWidth() {
    var width = document.documentElement.clientWidth // Get the width of the window without the scrollbar

    if (width < 1000) width = 1000; // Limit the width to 1000px, as that is the body width


    // Set all the properties of elements of full width
    var fullWidthObjects = document.getElementsByClassName("fullWidthObject");
    for (var i = 0; i < fullWidthObjects.length; i++) {
        var obj = fullWidthObjects[i];
        obj.style.width = width + "px";
    }

    var heroImages = document.getElementsByClassName("heroImage");
    for (var i = 0; i < heroImages.length; i++) {
        var obj = heroImages[i];
        obj.style.width = width + "px";
        obj.style.left = -1 * (width - 1000) / 2 + "px";
    }

    var fullNavigation = document.getElementsByClassName("fullNavigation");
    for (var i = 0; i < fullNavigation.length; i++) {
        var obj = fullNavigation[i];
        obj.style.padding = "10px " + (width - 1000) / 2 + "px";
        obj.style.marginLeft = -1 * (width - 1000) / 2 + "px";
    }

    var fullFooter = document.getElementsByClassName("fullFooter");
    for (var i = 0; i < fullFooter.length; i++) {
        var obj = fullFooter[i];
        obj.style.padding = "10px " + (width - 1000) / 2 + "px";
        obj.style.marginLeft = -1 * (width - 1000) / 2 + "px";
    }

}