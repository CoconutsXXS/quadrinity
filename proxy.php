<?php
    // Récupération de la requête GET
    $url = $_GET['url'];

    // Initialisation de cURL
    $ch = curl_init($url);

    // Configuration de cURL pour retourner la réponse plutôt que de l'afficher
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Exécution de la requête
    $result = curl_exec($ch);

    // Fermeture de la connexion cURL
    curl_close($ch);

    // Envoi de la réponse au client
    header('Content-Type: application/json');
    echo $result;
?>