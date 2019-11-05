import searchUserAssets      from "./listeners/searchUserAssets";
import submitUserPartForm    from "./listeners/submitUserPartForm";
import deleteNeighbor        from "./listeners/deleteNeighbor";
import searchNeighbor        from "./listeners/searchNeighbor";
import addNeighbor           from "./listeners/addNeighbor";
import loadPlacementAssets   from "./handlers/loadPlacementAssets";
import hidePlacementAssets   from "./handlers/hidePlacementAssets";
import changePlacement       from "./handlers/changePlacement";
import changeRandomNeighbors from "./handlers/changeRandomNeighbors";
import changeMovePlacement   from "./handlers/changeMovePlacement";
import selectRows            from "./handlers/selectRows";
import updateNeighbors       from "./handlers/updateNeighbors";
import changePageLimit       from "./handlers/changePageLimit";
import addComment            from "./handlers/addComment";
import addCollectible        from "./handlers/addCollectible";

import "./styles.scss";

/**
 * Search user assets listener
 */
searchUserAssets();

/**
 * Submit user part form listener
 */
submitUserPartForm();

/**
 * Delete Neighbor
 */
deleteNeighbor();

/**
 * Add Neighbor
 */
addNeighbor();

/**
 * Search Neighbors
 */
searchNeighbor();

$(document)

    /**
     * Load assets in placement
     */
    .on('click', '.load-assets', loadPlacementAssets)

    /**
     * Change placement in Add Assets block
     */
    .on('change', '#placement-for-asset', changePlacement)

    /**
     * Change mode for add neighbors
     */
    .on('change', '#is-random-neighbors', changeRandomNeighbors)

    /**
     * Hide assets in placement
     */
    .on('click', '.hide-assets', hidePlacementAssets)

    /**
     * Auto select rows
     */
    .on('change', '.select-rows', selectRows)

    /**
     * Synchronize move-placement-select selects
     */
    .on('change', '.move-placement-select', changeMovePlacement)

    /**
     * Delete neighbor request
     */
    .on('click', '.delete-neighbor-request, #add-neighbors', updateNeighbors)
    /**
     * Set page limit
     */
     .on('change', '.neighbor-page-limit', changePageLimit)

    /**
     * Add comment
     */
    .on('click', '#add-comment', addComment)

    /**
     * Add collectible
     */
    .on('click', '#add-collectible', addCollectible)
;
