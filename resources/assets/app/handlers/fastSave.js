import http from "components/http/RequestBuilder";
import {SavedItemNotFound} from "exceptions/SavedItemNotFound";
import getFormData from "helpers/getFormData";
import observer from "components/observer/EventObserver";
import successHandler from "components/http/successHandler";

export default function (e) {
    e.preventDefault();

    const currentBtn = $(this);
    const savedItem = currentBtn.closest('.fast-save-container');
    const dataSet = this.dataset;

    if (!savedItem.length) {
        throw new SavedItemNotFound;
    }

    new http(currentBtn.attr('href'))
        .method('PUT')
        .success(response => {
            if (!!dataSet.event) {
                observer.dispatch(dataSet.event, response);
            }
            successHandler(response);
        })
        .data(getFormData(savedItem))
        .send();

    savedItem.removeClass('changed');
    savedItem.find('.changed').removeClass('changed');

    return false;
}
