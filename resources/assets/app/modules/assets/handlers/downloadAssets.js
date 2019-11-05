/**
 * Handler for download assets
 */
export function downloadAssets(e) {
    e.preventDefault();
    let assetIds = [];

    $('.fast-save-container').find('input[name="for_copy"]:checked').each(function (n, item) {
        console.log($(item));
        let assetId = $(item).data('asset-id');
        if(assetId) {
            assetIds.push(assetId);
        }
    });

    /**
     * Select all if no one is selected
     */
    if (assetIds.length === 0) {
        $('.fast-save-container').find('input[name="for_copy"]').each(function (n, item) {
            let assetId = $(item).data('asset-id');
            if(assetId) {
                assetIds.push(assetId);
            }
        });
    }


    window.location = $(this).data('route') + '&ids=' + assetIds.join(',');
}
