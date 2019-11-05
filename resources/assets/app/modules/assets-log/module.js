
import './styles.scss';

$(document)

    .on('click', '.toggle_ids', function () {
        if($(this).next().height() > 0) {
            $(this).text($(this).text().replace('Hide', 'Show'));
            $(this).next().height(0);
        } else {
            $(this).text($(this).text().replace('Show', 'Hide'));
            $(this).text().replace('Show', 'Hide');
            $(this).next().height('100%');
        }
    });
