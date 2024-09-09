
// DAO	DE	JING
// TAO	TO	KING
// 道	德	經
// DÀO	DÉ	JĪNG




intro =
`<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>DAO DE JING</title>
		<style>
			html {
				margin:0;
				padding:0;
			}
			
			body {
				margin:0;
				padding:0;
				font-family:sans-serif;
			}
			
			p {
				margin:2px;
			}
			
			a {
				color:black;
				text-decoration:none;
			}

			a:hover {
				color:#ff006f;
			}
			
			table {
				border:1px solid #000000;
			}

			table td {
				border:1px solid #000000;
				padding-right:5px;
			}
			
			td:nth-child(1), td:nth-child(2)  {
				padding-left: 5px;
			}
			
			.td3 {
				padding-left:7px;
			}

			#banniere {
				margin:0px;
				padding:0px;
				background-color:black;
			}
		
			
			.int {
				display:inline-block;
				margin:7px
			}


			.zh {
				font-size:40px;
				display:block;
				cursor:pointer;
			}
			
			.zh:hover {
				font-size: 40px;
				display:block;
				cursor: pointer;
				color: #ff006f;
			}
			
			.pinyin {
				color:#02b31c;
			}
			
			.fr {
				font-size:17px;
				display:block;
			}

			.info {
				font-size:13px;
				color:#888888;
				display:block;
			}

			.subinfo {
				font-size:10px;
				color:#888888;
				display:block;
			}
			
			.subinfo1 {
				font-size:12px;
				color:#888888;
				display:block;
			}
			
			.subinfo2 {
				font-size:12px;
				color:#888888;
				display:block;
			}
			
			.lemme {
				font-size:14px;
				display:block;
			}
			
			.lemme a {
				color:#0054ff;
			}
			
			.pa {
				font-size:20px;
			}
			
			.trs {
				line-height:1.5em;
				font-size:16px;
				outline:none;
				box-shadow:3px 3px 2px 0px #999999b3;
			    border:none;
				outline:none;
				box-sizing:border-box;
				padding:10px;
				width:98%;
				height:180px;
				display:block;
			}
			
			#show {
				background-color:white;
				position:fixed;
				width:100%;
				top:0;
			}
			
		</style>
		
		<script>
		
		alltrs = ""
		
		function addtrs(id)
		{
			linetrs = document.getElementById(id).value;
			alltrs += linetrs+'\\n';
		}
		
		function lire()
		{
			document.getElementById('show').style.display = "initial";
			document.getElementById('textarea_trs').value = alltrs;
		}
		
		
		function save()
		{
			alltrs = document.getElementById('textarea_trs').value;
			document.getElementById('show').style.display = "none";
		}
		
		</script>
		
	</head>

<body>


<div style="display:none;" id="show">
<div onclick="save();" style="padding:1em;cursor:pointer;user-select:none;">[SAUVE_ECHAP]</div>
<textarea class="trs" id="textarea_trs"></textarea>
</div>


<div id="banniere" style="text-align:center;">
	<span style="color:#fff256;text-align: center;font-size:3.7em;font-weight:bold;">道	德	經</span><br>
	<span style="color:#fff256;text-align: center;font-size:2em;font-weight:bold;">DÀO	DÉ	JĪNG</span><br>
	<br>
</div><br>


`;




end = `
</tbody></table>
<br>
</body>

<script>


show	= 0;
document.onkeydown = checkKey;

function checkKey(e) 
{
	e = e || window.event;
	
	if (e.keyCode == '27') 
	{
		alltrs = document.getElementById('textarea_trs').value;
		document.getElementById('show').style.display = "none";
	}
}


</script>

</html>`



