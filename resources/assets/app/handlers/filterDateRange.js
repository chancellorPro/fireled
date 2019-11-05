import moment from 'moment';

export default function () {
    const dateFormat = 'YYYY-MM-DD';
    const dateRangeInputs = $('#date-range-inputs');
    const selectedOption = $('#date-range-select').find(':selected');
    const dateFrom = dateRangeInputs.find('.filter-from');
    const dateTo = dateRangeInputs.find('.filter-to');

    const selectedValue = selectedOption.val();

    if (selectedValue === 'custom') {
        dateRangeInputs.css({
            visibility: 'initial',
            height: 'auto'
        });
    } else {
        dateRangeInputs.css({
            visibility: 'hidden',
            height: 0
        });

        let dateFromValue = '';
        let dateToValue   = '';
        switch (selectedValue) {
            case 'today':
                dateFromValue = dateToValue = moment().format(dateFormat);
                break;
            case 'yesterday':
                dateFromValue = dateToValue = moment().subtract(1, 'day').format(dateFormat);
                break;
            case 'current-week':
                dateFromValue = moment().day(1).format(dateFormat);
                dateToValue   = moment().day(7).format(dateFormat);
                break;
            case 'previous-week':
                dateFromValue = moment().day(-6).format(dateFormat);
                dateToValue   = moment().day(0).format(dateFormat);
                break;
            case 'current-month':
                dateFromValue = moment().startOf('month').format(dateFormat);
                dateToValue   = moment().endOf('month').format(dateFormat);
                break;
            case 'previous-month':
                dateFromValue = moment().subtract(1, 'month').startOf('month').format(dateFormat);
                dateToValue   = moment().subtract(1, 'month').endOf('month').format(dateFormat);
                break;
            case 'last-seven':
                dateFromValue = moment().subtract(6, 'day').format(dateFormat);
                dateToValue   = moment().format(dateFormat);
                break;
            case 'last-thirty':
                dateFromValue = moment().subtract(29, 'day').format(dateFormat);
                dateToValue   = moment().format(dateFormat);
                break;
        }

        dateFrom.val(dateFromValue);
        dateTo.val(dateToValue);
    }
}
