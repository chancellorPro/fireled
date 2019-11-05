import observer from "components/observer/EventObserver";
import http from "components/http/RequestBuilder";
import {UPDATE_NEIGHBORS, NEIGHBOR_GRID_ID} from "modules/users/constants";

/**
 * Update neighbor grid
 */
export default function () {
    observer.subscribe(UPDATE_NEIGHBORS, (response, self) => {
        observer.unsubscribe(UPDATE_NEIGHBORS, self);

        if (response.type == 'success') {
            new http($(this).closest('form').attr('action'))
                .method('GET')
                .success(response => {
                    $(`#${NEIGHBOR_GRID_ID}`).replaceWith(response);
                })
                .send();
        }
    });
}
