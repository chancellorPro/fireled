import observer from "components/observer/EventObserver";
import {GET_NEIGHBORS, NEIGHBOR_GRID_ID} from "../constants";

/**
 * Update neighbor grid in searching
 */
export default function () {
    observer.subscribe(GET_NEIGHBORS, resp => {
        $(`#${NEIGHBOR_GRID_ID}`).replaceWith(resp);
    });
}
