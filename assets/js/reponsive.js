var header = document.getElementById('header');
console.log(header);

var mobileMenu = document.getElementById('mobile-menu');
console.log(mobileMenu)
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if(isClose){
        header.style.height = 'auto';
    }
    else{
        header.style.height = null;
    }
}