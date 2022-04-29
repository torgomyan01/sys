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
    closeMobileMenu();
    $(this).addClass(active);
})

mobileMenu.on('click', function (){
    if(_menu.hasClass(active)){
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
})

$('.close-mobile-menu').on('click', closeMobileMenu);

function openMobileMenu(){
    mobileMenu.addClass(active);
    _menu.addClass(active);
}

function closeMobileMenu(){
    mobileMenu.removeClass(active);
    _menu.removeClass(active);
}


// // for view active section and scroll to section
// $(window).on('load', function (){
//     const id = location.hash;
//     if(id !== '' && id.includes('#')){
//         $('main .content-site').animate({
//             scrollTop: $(id).offset().top - 150
//         })
//         const elem = $(`a[href="${id}"`);
//         if(elem.hasClass('category-item')){
//             elem.addClass(active).parent().parent().addClass(active);
//         } else {
//             elem.addClass(active).parent().addClass(active);
//         }
//     }
// })


const windowBody = $('main .content-site');
const siteSections = $('main .content-site .main-menu');

windowBody.on('mouseenter', function (){
    windowBody.on('scroll', function (e){
        for (let i = 0; i < siteSections.length; i++) {
            const elm = siteSections[i];
            const top = $(e.target).scrollTop() + 200;
            const elemTop = elm.offsetTop;

            if(top > elemTop && top < elemTop + $(elm).height()){
                menuItems.removeClass(active);
                menuCatItems.removeClass(active);
                const elementId = $(elm).attr('id');
                $(`a[href="#${elementId}"`).addClass(active).parent().addClass(active).parent().addClass(active);
                break;
            }
        }
    })
})
windowBody.on('mouseleave', function (){
    windowBody.off('scroll');
})