chbook = 
`<div style="font-family:monospace;text-align:center;font-size:1.7em;">
<a href="1.html">CH01</a>&ensp;
<a href="2.html">CH02</a>&ensp;
<a href="3.html">CH03</a>&ensp;
<a href="4.html">CH04</a>&ensp;
<a href="5.html">CH05</a>&ensp;
<a href="6.html">CH06</a>&ensp;
<a href="7.html">CH07</a>&ensp;
<a href="8.html">CH08</a>&ensp;
<a href="9.html">CH09</a>&ensp;<br>
<a href="10.html">CH10</a>&ensp;
<a href="11.html">CH11</a>&ensp;
<a href="12.html">CH12</a>&ensp;
<a href="13.html">CH13</a>&ensp;
<a href="14.html">CH14</a>&ensp;
<a href="15.html">CH15</a>&ensp;
<a href="16.html">CH16</a>&ensp;
<a href="17.html">CH17</a>&ensp;
<a href="18.html">CH18</a>&ensp;<br>
<a href="19.html">CH19</a>&ensp;
<a href="20.html">CH20</a>&ensp;
<a href="21.html">CH21</a>&ensp;
<a href="22.html">CH22</a>&ensp;
<a href="23.html">CH23</a>&ensp;
<a href="24.html">CH24</a>&ensp;
<a href="25.html">CH25</a>&ensp;
<a href="26.html">CH26</a>&ensp;
<a href="27.html">CH27</a>&ensp;<br>
<a href="28.html">CH28</a>&ensp;
<a href="29.html">CH29</a>&ensp;
<a href="30.html">CH30</a>&ensp;
<a href="31.html">CH31</a>&ensp;
<a href="32.html">CH32</a>&ensp;
<a href="33.html">CH33</a>&ensp;
<a href="34.html">CH34</a>&ensp;
<a href="35.html">CH35</a>&ensp;
<a href="36.html">CH36</a>&ensp;<br>
<a href="37.html">CH37</a>&ensp;
<a href="38.html">CH38</a>&ensp;
<a href="39.html">CH39</a>&ensp;
<a href="40.html">CH40</a>&ensp;
<a href="41.html">CH41</a>&ensp;
<a href="42.html">CH42</a>&ensp;
<a href="43.html">CH43</a>&ensp;
<a href="44.html">CH44</a>&ensp;
<a href="45.html">CH45</a>&ensp;<br>
<a href="46.html">CH46</a>&ensp;
<a href="47.html">CH47</a>&ensp;
<a href="48.html">CH48</a>&ensp;
<a href="49.html">CH49</a>&ensp;
<a href="50.html">CH50</a>&ensp;
<a href="51.html">CH51</a>&ensp;
<a href="52.html">CH52</a>&ensp;
<a href="53.html">CH53</a>&ensp;
<a href="54.html">CH54</a>&ensp;<br>
<a href="55.html">CH55</a>&ensp;
<a href="56.html">CH56</a>&ensp;
<a href="57.html">CH57</a>&ensp;
<a href="58.html">CH58</a>&ensp;
<a href="59.html">CH59</a>&ensp;
<a href="60.html">CH60</a>&ensp;
<a href="61.html">CH61</a>&ensp;
<a href="62.html">CH62</a>&ensp;
<a href="63.html">CH63</a>&ensp;<br>
<a href="64.html">CH64</a>&ensp;
<a href="65.html">CH65</a>&ensp;
<a href="66.html">CH66</a>&ensp;
<a href="67.html">CH67</a>&ensp;
<a href="68.html">CH68</a>&ensp;
<a href="69.html">CH69</a>&ensp;
<a href="70.html">CH70</a>&ensp;
<a href="71.html">CH71</a>&ensp;
<a href="72.html">CH72</a>&ensp;<br>
<a href="73.html">CH73</a>&ensp;
<a href="74.html">CH74</a>&ensp;
<a href="75.html">CH75</a>&ensp;
<a href="76.html">CH76</a>&ensp;
<a href="77.html">CH77</a>&ensp;
<a href="78.html">CH78</a>&ensp;
<a href="79.html">CH79</a>&ensp;
<a href="80.html">CH80</a>&ensp;
<a href="81.html">CH81</a>&ensp;
</div>


`









