<form id="form" action="{{ route('save.phone') }}" method="post">
    @csrf
    <div class="row">
        <div class="col-sm-2">
            <label for="phone">Телефон: </label>
        </div>
        <div class="col-sm-6">
            <input id="phone" name="phone" class="form-control" placeholder="(XX) XXXX-XXXX">
        </div>
        <input type="submit" class="btn btn-primary">
    </div>
</form>
