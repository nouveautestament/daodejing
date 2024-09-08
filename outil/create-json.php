
<?php

// Nom du fichier à lire
$filename = 'all-caracter-fr.txt';

// Vérifier si le fichier existe
if (!file_exists($filename)) {
    die("Le fichier $filename n'existe pas.");
}

// Initialiser un tableau associatif pour stocker les données
$data = [];

// Ouvrir le fichier en mode lecture
$handle = fopen($filename, "r");

if ($handle) {
    // Lire le fichier ligne par ligne
    while (($line = fgets($handle)) !== false) {
        // Supprimer les espaces blancs en début et fin de ligne
        $line = trim($line);

        // Ignorer les lignes vides
        if (empty($line)) {
            continue;
        }

        // Séparer la ligne en deux parties : le caractère chinois et la description
        list($chinese, $description) = explode(' ', $line, 2);

        // Ajouter les données au tableau associatif
        $data[$chinese] = $description;
    }

    // Fermer le fichier
    fclose($handle);
} else {
    die("Impossible d'ouvrir le fichier $filename.");
}

// Convertir le tableau en JSON
$json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

// Afficher le JSON (ou l'enregistrer dans un fichier)
echo $json;

// Si vous souhaitez enregistrer le JSON dans un fichier, décommentez les lignes ci-dessous
/*
$json_filename = 'output_optimise.json';
file_put_contents($json_filename, $json);
echo "Les données ont été enregistrées dans le fichier $json_filename.";
*/

?>