//TONE TO ACCENT
function tone_to_accent(e){
	
t={a:["ā","á","ǎ","à"],o:["ō","ó","ǒ","ò"],e:["ē","é","ě","è"],i:["ī","í","ǐ","ì"],u:["ū","ú","ǔ","ù"]},
n=e.slice(-1)-1,
i="h"===e[1]?1:0,
a=1+i;
return e.length-1>2&&("i"===e[a]||"u"===e[a])&&t.hasOwnProperty(e[a+1])
?e.slice(0,a+1)+e.slice(a+1,-1).replace(/[aoeiu]/,e=>t[e][n])
:e.replace(/[aoeiu]/,e=>t[e][n]).slice(0,-1)

}



//LOAD FILES
fs = require('fs');


db_trad		= JSON.parse(fs.readFileSync('../db_trad.json'));
db_pinyin	= JSON.parse(fs.readFileSync('../db_pinyin.json'));


//console.log(chinois['𥡴']);



trad1	=  fs.readFileSync('../traduction-olivier-nyssen.html',						'utf8').split('\n')
trad2	=  fs.readFileSync('../traduction-stanislas-julien-all.html',				'utf8').split('\n')
trad3	=  fs.readFileSync('../traduction-conradin-von-lauer.html',					'utf8').split('\n')
trad4	=  fs.readFileSync('../traduction-ma-kou.html',								'utf8').split('\n')
trad5	=  fs.readFileSync('../traduction-albert-de-pouvourville.html',				'utf8').split('\n')
trad6	=  fs.readFileSync('../traduction-leon-wieger.html',						'utf8').split('\n')
trad7	=  fs.readFileSync('../traduction-stephen-mitchell-traduction.html',		'utf8').split('\n')
trad8	=  fs.readFileSync('../traduction-jan-duyvendak.html',						'utf8').split('\n')

dao_ch =  fs.readFileSync('../DAO_CH1.txt',											'utf8').split('\n')






