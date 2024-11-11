<?php


$name     = trim($_POST['name']);
$lastname = trim($_POST['lastname']);
$phone    = trim($_POST['phone']);
$email    = trim($_POST['email']);
$message  = trim($_POST['message']);

if(empty($name) AND empty($lastname) AND empty($phone) AND empty($email) AND empty($message))
{
    exit;
}
else 
{
    $recipient = 'info@companyemail.com';
    $subject   = 'Message from the site';

    $mail_body =
        "Name:  "     . $name     ."\r\n" .
        "Lastname: "  . $lastname ."\r\n" .
        "Phone: "     . $phone    ."\r\n" .
        "Email: "     . $email    ."\r\n" .
        "Message:  "  . $message;


    $header = "From: " . $name . " <" . $recipient . ">\r\n";
    mail($recipient, $subject, $mail_body, $header);
        
    echo 'Send';
}