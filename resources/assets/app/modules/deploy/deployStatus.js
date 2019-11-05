import http from "components/http/RequestBuilder";
/**
 * Show Deploy Status
 */
export function deployStatus() {
    new http(DEPLOY_STATUS_ROUTE)
        .method('get')
        .success(response => {
            $('.deploy-status').html(response);
            let isActive = $('.deploy-status').find('.active-deploy').length;

            if(isActive) {
                $('.deploy-btn').addClass('loading');
            } else if($('.deploy-btn').hasClass('loading')) {
                window.location.reload(true);
            }

            setTimeout(function() {deployStatus();}, 3000);
        })
        .send();
}
