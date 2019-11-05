import observer from "components/observer/EventObserver";
import {UPDATE_SAVE_ALL_BUTTON} from "handlers/fastSavePage";

export default function () {
    observer.subscribe(UPDATE_SAVE_ALL_BUTTON, (data, self) => {
        const saveAllButton = $('#update-all');
        const counter = $('#update-all .count');

        let count = $('.fast-save-container.changed').length;

        if(count > 0) {
            saveAllButton.show();
        } else {
            saveAllButton.hide()
        }

        counter.html(count);
    });
}
