import http from "components/http/RequestBuilder";
import notifyError from "components/notify/notifyError";

/**
 * Update row to the Meal config grid
 *
 * @returns {boolean}
 */
export function savePage () {
    const route = $(this).data('route');
    const tbody = $('.release-save-container').find(".changed");
    const data = $('.release-save-container').find(".changed input, .changed select, .changed textarea").serializeArray();

    if(data.length === 0) {
        return false;
    }

    new http(route)
        .method('POST')
        .data(data)
        .send();

    tbody.each(function (n, item) {
        $(item).removeClass('changed');
    });

    return false;
}
