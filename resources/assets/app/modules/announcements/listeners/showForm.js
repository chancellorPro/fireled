import observer from "components/observer/EventObserver";
import {ANNOUNCEMENTS_SHOW_FORM} from "../constants";

export default function () {
    observer.subscribe(ANNOUNCEMENTS_SHOW_FORM, (data, self) => {
        observer.unsubscribe(ANNOUNCEMENTS_SHOW_FORM, self);

        $('.datetimepicker').datetimepicker({
            format: 'yyyy-mm-dd hh:ii:ss',
            autoclose: true,
        });
    });
}
