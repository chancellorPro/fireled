/**
 * Mark changed
 */
export function markChanged () {
    $(this).closest('tr').addClass('changed');
    $('#update-all').show();
}
