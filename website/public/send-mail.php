<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $response = ["success" => false];

    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data) {
        http_response_code(400);
        echo json_encode($response);
        exit;
    }

    // required fields
    $required = ['name', 'email', 'message', 'captcha', 'captchaA', 'captchaB'];
    foreach ($required as $field) {
        if (!isset($data[$field])) {
            http_response_code(400);
            echo json_encode($response);
            exit;
        }
    }

    // captcha check
    $expected = (int)$data['captchaA'] + (int)$data['captchaB'];
    if ((int)$data['captcha'] !== $expected) {
        http_response_code(200);
        echo json_encode([
            "success" => false,
            "error" => "captcha"
        ]);
        exit;
    }

    // sanitize
    $name = trim(strip_tags($data['name']));
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $message = trim(strip_tags($data['message']));

    if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message) {
        http_response_code(200);
        echo json_encode($response);
        exit;
    }

    // ⚠️ USA EMAIL DEL DOMINIO
    $to = "hello@dfact.agency";
    $subject = "Nuovo messaggio dal D.Fact website";

    $headers  = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode($response);
    }
