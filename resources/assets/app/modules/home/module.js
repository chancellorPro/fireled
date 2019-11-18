import http from "components/http/RequestBuilder";
import successHandler from "components/http/successHandler";
import notifyError from "components/notify/notifyError";
import getFormData from "helpers/getFormData";

$(document)
    /**
     * Price recount
     */
    .on('input', '.recount', function () {
        const price = $('.basket-price').data('price');
        $(this).closest('.row').find('.item-sum').text((price * $(this).val()));
        let totalSum = 0;
        $('.item-sum').each(function () {
            totalSum += parseInt($(this).text());
        });
        $('#total-sum').text(totalSum)
    })

    .on('click', '.item-remove', function (e) {
        e.preventDefault();
        $(this).closest('.x_panel').hide();

        new http($(this).attr('href'))
            .method('POST')
            .success(function (resp) {
                successHandler(resp);
            })
            .send();
    })

    .on('click', '#order-send', function () {
        let data = getFormData($('.recount'));

        new http($(this).data('route'))
            .method('POST')
            .data({...data})
            .success(function (resp) {
                successHandler(resp);
                $('.basket-hide').click();
            })
            .send();
    })
;