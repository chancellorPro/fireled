import http from "components/http/RequestBuilder";
import notifySuccess from "components/notify/notifySuccess";
import getFormData from "helpers/getFormData";

/**
 * Add comment
 */
export default function (e) {
    e.preventDefault();
    const data = getFormData($('#collectible-form').find('input'));

    new http($('#add-collectible').attr('href'))
        .method('POST')
        .data({data})
        .success(resp => {
            if (resp.type === "success") {
                let form = $(resp.data);
                $('#' + resp.container).replaceWith(form);
                notifySuccess('User collectible updated');
            }
        })
        .send();

    return false;
}