for (line = 0 ; line != dao_ch.length ; line++)
{
	
	//INIT VAR
	chap		= line+1;
	chap_00 = chap.toString().padStart(2, '0')
	data		= '';
	ch_pi		= '';
	dao_inter	= '';
	textefr		= [];
	
	
	//ADD CHAP SELECT
	intros	=	intro;
	intros	+=	chbook+'<br><br>'
	intros	=	intros.replace('>'+'CH'+chap_00+'<','><b><font color="red">CH'+chap_00+'</font></b><')

	link_ctext = 'https://ctext.org/dictionary.pl?if=en&id='+(11591+chap)

	//INFO
	data	+= '<p><a target="_blank" href="https://www.daodejing.org/'+chap+'.html"> https://www.daodejing.org/'+chap+'.html</a></p>\n';
	data	+= '<p><a target="_blank" href="https://ctext.org/dictionary.pl?if=en&id='+(11591+chap)+'">https://ctext.org/dictionary.pl?if=en&id='+(11591+chap)+'</a></p>\n';
	data	+= '<p><a target="_blank" href="https://www.tao-te-king.org/'+chap+'.htm"> https://www.tao-te-king.org/'+chap+'.htm</a></p>\n';
	data	+= '<p><a target="_blank" href="http://www.daoisopen.com/downloads/CC'+chap+'.pdf">http://www.daoisopen.com/downloads/CC'+chap+'.pdf</a></p>\n';
	data	+= '<p><a target="_blank" href="http://www.daoisopen.com/downloads/About%20the%20Charts.pdf">http://www.daoisopen.com/downloads/About the Charts.pdf</a></p>\n';
	data	+= '<p><a target="_blank" href="https://laozirecited.com/#'+chap+'">https://laozirecited.com/#'+chap+'</a></p>\n	';

	
	data +=`
<br><br>
<table><tbody>
`;


	caracteres = dao_ch[line].match(/[\s\S]/gu)
	
	for (caractere = 0 ; caractere != caracteres.length ; caractere++)
	{
		
		/*
		//道 dao4 dào
		if (!caracteres[caractere].match(/[、。！，：；？123]/))
		{
			console.log(
				caracteres[caractere]+ " " +
				db_pinyin[caracteres[caractere]]+ " " +
				tone_to_accent(db_pinyin[caracteres[caractere]])
			)
			
			
		}
		
		
		*/
		//CHECK IF EXIST IN DB
		/*
		if (!caracteres[caractere].match(/[、。！，：；？123]/) && (!db_pinyin[caracteres[caractere]] || db_pinyin[caracteres[caractere]] == "undefined"))
		{
			//console.log("LINE CHAP : "+(parseInt(line)+1))
			//console.log("LINE CARA : "+caracteres[caractere])
			//console.log(dao_ch[line])
			//console.log(caracteres)
			//+ " " + traduction) 
			console.log(caracteres[caractere])
		}
		*/
		
		traduction = db_trad[caracteres[caractere]]
		//console.log(caracteres[caractere] + " " + traduction) 
		
		//traduction.length < 2 || !traduction.match(/[,;]/)
		if (caracteres[caractere].match(/[、。！，：；？123]/))
		{
			/*
			、 、
			。 。
			！ ！
			， ，
			： ：
			； ；
			？ ？
			1 1
			2 2
			3 3
			*/
			//console.log(caracteres[caractere] + " " + traduction) 
			
			
			
			traduction_a = traduction
			
					dao_inter +=``+
					`<div class="int">`+
					`<span class="zh">`+caracteres[caractere]+`</span>`+
					`<span class="pinyin">&emsp;</span>`+
					`<span class="fr">`+traduction_a+`</span>`+
					`<span class="subinfo1">&emsp;</span>`+
					`<span class="subinfo2">&emsp;</span>`+
					`<span class="lemme">&emsp;</span>`+
					`</div>`;
					
					ch_pi = ch_pi.slice(0, -1);
					ch_pi += caracteres[caractere]+ ' ';
			
			
		}
		else
		{
			if (traduction.match(/^(.*?)[,;]/))
			{
				traduction_a = traduction.match(/^(.*?)[,;]/)[1];
				//console.log(caracteres[caractere] + " " + traduction_a) 
				
				traduction_b = traduction.replace(/^(.*?)[,;]/, '');
				
				if (traduction_b.match(/;/))
				{
					traduction_c = traduction_b.split(';');
				
					subinfo1 = traduction_c[0]
					traduction_c.shift()
					subinfo2 = traduction_c.join(";")
				}
				
				else
				{
					subinfo1 = traduction_b
					subinfo2 = "-"
					
				}
			}
			else {
				
				traduction_a = traduction
				subinfo1 = "-"
				subinfo2 = "-"
				
			}
			
			
			console.log(caracteres[caractere])
			//console.log(caracteres[caractere] +' >> '+ traduction+ ' || '+ traduction_a + ' || ' + traduction_b )
			//console.log(subinfo1 + ' || ' + subinfo2 )
			
			//console.log(caracteres[caractere] +' >> '+ traduction+ ' || '+ traduction_a + ' || ' + traduction_b )
			//console.log(traduction_c.length)
			
			
			pinyin_tone		= db_pinyin[caracteres[caractere]]
			pinyin_accent	= tone_to_accent(pinyin_tone)
			
			
					dao_inter +=``+
					`<div class="int">`+
					`<span onclick="new Audio('../son/`+pinyin_tone+`.mp3').play()" class="zh">`+caracteres[caractere]+`</span>`+
					`<span class="pinyin">`+pinyin_accent+`</span>`+
					`<span class="fr">`+traduction_a+`</span>`+
					`<span class="subinfo1">`+subinfo1+`</span>`+
					`<span class="subinfo2">`+subinfo2+`</span>`+
					`<span class="lemme">`+
					`<a target="_blank" href="https://www.purpleculture.net/dictionary-details/?word=`+caracteres[caractere]+`">#P</a> `+
					`<a target="_blank" href="https://fr.wiktionary.org/wiki/`+caracteres[caractere]+`">#W</a> `+
					`<a target="_blank" href="https://ctext.org/dictionary.pl?if=en&char=`+caracteres[caractere]+`">#C</a> `+
					`<a target="_blank" href="https://www.zdic.net/hans/`+caracteres[caractere]+`">#Z</a>`+
					`</span>`+
					`</div>`;
			
			
					ch_pi += caracteres[caractere]+'<span class="pa">'+pinyin_accent+'</span> ';

			
			
		}
		
		//console.log(caracteres[caractere] + " " + traduction_a) 
		
		

		
		
		textefr.push(traduction_a);
		
		
		
	}
	
			data += 
			'<tr><td nowrap>DAODEJING</td>'+
			'<td>2024</td>'+
			'<td style="font-size:35px;padding-left:7px;font-family:simsun;">'+ch_pi+'</td></tr>'
			
	
	
			data += `\n<tr><td class="td1"><a href="`+link_ctext+`" target="_blank">DAODEJING</a></td><td class="td2">2024</td><td>`+dao_inter+`</td></tr>`;
			
			
			data += 
			'\n<tr>'+
			'<td class="td1" nowrap><button onclick="addtrs(\''+chap+'\');this.style.background=\'#00eb00\'">DAODEJING</button> <span style="padding-left:1em;cursor:pointer;user-select:none;" onclick="lire()">LIRE</span></td>'+
			'<td class="td2">2024</td>'+
			'<td><textarea id="'+chap+'" class="trs" style="">'+textefr.join(' ').replace(/;/g," ?")+'</textarea></td></tr>'
			
			data += 
			'\n<tr><td nowrap><a href="https://terebess.hu/english/tao/mitchell.html#Kap'+chap.toString().padStart(2, '0')+'" target="_blank">STEPHEN MITCHELL TRADFR</a></td>'+
			'<td>1988</td>'+
			'<td class="td3">'+trad7[line]+'</td></tr>'
	
			data += 
			'\n<tr><td nowrap><a href="https://fr.wikisource.org/wiki/Tao_Te_King_(Stanislas_Julien)/Chapitre_'+
			chap.toString().padStart(2, '0')+'" target="_blank">JULIEN STANISLAS</a></td>'+
			'<td>1842</td>'+
			'<td class="td3">'+trad2[line]+'</td></tr>'
			
			data += 
			'\n<tr><td nowrap>CONRADIN VON LAUER</td>'+
			'<td>1990</td>'+
			'<td class="td3">'+trad3[line]+'</td></tr>'
			
			data += 
			'\n<tr><td nowrap>MA KOU</td>'+
			'<td>1984</td>'+
			'<td class="td3">'+trad4[line]+'</td></tr>'
			
			data += 
			'\n<tr><td nowrap>ALBERT DE POUVOURVILLE</td>'+
			'<td>1999</td>'+
			'<td class="td3">'+trad5[line]+'</td></tr>'
			
			data += 
			'\n<tr><td nowrap>LEON WIEGER</td>'+
			'<td>1913</td>'+
			'<td class="td3">'+trad6[line]+'</td></tr>'
	
			data += 
			'\n<tr><td nowrap>OLIVIER NYSSEN</td>'+
			'<td>2022</td>'+
			'<td class="td3">'+trad1[line]+'</td></tr>'
			
			data += 
			'\n<tr><td nowrap>JAN DUYVENDAK</td>'+
			'<td>1949</td>'+
			'<td class="td3">'+trad8[line]+'</td></tr>'
	
	fs.writeFileSync(chap+'.html',intros+data+end, 'utf8');
	
}

