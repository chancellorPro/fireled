/**
 * Handler for copy assets ids to clipboard
 */
export function copyAssets(e) {
    e.preventDefault();

    const assetIdsField = $('input[name="asset_ids"]');
    let assetIds = [];

    $('.rows-content').find('input[name="for_copy"]:checked').each(function (n, item) {
        let assetId = $(item).data('asset-id');
        if(assetId) {
            assetIds.push(assetId);
        }
    });

    /**
     * Select all if no one is selected
     */
    if (assetIds.length == 0) {
        $('.rows-content').find('input[name="for_copy"]').each(function (n, item) {
            let assetId = $(item).data('asset-id');
            if(assetId) {
                assetIds.push(assetId);
            }
        });
    }

    assetIdsField.val(assetIds);
    assetIdsField.select();
    document.execCommand("copy");
}
