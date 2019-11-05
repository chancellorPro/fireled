/**
 * Handler for download adp
 */
export function downloadAdp(e) {
    e.preventDefault();
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
    if (adpIds.length === 0) {
        $('.rows-content').find('input[name="for_copy"]').each(function (n, item) {
            let adpId = $(item).data('id');
            if (adpId) {
                adpIds.push(adpId);
            }
        });
    }

    window.location = $(this).data('route') + '&ids=' + adpIds.join(',');
}
