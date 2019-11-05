@if (!empty($user))
    [{{ $user->id }}]
    <a href="{{route('users.edit', [
        'id' => $user->id,
        'env' => environment(),
    ])}}"
       class="link"
       target="_blank"
    >
        {{ $user->full_name }}
    </a>
@endif
