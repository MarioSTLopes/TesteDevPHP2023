@extends('layouts.app')

@section('content')
    <h2>Buscar Usuário do GitHub</h2>
    <form id="searchForm" method="get">
        @csrf
        <input type="text" id="username" name="username" placeholder="Digite o nome de usuário">
        <button type="submit" id="findButton" class="custom-button">Buscar</button>
        <button type="button" id="clearButton" class="custom-button">Limpar</button>
    </form>
    <div id="userData"></div>
@endsection

@section('scripts')
    <script src="{{ asset('js/github.js') }}"></script>
@endsection
