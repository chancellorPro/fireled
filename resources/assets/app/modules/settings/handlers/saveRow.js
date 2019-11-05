import notifyError from "components/notify/notifyError";

/**
 * Update row to the dpa config grid
 *
 * @returns {boolean}
 */
export function saveRow (e) {
    e.preventDefault();

    let rowToSave = $(this).parents('tr');
    let action = rowToSave.data('action');
    let row = rowToSave.find(".editable select, .editable input").serializeArray();

    if($("tr.changed").length > 1) {
        let r = confirm('Changed more than one row. Saved only current row!');
        if(r !== true) {
            return false;
        }
    }

    if(!rowToSave.hasClass('changed')) {
        notifyError('Nothing to save!');
        return false;
    }

    $.ajax({
        type: "PUT",
        dataType: 'json',
        url: action,
        data: row,
        success: function( resp ) {
            rowToSave.removeClass('changed');
            $.notify({
                message: resp.message
            },{
                type: resp.type
            });
        },
        error: function (jqXHR, exception) {
            if (jqXHR.responseJSON && jqXHR.responseJSON.hasOwnProperty('errors')) {
                $.each( jqXHR.responseJSON.errors, function(errorKey, error ) {
                    $.each( error, function(messageKey, message ) {
                        $.notify({
                            message: message
                        },{
                            type: 'danger'
                        });
                    });
                });
            } else {
                window.location.reload()
            }
        }
    });

    return false;
}
