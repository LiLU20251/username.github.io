function showSection(sectionId) {
    // Скрываем все секции
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Показываем выбранную секцию
    document.getElementById(sectionId).classList.add('active');
    
    // Обновляем активные кнопки
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Описания программ
const descriptions = {
    'xeno-desc': `
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
    `,
    'fortnite-desc': `
        <h2>Fortnite Hack</h2>
        <p><strong>Описание:</strong> Комплекс читов для Fortnite включающий AIM, ESP и другие полезные функции для улучшения игрового опыта.</p>
        <p>Описание будет дополнено...</p>
    `,
    'gtav-desc': `
        <h2>GTA V Trainer</h2>
        <p><strong>Описание:</strong> Полнофункциональный трейнер для Grand Theft Auto V с множеством опций для изменения игрового процесса.</p>
        <p>Описание будет дополнено...</p>
    `,
    'minecraft-desc': `
        <h2>Minecraft Mod</h2>
        <p><strong>Описание:</strong> Коллекция модов для Minecraft добавляющая новые возможности и улучшающая игровой процесс.</p>
        <p>Описание будет дополнено...</p>
    `
};

function showDescription(descId) {
    document.getElementById('modal-body').innerHTML = descriptions[descId];
    document.getElementById('description-modal').style.display = 'block';
}

function closeDescription() {
    document.getElementById('description-modal').style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('description-modal');
    if (event.target == modal) {
        closeDescription();
    }
}

// По умолчанию показываем читы
document.addEventListener('DOMContentLoaded', function() {
    showSection('cheats');
});
