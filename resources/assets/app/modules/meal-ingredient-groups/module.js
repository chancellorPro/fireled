import {addNewRow} from "./handlers/addNewRow";
import {ingredientDelete} from "./handlers/ingredientDelete";

$(document)

    /**
     * Add next rows to the dye grid
     */
    .on('click', '.add-new-row', addNewRow)

    /**
     * Delete row
     */
    .on('click', '.delete-row', ingredientDelete)

    /**
     * Mark row as changed
     */
    .on('input', 'input', function () {
        $(this).closest('tr').addClass('changed')
    })

    /**
     * How many rows to add
     * Change counter
                     */
    .on('input', '.add-counter', function () {
        $('.add-counter').val(this.value)
    });

