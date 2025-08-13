document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    async function fetchGitHubData() {
        try {
            const response = await fetch('https://api.github.com/users/Rodrvm08');
            
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            
            const json = await response.json();
            
            nameElement.innerText = json.name || 'Nome não disponível';
            usernameElement.innerText = json.login || 'Usuário não disponível';
            avatarElement.src = json.avatar_url || 'https://via.placeholder.com/180x180';
            reposElement.innerText = json.public_repos || '0';
            followersElement.innerText = json.followers || '0';
            followingElement.innerText = json.following || '0';
            linkElement.href = json.html_url || '#';
            
        } catch (error) {
            console.error('Erro ao buscar dados do GitHub:', error);
            
            nameElement.innerText = 'Erro ao carregar';
            usernameElement.innerText = 'Tente novamente mais tarde';
            avatarElement.src = 'https://via.placeholder.com/180x180';
            reposElement.innerText = '0';
            followersElement.innerText = '0';
            followingElement.innerText = '0';
            linkElement.href = '#';
        }
    }

    fetchGitHubData();

    fetch('https://api.github.com/users/Rodrvm08')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.innerText = json.avatar_url;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url
        })


})