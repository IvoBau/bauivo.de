<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $address = $_POST['address'];
    $postal_code = $_POST['postal_code'];
    $city = $_POST['city'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $request = $_POST['request'];

    // Compose the email message
    $to = "bau.tunjic@gmail.com"; // Enter your email address here
    $subject = "New Inquiry from Website";
    $message = "Name: $name $surname\n";
    $message .= "Address: $address, $postal_code $city\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n\n";
    $message .= "Request:\n$request";

    // Send email
    mail($to, $subject, $message);

    // Redirect user to a thank you page or display a thank you message
    header("Location: thank_you.php");
    exit;
}
?>

