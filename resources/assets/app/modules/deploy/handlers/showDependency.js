/**
 * Handler for show вependency
 */
export function showDependency(e) {
    const currentElement = $(this);
    const currentConfig = currentElement.parents('.config-item-block').data('model');
    let addMode = currentElement.is(':checked');

    oneLevelShow(currentConfig, addMode);
}

function oneLevelShow(configName, addMode, level = 1) {
    if(DEPLOY_DEPENDS.hasOwnProperty(configName) && level < 10) {
        let configBlock = $('.model-' + configName);
        if(addMode) {
            configBlock.addClass('deploy-chain');
        } else {
            configBlock.removeClass('deploy-chain');
        }

        for (let key in DEPLOY_DEPENDS[configName]) {
            let dependConfigName = DEPLOY_DEPENDS[configName][key];
                let configBlock = $('.model-' + dependConfigName);
            if(addMode) {
                configBlock.addClass('deploy-chain');
            } else {
                configBlock.removeClass('deploy-chain');
            }
            oneLevelShow(dependConfigName, addMode, level + 1);
        }
    }

}
