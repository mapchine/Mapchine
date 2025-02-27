<?php
// process_form.php

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Dirección de correo donde llegará el mensaje:
    $to = "mapchinelearning@gmail.com";

    // Asunto del correo
    $subject = "Nuevo mensaje desde la página web";

    // Contenido del correo
    $message = "Has recibido un nuevo mensaje desde el formulario de contacto.\n\n";
    $message .= "Nombre: " . $_POST['name'] . "\n";
    $message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Asunto: " . $_POST['subject'] . "\n";
    $message .= "Mensaje:\n" . $_POST['message'] . "\n";

    // Cabeceras (importante para que llegue correctamente)
    $headers = "From: " . $_POST['email'] . "\r\n"; // Quien envía
    $headers .= "Reply-To: " . $_POST['email'] . "\r\n"; // A quien responder

    // Intentar enviar
    if(mail($to, $subject, $message, $headers)) {
        // Aquí puedes redirigir a una página de "Gracias" o devolver un JSON en Ajax
        echo "Gracias, tu mensaje ha sido enviado.";
    } else {
        echo "Lo sentimos, ocurrió un error al enviar tu mensaje. Inténtalo más tarde.";
    }
} else {
    echo "Acceso no válido.";
}
