//import {bundleVersionSelect} from "./handlers/bundleVersionSelect";
import {showArchive} from "./handlers/showArchive";
import {hideArchive} from "./handlers/hideArchive";
import {hideTasks} from "./handlers/hideTasks";
import {showTasks} from "./handlers/showTasks";
import {copyAdp} from "./handlers/copyAdp";
import {copyAssets} from "./handlers/copyAssets";
import {selectRow} from "./handlers/selectRow";
import {downloadAdp} from "./handlers/downloadAdp";

import './styles.scss';

$(document)
    /**
     * Show archive adp categories
     */
    .on('click', '.show-archive', showArchive)
    /**
     * Hide archive adp categories
     */
    .on('click', '.hide-archive', hideArchive)
    /**
     * Hide adp tasks by status and user
     */
    .on('click', '.hide-tasks', hideTasks)
    /**
     * Show adp tasks by status and user
     */
    .on('click', '.show-tasks', showTasks)
    /**
     * Copy adp ids
     */
    .on('click', '.copy-adp', copyAdp)
    /**
     * Copy assets ids
     */
    .on('click', '.copy-assets', copyAssets)
    /**
     * Handler for download assets
     */
    .on('click', '.download-adp', downloadAdp)
    /**
     * Show hide side box
     */
    .on('click', '.show-hide', function () {
        if(parseInt($('.side-box').css('right')) < 0) {
            $('.side-box').css('right', 0)
        } else {
            $('.side-box').css('right', '-100%')
        }
    })
    /**
     * Select row by full td area
     */
    .on('click', '.id-col', selectRow);


