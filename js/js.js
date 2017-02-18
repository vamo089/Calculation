jQuery(document).ready(function($) {
calulation();
$('span').on('click tap', function() {
    $(this).parent().parent().find('span').not(this).removeClass('active')
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
    }
    calulation();
});

function calulation() {
    var price = 0;
    $('.active').each(function() {
        var value = $(this).attr('value');
        var parseValue = parseInt(value);
        price = price + parseValue;
        $('.result').html(price);
    });
};

});