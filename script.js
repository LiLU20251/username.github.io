// Загружаем реальные счетчики с сервера
async function loadDownloadCounts() {
    try {
        const response = await fetch('get_counts.php');
        const counts = await response.json();
        
        // Обновляем все счетчики на странице
        for (const [file, count] of Object.entries(counts)) {
            const element = document.getElementById(`count-${file}`);
            if (element) {
                element.textContent = `📥 ${count.toLocaleString()} скачиваний`;
            }
        }
    } catch (error) {
        console.log('Не удалось загрузить счетчики');
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Описания программ (упрощенные, потом дополним)
const descriptions = {
    'xeno-desc': `
        <img src="1.jpg" alt="Xeno Executor" class="modal-image">
        <h2>Xeno Executor</h2>
        <p><strong>Описание:</strong> Мощный инструмент для создания и запуска скриптов в Roblox.</p>
        <p><strong>Возможности:</strong> Запуск скриптов, библиотека функций, поддержка Lua</p>
        <a href="download.php?file=xeno" class="download-btn modal-download-btn">СКАЧАТЬ</a>
    `,
    'fortnite-desc': `
        <img src="2.jpg" alt="Fortnite Hack" class="modal-image">
        <h2>Fortnite Hack</h2>
        <p><strong>Описание:</strong> Комплекс читов для Fortnite.</p>
        <a href="download.php?file=fortnite" class="download-btn modal-download-btn">СКАЧАТЬ</a>
    `,
    // Добавь остальные описания по аналогии...
    'gtav-desc': `
        <img src="3.jpg" alt="GTA V Trainer" class="modal-image">
        <h2>GTA V Trainer</h2>
        <p><strong>Описание:</strong> Трейнер для Grand Theft Auto V.</p>
        <a href="download.php?file=gtav" class="download-btn modal-download-btn">СКАЧАТЬ</a>
    `,
    'minecraft-desc': `
        <img src="4.jpg" alt="Minecraft Mod" class="modal-image">
        <h2>Minecraft Mod</h2>
        <p><strong>Описание:</strong> Коллекция модов для Minecraft.</p>
        <a href="download.php?file=minecraft" class="download-btn modal-download-btn">СКАЧАТЬ</a>
    `
};

function showDescription(descId) {
    document.getElementById('modal-body').innerHTML = descriptions[descId] || '<p>Описание скоро будет добавлено...</p>';
    document.getElementById('description-modal').style.display = 'block';
}

function closeDescription() {
    document.getElementById('description-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('description-modal');
    if (event.target == modal) {
        closeDescription();
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    showSection('cheats');
    loadDownloadCounts();
});
