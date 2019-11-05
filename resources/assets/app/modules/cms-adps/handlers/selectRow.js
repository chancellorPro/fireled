/**
 * Handler for select row by full td area
 */
export function selectRow(e) {
    if (!$(e.target).hasClass('for-copy')) {
        e.preventDefault();
        const checkbox = $(this).find('.for-copy');

        if(checkbox.is(':checked')) {
            checkbox.prop('checked', false);
        } else {
            checkbox.prop('checked', true);
        }
    }
}
