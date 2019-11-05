import observer from "components/observer/EventObserver";
import {AWARD_CREATE} from "modules/award/constants";
import {AWARD_CREATED} from "modules/award/constants";

export default function () {
    observer.subscribe(AWARD_CREATE, (data, self) => {
        observer.unsubscribe(AWARD_CREATE, self);

        const currentBtn = $(this);
        const editBtn = $('#' + this.dataset.templateId)
            .html()
            .replace( new RegExp(this.dataset.templatePlaceholder, "g"), data.award_id)
            .replace( new RegExp('%field_name%', "g"), this.dataset.fieldName || '');

        currentBtn.parent().append(editBtn);
        currentBtn.remove();
        observer.dispatch(AWARD_CREATED, data);
    });
}
