# Teste 3

Para inciar e acessar o projeto, é necessário o uso do Docker, dentro da pasta pricipal (exe_3) e executar:

- docker-compose build

- docker-compose up -d

- acessar no seu navegador: http://localhost:8080

Etapa 1: Acesso à Página Inicial

Quando você acessar a página inicial da aplicação em seu navegador (http://localhost:8080), ela exibirá um formulário onde você pode inserir o CEP que deseja consultar e a tabela que os resultados ficarão armazenados.

Resultado: Você verá um campo de entrada de texto, um botão "Buscar", um botão "Limpar", e a tabela de resultados que conforme buscas são feitas a tabela é preenchida.

Etapa 2: Consulta de CEP

Após inserir o CEP no campo de busca e clicar no botão "Buscar", a aplicação irá adicionar os dados na tabela de resultados, onde você poderá ver as informações do CEP que foi consultado.
O botão buscar usa o JavaScript para consumir a API do ViaCEP usando o método fetch. Ele envia uma solicitação à API com o número do CEP, recebe os dados do usuário em formato JSON e exibe os dados na tabela.

Resultado Esperado: Você verá uma página com as informações do CEP, como logradouro, bairro, e cidade/UF. Podendo consultar mais CEP's para adicionar a tabela, limpar os dados dela ou exportar como CSV.

Etapa 4: Estilização com CSS

As páginas são estilizadas usando CSS para criar um layout responsivo. Cores preto e vermelho são predominantes, e os elementos como campos de entrada, botões e áreas de resultados são formatados de forma adequada.

Resultado Esperado: As páginas terão um visual com um esquema de cores preto e vermelho, além de uma disposição responsiva.

Etapa 5: Dockerização do Ambiente

O projeto é dockerizado usando os arquivos Dockerfile, docker-compose.yml e entrypoint.sh. O Dockerfile define as instruções para construir a imagem do contêiner, instalando o PHP e suas extensões e depêndencias, Composer e configurando o Apache. O arquivo docker-compose.yml define o serviço, especifica a construção da imagem e define as configurações do contêiner. O entrypoint.sh faz as intalações de um projeto laravel caso não exista a pasta do mesmo, ou somente instala as depências via composer e ajusta a configuração do apache para a URL de acesso apontar para a pasta do projeto.

Resultado Esperado: Você pode construir e executar o ambiente Docker usando os comandos docker-compose build e docker-compose up, respectivamente, criando um ambiente isolado para a aplicação Laravel.
