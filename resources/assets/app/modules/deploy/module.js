import {changeTab} from "./handlers/changeTab";
import {showDependency} from "./handlers/showDependency";
import {showDependencyPopup} from "./handlers/showDependencyPopup";
import fastSavePage from "handlers/fastSavePage";
import {deployStatus} from "./deployStatus";
import './styles.scss';

$(document)
    /**
     * Change url on tab change
     */
    .on('click', '.deploy-tabs .nav-link', changeTab)
    /**
     * Save all page
     */
    .on('click', '.fast-save-page-custom', fastSavePage)
    /**
     * Show dependency
     */
    .on('click', '.config-checkbox', showDependency)
    /**
     * Show dependency popup
     */
    .on('click', '.show-dependency', showDependencyPopup)

    /**
     * Check/uncheck award dependencies
     */
    .on('change', '.award-dependency [type=checkbox]', function () {
        $('.award-dependency [type=checkbox]').prop('checked', this.checked);
    })

    .ready(function(){
        deployStatus();
    });

