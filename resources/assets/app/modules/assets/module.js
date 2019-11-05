import awardDelete from "listeners/awardDelete";
import awardCreate from "listeners/awardCreate";
import updateSaveAllButton from "listeners/updateSaveAllButton";
import changeType from "./handlers/changeType";
import getLastCollectionNumber from "./handlers/getLastCollectionNumber";
import {copyAssets} from "./handlers/copyAssets";
import {AWARD_CREATE, AWARD_DELETE, AWARD_CREATED, CLOSE_AWARD_MODAL} from "modules/award/constants";
import observer from "components/observer/EventObserver";
import {markChanged} from "./handlers/markChanged";
import {downloadAssets} from "./handlers/downloadAssets";
import {UPDATE_SAVE_ALL_BUTTON} from "handlers/fastSavePage";
import {DELTA_TIME_ATTRIBUTE} from "modules/action-type/constants";

$('#assets-table')
    .on('click', '.award-create', awardCreate)
    .on('click', '.award-delete', awardDelete);

$('#asset-form-type')
    .change(changeType)
    .change();

$('#get-last-collection-number').click(getLastCollectionNumber);


$(document)
    /**
     * Copy assets ids
     */
    .on('click', '.copy-assets', copyAssets)

    /**
     * Handler for download assets
     */
    .on('click', '.download-assets', downloadAssets)

    /**
     * Create award and save announcement
     */
    .on('click', '.award-create-button', function () {
        const _this = this;

        awardCreate.bind(_this)();
    })

    .on('change', '[name$="[time_type]"]', function () {
        const currentTd = $(this).closest('td');
        const deltaTimeHidden = currentTd.find('[name$="[' + DELTA_TIME_ATTRIBUTE + ']"]');
        const deltaTimeDisplay = currentTd.find('[name$="[' + DELTA_TIME_ATTRIBUTE + '][display]"]');

        deltaTimeDisplay.val(deltaTimeHidden.data('value') / parseInt($(this).val()));
    })

    .on('input', '[name$="[' + DELTA_TIME_ATTRIBUTE + '][display]"]', function () {
        const currentTd = $(this).closest('td');
        const timeType = currentTd.find('[name$="[time_type]"]').val();
        const deltaTimeHidden = currentTd.find('[name$="[' + DELTA_TIME_ATTRIBUTE + ']"]');

        deltaTimeHidden.val($(this).val() * timeType);
    })

    /**
     * Delete award
     */
    .on('click', '.award-delete-button', function () {
        const _this = this;

        awardDelete.bind(_this)();
    })

    /**
     * Mark row as changed
     */
    .on('change', '.fast-save-container input, .fast-save-container select, .fast-save-container textarea', markChanged)

    /**
     * Unsubscribe on modal close
     */
    .ready(function(){
        updateSaveAllButton();

        observer.subscribe(CLOSE_AWARD_MODAL, (data, self) => {
            observer.unsubscribe(AWARD_CREATE);
            observer.unsubscribe(AWARD_CREATED);
        });
    });
