<table class="table chain-table">

@foreach($chain as $name => $step)
        <tr>
            @if(is_array($step))
                @php
                    $icon = '';
                    $nameParts = explode('_', $name);
                    $stepType = $nameParts[0];
                    $href = '#';
                    $name = $nameParts[1];
                    switch ($nameParts[0]) {
                        case 'asset':
                            $icon = 'fa-file';
                            $href = route('assets.index', ['id' => $name]);
                            break;
                        case 'award':
                            $icon = 'fa-trophy';
                            $href = route('award.index', ['id' => $name]);
                            break;
                        case 'randomAward':
                            $icon = 'fa-cube';
                            $href = route('random-award.index', ['id' => $name]);
                            break;
                    }
                @endphp

                <td>
                    @if (!$loop->first || !empty($nesting))
                        <i class="fa fa-long-arrow-left"></i>
                    @endif
                    <a target="_blank" href="{{ $href }}" title="{{ ucfirst($stepType) }} # {{ $name }}">
                        <i class="fa {{ $icon }}"> {{ str_replace('_', ' ',$name)}}</i>
                    </a>
                </td>
            @endif
            <td>
                @if(is_array($step))
                    @include('common.award-asset-chain', ['chain' => $step, 'nesting' => true])
                @else
                    @if (!$loop->first || !empty($nesting))
                        <i class="fa fa-long-arrow-left"></i>
                    @endif
                    <i title="Config {{$step}}" class="fa fa-list"></i> {{$step}}
                @endif
            </td>
        </tr>
@endforeach
</table>