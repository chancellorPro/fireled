import http from "components/http/RequestBuilder";
import notifyError from "components/notify/notifyError";
import getFormData from "helpers/getFormData";

/**
 * Update row to the dpa config grid
 *
 * @returns {boolean}
 */
export function savePage (e) {
    e.preventDefault();
    const data = getFormData($("tr.changed").find('input, input[type="hidden"], select, textarea'));

    new http($(this).data('route'))
        .method('PUT')
        .data({...data})
        .success(function (resp) {
            if (resp.type === 'error') {
                notifyError(resp.message);
            } else {
                window.location.reload(true);
            }
        })
        .send();

    return false;
}
