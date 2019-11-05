import addShop from "./handlers/addShop";
import fastSave from "./handlers/fastSave";
import radioInput from "./handlers/radioInput";
import showForm from "./listeners/showForm";
import sortableInit from "modules/shop-department/handlers/sortableInit";
import sortableDepartmentInit from "modules/shop-department/handlers/sortableDepartmentInit";

import './styles.scss';

/**
 * Dropzone init
 */
showForm();

$(document)
    /**
     * Radio buttons behavior
     */
    .on('change', '.radio', radioInput)

    /**
     * Add next row to the dpa grid
     */
    .on('input', 'input', function () {
        $(this).closest('tr.department').addClass('changed');
    })

    /**
     * Document ready
     */
    .ready(function () {
        /**
         * Add class to checked radios
         */
        $('.radio[checked]').addClass('checked');

        /**
         * Add a new shop in a departments grid
         */
        $('.add-shop').click(addShop);

        /**
         * Fast save
         */
        $('.fast-save').click(fastSave);

        /**
         * Make tr to sortable
         */
        $('.sortable').each(sortableInit);

        /**
         * Make tr to sortable
         */
        $('.sortable-department').each(sortableDepartmentInit);
    });
