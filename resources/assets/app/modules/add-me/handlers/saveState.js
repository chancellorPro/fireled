import http from "components/http/RequestBuilder";
import notifyError from "components/notify/notifyError";
import successHandler from "components/http/successHandler";
import getFormData from "helpers/getFormData";

/**
 * Update row
 *
 * @returns {boolean}
 */
export function saveState () {
    const container = $('.save-container');
    const data = getFormData(container.find(".changed input"));

    if (!Object.keys(data).length) {
        notifyError('Nothing to save!');

        return false;
    }

    new http($(this).data('route'))
        .method('PUT')
        .data(data)
        .success(function (resp) {
            container.find('tr.changed').removeClass('changed');
            successHandler(resp);
        })
        .send();

    return false;
}
