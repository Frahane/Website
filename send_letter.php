<?php
// Get form fields
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Email address where the message will be sent
$to = "Frahanebio@gmail.com";

// Email subject
$subject = "New message from contact form";

// Email body
$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Message: $message";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/".phpversion();

// Send email
if (mail($to, $subject, $body, $headers)) {
    // If the email was sent successfully, redirect to a thank-you page
    header("Location: thank_you.html");
    exit;
} else {
    // If there was an error sending the email, display an error message
    echo "There was an error sending your message. Please try again later.";
}
?>