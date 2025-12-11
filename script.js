// Cargar datos desde el servidor Python local
let giftsData = [];
let lastUpdateTime = null;

async function loadFromServer() {
    try {
        const response = await fetch('/api/gifts');

        if (!response.ok) {
            throw new Error('Error al cargar datos');
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        if (data.length > 0) {
            giftsData = data;
            renderGifts(giftsData);
            lastUpdateTime = new Date();
            updateStatusIndicator(true, data.length);
            console.log('✅ Datos cargados:', data.length, 'personas');
        }
    } catch (error) {
        console.error('❌ Error:', error);
        updateStatusIndicator(false);
        showError();
    }
}

function showError() {
    document.getElementById('giftsGrid').innerHTML = `
        <div class="no-results">
            ❌ Error al cargar datos<br><br>
            <strong>Asegúrate de que el servidor Python esté corriendo:</strong><br><br>
            <code style="background: #333; padding: 10px; display: block; margin: 10px 0; border-radius: 5px; color: #fff;">
            python server.py
            </code>
            <br>
            <button onclick="loadFromServer()" style="
                background: var(--uch-sapphire);
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1rem;
                margin-top: 10px;
            ">🔄 Reintentar</button>
        </div>
    `;
}

function updateStatusIndicator(success, count = 0) {
    const indicator = document.getElementById('updateIndicator');
    if (!indicator) return;

    if (success) {
        indicator.textContent = `✅ ${count} personas - Actualizado: ${new Date().toLocaleTimeString()}`;
        indicator.style.color = '#28a745';
    } else {
        indicator.textContent = '❌ Error - Inicia el servidor Python';
        indicator.style.color = '#dc3545';
    }
}

function extractLink(text) {
    const linkMatch = text.match(/https?:\/\/[^\s]+/);
    if (linkMatch) {
        return {
            text: text.replace(linkMatch[0], '').replace(/Link[:\s;]*/gi, '').trim(),
            link: linkMatch[0]
        };
    }
    return { text: text, link: null };
}

function createGiftCard(person, index) {
    // Array de iconos navideños festivos
    const festiveIcons = ['🎄', '🎁', '⛄', '🎅', '⭐', '🔔', '🎀', '❄️', '🌟', '🦌'];
    // Seleccionar un icono consistente para cada persona basado en su nombre
    const iconIndex = person.name.length % festiveIcons.length;
    const festiveIcon = festiveIcons[iconIndex];

    let giftsHTML = '';
    person.gifts.forEach(gift => {
        const { text, link } = extractLink(gift);
        const isNoSuggestion = text === 'Sin sugerencias aún';

        giftsHTML += `
            <div class="gift-item ${isNoSuggestion ? 'no-suggestion' : ''}">
                <span class="gift-text">${text}</span>
                ${link ? `<br><a href="${link}" target="_blank" class="gift-link">Ver enlace</a>` : ''}
            </div>
        `;
    });

    return `
        <div class="gift-card" style="animation-delay: ${index * 0.05}s">
            <div class="card-header">
                <div class="avatar">${festiveIcon}</div>
                <h2 class="person-name">${person.name}</h2>
            </div>
            <div class="gift-items">
                ${giftsHTML}
            </div>
        </div>
    `;
}

function renderGifts(gifts) {
    const grid = document.getElementById('giftsGrid');
    const noResults = document.getElementById('noResults');

    if (gifts.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        noResults.style.display = 'none';
        grid.innerHTML = gifts.map((person, index) => createGiftCard(person, index)).join('');
    }
}

function setupSearch() {
    const searchBox = document.getElementById('searchBox');

    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (searchTerm === '') {
            renderGifts(giftsData);
        } else {
            const filtered = giftsData.filter(person =>
                person.name.toLowerCase().includes(searchTerm)
            );
            renderGifts(filtered);
        }
    });
}

function createSnowflakes() {
    const container = document.getElementById('snowflakes');
    const snowflakeChars = ['❄', '❅', '❆'];

    for (let i = 0; i < 20; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 10 + 10) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = (Math.random() * 1 + 0.5) + 'rem';
        container.appendChild(snowflake);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupSearch();
    createSnowflakes();

    // Cargar datos desde el servidor Python
    loadFromServer();

    // Auto-refresh cada 30 segundos
    setInterval(() => {
        loadFromServer();
    }, 30000);
});
