$('.product_tab').on('click', function(){
    let currTab  = $(this).index();
    

    $('.product_tab').removeClass('active');
    $(this).addClass('active');

    let tabs = [$('.product_home_wrapper'),$('.charecteristic_wrapper'),$('.description_wrapper')];

    tabs.forEach(item => {
        item.removeClass('active');
    });
    tabs[currTab].addClass('active');
})