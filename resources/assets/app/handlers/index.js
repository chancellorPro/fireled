import fastSave from "./fastSave";
import addEmbed from "./addEmbed";
import removeEmbed from "./removeEmbed";
import submitForm from "./submitForm";
import ajaxPagination from "./ajaxPagination";
import confirmModal from "./confirmModal";
import pageLimit from "./pageLimit";
import modalData from "./modalData";
import filterDateRange from "handlers/filterDateRange";
import fastSavePage, {CONTAINER_SELECTOR, markChanged} from "./fastSavePage";
import tableSorter from "tablesorter";
import stickyHeaders from "sticky-table-headers";
import 'tablesorter/dist/css/theme.default.min.css';

$(document)
    .scroll(function (e) {
        if($(this).scrollTop() > 300) {
            $('.visit-stats').each(function () {
                $(this).height(0).css('display', 'table-column-group');
            });
        } else {
            $('.visit-stats').each(function () {
                $(this).removeAttr('style');
            });
        }
    })

    .ready(function () {
        let tablesorter = $('.tablesorter');
        if(tablesorter) {
            tablesorter.tablesorter().stickyTableHeaders();
            tablesorter.find('thead').css('background', '#fff')
        }
    })

    /**
     * Open modal with data from server by request
     */
    .on('click', '.ajax-modal-action', modalData)

    /**
     * Open confirm modal
     */
    .on('click', '.ajax-confirm-action', confirmModal)

    /**
     * Submit form data
     */
    .on('click', '.ajax-submit-action', submitForm)

    /**
     * Submit form data
     */
    .on('click', '.ajax-pagination a', ajaxPagination)

    /**
     * Add embed element
     */
    .on('click', '.add-embed', addEmbed)

    /**
     * Remove embed element
     */
    .on('click', '.rm-embed', removeEmbed)

    /**
     * Fast save the data of an entity
     */
    .on('click', '.fast-save', fastSave)

    /**
     * Set page limit
     */
    .on('change', '.page-limit', pageLimit)

    /**
     * Mark inputs as changed
     */
    .on('change', `${CONTAINER_SELECTOR} input, ${CONTAINER_SELECTOR} select, ${CONTAINER_SELECTOR} textarea`, markChanged)

    .ready(function () {
        let dateRange = $('#date-range-select');
        if (dateRange.length) {
            filterDateRange();
            dateRange.change(filterDateRange);
        }
    });

function initSticky() {
    $('.tablesorter').stickyTableHeaders();
}

$(".table-responsive").scroll(function () {
    initSticky();
});

/**
 * Fast save data on the page
 */
$('.fast-save-page').click(fastSavePage);
