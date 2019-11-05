import http from "components/http/RequestBuilder";

/**
 * Add comment
 */
export default function (e) {
    e.preventDefault();

    new http($(this).closest('a').attr('href'))
        .method('POST')
        .data({description: $('[name="description"]').val()})
        .success(r => {
            if (r.status === true) {
                $('[name="description"]').val('');
                $('#user-comments').prepend('<tr><td>' + r.model.description + '</td><td>' + r.created_by + '</td><td>' + r.created_at + ' PST</td><td><a href="http://cms-dev.local/remove-comment/' + r.model.id + '" class="ajax-confirm-action" data-method="DELETE" data-header="Delete comment?" data-btn-name="Delete" data-btn-class="btn-danger btn-sm" data-dismiss="1" data-reload="1"><button class="btn btn-danger btn-sm"><i class="fa fa-trash-o" aria-hidden="true"></i>Delete</button></a></td></tr>');
            }
        })
        .send();

    return false;
}
