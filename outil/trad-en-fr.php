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
//curl_setopt($ch, CURLOPT_USERAGENT, $agent);
curl_setopt($ch, CURLOPT_TIMEOUT, 60);
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');


$headers = [
    'Content-Type: application/x-www-form-urlencoded; charset=UTF-8',
    'Origin: https://www.webtran.fr',
    'Referer: https://www.webtran.fr/',
    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    'Accept: */*',
    'Accept-Language: fr,fr-FR;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,zh;q=0.5',
    'Sec-CH-UA: "Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
    'Sec-CH-UA-Mobile: ?0',
    'Sec-CH-UA-Platform: "Windows"',
    'Sec-Fetch-Dest: empty',
    'Sec-Fetch-Mode: cors',
    'Sec-Fetch-Site: same-origin',
    'X-Requested-With: XMLHttpRequest'
];

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);




if ($postnb == 1){
$code = $post;
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $code);
}

$result = curl_exec($ch);


return $result;

}





//$arr_length = count($arraytr);

$filename = "all-caracter-en.txt";
$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);



$line_number = 0;

// Parcourir le tableau des lignes
while ($line_number < count($lines)) {
   
// Accéder à la ligne actuelle
$line = $lines[$line_number];



//for ($i=0; $i<$arr_length;$i++){
$line = str_replace(PHP_EOL, '', $line);

$space_position	= strpos($line, ' ');
$first_part		= substr($line, 0, $space_position);
$second_part	= substr($line, $space_position + 1);



//TRADUCTION
$getgoogle = get('https://www.webtran.fr/oldman/', $line, 1,'x1=Ares&x2='.$second_part.'&x3=en&x4=fr');

//$getgoogle = get('https://ctext.org/dictionary.pl?if=en&char=', $line, 0,'');






usleep(100000);

if (preg_match('/Overload. No results./is', $getgoogle, $def)) //Please confirm that you are 
{
	//$nofound = 1;
	//echo "INTROUVABLE" . '>> '. $line;
	$line_number--;
    //continue;
}
else {
	
	echo $first_part . ' '. $getgoogle . "\n";
	
	
}

//usleep(10000);
	


$line_number++;
}	




?>