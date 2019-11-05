import {addRow} from "./handlers/addRow";
import {deleteRow} from "./handlers/deleteRow";
import awardDelete from "listeners/awardDelete";
import awardCreate from "listeners/awardCreate";
import observer from "components/observer/EventObserver";
import {AWARD_CREATED, AWARD_DELETE} from "modules/award/constants";

$(document)

    /**
     * Add next rows to the dye grid
     */
    .on('click', '.add-row', addRow)

    /**
     * Delete row
     */
    .on('click', '.delete-row', deleteRow)

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
    })

    /**
     * Create award
     */
    .on('click', '.award-create-button', function () {
        const row = $(this).closest('tr');

        awardCreate.bind(this)();

        observer.subscribe(AWARD_CREATED, (data, self) => {
            observer.unsubscribe(AWARD_CREATED, self);

            new Promise((resolve) => {
                resolve(row.addClass('changed'));
            }).then(function () {
                $('.fast-save-page').click();
            });
        });
    })

    /**
     * Delete award
     */
    .on('click', '.award-delete-button', function () {
        const row = $(this).closest('tr');

        awardDelete.bind(this)();

        observer.subscribe(AWARD_DELETE, (data, self) => {
            observer.unsubscribe(AWARD_DELETE, self);

            new Promise((resolve) => {
                resolve(row.addClass('changed'));
            }).then(function () {
                $('.fast-save-page').click();
            });

        });
    });

