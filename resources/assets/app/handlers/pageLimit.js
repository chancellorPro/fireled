/**
 * Set page limit
 */
export default function (e) {
    e.preventDefault();
    let href = new URL(window.location.href);
    href.searchParams.set('page_limit', $(this).val());
    href.searchParams.delete('page');
    window.location.href = href.toString();
}
