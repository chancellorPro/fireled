/**
 * Add rows to the grid
 *
 * @returns {boolean}
 */
export function addRow() {
    const add_counter = $('.add-counter').val();
    const tbody = $('#crops > tbody');
    const trLast = $('#crop_template').html();

    let lastID = tbody.find("tr").last().find('.crop_id').text();
    let incrementId = (parseInt(lastID) + 1) || 1;

    for (let i = 0; i < add_counter; i++) {
        tbody.append(trLast.replace(/%crop%/g, i + incrementId));
    }

    return false;
}
