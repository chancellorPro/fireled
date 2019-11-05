import http from "components/http/RequestBuilder";
import {UPDATE_NEIGHBORS, NEIGHBOR_GRID_ID} from "modules/users/constants";

/**
 * Set page limit
 */
export default function () {
    let route = $(this).data('route') + '&page_limit=' + $(this).val();
    new http(route)
        .method('GET')
        .success(response => {
            $(`#${NEIGHBOR_GRID_ID}`).replaceWith(response);
        })
        .send();
}
