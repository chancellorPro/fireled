/**
 * Position update
 */
export default function () {
    $('.position').each(function (index) {
        const position = $(this);
        const page = $('#page').val();
        const page_limit = $('[name="page_limit"]').val();

        if (parseInt(position.val()) !== index) {
            position.val(index + ((page - 1) * page_limit));
            position.change();
        }
    });
}
