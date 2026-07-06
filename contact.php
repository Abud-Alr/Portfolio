<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Alleen POST-verzoeken toegestaan.']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Vul alle verplichte velden in.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Voer een geldig e-mailadres in.']);
    exit;
}

$to = 'abdulmalekalrajawy30@gmail.com';
$mailSubject = 'Portfolio contact: ' . $subject;
$body = "Naam: $name\nE-mail: $email\nOnderwerp: $subject\n\nBericht:\n$message";
$headers = "From: $name <$email>\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

$sent = mail($to, $mailSubject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'E-mail kon niet worden verzonden.']);
}
