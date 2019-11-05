/**
 * Select rows
 */
export default function () {
    const countSelector = $(this).parents('td, th').find('.count-for-select');
    const rowsForSelect = $(this).parents('table').find('.for-select');

    let countForSelect = countSelector.val() || 0;
    if (countForSelect === 0) {
        countForSelect = rowsForSelect.length;
        countSelector.val(countForSelect);
    }

    if ($(this).is(':checked')) {
        rowsForSelect.each(function(){
            if (countForSelect > 0) {
                this.checked = true;
                countForSelect--;
            }
        })
    } else {
        rowsForSelect.each(function(){
            this.checked = false;
        })
    }


}
