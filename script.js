var startTime = 0;

(function() {
    startTime = (new Date).getTime();
})();

var nowPageMenu = document.URL.split('/').at(-1).split('.')[0];

window.onload = function() {
    var endTime = (new Date).getTime();
    var footer = document.querySelector('footer');
    footer.firstElementChild.textContent += ' ';
    footer.firstElementChild.textContent += endTime - startTime + 'ms.';
    
    var element = document.getElementsByName(nowPageMenu);
    if (element.length != 0) {
        element[0].parentElement.style.boxShadow = "0 0 15px 2px rgb(12, 226, 5)";
    }
}

document.addEventListener("mouseout", function(event) {
    if (event.target.type == "liMenu" && event.target.getAttribute('name') != nowPageMenu) {
        event.target.parentElement.style.boxShadow = "";
    }
}, false);

document.addEventListener("mouseover", function(event) {
    if (event.target.type == "liMenu" && event.target.getAttribute('name') != nowPageMenu) {
        event.target.parentElement.style.boxShadow = "0 0 15px 2px rgb(29, 210, 255)";
    }
}, false);