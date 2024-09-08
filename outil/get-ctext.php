<?php


function get($urlf, $grec, $postnb, $post)
{
if ($postnb == 1)
{
	$url = $urlf;
}

else 
{
	$url = $urlf.$grec;
}

$agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36';
$ch    = curl_init();


curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_VERBOSE, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, $agent);
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');





if ($postnb == 1){
$code = $post;
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $code);
}

$result = curl_exec($ch);


return $result;

}





//$arr_length = count($arraytr);

$filename = "all-caracter.txt";
$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);



$line_number = 0;

// Parcourir le tableau des lignes
while ($line_number < count($lines)) {
   
// Accéder à la ligne actuelle
$line = $lines[$line_number];



//for ($i=0; $i<$arr_length;$i++){
$line = str_replace(PHP_EOL, '', $line);


//TRADUCTION
//$getgoogle = get('https://www.webtran.fr/oldman/', $line, 1,'x1=Ares&x2='.$line.'&x3=zh-TW&x4=fr');

$getgoogle = get('https://ctext.org/dictionary.pl?if=en&char=', $line, 0,'');


//echo $getgoogle;


if (preg_match('/<tr><th>Unihan definition:<\/th><td>(.*?)<\/td><\/tr>/is', $getgoogle, $def))
{
	echo $line. ' '.$def[1]."\n";
}
else if (preg_match('/Please confirm that you are/is', $getgoogle, $def)) //Please confirm that you are 
{
	//$nofound = 1;
	//echo "INTROUVABLE" . '>> '. $line;
	$line_number--;
    //continue;
}
else {
	
	echo $line. ' '. "INTROUVABLE"."\n";
	
	
}


//usleep(10000);
	


$line_number++;
}	




?>