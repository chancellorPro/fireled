import observer from "components/observer/EventObserver";
import {GIFT_WRAP_ROW_ADDED} from "../constants";

/**
 * Add new row to grid
 */
export default function () {
    observer.subscribe(GIFT_WRAP_ROW_ADDED, data => {
        $('#gift-wrap-' + data.embedBlockId)
            .find('.datetimepicker')
            .datetimepicker({
                format: 'yyyy-mm-dd hh:ii:ss',
                autoclose: true
            });
    });
}
