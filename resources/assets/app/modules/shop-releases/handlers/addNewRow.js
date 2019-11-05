/**
 * Add next rows to the meal config grid
 *
 * @returns {boolean}
 */
export function addNewRow() {
    const add_counter = $('.add-counter').val();
    const tbody = $('#release > tbody');
    const trLast = $('#release_template').html();
    const lastID = tbody.find("tr").last().find('.release_id').val();
    const incrementId = (parseInt(lastID) + 1) || 1;

    for (let i = 0; i < add_counter; i++) {
        tbody.append(trLast.replace(/%release%/g, i + incrementId));
        tbody.find('.select2').select2();

        tbody.find('.datetimepicker')
            .datetimepicker({
                format: 'yyyy-mm-dd hh:ii:ss',
                autoclose: true
            });
    }

    return false;
}
