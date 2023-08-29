function conecta() {
    const url = 'https://viacep.com.br/ws/84010640/json/';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p><strong>CEP:</strong> ${data.cep}</p>
                <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong> ${data.localidade}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
            `;
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Erro ao consultar a API.';
        });
}

window.onload = conecta;