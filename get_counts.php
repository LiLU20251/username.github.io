<?php
header('Content-Type: application/json');
$countFile = 'download_counts.json';
$counts = file_exists($countFile) ? json_decode(file_get_contents($countFile), true) : [];
echo json_encode($counts);
?>
