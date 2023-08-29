document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const userDataDiv = document.getElementById('userData');
    const clearButton = document.getElementById('clearButton');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;

        if(username  === ''){
            return alert('Digite um nome de usuário antes de buscar.');
        }

        fetchUser(username);
    });

    function fetchUser(username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Usuário não encontrado!!!');
                }

                return response.json();
            })
            .then(userData => {
                displayUser(userData);
            })
            .catch(error => {
                userDataDiv.innerHTML = `<div class="error-message">Erro ao consultar usuário: ${error.message}</div>`;
            });
    }

    function displayUser(userData) {
        const name = userData.name !== null && userData.name !== undefined ? '('+userData.name+')' : '';

        userDataDiv.innerHTML = `
            <h3>${userData.login}  ${name}</h3>
            <p><a href="${userData.html_url}" target="_blank">
                <img src="${userData.avatar_url}" alt="${userData.login}" width="100">
            </a></p>
            <p>Seguidores: ${userData.followers || '0'} | Seguindo: ${userData.following || '0'}</p>
            <p>Criado em: ${formatDate(new Date(userData.created_at)) || 'N/A'}</p>
        `;

        clearUsername();
    }

    clearButton.addEventListener('click', function() {
        userDataDiv.innerHTML = '';
        clearUsername();
    });

    function clearUsername(){
        document.getElementById('username').value = '';
    }

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());

        return `${day}/${month}/${year}`;
    }
});
