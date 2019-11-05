/**
 * Change placement select in Add Assets block
 */
export default function () {
    const placementName = $('#add-assets-block-placement-name');
    if ($(this).val() > 0) {
        placementName.hide()
    } else {
        placementName.show();
    }
}
