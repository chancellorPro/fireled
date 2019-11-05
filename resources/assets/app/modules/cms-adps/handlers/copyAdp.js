/**
 * Handler for copy adp ids to clipboard
 */
export function copyAdp(e) {
    e.preventDefault();
    const adpIdsField = $('input[name="adp_ids"]');
    let adpIds = [];

    $('.rows-content').find('input[name="for_copy"]:checked').each(function (n, item) {
        let adpId = $(item).data('id');
        if(adpId) {
            adpIds.push(adpId);
        }
    });

    /**
     * Select all if no one is selected
     */
    if (adpIds.length == 0) {
        $('.rows-content').find('input[name="for_copy"]').each(function (n, item) {
            let adpId = $(item).data('id');
            if (adpId) {
                adpIds.push(adpId);
            }
        });
    }

    adpIdsField.val(adpIds);
    adpIdsField.select();
    document.execCommand("copy");
    // adpIdsField.val([]);
}
