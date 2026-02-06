<?php
include "db.php";

header("Content-Type: text/csv");
header("Content-Disposition: attachment; filename=spending_data.csv");

$output = fopen("php://output", "w");
fputcsv($output, ["Date", "Barcode", "Amount"]);

$result = $conn->query("SELECT * FROM expenses");

while ($row = $result->fetch_assoc()) {
    fputcsv($output, [
        $row['created_at'],
        $row['barcode'],
        $row['amount']
    ]);
}

fclose($output);
?>
