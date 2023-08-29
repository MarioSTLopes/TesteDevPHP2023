# Teste 1

Quando a página é carregada, a função window.onload é acionada automaticamente, o que dispara a função conecta().

A função conecta() é responsável por fazer a chamada à API do ViaCEP e manipular a resposta.

A URL fornecida para a função fetch() é a URL da API do ViaCEP com um CEP específico. O método fetch() é usado para fazer uma solicitação assíncrona à API.

O método fetch() retorna uma Promise que resolve com a resposta da API. Após isso, o método .then() é usado para processar essa resposta. Primeiro, a resposta é transformada para o formato JSON. Dentro do segundo .then(), os dados do objeto JSON são extraídos. Se a propriedade erro existir nos dados, isso significa que o CEP não foi encontrado. Caso contrário, uma representação formatada das informações do endereço é apresentada.

As informações do endereço formatadas são inseridas no elemento HTML. Isso cria um bloco de texto com o CEP, logradouro, bairro, cidade e estado do endereço.

Para caso ocorra algum um erro durante o processo de consulta da API, a função .catch() é acionada e um erro é exibido na tela para informar ao usuário sobre o problema.

Ao final são exibidas as informações do endereço associado ao CEP fornecido. Junto com CSS para adicionar melhor aparência a página e torna-la responsiva.
