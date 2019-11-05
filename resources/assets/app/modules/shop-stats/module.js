$(document)

    .on('click', 'tr', function () {
        $(this).find('td').each(function () {
            if($(this).attr('style')) {
                $(this).removeAttr('style')
            } else {
                $(this).css('background', '#e7e7e7');
            }
        });
    });
