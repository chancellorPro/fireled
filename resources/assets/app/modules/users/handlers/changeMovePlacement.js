/**
 * Synchronize move-placement-select selects
 */
export default function () {
    let selectedStorage = $(this).val();
    $(this).parents('form').find('.move-placement-select').each(function(){
        if (selectedStorage != $(this).val()) {
            $(this).val(selectedStorage).change();
        }
    });
}
