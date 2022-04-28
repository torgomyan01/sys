const { active } = {
    active: 'active'
}
const mobileMenu = $('.mobile-menu-board');
const _menu = $('main .menu');

// -------------- OPEN CLOSE MENU ------------------

const menu = $('main .menu .menu-item .menu-name');
const menuItems = $('main .menu .menu-item');

menu.on('click', function (){
    const thisParent = $(this).parent();
    if (thisParent.hasClass(active)){
        thisParent.removeClass(active);
    } else {
        menuItems.removeClass(active);
        thisParent.addClass(active);
    }
})

// -------------- OPEN CLOSE MENU ------------------




// -------------- FOR DEFAULT INPUT FUNCTION -------------------


const defaultInput = $('.def-input input');
const inpLabel = $('.def-input');

defaultInput.on('blur', function (){
    inpLabel.map((index, e) => {
        if($(e).children('input').val() === ''){
            $(e).removeClass(active);
        }
    })
})

defaultInput.on('focus', function (){
    $(this).parent().addClass(active);
})


// -------------- FOR DEFAULT INPUT FUNCTION -------------------


const menuCatItems = $('main .menu .menu-item .menu-category-block .category-item');
menuCatItems.on('click', function (){
    menuCatItems.removeClass(active);
    _menu.removeClass(active);
    mobileMenu.removeClass(active);
    $(this).addClass(active);
})

mobileMenu.on('click', function (){
    if(_menu.hasClass(active)){
        mobileMenu.removeClass(active);
        _menu.removeClass(active);
    } else {
        mobileMenu.addClass(active);
        _menu.addClass(active);
    }
})


// for view active section and scroll to section
$(window).on('load', function (){
    const id = location.hash;
    if(id !== '' && id.includes('#')){
        $('main .content-site').animate({
            scrollTop: $(id).offset().top - 100
        })
        const elem = $(`a[href="${id}"`);
        if(elem.hasClass('category-item')){
            elem.addClass(active).parent().parent().addClass(active);
        } else {
            elem.addClass(active).parent().addClass(active);
        }
    }
})