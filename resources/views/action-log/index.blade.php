@extends('layouts.pages.config', [
	'title' => 'Action log',
	'data' => $data,
	'filter' => $filter,
])

@section('controls')
    <div class="pull-right col-sm-10">
        @php
            use Carbon\Carbon as Carbon;
            $field = 'today';
            $selected = request()->get('date_range') ?? '';
            $inputsStyle = 'style="visibility: hidden; height: 0"';
            $currentDay = Carbon::now()->startOfDay()->format('Y-m-d');
        @endphp
        <div class="col-sm-7">
            <div class="col-sm-4">
                <label class="pull-right">@lang('Create report'): </label>
            </div>
            <div class="col-sm-4">
                <input
                    type="text"
                    class="form-control filter datepicker filter-from"
                    name="{{$field}}[from]"
                    autocomplete="off"
                    placeholder="from"
                    value="{{ $dateFrom ?? $currentDay }}"
                >
            </div>
            <div class="col-sm-4">
                <input
                    type="text"
                    class="form-control filter datepicker filter-to"
                    name="{{$field}}[to]"
                    autocomplete="off"
                    placeholder="to"
                    value="{{ $dateTo?? $currentDay }}"
                >
            </div>
        </div>
        {{-- Income report --}}
        @include('common.buttons.save', [
            'route' => 'export',
            'id' => 'income',
            'route_params' => [
                'income' => \App\Models\ActionLog::INCOME,
                'has_parent' => false,
                'orderType' => __('Income report'),
            ],
            'name' => __('Income report'),
            'fa_class' => 'fa-save',
            'class' => 'reports',
            'dataset' => [
                'method' => 'GET',
            ],
        ])
        {{-- Outcome report --}}
        @include('common.buttons.save', [
            'route' => 'export',
            'id' => 'outcome',
            'route_params' => [
                'income'     => \App\Models\ActionLog::OUTOME,
                'has_parent' => true,
                'orderType' => __('Outcome report'),
            ],
            'name' => __('Outcome report'),
            'fa_class' => 'fa-save',
            'class' => 'reports',
            'dataset' => [
                'method' => 'GET',
            ],
        ])
        {{-- Stock state report --}}
        @include('common.buttons.save', [
            'route' => 'export',
            'id' => 'stock',
            'route_params' => [
                'income' => \App\Models\ActionLog::STOCK,
                'has_parent' => false,
                'orderType' => __('Stock state report'),
            ],
            'name' => __('Stock state report'),
            'fa_class' => 'fa-save',
            'class' => 'reports',
            'dataset' => [
                'method' => 'GET',
            ],
        ])
    </div>
    <div class="col-sm-1">
        @if(auth()->id() < 3)
            {{-- Create --}}
            @include('common.buttons.create', [
                'route' => 'action-log.create',
                'name' => __('Create action'),
                'class' => 'ajax-modal-action show-form',
                'dataset' => [
                    'header' => __('Create action'),
                ],
            ])
        @endif
    </div>
@endsection

@section('content')
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th>@lang('Income')</th>
                <th>@lang('Product')</th>
                <th>@lang('Date')</th>
                <th>@lang('Count')</th>
                <th>@lang('Partition')</th>
                <th>@lang('Customer')</th>
                <th>@lang('Description')</th>
                <th class="actions">@lang('Actions')</th>
            </tr>
            <tr>
                <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'income', 'filterCollection' => $transaction_type])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'product', 'filterCollection' => $products])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'date_range', 'field' => 'date'])</th>
                <th></th>
                <th></th>
                <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'customer', 'filterCollection' => $customers])</th>
                <th></th>
                <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
            </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @php
                $currentDate = Carbon::now()->setTimezone('Europe/Kiev')->format('Y-m-d');
            @endphp
            @foreach($data as $item)
                <tr>
                    <td style="background: #1abb9c;text-align: left;color: #fff;font-size: 17px;font-weight: bold;vertical-align: middle;{{ $item->income ? 'background:#ff897b' : 'background:#1abb9c' }}"
                        title="{{ $item->income ? __('Outcome') : __('Income') }}">
                        {{ $item->income ? __('Outcome') : __('Income') }}
                    </td>
                    <td>{{ $item->product ? $item->product->name : '' }}</td>
                    <td style="{{ $currentDate > Carbon::createFromFormat('Y-m-d', $item->date)->setTimezone('Europe/Kiev') ? 'background:silver' : '' }}">{{ $item->date }}</td>
                    <td>{{ $item->count }}</td>
                    <td>{{ $item->partition }}</td>
                    <td>{{ $item->customer ? $item->customer->name : '' }}</td>
                    <td>
                        {{ $item->description }}
                        {{ isset($item->product) ? (int)$item->product->parent_product > 0 ? 'Зависимый товар' : '' : '' }}
                    </td>
                    <td>
                        @if(auth()->id() < 3)
                            @include('common.buttons.edit', [
                                'route' => 'action-log.edit',
                                'route_params' => [
                                    'id' => $item->id,
                                ],
                                'class' => 'ajax-modal-action show-form',
                                'dataset' => [
                                    'header' => $item->name,
                                ],
                            ])
                            @include('common.buttons.delete', [
                                'route' => 'action-log.destroy',
                                'route_params' => [
                                    'id' => $item->id,
                                ],
                                'dataset' => [
                                    'header' => $item->name,
                                ],
                            ])
                        @endif
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>

@endsection

