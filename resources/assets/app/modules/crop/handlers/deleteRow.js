/**
 * Delete row
 *
 * @returns {boolean}
 */
export function deleteRow() {
    $(this).closest('tr').remove();

    return false;
}
