import {saveState} from "./handlers/saveState";

$(document)

    /**
     * Mark the row as changed
     */
    .on('click', 'input[type="checkbox"]', function () {
        $(this).closest('tr').addClass('changed')
    })

    /**
     * Save the row
     */
    .on('click', '.save-page', saveState);
