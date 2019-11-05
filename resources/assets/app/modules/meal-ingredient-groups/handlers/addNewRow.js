/**
 * Add next rows to the ingredient config grid
 *
 * @returns {boolean}
 */
export function addNewRow() {
    const add_counter = $('.add-counter').val();
    const tbody = $('#meal_ingredient_groups > tbody');
    const trLast = $('#meal_ingredient_groups_template').html();

    let lastID = tbody.find("tr").last().find('.group_id').text();
    let incrementId = (parseInt(lastID) + 1) || 1;

    for (let i = 0; i < add_counter; i++) {
        tbody.append(trLast.replace(/%meal-ingredient-group%/g, i + incrementId));
    }

    return false;
}
