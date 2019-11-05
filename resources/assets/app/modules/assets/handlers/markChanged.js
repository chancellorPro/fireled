import {UPDATE_SAVE_ALL_BUTTON} from "handlers/fastSavePage";
import observer from "components/observer/EventObserver";
/**
 * Mark changed
 */
export function markChanged () {
    if($(this).attr('type') != 'checkbox') {
        const parentContainer = $(this).parents('tr');
        parentContainer.addClass('changed');
        observer.dispatch(UPDATE_SAVE_ALL_BUTTON);
    }
}
