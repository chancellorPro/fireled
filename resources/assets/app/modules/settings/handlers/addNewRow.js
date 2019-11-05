/**
 * Add next rows to the config grid
 *
 * @returns {boolean}
 */
export function addNewRow() {
    const add_counter = parseInt($('.add-counter').val());
    const tbody = $('table.table tbody');
    const maxId = $(this).data('counter');
    const template = $('template#config-row');

    let newLength = parseInt(tbody.find('tr.new-row').length);

    for (let i = 0; i < add_counter; i++) {
        let trId = (maxId > 0 ? maxId : 0) + parseInt(tbody.find('tr.new-row').length);

        let newRow = template.html().replace(/%id%/g, trId)
            .replace(/%tr_id%/g, trId)
            .replace(/%draft%/g, trId);

        // Set default values to new rows
        let newRowHtml = $(newRow);
        $('.default-row-value').each(function(){
            let defaultValue = $(this).val();
            newRowHtml.find('.' + $(this).data('class')).attr('value', defaultValue);
        });
        newRow = newRowHtml.get(0).outerHTML;

        if (newLength > 0) {
            $(tbody.find('tr.new-row').last()).after(newRow);
        } else {
            tbody.prepend(newRow);
        }
        newLength++;

        tbody.find('[data-autoincrement="1"]').last().val(trId);
    }

    return false;
}
