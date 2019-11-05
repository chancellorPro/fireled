import ModalBuilder from "components/modal/ModalBuilder";
import http from "components/http/RequestBuilder";

/**
 * Handler for show dependency popup
 */
export function showDependencyPopup(e) {
    e.stopPropagation();
    const currentElement = $(this);
    const currentConfig = currentElement.parents('.config-item-block').data('model');
    const currentConfigId = currentElement.parents('.config-item-block').data('id');
    let ids = [];
    if(currentConfigId) {
        ids.push(currentConfigId);
    }

    rootLevelShow(currentConfig, ids);
    return false;
}

/**
 * One level show
 *
 * @param configName
 * @param dependConfigName
 * @param level
 * @param idResponse
 */
function oneLevelShow(configName, dependConfigName,  level = 1, idResponse) {
    if(DEPLOY_DEPENDS.hasOwnProperty(configName) && level < 10) {
        let ids = idResponse.ids;
        let textClass = '';
        if(idResponse.hasOwnProperty('notImplemented')) {
            textClass = 'text-muted';
        }

        let isRecursion = false;
        $('.chain-' + configName).each(function(){
            if($(this).parents('.chain-' + dependConfigName).length > 0) {
                isRecursion = true;
                $(this).append(
                    '<div class="chain-' + dependConfigName + '">' +
                        '<span class="' + textClass + '">' + dependConfigName +
                            ' <span class="text-danger">(Recursion)</span>' +
                        '</span>' +
                    '</div><br>');
            } else if($(this).find('.chain-' + dependConfigName).length == 0) {
                $(this).append(
                    '<div class="chain-' + dependConfigName + '">' +
                    '<span class="' + textClass + '">' + dependConfigName + '</span>' +
                    (ids.length > 0 ? '<span class="depend-ids"> ' + ids.join(',') + '</span>' : '')  +
                    '</div>');
            }
        });
        if (!isRecursion) {
            getDeployModelIds(dependConfigName, level, ids);
        }
    }

}

/**
 * Root level show
 *
 * @param configName
 * @param ids
 */
function rootLevelShow(configName, ids = []) {
    new http(DEPLOY_MODEL_IDS_ROUTE)
        .method('post')
        .data({
            'direction': ACTIVE_DIRECTION,
            'dependentModel': configName,
            'dependentModelIds': ids
        })
        .success(response => {
            let ids = response.ids || [];
            $('body').append('<div class="deploy-chain-block"></div>');
            $('.deploy-chain-block').html('<div class="chain-' + configName + '">' +
                '<span>' + configName + '</span>' +
                '<span class="depend-ids"> ' + ids.join(',') + '</span>' +
                '</div>');

            new ModalBuilder()
                .header('Deploy dependency')
                .body($('.deploy-chain-block'))
                .modal();

            getDeployModelIds(configName, 1, ids);
        })
        .send();
}

/**
 * Get deploy model ids
 *
 * @param configName
 * @param level
 * @param ids
 */
function getDeployModelIds(configName, level = 1, ids = []) {
    for (let key in DEPLOY_DEPENDS[configName]) {
        let dependConfigName = DEPLOY_DEPENDS[configName][key];

        if(ids.length !== 0) {
            new http(DEPLOY_MODEL_IDS_ROUTE)
                .method('post')
                .data({
                    'direction': ACTIVE_DIRECTION,
                    'model': dependConfigName,
                    'dependentModel': configName,
                    'dependentModelIds': ids
                })
                .success(response => {
                    oneLevelShow(configName, dependConfigName, level + 1, response);
                })
                .send();
        } else {
            oneLevelShow(configName, dependConfigName, level + 1, {'ids': []});
        }
    }
}
