import http from "components/http/RequestBuilder";
import {SavedItemNotFound} from "exceptions/SavedItemNotFound";
import getFormData from "helpers/getFormData";
import successHandler from "components/http/successHandler";
import observer from "components/observer/EventObserver";

export const CONTAINER_SELECTOR = '.fast-save-page-container';
export const PAGE_SAVED = 'PAGE_SAVED';
export const UPDATE_SAVE_ALL_BUTTON = 'UPDATE_SAVE_ALL_BUTTON';

/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */
export default function (e) {
    e.preventDefault();

    const currentBtn = $(this);
    const savedItem = $(CONTAINER_SELECTOR);
    const dataSet = this.dataset;

    if (!savedItem.length) {
        throw new SavedItemNotFound;
    }

    if (savedItem.hasClass('progress')) {
        return false;
    }
    savedItem.addClass('progress');

    /**
     * Get changed data
     */
    const formItems = savedItem.find('.changed');
    const data = getFormData(formItems);

    if (!Object.keys(data).length) {
        savedItem.removeClass('progress');
        return false;
    }

    new http(currentBtn.attr('href'))
        .method('PUT')
        .data(data)
        .complete(() => {
            savedItem.removeClass('progress');
        })
        .success(response => {
            formItems.removeClass('changed');
            successHandler(response);
            if (!!dataSet.event) {
                observer.dispatch(dataSet.event, response);
            }
        })
        .send();

    return false;
}

/**
 * Mark form's elements as changed
 */
export function markChanged() {
    $(this).addClass('changed');
}
