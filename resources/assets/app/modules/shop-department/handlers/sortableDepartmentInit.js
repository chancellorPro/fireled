import Sortable from 'sortablejs';

/**
 * Sortable Init
 */
export default function () {
    new Sortable(this, {
        group: 'department',
        removeCloneOnHide: true,
        onEnd: function(e) {
            new Promise(function (resolve) {
                $(e.item).closest('.table').find('tr.department').each(function () {
                    $(this).addClass('changed')
                });

                resolve({
                    radio: $(e.item).find('.radio'),
                    parent: $(e.item).closest('.table'),
                });
            });
        }
    });
}
