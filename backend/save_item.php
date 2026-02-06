<?php
include "db.php";

$barcode = $_POST['barcode'] ?? '';
$price   = $_POST['price'] ?? 0;

if ($barcode && $price > 0) {
    $stmt = $conn->prepare(
        "INSERT INTO expenses (barcode, amount) VALUES (?, ?)"
    );
    $stmt->bind_param("sd", $barcode, $price);
    $stmt->execute();
    echo "Item saved successfully";
} else {
    echo "Invalid data";
}
?>
