const cepInput = document.getElementById('cepInput');
const fetchButton = document.getElementById('fetchButton');
const resultDiv = document.getElementById('result');
const cepTableBody = document.getElementById('cepTableBody');
const exportButton = document.getElementById('exportButton');
const clearButton = document.getElementById('clearButton');

fetchButton.addEventListener('click', function (event) {
    event.preventDefault();

    const cep = cepInput.value.replace(/\D/g, '');

    if (cep.length !== 8) {
        resultDiv.innerHTML = `<p class="error-message">Digite um CEP válido.</p>`;
        return;
    }

    resultDiv.innerHTML = ``;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao consultar o ViaCEP.');
            }

            return response.json();
        })
        .then(data => {
            if (data.erro) {
                resultDiv.innerHTML = '<p class="error-message">CEP não encontrado</p>';
            } else {
                cepInput.value = '';

                const row = cepTableBody.insertRow();
                row.innerHTML = `
                    <td>${data.cep}</td>
                    <td>${data.logradouro}</td>
                    <td>${data.bairro}</td>
                    <td>${data.localidade}/${data.uf}</td>
                `;
            }
        })
        .catch(error => {
            resultDiv.innerText = `Erro ao consultar o ViaCEP: ${error.message}`;
        });

});

exportButton.addEventListener('click', function () {
    const tableData = [];
    const rows = cepTableBody.querySelectorAll('tr');

    const headerRow = ['CEP', 'Logradouro', 'Bairro', 'Cidade/UF'];
    tableData.push(headerRow.join('; '));

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = Array.from(cells).map(cell => cell.textContent);
        tableData.push(rowData.join('; '));
    });

    const csvContent = "\uFEFF" + tableData.join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.href = url;
    link.setAttribute('download', 'ceps.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

clearButton.addEventListener('click', function () {
    while (cepTableBody.firstChild) {
        cepTableBody.removeChild(cepTableBody.firstChild);
    }

    cepInput.value = '';
});
