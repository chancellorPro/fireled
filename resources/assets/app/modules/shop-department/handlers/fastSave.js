import http from "components/http/RequestBuilder";
import getFormData from "helpers/getFormData";
import successHandler from "components/http/successHandler";

/**
 * Fast save for shop department
 *
 * @param e
 *
 * @returns {boolean}
 */
export default function (e) {
    e.preventDefault();

    const shopNamePrefix = 'shop';
    const departmentNamePrefix = 'department';
    const currentBtn = $(this);
    const fastSaveContainer = $('.fast-save-container');

    let shops = {};
    let department = {};

    fastSaveContainer.find('tbody tr.changed tr.info').each(function () {
        let depindex = $(this).closest('.department').index();
        let departmentFormData = getFormData($(this));
        for (let i in departmentFormData) {
            const itemName = `${departmentNamePrefix}[${depindex}][${i}]`;
            department[itemName] = departmentFormData[i];
        }

        $(this).next('tr.shops').find('tbody.sortable tr').each(function (index) {
            let formData = getFormData($(this));
            for (let i in formData) {
                const itemName = `${shopNamePrefix}[${departmentFormData.id}][${index}][${i}]`;
                shops[itemName] = formData[i];
                shops[`${shopNamePrefix}[${departmentFormData.id}][${index}][department]`] = departmentFormData.id;
            }
        })
    });

    new http(currentBtn.attr('href'))
        .method('PUT')
        .data({...shops, ...department})
        .success(response => {
            $('.changed').each(function (index) {
                $(this).removeClass('changed');
            });
            successHandler(response);
        })
        .send();

    return false;
}