@push('scripts')
    <script src="{{ asset("js/filter-col.js") }}"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            init_filter_col("{{ route('action-log.index') }}");
        });

        $(document)
            .on('input', '[name="count"]', function (e) {
                if($(this).val().length > 0) {
                    $('[name="box_count"]').attr('disabled', true);
                } else {
                    $('[name="box_count"]').attr('disabled', false);
                }
            });
        $(document)
            .on('input', '[name="box_count"]', function (e) {
                if($(this).val().length > 0) {
                    $('[name="count"]').attr('disabled', true);
                } else {
                    $('[name="count"]').attr('disabled', false);
                }
            });

        $(document)
            .on('click', '.reports', function (e) {
                e.preventDefault();

                var dateFrom = $('[name="today[from]"]').val();
                var dateTo = $('[name="today[to]"]').val();
                var data = {from: dateFrom, to: dateTo};

                if (Object.keys(data).length) {
                    $.ajax({
                        url: $(this).attr('href'),
                        type: 'GET',
                        data: data,
                        error: response => {
                            if (!!response.responseJSON) {
                                this._error(response.responseJSON);
                            }
                        },
                        success: function (r) {
                            if (r.hasOwnProperty('success')) {
                                $('.modal-title').text(r.success);
                                $('.modal-header').css('background', '#a7ff83');
                            } else {
                                new ModalBuilder()
                                    .header('Предпросмотр отчета')
                                    .body(r)
                                    .modal();
                            }
                        },
                        complete: function (r) {
                        },
                    });
                }

                return false;
            });
        const modalsContainer = $('body');

        const MODAL_SIZES = {
            sm: 'modal-sm',
            md: 'modal-md',
            lg: 'modal-lg',
        };

        /**
         * Unique index of the modal
         *
         * @type {number}
         */
        let modalIndex = 0;

        /**
         * Counter of the modals at the page
         *
         * @type {number}
         */
        let modalCounter = 0;

        /**
         * Modal Builder
         */
        class ModalBuilder {

            constructor() {
                modalIndex++;
                this._id = 'modals-container-item-' + modalIndex;
            }

            size(size) {
                if (!!MODAL_SIZES[size]) {
                    this._size = MODAL_SIZES[size];
                }

                return this;
            }

            header(header) {
                this._header = header;

                return this;
            }

            body(body) {
                this._body = body;

                return this;
            }

            footer(footer) {
                this._footer = footer;

                return this;
            }

            dataset(dataset) {
                this._dataset = dataset;

                return this;
            }

            _getID() {
                return this._id;
            }

            _getSize() {
                return !!this._size ? this._size : MODAL_SIZES.md;
            }

            _getHeader() {
                if (!!this._header) {
                    return `
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                   <h4 class="modal-title">${this._header}</h4>
                </div>`;
                }
                return '';
            }

            _getFooter() {
                let result = null;
                if (!!this._footer) {
                    result = $(`<div class="modal-footer"></div>`)
                        .append($(`
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">
                        Cancel
                    </button>
                `))
                        .append(this._footer);
                }
                return result;
            }

            _getBody() {
                let result = null;
                if (!!this._body) {
                    result = $(`<div class="modal-body"></div>`)
                        .append(this._body);
                }
                return result;
            }

            /**
             * Set callback that will be call before build modal
             *
             * @param callback
             */
            beforeBuild(callback) {
                this._beforeBuildCallback = callback;
                return this;
            }

            _beforeBuild() {
                if (typeof this._beforeBuildCallback === "function") {
                    this._beforeBuildCallback();
                }
            }

            /**
             * Set callback that will be call after build modal
             *
             * @param callback
             */
            afterBuild(callback) {
                this._afterBuildCallback = callback;
                return this;
            }

            _afterBuild() {
                if (typeof this._afterBuildCallback === "function") {
                    this._afterBuildCallback();
                }
            }

            /**
             * Set callback that will be call after close modal
             *
             * @param callback
             */
            onClose(callback) {
                this._onCloseCallback = callback;
                return this;
            }

            _onClose() {
                if (typeof this._onCloseCallback === "function") {
                    this._onCloseCallback();
                }
            }

            modal(content) {
                /**
                 * Data attributes
                 * @type {Array}
                 */
                let dataset = [];
                if (!!this._dataset) {
                    for (var name in this._dataset) {
                        dataset.push(`data-${name}="${this._dataset[name]}"`);
                    }
                }

                let html = $(`
            <div id="${ this._getID() }" class="modal fade" role="dialog" aria-hidden="true" ${dataset.join(' ')}>
                <div class="modal-dialog modal-dialog-centered ${this._getSize()}">
                    <div class="modal-content"></div>
                </div>
            </div>`);

                if (!!content) {
                    this.body(content);
                }

                /**
                 * Call the beforeBuild callback
                 */
                this._beforeBuild();

                html.find('.modal-content')
                    .append(this._getHeader())
                    .append(this._getBody())
                    .append(this._getFooter());

                html.find('.select2').select2();

                html.find('.datepicker')
                    .datetimepicker({
                        format: 'yyyy-mm-dd',
                        autoclose: true,
                        minView: '2'
                    });

                modalsContainer.append(html);

                /**
                 * Call the afterBuild callback
                 */
                this._afterBuild();

                /**
                 * update counter of modals at the page
                 */
                modalCounter++;

                $('#' + this._getID())
                    .on('hidden.bs.modal', () => {
                        modalCounter--;
                        $('#' + this._getID())
                            .off('hidden.bs.modal')
                            .remove();
                        /**
                         * Call the onClose callback
                         */
                        this._onClose();
                    })
                    .modal();
            }
        }

    </script>
@endpush
