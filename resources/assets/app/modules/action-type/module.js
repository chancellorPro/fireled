import updateIndexes from "./listeners/updateIndexes";
import collapseState from "./handlers/collapseState";
import collapseStates from "./handlers/collapseStates";
import removeActionTypeState from "./handlers/removeActionTypeState";
import {DELTA_TIME_ATTRIBUTE} from "modules/action-type/constants";

import "./style.scss";

/**
 * Update indexes
 */
updateIndexes();

$(document)

    .on('click', '#product_id', function () {
        console.log('product_id');
        $('#product_id').prev('.select2-container').find('.select2-search__field').focus()
    })

    .on('change', '[name$="[time_type]"]', function () {
        const currentLi = $(this).closest('li');
        const deltaTimeHidden = currentLi.find('[name$="[attributes][' + DELTA_TIME_ATTRIBUTE + '][value]"]');
        const deltaTimeDisplay = currentLi.find('[name$="[attributes][' + DELTA_TIME_ATTRIBUTE + '][value][display]"]');

        deltaTimeDisplay.val(deltaTimeHidden.data('value') / parseInt($(this).val()));
    })

    .on('input', '[name$="[attributes][' + DELTA_TIME_ATTRIBUTE + '][value][display]"]', function () {
        const currentLi = $(this).closest('li');
        const timeType = currentLi.find('[name$="[time_type]"]').val();
        const deltaTimeHidden = currentLi.find('[name$="[attributes][' + DELTA_TIME_ATTRIBUTE + '][value]"]');

        deltaTimeHidden.val($(this).val() * timeType);
    })

    /**
     * Collapse one state
     */
    .on('click', '.collapse-link', collapseState)

    /**
     * Collapse all states
     */
    .on('click', '.hide-states', collapseStates)

    /**
     * Remove state
     */
    .on('click', '.rm-action-type-states', removeActionTypeState);
