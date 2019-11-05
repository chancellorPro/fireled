import {CASH} from "modules/cms-user-actions/constants";
import {COIN} from "modules/cms-user-actions/constants";
import {ASSET} from "modules/cms-user-actions/constants";

$(document)

    /**
     * Set cursor to parent node
     */
    .on('mouseenter', 'td', function () {
        if($(this).find('.hidden-wrapper').length) {
            $(this).css('cursor', 'pointer');
        }
    })

    /**
     * Filter select options by selected source
     */
    .on('change', '#filter_source', function () {
        const sourceVal = $(this).val();
        $("#filter_action").select2({
            matcher: function (params, data) {
                if (sourceVal !== 'user_debug' && $.inArray(data.id, [CASH, COIN, ASSET]) > -1) {
                    return null;
                } else {
                    return data;
                }
            }
        });
    })

    /**
     * Open deploy info
     */
    .on('click', 'td', function () {
        const wrapper = $(this).find('.hidden-wrapper');

        if (wrapper && wrapper.hasClass('open')) {
            if (!window.getSelection().toString().length) {
                wrapper.removeClass('open')
            } else {
                document.execCommand("copy")
            }
        } else {
            wrapper.addClass('open')
        }
    });
