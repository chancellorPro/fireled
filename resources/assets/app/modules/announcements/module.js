import {AWARD_CREATE, AWARD_CREATED, CLOSE_AWARD_MODAL} from "modules/award/constants";
import observer from "components/observer/EventObserver";
import awardDelete from "listeners/awardDelete";
import awardCreate from "listeners/awardCreate";
import showForm from "./listeners/showForm";

$(document)

    /**
     * Create award and save announcement
     */
    .on('click', '.award-create-button', function () {
        awardCreate.bind(this)();
    })

    /**
     * Delete award
     */
    .on('click', '.award-delete-button', function () {
        const _this = this;

        awardDelete.bind(_this)();
    })

    /**
     * Unsubscribe on modal close
     */
    .ready(function(){
        observer.subscribe(CLOSE_AWARD_MODAL, (data, self) => {
            observer.unsubscribe(AWARD_CREATE);
            observer.unsubscribe(AWARD_CREATED);
        });
    });

/**
 * Run the show form handler.
 * After click at create or edit button
 */
$('.show-form')
    .click(showForm);
