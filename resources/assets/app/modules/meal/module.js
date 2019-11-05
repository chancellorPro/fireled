import {addNewRow} from "./handlers/addNewRow";
import {mealDelete} from "./handlers/mealDelete";
import {saveMealState} from "./handlers/savePage";
import {AWARD_CREATE, AWARD_CREATED, AWARD_DELETE} from "modules/award/constants";
import observer from "components/observer/EventObserver";
import awardDelete from "listeners/awardDelete";
import awardCreate from "listeners/awardCreate";

$(document)

    /**
     * Add next rows to the dye grid
     */
    .on('click', '.add-new-row', addNewRow)

    /**
     * Delete row
     */
    .on('click', '.delete-row', mealDelete)

    /**
     * Mark row as changed
     */
    .on('input', 'input', function () {
        $(this).closest('tr').addClass('changed')
    })

    /**
     * Mark row as changed
     */
    .on('.select2').change(function (item) {
        $(item.target).closest('tr').addClass('changed');
    })


    /**
     * Create award and save meal
     */
    .on('click', '.award-create-button', function () {
        const _this = this;
        awardCreate.bind(_this)();
        $(this).closest('tr').addClass('changed');

        observer.subscribe(AWARD_CREATED, (data, self) => {
            saveMealState()
        });
    })

    /**
     * Delete award
     */
    .on('click', '.award-delete-button', function () {
        const _this = this;

        awardDelete.bind(_this)();
    })


    /**
     * How many rows to add
     * Change counter
     */
    .on('input', '.add-counter', function () {
        $('.add-counter').val(this.value)
    });

/**
 * Fast save data on the dyes page
 */
$('.save-page').click(saveMealState);
