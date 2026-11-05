<?php
/**
 * Viermont Studio - Procesador de Formulario de Contacto Seguro
 * Ejecución nativa en cPanel / LiteSpeed (Ginernet)
 * Envío directo a viermontstudio@gmail.com sin intermediarios ni caídas de terceros
 */

// Cabeceras de seguridad y CORS
header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');

$isAjax = (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') 
          || (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false)
          || (isset($_SERVER['CONTENT_TYPE']) && strpos($_SERVER['CONTENT_TYPE'], 'application/json') !== false);

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    if ($isAjax) {
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    } else {
        header('Location: /#contacto');
    }
    exit;
}

// Obtener datos (JSON o POST tradicional)
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!is_array($data)) {
    $data = $_POST;
}

// 1. Protección Anti-Spam Honeypot (campo trampa para bots)
if (!empty($data['_honey'])) {
    if ($isAjax) {
        echo json_encode(['success' => true, 'message' => 'Mensaje recibido']);
    } else {
        header('Location: /?enviado=1#contacto');
    }
    exit;
}

// 1.1. Control de tasa de peticiones (Rate Limiting anti-flood por IP)
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$ipHash = md5($ip);
$rateFile = sys_get_temp_dir() . '/v_rate_' . $ipHash . '.txt';
$ahora = time();
$ultimoEnvio = file_exists($rateFile) ? (int)@file_get_contents($rateFile) : 0;
if ($ahora - $ultimoEnvio < 8) { // Mínimo 8 segundos entre envíos por la misma IP
    if ($isAjax) {
        http_response_code(429);
        echo json_encode(['success' => false, 'message' => 'Demasiadas solicitudes. Por favor espera unos segundos.']);
    } else {
        header('Location: /#contacto');
    }
    exit;
}
@file_put_contents($rateFile, (string)$ahora);

// 2. Extracción y saneamiento de campos contra Header Injection
$nombre = strip_tags(trim($data['nombre'] ?? $data['name'] ?? ''));
$nombre = str_replace(["\r", "\n", "\t"], ' ', $nombre);
$nombre = mb_substr($nombre, 0, 100, 'UTF-8');

$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);

$asunto = strip_tags(trim($data['_subject'] ?? $data['asunto'] ?? 'Nuevo mensaje de contacto'));
$asunto = str_replace(["\r", "\n", "\t"], ' ', $asunto);
$asunto = mb_substr($asunto, 0, 150, 'UTF-8');

$mensaje = strip_tags(trim($data['mensaje'] ?? $data['message'] ?? ''));
$mensaje = mb_substr($mensaje, 0, 5000, 'UTF-8');

// 2.1. Verificación en servidor de consentimiento expreso RGPD
$consentimiento = !empty($data['consentimiento_rgpd']) 
               || !empty($data['rgpd_consent']) 
               || !empty($_POST['consentimiento_rgpd'])
               || (!empty($data['consentimiento']) && $data['consentimiento'] === true);

// 3. Validación de campos obligatorios
if (empty($nombre) || !$email || empty($mensaje) || !$consentimiento) {
    if ($isAjax) {
        http_response_code(400);
        $errMsg = !$consentimiento 
            ? 'Debes aceptar la Política de Privacidad para continuar.' 
            : 'Por favor completa todos los campos requeridos con una dirección de correo válida.';
        echo json_encode([
            'success' => false, 
            'message' => $errMsg
        ]);
    } else {
        header('Location: /#contacto');
    }
    exit;
}

// 4. Preparación del correo para viermontstudio@gmail.com
$destinatario = 'viermontstudio@gmail.com';
$asuntoCodificado = "=?UTF-8?B?" . base64_encode("[Viermont Studio] " . $asunto) . "?=";

$cuerpoCorreo = "Has recibido un nuevo mensaje desde el formulario oficial de Viermont Studio:\n\n"
              . "====================================================\n"
              . "Nombre:   " . $nombre . "\n"
              . "Email:    " . $email . "\n"
              . "Asunto:   " . $asunto . "\n"
              . "Fecha:    " . date('Y-m-d H:i:s') . "\n"
              . "====================================================\n\n"
              . "Mensaje:\n" . $mensaje . "\n\n"
              . "====================================================\n"
              . "Consentimiento RGPD: Aceptado expresamente por el usuario.\n";

// Cabecera Reply-To segura conforme a RFC 2822
$safeReplyTo = function_exists('mb_encode_mimeheader') 
    ? mb_encode_mimeheader($nombre, 'UTF-8', 'B') . ' <' . $email . '>'
    : '<' . $email . '>';

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8; format=flowed',
    'Content-Transfer-Encoding: 8bit',
    'From: Viermont Studio <web@viermontstudio.com>',
    'Reply-To: ' . $safeReplyTo,
    'X-Mailer: PHP/' . phpversion()
];

// 5. Envío mediante servidor de correo local de cPanel
$enviado = @mail($destinatario, $asuntoCodificado, $cuerpoCorreo, implode("\r\n", $headers));

if ($enviado) {
    if ($isAjax) {
        echo json_encode(['success' => true, 'message' => 'Mensaje enviado con éxito']);
    } else {
        header('Location: /?enviado=1#contacto');
    }
} else {
    // Si la función mail() estuviera restringida temporalmente, devolver respuesta clara
    if ($isAjax) {
        http_response_code(500);
        echo json_encode([
            'success' => false, 
            'message' => 'El servidor no pudo entregar el correo directamente. Por favor escribe a viermontstudio@gmail.com'
        ]);
    } else {
        header('Location: /#contacto');
    }
}
