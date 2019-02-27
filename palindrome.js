function isPalindrome(cad){
    cad=cad.replace(/ /g,"");
    var arg=cad.split("");
    for(var i=0;i<arg.length;i++){
        if(arg[i]!=arg[arg.length-(i+1)]){
            return "no es palindromo";    
        }
    }
    return "Es palindromo";
}

function countLetters(cad){
    cad=cad.replace(/ /g,"");
    return cad.length;
}

function countVocals(cad){
    var vocals = ["a","e","i","o","u","A","E","I","O","U"];
    var arg = cad.split("");
    var cont=0;
    for(var i=0;i<arg.length;i++){
        for(var k=0;k<vocals.length-1;k++)
             if(arg[i]==vocals[k]){
                    cont++;
                }
    }
    return cont;
}

function countConsonant(cad){
    var vocals = ["a","e","i","o","u","A","E","I","O","U"];
    var arg = cad.split("");
    var cont=0;
    for(var i=0;i<arg.length;i++){
        for(var k=0;k<vocals.length-1;k++)
             if(arg[i]==vocals[k]){
                    cont++;
                }
    }
    cont=cad.length-cont;
    return cont;
}


//publicamos función
module.exports.isP =isPalindrome;
module.exports.countL =countLetters;
module.exports.countV =countVocals;
module.exports.countC =countConsonant;