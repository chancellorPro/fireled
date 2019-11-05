import Dropzone from 'dropzone';
import dropzoneInit from "./handlers/dropzoneInit";
import {savePage} from "./handlers/savePage";
import {markChanged} from "./handlers/markChanged";
import observer from "components/observer/EventObserver";
import awardCreate from "listeners/awardCreate";
import awardDelete from "listeners/awardDelete";
import {AWARD_CREATE, AWARD_CREATED, AWARD_DELETE, CLOSE_AWARD_MODAL} from "modules/award/constants";
import './styles.scss';
import {addNewRow} from "./handlers/addNewRow";
import {saveRow} from "./handlers/saveRow";

/**
 * Turned off the Dropzone auto init
 *
 * @type {boolean}
 */
Dropzone.autoDiscover = false;

/**
 * Dropzone init
 */
$('.dropzone').each(dropzoneInit);

$(document)

    .ready(function () {
        /**
         * Unsubscribe on modal close
         */
        observer.subscribe(CLOSE_AWARD_MODAL, (data, self) => {
            observer.unsubscribe(AWARD_CREATE);
            observer.unsubscribe(AWARD_CREATED);
        });

        /**
         * Init color-picker inputs
         */
        $('.cp2').colorpicker();

        $('#update-all').click(savePage);
    })

    /**
     * Add next rows to the dye grid
     */
    .on('click', '.add-new-row', addNewRow)

    /**
     * Create award and save row
     */
    .on('click', '.award-create-button', function () {
        const _this = this;
        const saveButton = $(this).closest('tr').find('.update-row');

        awardCreate.bind(_this)();

        observer.subscribe(AWARD_CREATE, (data, self) => {
            observer.unsubscribe(AWARD_CREATE, self);
            saveButton.click();
        });
    })

    .on('click', '.update-row', saveRow)

    /**
     * Delete award
     */
    .on('click', '.award-delete-button', function () {
        const _this = this;

        awardDelete.bind(_this)();
    })

    /**
     * Delete award
     */
    .on('click', '.remove-embed', function () {
        $(this).closest('tr').addClass('changed');
        $('#update-all').show();
    })

    /**
     * Mark row as changed
     */
    .on('click', '.dropzone', markChanged)
    .on('click', '.award-create-button', markChanged)
    .on('input', 'tbody input, tbody textarea', markChanged)
    .on('change', 'tbody input, tbody select', markChanged);
