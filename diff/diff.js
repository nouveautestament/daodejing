function parfait_alignement(s1, s2) {
    const lenS1 = s1.length;
    const lenS2 = s2.length;

    let alignS1 = [];
    let alignS2 = [];
    let i = 0, j = 0;

    // Parcourir les deux chaînes pour trouver l'alignement parfait
    while (i < lenS1 || j < lenS2) {
        if (i < lenS1 && j < lenS2 && s1[i] === s2[j]) {
            // Les caractères correspondent, on les aligne
            alignS1.push(s1[i]);
            alignS2.push(s2[j]);
            i++;
            j++;
        } else {
            if (i < lenS1 && (j >= lenS2 || s1[i] !== s2[j])) {
                // Caractère dans s1 ne correspond pas à celui de s2
                alignS1.push(s1[i]);
                alignS2.push('-');  // Marquer l'absence d'un caractère correspondant
                i++;
            }
            if (j < lenS2 && (i >= lenS1 || s1[i] !== s2[j])) {
                // Caractère dans s2 ne correspond pas à celui de s1
                alignS1.push('-');  // Marquer l'absence d'un caractère correspondant
                alignS2.push(s2[j]);
                j++;
            }
        }
    }

    // Retourner l'alignement
    return { alignS1, alignS2 };
}


fs = require('fs');

dao_ch1 =  fs.readFileSync('../DAO_CH1.txt',											'utf8').split('\n')
dao_ch2 =  fs.readFileSync('../DAO_CH2.txt',											'utf8').split('\n')

function clean(line)
{
	line = line.replace(/[。！，：∶；？123a-zA-Z\(\) ǎ]/gu, '');
	
	return line;
}


alldata = ''

for (line = 0 ; line != dao_ch1.length ; line++)
{
		
		chap = line + 1;
		dao_ch1_c = clean(dao_ch1[line])
		dao_ch2_c = clean(dao_ch2[line])
		
		alignement = parfait_alignement(dao_ch1_c, dao_ch2_c);
		
		//console.log(alignement)
		//console.log(alignement["alignS1"].join("</td><td>"))
		//console.log(alignement["alignS2"].join("</td><td>"))
		alldata += "<br><h2>CHAPITRE "+chap+"</h2><table>"
		alldata += "<tr><td>" + alignement["alignS1"].join("</td><td>") + "</td><tr>";
		alldata += "<tr><td>" + alignement["alignS2"].join("</td><td>") + "</td><tr>";
		alldata += "</table>"
}


fs.writeFileSync('diff.html',alldata, 'utf8');