<?php
include "db.php";

$data = [];
$result = $conn->query("
    SELECT DATE(created_at) AS date, SUM(amount) AS total
    FROM expenses
    GROUP BY DATE(created_at)
    ORDER BY date
");

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
