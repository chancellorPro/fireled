import notifySuccess from "components/notify/notifySuccess";

/**
 * Base error handler
 *
 * @param response
 */
export default function (response) {
    /**
     * Show main error message
     */
    if (!!response.message) {
        notifySuccess(response.message);
    }
}
