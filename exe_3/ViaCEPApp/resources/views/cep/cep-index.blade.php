@extends('layouts.app')

@section('content')
    <header>
        <div>
            <h1 class="borders">Consultar CEP</h1>
        </div>
    </header>

    <div class="container">
        <div class="input-container">
            <input type="text" id="cepInput" placeholder="Digite um CEP">
            <button id="fetchButton">Buscar</button>
        </div>
    </div>

    <div id="result">

    </div>

    <div class="borders">
        <h2>Resultados da Pesquisa</h2>
        <table aria-label="Tabela de CEPs">
            <thead>
                <tr>
                    <th>CEP</th>
                    <th>Logradouro</th>
                    <th>Bairro</th>
                    <th>Cidade/UF</th>
                </tr>
            </thead>
            <tbody id="cepTableBody">
            </tbody>
        </table>
    </div>

    <div class="buttons-container">
        <button id="exportButton">Exportar para CSV</button>
        <button id="clearButton">Limpar Tabela</button>
    </div>
@endsection

@section('scripts')
    <script src="{{ asset('js/cep.js') }}"></script>
@endsection
