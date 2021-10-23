var header = document.getElementById('header');
//console.log(header);

var mobileMenu = document.getElementById('mobile-menu');
//console.log(mobileMenu)
var headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

var menuItems = document.querySelectorAll('#nav li a[href *= "#"]');
console.log(menuItems)
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }

}