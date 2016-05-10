/**
 * @todo: refactor jQuery out to maximise performance. Create addClass, removeClass and hasClass functions
 */

$('#menu li').on('touchstart click', function (e) {

    e.preventDefault();
    
    var item = $(this);
    var submenu = item.find('ul');

    // Display submenu, if there is one
    // Otherwise follow the link
    if (submenu.length > 0) {
        submenu.addClass('open');
        return;
    } else {
        var link = item.find('a');
        window.location = link.attr('href');
    }

});