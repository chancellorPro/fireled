/**
 * Handler for copy assets ids to clipboard
 */
export function copyAssets(e) {
    e.preventDefault();

    const assetIdsField = $('textarea[name="asset_ids"]');
    const withName = $('input[name="with_name"]');
    let assetIds = [];

    $('.fast-save-container').find('input[name="for_copy"]:checked').each(function (n, item) {
        console.log($(item));
        let assetId = $(item).data('asset-id');
        let assetName = $(item).data('asset-name');
        if(assetId) {
            if(withName.prop("checked") === true) {
                assetIds.push('\n' + assetId + ' ' + assetName);
            } else {
                assetIds.push(assetId);
            }
        }
    });

    /**
     * Select all if no one is selected
     */
    if (assetIds.length == 0) {
        $('.fast-save-container').find('input[name="for_copy"]').each(function (n, item) {
            let assetId = $(item).data('asset-id');
            let assetName = $(item).data('asset-name');
            if(assetId) {
                if(withName.prop("checked") === true){
                    assetIds.push('\n' + assetId + ' ' + assetName);
                } else {
                    assetIds.push(assetId);
                }
            }
        });
    }

    assetIdsField.val(assetIds);
    assetIdsField.select();
    document.execCommand("copy");
}
