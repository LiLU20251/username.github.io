// Счётчики скачиваний (хранятся в localStorage)
let downloadCounts = JSON.parse(localStorage.getItem('downloadCounts')) || {
    'xeno': 2458,
    'fortnite': 1892,
    'gtav': 3127,
    'minecraft': 4562
};

function updateDownloadCounts() {
    document.querySelectorAll('.download-count').forEach(element => {
        const itemId = element.closest('.download-card').querySelector('.download-btn').getAttribute('onclick').match(/'([^']+)'/)[1];
        element.textContent = `📥 ${downloadCounts[itemId].toLocaleString()} скачиваний`;
    });
}

function trackDownload(itemId) {
    downloadCounts[itemId]++;
    localStorage.setItem('downloadCounts', JSON.stringify(downloadCounts));
    updateDownloadCounts();
    
    // Открываем ссылку в новом окне
    setTimeout(() => {
        const link = event.target.href;
        window.open(link, '_blank');
    }, 100);
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

// Описания программ с картинками
const descriptions = {
    'xeno-desc': `
        <img src="1.jpg" alt="Xeno Executor" class="modal-image">
        <h2>Xeno Executor</h2>
        <p><strong>Описание:</strong> Мощный инструмент для создания и запуска скриптов в Roblox. Поддерживает Lua скрипты и предоставляет расширенные возможности для модификации игрового процесса.</p>
        <p><strong>Возможности:</strong></p>
        <ul>
            <li>Запуск пользовательских скриптов</li>
            <li>Встроенная библиотека функций</li>
            <li>Поддержка Lua 5.1</li>
            <li>Безопасное исполнение</li>
        </ul>
        <p><strong>Системные требования:</strong> Windows 10/11, .NET Framework 4.8</p>
        <a href="http://194.79.46.110:1080/mrx/xeno.exe" class="download-btn modal-download-btn" onclick="trackDownload('xeno')">СКАЧАТЬ</a>
    `,
    'fortnite-desc': `
        <img src="2.jpg" alt="Fortnite Hack" class="modal-image">
        <h2>Fortnite Hack</h2>
        <p><strong>Описание:</strong> Комплекс читов для Fortnite включающий AIM, ESP и другие полезные функции для улучшения игрового опыта.</p>
        <p>Описание будет дополнено...</p>
        <a href="http://194.79.46.110:1080/mrx/fortnite.exe" class="download-btn modal-download-btn" onclick="trackDownload('fortnite')">СКАЧАТЬ</a>
    `,
    'gtav-desc': `
        <img src="3.jpg" alt="GTA V Trainer" class="modal-image">
        <h2>GTA V Trainer</h2>
        <p><strong>Описание:</strong> Полнофункциональный трейнер для Grand Theft Auto V с множеством опций для изменения игрового процесса.</p>
        <p>Описание будет дополнено...</p>
        <a href="http://194.79.46.110:1080/mrx/gtav.exe" class="download-btn modal-download-btn" onclick="trackDownload('gtav')">СКАЧАТЬ</a>
    `,
    'minecraft-desc': `
        <img src="4.jpg" alt="Minecraft Mod" class="modal-image">
        <h2>Minecraft Mod</h2>
        <p><strong>Описание:</strong> Коллекция модов для Minecraft добавляющая новые возможности и улучшающая игровой процесс.</p>
        <p>Описание будет дополнено...</p>
        <a href="http://194.79.46.110:1080/mrx/minecraft.exe" class="download-btn modal-download-btn" onclick="trackDownload('minecraft')">СКАЧАТЬ</a>
    `
};

function showDescription(descId) {
    document.getElementById('modal-body').innerHTML = descriptions[descId];
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

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    showSection('cheats');
    updateDownloadCounts();
});
